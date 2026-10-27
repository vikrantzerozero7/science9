/* ==========================================================
   script.js — Multi-Config Mind Map Engine
   Uses CONFIG_REGISTRY + CONFIG_GLOBAL_MAP (from index.html)
   ========================================================== */
(function () {
    'use strict';

    document.documentElement.classList.add('js-loading');

    const DEFAULT_LAYOUT_CONFIG = {
        column_x: { subject: 150, chapter: 600, topic: 1100, concept: 1600, description: 2100 },
        spacing:  { parent_child_gap: 60, block_gap: 40 },
        colors: {
            subject: '#FFD700', chapter: '#FFB6C1',
            topic: '#98FB98', concept: '#FFA07A', description: '#DDA0DD'
        },
        box_sizes: { base_width: 200, base_height: 60 }
    };

    function getRegistry() {
        return window.CONFIG_REGISTRY || {};
    }

    function getGlobalMap() {
        return window.CONFIG_GLOBAL_MAP || window.__GLOBAL_NAME_MAP || {};
    }

    function getGlobalName(key) {
        const map = getGlobalMap();
        return map[key] || (key.toUpperCase() + '_CONFIG');
    }

    function resolveConfig(key) {
        if (!key) return null;
        // 1) discovery adapter
        if (window.__CONFIG_DISCOVERY && window.__CONFIG_DISCOVERY.findConfigById) {
            try {
                const c = window.__CONFIG_DISCOVERY.findConfigById(key);
                if (c && c.chapters) return c;
            } catch (e) { /* ignore */ }
        }
        // 2) direct global
        const g = getGlobalName(key);
        if (window[g] && window[g].chapters) return window[g];
        // 3) fallback KEY_CONFIG
        const alt = key.toUpperCase().replace(/-/g, '_') + '_CONFIG';
        if (window[alt] && window[alt].chapters) return window[alt];
        return null;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const container = document.getElementById('container');
        if (!container) { console.error('[script.js] #container not found'); return; }
        container.innerHTML = '';

        if (typeof window.LAYOUT_CONFIG === 'undefined' || !window.LAYOUT_CONFIG) {
            window.LAYOUT_CONFIG = JSON.parse(JSON.stringify(DEFAULT_LAYOUT_CONFIG));
        }
        const LAYOUT_CONFIG = window.LAYOUT_CONFIG;

        let currentLanguage = 'english';
        let currentSubject = null;
        let currentChapterFilter = null;
        let CURRENT_CONFIG = null;
        let states = { subject: false };
        let conceptStates = {};
        let nodes = {};
        let canvasWidth = 2500;
        let canvasHeight = 1000;
        let drawTimeout = null;

        const LAYOUT = {
            column_x: LAYOUT_CONFIG.column_x,
            spacing: LAYOUT_CONFIG.spacing,
            colors: LAYOUT_CONFIG.colors
        };

        function getLocalizedText(item) {
            if (!item) return '';
            if (typeof item === 'string') return item;
            if (typeof item === 'object') {
                if (currentLanguage === 'hindi' && item.hindi) return item.hindi;
                return item.english || item.display_name || '';
            }
            return String(item);
        }

        function getLocalizedDescription(concept) {
            if (!concept || !concept.description) return '';
            if (typeof concept.description === 'object') {
                if (currentLanguage === 'hindi' && concept.description.hindi) return concept.description.hindi;
                return concept.description.english || '';
            }
            return concept.description;
        }

        function getCurrentConfig() {
            if (!currentSubject) {
                const mainTabs = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
                const mainTab = mainTabs[window.__currentMainIndex || 0] || mainTabs[0];
                if (mainTab && mainTab.id) currentSubject = mainTab.id;
            }
            if (!currentSubject) return null;
            return resolveConfig(currentSubject);
        }

        function getFilteredChapters() {
            const cfg = getCurrentConfig();
            if (!cfg || !cfg.chapters) return [];
            if (!currentChapterFilter) return cfg.chapters;
            const filtered = cfg.chapters.filter(c => c.id === currentChapterFilter);
            return filtered.length ? filtered : cfg.chapters;
        }

        const measureCanvas = document.createElement('canvas');
        const measureCtx = measureCanvas.getContext('2d');

        function calculateBoxSize(text, type) {
            if (!text) text = '';
            const isDesc = type === 'description';
            const baseHeight = (LAYOUT_CONFIG.box_sizes && LAYOUT_CONFIG.box_sizes.base_height) || 60;
            measureCtx.font = isDesc ? "11px 'Inter', Arial" : "bold 13px 'Inter', Arial";
            const padding = 20, lineHeight = 18, maxWidth = isDesc ? 500 : 250;
            const lines = [];
            const paragraphs = String(text).split('\n');
            for (let p = 0; p < paragraphs.length; p++) {
                const para = paragraphs[p];
                if (para.trim() === '') { lines.push(''); continue; }
                const words = para.split(/\s+/);
                let current = '';
                for (let i = 0; i < words.length; i++) {
                    const test = current ? current + ' ' + words[i] : words[i];
                    if (measureCtx.measureText(test).width < maxWidth - padding) current = test;
                    else { if (current) lines.push(current); current = words[i]; }
                }
                if (current) lines.push(current);
            }
            if (!lines.length) lines.push(String(text));
            let maxLineWidth = 0;
            for (let i = 0; i < lines.length; i++) {
                const w = measureCtx.measureText(lines[i]).width;
                if (w > maxLineWidth) maxLineWidth = w;
            }
            return {
                width: Math.min(maxWidth, maxLineWidth + padding * 2),
                height: Math.max(baseHeight, lines.length * lineHeight + padding),
                lines: lines
            };
        }

        function initializeStates() {
            CURRENT_CONFIG = getCurrentConfig();
            states = { subject: false };
            conceptStates = {};
            if (!CURRENT_CONFIG || !CURRENT_CONFIG.chapters) return;
            const seen = new Set();
            getFilteredChapters().forEach(function (ch) {
                if (seen.has('ch:' + ch.id)) return;
                seen.add('ch:' + ch.id);
                states[ch.id] = false;
                (ch.topics || []).forEach(function (tp) {
                    if (seen.has('tp:' + tp.id)) return;
                    seen.add('tp:' + tp.id);
                    states[tp.id] = false;
                    (tp.concepts || []).forEach(function (c) {
                        if (seen.has('cc:' + c.id)) return;
                        seen.add('cc:' + c.id);
                        conceptStates[c.id] = false;
                    });
                });
            });
        }

        function hasChildren(node) {
            if (!CURRENT_CONFIG) return false;
            if (node.type === 'subject') return getFilteredChapters().length > 0;
            if (node.type === 'chapter') {
                const ch = getFilteredChapters().find(c => c.id === node.chapterId);
                return !!(ch && ch.topics && ch.topics.length);
            }
            if (node.type === 'topic') {
                for (const ch of getFilteredChapters()) {
                    const t = (ch.topics || []).find(tp => tp.id === node.topicId);
                    if (t) return !!(t.concepts && t.concepts.length);
                }
                return false;
            }
            if (node.type === 'concept') {
                for (const ch of getFilteredChapters()) {
                    for (const tp of (ch.topics || [])) {
                        for (const c of (tp.concepts || [])) {
                            if (c.id === node.conceptId) return !!getLocalizedDescription(c);
                        }
                    }
                }
                return false;
            }
            return false;
        }

        function isExpanded(node) {
            if (node.type === 'subject') return states.subject;
            if (node.type === 'chapter') return !!states[node.chapterId];
            if (node.type === 'topic') return !!states[node.topicId];
            if (node.type === 'concept') return !!conceptStates[node.conceptId];
            return false;
        }

        function calculateLayout() {
            CURRENT_CONFIG = getCurrentConfig();
            if (!CURRENT_CONFIG || !CURRENT_CONFIG.chapters) return;
            nodes = {};
            const COLUMN_X = LAYOUT.column_x;
            const GAP = LAYOUT.spacing.parent_child_gap;
            const BLOCK_GAP = LAYOUT.spacing.block_gap;
            let maxX = 0;
            const chapters = getFilteredChapters();
            const subjectSize = calculateBoxSize(getLocalizedText(CURRENT_CONFIG.title), 'subject');

            if (states.subject) {
                let totalHeight = 0;
                chapters.forEach(function (chapter) {
                    let chapterHeight = 0;
                    if (states[chapter.id] && chapter.topics) {
                        chapter.topics.forEach(function (topic) {
                            chapterHeight += GAP;
                            const topicSize = calculateBoxSize(getLocalizedText(topic.display_name), 'topic');
                            if (states[topic.id] && topic.concepts) {
                                let childH = 0;
                                topic.concepts.forEach(function (c) {
                                    childH += GAP;
                                    if (conceptStates[c.id]) {
                                        const d = calculateBoxSize(getLocalizedDescription(c), 'description');
                                        childH += d.height + 40;
                                    }
                                });
                                chapterHeight += Math.max(topicSize.height, childH);
                            } else chapterHeight += topicSize.height;
                        });
                    }
                    const chSize = calculateBoxSize(getLocalizedText(chapter.display_name), 'chapter');
                    totalHeight += Math.max(chSize.height, chapterHeight) + BLOCK_GAP;
                });
                canvasHeight = Math.max(600, totalHeight + 300);
            } else canvasHeight = 400;

            const subjectY = states.subject ? canvasHeight / 2 : 150;
            nodes.subject = {
                x: COLUMN_X.subject || 150, y: subjectY,
                width: subjectSize.width, height: subjectSize.height,
                text: getLocalizedText(CURRENT_CONFIG.title),
                color: LAYOUT.colors.subject || '#FFD700',
                type: 'subject'
            };
            maxX = Math.max(maxX, nodes.subject.x + subjectSize.width / 2);

            if (states.subject) {
                let yCursor = 100;
                chapters.forEach(function (chapter) {
                    let childrenHeight = 0;
                    if (states[chapter.id] && chapter.topics) {
                        childrenHeight = chapter.topics.reduce(function (total, topic) {
                            total += GAP;
                            const tSize = calculateBoxSize(getLocalizedText(topic.display_name), 'topic');
                            if (states[topic.id] && topic.concepts) {
                                const childH = topic.concepts.reduce(function (t, c) {
                                    t += GAP;
                                    if (conceptStates[c.id]) {
                                        const d = calculateBoxSize(getLocalizedDescription(c), 'description');
                                        t += d.height + 40;
                                    }
                                    return t;
                                }, 0);
                                total += Math.max(tSize.height, childH);
                            } else total += tSize.height;
                            return total;
                        }, 0);
                    }
                    const chSize = calculateBoxSize(getLocalizedText(chapter.display_name), 'chapter');
                    const blockHeight = Math.max(chSize.height, childrenHeight);
                    const parentY = yCursor + blockHeight / 2;
                    nodes[chapter.id] = {
                        x: COLUMN_X.chapter || 600, y: parentY,
                        width: chSize.width, height: chSize.height,
                        text: getLocalizedText(chapter.display_name),
                        color: chapter.color || LAYOUT.colors.chapter || '#FFB6C1',
                        type: 'chapter', chapterId: chapter.id
                    };
                    maxX = Math.max(maxX, nodes[chapter.id].x + chSize.width / 2);

                    if (states[chapter.id] && chapter.topics) {
                        let currentY = parentY - childrenHeight / 2 + GAP / 2;
                        chapter.topics.forEach(function (topic) {
                            let topicChildrenHeight = 0;
                            if (states[topic.id] && topic.concepts) {
                                topicChildrenHeight = topic.concepts.reduce(function (t, c) {
                                    t += GAP;
                                    if (conceptStates[c.id]) {
                                        const d = calculateBoxSize(getLocalizedDescription(c), 'description');
                                        t += d.height + 40;
                                    }
                                    return t;
                                }, 0);
                            }
                            const tSize = calculateBoxSize(getLocalizedText(topic.display_name), 'topic');
                            const tBlock = Math.max(tSize.height, topicChildrenHeight);
                            const topicY = currentY + tBlock / 2;
                            nodes[topic.id] = {
                                x: COLUMN_X.topic || 1100, y: topicY,
                                width: tSize.width, height: tSize.height,
                                text: getLocalizedText(topic.display_name),
                                color: LAYOUT.colors.topic || '#98FB98',
                                type: 'topic', topicId: topic.id, chapterId: chapter.id
                            };
                            maxX = Math.max(maxX, nodes[topic.id].x + tSize.width / 2);

                            if (states[topic.id] && topic.concepts) {
                                let topicCurY = topicY - topicChildrenHeight / 2 + GAP / 2;
                                topic.concepts.forEach(function (c) {
                                    const cSize = calculateBoxSize(getLocalizedText(c.display_name), 'concept');
                                    nodes[c.id] = {
                                        x: COLUMN_X.concept || 1600, y: topicCurY,
                                        width: cSize.width, height: cSize.height,
                                        text: getLocalizedText(c.display_name),
                                        color: LAYOUT.colors.concept || '#FFA07A',
                                        type: 'concept',
                                        conceptId: c.id, topicId: topic.id, chapterId: chapter.id
                                    };
                                    maxX = Math.max(maxX, nodes[c.id].x + cSize.width / 2);
                                    topicCurY += GAP;
                                    if (conceptStates[c.id]) {
                                        const descId = c.id + '_desc';
                                        const dSize = calculateBoxSize(getLocalizedDescription(c), 'description');
                                        const descX = COLUMN_X.description || 2100;
                                        let descY = nodes[c.id].y + nodes[c.id].height / 2 + dSize.height / 2 + 50;
                                        let attempts = 0;
                                        while (attempts < 15) {
                                            let collide = false;
                                            for (const id in nodes) {
                                                if (id === descId) continue;
                                                const o = nodes[id];
                                                if (!o) continue;
                                                if (Math.abs(descX - o.x) < (dSize.width / 2 + o.width / 2 + 15) &&
                                                    Math.abs(descY - o.y) < (dSize.height / 2 + o.height / 2 + 15)) {
                                                    collide = true; break;
                                                }
                                            }
                                            if (!collide) break;
                                            descY += dSize.height + 30;
                                            attempts++;
                                        }
                                        nodes[descId] = {
                                            x: descX, y: descY,
                                            width: dSize.width, height: dSize.height,
                                            text: getLocalizedDescription(c),
                                            color: LAYOUT.colors.description || '#DDA0DD',
                                            type: 'description', parentId: c.id, conceptId: c.id
                                        };
                                        maxX = Math.max(maxX, descX + dSize.width / 2);
                                        topicCurY += dSize.height + 50;
                                    }
                                });
                            }
                            currentY += tBlock + GAP;
                        });
                    }
                    yCursor += blockHeight + BLOCK_GAP;
                });
            }
            canvasWidth = Math.max(2500, maxX + 400);
        }

        function createCurvedPath(a, b) {
            if (!a || !b) return '';
            const sx = a.x + a.width / 2, sy = a.y;
            const ex = b.x - b.width / 2, ey = b.y;
            const dist = Math.abs(ex - sx);
            return 'M ' + sx + ' ' + sy + ' C ' + (sx + dist * 0.3) + ' ' + sy + ', ' + (ex - dist * 0.3) + ' ' + ey + ', ' + ex + ' ' + ey;
        }

        function generateSVG() {
            CURRENT_CONFIG = getCurrentConfig();
            if (!CURRENT_CONFIG || !CURRENT_CONFIG.chapters) {
                return '<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">' +
                    '<rect width="100%" height="100%" fill="#1a1f2e"/>' +
                    '<text x="400" y="200" text-anchor="middle" fill="#ff6b6b" font-size="18" font-family="Inter, Arial, sans-serif">' +
                    'No configuration loaded</text></svg>';
            }
            calculateLayout();
            const chapters = getFilteredChapters();
            let s = '<svg width="' + canvasWidth + '" height="' + canvasHeight + '" viewBox="0 0 ' + canvasWidth + ' ' + canvasHeight + '" xmlns="http://www.w3.org/2000/svg">';
            s += '<rect width="100%" height="100%" fill="#1a1f2e"/>';

            if (states.subject && nodes.subject) {
                chapters.forEach(function (ch) {
                    if (nodes[ch.id]) {
                        const p = createCurvedPath(nodes.subject, nodes[ch.id]);
                        if (p) s += '<g class="connection"><path d="' + p + '" stroke="#8f97b3" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>';
                    }
                });
                chapters.forEach(function (ch) {
                    if (!states[ch.id] || !nodes[ch.id] || !ch.topics) return;
                    ch.topics.forEach(function (tp) {
                        if (nodes[tp.id]) {
                            const p = createCurvedPath(nodes[ch.id], nodes[tp.id]);
                            if (p) s += '<g class="connection"><path d="' + p + '" stroke="#8f97b3" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>';
                        }
                        if (states[tp.id] && tp.concepts) {
                            tp.concepts.forEach(function (c) {
                                if (!nodes[c.id]) return;
                                const p = createCurvedPath(nodes[tp.id], nodes[c.id]);
                                if (p) s += '<g class="connection"><path d="' + p + '" stroke="#8f97b3" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>';
                                if (conceptStates[c.id] && nodes[c.id + '_desc']) {
                                    const dp = createCurvedPath(nodes[c.id], nodes[c.id + '_desc']);
                                    if (dp) s += '<g class="connection"><path d="' + dp + '" stroke="#8f97b3" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>';
                                }
                            });
                        }
                    });
                });
            }

            Object.keys(nodes).forEach(function (id) {
                const n = nodes[id];
                if (!n) return;
                const x = n.x - n.width / 2;
                const y = n.y - n.height / 2;
                const rx = Math.min(15, n.height * 0.2);
                let dataId = id;
                if (n.type === 'subject') dataId = 'root';
                else if (n.type === 'chapter') dataId = n.chapterId;
                else if (n.type === 'topic') dataId = n.topicId;
                else if (n.type === 'concept') dataId = n.conceptId;
                else if (n.type === 'description') dataId = n.conceptId + '_desc';

                s += '<g class="node" data-id="' + dataId + '" data-type="' + n.type + '">';
                if (hasChildren(n) && !isExpanded(n)) {
                    for (let i = 2; i >= 0; i--) {
                        const backX = x - i * 2;
                        const backY = y + i * 4;
                        const backW = n.width + i * 4;
                        s += '<rect x="' + backX + '" y="' + backY + '" width="' + backW + '" height="' + n.height + '" rx="' + rx + '" fill="' + n.color + '40" stroke="' + n.color + '" stroke-width="1.5"/>';
                    }
                }
                s += '<rect x="' + x + '" y="' + y + '" width="' + n.width + '" height="' + n.height + '" rx="' + rx + '" fill="' + n.color + '" stroke="#252b3d" stroke-width="2"/>';
                const size = calculateBoxSize(n.text, n.type);
                const lines = size.lines;
                const lineHeight = 18;
                const startY = n.y - ((lines.length - 1) * lineHeight) / 2;
                const textX = x + 12;
                lines.forEach(function (line, i) {
                    const ty = startY + i * lineHeight;
                    const esc = String(line).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    s += '<text x="' + textX + '" y="' + ty + '" text-anchor="start" dominant-baseline="middle" ' +
                        'font-family="Inter, Arial, sans-serif" font-size="' + (n.type === 'description' ? '11' : '13') + '" ' +
                        'font-weight="600" fill="#000">' + esc + '</text>';
                });
                s += '</g>';
            });
            s += '</svg>';
            return s;
        }

        function draw() {
            if (drawTimeout) cancelAnimationFrame(drawTimeout);
            drawTimeout = requestAnimationFrame(function () {
                CURRENT_CONFIG = getCurrentConfig();
                if (!CURRENT_CONFIG || !CURRENT_CONFIG.chapters) {
                    container.innerHTML = '<div style="color: red; padding: 20px; text-align: center; font-family: Inter, Arial, sans-serif;">' +
                        '<h3>⚠️ No configuration loaded</h3>' +
                        '<p>Subject: ' + (currentSubject || '(none)') + '</p></div>';
                    return;
                }
                container.innerHTML = generateSVG();
                const svg = container.querySelector('svg');
                if (!svg) return;
                svg.addEventListener('dblclick', function (e) {
                    const target = e.target.closest('.node');
                    if (!target) return;
                    const id = target.dataset.id;
                    const type = target.dataset.type;
                    if (type === 'subject' && id === 'root') {
                        states.subject = !states.subject;
                        if (!states.subject) {
                            getFilteredChapters().forEach(function (ch) {
                                states[ch.id] = false;
                                (ch.topics || []).forEach(function (tp) {
                                    states[tp.id] = false;
                                    (tp.concepts || []).forEach(function (c) { conceptStates[c.id] = false; });
                                });
                            });
                        }
                    } else if (type === 'chapter') {
                        states[id] = !states[id];
                        if (!states[id]) {
                            const ch = getFilteredChapters().find(c => c.id === id);
                            (ch && ch.topics || []).forEach(function (tp) {
                                states[tp.id] = false;
                                (tp.concepts || []).forEach(function (c) { conceptStates[c.id] = false; });
                            });
                        }
                    } else if (type === 'topic') {
                        states[id] = !states[id];
                        if (!states[id]) {
                            for (const ch of getFilteredChapters()) {
                                const tp = (ch.topics || []).find(t => t.id === id);
                                if (tp) (tp.concepts || []).forEach(function (c) { conceptStates[c.id] = false; });
                            }
                        }
                    } else if (type === 'concept') {
                        conceptStates[id] = !conceptStates[id];
                    } else if (type === 'description') {
                        const pid = id.replace('_desc', '');
                        conceptStates[pid] = false;
                    }
                    draw();
                    updateContentInfo();
                });
            });
        }

        function updateContentInfo() {
            const div = document.getElementById('content-info');
            if (!div) return;
            CURRENT_CONFIG = getCurrentConfig();
            if (!CURRENT_CONFIG || !CURRENT_CONFIG.chapters) { div.innerHTML = '<strong>Loading…</strong>'; return; }
            const chapters = getFilteredChapters();
            let topics = 0, concepts = 0;
            chapters.forEach(function (ch) {
                topics += (ch.topics || []).length;
                (ch.topics || []).forEach(function (tp) { concepts += (tp.concepts || []).length; });
            });
            const title = getLocalizedText(CURRENT_CONFIG.title) || 'Subject';
            const langName = currentLanguage === 'english' ? 'English' : 'हिंदी';
            const filterNote = currentChapterFilter ? '<br><em style="color:#ffd966;">Filtered by chapter</em>' : '';
            div.innerHTML = '<strong>' + title + ' (' + langName + ')</strong>' + filterNote + '<br>' +
                '<strong>Content:</strong><br>' +
                '- Chapters: ' + chapters.length + '<br>' +
                '- Topics: ' + topics + '<br>' +
                '- Concepts: ' + concepts + '<br>' +
                '<hr><div style="background:#2d3349; padding:8px; border-radius:4px; color:#ffd966;">' +
                '✓ Double-click to expand</div>';
        }

        function applyLanguage(lang) {
            currentLanguage = lang;
            document.body.classList.toggle('hindi-active', lang === 'hindi');
            const badge = document.getElementById('language-badge');
            if (badge) badge.textContent = lang === 'hindi' ? 'हिंदी' : 'English';
            const ins = document.getElementById('instructions-content');
            if (ins) {
                ins.innerHTML = lang === 'hindi'
                    ? '• <strong>डबल-क्लिक</strong> करें subject पर सब दिखाने/छिपाने के लिए<br>• <strong>डबल-क्लिक</strong> करें chapter पर expand/collapse के लिए<br>• <strong>डबल-क्लिक</strong> करें topic पर expand/collapse के लिए<br>• <strong>डबल-क्लिक</strong> करें concept पर details दिखाने/छिपाने के लिए'
                    : '• <strong>Double-click</strong> on subject to show/hide everything<br>• <strong>Double-click</strong> on chapter to expand/collapse<br>• <strong>Double-click</strong> on topic to expand/collapse<br>• <strong>Double-click</strong> on concept to show/hide details';
            }
            draw();
            updateContentInfo();
        }

        document.querySelectorAll('input[name="language"]').forEach(function (r) {
            if (r.checked) currentLanguage = r.value;
            r.addEventListener('change', function () {
                if (this.checked) {
                    applyLanguage(this.value);
                    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: this.value } }));
                }
            });
        });

        window.draw = draw;
        window.updateContentInfo = updateContentInfo;

        window.setCurrentSubject = function (subjectId) {
            if (!subjectId) return;
            currentSubject = subjectId;
            currentChapterFilter = null;
            window.__currentSubjectKey = subjectId;
            window.__currentChapterFilter = null;
            setTimeout(function () {
                initializeStates();
                states.subject = true;
                draw();
                updateContentInfo();
            }, 20);
        };

        window.setChapterFilter = function (chapterId) {
            currentChapterFilter = chapterId || null;
            window.__currentChapterFilter = chapterId || null;
            setTimeout(function () {
                initializeStates();
                states.subject = true;
                draw();
                updateContentInfo();
                document.dispatchEvent(new CustomEvent('subjectChanged', { detail: { chapterFilter: currentChapterFilter } }));
            }, 20);
        };

        function bootDraw() {
            try {
                const params = new URLSearchParams(window.location.search);
                const qs = params.get('subject');
                if (qs && resolveConfig(qs)) currentSubject = qs;
            } catch (e) { /* ignore */ }
            if (!currentSubject) {
                const mainTabs = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
                const mainTab = mainTabs[window.__currentMainIndex || 0] || mainTabs[0];
                if (mainTab && mainTab.id) currentSubject = mainTab.id;
            }
            window.__currentSubjectKey = currentSubject || null;
            initializeStates();
            states.subject = true;
            draw();
            updateContentInfo();
            setTimeout(function () {
                const sb = document.getElementById('sidebar');
                if (sb) sb.classList.add('transitions-ready');
                document.documentElement.classList.remove('js-loading');
                document.documentElement.classList.add('js-loaded');
            }, 100);
        }

        let bootAttempts = 0;
        function tryBoot() {
            bootAttempts++;
            const cfg = getCurrentConfig();
            if (cfg && cfg.chapters) bootDraw();
            else if (bootAttempts < 100) setTimeout(tryBoot, 200);
            else {
                document.documentElement.classList.remove('js-loading');
                document.documentElement.classList.add('js-loaded');
            }
        }
        tryBoot();

        window.addEventListener('allConfigsReady', function () {
            if (!CURRENT_CONFIG || !CURRENT_CONFIG.chapters) setTimeout(bootDraw, 100);
        });
    });
})();
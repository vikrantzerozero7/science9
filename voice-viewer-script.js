/* voice-viewer-script.js — FINAL */
(function () {
    'use strict';

    console.log('[Voice] Script loading...');

    var synth = window.speechSynthesis || null;
    var currentUtterance = null;
    var speakSeq = 0;
    var leftBtnEl = null;
    var rightBtnEl = null;
    var cbLeftBtnEl = null;
    var cbRightBtnEl = null;

    function getPageLanguage(pageEl) {
        if (!pageEl) return 'english';
        var activeBtn = pageEl.querySelector('.book-lang-btn.active');
        if (activeBtn && activeBtn.getAttribute('data-lang') === 'hindi') return 'hindi';
        return 'english';
    }

    function speechifySymbols(text, lang) {
        if (!text) return '';
        var isHi = (lang === 'hindi');
        var W = isHi ? {
            plus: ' प्लस ', minus: ' माइनस ', times: ' गुणा ', divide: ' बटा ',
            equals: ' बराबर ', notEquals: ' बराबर नहीं ', approx: ' लगभग ',
            less: ' से कम ', greater: ' से ज़्यादा ',
            lessEq: ' से कम या बराबर ', greaterEq: ' से ज़्यादा या बराबर ',
            plusMinus: ' प्लस माइनस ', sqrt: ' square root ', cubeRoot: ' cube root ',
            pi: ' पाई ', infinity: ' अनंत ', degree: ' डिग्री ', percent: ' प्रतिशत ',
            per: ' प्रति ', sum: ' का योग ', integral: ' का समाकल ',
            delta: ' डेल्टा ', theta: ' थीटा ', alpha: ' अल्फा ', beta: ' बीटा ',
            gamma: ' गामा ', mu: ' म्यू ', sigma: ' सिग्मा ', omega: ' ओमेगा ',
            lambda: ' लैम्ब्डा ',
            squared: ' square ', cubed: ' cube ', fourth: ' to the fourth ',
            toPower: function (n) { return ' to the power ' + n + ' '; },
            rightArrow: ' से ', leftArrow: ' से ', arrow: ' से '
        } : {
            plus: ' plus ', minus: ' minus ', times: ' times ', divide: ' divided by ',
            equals: ' equals ', notEquals: ' not equal to ', approx: ' approximately ',
            less: ' less than ', greater: ' greater than ',
            lessEq: ' less than or equal to ', greaterEq: ' greater than or equal to ',
            plusMinus: ' plus or minus ', sqrt: ' square root of ', cubeRoot: ' cube root of ',
            pi: ' pi ', infinity: ' infinity ', degree: ' degrees ', percent: ' percent ',
            per: ' per ', sum: ' sum of ', integral: ' integral of ',
            delta: ' delta ', theta: ' theta ', alpha: ' alpha ', beta: ' beta ',
            gamma: ' gamma ', mu: ' mu ', sigma: ' sigma ', omega: ' omega ',
            lambda: ' lambda ',
            squared: ' squared ', cubed: ' cubed ', fourth: ' to the fourth ',
            toPower: function (n) { return ' to the power ' + n + ' '; },
            rightArrow: ' to ', leftArrow: ' from ', arrow: ' to '
        };
        return text
            .replace(/\b(km|m|cm|mm|kg|g|ml|l|hr|min|sec)\s*\/\s*(hr|h|min|s|sec)\b/gi, '$1' + W.per + '$2')
            .replace(/≠/g, W.notEquals).replace(/≈/g, W.approx)
            .replace(/≤/g, W.lessEq).replace(/≥/g, W.greaterEq)
            .replace(/±/g, W.plusMinus)
            .replace(/×|✕|✖/g, W.times).replace(/÷/g, W.divide)
            .replace(/√/g, W.sqrt).replace(/∛/g, W.cubeRoot)
            .replace(/∞/g, W.infinity).replace(/π/g, W.pi)
            .replace(/°/g, W.degree).replace(/%/g, W.percent)
            .replace(/∑/g, W.sum).replace(/∫/g, W.integral)
            .replace(/Δ|δ/g, W.delta).replace(/θ/g, W.theta)
            .replace(/α/g, W.alpha).replace(/β/g, W.beta)
            .replace(/γ/g, W.gamma).replace(/μ/g, W.mu)
            .replace(/σ/g, W.sigma).replace(/ω/g, W.omega)
            .replace(/λ/g, W.lambda)
            .replace(/²/g, W.squared).replace(/³/g, W.cubed).replace(/⁴/g, W.fourth)
            .replace(/\^2\b/g, W.squared).replace(/\^3\b/g, W.cubed)
            .replace(/\^(\d+)/g, function (_, n) { return W.toPower(n); })
            .replace(/→|➜|⇒/g, W.rightArrow)
            .replace(/←|⇐/g, W.leftArrow)
            .replace(/↔/g, W.arrow)
            .replace(/\s*\+\s*/g, W.plus)
            .replace(/\s*[−–]\s*/g, W.minus)
            .replace(/\s*=\s*/g, W.equals)
            .replace(/\s*<\s*/g, W.less)
            .replace(/\s*>\s*/g, W.greater)
            .replace(/\s*\/\s*/g, W.divide)
            .replace(/·|•/g, W.times)
            .replace(/[\u201C\u201D\u2018\u2019]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function splitByScript(text) {
        if (!text) return [];
        var generalHinglishWords = new Set([
            "a","an","the","is","am","are","was","were","be","been",
            "ka","ki","ke","ko","mein","hai","hain","karta","karti","karte",
            "hota","hoti","hote","se","par","aur","ya","yeh","woh","kya",
            "kaise","kyun","liye","bina","saath","prakar","niyam","siddhant",
            "karan","upyog","bhav","mul","dhan","labh","hani","wala","wale",
            "wali","sui","ghanta","ghoomti","prati","gati","badhne","ghatne",
            "karna","karne","sakte","sakta","sakti","jayega","jayegi","hoga",
            "hogi","diya","gaya","gayi","padta","padti","banta","banti",
            "nikal","nikle","nikalti","milta","milti","dikhta","dikhti",
            "lagta","lagti","kahte","kehte","bolte","chalta","chalti","rehta",
            "rehti","pattern","line","point","value","system","method",
            "example","problem","question","answer","formula","calculate",
            "find","number","total","time","day","year","month","hour",
            "minute","second","meter","weight","length","speed","distance",
            "current","voltage","power","energy","phase","circuit","load",
            "supply","input","output","test","measure","reading","scale",
            "error","factor","frequency","wave","signal","type","part","use",
            "and","or","but","for","with","without","from","to","of","in","on"
        ]);
        var re = /([\u0900-\u097F][\u0900-\u097F\s.,;:!?।'"()\-–—]*)|([A-Za-z0-9][A-Za-z0-9\s.,;:!?।'"()\-–—]*)/g;
        var rawChunks = [];
        var m;
        while ((m = re.exec(text)) !== null) {
            if (m[1]) rawChunks.push({ script: 'devanagari', text: m[1].trim() });
            else if (m[2]) rawChunks.push({ script: 'latin', text: m[2].trim() });
        }
        var finalChunks = [];
        for (var i = 0; i < rawChunks.length; i++) {
            var chunk = rawChunks[i];
            if (chunk.script === 'devanagari') { finalChunks.push(chunk); continue; }
            var words = chunk.text.split(/\s+/);
            var currentSentence = [];
            var currentType = null;
            for (var j = 0; j < words.length; j++) {
                var rawWord = words[j];
                var cleanWord = rawWord.toLowerCase().replace(/[^a-z0-9]/g, '');
                if (!cleanWord) { if (currentSentence.length > 0) currentSentence.push(rawWord); continue; }
                var isGeneral = generalHinglishWords.has(cleanWord);
                var wordType = isGeneral ? 'hinglish' : 'english';
                if (currentType === null) { currentType = wordType; currentSentence.push(rawWord); }
                else if (currentType === wordType) currentSentence.push(rawWord);
                else {
                    finalChunks.push({ script: currentType, text: currentSentence.join(' ') });
                    currentSentence = [rawWord]; currentType = wordType;
                }
            }
            if (currentSentence.length > 0) finalChunks.push({ script: currentType, text: currentSentence.join(' ') });
        }
        var merged = [];
        for (var k = 0; k < finalChunks.length; k++) {
            var c = finalChunks[k];
            if (!c.text) continue;
            var last = merged[merged.length - 1];
            if (last && last.script === c.script) last.text = (last.text + ' ' + c.text).replace(/\s+/g, ' ').trim();
            else merged.push({ script: c.script, text: c.text });
        }
        return merged;
    }

    var FEMALE_HINTS = ['swara','heera','kalpana','neerja','aditi','raveena','lekha','veena','priya','google hindi','microsoft kalpana','microsoft swara','microsoft heera','female','woman','girl','zira','hazel','susan','eva','linda','catherine','samantha','karen','moira','tessa','fiona','victoria','allison','ava','serena','siri','google uk english female','google us english female','ivy','joanna','salli','kimberly'];
    function isFemaleVoice(v) {
        if (!v || !v.name) return false;
        var n = v.name.toLowerCase();
        for (var i = 0; i < FEMALE_HINTS.length; i++) if (n.indexOf(FEMALE_HINTS[i]) !== -1) return true;
        return false;
    }
    function langMatches(v, t) {
        if (!v) return false;
        v = v.toLowerCase().replace(/_/g, '-');
        t = t.toLowerCase();
        return v === t || v.indexOf(t + '-') === 0;
    }
    var voiceCache = { hindi: null, english: null };
    function pickFemaleVoice(lang) {
        if (!synth) return null;
        var key = (lang === 'hindi') ? 'hindi' : 'english';
        if (voiceCache[key]) return voiceCache[key];
        var voices = synth.getVoices() || [];
        if (!voices.length) return null;
        var target = (lang === 'hindi') ? 'hi' : 'en';
        var sameLang = voices.filter(function (v) { return langMatches(v.lang, target); });
        if (!sameLang.length) sameLang = voices.slice();
        var branded = sameLang.filter(function (v) { var n = (v.name || '').toLowerCase(); return isFemaleVoice(v) && (n.indexOf('microsoft') !== -1 || n.indexOf('google') !== -1); });
        var localBranded = branded.filter(function (v) { return v.localService; });
        if (localBranded.length) { voiceCache[key] = localBranded[0]; return localBranded[0]; }
        var hintedLocal = sameLang.filter(function (v) { return isFemaleVoice(v) && v.localService; });
        if (hintedLocal.length) { voiceCache[key] = hintedLocal[0]; return hintedLocal[0]; }
        if (branded.length) { voiceCache[key] = branded[0]; return branded[0]; }
        var hinted = sameLang.filter(isFemaleVoice);
        if (hinted.length) { voiceCache[key] = hinted[0]; return hinted[0]; }
        var explicit = sameLang.filter(function (v) { return (v.name || '').toLowerCase().indexOf('female') !== -1; });
        if (explicit.length) { voiceCache[key] = explicit[0]; return explicit[0]; }
        var fallback = sameLang.slice().sort(function (a, b) { return (a.name || '').localeCompare(b.name || ''); });
        voiceCache[key] = fallback[0] || voices[0] || null;
        return voiceCache[key];
    }
    if (synth && typeof synth.onvoiceschanged !== 'undefined') {
        synth.onvoiceschanged = function () { voiceCache.hindi = null; voiceCache.english = null; };
    }

    function pageHasConcept(pageEl) {
        if (!pageEl) return false;
        if (pageEl.querySelector('.syllabus-page')) return false;
        var t = pageEl.querySelector('.book-concept-title');
        if (!t || !t.textContent.trim()) return false;
        return true;
    }
    function extractMainCardText(pageEl) {
        if (!pageHasConcept(pageEl)) return '';
        var title = pageEl.querySelector('.book-concept-title');
        var body = pageEl.querySelector('.book-concept-body');
        var lang = getPageLanguage(pageEl);
        var parts = [];
        if (title && title.textContent.trim()) {
            var tt = speechifySymbols(title.textContent.trim(), lang);
            if (tt) parts.push(tt);
        }
        if (body && body.textContent.trim()) {
            var bt = body.textContent.replace(/\r\n/g, '\n').replace(/\n{2,}/g, '। ').replace(/\n/g, ' ').replace(/\.\.+/g, '.').trim();
            bt = speechifySymbols(bt, lang);
            if (bt.length > 3000) bt = bt.slice(0, 3000).replace(/\s+\S*$/, '') + '।';
            if (bt && !/[।.!?]$/.test(bt)) bt += '।';
            if (bt) parts.push(bt);
        }
        return parts.join('। ');
    }

    function stopSpeaking(reason) {
        speakSeq++;
        if (synth && (synth.speaking || synth.pending)) { try { synth.cancel(); } catch (e) {} }
        currentUtterance = null;
        [leftBtnEl, rightBtnEl, cbLeftBtnEl, cbRightBtnEl].forEach(function (b) { if (b) b.classList.remove('vcv-speaking'); });
    }

    function speakChunks(chunks, btnEl, onDone, pageLang) {
        var idx = 0, mySeq = speakSeq;
        var keepAliveTimer = null, fallbackTimer = null;
        function clearTimers() {
            if (keepAliveTimer) { clearInterval(keepAliveTimer); keepAliveTimer = null; }
            if (fallbackTimer) { clearTimeout(fallbackTimer); fallbackTimer = null; }
        }
        function capChunkSize(list, maxLen) {
            var out = [];
            for (var i = 0; i < list.length; i++) {
                var c = list[i], text = c.text;
                if (text.length <= maxLen) { out.push(c); continue; }
                var pieces = text.split(/(?<=[।.!?])\s+/), buf = '';
                for (var p = 0; p < pieces.length; p++) {
                    var piece = pieces[p];
                    if (!piece) continue;
                    if ((buf + ' ' + piece).trim().length > maxLen && buf) {
                        out.push({ script: c.script, text: buf.trim() });
                        buf = piece;
                    } else buf = (buf ? buf + ' ' : '') + piece;
                }
                if (buf.trim()) out.push({ script: c.script, text: buf.trim() });
            }
            return out;
        }
        chunks = capChunkSize(chunks, 200);
        function next() {
            if (mySeq !== speakSeq) { clearTimers(); return; }
            if (idx >= chunks.length) { clearTimers(); if (onDone) onDone(); return; }
            var chunk = chunks[idx++], chunkLang;
            if (pageLang === 'english') chunkLang = 'english';
            else {
                if (chunk.script === 'devanagari' || chunk.script === 'hinglish') chunkLang = 'hindi';
                else chunkLang = 'english';
            }
            var voice = pickFemaleVoice(chunkLang);
            if (!voice && synth.getVoices().length === 0) { idx--; setTimeout(next, 300); return; }
            var u = new SpeechSynthesisUtterance(chunk.text);
            u.rate = chunkLang === 'hindi' ? 1.05 : 1.15;
            u.pitch = chunkLang === 'hindi' ? 1.0 : 1.05;
            u.volume = 1.0;
            if (voice) { u.voice = voice; u.lang = chunkLang === 'hindi' ? 'hi-IN' : (voice.lang || 'en-US'); }
            else u.lang = chunkLang === 'hindi' ? 'hi-IN' : 'en-US';
            var finished = false, endFired = false;
            clearTimers();
            keepAliveTimer = setInterval(function () {
                if (finished || mySeq !== speakSeq) { clearTimers(); return; }
                if (synth.speaking) { try { synth.resume(); synth.pause(); synth.resume(); } catch (e) {} }
            }, 5000);
            var estimatedMs = Math.max(4000, chunk.text.length * 120);
            fallbackTimer = setTimeout(function () {
                if (finished || mySeq !== speakSeq) return;
                finished = true; clearTimers(); next();
            }, estimatedMs + 8000);
            u.onend = function () { endFired = true; if (finished || mySeq !== speakSeq) return; finished = true; clearTimers(); next(); };
            u.onerror = function () { if (finished || mySeq !== speakSeq) return; finished = true; clearTimers(); next(); };
            currentUtterance = u;
            synth.speak(u);
        }
        next();
    }

    function speakPage(pageEl, btnEl) {
        if (!synth || !pageEl || !pageHasConcept(pageEl)) return;
        var text = extractMainCardText(pageEl);
        if (!text) return;
        var pageLang = getPageLanguage(pageEl);
        try { synth.cancel(); } catch (e) {}
        var mySeq = ++speakSeq;
        var chunks = splitByScript(text);
        if (!chunks.length) return;
        if (btnEl) btnEl.classList.add('vcv-speaking');
        var safetyMs = Math.max(180000, Math.ceil(text.length / 140) * 25000 + 120000);
        var safetyTimer = setTimeout(function () {
            if (mySeq !== speakSeq) return;
            if (synth && (synth.speaking || synth.pending)) {
                safetyTimer = setTimeout(function () { stopSpeaking('safety'); }, 60000);
                return;
            }
            stopSpeaking('safety');
        }, safetyMs);
        speakChunks(chunks, btnEl, function () {
            if (mySeq !== speakSeq) return;
            clearTimeout(safetyTimer);
            if (btnEl) btnEl.classList.remove('vcv-speaking');
            currentUtterance = null;
        }, pageLang);
    }

    function makePageButton(pageId, label) {
        var btn = document.createElement('button');
        btn.className = 'vcv-page-speak-btn';
        btn.type = 'button';
        btn.innerHTML = '🔊';
        btn.title = 'Speak ' + label;
        btn.dataset.pageId = pageId;
        var lastClick = 0;
        btn.addEventListener('click', function (e) {
            e.stopPropagation(); e.preventDefault();
            var now = Date.now();
            if (now - lastClick < 500) return;
            lastClick = now;
            if (synth && synth.speaking) { stopSpeaking('user-click'); return; }
            var pageEl = document.getElementById(pageId);
            if (pageEl) speakPage(pageEl, btn);
        });
        return btn;
    }
    function attachButtonToPage(pageEl, pageId, label, refSetter) {
        if (!pageEl) return;
        if (pageEl.querySelector('.vcv-page-speak-btn')) return;
        if (!pageHasConcept(pageEl)) return;
        var btn = makePageButton(pageId, label);
        pageEl.appendChild(btn);
        refSetter(btn);
    }
    function createAllPageButtons() {
        attachButtonToPage(document.getElementById('bookLeftPage'), 'bookLeftPage', 'left', function (b) { leftBtnEl = b; });
        attachButtonToPage(document.getElementById('bookRightPage'), 'bookRightPage', 'right', function (b) { rightBtnEl = b; });
        attachButtonToPage(document.getElementById('cbLeftPage'), 'cbLeftPage', 'left', function (b) { cbLeftBtnEl = b; });
        attachButtonToPage(document.getElementById('cbRightPage'), 'cbRightPage', 'right', function (b) { cbRightBtnEl = b; });
    }

    function initAll() {
        if (!document.body) { setTimeout(initAll, 100); return; }
        createAllPageButtons();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(initAll, 50); setTimeout(initAll, 600); setTimeout(initAll, 1500);
        });
    } else {
        setTimeout(initAll, 50); setTimeout(initAll, 600); setTimeout(initAll, 1500);
    }
    window.addEventListener('load', function () { setTimeout(initAll, 300); });

    var _pc = null;
    document.addEventListener('book:pagechange', function () {
        if (_pc) clearTimeout(_pc);
        _pc = setTimeout(function () { _pc = null; if (synth && synth.speaking) stopSpeaking('page-change'); createAllPageButtons(); }, 300);
    });
    var _lc = null;
    document.addEventListener('languagechange', function () {
        if (_lc) clearTimeout(_lc);
        _lc = setTimeout(function () { _lc = null; if (synth && synth.speaking) stopSpeaking('language-change'); createAllPageButtons(); }, 300);
    });

    window.VoiceConceptViewer = {
        speakPage: function () { var rp = document.getElementById('bookRightPage'); if (rp) speakPage(rp, rightBtnEl); },
        speakLeft: function () { var lp = document.getElementById('bookLeftPage'); if (lp) speakPage(lp, leftBtnEl); },
        speakRight: function () { var rp = document.getElementById('bookRightPage'); if (rp) speakPage(rp, rightBtnEl); },
        stop: function () { stopSpeaking('api'); },
        getVoices: function () { return synth ? synth.getVoices() : []; },
        refreshButtons: createAllPageButtons,
        speechifySymbols: speechifySymbols,
        splitByScript: splitByScript,
        clearVoiceCache: function () { voiceCache.hindi = null; voiceCache.english = null; },
        setRate: function (hi, en) { window.__vcvRates = { hindi: hi || 1.05, english: en || 1.15 }; }
    };
})();
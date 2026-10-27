/* sidebar.js — Sidebar bootstrap */
(function () {
    'use strict';

    function renderNavigation() {
        const navContainer = document.getElementById('navigation-content');
        if (!navContainer) return;

        const mainTabs = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
        const currentKey = window.__currentSubjectKey || (mainTabs[0] && mainTabs[0].id);
        const isHindi = document.body.classList.contains('hindi-active');

        const label = function (obj) {
            if (!obj) return '';
            if (typeof obj === 'string') return obj;
            return (isHindi && obj.hindi) ? obj.hindi : (obj.english || '');
        };

        let subjectsHtml = '';
        mainTabs.forEach(function (tab) {
            const active = (tab.id === currentKey) ? ' active' : '';
            subjectsHtml += '<a href="#" class="nav-link nav-subject' + active + '" data-subject="' + tab.id + '">' + label(tab.name) + '</a>';
        });

        navContainer.innerHTML =
            '<div class="nav-links-wrapper">' +
                '<div class="nav-section">' +
                    '<h4 class="nav-section-title">' + (isHindi ? '📂 विषय' : '📂 Subjects') + '</h4>' +
                    (subjectsHtml || '<div style="font-size:12px;color:#888;padding:6px;">No subjects</div>') +
                '</div>' +
                '<div class="nav-section">' +
                    '<h4 class="nav-section-title">' + (isHindi ? '🏠 मुख्य' : '🏠 Main') + '</h4>' +
                    '<a href="../index.html" class="nav-link">' + (isHindi ? '🏠 होम' : '🏠 Home') + '</a>' +
                '</div>' +
            '</div>';

        navContainer.querySelectorAll('.nav-subject').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                const subjectId = this.dataset.subject;
                if (!subjectId) return;
                if (window.Upbar && window.Upbar.selectSubject) {
                    window.Upbar.selectSubject(subjectId);
                } else {
                    window.__currentSubjectKey = subjectId;
                    if (window.setCurrentSubject) window.setCurrentSubject(subjectId);
                    if (window.__onSubjectChanged) window.__onSubjectChanged(subjectId);
                }
                renderNavigation();
            });
        });
    }

    function injectEarlyHideStyle() {
        if (document.getElementById('sidebar-initial-collapse')) return;
        const style = document.createElement('style');
        style.id = 'sidebar-initial-collapse';
        style.textContent =
            '#sidebar { width: 0 !important; min-width: 0 !important; overflow: hidden !important; }' +
            '#sidebar > * { visibility: hidden !important; }';
        document.head.appendChild(style);
    }

    function removeEarlyHideStyle() {
        const s = document.getElementById('sidebar-initial-collapse');
        if (s && s.parentNode) s.parentNode.removeChild(s);
    }

    function collapseSilently() {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('sidebarToggle');
        if (!sidebar || !toggle) return;
        const shouldBeCollapsed = window.__SIDEBAR_COLLAPSED__ !== false;
        sidebar.style.transition = 'none';
        sidebar.classList.toggle('collapsed', shouldBeCollapsed);
        toggle.textContent = shouldBeCollapsed ? '▶' : '◀';
        removeEarlyHideStyle();
        requestAnimationFrame(function () {
            sidebar.style.transition = '';
            sidebar.classList.add('transitions-ready');
        });
    }

    function bindToggle() {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('sidebarToggle');
        if (!sidebar || !toggle) return;
        if (toggle.dataset.sidebarBound === '1') return;
        toggle.dataset.sidebarBound = '1';
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const isCollapsed = sidebar.classList.toggle('collapsed');
            toggle.textContent = isCollapsed ? '▶' : '◀';
            try { localStorage.setItem('sidebar_collapsed', isCollapsed ? '1' : '0'); } catch (err) { /* ignore */ }
        });
    }

    function initSyncListeners() {
        document.addEventListener('languagechange', function () { setTimeout(renderNavigation, 30); });
        document.addEventListener('subjectChanged', function () { setTimeout(renderNavigation, 30); });
        let lastKey = window.__currentSubjectKey;
        setInterval(function () {
            if (window.__currentSubjectKey !== lastKey) {
                lastKey = window.__currentSubjectKey;
                renderNavigation();
            }
        }, 400);
    }

    function boot() {
        injectEarlyHideStyle();
        bindToggle();
        initSyncListeners();
        renderNavigation();
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { setTimeout(collapseSilently, 50); });
        } else {
            setTimeout(collapseSilently, 50);
        }
    }

    window.Sidebar = { renderNavigation: renderNavigation, removeEarlyHideStyle: removeEarlyHideStyle };
    boot();
})();
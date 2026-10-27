/* upbar.js — Main tabs / sub tabs (electrical.html style) */
(function () {
    'use strict';

    let currentLang = 'english';
    let currentSubjectId = 'misc';
    let activeMainIndex = (window.SUBJECT_TABS && window.SUBJECT_TABS.DEFAULT_ACTIVE) || 0;

    window.__currentSubjectId = currentSubjectId;
    window.__currentMainIndex = activeMainIndex;

    function getLocalizedText(item) {
        if (!item) return '';
        if (typeof item === 'string') return item;
        if (typeof item === 'object') {
            if (currentLang === 'hindi' && item.hindi) return item.hindi;
            return item.english || '';
        }
        return String(item);
    }

    function stopVoiceViewer() {
        if (window.VoiceConceptViewer && window.VoiceConceptViewer.stop) window.VoiceConceptViewer.stop();
    }

    function scrollToMindMap() {
        const container = document.getElementById('container');
        if (!container) return;
        const stickyHeader = document.getElementById('stickyHeader');
        const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
        const containerRect = container.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({ top: containerRect.top + scrollTop - headerHeight, behavior: 'smooth' });
    }

    function loadSubject(subjectId) {
        currentSubjectId = subjectId;
        window.__currentSubjectId = subjectId;
        window.__currentSubjectKey = subjectId;
        if (window.setCurrentSubject) window.setCurrentSubject(subjectId);
        if (window.__onSubjectChanged) window.__onSubjectChanged(subjectId);
        if (window.Sidebar && window.Sidebar.renderNavigation) window.Sidebar.renderNavigation();
    }

    function safeReloadBook() {
        if (window.BookView && window.BookView.reload) window.BookView.reload();
        else setTimeout(function () { if (window.BookView && window.BookView.reload) window.BookView.reload(); }, 150);
        if (window.CompleteBookView && window.CompleteBookView.reload) window.CompleteBookView.reload();
    }

    function updateSubTabs(mainIndex) {
        const subContainer = document.getElementById('subTabsContainer');
        if (!subContainer) return;
        const mainTabsList = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
        if (mainIndex >= mainTabsList.length) return;
        const mainTab = mainTabsList[mainIndex];
        const subTabs = mainTab.subTabs || [];
        subContainer.innerHTML = '';
        if (subTabs.length === 0) return;

        subTabs.forEach(function (sub, index) {
            const tab = document.createElement('button');
            tab.className = 'tab-sub';
            tab.dataset.subject = sub.id;
            tab.textContent = getLocalizedText(sub.name);
            if (index === 0) tab.classList.add('active');
            subContainer.appendChild(tab);
        });

        subContainer.querySelectorAll('.tab-sub').forEach(function (tab) {
            tab.addEventListener('click', function (e) {
                e.stopPropagation();
                stopVoiceViewer();
                subContainer.querySelectorAll('.tab-sub').forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                if (window.setChapterFilter) window.setChapterFilter(this.dataset.subject);
                scrollToMindMap();
                safeReloadBook();
            });
        });
    }

    function updateTabTexts() {
        const mainTabsList = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
        document.querySelectorAll('.tab-main').forEach(function (tab, index) {
            if (mainTabsList[index]) tab.textContent = getLocalizedText(mainTabsList[index].name);
        });
        const subContainer = document.getElementById('subTabsContainer');
        if (subContainer && activeMainIndex < mainTabsList.length) {
            const subs = mainTabsList[activeMainIndex].subTabs || [];
            subContainer.querySelectorAll('.tab-sub').forEach(function (tab, index) {
                if (subs[index]) tab.textContent = getLocalizedText(subs[index].name);
            });
        }
    }

    function buildTabs() {
        const container = document.getElementById('tabs-container');
        if (!container) return;
        container.innerHTML = '';
        const mainTabsList = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
        if (mainTabsList.length === 0) return;

        let defaultIndex = (window.SUBJECT_TABS && window.SUBJECT_TABS.DEFAULT_ACTIVE) || 0;
        if (defaultIndex < 0 || defaultIndex >= mainTabsList.length) defaultIndex = 0;
        activeMainIndex = defaultIndex;
        window.__currentMainIndex = defaultIndex;

        const mainRow = document.createElement('div');
        mainRow.className = 'main-tabs-row';
        const mainTabButtons = [];

        mainTabsList.forEach(function (tabData, index) {
            const mainTab = document.createElement('button');
            mainTab.className = 'tab-main' + (index === defaultIndex ? ' active' : '');
            mainTab.dataset.subject = tabData.id;
            mainTab.dataset.mainIndex = index;
            mainTab.textContent = getLocalizedText(tabData.name);
            mainRow.appendChild(mainTab);
            mainTabButtons.push(mainTab);
        });
        container.appendChild(mainRow);

        const subContainer = document.createElement('div');
        subContainer.className = 'sub-tabs-container';
        subContainer.id = 'subTabsContainer';
        container.appendChild(subContainer);

        mainTabButtons.forEach(function (mainTab, index) {
            mainTab.addEventListener('click', function (e) {
                e.stopPropagation();
                activeMainIndex = index;
                window.__currentMainIndex = index;
                mainTabButtons.forEach(function (btn) { btn.classList.remove('active'); });
                this.classList.add('active');
                updateSubTabs(index);
                loadSubject(this.dataset.subject);
                const firstSub = subContainer.querySelector('.tab-sub');
                if (firstSub) {
                    subContainer.querySelectorAll('.tab-sub').forEach(function (b) { b.classList.remove('active'); });
                    firstSub.classList.add('active');
                    if (window.setChapterFilter) window.setChapterFilter(firstSub.dataset.subject);
                }
                safeReloadBook();
            });
        });

        updateSubTabs(defaultIndex);
        const firstSub = subContainer.querySelector('.tab-sub');
        if (firstSub) firstSub.classList.add('active');
        loadSubject(mainTabsList[defaultIndex].id);
    }

    document.addEventListener('languagechange', function (e) {
        stopVoiceViewer();
        currentLang = (e.detail && e.detail.language) || 'english';
        updateTabTexts();
        const badge = document.getElementById('language-badge');
        if (badge) badge.textContent = currentLang === 'english' ? 'English' : 'हिंदी';
    });

    function initCollapseToggle() {
        const stickyHeader = document.getElementById('stickyHeader');
        const tabsToggleBtn = document.getElementById('tabsToggleBtn');
        if (!stickyHeader || !tabsToggleBtn) return;
        if (tabsToggleBtn.dataset.bound === '1') return;
        tabsToggleBtn.dataset.bound = '1';

        function setCollapsed(collapsed) {
            if (collapsed) {
                stickyHeader.classList.add('tabs-collapsed');
                tabsToggleBtn.textContent = '▶';
                tabsToggleBtn.title = 'Show Topics';
            } else {
                stickyHeader.classList.remove('tabs-collapsed');
                tabsToggleBtn.textContent = '◀';
                tabsToggleBtn.title = 'Hide Topics';
            }
        }
        tabsToggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const isCollapsed = stickyHeader.classList.contains('tabs-collapsed');
            setCollapsed(!isCollapsed);
            setTimeout(function () { if (typeof window.draw === 'function') window.draw(); }, 320);
        });
        setCollapsed(true);
    }

    window.Upbar = {
        buildTabs: buildTabs,
        updateSubTabs: updateSubTabs,
        selectSubject: function (subjectId) {
            const list = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === subjectId) {
                    const btn = document.querySelector('.tab-main[data-subject="' + subjectId + '"]');
                    if (btn) btn.click();
                    return;
                }
                const subs = list[i].subTabs || [];
                for (let j = 0; j < subs.length; j++) {
                    if (subs[j].id === subjectId) {
                        const btn = document.querySelector('.tab-main[data-subject="' + list[i].id + '"]');
                        if (btn) btn.click();
                        return;
                    }
                }
            }
        }
    };

    function boot() {
        const start = function () {
            buildTabs();
            initCollapseToggle();
        };
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 100); });
        } else {
            setTimeout(start, 100);
        }
    }
    boot();
})();
/* book-pdf-export.js — Export book as PDF */
(function () {
    'use strict';

    var CONFIG = {
        autoInjectButtons: true,
        buttonLabel: '📥 PDF',
        confirmHindi: true,
        defaultLang: 'english',
        printDelay: 150,
        cleanupDelay: 1200
    };

    function escHtml(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\n/g, '<br>');
    }

    function pickText(obj, lang) {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[lang] || obj.english || '';
    }

    function getCurrentLang() {
        var badge = document.getElementById('language-badge');
        var txt = ((badge && badge.textContent) || '').trim().toLowerCase();
        if (txt.indexOf('हिं') !== -1 || txt.indexOf('hindi') !== -1) return 'hindi';
        return 'english';
    }

    function getBookTitle() {
        var tabs = (window.SUBJECT_TABS && window.SUBJECT_TABS.MAIN_TABS) || [];
        var tab = tabs[window.__currentMainIndex || 0];
        return (tab && pickText(tab.name, 'english')) || 'Book';
    }

    function buildPageHTML(page, pageNum, lang) {
        var chapter = pickText(page.chapterTitle, lang);
        var topic = pickText(page.topicTitle, lang);
        var title = pickText(page.conceptTitle, lang);
        var desc = pickText(page.conceptDesc, lang) || 'No content.';
        var color = page.chapterColor || '#b8a690';

        return '<div class="pdf-book-page">' +
            '<div class="book-chapter-tag" style="border-left:3px solid ' + color + ';">' + escHtml(chapter) + '</div>' +
            '<div class="book-topic-title">' + escHtml(topic) + '</div>' +
            '<div class="book-concept-title">' + escHtml(title) + '</div>' +
            '<div class="book-concept-body">' + escHtml(desc) + '</div>' +
            '<div class="book-page-number">page ' + pageNum + '</div>' +
        '</div>';
    }

    function exportBookToPDF(pages, lang, bookTitle) {
        if (!pages || !pages.length) {
            alert('No pages to export!');
            return;
        }

        var old = document.getElementById('pdfPrintContainer');
        if (old) old.remove();

        var container = document.createElement('div');
        container.id = 'pdfPrintContainer';
        container.innerHTML = pages.map(function (p, i) { return buildPageHTML(p, i + 1, lang); }).join('');
        document.body.appendChild(container);

        var oldTitle = document.title;
        document.title = bookTitle || 'Book';

        setTimeout(function () {
            window.print();
            setTimeout(function () {
                document.title = oldTitle;
                var c = document.getElementById('pdfPrintContainer');
                if (c) c.remove();
            }, CONFIG.cleanupDelay);
        }, CONFIG.printDelay);
    }

    function askLanguage() {
        if (!CONFIG.confirmHindi) return CONFIG.defaultLang;
        var useHindi = confirm('Hindi mein export karein?\n\nOK = Hindi (हिंदी)\nCancel = English');
        return useHindi ? 'hindi' : 'english';
    }

    function handleTopicwisePDF(e) {
        if (e) { e.stopPropagation(); e.preventDefault(); }
        var pages = (window.BookView && window.BookView.getPages) ? window.BookView.getPages() : [];
        exportBookToPDF(pages, askLanguage(), getBookTitle());
    }

    function handleCompletePDF(e) {
        if (e) { e.stopPropagation(); e.preventDefault(); }
        var pages = (window.CompleteBookView && window.CompleteBookView.getPages) ? window.CompleteBookView.getPages() : [];
        exportBookToPDF(pages, askLanguage(), 'Complete Book');
    }

    function makeButton(id, handler) {
        var btn = document.createElement('button');
        btn.id = id;
        btn.type = 'button';
        btn.className = 'book-pdf-btn';
        btn.title = 'Download as PDF';
        btn.textContent = CONFIG.buttonLabel;
        btn.addEventListener('click', handler);
        return btn;
    }

    function ensureButton(buttonId, barSelector, handler, insertBeforeSelector) {
        var existing = document.getElementById(buttonId);
        if (existing) {
            if (!existing.dataset.pdfBound) {
                existing.dataset.pdfBound = '1';
                existing.addEventListener('click', handler);
            }
            return;
        }
        if (!CONFIG.autoInjectButtons) return;

        var bar = document.querySelector(barSelector);
        if (!bar) return;

        var btn = makeButton(buttonId, handler);
        var anchor = insertBeforeSelector ? bar.querySelector(insertBeforeSelector) : null;
        if (anchor) bar.insertBefore(btn, anchor);
        else bar.appendChild(btn);
    }

    function bindAll() {
        ensureButton('bookPdfBtn', '#bookView .book-syllabus-bar', handleTopicwisePDF, '.book-search-box');
        ensureButton('cbPdfBtn', '#completeBookView .book-syllabus-bar', handleCompletePDF, '.book-search-box');
    }

    function init() { bindAll(); }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 1200); });
    } else {
        setTimeout(init, 1200);
    }

    var tries = 0;
    var retryIv = setInterval(function () {
        tries++;
        bindAll();
        if (tries > 15) clearInterval(retryIv);
    }, 2500);

    window.BookPDFExport = {
        export: exportBookToPDF,
        exportTopicwise: function (lang) {
            var pages = (window.BookView && window.BookView.getPages) ? window.BookView.getPages() : [];
            exportBookToPDF(pages, lang || getCurrentLang(), getBookTitle());
        },
        exportComplete: function (lang) {
            var pages = (window.CompleteBookView && window.CompleteBookView.getPages) ? window.CompleteBookView.getPages() : [];
            exportBookToPDF(pages, lang || getCurrentLang(), 'Complete Book');
        },
        version: '2.0.0'
    };
})();
/* book-page-slider.js — Slider for topicwise / complete book */
(function () {
    'use strict';
    var JUMP_DEBOUNCE_MS = 100;

    function bindSlider(opts) {
        var sliderEl = document.getElementById(opts.sliderId);
        var labelEl = document.getElementById(opts.labelId);
        var bookEl = document.getElementById(opts.bookElId);
        if (!sliderEl) return;

        var wrapEl = sliderEl.parentElement;
        var isDragging = false;
        var inputTimer = null;

        function getView() { return window[opts.viewObjName] || null; }

        function syncSlider(force) {
            if (isDragging && !force) return;
            var view = getView();
            if (!view) return;
            var pages = view.getPages ? (view.getPages() || []) : [];
            var total = pages.length;
            if (!total) {
                sliderEl.max = 0;
                sliderEl.value = 0;
                sliderEl.disabled = true;
                if (labelEl) labelEl.textContent = '0 / 0';
                return;
            }
            sliderEl.disabled = false;
            sliderEl.max = total - 1;
            var spread = 0;
            if (typeof view.getCurrentSpread === 'function') spread = view.getCurrentSpread();
            var idx = spread * 2;
            if (idx >= total) idx = total - 1;
            sliderEl.value = idx;
            if (labelEl) labelEl.textContent = (idx + 1) + ' / ' + total;
        }

        function syncWidth() {
            if (!bookEl || !wrapEl) return;
            var rect = bookEl.getBoundingClientRect();
            if (rect.width > 0) {
                wrapEl.style.width = rect.width + 'px';
                wrapEl.style.maxWidth = 'none';
            }
        }

        function doJump(idx) {
            var view = getView();
            if (view && typeof view.jumpToPage === 'function') view.jumpToPage(idx);
        }

        function endDrag() {
            isDragging = false;
            if (inputTimer) { clearTimeout(inputTimer); inputTimer = null; }
        }

        sliderEl.addEventListener('input', function () {
            isDragging = true;
            var idx = parseInt(this.value, 10) || 0;
            var view = getView();
            var total = view && view.getPages ? (view.getPages() || []).length : 0;
            if (labelEl) labelEl.textContent = (idx + 1) + ' / ' + total;
            if (inputTimer) clearTimeout(inputTimer);
            inputTimer = setTimeout(function () { inputTimer = null; doJump(idx); }, JUMP_DEBOUNCE_MS);
        });

        sliderEl.addEventListener('change', function () {
            var idx = parseInt(this.value, 10) || 0;
            if (inputTimer) { clearTimeout(inputTimer); inputTimer = null; }
            doJump(idx);
            endDrag();
            this.blur();
            setTimeout(function () { syncSlider(true); }, 80);
        });

        sliderEl.addEventListener('pointerup', function () {
            endDrag();
            this.blur();
            setTimeout(function () { syncSlider(true); }, 80);
        });

        document.addEventListener('book:pagechange', function () {
            if (!isDragging) syncSlider(false);
        });

        if (window.ResizeObserver && bookEl) new ResizeObserver(syncWidth).observe(bookEl);
        window.addEventListener('resize', syncWidth);

        var tries = 0;
        var iv = setInterval(function () {
            tries++;
            var view = getView();
            if (view) {
                if (view.reload && !view.reload.__sliderPatched) {
                    var orig = view.reload;
                    view.reload = function () {
                        var r = orig.apply(this, arguments);
                        setTimeout(function () { syncSlider(true); syncWidth(); }, 150);
                        return r;
                    };
                    view.reload.__sliderPatched = true;
                }
                syncSlider(true);
                syncWidth();
                clearInterval(iv);
            } else if (tries > 50) {
                clearInterval(iv);
            }
        }, 200);

        document.addEventListener('change', function (e) {
            if (e.target && e.target.name === 'viewMode') {
                setTimeout(function () { syncSlider(true); syncWidth(); }, 200);
            }
        });
    }

    function init() {
        bindSlider({ sliderId: 'bookPageSlider', labelId: 'bookSliderLabel', bookElId: 'book', viewObjName: 'BookView' });
        bindSlider({ sliderId: 'cbPageSlider', labelId: 'cbSliderLabel', bookElId: 'completeBook', viewObjName: 'CompleteBookView' });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
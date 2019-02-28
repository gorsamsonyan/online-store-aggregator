var app = function () {

    function updateSlider(element) {
        if (element) {
            var parent = element.parentElement,
                lastValue = parent.getAttribute('data-slider-value');

            if (lastValue === element.value) {
                return; // No value change, no need to update then
            }

            parent.setAttribute('data-slider-value', element.value);
            var $thumb = parent.querySelector('.range-slider__thumb'),
                $thumbMain = parent.querySelector('.range-slider-main__thumb'),
                $bar = parent.querySelector('.range-slider__bar'),
                pct = element.value * ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight),
                pct1 = element.value * ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight);

            $thumb.style.bottom = pct + '%';
            if($thumbMain)
                $thumbMain.style.bottom = pct1 + '%';
            $bar.style.height = 'calc(' + pct + '% + ' + $thumb.clientHeight / 2 + 'px)';
            $thumb.textContent = element.value * 10;
        }
    }

    return {
        updateSlider: updateSlider
    };


}();

(function initAndSetupTheSliders() {
    var inputs = [].slice.call(document.querySelectorAll('.range-slider input'));
    inputs.forEach(function (input) {
        return input.setAttribute('value', '0');
    });
    inputs.forEach(function (input) {
        return app.updateSlider(input);
    });
    // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
    inputs.forEach(function (input) {
        return input.addEventListener('input', function (element) {
            return app.updateSlider(input);
        });
    });
    inputs.forEach(function (input) {
        return input.addEventListener('change', function (element) {
            return app.updateSlider(input);
        });
    });
})();

var apph = function () {

    function updateSlider(element) {
        if (element) {
            var parent = element.parentElement,
                lastValue = parent.getAttribute('data-slider-value');

            if (lastValue === element.value) {
                return; // No value change, no need to update then
            }

            parent.setAttribute('data-slider-value', element.value);
            var $thumb = parent.querySelector('.near-me-range-slider__thumb'),
                $thumbMain = parent.querySelector('.near-me-range-slider-main__thumb'),
                $bar = parent.querySelector('.near-me-range-slider__bar'),
                pct = element.value * ((parent.clientWidth - $thumb.clientWidth+20) / parent.clientWidth),
                pct1 = element.value * ((parent.clientWidth - $thumb.clientWidth+20) / parent.clientWidth);

            $thumb.style.left = pct + '%';
            if($thumbMain)
                $thumbMain.style.left = pct1 + '%';
            $bar.style.width = 'calc(' + pct + '% + ' + $thumb.clientWidth / 2 + 'px)';
            $thumb.textContent = element.value * 10;
        }
    }

    return {
        updateSlider: updateSlider
    };


}();

(function initAndSetupTheSliders() {
    var inputs = [].slice.call(document.querySelectorAll('.near-me-range-slider input'));
    inputs.forEach(function (input) {
        return input.setAttribute('value', '0');
    });
    inputs.forEach(function (input) {
        return apph.updateSlider(input);
    });
    // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
    inputs.forEach(function (input) {
        return input.addEventListener('input', function (element) {
            return apph.updateSlider(input);
        });
    });
    inputs.forEach(function (input) {
        return input.addEventListener('change', function (element) {
            return apph.updateSlider(input);
        });
    });
})();
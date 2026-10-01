(function() {
    var overlay = document.getElementById('intro-overlay');
    if (!overlay) return;

    var lines = [
        "窗外的雨刚刚停",
        "午后气息浓浓地才散去",
        "迷迷糊糊张开眼",
        "刚刚的梦我似乎",
        "在瞬间看见你"
    ];

    var container = document.getElementById('text-container');
    var skipBtn = document.getElementById('skip-btn');
    var lineIndex = 0;
    var charIndex = 0;
    var typingTimer;
    var fadeOutTimer;
    var isTyping = true;
    var currentLineEl = null;

    function fadeOut() {
        if (!isTyping) return;
        isTyping = false;
        clearTimeout(typingTimer);
        clearTimeout(fadeOutTimer);
        overlay.style.transition = 'opacity 1.2s ease';
        overlay.style.opacity = '0';
        setTimeout(function() { overlay.style.display = 'none'; }, 1200);
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', fadeOut);
    }

    function typeWriter() {
        if (!isTyping) return;

        if (!currentLineEl) {
            currentLineEl = document.createElement('div');
            currentLineEl.className = 'lyric-line';
            container.appendChild(currentLineEl);
            charIndex = 0;
        }

        var text = lines[lineIndex];

        if (charIndex < text.length) {
            currentLineEl.textContent += text.charAt(charIndex);
            charIndex++;
            typingTimer = setTimeout(typeWriter, 100);
        } else {
            lineIndex++;
            currentLineEl = null;

            if (lineIndex < lines.length) {
                typingTimer = setTimeout(typeWriter, 400);
            } else {
                fadeOutTimer = setTimeout(fadeOut, 2000);
            }
        }
    }

    window.addEventListener('load', function() {
      typingTimer = setTimeout(typeWriter, 500);
    });
})();

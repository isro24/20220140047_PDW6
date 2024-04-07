document.addEventListener('DOMContentLoaded', function () {
    const audio1 = document.querySelector('#audio1');
    const audio2 = document.querySelector('#audio2');

    audio1.addEventListener('play', function () {
        if (!audio2.paused) {
            audio2.pause();
        }
    });

    audio2.addEventListener('play', function () {
        if (!audio1.paused) {
            audio1.pause();
        }
    });
});


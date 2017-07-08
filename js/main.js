(function() {
    window.onload = function() {
        objectFitImages();
        bindHandlers();
    };

    function bindHandlers() {
        var thumbs = document.querySelectorAll('.gallery__item');
        var modal = document.getElementById('#modal');
        var imageContainer = modal.querySelector('.modal__image');
        var close = modal.querySelector('.modal__close');

        [].forEach.call(thumbs, function(thumb) {
            thumb.addEventListener('click', function(e) {

                var winWidth = document.documentElement.clientWidth;
                var imgSrc;

                if (winWidth > 991) {
                    imgSrc = e.target.getAttribute('srcset').split(' ')[0];
                } else {
                    imgSrc = e.target.getAttribute('src');
                }

                imageContainer.setAttribute('src', imgSrc);
                modal.classList.remove('invisible');
            });
        });

        close.addEventListener('click', function () {
            modal.classList.add('invisible');
        });

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.add('invisible');
            }

        });

        window.addEventListener("keydown", function(e) {
            if (e.keyCode === 27) {
                if (!modal.classList.contains("invisible")) {
                    modal.classList.add('invisible');
                }

            }
        });
    }

})();

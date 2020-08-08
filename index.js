(function () {
    let currentArray = [
        { index: 1, className: 'game__block game__block--color1' },
        { index: 2, className: 'game__block game__block--color2' },
        { index: 3, className: 'game__block game__block--color3' },
        { index: 4, className: 'game__block game__block--color4' },
        { index: 5, className: 'game__block game__block--color5' },
        { index: 6, className: 'game__block game__block--color6' },
        { index: 7, className: 'game__block game__block--color7' },
        { index: 8, className: 'game__block game__block--color8' },
        { index: 9, className: 'game__block game__block--color9' }
    ];
    document.getElementsByClassName('buttons')[0].addEventListener('click', function ($event) {
        if ($event.target.id == 'shuffle') {
            shuffle();
        }
        if ($event.target.id == 'sort') {
            sort();
        }
    });

    function shuffle() {
        for (let i = currentArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = currentArray[i];
            currentArray[i] = currentArray[j];
            currentArray[j] = temp;
        }
        setClassName();
    }

    function sort() {
        currentArray.sort((a, b) => a.index - b.index);
        setClassName();
    }

    function setClassName() {
        let blocks = document.querySelectorAll('.game div');
        for (let i = 0; i < currentArray.length; i++) {
            blocks[i].className = currentArray[i].className;
        }
    }

    function init() {
        let game = document.querySelector('.game');
        var df = document.createDocumentFragment();
        for (let i = 1; i <= 9; i++) {
            df.appendChild(document.createElement('div'));
        }
        game.appendChild(df);
        setClassName();
    }

    init();
})();
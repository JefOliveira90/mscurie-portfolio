document.addEventListener('DOMContentLoaded', () => {
    let entries = Array.prototype.slice.call(document.querySelectorAll('.page-portfolio > .entry'));

    entries.map((initEntry, initIndex) => {

        initEntry.addEventListener('click', (e) => {
            entries.map((entry, i) => {
                entry.classList.remove('current', 'prev', 'next', 'deep');

                let diff = i - initIndex;
                let classname = 'current';

                if(diff < 0) {
                    classname = 'prev';
                } else if(diff > 0) {
                    classname = 'next';
                }

                if(diff < -1 || diff > 1) {
                    classname += ' deep';
                }

                entry.className += ` ${classname}`;
            });
        });

    });
});
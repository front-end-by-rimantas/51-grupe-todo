// lightbox
const newTaskBtnDOM = document.querySelector('.main-header .btn');
const lightboxDOM = document.querySelector('.lightbox');
const lightboxCloseDOM = lightboxDOM.querySelector('.close');
const lightboxBackgroundDOM = lightboxDOM.querySelector('.background');

newTaskBtnDOM.addEventListener('click', () => {
    lightboxDOM.dataset.visible = 'true';
});

lightboxCloseDOM.addEventListener('click', () => {
    lightboxDOM.dataset.visible = 'false';
});

lightboxBackgroundDOM.addEventListener('click', () => {
    lightboxDOM.dataset.visible = 'false';
});

window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        lightboxDOM.dataset.visible = 'false';
    }
});

// task menu
const allTaskDOMs = document.querySelectorAll('.task');

for (const taskDOM of allTaskDOMs) {
    const moreDOM = taskDOM.querySelector('.more');
    const moreActionsDOM = taskDOM.querySelector('.more-actions');

    if (moreDOM) {
        moreDOM.addEventListener('click', () => {
            moreActionsDOM.dataset.visible = 'true';
        });
    }
}

document.body.addEventListener('click', () => {
    console.log('window click...');

    for (const taskDOM of allTaskDOMs) {
        taskDOM.querySelector('.more-actions').dataset.visible = 'false';
    }
});

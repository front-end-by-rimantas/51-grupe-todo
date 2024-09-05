const newTaskBtnDOM = document.querySelector('.main-header .btn');
const lightboxDOM = document.querySelector('.lightbox');
const lightboxCloseDOM = lightboxDOM.querySelector('.close');
const lightboxBackgroundDOM = lightboxDOM.querySelector('.background');
const allTaskDOMs = document.querySelectorAll('.task');
const taskMenuBackgroundDOM = document.querySelector('.task-menu-background');
let lastOpenMenuTaskIndex = -1;

function openLightbox() {
    lightboxDOM.dataset.visible = 'true';
}

function closeLightbox() {
    lightboxDOM.dataset.visible = 'false';
}

function closeTaskMenu() {
    if (lastOpenMenuTaskIndex >= 0) {
        allTaskDOMs[lastOpenMenuTaskIndex].querySelector('.more-actions').dataset.visible = 'false';
    }
    taskMenuBackgroundDOM.classList.remove('active');
}

for (let i = 0; i < allTaskDOMs.length; i++) {
    const taskDOM = allTaskDOMs[i];
    const moreDOM = taskDOM.querySelector('.more');
    const moreActionsDOM = taskDOM.querySelector('.more-actions');

    moreDOM.addEventListener('click', () => {
        if (lastOpenMenuTaskIndex === i) {
            moreActionsDOM.dataset.visible = 'false';
            taskMenuBackgroundDOM.classList.remove('active');
            lastOpenMenuTaskIndex = -1;
        } else {
            closeTaskMenu();

            moreActionsDOM.dataset.visible = 'true';
            taskMenuBackgroundDOM.classList.add('active');
            lastOpenMenuTaskIndex = i;
        }
    });
}

newTaskBtnDOM.addEventListener('click', openLightbox);
newTaskBtnDOM.addEventListener('click', closeTaskMenu);
lightboxCloseDOM.addEventListener('click', closeLightbox);
lightboxBackgroundDOM.addEventListener('click', closeLightbox);
taskMenuBackgroundDOM.addEventListener('click', closeTaskMenu);

window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeTaskMenu();
    }
});

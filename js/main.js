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

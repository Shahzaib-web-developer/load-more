let loadMoreBtn = document.querySelector('#load-more');
let loadLessBtn = document.querySelector('#load-less');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box')];
    for (let i = currentItem; i < currentItem + 3; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }

    // Display the "Load Less" button
    loadLessBtn.style.display = 'inline-block';
};

loadLessBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for (let i = currentItem - 1; i >= currentItem - 3; i--) {
        if (boxes[i]) {
            boxes[i].style.display = 'none';
        }
    }
    currentItem -= 3;

    // Display the "Load More" button
    loadMoreBtn.style.display = 'inline-block';

    // Hide the "Load Less" button if we're back to the initial state
    if (currentItem <= 3) {
        loadLessBtn.style.display = 'none';
    }
};

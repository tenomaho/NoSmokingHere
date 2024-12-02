const background = document.getElementById('background');

let isDragging = false;
let startX, startY;
let offsetX = 0, offsetY = 0;

// 드래그 시작
background.addEventListener('mousedown', (event) => {
    isDragging = true;
    background.style.cursor = 'grabbing';
    startX = event.clientX - offsetX;
    startY = event.clientY - offsetY;
});

// 드래그 중
background.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    offsetX = event.clientX - startX;
    offsetY = event.clientY - startY;

    background.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// 드래그 종료
background.addEventListener('mouseup', () => {
    isDragging = false;
    background.style.cursor = 'grab';
});

// 드래그 종료 (마우스 밖으로 나갔을 때)
background.addEventListener('mouseleave', () => {
    isDragging = false;
    background.style.cursor = 'grab';
});

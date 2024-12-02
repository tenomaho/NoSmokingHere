const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');

// Set canvas size dynamically
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let painting = false;

// Event handlers
const startPainting = (event) => {
    painting = true;
    ctx.beginPath(); // 여기서 새로운 경로를 시작합니다!
    ctx.moveTo(event.offsetX, event.offsetY); // 시작점을 설정합니다.
};

const stopPainting = () => {
    painting = false;
    ctx.closePath(); // 경로를 닫습니다.
};

const draw = (event) => {
    if (!painting) return;

    ctx.lineWidth = document.getElementById('lineWidth').value;
    ctx.strokeStyle = document.getElementById('stroke').value;
    ctx.lineCap = 'round';

    ctx.lineTo(event.offsetX, event.offsetY); // 이전 점에서 현재 점까지 선을 그립니다.
    ctx.stroke();
};

// Add event listeners
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mousemove', draw);

// Clear canvas
document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

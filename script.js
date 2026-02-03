document.getElementById('greetBtn').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value.trim();
    const greeting = document.querySelector('.greeting');

    if (name === "") {
        greeting.textContent = "Hello!";
    } else {
        greeting.textContent = `Hello, ${name}!`;
    }
});

const boxes = document.querySelectorAll('.box');
boxes.forEach(box=>{
    box.addEventListener('click', ()=>{
        const color = box.dataset.color;

        box.style.backgroundColor = color;
    });
});



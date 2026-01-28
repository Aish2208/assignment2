document.getElementById('greetBtn').addEventListener('click', function(){
    const name = document.getElementById('nameInput').value;
    document.querySelector('.greeting').textContent = `Hello , ${name}!`;
})

const boxes = document.querySelectorAll('.box');
boxes.forEach(box=>{
    box.addEventListener('click', ()=>{
        const color = box.dataset.color;

        box.style.backgroundColor = color;
    });
});

let listitems = document.querySelector('#listitems');
let input = document.querySelector('#inp');
let mark=document.querySelector('.fa-xmark')

listitems.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-xmark')) {
        event.target.parentElement.remove(); 
    }
});


function additems(inpval) {
    let li = document.createElement('li');
    li.innerHTML = `${inpval} <i class="fa-solid fa-xmark fa-beat-fade" style="color: #f00f0f;"></i>`;
    listitems.appendChild(li);
}

input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        additems(this.value);
        this.value = '';
    }
});

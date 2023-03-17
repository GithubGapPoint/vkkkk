let k = 0;
let count = document.querySelector('.count');
document.querySelector('.clicker').addEventListener('click', function() {
    k++;
    console.log(k)
    count.innerHTML = k.toString();
})
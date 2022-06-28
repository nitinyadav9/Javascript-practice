let clickBtn = document.querySelector('button');
clickBtn.addEventListener('click', inputMsg);


function inputMsg(){
    let name = prompt('enter the name please');
    clickBtn.textContent = 'Name of student is ' + name ;
}
 
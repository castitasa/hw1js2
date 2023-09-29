const inputEmail = document.getElementById('email')
const button = document.getElementById('button')
const error = document.getElementById('error') 

button.onclick = (e) =>{
    e.preventDefault()
    const g =/\w+@\w+\.\w+/
    console.log(g.test(inputEmail.value));
    if (g.test(inputEmail.value)) {
        
        mistake.textContent= ''
        alert ('Вы успешно зарегистрировались');
    } else {
        mistake.textContent= 'не корректный формат почты';
    }
}
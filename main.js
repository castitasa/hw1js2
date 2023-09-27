
let nam = prompt ('Вы успешно зарегистрировались!')
const inputEmail = document.getElementById('email')
const button = document.getElementById('button')


button.onclick = () =>{
    const g =/\w+@\w+\.\w+/
    console.log(g.test(inputEmail.value));
}



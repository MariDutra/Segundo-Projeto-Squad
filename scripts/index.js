let email = document.getElementById('listaDeEspera');
let btn = document.getElementById('btn');
let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

btn.addEventListener('click',function(evt){
    evt.preventDefault()
})
btn.addEventListener('click', validacao)

function validacao() {
    
    if(email.value === ""){
        alert("Preencha o campo com o seu e-mail")
    }else if(!filtro.test(email.value)){
        alert("E-mail inválido. Tente novamente.")
    }else{
        alert("Você está inscrito(a). Agradecemos pelo interesse!")
    }
}
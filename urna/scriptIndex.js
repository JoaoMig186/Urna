//PT-BR: Função criada para pegar o número que está no input.
//ENG: Function to get the number that is in input.
    function tecla(numero) {
	var k = document.UrnaF.visor.value;
	var numEleit = document.UrnaF.visor.value = k + numero;

    //PT-BR: Se o número corresponder com algum dos números dos candidatos, mostrar na tela.
    //ENG: If the number corresponds with some number about the numbers of the candidates, to show on screen.
    switch(numEleit){

    case '88' : document.getElementById("imgUrna").style.backgroundImage = "url('imagens/img2.png')";break;
    case '93' : document.getElementById("imgUrna").style.backgroundImage = "url('imagens/img3.png')";break;
    case '07' : document.getElementById("imgUrna").style.backgroundImage = "url('imagens/img4.png')";break;
    default: document.getElementById("imgUrna").style.backgroundImage = "url('imagens/img1.png')";

        }
    }

    //PT-BR: Função criada para limpar o input através do botão "corrigir".
    //ENG: Function to clean the input through of the "corrigir" button.
    function limp(){
	    document.getElementById("visor").value = "";
    }

    //PT-BR: Função para enviar o valor do input através do botão "confirmar", exibindo um alert mostrando o que o usuário digitou.
    //ENG: Function to send the value of the input through of the "confirmar" button, showing an alert telling what the user has been written.
    function confirmarBotao(){
        let confirma = document.getElementById("botV");
            confirma.addEventListener("click", () => {
                let valorDoVisor = document.getElementById("visor").value;
                alert("Você está votando no candidato " + valorDoVisor);
            });
    }
    confirmarBotao()
    
    //PT-BR: Criando uma variável para o formulário.
    //ENG: Creating a variable to the form.
    const formulario = document.querySelector('form')
    
    //PT-BR: Função para reproduzir o áudio.
    //ENG: Function to play the audio.
    function som(){
                const audio = document.querySelector('audio');
                    audio.play();
                    audio.currentTime = 5.5;
        }
    
    //PT-BR: Função para carregar a confirmação.
    //ENG: Function to load the confirmation.
    function validacao(){
                var timer = setTimeout(function() {
                window.location='successfulPage/sucesso.html'
                }, 2000);
        }   
    
    //PT-BR: Função para solicitar a confirmação do usuário. Se o usuário confirmar, a aplicação irá seguir com as funções "som()" e "validação()". Se não, o console irá apresentar uma mensagem de erro e o usuário poderá tentar votar novamente.
    //ENG: Function to request a confirmation of the user. If the user confirm, the app will continue with the functions "som()" and "validação()". Else, the console will show a Error mensage and the user will can try to vote again.
    formulario.onsubmit = (e) => {
        e.preventDefault()
        const confirmacaoDeEnvio = confirm('Você confirma o voto no candidato com o número exibido na parte superior do teclado? Caso não apareça nenhum candidato ou o número não seja exatamente o mesmo que aparece na tela do candidato, seu voto será anulado.');

    if (confirmacaoDeEnvio){
        som()
        validacao()
    }

    else{
    console.log("ERRO!")
    }
}

//PT-BR: Aqui está uma referência utilizada para fazer a ultima função de confirmação: https://thewebdev.info/2022/02/06/how-to-confirm-before-a-form-submit-with-javascript/#:~:text=onsubmit%20to%20a%20function%20that,forward%20with%20submitting%20the%20form.
//ENG: Here is a reference used to do the last function of confirmation: https://thewebdev.info/2022/02/06/how-to-confirm-before-a-form-submit-with-javascript/#:~:text=onsubmit%20to%20a%20function%20that,forward%20with%20submitting%20the%20form.
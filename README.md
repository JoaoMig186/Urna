# Urna
Este é o front-end de uma urna feita em HTML, CSS e Javascript

Existem 3 candidatos na urna. O candidato A 88, o candidato B 93 e a candidata C 07. 
Todo o conteúdo de interface interna da urna é feito com imagens. Você pode acessá-las na pasta "imagens". Foi feito assim para maior facilidade e para eu poder focar na parte lógica da urna.

O arquivo index.html é o arquivo principal. O arquivo styleIndex.css é o arquivo com a estilização da urna e da página. O arquivo scriptIndex.js é o que contém toda a parte de Javascript, contendo o código identado e comentado em português e inglês.

A pasta successfulPage contém o arquivo sucesso.html. Esse arquivo é a página em que o usuário é redirecionado após confirmar o voto. O arquivo styleSuccessfulPage.css é a estilização da página sucesso.

A pasta sound contém o som que a urna emite (urna.mp3).
==============================================================

<---- ! Como funciona a urna ! ---->

O usuário precisa digitar no teclado virtual o número do candidato que deseja. Se o candidato existir, ele aparecerá na tela. Caso não exista, não aparecerá.

Após a escolha do candidato, pressionando o botão "CONFIRMAR", aparecerá um alerta informando em qual candidato ele está votando. Após o alerta, aparecerá uma caixa de confirmação. Clicando em "confirmar" ele será redirecionado. Caso clique em "cancelar", o usuário poderá tentar votar novamente.

A tecla "CORRIGIR" serve para corrigir o visor. Pressionando essa tecla, o visor será completamente apagado, podendo ser preenchido novamente com o valor desejado.

Se o usuário confirmar o voto em um candidato válido, ele será redirecionado para a página de "voto computado com sucesso". Caso ele vote em um candidato inválido ou 
inexistente, o voto será considerado nulo, mas mesmo assim ele será redirecionado para a página "voto computado com sucesso".

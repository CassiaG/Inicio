
//Condição multipla, swith (expressão) {case1 e break, case2 e break, case 3 e break, default}
//É obrigado colocar o break, o default funciona como um else, quando nenhuma condição é true
/* //switch é util para situações pontuais

var agora = new Date() // pega a hora
var semana = agora.getDay() // pega o dia da semana

console.log(semana)
switch(semana){
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('Errado')
}
*/

/*// Pegar hora atual do sistema
 var agora = new Date()
 var hora = agora.getHours()
 console.log(`Agora são ${hora}`)
*/


/*//Usando condições com if else if F8:
var idade = 68;
if (idade < 16) {
    console.log('Não Vota')
} else if(idade <= 18 || idade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('voto obrigatório')
    }
    */

/* Usando condições IF ELSE - F8
var vel = 60
console.log(`A velocidade do seu carro é ${vel}Km/h`)

if(vel>60) {
    console.log('Ultrapassou a velocidade, MULTADO!')
} else {
console.log('Continue dirigindo com seguraça!') - mostra no F8
}
*/

/* 
var n1 = Number.parseInt(window.prompt("Informe um número:")) // Declara que é um número
var n2 = Number.parseInt(window.prompt("Informe outro número:")) // declara que é um número
var s = n1 + n2 // realiza a soma, pois são dois números, se fosse string seria concatenação
window.alert(`a soma de ${n1} e ${n2} é ${s}`) //mostra o resultado na tela 

window.document.write('olá mundo!');

window.document.write(window.document.characterSet); // mostra UTF-8 (sete de caracter)
window.document.write(window.navigator.appName); // mostra nome do navegador
window.document.write(window.document.URL); // mostra a url


POR MARCA:
var p1 = window.document.getElementsByTagName('p')[0]
window.document.write(p1.innerText) // sem a formatação
p1.style.color = 'red'
window.document.write(p1.innerHTML) // pega com a formatação

POR ID
var id = "msg" 
var d = window.document.getElementById('msg')
d.innerText = "oii" 

POR SELECTOR:
var d = window.document.querySelector('div#msg') // ID usa o #, classe usa o .
window.document.write(d.innerText)
d.style.color = 'green' 

*/

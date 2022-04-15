//***Exercícios de interpretação de código***

    //---Atividade 1---

        const bool1 = true 
        const bool2 = false
        const bool3 = !bool2

        let resultado = bool1 && bool2
        /*A mensagem que vai aparecer é false visto que a variável bool2 é false e
        só basta um false no && para o resultado ser false*/
        console.log("a. ", resultado)

        resultado = bool1 && bool2 && bool3
        /*A mensagem que vai aparecer é false visto que a variável bool2 é false e
        só basta um false no && para o resultado ser false*/ 
        console.log("b. ", resultado) 

        resultado = !resultado && (bool1 || bool2)
        /*Irá mostrar true, pois:
        Primeiro irá verificar o que está entre parênteses mesmo uma estando false no || só basta um true, para dar true
        Depois irá realizar a comparação && a variável resultado que era false está sendo negada então agora é true
        com isto temos todos true o resultado do parênteses e a negação do valor da variável*/
        console.log("c. ", resultado)

        //Mostrará o tipo da variável que é Boolean
        console.log("d. ", typeof resultado)

    //---Atividade 2---

        let primeiroNumero = prompt("Digite um numero!")
        let segundoNumero = prompt("Digite outro numero!")
    
        //const soma = primeiroNumero + segundoNumero
    
        //console.log(soma)

        /*Como ele pede pelo prompt para o usuário inserir um valor 
        por padrão quando é inserido uma informação pelo prompt na variável, ela se torna string
        então não tem como realizar a soma das variáveis somente concatena*/

    //---Atividade 3---
        //Recomendo transformar as variáveis string em number
7
        const TransNumero1 = Number(primeiroNumero)
        const TransNumero2 = Number(segundoNumero)

        const soma = TransNumero1 + TransNumero2
    
        console.log(soma)

//***Exercícios de escrita de código***

    //---Atividade 1---

        console.log("   ")
        console.log("Sua idade a do seu amigo")

        let SuaIdade = prompt ("Qual a sua idade?")
        let IdadeAmigs = prompt ("Qual a idade do(a) sue(a) melhor amigo(a)?")

        const TransSuaIdade = Number (SuaIdade)
        const TransIdadeAmigs = Number(IdadeAmigs)

        let CompararIdades = TransSuaIdade>TransIdadeAmigs

        console.log("Sua idade é maior do que a do seu melhor amigo?" , CompararIdades)

        CompararIdades = TransSuaIdade-TransIdadeAmigs

        console.log(`A diferença de idade entre vocês é de ${CompararIdades} ano(s)`)

    //---Ativodade 2---

        console.log("   ")
        console.log("Resto da divisão de números pares")

        let NumPar = prompt ("Insira um número par")
        const TransNumPar = Number (NumPar)

        let resto = TransNumPar%2

        console.log("O resto é igual à:", resto)
        /*Quando colocar un número para o resto sempre será 0, pois não há resto em divisão de 
        qualquer número par por dois.
        Quando se comloca um número impar terá um resto, neste caso sempre será 1*/

    //---Atividade 3---

        console.log("   ")
        console.log("Idade em vários modos")

        let idade = prompt ("Digite sua idade:")
        const TransIdade = Number(idade)

        let meses = TransIdade*12
        let dias = TransIdade*365
        let horas= dias*24

        console.log (`Você tem ${meses} meses de vida`)
        console.log (`Você tem ${dias} dias de vida`)
        console.log (`Você tem ${horas} horas de vida`)

    //---Atividade 4---

        console.log("   ")
        console.log("Números e operações")

        let Num1 = prompt ("Digite um número:")
        const TransNum1 = Number (Num1)
        let Num2 = prompt ("Digite outro número:")
        const TransNum2 = Number (Num2)

        let maior = TransNum1>TransNum2
        console.log("O primeiro numero é maior que segundo?" , maior)

        let igual = TransNum1==TransNum2
        console.log("O primeiro numero é igual ao segundo?" , igual)

        let divisao1 = TransNum1%TransNum2
        let resultado1 = divisao1==0
        console.log("O primeiro numero é divisível pelo segundo?" , resultado1)

        let divisao2 = TransNum2%TransNum1
        let resultado2 = divisao2==0
        console.log("O segundo numero é divisível pelo primeiro?" , resultado2)
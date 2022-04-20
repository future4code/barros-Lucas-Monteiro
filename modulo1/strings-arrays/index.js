/*****Exercícios de interpretação de código*****/

    //Atividade 1 

        let array //Criou uma variável indefinida (Sem o tipo)
        console.log('a. ', array) //irá mostrar undefined
    
        array = null //Foi acrescentado um valo nulo na variável 
        console.log('b. ', array) //Mostrará null
    
        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //criou uma array e inseriu 11 elementos nela
        console.log('c. ', array.length) //Irá mostrar o tamanho da array (11)
    
        let i = 0 
        console.log('d. ', array[i]) //Como o valor da variável é zero mostrará o primeiro índice da array (3)
    
        array[i+1] = 19 //Como a variável é 0 indice 2 irá incerir o elemento (19)
        console.log('e. ', array)//Mostrará (3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13)
    
        const valor = array[i+6] //a variável irá receber o elemento do índice 6 que é (9)
        console.log('f. ', valor) //Mostrará o valor 6

    //Atividade 2

        const frase = prompt("Digite uma frase")

        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

        //Irá imprimir: "SUBI NUM ÔNIBUS EM MIRROCOS" e o número 27

/*****Exercícios de escrita de código*****/

    //Atividade 1

        let nome = prompt("Digite o seu nome seu nome:")
        let email = prompt("Digite o seu nome seu email:")

        console.log("O e-mail",email," foi cadastrado com sucesso. Seja bem-vinda(o),", nome , "!")
    
    //Atividade 2

        let comidas = ["Sururu","Lasanha","Pizza","Arros e feijão","Mariscada"]

        console.log("a.",comidas)

        console.log(`b. Essas são as minhas comidas preferidas: 
        ${comidas[0]}
        ${comidas[1]}
        ${comidas[2]}
        ${comidas[3]}
        ${comidas[4]}`)

        let ComidaUsuario = prompt("Qual a sua comida  preferida?")

        comidas[1] = ComidaUsuario

        console.log("c.",comidas) 
        
    //Atividade 3

        let listaDeTarefas = []

        listaDeTarefas[0] = prompt("Digite a primeira tarefa do dia:")
        listaDeTarefas[1] = prompt("Digite a segunda tarefa do dia:")
        listaDeTarefas[2] = prompt("Digite a terceira tarefa do dia:")

        console.log(`As tarefas são: 
        ${listaDeTarefas[0]}
        ${listaDeTarefas[1]}
        ${listaDeTarefas[2]}`)

        let excluir = Number ( prompt (`Digite o número da tarefa que você concluiu:
        0 - ${listaDeTarefas[0]}
        1 - ${listaDeTarefas[1]}
        2 - ${listaDeTarefas[2]}`) )

        listaDeTarefas.splice(excluir, 1)

        console.log(listaDeTarefas)

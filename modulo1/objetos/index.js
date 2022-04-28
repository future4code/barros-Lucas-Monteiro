/*****Exercícios de interpretação de código*****/

    //Atividade 1
        
        const filme = {
            nome: "Auto da Compadecida", 
            ano: 2000, 
            elenco: [
                "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
                "Virginia Cavendish"
                ], 
            transmissoesHoje: [
                {canal: "Telecine", horario: "21h"}, 
                {canal: "Canal Brasil", horario: "19h"}, 
                {canal: "Globo", horario: "14h"}
                ]
        }
        
        //a) O que vai ser impresso no console?
        console.log(filme.elenco[0]) //Aqui será impresso Matheus Nachtergaele
        console.log(filme.elenco[filme.elenco.length - 1]) //Aqui será impresso: Virginia Cavendish
        console.log(filme.transmissoesHoje[2]) //Aqui será impresso: Globo, 14h

    //Atividade 2

        const cachorro = {
            nome: "Juca", 
            idade: 3, 
            raca: "SRD"
        }
        
        const gato = {...cachorro, nome: "Juba"}
        
        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        //a) O que vai ser impresso no console?
        console.log(cachorro) // Vai ser impresso: Juca, 3, SRD
        console.log(gato) // Vai ser impresso: Juba, 3, SRD
        console.log(tartaruga) // Vai ser impresso: Jubo, 3, SRD

        //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        /*Ele "Espelha" os atributos do objeto e seus valores, mas você 
        pode realizar a alteração de um objeto sem modificar o outro.*/

    //Atividade 3

        function minhaFuncao(objeto, propriedade) {
            return objeto[propriedade]
        }
        
        const pessoa = {
        nome: "Caio", 
        idade: 23, 
        backender: false
        }
        
        //a) O que vai ser impresso no console?
        console.log(minhaFuncao(pessoa, "backender"))// Vai ser impresso: false
        console.log(minhaFuncao(pessoa, "altura"))// Vai ser impresso: null
        //A segunda impressão eu errei mostra undefined... 

        //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
        /*No primeiro caso, como se tem o atributo backender, objeto, a função criada retorna
        o valor dela. No segundo caso, não se tem o atributo, por isso se imprime o null*/

/*****Exercícios de escrita de código*****/

        //Atividade 1

            /*a) Crie um objeto. Ele deve conter duas propriedades: 
            nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
            Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */

                function meChame (pessoa){
                    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
                }

                const pessoinha = {
                    nome : "Lucas",
                    apelidos : ["Cabeça", "Chocolate", "Nego"]
                }

                meChame(pessoinha)

            /*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
            mas com uma nova lista de três apelidos. 
            Depois, chame a função feita no item anterior passando como argumento o novo objeto */

                const pessoinha2 = {
                    ...pessoinha,
                    apelidos : ["Mago", "Amigo", "Cidadão"]
                }

                meChame(pessoinha2)

        //Atividade 2
            
            //a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
            
                const trabalhador = {
                    nome: "Ana",
                    idade: 24,
                    profissao: "Tec. Enfermagem",
               }

               const trabalhador2 = {
                   ...trabalhador,
                   nome: "Dora",
                   idade: 50,
                   profissao: "Professora"
               }

            //b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
            /*1. O valor de `nome`
            2. O numero de caracteres do valor `nome`
            3. O valor de `idade`
            4. O valor de `profissão`
            5. O numero de caracteres do valor `profissão`
            EX.: Retorno: ["Bruno", 5, 23, "Instrutor", 9] */

               function arrayTrabalhador (trabalho){
                   const lista = [trabalho.nome, trabalho.nome.length, trabalho.idade, trabalho.profissao, trabalho.profissao.length]
                   return lista
               }

               console.log (arrayTrabalhador(trabalhador))
               console.log (arrayTrabalhador(trabalhador2))

    //Atividade 3

        //a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

            let carrinho = []
            
        /*b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as
        seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)*/
        
            fruta1 = {
                nome: "banana",
                disponibilidade: true,
            }
            fruta2 = {
                ...fruta1,
                nome : "maçã",
            }
            fruta3 = {
                ...fruta1,
                nome: "abacaxi"
            }

        /*c) Crie uma função que **receba** um objeto fruta por **parâmetro**
        e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.*/

            function mercado (sacolao){
                carrinho.push(sacolao)
            }

            mercado(fruta1)
            mercado(fruta2)
            mercado(fruta3)

        /*d) Imprima a variável carrinho e garanta que ela
        agora seja um array preenchido com três objetos.*/

            console.log(carrinho)

/*****Desafio*****/

    /* 1 -Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão
    e depois imprima no console um objeto com essas propriedades. 
    Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.*/

        let ficha = {
            nome : " ",
            idade : 0,
            profissao: " "
        }

        function perguntas (objeto) {
            objeto.nome = prompt ("Qual o seu nome?")
            objeto.idade = Number(prompt("Qual a sua idade?"))
            objeto.profissao = prompt ("Qual a sua profição?")
            
            console.log (objeto) 
        }

        perguntas(ficha)

    /* 2- Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: 
    ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
    O primeiro filme foi lançado antes do segundo? false
    O primeiro filme foi lançado no mesmo ano do segundo? true*/

        const filme1 = {
            nome : "Batman",
            anoLancamento : 2022
        }

        const filme2 = {
            ...filme1,
            nome : "Wall-e",
            anoLancamento : 2008
        }

        function lancamentos (objeto1, objeto2) {
            console.log (`O primeiro filme foi lançado antes do segundo? ${objeto1.anoLancamento<objeto2.anoLancamento}`)
            console.log (`O primeiro filme foi lançado antes do segundo? ${objeto1.anoLancamento===objeto2.anoLancamento}`)
        }

        lancamentos (filme1, filme2)

    /*3- Crie uma função a mais pro exercício 3 de escrita de código. 
    Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber 
    por parâmetro uma das frutas e retornar esse mesmo objeto 
    com a propriedade disponibilidade com o valor invertido.*/

        function trocaDisponibilidade (sacolao) {
           sacolao.disponibilidade = sacolao.disponibilidade !== sacolao.disponibilidade
           console.log(sacolao)
        }

        trocaDisponibilidade(fruta2)
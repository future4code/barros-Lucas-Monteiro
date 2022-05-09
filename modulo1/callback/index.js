/*****Exercícios de interpretação de código******/

    /*Atividade 1 

        const usuarios = [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" }
        ]
        
        const novoArrayA = usuarios.map((item, index, array) => {
            console.log(item, index, array)
        })
        
        Irá mostrar os itens, neste caso cada objeto. na sequência quais os index desses
        itens e um array contendo a array original
        
    Atividade 2    

        const usuarios = [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" },
        ]

        const novoArrayB = usuarios.map((item, index, array) => {
            return item.nome
        })

        console.log(novoArrayB)
        
        Irá imprimir os valores que estão guardados nos atributos nomes:
        "Amanda Rangel" "Laís Petra" "Letícia Chijo"

    Atividade 3
    
        const usuarios = [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" },
        ]

        const novoArrayC = usuarios.filter((item, index, array) => {
            return item.apelido !== "Chijo"
        })

        console.log(novoArrayC)

        Irá retornar uma array só com os itens que o apelido seja diferente de "Chijo"
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" }
        */

/*****Exercícios de escrita de código*****/

    //Atividade 1

    //Crie um novo array que contenha apenas o nome dos doguinhos

        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
        ]

        const nomePets = pets.map((nomes, index, array) => {
            return nomes.nome
        })

        console.log(nomePets)

    //Crie um novo array apenas com os cachorros salsicha

        const osSalsichas = pets.filter((salsicha, index, array) =>{
            return salsicha.raca === "Salsicha"
        })

        console.log(osSalsichas)

    /*Crie um novo array que possuirá mensagens para enviar para todos
    os clientes que são poodles. A mensagem deve ser: "Você ganhou um 
    cupom de desconto de 10% para tosar o/a [NOME]!" */

        const cupomPoodles = pets.map ((poodles, index, array) => {
            if (poodles.raca === "Poodle"){
                return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}!`
            }
        })

        const fraseCupom = cupomPoodles.filter ((frase, index, array)=>{
            return frase !== undefined
        })

        console.log (fraseCupom)

        //Não sei se era para fazer assim

    //Atividade 2

        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]

    //Crie um novo array que contenha apenas o nome de cada item

        const nomeProdutos = produtos.map ((produto, index, array) => {
            return produto.nome
        })

        console.log(nomeProdutos)

    /*Crie um novo array que contenha um objeto com o nome e o preço de cada item,
    aplicando 5% de desconto em todos eles*/

        const cincoPorCento = produtos.map ((produto, index, array) => {
            //delete produto.categoria
            produto2 = {... produto}
            delete produto2.categoria
            produto2.preco = produto2.preco - (produto2.preco*0.05)
            produto2.preco = produto2.preco.toFixed(2)
            return produto2
        })

        console.log (cincoPorCento)

        //Não conseguir realizar de outra maneira


    //Crie um novo array que contenha apenas os objetos da categoria Bebidas

        const bebidas = produtos.filter((bebida, index, array) => {
            return bebida.categoria === "Bebidas"
        }) 

        console.log(bebidas)

    //Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

        const ype = produtos.filter ((eYpe, index, array)=>{
            return eYpe.nome.includes("Ypê")
        })

        console.log(ype)

    /*Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array
    deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"*/

        const fraseYpe = ype.map ((eYpe, index, array)=>{
            return `Compre ${eYpe.nome} por ${eYpe.preco}`
        })

        console.log(fraseYpe)
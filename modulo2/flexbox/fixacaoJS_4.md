``` JavaScript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  
  let contagem = 0
  
  for (contar of arrayDeNumeros){
      
    if (contar === numeroEscolhido){
      
      contagem = contagem + 1
      
    }
    
  }
  if (contagem>0){
  
    return `O número ${numeroEscolhido} aparece ${contagem}x`  
    
  }else{
    
    return `Número não encontrado`
    
  }
  
}

````
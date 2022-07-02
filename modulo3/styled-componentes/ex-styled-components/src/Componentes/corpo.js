import React from "react";
import {Corpo, TextoFormulario, CaixaMensagem} from "./style"

export function Estrutura(){
    return(
        <Corpo>
            <form action="#">
                <TextoFormulario for="Remetente">Remetente:</TextoFormulario>
                <input type="text" name="Remetente" id ="Remetente"/>
                <TextoFormulario for="Menssagem">Menssagem:</TextoFormulario>
                <CaixaMensagem type="text" name="Menssagem" id ="Menssagem"/>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </Corpo>
    )
}
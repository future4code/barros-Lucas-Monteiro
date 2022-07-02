import React from 'react';
import {TextoCabecalho, Cabeca, LogoCabeca} from "./style.js";
import foto from './lab.png'

export function Cabecalho(){
    return(
        <Cabeca>
            <LogoCabeca src={foto}/>
            <TextoCabecalho>
                LabZap
            </TextoCabecalho>
        </Cabeca>
    )
}
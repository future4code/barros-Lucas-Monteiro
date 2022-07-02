import styled from "styled-components";

export const Cabeca=styled.header`
    background-color: white;
    width: 100%;
    height: 10vh;
    text-align: center;
    padding: 0%;
    border-bottom: 1px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TextoCabecalho=styled.h1`
    font-size: 35px;
    color: #1e2e39;
    margin: 0%;
`

export const LogoCabeca=styled.img`
    width: 55px;
    height: 60px;
`

export const Corpo=styled.main`
    margin: 0%;
    width: 1100px;
    height: 80vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: center;
`

export const TextoFormulario=styled.label`
    font-size: 20px;
    color: #1e2e39;
    margin-left: 9px;
    margin-right: 9px;
`

export const CaixaMensagem=styled.input`
    width: 350px;
    margin-right: 6px;
`
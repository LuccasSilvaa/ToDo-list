import React from "react";
import ListaTarefas from "./componentes/ListaTarefas";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color:#4E4ED4;
}
`

export default class app extends React.Component{

   render(){
    return(
      <>
      <GlobalStyle/>
    < ListaTarefas/>
      </>
    )
   }

}
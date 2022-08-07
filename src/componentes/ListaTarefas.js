import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const Lista = styled.div`
 overflow: hidden;
 position:absolute;
 left:30%;
 top:5%;
 background-color:#A03EE6;
 width: 450px;
 height: 500px;
 display:flex;
 flex-direction:column;
 align-items:center;
 box-shadow: 0 0 5px rgba(0,0,0,1);
 overflow-y:scroll;

 ::-webkit-scrollbar{
  width:15px;
 }

 ::-webkit-scrollbar-track{
  background-color:#A02EE6;
  box-shadow:0 0 5px rgba(0,0,0,1);
 }
 ::-webkit-scrollbar-thumb{
  background-color:#EBF235;
  box-shadow:0 0 5px rgba(0,0,0,1);
 }
 

 h1{
  color:#EBF235;
 }


`
const Add = styled.div`
margin-top:2rem;
display:flex;
justify-content:center;
justify-content:space-evenly;
width:20rem;


input{
  outline: none;
  border:none;
}
button{
  width:5rem;
  color:#EBF235;
  background-color:#A02EE6;
  border:none;
  box-shadow:0 0 5px rgba(0,0,0,1)
}

`
const Tarefa = styled.div`
margin-top: 2rem;
width:14.5rem;
display:flex;
justify-content:space-between;

button{
  
  color:#EBF235;
  background-color: #A03EE6;
  border:none;
}

p{
  overflow:hidden;
  color:white;
  width:200px;
}


`



export default class ListaTarefas extends React.Component{

 state = {
  tarefa:"",
  listaTarefas:[]
 }

 bucarTarefas = (e) =>{
  this.setState({
   tarefa: e.target.value
  })
 }

 addTarefa = () =>{
  
  if(this.state.tarefa !== "")
  this.setState({
    listaTarefas: this.state.listaTarefas.concat({
      tarefa: this.state.tarefa,
      id: Date.now()
    }),
    tarefa:""
  })
 }

 enter = (e) =>{
  
  if(this.state.tarefa.length > 0 && e.key === "Enter")
  this.setState({
    listaTarefas: this.state.listaTarefas.concat({
      tarefa: this.state.tarefa,
      id: Date.now()
    }),
    tarefa:""
  })
 }
  remover = (id) => {
     this.setState({
      listaTarefas: this.state.listaTarefas.filter((item) => {
        return item.id !== id;
      })
     })
  }

  render(){
    return(
      
      <Lista>
        <GlobalStyle/>
      <h1>Lista de tarefas</h1>
      <Add>
      <input
      onKeyPress={this.enter}
      placeholder="Insira uma tarefa"
      onChange={this.bucarTarefas} 
      value={this.state.tarefa}/>
      <button onClick={this.addTarefa}>Adicionar</button>
      </Add>
      {this.state.listaTarefas.map((item) => (
        <Tarefa key={item.id}>
          <p>{item.tarefa}</p>
          <button onClick={() => this.remover(item.id)}>x</button>

        </Tarefa>
      )
      )}
      </Lista>
    )
  }  
}
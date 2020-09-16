import React from 'react';
import './App.css';
import {Container} from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro.jsx'


function App() {
  return (
   <Container component="article" maxWidth='sm'>
     <FormCadastro aoEnviar={aoEnviarForm}  validaCpf={validaCPF} />
   </Container> 
  );}

  function aoEnviarForm(dados){
    console.log(dados);
  }


  function validaCPF(cpf){
    if(cpf.length != 11){
      return {valido:false,message:"CPF deve possuir 11 digitos"}
    }else{
      return{valido:true,message:""}
    }
  }

export default App;

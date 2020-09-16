import React from 'react';
import 'fontsource-roboto';
import FormDadosPessoais from '../FormDadosPessoais/FormDadosPessoais';
import FormDadosUsuario from '../FormDadosUsuario/FormDadosUsuario';
import FormEntrega from '../FormEntrega/FormEntrega'


function FormCadastro({ aoEnviar, validaCpf }) {


  return (
    <>
      <FormDadosPessoais />
      <FormDadosUsuario/>
      <FormEntrega/>
    </>
  )
}

export default FormCadastro;
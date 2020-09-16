import React from 'react';
import { Button, TextField } from "@material-ui/core";

const FormDadosUsuario = () => {
  return (
    <form>
      <TextField margin="normal"
        variant="outlined"
        fullWidth label="email" type="email" id="email" />
      <TextField margin="normal"
        variant="outlined"
        fullWidth label="senha" type="password" id="senha" />
      <Button
        variant="contained"
        color="primary"
        type="submit">Cadastrar
      </Button>



    </form>
  )
}

export default FormDadosUsuario;
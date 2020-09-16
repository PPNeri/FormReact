import React from 'react';
import { Button, TextField } from "@material-ui/core";


function FormEntrega() {
  return (
    <form>
      <TextField margin="normal"
        variant="outlined"
        fullWidth label="CEP" type="number" id="cep" />
      <TextField margin="normal"
        variant="outlined"
        fullWidth label="Endereço" type="text" id="endereco" />
      <TextField margin="normal"
        variant="outlined"
        label="Numero" type="number" id="numero" />
      <TextField margin="normal"
        variant="outlined"
        label="Estado" type="text" id="estado" />
      <TextField margin="normal"
        variant="outlined"
        label="Cidade" type="text" id="cidade" />
        <Button fullWidth
        variant="contained"
        color="primary"
        type="submit">Finalizar Cadastro
      </Button>
    </form>

  )
}

export default FormEntrega;
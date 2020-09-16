import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, Typography } from "@material-ui/core";
import 'fontsource-roboto';

function FormDadosPessoais({ aoEnviar, validaCpf }) {

  const [nome, setNome] = useState("");
  const [sNome, setSnome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] =
    useState({
      cpf: {
        valido: true,
        message: ""
      }
    });

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ nome, sNome, cpf, promocoes, novidades })

    }}>
      <Typography variant="h3" align="center" component="h1" >FORMULARIO DE CADASTRO</Typography>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        margin="normal"
        variant="outlined"
        fullWidth />
      <TextField
        value={sNome}
        onChange={(event) => {
          setSnome(event.target.value)
        }}
        id="sNome"
        label="Snome"
        margin="normal"
        variant="outlined"
        fullWidth />
      <TextField
        onChange={(e) => {
          setCpf(e.target.value)
        }}
        onBlur={(event) => {
          const ehValido = validaCpf(cpf)
          setErros({ cpf: ehValido })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.message}
        id="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
        fullWidth />
      <FormControlLabel
        label="Promoções"
        control={<Switch checked={promocoes} name="Promocoes" onChange={(event) => {
          setPromocoes(event.target.checked)
        }} color="primary" />} />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" checked={novidades} onChange={(e) => {
          setNovidades(e.target.checked)
        }} color="primary" />} />
      <Button
        variant="contained"
        color="primary"
        type="submit">Cadastrar
      </Button>
    </form>
  )
}

export default FormDadosPessoais;
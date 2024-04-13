import { FormEvent, useState } from "react";
import { Button } from "../../components/Button/styles";
import { Content, Header } from "../styles";
import { Form } from "./styles";
import Contato from "../../models/contato";
import { useDispatch } from "react-redux";
import { cadastrar } from "../../store/reducers/contatos";
import { handleModal } from "../../store/reducers/modal";

const FormContainer = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const contatoParaAdicionar = new Contato(email, nome, telefone);

    dispatch(cadastrar(contatoParaAdicionar));

    dispatch(handleModal());
  };
  return (
    <>
      <Header modal>
        <h1>Crie um novo contato</h1>
      </Header>
      <Content modal>
        <Form onSubmit={cadastrarContato}>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do contato"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type="telefone"
            name="telefone"
            id="telefone"
            placeholder="Digite o telefone do contato"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o e-mail do contato"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button modal>Create</Button>
        </Form>
      </Content>
    </>
  );
};

export default FormContainer;

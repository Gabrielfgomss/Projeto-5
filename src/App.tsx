import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "./store";
import "./App.css";
import { Content, Header, Lista, Main } from "./containers/styles";
import Contato from "./components/Contacts";
import { handleModal } from "./store/reducers/modal";
import Modal from "./components/Modal";
import FormContainer from "./containers/FormContainer";
import { Button } from "./components/Button/styles";

function App() {
  const { itens: listaDeContatos } = useSelector(
    (state: RootReducer) => state.contatos
  );
  const dispatch = useDispatch();

  return (
    <Main>
      <Header>
        <h1>Sua agenda de contatos</h1>
        <Button onClick={() => dispatch(handleModal())} header>Adicionar contato</Button>
      </Header>
      <Content>
        <Lista>
          {listaDeContatos.map(({ email, nome, telefone, id }) => (
            <Contato
              initialEmail={email}
              initialNome={nome}
              initialTelefone={telefone}
              id={id}
              key={id}
            ></Contato>
          ))}
        </Lista>
      </Content>
      <Modal>
        <FormContainer />
      </Modal>
    </Main>
  );
}

export default App;

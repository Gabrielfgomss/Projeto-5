import { useDispatch } from "react-redux";
import { Card, EditableText } from "./styles";
import { remover, editar } from "../../store/reducers/contatos";
import { useState } from "react";
import { Button } from "../Button/styles";

interface IContato {
  initialEmail: string;
  initialNome: string;
  initialTelefone: string;
  id: number;
}

const Contato = ({
  initialEmail,
  initialNome,
  initialTelefone,
  id,
}: IContato) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState(initialNome);
  const [email, setEmail] = useState(initialEmail);
  const [telefone, setTelefone] = useState(initialTelefone);
  return (
    <Card>
      {isEditing ? (
        <>
          <div>
            <EditableText
              disabled={!isEditing}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            ></EditableText>
            <EditableText
              disabled={!isEditing}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            >
              {email}
            </EditableText>
            <EditableText
              disabled={!isEditing}
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            >
              {telefone}
            </EditableText>
          </div>
          <div>
            <Button
              onClick={() => {
                setIsEditing(false);
                dispatch(
                  editar({
                    email,
                    nome,
                    telefone,
                    id,
                  })
                );
              }}
            >
              Salvar
            </Button>
            <Button disabled={true} onClick={() => dispatch(remover(id))}>
              Remover
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <EditableText
              disabled={!isEditing}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            ></EditableText>
            <EditableText
              disabled={!isEditing}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            >
              {email}
            </EditableText>
            <EditableText
              disabled={!isEditing}
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            >
              {telefone}
            </EditableText>
          </div>
          <div>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <Button onClick={() => dispatch(remover(id))}>Remover</Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default Contato;

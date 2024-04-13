class Contatos {
  email: string;
  telefone: string;
  nome: string;
  id: number;

  constructor(email: string, telefone: string, nome: string) {
    (this.email = email),
      (this.telefone = telefone),
      (this.nome = nome),
      (this.id = Math.random());
  }
}

export default Contatos;

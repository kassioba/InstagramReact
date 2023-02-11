import { useState } from "react";

export default function Usuario(props) {
  const [nomeUsuario, setNomeUsuario] = useState(props.nome);
  const [imagemUsuario, setImagemUsuario] = useState(props.img);

  const nomeUsuarioInicial = props.nome;

  function editarUsuario() {
    const novoNome = prompt("Insira o novo nome de usuário.");

    if (novoNome !== "" && novoNome !== null) {
      return novoNome;
    }
    return nomeUsuario;
  }

  function editarImagemUsuario() {
    const novaImagem = prompt("Insira a URL da nova imagem.");
    console.log(novaImagem);
    if (novaImagem !== "" && novaImagem !== null) {
      return novaImagem;
    }
    return imagemUsuario;
  }

  return (
    <div class="usuario">
      <img
        src={imagemUsuario}
        alt={nomeUsuario}
        onClick={() => setImagemUsuario(editarImagemUsuario())}
      />
      <div class="texto">
        <span>
          <strong>{nomeUsuario}</strong>
          <ion-icon
            name="pencil"
            onClick={() => setNomeUsuario(editarUsuario())}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}

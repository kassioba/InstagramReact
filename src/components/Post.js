import { useState } from "react";

export default function Post(props) {
  const [curtida, setCurtida] = useState("heart-outline");
  const [qtdeCurtidas, setQtdeDeCurtidas] = useState(props.qtdeCurtidas);
  const [vermelho, setVermelho] = useState("");
  const [salvar, setSalvar] = useState("bookmark-outline");

  function curtir() {
    if (curtida === "heart-outline") {
      setCurtida("heart");
      setQtdeDeCurtidas(qtdeCurtidas + 1);
      setVermelho("vermelho");
    } else {
      setCurtida("heart-outline");
      setQtdeDeCurtidas(qtdeCurtidas - 1);
      setVermelho("");
    }
  }

  function salvarPost() {
    if (salvar === "bookmark-outline") {
      setSalvar("bookmark");
    } else {
      setSalvar("bookmark-outline");
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemUsuario} alt={props.nome} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagemPost} alt={props.altImg} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              onClick={curtir}
              name={curtida}
              class={vermelho}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={salvarPost} name={salvar}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" alt="respondeai" />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtidas} </strong> e
            <strong> outras {`${qtdeCurtidas}`} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

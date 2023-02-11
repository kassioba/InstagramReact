export default function Posts() {
  const post = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      nome: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      altImg: "gato-telefone",
      nomeCurtidas: "respondeai",
      qtdeCurtidas: "101.523",
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      nome: "barked",
      imagemPost: "assets/img/dog.svg",
      altImg: "dog",
      nomeCurtidas: "adorable_animals",
      qtdeCurtidas: "99.159",
    },
  ];

  return (
    <div class="posts">
      {post.map((dado) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={dado.imagemUsuario} alt={dado.nome} />
              {dado.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={dado.imagemPost} alt={dado.altImg} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" alt="respondeai" />
              <div class="texto">
                Curtido por <strong>{dado.nomeCurtidas} </strong> e
                <strong> outras {dado.qtdeCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

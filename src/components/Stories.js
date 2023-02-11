export default function Stories() {
  const dados = [
    { imagem: "assets/img/9gag.svg", nome: "9gag" },
    { imagem: "assets/img/meowed.svg", nome: "meowed" },
    { imagem: "assets/img/barked.svg", nome: "barked" },
    {
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
      nome: "nathanwpylestrangeplanet",
    },
    { imagem: "assets/img/wawawicomics.svg", nome: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", nome: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", nome: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", nome: "memeriagourmet" },
  ];

  return (
    <div class="stories">
      {dados.map((dado) => (
        <div class="story">
          <div class="imagem">
            <img src={dado.imagem} alt={dado.nome} />
          </div>
          <div class="usuario">{dado.nome}</div>
        </div>
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestoes = [
    {
      img: "assets/img/bad.vibes.memes.svg",
      imgAlt: "bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razão: "Segue você",
    },
    {
      img: "assets/img/chibirdart.svg",
      imgAlt: "chibirdart",
      nome: "chibirdart",
      razão: "Segue você",
    },
    {
      img: "assets/img/razoesparaacreditar.svg",
      imgAlt: "razoesparaacreditar",
      nome: "razoesparaacreditar",
      razão: "Novo no Instagram",
    },
    {
      img: "assets/img/adorable_animals.svg",
      imgAlt: "adorable_animals",
      nome: "adorable_animals",
      razão: "Segue você",
    },
    {
      img: "assets/img/smallcutecats.svg",
      imgAlt: "smallcutecats",
      nome: "smallcutecats",
      razão: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((dados) => (
        <Sugestao
          img={dados.img}
          imgAlt={dados.imgAlt}
          nome={dados.nome}
          razão={dados.razão}
        />
      ))}
    </div>
  );
}

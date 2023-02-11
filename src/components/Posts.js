import Post from "./Post";

export default function Posts() {
  const post = [
    {
      imagemUsuario: "assets/img/meowed.svg",
      nome: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      altImg: "gato-telefone",
      nomeCurtidas: "respondeai",
      qtdeCurtidas: 101523,
    },
    {
      imagemUsuario: "assets/img/barked.svg",
      nome: "barked",
      imagemPost: "assets/img/dog.svg",
      altImg: "dog",
      nomeCurtidas: "adorable_animals",
      qtdeCurtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {post.map((data) => (
        <Post
          imagemUsuario={data.imagemUsuario}
          nome={data.nome}
          imagemPost={data.imagemPost}
          altImg={data.altImg}
          nomeCurtidas={data.nomeCurtidas}
          qtdeCurtidas={data.qtdeCurtidas}
        />
      ))}
    </div>
  );
}

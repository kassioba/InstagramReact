export default function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} alt={props.imgAlt} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razão}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

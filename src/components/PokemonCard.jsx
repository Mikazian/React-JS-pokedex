function PokemonCard({ name, imgSrc }) {
  return (
    <>
      <figure className="card">
        {imgSrc === undefined || imgSrc === "" ? (
          <p>???</p>
        ) : (
          <img src={imgSrc} alt={name} className="card-img" />
        )}
        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;

import PropTypes from "prop-types";

function PokemonCard({ name, imgSrc }) {
  return (
    <>
      <figure className="card">
        {imgSrc === undefined || imgSrc === "" ? (
          <p>???</p>
        ) : (
          <img src={imgSrc} alt={name} className="card-img" />
        )}
        <figcaption>{name.charAt(0).toUpperCase() + name.slice(1)}</figcaption>
      </figure>
    </>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

export default PokemonCard;

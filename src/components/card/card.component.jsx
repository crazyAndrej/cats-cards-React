import "./card.style.css";

const Card = ({ cat }) => {
  const { id, name, email } = cat;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`cat ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

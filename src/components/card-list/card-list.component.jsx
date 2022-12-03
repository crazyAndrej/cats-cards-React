import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ cats }) => (
  <div className="card-list">
    {cats.map((cat) => {
      return <Card key={cat.id} cat={cat} />;
    })}
  </div>
);

export default CardList;

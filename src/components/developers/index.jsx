import "./style.css";

const Cards = ({ pessoa }) => {
  const { name, age, country } = pessoa;
  return (
    <div className="cardDeveloper">
      <p>Dev: {name}</p>
      <p>Idade: {age}</p>
      <p>País: {country}</p>
    </div>
  );
};

export default Cards;

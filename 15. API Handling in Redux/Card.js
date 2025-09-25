export default function Card(value) {
  return (
    <div className="card" key={value.id}>
      <img src={value.image} alt={value.name} />
      <div className="card-info">
        <h2>{value.name}</h2>
        <h3>Rank: {value.market_cap_rank}</h3>
        <h3>Current Price: {value.current_price}</h3>
        <h3>Market Cap: {value.market_cap}</h3>
      </div>
    </div>
  );
}

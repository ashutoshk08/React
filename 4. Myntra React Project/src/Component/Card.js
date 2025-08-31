export default function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} />
      <div className="card-info">
        <p>{props.title}</p>
        <p>{props.offer}</p>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

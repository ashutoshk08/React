export default function Card({ name, photo, link, id }) {
  return (
    <div className="card" key={id}>
      <img src={photo} alt="profile image" />
      <div className="card-info">
        <h2>{name}</h2>
        <p>
          <a href={link} target="_blank">
            check profile
          </a>
        </p>
      </div>
    </div>
  );
}

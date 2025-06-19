import "../styles/modal.css";

function Modal ({data, onClose}) {
  if (!data) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={data.avatar_url} alt="avatar de john doe" width={100} />
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
        <p><strong>Followers:</strong> {data.followers_url}</p>
        <p><strong>Repos publics:</strong> {data.repos_url}</p>
        <a href={data.html_url} target="_blank" rel="noreferrer">Voir sur GitHub</a>
      </div>
    </div>
  );
}

export default Modal;

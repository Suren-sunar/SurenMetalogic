
export const  Card = ({ img, body, content }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="card-content">
        <h3 className="card-body">{body}</h3>
        <p className="card-footer">{content}</p>
      </div>
    </div>
  );
};



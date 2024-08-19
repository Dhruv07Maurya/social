import React from "react";
function Card({ Post }) {
  return (
    <div>
      {Post.map((post, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.desc}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

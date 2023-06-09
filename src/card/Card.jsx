import React from 'react';

export default function Card() {
  return (
    <div className="countainer d-flex justify-content-center my-5">
      <div className="card col-lg-4 text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div className="btn btn-primary">Go somewhere</div>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
}

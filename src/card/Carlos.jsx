import React from 'react';
import pho from '../card/download3.jpg';
import phot from '../card/download6.jpg';

export default function Carlos() {
  return (
    <div className="container d-flex justify-content-center my-5">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card d-flex justify-content-center">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-body-secondary">2 days ago</div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card d-flex justify-content-center">
              <div className="card-header">Second</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-body-secondary">2 days ago</div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card d-flex justify-content-center">
              <div className="card-header">Third</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-body-secondary">2 days ago</div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="carousel-item active">

</div>
<div className="carousel-item  d-flex justify-content-center">
<div className="card">
  <div className="card-header">Second</div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional
      content.
    </p>
    <a href="#/" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
  <div className="card-footer text-body-secondary">2 days ago</div>
</div>
</div>
<div className="carousel-item  d-flex justify-content-center">
<div className="card">
  <div className="card-header">Third</div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional
      content.
    </p>
    <a href="#/" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
  <div className="card-footer text-body-secondary">2 days ago</div>
</div>
</div> */
}

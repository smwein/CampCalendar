import React from 'react';
import './FeaturedCamps.css';

const FeaturedCamps = () => {
  return (
    <div className="my-4">
      <h2>Featured Camps</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Camp" />
            <div className="card-body">
              <h5 className="card-title">Camp Name</h5>
              <p className="card-text">Description of the camp.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Camp" />
            <div className="card-body">
              <h5 className="card-title">Camp Name</h5>
              <p className="card-text">Description of the camp.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Camp" />
            <div className="card-body">
              <h5 className="card-title">Camp Name</h5>
              <p className="card-text">Description of the camp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCamps;
import React from 'react';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const RenderBusiness = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={business.imageSrc} alt={business.name} />
      <div className="card-body">
        <h5 className="card-title">{business.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{business.address}</li>
          <li className="list-group-item">{business.city}, {business.state} {business.zipCode}</li>
          <li className="list-group-item">Category: {business.category}</li>
        </ul>
        <div className="card-footer">
          <small className="text-muted">Rating: {business.rating} ({business.reviewCount} reviews)</small>
        </div>
      </div>
    </div>
  );
}

export default RenderBusiness;

import React, { useState } from 'react';
import '../styles/SkipCard.scss';


const SkipCard = ({ skip }) => {
    const [selectedId, setSelectedId] = useState(null);
  const totalPrice = skip.price_before_vat + (skip.vat / 100 * skip.price_before_vat);

  return (
    <div className="skip-card">
        <div className='card-title'>
            {skip.size} Yard Skip
        </div>
        <div className='card-subtitle'>
            {skip.hire_period_days} day hire
        </div>
        <div className='price'>
            £{totalPrice.toFixed(2)}
        </div>
      <button
            className={skip.id === selectedId ? 'selected' : ''}
            onClick={() => setSelectedId(skip.id)}
            >
            {skip.id === selectedId ? 'Selected' : 'Select This Skip'}
            </button>
    </div>
  );
};

export default SkipCard;

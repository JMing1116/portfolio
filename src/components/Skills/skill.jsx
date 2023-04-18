import React from 'react';
import './index.scss';

const Skill = ({ img, name, percentage }) => {
  return (
    <div>
      <div className='skill-text'>
        <img src={img} alt={name} />
        <span>{name}</span>
        <span className='percentage-text' style={{ left: `${percentage}%` }}>{percentage}%</span>
      </div>
      <div className='progress'>
        <div className='progress-bar' style={{ width: `${percentage}%` }}></div>
        
      </div>
    </div>
  );
};

export default Skill;
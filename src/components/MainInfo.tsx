import React from 'react';

interface MainInfoProps {
  name: string;
  capital: string;
  population: number;
  area: number;
}

const MainInfo: React.FC<MainInfoProps> = ({ name, capital, population, area }) => {
  return (
    <div className='country_name'>
      Country name
      <p>{name}</p>
      <ul>
        <li>
          Capital: <p>{capital}</p>
        </li>
        <li>
          Population: <p>{population}</p>
        </li>
        <li>
          Area: <p>{area}</p>
        </li>
      </ul>
    </div>
  );
};

export default MainInfo;
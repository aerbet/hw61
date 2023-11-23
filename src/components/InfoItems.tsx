import React from 'react';
import Flag from './Flag';
import MainInfo from './MainInfo';
import BorderCountries from './BorderCountries';

interface InfoItemsProps {
  obj: {
    name: string;
    capital: string;
    population: number;
    area: number;
    flag: string;
    borders: string[];
  };
}

const InfoItems: React.FC<InfoItemsProps> = ({ obj }) => {
  return (
    <div className='country_info'>
      <MainInfo
        name={obj.name}
        capital={obj.capital}
        population={obj.population}
        area={obj.area}
      />
      <Flag url={obj.flag} />
      <BorderCountries borders={obj.borders} />
    </div>
  );
};

export default InfoItems;
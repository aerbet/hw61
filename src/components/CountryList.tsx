import React, { MouseEvent } from 'react';

interface CountryListProps {
  array: string[];
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
}

const CountryList: React.FC<CountryListProps> = ({ array, onClick }) => {
  return (
    <div className='country_list'>
      <p className='list_p'>List of Countries</p>
      <ul>
        {array.map((item, key) => (
          <li key={key} onClick={(event) => onClick(event)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
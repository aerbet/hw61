import React, { MouseEvent } from 'react';

interface CountryListProps {
  flag: boolean;
  array: string[];
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
}

const CountryList: React.FC<CountryListProps> = ({ flag, array, onClick }) => {
  return (
    <div className='country_list'>
      <p className='list_p'>List of Countries</p>
      <ul>
        {array.map((item, key) => (
          <li key={key} onClick={onClick} className={flag ? 'selected' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
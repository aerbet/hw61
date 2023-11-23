import React from 'react';

interface FlagProps {
  url: string;
}

const Flag: React.FC<FlagProps> = ({ url }) => {
  return (
    <div className='flag_div'>
      <img className='flag_img' src={url} alt='country flag' />
    </div>
  );
};

export default Flag;
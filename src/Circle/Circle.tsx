import React from 'react';

interface CircleProps {
  number: number;
}

const Circle: React.FC<CircleProps> = (props) => {
  return (
    <div className="circle bg-danger opacity-75 mt-5 d-inline-block m-4 rounded-circle">
      <p className='p-3 text-white fs-3 fw-bold'>{props.number}</p>
    </div>
  );
};
export default Circle;
import React from 'react';

interface CircleProps {
  number: number;
}

const Circle: React.FC<CircleProps> = (props) => {
  return (
    <div className="circle">
      <p>{props.number}</p>
    </div>
  );
};

export default Circle;
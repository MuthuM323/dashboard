import React from 'react';
import { IconType } from 'react-icons'; // To type the icon prop
import { IoMdArrowDropup } from 'react-icons/io'; // You might use any other icon if needed

interface CardProps {
  icon: IconType;
  iconColor: string;
  bgColor: string;
  title: string;
  value: string;
  percentageChange: string;
  percentageColor: string;
  img:any;
}

const CardComponent: React.FC<CardProps> = ({
  icon: Icon,
  iconColor,
  bgColor,
  title,
  value,
  percentageChange,
  percentageColor,
  img
}) => {
  return (
    <div className="p-2 bg-gray-950 border border-gray-900 rounded-lg shadow dark:bg-gray-950 dark:border-gray-950">
      <div className={`w-11 h-11 ${bgColor} flex items-center justify-center rounded-lg`}>
        {/* <Icon className={`text-3xl ${iconColor}`} /> */}
        <img src={img} alt="" />
      </div>
      <div className="text-sm my-1">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex items-center ${percentageColor}`}>
          <IoMdArrowDropup className='text-lg mx-1 my-1' />
          <div>{percentageChange}</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

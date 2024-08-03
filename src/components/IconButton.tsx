// IconButton.tsx
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
// types.ts
export interface IconButtonProps {
    bgColor: string;        // Background color for the main icon
    textColor: string;      // Text color for the main icon
    icon: React.ReactNode;  // Icon to be displayed
    title: string;          // Title text
    arrowColor: string;    // Background color for the arrow button
  }
  
const IconButton: React.FC<IconButtonProps> = ({ bgColor, textColor, icon, title, arrowColor }) => {
  return (
    <>
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center">
        <div className={`w-10 h-10 ${bgColor} ${textColor} flex items-center justify-center rounded-full`}>
          {icon}
        </div>
        <div className="mx-2 text-white flex items-center justify-center">
          {title}
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className={`w-5 h-5 ${arrowColor} flex items-center justify-center rounded-full p-1`}>
          <IoIosArrowForward className="text-2xl text-white" />
        </div>
      </div>
    </div>
    </>
  );
};

export default IconButton;

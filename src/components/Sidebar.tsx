// Sidebar.tsx
import React, { useState } from 'react';
import { menuList } from '../mock/menuData';
import { MdWindow } from 'react-icons/md';

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="w-12 bg-gray-900 text-white flex flex-col hidden lg:block">
      <div className="flex items-center justify-center py-4 bg-gray-900">
        {/* You can adjust the logo or the title here */}
        <MdWindow className="text-2xl" />
      </div>
      <div className="flex flex-col items-center mt-4 space-y-6">
        <div className="flex flex-col space-y-4">
          {menuList.map((item) => (
            <a 
              key={item.id}
              href={item.href}
              onClick={() => setSelected(item.id)}
              className={`flex items-center space-x-2 m-1 text-lg ${selected === item.id ? 'text-blue-500' : 'text-white'}`}
            >
              {item.icon}
              {/* <span>{item.label}</span> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

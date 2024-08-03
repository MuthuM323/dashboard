// mockData.ts
import { AiFillHome } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';
import { IoStatsChart } from 'react-icons/io5';
import { TbDeviceIpadHorizontalMinus } from 'react-icons/tb';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

export const menuList: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    icon: <AiFillHome className='text-xl' />
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: <IoStatsChart className='text-xl' />
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
    icon: <CgNotes className='text-xl' />
  },
  {
    id: 'ipad',
    label: 'iPad',
    href: '#ipad',
    icon: <TbDeviceIpadHorizontalMinus className='text-xl' />
  },
  {
    id: 'shop',
    label: 'Shop',
    href: '#shop',
    icon: <FiShoppingBag className='text-xl' />
  }
];

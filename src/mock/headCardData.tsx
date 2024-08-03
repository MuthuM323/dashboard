import { FaApple, FaBeer, FaCoffee } from "react-icons/fa";
import { TableData } from "../components/DataTable";
import { IconButtonProps } from "../components/IconButton";
import { IoFastFood, IoSettingsOutline } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { SiGooglemarketingplatform } from "react-icons/si";
import { ReviewData } from "../components/ReviewCard";

const cardData = [
  {
    icon: FaBeer,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    title: 'Total Orders',
    value: '75',
    percentageChange: '3%',
    percentageColor: 'text-green-500',
    img: "/img/home/pic1.png"
  },
  {
    icon: FaCoffee,
    iconColor: 'text-brown-500',
    bgColor: 'bg-brown-100',
    title: 'Total Delivered',
    value: '70',
    percentageChange: '3%',
    percentageColor: 'text-red-500',
    img: "/img/home/pic2.png"

  },
  {
    icon: FaApple,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-100',
    title: 'Total Cancelled',
    value: '05',
    percentageChange: '3%',
    percentageColor: 'text-green-500',
    img: "/img/home/pic3.png"

  },
  {
    icon: FaBeer,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    title: 'Total Revenue',
    value: '$12K',
    percentageChange: '5%',
    percentageColor: 'text-green-500',
    img: "/img/home/pic4.png"

  }
];
export default cardData;

export const data: TableData[] = [
  { customer: 'John Doe', orderNo: '#00123', amount: '$150.00', status: 'Delivered', img: "/img/profile.jpg" },
  { customer: 'Jane Smith', orderNo: '#00124', amount: '$200.00', status: 'Cancelled', img: "/img/profile2.jpg" },
  { customer: 'John Doe', orderNo: '#00123', amount: '$150.00', status: 'Delivered', img: "/img/profile3.jpg" },
  { customer: 'Emily Johnson', orderNo: '#00125', amount: '$120.00', status: 'Cancelled', img: "/img/profile.jpg" },
  { customer: 'John Doe', orderNo: '#00123', amount: '$150.00', status: 'Delivered', img: "/img/profile2.jpg" },
  { customer: 'Jane Smith', orderNo: '#00124', amount: '$200.00', status: 'Cancelled', img: "/img/profile3.jpg" },
];

export const staticData: IconButtonProps[] = [
  {
    bgColor: 'bg-red-200',
    textColor: 'text-red-800',
    icon: <SiGooglemarketingplatform className="text-md" />,
    title: 'Goals',
    arrowColor: 'bg-gray-600'
  },
  {
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-800',
    icon: <FaBowlFood className="text-md" />,
    title: 'Populor Dishes',
    arrowColor: 'bg-gray-500'
  },
  {
    bgColor: 'bg-green-200',
    textColor: 'text-green-800',
    icon: <IoFastFood className="text-md" />,
    title: 'Menus',
    arrowColor: 'bg-gray-400'
  }
];


export const reviews: ReviewData[] = [
  {
    profileImage: '/img/profile.jpg',
    name: 'Jese Leos',
    rating: 4.5,
    reviewText: 'This is my third Invicta Pro Diver. They are just fantastic value for money.'
  },
  {
    profileImage: '/img/profile2.jpg',
    name: 'Alex Johnson',
    rating: 5,
    reviewText: 'Excellent watch! Highly recommended.'
  },
  {
    profileImage: '/img/profile3.jpg',
    name: 'Maria Garcia',
    rating: 3,
    reviewText: 'Good quality but a bit expensive.'
  }
];

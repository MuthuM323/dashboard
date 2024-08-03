import React from 'react';
import { FaBasketShopping } from 'react-icons/fa6';
import { IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import cardData, { data, reviews, staticData } from '../mock/headCardData';
import CardComponent from '../components/HeadCard';
import BarChart from '../components/BarChart';
import DataTable from '../components/DataTable';
import { IoSettingsOutline } from 'react-icons/io5';
import IconButton from '../components/IconButton';
import ReviewCard from '../components/ReviewCard';

const Home: React.FC = () => {
    return (
        <div className='m-2 text-white rounded overflow-y-scroll no-scrollbar'>
            <div className="text-2xl font-bold my-2">Dashboard</div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-4/6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                        {cardData.map((data, index) => (
                            <CardComponent
                                key={index}
                                icon={data.icon}
                                iconColor={data.iconColor}
                                bgColor={data.bgColor}
                                title={data.title}
                                value={data.value}
                                percentageChange={data.percentageChange}
                                percentageColor={data.percentageColor}
                                img={data.img}
                            />
                        ))}
                    </div>
                    <div className='border border-gray-900 rounded-lg mt-4'>
                        <div className="flex justify-between  mt-4">
                            <div className="text-xl font-bold">Activity</div>
                            <div className='text-sm border border-gray-800 flex rounded-3xl px-3'>
                                Weekly
                                <div>
                                    <IoMdArrowDropdown className='text-lg mt-1' />
                                </div>
                            </div>
                        </div>
                        <BarChart />
                    </div>
                    <div className='border border-gray-900 rounded-lg mt-4'>
                        <div className="text-xl font-bold m-2 ">Recent Orders</div>
                        <DataTable data={data} />
                    </div>
                </div>
                <div className="lg:w-2/6 mt-4 lg:mt-0">
                    <div className='border border-gray-900 mx-4 rounded-lg p-2'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-gray-300'>Net Profile</p>
                                <div className='text-3xl font-bold my-1'>$ 6759.25</div>
                                <div className='flex items-center text-green-500'>
                                    <IoMdArrowDropup className='text-lg mx-1 my-1' />
                                    <div>3%</div>
                                </div>
                            </div>
                            <div className="relative w-28 h-28">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="4"></circle>
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="4" strokeDasharray="100" strokeDashoffset="65" strokeLinecap="round"></circle>
                                </svg>
                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <div className="text-center text-lg font-bold text-blue-600 dark:text-blue-500">35%</div>
                                    <p className='text-center text-xs'>Goal Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-900 mx-4 rounded-lg p-2 mt-2'>
                        {staticData.map((data, index) => (
                            <IconButton
                                key={index}
                                bgColor={data.bgColor}
                                textColor={data.textColor}
                                icon={data.icon}
                                title={data.title}
                                arrowColor={data.arrowColor}
                            />
                        ))}
                    </div>
                    <div>
                        <div className='border border-gray-900 mx-4 rounded-lg p-2 mt-3'>
                            <div className="text-xl font-bold m-2 ">Customer's Feedback</div>
                            {reviews.map((review, index) => (
                                <ReviewCard
                                    key={index}
                                    data={review}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

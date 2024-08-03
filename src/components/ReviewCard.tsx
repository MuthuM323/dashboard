// types.ts
export interface ReviewData {
    profileImage: string;
    name: string;
    rating: number; // Number of stars to be shown (e.g., 4.5)
    reviewText: string;
  }

  // ReviewCard.tsx

interface ReviewCardProps {
  data: ReviewData;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
  const { profileImage, name, rating, reviewText } = data;
  
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const totalStars = 5;
  
  return (
    <article className='p-2'>
      <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src={profileImage} alt="Profile" />
        <div className="font-medium dark:text-white">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        {[...Array(filledStars)].map((_, index) => (
          <svg key={`filled-${index}`} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {halfStar && (
          <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        )}
        {[...Array(totalStars - Math.ceil(rating))].map((_, index) => (
          <svg key={`empty-${index}`} className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <p className="mb-2 pb-2 border-b border-gray-800">{reviewText}</p>
    </article>
  );
};

export default ReviewCard;

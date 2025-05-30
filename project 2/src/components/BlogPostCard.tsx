import { Link } from 'react-router-dom';
import Card from './Card';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const BlogPostCard = ({ title, excerpt, date, category, imageUrl }: BlogPostCardProps) => {
  return (
    <Card className="h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link to="/blog" className="text-blue-600 hover:underline font-medium inline-flex items-center">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

export default BlogPostCard;
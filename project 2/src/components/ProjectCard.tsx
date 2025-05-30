import { ReactNode } from 'react';
import Card from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  contributions: string[];
  icon: ReactNode;
  tags: string[];
}

const ProjectCard = ({ title, description, contributions, icon, tags }: ProjectCardProps) => {
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-600">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <h4 className="font-medium text-gray-800 mb-2">Key Contributions:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {contributions.map((contribution, index) => (
            <li key={index} className="text-gray-600">{contribution}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
import { ReactNode } from 'react';

interface SkillBadgeProps {
  icon: ReactNode;
  label: string;
}

const SkillBadge = ({ icon, label }: SkillBadgeProps) => {
  return (
    <div className="skill-badge">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default SkillBadge;

import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
}

const FeatureCard = ({ title, description, icon: Icon, route }: FeatureCardProps) => {
  return (
    <Link to={route} className="feature-card">
      <div className="mb-4 text-finverse-blue dark:text-finverse-accent">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-finverse-blue dark:text-finverse-white">
        {title}
      </h3>
      <p className="text-finverse-black/80 dark:text-finverse-white/80 flex-grow">
        {description}
      </p>
      <div className="mt-4 text-finverse-blue dark:text-finverse-accent flex items-center text-sm font-medium">
        Learn more
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
};

export default FeatureCard;

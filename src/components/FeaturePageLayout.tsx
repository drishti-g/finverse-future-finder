
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface FeaturePageLayoutProps {
  title: string;
  subheading: string;
  children: ReactNode;
}

const FeaturePageLayout = ({ title, subheading, children }: FeaturePageLayoutProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-gray-50 dark:bg-finverse-black/95">
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/#features"
          className="inline-flex items-center text-finverse-blue dark:text-finverse-accent hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to features
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-finverse-blue dark:text-finverse-white mb-3">
            {title}
          </h1>
          <p className="text-lg text-finverse-black/80 dark:text-finverse-white/80">
            {subheading}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default FeaturePageLayout;

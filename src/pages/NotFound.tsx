import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4 animate-fade-in">
          <h1 className="text-8xl font-display font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button size="lg" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;

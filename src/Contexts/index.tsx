"use client";
import LazyImage from "@/components/Common/Image"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LoaderContext = createContext<any>(null);
const LoaderContextProvider = ({ children }: { children?: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <div className="fixed left-0 top-0 z-auto flex h-full min-h-screen w-full items-center justify-center bg-primaryBlue opacity-100">
          <LazyImage
            src="https://factory-help.online/wp-content/uploads/2023/10/Untitle-1.png"
            alt="Loader"
            className="image-scale-in-out w-[400px]"
          />
        </div>
      ) : (
        children
      )}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);

export default LoaderContextProvider;

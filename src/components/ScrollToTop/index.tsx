import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [transform, setTransform] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      if (window.pageYOffset > 100) {
        setTransform(true);
      } else {
        setTransform(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-32 transition-all duration-300 ease-in-out z-[999]  ${
        transform ? "-right-1" : "-right-40"
      }`}
    >
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md dark:bg-black/70 bg-white text-white shadow-md transition-all duration-300 ease-in-out hover:bg-white/90 dark:hover:bg-dark"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-dark dark:border-white"></span>
        </div>
      )}
    </div>
  );
}

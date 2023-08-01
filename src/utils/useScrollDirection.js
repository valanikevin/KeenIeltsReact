import { useState, useEffect } from "react";

const useScrollDirection = () => {
  // Initialize state with undefined to make it nullable
  const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    // Store the previous scroll position
    let previousScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      // Get the new scroll position
      const currentScrollPosition = window.pageYOffset;

      // Determine scroll direction
      const direction =
        currentScrollPosition > previousScrollPosition ? "down" : "up";

      // Update the scroll direction state
      setScrollDirection(direction);

      // Update the previous scroll position for the next comparison
      previousScrollPosition = currentScrollPosition;
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means the effect runs once on mount and clean up on unmount

  return scrollDirection;
};

export default useScrollDirection;

import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", watchWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", watchWidth);
      }
    };
  }, []);

  return windowWidth;
}

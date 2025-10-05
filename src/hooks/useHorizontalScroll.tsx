import { useEffect, useRef } from "react";

export default function useHorizontalSrcoll<T extends HTMLElement>() {
  const elRef = useRef<T>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      e.preventDefault(); // always prevent window scroll
      e.stopPropagation();

      el.scrollBy({
        left: e.deltaY * 5,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return elRef;
}

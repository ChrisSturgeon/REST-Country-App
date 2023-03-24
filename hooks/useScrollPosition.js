import { useState, useLayoutEffect } from 'react';

function useDisplayScrollButton() {
  const windowHeight = window.innerHeight;
  const [display, setDisplay] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      if (window.pageYOffset > windowHeight) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('click', updatePosition);
  }, []);
  return display;
}

export { useDisplayScrollButton };

import { useState, useEffect } from 'react';
// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}
// Usage
function App() {
  const size: Size = useWindowSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}
// Hook
function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  const container = '';

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      console.log(
        document.getElementsByClassName('sub_contents')[0].clientHeight,
      );

      if (document.getElementsByClassName('idx_container').length !== 0) {
        document
          .getElementsByClassName('idx_container')[0]
          .setAttribute('height', '');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;

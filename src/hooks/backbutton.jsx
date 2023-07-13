import { useEffect } from 'react';

function useBackButtonReload() {
  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
}

export default useBackButtonReload;

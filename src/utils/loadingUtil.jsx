import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const setLoadingState = (value) => {
    setLoading(value);
  };

  const isLoading = () => {
    return loading;
  };

  return { setLoadingState, isLoading };
};

export default useLoading;

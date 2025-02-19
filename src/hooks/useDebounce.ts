import {useEffect, useState} from 'react';

type Props = {
  value: number;
  delay: number;
};

const useDebounce = (props: Props) => {
  const {value, delay} = props;
  const [debouncedValue, setDebouncedValue] = useState<number>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const debounceTimeoutId = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(debounceTimeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;

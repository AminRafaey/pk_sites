import { useEffect, useState } from 'react';

const useCounter = (isVisible: boolean, totalNumber: any) => {
    const [counter, setCounter] = useState(0);

    const number = totalNumber;
    let result = 1;

    switch (true) {
        case number < 400:
            result = 1;
            break;
        case number < 1000:
            result = 3;
            break;
        case number < 2000:
            result = 5;
            break;
        default:
            result = 20;
            break;
    }
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                if (counter < totalNumber) {
                    setCounter((prevCounter: number) => prevCounter + result);
                } else {
                    setCounter(() => totalNumber);
                    clearInterval(interval);
                }
            }, 1);

            return () => clearInterval(interval);
        }

    }, [counter, totalNumber, isVisible, setCounter, result]);

    return { counter, isVisible, setCounter };
};

export default useCounter;

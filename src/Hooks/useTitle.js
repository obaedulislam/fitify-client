import  { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - FitiFy Fitness`;
    }, [title])
};

export default useTitle;
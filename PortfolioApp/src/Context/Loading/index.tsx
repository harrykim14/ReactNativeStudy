import React, { createContext, useEffect, useState } from 'react';

const defaultContext: ILoadingContext = {
    isLoading: false,
}

const LoadingContext = createContext(defaultContext);

interface Props {
    children : JSX.Element | Array<JSX.Element>;
}

const LoadingContextProvider = ({children} : Props ) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
    }, [])

    return (
        <LoadingContext.Provider
        value={{
            isLoading,
        }}>
            {children}
        </LoadingContext.Provider>
    )
}

export {LoadingContextProvider, LoadingContext};
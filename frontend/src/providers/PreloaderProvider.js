import {createContext, useMemo, useState} from "react";

export const PreloaderContext = createContext({isVisible: false});

export default function PreloaderProvider({children}) {
    const [isVisible, setIsVisible] = useState(true);
    //const value = useMemo(() => ({isVisible, setIsVisible}), [isVisible]);
    return (<PreloaderContext.Provider value={{isVisible, setIsVisible}}>
        {children}
    </PreloaderContext.Provider>);
}
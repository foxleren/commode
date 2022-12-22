import {createContext, useState} from "react";

export const PreloaderContext = createContext({isVisible: false});

export default function PreloaderProvider({children}) {
    const [isVisible, setIsVisible] = useState(true);
    //const value = useMemo(() => ({isVisible, setIsVisible}), [isVisible]);
    const showPreloader = (delay) => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, delay);
    }
    return (<PreloaderContext.Provider value={{isVisible, setIsVisible, showPreloader}}>
        {children}
    </PreloaderContext.Provider>);
}
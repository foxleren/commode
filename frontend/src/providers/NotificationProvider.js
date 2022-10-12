import {createContext, useState} from "react";

export const NotificationContext = createContext({isNotificationVisible: false});

export default function NotificationProvider({children}) {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [isNotificationClosed, setIsNotificationClosed] = useState(false);
    return (<NotificationContext.Provider
        value={{isNotificationVisible, setIsNotificationVisible, isNotificationClosed, setIsNotificationClosed}}>
        {children}
    </NotificationContext.Provider>);
}
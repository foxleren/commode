import {useContext} from "react";
import {NotificationContext} from "../providers/NotificationProvider";

export default function useNotification() {
    return useContext(NotificationContext);
}
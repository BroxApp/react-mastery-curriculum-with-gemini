
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {hideNotification} from "../store/redux-store/notificationSlice";

export default function NotificationToast(){
    const dispatch = useDispatch();

    const {message, visible}=useSelector(
        (state)=>state.notification
    );

    useEffect(()=>{
      if(!visible) return;
      
      const timer = setTimeout(()=>{
        dispatch(hideNotification());
      },3000);

      return ()=> clearTimeout(timer);
    }, [visible, dispatch]);

    if(!visible){
        return null;
    }
    return(
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg">
            {message}
        </div>
    );
}

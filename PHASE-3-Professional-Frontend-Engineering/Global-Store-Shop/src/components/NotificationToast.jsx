
import { useSelector } from "react-redux";
export default function NotificationToast(){
    const {message, type, visible}=useSelector(
        (stete)=>state.Notification
    );
    if(!visible){
        return null;
    }
    return(
        <div className="fixed top-5 right-5 gb-green-500 text-white px-4 py-3 rounded-lg shadow-lg">
            {message}
        </div>
    );
}

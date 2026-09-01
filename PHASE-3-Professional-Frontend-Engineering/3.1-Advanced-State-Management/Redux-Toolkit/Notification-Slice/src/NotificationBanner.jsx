import {useSelector, useDispatch} from 'react-redux'
import { clearNotification } from './notificationSlice'

export function NotificationBanner (){
    const dispatch = useDispatch();
    const {message, type} = useSelector((state)=>state.notification);

    if(!message) return null;
    const isSuccess = type === 'success';

    return(
        <div style={{
      padding: '12px 20px',
      marginBottom: '15px',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isSuccess ? '#d4edda' : '#f8d7da',
      color: isSuccess ? '#155724' : '#721c24',
      border: `1px solid ${isSuccess ? '#c3e6cb' : '#f5c6cb'}`
        }}>
            <span>{message}</span>
            <button onClick = {()=>dispatch(clearNotification())} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                X
            </button>
        </div>
    );
}
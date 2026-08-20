import { useDispatch } from 'react-redux';
import { showNotification } from './notificationSlice';
import { NotificationBanner } from './NotificationBanner';

function App() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', direction: 'rtl' }}>
      {/* کامپوننت بنر اضافه شد */}
      <NotificationBanner />

      <h2>تست سیستم اطلاعات</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button 
          onClick={() => dispatch(showNotification({
            message: 'عملیات با موفقیت انجام شد!',
            type: 'success'
          }))}
          style={{ padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          ارسال پیام موفقیت
        </button>

        <button 
          onClick={() => dispatch(showNotification({
            message: 'خطایی در ثبت اطلاعات رخ داد!',
            type: 'error'
          }))}
          style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          ارسال پیام خطا
        </button>
      </div>
    </div>
  );
}

export default App;
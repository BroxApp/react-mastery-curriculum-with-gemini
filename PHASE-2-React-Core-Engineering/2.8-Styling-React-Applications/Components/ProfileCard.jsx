import Button from "./Button";

function ProfileCard({ userName = "کاربر عزیز" }) { // استفاده از props برای userName
  return (
    // کلاس‌های Tailwind برای استایل‌دهی مدرن:
    <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-2xl shadow-lg text-center">
      
      {/* عکس: گرد کردن کامل تصویر */}
      <img 
        src="my-img.png" 
        alt="Profile" 
        className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-500"
      />
      
      {/* نام کاربری: سایز متن و وزن */}
      <p className="text-xl font-bold text-gray-800 mb-4">{userName}</p>
      
      {/* دکمه */}
      <Button onClick={() => console.log("کلیک شد!")}>مشاهده پروفایل</Button>
    </div>
  );
}

export default ProfileCard;
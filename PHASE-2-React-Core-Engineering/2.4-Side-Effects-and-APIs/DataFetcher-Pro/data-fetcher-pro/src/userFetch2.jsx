import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users/1';

function DataFetch() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // اضافه کردن استیت خطا

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("خطای شبکه یا سرور!");
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                // ذخیره پیام خطا در استیت برای نمایش در UI
                setError(err.message); 
            } finally {
                // این بلوک چه موفقیت آمیز باشد چه با خطا، در نهایت اجرا می‌شود
                setIsLoading(false); 
            }
        }
        getData();
    }, []);

    return (
        <>
            <p>This is the second Data Fetch Project.</p>
            <div>
                {/* بررسی وضعیت‌ها به ترتیب منطقی */}
                {isLoading ? (
                    <p>Loading ... </p>
                ) : error ? (
                    <p style={{ color: 'red' }}>{error}</p>
                ) : (
                    <div>
                        {/* استفاده از optional chaining برای امنیت بیشتر */}
                        <p>Name: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default DataFetch;
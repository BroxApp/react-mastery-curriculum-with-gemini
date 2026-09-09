import {z} from 'zod';

export const schemas = z.object ({
    userName: z.string().min(3, 'نام کاربری باید حداقل 3 کارکتر باشد.'),
    email: z.email({message:"فرمت ایمیل نامعتبر است."}),
    role: z.check(),
    password: z.string().min(6, "پسورد باید حداقل 6 کارکتر باشد."),
    confirmPassword: z.string(),
    termsAccepted: z.check()
}).refine((data)=>data.password === data.confirmPassword,{
    message: "تکرار پسورد مطابقت ندارد.",
    path: ["confirmPassword"]
})
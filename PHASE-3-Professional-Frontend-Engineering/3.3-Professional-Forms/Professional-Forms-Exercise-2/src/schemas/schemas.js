import {z} from 'zod';

export const schemas = z.object ({
    userName: z.string().min(3, 'نام کاربری باید حداقل 3 کارکتر باشد.'),
    email: z.email({message:"فرمت ایمیل نامعتبر است."}),
    role: z.enum(["frontend", "backend"], {
        message: "لطفاً نقش خود را انتخاب کنید."
        }),
    password: z.string().min(6, "پسورد باید حداقل 6 کارکتر باشد."),
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است."),
    termsAccepted: z.boolean().refine((value) => value === true, {
        message: "پذیرفتن قوانین الزامی است."
    })
}).refine((data)=>data.password === data.confirmPassword,{
    message: "تکرار پسورد مطابقت ندارد.",
    path: ["confirmPassword"]
})
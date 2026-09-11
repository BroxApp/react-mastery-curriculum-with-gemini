import {z} from "zod";

export const wizardSchema = z.object ({
    fullName: z
    .string()
    .min(3, "نام و نام خانوادگی باید حداقل 3 کارکتر باشد."),

    email: z
    .email({message: "فرمت ایمیل نادرست است.",}),

    role: z
    .enum(["frontend","backend","designer"],
         {message: "لطفا حوزه‌ی کاری خود را انتخاب کنید."}),

    password: z
    .string()
    .min(6, "رمز عبور باید حداقل 6 کارکتر باشد."),

    confirmPassword: z
    .string()
    .min(1, "تکرار رمز عبور الزامی است."),

    termsAccepted: z
    .boolean()
    .refine((value)=>value===true,
     {message: "پذیرفتن قوانین بصورت کورکورانه الزامی است."}),
}).refine((data)=>data.password===data.confirmPassword,
        {message: "تکرار رمز عبور با خود رمز عبور مطابقت ندارد.",
        path: ["confirmPassword"],});
import {z} from 'zod';

export const schemas = z.object({
    username: z.string().min(3, 'نام کاربری باید بین 3 تا 20 کارکتر باشد.').max(20,'نام کاربری باید بین 3 تا 20 کارکتر باشد'),
    email: z.email({message:'فرمت ایمیل نادرست است.'}),
    password: z.string().min(6, 'رمز عبور باید حداقل ۶ کارکتر باشد.')
})
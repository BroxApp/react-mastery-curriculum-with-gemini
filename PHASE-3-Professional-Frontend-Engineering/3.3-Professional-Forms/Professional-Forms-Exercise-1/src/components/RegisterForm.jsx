import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "../schema/schemas";

export function RegisterForm (){
    const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
}= useForm({
    resolver: zodResolver(schemas),
    mode: 'onTouched'
});

const onSubmit = (data) => {
    console.log('اطلاعات ثبت نام', data);
}

return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>نام کاربری:</label>
            <input {...register('username')}/>
            {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
            <label>ایمیل:</label>
            <input {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
            <label>پسورد:</label>
            <input {...register('password')}/>
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '...در حال ارسال' : 'ثبت نام'}
        </button>
    </form>
)
}


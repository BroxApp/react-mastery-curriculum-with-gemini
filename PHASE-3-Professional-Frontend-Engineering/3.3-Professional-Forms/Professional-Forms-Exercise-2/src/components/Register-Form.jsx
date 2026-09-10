
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemas } from "../schemas/schemas";

export function RegisterForm (){
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors, isSubmitting},
    } = useForm({
        resolver: zodResolver(schemas),
        mode: 'onTouched',
    });
    const onSubmit = async (data)=> {
        console.log ("فرم با موفقیت ارسال شد:", data);
        reset();
    };
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>نام کاربری:</label>
                <input {...register("userName")} />
                {errors.userName && <p>{errors.userName.message}</p>}
            </div>

            <div>
                <label>ایمیل:</label>
                <input {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label>نقش(وظیفه):</label>
                <select {...register("role")}>
                    <option value="">-- لطفا یک نقش انتخاب کنید. --</option>
                    <option value="frontend">توسعه دهنده فرانت اند.</option>
                    <option value="backend">توسعه دهنده بک اند.</option>
                </select>
                {errors.role && <p>{errors.role.message}</p>}
            </div>

            <div>
                <label>پسورد:</label>
                <input type="password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label>تایید رمز عبور:</label>
                <input type="password" {...register("confirmPassword")} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <div>
                <label>
                <input type="checkbox" {...register("termsAccepted")} />
                قوانین سایت را می‌پذیرم.
                </label>
                {errors.termsAccepted && <p>{errors.termsAccepted.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "در حال ارسال..." : "ثبت نام"}
            </button>

        </form>
    )

}
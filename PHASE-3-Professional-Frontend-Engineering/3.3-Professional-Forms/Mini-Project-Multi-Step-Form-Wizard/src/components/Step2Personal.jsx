export function Step2Account({ register, errors, onNext, onPrev }) {
    return (
        <div>
            <h2>مشخصات حساب</h2>

            <div>
                <label>حوزه کاری</label>

                <select {...register("role")}>
                    <option value="">انتخاب کنید</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="designer">Designer</option>
                </select>

                {errors.role && (
                    <p>{errors.role.message}</p>
                )}
            </div>

            <div>
                <label>رمز عبور</label>

                <input
                    type="password"
                    {...register("password")}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}
            </div>

            <div>
                <label>تکرار رمز عبور</label>

                <input
                    type="password"
                    {...register("confirmPassword")}
                />

                {errors.confirmPassword && (
                    <p>{errors.confirmPassword.message}</p>
                )}
            </div>

            <div>
                <button type="button" onClick={onPrev}>
                    قبلی ➡️
                </button>

                <button type="button" onClick={onNext}>
                    بعدی ⬅️
                </button>
            </div>
        </div>
    );
}
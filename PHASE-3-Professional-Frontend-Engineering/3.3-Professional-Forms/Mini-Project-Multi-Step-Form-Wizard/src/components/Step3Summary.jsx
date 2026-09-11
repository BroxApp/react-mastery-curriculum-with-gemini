export function Step3Summary({
    register,
    errors,
    watch,
    onPrev,
    isSubmitting,
}) {
    const fullName = watch("fullName");
    const email = watch("email");
    const role = watch("role");

    return (
        <div>
            <h2>مرور اطلاعات</h2>

            <p>نام و نام خانوادگی: {fullName}</p>
            <p>ایمیل: {email}</p>
            <p>حوزه کاری: {role}</p>

            <div>
                <label>
                    <input
                        type="checkbox"
                        {...register("termsAccepted")}
                    />

                    قوانین را می‌پذیرم.
                </label>

                {errors.termsAccepted && (
                    <p>{errors.termsAccepted.message}</p>
                )}
            </div>

            <div>
                <button type="button" onClick={onPrev}>
                    قبلی ➡️
                </button>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ارسال..." : "ثبت نهایی ✅"}
                </button>
            </div>
        </div>
    );
}
export function Step1Personal({ register, errors, onNext }) {
    return (
        <div>
            <h2>اطلاعات فردی</h2>

            <div>
                <label>نام و نام خانوادگی</label>

                <input
                    type="text"
                    {...register("fullName")}
                />

                {errors.fullName && (
                    <p>{errors.fullName.message}</p>
                )}
            </div>

            <div>
                <label>ایمیل</label>

                <input
                    type="email"
                    {...register("email")}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}
            </div>

            <button type="button" onClick={onNext}>
                بعدی ⬅️
            </button>
        </div>
    );
}
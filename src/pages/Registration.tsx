import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
    name: string;
    mobile: string;
    email: string;
    city: string;
};

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        localStorage.setItem('registrationData', JSON.stringify(data));
        navigate('/confirmation');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>الاسم الكامل</label>
                <input
                    {...register('name', { required: 'مطلوب' })}
                    type="text"
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
                <label>رقم الجوال</label>
                <input
                    {...register('mobile', {
                        required: 'مطلوب',
                        pattern: /^05\d{8}$/
                    })}
                    type="tel"
                />
                {errors.mobile && <span>رقم غير صحيح</span>}
            </div>

            <div>
                <label>البريد الإلكتروني</label>
                <input
                    {...register('email', {
                        required: 'مطلوب',
                        pattern: /^\S+@\S+$/i
                    })}
                    type="email"
                />
                {errors.email && <span>بريد غير صحيح</span>}
            </div>

            <div>
                <label>المدينة/الدولة</label>
                <input
                    {...register('city', { required: 'مطلوب' })}
                    type="text"
                />
                {errors.city && <span>{errors.city.message}</span>}
            </div>

            <button type="submit">تسجيل</button>
        </form>
    );
};
export default Registration;
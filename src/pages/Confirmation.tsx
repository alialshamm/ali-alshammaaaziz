import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Confirmation.module.css'

const Confirmation = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('registrationData') || '{}');

    useEffect(() => {
        if (!userData.name) {
            navigate('/');
        }
    }, []);

    return (
        <div className={styles.confirmationContainer}>
            <div className={styles.successAnimation}>
                <svg className={styles.checkmark} viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="25" fill="none" />
                    <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>

            <h1 className={styles.confirmationTitle}>تم التسجيل بنجاح!</h1>

            <div className={styles.userDetails}>
                <h2>تفاصيل التسجيل:</h2>
                <div className={styles.detailItem}>
                    <span>الاسم:</span>
                    <p>{userData.name}</p>
                </div>
                <div className={styles.detailItem}>
                    <span>الجوال:</span>
                    <p>{userData.mobile}</p>
                </div>
                <div className={styles.detailItem}>
                    <span>البريد الإلكتروني:</span>
                    <p>{userData.email}</p>
                </div>
                <div className={styles.detailItem}>
                    <span>المدينة:</span>
                    <p>{userData.city}</p>
                </div>
            </div>

            <div className={styles.nextSteps}>
                <h3>الخطوات التالية:</h3>
                <ul>
                    <li>ستصلك رسالة تأكيد على الجوال خلال 24 ساعة</li>
                    <li>احتفظ بالرقم المرجعي: #{(Math.random() * 1000000).toFixed(0)}</li>
                    <li>استعرض العروض الحصرية في قسم العروض</li>
                </ul>
            </div>

            <button
                className={styles.backButton}
                onClick={() => navigate('/')}
            >
                العودة للصفحة الرئيسية
            </button>
        </div>
    );
};

export default Confirmation;
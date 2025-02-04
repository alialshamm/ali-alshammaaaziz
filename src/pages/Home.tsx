import { useNavigate } from 'react-router-dom';
import styles from './styles/Home.module.css'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img
                    src="/logo.png"
                    alt="عزيز مول"
                    className={styles.logo}
                />
                <h1 className={styles.title}>مرحبا بكم في عزيز مول</h1>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.heroSection}>
                    <img
                        src="/mall-interior.jpg"
                        alt="داخل المول"
                        className={styles.heroImage}
                    />
                    <div className={styles.overlayText}>
                        <h2>استمتع بتجربة تسوق فريدة</h2>
                        <p>احصل على عروض حصرية عند التسجيل</p>
                    </div>
                </div>

                <button
                    className={styles.ctaButton}
                    onClick={() => navigate('/register')}
                >
                    ابدأ التسجيل الآن
                </button>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <h3>🎁 عروض خاصة</h3>
                        <p>خصومات تصل إلى 70%</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>⏰ متاح 24 ساعة</h3>
                        <p>خدمة عملاء على مدار الساعة</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>🛒 تجربة مميزة</h3>
                        <p>أكثر من 500 متجر عالمي</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
import { useEffect, useState } from 'react';

// إحداثيات عزيز مول الافتراضية (تغييرها للإحداثيات الحقيقية)
const MALL_COORDS = {
    lat: 24.7136,
    lng: 46.6753,
    radius: 100 // نصف القاش بالمتر
};

const GeoLocationCheck = ({ children }: { children: React.ReactNode }) => {
    const [isAllowed, setIsAllowed] = useState(false);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;

                    const distance = calculateDistance(
                        userLat, userLng,
                        MALL_COORDS.lat, MALL_COORDS.lng
                    );

                    setIsAllowed(distance <= MALL_COORDS.radius);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setIsAllowed(false);
                }
            );
        } else {
            setIsAllowed(false);
        }
    }, []);

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        // حساب المسافة باستخدام Haversine formula
        const R = 6371e3; // متر
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    };

    if (!isAllowed) {
        return (
            <div className="geo-alert">
                <h2>الخدمة متوفرة فقط داخل عزيز مول</h2>
            </div>
        );
    }

    return <>{children}</>;
};

export default GeoLocationCheck;
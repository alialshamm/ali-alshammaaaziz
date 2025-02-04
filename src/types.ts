// تعريف أنواع البيانات
export interface UserData {
  name: string;
  mobile: string;
  email: string;
  city: string;
}

// تعريف نوع للإحداثيات الجغرافية
export interface Coordinates {
  lat: number;
  lng: number;
}

// تعريف نوع للرسائل
export type AlertMessage = {
  type: 'success' | 'error' | 'warning';
  message: string;
};

// إذا كنت لا تريد تصدير أي شيء، أضف هذا السطر
export { };
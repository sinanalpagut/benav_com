/* ============================================================
   benav.com.tr — SİTE VERİSİ
   Yeni uygulama eklemek / bilgileri güncellemek için
   yalnızca aşağıdaki nesneleri düzenlemeniz yeterlidir.

   icon / privacy / deletion yolları public/ klasörüne göre
   köke göre mutlak yol olarak yazılır (örn. /icons/beje.png).
   ============================================================ */

/* Genel site bilgileri */
export const SITE = {
  name: "benav",
  role: "Mobil Uygulama Geliştiricisi",
  email: "info@benav.com.tr",
};

/* Uygulamalar.
   icon         : ikon görselinin yolu (public/icons/ altına koyun).
   googlePlayUrl: Google Play bağlantısı. Boş ("") bırakılırsa buton gizlenir.
   appStoreUrl  : App Store bağlantısı. Boş ("") bırakılırsa buton gizlenir.
   privacy      : ilgili gizlilik politikası sayfasının yolu (public/privacy/).
   deletion     : (opsiyonel) hesap & veri silme sayfasının yolu.            */
export const APPS = [
  {
    id: "beje",
    name: "Bêje — Kürtçe-Türkçe Öğren",
    tag: "Dil / Eğitim",
    desc: "Bêje ile Kürtçe ve Türkçe arasında kelime öğrenmek artık çok daha etkili ve eğlenceli!",
    icon: "/icons/beje.png",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.sinan.bejeapp",
    appStoreUrl: "https://apps.apple.com/us/app/b%C3%AAje-k%C3%BCrt%C3%A7e-%C3%B6%C4%9Fren/id6780462851",
    privacy: "/privacy/beje.html",
    privacyApple: "/privacy/beje-ios.html",
    privacyAppleVisible: true, // iOS uygulaması App Store'da yayında
    deletion: "/privacy/beje-hesap-silme.html",
  },
  {
    id: "esmaul-husna",
    name: "Esmaül Hüsna Pro – Sesli",
    tag: "İslami",
    desc: "Allah'ın 99 güzel ismini anlamları ve okunuşlarıyla keşfedin, üzerine düşünün.",
    icon: "/icons/esmaul-husna.png",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.sinan.esmaulhusna",
    appStoreUrl: "",
    privacy: "/privacy/esmaul-husna.html",
  },
];

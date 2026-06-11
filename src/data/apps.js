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
    appStoreUrl: "",
    privacy: "/privacy/beje.html",
    privacyApple: "/privacy/beje-ios.html",
    privacyAppleVisible: false, // iOS uygulaması App Store'da yayınlanınca true yapın
    deletion: "/privacy/beje-hesap-silme.html",
  },
  {
    id: "hadisim-var",
    name: "Hadisim Var",
    tag: "İslami",
    desc: "Güvenilir kaynaklardan derlenmiş hadisleri her gün cebinizde taşıyın; sade bir okuma deneyimiyle.",
    icon: "/icons/hadisim-var.png",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.sinan.hadisimvar.app",
    appStoreUrl: "",
    privacy: "/privacy/hadisim-var.html",
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
  {
    id: "linguist",
    name: "Linguist: AI Vocabulary",
    tag: "Dil / Eğitim",
    desc: "Yapay zeka destekli akıllı sözlük; kelimeleri anlamı, bağlamı ve örnekleriyle birlikte öğrenin.",
    icon: "/icons/linguist.png",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.sinan.linguist",
    appStoreUrl: "",
    privacy: "/privacy/linguist.html",
  },
  {
    id: "poliglota",
    name: "Políglota: İspanyolca Öğren",
    tag: "Dil / Eğitim",
    desc: "Políglota ile İspanyolcayı kelime kelime, günlük pratiklerle keyifli ve kalıcı şekilde öğrenin.",
    icon: "/icons/poliglota.png",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.poliglotaapp",
    appStoreUrl: "",
    privacy: "/privacy/poliglota.html",
    deletion: "/privacy/poliglota-hesap-silme.html",
  },
];

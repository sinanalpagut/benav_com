# benav

[benav.com.tr](https://benav.com.tr) — mobil uygulama geliştirici tanıtım sitesi.
**Vite + React** ile geliştirilmiştir.

## Geliştirme

```bash
npm install      # bağımlılıkları kur
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # production derlemesi -> dist/
npm run preview  # derlenmiş çıktıyı yerelde önizle
```

## Proje yapısı

```
public/                 # olduğu gibi sunulan statik dosyalar (kök dizine kopyalanır)
  app-ads.txt           # -> https://benav.com.tr/app-ads.txt  (AdMob için)
  icons/                # uygulama & site ikonları
  privacy/              # gizlilik politikası + hesap silme HTML sayfaları
src/
  data/apps.js          # SİTE bilgileri ve UYGULAMA listesi (içerik burada düzenlenir)
  components/           # Nav, Hero, Apps, About, Footer
  hooks.js              # tema, nav-scroll, scroll-reveal
  styles/style.css      # tüm stiller
index.html              # Vite giriş noktası
vercel.json             # Vercel ayarı + app-ads.txt için text/plain başlığı
```

İçeriği güncellemek için genellikle yalnızca **`src/data/apps.js`** dosyasını düzenlemek yeterlidir.
Yeni ikon eklerken görseli **`public/icons/`**, yeni gizlilik sayfası eklerken HTML'i **`public/privacy/`** altına koyun.

## Yayınlama (GitHub → Vercel → Natro alan adı)

### 1. GitHub'a yükle
```bash
git init
git add .
git commit -m "benav: Vite + React"
git branch -M main
git remote add origin https://github.com/<kullanici>/<repo>.git
git push -u origin main
```

### 2. Vercel ile deploy
1. [vercel.com](https://vercel.com) → **Add New → Project** → GitHub deposunu seç.
2. Vercel projeyi **Vite** olarak otomatik algılar:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy** → `proje-adi.vercel.app` adresinde yayına girer.

### 3. Natro alan adını bağla
1. Vercel projesi → **Settings → Domains** → `benav.com.tr` (ve `www.benav.com.tr`) ekle.
2. Vercel'in verdiği kayıtları **Natro DNS paneline** gir:
   - Kök alan (`benav.com.tr`): **A** kaydı → `76.76.21.21`
   - `www`: **CNAME** kaydı → `cname.vercel-dns.com`
   - (Vercel panelinde gösterilen güncel değerleri esas alın.)
3. DNS yayılması (birkaç dakika–saat) sonrası Vercel SSL'i otomatik kurar.

## AdMob — app-ads.txt doğrulaması

`app-ads.txt` `public/` altında olduğu için yayında **kök dizinden** sunulur:

```
https://benav.com.tr/app-ads.txt
```

İçerik:
```
google.com, pub-6888537824609825, DIRECT, f08c47fec0942fa0
```

Alan adı bağlandıktan sonra tarayıcıda bu adresi açıp metnin göründüğünü doğrulayın.
AdMob, Play Store'daki uygulamanızın geliştirici web sitesi alanı üzerinden bu dosyayı
otomatik tarar (genellikle 24 saat içinde).

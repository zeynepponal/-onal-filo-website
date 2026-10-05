# Önal Filo V2

Derleme ve bağımlılık gerektirmeyen, mobil uyumlu statik site. Önizlemek için index.html dosyasını tarayıcıda açın.

## GitHub / Vercel

1. ZIP'i açın. Bu klasörün içindeki index.html, style.css, script.js ve vercel.json dosyalarını mevcut GitHub deposunun site köküne yükleyip commit edin. Eski dosyaları değiştirmeden önce yedekleyin.
2. GitHub deposu Vercel'e bağlıysa güncelleme otomatik yayımlanır. Statik proje ayarları: Framework Preset = Other, Build Command boş, Output Directory = `.`; Root Directory bu dosyaların bulunduğu klasör olmalı.
3. Mevcut depo başka bir framework kullanıyorsa bu ayarları o projeye uygulamayın; bu klasörü ayrı statik Vercel projesi olarak içe aktarın.

## Teklif formu

Alıcı adresi verilmediği için form şu anda talep iletmez ve başarı mesajı göstermez.

index.html içindeki `<form id="quote-form" data-endpoint="" data-email="">` satırında:
- Gerçek gönderim için `data-endpoint` değerine Formspree gibi CORS destekleyen, FormData kabul eden form servisinizin HTTPS adresini ekleyin. Servisin başarılı POST yanıtları 2xx olmalı. Serviste alıcı e-postayı doğrulayın ve spam korumasını etkinleştirin.
- E-posta uygulamasıyla göndermek için `data-email` değerine gerçek alıcı adresini yazın. Bu yöntem kullanıcının e-posta uygulamasını açar; otomatik göndermez.

Yayına almadan önce gerçek bir test talebi göndererek alıcıya ulaştığını doğrulayın. Form servisinizin veri işleme koşullarına göre gerekiyorsa şirketin gerçek gizlilik/KVKK metnini ekleyin.

## Dosyalar

- index.html: içerik ve form bağlantısı
- style.css: renkler, tipografi ve responsive düzen
- script.js: form gönderimi ve durum mesajları
- vercel.json: statik yayın ayarları

Harici font, görsel veya JavaScript bağımlılığı yoktur. Hero görseli dosyaya gömülü özgün SVG yol kompozisyonudur; stok araç fotoğrafı veya logo kullanılmadı.

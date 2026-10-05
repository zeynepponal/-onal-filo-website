/* Yapılandırma: index.html form etiketinde data-endpoint veya data-email değerini doldurun. */
const form = document.querySelector('#quote-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (data.get('website')) return;
  const endpoint = form.dataset.endpoint.trim();
  const email = form.dataset.email.trim();
  if (!endpoint && !email) {
    status.textContent = 'Teklif formu henüz gönderime açılmadı. Lütfen daha sonra tekrar deneyin.';
    return;
  }
  if (!endpoint) {
    const labels = { company: 'Şirket Adı', name: 'Ad Soyad', phone: 'Telefon', email: 'E-posta', fleet: 'Araç Sayısı', message: 'Mesaj' };
    const body = Object.entries(labels).map(([key, label]) => `${label}: ${data.get(key) || ''}`).join('\n');
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Önal Filo — Teklif Talebi')}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Talebiniz e-posta uygulamanızda açıldı. İletmek için e-postayı gönderin.';
    return;
  }
  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Talebiniz gönderiliyor…';
  try {
    const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Gönderim başarısız');
    status.textContent = 'Teklif talebiniz alındı. Teşekkür ederiz.';
    form.reset();
  } catch {
    status.textContent = 'Talebiniz gönderilemedi. Lütfen biraz sonra tekrar deneyin.';
  } finally { button.disabled = false; }
});

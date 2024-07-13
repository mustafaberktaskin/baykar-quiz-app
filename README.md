# Quiz Uygulaması

Bu proje, kullanıcıların 10 soruluk bir quiz testi yapmalarını sağlayan bir web uygulamasıdır. Sorular JSON verisinden çekilmektedir ve her soru için A-B-C-D seçenekleri sunulmaktadır.

## Özellikler

- Toplam 10 soru, her biri 4 seçenekten (A-B-C-D) oluşur.
- Her soru ekranda 30 saniye kalır.
- İlk 10 saniye cevap seçeneklerine tıklanamaz, 10. saniyeden sonra tıklanabilir hale gelir.
- 30 saniye sonra otomatik olarak bir sonraki soruya geçilir.
- Geçmiş sorulara dönülemez.
- Test bitiminde her soruya verilen yanıtlar bir tablo olarak gösterilir.
- Test tamamlandığında kutlama amacıyla konfeti efekti gösterilir.

## Kurulum

1. Projeyi klonlayın:
    ```bash
    git clone https://github.com/kullanici/quiz-uygulamasi.git
    cd quiz-uygulamasi
    ```

2. Gerekli dosyaları edinin:
    - `index.html`
    - `styles.css`
    - `script.js`

## Kullanım

1. Proje klasöründe `index.html` dosyasını tarayıcınızda açın.
2. Quiz otomatik olarak başlayacaktır.

## Dosya Yapısı

- **index.html:** Uygulamanın HTML yapısını içerir.
- **styles.css:** Uygulamanın stil dosyasıdır ve sayfanın arka plan animasyonlarını ve genel stil ayarlarını içerir.
- **script.js:** Uygulamanın işlevselliğini sağlayan JavaScript kodlarını içerir.


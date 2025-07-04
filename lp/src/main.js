import './style.css';

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero">
      <div class="hero-content">
        <div class="hero-visual">
          <img src="./logo.png" alt="TegamiAI" class="hero-logo" />
          <img src="./robo.png" alt="TegamiAI Robot" class="hero-robot" />

        </div>
        <h1 class="hero-title">手紙で届ける、AIが綴る<br><span class="highlight">あなたの気持ち。</span></h1>
        <p class="hero-subtitle">AIがあなたの想いを温かな手紙に。<br>伝えたい気持ちを、美しい言葉で届けます。</p>
        <button class="hero-cta">手紙を綴る</button>
        <p class="hero-note">無料で今すぐはじめる</p>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">TegamiAIの<span class="highlight">3つの特徴</span></h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🤖💕</div>
            <h3>感情に寄り添うAI</h3>
            <p>AIがあなたの気持ちに寄り添った文章を生成。感情解析機能で、感謝・励まし・謝罪・恋心など、伝えたい想いを美しい言葉に変えます。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨✨</div>
            <h3>選べるデザイン</h3>
            <p>手触り感のあるデザインテンプレートを豊富にご用意。シチュエーションや相手に合わせて、特別な手紙を作成できます。</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚💝</div>
            <h3>想い出アルバム</h3>
            <p>書いた気持ちが履歴として残り、後から"アルバム"として振り返ることができます。大切な想い出を温かく保存します。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">使い方は<span class="highlight">とってもカンタン</span></h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>気持ちを選ぶ</h3>
            <p>感謝・励まし・謝罪など<br>伝えたい気持ちを選択</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>AIが文章生成</h3>
            <p>あなたの想いを美しい<br>手紙風の文章に変換</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>デザインを選択</h3>
            <p>お気に入りのテンプレートで<br>特別な手紙を完成</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">今すぐ、想いを<br>手紙にしませんか？</h2>
          <p class="cta-subtitle">無料で始められます</p>
          <button class="cta-button">TegamiAIを使う</button>
          <p class="cta-note">登録不要・すぐに始められます</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 TegamiAI. 温かな想いを届けるサービス</p>
    </div>
  </footer>
`;

// CTAボタンのクリックイベント
document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('hero-cta') ||
    e.target.classList.contains('cta-button')
  ) {
    // 手紙作成の第一歩として、気持ちの選択画面へ遷移（実装予定）
    alert(
      '✨ 手紙の作成を開始します！\n\n気持ちの選択画面へ移動します\n（実装予定）'
    );
  }
});

// アニメーション効果
document.addEventListener('DOMContentLoaded', () => {
  // 手紙のアニメーション
  const envelope = document.querySelector('.envelope');
  const heart = document.querySelector('.heart');

  if (envelope && heart) {
    setInterval(() => {
      envelope.style.transform = 'scale(1.1) rotate(5deg)';
      heart.style.transform = 'scale(1.2)';

      setTimeout(() => {
        envelope.style.transform = 'scale(1) rotate(0deg)';
        heart.style.transform = 'scale(1)';
      }, 500);
    }, 3000);
  }

  // スクロール時のフェードイン効果
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .step').forEach((el) => {
    observer.observe(el);
  });
});

// JavaScript Document

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.classList.add("fadeout");
});




function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
	
	$('#concept a[href]','#nailist a[href]','#access a[href]').on('click', function()  {
    body.classList.remove('nav-open');
	});
}
toggleNav();



//$(window).scroll(function() {
 //       var scroll = $(window).scrollTop();
//	$('#header-video').css({
	//		transform: 'scale('+(100 + scroll/10)/100+')',
	//		top: -(scroll/50)  + "%",
   //     });
 //   });



const text = "Misaki Oikawa\nPortfolio";
const target = document.getElementById("typing");

let index = 0;

function type() {
  // 全削除 → カーソル用 span を再生成
  target.innerHTML = text.slice(0, index) + '<span class="cursor"></span>';

  index++;

  if (index <= text.length) {
    setTimeout(type, 100); // タイピング速度
  }
}

type();




$(function() {
	$('body').fadeIn(1300); 
});



$(function() {
	var headNav = $("header");
	//scrollだけだと読み込み時困るのでloadも追加
	$(window).on('load scroll', function () {
		//現在の位置が500px以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
			//headerの高さ分上に設定
			headNav.css({"top": '-100px'});
			headNav.css({"background-color": '#000'});

			//クラスfixedを付与
			headNav.addClass('fixed');
			headNav.addClass('header_2');

			//位置を0に設定し、アニメーションのスピードを指定
			headNav.animate({"top": 0},600);
		}
		//現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
			headNav.removeClass('fixed');
			headNav.removeClass('header_2');
			headNav.css({"background-color": 'rgba(0,0,0,0)'});
	

		}
	});
});










// main.js
document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".carousel-item"));
  const dotsContainer = document.querySelector(".carousel-dots");
  const prevBtn = document.querySelector(".carousel-nav.prev");
  const nextBtn = document.querySelector(".carousel-nav.next");
  const carousel = document.querySelector(".carousel");

  const total = items.length;
  let current = 0;

  // ====== オートプレイ設定 ======
  const AUTOPLAY_INTERVAL = 3500; // ms （好みで変更可）
  let autoplayTimer = null;

  // ====== ドット生成 ======
  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === current ? " active" : "");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => {
      current = i;
      update();
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));

  // ====== スライド表示更新 ======
function update() {
  const isSmall = window.innerWidth <= 480; // スマホ判定

  items.forEach((item, index) => {
    let offset = index - current;

    // 無限ループ用に offset を折り返す
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    // ===== パラメータ設定 =====
    if (isSmall) {
      // --- スマホ：左右1枚ずつだけ表示 ---
      const sideTranslateX = 28;
      const sideRotateY = 12;

      if (offset === 0) {
        // メイン
        item.style.opacity = 1;
        item.style.zIndex = 5;
        item.style.transform = `
          translate(-50%, -50%)
          translateZ(80px)
          scale(1)
        `;
        item.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.5)";
        item.style.filter = "brightness(1)";

      } else if (offset === -1) {
        // 左1枚
        item.style.opacity = 0.6;
        item.style.zIndex = 3;
        item.style.transform = `
          translate(-50%, -50%)
          translateX(-${sideTranslateX}%)
          rotateY(${sideRotateY}deg)
          translateZ(-60px)
          scale(0.8)
        `;
        item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.25)";
        item.style.filter = "brightness(0.9)";

      } else if (offset === 1) {
        // 右1枚
        item.style.opacity = 0.6;
        item.style.zIndex = 3;
        item.style.transform = `
          translate(-50%, -50%)
          translateX(${sideTranslateX}%)
          rotateY(-${sideRotateY}deg)
          translateZ(-60px)
          scale(0.8)
        `;
        item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.25)";
        item.style.filter = "brightness(0.9)";

      } else {
        // その他は隠す
        item.style.opacity = 0;
        item.style.zIndex = 1;
        item.style.transform = `
          translate(-50%, -50%)
          translateZ(-320px)
          scale(0.6)
        `;
        item.style.boxShadow = "none";
        item.style.filter = "brightness(0.8)";
      }

    } else {
      // --- PC：左右2枚ずつ表示、奥行きとサイズは同じ ---
const sideTranslateX1 = 55;  // 1枚目（メイン寄り）
const sideTranslateX2 = 130;  // 2枚目（かなり端寄りにする）
const sideRotateY    = 18;
const sideTranslateZ = -90;
const sideScale      = 0.72; // 少しだけ小さく
      if (offset === 0) {
        // メイン
        item.style.opacity = 1;
        item.style.zIndex = 10;
        item.style.transform = `
          translate(-50%, -50%)
          translateZ(100px)
          scale(1)
        `;
        item.style.filter = "brightness(1.02)";

      } else if (offset === -1) {
        // 左1枚目（メインのすぐ横）
        item.style.opacity = 0.6;
        item.style.zIndex = 5;
        item.style.transform = `
          translate(-50%, -50%)
          translateX(-${sideTranslateX1}%)
          rotateY(${sideRotateY}deg)
          translateZ(${sideTranslateZ}px)
          scale(${sideScale})
        `;
        item.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
        item.style.filter = "brightness(0.9)";

      } else if (offset === 1) {
        // 右1枚目
        item.style.opacity = 0.6;
        item.style.zIndex = 5;
        item.style.transform = `
          translate(-50%, -50%)
          translateX(${sideTranslateX1}%)
          rotateY(-${sideRotateY}deg)
          translateZ(${sideTranslateZ}px)
          scale(${sideScale})
        `;
        item.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
        item.style.filter = "brightness(0.9)";

      } else if (offset === -2) {
        // 左2枚目（端寄り）★奥行・サイズは1枚目と同じ
        item.style.opacity = 0.45;
        item.style.zIndex = 4;
        item.style.transform = `
          translate(-50%, -50%)
          translateX(-${sideTranslateX2}%)
          rotateY(${sideRotateY}deg)
          translateZ(${sideTranslateZ}px)
          scale(${sideScale})
        `;
        item.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.25)";
        item.style.filter = "brightness(0.85)";

      } else if (offset === 2) {
        // 右2枚目（端寄り）★奥行・サイズは1枚目と同じ
        item.style.opacity = 0.45;
        item.style.zIndex = 4;
        item.style.transform = `
          translate(-50%, -50%)
          translateX(${sideTranslateX2}%)
          rotateY(-${sideRotateY}deg)
          translateZ(${sideTranslateZ}px)
          scale(${sideScale})
        `;
        item.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.25)";
        item.style.filter = "brightness(0.85)";

      } else {
        // それ以外は非表示
        item.style.opacity = 0;
        item.style.zIndex = 1;
        item.style.transform = `
          translate(-50%, -50%)
          translateZ(-350px)
          scale(0.6)
        `;
        item.style.boxShadow = "none";
        item.style.filter = "brightness(0.75)";
      }
    }
  });

  // ドット更新
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

  // ====== スライド移動関数 ======
  function goNext() {
    current = (current + 1) % total;
    update();
  }

  function goPrev() {
    current = (current - 1 + total) % total;
    update();
  }

  // ====== ナビゲーションボタン ======
  prevBtn.addEventListener("click", () => {
    goPrev();
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    goNext();
    resetAutoplay();
  });

  // ====== オートプレイ制御 ======
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goNext();
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer !== null) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    startAutoplay();
  }


  // ====== スワイプ（タッチ操作） ======
  let touchStartX = 0;
  let touchEndX = 0;
  const SWIPE_THRESHOLD = 50; // 何px以上動かしたらスワイプとみなすか

  carousel.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return; // 1本指のみ
    touchStartX = e.touches[0].clientX;
    touchEndX = touchStartX;
    stopAutoplay(); // スワイプ中は一時停止
  });

  carousel.addEventListener("touchmove", (e) => {
    if (e.touches.length !== 1) return;
    touchEndX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    const diffX = touchEndX - touchStartX;

    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX < 0) {
        // 左にスワイプ → 次へ
        goNext();
      } else {
        // 右にスワイプ → 前へ
        goPrev();
      }
    }

    resetAutoplay(); // スワイプ後に再開
  });

  // ====== 初期表示＆オートプレイ開始 ======
  update();
  startAutoplay();
});






/* =========================
   コンタクトフォーム
========================= */
  // ここをGAS WebアプリURL（/exec）に差し替え
  const SPC_CF_ENDPOINT = "https://script.google.com/macros/s/AKfycbxXlz8tAXHyJAvdlWEQOlI7LI92h38ZGlrCQyMMrhVZqaVpTuTQyzaD9JxCdDOxENw9/exec";
  const SPC_CF_THANKS_URL = "/thanks.html";

  const form = document.getElementById("spc-cf-form");
  const statusEl = document.getElementById("spc-cf-status");
  const submitBtn = document.getElementById("spc-cf-submit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // HTMLのrequiredを有効活用
    if (!form.checkValidity()) {
      statusEl.textContent = "未入力の必須項目があります。入力内容をご確認ください。";
      form.reportValidity();
      return;
    }

    // honeypot（JS側でもブロック）
    const hp = form.querySelector('input[name="company"]').value;
    if (hp) {
      statusEl.textContent = "送信に失敗しました。";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    statusEl.textContent = "送信中です…";

    const fd = new FormData(form);
    fd.append("userAgent", navigator.userAgent);

    try {
      const res = await fetch(SPC_CF_ENDPOINT, {
        method: "POST",
        body: fd,
        mode: "cors",
        redirect: "follow"
      });

      const json = await res.json();
      if (json && json.ok) {
        window.location.href = SPC_CF_THANKS_URL;
      } else {
        statusEl.textContent = (json && json.error)
          ? json.error
          : "送信に失敗しました。時間をおいて再送してください。";
      }
    } catch (err) {
      statusEl.textContent = "通信エラーが発生しました。時間をおいて再送してください。";
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "";
    }
  });
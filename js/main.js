$(function () {
  $(".toggle_btn").on("click", function () {
  $("header").toggleClass("open");
});
// メニューのリンクをクリックした時
$(".h-nav a").on("click", function () {
  $("header").toggleClass("open");
});




  $(".slick-box")
  .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-anime");
  })
  .slick({
      fade: true,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      pauseOnFocus: false,
      pauseOnHover: false,
  })
  .on({
      beforeChange: function (event, slick, currentSlide, nextSlide) {
          $(".slick-slide", this).eq(nextSlide).addClass("add-anime");
          $(".slick-slide", this).eq(currentSlide).addClass("remove-anime");
      },
      afterChange: function () {
          $(".remove-anime", this).removeClass(
              "remove-anime add-anime"
          );
      },
  });


  $(".concept-slide").slick({
    
    autoplay: true,//自動でスライドさせる
        autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
        speed: 10000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
        cssEase: 'linear',//動きの種類は等速に
        slidesToShow: 4, 
        arrows:false,//左右に出る矢印を非表示
        swipe: false,//スワイプ禁止
        pauseOnFocus: false,//フォーカスが合っても止めない
        pauseOnHover: false,
        // centerMode: true,//一枚目を中心に表示させる
        // initialSlide: 3,//最初に表示させる要素の番号を指定
        // variableWidth: true,

        responsive: [
              {
                  breakpoint: 960,
                  settings: {
                      slidesToShow: 3,
                  },
              },
              {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1,
              },
          },
          ],
});



  function scr_ani(scr,offs_max){
    var
    window_h = $(window).height(),
        offs_length = $('.offs').length,
        ons_length = $('.ons').length,
        wh_pos = 10;// 対象コンテンツの上端が画面下からどれくらい入ったら反応するか。画面高さに対する割合（%）
    if(offs_length){
      var first_item = offs_max - offs_length;
      for (var i=0; i<offs_length; i++) {
        var data_scr = first_item + i;
        var offs = $('.offs[data-scr="' + data_scr + '"]');
        var target = offs.offset().top;
        var trigger = target - (window_h + scr - window_h * wh_pos / 100);
        if(trigger < 0){
          offs.removeClass('offs').addClass('ons');
        }else{
          break;
        }
      }
    }
    if(ons_length){
      var last_item = ons_length - 1;
      for (var i=0; i<ons_length; i++) {
        var data_scr = last_item - i;
        var ons = $('.ons[data-scr="' + data_scr + '"]');
        var target = ons.offset().top;
        var trigger = target - (window_h + scr);
        if(trigger > 0){
          ons.removeClass('ons').addClass('offs');
        }else{
          break;
        }
      }
    }
  };
  
  $(function(){
  
    // スクロール出現アイテムにナンバリング
    var offs_max = $('.offs').length;
    for (var i=0; i<offs_max; i++) {
      $('.offs').eq(i).attr('data-scr',i);
    }
    // ディレイを設定
    var fadeIn_item = $('.fadeIn');
    for (var i = 0; i < fadeIn_item.length; i++) {
      let delay = fadeIn_item.eq(i).data('delay');
      if(delay){
        fadeIn_item.eq(i).css('transition-delay', delay + 's');
      }
    }
  
    // （リロード時など）ロード時にすでにスクロールされている場合に対応
    var scr = $(window).scrollTop();
    scr_ani(scr,offs_max);
  
  
    /************
    スクロール時
    ************/
    $(window).on('scroll', function(){
      var scr = $(window).scrollTop();
      scr_ani(scr,offs_max);
    });// end scroll
  


    $(document).ready(function() {
      // iOSデバイスを検出する関数
      function isIOS() {
        return /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream;
      }
  
      // iOSデバイスであれば、<body>に'ios'クラスを追加
      if (isIOS()) {
        $('body').addClass('ios');
      }
    });

  });
  
  // Resources

 



  // document.addEventListener('DOMContentLoaded', function () {
  //   const photoExpandButtons = document.querySelectorAll('.photo-list img');
  //   const iframeExpandButtons = document.querySelectorAll('.movie-list iframe');

  //   // 写真の拡大表示
  //   photoExpandButtons.forEach(button => {
  //     button.addEventListener('click', function (event) {
  //       event.preventDefault();
  //       const imgSrc = this.src;
  //       const overlay = document.getElementById('overlay');
  //       const largeImage = document.getElementById('largeImage');
  //       const largeIframe = document.getElementById('largeIframe');
  //       const closeButton = document.getElementById('closeButton');

  //       largeImage.src = imgSrc;
  //       largeImage.style.display = 'block';
  //       largeIframe.style.display = 'none';

  //       overlay.style.display = 'flex';

  //       closeButton.addEventListener('click', function () {
  //         overlay.style.display = 'none';
  //       });
  //     });
  //   });

  //   // 動画の拡大表示
  //   iframeExpandButtons.forEach(button => {
  //     button.addEventListener('click', function (event) {
  //       event.preventDefault();
  //       const iframeSrc = this.src;
  //       const overlay = document.getElementById('overlay');
  //       const largeImage = document.getElementById('largeImage');
  //       const largeIframe = document.getElementById('largeIframe');
  //       const closeButton = document.getElementById('closeButton');

  //       largeIframe.src = iframeSrc;
  //       largeIframe.style.display = 'block';
  //       largeImage.style.display = 'none';

  //       overlay.style.display = 'flex';

  //       closeButton.addEventListener('click', function () {
  //         overlay.style.display = 'none';
  //         // 動画の場合は再生を停止する
  //         if (largeIframe.src) {
  //           const iframeSrc = largeIframe.src;
  //           largeIframe.src = '';
  //           largeIframe.src = iframeSrc; // 再度srcをセットすることで再生を停止させる
  //         }
  //       });
  //     });
  //   });
  // });

  $(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
       
    // disableOn: 500, //ウィンドウ幅が500px以下だったらモーダル表示させずにリンク先へ遷移
    // mainClass: 'mfp-fade',
    // removalDelay: 200,
    // preloader: false,
    // fixedContentPos: false
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                }
            },
            srcAction: 'iframe_src', 
        }
    });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $('.backToTop').fadeIn();
  } else {
    $('.backToTop').fadeOut();
  }
});

// トップへ戻るボタンのクリック
$('.backToTop').on('click', function() {
  $('body,html').animate({
    scrollTop:0
  },500);
  return false;
});

});
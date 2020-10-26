<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" style="" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="3000">
          <router-link to="/menumodel">
            <div class="d-block w-100 bgCover carousel01" alt="First slide"></div>
            <div class="carouseText d-none d-md-block">
              <h1 class="display-4">前往甜點世界</h1>
              <h4>讓甜食讓生活更美好</h4>
              <button class="btn btn-primary">
                <router-link class="carouselBtnSz text-white text-decoration-none"
                to="/menumodel">前往商品區</router-link>
              </button>
            </div>
          </router-link>
        </div>
        <div class="carousel-item" data-interval="3000">
          <router-link to="/menumodel">
            <div class="d-block w-100 bgCover carousel02" alt="First slide"></div>
            <div class="carouseText d-none d-md-block">
              <h1 class="display-4">前往甜點世界</h1>
              <h4>讓甜食讓生活更美好</h4>
              <button class="btn btn-primary">
                <router-link class="carouselBtnSz text-white text-decoration-none"
                to="/menumodel">前往商品區</router-link>
              </button>
            </div>
          </router-link>
        </div>
        <div class="carousel-item" data-interval="3000">
          <router-link to="/menumodel">
            <div class="d-block w-100 bgCover carousel03" alt="First slide"></div>
            <div class="carouseText d-none d-md-block">
              <h1 class="display-4">前往甜點世界</h1>
              <h4>讓甜食讓生活更美好</h4>
              <button class="btn btn-primary">
                <router-link class="carouselBtnSz text-white text-decoration-none"
                to="/menumodel">前往商品區</router-link>
              </button>
            </div>
          </router-link>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div class="d-flex flex-column my-5">
        <div class="d-flex flex-column align-items-center">
          <div style="border-bottom: 1px #000 solid; width:100px"></div>
          <p class="title">精選商品</p>
          <div class="row featuredPro">
            <div class="card col m-2" style="width: 18rem;">
              <router-link to="menucard/-MEMk50YhWgtGZEgTBOg" class="text-decoration-none">
                <img src="@/assets/img/cake/applePie.jpg" class="card-img-top" alt="焦糖蘋果派">
                <div class="card-body">
                  <p class="card-text text-dark text-center"><b>焦糖蘋果派</b></p>
                </div>
              </router-link>
            </div>
            <div class="card col m-2" style="width: 18rem;">
              <router-link to="menucard/-MEMj--Htblal1iYZ5DW" class="text-decoration-none">
                <img src="@/assets/img/cake/chocolate-cake2.jpg" class="card-img-top"
                alt="巧克力熔岩生日蛋糕">
                <div class="card-body">
                  <p class="card-text text-dark text-center"><b>冰火千層蛋糕</b></p>
                </div>
              </router-link>
            </div>
            <div class="card col m-2" style="width: 18rem;">
              <router-link to="menucard/-MEMp-pocRt1VYRQTIUP" class="text-decoration-none">
                <img src="@/assets/img/bread/FrenchBread4.jpg" class="card-img-top" alt="法國麵包">
                <div class="card-body">
                  <p class="card-text text-dark text-center"><b>法國麵包</b></p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="bossName">
          <div class="bossMain">
            <span class="bossImg order-lg-2">
              <img
                src="@/assets/img/home/taiwanFruit.jpg"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                alt="台北101照片"
              />
            </span>
            <div class="texts order-lg-1" data-aos="fade-right" data-aos-duration="2000">
              <h3 class="py-4 border-bottom title">DessertWorld 名字的由來</h3>
              <p>
                很多人好奇，為什麼我們要名字為「 DessertWorld 」呢？
              <br>
              源頭到底是什麼呢?
              <br>
              其實就是字面上的意思 Dessert 甜點 World 世界就形成了
              <br>
              DessertWorld簡顯易懂的美名了，是不是看過就記住了呢。
              <br>
              <br>
              老闆有在法國留學過，他希望法式麵包跟台式麵包來做結合，
              <br>
              用法國製作麵包的口感結合台灣天然水果，讓喜愛法式口感麵包的人
              <br>
              彷彿身在法國，又享受著台灣水果的美好。
              <br>
              <br>
              所以希望用麵包跟甜點，讓人感覺在台灣法國兩邊跑，
              <br>
              透過甜點來傳達，所以是 DessertWorld 的由來。</p>
            </div>
          </div>
        </div>
        <div class="bossName mt-4">
          <div class="bossMain">
            <span class="bossImg">
              <img
                src="@/assets/img/home/chef2.jpg"
                data-aos="flip-right"
                data-aos-duration="2000"
                alt="老闆工作照"
              />
            </span>
            <div class="texts" data-aos="flip-right" data-aos-duration="2000">
              <h3 class="py-4 border-bottom title">DessertWorld 老闆的介紹</h3>
              <p>
                老闆: 李成功
              <br>
                很多人好奇，為什麼我要開「 DessertWorld 」這間店呢？
              <br>
                可能就是我熱愛做甜點，也想把熱愛的台灣水果帶給大家品嘗
              <br>
              <br>
                老闆我有在法國留學過，我希望透過法式麵包跟台式麵包
              <br>
                來做結合，用法國製作麵包的口感結合台灣天然水果
              <br>
                所以我一直研究怎麼樣調配出，出其不意的好味道。
              <br>
              <br>
                直到2016年調配出一套配方，出來開店。
              <br>
                到了現在還在不斷研發新的好口味，敬請期待。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column my-5 align-items-center">
        <div class="store my-4">
          <div data-aos="flip-right" data-aos-duration="3000" class="storeImg order-lg-2">
            <img src="@/assets/img/Bakery/shop.jpg" alt="店面照片" />
          </div>
          <div data-aos="flip-left" data-aos-duration="3000" class="texts order-lg-1">
            <h3 class="py-4 border-bottom title">Dessert World 創業精神</h3>
            <div class="mt-5 ">
              <p>DessertWorld 成立於2016年，店址坐落於東石漁人碼頭旁，
              <br>
              堅持新鮮、天然、健康的食材，創新的理念，每日手工限量生產。
              <br>
              <br>
                我們嚴選品質，以最佳的原物料做出許多暢銷產品:
              <br>
                法國麵包、牛奶可頌麵包，
              <br>
                生日蛋糕首選的:巧克力熔岩生日蛋糕
              <br>
                歡迎您前來下訂品嘗!</p>
            </div>
          </div>
        </div>
        <div class="store my-1">
          <div data-aos="flip-right" data-aos-duration="3000" class="storeImg">
            <img src="@/assets/img/Bakery/shop-in.jpg" alt="店內照片" />
          </div>
          <div data-aos="flip-left" data-aos-duration="3000" class="texts">
            <h3 class="py-4 border-bottom title">Dessert World 商店轉型</h3>
            <div class="mt-5">
              <p>老闆喜歡歐式風格的建築，所以當初店面呈現一個歐式風格
              <br>
              <br>
                讓客人踏進店時彷彿到了歐洲有了異國風情的感覺
              <br>
              時代越來越進步，也慢慢從店面轉型成電商平台，讓更多人可以品嘗到
              <br>
              <br>
              所有商品都由宅配方式運送，保持食材的新鮮，全台皆有配送
              <br>
              請大家安心購買!</p>
            </div>
          </div>
        </div>
        <div class="store my-1">
          <div data-aos="flip-right" data-aos-duration="3000" class="storeImg flex-column">
            <h3 class="py-4 title">情人節送禮推薦</h3>
            <router-link to="/menucard/-MEMsU50dfS1PB01ypwL" class="text-center">
              <img src="@/assets/img/gift/chocolate-gift-love.jpg" alt="活動專屬禮盒" />
            </router-link>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000" class="texts">
            <h3 class="py-4 border-bottom title">情人節專屬優惠碼</h3>
            <div class="h-50">
              <p>
              情人節限定專屬優惠碼
              <br>
              輸入: <span id="copythis"> 520 </span>，享 8折 優惠。
              <a href="javascript:void(0)" @click="CopyTextToClipboard('copythis')">
                <i class="fas fa-clipboard"></i>
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    loading() {
      this.$store.dispatch('settimeLoading');
    },
    CopyTextToClipboard(id) {
      const TextRange = document.createRange();
      TextRange.selectNode(document.getElementById(id));
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(TextRange);
      document.execCommand('copy');
    },
  },
  created() {
    this.loading();
  },
};
</script>

<style scoped>
  .carousel {
    width: 100%;
    height: 600px;
  }
  .carousel01 {
    height: 600px;
    background-image: url("~@/assets/img/cake/priscilla.jpg");
    background-position: top 12% right 50%;
  }
  .carousel02 {
    height: 600px;
    background-image: url("~@/assets/img/home/apple2.jpg");
    background-position: right;
  }
  .carousel03 {
    height: 600px;
    background-image: url("~@/assets/img/home/bread.jpg");
    background-position: bottom 10% right 50%;
  }
  .carouseText {
    position: absolute;
    right: 20%;
    bottom: 1%;
    left: 20%;
    background: hsla(0,0%,40%,.6);
    z-index: 10;
    color: #fff;
    text-align: center;
  }
  .carouselBtnSz {
    font-size: 18px;
  }
  .bgCover {
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container {
    padding-right: 0;
    padding-left: 0;
    max-width: 1280px;
  }
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .featuredPro {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .featuredPro .col {
    padding-left: 0;
    padding-right: 0;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .bossMain {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

  }
  .texts {
    width: 48%;
    font-weight: 400;
    font-size: 16px;
  }
  .store {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .storeImg {
    display: flex;
    align-items: center;
  }
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 32px;
  }
  @media (max-width: 991px) {
    .carousel {
      height: 500px;
    }
    .carousel01 {
      height: 500px;
    }
    .carousel02 {
      height: 500px;
    }
    .carousel03 {
      height: 500px;
    }
    .bossName {
      width: 98%;
      margin: 0 auto;
    }
    .bossMain {
      flex-direction: column;
    }
    .texts {
      width: 70%;
    }
    .bossImg {
      display: flex;
      justify-content: center;
    }
    .bossImg img {
      width: 90%;
      padding-bottom: 1em;
    }
    .store {
      flex-direction: column;
      width: 98%;
      align-items: center;
    }
    .storeImg {
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    .carousel {
      height: 350px;
    }
    .carousel01 {
      height: 350px;
    }
    .carousel02 {
      height: 350px;
    }
    .carousel03 {
      height: 350px;
    }
    .title {
      font-size: 24px;
    }
    .featuredPro {
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .texts {
      width: 85%;
    }
  @media (max-width: 576px) {
    .carousel {
      height: 250px;
    }
    .carousel01 {
      height: 250px;
    }
    .carousel02 {
      height: 250px;
    }
    .carousel03 {
      height: 250px;
    }
    .texts {
      width: 95%;
    }
    .storeImg img {
      width: 90%;
    }
  }
}
</style>

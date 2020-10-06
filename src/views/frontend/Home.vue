<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="3000">
          <router-link to="/menumodel">
            <div class="d-block w-100 bgCover carousel01" alt="First slide"></div>
            <div class="carouseText d-none d-md-block">
              <h2>First Dessert</h2>
              <h5>Life's beautiful with Dessert!</h5>
            </div>
          </router-link>
        </div>
        <div class="carousel-item" data-interval="3000">
          <router-link to="/menumodel">
            <div class="d-block w-100 bgCover carousel02" alt="First slide"></div>
            <div class="carouseText d-none d-md-block">
              <h2>First Dessert</h2>
              <h5>Life's beautiful with Dessert!</h5>
            </div>
          </router-link>
        </div>
        <div class="carousel-item" data-interval="3000">
          <router-link to="/menumodel">
            <div class="d-block w-100 bgCover carousel03" alt="First slide"></div>
            <div class="carouseText d-none d-md-block">
              <h2>First Dessert</h2>
              <h5>Life's beautiful with Dessert!</h5>
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
    <div class="d-flex flex-column my-5">
      <div class="d-flex flex-column align-items-center">
        <div style="border-bottom: 1px #000 solid; width:100px" ></div>
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
              <img src="@/assets/img/cake/peter.jpg" class="card-img-top"
              alt="巧克力熔岩生日蛋糕">
              <div class="card-body">
                <p class="card-text text-dark text-center"><b>巧克力熔岩生日蛋糕</b></p>
              </div>
            </router-link>
          </div>
          <div class="card col m-2" style="width: 18rem;">
            <router-link to="menucard/-MEMp-pocRt1VYRQTIUP" class="text-decoration-none">
              <img src="@/assets/img/bread/FrenchBread.jpg" class="card-img-top" alt="法國麵包">
              <div class="card-body">
                <p class="card-text text-dark text-center"><b>法國麵包</b></p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="bossName">
        <h3 class="title mb-4">DessertWorld 名子的由來</h3>
        <div class="bossMain">
          <div class="texts" data-aos="fade-right" data-aos-duration="2000">
            <p>
              很多人好奇，為什麼我們要名子為「DessertWorld」呢？
            <br>
            源頭到底是什麼呢?
            <br>
            其實就是字面上的意思Dessert甜點World世界就形成了
            <br>
            DessertWorld簡顯易懂的美名了，是不是看過就記住了呢。
            <br>
            <br>
            老闆有在法國留學過,他希望法式麵包跟台式麵包來做結合,
            <br>
            用法國製作麵包的口感結合台灣天然水果，讓喜愛法式口感麵包的人
            <br>
            彷彿身在法國,又享受著台灣水果的美好。
            <br>
            <br>
            所以希望用麵包跟甜點,讓人感覺在台灣法國兩邊跑，
            <br>
            透過甜點來傳達，所以是DessertWorld的由來。</p>
          </div>
          <span class="bossImg">
            <img
              src="@/assets/img/home/taiwan101.jpg"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              class="img-thumbnail"
              alt="台北101照片"
            />
          </span>
        </div>
      </div>
      <div class="bossName mt-4">
        <h3 class="title mb-4">DessertWorld 老闆的介紹</h3>
        <div class="bossMain">
          <span class="bossImg">
            <img
              src="@/assets/img/home/chef2.jpg"
              data-aos="flip-right"
              data-aos-duration="2000"
              class="img-thumbnail"
              alt="老闆工作照"
            />
          </span>
          <div class="texts" data-aos="flip-right" data-aos-duration="2000">
            <p>
              老闆: 李成功
            <br>
              很多人好奇，為什麼我要開「DessertWorld」這間店呢？
            <br>
              可能就是我熱愛做甜點，也想把熱愛的台灣水果帶給大家品嘗
            <br>
            <br>
              老闆我有在法國留學過,我希望透過法式麵包跟台式麵包
            <br>
              來做結合,用法國製作麵包的口感結合台灣天然水果
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
        <div data-aos="flip-right" data-aos-duration="3000" class="storeImg">
          <img src="@/assets/img/Bakery/shop.jpg" class="img-thumbnail" alt="店面照片" />
        </div>
        <div data-aos="flip-left" data-aos-duration="3000" class="texts">
          <h3 class="py-4 border-bottom title">Dessert World 創業精神</h3>
          <div class="mt-5 ">
            <p>DessertWorld 成立於2016年,店址坐落於東石漁人碼頭旁,
            <br>
            <span class="text-primary">堅持新鮮、天然、健康的食材,創新的理念,每日手工限量生產。</span>
            <br>
            <br>
              我們嚴選品質，以最佳的原物料做出許多暢銷產品:
            <br>
              法國麵包,草莓生乳捲,
            <br>
              生日蛋糕首選的:巧克力熔岩生日蛋糕
            <br>
              歡迎您前來下訂品嘗!!!</p>
          </div>
        </div>
      </div>
      <div class="store my-4">
        <div data-aos="flip-left" data-aos-duration="3000" class="texts">
          <h3 class="py-4 border-bottom title">Dessert World 商店轉型</h3>
          <div class="mt-5">
            <p>老闆喜歡歐式風格的建築，所以當初店面呈現一個歐式風格
            <br>
            <br>
              讓客人踏進店時彷彿到了歐洲有了異國風情的感覺
            <br>
            時代越來越進步,也慢慢從店面轉型成電商平台,讓更多人可以品嘗到
            <br>
            <br>
            所有商品都由宅配方式運送,保持食材的新鮮,全台皆有配送
            <br>
            請大家安心購買!!!</p>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="3000" class="storeImg">
          <img src="@/assets/img/Bakery/shop-in.jpg" class="img-thumbnail" alt="店內照片" />
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
  },
  created() {
    this.loading();
  },
};
</script>

<style scoped>
  .carousel {
    width: 100%;
    height: 850px;
  }
  .carousel01 {
    height: 850px;
    background-image: url("~@/assets/img/cake/priscilla.jpg");
    background-position: center;
  }
  .carousel02 {
    height: 850px;
    background-image: url("~@/assets/img/home/macarons.jpg");
  }
  .carousel03 {
    height: 850px;
    background-image: url("~@/assets/img/home/bread2.jpg");
  }
  .carouseText {
    position: absolute;
    right: 5%;
    bottom: 50px;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  .bgCover {
    background-repeat: no-repeat;
    background-size: cover;
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
  .card:hover {
    transform: scale(1.05);
  }
  .bossMain {
    width: 100%;
    display: flex;
  }
  .texts {
    width: 48%;
    font-weight: bold;
    font-size: 16px;
    margin: 0 auto;
  }
  .store {
    display: flex;
  }
  .storeImg {
    display: flex;
    align-items: center;
  }
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
  }
  @media (max-width: 991px) {
    .carousel {
      height: 450px;
    }
    .carousel01 {
      height: 450px;
    }
    .carousel02 {
      height: 450px;
    }
    .carousel03 {
      height: 450px;
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
      width: 45%;
    }
    .title {
      font-size: 32px;
    }
    .store {
      flex-direction: column;
      width: 98%;
    }
    .storeImg {
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
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
      .bossImg img {
        width: 90%;
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

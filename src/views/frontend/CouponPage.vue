<template>
  <div>
    <div
      class="main d-flex justify-content-center my-4"
      style="max-width:100%;"
    >
      <div class="card" style="max-width: 90%;">
        <img src="@/assets/img/coupon/valentine's_day.jpg"
        data-aos="fade-up"
        data-aos-duration="2000" class="card-img-top" alt="活動圖片" />
        <div class="card-body">
          <p class="cardText text-primary " >
            情人節限定專屬優惠碼
            <br>
            輸入: 520 , 享8折優惠。
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="text-center text-primary font-weight-bold" style="font-size:32px;">情人節送禮推薦</div>
      <div class="product py-4">
        <router-link to="/menucard/-MEMsU50dfS1PB01ypwL" style="max-width:70%; margin: 0 auto;">
          <img src="@/assets/img/gift/chocolate-gift.jpg" style="width:100%;" alt="活動專屬禮盒" />
        </router-link>
        <span class="more">
          <router-link class="mx-3 moreProduct text-primary text-decoration-none" to="/menumodel">
              更多商品<i class="fas fa-arrow-right"></i>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allProducts: [],
      filterProducts: [],
    };
  },
  methods: {},
  created() {
    this.$store.dispatch('settimeLoading');
  },
};
</script>

<style lang="scss">
  .product {
    display: flex;
  }
  .moreProduct {
    width: 130px;
    height: 40px;
    font-weight: bold;
    font-size: 18px;
  }
  .more {
    width: 30%;
  }
  .cardText {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: 767px) {
    .product {
      flex-direction: column;
    }
    .more {
      width: 90%;
    }
    .moreProduct {
      float: right;
      text-align: right;
    }
  }
</style>

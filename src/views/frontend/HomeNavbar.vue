<template>
  <div>
    <loading :active.sync="isLoading" ></loading>
    <div class="wrap">
      <nav class="navbar navbar-expand-lg navbar-light" style>
        <router-link class="navbar-brand logo" to="/">
          <img src="@/assets/img/logoHeader.jpg" alt="Logo">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between menu" id="navbarNav">
          <ul class="navbar-nav" style="font-size:18px; ">
            <li class="nav-item active">
              <router-link class="nav-link headerFz"
              to="/" title="首頁">首頁</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link headerFz"
              to="/menumodel" title="商品列表">商品列表</router-link>
            </li>
          </ul>
          <ul class="navbar-nav font-weight-bold" style="font-size:20px;">
            <li class="nav-item">
              <router-link class="nav-link text-dark headerFz"
              to="/favoriteList" title="我的最愛">
                <!-- <i class="fas fa-heart"></i> -->
                收藏
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark headerFz"
              to="/login" title="後台登入系統">
                <!-- <i class="fa fa-user" aria-hidden="true"></i> -->
                  後台登入
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark headerFz"
              to="/ordercheck" title="購物車">
                <!-- <i class="fa fa-shopping-cart" aria-hidden="true"></i> -->
                購物車
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container my-3">
        <router-view></router-view>
      </div>
      <footer class="w-100 bg-light">
        <div class="footer ">
          <div class="footerGroup align-items-center align-items-lg-end">
            <router-link class="smlogo" to="/">
              <img src="@/assets/img/logoFooter.jpg" alt="Logo">
            </router-link>
            <ul class="text-left" style="font-size: 18px; list-style-type: none;">
              <li><i class="fa fa-phone-square" aria-hidden="true"></i><b>05-1234567</b></li>
              <li><i class="fa fa-envelope" aria-hidden="true"></i>
                <b> DessertWorld@gmail.com</b>
              </li>
              <li><i class="fas fa-clock" aria-hidden="true"></i><b>週一~週日 9:00~17:00</b></li>
            </ul>
          </div>
          <div class="footerGroup align-items-center align-items-lg-end">
            <div class="input-group mb-2">
              <span class="input-group-text">
                <i class="fa fa-envelope" aria-hidden="true"></i></span>
              <input type="text" class="form-control" placeholder="訂閱DessertWorld"
              aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button"
                id="button-addon2" style="z-index:101; font-weight:bold;">發送</button>
              </div>
            </div>
            <span>
              <a href="https://www.facebook.com/">
                <i class="fab fa-facebook-f mr-3" aria-hidden="true"
                  style="font-size:32px"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="fab fa-instagram mr-3" aria-hidden="true"
                  style="font-size:32px"></i>
              </a>
              <a href="https://twitter.com/?lang=zh-tw">
                <i class="fab fa-twitter" aria-hidden="true"
                  style="font-size:32px"></i>
              </a>
            </span>
            <b style="font-size:18px;">僅做為個人學習使用，非商業用途。</b>
          </div>
        </div>
      </footer>
      <div class="btn goTop bg-light text-primary" id="SliderTop">
        <i class="fas fa-angle-double-up"></i>
      </div>
      <ShoppingCart style="z-index: 100;"></ShoppingCart>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import ShoppingCart from '@/views/frontend/ShoppingCart.vue';

export default {
  components: {
    ShoppingCart,
  },
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    isLoading() {
      return this.$store.state.isloading;
    },
  },
  mounted() {
    $(() => {
      $('[data-toggle="popover"]').popover();
    });
    $('#SliderTop').click(() => {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
  },
  created() {
  },
};
</script>

<style lang="scss" scoped >
  .wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .logo {
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
    box-shadow: none;
    img {
      width: 300px;
    }
  }
  .smlogo img{
    width: 250px;
  }
  .headerFz {
    font-size: 25px;
  }
  .logoName{
    font-weight: bold;
    font-size: 32px;
    text-decoration: none;
  }
  .footer {
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 1em;
    display: flex;
    justify-content: space-evenly;
  }
  .footerGroup {
    width: 300px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .container {
    padding-right: 0;
    padding-left: 0;
    max-width: 100%;
    height: 100%;
    flex: 1;
  }
  .active {
    font-weight: bold;
  }
  .goTop {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    z-index: 100;
    bottom: 30px;
    right: 35px;
    font-size:32px;
  }
  .menu .nav-link {
    margin-right: 10px;
  }
  @media (max-width: 991px) {
    .menu {
      position: absolute;
      top: 56px;
      z-index:100;
      transition: 1.5s;
      background-color:white;
      right:0;
      left:0;
      padding-left: 10px;
    }
    .menu .nav-link:active {
      background: #dee2e6;
    }
    .menu .nav-link {
      border-bottom: 2px dashed #000;
    }
    .footer {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 767px) {
    .goTop {
      right: 10px;
      bottom: 50px;
      right: 5px;
    }
    .logo {
      img {
        width: 200px;
      }
    }
    .smlogo img {
      width: 180px;
    }
  }
</style>

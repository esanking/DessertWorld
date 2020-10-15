<template>
  <div>
    <nav aria-label="breadcrumb" class="breadCrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none">首頁</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link to="/menumodel" class="text-decoration-none">產品列表</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.category }}</li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="wraps">
      <div class="productItem mt-4">
        <div class="productItemIn">
          <img :src="product.imageUrl" alt= "商品照片" />
        </div>
        <div class="productItemIn">
          <span class="title">{{ product.title }}</span>
          <div
            style="border-bottom:2px solid #dee2e6; font-size:18px;"
            class="mt-4 d-flex justify-content-around"
          >
            <div
              style="text-decoration: line-through;"
              v-if="!product.origin_price == ''"
            >售價: {{ product.origin_price }}</div>
            <div>特價 : {{ product.price }}</div>
          </div>
          <div class="mt-4 d-flex justify-content-center">
            <select name class="form-control mt-3 w-50" v-model="product.num">
              <option
                :value="num"
                v-for="(num,item) in 10"
                :key="item"
              >選購 {{ num }} {{ product.unit }}</option>
            </select>
            <button type="button" class="btn btn-primary mt-3 mx-2"
              @click.prevent="addCart(product.id,product.num)"
              >加入購物車
            </button>
          </div>
          <div class="text-center w-100 mt-5 ">
            <div style="font-size: 18px;">
              <div class="w-100" style="margin:0 auto;">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                    role="tab" aria-controls="home" aria-selected="true">產品介紹</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#eatMean"
                    role="tab" aria-controls="profile" aria-selected="false">食用方式</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact"
                      role="tab" aria-controls="contact" aria-selected="false">常見問題</a>
                  </li>
                </ul>
                <div class="tab-content text-left font-weight-bold w-100" id="myTabContent"
                style="font-size:16px;">
                  <div class="tab-pane fade show active text-primary" id="home" role="tabpanel"
                  aria-labelledby="home-tab">{{ product.description }}</div>
                  <div class="tab-pane fade text-primary" id="eatMean" role="tabpanel"
                  aria-labelledby="profile-tab">{{ product.content }}</div>
                  <div class="tab-pane fade text-primary" id="contact" role="tabpanel"
                  aria-labelledby="contact-tab">
                    <p>【三大保證聲明】
                      <br>
                      ✓ SGS國家檢驗通過，讓您吃得安心！
                      <br>
                      ✓ 不添加人工添加物和氫化植物油，讓您吃得健康！
                      <br>
                      ✓ 堅持冷藏運送，讓您吃到食品最佳風味！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 my-5">
        <h3 class="w-100 text-center"><b>相關產品</b></h3>
        <div class="w-100 my-5 cards">
          <div v-for="(item, key) in filterProduct" :key="key">
            <div class="card my-3" style="width:300px; height:320px;"
             @click.prevent="getProduct(item.id)">
              <img :src="item.imageUrl" class="card-img-top"
               style="height:200px;" alt="產品照片">
              <div class="card-body">
                <p class="card-text text-center" style="font-size:16px;">{{ item.title }}</p>
                <p class="card-text text-center" style="font-size:16px;">{{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      orderid: '',
      product: [],
      deleteItem: '',
      filterProduct: [],
    };
  },
  computed: {
    ...mapGetters('productModules', ['cart', 'allProducts']),
  },
  methods: {
    ...mapActions('productModules', ['getallProducts']),
    filterPro() {
      const vm = this;
      if (vm.allProducts) {
        vm.filterProduct = vm.allProducts.filter(
          (products) => products.category === vm.product.category,
        );
        vm.filterProduct.length = 3;
      }
    },
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.product = response.data.product;
        vm.product.num = 1;
        vm.filterPro();
      });
    },
    addCart(id, qty = 1) {
      const target = this.cart.carts.filter((item) => item.product_id === id);
      if (target.length > 0) {
        const findCartId = target[0].id;
        const findQty = target[0].qty;
        const findProductId = target[0].product_id;
        const SumQty = Number(qty) + Number(findQty);
        this.$store.dispatch('productModules/changeQty', {
          findCartId,
          findProductId,
          SumQty,
        });
      } else {
        this.$store.dispatch('productModules/addtoCart', { id, qty });
      }
      this.qty = 1;
    },
  },
  created() {
    this.orderid = this.$route.params.orderid;
    this.getProduct(this.orderid);
    this.getallProducts();
  },
};
</script>

<style lang="scss">
  img {
    max-width: 100%;
  }
  .wraps {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    text-align:center;
    font-weight: bold;
    font-size: 32px;
  }
  .breadCrumb {
    font-size:18px;
  }
  .productItem {
    display: flex;
    width: 90%;
  }
  .productItemIn {
    width: 90%;
    text-align: center;
  }
  .productItemIn img {
    width: 80%;
  }
  // .productProblem {
  //   display: flex;
  //   justify-content: center;
  // }
  // .productProblemItem {
  //   width: 48%;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }
  .bakeryImgSz {
    width: 80%;
  }
  .cards {
    display: flex;
    justify-content: space-around;
  }
  .card:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    .wraps {
      width: 95%;
      margin: 0 auto;
    }
    .breadCrumb {
      width: 100%;
    }
    .title {
      font-size: 24px;
    }
    .productItem {
      flex-direction: column;
      align-items: center;
    }
    .productItemIn {
      width: 80%;
    }
    .productItemIn img {
      width: 70%;
    }
    // .productProblem {
    //   flex-direction: column;
    //   align-items: center;
    // }
    // .productProblemItem {
    //   width: 98%;
    // }
    .cards {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 576px) {
    .productItemIn {
      width: 100%;
    }
    .productItemIn img {
      width: 95%;
    }
    .bakeryImgSz {
      width: 98%;
    }
  }
</style>

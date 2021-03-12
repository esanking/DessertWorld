<template>
  <div>
    <div class="container my-5">
      <div v-if="favorite.length === 0" class="favoriteList">
        <div>
          <h4 class="my-5">
            <b>快去加入喜歡的商品</b>
          </h4>
          <div data-aos="fade-up" data-aos-duration="3000"
          class="d-flex justify-content-center my-5">
              <i class="fas fa-angle-double-down text-primary" style="font-size:50px"></i>
          </div>
          <router-link class="d-flex justify-content-center mb-5 text-decoration-none"
          to="/menumodel">
            <button class="btn btn-outline-primary rounded " type="button">
              查看所有商品
            </button>
          </router-link>
        </div>
      </div>
      <div class="tableClass" v-else>
        <table class="table tables">
          <thead>
            <tr style="font-size:24px;">
              <th width="150" class="text-center">商品資訊</th>
              <th width="150" class="text-center">加入購物車</th>
              <th width="150" class="text-center">移除收藏</th>
            </tr>
          </thead>
          <tbody style="font-size:18px;">
            <tr v-for="(item, index) in newHeartList" :key="index">
              <td>
                <div class="productIfm">
                  <div
                    class="orderImg img-fluid mr-2" style="cursor: pointer;"
                    @click.prevent="getProductId(item.id)">
                    <img :src="item.imageUrl" alt="商品照片" class="w-100 h-100">
                  </div>
                  <div class="align-self-center" @click.prevent="getProductId(item.id)"
                    style="cursor: pointer;">
                    <b>
                      {{ item.title }}
                    <br>
                      {{ item.price | currency }}
                    </b>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center" title="加入購物車">
                <a href="#" class="text-primary" @click.prevent="addCart(item.id)">
                  <i class="fas fa-cart-plus" style="font-size:24px;"></i>
                </a>
              </td>
              <td class="align-middle text-center" title="移除收藏">
                <a href="#" class="text-light" @click.prevent="removeHeart(item.id)">
                  <i class="fas fa-trash-alt" style="font-size:24px;"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      favorite: [],
      list: {},
    };
  },
  methods: {
    getlocalId() {
      const vm = this;
      vm.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    },
    ...mapActions('productModules', ['getallProducts']),
    getProductId(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/menucard/${response.data.product.id}`);
        }
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
    removeHeart(id) {
      this.$store.dispatch('heartModules/removeHeart', id);
      this.getlocalId();
      this.$store.dispatch('settimeLoading');
    },
  },
  computed: {
    ...mapGetters('productModules', ['allProducts', 'cart']),
    newHeartList() {
      const vm = this;
      return vm.allProducts.filter((item) => vm.favorite.indexOf(item.id) > -1);
    },
  },
  created() {
    this.getlocalId();
    this.getallProducts();
  },
};
</script>

<style lang="scss" scoped>
  .container {
    padding-right: 0;
    padding-left: 0;
    max-width: 1280px;
  }
  .orderImg {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
  }
  .favoriteList {
    display: flex;
    justify-content: center;
  }
  .productIfm {
    display: flex;
  }
  @media (max-width: 992px) {
    .productIfm {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    .orderImg {
      width: 150px;
      height: 100px;
    }
  }
</style>

<template>
  <div>
    <div class="container">
      <BuyProcess :progress="step"></BuyProcess>
      <div v-if="cartLen === 0" class="d-flex
        align-items-center flex-column mt-5">
        <p style="font-size: 24px;" class="mx-2">
          <b>您還未加入商品至購物車，快來去逛逛吧!</b>
        </p>
        <router-link to="/menumodel" class="btn btn-primary">
        前往購物商城</router-link>
      </div>
      <div v-if="cartLen !== 0">
        <div>
          <table class="table List">
          <thead>
            <tr>
              <th width="150" class="text-center hideText">商品照片</th>
              <th width="200" class="text-center">商品資訊</th>
              <th width="150" class="text-center">總價</th>
              <th width="150" class="text-center">刪除</th>
            </tr>
          </thead>
          <tbody style="font-size: 18px;">
            <tr v-for="(item, index) in cart.carts" :key="index">
              <td class="productImg img-fluid hideText text-center" style="cursor: pointer;"
                    @click.prevent="getProductId(item.product_id)">
                    <img :src="item.product.imageUrl" alt="商品照片" style="height:100%;">
              </td>
              <td class="align-middle text-center">
                <b style="cursor: pointer;"
                    @click.prevent="getProductId(item.product_id)">
                {{ item.product.title }}
                <br>
                {{ item.product.price | currency }}
                </b>
                <br>
                <button type="button"
                  class="btn btn-sm btn-outline-light mr-1 px-2 rounded"
                  @click.prevent="changeQty(item.id, item.product.id, item.qty, false)"
                  :disabled="item.qty === 1 ? true : false"
                >－</button>
                {{ item.qty }}
                <button type="button"
                    class="btn btn-sm btn-outline-primary ml-2 rounded"
                    @click.prevent="changeQty(item.id, item.product.id, item.qty, true)"
                  >＋</button>
              </td>
              <td class="align-middle text-center">{{ item.total | currency }}</td>

              <td class="align-middle text-center">
                <a href="#" class="text-primary" @click.prevent="deleteCartItem(item.id)">
                  <i class="fas fa-trash-alt" style="font-size:24px;"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <hr />
        <div class="container mb-4">
          <div class="row">
            <div class="col-md-8">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="輸入優惠碼 520"
                v-model="coupon_code" @keyup.enter="addCoupon_code" />
                <div class="input-group-append">
                  <button class="btn btn-outline-light" type="button"
                  @click.prevent="addCoupon_code">套用優惠券</button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <table class="table" style="font-size: 18px;">
                <tbody>
                  <tr>
                    <td>總金額</td>
                    <td class="text-right">{{ cart.total | currency }}</td>
                  </tr>
                  <tr>
                    <td>優惠折抵</td>
                    <td class="text-right">-{{ (cart.total - cart.final_total) | currency }}</td>
                  </tr>
                  <tr>
                    <td>應付金額</td>
                    <td class="text-right text-primary textBig">
                      {{ cart.final_total | currency }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col">
              <div class="d-flex mt-2">
                <router-link to="/menumodel" class="btn btn-outline-light
                mr-auto">返回購物</router-link>
                <router-link to="/clientForm"
                class="btn btn-primary">填寫資料</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BuyProcess from '@/components/BuyProcess.vue';

export default {
  components: {
    BuyProcess,
  },
  data() {
    return {
      step: '1',
      coupon_code: '',
    };
  },
  methods: {
    ...mapActions('productModules', ['getcart']),
    getProductId(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/menucard/${response.data.product.id}`);
        }
      });
    },
    deleteCartItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.$store.dispatch('updateLoading', true);
      vm.deleteItem = id;
      vm.$http.delete(api).then((response) => {
        vm.getcart();
        vm.$store.dispatch('updateLoading', false);
        vm.deleteItem = '';
        if (response.data.success) {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
    addCoupon_code() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.getcart();
        vm.$store.dispatch('updateLoading', false);
        vm.coupon_code = '';
        if (response.data.success) {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
    changeQty(findCartId, findProductId, qty, qtyStatus) {
      let SumQty;
      if (qtyStatus === true) {
        SumQty = qty + 1;
      } else {
        SumQty = qty - 1;
      }
      this.$store.dispatch('productModules/changeQty', {
        findCartId,
        findProductId,
        SumQty,
      });
    },
  },
  computed: {
    ...mapGetters('productModules', ['cart', 'cartLen']),
  },
  created() {
    this.getcart();
  },
};
</script>

<style lang="scss" scoped>
  .container {
    padding-right: 0;
    padding-left: 0;
    max-width: 1280px;
  }
  .row {
    margin-right: 0;
  }
  .productImg {
    background-position: center;
    background-size: cover;
    max-width: 100%;
    height: 150px;
  }
  .List {
    font-size: 24px;
    width: 98%;
    margin: 0 auto;
  }
  .textBig {
    font-size: 20px;
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
    .hideText {
      display: none;
    }
  }
</style>

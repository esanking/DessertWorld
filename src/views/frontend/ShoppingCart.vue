<template>
  <div>
    <AlertMessage />
    <div class="cartDropdown">
      <a class="fixPage" @click.prevent="openList" href="#">
        <i class="fa fa-shopping-cart text-primary" style="font-size:32px" aria-hidden="true"></i>
        <span class="badge badge-pill" v-if="cartLen !== 0 ">
          {{ cartLen }}</span>
      </a>
      <div class="cartBox dropdown-cart-menu" style="display: none;">
        <div class="row justify-content-center py-2">
          <div class="col-md-12">
            <div class="dropdownHeader">
              <div class="d-flex justify-content-between">
                <h4>購物車清單</h4>
                <a href="#" @click.prevent="closeList">
                  <i style="font-size:18px" class="mt-1 fa fa-window-close closeIcon"></i>,
                </a>
              </div>
            </div>
            <hr />
            <div class="text-center" v-if="cart.total === 0">
              <span>～～～您尚未選購商品～～～</span>
              <p class="mt-2">優質產品就在眼前，空手而回實在可惜</p>
            </div>
            <div
              class="dropdown-item d-flex align-items-center"
              v-for="item in cart.carts"
              :key="item.id"
            >
              <div
                class="cartIcon mr-3"
                @click.once="deleteCartItem(item.id)"
              >
                <i class="fas fa-spinner fa-pulse" v-if="deleteItem == item.id"></i>
                <i v-else class="fas fa-trash-alt"></i>
              </div>
              <div
                class="cartItemImg bg-cover mr-2"
                :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
              ></div>
              <div class="mr-2">
                <div class="h6 mb-0">{{ item.product.title }}</div>
                <span>數量：{{ item.qty }}</span>
              </div>
              <span class="ml-auto">{{ item.total | currency }}</span>
            </div>
            <hr />
            <div class="dropdown-item text-right mb-3">
              <span class="mr-3">總計</span>
              <span class="text-primary" style="font-size:18px;">{{ cart.total | currency }}</span>
            </div>
            <a
              v-if="cart.total !== 0"
              class="btn btn-primary btn-block"
              href="#"
              @click.prevent="goorderCheck"
            >前往結帳</a>

            <router-link
              v-else
              class="btn btn-primary btn-block"
              href="#"
              @click.prevent="closeList"
              to="/menumodel"
            >前往購物</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import AlertMessage from '@/components/AlertMessage.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    AlertMessage,
  },
  data() {
    return {
      deleteItem: '',
    };
  },
  methods: {
    ...mapActions('productModules', ['getcart']),
    openList() {
      $('.dropdown-cart-menu').toggle();
      setTimeout(() => {
        $('.dropdown-cart-menu').fadeOut(2000);
      }, 10000);
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
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
        } else {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
    closeList() {
      $('.dropdown-cart-menu').hide();
    },
    goorderCheck() {
      const vm = this;
      if (vm.cart.carts.length !== 0) {
        vm.$router.push('/ordercheck');
      }
    },
  },
  computed: {
    ...mapGetters('productModules', ['cart', 'cartLen']),
  },
  created() {
    const vm = this;
    vm.getcart();
    vm.$bus.$on('dataUpdata', () => {
      vm.getcart();
    });
  },
};
</script>

<style lang="scss" scoped>
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .cartDropdown {
    position: fixed;
    bottom: 75px;
    right: 24px;
  }
  .fixPage {
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 40px;
    width: 40px;
    z-index: 1000;
    cursor: pointer;
  }
  .dropdownHeader {
    margin-bottom: -14px;
  }
  .badge {
    transform: translate(30px, -50px);
    font-size: 11px;
    background-color: #323C74;
    color: #fff;
  }
  .cartBox {
    position: relative;
    bottom: 70px;
    right: 85px;
    border-radius: 0.25rem;
    box-shadow: 0.1rem 0rem 0.2rem 0.2rem #dee2e6;
    background-color: #fff;
    z-index: 1000;
  }
  .closeIcon {
    margin-left: 120px;
    color: #323C74;
  }
  .cartItemImg {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background-size: cover;
    background-position: center;
  }
  .cartIcon {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #C7B259;
    border: 1px solid #C7B259;
    padding: 0.8rem;
    &:hover {
      color: white;
      border: 1px solid #C7B259;
      background-color: #C7B259;
    }
  }
  @media (max-width: 767px) {
    .cartDropdown {
      display: none;
    }
  }
</style>

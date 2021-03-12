<template>
  <div>
    <div class="container menuBar mt-lg-5">
      <div>
        <div style="position:sticky; top:30px; width:95%;  margin: 0 auto;">
          <div id="list-example" class="list-group">
            <div
              class="menuColor"
              v-for="(item,key) in text" :key="key">
              <a class="list-group-item list-group-item-action"
                 :class="{ 'listBg': filtertext === item.title }"
                @click.prevent=" filterPro(item.title);" href="#menumodel">
                <i :class="item.icon" aria-hidden="true" class="mr-5 text-primary"></i>
                {{ item.title }}
              </a>
            </div>
          </div>
          <div class="search my-2">
            <input type="text" class="form-control searchInput" v-model="searchtext"
             placeholder="搜尋商品" @keyup.enter.stop="searchProduct" />
            <button type="button" class="input-group-text searchInputBtn bg-light"
             @click.prevent="searchProduct">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <div v-if="notSearchtext" style="height:100%;"
         class="d-flex justify-content-center align-items-center my-5">
          <h3 class="text-primary">
            <i class="fa fa-exclamation-circle"></i>
            沒有查詢到相關商品
          </h3>
        </div>
        <div class="row cardList" v-if="!notSearchtext">
          <div class="col-6 cards"
           v-for="item in filterProducts" :key="item.id">
            <div class="card cardBg" style="cursor: pointer;"
             @click.prevent="getProductId(item.id)">
              <div class="cardImg"
                :style="{backgroundImage: `url(${ item.imageUrl })`}">
                <div style="width:50px; height:50px;"
                 class="float-right bg-white rounded-circle m-1
                  d-flex justify-content-center align-items-center">
                    <FavoriteProduct :productid="item.id"></FavoriteProduct>
                </div>
              </div>
              <div class="card-body">
                <span class="badge badge-light ml-2 dataText">{{ item.category }}</span>
                <p class="my-2">
                  <a
                    href="#"
                    class="text-dark titleText"
                  >
                    {{ item.title }}
                  </a>
                </p>
                <p class="card-text dataText">{{ item.content }}</p>
                <div class="d-flex ">
                  <div class=" dataText" style="width:50%" v-if="!item.origin_price">
                    {{ item.origin_price }}</div>
                  <del class=" dataText" style="width:50%" v-if="item.origin_price">
                    NT{{ item.origin_price | currency }}</del>
                  <div class=" text-right dataText" style="width:50%" v-if="item.price">
                    NT{{ item.price | currency }}</div>
                </div>
              </div>
              <span class="card-footer viewMore btn-outline-primary">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  查看更多
              </span>
            </div>
          </div>
        </div>
        <div v-if="openPagination" class="d-flex justify-content-center my-5">
          <Pagination
            :pages="pagination"
            @changedpage="getProductPage">
          </Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import FavoriteProduct from '@/components/FavoriteProduct.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Pagination,
    FavoriteProduct,
  },
  data() {
    return {
      openPagination: false,
      filtertext: '全部商品',
      text: [
        { title: '全部商品', icon: 'fa fa-align-justify' },
        { title: '蛋糕', icon: 'fas fa-birthday-cake' },
        { title: '麵包', icon: 'fa fa-thumbs-up' },
        { title: '餅乾', icon: 'fa fa-star' },
        { title: '禮盒', icon: 'fa fa-gift' },
      ],
      searchtext: '',
      notSearchtext: false,
      filterProducts: [],
      pagination: {},
      status: {
        loadingItem: '',
      },
    };
  },

  methods: {
    ...mapActions('productModules', ['getallProducts']),
    getProductPage(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.filterProducts = response.data.products;
        vm.pagination = response.data.pagination;
        vm.openPagination = true;
      });
    },
    filterPro(item) {
      const vm = this;
      vm.filtertext = item;
      vm.notSearchtext = false;
      vm.$store.dispatch('updateLoading', true);
      let newArray = [];
      setTimeout(() => {
        if (vm.filtertext === '全部商品') {
          vm.openPagination = true;
          vm.getProductPage();
          vm.$store.dispatch('updateLoading', false);
        } else {
          newArray = vm.allProducts.filter(
            (product) => product.category === vm.filtertext,
          );
          vm.filterProducts = newArray;
          vm.openPagination = false;
          vm.$store.dispatch('updateLoading', false);
        }
      }, 1000);
    },
    searchProduct() {
      const vm = this;
      if (vm.filtertext === '全部商品') {
        vm.notSearchtext = false;
        vm.filterProducts = vm.allProducts.filter(
          (item) => item.title.indexOf(vm.searchtext) > -1,
        );
        if (vm.filterProducts.length === 0) {
          vm.openPagination = false;
          vm.notSearchtext = true;
        } else if (vm.filterProducts.length < 11) {
          vm.openPagination = false;
        }
        vm.searchtext = '';
        vm.$store.dispatch('settimeLoading');
      } else {
        vm.filterProducts = vm.filterProducts.filter(
          (item) => item.title.indexOf(vm.searchtext) > -1,
        );
        vm.openPagination = false;
        if (vm.filterProducts.length === 0) {
          vm.getProductPage();
          vm.filterPro(vm.filtertext);
          vm.openPagination = false;
          vm.notSearchtext = true;
        } else {
          vm.notSearchtext = false;
        }
        vm.searchtext = '';
        vm.$store.dispatch('settimeLoading');
      }
    },
    getProductId(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/menucard/${response.data.product.id}`);
        }
        vm.status.loadingItem = '';
      });
    },
  },
  computed: {
    ...mapGetters('productModules', ['allProducts']),
  },
  created() {
    this.getProductPage();
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
  .menuColor {
    font-size: 18px;
    font-weight: 400;
    border-radius: 0.25rem;
  }
  .menuColor :hover {
    background-color: #C7B259;
  }
  .listBg {
    background-color: #C7B259;
  }
  .menuBar {
    display: flex;
    width: 100%;
  }
  .search {
    display: flex;
    width: 99%;
    margin: 0 auto;
  }
  .cardList {
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
  }
  .cards {
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .cardImg {
    height: 300px;
    background-size: cover;
    background-position: center;
  }
  .searchInput {
    font-size: 18px;
    border-bottom-right-radius: 0%;
    border-top-right-radius: 0%;
  }
  .searchInputBtn {
    border-bottom-left-radius: 0%;
    border-top-left-radius: 0%;
  }
  .titleText {
    font-weight: 600;
    text-decoration: none;
    font-size: 32px;
  }
  .dataText {
    font-size: 18px;
    font-weight: 400;
  }
  .cardBg {
    width: 460px;
    height: 595px;
  }
  .viewMore {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  @media (max-width: 991px) {
    .menuBar {
      flex-direction: column;
    }
    .container {
      margin-top: 2em;
    }
    .cardList {
      flex-direction: column;
      align-items: center;
    }
    .cards {
      display: flex;
      justify-content: center;
    }
    .titleText {
      font-size: 24px;
    }
  }
  @media (max-width: 420px) {
    .menuBar {
      flex-direction: column;
    }
    .cardImg {
      height: 200px;
    }
    .dataText {
      font-size: 16px;
    }
    .cardBg {
      width: 100%;
      height: 470px;
    }
    .viewMore {
      font-size: 16px;
    }
  }
</style>

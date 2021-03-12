<template>
  <div>
    <div class="orderList">
      <table class="table my-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th class="textNone">Email</th>
          <th class="textNone">購買款項</th>
          <th width="100">應負金額</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order" :key="item.id">
            <td>{{ item.create_at | date }}</td>
            <td class="textNone">{{ item.user.email }}</td>
            <td class="textNone">
                <div v-for="product in item.products" :key="product.id">
                    {{ product.product.title }} 數量：{{ product.qty + product.product.unit }}
                </div>
            </td>
            <td>{{ item.total | currency }}</td>
            <td>
                <span v-if="item.is_paid" class="text-success">已付款</span>
                <span v-else>尚未付款</span>
            </td>
        </tr>
      </tbody>
    </table>
    </div>
    <Pagination :pages="Paginations" @changedpage="getorderList"
      class="page"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      Paginations: {},
      order: [],
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getorderList(page = 1) {
      const api = ` ${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page= ${page}`;
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.order = response.data.orders;
        vm.Paginations = response.data.pagination;
      });
    },
  },
  created() {
    this.getorderList();
  },
};
</script>

<style lang="scss">
  .page {
    overflow-x: auto;
  }
  @media (max-width: 992px) {
    .table {
      width: 100%;
    }
    .textNone {
      display: none;
    }
  }
</style>

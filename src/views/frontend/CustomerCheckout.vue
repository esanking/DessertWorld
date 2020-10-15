<template>
  <div>
    <BuyProcess :progress="step"></BuyProcess>
    <div class="my-5 row justify-content-center" v-if="!orderContent">
      <form class=" col-md-6" @submit.prevent="payorder">
        <table class="table" style="font-size: 16px;">
          <thead class=" table-light" style="font-size: 24px;">
            <th>品名</th>
            <th width="80">數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td class=" text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot class=" table-light" style="font-size: 18px;">
            <tr>
              <td colspan="2" class="text-right text-primary">總計</td>
              <td class="text-right text-primary">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
        <table class="table" style="font-size: 16px;">
          <tbody>
            <tr>
              <th>Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td style="font-size: 18px;">
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-primary">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <button class="btn btn-primary text-white" v-if="order.is_paid === false"
           @click="payorder" type="button">確認付款去</button>
        </div>
      </form>
    </div>
    <div class="row d-flex flex-column align-items-center"
     v-if="orderContent">
      <img src="@/assets/img/otherImg/tick.jpg" alt="確認圖片" width="80" class="mt-3">
      <table class="table col-md-6 mt-3" style="font-size: 16px;">
        <tbody>
          <tr>
            <th>訂單成立日期</th>
            <td>{{ order.create_at | date }}</td>
          </tr>
          <tr>
            <th>您的訂單編號</th>
            <td>{{ order.id }}</td>
          </tr>
          <tr>
            <th>您的訂單金額</th>
            <td>{{ order.total }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary mt-3" type="button">
        <router-link to="/menumodel" class="text-decoration-none text-white">
        <i class="fas fa-arrow-right pr-2"></i>前往購物區</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import BuyProcess from '@/components/BuyProcess.vue';

export default {
  components: {
    BuyProcess,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      step: '3',
      orderContent: false,
    };
  },
  methods: {
    getorder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.order = response.data.order;
        vm.$store.dispatch('updateLoading', false);
      });
    },
    payorder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        if (response.data.success) {
          vm.getorder();
          vm.orderContent = true;
          vm.$bus.$emit('dataUpdata');
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getorder();
  },
};
</script>

<style lang="scss">
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .table th, .table td {
    padding: 0.6rem;
  }
</style>

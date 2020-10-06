<template>
  <div>
    <buyProcess :progress="step"></buyProcess>
    <div class="my-5 row justify-content-center">
      <form class=" col-md-6" @submit.prevent="payorder">
        <table class="table" style="font-size: 16px;">
          <thead class=" table-light" style="font-size: 24px;">
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot class=" table-light" style="font-size: 18px;">
            <tr>
              <td colspan="2" class="text-right text-primary">總計</td>
              <td class="text-right text-primary">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="w-100 d-flex justify-content-center" v-if="fireworks">
          <img src="@/assets/img/gif/Fireworks.gif"
          data-aos="fade-up" data-aos-duration="2000"
           style=" position: absolute; z-index:100;" alt="煙火">
        </div>

        <table class="table" style="font-size: 16px;">
          <tbody>
            <tr>
              <th width="100">Email</th>
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
        <div class="text-right">
          <button class="btn btn-primary text-white" v-if="order.is_paid === false"
           @click="payorder" type="button">確認付款去</button>
          <button class="btn btn-primary" v-if="order.is_paid === true" type="button">
            <router-link to="/menumodel" class="text-decoration-none text-white"
            style="font-size:18px;">
            <i class="fas fa-arrow-right pr-2"></i>返回繼續購物吧!</router-link>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import buyProcess from '@/components/BuyProcess.vue';

export default {
  components: {
    buyProcess,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      step: '3',
      fireworks: false,
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
          vm.$bus.$emit('dataUpdata');
          vm.fireworks = true;
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'success' });
        } else {
          vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
        }
      });
      setTimeout(() => {
        vm.fireworks = false;
      }, 6000);
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
</style>

<template>
  <div>
    <BuyProcess :progress="step"></BuyProcess>
    <div class="my-5 row justify-content-center">
      <form class="formList col-md-12">
        <div class="col-md-6">
          <div class="form-group">
            <p class="h5">必填區</p>
            <label for="useremail">Email</label>
            <input type="email" class="form-control" name="email" id="useremail"
              :class="{ 'is-invalid': errors.first('email') }"
              v-model="form.user.email" placeholder="請輸入 Email" v-validate="'required|email'">
            <span class="text-primary" v-if="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <label for="username">收件人姓名</label>
            <input type="text" class="form-control" name="name" id="username"
            :class="{ 'is-invalid': errors.has('name') }" v-validate="'required'"
              v-model="form.user.name" placeholder="輸入姓名">
            <span class="text-primary" v-if="errors.has('name')">姓名必須輸入</span>
          </div>
          <div class="form-group">
            <label for="useraddress">收件人地址</label>
            <input type="text" class="form-control" name="address"
            :class="{ 'is-invalid': errors.has('address') }" v-validate="'required'"
            id="useraddress" v-model="form.user.address"
              placeholder="請輸入地址">
            <span class="text-primary" v-if="errors.has('address')">地址欄位不可以是空的喔！</span>
          </div>
          <div class="form-group">
            <label for="usertel">收件人電話</label>
            <input type="tel" class="form-control" id="usertel" name="phone"
            :class="{ 'is-invalid': errors.has('phone') }" v-validate="'required'"
            v-model="form.user.tel" placeholder="請輸入電話">
            <span class="text-primary" v-if="errors.has('phone')">電話必須輸入</span>
          </div>
        </div>
        <div class="col-md-6">
          <p class="h5 pt-3">選填區</p>
          <div class="form-group">
            <label for="comment">留言</label>
            <textarea name="" id="comment" class="form-control" cols="30"
            rows="10" v-model="form.message"></textarea>
          </div>
        </div>
      </form>
      <div>
        <button class="btn btn-primary" type="button"
         @click.prevent="createdOrder">送出訂單</button>
      </div>
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
      step: '2',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createdOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.$store.dispatch('updateLoading', true);
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((response) => {
            vm.$store.dispatch('updateLoading', false);
            if (response.data.success) {
              vm.$router.push(`/customercheckout/${response.data.orderId}`);
              vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'success' });
            } else {
              vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'danger' });
            }
          });
        } else {
          vm.$store.dispatch('updateLoading', false);
          vm.$store.dispatch('MessageModules/updateMessage', { message: '欄位不完整', status: 'danger' });
        }
      });
    },
  },
  created() {
    this.$store.dispatch('settimeLoading');
  },
};
</script>

<style lang="scss">
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .formList {
    font-size: 16px;
    display: flex;
  }
  @media (max-width: 767px) {
    .formList {
      flex-direction: column;
    }
  }
</style>

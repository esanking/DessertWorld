<template>
  <div class="bg-light">
    <loading :active.sync="isloading"></loading>
    <form class="form-signin" @submit.prevent="signin">
      <h2 class=" mb-3 font-weight-normal text-white">員工後臺登入系統</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="user.username"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block rounded" type="submit">登入</button>
      <div class="alert-msg" v-if="alertMsg">
        <i class="fa fa-exclamation-circle"></i>登入失敗
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      alertMsg: false,
    };
  },
  computed: {
    isloading() {
      return this.$store.state.isloading;
    },
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/products');
          vm.$store.dispatch('updateLoading', false);
          vm.alertMsg = false;
        } else {
          vm.alertMsg = true;
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
  },
  created() {
    this.$store.dispatch('settimeLoading');
  },
};
</script>

<style scoped>
  html,body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .alert-msg {
    padding-top: 20px;
    text-align: center;
    color: #6c0fe6;
    font-weight: bold;
    font-size: 18px;
  }
</style>

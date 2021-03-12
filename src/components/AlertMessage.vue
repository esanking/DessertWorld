<template>
  <div class="messageAlert">
    <div class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AlertMessage',
  data() {
    return {
    };
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch('MessageModules/updateMessage', { message, status });
    },
    removeMessage(num) {
      this.$store.dispatch('MessageModules/removeMessage', num);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  computed: {
    ...mapGetters('MessageModules', ['messages']),
  },
  created() {
    const vm = this;
    vm.$bus.$on('message:push', (message, status = 'warning') => {
      vm.updateMessage(message, status);
    });
  },
};
</script>

<style scope>
  .messageAlert {
    position: fixed;
    max-width: 50%;
    top: 150px;
    right: 20px;
    z-index: 1100;
  }
</style>

<template>
  <div>
    <button class="btn" type="button"
     v-if="favorite" @click.stop="removeHeart(id)">
        <i class="fas fa-heart text-light" style="font-size:24px;"></i>
    </button>
    <button class="btn" type="button"
     v-else @click.stop="addHeart(id)">
        <i class="far fa-heart" style="font-size:24px;"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.productid,
      favorite: false,
      heartActive: '',
    };
  },
  props: {
    productid: {
      type: String,
      default: '',
    },
  },
  methods: {
    addHeart(id) {
      this.$store.dispatch('heartModules/addHeart', id);
      this.heartFun();
    },
    removeHeart(id) {
      this.$store.dispatch('heartModules/removeHeart', id);
      this.heartFun();
    },
    heartFun() {
      const heartAry = JSON.parse(localStorage.getItem('favorite')) || [];
      if (heartAry.indexOf(this.id) > -1) {
        this.heartActive = this.id;
        this.favorite = true;
      } else if (heartAry.indexOf(this.id) === -1) {
        this.heartActive = '';
        this.favorite = false;
      }
    },
  },
  created() {
    this.heartFun();
  },
};
</script>

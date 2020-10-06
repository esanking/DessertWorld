<template>
  <div>
    <nav aria-label="Page navigation example" class="pageSz">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{'disabled' : !pages.has_pre}"
          @click="changepage(pages.current_page-1)"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page">
          <a class="page-link" href="#" @click.prevent="changepage(page)">{{ page }}</a>
        </li>

        <li
          class="page-item"
          :class="{'disabled' : !pages.has_next}"
          @click="changepage(pages.current_page+1)"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
    },
  },
  methods: {
    changepage(page) {
      this.$emit('changedpage', page);
    },
  },
};
</script>

<style lang="scss">
  .pageSz {
    font-size: 20px;
  }
  @media (max-width: 991px) {
    .pageSz {
      font-size: 30px;
    }
  }
  @media (max-width: 767px) {
    .pageSz {
      font-size: 18px;
    }
  }
</style>

<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新的優惠碼
      </button>
    </div>
    <div class="couponList">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>優惠卷名稱</th>
            <th>優惠碼</th>
            <th>折扣數</th>
            <th>使用期限</th>
            <th>是否啟用</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupon" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td class="text-right">{{ item.percent }}%</td>
            <td>{{ item.due_date | date }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-primary btn-sm rounded"
                @click="openModal(false, item)"
              >
                編輯
              </button>
            </td>
            <td>
              <button
                class="btn btn-outline-light btn-sm rounded"
                @click="delModal(item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center">
      <Pagination :pages="pagination" @changedpage="getcoupon"></Pagination>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="coupontModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠卷</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">優惠標題</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入優惠標題"
                    v-model="tempcoupon.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">優惠碼</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入優惠碼"
                      v-model="tempcoupon.code"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">折扣</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入折扣"
                      v-model="tempcoupon.percent"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="title">到期日</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入到期日"
                      v-model="tempcoupon.due_date"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempcoupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-light"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updatecoupon">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delcouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-light text-white">
            <h4 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠卷</span>
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="font-size: 16px">
            是否刪除
            <strong>{{ delcoupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-light"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="delModalcheak"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      coupon: [],
      tempcoupon: {},
      pagination: {},
      delcoupon: {},
      isnew: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getcoupon(page = 1) {
      const api = ` ${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page= ${page}`;
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.coupon = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isnew, item) {
      if (isnew) {
        this.tempcoupon = {};
        this.isnew = true;
      } else {
        this.tempcoupon = { ...item };
        this.isnew = false;
      }
      $('#coupontModal').modal('show');
    },
    delModal(item) {
      const vm = this;
      vm.delcoupon = item;
      $('#delcouponModal').modal('show');
    },
    delModalcheak() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/ ${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.delcoupon.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.sucess) {
          $('#delcouponModal').modal('hide');
          vm.getcoupon();
        } else {
          $('#delcouponModal').modal('hide');
          vm.getcoupon();
        }
      });
      $('#delcouponModal').modal('hide');
    },
    updatecoupon() {
      let api = `${process.env.VUE_APP_APIPATH}/api/ ${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpmethods = 'post';
      const vm = this;
      const timestamp = new Date(vm.tempcoupon.due_date).getTime();
      vm.tempcoupon.due_date = Math.floor(timestamp / 1000);
      if (!vm.isnew) {
        api = `${process.env.VUE_APP_APIPATH}/api/ ${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempcoupon.id}`;
        httpmethods = 'put';
      }
      vm.$http[httpmethods](api, { data: vm.tempcoupon }).then((response) => {
        if (response.data.success) {
          $('#coupontModal').modal('hide');
          vm.getcoupon();
        } else {
          $('#coupontModal').modal('hide');
          vm.getcoupon();
        }
      });
    },
  },
  created() {
    this.getcoupon();
  },
};
</script>

<style lang="scss">
@media (max-width: 991px) {
  .couponList {
    overflow-x: auto;
  }
}
</style>

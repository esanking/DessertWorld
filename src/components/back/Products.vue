<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的產品</button>
    </div>
    <div class="tableList">
      <table class="table mt-4 ">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="90">原價</th>
          <th width="90">售價</th>
          <th width="100">是否啟用</th>
          <th width="100">編輯</th>
          <th width="100">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,key) in products" :key="key">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency}}</td>
          <td>
            <span v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm rounded"
             @click="openModal(false,item)">編輯</button>
          </td>
          <td>
            <button class="btn btn-outline-light btn-sm rounded" @click="delModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="d-flex justify-content-center">
      <pagination :pages="pagination" @changedpage="getproducts"></pagination>
    </div>
    <!-- Modal -->

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempproduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadfile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt="圖片展示"
                  :src="tempproduct.imageUrl"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempproduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempproduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempproduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempproduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempproduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempproduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempproduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempproduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-light" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateproduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-light text-white">
            <h4 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="font-size:16px;">
            是否刪除
            <strong>{{ tempproduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-light" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="delModalcheak">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import pagination from '@/components/Pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      products: [],
      tempproduct: {},
      pagination: {},
      isnew: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getproducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isnew, item) {
      if (isnew) {
        this.tempproduct = {};
        this.isnew = true;
      } else {
        this.tempproduct = { ...item };
        this.isnew = false;
      }
      $('#productModal').modal('show');
    },
    delModal(item) {
      this.tempproduct = item;
      $('#delProductModal').modal('show');
    },
    delModalcheak() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempproduct.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.sucess) {
          $('#delProductModal').modal('hide');
          vm.getproducts();
        } else {
          $('#delProductModal').modal('hide');
          vm.getproducts();
        }
      });
    },
    uploadfile() {
      const vm = this;
      const uploadedfile = vm.$refs.files.files[0];
      const formdata = new FormData();
      formdata.append('file-to-upload', uploadedfile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      vm.$http
        .post(url, formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          vm.status.fileUploading = false;
          if (response.data.success) {
            vm.$set(vm.tempproduct, 'imageUrl', response.data.imageUrl);
          } else {
            vm.$store.dispatch('MessageModules/updateMessage', { message: response.data.message.message, status: 'danger' });
          }
        });
    },
    updateproduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpmethods = 'post';
      const vm = this;
      if (!vm.isnew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempproduct.id}`;
        httpmethods = 'put';
      }

      vm.$http[httpmethods](api, { data: vm.tempproduct }).then(
        (response) => {
          if (response.data.success) {
            $('#productModal').modal('hide');
            vm.getproducts();
          } else {
            $('#productModal').modal('hide');
            vm.getproducts();
          }
        },
      );
    },
  },
  created() {
    this.getproducts();
  },
};
</script>

<style lang="scss">
  @media (max-width: 992px) {
    .tableList {
      overflow-x: auto;
    }
    .table {
      width: 800px;
    }
  }
</style>

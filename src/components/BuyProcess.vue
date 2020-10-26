<template>
  <div>
    <div class=" my-2">
      <div class="row buyMes">
        <div class="col">
          <div style="height: 85px;" class="d-flex justify-content-center flex-column
           align-items-center"
           :class="{ 'bg-light text-white active': progress != '1',
           'bg-primary text-white active': progress === '1' }">
            <strong>STEP 01</strong>
            <p><b>確認訂單資訊</b></p>
          </div>
        </div>
        <div class="col">
          <div style="height: 85px;" class="d-flex justify-content-center flex-column
           align-items-center"
           :class="{ 'bg-light text-white active': progress === '3',
           'bg-primary text-white active': progress === '2' }">
            <strong>STEP 02</strong>
            <p><b>輸入訂購資料</b></p>
          </div>
        </div>
        <div class="col">
          <div style="height: 85px;" class="d-flex justify-content-center flex-column
           align-items-center"
            :class="{ 'bg-primary text-white active': progress === '3' }">
            <strong>STEP 03</strong>
            <p>
              <b>
                付款 / 完成訂單
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    progress: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  .buyMes {
    justify-content: space-around;
    width: 100%;
    font-size: 16px;
  }
</style>

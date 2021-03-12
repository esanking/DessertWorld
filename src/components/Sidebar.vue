<template>
  <div>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
          <span class="mx-2" style="font-size:18px;">管理員</span>
        <ul class="nav flex-column mb-2" style="font-size:21px;">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">
              <i class="fas fa-box-open">產品列表</i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coupon" class="nav-link">
              <i class="fas fa-box-open">優惠卷</i>
            </router-link>
          </li>
        </ul>
          <span class="mx-2" style="font-size:18px;">訂單功能</span>
        <ul class="nav flex-column mb-2" style="font-size:21px;">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="fas fa-box">官網</i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orderList" class="nav-link">
              <i class="fas fa-box">訂單列表</i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

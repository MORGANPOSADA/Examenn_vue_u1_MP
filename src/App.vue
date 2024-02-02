<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>


    <!-- AQUI INICIO MI GRID -->
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <!-- MI PRIMERA COL****** -->
          <div>
            <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="ligth" text-variant="light" shadow visible no-header-close z-index="-1" no-close-on-route-change="true">
              
              <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{name: 'inicio'}"> INICIO </b-link>
              </b-nav-item>              
            </b-nav>
            </b-sidebar>
          </div>
        </b-col>


        <b-col>
          <!-- AQUI TENEMOS QUE IMPORTAR ROUTER VIEW -->
          <router-view></router-view>
        </b-col>

        
      </b-row>
      
    </b-container>
  </div>
  
</template>


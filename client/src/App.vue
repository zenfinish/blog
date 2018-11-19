<template>
  <div id="app">
    
    <Header :isLogin="isLogin" />
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <router-view @loginDone="loginDone" />
            </div>
        </div>
    </div>

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Header, Footer,
    },
    data: function() {
        return {
            isLogin: false,
        };
    },
    methods: {
        loginDone: function() {
            this.isLogin = true;
        },
    },
};
</script>
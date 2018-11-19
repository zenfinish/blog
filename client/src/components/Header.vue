<template>
    <nav class="navbar navbar-expand-md fixed-top bg-light">
        <span class="pr-5">BlogKu</span>
        <span class="pr-2"><router-link to="/">Home</router-link></span>
        <span class="pr-2"><router-link to="/about">About</router-link></span>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto"></ul>
            <form class="form-inline">
                <input class="form-control mr-1" type="text" placeholder="Search: Artikel Apa?" aria-label="Search">
                <span v-if="token">
                    <span class="dropdown">
                        <img src="@/assets/loading.gif" class="img-thumbnail rounded-circle" />
                        <span class="dropdown-content">
                            <div><router-link to="/list_article">List Article</router-link></div>
                            <hr>
                            <div>
                                <a href="#" class="btn btn-outline-danger mr-1" @click="logout">
                                    <i class="fa fa-sign-in"></i> Log Out
                                </a>
                            </div>
                            <hr>
                        </span>
                    </span>
                </span>
                <span v-else>
                    <router-link to="/login" class="btn btn-outline-warning mr-1">
                        <i class="fa fa-sign-in"></i> Log In
                    </router-link>
                    <router-link to="/signup" class="btn btn-outline-success mr-1">
                        <i class="fa fa-registered"></i> Sign Up
                    </router-link>
                </span>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        props: ['isLogin'],
        data: function() {
            return {
                token: localStorage.getItem('token'),
            };
        },
        watch: {
            isLogin: function() {
                if(this.isLogin === true) {
                    this.token = localStorage.getItem('token');
                }
            },
        },
        methods: {
            logout() {
                this.token = null;
                localStorage.removeItem('token');
                this.$router.push('/');
            },
        },
    };
</script>
<style scoped>
    img{
        width: auto;
        height: 40px;
    }
</style>

<template>
    <div>
        <h3>Please Signin...</h3>
        <label>Email</label>
        <input type="text" class="form-control mb-3" v-model="email" />
        <label>Password</label>
        <input type="password" class="form-control mb-3" v-model="password" />
        <button @click="login">Login</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(resolve => {
                    this.$emit('loginDone');
                    localStorage.setItem('token', resolve.data.token);
                    this.$router.push('/');
                })
                .catch(reject => {
                    console.log(reject);
                });
        },
    },
}
</script>

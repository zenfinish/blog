<template>
    <div>
        <h3>Please Register...</h3>
        <label>Full Name</label>
        <input type="text" class="form-control mb-3" v-model="fullName" />
        <label>Email</label>
        <input type="email" class="form-control mb-3" v-model="email" />
        <label>Password</label>
        <input type="password" class="form-control mb-3" v-model="password" />
        <label>Type Password</label>
        <input type="password" class="form-control mb-3" v-model="typePassword" />
        <button @click="saveData">Save</button>
        <span v-if="loading">
            <img src="@/assets/loading.gif" style="height: 40px; width: auto;" />
            Loading ...
        </span>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Signup',
    data: function() {
        return {
            fullName: '',
            email: '',
            password: '',
            typePassword: '',
            loading: false
        };
    },
    methods: {
        saveData() {
            this.loading = true;
            axios({
                method: 'POST',
                url: 'http://localhost:3000/users',
                data: {
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password
                }
            })
                .then(resolve => {
                    this.$router.push('/login');
                })
                .catch(reject => {
                    console.log(reject);
                });
        },
    },
}
</script>

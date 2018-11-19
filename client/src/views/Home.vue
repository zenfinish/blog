<template>
    <div>
        <img src="@/assets/loading.gif" v-if="loadingGif" />
        <CardList
            v-for="(data, index) in articles"
            :key="index"
            :title="data.title"
            :content="data.content"
        />
    </div>
</template>

<script>
import CardList from '@/components/CardList/CardList.vue';
import axios from 'axios';

export default {
    name: 'Home',
    components: {
        CardList,
    },
    data: function() {
        return {
            articles: [],
            loadingGif: false
        };
    },
    created: function() {
        this.loadingGif = true;
        axios({
            method: 'GET',
            url: 'http://localhost:3000/articles'
        })
            .then(resolve => {
                this.articles = resolve.data;
                this.loadingGif = false;
            })
            .catch(reject => {
                console.log(reject);
            });
    },
};
</script>

<template>
    <div>
        <CreateArticle @saveDone="getAllData" />
        <img src="@/assets/loading.gif" v-if="loadingGetArticle" />
        <div v-for="(data, index) in articles" :key="index">
            <CardList
                :ArticleId="data._id"
                :title="data.title"
                :content="data.content"
                :updatedAt="data.updatedAt"
                @deleteDone="getAllData"
                @updateDone="getAllData"
                :ButtonAdmin="true"
            />
        </div>
    </div>
</template>

<script>
import CreateArticle from '@/components/ListArticle/CreateArticle.vue';
import CardList from '@/components/CardList.vue';
import axios from 'axios';

export default {
    name: 'ListArticle',
    components: {
        CreateArticle, CardList,
    },
    data: function() {
        return {
            articles: [],
            loadingGetArticle: false,
            token: null,
        };
    },
    created: function() {
        this.token = localStorage.getItem('token');
        if(!this.token) this.$router.push('/login');
        this.getAllData();
    },
    methods: {
        getAllData() {
            this.loadingGetArticle = true;
            axios({
                method: 'GET',
                url: 'http://localhost:3000/articles',
            })
                .then(resolve => {
                    this.articles = resolve.data;
                    this.loadingGetArticle = false;
                })
                .catch(reject => {
                    console.log(reject)
                });
        },
    },
}
</script>

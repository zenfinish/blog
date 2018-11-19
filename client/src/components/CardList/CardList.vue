<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
                <div class="card-title"><small>{{ updatedAt }}</small></div>
                <p class="card-text">{{ title }}</p>
                <p class="card-text" v-html="content"></p>
                <p class="card-text">
                    <a href="#" class="btn btn-outline-success mr-1" title="Edit" @click="showModalEdit = true"><i class="fa fa-pencil"></i></a>
                    <a href="#" class="btn btn-outline-danger" title="Delete" @click="showModalDelete = true"><i class="fa fa-trash"></i></a>
                </p>
            </div>
        </div>
         <modal
            v-if="showModalEdit"
            @close="showModalEdit = false"
            :bodyComponent="BodyEdit"
            titleHeader="Edit Data"
            titleButtonFooter="Update"
            :dataParent="dataArticle"
            @functionFooter="updateArticle"
         />
        <modal
            v-if="showModalDelete"
            @close="showModalDelete = false"
            :bodyComponent="BodyDelete"
            titleHeader="Delete Data"
            titleButtonFooter="Delete"
            @functionFooter="deleteArticle"
        />
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import BodyEdit from '@/components/ListArticle/BodyEdit.vue';
import BodyDelete from '@/components/ListArticle/BodyDelete.vue';
import axios from 'axios';

export default {
    name: 'CardList',
    props: ['ArticleId', 'title', 'content', 'updatedAt'],
    data: function() {
        return {
            showModalDelete: false,
            showModalEdit: false,
            BodyDelete,
            BodyEdit,
            loadingGetArticle: false,
            dataArticle: {
                ArticleId: this.ArticleId,
                title: this.title,
                content: this.content
            }
        }
    },
    components: {
        Modal,
    },
    created: function() {
        this.BodyEdit.dataArticle = this.dataArticle;
    },
    methods: {
        deleteArticle() {
            axios({
                method: "DELETE",
                url: `http://localhost:3000/articles/${this.ArticleId}`
            })
                .then(resolve => {
                    this.$emit('deleteDone');
                    this.showModalDelete = false;
                })
                .catch(reject => {
                    console.log(reject);
                });
        },
        updateArticle(dataBody) {
            axios({
                method: "PUT",
                url: `http://localhost:3000/articles/${this.ArticleId}`,
                data: dataBody
            })
                .then(resolve => {
                    this.$emit('updateDone');
                    this.showModalEdit = false;
                })
                .catch(reject => {
                    console.log(reject);
                });
        },
    }
}
</script>

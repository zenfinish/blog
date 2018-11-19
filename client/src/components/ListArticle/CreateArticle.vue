<template>
    <div>
        <a href="#" class="btn btn-outline-info" @click="showModalAdd = true;">Create Article</a>
        <hr>
        <modal
            v-if="showModalAdd"
            @close="showModalAdd = false"
            titleHeader="Add Data"
            :bodyComponent="BodyAdd"
            titleButtonFooter="Save"
            @functionFooter="saveArticle"
         />
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import BodyAdd from '@/components/ListArticle/BodyAdd.vue';
import axios from 'axios';

export default {
    name: 'CreateArticle',
    components: {
        Modal
    },
    data: function() {
        return {
            BodyAdd,
            showModalAdd: false,
        };
    },
    methods: {
        saveArticle(dataBody) {
            axios({
                url: "http://localhost:3000/articles",
                method: "POST",
                data: dataBody
            })
                .then(resolve => {
                    this.$emit('saveDone');
                    this.showModalAdd = false;
                })
                .catch(reject => {
                    console.log(reject);
                });
        },
    },
}
</script>


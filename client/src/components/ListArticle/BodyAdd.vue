<template>
    <div>
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title" />
        </div>
        <div class="form-group">
            <label>Content</label>
            <wysiwyg v-model="content" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BodyAdd',
    data: function() {
        return {
            title: '',
            content: '',
        };
    },
    watch: {
        title: function() {
            this.$emit('dataBody', this.dataBody())
        },
        content: function() {
            this.$emit('dataBody', this.dataBody())
        },
    },
    methods: {
        dataBody() {
            return {
                title: this.title,
                content: this.content
            };
        },
    },
}
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
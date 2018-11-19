<template>
  <div>
      <span>Ini Halaman Heroes</span>
      <ListHeroes />
  </div>
</template>

<script>
import ListHeroes from '@/components/ListHeroes.vue'

export default {
    name: 'Heroes',
    components: {
        ListHeroes,
    },
};
</script>

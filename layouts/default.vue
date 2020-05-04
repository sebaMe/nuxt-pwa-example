<template>
    <div class="page-wrapper">
        <the-header />
        <nuxt />
        <the-footer />
    </div>
</template>

<script>

import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
    components: { TheHeader, TheFooter }
};
</script>

<style lang="scss"></style>>

<template>
    <div class="component__header">
        <img class="logo" src="../assets/images/icon.png">
        <nuxt-link to="/">
            <h2 class="title">
                Nuxt PWA Example
            </h2>
        </nuxt-link>

        <nav>
            <nuxt-link to="/launches">
                <h3>Launches</h3>
            </nuxt-link>
            <nuxt-link to="/about">
                <h3>About</h3>
            </nuxt-link>
        </nav>
    </div>
</template>

<script>

export default {
    name: "TheHeader"
};
</script>

<style lang="scss"></style>>

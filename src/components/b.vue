<template>
    <div>
        <a @click="go">Hello</a>
    </div>
</template>
<script>
export default{
    mounted() {
        
    },
    methods: {
        go() {
            this.$router.push({path: '/a'});
        }
    }
}
</script>
<style lang="scss" scope>
div {
    background: #000;
    color: #fff;
    a {
        color: red;
        cursor: pointer;
    }
}
</style>

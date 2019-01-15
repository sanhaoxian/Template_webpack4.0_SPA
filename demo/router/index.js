import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'b',
            component: require("../components/b.vue").default
        },
        {
            path: '/a',
            name: 'a',
            component: require("../components/a.vue").default
        }
    ]
});
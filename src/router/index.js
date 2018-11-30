import Vue from 'vue';
import Router from 'vue-router';
import b from '../components/b.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'b',
            component: b
        }
    ]
});
require('es6-promise').polyfill();
window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');
import VueRouter from 'vue-router';
import store from './store';

 
Vue.use(VueRouter);

const routes = [
	{ path: '/' , component: require('./components/newLead.vue') },
	{ path: '/accounts' , component: require('./components/searchAccounts.vue') },
	{ path: '/contacts' , component: require('./components/searchContacts.vue') },
	{ path: '/newcontact' , component: require('./components/newContact.vue') },
	{ path: '/accountforcontact' , component: require('./components/searchAccountForContact.vue') },
]

const router = new VueRouter({
	routes,
})

new Vue({
	el: '#app',
	router,
	store

})
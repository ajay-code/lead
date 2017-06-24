import Vue from 'vue';
import Promise from 'es6-promise';
import Vuex from 'vuex';

Promise.polyfill(); 

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contacts: [
                    'Ajay', 'Sukhjeet Singh', 'Hudson', 'Hull','Humphrey','Hunt','Hunter'
		],
		accounts: ['Hudson', 'Hull','Humphrey','Hunt'],

		lead: {
			contact: '',
			account: ''
		},

		contact: {
			set: false,
			obj: {}
		}
	}
})
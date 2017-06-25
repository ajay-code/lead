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
		owners: ['Michel (you)', 'Ajay', 'Aman'],
		lead: {
			contact: '',
			account: '',
			title: '',
			value: '',
			owner: ''
		},

		contact: {
			  name:'',
			  account: '',
			  Owner: '',
	          numbers: [''],
	          emails: [''],
	          withDetail: false,
		}
	},
	
	
})
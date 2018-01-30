var app = new Vue({
	el: '.row',
	data:{
		cap:undefined,
		ti:undefined,
		items:[],
		count:-1
	},
	methods:{
		press: function(){
			this.count++,
			this.items.push({
				caption: this.cap,
				time: this.ti,
				number:this.count
			}),
			this.cap = '',
			this.ti = ''
		},
		del: function(number){
			this.items.splice(number,1),
			this.count--
		}
	}
})
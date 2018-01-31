window.onload = function () {
var app = new Vue({
	el: '.row',
	data:{
		cap:undefined,
		ti:undefined,
		items:[],
		count:-1,
	},
	methods:{
		press: function(){
			this.count++
			if((this.cap === '')&&(this.ti === '')){
				this.cap = Math.round(Math.random() * (100-1)+1),
				this.ti = Math.round(Math.random() * (100-1)+1)
			}
			this.items.push({
				caption: this.cap,
				time: this.ti,
				number:this.count,
				statusInProcess:true,
				statusDone:false,
				printStatus:'P'
			}),
			this.cap = '',
			this.ti = ''
		},
		del: function(number){
			this.items.splice(number,1)
			this.items.forEach(function(item,i,items){
				if(item.number > number){
					item.number = item.number - 1
				}
			}),
			this.count--
		},
		changeStatus: function(number){
			this.items.forEach(function(item,i,items){
				if(item.number === number){
					if(item.statusInProcess === true){
						item.statusDone = true,
						item.statusInProcess = false,
						item.printStatus = 'D'
					}
					else{
						item.statusInProcess = true,
						item.statusDone = false,
						item.printStatus = 'P'
					}
				}
			})
			// if(this.items[2].statusInProcess === true){
			// 	this.items[2].statusInProcess = false,
			// 	this.items[2].printStatus = 'D',
			// 	this.items[2].statusDone = true
			// }
			// this.items.forEach(function(item,i,items){

			// }
			// if(this.statusInProcess === true)
			// {
			// 	this.statusInProcess=false,
			// 	this.statusDone=true,
			// 	this.printStatus='D'
			// }
			// else{
			// 	this.statusDone=false,
			// 	this.statusInProcess=true,
			// 	this.printStatus='P'
			// }
		}
	}
})}
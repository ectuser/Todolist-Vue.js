window.onload = function () {
var app = new Vue({
	el: '.row',
	data:{
		cap:undefined,
		ti:undefined,
		forLS:{
			items:[]
		},
		count:-1,
		forLS:JSON.parse(localStorage.getItem("allData") || '{ "items":[] }'),
		count:JSON.parse(localStorage.getItem("count") || '-1' )
		// forLS:{
		// 	items:[]
		// },
	},
	methods:{
		press: function(){
			this.count++
			if((this.cap === '')&&(this.ti === '')){
				this.cap = Math.round(Math.random() * (100-1)+1),
				this.ti = Math.round(Math.random() * (100-1)+1)
			}
			this.forLS.items.push({
				caption: this.cap,
				time: this.ti,
				number:this.count,
				statusInProcess:true,
				statusDone:false,
				printStatus:'P'
			}),
			this.cap = '',
			this.ti = '',
			this.changeLocalStorage()
		},
		del: function(number){
			this.forLS.items.splice(number,1)
			this.forLS.items.forEach(function(item,i){
				if(item.number > number){
					item.number = item.number - 1
				}
			}),
			this.count--,
			this.changeLocalStorage()
		},
		changeStatus: function(number){
			this.forLS.items.forEach(function(item,i){
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
			this.changeLocalStorage()
		},
		changeLocalStorage: function(){
			localStorage.clear(),
			forLSjson = JSON.stringify(this.forLS),
			localStorage.setItem("allData", forLSjson),
			localStorage.setItem("count",this.count)
		}
	}
})}
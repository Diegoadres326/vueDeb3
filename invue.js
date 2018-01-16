
let app= new Vue({
	el:"#app",
	data:{
		title:"Mis Tareas",
		newTask:"",
		editTask:"",
		idEdicion:-1,
		tasks:[
			{name:"aprende node js",active:false},
			{name:"aprende laravel",active:false},
			{name:"aprende bpcs",active:true},
			{name:"aprende Genexus",active:true},
			{name:"easyFlow ",active:false}
		]
	},

	methods:{
		addTask:function(name){

		if (name.length>0){
		this.tasks.push({name:name, active:false});
			}
			this.newTask="";


		},

		eliminarTask:function(task){
		this.tasks.splice(this.tasks.indexOf(task),1);
		},

		editarTask:function(task){
		//task.name="prueba";
		idEdicion=this.tasks.indexOf(task)		
		$("#modalEdicion").modal("show");
		$("#txtEdicionNombre").val(this.tasks[idEdicion].name)
		},

		GuardarEdicion:function(){

		//console.log("valor "+ $("#txtEdicionNombre").val())
		//console.log("valor task"+ this.tasks.indexOf(TaskEdit))
		//this.tasks.indexOf(TaskEdit).name=$("#txtEdicionNombre").val()

		this.tasks[idEdicion].name=$("#txtEdicionNombre").val()
		$("#modalEdicion").modal("hide");


		},


		echaTask:function(task){
		task.active=true
		}






	},


	computed:{
		activeTask: function(){
			return this.tasks.filter(task=> !task.active);
		},
		inactiveTask: function(){
			return this.tasks.filter(task=> task.active);
		}

	}
/*
	,

	computed:{
		activeTask:funtion(){
			return this.tasks.filter(task=> task.active===false);
		},
		inactiveTask:function(){
			return this.tasks.filter(task=> task.active===true);
		}


	}
	*/


});
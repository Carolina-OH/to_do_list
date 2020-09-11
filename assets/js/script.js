
const app =new Vue({
    el:'#tarea',
    data: {
        message: "Crea una nueva tarea",
        skills:[],
        skill:"",
    },
    methods:{
        add_list: function () { 
            if(this.skill != ""){
            this.skills.push(this.skill)
            this.skill="";
            }
        }
    }
    })

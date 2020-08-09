Vue.component('encabezado', {
    data(){
        return{
            bootsTrapClasses:{
                title: 'Sebastians To Do App',
                estiloBg:'bg-success',
                estiloTexto:'text-light'
            }          
        }
    },
    template:`
    <div class="row">
        <div class="col-sm-12 mt-5" v-bind:class="[bootsTrapClasses.estiloTexto, bootsTrapClasses.estiloBg]">
            <h1>{{ bootsTrapClasses.title }}</h1>
        </div>
    </div>
    `
})

Vue.component('task', {
    data(){
        return{

        }
    },
    template: `
    <div class="card mt-5">
        <div class="card-body">
        This is some text within a card body.
        </div>
    </div>`
})

new Vue({
   el:'#app',
   data(){
       return{
           title:'Trabajando con vue y bootstrap'
       }
   },
})
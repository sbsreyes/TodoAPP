//  Componente Header
Vue.component('encabezado', {
    data(){
        return{
            bootsTrapClasses:{
                title: 'Sebastians To Do App',
                estiloTexto:'text-light'
            }          
        }
    },
    template:`
    <div class="row">
        <div class="col-sm-12 mt-3" v-bind:class="bootsTrapClasses.estiloTexto">
            <h1>{{ bootsTrapClasses.title }}</h1>
        </div>
    </div>
    `
})

// Componente Tarea
Vue.component('task', {
    props: [
        'fila',
        'columna'
    ],
    data(){
        return{
            tasks:[],
            taskName:''
        }
    },
    template:
    `
        <div>
            <div class="card mt-5" v-for="t in tasks">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <h5 style="padding: 25px;">{{t}}</h5>
                    </div>
                    
                    <div class="col-sm-6 ">
                        <a href="#" class="btn btn-danger">Eliminar tarea</a>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-success btn-block mt-3" data-toggle="modal" data-target="#exampleModal">
            Crear una nueva tarea
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input class="form-control" v-model="taskName" placeholder="Escribe la tarea" type="text">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-warning" data-dismiss="modal" v-on:click="addTask">Agregar Tarea</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    `,
    watch: {
        taskName(value){
            console.log(value)
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.taskName)
            console.log(this.tasks)
            this.taskName = ''
        }
    }
})

// Componente Padre
new Vue({
    el:'#app',
    data(){
        return{
            fila:'row',
            columna:'col'
        }
    },
 })
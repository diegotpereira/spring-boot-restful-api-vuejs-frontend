<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Sobreome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody v-for="(cliente, index) in clientes" :key="index">
                <tr>
                    <td>{{cliente.nome}}</td>
                    <td>{{cliente.sobrenome}}</td>
                    <td>{{cliente.email}}</td>
                    <td>{{cliente.telefone}}</td>
                    <td><a href="'/clientes/' + cliente.id" class="btn btn-primary">Editar</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import ServicoDadosCliente from '../service/ServicoDadosCliente'

export default {
    name: 'clientes',
    data() {
        return {
            clientes: []
        }
    },
    methods: {
        recuperarClientes() {
            ServicoDadosCliente.buscarTodos()
            .then(response => {
                this.clientes = response.data
            })
            .catch(e => {
                alert(e)
            })
        }
    },
    mounted() {
        this.recuperarClientes()
    }
}
</script>
<style lang="">
    
</style>
<template>
    <div>
        <div v-if="!submitted">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control"  id="nome" required  name="nome" v-model="cliente.nome">
            </div>
            <div class="mb-3">
                <label for="sobrenome" class="form-label">Sobrenome</label>
                <input type="text" class="form-control"  id="sobrenome" required  name="sobrenome" v-model="cliente.sobrenome">
            </div>
             <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control"  id="email" required  name="email" v-model="cliente.email">
            </div>
             <div class="mb-3">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="text" class="form-control"  id="telefone" required  name="telefone" v-model="cliente.telefone">
            </div>
            <div class="mb-3">
                <button @click="salvarCliente" class="btn btn-primary">Enviar</button>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-success" role="alert">
                Cliente Salvo com Succeso..!
            </div>
            <button @click="novoCliente" class="btn btn-primary">Novo Cliente</button>
        </div>
    </div>
</template>
<script>
import ServicoDadosCliente from '../service/ServicoDadosCliente'

export default {
    name: 'add-cliente',
    data() {
        return {
            cliente: {
                id: null,
                nome: "",
                sobrenome: "",
                email: "",
                telefone: ""
            },
            submitted: false
        }
    },
    methods: {
        salvarCliente() {
            var data = {
                nome: this.cliente.nome,
                sobrenome: this.cliente.sobrenome,
                email: this.cliente.email,
                telefone: this.cliente.telefone,
            }
            ServicoDadosCliente.criar(data) 
                .then(response => {
                    this.cliente.id = response.data.id
                    this.submitted = true;
                })
                .catch(e => {
                    alert(e)
                })
        },
        novoCliente() {
            this.submitted = false
            this.cliente = {}
        }
    }
}
</script>
<style lang="">
    
</style>
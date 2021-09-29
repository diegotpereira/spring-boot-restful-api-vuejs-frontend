<template>
    <div>
        <div v-if="clienteAtual">
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
                <button @click="atualizarCliente" class="btn btn-primary">Atualizar</button>
                <button @click="deletarCliente" class="btn btn-primary">Deletar</button>
            </div>
        </div>
        <div class="alert alert-success" role="alert" v-if="message">
            {{message}}
        </div>
    </div>
</template>
<script>
import ServicoDadosCliente from '../service/ServicoDadosCliente'
 
export default {
    name: 'editar-cliente',
    data() {
        return {
            clienteAtual: null,
            message: ''
        }
    },
    methods: {
        buscarCliente(id) {
            ServicoDadosCliente.buscar(id)
                            .then(response => {
                                this.clienteAtual = response.data
                            })
                            .catch(e => {
                                alert(e)
                            })
        },

        atualizarCliente() {
            ServicoDadosCliente.atualizar(this.clienteAtual.id, this.clienteAtual)
            .then(() => {
                this.message = 'O Cliente foi Atualizado com Sucesso..!'
            })
            .catch(e => {
                alert(e)
            })
        },

        deletarCliente() {
            ServicoDadosCliente.deletar(this.clienteAtual.id)
            .then(() => {
                this.$router.push({ name: 'clientes'})
            })
            .catch(e => {
                alert(e)
            })
        }
    },
    mounted() {
        this.buscarCliente(this.$route.params.id)
    }
}
</script>
<style lang="">
    
</style>
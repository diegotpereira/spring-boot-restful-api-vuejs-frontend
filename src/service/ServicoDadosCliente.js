import http from '../http-common'

class ServicoDadosCliente {
    buscarTodos() {
        return http.get('/clientes')
    }

    buscar(id) {
        return http.get(`/clientes/${id}`)
    }

    criar(data) {
        return http.post('/clientes', data)
    }

    atualizar(id, data) {
        return http.put(`/clientes/${id}`, data)
    }

    deletar(id) {
        return http.delete(`/clientes/${id}`)
    }
}

export default new ServicoDadosCliente()
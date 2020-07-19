import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';

class App extends Component {

    state = {
        filas: [],
        nomeEvento: "Cafézinho",
        header: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers':'Origin,Cache-Control,Accept,X-Access-Token,X-Requested-With,Content-Type,Access-Control-Request-Method',
            'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin'
        }
    };

    componentDidMount() {
        fetch(`https://w3tcfvfz65.execute-api.us-east-1.amazonaws.com/dev/events/2`)
        .then(res => res.json())
        .then((data) => {
          console.log(data.eventoFilas)
          this.setState({ filas: Object.values(data.eventoFilas) })
        })
        .catch(console.log)
      }

    updateFila = async (filaAtual, filaUpdate) => {
        console.log(filaAtual, filaUpdate)
        let res = await axios.put(`http://localhost:5000/fila/${filaAtual.idFila}`, filaUpdate, { headers: this.state.header })
        console.log(res)
        if (res.status === 200) {
            axios.put(`https://w3tcfvfz65.execute-api.us-east-1.amazonaws.com/dev/events/2/fila`, res.data, { headers: this.state.header })
            .then((response) => {
                console.log(response)
                console.log(response.data)
            }
            , (error) => {
                console.log(error);
            });
        }
    }

    createFila = async (fila) => {
        let res = await axios.post(`http://localhost:5000/fila`, fila, { headers: this.state.header })
        var brokerFila = {}
        brokerFila = res.data
        brokerFila['pessoasFila'] = {} 

        console.log(brokerFila)
        if (res.status === 200) {
            axios.put(`https://w3tcfvfz65.execute-api.us-east-1.amazonaws.com/dev/events/2/fila`, brokerFila, { headers: this.state.header })
            .then((response) => {
                console.log(response)
                console.log(response.data)
            }
            , (error) => {
                console.log(error);
            });
        }
    }

    ativarFila = index => {
        const filas = this.state.filas;

        var filaAtual = ""

        filas.filter((fila, i) => { 
            if (i === index) {
                filaAtual = fila
            }
            return filaAtual;
        });

        var filaUpdate = filaAtual
        
        if (filaAtual.filaAtiva === "0") {
            filaUpdate.filaAtiva = "1"
        }
        else {
            filaUpdate.filaAtiva = "0"
        }
    
        this.updateFila(filaAtual, filaUpdate);
    }

    
    deletarFila = index => {
        const filas = this.state.filas;

        let filaAtual = ""

        filas.filter((fila, i) => { 
            if (i === index) {
                filaAtual = fila
            }
            return filaAtual;
        });

        // axios.delete Dash 
        axios.delete(`http://localhost:5000/fila/${filaAtual.idFila}`, { headers: this.state.header })
            .then((response) => {
                console.log(response);
                console.log(response.data);
            }
            , (error) => {
                console.log(error);
            });
                            
        this.setState({
            filas: filas.filter((fila, i) => { 
                return i !== index;
            })
        });
    }

    atualizarFila = index => {
        const filas = this.state.filas;
        let id = ""
        filas.filter((fila, i) => { 
            if (i === index) {
                id = fila.idFila;
            }
            return id;
        });

        // axios.get Broker 
        axios.get(`http://localhost:5000/fila/${id}`, { headers: this.state.header })
            .then((response) => {
                const filas = response.data;
                this.setState({ filas });

            }
            , (error) => {
                console.log(error);
            });
    }

    adicionarFila = fila => {
        this.setState({filas: [...this.state.filas, fila]});
        console.log(fila)

        this.createFila(fila)
    }

    render() {
        const filas = this.state.filas;
        const nomeEvento = this.state.nomeEvento;
        
        return (
            <div className="container">
                <h1>DASHBOARD STI</h1>
                <h2>Evento: {nomeEvento}</h2>
                <h4>Filas </h4>
                
                <Table
                    dadosFila={filas}
                    deletarFila={this.deletarFila}
                    ativarFila={this.ativarFila}
                />
                
                <h3>Adicionar Fila</h3>
                <Form adicionarFila={this.adicionarFila} />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';

class App extends Component {
    
    state = {
        filas: [],
        nomeEvento: "Cafézinho"
    };

    removerFila = index => {
        const filas = this.state.filas;

        // axios.delete Dash 
        axios.delete(`localhost:5000/fila/${index}`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                
                // axios.delete Broker
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
        // const filas = this.state.filas;

        // axios.get Broker 
        axios.get('localhost:5000/fila')
            .then((response) => {
                console.log(response)
                const filas = response.data;
                this.setState({ filas });

                // axios.post Dash
            }
            , (error) => {
                console.log(error);
            });
    }

    adicionarFila = fila => {
        this.setState({filas: [...this.state.filas, fila]});

        // axios.post Dash 
        axios.post('localhost:5000/fila', { fila })
        .then((response) => {
            console.log(response);
            console.log(response.data);

            // axios.post Broker
        }
        , (error) => {
            console.log(error);
        });

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
                    atualizarFila={this.atualizarFila}
                    removerFila={this.removerFila}
                />
                
                <h3>Adicionar Fila</h3>
                <Form adicionarFila={this.adicionarFila} />
            </div>
        );
    }
}

export default App;
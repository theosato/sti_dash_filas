import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    
    state = {
        filas: [],
        nomeEvento: "Cafézinho"
    };

    removerFila = index => {
        const filas = this.state.filas;
        this.setState({
            filas: filas.filter((fila, i) => { 
                return i !== index;
            })
        });
    }

    adicionarFila = fila => {
        this.setState({filas: [...this.state.filas, fila]});
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
                    removerFila={this.removerFila}
                />
                
                <h3>Adicionar Fila</h3>
                <Form adicionarFila={this.adicionarFila} />
            </div>
        );
    }
}

export default App;
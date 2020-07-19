import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            nomeAtracao: '',
            quantPessoas: "0",
            tempoFila: "0",
            vazaoFila: "0",
            duracaoFila: '',
            dataAtracao: '',
            filaAtiva: "0"
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.adicionarFila(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { nomeAtracao, quantPessoas, tempoFila, vazaoFila, duracaoFila, dataAtracao } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="nomeAtracao">Nome da Atração</label>
                <input 
                    type="text" 
                    name="nomeAtracao" 
                    id="nomeAtracao"
                    value={nomeAtracao} 
                    onChange={this.handleChange} />
                <label for="dataAtracao">Data da Atração</label>
                <input 
                    type="text" 
                    name="dataAtracao" 
                    id="dataAtracao"
                    value={dataAtracao} 
                    onChange={this.handleChange} />
                <label for="duracaoFila">Tempo Limite</label>
                <input 
                    type="text" 
                    name="duracaoFila" 
                    id="duracaoFila"
                    value={duracaoFila} 
                    onChange={this.handleChange} />
                <label for="quantPessoas">Quantidade de Pessoas</label>
                <input 
                    type="text" 
                    name="quantPessoas" 
                    id="quantPessoas"
                    value={quantPessoas} 
                    onChange={this.handleChange} />
                <label for="tempoFila">Tempo de Fila</label>
                <input
                    type="text" 
                    name="tempoFila" 
                    id="tempoFila"
                    value={tempoFila} 
                    onChange={this.handleChange} />
                <label for="vazaoFila">Vazão (pessoas/hora)</label>
                <input 
                    type="text" 
                    name="vazaoFila" 
                    id="vazaoFila"
                    value={vazaoFila} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Criar
                </button>
            </form>
        );
    }
}

export default Form;

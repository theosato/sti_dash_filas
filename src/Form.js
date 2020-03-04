import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            nomeFila: '',
            pessoasFila: '',
            tempoFila: '',
            vazaoFila: '',
            duracaoFila: '',
            dataFila: ''
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
        const { nomeFila, pessoasFila, tempoFila, vazaoFila, duracaoFila, dataFila } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="nomeFila">Nome da Atração</label>
                <input 
                    type="text" 
                    name="nomeFila" 
                    id="nomeFila"
                    value={nomeFila} 
                    onChange={this.handleChange} />
                <label for="pessoasFila">Quantidade de Pessoas</label>
                <input 
                    type="text" 
                    name="pessoasFila" 
                    id="pessoasFila"
                    value={pessoasFila} 
                    onChange={this.handleChange} />
                <label for="tempoFila">Tempo da Fila</label>
                <input 
                    type="text" 
                    name="tempoFila" 
                    id="tempoFila"
                    value={tempoFila} 
                    onChange={this.handleChange} />
                <label for="vazaoFila">Vazão (pessoas/horas)</label>
                <input 
                    type="text" 
                    name="vazaoFila" 
                    id="vazaoFila"
                    value={vazaoFila} 
                    onChange={this.handleChange} />
                <label for="dataFila">Data</label>
                <input 
                    type="text" 
                    name="dataFila" 
                    id="dataFila"
                    value={dataFila} 
                    onChange={this.handleChange} />
                <label for="duracaoFila">Tempo Limite</label>
                <input 
                    type="text" 
                    name="duracaoFila" 
                    id="duracaoFila"
                    value={duracaoFila} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Criar
                </button>
            </form>
        );
    }
}

export default Form;

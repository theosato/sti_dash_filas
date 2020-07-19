import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Nome da Atração</th>
                <th>Data da Atração</th>
                <th>Tempo Limite</th>
                <th>Quantidade de Pessoas</th>
                <th>Tempo de Fila</th>
                <th>Vazão (pessoas/hora)</th>
                <th>Fila Ativa</th>
                <th>Desativar/Ativar</th>
                <th>Excluir Fila</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.dadosFila.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nomeAtracao}</td>
                <td>{row.dataAtracao}</td>
                <td>{row.duracaoFila}</td> 
                <td>{row.tempoFila}</td>
                <td>{row.quantPessoas}</td>
                <td>{row.vazaoFila}</td>
                <td>{row.filaAtiva}</td>
                <td><button onClick={() => props.ativarFila(index)}>Mudar Status</button></td>
                <td><button onClick={() => props.deletarFila(index)}>Excluir</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { dadosFila, ativarFila, deletarFila } = props;
        return (
            <table>
                <TableHeader />
                <TableBody dadosFila={dadosFila} ativarFila={ativarFila}  deletarFila={deletarFila} />
            </table>
        );
}

export default Table;
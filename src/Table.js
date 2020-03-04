import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Atração</th>
                <th>Quantidade de Pessoas</th>
                <th>Tempo de Fila</th>
                <th>Vazão</th>
                <th>Data</th>
                <th>Tempo Limite</th>
                <th>Atualizar</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.dadosFila.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nomeFila}</td>
                <td>{row.pessoasFila}</td>
                <td>{row.tempoFila}</td>
                <td>{row.vazaoFila}</td>
                <td>{row.dataFila}</td>
                <td>{row.duracaoFila}</td>
                <td><button onClick={() => props.atualizarFila(index)}>Atualizar</button></td>
                <td><button onClick={() => props.removerFila(index)}>Deletar</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { dadosFila, atualizarFila, removerFila } = props;
        return (
            <table>
                <TableHeader />
                <TableBody dadosFila={dadosFila} atualizarFila={atualizarFila} removerFila={removerFila} />
            </table>
        );
}

export default Table;
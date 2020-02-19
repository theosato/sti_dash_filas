import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Atração</th>
                <th>Quantidade de Pessoas</th>
                <th>Tempo de Fila</th>
                <th>Vazão</th>
                <th>Tempo Limite</th>
                <th>Remove</th>
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
                <td>{row.limiteFila}</td>
                <td><button onClick={() => props.removerFila(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { dadosFila, removerFila } = props;
        return (
            <table>
                <TableHeader />
                <TableBody dadosFila={dadosFila} removerFila={removerFila} />
            </table>
        );
}

export default Table;
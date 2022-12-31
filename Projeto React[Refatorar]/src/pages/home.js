import Header from "../components/header";
import { useEffect, useState } from 'react';
import { getAllUsers } from "../service/api";
import Table from 'react-bootstrap/Table';

export default function Home() {
    const name = "Dev Aelso Rocha Brito";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    }

    return (
        <>
            <Header name={name} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}


/* Algumas das mudanças que fiz incluem:

Renomear a variável de estado do usuário para users para refletir melhor seu conteúdo.
Adicionando um suporte de chave ao elemento <tr> na função map para melhorar o desempenho da renderização da lista.
Removendo a instrução console.log desnecessária.
Espero que essas alterações ajudem a melhorar a legibilidade e a manutenção do seu código! Entre em contato se tiver alguma dúvida. */
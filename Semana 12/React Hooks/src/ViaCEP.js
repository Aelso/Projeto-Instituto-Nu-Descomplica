import { useCEP } from './hooks/useCEP';

export const Viacep = () => {
    const enderenco = useCEP('01001000');

    return (
        <table>
            <tbody>
                <tr>
                    <td>CEP</td>
                    <td>Logradouro</td>
                    <td>{enderenco.complemento}</td>
                    <td>{enderenco.bairro}</td>
                    <td>{enderenco.localidade}</td>
                    <td>{enderenco.uf}</td>
                    <td>Unidade</td>
                    <td>IBGE</td>
                </tr>
            </tbody>
        </table>
    )
}

export default App;



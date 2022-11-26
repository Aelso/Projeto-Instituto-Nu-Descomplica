import { useEffect, useState } from "react"

export const useCEP = (cep) => {
    const [enderenco, setEnderenco] = useState({});

    const fetchCep = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)

            .then(dados => dados.json())
            .then((enderenco) => {
                console.log(enderenco);
                setEnderenco(enderenco);
            }
            )
    }

    useEffect(() => {
        fetchCep(cep);
    }, [cep]);

    return enderenco;
}



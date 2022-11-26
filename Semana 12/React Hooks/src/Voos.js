const voosDisponiveis = [
    {
        id: '123',
        title: 'Aeroporto Humberto Delgado (LIS)',
        details: [
            {
                id: '443',
                title: 'Humberto Delgado (LIS)'
            },

            {
                id: '643',
                title: 'Humberto (LIS)'
            },
            {
                id: '463',
                title: ' Delgado (LIS)'
            },

            {
                id: '553',
                title: 'Aeroporto Humberto Delgado (LIS)',
                details: [{
                    id: '4663',
                    title: 'Humberto Delgado (LIS)'
                },
                {
                    id: '6663',
                    title: 'Humberto (LIS)'
                },
                {
                    id: '466644',
                    title: ' Delgado (LIS)'
                }]
            }
        ]
    }
];

function ItemVooDetails({ details }) {
    return (
        <ul>
            {details.map(detail => (<li key={detail.id}>{detail.title}</li>))}
        </ul>

    )
}

function ItemVoo(title, children) {
    return (
        <div className="voo">
            <header>
                <h3>{props.title}</h3>
            </header>

            <div className="voo-details">
                {/* <ItemVooDetails details={props.details} /> */}
                {children}


            </div>
        </div>

    );
};

function Voos() {
    // return (<h1> Voos</h1 >)
    <div className="voos">
        {voosDisponiveis.map(voo => (<ItemVoo key={voo.id} title={voo.title}>
            <ItemVooDetails details={voo.details} />

        </ItemVoo>

        ))}

    </div>
}

export default Voos;





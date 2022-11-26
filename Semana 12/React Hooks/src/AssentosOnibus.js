import React, { useEffect, useState } from "react"

const Assento = (props) => {
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
        setDisabled(true);
    }
    useEffect(() => {
        console.log("Nasceu")
    }, []);

    useEffect(() => {
        if (disabled) {
            console.log('Disabled alterou para', disabled)
        }
    }, [disabled]);


    return (
        <button
            className="assento"
            type="button"
            disabled={state.disabled}
            onClick={() => handleClick()
            }
        >
            {state.disabled ? "X" : props.pos};

        </button>
    )
};

const Fileira = (props) => {
    return (
        <div className="fileira">
            {[0, 1, 2, 3].map((pos, index) => (
                <Assento key={index} pos={props.de + pos} />
            ))}
        </div>
    )
}

export const AssentosOnibus = () => {
    return (
        <div className="container">
            {[1, 5, 9, 13, 17].map((pos, index) => (
                <Fileira key={index} de={pos} />
            ))}
        </div>
    )
}
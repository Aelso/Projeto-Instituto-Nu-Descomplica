export default function Body(clickAumentar) {
    return (
        <div className= "App-body">
            <p>
                <h1>Hello World!!!</h1>
                <button onClick={clickAumentar}>Aumentar</button>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Body
            </a>
        </div>

    );
}

// Path: components\src\components\footer.js
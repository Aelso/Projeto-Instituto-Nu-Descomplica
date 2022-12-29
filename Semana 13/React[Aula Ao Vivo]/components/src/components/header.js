import logo from '../logo.svg';

export default function Header (props) {
    console.log(props.name);

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <h3>{props.name}</h3>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Header
            </a>
        </header>);
}
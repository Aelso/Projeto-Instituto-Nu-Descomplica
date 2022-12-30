import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import { useState } from "react";


export default function Home() {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState(" ");
    function clickAumentar() {
        setInfo("Final da aula");
        setCount(count + 1);
    }
    return (
        <div className="App">
        <Header name="Aelso Brito : )" />
        <Body clickAumentar={clickAumentar} />
        <h3>
            Info: {info} - Contador {count}
        </h3>
        <Footer />
        </div>
    );
    }
    // Path: components\src\pages\home.js
import { useState, useEffect, useRef } from "react";

export function Cronometro(){
    const [hora, setHora] = useState(0)
    const [minuto, setMinuto] = useState(0)
    const [segundo, setSegundo] = useState(0)
    const timerRef = useRef(null);

    useEffect(() => {
        if (segundo === 60) {
            setMinuto((prevMinuto) => prevMinuto + 1);
            setSegundo(0);
        }
        if (minuto === 60) {
            setHora((prevHora) => prevHora + 1);
            setMinuto(0);
        }
    }, [segundo, minuto]);

    function startC() {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setSegundo((prevSegundo) => prevSegundo + 1);
            }, 100);
        }
    }
    function stopC() {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }
    return(
        <div>
            <p className="h">{hora < 10 ? `0${hora}`: hora}:</p>
            <p className="m">{minuto < 10 ? `0${minuto}`: minuto}:</p>
            <p className="s">{segundo < 10 ? `0${segundo}`: segundo}</p>
            <button onClick={startC}>start</button>
            <button onClick={stopC}>stop</button>
        </div>
    )
}
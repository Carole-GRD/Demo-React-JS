import { useState } from "react";
import clsx from 'clsx';
import style from './counter-exo.module.css';

const Counter = ({number}) => {

    const [value, setValue] = useState(0);

    const handleNumber = () => {
        // console.log('Nombre');
        setValue(currentValue => currentValue + number);
    };

    const handleReset = () => {
        // console.log('Reset');
        setValue(0);
    };


    return (
        <>
            <p>Mon compteur</p>
            <button onClick={handleNumber}>Nombre {value}</button>
            <button className={clsx(value === 0 && style.displayNone)} onClick={handleReset}>Reset</button>
        </>
    );

};

export default Counter;
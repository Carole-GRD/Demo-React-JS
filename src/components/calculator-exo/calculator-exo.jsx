import { useState } from "react";

import style from './calculator-exo.module.css';

const Calculator = () => {

    const [nombre1, setNombre1] = useState('');
    const [operation, setOperation] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [result, setResult] = useState('');
    const [donneeManquante, setDonneeManquante] = useState('');
    const [operationManquante, setOperationManquante] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // const data = {
        //     nombre1,
        //     operation,
        //     nombre2
        // };   
        // console.log('Calcul validé !', data);
    };

    
    const handleCalcul = () => {

        if (nombre1 && nombre2) {

            // pour supprimer l'affichage du message si des données sont manquantes ou si l'opérateur n'est pas sélectionné
            setOperationManquante('');
            setDonneeManquante('');
            setResult('');

            if (operation === '+') {
                setResult(Number(nombre1) + Number(nombre2));
            }
            if (operation === '-') {
                setResult(Number(nombre1) - Number(nombre2));
            }
            if (operation === 'x') {
                setResult(Number(nombre1) * Number(nombre2));
            }
            if (operation === ':') {
                setResult(Number(nombre1) / Number(nombre2));
            }
            if (operation === '') {
                // la phrase s'écrit dans l'input
                // setResult('Choisis une opération !');
                // --------------------------------------
                // la phrase s'écrit au-dessus
                setOperationManquante('Choisis une opération !');
            }
        } 
        else {
            // setResult('Donnée(s) manquante(s) !');
            setDonneeManquante('Donnée(s) manquante(s) !');
            setResult('');
            setOperationManquante('');

        }

        // ------------------------------------------------------------
        // switch (operation) {
        //     case '+' :
        //         return setResult(Number(nombre1) + Number(nombre2));
        //     case '-' :
        //         return setResult(Number(nombre1) - Number(nombre2));
        //     case 'x' :
        //         return setResult(Number(nombre1) * Number(nombre2));
        //     case ':' :
        //         return setResult(Number(nombre1) / Number(nombre2));
        //     case '' :
        //         return setResult('Choisis une opération !');
        //     default :
        //         return '';
        // }
        // ------------------------------------------------------------

    };


    return (
        <>
            <p>{donneeManquante}</p>
            <p>{operationManquante}</p>
            
            <form onSubmit={handleSubmit} className={style}>
                
                <label htmlFor='nb1'>Nb1 :</label>
                <input id='nb1' type='number' name='nb1' 
                    value={nombre1} 
                    onChange={(e) => setNombre1(e.target.value)} />
            
            
                <label htmlFor='nb1'>Opération :</label>
                <select id='operation' 
                    value={operation} 
                    onChange={(e) => setOperation(e.target.value)}>
                    <option value='' disabled={true}></option>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='x'>x</option>
                    <option value=':'>:</option>
                </select>
            
            
                <label htmlFor='nb2'>Nb2 :</label>
                <input id='nb2' type='number' name='nb2' 
                    value={nombre2} 
                    onChange={(e) => setNombre2(e.target.value)} />
                
                <button type='submit' onClick={handleCalcul}>Calculer</button>

                <input id='result' type='number' 
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    readOnly />
            </form>
        </>
    );

};

export default Calculator;
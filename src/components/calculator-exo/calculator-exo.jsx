import { useState } from "react";



const Calculator = () => {

    const [nombre1, setNombre1] = useState('');
    const [operation, setOperation] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            nombre1,
            operation,
            nombre2
        };   
        // console.log('Calcul validé !', data);
    };

    
    const handleCalcul = () => {

        switch (operation) {
            case '+' :
                return setResult(Number(nombre1) + Number(nombre2));
            case '-' :
                return setResult(Number(nombre1) - Number(nombre2));
            case 'x' :
                return setResult(Number(nombre1) * Number(nombre2));
            case ':' :
                return setResult(Number(nombre1) / Number(nombre2));
            default :
                return ''
        }
        // if (operation === '+') {
        //     setResult(Number(nombre1) + Number(nombre2));
        // }
        // if (operation === '-') {
        //     setResult(Number(nombre1) - Number(nombre2));
        // }
        // if (operation === 'x') {
        //     setResult(Number(nombre1) * Number(nombre2));
        // }
        // if (operation === ':') {
        //     setResult(Number(nombre1) / Number(nombre2));
        // }

    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor='nb1'>Nb1 : </label>
                <input id='nb1' type='number' name='nb1' 
                    value={nombre1} 
                    onChange={(e) => setNombre1(e.target.value)} />
            
            
                <label htmlFor='nb1'>Opération : </label>
                <select id='operation' 
                    value={operation} 
                    onChange={(e) => setOperation(e.target.value)}>
                    <option value='' disabled={true}>?</option>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='x'>*</option>
                    <option value=':'>/</option>
                </select>
            
            
                <label htmlFor='nb2'>Nb2 : </label>
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
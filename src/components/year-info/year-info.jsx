// Exemple de rendu dynamique :

const YearInfo = ({year}) => {

    if (year < 1600) {
        return (
            <h2>Année encodée invalide</h2>
        );
    };

    const isBissextile = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const currentYear = (new Date()).getFullYear();
    console.log(currentYear);

    return (
        <div>
            <h2>Information sur l'année {year}</h2>
            <p>L'année {isBissextile ? 'est' : 'n\'est pas'} bissextile !</p>
            {/* <p>L'année {!isBissextile && 'n\''} est {!isBissextile && 'pas'} bissextile !</p> */}

            {currentYear === year && (
                <p>C'est l'année en cours</p>
            )}
            
        </div>
    );
};

export default YearInfo;

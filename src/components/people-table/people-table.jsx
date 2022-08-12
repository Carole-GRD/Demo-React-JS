import PropTypes from 'prop-types';
import style from './people-table.module.css'

// Composant (interne) pour afficher le head de la table
const PeopleTableHead = () => (
    <thead>
        <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Age</th>
            <th>Hobbies</th>
        </tr>
    </thead>
);

// Composant (interne) pour afficher une ligne de la table
const PeopleTableRow = ({firstname, lastname, age, hobbies}) => (
    <tr>
        <td>{firstname}</td> 
        <td>{lastname}</td> 
        <td>{age || '/'}</td> 
        <td>{hobbies && (
            hobbies.join(' ') + '.'
            )}</td> 
        {/* <td>{hobbies ? (
                hobbies.join(' ') + '.'
            ) : (
                'Aucun'
            )
        }</td>  */}
    </tr>
);


// Composant pour afficher la table
const PeopleTable = ({peopleData}) => {

    // On transforme les données "peopleData" des props en collection d'élément JSX
    const peopleRender = peopleData.map(
        
        // person => <PeopleTableRow firstname={person.firstname} />
        // -> avec la manière de coder ci-dessus, on fait une ligne de code (une fonction)  pour chaque colonne !! (firstname, lastname, age, hobbies)
        // ici, il n'y a que 4 colonnes, donc on aurait 4 lignes de code
        // mais s'il y en a plus, on aura bcp de lignes de code
        
        // donc on utilise le SPREAD OPERATOR pour n'avoir qu'une seule ligne de code !
        person => <PeopleTableRow {...person} key={person.id} />
    );

    return (
        <table className={style.peopleTable}>
            <PeopleTableHead />
            <tbody>
                {peopleRender}
            </tbody>
        </table>
    );

};


// Valeur par defaut pour le "PeopleTable"
//  - Tableau vide pour éviter les erreurs avec la méthode "map"
PeopleTable.defaultProps = {
    peopleData : []
}


// Typage des "props" du composant "PeopleTable"
PeopleTable.propTypes = {
    peopleData : PropTypes.arrayOf(PropTypes.exact({
        id : PropTypes.number.isRequired,
        firstname : PropTypes.string.isRequired,
        lastname : PropTypes.string,
        age : PropTypes.number,
        hobbies : PropTypes.arrayOf(PropTypes.string)
    }))
}


export default PeopleTable;
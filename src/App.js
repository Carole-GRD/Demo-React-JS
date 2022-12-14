import './App.css';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import Welcome from './components/welcome/welcome';

// import YearInfo from './components/year-info/year-info';

// import People from './components/data/people.json';
// import PeopleTable from './components/people-table/people-table';

// import Product from './components/data/product.json';
// import ProductList from './components/creation-list/product-list';

// import Counter from './components/counter-exo/counter-exo';

import Calculator from './components/calculator-exo/calculator-exo';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Pour que les exercices fonctionnent, ne pas oublier de décommenter les import au dessus du fichier !
function App() {
  // console.log(People);
  return (
    <div className="App">
      {/* exercice 01 */}
      {/* <Welcome firstname='Carole' age={44} /> */}

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* Exemple de rendu dynamique : */}
      {/* <YearInfo year={2022} />
      <YearInfo year={2004} />
      <YearInfo year={-42} /> */}

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* <h1>Demo les collections</h1>
      <PeopleTable peopleData={People} /> */}

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* Exercice : Création d'une liste */}
      {/* <h1>Création d'une liste</h1>
      <ProductList productData={Product} /> */}
      
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* Exercice : Compte */}
      {/* <h1>Exercice : Compteur</h1>
      <Counter number={1} /> */}

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* Exercice : Calculatrice */}
      <h1>Exercice : Calculatrice</h1>
      <Calculator />

    </div>
  );
}

export default App;

// import PropTypes from 'prop-types';
// import style from './welcome.module.css';

// const Welcome = ({firstname, age}) => {
//     return (
//         <div>
//             <p className={style.titre}>Bienvenue {firstname} sur l'application React !</p>
//             <p className={style.paragraphe}>Vous avez {age} ans.</p>
//         </div>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import PropTypes from 'prop-types';
// import style from './welcome.module.css';

// const Welcome = ({firstname, age}) => {

//     let msg = '';

//     if (age >= 30) {
//         msg = 'Le vieux !'
//     }

//     return (
//         // <Fragment></Fragment> remplace <div></div> et n'existe pas dans l'HTML 
//         // ce qui 
//         // <Fragment></Fragment> s'écrit aussi <></>
//         <>  
//             <p className={style.titre + ' ' + style.textColor}>Bienvenue {firstname} sur l'application React ! <img src={process.env.PUBLIC_URL + '/favicon.ico'}></img></p>
//             <p className={style.paragraphe}>Vous avez {age} ans. {msg}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import PropTypes from 'prop-types';
// import style from './welcome.module.css';

// const Welcome = ({firstname, age}) => {
//     return (
//         <>  
//             <p className={style.titre + ' ' + style.textColor}>Bienvenue {firstname} sur l'application React !</p>
            
//             <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 ? 'La vielle !' : null}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import PropTypes from 'prop-types';
// import style from './welcome.module.css';

// const Welcome = ({firstname, age}) => {
//     return (
//         <>  
//             <p className={style.titre + ' ' + style.textColor}>Bienvenue {firstname} sur l'application React !</p>
            
//             <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 ? 'La vielle !' : null}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import PropTypes from 'prop-types';
// import style from './welcome.module.css';

// const Welcome = ({firstname, age}) => {
//     return (
//         <>  
//             <p className={style.titre + ' ' + style.textColor}>Bienvenue {firstname} sur l'application React !</p>
//             <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 && 'La vielle !'}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import PropTypes from 'prop-types';
// import style from './welcome.module.css';

// const Welcome = ({firstname, age}) => {

//     const titreEtTextColor = {titre, textColor};

//     return (
//         <>  
//             <p className={titreEtTextColor}>Bienvenue {firstname} sur l'application React !</p>
//             <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 && 'La vielle !'}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// avec constant style T1 !!!!!!!!!!!!!!!!   à faire


// import PropTypes from 'prop-types';
// import style from './welcome.module.css';
// import clsx from 'clsx';

// const Welcome = ({firstname, age}) => {
//     return (
//         <>  
//             <p className={clsx(style.titre, style.textColor)}>Bienvenue {firstname} sur l'application React !</p>
//             {/* <p className={clsx({titre : true}, {textColor : true})}>Bienvenue {firstname} sur l'application React !</p> */}
            
//             <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 && 'La vielle !'}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Ajouter avec crochets  !!!!!!


import PropTypes from 'prop-types';
import style from './welcome.module.css';
import clsx from 'clsx';

const Welcome = ({firstname, age}) => {
    return (
        <>  
            <p className={clsx(style.titre, style.textColor)}>Bienvenue {firstname} sur l'application React !</p>
            
            <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 && 'Oula !'}</p>
        </>
    );
};

Welcome.defaultProps = {
    age : 25
}

Welcome.propTypes = {
    firstname : PropTypes.string.isRequired,
    age : PropTypes.number
};

export default Welcome;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + avec condition

// import PropTypes from 'prop-types';
// import style from './welcome.module.css';
// import clsx from 'clsx';

// const Welcome = ({firstname, age}) => {
//     return (
//         <>  
//             <p className={clsx({classes.titre}, {classes.textColor})}>Bienvenue {firstname} sur l'application React !</p>
//             {/* <p className={clsx({titre : true}, {textColor : true})}>Bienvenue {firstname} sur l'application React !</p> */}
            
//             <p className={style.paragraphe}>Vous avez {age} ans. {age >= 30 && 'La vielle !'}</p>
//         </>
//     );
// };

// Welcome.defaultProps = {
//     age : 25
// }

// Welcome.propTypes = {
//     firstname : PropTypes.string.isRequired,
//     age : PropTypes.number
// };

// export default Welcome;
















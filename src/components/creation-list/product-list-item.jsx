import PropTypes from 'prop-types';
import style from './product-list.module.css';
import clsx from 'clsx';

const ProductListItem = ({produit, prix, promo}) => {
    
    const prixFormatted = prix.toLocaleString('fr-be', {
        style: 'currency',
        currency:'EUR'
    })
    return (
        
        // <li>
        //     <p>{produit} {prix + ' €'} {promo && 'promo'}</p>
        // </li>

        <li>
            <p className={style.li}>{produit}</p>
            {/* <p className={clsx(style.li, promo && style.rouge)}> {prix + ' €'} </p> */}
            {/* -> pour la ligne de code ci-dessus, il faut supprimer la constante decimal qui n'est plus utilisé ! */}
            <p className={clsx(style.li, promo && style.rouge)}> {prixFormatted} </p>
            <p className={style.li}>{promo && 'promo'}</p>
        </li>
    );
};

ProductListItem.defaultProps = {
    promo : false
};

ProductListItem.propTypes = {
    id : PropTypes.number.isRequired,
    produit : PropTypes.string.isRequired,
    prix : PropTypes.number.isRequired,
    promo : PropTypes.bool
};

export default ProductListItem;
import PropTypes from 'prop-types';
import ProductListItem from './product-list-item';

const ProductList = ({productData}) => {

    const productRender = productData.map(
        product => <ProductListItem key={product.id} {...product} />
    );

    return (
        <>
            <h3>Liste des produits (Nb : {productData.length})</h3>
            <ul>
                {productRender}
            </ul>
        </>
    );
};



export default ProductList;
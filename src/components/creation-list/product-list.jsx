import PropTypes from 'prop-types';
import ProductListItem from './product-list-item';

const ProductList = ({productData}) => {

    const productRender = productData.map(
        product => <ProductListItem key={product.id} {...product} />
    );

    return (
        <ul>
            {productRender}
        </ul>
    );
};



export default ProductList;



import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import ProductCard from '../../components/filter/productCard/ProductCard'
import Track from '../../components/track/Track'

import HeroSection from '../../components/heroSection/HeroSection'
import Layout from '../../components/layout/Layout'
import Testimonial from '../../components/testimonial/Testimonial'
import PropTypes from 'prop-types';


const CartButton = ({ item, action, onClick }) => {
  return (
    <button
      className="bg-pink-400 hover:bg-pink-500 focus:bg-pink-500 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out"
      onClick={() => onClick(item)}
      aria-label={`${action} ${item} from cart`}
    >
      {action} {item}
    </button>
  );
};

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  
  console.log(cartItem)

  // Add item to cart
  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  // Remove item from cart
  const removeCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <CartButton item="shirt" action="Add to" onClick={addCart} />
        <CartButton item="shirt" action="Remove from" onClick={removeCart} />
      </div>
      <HeroSection />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}
CartButton.propTypes = {
  item: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Home;
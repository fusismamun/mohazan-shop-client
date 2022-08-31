import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Review from '../ReviewItem/Review';
import InsideNav from '../Shared/InsideNav';
import './Order.css';

const Orders = () => {

const [products, setProducts] = useProducts();
const [cart, srtcart] = useCart(products);
   
    return (
        <div>
            <InsideNav></InsideNav>
            <h2 className='font-md text-2xl shadow-md p-10 bg-secondary text-white'>Product Review:  <span className='font-bold text-black'>Mobile Item</span></h2>
            <div className='insidelayoutOrder'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2'>
                {
                    cart.map(product => <Review
                    key={product.key}
                    product={product}
                    ></Review>)
                }
           </div>
           <div className="card w-72 h-96 bg-base-100 shadow-xl">
            <Cart cart={cart}></Cart>
            
           </div>
    </div>
        </div>
    );
};

export default Orders;
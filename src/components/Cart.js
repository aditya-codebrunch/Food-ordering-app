import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const itemList = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return <div>
        <div className="w-full flex flex-col flex-nowrap justify-center mb-2">
            <h1 className="text-center font-bold text-lg mb-1">
                Cart 
            </h1>
            <div className="w-full text-center">
                <button onClick={handleClearCart} className="bg-gray-400 rounded-md py-2 px-[1%] text-white cursor-pointer">Clear Cart</button>
            </div>
            {itemList.length && <ul className="w-full text-center px-[10%] py-[1%] mt-1">
                    {itemList.map((item) => {
                        return (<li className="w-full flex flex-row flex-nowrap justify-center p-[1%] bg-slate-300 border border-b-slate-300" key={item.id}>
                            <span className="p-[1%]">{item.itemName + ' Rs ' + item.cost}</span>
                            </li>)
                    })}
            </ul>}
            {
                !itemList.length && <p className="w-full text-center px-[10%] py-[1%]"><i>Cart is empty, add items to cart.</i></p>
            }
        </div>
    </div>
}

export default Cart;
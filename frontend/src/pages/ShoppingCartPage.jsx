import { useSelector } from "react-redux"
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

export default function ShoppingCartPage() {

    const cart = useSelector(state => state.shoppingCartRed.cart);

    return (
        <section className="flex flex-col py-12 px-11 gap-12 lg:px-48">
            <h1 className="text-2xl font-semibold">
                My cart ({cart.length} Products)
            </h1>
            <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-6 flex-1">
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </div>
                <aside className="w-full lg:w-80">
                    <OrderSummary />
                </aside>
            </div>
        </section>
    )
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersThunk } from "../store/actions/orderActions";
import OrderItem from "../components/OrderItem";

export default function PreviousOrdersPage() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orderRed.orders);

    useEffect(() => {
        dispatch(fetchOrdersThunk());
    }, [dispatch]);

    if (!orders || orders.length === 0) {
        return <div className="p-6 text-center text-[#737373]">No past orders found.</div>;
    }

    return (
        <div className="flex flex-col gap-12 py-12 px-11 lg:px-48">
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
            <div className="flex flex-col gap-4">
                {orders.map(order => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
}
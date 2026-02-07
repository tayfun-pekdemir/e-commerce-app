export default function OrderSummary({ cart, checkedItems, total }) {
    const shipping = checkedItems.length > 0 ? 4.99 : 0;   
    const discount = 0; 
    const grandTotal = total + shipping - discount;

    if(cart.length === 0) {
       return <p className="text-center w-full text-[#252B42]">Your cart is empty.</p>
    }
    return (
        <div className="flex flex-col w-full h-fit border border-[#FAFAFA] text-[#252B42] rounded-lg shadow-sm p-6 lg:w-80">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                    <span>Products Total ({checkedItems.length})</span>
                    <span>{total.toFixed(2)}$</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping.toFixed(2)}$</span>
                </div>

                <div className="flex justify-between text-[#47AD97]">
                    <span>Discount</span>
                    <span>-{discount.toFixed(2)}$</span>
                </div>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-bold text-lg">
                <span>Grand Total</span>
                <span>{grandTotal.toFixed(2)}$</span>
            </div>

            <button
                disabled={checkedItems.length === 0}
                className="mt-6 w-full bg-[#23A6F0] hover:bg-[#1D8BD3] disabled:opacity-50 disabled:pointer-events-none text-white py-2 rounded-md transition"
            >
                Create Order
            </button>
        </div>
    );
}
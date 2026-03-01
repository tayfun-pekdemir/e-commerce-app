import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

export default function OrderItem({ order }) {
  return (
    <div className="flex flex-col rounded-lg shadow-sm border border-[#FAFAFA] mb-4">

      <div className="flex border-b border-[#FAFAFA] p-2 bg-[#FAFAFA] items-center gap-2 text-sm text-[#737373] justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBox} />
          <span>Order #{order.id}</span>
        </div>
        <div className="text-sm text-[#737373]">
          {new Date(order.order_date).toLocaleString()}
        </div>
      </div>

      <div className="flex flex-col p-4 gap-4">
        {order.products.map((item,index) => (
          <div
            key={item.id ?? `order-${order.id}-item-${index}`}
            className="flex flex-col md:flex-row gap-4 items-center border-b border-[#FAFAFA] pb-2"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center flex-1 rounded-lg p-2">
              <img
                src={item.images?.[0]?.url}
                className="w-20 h-20 object-cover rounded-lg"
                alt={item.name}
              />
              <div className="flex flex-col gap-1">
                <p className="font-medium line-clamp-2">{item.name}</p>
                <p className="text-sm text-[#737373]">{item.description}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-6">
              <span className="text-sm text-[#252B42]">Qty: {item.count}</span>
              <span className="text-sm text-[#23A6F0] font-medium">
                ${(item.price * item.count).toFixed(2)}
              </span>
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-2 font-semibold text-[#252B42] text-sm">
          Total: ${order.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export function DeliveryOptions({ deliveryOptions, item }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((op) => {
        let priceString = "FREE Shipping";

        if (op.priceCents > 0) {
          priceString = `${formatMoney(op.priceCents)} - Shipping`;
        }

        return (
          <div key={op.id} className="delivery-option">
            <input
              type="radio"
              checked={op.id === item.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${item.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(op.estimatedDeliveryTimeMs).format("ddd, MMMM D")}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

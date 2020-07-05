

function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(orders);
  };
}

function refundOrder(orders, deliveryOrders) {
  deliveryOrders.shift(deliveryOrders.orderNumber);
}

function listItems(deliveryOrders) {
  return `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`
}

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i <= deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(item)) {
      return true;
    } else {
      return false;
    };
  };
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

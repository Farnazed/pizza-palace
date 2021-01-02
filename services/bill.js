const {
  getSizePrice,
  getBasicTopicPrice,
  getDeluxeTopingPrice,
} = require('./prices');
const numWords = require('num-words');
const { GST } = require('../config/const');

const computeBill = async (order) => {
  // 1. reformat order to dict

  let orderDict = getOrderDict(order);

  // 2. compute order Bill
  let bill = {};
  let orderItems = [];
  let subtotal = 0;
  // console.log(orderDict);
  for (const [key, value] of Object.entries(orderDict)) {
    let sizePrice = await getSizePrice(value.size);
    let basicTopingPrice = await getBasicTopicPrice(
      value.basic_topping,
      value.size
    );
    let deluxeTopingPrice = await getDeluxeTopingPrice(
      value.deluxe_topping,
      value.size
    );

    const amountInWords = numWords(
      value.deluxe_topping.length + value.basic_topping.length
    );
    let toppings = '';
    value.deluxe_topping.forEach((item) => {
      toppings = toppings + ' and ' + item;
    });

    value.basic_topping.forEach((item) => {
      toppings = toppings + ' and ' + item;
    });
    toppings = toppings.slice(5);

    let orderItemPrice =
      (sizePrice + deluxeTopingPrice + basicTopingPrice) * value.count;
    subtotal += orderItemPrice;
    let orderItem = `${value.count} ${value.size}, ${amountInWords} Topping Pizza - ${toppings}:$${orderItemPrice}`;
    orderItem = toTitleCase(orderItem);
    orderItems.push(orderItem);
  }
  bill.orders = orderItems;
  bill.subtotal = subtotal;
  bill.GST = Math.round(parseFloat(subtotal * GST) * 100) / 100;
  bill.total = bill.subtotal + bill.GST;
  return bill;
};

const getOrderDict = (order) => {
  let orderDict = {};
  order.forEach((element) => {
    element.basic_topping.sort();
    element.deluxe_topping.sort();
    let hashId =
      element.size +
      '-' +
      element.basic_topping.toString() +
      element.deluxe_topping.toString();
    if (orderDict[hashId] !== undefined) {
      orderDict[hashId].count += 1;
    } else {
      orderDict[hashId] = { ...element, count: 1 };
    }
  });
  return orderDict;
};

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
module.exports = {
  computeBill,
};

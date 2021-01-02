const sqlite3 = require('sqlite3').verbose();
const util = require('util');

const getDeluxeTopingPrice = (toppings, size) => {
  let file = './db/pizzaPalace.db';
  let db = new sqlite3.Database(file, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  toppingsStr = '';
  toppings.forEach((element) => {
    toppingsStr += `"${element}",`;
  });
  toppingsStr = toppingsStr.replace(/.$/, '');

  let query = `SELECT SUM(${size}) FROM deluxeToppings WHERE topping IN (${toppingsStr})`;
  return new Promise(function (resolve, reject) {
    db.get(query, function (err, row) {
      if (err) reject('Read error: ' + err.message);
      else {
        resolve(row[`SUM(${size})`] || 0);
      }
    });
  });
};

const getBasicTopicPrice = (toppings, size) => {
  let file = './db/pizzaPalace.db';
  let db = new sqlite3.Database(file, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  toppingsStr = '';
  toppings.forEach((element) => {
    toppingsStr += `"${element}",`;
  });
  toppingsStr = toppingsStr.replace(/.$/, '');

  let query = `SELECT SUM(${size}) FROM basicToppings WHERE topping IN (${toppingsStr})`;
  return new Promise(function (resolve, reject) {
    db.get(query, function (err, row) {
      if (err) reject('Read error: ' + err.message);
      else {
        resolve(row[`SUM(${size})`] || 0);
      }
    });
  });
};

const getSizePrice = (size) => {
  let file = './db/pizzaPalace.db';
  let db = new sqlite3.Database(file, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  let query = `SELECT price FROM sizes WHERE size="${size}"`;

  return new Promise(function (resolve, reject) {
    db.get(query, function (err, row) {
      if (err) reject('Read error: ' + err.message);
      else {
        resolve(row.price);
      }
    });
  });
};
module.exports = {
  getSizePrice,
  getBasicTopicPrice,
  getDeluxeTopingPrice,
};

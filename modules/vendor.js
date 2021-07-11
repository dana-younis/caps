'use strict';
const events =require('../events')
const faker = require('faker');
require('dotenv').config();


const store = process.env.STORE;

const myInterval =setInterval(() => {
  let newOrder = {
    storeName: store,
    name: faker.name.findName(),
    orderID: faker.datatype.uuid(),
    address: faker.address.streetAddress()
  };
  events.emit('pick-uporder', newOrder);
}, 4000);

events.on('delivered', payload => {
  console.log(`Thank you for your order! Order number was ${payload.orderID}`);
})
module.exports = {myInterval}
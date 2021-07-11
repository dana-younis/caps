'use strict';
const events =require('../events')
const faker = require('faker');
require('dotenv').config();


const store = process.env.STORE;

setInterval(() => {
    const order={
        storeName:store,
        orderID: faker.datatype.uuid(),
         customerName:faker.name.findName(),
         address: faker.address.streetAddress()
    }
    events.emit('pick-up',order)
}, 5000);

events.on('delivered',()=>{
    console.log('Thank you!')
});


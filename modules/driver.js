'use strict';
const events =require('../events')
const faker = require('faker');

require('./vendor');


events.on('pickup', payload => {
    setTimeout(() => {
      console.log(`DRIVER: picked up ${payload.orderID}`)
    }, 1000);
    events.emit('in-transit', payload);
  });
  
  events.on('in-transit', payload => {
    setImmediate(()=>{
        console.log(`DRIVER: delivered up Order#${payload.orderId}`)
        events.emit('delivered', payload)
        },3000)
  });
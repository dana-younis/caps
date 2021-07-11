'use strict';
const events = require('./events');
let faker = require('faker');
require('./modules/driver');
require('./modules/vendor');

events.on('pick-up', (payload)=>{
    console.log('EVENT:', {
        event: 'pick-up',
        time:  faker.date.recent(),
        payload,
    });
});

events.on('in-transit', (payload)=>{
    console.log('EVENT:', {
        event: 'in-transit',
        time:  faker.date.recent(),
        payload
    });
});

events.on('delivered',(payload)=>{
    console.log('EVENT:', {
        event: 'delivered',
        time:  faker.date.recent(),
        payload,
    });
});
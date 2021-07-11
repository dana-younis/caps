'use strict';
const events =require('../events')


require('./vendor');


events.on('pick-up', payload => {
    setTimeout(() => {
      console.log(`DRIVER: picked up ${payload.orderID}`)
      events.emit('in-transit', payload);
    }, 1000);
  ;
  

  setTimeout(()=>{
        console.log(`DRIVER: delivered up Order${payload.orderId}`)
        events.emit('delivered', payload);
        },3000)
})

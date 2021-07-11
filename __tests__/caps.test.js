'use strict';
const events = require('../events');


describe('Events order', () => {
  let store;
  
  let  order= {
    storeName: 'Rose paris',
    orderID: '414e4ecd-f8d8-456d-8da0-f31aacffa62c',
    customerName: 'Kristi Haley',
    address: '1780 Jett Pass',
  };

  beforeEach(()=> {
    store = jest.spyOn(console, 'log').mockImplementation();

  });

  afterEach(() => {
    store.mockRestore();
  });

  it('order pick-up handler', async() => {
    events.emit('pick-up',order);
    await store();
    expect(store).toHaveBeenCalledWith();
    console.log(store);
  });
  it('order in-Transit handler', async() => {
    events.emit('in-transit',order);
    await store();
    expect(store).toHaveBeenCalledWith();
  });
  it('order delivered handler', async() => {
    events.emit('delivered',order);
    await store();
    expect(store).toHaveBeenCalledWith();
  });


});

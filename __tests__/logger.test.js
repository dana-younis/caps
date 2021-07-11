'use strict';
const events = require('../events');


describe('Events test', () => {
  let stores;
  
  let  test= {
    storeName: 'Rose paris',
    orderID: '414e4ecd-f8d8-456d-8da0-f31aacffa62c',
    customerName: 'Kristi Haley',
    address: '1780 Jett Pass',
  };

  beforeEach(()=> {
    stores = jest.spyOn(console, 'log').mockImplementation();

  });

  afterEach(() => {
    stores.mockRestore();
  });

  it('test pickup handler', async() => {
    events.emit('pick-up',test);
    await stores();
    expect(stores).toHaveBeenCalled();
  });
  it('test inTransit handler', async() => {
    events.emit('in-transit',test);
    await stores();
    expect(stores).toHaveBeenCalled();
  });
  it('test delivered handler', async() => {
    events.emit('delivered',test);
    await stores();
    expect(stores).toHaveBeenCalled();
  });


});

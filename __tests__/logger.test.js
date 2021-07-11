'use strict';
const { myInterval } = require('../modules/vendor')
const events = require('../events')
require('../caps')

  describe( 'Events', () => {
    let consoleSpy;
  
    let order = {
      storeName: 'Rose paris', 
      orderId: 1, 
      customerName: 'dana', 
      address: 'Amman'
    }
        beforeEach( () => {
        consoleSpy = jest.spyOn( console, 'log' );
      } );
      
      afterEach( () => {
        consoleSpy.mockRestore();
      } );
      
      it( 'test pick-up event logs',  async () => {
          
      events.emit('pick-up', order)
      
        expect(consoleSpy).toHaveBeenCalledWith('Event{ event: pick-up')
        expect(consoleSpy).toHaveBeenCalled()
        expect(consoleSpy).toHaveBeenCalledWith('payload')
        expect(consoleSpy).toHaveBeenCalledWith(order)
    
  } );
  
  it( 'test in-transit event logs',  async() => {
          
      events.emit('in-transit', order)

      expect(consoleSpy).toHaveBeenCalledWith('Event{ event: in-transit')
      expect(consoleSpy).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalledWith('payload')
      expect(consoleSpy).toHaveBeenCalledWith(order)
  
  
  });
  it( 'test delivered event logs',  async() => {
          
      events.emit('delivered', order)

      expect(consoleSpy).toHaveBeenCalledWith('Event{ event: delivered')
      expect(consoleSpy).toHaveBeenCalled()
      expect(consoleSpy).toHaveBeenCalledWith('payload')
      expect(consoleSpy).toHaveBeenCalledWith(order)

  clearInterval(myInterval)
  } );
} );
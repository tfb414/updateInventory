describe('updateInventory', function(){
    it('When newInv only includes one item that curInv already has, it should update the current inventory', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],[[2, "Hair Pin"]])).toEqual([[ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 3, 'Hair Pin' ], [ 5, 'Microphone' ]]);

    });
    it('When newInv has more than one item in which curInv has all of them already, it should update the current inventory', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],[[2, "Hair Pin"], [2, "Microphone"]])).toEqual([[ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 3, 'Hair Pin' ], [ 7, 'Microphone' ]]);

    });
    it('When newInv has an item not currently in curInv, it should add it to the curInv then update all records', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],[[2, "Hair Pin"], [2, "Microphone"], [3, "Tesseract"]])).toEqual([[ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 3, 'Hair Pin' ], [ 7, 'Microphone' ], [3, "Tesseract"]]);

    });
    it('When curInv is empty, it should add all items then update all records', function(){
        expect(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);

    });
});




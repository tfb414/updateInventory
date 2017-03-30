describe('updateInventory', function(){
    it('Should update the current inventory when newInv only includes one item that curInv already has', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],[[2, "Hair Pin"]])).toEqual([[ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 3, 'Hair Pin' ], [ 5, 'Microphone' ]]);

    });
    it('Should update the current inventory when newInv has more than one item in which curInv has all of them already', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],[[2, "Hair Pin"], [2, "Microphone"]])).toEqual([[ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 3, 'Hair Pin' ], [ 7, 'Microphone' ]]);

    });
    it('Should add it to the curInv then update all records when newInv has an item not currently in curInv ', function(){
        expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],[[2, "Hair Pin"], [2, "Microphone"], [3, "Tesseract"]])).toEqual([[ 21, 'Bowling Ball' ], [ 2, 'Dirty Sock' ], [ 3, 'Hair Pin' ], [ 7, 'Microphone' ], [3, "Tesseract"]]);

    });
    it('Should add all items then update all records when curInv is empty', function(){
        expect(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);

    });
});




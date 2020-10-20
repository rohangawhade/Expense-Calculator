var budgetController = (function() {
    var x = 20;
    var add = function(a){
        return x + a;
    }
    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();

var UIController = (function(){
    // Some code
})();

var controller = (function(budgetCtrl, uiCtrl){
    var z = budgetCtrl.publicTest(10);
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
})(budgetController, UIController);
var UIColors = (function(){
    var content = {
        loss: "#FF3232",
        profit: "#2EA44F"
    };
    return content;
})();


var InputExpense = (function(){
    return {
        getInput: function(){
            return{
                type: document.getElementById("type-expense").value,
                amount:  document.getElementById("amt-expense").value
            };
        }
    };
})();

var GetExpense = (function(InpExp) {
    
    return {
        getExp: function(){
            var save = document.getElementById("save-expense");
            var sendAmt = [];
            save.addEventListener("click", function(){
                var inp = InpExp.getInput();
                var expense = inp.amount;
                var typeExp = inp.type;
                console.log("expense = "+expense+" typeExp = "+typeExp);
                sendAmt.push([typeExp, expense]);
            });
            return {
                sendAmount: sendAmt
            }
        }
    }
})(InputExpense);
var expArr = [];
var CalcExpense = (function(GetExp){
    var inp = GetExp.getExp();
    expArr.push(inp.sendAmount);
    console.log("expArr = "+expArr);
    return expArr;
    DisplayExpense();
})(GetExpense);

var DisplayExpense = (function(){
    var temp = CalcExpense.map(el => el);
    var element = document.getElementsByClassName("card-body");
    element[0].innerText = String(temp[0][0][1]);
});

// var budgetController = (function() {
//     var x = 20;
//     var add = function(a){
//         return x + a;
//     }
//     return {
//         publicTest: function(b){
//             return add(b);
//         }
//     }
// })();

// var UIController = (function(){
//     // Some code
// })();

// var controller = (function(budgetCtrl, uiCtrl){
//     var z = budgetCtrl.publicTest(10);
//     return {
//         anotherPublic: function(){
//             console.log(z);
//         }
//     }
// })(budgetController, UIController);
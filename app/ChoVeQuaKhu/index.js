var app = (function () {
    let pastNumber = [];
    
    function getPastNumber() {
        return pastNumber;
    }
    function addPastNumber(number) {
        pastNumber.push(number);
    }
    function deleteAll() {
        pastNumber = [];
    }
    return{
        getPastNumber:getPastNumber,
        addPastNumber:addPastNumber,
        deleteAll:deleteAll
    }
})();
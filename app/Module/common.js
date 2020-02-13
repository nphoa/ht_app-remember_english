var commonModule = (function () {
    function getRandomIntInclusive(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log(min);
        console.log(max);
        let random = Math.floor(Math.random() * (max - min)) + min;
        //console.log(Math.floor(Math.random() * (max - min + 1)));
        //console.log(random);
    }
    return {
        getRandomIntInclusive:getRandomIntInclusive
    }
})();
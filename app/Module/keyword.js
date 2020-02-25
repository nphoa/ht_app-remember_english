var keywordModule = (function () {
    var data = [];
     function getDataFromAPI() {
        let fetAPI = fetch('http://5ad83c2742a4a50014d5f338.mockapi.io/db_local/keywords');
        return fetAPI;
    }
    async function randomKeyWord(count) {
        let data1 = null;
        let randomArrs = [];
         await getDataFromAPI().then(res => res.json()).then(res =>{
             for(let i = 1;i<=count;i++){
                 let numberRandom = commonModule.getRandomIntInclusive(1,30);
                 if(randomArrs.length > 0){
                     let eleExist = randomArrs.find(element => element.id == numberRandom);
                     if(eleExist != undefined){
                         count++;
                         continue;
                     }
                 }
                 let eleFind = res.find(element => element.id == numberRandom);
                 eleFind.indexPosition = i;
                 randomArrs.push(eleFind);
             }
        });
       return randomArrs;
    }
    function changeRandomPositionInArrayObject(data) {
        console.log(data);
        let countArray = data.length;
        let newArrayData = [];
        for (let i =0 ;i <= countArray ; i ++){
            let numberRandom = commonModule.getRandomIntInclusive(1,countArray);
            if(newArrayData.length > 0){
                let eleExist = newArrayData.find(element => element.id == numberRandom);
                if(eleExist != undefined){
                    count++;
                    continue;
                }
            }
            let eleFind = res.find(element => element.id == numberRandom);
            randomArrs.push(eleFind);
        }
    }
    return {
        changeRandomPositionInArrayObject:changeRandomPositionInArrayObject,
        randomKeyWord:randomKeyWord
    }
})();
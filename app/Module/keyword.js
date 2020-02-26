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
        let countArray = (data.length) -1;
        let iFor = countArray;
        let newArrayData = [];
        for (let i =0 ;i <= iFor ; i ++){
            let numberRandom = commonModule.getRandomIntInclusive(0,countArray);
            let eleFind = data[numberRandom];
            if(newArrayData.length > 0){
                //let eleExist = data[numberRandom];
                let check = newArrayData.find(element => element.id == eleFind.id);
                if(check != undefined){
                    iFor++;
                    continue;
                }
            }
            newArrayData.push(eleFind);
        }
        return newArrayData;
    }
    return {
        changeRandomPositionInArrayObject:changeRandomPositionInArrayObject,
        randomKeyWord:randomKeyWord
    }
})();
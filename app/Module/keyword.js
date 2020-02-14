var keywordModule = (function () {
    var data = [
        {
            'id'       :1,
            'keyword'  : 'english',
            'vietnames': 'tiếng anh'
        },
        {
            'id'       :2,
            'keyword'  : 'account',
            'vietnames': 'tài khoản'
        },
        {
            'id'       :3,
            'keyword'  : 'animal',
            'vietnames': 'động vật'
        },
        {
            'id'       :4,
            'keyword'  : 'amy',
            'vietnames': 'quân đội'
        },
        {
            'id'       :5,
            'keyword'  : 'information',
            'vietnames': 'thông tin'
        },
        {
            'id'       :6,
            'keyword'  : 'health',
            'vietnames': 'sức khoẻ'
        }
    ];
    function randomKeyWord(count) {
        let randomArrs = [];
        for(let i = 1;i<=count;i++){
            let numberRandom = commonModule.getRandomIntInclusive(1,6);
            console.log(numberRandom);
            let eleFind = data.find(element => element.id === numberRandom);
            console.log(eleFind);
            randomArrs.push(eleFind);
        }
        return randomArrs;
    }
    return {
        data:data,
        randomKeyWord:randomKeyWord
    }
})();
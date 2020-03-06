let appModule =  (function () {
    let title = [
        {
            id:1,
            name:'Xã hội'
        },
        {
            id:2,
            name:'Văn học'
        },
        {
            id:3,
            name:'Cuộc sống'
        },
        {
            id:4,
            name:'Xe cộ'
        },
        {
            id:5,
            name:'Thế giới'
        }
    ];
    let question_answer = [
        {
            id:1,
            idTitle:5,
            question:'Tổng thống mỹ hiện thời là ai ?',
            answer:'DonalTrump'
        },
        {
            id:2,
            idTitle:2,
            question:'Em gái của Thuý Kiều tên gì ?',
            answer:'ThuyVan'
        },
        {
            id:3,
            idTitle:2,
            question:'Ai là tác giả của tiểu phẩm Lão Hạc ?',
            answer:'Namcao'
        },
        {
            id:4,
            idTitle:4,
            question:'Exciter là dòng xe phổ thông nổi tiếng của hãng nào ? ',
            answer:'Yamaha'
        },
        {
            id:5,
            idTitle:2,
            question:'Văn bản “Con rồng cháu tiên” thuộc thể loại văn học dân gian nào ?',
            answer:'Truyenthuyet '
        }

];
    let score = [
        {
            name:'Bạn được cộng thêm 20 điểm',
            handle:'+20'
        },
        {
            name:'Xui vkl bị trừ hết điểm đang có ! ',
            handle:'0'
        },
        {
            name:'Bạn được cộng thêm 50 điểm',
            handle:'+50'
        },
        {
            name:'Bạn đã bị mất lượt',
            handle:'MatLuot'
        },
        {
            name:'Bạn đã bị trừ 30 điểm',
            handle:'-30'
        },
    ];
    let handleActions = new Map([
        [
            '+20' , (player) => {
                player.score += 20;
            }
        ],
        [
            '0' , (player) => {
                player.score = 0;
            }
        ],
        [
            '+50' , (player) => {
                player.score += 50;
            }
        ],
        [
            '-30' , (player) => {
                player.score -= 30;
            }
        ],
        [
            'MatLuot' , (player) => {
                player.active = false;
            }
        ]

    ]);
    let questionRamdomByTitle = null;
    let questionRamdomByTitle_Handle_Arr = null;
    let countCharacterResult = 0;
    let players = [];

    function getQuestionByTitle(idTitle) {
        let questions = question_answer.filter(item => item.idTitle == idTitle);
        let questionRandom = null;
        let count = questions.length;
        for (i = 0;i<count;i++){
            let randomNumber = commonModule.getRandomIntInclusive(1,10);
             questionRandom = questions.find( item => item.id == randomNumber);
            if (questionRandom != null || questionRandom != undefined){
                break;
            }else{
                count++;
            }
        }
        questionRamdomByTitle = questionRandom;
        questionRamdomByTitle_Handle_Arr = [...questionRandom.answer.trim()];
       return questionRandom;

    }
    function getQuestionRandomByTitle() {
        return questionRamdomByTitle;
    }
    function addCountCharacterResult(numberCharacter) {
        return countCharacterResult += numberCharacter;
    }
    function getCountCharacterResult() {
        return countCharacterResult;
    }
    function checkCharacterExsit(character) {
        let result = false;
        let founded = questionRamdomByTitle_Handle_Arr.find(element => element.toUpperCase() == character.toUpperCase());
        console.log(founded);
        if(founded != null || founded != undefined){
            result = true;
        }
        return result;
    }
    function removeCharacterAfterChoose(character) {
        //let arr = [...questionRamdomByTitle_Handle_Arr.answer.trim()];
        for(let i=0;i < questionRamdomByTitle_Handle_Arr.length;i++){
            if(character.toUpperCase() == questionRamdomByTitle_Handle_Arr[i].toUpperCase()){
                questionRamdomByTitle_Handle_Arr.splice(i,1);
            }
        }
        return questionRamdomByTitle_Handle_Arr;
    }
    function addNewPlayer(player) {
        players.push(player);
    }
    function getPlayers() {
        return players;
    }
    function getRandomQuayLuot() {
        let keyRandom = commonModule.getRandomIntInclusive(0,4);
        return score[keyRandom];
    }
    function handleActionByKeyMap(key,player) {
        let action = handleActions.get(key);
        action(player);
    }
    function getPlayerActive() {
        let player = players.find( player => player.active == true );
        return player;
    }
    function changeStatusActive(playerActive) {
       // let playerActive = players.find( player => player.active == true );
        let idChange = playerActive.id;
        if(idChange == players.length){
            idChange = 1;
        }else{
            idChange += 1;
        }
        playerActive.active.active = false;
        let playerChangeActive = players.find( player => player.id == idChange );
        playerChangeActive.active = true;
    }
    return{
        title:title,
        question_answer:question_answer,
        getQuestionByTitle:getQuestionByTitle,
        getQuestionRandomByTitle:getQuestionRandomByTitle,
        addCountCharacterResult:addCountCharacterResult,
        getCountCharacterResult:getCountCharacterResult,
        checkCharacterExsit:checkCharacterExsit,
        removeCharacterAfterChoose:removeCharacterAfterChoose,
        addNewPlayer:addNewPlayer,
        getPlayers :getPlayers,
        getRandomQuayLuot:getRandomQuayLuot,
        handleActionByKeyMap:handleActionByKeyMap,
        getPlayerActive:getPlayerActive,
        changeStatusActive:changeStatusActive

    }
})();
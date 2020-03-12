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
            answer:'DonalTrump',
            vietnamese:'DonalTrump'
        },
        {
            id:2,
            idTitle:2,
            question:'Em gái của Thuý Kiều tên gì ?',
            answer:'ThuyVan',
            vietnamese:'Thuý Vân'
        },
        {
            id:3,
            idTitle:2,
            question:'Ai là tác giả của tiểu phẩm Lão Hạc ?',
            answer:'Namcao',
            vietnamese:'Nam cao'
        },
        {
            id:4,
            idTitle:4,
            question:'Exciter là dòng xe phổ thông nổi tiếng của hãng nào ? ',
            answer:'Yamaha',
            vietnamese:'Yamaha'
        },
        {
            id:5,
            idTitle:2,
            question:'Văn bản “Con rồng cháu tiên” thuộc thể loại văn học dân gian nào ?',
            answer:'Truyenthuyet ',
            vietnamese:'Truyền thuyết '
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
                //player.active = false;
            changeStatusActive(player);
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
    function getQuestionRamdomByTitle_Handle_Arr() {
        return questionRamdomByTitle_Handle_Arr;
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
        let keyRandom = commonModule.getRandomIntInclusive(0,1);
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
    function changeStatusActive(playerCurrentActive) {
        let idChange = playerCurrentActive.id;
        if(idChange == players.length){
            idChange = 1;
        }else{
            idChange += 1;
        }
        updatePlayerByProps(playerCurrentActive,{'active':false,'turn':false});
        let playerNewActive = players.find( player => player.id == idChange );
        updatePlayerByProps(playerNewActive,{'active':true,'turn':false});
    }
    function updatePlayerByProps(player,propO) {
        for (let [prop,value] of Object.entries((propO))){
            player[prop] = value;
        }
    }
    function getPlayerHaveMaxScore() {
        let max = players[0].score;
        let playerMax = players[0];
        for(const player of players){
            if (player.score > max){
                max = player.score;
                playerMax = player
            }
        }
        return playerMax;
    }
    function resetGame() {
         questionRamdomByTitle = null;
         questionRamdomByTitle_Handle_Arr = null;
         countCharacterResult = 0;
         for (const player of players){
             updatePlayerByProps(player,{score :0,turn:false});
         }
    }
    return{
        title:title,
        question_answer:question_answer,
        getQuestionByTitle:getQuestionByTitle,
        getQuestionRandomByTitle:getQuestionRandomByTitle,
        getQuestionRamdomByTitle_Handle_Arr:getQuestionRamdomByTitle_Handle_Arr,
        addCountCharacterResult:addCountCharacterResult,
        getCountCharacterResult:getCountCharacterResult,
        checkCharacterExsit:checkCharacterExsit,
        removeCharacterAfterChoose:removeCharacterAfterChoose,
        addNewPlayer:addNewPlayer,
        getPlayers :getPlayers,
        getRandomQuayLuot:getRandomQuayLuot,
        handleActionByKeyMap:handleActionByKeyMap,
        getPlayerActive:getPlayerActive,
        changeStatusActive:changeStatusActive,
        updatePlayerByProps:updatePlayerByProps,
        getPlayerHaveMaxScore:getPlayerHaveMaxScore,
        resetGame:resetGame

    }
})();
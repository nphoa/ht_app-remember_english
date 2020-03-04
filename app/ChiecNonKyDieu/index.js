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
    let questionRamdomByTitle = null;
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
       return questionRandom;

    }
    function getQuestionRandomByTitle() {
        return questionRamdomByTitle;
    }
    return{
        title:title,
        question_answer:question_answer,
        getQuestionByTitle:getQuestionByTitle,
        getQuestionRandomByTitle:getQuestionRandomByTitle
    }
})();
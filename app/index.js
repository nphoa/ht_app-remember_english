var keywords = [];
var number_keyword = 0;
$(document).ready(function () {
    $("#randomKeyword").on('click',function () {
            let number_div_english = $("div#english");
            let number_div_vietnamese = $("div#vietnamese");
            number_keyword = $("#numberKeyword").val();

            if (number_keyword == null || number_keyword == undefined || number_keyword == '' || number_keyword == '0'){
                alert('You must enter keyword number');
                return ;
            }
            if (number_div_english.find('input').length == number_keyword){
                return;
            }
            let dataPromiseAPI = keywordModule.randomKeyWord(number_keyword);
            dataPromiseAPI.then(res => showDataCallBack(res,number_div_english,number_div_vietnamese));
            $("div#infoKeywords").slideDown("slow");
        });
    $("#ready").on('click',function () {
        let keywordsAfterChangePosition = keywordModule.changeRandomPositionInArrayObject(keywords);
        let minute = $("#minute").val();
        let seconds = $("#seconds").val();
        if (minute == 0 && seconds == 0) {
            alert('You must enter minute or seconds !');
            return;
        }
        if (keywords.length == 0){
            alert('You must random keywords !');
            return;
        }
        $("div#infoKeywords").css('display','none');
        $("div#divResult").css('display','');
        let number_div_english_result = $("div#english_result");
        let number_div_vietnamese_result = $("div#vietnamese_result");
        let div_result = $("div#result");
        for (let i = 0; i < keywordsAfterChangePosition.length; i++) {
            let input_vietnamese_result = `<input type="text" class="form-control" data-id="${keywordsAfterChangePosition[i].id}" value="${keywordsAfterChangePosition[i].vietnamese}" readonly> <br>`;
            number_div_vietnamese_result.append(input_vietnamese_result);
            let input_english_result = `<input type="text" class="form-control test1" data-id="${keywordsAfterChangePosition[i].id}" onkeyup="check(this)"> <br>`;
            number_div_english_result.append(input_english_result);
            let divResult = `<div class="" role="alert" data-id="${keywordsAfterChangePosition[i].id}" data-result="false" style="display: none"></div>`;
            div_result.append(divResult);
        }

        let time = (parseInt(minute) * 60) + parseInt(seconds);
        commonModule.startCountdownTimer(time,$("#timerCountdown")).then(res => {
            if(res == 'resolved'){
                alert('Game finish');
                $("div#divResult").css('display','none');
                finishGame();
            }

        });
    });
    $("#reset").on('click',function () {
        let domTrScore = $("div#score").find("table").find("tr#score_summary");
        $(domTrScore).find('td').text('');
        $("div#score").css('display','none');
        clearForm();
    });

});
function showDataCallBack(data,number_div_english,number_div_vietnamese) {
    keywords = data;
    for (let i = 0; i < keywords.length; i++) {
        let input_english = `<input type="text" class="form-control" disabled value="${keywords[i].keyword}" > <br>`;
        number_div_english.append(input_english);
        let input_vietnamese = `<input type="text" class="form-control" disabled value="${keywords[i].vietnamese}" > <br>`;
        number_div_vietnamese.append(input_vietnamese);
    }

}
function check(e) {
    let id_keyword = $(e).attr('data-id');
    let result = $(e).val();
    let objFind = keywords.find(element => element.id == id_keyword);
    let check = false;
    if (objFind.keyword == result) {
        check = true;
    }
    let selector =  $("div#result").find($(`div[data-id=${id_keyword}]`));
    selector.removeClass();
    if(check){
        selector.addClass('alert alert-success');
        selector.attr('data-result','true');
        selector.text('Correct');
    }else{
        selector.addClass('alert alert-danger');
        selector.text('Error');
    }
    selector.css('display','');
}

function clearForm() {
    $("div#infoKeywords").css('display','none');
    $("#english").find("input,br").remove();
    $("#vietnamese").find("input,br").remove();
}
function finishGame() {
    keywords = [];
    $("#vietnamese_result").find("input,br").remove();
    $("#english_result").find("input,br").remove();

    //Show score
    let number_correct_result = $("#result").find("div[data-result=true]").length;
    let number_error_result = $("#result").find("div[data-result=false]").length;
    //console.log(number_error_result);
    let domTr = $("div#score").find("table").find("tr#score_summary");
    domTr.find("td:eq(0)").text(number_keyword);
    domTr.find("td:eq(1)").text(number_correct_result);
    domTr.find("td:eq(2)").text(number_error_result);
    $("div#score").css('display','');
    $("#result").find("div").remove();

    //Show again information keywords
    $("div#infoKeywords").css('display','');
}

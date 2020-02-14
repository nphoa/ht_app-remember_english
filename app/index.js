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
            keywords = keywordModule.randomKeyWord(number_keyword);
            for (let i = 0; i < keywords.length; i++) {
                let input_english = `<input type="text" class="form-control" value="${keywords[i].keyword}" > <br>`;
                number_div_english.append(input_english);
                let input_vietnamese = `<input type="text" class="form-control" value="${keywords[i].vietnames}" > <br>`;
                number_div_vietnamese.append(input_vietnamese);
            }
            $("div#infoKeywords").css('display','');
        });
    $("#ready").on('click',function () {
        $("div#infoKeywords").css('display','none');
        $("div#divResult").css('display','');
        let number_div_english_result = $("div#english_result");
        let number_div_vietnamese_result = $("div#vietnamese_result");
        let div_result = $("div#result");
        for (let i = 0; i < keywords.length; i++) {
            let input_vietnamese_result = `<input type="text" class="form-control" data-id="${keywords[i].id}" value="${keywords[i].vietnames}" readonly> <br>`;
            number_div_vietnamese_result.append(input_vietnamese_result);
            let input_english_result = `<input type="text" class="form-control test1" data-id="${keywords[i].id}" onkeyup="check(this)"> <br>`;
            number_div_english_result.append(input_english_result);
            let divResult = `<div class="" role="alert" data-id="${keywords[i].id}" style="display: none"></div>`;
            div_result.append(divResult);
        }
    });
});
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
        selector.text('Correct');
    }else{
        selector.addClass('alert alert-danger');
        selector.text('Error');
    }
    selector.css('display','');
}

(function($){
    $(document).ready(function () {
        $("#randomKeyword").on('click',function () {
            commonModule.getRandomIntInclusive(1,3);
            let keywords = keywordModule.data;
            for (let i = 0; i < keywords.length; i++) {
                console.log(keywords[i]);
                let input_english = `<input type="text" class="form-control" value="${keywords[i].keyword}" disabled> <br>`;
                $("div#english").append(input_english);
                let input_vietnamese = `<input type="text" class="form-control" value="${keywords[i].vietnames}" disabled> <br>`;
                $("div#vietnamese").append(input_vietnamese);
            }
            $("div#infoKeywords").css('display','');
        });

    });
})(jQuery);
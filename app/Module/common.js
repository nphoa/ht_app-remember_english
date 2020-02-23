var commonModule = (function () {
    function getRandomIntInclusive(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }
     function countDownTimer(duration,display) {
        let timer = duration,minutes,seconds;
        //let result  = false;
        return new Promise(resolve => {
            let a =  setInterval(function () {
                if (timer <= 0) {
                    clearInterval(a);
                    resolve('resolved');
                }
                minutes = parseInt(timer / 60,10);
                seconds = parseInt(timer % 60,10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.text(minutes + ":" + seconds);
                timer--;
            },1000);
        });

        //return result;
    }
    async function startCountdownTimer(duration,display) {
        return  await countDownTimer(duration,display);
    }

    return {
        getRandomIntInclusive:getRandomIntInclusive,
        startCountdownTimer:startCountdownTimer
    }
})();
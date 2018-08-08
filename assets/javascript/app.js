$(document).ready(function(){
    console.log("ready")
    var clockRunning = false;
    var timer;
    var countDown = {
        time: 150000,
        reset: function(){
            countDown.time = 150000;
            $("#clockTimer").text("01:30")
            
        },
        startTimer: function(){
            if(!clockRunning){
                timer = setInterval(countDown.count,150000)
                clockRunning=true;
            }
        },
        count: function(){
            countDown.time--
            var convertedTime = countDown.timeConverter(countDown.time);
            console.log(convertedTime);
            // assign this to a div
        },
        timeConverter: function(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
        
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
        
            if (minutes === 0) {
              minutes = "00";
            }
            else if (minutes < 10) {
              minutes = "0" + minutes;
            }
        
            return minutes + ":" + seconds;
          }
    // end of object block
    }
// end of .ready block.
});
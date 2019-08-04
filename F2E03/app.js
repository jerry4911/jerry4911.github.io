var status=0;
var progress=0;
var app= new Vue({
    el:"#app",
    data:{
        playStatus:"play_circle_filled_white",
        stop:"",
    },
    methods:{
        playSong(){
            status=1-status;
            if(status==1){
                this.go();
                this.playStatus="pause_circle_outline_filled_white";
            }
            else{
                this.stopTime();
                this.playStatus="play_circle_filled_white";
            }
        },
        go(){
            this.stop=setInterval( () => {           
               progress+=0.0018682;
               if(progress>=624) progress=0;
               $(".current-progress").css("width",progress);
            },1)
        },
        stopTime(){
            clearInterval(this.stop);
        },
    },
})
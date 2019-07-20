var Today= new Date();
var week= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function forTime(e){
  if(e.length==7){
    return e.slice(2,7);
  }
  else return e.slice(3,7);
}
function move(s,e){
  if(s==5)
    var deg=e*0.5;
  else var deg=e*0.1;
  return "rotate("+deg+"deg)";
}
var count=1500;
var state=25;
var start=1;
var demoHide=0;

var app = new Vue({ 
  el: '#app',
  data: {
    stop:0,
    timeText:'',
    second:0,
    time: forTime(numeral(count).format('00:00:00')),
    ani:{
      transform: move(25,1500),
    },
    btnText:"Start",
    textColor: {
      color: '#003CA1',
    },
    bgColor:'#F7F5F1',
  },
  methods: {
    go(){
      if(start==1){
        this.stop=setInterval( () => {    
          this.btnText="Pause";
          this.textColor.color='#F7F5F1';
          this.bgColor='#003CA1';
          this.second++;
          if(state==5){ 
            if(this.second==300)
              this.next();
            else{
              this.ani.transform= move(5,this.second);
              this.time=forTime(numeral(count-this.second).format('00:00:00'));
            }
          } 
          else{
            if(this.second==1500)  this.next();
            else{
              this.ani.transform= move(25,this.second);
              this.time=forTime(numeral(count-this.second).format('00:00:00'));
            }
          }
        },1000)
        start=0;
      }
      else{
        this.stopTime();
        start=1;
      }
    },
    stopTime(){
      clearInterval(this.stop);
      this.btnText="Start";
      this.textColor.color='#003CA1';
      this.bgColor='#F7F5F1';
    },
    next(){
      start=1;
      this.stopTime();
      this.second=0;
      if(state==25){
        state=5;
        count=300;
        this.ani.transform= move(5,0);
      }
      else{
        state=25;
        count=1500;
        this.ani.transform= move(25,1500);
      }
      this.time=forTime(numeral(count-this.second).format('00:00:00'));
    },
    reset(){
      start=1;
      this.stopTime();
      this.second=0;
      if(state==5){
        this.ani.transform= move(5,0);
      }
      else this.ani.transform= move(25,1500);
      this.time=forTime(numeral(count-this.second).format('00:00:00'));
    },
    demo(){
      if(demoHide==0){
        $(".title-icon").html(`<ion-icon name="arrow-dropright-circle"></ion-icon>`);
        $(".list-demo").hide();
      }   
      else{
        $(".title-icon").html(`<ion-icon name="arrow-dropdown-circle"></ion-icon> `);
        $(".list-demo").show();
      }
      demoHide=1-demoHide;
    },
    show(e){
      switch(e){
        case 1:
          $("#list").css( {'background-color':'#F7F5F1',
            'box-shadow':'0px 4px 10px rgba(20, 20, 40, 0.5)','color':'#003ca1'});
          $("#line").css( {'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $("#music").css({'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $(".task-block").show();
          $(".list-block").hide(); 
          $(".graph-block").hide(); 
          $(".music-block").hide(); 
          $(".right-side").css({'right':'350px','box-shadow':'4px 4px 10px rgba(20, 20, 40, 0.6)'});
          break;
        case 2:  
          $("#line").css( {'background-color':'#F7F5F1',
            'box-shadow':'0px 4px 10px rgba(20, 20, 40, 0.5)','color':'#003ca1'});
          $("#list").css( {'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $("#music").css({'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $(".graph-block").show();
          $(".list-block").hide(); 
          $(".task-block").hide(); 
          $(".music-block").hide(); 
          $(".right-side").css({'right':'350px','box-shadow':'4px 4px 10px rgba(20, 20, 40, 0.6)'});
          break;
        case 3:
          $(".right-side").css('box-shadow','4px 4px 10px rgba(20, 20, 40, 0.8)');
          $("#music").css({'background-color':'#F7F5F1',
            'box-shadow':'0px 4px 10px rgba(20, 20, 40, 0.5)','color':'#003ca1'});
          $("#list").css( {'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $("#line").css( {'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $(".music-block").show();
          $(".list-block").hide();  
          $(".task-block").hide();
          $(".graph-block").hide();
          $(".right-side").css({'right':'350px','box-shadow':'4px 4px 10px rgba(20, 20, 40, 0.6)'});
          break;
        default:
          $("#list").css( {'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $("#line").css( {'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $("#music").css({'background-color':'#003ca1','box-shadow':'','color':'#F7F5F1'});
          $(".list-block").show();
          $(".task-block").hide();
          $(".graph-block").hide();
          $(".music-block").hide(); 
          $(".right-side").css({'right':'0px','box-shadow':''});
      } 
    },
    check(e){
      if(e<=6){  
        for(var i=1; i<=6; i++){
          if(i!=e){
            $("#check"+i).hide();
          }
          else $("#check"+i).show();
        }
      }
      else{ 
        for(var i=7; i<=12; i++){
          if(i!=e){
            $("#check"+i).hide();
          }
          else $("#check"+i).show();
        }  
      }
    },
  },
  mounted: function() {
    this.show(0);
    this.check(1);
    this.check(7);
    setInterval(()=>{
      var Today= new Date();
      this.timeText=Today.getFullYear()+'/'+(Today.getMonth()+1)+
        '/'+Today.getDate()+'\xa0\xa0\xa0\xa0\xa0\xa0'+
        week[Today.getDay()]+'\xa0'+
        numeral(Today.getHours()).format('00')+':'+
        numeral(Today.getMinutes()).format('00');
    }, 1000);
  },
  computed: {
        
  },
});
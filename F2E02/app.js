var cardID="";
var cardColor="";
var cardNum=0;
var dropID="";
var dropNum=0;
var end1=1, end2=14, end3=27, end4=40; 
var end=0;
function AllowDrop(event){
    event.preventDefault();
}
function Drag(event){
    event.stopPropagation();
    var url=$("#"+event.currentTarget.id).css("background-image")
    console.log("Can I drag? "+$("#"+event.currentTarget.id).attr("draggable"))
    cardID = url.substr(url.length-8,2); 
    if(cardID*1<14){
        if(cardID*1<end1)   end1=cardID*1;
        cardColor="B";
        cardNum=cardID*1;
    }
    else if(cardID*1<27){
        if(cardID*1<end2)   end2=cardID*1;
        cardColor="R";
        cardNum=cardID*1-13;
    }
    else if(cardID*1<40){
        if(cardID*1<end3)   end3=cardID*1;
        cardColor="R";
        cardNum=cardID*1-26;
    }
    else{
        if(cardID*1<end4)   end4=cardID*1;
        cardColor="B";
        cardNum=cardID*1-39;
    }
    console.log("Drag:"+cardID+"\nColor:"+cardColor+"\nNumber:"+cardNum) 
    event.dataTransfer.setData("card",event.currentTarget.id);   
}
function DropTemp(event){
    event.preventDefault();
    if($("#"+event.currentTarget.id).children().length==0){
        var data=event.dataTransfer.getData("card");
        console.log("Can I drop? "+$("#"+data).attr("draggable"))
        if($("#"+data).attr("draggable")=="true"){
           if($("#"+data).children().length==0){
            $("#"+data).css('top','0');
            document.getElementById(data).setAttribute("ondrop", "");
                event.currentTarget.appendChild(document.getElementById(data)); 
            }  
        }
        check(); 
    }  
}
function DropEnd(event,place){
    event.preventDefault();
    if($("#"+event.dataTransfer.getData("card")).attr("draggable")=="true"){
        switch(place){ 
            case 1:
                if(cardID*1==end1){
                    var data=event.dataTransfer.getData("card");
                    document.getElementById(data).setAttribute("ondrop", "");
                    $("#"+data).css('top',(end1-1)*(-163)+'px');
                    event.currentTarget.appendChild(document.getElementById(data));
                    end1++;  
                } 
                break;
            case 2:
                if(cardID*1==end2){
                    var data=event.dataTransfer.getData("card");
                    document.getElementById(data).setAttribute("ondrop", "");
                    $("#"+data).css('top',(end2-14)*(-163)+'px');
                    event.currentTarget.appendChild(document.getElementById(data));
                    end2++;  
                } 
                break;
            case 3:
                if(cardID*1==end3){
                    var data=event.dataTransfer.getData("card");
                    document.getElementById(data).setAttribute("ondrop", "");
                    $("#"+data).css('top',(end3-27)*(-163)+'px');
                    event.currentTarget.appendChild(document.getElementById(data));
                    end3++;  
                } 
                break;
            case 4:
                if(cardID*1==end4){
                    var data=event.dataTransfer.getData("card");
                    document.getElementById(data).setAttribute("ondrop", "");
                    $("#"+data).css('top',(end4-40)*(-163)+'px');
                    event.currentTarget.appendChild(document.getElementById(data));
                    end4++;  
                } 
                break;
        }
        check();  
    }  
}
function Drop(event){
    event.preventDefault();
    var drop=0;
    if($("#"+event.currentTarget.id).children().length==0){
        var data=event.dataTransfer.getData("card");
        var url=$("#"+event.currentTarget.id).css("background-image")
        dropID = url.substr(url.length-8,2);
        if(dropID*1<14){
           dropNum=dropID*1;
           if(cardColor=="R" && cardNum==dropNum-1){
               drop=1;
           }
        }
        else if(dropID*1<27){
           dropNum=dropID*1-13;
           if(cardColor=="B" && cardNum==dropNum-1){
               drop=1;
           }
        }
        else if(dropID*1<40){
           dropNum=dropID*1-26;
           if(cardColor=="B" && cardNum==dropNum-1){
               drop=1;
           }
        }
        else{
            dropNum=dropID*1-39;
            if(cardColor=="R" && cardNum==dropNum-1){
                drop=1;
            } 
        }
        console.log("Drop on: "+dropID+"\nBase number:"+dropNum)
        if(drop==1){
          $("#"+data).css('top','43px');
          document.getElementById(data).setAttribute("ondrop", "Drop(event)");
          event.currentTarget.appendChild(document.getElementById(data));  
        }       
    } 
    check();
}
function Drop8(event){
    event.preventDefault();
    if($("#"+event.dataTransfer.getData("card")).attr("draggable")=="true"){
       var data=event.dataTransfer.getData("card");
       $("#"+data).css('top','0');
       document.getElementById(data).setAttribute("ondrop", "Drop(event)");
       event.currentTarget.appendChild(document.getElementById(data)); 
       check(); 
    }  
}
function check(){
    event.preventDefault();
    $( "#card1 .real-card" ).last().attr("draggable","true");
    $( "#card2 .real-card" ).last().attr("draggable","true");
    $( "#card3 .real-card" ).last().attr("draggable","true");
    $( "#card4 .real-card" ).last().attr("draggable","true");
    $( "#card5 .real-card" ).last().attr("draggable","true");
    $( "#card6 .real-card" ).last().attr("draggable","true");
    $( "#card7 .real-card" ).last().attr("draggable","true");
    $( "#card8 .real-card" ).last().attr("draggable","true");
    if(document.getElementById("card1").firstChild.nodeType==3&&document.getElementById("card1").lastChild.nodeType==3){
        document.getElementById("card1").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card1").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card1").setAttribute("ondrop", "");
        document.getElementById("card1").setAttribute("ondragover","");
    }
    if(document.getElementById("card2").firstChild.nodeType==3&&document.getElementById("card2").lastChild.nodeType==3){
        document.getElementById("card2").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card2").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card2").setAttribute("ondrop", "");
        document.getElementById("card2").setAttribute("ondragover","");
    }
    if(document.getElementById("card3").firstChild.nodeType==3&&document.getElementById("card3").lastChild.nodeType==3){
        document.getElementById("card3").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card3").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card3").setAttribute("ondrop", "");
        document.getElementById("card3").setAttribute("ondragover","");
    }
    if(document.getElementById("card4").firstChild.nodeType==3&&document.getElementById("card4").lastChild.nodeType==3){
        document.getElementById("card4").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card4").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card4").setAttribute("ondrop", "");
        document.getElementById("card4").setAttribute("ondragover","");
    }
    if(document.getElementById("card5").firstChild.nodeType==3&&document.getElementById("card5").lastChild.nodeType==3){
        document.getElementById("card5").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card5").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card5").setAttribute("ondrop", "");
        document.getElementById("card5").setAttribute("ondragover","");
    }
    if(document.getElementById("card6").firstChild.nodeType==3&&document.getElementById("card6").lastChild.nodeType==3){
        document.getElementById("card6").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card6").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card6").setAttribute("ondrop", "");
        document.getElementById("card6").setAttribute("ondragover","");
    }
    if(document.getElementById("card7").firstChild.nodeType==3&&document.getElementById("card7").lastChild.nodeType==3){
        document.getElementById("card7").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card7").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card7").setAttribute("ondrop", "");
        document.getElementById("card7").setAttribute("ondragover","");
    }
    if(document.getElementById("card8").firstChild.nodeType==3&&document.getElementById("card8").lastChild.nodeType==3){
        document.getElementById("card8").setAttribute("ondrop", "Drop8(event)");
        document.getElementById("card8").setAttribute("ondragover","AllowDrop(event)");
    }
    else{
        document.getElementById("card8").setAttribute("ondrop", "");
        document.getElementById("card8").setAttribute("ondragover","");
    }
    if(document.getElementById("card1").firstChild.nodeType==3&&document.getElementById("card1").lastChild.nodeType==3
        &&document.getElementById("card2").firstChild.nodeType==3&&document.getElementById("card2").lastChild.nodeType==3
        &&document.getElementById("card3").firstChild.nodeType==3&&document.getElementById("card3").lastChild.nodeType==3
        &&document.getElementById("card4").firstChild.nodeType==3&&document.getElementById("card4").lastChild.nodeType==3
        &&document.getElementById("card5").firstChild.nodeType==3&&document.getElementById("card5").lastChild.nodeType==3
        &&document.getElementById("card6").firstChild.nodeType==3&&document.getElementById("card6").lastChild.nodeType==3
        &&document.getElementById("card7").firstChild.nodeType==3&&document.getElementById("card7").lastChild.nodeType==3
        &&document.getElementById("card8").firstChild.nodeType==3&&document.getElementById("card8").lastChild.nodeType==3){
            end=1;
            $(".congr-window").show();
            $(".congr-card").show();
            $(".restart-card").hide();  
    }
}

var app=new Vue({
    el: '#app',
    data: {
        timer:"",
        second:0,
        minute:0,
        stop:'',
    },
    methods: {
        go(){
            this.stop=setInterval( () => {  
                if(this.minute>=100)
                    this.timer=numeral(this.minute).format('000')+":"+numeral(this.second).format('00');
                else
                    this.timer=numeral(this.minute).format('00')+":"+numeral(this.second).format('00');  
                this.second++;
                if(this.second==60){
                    this.minute++;
                    this.second=0;
                }
                if(end==1){
                    this.stopTime();
                }
            },1000)
        },
        stopTime(){
            clearInterval(this.stop);
        },
        returnStep(){
            console.log("return")
            //history.back();
            //location.reload();
        },
        alertPage(){
            this.stopTime();
            $(".alert-window").show();
        },
        resetPage(){
            console.log("Reset the Page")
            location.reload();
        },
        stayPage(e){
            if(e==1)
                this.go();
            $(".alert-window").hide();
            $(".congr-window").hide();
        },
        restartPage(){
            $(".restart-card").show();
            $(".congr-card").hide();
        },
    },
    mounted: function(){
        this.go();
        $(".alert-window").hide();
        $(".congr-window").hide();
    }
});
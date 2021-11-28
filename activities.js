var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {};

    return {
        init : function(Args) {
            _args = Args;
        },

        interactiveText : async function() { //(question, answer (in the form of position in sentence, ranges from 0 to n-1), # of options, potential answer, potential question combo repeated # of options times)
            document.write('<p class="lesson">'+_args[0]+"<br></p>");
            var div=document.getElementById("practice");
            var num = _args[2]*2;
            var n = _args[1];
            const question=_args[0];
            for(let i=3;i<num+3;i+=2){
                if(_args[i+1]!=""){
                    const myButton=document.createElement("button");
                    myButton.style.backgroundColor="lightblue";
                    myButton.innerHTML= _args[i];
                    myButton.id="myButton"+(i-3).toString()+question;
                    if(i==3){
                        myButton.style.marginLeft="15px";
                    }
                    myButton.addEventListener('click',function(){
                        if((i-3)/2==n){
                            document.getElementById("myButton"+(i-3).toString()+question).style.backgroundColor="green";
                            document.getElementById(question).innerHTML="Correct!"
                            return false;
                        }
                        else{
                            if(document.getElementById("myButton"+(n*2).toString()+question).style.backgroundColor!="green"){
                                document.getElementById("myButton"+(i-3).toString()+question).style.backgroundColor="red";
                                document.getElementById(question).innerHTML="Incorrect!"
                            }
                        }
                    });
                    div.appendChild(myButton);
                }
                else{
                    document.write(" " + _args[i]);
                }
            }
            document.write("<br>");
        },

        answers : async function(){ //(answer text)
            const div=document.getElementById("answers");
            const myButton=document.getElementById("answer-button");
            myButton.addEventListener('click',function(){
                if(document.getElementById("answer-text").innerHTML==_args[0]){
                    document.getElementById("answer-text").innerHTML="";
                }
                else{
                    document.getElementById("answer-text").innerHTML=_args[0];
                }
            });
        }
    };
}());
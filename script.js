var bill=document.querySelector(".bill input");
var people=document.querySelector(".people input");
var tips=document.querySelectorAll(".row h4");
var generate=document.querySelector("#Generate")
var tipamt=document.querySelector(".tipAmount h1");
var totalamt=document.querySelector(".totalAmount h1")
var reset=document.querySelector("#Reset")
console.log(tips)


var arr=[5,10,15,20,30,0];

tips.forEach(function(elm,id){
    elm.addEventListener("click",function(){
       var tipselect=arr[id];
       elm.style.backgroundColor="green"
      
       generate.addEventListener("click",function(){

        var peo=people.value;
        var bil=bill.value;
        console.log(bil)
        console.log(tipselect);
        console.log(peo)

        var caltip=((bil*tipselect)/100)/peo;
        var totalamount=(bil/peo)+caltip; 
        tipamt.innerHTML=caltip+" per person";
        totalamt.innerHTML=totalamount+" per person"
})
  })
    
})



function Generate(){

    tips.forEach(function(elm,id){
        
        elm.addEventListener("click",function(){
          
            var tipselect=arr[id];
           generate.addEventListener("click",function(){
    
            var peo=people.value;
            var bil=bill.value;
            console.log(bil)
            console.log(tipselect);
            console.log(peo)
    
            var caltip=((bil*tipselect)/100)/peo;
            var totalamount=(bil/peo)+caltip; 
            tipamt.innerHTML=caltip+" per person";
            totalamt.innerHTML=totalamount+" per person"
    })
      })
        
    })
    
}

reset.addEventListener("click",function(){
    
    bill.value="";
    people.value="";
    tipamt.innerHTML="";
    totalamt.innerHTML="";
    tips.forEach(function(elm){
        elm.style.backgroundColor="#004b4e"
    })

    Generate();
    




})

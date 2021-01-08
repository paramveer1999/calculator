
// var click1=document.querySelector(".cell1");
// console.log(click1);
// // click1.addEvenListener("click",function(e){
// // });
// click1.addEventListener('click',showvalue);

// function showvalue(){
//     console.log("param");
//     var val=click1.querySelector("h3").textContent;
//     document.querySelector("#textarea").innerHTML=val;
//     // document.querySelector("#text-area").innerText="p";
// }

function dis(val1){
    // console.log("p");
    document.getElementById("text-area").value+=val1;
    
}
function solve(){
   
    
    try{
        let val=document.getElementById("text-area").value;
         val=eval(val);
         document.getElementById("text-area").value=val;

    }
    catch(err){
        console.log("paramveer");
        alert("Please Enter Proper Input");
        document.getElementById("text-area").value="";

    }
    
}
function erase(){
    document.getElementById("text-area").value="";
}
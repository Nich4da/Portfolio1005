window.onload = start
let post=1

function start(){
    let welcome = document.getElementById("top");
    welcome.innerHTML = "Welcome to the Forum";
    console.log(welcome);
}

function postFunction(){

    let input = document.getElementById("message").value
    console.log(input);

    if(post == 1){
        let topic = document.getElementById("topic").innerHTML=input
        console.log(topic);
    }else if(post == 2){
        let reply1 = document.getElementById("reply1").innerHTML=input
        console.log(reply1);
    }else if(post == 3){
        let reply2 = document.getElementById("reply2").innerHTML=input
        console.log(reply2);
    }

    post++
    document.getElementById("message").value ="";
    console.log(post);

}

function clearFunction(){
    document.getElementById("topic").innerHTML=input ="";
    document.getElementById("reply1").innerHTML=input ="";
    document.getElementById("reply2").innerHTML=input ="";
    post=1;
}




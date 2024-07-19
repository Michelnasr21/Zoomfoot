function onEmailBlur (e){
    activeElement =null;
    setTimeout(function()
    {
        if(activeElement=="email")
        {

        }
        else{
            if(e.target.value ==""){
                e.target.parentElement.classList.remove("focusWithText");
            }
            resetFace();
        }
    },100);
}
function onEmailLabelClick(e){
    activeElement="email";
}
function onPasswordFocus(e){
    activeElement="password";
    if(!eyesCovered){
        coverEyes();
    }
}
function stopBlinking(){
    stopBlinking.kill();
    blinking = null;
    TweenMax.set({eyeL,eyeR},{scaleY:eyeScale});
}
function getRandomInt(max){
    return Math.floor(math.random() * Math.floor(max));
}
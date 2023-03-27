var inputTimes = 0;
var inputNum = "";
var output = "";
var answer = "1007";
var missCount = 5;
var pushed = false;
function Input(n){
  if(inputTimes >= 6){
    return;
  }
  inputTimes++;
  inputNum = inputNum + n;
  output = output + "*";
  var text = document.getElementById("outputText")
  text.textContent = output;
}
function checkAns(){
  if (pushed) {
    return;
  }
  pushed = true;

  if (inputNum === answer) {
    document.getElementById("bottomlock").classList.remove("zeroOpacity");
    document.getElementById("lock").classList.remove("zeroOpacity");
    document.getElementById("bottomlock").classList.add("bottomfadeUp");
    document.getElementById("lock").classList.add("fadeUp");
    window.setTimeout(Open, 1500);
    window.setTimeout(Back, 4500);
  }
  else {
    MissCounter();
  }
}
function Reset(){
  inputTimes = 0;
  inputNum = "";
  output = "";
  var text = document.getElementById("outputText")
  text.textContent = "-";
  pushed = false;
}
function MissCounter(){
  missCount--;
  if(missCount > 0){
    var text = document.getElementById("MsgText")
    text.innerHTML = "あと" + missCount + "回まで<br>" + missCount + " times left"
    document.getElementById("bottomlock").classList.remove("zeroOpacity");
    document.getElementById("lock").classList.remove("zeroOpacity");
    document.getElementById("MsgText").classList.remove("zeroOpacity");
    document.getElementById("bottomlock").classList.add("bottomfadeUp");
    document.getElementById("lock").classList.add("fadeUp");
    document.getElementById("MsgText").classList.add("fadeUp")
    window.setTimeout(missInput, 800);
    window.setTimeout(Back, 2000);
  }
  else {
    alert("以降、扉が開かなくなります。door will not open from now on.")
  }
}
function Open(){
  nonDisplayLock();
  document.getElementById("lock").classList.add("openLock");
}
function missInput(){
  nonDisplayLock();
  document.getElementById("bottomlock").classList.add("Akanai");
  document.getElementById("lock").classList.add("Akanai");
}
function nonDisplayLock(){
  document.getElementById("bottomlock").classList.remove("bottomfadeUp");
  document.getElementById("lock").classList.remove("fadeUp");
}
function Back(){
  document.getElementById("lock").classList.remove("openLock");
  document.getElementById("bottomlock").classList.remove("Akanai");
  document.getElementById("lock").classList.remove("Akanai");
  document.getElementById("MsgText").classList.remove("fadeUp");
  document.getElementById("bottomlock").classList.add("zeroOpacity");
  document.getElementById("lock").classList.add("zeroOpacity");
  document.getElementById("MsgText").classList.add("zeroOpacity");
  Reset();
}

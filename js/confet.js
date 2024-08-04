var jq = document.createElement('script');
jq.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 135,
    angle: 60,
    spread: 200,
    origin: {
      x: 0 }
  }
          );
  // and launch a few from the right edge
  confetti({
    particleCount: 135,
    angle: 120,
    spread: 55,
    origin: {
      x: 1 }
  }
          );
}
var f =  document.getElementsByClassName('dinSubmit')[0]
var m = document.getElementsByClassName('DinamizeDivMessageSuccess')[0]
f.onclick = function(){
    setTimeout(function(){
        if(m.getAttribute('style') == 'display: block;')
            frame();
    }, 800); 
} 
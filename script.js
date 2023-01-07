const choose = Array.from(document.getElementsByClassName('scoreboard_score'));
choose.forEach((e)=>{
    e.addEventListener('touchstart', event=> {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);
    e.addEventListener('touchend', event=> {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      touchSwipped();
    }, false);  
    e.addEventListener('mousedown', event => {
      event.preventDefault();
      mousedownX = event.clientX;
      mousedownY = event.clientY;
    }, false);
    e.addEventListener('mouseup', event => {
      event.preventDefault();
      mouseupX = event.clientX;
      mouseupY = event.clientY;
      mouseSwipped();
    }, false);
    
function mouseSwipped() {
        let choose = parseInt(e.textContent);
        if (Math.abs(mouseupX - mousedownX) > 0 || Math.abs(mouseupY - mousedownY) > 0) {
            if(mouseupY < mousedownY && choose < 25) {
                let content = choose + 1;
                if (content < 10) {
                  e.innerHTML = `0${content}`;
                } else {
                  e.innerHTML = content;
                }
              }
              if(mouseupY > mousedownY && choose > 0) {
                let content = choose - 1;
                if (content < 10) {
                  e.innerHTML = `0${content}`;
                } else {
                  e.innerHTML = content;
                }
              } 
          }
    }
function touchSwipped() {
        let choose = parseInt(e.textContent);
        if(touchendY < touchstartY && choose<25) {
            let content = choose+1;
            if(content<10){
                e.innerHTML = `0${content}`;
            }
            else{
                e.innerHTML = content;
            }
        }       
        if(touchendY > touchstartY && choose>0) {  
            let content = choose-1;
            if(content<10){
                e.innerHTML = `0${content}`;
            }
            else{
            e.innerHTML = content;
            }
        }
    }
})

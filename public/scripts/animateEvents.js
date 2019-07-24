//variables
var timelineEvents = document.getElementsByClassName("timeline__event");
var activePoster = document.getElementsByClassName("active-poster");
var posters = document.getElementsByClassName("poster-img");
var activePosterIndex;

//video overlay
var overlay = document.getElementById("event-overlay");
var videoCtn = document.getElementById("video-ctn");
var videos = document.getElementsByClassName("event-video");
var closeBtn = document.getElementsByClassName("close")[0];

const _P = document.getElementsByClassName("poster-img");

const _C = document.querySelector('#event-bg'), 
  N = _C.children.length, NF = 30, 
  TFN = {
    'bounce-out': function(k, a = 2.75, b = 1.5) {
      return 1 - Math.pow(1 - k, a)*Math.abs(Math.cos(Math.pow(k, b)*(n + .5)*Math.PI))
      }
  };

let i = 0, y0 = null, locked = false, w, ini, fin, rID = null, anf, n;

if (window.PointerEvent) {
  var pEvent = true;
} else {
  var pEvent = false;
}

var down_start = {};

function closeVideo(e) {

  e.preventDefault();

/*
  //if pointer/mouse/touch does not move
  if(e.clientX == down_start.x && e.clientY == down_start.y) {
*/
    //hide overlay and video-ctn
    overlay.classList.remove("show");
    videoCtn.classList.remove("show");

    for(var i = 0; i < videos.length ; i++) {

      if(videos[i].classList.contains("show")) {
        videos[i].children[0].pause();
      }

      videos[i].classList.remove("show");

    //}
/*
    closeBtn.removeEventListener('click', closeVideo, false);
    closeBtn.removeEventListener('touchend', closeVideo, false);
    closeBtn.removeEventListener('touchstart', detectMove, false);
*/

  }
  
}

function detectMove(e) {
  e.preventDefault();
  down_start = {
    x: e.clientX, 
    y: e.clientY
  };

  closeBtn.addEventListener('touchend', closeVideo, false);

}

function animateVideo(index) {

  //display overlay and then video-ctn
  overlay.classList.add("show");
  videoCtn.classList.add("show");
  document.getElementById(_C.children[index].dataset.video).classList.add("show");

  closeBtn.addEventListener('click', closeVideo, false);
  closeBtn.addEventListener('touchstart', detectMove, false);
}

function animateEvents(e) {

  //reset timeline event selection
  for(var i = 0; i < timelineEvents.length ; i++) {
    timelineEvents[i].classList.remove("timelineEvent-is-selected");
  };

  //add class selected timelineEvent and event-poster
  e.path[2].classList.add("timelineEvent-is-selected");   //event content gets the class

  for(var i = 0; i < posters.length; i++) {
    //find initial active poster before click
    if(posters[i].classList.contains("active-poster")) {
      var iniIndex = i;
    }
    posters[i].classList.remove("active-poster");
  }

  activePoster = document.getElementById(e.path[1].dataset.eventbg);
  activePoster.classList.add("active-poster");

  //final active poster to be displayed
  var finIndex = activePoster.dataset.index;

  //animate using bounce ani func
  ini = iniIndex;
  fin = finIndex;
  anf = Math.round(.21*NF);
  n = 2 + Math.round(.21)
  ani(function() {
    // callback does nothing
    return true;
  });

}

function stopAni() {
  cancelAnimationFrame(rID);
  rID = null
};

function completeAnimation() {

  activePosterIndex = _C.style.getPropertyValue('--i');

  //reset timeline event selection
  for(var j = 0; j < timelineEvents.length ; j++) {
    timelineEvents[j].classList.remove("timelineEvent-is-selected");
  };

  //add class selected timelineEvent and event-poster
  timelineEvents[activePosterIndex].classList.add("timelineEvent-is-selected");   //event content gets the class

  for(var j = 0; j < posters.length; j++) {
    posters[j].classList.remove("active-poster");
  }

  posters[activePosterIndex].classList.add("active-poster");

}

function ani(callback, cf = 0) {

  _C.style.setProperty('--i', ini + (fin - ini)*TFN['bounce-out'](cf/anf));

  if(cf === anf) {
    stopAni();
    callback();
    return true;
  }

  rID = requestAnimationFrame(ani.bind(this, callback, ++cf))

};

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
};

function lock(e) {
  e.preventDefault();
  y0 = unify(e).clientY;
	locked = true

  if(pEvent === true) {

    _C.addEventListener('pointermove', drag, false);
    window.addEventListener('pointerup', move, false);
  
  } else if(pEvent === false) {
  
    _C.addEventListener('mousemove', drag, false);
    _C.addEventListener('mouseup', move, false);

    _C.addEventListener('touchmove', drag, false);
    _C.addEventListener('touchend', move, false);
    
  }

};

function drag(e) {
  e.preventDefault();
	
  if(locked) {
    let dy = unify(e).clientY - y0, f = +(dy/w).toFixed(2);
    _C.style.setProperty('--i', i - f)
  }

};

function move(e) {
  e.preventDefault();
  if(locked) {
    let dy = unify(e).clientY - y0, 
      s = Math.sign(dy), 
      f = +(s*dy/w).toFixed(2);

    if(f > 0) {
      ini = i - s*f;

      if((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
        i -= s;
        f = 1 - f

        fin = i;
        anf = Math.round(f*NF);
        n = 2 + Math.round(f)

        //poster to be changed
        ani(completeAnimation);
      } else {
      
        fin = i;
        anf = Math.round(f*NF);
        n = 2 + Math.round(f)

        //drag same poster
        ani(function() {
          //do nothing additional
          return true;
        });

      }

      locked = false;

    } else if(f == 0) {
      animateVideo(i);
    }

    //remove move and end event listeners
    if(pEvent === true) {

      _C.removeEventListener('pointermove', drag, false);
      window.removeEventListener('pointerup', move, false);
    
    } else if(pEvent === false) {
    
      _C.removeEventListener('mousemove', drag, false);
      _C.removeEventListener('touchmove', drag, false);

      window.removeEventListener('mouseup', move, false);
      window.removeEventListener('touchend', move, false);
      
    }
		
  }
};

function size() {
  w = window.innerHeight
};

function animate() {

  //add event listeners on timeline events 
  for(var i = 0; i < timelineEvents.length ; i++) {
    timelineEvents[i].addEventListener('click', function(e) {
      animateEvents(e);
    }, false);
  }

  size();
  _C.style.setProperty('--n', N);

  addEventListener('resize', size, false);

  if(pEvent === true) {
    _C.addEventListener('pointerdown', lock, false);
  } else if(pEvent === false) {
    _C.addEventListener('mousedown', lock, false);
    _C.addEventListener('touchstart', lock, false);
  }

}

window.onload = animate();

var storagePrefix = 'sl-book-storage'

var isPlaying = window.localStorage.getItem(storagePrefix + '/playing') === '1'
var isMaximized = window.localStorage.getItem(storagePrefix + '/maximized') === '1'

var myicon_color=false;
var mytrigger2count=0;
function init()
{
	myicon_color=false;
	mytrigger2count=0;
	document.getElementsByClassName('sl-trigger-b')[0].style.display="none";
}
function enableControls (trigger, container) {
  var maximize = document.createElement('div')
  maximize.className = 'sl-maximize'
  maximize.style = 'position: absolute; margin: -48px 0 0 -48px;'
  maximize.innerHTML = '<img src="images/up-right-and-down-left-from-center-solid.svg" width="32" height="32" />'
  maximize.addEventListener('click', function (e) {
    e.stopPropagation()
    if (isMaximized) {
      container.classList.remove('is-maximized')
      isMaximized = false
      window.localStorage.removeItem(storagePrefix + '/maximized')
    } else {
      container.classList.add('is-maximized')
      isMaximized = true
      window.localStorage.setItem(storagePrefix + '/maximized', '1')
    }
  })
  trigger.appendChild(maximize)

  var play = document.createElement('div')
  play.className = 'sl-play'
  play.style = 'position: absolute; margin: -48px 0 0 -96px;'
  play.innerHTML = '<img src="images/play-pause-solid.svg" width="32" height="32" />'
  play.addEventListener('click', function (e) {
    e.stopPropagation()
    var videoEls = container.querySelectorAll('.sl-video')
    for (var i = 0; i < videoEls.length; i++) {
      if (videoEls[i].style.display == 'block') {
        var player = videojs(videoEls[i].querySelector('video'))
        if (player.paused()) {
          player.play()
        } else {
          player.pause()
        }
        break
      }
    }
  })
  trigger.appendChild(play)
}

function disableControls (trigger) {
  trigger.querySelector('.sl-maximize').remove()
  trigger.querySelector('.sl-play').remove()
}

window.addEventListener('DOMContentLoaded', function () {
  //var trigger = document.querySelector('.sl-trigger')
  //var container = document.querySelector('.sl-video-container')

	var trigger = document.querySelector('.sl-trigger')
	var container = document.querySelector('.sl-video-container')
	var trigger2 = document.querySelector('.sl-trigger-b')
  
  
  //container.style.pointerEvents = 'none';
  
  //video2	
  container.style.display = 'block'
    var videoEl = container.querySelectorAll('.sl-video')[0]
    videojs(videoEl.querySelector('video')).play()
    videoEl.style.display = 'block'
    enableControls(trigger2, container)
    isPlaying = true
    window.localStorage.setItem(storagePrefix + '/playing', '1')

    disableControls(trigger2)
    container.style.display = 'none'
    Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
		videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
    })

    isPlaying = false
    window.localStorage.removeItem(storagePrefix + '/playing')
	
	

  if (isMaximized) {
    container.classList.add('is-maximized')
  }

  if (isPlaying) {
    container.style.display = 'block'
    var videoEl = container.querySelectorAll('.sl-video')[0]
    setTimeout(function () {
      videojs(videoEl.querySelector('video')).play()
    }, 200)
    videoEl.style.display = 'block'
    enableControls(trigger, container)
  }
  
  /*if (myicon_color==false)
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="block";
			myicon_color=true;

	  }
	  else
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="none";
			myicon_color=false;
	  }*/

  trigger.addEventListener('click', function () {
	  
    if (!isPlaying) {
		if (myicon_color==false)
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="block";
			myicon_color=true;

	  }
	  else
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="none";
			myicon_color=false;
	  }
      container.style.display = 'block'
      var videoEl = container.querySelectorAll('.sl-video')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger, container)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
    } else {
		if (myicon_color==false)
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="block";
			myicon_color=true;

	  }
	  else
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="none";
			myicon_color=false;
	  }
      disableControls(trigger)
      container.style.display = 'none'
      Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
    }
  })
  
  trigger2.addEventListener('click', function () {
	  mytrigger2count++;
	  console.log("trigger2");
	if (!isPlaying) {
		if (myicon_color==false)
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="block";
			myicon_color=true;

	  }
	  else
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="none";
			myicon_color=false;
	  }
      container.style.display = 'block'
      var videoEl = container.querySelectorAll('.sl-video')[0]
      videojs(videoEl.querySelector('video')).play()
      videoEl.style.display = 'block'
      enableControls(trigger2, container)

      isPlaying = true
      window.localStorage.setItem(storagePrefix + '/playing', '1')
	   window.localStorage.setItem("currentvideo", '.sl-video');
    } else {
		if (myicon_color==false)
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="block";
			myicon_color=true;

	  }
	  else
	  {
		  	document.getElementsByClassName('sl-trigger-b')[0].style.display="none";
			myicon_color=false;
	  }
      //disableControls(trigger2)
	  console.log(mytrigger2count);
	  if (mytrigger2count==2)
	  {
		document.getElementsByClassName('sl-maximize')[1].style.display="none";
		document.getElementsByClassName('sl-play')[1].style.display="none";
	  }
	  if (mytrigger2count==3)
	  {
		document.getElementsByClassName('sl-maximize')[2].style.display="none";
		document.getElementsByClassName('sl-play')[2].style.display="none";
	  }
	  if (mytrigger2count==4)
	  {
		document.getElementsByClassName('sl-maximize')[3].style.display="none";
		document.getElementsByClassName('sl-play')[3].style.display="none";
	  }
	  if (mytrigger2count==5)
	  {
		document.getElementsByClassName('sl-maximize')[4].style.display="none";
		document.getElementsByClassName('sl-play')[4].style.display="none";
	  }
	  if (mytrigger2count==6)
	  {
		document.getElementsByClassName('sl-maximize')[5].style.display="none";
		document.getElementsByClassName('sl-play')[5].style.display="none";
	  }
	  if (mytrigger2count==7)
	  {
		document.getElementsByClassName('sl-maximize')[6].style.display="none";
		document.getElementsByClassName('sl-play')[6].style.display="none";
	  }
	  if (mytrigger2count==8)
	  {
		document.getElementsByClassName('sl-maximize')[7].style.display="none";
		document.getElementsByClassName('sl-play')[7].style.display="none";
	  }
	  if (mytrigger2count==9)
	  {
		document.getElementsByClassName('sl-maximize')[8].style.display="none";
		document.getElementsByClassName('sl-play')[8].style.display="none";
	  }
	  if (mytrigger2count==10)
	  {
		document.getElementsByClassName('sl-maximize')[9].style.display="none";
		document.getElementsByClassName('sl-play')[9].style.display="none";
	  }
	  container.style.display = 'none'
      Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).pause()
        videojs(videoEl.querySelector('video')).currentTime(0)
      })

      isPlaying = false
      window.localStorage.removeItem(storagePrefix + '/playing')
	 if (mytrigger2count==1)
	 {
	 document.getElementsByClassName('sl-maximize')[0].style.display="none";
		document.getElementsByClassName('sl-play')[0].style.display="none";
	 }
	}
  })

  Array.prototype.forEach.call(container.querySelectorAll('.sl-video'), function (videoEl) {
    videojs(videoEl.querySelector('video')).on('ended', function () {
      var nextEl = videoEl.nextElementSibling
      if (nextEl != null) {
        videoEl.style.display = 'none'
        videojs(videoEl.querySelector('video')).currentTime(0)
        videojs(nextEl.querySelector('video')).play()
        nextEl.style.display = 'block'
      }
    })

    videoEl.addEventListener('touchstart', function () {
      var player = videojs(videoEl.querySelector('video'))
      if (player.paused()) {
        player.play()
      } else {
        player.pause()
      }
    })
  })
  
  
  
})

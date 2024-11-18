/* Make this a js file with the name script.js */

document.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
  
    if ( scrollPos > 170 ) {
      document.getElementById('fixedPos').style.backgroundColor = "white";
    } else {
      document.getElementById('fixedPos').style.backgroundColor = "transparent";
    }
  });
  
  //Shows either search or menu window
  function windowShow(nr){
    scrollTop = window.scrollY || document.documentElement.scrollTop;
      
    document.getElementById('Window' + nr).style.top = "0";
    document.getElementById('fixedPos').style.top = "-8vh";
    
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      
    window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
    };
  }
  
  //Hides either search or menu window
  function windowHide(nr){
    document.getElementById('Window' + nr).style.top = "-200vh";
    document.getElementById('fixedPos').style.top = "0";
    window.onscroll = function() {};
  }
  
  //Shows categories list
  function showMenu(nr){
    document.getElementById('cat' + nr).style.top = "0";
  }
  
  //Hides categories list
  function hideMenu(nr){
    document.getElementById('cat' + nr).style.top = "-200vh";
  }
  
  //Shows sub-categories list
  function showList(nr, img){
    if(document.getElementById('l' + nr).style.display !== "none"){
        document.getElementById('l' + nr).style.display = "none";
        document.getElementById("Limg" + img).style.transform = "rotate(0deg)";
    }else{
        document.getElementById('l' + nr).style.display = "block";
        document.getElementById("Limg" + img).style.transform = "rotate(180deg)";
    }
  }
  
  //Shows/Hides bottom sub-content
  function show(nr, img){
    if(document.getElementById("s" + nr).style.display !== "none"){
        document.getElementById("s" + nr).style.display = "none";
        document.getElementById("img" + img).style.transform = "rotate(0deg)";
    }else{
        document.getElementById("s" + nr).style.display = "block";
        document.getElementById("img" + img).style.transform = "rotate(180deg)";
    }
  }
  
  /* Origianl length: 324 lines */
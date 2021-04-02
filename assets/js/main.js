
  
  var slideIndex;
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 5000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 

  // scroll smooth
  let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
  for (let item of anchorlinks) { // relitere 
      item.addEventListener('click', (e)=> {
          let hashval = item.getAttribute('href')
          let target = document.querySelector(hashval)
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
          history.pushState(null, null, hashval)
          e.preventDefault()
      })
  }

  // back to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  
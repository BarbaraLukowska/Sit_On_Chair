function workshops () {
// Nav:
  var mainNav = document.querySelectorAll('.menu > ul > li');

  function show() {
    var hiddenElements = this.querySelector('ul');
    var arrow = document.querySelector('.arrow');
     if ((hiddenElements && arrow) != null) {
        hiddenElements.style.display ='block';
      }
  }

  function hide() {
   var hiddenElements = this.querySelector('ul');
   var arrow = document.querySelector('.arrow');
    if ((hiddenElements && arrow) != null) {
      hiddenElements.style.display = 'none';
    }
  }

  for (var i = 0; i < mainNav.length; i++) {
    mainNav[i].addEventListener('mouseover', show);
    mainNav[i].addEventListener('mouseout', hide);
  }
  // ta funkcjonalność nie jest do końca ok, bo kontenerek z podlistą znika mi jak najadę na link 'Historia'. Nie wiem dlaczego tak się dzieje, bo teoretycznie cała lista ul jest display - block lub display - none, w zaleznosci od najechania myszką, wię teoretycznie nie powinno znikać.

// Slider:
     var buttonNext = document.querySelector('#next');
     var buttonPrev = document.querySelector('#prev');

     var index = 0;

     var imgSlider = document.querySelectorAll('.slider li');
     imgSlider[0].classList.add('visible');

     function clickNext () {
       imgSlider[index].classList.remove('visible');
       index++;
       if (index > imgSlider.length - 1) {
         index = 0;
       }
       imgSlider[index].classList.add('visible');
     }

     function clickPrev () {
       imgSlider[index].classList.remove('visible');
       index--;
       if (index < 0) {
         index = imgSlider.length - 1;
       }
       imgSlider[index].classList.add('visible');
     }

     buttonNext.addEventListener('click', clickNext);
     buttonPrev.addEventListener('click', clickPrev);

// Hide box description:
  var picture1 = document.querySelector('.pic1');
  var picture2 = document.querySelector('.pic2');
  var pictures = [picture1, picture2];

  function hideDescription () {
    var paragraphs = this.querySelectorAll('p');
    var line = this. querySelectorAll('.sub-line');

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.display = 'none';
    }
    for (var i = 0; i < line.length; i++) {
      line[i].style.display = 'none';
    }
  }
  function showDescription () {
    var paragraphs = this.querySelectorAll('p');
    var line = this. querySelectorAll('.sub-line');

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.display = 'block';
    }
    for (var i = 0; i < line.length; i++) {
      line[i].style.display = 'block';
    }
  }

  for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('mouseover', hideDescription);
    pictures[i].addEventListener('mouseout', showDescription);
  }

}

document.addEventListener('DOMContentLoaded', workshops);

import dragElement from './drag.js';
import makeResizableDiv from './resize.js';

//TOOLBAR//
//bold text
document.getElementById('boldBtn').addEventListener('click', function(){document.execCommand('bold',false,null)});

//italicize text
document.getElementById('italicsBtn').addEventListener('click', function(){document.execCommand('italic',false,null)});

//underline text
document.getElementById('underlineBtn').addEventListener('click', function(){document.execCommand('underline',false,null)});

//strikethrough text
document.getElementById('strikeBtn').addEventListener('click', function(){document.execCommand('strikeThrough',false,null)});

//subscript text
document.getElementById('subscriptBtn').addEventListener('click', function(){document.execCommand('subscript',false,null)});

//superscript text
document.getElementById('superscriptBtn').addEventListener('click', function(){document.execCommand('superscript',false,null)});

//Fullscreen Present
document.getElementById('fullscreen').addEventListener('click', function(){
    document.getElementById('textContainer').webkitRequestFullscreen();
});


//upload image
var input = document.getElementById('imageChooser');
input.addEventListener('change', uploadImage);

function uploadImage(){
    
  let files = input.files;
  let fileTypes = ['image/jpg','image/jpeg','image/png'];

  let imageDiv = createResizableDiv();
  imageDiv.firstChild.childNodes[1].style.display='none';

  for(let i = 0; i < files.length; i++) {

      if(validFileType(files[i])) {
        let image = document.createElement('img');
        image.src = window.URL.createObjectURL(files[i]);
        image.setAttribute('class','image');

        imageDiv.firstChild.appendChild(image);
        document.getElementById('textContainer').appendChild(imageDiv);

      } 
  }

  function validFileType(file) {
      for(let i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
          return true;
        }
      }
    
      return false;
  }
  
}

//Creating new divs for image and text
document.getElementById('addTextBtn').addEventListener('click',createResizableDiv);

function createResizableDiv(){

  let div = document.createElement('div');
  div.setAttribute('class','resizable');
  document.getElementById('textContainer').appendChild(div);
  
  let resizersDiv = document.createElement('div');
  resizersDiv.setAttribute('class','resizers');
  div.appendChild(resizersDiv);

  
  let draggerDiv = document.createElement('div');
  draggerDiv.setAttribute('class','dragger');  
  resizersDiv.appendChild(draggerDiv);


  let textBoxDiv = document.createElement('div');
  textBoxDiv.setAttribute('class','textbox');
  resizersDiv.appendChild(textBoxDiv);
  CKEDITOR.inline(textBoxDiv);
  
    let resizerTL = document.createElement('div');
    resizerTL.setAttribute('class','resizer top-left');
    resizersDiv.appendChild(resizerTL);
  
    let resizerTR = document.createElement('div');
    resizerTR.setAttribute('class','resizer top-right');
    resizersDiv.appendChild(resizerTR);
    
    let resizerBL = document.createElement('div');
    resizerBL.setAttribute('class','resizer bottom-left');
    resizersDiv.appendChild(resizerBL);
    
    let resizerBR = document.createElement('div');
    resizerBR.setAttribute('class','resizer bottom-right');
    resizersDiv.appendChild(resizerBR);

    makeTextboxEditable();
    makeDraggable();
    makeResizableDiv();
    
    return div;
}


//make div content editable
function makeTextboxEditable(){
    let textbox = document.getElementsByClassName('textbox');
    for(let i=0; i<textbox.length; i++){
        textbox[i].contentEditable = 'true';
    }
}

//make divs draggable
function makeDraggable(){
    let draggers = document.getElementsByClassName('dragger');
    for(let i=0; i<draggers.length;i++){
        draggers[i].addEventListener('mousedown', dragElement(draggers[i]));
    }
}








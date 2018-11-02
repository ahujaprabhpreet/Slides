import dragElement from './drag.js';
import makeResizableDiv from './resize.js';

// var drag = require('dragElement');
// var resize = require('makeResizableDiv');

//bold text
document.getElementById('boldBtn').addEventListener('click', function(){document.execCommand('bold',false,null)});

//italicize text
document.getElementById('italicsBtn').addEventListener('click', function(){document.execCommand('italic',false,null)});

//underline text
document.getElementById('underlineBtn').addEventListener('click', function(){document.execCommand('underline',false,null)});

//strikethrough text
document.getElementById('strikeBtn').addEventListener('click', function(){document.execCommand('strikeThrough',false,null)});

//upload image
var input = document.querySelector('input');
input.addEventListener('change', uploadImage);

function uploadImage(){
    
  var files = input.files;
  var fileTypes = ['image/jpg','image/jpeg','image/png']
  
  var imageDiv = document.createElement('div');
  imageDiv.setAttribute('class','resizable');

   //var imageDiv = createResizableDiv();

  for(let i = 0; i < files.length; i++) {

      if(validFileType(files[i])) {
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(files[i]);
        image.setAttribute('class','image');

        imageDiv.appendChild(image);
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


document.getElementById('addTextBtn').addEventListener('click',createResizableDiv);

function createResizableDiv(){

  let div = document.createElement('div');
  div.setAttribute('class','resizable');
  document.getElementById('textContainer').appendChild(div);
  
  let resizersDiv = document.createElement('div');
  resizersDiv.setAttribute('class','resizers');
  //document.getElementById('resizable').appendChild(resizersDiv);
//   var resizeable = document.getElementsByClassName('resizable');
//   for(let i=0; i< resizeable.length; i++){
    div.appendChild(resizersDiv);
//   }
  
  let draggerDiv = document.createElement('div');
  draggerDiv.setAttribute('id','dragger');
  //document.getElementById('resizers').appendChild(draggerDiv);
//   var resizers = document.getElementsByClassName('resizers');
//   for(let i=0; i< resizers.length; i++){
    resizersDiv.appendChild(draggerDiv);
//   }

let textBoxDiv = document.createElement('div');
textBoxDiv.setAttribute('class','textbox');
resizersDiv.appendChild(textBoxDiv);



//   let resizer = document.getElementsByClassName('resizer');
//   for(let i=0; i< resizer.length; i++){
  
    let resizerTL = document.createElement('div');
    resizerTL.setAttribute('class','resizer top-left');
    //document.getElementById('resizers').appendChild(resizerTL);
    resizersDiv.appendChild(resizerTL);
  
    let resizerTR = document.createElement('div');
    resizerTR.setAttribute('class','resizer top-right');
    //document.getElementById('resizers').appendChild(resizerTR);
    resizersDiv.appendChild(resizerTR);
    
    let resizerBL = document.createElement('div');
    resizerBL.setAttribute('class','resizer bottom-left');
    //document.getElementById('resizers').appendChild(resizerBL);
    resizersDiv.appendChild(resizerBL);
    
    let resizerBR = document.createElement('div');
    resizerBR.setAttribute('class','resizer botttom-right');
    //document.getElementById('resizers').appendChild(resizerBR);
    resizersDiv.appendChild(resizerBR);

    

//   return div;


//makeResizableDiv('.resizable')

makeTextboxEditable();


document.getElementById('dragger').addEventListener('mousedown',dragElement(document.getElementById("dragger")));

}

//make div content editable
function makeTextboxEditable(){
    // document.getElementById('textbox').contentEditable='true';
    let textbox = document.getElementsByClassName('textbox');
    for(let i=0; i<textbox.length; i++){
        textbox[i].contentEditable = 'true';
    }
}








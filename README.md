
<h1> Slides Application </h1>

<h3> Objectives </h3>

A simple Google slides like web Application built in HTML, CSS and JavaScript.

1) User can add text and image objects to the white background.
2) User can use the toolbar with text and image icon to add text and image.
3) User can edit a text object by clicking it. When the text object is selected text formatting toolbar is visible.
4) User can apply styles like bold, italics, underline etc either by using the fixed toolbar or the inline text editor.
5) User can add an image on the slide by clicking on choose file button and selecting the image to add.
6) User can resize both text and image objects by using the corners of the selected object.
7) User can drag and drop both text and image objects by selecting the top border of the object.
8) User can add a title to the slide.
9) User can use the present button to switch the white canvas to fullscreen and present.
  
<b> Webpack </b>
Webpack is a build tool to manage dependencies. We specify the entry file for webpack to work its way through the dependency. Starting at index.js file, webpack will merge all the js files into one bundle file, here called main.js, which is used by the html file to implement the functionality.

Note: Starting from webpack 4, webpack.config.js is optional. There is an option to define the entry point in webpack.config.js, otherwise it will take ./src/index.js as the default entry point.

<h3>Installation</h3>

1) Clone the repository:
    git clone https://github.com/neu-mis-info6150-fall-2018/extra-credit-assignment-ppt-ahujaprabhpreet.git
    
2) Install the Dependencies using following commands:
  a) npm install --save-dev webpack

3) Build the App using the command: npm run build
  
4) Open the html file to launch the application.
  
<h3>References</h3>
1. For Text Editor: CKEditor - https://ckeditor.com/ckeditor-4/#inline
2. For Drag and Drop: https://www.w3schools.com/howto/howto_js_draggable.asp
3. For Resizing: https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d


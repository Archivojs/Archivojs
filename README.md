# Archivojs: Modern JavaScript file includer.  

Archivojs is a simple and easy to add JavaScript framework that is use to include files into your codes.
It works the same way as PHP includes and require functions.  
## Live Example

Here is a simple example on how to use **Archivojs** in a project.  

   ## Setup    
   **Server**  
   Since Archivojs is an Ajax base file includer, it must be used with a server.
   
   
**Cloning or Downloading the repo**     

You can get the source files in one of two ways.  
1. Cloning this repo
2. Downloading this repo as a zip file on Github.
 
 Either ways you still need to download the source files.  

 **Note:** For now Archivojs is not available as a **Package** on NPM or YARN.
 
  ### Reference Archivojs  
  
   We recommend you reference the minified version of Archivojs.  

       <script src="Archivojs.min.js"><script>  
         
  #### Defining your files to be included  
  
  All you need do after adding a script tag with a src reference to Archivojs.min.js, is to define a HTML tag with the include-file attribute.  

  We recommend that you use the  HTML div tag in referencing your file paths to be included.  
  
      <div>included files will be here.</div>
  
  ##### The include-file attribute  

  What Archivojs does is this, it scans any file where it is refrenced (any file that has a <script src='Archivojs.min.js'></script>) for the "include-file" attribute.  
  
  The include-flie attribute is a custom attribute that is use to define a file to be included in your code, this attribute can be added to whatsoever tag you wish to use in defining your files, and it's value must be a path to the file you like to include.  

  **Example on how to use the include file attribute**  
  
       <div include-file="path to file"></div>
       
   **Full example**
   
       <!DOCTYPE html>
       <html>
       
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title></title>
       </head>
       
       <body>
         <h1>INDEX PAGE</h1>
         <div include-file="file1.php"></div>
         <div include-file="file2.html" ></div>
         <div include-file="file3.html">
           
         </div>
         <script src="Archivojs.min.js"></script>
       
       </body>
       
       </html>
       
       
  ### Supported file formats
       
  Archivojs can be use with any file format, so far the format is supported on either the Client or Server side.  
  
  **Note:** Archivojs should not be use for **Media** formats like Images, Multimedia, audio, video files etc.
  It might return unexpected errors.
  


  ### Errors
  
  Archivojs will return a custom error if the path you define is invalid, or an  error if the server returns **404 File Not Found** error.
  
  ### Summary
   No more bulky code in your codebase, because Archivojs is here for you.  
   
  Archivojs is simple to use and it doesn't require confiscated **Setup**, it is an Ajax base file includer.  
  
  Please follow the steps in this documentation to successful use this Framework.
  
  **Credit:** Efon God'stime.  
   efongodstime8@gmail.com




  

/*
Archivojs
Archivojs is an open source JavaScript framework written in typescript.
check out the documentation on GitHub.
{
  version:1.0.0
  license:MIT
  Author: God'stime Efon
  email: efongodstime8@gmail.com
}

*/
window.addEventListener("load", function () {
    runInit();
}, true);
//this function will run everytime the onload event is triggered on the windows object.
function runInit() {
    var a, b, c, elems, xhttpr;
    c = [];
    //get all elements from the document where this file is refrenced
    a = document.getElementsByTagName("*");
    var _loop_1 = function (l) {
        b = a[l];
        //get only those elements with the include file attribute. 
        //this will also return the file path, we can use this path to fetch our files from the server later.
        elems = b.getAttribute("include-file");
        //check for specifity of  elements with the include file attribute only.
        if (elems) {
            //push the file path to this array
            //it will be used latter.
            c[0] = elems;
            //start making a request for our files
            xhttpr = new XMLHttpRequest();
            xhttpr.onreadystatechange = function () {
                //check for status and error messages here or you render the response text from server if everything went well.
                if (this.status == 200 && this.readyState == 4) {
                    //everything went well.
                    //this block tend not to see our a b variable (variable that gets elements with the include-file attribute)
                    //so we tend to use the looping way.
                    //render our files
                    a[l].innerHTML = this.responseText;
                }
                //check for 404 from server so that we can run some error messages here.
                if (this.status == 404) {
                    //using the double qoutes to render our error messages.
                    a[l].innerHTML = "\n       <b> Error</b> (404) (".concat(c[0], "): sever returned '404 error (File not found on the specified path in this element )'.\n       \n        ");
                    //add some couple of stylesheet
                    a[l].style.color = "red";
                    a[l].style.marginTop = "3vh";
                }
                //remove our attribute on yhis element so and return the function so that we won't get unexpected bugs.
                a[l].removeAttribute("include-file");
                //recall the function for the next element with the include file attribute.
                runInit();
            };
            //all request uses the Get method.
            xhttpr.open("GET", elems, true);
            //sending an empty request should do.
            xhttpr.send();
        }
    };
    //loop through all the elements trying to check for the Include-file attributes.
    for (var l = 0; l < a.length; l++) {
        _loop_1(l);
    }
}

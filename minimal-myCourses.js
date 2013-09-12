// ==UserScript==
// @name        Minimal myCourses
// @namespace   Minimal myCourses
// @description	Changes the preview pane split in myCourse from horizontal to vertical
// @include     https://mycourses2.mcgill.ca/*
// @version     1.5
// ==/UserScript==


// Vertical split
var locpath     = window.location.pathname;
var panepath    = "/d2l/lms/discussions/messageLists/frame_right.d2l";
var homepath    = "/d2l/lp/homepage/home.d2l"; 

if (locpath == panepath){
	document.body.setAttribute("rows","100%");
	document.body.setAttribute("cols","50%,50%");
}

if (typeof(d_content) != "undefined") d_content.classList.remove('d2l-max-width');
    
headerLogo = document.getElementsByClassName('d_nb_cGlobal');
if (headerLogo.length) headerLogo[0].style.backgroundPosition = "0% 50%";

headerFull = document.getElementsByClassName('d_nb_cFull');
if (headerFull.length){
    headerFull[0].style.backgroundPosition = "0% 50%";
    headerFull[0].style.borderBottomColor = "#aaa";
}

headerHeight = document.getElementsByClassName('d_nb_i');
if (headerHeight.length) headerHeight[0].style.minHeight = "30px";

if (typeof(ctl_2) != "undefined") ctl_2.style.height = (window.innerHeight-72)+"px";

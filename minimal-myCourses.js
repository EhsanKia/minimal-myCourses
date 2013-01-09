// ==UserScript==
// @name        Minimal myCourses
// @namespace   Minimal myCourses
// @description	Changes the preview pane split in myCourse from horizontal to vertical
// @include     https://mycourses2.mcgill.ca/*
// @version     1.3
// ==/UserScript==


// Vertical split
var locpath     = window.location.pathname;
var panepath    = "/d2l/lms/discussions/messageLists/frame_right.d2l";

if (locpath == panepath){
	document.body.setAttribute("rows","100%");
	document.body.setAttribute("cols","50%,50%");
}


// Header padding
var navTitle = document.getElementsByClassName("d_nb_mt")[0];
var navBG = document.getElementsByClassName("d_nb_c1")[0];

if (navTitle && navBG){
	navTitle.style.paddingTop = "4px";
	navBG.style.backgroundPositionY = "-11px";
}


// Hides previous courses

var FallCourses = document.getElementById("z_q");

FallCourses.style.height = "30px";
FallCourses.style.overflow = "hidden";

FallCourses.addEventListener('click',ToggleHide,false);

function ToggleHide(){
    if (FallCourses.style.height == "auto")
        FallCourses.style.height = "30px";
    else
    	FallCourses.style.height = "auto";
}

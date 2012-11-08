// ==UserScript==
// @name        myCourses Vertical Split
// @namespace   Minimal myCourses
// @description	Changes the preview pane split in myCourse from horizontal to vertical
// @include     https://mycourses2.mcgill.ca/*
// @version     1.2
// ==/UserScript==

var locpath     = window.location.pathname;
var panepath    = "/d2l/lms/discussions/messageLists/frame_right.d2l";

if (locpath == panepath){
	document.body.setAttribute("rows","100%");
	document.body.setAttribute("cols","50%,50%");
}

var navTitle = document.getElementsByClassName("d_nb_mt")[0];
var navBG = document.getElementsByClassName("d_nb_c1")[0];

if (navTitle && navBG){
	navTitle.style.paddingTop = "4px";
	navBG.style.backgroundPositionY = "-11px";
}
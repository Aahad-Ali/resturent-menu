var div = document.getElementById("main");

var div2 = document.createElement('div');
div2.setAttribute("id", "menu");

var heading = document.createElement('h1');
var textN = document.createTextNode('RaJput_Resturent:');
div2.appendChild(heading);
heading.appendChild(textN);

var menu = document.createElement('h2');
var mText = document.createTextNode('MENU');

div2.appendChild(menu);
menu.appendChild(mText);

var pList1 = document.createElement("h3");
pList1.setAttribute("id", "plist");
var plText1 = document.createTextNode('PIZZA LIST:');

div2.appendChild(pList1);
pList1.appendChild(plText1);

var unOrderlist = document.createElement('ul');
var listItem1 = document.createElement('li');
var listItem2 = document.createElement('li');
var listItem3 = document.createElement('li');
var listItem4 = document.createElement('li');
var listItem5 = document.createElement('li');

div2.appendChild(unOrderlist);

unOrderlist.appendChild(listItem1);
unOrderlist.appendChild(listItem2);
unOrderlist.appendChild(listItem3);
unOrderlist.appendChild(listItem4);
unOrderlist.appendChild(listItem5);


var listText1 = document.createTextNode('Pan Pizza        ::  150');
var listText2 = document.createTextNode('small Pizza      ::  250');
var listText3 = document.createTextNode('large Pizza      ::  400');
var listText4 = document.createTextNode('X-Large Pizza    ::  1050');
var listText5 = document.createTextNode('XX-Large Pizza   ::  1400');


listItem1.appendChild(listText1);
listItem2.appendChild(listText2);
listItem3.appendChild(listText3);
listItem4.appendChild(listText4);
listItem5.appendChild(listText5);

var pList2 = document.createElement("h3");
pList2.setAttribute("id", "plist2");
var plText2 = document.createTextNode('BURGUR LIST:');

div2.appendChild(pList2);
pList2.appendChild(plText2);

var unOrderlist = document.createElement('ul');
var listItem6 = document.createElement('li');
var listItem7 = document.createElement('li');
var listItem8 = document.createElement('li');
var listItem9 = document.createElement('li');
var listItem10 = document.createElement('li');

div2.appendChild(unOrderlist);

unOrderlist.appendChild(listItem6);
unOrderlist.appendChild(listItem7);
unOrderlist.appendChild(listItem8);
unOrderlist.appendChild(listItem9);
unOrderlist.appendChild(listItem10);


var listText6 = document.createTextNode('Pan Pizza        ::  150');
var listText7 = document.createTextNode('small Pizza      ::  250');
var listText8 = document.createTextNode('large Pizza      ::  400');
var listText9 = document.createTextNode('X-Large Pizza    ::  1050');
var listText10 = document.createTextNode('XX-Large Pizza   ::  1400');


listItem6.appendChild(listText6);
listItem7.appendChild(listText7);
listItem8.appendChild(listText8);
listItem9.appendChild(listText9);
listItem10.appendChild(listText10);



var pList3 = document.createElement("h3");
pList3.setAttribute("id", "plist3");
var plText3 = document.createTextNode('TIKKAH LIST:');

div2.appendChild(pList3);
pList3.appendChild(plText3);

var unOrderlist = document.createElement('ul');
var listItem11 = document.createElement('li');
var listItem12 = document.createElement('li');
var listItem13 = document.createElement('li');
var listItem14 = document.createElement('li');
var listItem15 = document.createElement('li');

div2.appendChild(unOrderlist);

unOrderlist.appendChild(listItem11);
unOrderlist.appendChild(listItem12);
unOrderlist.appendChild(listItem13);
unOrderlist.appendChild(listItem14);
unOrderlist.appendChild(listItem15);


var listText11 = document.createTextNode('Pan Pizza        ::  150');
var listText12= document.createTextNode('small Pizza      ::  250');
var listText13 = document.createTextNode('large Pizza      ::  400');
var listText14 = document.createTextNode('X-Large Pizza    ::  1050');
var listText15 = document.createTextNode('XX-Large Pizza   ::  1400');


listItem11.appendChild(listText11);
listItem12.appendChild(listText12);
listItem13.appendChild(listText13);
listItem14.appendChild(listText14);
listItem15.appendChild(listText15);



var pList4 = document.createElement("h3");
pList4.setAttribute("id", "plist4");
var plText4 = document.createTextNode('COLD DRINK LIST:');

div2.appendChild(pList4);
pList4.appendChild(plText4);

var unOrderlist = document.createElement('ul');
var listItem11 = document.createElement('li');
var listItem12 = document.createElement('li');
var listItem13 = document.createElement('li');
var listItem14 = document.createElement('li');
var listItem15 = document.createElement('li');

div2.appendChild(unOrderlist);

unOrderlist.appendChild(listItem11);
unOrderlist.appendChild(listItem12);
unOrderlist.appendChild(listItem13);
unOrderlist.appendChild(listItem14);
unOrderlist.appendChild(listItem15);


var listText11 = document.createTextNode('Pan Pizza        ::  150');
var listText12= document.createTextNode('small Pizza      ::  250');
var listText13 = document.createTextNode('large Pizza      ::  400');
var listText14 = document.createTextNode('X-Large Pizza    ::  1050');
var listText15 = document.createTextNode('XX-Large Pizza   ::  1400');


listItem11.appendChild(listText11);
listItem12.appendChild(listText12);
listItem13.appendChild(listText13);
listItem14.appendChild(listText14);
listItem15.appendChild(listText15);



div.appendChild(div2);
console.log(div2);





















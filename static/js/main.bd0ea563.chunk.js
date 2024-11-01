(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(2),o=a.n(c);a(12),a(13);function r(e){return n.a.createElement("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),n.a.createElement("div",{className:"form-check form-switch mx-2"},n.a.createElement("input",{onClick:()=>{"light"===e.mode?(e.setMode("dark"),document.body.style.backgroundColor="#f55454c9",e.showAlert("Red Dark mode has been enable","success")):(e.setMode("light"),document.body.style.backgroundColor="white",e.showAlert("Light mode has been enable","success"))},className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{color:"light"===e.mode?"black":"white"}},"Enable to Red Dark Mode ")),n.a.createElement("div",{className:"form-check form-switch mx-2"},n.a.createElement("input",{onClick:()=>{"light"===e.mode?(e.setMode("dark"),document.body.style.backgroundColor="#225f9b",e.showAlert("Blue Dark mode has been enable","success")):(e.setMode("light"),document.body.style.backgroundColor="white",e.showAlert("Light mode has been enable","success"))},className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{color:"light"===e.mode?"black":"white"}},"Enable to Blue Dark Mode ")),n.a.createElement("div",{className:"form-check form-switch text-light"},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{color:"light"===e.mode?"black":"white"}},"Enable to Dark Mode")),n.a.createElement("form",{className:"d-flex mx-2",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))))}function s(e){const[t,a]=Object(l.useState)(""),[c,o]=Object(l.useState)(!1);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#f8f9faa6":"white",color:"light"===e.mode?"black":"white"},value:t,onChange:e=>{a(e.target.value)},id:"myBox",rows:"8"})),n.a.createElement("button",{disabled:0===t.length,className:"btn btn-dark mx-2 my-2",onClick:()=>{let l=t.toUpperCase();a(l),e.showAlert("Converted to uppercase ! ","success")}},"Convert to UperCase"),n.a.createElement("button",{disabled:0===t.length,className:"btn btn-dark mx-2 my-2",onClick:()=>{let l=t.toLowerCase();a(l),e.showAlert("Converted to lowercase ! ","success")}},"Convert to LowerCase"),n.a.createElement("button",{disabled:0===t.length,className:"btn btn-dark mx-2 my-2",onClick:()=>{a(""),e.showAlert("Clear text ! ","success")}},"Clear Text"),n.a.createElement("button",{disabled:0===t.length,className:"btn btn-dark mx-2 my-2",onClick:()=>{o(e=>!e),e.showAlert("Converted to italic-font ! ","success")}},c?"Remove Italic":"Convert to Italic Font"),n.a.createElement("button",{disabled:0===t.length,className:"btn btn-dark mx-2 my-2",id:"myBox",onClick:()=>{let t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copy to clipboard ! ","success")}},"Copy Text"),n.a.createElement("button",{disabled:0===t.length,className:"btn btn-dark mx-2 my-2",onClick:()=>{let l=t.split(/[ ]+/);a(l.join(" ")),e.showAlert("Extra spaces removed ! ","success")}},"Extra Space Set")),n.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",null," Your text Summary"),n.a.createElement("p",null,t.split(/\s+/).filter(e=>0!==e.length).length," words and ",t.length," characters"),"  ",n.a.createElement("p",null,.008*t.split(" ").filter(e=>0!==e.length).length," Minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",{id:"itelicdata",style:{fontStyle:c?"italic":"normal"}},t.length>0?t:"Enter somthing in the textbox above to preview it here")))}var m=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:`alert alert-${e.alert.type} alert-dismissible fade show`,role:"alert"},n.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type))," : ",e.alert.msg))};var i=function(){const[e,t]=Object(l.useState)("light"),[a,c]=Object(l.useState)(null),o=(e,t)=>{c({msg:e,type:t}),setTimeout(()=>{c(null)},3e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(r,{title:"TextUtils",about:"About",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="gray",o("Dark mode has been enable","success")):(t("light"),document.body.style.backgroundColor="white",o("Light mode has been enable","success"))},setMode:t,showAlert:o}),n.a.createElement(m,{alert:a}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(s,{showAlert:o,heading:"Enter the text Analyze",mode:e})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:c,getTTFB:o}=t;a(e),l(e),n(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.bd0ea563.chunk.js.map
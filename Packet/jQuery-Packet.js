/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);




/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jï¿½Ã¶rn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 4187 2007-12-16 17:15:27Z joern.zaefferer $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are three supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
	metadata : {
		defaults : {
			type: 'class',
			name: 'metadata',
			cre: /({.*})/,
			single: 'metadata'
		},
		setType: function( type, name ){
			this.defaults.type = type;
			this.defaults.name = name;
		},
		get: function( elem, opts ){
			var settings = $.extend({},this.defaults,opts);
			// check for empty string in single property
			if ( !settings.single.length ) settings.single = 'metadata';
			
			var data = $.data(elem, settings.single);
			// returned cached data if it already exists
			if ( data ) return data;
			
			data = "{}";
			
			if ( settings.type == "class" ) {
				var m = settings.cre.exec( elem.className );
				if ( m )
					data = m[1];
			} else if ( settings.type == "elem" ) {
				if( !elem.getElementsByTagName )
					return undefined;
				var e = elem.getElementsByTagName(settings.name);
				if ( e.length )
					data = $.trim(e[0].innerHTML);
			} else if ( elem.getAttribute != undefined ) {
				var attr = elem.getAttribute( settings.name );
				if ( attr )
					data = attr;
			}
			
			if ( data.indexOf( '{' ) <0 )
			data = "{" + data + "}";
			
			data = eval("(" + data + ")");
			
			$.data( elem, settings.single, data );
			return data;
		}
	}
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
	return $.metadata.get( this[0], opts );
};

})(jQuery);


/*
 * jQuery Form Plugin
 * version: 2.36 (07-NOV-2009)
 * @requires jQuery v1.2.6 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function() {
			$(this).ajaxSubmit({
				target: '#output'
			});
			return false; // <-- important!
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function')
		options = { success: options };

	var url = $.trim(this.attr('action'));
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
   	}
   	url = url || window.location.href || '';

	options = $.extend({
		url:  url,
		type: this.attr('method') || 'GET',
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options || {});

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (var n in options.data) {
		  if(options.data[n] instanceof Array) {
			for (var k in options.data[n])
			  a.push( { name: n, value: options.data[n][k] } );
		  }
		  else
			 a.push( { name: n, value: options.data[n] } );
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else
		options.data = q; // data is the query string for 'post'

	var $form = this, callbacks = [];
	if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
	if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			$(options.target).html(data).each(oldSuccess, arguments);
		});
	}
	else if (options.success)
		callbacks.push(options.success);

	options.success = function(data, status) {
		for (var i=0, max=callbacks.length; i < max; i++)
			callbacks[i].apply(options, [data, status, $form]);
	};

	// are there files to upload?
	var files = $('input:file', this).fieldValue();
	var found = false;
	for (var j=0; j < files.length; j++)
		if (files[j])
			found = true;

	var multipart = false;
//	var mp = 'multipart/form-data';
//	multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if ((files.length && options.iframe !== false) || options.iframe || found || multipart) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive)
		   $.get(options.closeKeepAlive, fileUpload);
	   else
		   fileUpload();
	   }
   else
	   $.ajax(options);

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit]', form).length) {
			alert('Error: Form elements must not be named "submit".');
			return;
		}

		var opts = $.extend({}, $.ajaxSettings, options);
		var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

		var id = 'jqFormIO' + (new Date().getTime());
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ opts.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', opts.iframeSrc); // abort op in progress
			}
		};

		var g = opts.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) $.event.trigger("ajaxStart");
		if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && $.active--;
			return;
		}
		if (xhr.aborted)
			return;

		var cbInvoked = 0;
		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				options.extraData = options.extraData || {};
				options.extraData[n] = sub.value;
				if (sub.type == "image") {
					options.extraData[name+'.x'] = form.clk_x;
					options.extraData[name+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		setTimeout(function() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);

			// ie borks in some cases when setting encoding
			if (! options.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (opts.timeout)
				setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (options.extraData)
					for (var n in options.extraData)
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
								.appendTo(form)[0]);

				// add iframe to doc and submit the form
				$io.appendTo('body');
				io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				t ? form.setAttribute('target', t) : $form.removeAttr('target');
				$(extraInputs).remove();
			}
		}, 10);

		var domCheckCount = 50;

		function cb() {
			if (cbInvoked++) return;

			io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) throw 'timeout';
				// extract the server response from the iframe
				var data, doc;

				doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
				
				var isXml = opts.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && (doc.body == null || doc.body.innerHTML == '')) {
				 	if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						cbInvoked = 0;
						setTimeout(cb, 100);
						return;
					}
					log('Could not access iframe DOM after 50 tries.');
					return;
				}

				xhr.responseText = doc.body ? doc.body.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': opts.dataType};
					return headers[header];
				};

				if (opts.dataType == 'json' || opts.dataType == 'script') {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta)
						xhr.responseText = ta.value;
					else {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						if (pre)
							xhr.responseText = pre.innerHTML;
					}			  
				}
				else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				data = $.httpData(xhr, opts.dataType);
			}
			catch(e){
				ok = false;
				$.handleError(opts, xhr, 'error', e);
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				opts.success(data, 'success');
				if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
			}
			if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
			if (g && ! --$.active) $.event.trigger("ajaxStop");
			if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		};

		function toXml(s, doc) {
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
		};
	};
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	return this.ajaxFormUnbind().bind('submit.form-plugin', function() {
		$(this).ajaxSubmit(options);
		return false;
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0)
				return;
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length == 0) return a;

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) return a;
	for(var i=0, max=els.length; i < max; i++) {
		var el = els[i];
		var n = el.name;
		if (!n) continue;

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		var v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(var j=0, jmax=v.length; j < jmax; j++)
				a.push({name: n, value: v[j]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: n, value: v});
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0], n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) return;
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++)
				a.push({name: n, value: v[i]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: this.name, value: v});
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
			continue;
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (typeof successful == 'undefined') successful = true;

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1))
			return null;

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) return null;
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				if (one) return v;
				a.push(v);
			}
		}
		return a;
	}
	return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea')
			this.value = '';
		else if (t == 'checkbox' || t == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
			this.reset();
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b == undefined) b = true;
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select == undefined) select = true;
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio')
			this.checked = select;
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
		window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);


/*
 * jQuery validation plug-in 1.7
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 JÃ¶rn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}var validator=$.data(this[0],'validator');if(validator){return validator;}validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){validator.submitButton=this;});}this.submit(function(event){if(validator.settings.debug)event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm);if(validator.submitButton){hidden.remove();}return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!=Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.errorsFor(element).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)this.element(element);else if(element.parentNode.name in this.submitted)this.element(element.parentNode);},highlight:function(element,errorClass,validClass){$(element).addClass(errorClass).removeClass(validClass);},unhighlight:function(element,errorClass,validClass){$(element).removeClass(errorClass).addClass(validClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");validator.settings[eventType]&&validator.settings[eventType].call(validator,this[0]);}$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",delegate).validateDelegate(":radio, :checkbox, select, option","click",delegate);if(this.settings.invalidHandler)$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name)[0];}var rules=$(element).rules();var dependencyMismatch=false;for(method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id+", check the '"+rule.method+"' method",e);throw e;}}if(dependencyMismatch)return;if(this.objectLength(rules))this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)return arguments[i];}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length)this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))return this.findByName(element.name).filter(':checked').length;}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}if(rules.messages){delete rules.messages;}return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(previous.old!==value){previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=(previous.message=response||validator.defaultMessage(element,"remote"));errors[element.name]=$.isFunction(message)?message(value):message;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}else if(this.pending[element.name]){return"pending";}return previous.valid;},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))return"dependency-mismatch";if(/[^0-9-]+/.test(value))return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)nDigit-=9;}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var ajax=$.ajax;var pendingRequests={};$.ajax=function(settings){settings=$.extend(settings,$.extend({},$.ajaxSettings,settings));var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};})(jQuery);;(function($){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){this.addEventListener(original,handler,true);},teardown:function(){this.removeEventListener(original,handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};function handler(e){e=$.event.fix(e);e.type=fix;return $.event.handle.call(this,e);}});};$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});})(jQuery);



(function() {
	
	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ')
		// remove numbers and punctuation
		.replace(/[0-9.(),;:!?%#$'"_+=\/-]*/g,'');
	}
	jQuery.validator.addMethod("maxWords", function(value, element, params) { 
	    return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length < params; 
	}, jQuery.validator.format("Please enter {0} words or less.")); 
	 
	jQuery.validator.addMethod("minWords", function(value, element, params) { 
	    return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params; 
	}, jQuery.validator.format("Please enter at least {0} words.")); 
	 
	jQuery.validator.addMethod("rangeWords", function(value, element, params) { 
	    return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params[0] && value.match(/bw+b/g).length < params[1]; 
	}, jQuery.validator.format("Please enter between {0} and {1} words."));

})();

jQuery.validator.addMethod("letterswithbasicpunc", function(value, element) {
	return this.optional(element) || /^[a-z-.,()'\"\s]+$/i.test(value);
}, "Letters or punctuation only please");  

jQuery.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, spaces or underscores only please");  

jQuery.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please"); 

jQuery.validator.addMethod("nowhitespace", function(value, element) {
	return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please"); 

jQuery.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2}-\d{4}$/.test(value);
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");

jQuery.validator.addMethod("integer", function(value, element) {
	return this.optional(element) || /^-?\d+$/.test(value);
}, "A positive or negative non-decimal number please");

/**
* Return true, if the value is a valid vehicle identification number (VIN).
*
* Works with all kind of text inputs.
*
* @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
* @desc Declares a required input element whose value must be a valid vehicle identification number.
*
* @name jQuery.validator.methods.vinUS
* @type Boolean
* @cat Plugins/Validate/Methods
*/ 
jQuery.validator.addMethod(
	"vinUS",
	function(v){
		if (v.length != 17)
			return false;
		var i, n, d, f, cd, cdv;
		var LL    = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"];
		var VL    = [1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9];
		var FL    = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
		var rs    = 0;
		for(i = 0; i < 17; i++){
		    f = FL[i];
		    d = v.slice(i,i+1);
		    if(i == 8){
		        cdv = d;
		    }
		    if(!isNaN(d)){
		        d *= f;
		    }
		    else{
		        for(n = 0; n < LL.length; n++){
		            if(d.toUpperCase() === LL[n]){
		                d = VL[n];
		                d *= f;
		                if(isNaN(cdv) && n == 8){
		                    cdv = LL[n];
		                }
		                break;
		            }
		        }
		    }
		    rs += d;
		}
		cd = rs % 11;
		if(cd == 10){cd = "X";}
		if(cd == cdv){return true;}
		return false; 
	},
	"The specified vehicle identification number (VIN) is invalid."
);

/**
  * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
  *
  * @example jQuery.validator.methods.date("01/01/1900")
  * @result true
  *
  * @example jQuery.validator.methods.date("01/13/1990")
  * @result false
  *
  * @example jQuery.validator.methods.date("01.01.1900")
  * @result false
  *
  * @example <input name="pippo" class="{dateITA:true}" />
  * @desc Declares an optional input element whose value must be a valid date.
  *
  * @name jQuery.validator.methods.dateITA
  * @type Boolean
  * @cat Plugins/Validate/Methods
  */
jQuery.validator.addMethod(
	"dateITA",
	function(value, element) {
		var check = false;
		var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
		if( re.test(value)){
			var adata = value.split('/');
			var gg = parseInt(adata[0],10);
			var mm = parseInt(adata[1],10);
			var aaaa = parseInt(adata[2],10);
			var xdata = new Date(aaaa,mm-1,gg);
			if ( ( xdata.getFullYear() == aaaa ) && ( xdata.getMonth () == mm - 1 ) && ( xdata.getDate() == gg ) )
				check = true;
			else
				check = false;
		} else
			check = false;
		return this.optional(element) || check;
	}, 
	"Please enter a correct date"
);

jQuery.validator.addMethod("dateNL", function(value, element) {
		return this.optional(element) || /^\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?$/.test(value);
	}, "Vul hier een geldige datum in."
);

jQuery.validator.addMethod("time", function(value, element) {
		return this.optional(element) || /^([01][0-9])|(2[0123]):([0-5])([0-9])$/.test(value);
	}, "Please enter a valid time, between 00:00 and 23:59"
);

/**
 * matches US phone number format 
 * 
 * where the area code may not start with 1 and the prefix may not start with 1 
 * allows '-' or ' ' as a separator and allows parens around area code 
 * some people may want to put a '1' in front of their number 
 * 
 * 1(212)-999-2345
 * or
 * 212 999 2344
 * or
 * 212-999-0983
 * 
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, ""); 
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");

jQuery.validator.addMethod('phoneUK', function(phone_number, element) {
return this.optional(element) || phone_number.length > 9 &&
phone_number.match(/^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/);
}, 'Please specify a valid phone number');

jQuery.validator.addMethod('mobileUK', function(phone_number, element) {
return this.optional(element) || phone_number.length > 9 &&
phone_number.match(/^((0|\+44)7(5|6|7|8|9){1}\d{2}\s?\d{6})$/);
}, 'Please specify a valid mobile number');

// TODO check if value starts with <, otherwise don't try stripping anything
jQuery.validator.addMethod("strippedminlength", function(value, element, param) {
	return jQuery(value).text().length >= param;
}, jQuery.validator.format("Please enter at least {0} characters"));

// same as email, but TLD is optional
jQuery.validator.addMethod("email2", function(value, element, param) {
	return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value); 
}, jQuery.validator.messages.email);

// same as url, but TLD is optional
jQuery.validator.addMethod("url2", function(value, element, param) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value); 
}, jQuery.validator.messages.url);

// NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
// Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
// Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
jQuery.validator.addMethod("creditcardtypes", function(value, element, param) {

	if (/[^0-9-]+/.test(value)) 
		return false;
	
	value = value.replace(/\D/g, "");
	
	var validTypes = 0x0000;
	
	if (param.mastercard) 
		validTypes |= 0x0001;
	if (param.visa) 
		validTypes |= 0x0002;
	if (param.amex) 
		validTypes |= 0x0004;
	if (param.dinersclub) 
		validTypes |= 0x0008;
	if (param.enroute) 
		validTypes |= 0x0010;
	if (param.discover) 
		validTypes |= 0x0020;
	if (param.jcb) 
		validTypes |= 0x0040;
	if (param.unknown) 
		validTypes |= 0x0080;
	if (param.all) 
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	
	if (validTypes & 0x0001 && /^(51|52|53|54|55)/.test(value)) { //mastercard
		return value.length == 16;
	}
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
		return value.length == 16;
	}
	if (validTypes & 0x0004 && /^(34|37)/.test(value)) { //amex
		return value.length == 15;
	}
	if (validTypes & 0x0008 && /^(300|301|302|303|304|305|36|38)/.test(value)) { //dinersclub
		return value.length == 14;
	}
	if (validTypes & 0x0010 && /^(2014|2149)/.test(value)) { //enroute
		return value.length == 15;
	}
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
		return value.length == 16;
	}
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
		return value.length == 16;
	}
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
		return value.length == 15;
	}
	if (validTypes & 0x0080) { //unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number.");


/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: TR
 */
jQuery.extend(jQuery.validator.messages, {
	required: "Bu alanın doldurulması zorunludur.",
	remote: "Lütfen bu alanı düzeltin.",
	email: "Lütfen geçerli bir e-posta adresi giriniz.",
	url: "Lütfen geçerli bir web adresi (URL) giriniz.",
	date: "Lütfen geçerli bir tarih giriniz.",
	dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
	number: "Lütfen geçerli bir sayı giriniz.",
	digits: "Lütfen sadece sayısal karakterler giriniz.",
	creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
	equalTo: "Lütfen aynı değeri tekrar giriniz.",
	accept: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
	maxlength: jQuery.validator.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
	minlength: jQuery.validator.format("Lütfen en az {0} karakter uzunluğunda bir değer giriniz."),
	rangelength: jQuery.validator.format("Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz."),
	range: jQuery.validator.format("Lütfen {0} ile {1} arasında bir değer giriniz."),
	max: jQuery.validator.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
	min: jQuery.validator.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz.")
});




/*
 * jQuery Tools 1.2.4 - The missing UI library for the Web
 * 
 * [tabs, tabs.slideshow, tooltip, tooltip.slide, tooltip.dynamic, scrollable, scrollable.autoscroll, scrollable.navigator, overlay, overlay.apple, dateinput, rangeinput, validator, toolbox.flashembed, toolbox.history, toolbox.expose, toolbox.mousewheel]
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 * 
 * -----
 * 
 * File generated: Mon Aug 30 08:43:07 GMT 2010
 */
(function(c){function p(d,b,a){var e=this,l=d.add(this),h=d.find(a.tabs),i=b.jquery?b:d.children(b),j;h.length||(h=d.children());i.length||(i=d.parent().find(b));i.length||(i=c(b));c.extend(this,{click:function(f,g){var k=h.eq(f);if(typeof f=="string"&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(a.rotate){var n=h.length-1;if(f<0)return e.click(n,g);if(f>n)return e.click(0,g)}if(!k.length){if(j>=0)return e;f=a.initialIndex;k=h.eq(f)}if(f===j)return e;
g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[a.effect].call(e,f,function(){g.type="onClick";l.trigger(g,[f])});j=f;h.removeClass(a.current);k.addClass(a.current);return e}},getConf:function(){return a},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return e.click(j+1)},prev:function(){return e.click(j-1)},destroy:function(){h.unbind(a.event).removeClass(a.current);
i.find("a[href^=#]").unbind("click.T");return e}});c.each("onBeforeClick,onClick".split(","),function(f,g){c.isFunction(a[g])&&c(e).bind(g,a[g]);e[g]=function(k){k&&c(e).bind(g,k);return e}});if(a.history&&c.fn.history){c.tools.history.init(h);a.event="history"}h.each(function(f){c(this).bind(a.event,function(g){e.click(f,g);return g.preventDefault()})});i.find("a[href^=#]").bind("click.T",function(f){e.click(c(this).attr("href"),f)});if(location.hash&&a.tabs==="a"&&d.find(a.tabs+location.hash).length)e.click(location.hash);
else if(a.initialIndex===0||a.initialIndex>0)e.click(a.initialIndex)}c.tools=c.tools||{version:"1.2.4"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,b){o[d]=b}};var o={"default":function(d,b){this.getPanes().hide().eq(d).show();b.call()},fade:function(d,b){var a=this.getConf(),e=a.fadeOutSpeed,l=this.getPanes();e?l.fadeOut(e):l.hide();l.eq(d).fadeIn(a.fadeInSpeed,b)},slide:function(d,
b){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,b)},ajax:function(d,b){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),b)}},m;c.tools.tabs.addEffect("horizontal",function(d,b){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:m},function(){c(this).show();b.call()})});c.fn.tabs=function(d,b){var a=this.data("tabs");if(a){a.destroy();this.removeData("tabs")}if(c.isFunction(b))b=
{onBeforeClick:b};b=c.extend({},c.tools.tabs.conf,b);this.each(function(){a=new p(c(this),d,b);c(this).data("tabs",a)});return b.api?a:this}})(jQuery);
(function(d){function r(g,a){function p(f){var e=d(f);return e.length<2?e:g.parent().find(f)}var c=this,j=g.add(this),b=g.data("tabs"),h,m,k,n=false,o=p(a.next).click(function(){b.next()}),l=p(a.prev).click(function(){b.prev()});d.extend(c,{getTabs:function(){return b},getConf:function(){return a},play:function(){if(!h){var f=d.Event("onBeforePlay");j.trigger(f);if(f.isDefaultPrevented())return c;n=false;h=setInterval(b.next,a.interval);j.trigger("onPlay");b.next()}},pause:function(){if(!h&&!k)return c;
var f=d.Event("onBeforePause");j.trigger(f);if(f.isDefaultPrevented())return c;h=clearInterval(h);k=clearInterval(k);j.trigger("onPause")},stop:function(){c.pause();n=true}});d.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(f,e){d.isFunction(a[e])&&c.bind(e,a[e]);c[e]=function(s){return c.bind(e,s)}});if(a.autopause){var t=b.getTabs().add(o).add(l).add(b.getPanes());t.hover(function(){c.pause();m=clearInterval(m)},function(){n||(m=setTimeout(c.play,a.interval))})}if(a.autoplay)k=
setTimeout(c.play,a.interval);else c.stop();a.clickable&&b.getPanes().click(function(){b.next()});if(!b.getConf().rotate){var i=a.disabledClass;b.getIndex()||l.addClass(i);b.onBeforeClick(function(f,e){if(e){l.removeClass(i);e==b.getTabs().length-1?o.addClass(i):o.removeClass(i)}else l.addClass(i)})}}var q;q=d.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3E3,clickable:true,api:false}};d.fn.slideshow=function(g){var a=
this.data("slideshow");if(a)return a;g=d.extend({},q.conf,g);this.each(function(){a=new r(d(this),g);d(this).data("slideshow",a)});return g.api?a:this}})(jQuery);
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,e=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];e+=a.outerWidth()+c.offset[1];var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")e-=a/2;if(i=="left")e-=a;return{top:h,left:e}}function u(a,b){var c=this,h=a.add(c),e,i=0,j=0,m=a.attr("title"),q=a.attr("data-tooltip"),r=n[b.effect],l,s=
a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(d){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(d)},b.predelay);else c.show(d)}).bind(k[1],function(d){clearTimeout(j);if(b.delay)i=setTimeout(function(){c.hide(d)},b.delay);else c.hide(d)});if(m&&
b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(d){if(!e){if(q)e=f(q);else if(m)e=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else if(b.tip)e=f(b.tip).eq(0);else{e=a.next();e.length||(e=a.parent().next())}if(!e.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;e.stop(true,true);var g=p(a,e,b);d=d||f.Event();d.type="onBeforeShow";h.trigger(d,[g]);if(d.isDefaultPrevented())return c;g=p(a,e,b);e.css({position:"absolute",
top:g.top,left:g.left});l=true;r[0].call(c,function(){d.type="onShow";l="full";h.trigger(d)});g=b.events.tooltip.split(/,\s*/);e.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&e.bind(g[1],function(o){o.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});return c},hide:function(d){if(!e||!c.isShown())return c;d=d||f.Event();d.type="onBeforeHide";h.trigger(d);if(!d.isDefaultPrevented()){l=false;n[b.effect][1].call(c,function(){d.type="onHide";
h.trigger(d)});return c}},isShown:function(d){return d?l=="full":l},getConf:function(){return b},getTip:function(){return e},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(d,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(o){f(c).bind(g,o);return c}})}f.tools=f.tools||{version:"1.2.4"};f.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,
events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){n[a]=[b,c]}};var n={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,
a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h=h=="+"?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);
(function(g){function j(a){var c=g(window),d=c.width()+c.scrollLeft(),h=c.height()+c.scrollTop();return[a.offset().top<=c.scrollTop(),d<=a.offset().left+a.width(),h<=a.offset().top+a.height(),c.scrollLeft()>=a.offset().left]}function k(a){for(var c=a.length;c--;)if(a[c])return false;return true}var i=g.tools.tooltip;i.dynamic={conf:{classNames:"top right bottom left"}};g.fn.dynamic=function(a){if(typeof a=="number")a={speed:a};a=g.extend({},i.dynamic.conf,a);var c=a.classNames.split(/\s/),d;this.each(function(){var h=
g(this).tooltip().onBeforeShow(function(e,f){e=this.getTip();var b=this.getConf();d||(d=[b.position[0],b.position[1],b.offset[0],b.offset[1],g.extend({},b)]);g.extend(b,d[4]);b.position=[d[0],d[1]];b.offset=[d[2],d[3]];e.css({visibility:"hidden",position:"absolute",top:f.top,left:f.left}).show();f=j(e);if(!k(f)){if(f[2]){g.extend(b,a.top);b.position[0]="top";e.addClass(c[0])}if(f[3]){g.extend(b,a.right);b.position[1]="right";e.addClass(c[1])}if(f[0]){g.extend(b,a.bottom);b.position[0]="bottom";e.addClass(c[2])}if(f[1]){g.extend(b,
a.left);b.position[1]="left";e.addClass(c[3])}if(f[0]||f[2])b.offset[0]*=-1;if(f[1]||f[3])b.offset[1]*=-1}e.css({visibility:"visible"}).hide()});h.onBeforeShow(function(){var e=this.getConf();this.getTip();setTimeout(function(){e.position=[d[0],d[1]];e.offset=[d[2],d[3]]},0)});h.onHide(function(){var e=this.getTip();e.removeClass(a.classNames)});ret=h});return a.api?ret:this}})(jQuery);
(function(e){function n(f,c){var a=e(c);return a.length<2?a:f.parent().find(c)}function t(f,c){var a=this,l=f.add(a),g=f.children(),k=0,m=c.vertical;j||(j=a);if(g.length>1)g=e(c.items,f);e.extend(a,{getConf:function(){return c},getIndex:function(){return k},getSize:function(){return a.getItems().size()},getNaviButtons:function(){return o.add(p)},getRoot:function(){return f},getItemWrap:function(){return g},getItems:function(){return g.children(c.item).not("."+c.clonedClass)},move:function(b,d){return a.seekTo(k+
b,d)},next:function(b){return a.move(1,b)},prev:function(b){return a.move(-1,b)},begin:function(b){return a.seekTo(0,b)},end:function(b){return a.seekTo(a.getSize()-1,b)},focus:function(){return j=a},addItem:function(b){b=e(b);if(c.circular){g.children("."+c.clonedClass+":last").before(b);g.children("."+c.clonedClass+":first").replaceWith(b.clone().addClass(c.clonedClass))}else g.append(b);l.trigger("onAddItem",[b]);return a},seekTo:function(b,d,h){b.jquery||(b*=1);if(c.circular&&b===0&&k==-1&&d!==
0)return a;if(!c.circular&&b<0||b>a.getSize()||b<-1)return a;var i=b;if(b.jquery)b=a.getItems().index(b);else i=a.getItems().eq(b);var q=e.Event("onBeforeSeek");if(!h){l.trigger(q,[b,d]);if(q.isDefaultPrevented()||!i.length)return a}i=m?{top:-i.position().top}:{left:-i.position().left};k=b;j=a;if(d===undefined)d=c.speed;g.animate(i,d,c.easing,h||function(){l.trigger("onSeek",[b])});return a}});e.each(["onBeforeSeek","onSeek","onAddItem"],function(b,d){e.isFunction(c[d])&&e(a).bind(d,c[d]);a[d]=function(h){e(a).bind(d,
h);return a}});if(c.circular){var r=a.getItems().slice(-1).clone().prependTo(g),s=a.getItems().eq(1).clone().appendTo(g);r.add(s).addClass(c.clonedClass);a.onBeforeSeek(function(b,d,h){if(!b.isDefaultPrevented())if(d==-1){a.seekTo(r,h,function(){a.end(0)});return b.preventDefault()}else d==a.getSize()&&a.seekTo(s,h,function(){a.begin(0)})});a.seekTo(0,0,function(){})}var o=n(f,c.prev).click(function(){a.prev()}),p=n(f,c.next).click(function(){a.next()});!c.circular&&a.getSize()>1&&a.onBeforeSeek(function(b,
d){setTimeout(function(){if(!b.isDefaultPrevented()){o.toggleClass(c.disabledClass,d<=0);p.toggleClass(c.disabledClass,d>=a.getSize()-1)}},1)});c.mousewheel&&e.fn.mousewheel&&f.mousewheel(function(b,d){if(c.mousewheel){a.move(d<0?1:-1,c.wheelSpeed||50);return false}});c.keyboard&&e(document).bind("keydown.scrollable",function(b){if(!(!c.keyboard||b.altKey||b.ctrlKey||e(b.target).is(":input")))if(!(c.keyboard!="static"&&j!=a)){var d=b.keyCode;if(m&&(d==38||d==40)){a.move(d==38?-1:1);return b.preventDefault()}if(!m&&
(d==37||d==39)){a.move(d==37?-1:1);return b.preventDefault()}}});c.initialIndex&&a.seekTo(c.initialIndex,0,function(){})}e.tools=e.tools||{version:"1.2.4"};e.tools.scrollable={conf:{activeClass:"active",circular:false,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:null,items:".items",keyboard:true,mousewheel:false,next:".next",prev:".prev",speed:400,vertical:false,wheelSpeed:0}};var j;e.fn.scrollable=function(f){var c=this.data("scrollable");if(c)return c;f=e.extend({},
e.tools.scrollable.conf,f);this.each(function(){c=new t(e(this),f);e(this).data("scrollable",c)});return f.api?c:this}})(jQuery);
(function(c){var g=c.tools.scrollable;g.autoscroll={conf:{autoplay:true,interval:3E3,autopause:true}};c.fn.autoscroll=function(d){if(typeof d=="number")d={interval:d};var b=c.extend({},g.autoscroll.conf,d),h;this.each(function(){var a=c(this).data("scrollable");if(a)h=a;var e,i,f=true;a.play=function(){if(!e){f=false;e=setInterval(function(){a.next()},b.interval);a.next()}};a.pause=function(){e=clearInterval(e)};a.stop=function(){a.pause();f=true};b.autopause&&a.getRoot().add(a.getNaviButtons()).hover(function(){a.pause();
clearInterval(i)},function(){f||(i=setTimeout(a.play,b.interval))});b.autoplay&&setTimeout(a.play,b.interval)});return b.api?h:this}})(jQuery);
(function(d){function p(b,g){var h=d(g);return h.length<2?h:b.parent().find(g)}var m=d.tools.scrollable;m.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:false,idPrefix:null,history:false}};d.fn.navigator=function(b){if(typeof b=="string")b={navi:b};b=d.extend({},m.navigator.conf,b);var g;this.each(function(){function h(a,c,i){e.seekTo(c);if(j){if(location.hash)location.hash=a.attr("href").replace("#","")}else return i.preventDefault()}function f(){return k.find(b.naviItem||
"> *")}function n(a){var c=d("<"+(b.naviItem||"a")+"/>").click(function(i){h(d(this),a,i)}).attr("href","#"+a);a===0&&c.addClass(l);b.indexed&&c.text(a+1);b.idPrefix&&c.attr("id",b.idPrefix+a);return c.appendTo(k)}function o(a,c){a=f().eq(c.replace("#",""));a.length||(a=f().filter("[href="+c+"]"));a.click()}var e=d(this).data("scrollable"),k=b.navi.jquery?b.navi:p(e.getRoot(),b.navi),q=e.getNaviButtons(),l=b.activeClass,j=b.history&&d.fn.history;if(e)g=e;e.getNaviButtons=function(){return q.add(k)};
f().length?f().each(function(a){d(this).click(function(c){h(d(this),a,c)})}):d.each(e.getItems(),function(a){n(a)});e.onBeforeSeek(function(a,c){setTimeout(function(){if(!a.isDefaultPrevented()){var i=f().eq(c);!a.isDefaultPrevented()&&i.length&&f().removeClass(l).eq(c).addClass(l)}},1)});e.onAddItem(function(a,c){c=n(e.getItems().index(c));j&&c.history(o)});j&&f().history(o)});return b.api?g:this}})(jQuery);
(function(a){function t(d,b){var c=this,i=d.add(c),o=a(window),k,f,m,g=a.tools.expose&&(b.mask||b.expose),n=Math.random().toString().slice(10);if(g){if(typeof g=="string")g={color:g};g.closeOnClick=g.closeOnEsc=false}var p=b.target||d.attr("rel");f=p?a(p):d;if(!f.length)throw"Could not find Overlay: "+p;d&&d.index(f)==-1&&d.click(function(e){c.load(e);return e.preventDefault()});a.extend(c,{load:function(e){if(c.isOpened())return c;var h=q[b.effect];if(!h)throw'Overlay: cannot find effect : "'+b.effect+
'"';b.oneInstance&&a.each(s,function(){this.close(e)});e=e||a.Event();e.type="onBeforeLoad";i.trigger(e);if(e.isDefaultPrevented())return c;m=true;g&&a(f).expose(g);var j=b.top,r=b.left,u=f.outerWidth({margin:true}),v=f.outerHeight({margin:true});if(typeof j=="string")j=j=="center"?Math.max((o.height()-v)/2,0):parseInt(j,10)/100*o.height();if(r=="center")r=Math.max((o.width()-u)/2,0);h[0].call(c,{top:j,left:r},function(){if(m){e.type="onLoad";i.trigger(e)}});g&&b.closeOnClick&&a.mask.getMask().one("click",
c.close);b.closeOnClick&&a(document).bind("click."+n,function(l){a(l.target).parents(f).length||c.close(l)});b.closeOnEsc&&a(document).bind("keydown."+n,function(l){l.keyCode==27&&c.close(l)});return c},close:function(e){if(!c.isOpened())return c;e=e||a.Event();e.type="onBeforeClose";i.trigger(e);if(!e.isDefaultPrevented()){m=false;q[b.effect][1].call(c,function(){e.type="onClose";i.trigger(e)});a(document).unbind("click."+n).unbind("keydown."+n);g&&a.mask.close();return c}},getOverlay:function(){return f},
getTrigger:function(){return d},getClosers:function(){return k},isOpened:function(){return m},getConf:function(){return b}});a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(e,h){a.isFunction(b[h])&&a(c).bind(h,b[h]);c[h]=function(j){a(c).bind(h,j);return c}});k=f.find(b.close||".close");if(!k.length&&!b.close){k=a('<a class="close"></a>');f.prepend(k)}k.click(function(e){c.close(e)});b.load&&c.load()}a.tools=a.tools||{version:"1.2.4"};a.tools.overlay={addEffect:function(d,
b,c){q[d]=[b,c]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var s=[],q={};a.tools.overlay.addEffect("default",function(d,b){var c=this.getConf(),i=a(window);if(!c.fixed){d.top+=i.scrollTop();d.left+=i.scrollLeft()}d.position=c.fixed?"fixed":"absolute";this.getOverlay().css(d).fadeIn(c.speed,b)},function(d){this.getOverlay().fadeOut(this.getConf().closeSpeed,
d)});a.fn.overlay=function(d){var b=this.data("overlay");if(b)return b;if(a.isFunction(d))d={onBeforeLoad:d};d=a.extend(true,{},a.tools.overlay.conf,d);this.each(function(){b=new t(a(this),d);s.push(b);a(this).data("overlay",b)});return d.api?b:this}})(jQuery);
(function(i){function j(b){var d=b.offset();return{top:d.top+b.height()/2,left:d.left+b.width()/2}}var k=i.tools.overlay,f=i(window);i.extend(k.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});function n(b,d){var a=this.getOverlay(),c=this.getConf(),g=this.getTrigger(),o=this,l=a.outerWidth({margin:true}),h=a.data("img");if(!h){var e=a.css("backgroundImage");if(!e)throw"background-image CSS property not set for overlay";e=e.slice(e.indexOf("(")+1,e.indexOf(")")).replace(/\"/g,"");
a.css("backgroundImage","none");h=i('<img src="'+e+'"/>');h.css({border:0,display:"none"}).width(l);i("body").append(h);a.data("img",h)}e=c.start.top||Math.round(f.height()/2);var m=c.start.left||Math.round(f.width()/2);if(g){g=j(g);e=g.top;m=g.left}h.css({position:"absolute",top:e,left:m,width:0,zIndex:c.zIndex}).show();b.top+=f.scrollTop();b.left+=f.scrollLeft();b.position="absolute";a.css(b);h.animate({top:a.css("top"),left:a.css("left"),width:l},c.speed,function(){if(c.fixed){b.top-=f.scrollTop();
b.left-=f.scrollLeft();b.position="fixed";h.add(a).css(b)}a.css("zIndex",c.zIndex+1).fadeIn(c.fadeInSpeed,function(){o.isOpened()&&!i(this).index(a)?d.call():a.hide()})})}function p(b){var d=this.getOverlay().hide(),a=this.getConf(),c=this.getTrigger();d=d.data("img");var g={top:a.start.top,left:a.start.left,width:0};c&&i.extend(g,j(c));a.fixed&&d.css({position:"absolute"}).animate({top:"+="+f.scrollTop(),left:"+="+f.scrollLeft()},0);d.animate(g,a.closeSpeed,b)}k.addEffect("apple",n,p)})(jQuery);
(function(d){function R(b,c){return 32-(new Date(b,c,32)).getDate()}function S(b,c){b=""+b;for(c=c||2;b.length<c;)b="0"+b;return b}function T(b,c,i){var p=b.getDate(),h=b.getDay(),q=b.getMonth();b=b.getFullYear();var f={d:p,dd:S(p),ddd:B[i].shortDays[h],dddd:B[i].days[h],m:q+1,mm:S(q+1),mmm:B[i].shortMonths[q],mmmm:B[i].months[q],yy:String(b).slice(2),yyyy:b};c=c.replace(X,function(r){return r in f?f[r]:r.slice(1,r.length-1)});return Y.html(c).html()}function y(b){return parseInt(b,10)}function U(b,
c){return b.getFullYear()===c.getFullYear()&&b.getMonth()==c.getMonth()&&b.getDate()==c.getDate()}function C(b){if(b){if(b.constructor==Date)return b;if(typeof b=="string"){var c=b.split("-");if(c.length==3)return new Date(y(c[0]),y(c[1])-1,y(c[2]));if(!/^-?\d+$/.test(b))return;b=y(b)}c=new Date;c.setDate(c.getDate()+b);return c}}function Z(b,c){function i(a,e,g){m=a;D=a.getFullYear();E=a.getMonth();G=a.getDate();g=g||d.Event("api");g.type="change";H.trigger(g,[a]);if(!g.isDefaultPrevented()){b.val(T(a,
e.format,e.lang));b.data("date",a);h.hide(g)}}function p(a){a.type="onShow";H.trigger(a);d(document).bind("keydown.d",function(e){if(e.ctrlKey)return true;var g=e.keyCode;if(g==8){b.val("");return h.hide(e)}if(g==27)return h.hide(e);if(d(V).index(g)>=0){if(!v){h.show(e);return e.preventDefault()}var j=d("#"+f.weeks+" a"),s=d("."+f.focus),n=j.index(s);s.removeClass(f.focus);if(g==74||g==40)n+=7;else if(g==75||g==38)n-=7;else if(g==76||g==39)n+=1;else if(g==72||g==37)n-=1;if(n>41){h.addMonth();s=d("#"+
f.weeks+" a:eq("+(n-42)+")")}else if(n<0){h.addMonth(-1);s=d("#"+f.weeks+" a:eq("+(n+42)+")")}else s=j.eq(n);s.addClass(f.focus);return e.preventDefault()}if(g==34)return h.addMonth();if(g==33)return h.addMonth(-1);if(g==36)return h.today();if(g==13)d(e.target).is("select")||d("."+f.focus).click();return d([16,17,18,9]).index(g)>=0});d(document).bind("click.d",function(e){var g=e.target;if(!d(g).parents("#"+f.root).length&&g!=b[0]&&(!L||g!=L[0]))h.hide(e)})}var h=this,q=new Date,f=c.css,r=B[c.lang],
k=d("#"+f.root),M=k.find("#"+f.title),L,I,J,D,E,G,m=b.attr("data-value")||c.value||b.val(),o=b.attr("min")||c.min,t=b.attr("max")||c.max,v;if(o===0)o="0";m=C(m)||q;o=C(o||c.yearRange[0]*365);t=C(t||c.yearRange[1]*365);if(!r)throw"Dateinput: invalid language: "+c.lang;if(b.attr("type")=="date"){var N=d("<input/>");d.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(a,e){N.attr(e,b.attr(e))});b.replaceWith(N);b=N}b.addClass(f.input);var H=
b.add(h);if(!k.length){k=d("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",f.root);k.children().eq(0).attr("id",f.head).end().eq(1).attr("id",f.body).children().eq(0).attr("id",f.days).end().eq(1).attr("id",f.weeks).end().end().end().find("a").eq(0).attr("id",f.prev).end().eq(1).attr("id",f.next);M=k.find("#"+f.head).find("div").attr("id",f.title);if(c.selectors){var z=d("<select/>").attr("id",f.month),A=d("<select/>").attr("id",f.year);M.append(z.add(A))}for(var $=
k.find("#"+f.days),O=0;O<7;O++)$.append(d("<span/>").text(r.shortDays[(O+c.firstDay)%7]));d("body").append(k)}if(c.trigger)L=d("<a/>").attr("href","#").addClass(f.trigger).click(function(a){h.show();return a.preventDefault()}).insertAfter(b);var K=k.find("#"+f.weeks);A=k.find("#"+f.year);z=k.find("#"+f.month);d.extend(h,{show:function(a){if(!(b.is("[readonly]")||v)){a=a||d.Event();a.type="onBeforeShow";H.trigger(a);if(!a.isDefaultPrevented()){d.each(W,function(){this.hide()});v=true;z.unbind("change").change(function(){h.setValue(A.val(),
d(this).val())});A.unbind("change").change(function(){h.setValue(d(this).val(),z.val())});I=k.find("#"+f.prev).unbind("click").click(function(){I.hasClass(f.disabled)||h.addMonth(-1);return false});J=k.find("#"+f.next).unbind("click").click(function(){J.hasClass(f.disabled)||h.addMonth();return false});h.setValue(m);var e=b.position();k.css({top:e.top+b.outerHeight({margins:true})+c.offset[0],left:e.left+c.offset[1]});if(c.speed)k.show(c.speed,function(){p(a)});else{k.show();p(a)}return h}}},setValue:function(a,
e,g){var j;if(parseInt(e,10)>=-1){a=y(a);e=y(e);g=y(g);j=new Date(a,e,g)}else{j=a||m;a=j.getFullYear();e=j.getMonth();g=j.getDate()}if(e==-1){e=11;a--}else if(e==12){e=0;a++}if(!v){i(j,c);return h}E=e;D=a;g=new Date(a,e,1-c.firstDay);g=g.getDay();var s=R(a,e),n=R(a,e-1),P;if(c.selectors){z.empty();d.each(r.months,function(w,F){o<new Date(a,w+1,-1)&&t>new Date(a,w,0)&&z.append(d("<option/>").html(F).attr("value",w))});A.empty();j=q.getFullYear();for(var l=j+c.yearRange[0];l<j+c.yearRange[1];l++)o<
new Date(l+1,-1,0)&&t>new Date(l,0,0)&&A.append(d("<option/>").text(l));z.val(e);A.val(a)}else M.html(r.months[e]+" "+a);K.empty();I.add(J).removeClass(f.disabled);l=!g?-7:0;for(var u,x;l<(!g?35:42);l++){u=d("<a/>");if(l%7===0){P=d("<div/>").addClass(f.week);K.append(P)}if(l<g){u.addClass(f.off);x=n-g+l+1;j=new Date(a,e-1,x)}else if(l>=g+s){u.addClass(f.off);x=l-s-g+1;j=new Date(a,e+1,x)}else{x=l-g+1;j=new Date(a,e,x);if(U(m,j))u.attr("id",f.current).addClass(f.focus);else U(q,j)&&u.attr("id",f.today)}o&&
j<o&&u.add(I).addClass(f.disabled);t&&j>t&&u.add(J).addClass(f.disabled);u.attr("href","#"+x).text(x).data("date",j);P.append(u)}K.find("a").click(function(w){var F=d(this);if(!F.hasClass(f.disabled)){d("#"+f.current).removeAttr("id");F.attr("id",f.current);i(F.data("date"),c,w)}return false});f.sunday&&K.find(f.week).each(function(){var w=c.firstDay?7-c.firstDay:0;d(this).children().slice(w,w+1).addClass(f.sunday)});return h},setMin:function(a,e){o=C(a);e&&m<o&&h.setValue(o);return h},setMax:function(a,
e){t=C(a);e&&m>t&&h.setValue(t);return h},today:function(){return h.setValue(q)},addDay:function(a){return this.setValue(D,E,G+(a||1))},addMonth:function(a){return this.setValue(D,E+(a||1),G)},addYear:function(a){return this.setValue(D+(a||1),E,G)},hide:function(a){if(v){a=d.Event();a.type="onHide";H.trigger(a);d(document).unbind("click.d").unbind("keydown.d");if(a.isDefaultPrevented())return;k.hide();v=false}return h},getConf:function(){return c},getInput:function(){return b},getCalendar:function(){return k},
getValue:function(a){return a?T(m,a,c.lang):m},isOpen:function(){return v}});d.each(["onBeforeShow","onShow","change","onHide"],function(a,e){d.isFunction(c[e])&&d(h).bind(e,c[e]);h[e]=function(g){d(h).bind(e,g);return h}});b.bind("focus click",h.show).keydown(function(a){var e=a.keyCode;if(!v&&d(V).index(e)>=0){h.show(a);return a.preventDefault()}return a.shiftKey||a.ctrlKey||a.altKey||e==9?true:a.preventDefault()});C(b.val())&&i(m,c)}d.tools=d.tools||{version:"1.2.4"};var W=[],Q,V=[75,76,38,39,
74,72,40,37],B={};Q=d.tools.dateinput={conf:{format:"mm/dd/yy",selectors:false,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:undefined,max:undefined,trigger:false,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},localize:function(b,c){d.each(c,function(i,p){c[i]=p.split(",")});B[b]=c}};Q.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",
shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var X=/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,Y=d("<a/>");d.expr[":"].date=function(b){var c=b.getAttribute("type");return c&&c=="date"||!!d(b).data("dateinput")};d.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=d.extend(true,{},Q.conf,b);d.each(b.css,function(i,p){if(!p&&i!="prefix")b.css[i]=(b.css.prefix||"")+
(p||i)});var c;this.each(function(){var i=new Z(d(this),b);W.push(i);i=i.getInput().data("dateinput",i);c=c?c.add(i):i});return c?c:this}})(jQuery);
(function(e){function F(d,a){a=Math.pow(10,a);return Math.round(d*a)/a}function p(d,a){if(a=parseInt(d.css(a),10))return a;return(d=d[0].currentStyle)&&d.width&&parseInt(d.width,10)}function C(d){return(d=d.data("events"))&&d.onSlide}function G(d,a){function h(c,b,f,j){if(f===undefined)f=b/k*z;else if(j)f-=a.min;if(r)f=Math.round(f/r)*r;if(b===undefined||r)b=f*k/z;if(isNaN(f))return g;b=Math.max(0,Math.min(b,k));f=b/k*z;if(j||!n)f+=a.min;if(n)if(j)b=k-b;else f=a.max-f;f=F(f,t);var q=c.type=="click";
if(D&&l!==undefined&&!q){c.type="onSlide";A.trigger(c,[f,b]);if(c.isDefaultPrevented())return g}j=q?a.speed:0;q=q?function(){c.type="change";A.trigger(c,[f])}:null;if(n){m.animate({top:b},j,q);a.progress&&B.animate({height:k-b+m.width()/2},j)}else{m.animate({left:b},j,q);a.progress&&B.animate({width:b+m.width()/2},j)}l=f;H=b;d.val(f);return g}function s(){if(n=a.vertical||p(i,"height")>p(i,"width")){k=p(i,"height")-p(m,"height");u=i.offset().top+k}else{k=p(i,"width")-p(m,"width");u=i.offset().left}}
function v(){s();g.setValue(a.value||a.min)}var g=this,o=a.css,i=e("<div><div/><a href='#'/></div>").data("rangeinput",g),n,l,u,k,H;d.before(i);var m=i.addClass(o.slider).find("a").addClass(o.handle),B=i.find("div").addClass(o.progress);e.each("min,max,step,value".split(","),function(c,b){c=d.attr(b);if(parseFloat(c))a[b]=parseFloat(c,10)});var z=a.max-a.min,r=a.step=="any"?0:a.step,t=a.precision;if(t===undefined)try{t=r.toString().split(".")[1].length}catch(I){t=0}if(d.attr("type")=="range"){var w=
e("<input/>");e.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(c,b){w.attr(b,d.attr(b))});w.val(a.value);d.replaceWith(w);d=w}d.addClass(o.input);var A=e(g).add(d),D=true;e.extend(g,{getValue:function(){return l},setValue:function(c,b){return h(b||e.Event("api"),undefined,c,true)},getConf:function(){return a},getProgress:function(){return B},getHandle:function(){return m},getInput:function(){return d},step:function(c,b){b=b||e.Event();
var f=a.step=="any"?1:a.step;g.setValue(l+f*(c||1),b)},stepUp:function(c){return g.step(c||1)},stepDown:function(c){return g.step(-c||-1)}});e.each("onSlide,change".split(","),function(c,b){e.isFunction(a[b])&&e(g).bind(b,a[b]);g[b]=function(f){e(g).bind(b,f);return g}});m.drag({drag:false}).bind("dragStart",function(){D=C(e(g))||C(d)}).bind("drag",function(c,b,f){if(d.is(":disabled"))return false;h(c,n?b:f)}).bind("dragEnd",function(c){if(!c.isDefaultPrevented()){c.type="change";A.trigger(c,[l])}}).click(function(c){return c.preventDefault()});
i.click(function(c){if(d.is(":disabled")||c.target==m[0])return c.preventDefault();s();var b=m.width()/2;h(c,n?k-u-b+c.pageY:c.pageX-u-b)});a.keyboard&&d.keydown(function(c){if(!d.attr("readonly")){var b=c.keyCode,f=e([75,76,38,33,39]).index(b)!=-1,j=e([74,72,40,34,37]).index(b)!=-1;if((f||j)&&!(c.shiftKey||c.altKey||c.ctrlKey)){if(f)g.step(b==33?10:1,c);else if(j)g.step(b==34?-10:-1,c);return c.preventDefault()}}});d.blur(function(c){var b=e(this).val();b!==l&&g.setValue(b,c)});e.extend(d[0],{stepUp:g.stepUp,
stepDown:g.stepDown});v();k||e(window).load(v)}e.tools=e.tools||{version:"1.2.4"};var E;E=e.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:true,progress:false,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var x,y;e.fn.drag=function(d){document.ondragstart=function(){return false};d=e.extend({x:true,y:true,drag:true},d);x=x||e(document).bind("mousedown mouseup",function(a){var h=e(a.target);if(a.type=="mousedown"&&
h.data("drag")){var s=h.position(),v=a.pageX-s.left,g=a.pageY-s.top,o=true;x.bind("mousemove.drag",function(i){var n=i.pageX-v;i=i.pageY-g;var l={};if(d.x)l.left=n;if(d.y)l.top=i;if(o){h.trigger("dragStart");o=false}d.drag&&h.css(l);h.trigger("drag",[i,n]);y=h});a.preventDefault()}else try{y&&y.trigger("dragEnd")}finally{x.unbind("mousemove.drag");y=null}});return this.data("drag",true)};e.expr[":"].range=function(d){var a=d.getAttribute("type");return a&&a=="range"||!!e(d).filter("input").data("rangeinput")};
e.fn.rangeinput=function(d){if(this.data("rangeinput"))return this;d=e.extend(true,{},E.conf,d);var a;this.each(function(){var h=new G(e(this),e.extend(true,{},d));h=h.getInput().data("rangeinput",h);a=a?a.add(h):h});return a?a:this}})(jQuery);
(function(e){function t(a,b,c){var k=a.offset().top,f=a.offset().left,l=c.position.split(/,?\s+/),p=l[0];l=l[1];k-=b.outerHeight()-c.offset[0];f+=a.outerWidth()+c.offset[1];c=b.outerHeight()+a.outerHeight();if(p=="center")k+=c/2;if(p=="bottom")k+=c;a=a.outerWidth();if(l=="center")f-=(a+b.outerWidth())/2;if(l=="left")f-=a;return{top:k,left:f}}function x(a){function b(){return this.getAttribute("type")==a}b.key="[type="+a+"]";return b}function u(a,b,c){function k(g,d,j){if(!(!c.grouped&&g.length)){var h;
if(j===false||e.isArray(j)){h=i.messages[d.key||d]||i.messages["*"];h=h[c.lang]||i.messages["*"].en;(d=h.match(/\$\d/g))&&e.isArray(j)&&e.each(d,function(n){h=h.replace(this,j[n])})}else h=j[c.lang]||j;g.push(h)}}var f=this,l=b.add(f);a=a.not(":button, :image, :reset, :submit");e.extend(f,{getConf:function(){return c},getForm:function(){return b},getInputs:function(){return a},reflow:function(){a.each(function(){var g=e(this),d=g.data("msg.el");if(d){g=t(g,d,c);d.css({top:g.top,left:g.left})}});return f},
invalidate:function(g,d){if(!d){var j=[];e.each(g,function(h,n){h=a.filter("[name='"+h+"']");if(h.length){h.trigger("OI",[n]);j.push({input:h,messages:[n]})}});g=j;d=e.Event()}d.type="onFail";l.trigger(d,[g]);d.isDefaultPrevented()||r[c.effect][0].call(f,g,d);return f},reset:function(g){g=g||a;g.removeClass(c.errorClass).each(function(){var d=e(this).data("msg.el");if(d){d.remove();e(this).data("msg.el",null)}}).unbind(c.errorInputEvent||"");return f},destroy:function(){b.unbind(c.formEvent).unbind("reset.V");
a.unbind(c.inputEvent||"").unbind("change.V");return f.reset()},checkValidity:function(g,d){g=g||a;g=g.not(":disabled");if(!g.length)return true;d=d||e.Event();d.type="onBeforeValidate";l.trigger(d,[g]);if(d.isDefaultPrevented())return d.result;var j=[],h=c.errorInputEvent+".v";g.not(":radio:not(:checked)").each(function(){var q=[],m=e(this).unbind(h).data("messages",q);e.each(v,function(){var o=this,s=o[0];if(m.filter(s).length){o=o[1].call(f,m,m.val());if(o!==true){d.type="onBeforeFail";l.trigger(d,
[m,s]);if(d.isDefaultPrevented())return false;var w=m.attr(c.messageAttr);if(w){q=[w];return false}else k(q,s,o)}}});if(q.length){j.push({input:m,messages:q});m.trigger("OI",[q]);c.errorInputEvent&&m.bind(h,function(o){f.checkValidity(m,o)})}if(c.singleError&&j.length)return false});var n=r[c.effect];if(!n)throw'Validator: cannot find effect "'+c.effect+'"';if(j.length){f.invalidate(j,d);return false}else{n[1].call(f,g,d);d.type="onSuccess";l.trigger(d,[g]);g.unbind(h)}return true}});e.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),
function(g,d){e.isFunction(c[d])&&e(f).bind(d,c[d]);f[d]=function(j){e(f).bind(d,j);return f}});c.formEvent&&b.bind(c.formEvent,function(g){if(!f.checkValidity(null,g))return g.preventDefault()});b.bind("reset.V",function(){f.reset()});a[0]&&a[0].validity&&a.each(function(){this.oninvalid=function(){return false}});if(b[0])b[0].checkValidity=f.checkValidity;c.inputEvent&&a.bind(c.inputEvent,function(g){f.checkValidity(e(this),g)});a.filter(":checkbox, select").filter("[required]").bind("change.V",
function(g){var d=e(this);if(this.checked||d.is("select")&&e(this).val())r[c.effect][1].call(f,d,g)});var p=a.filter(":radio").change(function(g){f.checkValidity(p,g)});e(window).resize(function(){f.reflow()})}e.tools=e.tools||{version:"1.2.4"};var y=/\[type=([a-z]+)\]/,z=/^-?[0-9]*(\.[0-9]+)?$/,A=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,B=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#\?\/\w \.\-=]*$/i,i;i=e.tools.validator={conf:{grouped:false,effect:"default",errorClass:"invalid",inputEvent:null,
errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:false,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(a,b){e.each(b,function(c,k){i.messages[c]=i.messages[c]||{};i.messages[c][a]=k})},localizeFn:function(a,b){i.messages[a]=i.messages[a]||{};e.extend(i.messages[a],b)},fn:function(a,b,c){if(e.isFunction(b))c=b;else{if(typeof b=="string")b={en:b};this.messages[a.key||
a]=b}if(b=y.exec(a))a=x(b[1]);v.push([a,c])},addEffect:function(a,b,c){r[a]=[b,c]}};var v=[],r={"default":[function(a){var b=this.getConf();e.each(a,function(c,k){c=k.input;c.addClass(b.errorClass);var f=c.data("msg.el");if(!f){f=e(b.message).addClass(b.messageClass).appendTo(document.body);c.data("msg.el",f)}f.css({visibility:"hidden",display:"none"}).find("span").remove();e.each(k.messages,function(l,p){e("<span/>").html(p).appendTo(f)});f.outerWidth()==f.parent().width()&&f.add(f.find("p")).css({display:"inline"});
k=t(c,f,b);f.css({visibility:"visible",position:"absolute",top:k.top,left:k.left}).fadeIn(b.speed)})},function(a){var b=this.getConf();a.removeClass(b.errorClass).each(function(){var c=e(this).data("msg.el");c&&c.css({visibility:"hidden"})})}]};e.each("email,url,number".split(","),function(a,b){e.expr[":"][b]=function(c){return c.getAttribute("type")===b}});e.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)};i.fn(":email","Please enter a valid email address",function(a,b){return!b||
A.test(b)});i.fn(":url","Please enter a valid URL",function(a,b){return!b||B.test(b)});i.fn(":number","Please enter a numeric value.",function(a,b){return z.test(b)});i.fn("[max]","Please enter a value smaller than $1",function(a,b){if(b===""||e.tools.dateinput&&a.is(":date"))return true;a=a.attr("max");return parseFloat(b)<=parseFloat(a)?true:[a]});i.fn("[min]","Please enter a value larger than $1",function(a,b){if(b===""||e.tools.dateinput&&a.is(":date"))return true;a=a.attr("min");return parseFloat(b)>=
parseFloat(a)?true:[a]});i.fn("[required]","Please complete this mandatory field.",function(a,b){if(a.is(":checkbox"))return a.is(":checked");return!!b});i.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");return b.test(a.val())});e.fn.validator=function(a){var b=this.data("validator");if(b){b.destroy();this.removeData("validator")}a=e.extend(true,{},i.conf,a);if(this.is("form"))return this.each(function(){var c=e(this);b=new u(c.find(":input"),c,a);c.data("validator",b)});else{b=
new u(this,this.eq(0).closest("form"),a);return this.data("validator",b)}}})(jQuery);
(function(){function f(a,b){if(b)for(var c in b)if(b.hasOwnProperty(c))a[c]=b[c];return a}function l(a,b){var c=[];for(var d in a)if(a.hasOwnProperty(d))c[d]=b(a[d]);return c}function m(a,b,c){if(e.isSupported(b.version))a.innerHTML=e.getHTML(b,c);else if(b.expressInstall&&e.isSupported([6,65]))a.innerHTML=e.getHTML(f(b,{src:b.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else{if(!a.innerHTML.replace(/\s/g,"")){a.innerHTML="<h2>Flash version "+b.version+
" or greater is required</h2><h3>"+(g[0]>0?"Your version is "+g:"You have no flash plugin installed")+"</h3>"+(a.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+k+"'>here</a></p>");if(a.tagName=="A")a.onclick=function(){location.href=k}}if(b.onFail){var d=b.onFail.call(this);if(typeof d=="string")a.innerHTML=d}}if(i)window[b.id]=document.getElementById(b.id);f(this,{getRoot:function(){return a},getOptions:function(){return b},getConf:function(){return c},
getApi:function(){return a.firstChild}})}var i=document.all,k="http://www.adobe.com/go/getflashplayer",n=typeof jQuery=="function",o=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,j={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}});
window.flashembed=function(a,b,c){if(typeof a=="string")a=document.getElementById(a.replace("#",""));if(a){if(typeof b=="string")b={src:b};return new m(a,f(f({},j),b),c)}};var e=f(window.flashembed,{conf:j,getVersion:function(){var a,b;try{b=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(c){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"))&&a.GetVariable("$version")}catch(d){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"))&&a.GetVariable("$version")}catch(h){}}}return(b=
o.exec(b))?[b[1],b[3]]:[0,0]},asString:function(a){if(a===null||a===undefined)return null;var b=typeof a;if(b=="object"&&a.push)b="array";switch(b){case "string":a=a.replace(new RegExp('(["\\\\])',"g"),"\\$1");a=a.replace(/^\s?(\d+\.?\d+)%/,"$1pct");return'"'+a+'"';case "array":return"["+l(a,function(d){return e.asString(d)}).join(",")+"]";case "function":return'"function()"';case "object":b=[];for(var c in a)a.hasOwnProperty(c)&&b.push('"'+c+'":'+e.asString(a[c]));return"{"+b.join(",")+"}"}return String(a).replace(/\s/g,
" ").replace(/\'/g,'"')},getHTML:function(a,b){a=f({},a);var c='<object width="'+a.width+'" height="'+a.height+'" id="'+a.id+'" name="'+a.id+'"';if(a.cachebusting)a.src+=(a.src.indexOf("?")!=-1?"&":"?")+Math.random();c+=a.w3c||!i?' data="'+a.src+'" type="application/x-shockwave-flash"':' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';c+=">";if(a.w3c||i)c+='<param name="movie" value="'+a.src+'" />';a.width=a.height=a.id=a.w3c=a.src=null;a.onFail=a.version=a.expressInstall=null;for(var d in a)if(a[d])c+=
'<param name="'+d+'" value="'+a[d]+'" />';a="";if(b){for(var h in b)if(b[h]){d=b[h];a+=h+"="+(/function|object/.test(typeof d)?e.asString(d):d)+"&"}a=a.slice(0,-1);c+='<param name="flashvars" value=\''+a+"' />"}c+="</object>";return c},isSupported:function(a){return g[0]>a[0]||g[0]==a[0]&&g[1]>=a[1]}}),g=e.getVersion();if(n){jQuery.tools=jQuery.tools||{version:"1.2.4"};jQuery.tools.flashembed={conf:j};jQuery.fn.flashembed=function(a,b){return this.each(function(){$(this).data("flashembed",flashembed(this,
a,b))})}}})();
(function(b){function h(c){if(c){var a=d.contentWindow.document;a.open().close();a.location.hash=c}}var g,d,f,i;b.tools=b.tools||{version:"1.2.4"};b.tools.history={init:function(c){if(!i){if(b.browser.msie&&b.browser.version<"8"){if(!d){d=b("<iframe/>").attr("src","javascript:false;").hide().get(0);b("body").append(d);setInterval(function(){var a=d.contentWindow.document;a=a.location.hash;g!==a&&b.event.trigger("hash",a)},100);h(location.hash||"#")}}else setInterval(function(){var a=location.hash;
a!==g&&b.event.trigger("hash",a)},100);f=!f?c:f.add(c);c.click(function(a){var e=b(this).attr("href");d&&h(e);if(e.slice(0,1)!="#"){location.href="#"+e;return a.preventDefault()}});i=true}}};b(window).bind("hash",function(c,a){a?f.filter(function(){var e=b(this).attr("href");return e==a||e==a.replace("#","")}).trigger("history",[a]):f.eq(0).trigger("history",[a]);g=a;window.location.hash=g});b.fn.history=function(c){b.tools.history.init(this);return this.bind("history",c)}})(jQuery);
(function(b){function k(){if(b.browser.msie){var a=b(document).height(),d=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a-d<20?d:a]}return[b(document).width(),b(document).height()]}function h(a){if(a)return a.call(b.mask)}b.tools=b.tools||{version:"1.2.4"};var l;l=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var c,i,e,g,j;b.mask={load:function(a,d){if(e)return this;if(typeof a=="string")a={color:a};a=a||g;g=a=b.extend(b.extend({},l.conf),a);c=b("#"+a.maskId);if(!c.length){c=b("<div/>").attr("id",a.maskId);b("body").append(c)}var m=k();c.css({position:"absolute",top:0,left:0,width:m[0],height:m[1],display:"none",opacity:a.startOpacity,zIndex:a.zIndex});a.color&&c.css("backgroundColor",a.color);if(h(a.onBeforeLoad)===false)return this;a.closeOnEsc&&b(document).bind("keydown.mask",function(f){f.keyCode==
27&&b.mask.close(f)});a.closeOnClick&&c.bind("click.mask",function(f){b.mask.close(f)});b(window).bind("resize.mask",function(){b.mask.fit()});if(d&&d.length){j=d.eq(0).css("zIndex");b.each(d,function(){var f=b(this);/relative|absolute|fixed/i.test(f.css("position"))||f.css("position","relative")});i=d.css({zIndex:Math.max(a.zIndex+1,j=="auto"?0:j)})}c.css({display:"block"}).fadeTo(a.loadSpeed,a.opacity,function(){b.mask.fit();h(a.onLoad);e="full"});e=true;return this},close:function(){if(e){if(h(g.onBeforeClose)===
false)return this;c.fadeOut(g.closeSpeed,function(){h(g.onClose);i&&i.css({zIndex:j});e=false});b(document).unbind("keydown.mask");c.unbind("click.mask");b(window).unbind("resize.mask")}return this},fit:function(){if(e){var a=k();c.css({width:a[0],height:a[1]})}},getMask:function(){return c},isLoaded:function(a){return a?e=="full":e},getConf:function(){return g},getExposed:function(){return i}};b.fn.mask=function(a){b.mask.load(a);return this};b.fn.expose=function(a){b.mask.load(a,this);return this}})(jQuery);
(function(b){function c(a){switch(a.type){case "mousemove":return b.extend(a.data,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY});case "DOMMouseScroll":b.extend(a,a.data);a.delta=-a.detail/3;break;case "mousewheel":a.delta=a.wheelDelta/120;break}a.type="wheel";return b.event.handle.call(this,a,a.delta)}b.fn.mousewheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};b.event.special.wheel={setup:function(){b.event.add(this,d,c,{})},teardown:function(){b.event.remove(this,
d,c)}};var d=!b.browser.mozilla?"mousewheel":"DOMMouseScroll"+(b.browser.version<"1.9"?" mousemove":"")})(jQuery);


/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate$
 * $Rev$
 *
 * Version 2.1.1
 */

(function($){

/**
 * The bgiframe is chainable and applies the iframe hack to get 
 * around zIndex issues in IE6. It will only apply itself in IE6 
 * and adds a class to the iframe called 'bgiframe'. The iframe
 * is appeneded as the first child of the matched element(s) 
 * with a tabIndex and zIndex of -1.
 * 
 * By default the plugin will take borders, sized with pixel units,
 * into account. If a different unit is used for the border's width,
 * then you will need to use the top and left settings as explained below.
 *
 * NOTICE: This plugin has been reported to cause perfromance problems
 * when used on elements that change properties (like width, height and
 * opacity) a lot in IE6. Most of these problems have been caused by 
 * the expressions used to calculate the elements width, height and 
 * borders. Some have reported it is due to the opacity filter. All 
 * these settings can be changed if needed as explained below.
 *
 * @example $('div').bgiframe();
 * @before <div><p>Paragraph</p></div>
 * @result <div><iframe class="bgiframe".../><p>Paragraph</p></div>
 *
 * @param Map settings Optional settings to configure the iframe.
 * @option String|Number top The iframe must be offset to the top
 * 		by the width of the top border. This should be a negative 
 *      number representing the border-top-width. If a number is 
 * 		is used here, pixels will be assumed. Otherwise, be sure
 *		to specify a unit. An expression could also be used. 
 * 		By default the value is "auto" which will use an expression 
 * 		to get the border-top-width if it is in pixels.
 * @option String|Number left The iframe must be offset to the left
 * 		by the width of the left border. This should be a negative 
 *      number representing the border-left-width. If a number is 
 * 		is used here, pixels will be assumed. Otherwise, be sure
 *		to specify a unit. An expression could also be used. 
 * 		By default the value is "auto" which will use an expression 
 * 		to get the border-left-width if it is in pixels.
 * @option String|Number width This is the width of the iframe. If
 *		a number is used here, pixels will be assume. Otherwise, be sure
 * 		to specify a unit. An experssion could also be used.
 *		By default the value is "auto" which will use an experssion
 * 		to get the offsetWidth.
 * @option String|Number height This is the height of the iframe. If
 *		a number is used here, pixels will be assume. Otherwise, be sure
 * 		to specify a unit. An experssion could also be used.
 *		By default the value is "auto" which will use an experssion
 * 		to get the offsetHeight.
 * @option Boolean opacity This is a boolean representing whether or not
 * 		to use opacity. If set to true, the opacity of 0 is applied. If
 *		set to false, the opacity filter is not applied. Default: true.
 * @option String src This setting is provided so that one could change 
 *		the src of the iframe to whatever they need.
 *		Default: "javascript:false;"
 *
 * @name bgiframe
 * @type jQuery
 * @cat Plugins/bgiframe
 * @author Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 */
$.fn.bgIframe = $.fn.bgiframe = function(s) {
	// This is only for IE6
	if ( $.browser.msie && /6.0/.test(navigator.userAgent) ) {
		s = $.extend({
			top     : 'auto', // auto == .currentStyle.borderTopWidth
			left    : 'auto', // auto == .currentStyle.borderLeftWidth
			width   : 'auto', // auto == offsetWidth
			height  : 'auto', // auto == offsetHeight
			opacity : true,
			src     : 'javascript:false;'
		}, s || {});
		var prop = function(n){return n&&n.constructor==Number?n+'px':n;},
		    html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
		               'style="display:block;position:absolute;z-index:-1;'+
			               (s.opacity !== false?'filter:Alpha(Opacity=\'0\');':'')+
					       'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+
					       'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+
					       'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+
					       'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+
					'"/>';
		return this.each(function() {
			if ( $('> iframe.bgiframe', this).length == 0 )
				this.insertBefore( document.createElement(html), this.firstChild );
		});
	}
	return this;
};

})(jQuery);




/* Copyright (c) 2007 Paul Bakaus (paul.bakaus@googlemail.com) and Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate$
 * $Rev$
 *
 * Version: @VERSION
 *
 * Requires: jQuery 1.2+
 */

(function($){
	
$.dimensions = {
	version: '@VERSION'
};

// Create innerHeight, innerWidth, outerHeight and outerWidth methods
$.each( [ 'Height', 'Width' ], function(i, name){
	
	// innerHeight and innerWidth
	$.fn[ 'inner' + name ] = function() {
		if (!this[0]) return;
		
		var torl = name == 'Height' ? 'Top'    : 'Left',  // top or left
		    borr = name == 'Height' ? 'Bottom' : 'Right'; // bottom or right
		
		return this.is(':visible') ? this[0]['client' + name] : num( this, name.toLowerCase() ) + num(this, 'padding' + torl) + num(this, 'padding' + borr);
	};
	
	// outerHeight and outerWidth
	$.fn[ 'outer' + name ] = function(options) {
		if (!this[0]) return;
		
		var torl = name == 'Height' ? 'Top'    : 'Left',  // top or left
		    borr = name == 'Height' ? 'Bottom' : 'Right'; // bottom or right
		
		options = $.extend({ margin: false }, options || {});
		
		var val = this.is(':visible') ? 
				this[0]['offset' + name] : 
				num( this, name.toLowerCase() )
					+ num(this, 'border' + torl + 'Width') + num(this, 'border' + borr + 'Width')
					+ num(this, 'padding' + torl) + num(this, 'padding' + borr);
		
		return val + (options.margin ? (num(this, 'margin' + torl) + num(this, 'margin' + borr)) : 0);
	};
});

// Create scrollLeft and scrollTop methods
$.each( ['Left', 'Top'], function(i, name) {
	$.fn[ 'scroll' + name ] = function(val) {
		if (!this[0]) return;
		
		return val != undefined ?
		
			// Set the scroll offset
			this.each(function() {
				this == window || this == document ?
					window.scrollTo( 
						name == 'Left' ? val : $(window)[ 'scrollLeft' ](),
						name == 'Top'  ? val : $(window)[ 'scrollTop'  ]()
					) :
					this[ 'scroll' + name ] = val;
			}) :
			
			// Return the scroll offset
			this[0] == window || this[0] == document ?
				self[ (name == 'Left' ? 'pageXOffset' : 'pageYOffset') ] ||
					$.boxModel && document.documentElement[ 'scroll' + name ] ||
					document.body[ 'scroll' + name ] :
				this[0][ 'scroll' + name ];
	};
});

$.fn.extend({
	position: function() {
		var left = 0, top = 0, elem = this[0], offset, parentOffset, offsetParent, results;
		
		if (elem) {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();
			
			// Get correct offsets
			offset       = this.offset();
			parentOffset = offsetParent.offset();
			
			// Subtract element margins
			offset.top  -= num(elem, 'marginTop');
			offset.left -= num(elem, 'marginLeft');
			
			// Add offsetParent borders
			parentOffset.top  += num(offsetParent, 'borderTopWidth');
			parentOffset.left += num(offsetParent, 'borderLeftWidth');
			
			// Subtract the two offsets
			results = {
				top:  offset.top  - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
		
		return results;
	},
	
	offsetParent: function() {
		var offsetParent = this[0].offsetParent;
		while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && $.css(offsetParent, 'position') == 'static') )
			offsetParent = offsetParent.offsetParent;
		return $(offsetParent);
	}
});

function num(el, prop) {
	return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0;
};

})(jQuery);



/*
 * positionBy 1.0.7 (2008-01-29)
 *
 * Copyright (c) 2006,2007 Jonathan Sharp (http://jdsharp.us)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://jdsharp.us/
 *
 * Built upon jQuery 1.2.2 (http://jquery.com)
 * This also requires the jQuery dimensions plugin
 */
(function($){
	/**
	 * This function centers an absolutely positioned element
	 */
	/*
	$.fn.positionCenter = function(offsetLeft, offsetTop) {
		var offsetLeft 	= offsetLeft || 1;
		var offsetTop 	= offsetTop || 1;

		var ww = $(window).width();
		var wh = $(window).height();
		var sl = $(window).scrollLeft();
		var st = $(window).scrollTop();

		return this.each(function() {
			var $t = $(this);
			
			// If we are not visible we have to display our element (with a negative position offscreen)

			var left = Math.round( ( ww - $t.outerWidth() ) / 2 );
			if ( left < 0 ) {
				left = 0;
			} else {
				left *= offsetLeft;
			}
			left += sl;
			var top  = Math.round( ( wh - $t.outerHeight() ) / 2 );
			if ( top < 0 ) {
				top = 0;
			} else {
				top *= offsetTop;
			}
			top += st;

			$(this).parents().each(function() {
				var $this = $(this);
				if ( $this.css('position') != 'static' ) {
					var o = $this.offset();
					left += -o.left;
					top	 += -o.top;
					return false;
				}
			});

			$t.css({left: left, top: top});
		});
	};
	*/
	
	// Our range object is used in calculating positions
	var Range = function(x1, y1, x2, y2) {
		this.x1	= x1;	this.x2 = x2;
		this.y1 = y1;	this.y2 = y2;
	};
	Range.prototype.contains = function(range) {
		return 	(this.x1 <= range.x1 && range.x2 <= this.x2) 
				&& 
				(this.y1 <= range.y1 && range.y2 <= this.y2);
	};
	Range.prototype.transform = function(x, y) {
		return new Range(this.x1 + x, this.y1 + y, this.x2 + x, this.y2 + y);
	};

	$.fn.positionBy = function(args) {
		var date1 = new Date();
		if ( this.length == 0 ) {
			return this;
		}
		
		var args = $.extend({	// The target element to position us relative to
								target:		null,
								// The target's corner, possible values 0-3
								targetPos:	null,
								// The element's corner, possible values 0-3
								elementPos:	null,
								
								// A raw x,y coordinate
								x:			null,
								y:			null,

								// Pass in an array of positions that are valid 0-15
								positions:	null,

								// Add the final position class to the element (eg. positionBy0 through positionBy3, positionBy15)
								addClass: 	false,
								
								// Force our element to be at the location we specified (don't try to auto position it)
								force: 		false,
								
								// The element that we will make sure our element doesn't go outside of
								container: 	window,

								// Should the element be hidden after positioning?
								hideAfterPosition: false
							}, args);

		if ( args.x != null ) {
			var tLeft	= args.x;
			var tTop	= args.y;
			var tWidth	= 0;
			var tHeight	= 0;
			
		// Position in relation to an element
		} else {
			var $target	= $( $( args.target )[0] );
			var tWidth	= $target.outerWidth();
			var tHeight	= $target.outerHeight();
			var tOffset	= $target.offset();
			var tLeft	= tOffset.left;
			var tTop	= tOffset.top;
		}

		// Our target right, bottom coord
		var tRight	= tLeft + tWidth;
		var tBottom	= tTop + tHeight;

		return this.each(function() {
			var $element = $( this );

			// Position our element in the top left so we can grab its width without triggering scrollbars
			if ( !$element.is(':visible') ) {
				$element.css({	left:  		-3000, 
								top: 		-3000
								})
								.show();
			}

			var eWidth	= $element.outerWidth();
			var eHeight	= $element.outerHeight();
	
			// Holds x1,y1,x2,y2 coordinates for a position in relation to our target element
			var position = [];
			// Holds a list of alternate positions to try if this one is not in the browser viewport
			var next	 = [];
	
			// Our Positions via ASCII ART
			/*
   	      	 8   9       10   11
			   +------------+
			 7 | 15      12 | 0
			   |            |
			 6 | 14      13 | 1
			   +------------+ 
			 5   4        3   2
	
			 */

			position[0]	= new Range(tRight, 			tTop, 				tRight + eWidth, 	tTop + eHeight);
			next[0]		= [1,7,4];
		
			position[1]	= new Range(tRight, 			tBottom - eHeight, 	tRight + eWidth, 	tBottom);
			next[1]		= [0,6,4];
		
			position[2] = new Range(tRight, 			tBottom,			tRight + eWidth, 	tBottom + eHeight);
			next[2]		= [1,3,10];
		
			position[3] = new Range(tRight - eWidth, 	tBottom,			tRight, 			tBottom + eHeight);
			next[3]		= [1,6,10];
			
			position[4] = new Range(tLeft, 				tBottom,			tLeft + eWidth, 	tBottom + eHeight);
			next[4]		= [1,6,9];
		
			position[5] = new Range(tLeft - eWidth, 	tBottom, 			tLeft, 				tBottom + eHeight);
			next[5]		= [6,4,9];
		
			position[6] = new Range(tLeft - eWidth, 	tBottom - eHeight,	tLeft, 				tBottom);
			next[6]		= [7,1,4];
			
			position[7] = new Range(tLeft - eWidth, 	tTop,				tLeft, 				tTop + eHeight);
			next[7]		= [6,0,4];
			
			position[8] = new Range(tLeft - eWidth, 	tTop - eHeight,		tLeft, 				tTop);
			next[8]		= [7,9,4];
			
			position[9] = new Range(tLeft, 				tTop - eHeight,		tLeft + eWidth, 	tTop);
			next[9]		= [0,7,4];
			
			position[10]= new Range(tRight - eWidth, 	tTop - eHeight,		tRight, 			tTop);
			next[10]	= [0,7,3];
		
			position[11]= new Range(tRight, 			tTop - eHeight, 	tRight + eWidth, 	tTop);
			next[11]	= [0,10,3];
			
			position[12]= new Range(tRight - eWidth, 	tTop,				tRight, 			tTop + eHeight);
			next[12]	= [13,7,10];
			
			position[13]= new Range(tRight - eWidth, 	tBottom - eHeight,	tRight, 			tBottom);
			next[13]	= [12,6,3];
			
			position[14]= new Range(tLeft, 				tBottom - eHeight,	tLeft + eWidth, 	tBottom);
			next[14]	= [15,1,4];
			
			position[15]= new Range(tLeft, 				tTop,				tLeft + eWidth, 	tTop + eHeight);
			next[15]	= [14,0,9];
	
			if ( args.positions !== null ) {
				var pos = args.positions[0];
			} else if ( args.targetPos != null && args.elementPos != null ) {
				var pos = [];
				pos[0] = [];
				pos[0][0] = 15;
				pos[0][1] = 7;
				pos[0][2] = 8;
				pos[0][3] = 9;
				pos[1] = [];
				pos[1][0] = 0;
				pos[1][1] = 12;
				pos[1][2] = 10;
				pos[1][3] = 11;
				pos[2] = [];
				pos[2][0] = 2;
				pos[2][1] = 3;
				pos[2][2] = 13;
				pos[2][3] = 1;
				pos[3] = [];
				pos[3][0] = 4;
				pos[3][1] = 5;
				pos[3][2] = 6;
				pos[3][3] = 14;

				var pos = pos[args.targetPos][args.elementPos];
			}
			var ePos = position[pos];
			var fPos = pos;

			if ( !args.force ) {
				// TODO: Do the args.container
				// window width & scroll offset
				$window = $( window );
				var sx = $window.scrollLeft();
				var sy = $window.scrollTop();
				
				// TODO: Look at innerWidth & innerHeight
				var container = new Range( sx, sy, sx + $window.width(), sy + $window.height() );
	
				// If we are outside of our viewport, see if we are outside vertically or horizontally and push onto the stack
				var stack;
				if ( args.positions ) {
					stack = args.positions;
				} else {
					stack = [pos];
				}
				var test = [];		// Keeps track of our positions we already tried
				
				while ( stack.length > 0 ) {
					var p = stack.shift();
					if ( test[p] ) {
						continue;
					}
					test[p] = true;
	
					// If our current position is not within the viewport (eg. window) 
					// add the next suggested position
					if ( !container.contains(position[p]) ) {
						if ( args.positions === null ) {
							stack = jQuery.merge( stack, next[p] );
						}
					} else {
						ePos = position[p];
						break;
					}
				}
			}

			// + TODO: Determine if we are going to use absolute left, top, bottom, right 
			// positions relative to our target
		
			// Take into account any absolute or fixed positioning
			// to 'normalize' our coordinates
			$element.parents().each(function() {
				var $this = $(this);
				if ( $this.css('position') != 'static' ) {
					var abs = $this.offset();
					ePos = ePos.transform( -abs.left, -abs.top );
					return false;
				}
			});
		
			// Finally position our element
			var css = { left: ePos.x1, top: ePos.y1 };
			if ( args.hideAfterPosition ) {
				css['display'] = 'none';
			}
			$element.css( css );

			if ( args.addClass ) {
				$element.removeClass( 'positionBy0 positionBy1 positionBy2 positionBy3 positionBy4 positionBy5 '
									+ 'positionBy6 positionBy7 positionBy8 positionBy9 positionBy10 positionBy11 '
									+ 'positionBy12 positionBy13 positionBy14 positionBy15')
						.addClass('positionBy' + p);
			}
		});
	};
})(jQuery);


/*
 * jdMenu 1.4.1 (2008-03-31)
 *
 * Copyright (c) 2006,2007 Jonathan Sharp (http://jdsharp.us)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://jdsharp.us/
 *
 * Built upon jQuery 1.2.1 (http://jquery.com)
 * This also requires the jQuery dimensions >= 1.2 plugin
 */

// This initializes the menu
$(function() {
	$('ul.jd_menu').jdMenu();
});

(function($){
	function addEvents(ul) {
		var settings = $.data( $(ul).parents().andSelf().filter('ul.jd_menu')[0], 'jdMenuSettings' );
		$('> li', ul)
			.bind('mouseenter.jdmenu mouseleave.jdmenu', function(evt) {
				$(this).toggleClass('jdm_hover');
				var ul = $('> ul', this);
				if ( ul.length == 1 ) {
					clearTimeout( this.$jdTimer );
					var enter = ( evt.type == 'mouseenter' );
					var fn = ( enter ? showMenu : hideMenu );
					this.$jdTimer = setTimeout(function() {
						fn( ul[0], settings.onAnimate, settings.isVertical );
					}, enter ? settings.showDelay : settings.hideDelay );
				}
			})
			.bind('click.jdmenu', function(evt) {
				var ul = $('> ul', this);
				if ( ul.length == 1 && 
					( settings.disableLinks == true || $(this).hasClass('accessible') ) ) {
					showMenu( ul, settings.onAnimate, settings.isVertical );
					return false;
				}
				
				// The user clicked the li and we need to trigger a click for the a
				if ( evt.target == this ) {
					var link = $('> a', evt.target).not('.accessible');
					if ( link.length > 0 ) {
						var a = link[0];
						if ( !a.onclick ) {
							window.open( a.href, a.target || '_self' );
						} else {
							$(a).trigger('click');
						}
					}
				}
				if ( settings.disableLinks || 
					( !settings.disableLinks && !$(this).parent().hasClass('jd_menu') ) ) {
					$(this).parent().jdMenuHide();
					evt.stopPropagation();
				}
			})
			.find('> a')
				.bind('focus.jdmenu blur.jdmenu', function(evt) {
					var p = $(this).parents('li:eq(0)');
					if ( evt.type == 'focus' ) {
						p.addClass('jdm_hover');
					} else { 
						p.removeClass('jdm_hover');
					}
				})
				.filter('.accessible')
					.bind('click.jdmenu', function(evt) {
						evt.preventDefault();
					});
	}

	function showMenu(ul, animate, vertical) {
		var ul = $(ul);
		if ( ul.is(':visible') ) {
			return;
		}
		ul.bgiframe();
		var li = ul.parent();
		ul	.trigger('jdMenuShow')
			.positionBy({ 	target: 	li[0], 
							targetPos: 	( vertical === true || !li.parent().hasClass('jd_menu') ? 1 : 3 ), 
							elementPos: 0,
							hideAfterPosition: true
							});
		if ( !ul.hasClass('jdm_events') ) {
			ul.addClass('jdm_events');
			addEvents(ul);
		}
		li	.addClass('jdm_active')
			// Hide any adjacent menus
			.siblings('li').find('> ul:eq(0):visible')
				.each(function(){
					hideMenu( this ); 
				});
		if ( animate === undefined ) {
			ul.show();
		} else {
			animate.apply( ul[0], [true] );
		}
	}
	
	function hideMenu(ul, animate) {
		var ul = $(ul);
		$('.bgiframe', ul).remove();
		ul	.filter(':not(.jd_menu)')
			.find('> li > ul:eq(0):visible')
				.each(function() {
					hideMenu( this );
				})
			.end();
		if ( animate === undefined ) {
			ul.hide()
		} else {
			animate.apply( ul[0], [false] );
		}

		ul	.trigger('jdMenuHide')
			.parents('li:eq(0)')
				.removeClass('jdm_active jdm_hover')
			.end()
				.find('> li')
				.removeClass('jdm_active jdm_hover');
	}
	
	// Public methods
	$.fn.jdMenu = function(settings) {
		// Future settings: activateDelay
		var settings = $.extend({	// Time in ms before menu shows
									showDelay: 		200,
									// Time in ms before menu hides
									hideDelay: 		500,
									// Should items that contain submenus not 
									// respond to clicks
									disableLinks:	true
									// This callback allows for you to animate menus
									//onAnimate:	null
									}, settings);
		if ( !$.isFunction( settings.onAnimate ) ) {
			settings.onAnimate = undefined;
		}
		return this.filter('ul.jd_menu').each(function() {
			$.data(	this, 
					'jdMenuSettings', 
					$.extend({ isVertical: $(this).hasClass('jd_menu_vertical') }, settings) 
					);
			addEvents(this);
		});
	};
	
	$.fn.jdMenuUnbind = function() {
		$('ul.jdm_events', this)
			.unbind('.jdmenu')
			.find('> a').unbind('.jdmenu');
	};
	$.fn.jdMenuHide = function() {
		return this.filter('ul').each(function(){ 
			hideMenu( this );
		});
	};

	// Private methods and logic
	$(window)
		// Bind a click event to hide all visible menus when the document is clicked
		.bind('click.jdmenu', function(){
			$('ul.jd_menu ul:visible').jdMenuHide();
		});
})(jQuery);


DateInput = (function($) { // Localise the $ function

function DateInput(el, opts) {
  if (typeof(opts) != "object") opts = {};
  $.extend(this, DateInput.DEFAULT_OPTS, opts);
  
  this.input = $(el);
  this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate");
  
  this.build();
  this.selectDate();
  this.hide();
};
DateInput.DEFAULT_OPTS = {
  month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  short_month_names: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  short_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  start_of_week: 1
};
DateInput.prototype = {
  build: function() {
    var monthNav = $('<p class="month_nav">' +
      '<span class="button prev" title="[Page-Up]">&#171;</span>' +
      ' <span class="month_name"></span> ' +
      '<span class="button next" title="[Page-Down]">&#187;</span>' +
      '</p>');
    this.monthNameSpan = $(".month_name", monthNav);
    $(".prev", monthNav).click(this.bindToObj(function() { this.moveMonthBy(-1); }));
    $(".next", monthNav).click(this.bindToObj(function() { this.moveMonthBy(1); }));
    
    var yearNav = $('<p class="year_nav">' +
      '<span class="button prev" title="[Ctrl+Page-Up]">&#171;</span>' +
      ' <span class="year_name"></span> ' +
      '<span class="button next" title="[Ctrl+Page-Down]">&#187;</span>' +
      '</p>');
    this.yearNameSpan = $(".year_name", yearNav);
    $(".prev", yearNav).click(this.bindToObj(function() { this.moveMonthBy(-12); }));
    $(".next", yearNav).click(this.bindToObj(function() { this.moveMonthBy(12); }));
    
    var nav = $('<div class="nav"></div>').append(monthNav, yearNav);
    
    var tableShell = "<table><thead><tr>";
    $(this.adjustDays(this.short_day_names)).each(function() {
      tableShell += "<th>" + this + "</th>";
    });
    tableShell += "</tr></thead><tbody></tbody></table>";
    
    this.dateSelector = this.rootLayers = $('<div class="date_selector"></div>').append(nav, tableShell).insertAfter(this.input);
    
    if ($.browser.msie && $.browser.version < 7) {
      // The ieframe is a hack which works around an IE <= 6 bug where absolutely positioned elements
      // appear behind select boxes. Putting an iframe over the top of the select box prevents this.
      this.ieframe = $('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector);
      this.rootLayers = this.rootLayers.add(this.ieframe);
      
      // IE 6 only does :hover on A elements
      $(".button", nav).mouseover(function() { $(this).addClass("hover") });
      $(".button", nav).mouseout(function() { $(this).removeClass("hover") });
    };
    
    this.tbody = $("tbody", this.dateSelector);
    
    this.input.change(this.bindToObj(function() { this.selectDate(); }));
    this.selectDate();
  },

  selectMonth: function(date) {
    var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    
    if (!this.currentMonth || !(this.currentMonth.getFullYear() == newMonth.getFullYear() &&
                                this.currentMonth.getMonth() == newMonth.getMonth())) {
      // We have moved to a different month and so need to re-draw the table
      this.currentMonth = newMonth;
      
      // Work out the range of days we will draw
      var rangeStart = this.rangeStart(date), rangeEnd = this.rangeEnd(date);
      var numDays = this.daysBetween(rangeStart, rangeEnd);
      var dayCells = "";
      
      // Draw each of the days
      for (var i = 0; i <= numDays; i++) {
        var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i, 12, 00);
        
        if (this.isFirstDayOfWeek(currentDay)) dayCells += "<tr>";
        
        if (currentDay.getMonth() == date.getMonth()) {
          dayCells += '<td class="selectable_day" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
        } else {
          dayCells += '<td class="unselected_month" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
        };
        
        if (this.isLastDayOfWeek(currentDay)) dayCells += "</tr>";
      };
      this.tbody.empty().append(dayCells);
      
      // Write the month and year in the header
      this.monthNameSpan.empty().append(this.monthName(date));
      this.yearNameSpan.empty().append(this.currentMonth.getFullYear());
      
      $(".selectable_day", this.tbody).click(this.bindToObj(function(event) {
        this.changeInput($(event.target).attr("date"));
      }));
      
      $("td[date=" + this.dateToString(new Date()) + "]", this.tbody).addClass("today");
      
      $("td.selectable_day", this.tbody).mouseover(function() { $(this).addClass("hover") });
      $("td.selectable_day", this.tbody).mouseout(function() { $(this).removeClass("hover") });
    };
    
    $('.selected', this.tbody).removeClass("selected");
    $('td[date=' + this.selectedDateString + ']', this.tbody).addClass("selected");
  },
  
  // Select a particular date. If the date is not specified it is read from the input. If no date is
  // found then the current date is selected. The selectMonth() function is responsible for actually
  // selecting a particular date.
  selectDate: function(date) {
    if (typeof(date) == "undefined") {
      date = this.stringToDate(this.input.val());
    };
    if (!date) date = new Date();
    
    this.selectedDate = date;
    this.selectedDateString = this.dateToString(this.selectedDate);
    this.selectMonth(this.selectedDate);
  },
  
  // Write a date string to the input and hide. Trigger the change event so we know to update the
  // selectedDate.
  changeInput: function(dateString) {
    this.input.val(dateString).change();
    this.hide();
  },
  
  show: function() {
    this.rootLayers.css("display", "block");
    $([window, document.body]).click(this.hideIfClickOutside);
    this.input.unbind("focus", this.show);
    $(document.body).keydown(this.keydownHandler);
    this.setPosition();
  },
  
  hide: function() {
    this.rootLayers.css("display", "none");
    $([window, document.body]).unbind("click", this.hideIfClickOutside);
    this.input.focus(this.show);
    $(document.body).unbind("keydown", this.keydownHandler);
  },
  
  // We should hide the date selector if a click event happens outside of it
  hideIfClickOutside: function(event) {
    if (event.target != this.input[0] && !this.insideSelector(event)) {
      this.hide();
    };
  },
  
  // Returns true if the given event occurred inside the date selector
  insideSelector: function(event) {
    var offset = this.dateSelector.position();
    offset.right = offset.left + this.dateSelector.outerWidth();
    offset.bottom = offset.top + this.dateSelector.outerHeight();
    
    return event.pageY < offset.bottom &&
           event.pageY > offset.top &&
           event.pageX < offset.right &&
           event.pageX > offset.left;
  },
  
  // Respond to various different keyboard events
  keydownHandler: function(event) {
    switch (event.keyCode)
    {
      case 9: // tab
      case 27: // esc
        this.hide();
        return;
      break;
      case 13: // enter
        this.changeInput(this.selectedDateString);
      break;
      case 33: // page up
        this.moveDateMonthBy(event.ctrlKey ? -12 : -1);
      break;
      case 34: // page down
        this.moveDateMonthBy(event.ctrlKey ? 12 : 1);
      break;
      case 38: // up
        this.moveDateBy(-7);
      break;
      case 40: // down
        this.moveDateBy(7);
      break;
      case 37: // left
        this.moveDateBy(-1);
      break;
      case 39: // right
        this.moveDateBy(1);
      break;
      default:
        return;
    }
    event.preventDefault();
  },
  
  stringToDate: function(string) {
    var matches;
    if (matches = string.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4,4})$/)) {
      // return new Date(matches[3], /*this.shortMonthNum(matches[2])*/matches[2], matches[1], 12, 00);
      return new Date(matches[3], parseInt(matches[2]) - 1, matches[1], 12, 00);
    } else {
      return null;
    };
  },
  
  dateToString: function(date) {
	var g = '0' + date.getDate(); if(g.length>2) g = g.substr(1,2);
	var a = '0' + (date.getMonth()+1); if(a.length>2) a = a.substr(1,2);
    return  g + "." + a + "." + date.getFullYear();
    // return  g + "." + /*this.short_month_names[date.getMonth()]*/(date.getMonth()+1) + "." + date.getFullYear();
  },
  
  setPosition: function() {
    var offset = this.input.offset();
    this.rootLayers.css({
      top: offset.top + this.input.outerHeight(),
      left: offset.left
    });
    
    if (this.ieframe) {
      this.ieframe.css({
        width: this.dateSelector.outerWidth(),
        height: this.dateSelector.outerHeight()
      });
    };
  },
  
  // Move the currently selected date by a particular number of days
  moveDateBy: function(amount) {
    var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate() + amount);
    this.selectDate(newDate);
  },
  
  // Move the month of the currently selected date by a particular number of months. If we are moving
  // to a month which does not have enough days to represent the current day-of-month, then we 
  // default to the last day of the month.
  moveDateMonthBy: function(amount) {
    var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + amount, this.selectedDate.getDate());
    if (newDate.getMonth() == this.selectedDate.getMonth() + amount + 1) {
      // We have moved too far. For instance 31st March + 1 month = 1st May, not 30th April
      newDate.setDate(0);
    };
    this.selectDate(newDate);
  },
  
  // Move the currently displayed month by a certain amount. This does *not* move the currently
  // selected date, so we end up viewing a month with no visibly selected date.
  moveMonthBy: function(amount) {
    var newMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + amount, this.currentMonth.getDate());
    this.selectMonth(newMonth);
  },
  
  monthName: function(date) {
    return this.month_names[date.getMonth()];
  },
  
  // A hack to make "this" refer to this object instance when inside the given function
  bindToObj: function(fn) {
    var self = this;
    return function() { return fn.apply(self, arguments) };
  },
  
  // See above
  bindMethodsToObj: function() {
    for (var i = 0; i < arguments.length; i++) {
      this[arguments[i]] = this.bindToObj(this[arguments[i]]);
    };
  },
  
  // Finds out the array index of a particular value in that array
  indexFor: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value == array[i]) return i;
    };
  },
  
  // Finds the number of a given month name
  monthNum: function(month_name) {
    return this.indexFor(this.month_names, month_name);
  },
  
  // Finds the number of a given short month name
  shortMonthNum: function(month_name) {
    return this.indexFor(this.short_month_names, month_name);
  },
  
  // Finds the number of a given day name
  shortDayNum: function(day_name) {
    return this.indexFor(this.short_day_names, day_name);
  },
  
  // Works out the number of days between two dates
  daysBetween: function(start, end) {
    start = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    end = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    return (end - start) / 86400000;
  },
  
  /*
  changeDayTo: Given a date, move along the date line in the given direction until we reach the
  desired day of week.
  
  The maths is a bit complex, here's an explanation.
  
  Think of a continuous repeating number line like:
  
  .. 5 6 0 1 2 3 4 5 6 0 1 2 3 4 5 6 0 1 ..
  
  We are essentially trying to find the difference between two numbers
  on the line in one direction (dictated by the sign of direction variable).
  Unfortunately Javascript's modulo operator works such that -5 % 7 = -5,
  instead of -5 % 7 = 2, so we need to only work with the positives.
  
  To find the difference between 1 and 4, going backwards, we can treat 1
  as (1 + 7) = 8, so the different is |8 - 4| = 4. If we don't cross the 
  boundary between 0 and 6, for instance to find the backwards difference
  between 5 and 2, |(5 + 7) - 2| = |12 - 2| = 10. And 10 % 7 = 3.
  
  Going forwards, to find the difference between 4 and 1, we again treat 1
  as (1 + 7) = 8, and the difference is |4 - 8| = 4. If we don't cross the
  boundary, the difference between 2 and 5 is |2 - (5 + 7)| = |2 - 12| = 10.
  And 10 % 7 = 3.
  
  Once we have the positive difference in either direction represented as a
  absolute value, we can multiply it by the direction variable to get the difference
  in the desired direction.
  
  We can condense the two methods into a single equation:
  
    backwardsDifference = direction * (|(currentDayNum + 7) - dayOfWeek| % 7)
                        = direction * (|currentDayNum - dayOfWeek + 7|  % 7)
    
     forwardsDifference = direction * (|currentDayNum - (dayOfWeek + 7)| % 7)
                        = direction * (|currentDayNum - dayOfWeek - 7| % 7)
    
    (The two equations now differ only by the +/- 7)
    
             difference = direction * (|currentDayNum - dayOfWeek - (direction * 7)| % 7)
  */
  changeDayTo: function(dayOfWeek, date, direction) {
    var difference = direction * (Math.abs(date.getDay() - dayOfWeek - (direction * 7)) % 7);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + difference);
  },
  
  // Given a date, return the day at the start of the week *before* this month
  rangeStart: function(date) {
    return this.changeDayTo(this.start_of_week, new Date(date.getFullYear(), date.getMonth()), -1);
  },
  
  // Given a date, return the day at the end of the week *after* this month
  rangeEnd: function(date) {
    return this.changeDayTo((this.start_of_week - 1) % 7, new Date(date.getFullYear(), date.getMonth() + 1, 0), 1);
  },
  
  // Is the given date the first day of the week?
  isFirstDayOfWeek: function(date) {
    return date.getDay() == this.start_of_week;
  },
  
  // Is the given date the last day of the week?
  isLastDayOfWeek: function(date) {
    return date.getDay() == (this.start_of_week - 1) % 7;
  },
  
  // Adjust a given array of day names to begin with the configured start-of-week
  adjustDays: function(days) {
    var newDays = [];
    for (var i = 0; i < days.length; i++) {
      newDays[i] = days[(i + this.start_of_week) % 7];
    };
    return newDays;
  }
};

$.fn.date_input = function(opts) {
  return this.each(function() { new DateInput(this, opts); });
};
$.date_input = { initialize: function(opts) {
  $("input.date_input").date_input(opts);
} };

return DateInput;
})(jQuery); // End localisation of the $ function

jQuery.extend(DateInput.DEFAULT_OPTS, {
  month_names: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
  short_month_names: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Ekim", "Kas", "Ara"],
  short_day_names: ["Pzr", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt"]
});


/*--------------------------------------------------------------------------
* linq.js - LINQ for JavaScript
* ver 2.2.0.0 (Jun. 28th, 2010)
*
* created and maintained by neuecc <ils@neue.cc>
* licensed under Microsoft Public License(Ms-PL)
* http://neue.cc/
* http://linqjs.codeplex.com/
*--------------------------------------------------------------------------*/
Enumerable=function(){var m="Single:sequence contains more than one element.",e=true,b=null,a=false,c=function(a){this.GetEnumerator=a};c.Choice=function(){var a=arguments[0]instanceof Array?arguments[0]:arguments;return new c(function(){return new f(g.Blank,function(){return this.Yield(a[Math.floor(Math.random()*a.length)])},g.Blank)})};c.Cycle=function(){var a=arguments[0]instanceof Array?arguments[0]:arguments;return new c(function(){var b=0;return new f(g.Blank,function(){if(b>=a.length)b=0;return this.Yield(a[b++])},g.Blank)})};c.Empty=function(){return new c(function(){return new f(g.Blank,function(){return a},g.Blank)})};c.From=function(j){if(j==b)return c.Empty();if(j instanceof c)return j;if(typeof j==i.Number||typeof j==i.Boolean)return c.Repeat(j,1);if(typeof j==i.String)return new c(function(){var b=0;return new f(g.Blank,function(){return b<j.length?this.Yield(j.charAt(b++)):a},g.Blank)});if(typeof j!=i.Function){if(typeof j.length==i.Number)return new h(j);if(!(j instanceof Object)&&d.IsIEnumerable(j))return new c(function(){var c=e,b;return new f(function(){b=new Enumerator(j)},function(){if(c)c=a;else b.moveNext();return b.atEnd()?a:this.Yield(b.item())},g.Blank)})}return new c(function(){var b=[],c=0;return new f(function(){for(var a in j)!(j[a]instanceof Function)&&b.push({Key:a,Value:j[a]})},function(){return c<b.length?this.Yield(b[c++]):a},g.Blank)})},c.Return=function(a){return c.Repeat(a,1)};c.Matches=function(h,e,d){if(d==b)d="";if(e instanceof RegExp){d+=e.ignoreCase?"i":"";d+=e.multiline?"m":"";e=e.source}if(d.indexOf("g")===-1)d+="g";return new c(function(){var b;return new f(function(){b=new RegExp(e,d)},function(){var c=b.exec(h);return c?this.Yield(c):a},g.Blank)})};c.Range=function(e,d,a){if(a==b)a=1;return c.ToInfinity(e,a).Take(d)};c.RangeDown=function(e,d,a){if(a==b)a=1;return c.ToNegativeInfinity(e,a).Take(d)};c.RangeTo=function(d,e,a){if(a==b)a=1;return d<e?c.ToInfinity(d,a).TakeWhile(function(a){return a<=e}):c.ToNegativeInfinity(d,a).TakeWhile(function(a){return a>=e})};c.Repeat=function(d,a){if(a!=b)return c.Repeat(d).Take(a);return new c(function(){return new f(g.Blank,function(){return this.Yield(d)},g.Blank)})};c.RepeatWithFinalize=function(a,e){a=d.CreateLambda(a);e=d.CreateLambda(e);return new c(function(){var c;return new f(function(){c=a()},function(){return this.Yield(c)},function(){if(c!=b){e(c);c=b}})})};c.Generate=function(a,e){if(e!=b)return c.Generate(a).Take(e);a=d.CreateLambda(a);return new c(function(){return new f(g.Blank,function(){return this.Yield(a())},g.Blank)})};c.ToInfinity=function(d,a){if(d==b)d=0;if(a==b)a=1;return new c(function(){var b;return new f(function(){b=d-a},function(){return this.Yield(b+=a)},g.Blank)})};c.ToNegativeInfinity=function(d,a){if(d==b)d=0;if(a==b)a=1;return new c(function(){var b;return new f(function(){b=d+a},function(){return this.Yield(b-=a)},g.Blank)})};c.Unfold=function(h,b){b=d.CreateLambda(b);return new c(function(){var d=e,c;return new f(g.Blank,function(){if(d){d=a;c=h;return this.Yield(c)}c=b(c);return this.Yield(c)},g.Blank)})};c.prototype={CascadeBreadthFirst:function(g,b){var h=this;g=d.CreateLambda(g);b=d.CreateLambda(b);return new c(function(){var i,k=0,j=[];return new f(function(){i=h.GetEnumerator()},function(){while(e){if(i.MoveNext()){j.push(i.Current());return this.Yield(b(i.Current(),k))}var f=c.From(j).SelectMany(function(a){return g(a)});if(!f.Any())return a;else{k++;j=[];d.Dispose(i);i=f.GetEnumerator()}}},function(){d.Dispose(i)})})},CascadeDepthFirst:function(g,b){var h=this;g=d.CreateLambda(g);b=d.CreateLambda(b);return new c(function(){var j=[],i;return new f(function(){i=h.GetEnumerator()},function(){while(e){if(i.MoveNext()){var f=b(i.Current(),j.length);j.push(i);i=c.From(g(i.Current())).GetEnumerator();return this.Yield(f)}if(j.length<=0)return a;d.Dispose(i);i=j.pop()}},function(){try{d.Dispose(i)}finally{c.From(j).ForEach(function(a){a.Dispose()})}})})},Flatten:function(){var h=this;return new c(function(){var j,i=b;return new f(function(){j=h.GetEnumerator()},function(){while(e){if(i!=b)if(i.MoveNext())return this.Yield(i.Current());else i=b;if(j.MoveNext())if(j.Current()instanceof Array){d.Dispose(i);i=c.From(j.Current()).SelectMany(g.Identity).Flatten().GetEnumerator();continue}else return this.Yield(j.Current());return a}},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Pairwise:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c;return new f(function(){c=e.GetEnumerator();c.MoveNext()},function(){var d=c.Current();return c.MoveNext()?this.Yield(b(d,c.Current())):a},function(){d.Dispose(c)})})},Scan:function(i,g,j){if(j!=b)return this.Scan(i,g).Select(j);var h;if(g==b){g=d.CreateLambda(i);h=a}else{g=d.CreateLambda(g);h=e}var k=this;return new c(function(){var b,c,j=e;return new f(function(){b=k.GetEnumerator()},function(){if(j){j=a;if(!h){if(b.MoveNext())return this.Yield(c=b.Current())}else return this.Yield(c=i)}return b.MoveNext()?this.Yield(c=g(c,b.Current())):a},function(){d.Dispose(b)})})},Select:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()?this.Yield(b(c.Current(),g++)):a},function(){d.Dispose(c)})})},SelectMany:function(g,e){var h=this;g=d.CreateLambda(g);if(e==b)e=function(b,a){return a};e=d.CreateLambda(e);return new c(function(){var j,i=undefined,k=0;return new f(function(){j=h.GetEnumerator()},function(){if(i===undefined)if(!j.MoveNext())return a;do{if(i==b){var f=g(j.Current(),k++);i=c.From(f).GetEnumerator()}if(i.MoveNext())return this.Yield(e(j.Current(),i.Current()));d.Dispose(i);i=b}while(j.MoveNext());return a},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Where:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){while(c.MoveNext())if(b(c.Current(),g++))return this.Yield(c.Current());return a},function(){d.Dispose(c)})})},OfType:function(c){var a;switch(c){case Number:a=i.Number;break;case String:a=i.String;break;case Boolean:a=i.Boolean;break;case Function:a=i.Function;break;default:a=b}return a===b?this.Where(function(a){return a instanceof c}):this.Where(function(b){return typeof b===a})},Zip:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var i,h,j=0;return new f(function(){i=g.GetEnumerator();h=c.From(e).GetEnumerator()},function(){if(i.MoveNext()&&h.MoveNext())return this.Yield(b(i.Current(),h.Current(),j++));return a},function(){try{d.Dispose(i)}finally{d.Dispose(h)}})})},Join:function(m,i,h,k,j){i=d.CreateLambda(i);h=d.CreateLambda(h);k=d.CreateLambda(k);j=d.CreateLambda(j);var l=this;return new c(function(){var n,q,o=b,p=0;return new f(function(){n=l.GetEnumerator();q=c.From(m).ToLookup(h,g.Identity,j)},function(){while(e){if(o!=b){var c=o[p++];if(c!==undefined){isInnerOut=a;return this.Yield(k(n.Current(),c))}c=b;p=0}if(n.MoveNext()){var d=i(n.Current());o=q.Get(d).ToArray()}else return a}},function(){d.Dispose(n)})})},GroupJoin:function(l,h,e,j,i){h=d.CreateLambda(h);e=d.CreateLambda(e);j=d.CreateLambda(j);i=d.CreateLambda(i);var k=this;return new c(function(){var m=k.GetEnumerator(),n=b;return new f(function(){m=k.GetEnumerator();n=c.From(l).ToLookup(e,g.Identity,i)},function(){if(m.MoveNext()){var b=n.Get(h(m.Current()));return this.Yield(j(m.Current(),b))}return a},function(){d.Dispose(m)})})},All:function(b){b=d.CreateLambda(b);var c=e;this.ForEach(function(d){if(!b(d)){c=a;return a}});return c},Any:function(c){c=d.CreateLambda(c);var b=this.GetEnumerator();try{if(arguments.length==0)return b.MoveNext();while(b.MoveNext())if(c(b.Current()))return e;return a}finally{d.Dispose(b)}},Concat:function(e){var g=this;return new c(function(){var i,h;return new f(function(){i=g.GetEnumerator()},function(){if(h==b){if(i.MoveNext())return this.Yield(i.Current());h=c.From(e).GetEnumerator()}if(h.MoveNext())return this.Yield(h.Current());return a},function(){try{d.Dispose(i)}finally{d.Dispose(h)}})})},Insert:function(h,b){var g=this;return new c(function(){var j,i,l=0,k=a;return new f(function(){j=g.GetEnumerator();i=c.From(b).GetEnumerator()},function(){if(l==h&&i.MoveNext()){k=e;return this.Yield(i.Current())}if(j.MoveNext()){l++;return this.Yield(j.Current())}if(!k&&i.MoveNext())return this.Yield(i.Current());return a},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Alternate:function(a){a=c.Return(a);return this.SelectMany(function(b){return c.Return(b).Concat(a)}).TakeExceptLast()},Contains:function(f,b){b=d.CreateLambda(b);var c=this.GetEnumerator();try{while(c.MoveNext())if(b(c.Current())===f)return e;return a}finally{d.Dispose(c)}},DefaultIfEmpty:function(b){var g=this;return new c(function(){var c,h=e;return new f(function(){c=g.GetEnumerator()},function(){if(c.MoveNext()){h=a;return this.Yield(c.Current())}else if(h){h=a;return this.Yield(b)}return a},function(){d.Dispose(c)})})},Distinct:function(a){return this.Except(c.Empty(),a)},Except:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var h,i;return new f(function(){h=g.GetEnumerator();i=new n(b);c.From(e).ForEach(function(a){i.Add(a)})},function(){while(h.MoveNext()){var b=h.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}return a},function(){d.Dispose(h)})})},Intersect:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var h,i,j;return new f(function(){h=g.GetEnumerator();i=new n(b);c.From(e).ForEach(function(a){i.Add(a)});j=new n(b)},function(){while(h.MoveNext()){var b=h.Current();if(!j.Contains(b)&&i.Contains(b)){j.Add(b);return this.Yield(b)}}return a},function(){d.Dispose(h)})})},SequenceEqual:function(h,f){f=d.CreateLambda(f);var g=this.GetEnumerator();try{var b=c.From(h).GetEnumerator();try{while(g.MoveNext())if(!b.MoveNext()||f(g.Current())!==f(b.Current()))return a;if(b.MoveNext())return a;return e}finally{d.Dispose(b)}}finally{d.Dispose(g)}},Union:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var j,h,i;return new f(function(){j=g.GetEnumerator();i=new n(b)},function(){var b;if(h===undefined){while(j.MoveNext()){b=j.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}h=c.From(e).GetEnumerator()}while(h.MoveNext()){b=h.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}return a},function(){try{d.Dispose(j)}finally{d.Dispose(h)}})})},OrderBy:function(b){return new j(this,b,a)},OrderByDescending:function(a){return new j(this,a,e)},Reverse:function(){var b=this;return new c(function(){var c,d;return new f(function(){c=b.ToArray();d=c.length},function(){return d>0?this.Yield(c[--d]):a},g.Blank)})},Shuffle:function(){var b=this;return new c(function(){var c;return new f(function(){c=b.ToArray()},function(){if(c.length>0){var b=Math.floor(Math.random()*c.length);return this.Yield(c.splice(b,1)[0])}return a},g.Blank)})},GroupBy:function(i,h,e,g){var j=this;i=d.CreateLambda(i);h=d.CreateLambda(h);if(e!=b)e=d.CreateLambda(e);g=d.CreateLambda(g);return new c(function(){var c;return new f(function(){c=j.ToLookup(i,h,g).ToEnumerable().GetEnumerator()},function(){while(c.MoveNext())return e==b?this.Yield(c.Current()):this.Yield(e(c.Current().Key(),c.Current()));return a},function(){d.Dispose(c)})})},PartitionBy:function(j,i,g,h){var l=this;j=d.CreateLambda(j);i=d.CreateLambda(i);h=d.CreateLambda(h);var k;if(g==b){k=a;g=function(b,a){return new o(b,a)}}else{k=e;g=d.CreateLambda(g)}return new c(function(){var b,n,o,m=[];return new f(function(){b=l.GetEnumerator();if(b.MoveNext()){n=j(b.Current());o=h(n);m.push(i(b.Current()))}},function(){var d;while((d=b.MoveNext())==e)if(o===h(j(b.Current())))m.push(i(b.Current()));else break;if(m.length>0){var f=k?g(n,c.From(m)):g(n,m);if(d){n=j(b.Current());o=h(n);m=[i(b.Current())]}else m=[];return this.Yield(f)}return a},function(){d.Dispose(b)})})},BufferWithCount:function(e){var b=this;return new c(function(){var c;return new f(function(){c=b.GetEnumerator()},function(){var b=[],d=0;while(c.MoveNext()){b.push(c.Current());if(++d>=e)return this.Yield(b)}if(b.length>0)return this.Yield(b);return a},function(){d.Dispose(c)})})},Aggregate:function(c,b,a){return this.Scan(c,b,a).Last()},Average:function(a){a=d.CreateLambda(a);var c=0,b=0;this.ForEach(function(d){c+=a(d);++b});return c/b},Count:function(a){a=a==b?g.True:d.CreateLambda(a);var c=0;this.ForEach(function(d,b){if(a(d,b))++c});return c},Max:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(function(a,b){return a>b?a:b})},Min:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(function(a,b){return a<b?a:b})},MaxBy:function(a){a=d.CreateLambda(a);return this.Aggregate(function(b,c){return a(b)>a(c)?b:c})},MinBy:function(a){a=d.CreateLambda(a);return this.Aggregate(function(b,c){return a(b)<a(c)?b:c})},Sum:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(0,function(a,b){return a+b})},ElementAt:function(d){var c,b=a;this.ForEach(function(g,f){if(f==d){c=g;b=e;return a}});if(!b)throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");return c},ElementAtOrDefault:function(f,d){var c,b=a;this.ForEach(function(g,d){if(d==f){c=g;b=e;return a}});return !b?d:c},First:function(c){if(c!=b)return this.Where(c).First();var f,d=a;this.ForEach(function(b){f=b;d=e;return a});if(!d)throw new Error("First:No element satisfies the condition.");return f},FirstOrDefault:function(c,d){if(d!=b)return this.Where(d).FirstOrDefault(c);var g,f=a;this.ForEach(function(b){g=b;f=e;return a});return !f?c:g},Last:function(c){if(c!=b)return this.Where(c).Last();var f,d=a;this.ForEach(function(a){d=e;f=a});if(!d)throw new Error("Last:No element satisfies the condition.");return f},LastOrDefault:function(c,d){if(d!=b)return this.Where(d).LastOrDefault(c);var g,f=a;this.ForEach(function(a){f=e;g=a});return !f?c:g},Single:function(d){if(d!=b)return this.Where(d).Single();var f,c=a;this.ForEach(function(a){if(!c){c=e;f=a}else throw new Error(m)});if(!c)throw new Error("Single:No element satisfies the condition.");return f},SingleOrDefault:function(d,f){if(f!=b)return this.Where(f).SingleOrDefault(d);var g,c=a;this.ForEach(function(a){if(!c){c=e;g=a}else throw new Error(m)});return !c?d:g},Skip:function(e){var b=this;return new c(function(){var c,g=0;return new f(function(){c=b.GetEnumerator();while(g++<e&&c.MoveNext());},function(){return c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},SkipWhile:function(b){b=d.CreateLambda(b);var g=this;return new c(function(){var c,i=0,h=a;return new f(function(){c=g.GetEnumerator()},function(){while(!h)if(c.MoveNext()){if(!b(c.Current(),i++)){h=e;return this.Yield(c.Current())}continue}else return a;return c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},Take:function(e){var b=this;return new c(function(){var c,g=0;return new f(function(){c=b.GetEnumerator()},function(){return g++<e&&c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},TakeWhile:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()&&b(c.Current(),g++)?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},TakeExceptLast:function(e){if(e==b)e=1;var g=this;return new c(function(){if(e<=0)return g.GetEnumerator();var b,c=[];return new f(function(){b=g.GetEnumerator()},function(){while(b.MoveNext()){if(c.length==e){c.push(b.Current());return this.Yield(c.shift())}c.push(b.Current())}return a},function(){d.Dispose(b)})})},TakeFromLast:function(e){if(e<=0||e==b)return c.Empty();var g=this;return new c(function(){var j,h,i=[];return new f(function(){j=g.GetEnumerator()},function(){while(j.MoveNext()){i.length==e&&i.shift();i.push(j.Current())}if(h==b)h=c.From(i).GetEnumerator();return h.MoveNext()?this.Yield(h.Current()):a},function(){d.Dispose(h)})})},IndexOf:function(c){var a=b;this.ForEach(function(d,b){if(d===c){a=b;return e}});return a!==b?a:-1},LastIndexOf:function(b){var a=-1;this.ForEach(function(d,c){if(d===b)a=c});return a},ToArray:function(){var a=[];this.ForEach(function(b){a.push(b)});return a},ToLookup:function(c,b,a){c=d.CreateLambda(c);b=d.CreateLambda(b);a=d.CreateLambda(a);var e=new n(a);this.ForEach(function(g){var f=c(g),a=b(g),d=e.Get(f);if(d!==undefined)d.push(a);else e.Add(f,[a])});return new q(e)},ToObject:function(b,a){b=d.CreateLambda(b);a=d.CreateLambda(a);var c={};this.ForEach(function(d){c[b(d)]=a(d)});return c},ToDictionary:function(c,b,a){c=d.CreateLambda(c);b=d.CreateLambda(b);a=d.CreateLambda(a);var e=new n(a);this.ForEach(function(a){e.Add(c(a),b(a))});return e},ToJSON:function(a,b){return JSON.stringify(this.ToArray(),a,b)},ToString:function(a,c){if(a==b)a="";if(c==b)c=g.Identity;return this.Select(c).ToArray().join(a)},Do:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){if(c.MoveNext()){b(c.Current(),g++);return this.Yield(c.Current())}return a},function(){d.Dispose(c)})})},ForEach:function(c){c=d.CreateLambda(c);var e=0,b=this.GetEnumerator();try{while(b.MoveNext())if(c(b.Current(),e++)===a)break}finally{d.Dispose(b)}},Write:function(c,f){if(c==b)c="";f=d.CreateLambda(f);var g=e;this.ForEach(function(b){if(g)g=a;else document.write(c);document.write(f(b))})},WriteLine:function(a){a=d.CreateLambda(a);this.ForEach(function(b){document.write(a(b));document.write("<br />")})},Force:function(){var a=this.GetEnumerator();try{while(a.MoveNext());}finally{d.Dispose(a)}},Let:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var g;return new f(function(){g=c.From(b(e)).GetEnumerator()},function(){return g.MoveNext()?this.Yield(g.Current()):a},function(){d.Dispose(g)})})},Share:function(){var e=this,d;return new c(function(){return new f(function(){if(d==b)d=e.GetEnumerator()},function(){return d.MoveNext()?this.Yield(d.Current()):a},g.Blank)})},MemoizeAll:function(){var h=this,e,d;return new c(function(){var c=-1;return new f(function(){if(d==b){d=h.GetEnumerator();e=[]}},function(){c++;if(e.length<=c)return d.MoveNext()?this.Yield(e[c]=d.Current()):a;return this.Yield(e[c])},g.Blank)})},Catch:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c;return new f(function(){c=e.GetEnumerator()},function(){try{return c.MoveNext()?this.Yield(c.Current()):a}catch(d){b(d);return a}},function(){d.Dispose(c)})})},Finally:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()?this.Yield(c.Current()):a},function(){try{d.Dispose(c)}finally{b()}})})},Trace:function(c,a){if(c==b)c="Trace";a=d.CreateLambda(a);return this.Do(function(b){console.log(c,":",a(b))})}};var g={Identity:function(a){return a},True:function(){return e},Blank:function(){}},i={Boolean:typeof e,Number:typeof 0,String:typeof "",Object:typeof {},Undefined:typeof undefined,Function:typeof function(){}},d={CreateLambda:function(a){if(a==b)return g.Identity;if(typeof a==i.String)if(a=="")return g.Identity;else if(a.indexOf("=>")==-1)return new Function("$,$$,$$$,$$$$","return "+a);else{var c=a.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);return new Function(c[1],"return "+c[2])}return a},IsIEnumerable:function(b){if(typeof Enumerator!=i.Undefined)try{new Enumerator(b);return e}catch(c){}return a},Compare:function(a,b){return a===b?0:a>b?1:-1},Dispose:function(a){a!=b&&a.Dispose()}},k={Before:0,Running:1,After:2},f=function(d,f,g){var c=new p,b=k.Before;this.Current=c.Current;this.MoveNext=function(){try{switch(b){case k.Before:b=k.Running;d();case k.Running:if(f.apply(c))return e;else{this.Dispose();return a}case k.After:return a}}catch(g){this.Dispose();throw g}};this.Dispose=function(){if(b!=k.Running)return;try{g()}finally{b=k.After}}},p=function(){var a=b;this.Current=function(){return a};this.Yield=function(b){a=b;return e}},j=function(f,b,c,e){var a=this;a.source=f;a.keySelector=d.CreateLambda(b);a.descending=c;a.parent=e};j.prototype=new c;j.prototype.CreateOrderedEnumerable=function(a,b){return new j(this.source,a,b,this)};j.prototype.ThenBy=function(b){return this.CreateOrderedEnumerable(b,a)};j.prototype.ThenByDescending=function(a){return this.CreateOrderedEnumerable(a,e)};j.prototype.GetEnumerator=function(){var i=this,e,d,h=0;return new f(function(){e=i.source.ToArray();d=c.Range(0,e.length).ToArray();sortContext=l.Create(i,b);sortContext.GenerateKeys(e);d.sort(function(a,b){return sortContext.Compare(a,b)})},function(){return h<d.length?this.Yield(e[d[h++]]):a},g.Blank)};var l=function(c,d,e){var a=this;a.keySelector=c;a.descending=d;a.child=e;a.keys=b};l.Create=function(a,d){var c=new l(a.keySelector,a.descending,d);if(a.parent!=b)return l.Create(a.parent,c);return c};l.prototype.GenerateKeys=function(d){var a=this;a.keys=c.From(d).Select(a.keySelector).ToArray();a.child!=b&&a.child.GenerateKeys(d)};l.prototype.Compare=function(e,f){var a=this,c=d.Compare(a.keys[e],a.keys[f]);if(c==0){if(a.child!=b)return a.child.Compare(e,f);c=d.Compare(e,f)}return a.descending?-c:c};var h=function(a){this.source=a};h.prototype=new c;h.prototype.Any=function(a){return a==b?this.source.length>0:c.prototype.Any.apply(this,arguments)};h.prototype.Count=function(a){return a==b?this.source.length:c.prototype.Count.apply(this,arguments)};h.prototype.ElementAt=function(a){return 0<=a&&a<this.source.length?this.source[a]:c.prototype.ElementAt.apply(this,arguments)};h.prototype.ElementAtOrDefault=function(a,b){return 0<=a&&a<this.source.length?this.source[a]:b};h.prototype.First=function(a){return a==b&&this.source.length>0?this.source[0]:c.prototype.First.apply(this,arguments)};h.prototype.FirstOrDefault=function(a,d){if(d!=b)return c.prototype.FirstOrDefault.apply(this,arguments);return this.source.length>0?this.source[0]:a};h.prototype.Last=function(d){var a=this;return d==b&&a.source.length>0?a.source[a.source.length-1]:c.prototype.Last.apply(a,arguments)};h.prototype.LastOrDefault=function(d,e){var a=this;if(e!=b)return c.prototype.LastOrDefault.apply(a,arguments);return a.source.length>0?a.source[a.source.length-1]:d};h.prototype.Skip=function(d){var b=this.source;return new c(function(){var c;return new f(function(){c=d<0?0:d},function(){while(c<b.length){return this.Yield(b[c++]);c++}return a},g.Blank)})};h.prototype.TakeExceptLast=function(a){if(a==b)a=1;return this.Take(this.source.length-a)};h.prototype.TakeFromLast=function(a){return this.Skip(this.source.length-a)};h.prototype.Reverse=function(){var b=this.source;return new c(function(){var c;return new f(function(){c=b.length},function(){return c>0?this.Yield(b[--c]):a},g.Blank)})};h.prototype.SequenceEqual=function(d,e){if((d instanceof h||d instanceof Array)&&e==b&&c.From(d).Count()!=this.Count())return a;return c.prototype.SequenceEqual.apply(this,arguments)};h.prototype.ToString=function(a,d){if(d!=b||!(this.source instanceof Array))return c.prototype.ToString.apply(this,arguments);if(a==b)a="";return this.source.join(a)};h.prototype.GetEnumerator=function(){var c=this.source,b=0;return new f(g.Blank,function(){while(b<c.length){return this.Yield(c[b++]);b++}return a},g.Blank)};var n=function(){var h=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d=function(a){if(a===b)return "null";if(a===undefined)return "undefined";return typeof a.toString===i.Function?a.toString():Object.prototype.toString.call(a)},l=function(d,c){var a=this;a.Key=d;a.Value=c;a.Prev=b;a.Next=b},j=function(){this.First=b;this.Last=b};j.prototype={AddLast:function(c){var a=this;if(a.Last!=b){a.Last.Next=c;c.Prev=a.Last;a.Last=c}else a.First=a.Last=c},Replace:function(c,a){if(c.Prev!=b){c.Prev.Next=a;a.Prev=c.Prev}else this.First=a;if(c.Next!=b){c.Next.Prev=a;a.Next=c.Next}else this.Last=a},Remove:function(a){if(a.Prev!=b)a.Prev.Next=a.Next;else this.First=a.Next;if(a.Next!=b)a.Next.Prev=a.Prev;else this.Last=a.Prev}};var k=function(c){var a=this;a.count=0;a.entryList=new j;a.buckets={};a.compareSelector=c==b?g.Identity:c};k.prototype={Add:function(i,j){var a=this,g=a.compareSelector(i),f=d(g),c=new l(i,j);if(h(a.buckets,f)){for(var b=a.buckets[f],e=0;e<b.length;e++)if(a.compareSelector(b[e].Key)===g){a.entryList.Replace(b[e],c);b[e]=c;return}b.push(c)}else a.buckets[f]=[c];a.count++;a.entryList.AddLast(c)},Get:function(i){var a=this,c=a.compareSelector(i),g=d(c);if(!h(a.buckets,g))return undefined;for(var e=a.buckets[g],b=0;b<e.length;b++){var f=e[b];if(a.compareSelector(f.Key)===c)return f.Value}return undefined},Set:function(k,m){var b=this,g=b.compareSelector(k),j=d(g);if(h(b.buckets,j))for(var f=b.buckets[j],c=0;c<f.length;c++)if(b.compareSelector(f[c].Key)===g){var i=new l(k,m);b.entryList.Replace(f[c],i);f[c]=i;return e}return a},Contains:function(j){var b=this,f=b.compareSelector(j),i=d(f);if(!h(b.buckets,i))return a;for(var g=b.buckets[i],c=0;c<g.length;c++)if(b.compareSelector(g[c].Key)===f)return e;return a},Clear:function(){this.count=0;this.buckets={};this.entryList=new j},Remove:function(g){var a=this,f=a.compareSelector(g),e=d(f);if(!h(a.buckets,e))return;for(var b=a.buckets[e],c=0;c<b.length;c++)if(a.compareSelector(b[c].Key)===f){a.entryList.Remove(b[c]);b.splice(c,1);if(b.length==0)delete a.buckets[e];a.count--;return}},Count:function(){return this.count},ToEnumerable:function(){var d=this;return new c(function(){var c;return new f(function(){c=d.entryList.First},function(){if(c!=b){var d={Key:c.Key,Value:c.Value};c=c.Next;return this.Yield(d)}return a},g.Blank)})}};return k}(),q=function(a){var b=this;b.Count=function(){return a.Count()};b.Get=function(b){return c.From(a.Get(b))};b.Contains=function(b){return a.Contains(b)};b.ToEnumerable=function(){return a.ToEnumerable().Select(function(a){return new o(a.Key,a.Value)})}},o=function(b,a){this.Key=function(){return b};h.call(this,a)};o.prototype=new h;return c}();

/*--------------------------------------------------------------------------
* jquery.linq.js - LINQ for jQuery
* ver 2.2.0.0 (Jun. 28th, 2010)
*
* created and maintained by neuecc <ils@neue.cc>
* licensed under Microsoft Public License(Ms-PL)
* http://neue.cc/
* http://linqjs.codeplex.com/
*--------------------------------------------------------------------------*/
jQuery.extend({Enumerable:function(){var m="Single:sequence contains more than one element.",e=true,b=null,a=false,c=function(a){this.GetEnumerator=a};c.Choice=function(){var a=arguments[0]instanceof Array?arguments[0]:arguments;return new c(function(){return new f(g.Blank,function(){return this.Yield(a[Math.floor(Math.random()*a.length)])},g.Blank)})};c.Cycle=function(){var a=arguments[0]instanceof Array?arguments[0]:arguments;return new c(function(){var b=0;return new f(g.Blank,function(){if(b>=a.length)b=0;return this.Yield(a[b++])},g.Blank)})};c.Empty=function(){return new c(function(){return new f(g.Blank,function(){return a},g.Blank)})};c.From=function(j){if(j==b)return c.Empty();if(j instanceof c)return j;if(typeof j==i.Number||typeof j==i.Boolean)return c.Repeat(j,1);if(typeof j==i.String)return new c(function(){var b=0;return new f(g.Blank,function(){return b<j.length?this.Yield(j.charAt(b++)):a},g.Blank)});if(typeof j!=i.Function){if(typeof j.length==i.Number)return new h(j);if(!(j instanceof Object)&&d.IsIEnumerable(j))return new c(function(){var c=e,b;return new f(function(){b=new Enumerator(j)},function(){if(c)c=a;else b.moveNext();return b.atEnd()?a:this.Yield(b.item())},g.Blank)})}return new c(function(){var b=[],c=0;return new f(function(){for(var a in j)!(j[a]instanceof Function)&&b.push({Key:a,Value:j[a]})},function(){return c<b.length?this.Yield(b[c++]):a},g.Blank)})},c.Return=function(a){return c.Repeat(a,1)};c.Matches=function(h,e,d){if(d==b)d="";if(e instanceof RegExp){d+=e.ignoreCase?"i":"";d+=e.multiline?"m":"";e=e.source}if(d.indexOf("g")===-1)d+="g";return new c(function(){var b;return new f(function(){b=new RegExp(e,d)},function(){var c=b.exec(h);return c?this.Yield(c):a},g.Blank)})};c.Range=function(e,d,a){if(a==b)a=1;return c.ToInfinity(e,a).Take(d)};c.RangeDown=function(e,d,a){if(a==b)a=1;return c.ToNegativeInfinity(e,a).Take(d)};c.RangeTo=function(d,e,a){if(a==b)a=1;return d<e?c.ToInfinity(d,a).TakeWhile(function(a){return a<=e}):c.ToNegativeInfinity(d,a).TakeWhile(function(a){return a>=e})};c.Repeat=function(d,a){if(a!=b)return c.Repeat(d).Take(a);return new c(function(){return new f(g.Blank,function(){return this.Yield(d)},g.Blank)})};c.RepeatWithFinalize=function(a,e){a=d.CreateLambda(a);e=d.CreateLambda(e);return new c(function(){var c;return new f(function(){c=a()},function(){return this.Yield(c)},function(){if(c!=b){e(c);c=b}})})};c.Generate=function(a,e){if(e!=b)return c.Generate(a).Take(e);a=d.CreateLambda(a);return new c(function(){return new f(g.Blank,function(){return this.Yield(a())},g.Blank)})};c.ToInfinity=function(d,a){if(d==b)d=0;if(a==b)a=1;return new c(function(){var b;return new f(function(){b=d-a},function(){return this.Yield(b+=a)},g.Blank)})};c.ToNegativeInfinity=function(d,a){if(d==b)d=0;if(a==b)a=1;return new c(function(){var b;return new f(function(){b=d+a},function(){return this.Yield(b-=a)},g.Blank)})};c.Unfold=function(h,b){b=d.CreateLambda(b);return new c(function(){var d=e,c;return new f(g.Blank,function(){if(d){d=a;c=h;return this.Yield(c)}c=b(c);return this.Yield(c)},g.Blank)})};c.prototype={CascadeBreadthFirst:function(g,b){var h=this;g=d.CreateLambda(g);b=d.CreateLambda(b);return new c(function(){var i,k=0,j=[];return new f(function(){i=h.GetEnumerator()},function(){while(e){if(i.MoveNext()){j.push(i.Current());return this.Yield(b(i.Current(),k))}var f=c.From(j).SelectMany(function(a){return g(a)});if(!f.Any())return a;else{k++;j=[];d.Dispose(i);i=f.GetEnumerator()}}},function(){d.Dispose(i)})})},CascadeDepthFirst:function(g,b){var h=this;g=d.CreateLambda(g);b=d.CreateLambda(b);return new c(function(){var j=[],i;return new f(function(){i=h.GetEnumerator()},function(){while(e){if(i.MoveNext()){var f=b(i.Current(),j.length);j.push(i);i=c.From(g(i.Current())).GetEnumerator();return this.Yield(f)}if(j.length<=0)return a;d.Dispose(i);i=j.pop()}},function(){try{d.Dispose(i)}finally{c.From(j).ForEach(function(a){a.Dispose()})}})})},Flatten:function(){var h=this;return new c(function(){var j,i=b;return new f(function(){j=h.GetEnumerator()},function(){while(e){if(i!=b)if(i.MoveNext())return this.Yield(i.Current());else i=b;if(j.MoveNext())if(j.Current()instanceof Array){d.Dispose(i);i=c.From(j.Current()).SelectMany(g.Identity).Flatten().GetEnumerator();continue}else return this.Yield(j.Current());return a}},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Pairwise:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c;return new f(function(){c=e.GetEnumerator();c.MoveNext()},function(){var d=c.Current();return c.MoveNext()?this.Yield(b(d,c.Current())):a},function(){d.Dispose(c)})})},Scan:function(i,g,j){if(j!=b)return this.Scan(i,g).Select(j);var h;if(g==b){g=d.CreateLambda(i);h=a}else{g=d.CreateLambda(g);h=e}var k=this;return new c(function(){var b,c,j=e;return new f(function(){b=k.GetEnumerator()},function(){if(j){j=a;if(!h){if(b.MoveNext())return this.Yield(c=b.Current())}else return this.Yield(c=i)}return b.MoveNext()?this.Yield(c=g(c,b.Current())):a},function(){d.Dispose(b)})})},Select:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()?this.Yield(b(c.Current(),g++)):a},function(){d.Dispose(c)})})},SelectMany:function(g,e){var h=this;g=d.CreateLambda(g);if(e==b)e=function(b,a){return a};e=d.CreateLambda(e);return new c(function(){var j,i=undefined,k=0;return new f(function(){j=h.GetEnumerator()},function(){if(i===undefined)if(!j.MoveNext())return a;do{if(i==b){var f=g(j.Current(),k++);i=c.From(f).GetEnumerator()}if(i.MoveNext())return this.Yield(e(j.Current(),i.Current()));d.Dispose(i);i=b}while(j.MoveNext());return a},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Where:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){while(c.MoveNext())if(b(c.Current(),g++))return this.Yield(c.Current());return a},function(){d.Dispose(c)})})},OfType:function(c){var a;switch(c){case Number:a=i.Number;break;case String:a=i.String;break;case Boolean:a=i.Boolean;break;case Function:a=i.Function;break;default:a=b}return a===b?this.Where(function(a){return a instanceof c}):this.Where(function(b){return typeof b===a})},Zip:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var i,h,j=0;return new f(function(){i=g.GetEnumerator();h=c.From(e).GetEnumerator()},function(){if(i.MoveNext()&&h.MoveNext())return this.Yield(b(i.Current(),h.Current(),j++));return a},function(){try{d.Dispose(i)}finally{d.Dispose(h)}})})},Join:function(m,i,h,k,j){i=d.CreateLambda(i);h=d.CreateLambda(h);k=d.CreateLambda(k);j=d.CreateLambda(j);var l=this;return new c(function(){var n,q,o=b,p=0;return new f(function(){n=l.GetEnumerator();q=c.From(m).ToLookup(h,g.Identity,j)},function(){while(e){if(o!=b){var c=o[p++];if(c!==undefined){isInnerOut=a;return this.Yield(k(n.Current(),c))}c=b;p=0}if(n.MoveNext()){var d=i(n.Current());o=q.Get(d).ToArray()}else return a}},function(){d.Dispose(n)})})},GroupJoin:function(l,h,e,j,i){h=d.CreateLambda(h);e=d.CreateLambda(e);j=d.CreateLambda(j);i=d.CreateLambda(i);var k=this;return new c(function(){var m=k.GetEnumerator(),n=b;return new f(function(){m=k.GetEnumerator();n=c.From(l).ToLookup(e,g.Identity,i)},function(){if(m.MoveNext()){var b=n.Get(h(m.Current()));return this.Yield(j(m.Current(),b))}return a},function(){d.Dispose(m)})})},All:function(b){b=d.CreateLambda(b);var c=e;this.ForEach(function(d){if(!b(d)){c=a;return a}});return c},Any:function(c){c=d.CreateLambda(c);var b=this.GetEnumerator();try{if(arguments.length==0)return b.MoveNext();while(b.MoveNext())if(c(b.Current()))return e;return a}finally{d.Dispose(b)}},Concat:function(e){var g=this;return new c(function(){var i,h;return new f(function(){i=g.GetEnumerator()},function(){if(h==b){if(i.MoveNext())return this.Yield(i.Current());h=c.From(e).GetEnumerator()}if(h.MoveNext())return this.Yield(h.Current());return a},function(){try{d.Dispose(i)}finally{d.Dispose(h)}})})},Insert:function(h,b){var g=this;return new c(function(){var j,i,l=0,k=a;return new f(function(){j=g.GetEnumerator();i=c.From(b).GetEnumerator()},function(){if(l==h&&i.MoveNext()){k=e;return this.Yield(i.Current())}if(j.MoveNext()){l++;return this.Yield(j.Current())}if(!k&&i.MoveNext())return this.Yield(i.Current());return a},function(){try{d.Dispose(j)}finally{d.Dispose(i)}})})},Alternate:function(a){a=c.Return(a);return this.SelectMany(function(b){return c.Return(b).Concat(a)}).TakeExceptLast()},Contains:function(f,b){b=d.CreateLambda(b);var c=this.GetEnumerator();try{while(c.MoveNext())if(b(c.Current())===f)return e;return a}finally{d.Dispose(c)}},DefaultIfEmpty:function(b){var g=this;return new c(function(){var c,h=e;return new f(function(){c=g.GetEnumerator()},function(){if(c.MoveNext()){h=a;return this.Yield(c.Current())}else if(h){h=a;return this.Yield(b)}return a},function(){d.Dispose(c)})})},Distinct:function(a){return this.Except(c.Empty(),a)},Except:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var h,i;return new f(function(){h=g.GetEnumerator();i=new n(b);c.From(e).ForEach(function(a){i.Add(a)})},function(){while(h.MoveNext()){var b=h.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}return a},function(){d.Dispose(h)})})},Intersect:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var h,i,j;return new f(function(){h=g.GetEnumerator();i=new n(b);c.From(e).ForEach(function(a){i.Add(a)});j=new n(b)},function(){while(h.MoveNext()){var b=h.Current();if(!j.Contains(b)&&i.Contains(b)){j.Add(b);return this.Yield(b)}}return a},function(){d.Dispose(h)})})},SequenceEqual:function(h,f){f=d.CreateLambda(f);var g=this.GetEnumerator();try{var b=c.From(h).GetEnumerator();try{while(g.MoveNext())if(!b.MoveNext()||f(g.Current())!==f(b.Current()))return a;if(b.MoveNext())return a;return e}finally{d.Dispose(b)}}finally{d.Dispose(g)}},Union:function(e,b){b=d.CreateLambda(b);var g=this;return new c(function(){var j,h,i;return new f(function(){j=g.GetEnumerator();i=new n(b)},function(){var b;if(h===undefined){while(j.MoveNext()){b=j.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}h=c.From(e).GetEnumerator()}while(h.MoveNext()){b=h.Current();if(!i.Contains(b)){i.Add(b);return this.Yield(b)}}return a},function(){try{d.Dispose(j)}finally{d.Dispose(h)}})})},OrderBy:function(b){return new j(this,b,a)},OrderByDescending:function(a){return new j(this,a,e)},Reverse:function(){var b=this;return new c(function(){var c,d;return new f(function(){c=b.ToArray();d=c.length},function(){return d>0?this.Yield(c[--d]):a},g.Blank)})},Shuffle:function(){var b=this;return new c(function(){var c;return new f(function(){c=b.ToArray()},function(){if(c.length>0){var b=Math.floor(Math.random()*c.length);return this.Yield(c.splice(b,1)[0])}return a},g.Blank)})},GroupBy:function(i,h,e,g){var j=this;i=d.CreateLambda(i);h=d.CreateLambda(h);if(e!=b)e=d.CreateLambda(e);g=d.CreateLambda(g);return new c(function(){var c;return new f(function(){c=j.ToLookup(i,h,g).ToEnumerable().GetEnumerator()},function(){while(c.MoveNext())return e==b?this.Yield(c.Current()):this.Yield(e(c.Current().Key(),c.Current()));return a},function(){d.Dispose(c)})})},PartitionBy:function(j,i,g,h){var l=this;j=d.CreateLambda(j);i=d.CreateLambda(i);h=d.CreateLambda(h);var k;if(g==b){k=a;g=function(b,a){return new o(b,a)}}else{k=e;g=d.CreateLambda(g)}return new c(function(){var b,n,o,m=[];return new f(function(){b=l.GetEnumerator();if(b.MoveNext()){n=j(b.Current());o=h(n);m.push(i(b.Current()))}},function(){var d;while((d=b.MoveNext())==e)if(o===h(j(b.Current())))m.push(i(b.Current()));else break;if(m.length>0){var f=k?g(n,c.From(m)):g(n,m);if(d){n=j(b.Current());o=h(n);m=[i(b.Current())]}else m=[];return this.Yield(f)}return a},function(){d.Dispose(b)})})},BufferWithCount:function(e){var b=this;return new c(function(){var c;return new f(function(){c=b.GetEnumerator()},function(){var b=[],d=0;while(c.MoveNext()){b.push(c.Current());if(++d>=e)return this.Yield(b)}if(b.length>0)return this.Yield(b);return a},function(){d.Dispose(c)})})},Aggregate:function(c,b,a){return this.Scan(c,b,a).Last()},Average:function(a){a=d.CreateLambda(a);var c=0,b=0;this.ForEach(function(d){c+=a(d);++b});return c/b},Count:function(a){a=a==b?g.True:d.CreateLambda(a);var c=0;this.ForEach(function(d,b){if(a(d,b))++c});return c},Max:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(function(a,b){return a>b?a:b})},Min:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(function(a,b){return a<b?a:b})},MaxBy:function(a){a=d.CreateLambda(a);return this.Aggregate(function(b,c){return a(b)>a(c)?b:c})},MinBy:function(a){a=d.CreateLambda(a);return this.Aggregate(function(b,c){return a(b)<a(c)?b:c})},Sum:function(a){if(a==b)a=g.Identity;return this.Select(a).Aggregate(0,function(a,b){return a+b})},ElementAt:function(d){var c,b=a;this.ForEach(function(g,f){if(f==d){c=g;b=e;return a}});if(!b)throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");return c},ElementAtOrDefault:function(f,d){var c,b=a;this.ForEach(function(g,d){if(d==f){c=g;b=e;return a}});return !b?d:c},First:function(c){if(c!=b)return this.Where(c).First();var f,d=a;this.ForEach(function(b){f=b;d=e;return a});if(!d)throw new Error("First:No element satisfies the condition.");return f},FirstOrDefault:function(c,d){if(d!=b)return this.Where(d).FirstOrDefault(c);var g,f=a;this.ForEach(function(b){g=b;f=e;return a});return !f?c:g},Last:function(c){if(c!=b)return this.Where(c).Last();var f,d=a;this.ForEach(function(a){d=e;f=a});if(!d)throw new Error("Last:No element satisfies the condition.");return f},LastOrDefault:function(c,d){if(d!=b)return this.Where(d).LastOrDefault(c);var g,f=a;this.ForEach(function(a){f=e;g=a});return !f?c:g},Single:function(d){if(d!=b)return this.Where(d).Single();var f,c=a;this.ForEach(function(a){if(!c){c=e;f=a}else throw new Error(m)});if(!c)throw new Error("Single:No element satisfies the condition.");return f},SingleOrDefault:function(d,f){if(f!=b)return this.Where(f).SingleOrDefault(d);var g,c=a;this.ForEach(function(a){if(!c){c=e;g=a}else throw new Error(m)});return !c?d:g},Skip:function(e){var b=this;return new c(function(){var c,g=0;return new f(function(){c=b.GetEnumerator();while(g++<e&&c.MoveNext());},function(){return c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},SkipWhile:function(b){b=d.CreateLambda(b);var g=this;return new c(function(){var c,i=0,h=a;return new f(function(){c=g.GetEnumerator()},function(){while(!h)if(c.MoveNext()){if(!b(c.Current(),i++)){h=e;return this.Yield(c.Current())}continue}else return a;return c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},Take:function(e){var b=this;return new c(function(){var c,g=0;return new f(function(){c=b.GetEnumerator()},function(){return g++<e&&c.MoveNext()?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},TakeWhile:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()&&b(c.Current(),g++)?this.Yield(c.Current()):a},function(){d.Dispose(c)})})},TakeExceptLast:function(e){if(e==b)e=1;var g=this;return new c(function(){if(e<=0)return g.GetEnumerator();var b,c=[];return new f(function(){b=g.GetEnumerator()},function(){while(b.MoveNext()){if(c.length==e){c.push(b.Current());return this.Yield(c.shift())}c.push(b.Current())}return a},function(){d.Dispose(b)})})},TakeFromLast:function(e){if(e<=0||e==b)return c.Empty();var g=this;return new c(function(){var j,h,i=[];return new f(function(){j=g.GetEnumerator()},function(){while(j.MoveNext()){i.length==e&&i.shift();i.push(j.Current())}if(h==b)h=c.From(i).GetEnumerator();return h.MoveNext()?this.Yield(h.Current()):a},function(){d.Dispose(h)})})},IndexOf:function(c){var a=b;this.ForEach(function(d,b){if(d===c){a=b;return e}});return a!==b?a:-1},LastIndexOf:function(b){var a=-1;this.ForEach(function(d,c){if(d===b)a=c});return a},ToArray:function(){var a=[];this.ForEach(function(b){a.push(b)});return a},ToLookup:function(c,b,a){c=d.CreateLambda(c);b=d.CreateLambda(b);a=d.CreateLambda(a);var e=new n(a);this.ForEach(function(g){var f=c(g),a=b(g),d=e.Get(f);if(d!==undefined)d.push(a);else e.Add(f,[a])});return new q(e)},ToObject:function(b,a){b=d.CreateLambda(b);a=d.CreateLambda(a);var c={};this.ForEach(function(d){c[b(d)]=a(d)});return c},ToDictionary:function(c,b,a){c=d.CreateLambda(c);b=d.CreateLambda(b);a=d.CreateLambda(a);var e=new n(a);this.ForEach(function(a){e.Add(c(a),b(a))});return e},ToJSON:function(a,b){return JSON.stringify(this.ToArray(),a,b)},ToString:function(a,c){if(a==b)a="";if(c==b)c=g.Identity;return this.Select(c).ToArray().join(a)},Do:function(b){var e=this;b=d.CreateLambda(b);return new c(function(){var c,g=0;return new f(function(){c=e.GetEnumerator()},function(){if(c.MoveNext()){b(c.Current(),g++);return this.Yield(c.Current())}return a},function(){d.Dispose(c)})})},ForEach:function(c){c=d.CreateLambda(c);var e=0,b=this.GetEnumerator();try{while(b.MoveNext())if(c(b.Current(),e++)===a)break}finally{d.Dispose(b)}},Write:function(c,f){if(c==b)c="";f=d.CreateLambda(f);var g=e;this.ForEach(function(b){if(g)g=a;else document.write(c);document.write(f(b))})},WriteLine:function(a){a=d.CreateLambda(a);this.ForEach(function(b){document.write(a(b));document.write("<br />")})},Force:function(){var a=this.GetEnumerator();try{while(a.MoveNext());}finally{d.Dispose(a)}},Let:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var g;return new f(function(){g=c.From(b(e)).GetEnumerator()},function(){return g.MoveNext()?this.Yield(g.Current()):a},function(){d.Dispose(g)})})},Share:function(){var e=this,d;return new c(function(){return new f(function(){if(d==b)d=e.GetEnumerator()},function(){return d.MoveNext()?this.Yield(d.Current()):a},g.Blank)})},MemoizeAll:function(){var h=this,e,d;return new c(function(){var c=-1;return new f(function(){if(d==b){d=h.GetEnumerator();e=[]}},function(){c++;if(e.length<=c)return d.MoveNext()?this.Yield(e[c]=d.Current()):a;return this.Yield(e[c])},g.Blank)})},Catch:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c;return new f(function(){c=e.GetEnumerator()},function(){try{return c.MoveNext()?this.Yield(c.Current()):a}catch(d){b(d);return a}},function(){d.Dispose(c)})})},Finally:function(b){b=d.CreateLambda(b);var e=this;return new c(function(){var c;return new f(function(){c=e.GetEnumerator()},function(){return c.MoveNext()?this.Yield(c.Current()):a},function(){try{d.Dispose(c)}finally{b()}})})},Trace:function(c,a){if(c==b)c="Trace";a=d.CreateLambda(a);return this.Do(function(b){console.log(c,":",a(b))})}};var g={Identity:function(a){return a},True:function(){return e},Blank:function(){}},i={Boolean:typeof e,Number:typeof 0,String:typeof "",Object:typeof {},Undefined:typeof undefined,Function:typeof function(){}},d={CreateLambda:function(a){if(a==b)return g.Identity;if(typeof a==i.String)if(a=="")return g.Identity;else if(a.indexOf("=>")==-1)return new Function("$,$$,$$$,$$$$","return "+a);else{var c=a.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);return new Function(c[1],"return "+c[2])}return a},IsIEnumerable:function(b){if(typeof Enumerator!=i.Undefined)try{new Enumerator(b);return e}catch(c){}return a},Compare:function(a,b){return a===b?0:a>b?1:-1},Dispose:function(a){a!=b&&a.Dispose()}},k={Before:0,Running:1,After:2},f=function(d,f,g){var c=new p,b=k.Before;this.Current=c.Current;this.MoveNext=function(){try{switch(b){case k.Before:b=k.Running;d();case k.Running:if(f.apply(c))return e;else{this.Dispose();return a}case k.After:return a}}catch(g){this.Dispose();throw g}};this.Dispose=function(){if(b!=k.Running)return;try{g()}finally{b=k.After}}},p=function(){var a=b;this.Current=function(){return a};this.Yield=function(b){a=b;return e}},j=function(f,b,c,e){var a=this;a.source=f;a.keySelector=d.CreateLambda(b);a.descending=c;a.parent=e};j.prototype=new c;j.prototype.CreateOrderedEnumerable=function(a,b){return new j(this.source,a,b,this)};j.prototype.ThenBy=function(b){return this.CreateOrderedEnumerable(b,a)};j.prototype.ThenByDescending=function(a){return this.CreateOrderedEnumerable(a,e)};j.prototype.GetEnumerator=function(){var i=this,e,d,h=0;return new f(function(){e=i.source.ToArray();d=c.Range(0,e.length).ToArray();sortContext=l.Create(i,b);sortContext.GenerateKeys(e);d.sort(function(a,b){return sortContext.Compare(a,b)})},function(){return h<d.length?this.Yield(e[d[h++]]):a},g.Blank)};var l=function(c,d,e){var a=this;a.keySelector=c;a.descending=d;a.child=e;a.keys=b};l.Create=function(a,d){var c=new l(a.keySelector,a.descending,d);if(a.parent!=b)return l.Create(a.parent,c);return c};l.prototype.GenerateKeys=function(d){var a=this;a.keys=c.From(d).Select(a.keySelector).ToArray();a.child!=b&&a.child.GenerateKeys(d)};l.prototype.Compare=function(e,f){var a=this,c=d.Compare(a.keys[e],a.keys[f]);if(c==0){if(a.child!=b)return a.child.Compare(e,f);c=d.Compare(e,f)}return a.descending?-c:c};var h=function(a){this.source=a};h.prototype=new c;h.prototype.Any=function(a){return a==b?this.source.length>0:c.prototype.Any.apply(this,arguments)};h.prototype.Count=function(a){return a==b?this.source.length:c.prototype.Count.apply(this,arguments)};h.prototype.ElementAt=function(a){return 0<=a&&a<this.source.length?this.source[a]:c.prototype.ElementAt.apply(this,arguments)};h.prototype.ElementAtOrDefault=function(a,b){return 0<=a&&a<this.source.length?this.source[a]:b};h.prototype.First=function(a){return a==b&&this.source.length>0?this.source[0]:c.prototype.First.apply(this,arguments)};h.prototype.FirstOrDefault=function(a,d){if(d!=b)return c.prototype.FirstOrDefault.apply(this,arguments);return this.source.length>0?this.source[0]:a};h.prototype.Last=function(d){var a=this;return d==b&&a.source.length>0?a.source[a.source.length-1]:c.prototype.Last.apply(a,arguments)};h.prototype.LastOrDefault=function(d,e){var a=this;if(e!=b)return c.prototype.LastOrDefault.apply(a,arguments);return a.source.length>0?a.source[a.source.length-1]:d};h.prototype.Skip=function(d){var b=this.source;return new c(function(){var c;return new f(function(){c=d<0?0:d},function(){while(c<b.length){return this.Yield(b[c++]);c++}return a},g.Blank)})};h.prototype.TakeExceptLast=function(a){if(a==b)a=1;return this.Take(this.source.length-a)};h.prototype.TakeFromLast=function(a){return this.Skip(this.source.length-a)};h.prototype.Reverse=function(){var b=this.source;return new c(function(){var c;return new f(function(){c=b.length},function(){return c>0?this.Yield(b[--c]):a},g.Blank)})};h.prototype.SequenceEqual=function(d,e){if((d instanceof h||d instanceof Array)&&e==b&&c.From(d).Count()!=this.Count())return a;return c.prototype.SequenceEqual.apply(this,arguments)};h.prototype.ToString=function(a,d){if(d!=b||!(this.source instanceof Array))return c.prototype.ToString.apply(this,arguments);if(a==b)a="";return this.source.join(a)};h.prototype.GetEnumerator=function(){var c=this.source,b=0;return new f(g.Blank,function(){while(b<c.length){return this.Yield(c[b++]);b++}return a},g.Blank)};var n=function(){var h=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d=function(a){if(a===b)return "null";if(a===undefined)return "undefined";return typeof a.toString===i.Function?a.toString():Object.prototype.toString.call(a)},l=function(d,c){var a=this;a.Key=d;a.Value=c;a.Prev=b;a.Next=b},j=function(){this.First=b;this.Last=b};j.prototype={AddLast:function(c){var a=this;if(a.Last!=b){a.Last.Next=c;c.Prev=a.Last;a.Last=c}else a.First=a.Last=c},Replace:function(c,a){if(c.Prev!=b){c.Prev.Next=a;a.Prev=c.Prev}else this.First=a;if(c.Next!=b){c.Next.Prev=a;a.Next=c.Next}else this.Last=a},Remove:function(a){if(a.Prev!=b)a.Prev.Next=a.Next;else this.First=a.Next;if(a.Next!=b)a.Next.Prev=a.Prev;else this.Last=a.Prev}};var k=function(c){var a=this;a.count=0;a.entryList=new j;a.buckets={};a.compareSelector=c==b?g.Identity:c};k.prototype={Add:function(i,j){var a=this,g=a.compareSelector(i),f=d(g),c=new l(i,j);if(h(a.buckets,f)){for(var b=a.buckets[f],e=0;e<b.length;e++)if(a.compareSelector(b[e].Key)===g){a.entryList.Replace(b[e],c);b[e]=c;return}b.push(c)}else a.buckets[f]=[c];a.count++;a.entryList.AddLast(c)},Get:function(i){var a=this,c=a.compareSelector(i),g=d(c);if(!h(a.buckets,g))return undefined;for(var e=a.buckets[g],b=0;b<e.length;b++){var f=e[b];if(a.compareSelector(f.Key)===c)return f.Value}return undefined},Set:function(k,m){var b=this,g=b.compareSelector(k),j=d(g);if(h(b.buckets,j))for(var f=b.buckets[j],c=0;c<f.length;c++)if(b.compareSelector(f[c].Key)===g){var i=new l(k,m);b.entryList.Replace(f[c],i);f[c]=i;return e}return a},Contains:function(j){var b=this,f=b.compareSelector(j),i=d(f);if(!h(b.buckets,i))return a;for(var g=b.buckets[i],c=0;c<g.length;c++)if(b.compareSelector(g[c].Key)===f)return e;return a},Clear:function(){this.count=0;this.buckets={};this.entryList=new j},Remove:function(g){var a=this,f=a.compareSelector(g),e=d(f);if(!h(a.buckets,e))return;for(var b=a.buckets[e],c=0;c<b.length;c++)if(a.compareSelector(b[c].Key)===f){a.entryList.Remove(b[c]);b.splice(c,1);if(b.length==0)delete a.buckets[e];a.count--;return}},Count:function(){return this.count},ToEnumerable:function(){var d=this;return new c(function(){var c;return new f(function(){c=d.entryList.First},function(){if(c!=b){var d={Key:c.Key,Value:c.Value};c=c.Next;return this.Yield(d)}return a},g.Blank)})}};return k}(),q=function(a){var b=this;b.Count=function(){return a.Count()};b.Get=function(b){return c.From(a.Get(b))};b.Contains=function(b){return a.Contains(b)};b.ToEnumerable=function(){return a.ToEnumerable().Select(function(a){return new o(a.Key,a.Value)})}},o=function(b,a){this.Key=function(){return b};h.call(this,a)};o.prototype=new h;return c}()});(function(a){a.fn.toEnumerable=function(){return a.Enumerable.From(this).Select(function(b){return a(b)})};a.Enumerable.prototype.TojQuery=function(){return a(this.ToArray())}})(jQuery);
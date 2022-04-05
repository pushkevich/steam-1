(()=>{var e={399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USER:1,CHAR:2,MASK:3}},643:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return[];for(var n=[],a=!1,s=0;s<e.length;s++){var r=t[e[s]];if(a&&r&&(r=null,a=!1),r)r.regexp&&n.push(r);else{if(!a&&"\\"===e[s]){a=!0;continue}a=!1,n.push({char:e[s],next:null})}}return n}},842:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.data,n=e.input,a=void 0===n?"":n,r=e.selection,i=e.mask,o=e.maskChar,l=e.maskString,c=[],u="",d=0,h=0,m=0,p=0;i[d];){var f=t.length>h?t[h]:null,v=i[d],g=null;if(r.start<=d&&m<a.length&&(g=a.slice(m)),v.char&&(g&&g[0]===v.char?m++:(f&&(f.char===v.char||f.type!==s.default.USER)||a)&&h++,c.push({char:v.char,type:s.default.CHAR}),g&&p++,u+=v.char),v.regexp){var k=null;if(g){for(var y=0;!v.regexp.test(g[y])&&g.length>y;)y++,m++;g.length>y&&(m++,p++,h++,k=g[y],c.push({char:k,type:s.default.USER}),u+=k)}if(!k){if(f&&f.type===s.default.CHAR&&t.length>h+1){h++;continue}f&&f.type===s.default.USER&&v.regexp.test(f.char)?(c.push({char:f.char,type:s.default.USER}),u+=f.char,h++):(k=l?l[d]:o,c.push({char:k,type:s.default.MASK}),t.length>d&&h++,u+=k)}}d++}for(var w=r.start+p,S=c.length-1,_=0;S>=0&&c[S].type!==s.default.USER;)c[S].type===s.default.MASK&&(_=0),c[S].type===s.default.CHAR&&_++,S--;S+=_;for(var b="",C=0;C<=S;C++)b+=c[C].char;return{value:c,visibleValue:b,maskedValue:u,selection:{start:w,end:w}}};var a,s=(a=n(399))&&a.__esModule?a:{default:a}},478:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.value,n=e.selection,a=e.reformat,r=(e.mask,e.maskChar),i=e.maskString;if(n.end<n.start){var o=n.end;n.end=n.start,n.start=o}return n.start===n.end?t:t.length>n.start?t.slice(0,n.start).concat(function(){if(a)return"";if(i){for(var e=[],t=n.start;t<n.end;t++)e.push({char:i[t],type:s.default.MASK});return e}return function(e){for(var t=[],n=0;n<e;n++)t.push({char:r,type:s.default.MASK});return t}(n.end-n.start)}(),t.slice(n.end,t.length)):t};var a,s=(a=n(399))&&a.__esModule?a:{default:a}},217:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createInput=t.defaults=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=l(n(643)),r=l(n(842)),i=l(n(478)),o=l(n(399));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t){var n=t.value,a=t.mask,r=t.reformat,i=t.maskFormat,o=t.maskChar,l=t.maskString;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l&&l.length!==a.length)throw new Error("maskString must have same length as mask");if(o.length>1)throw new Error("maskChar must have only 1 char");this._maskString=l,this._maskChar=o,this._reformat=r,this.selection={start:0,end:0},this.setMaskFormat(i),this._mask=(0,s.default)(a,this._maskFormat),this.setValue(n)}return a(e,[{key:"setMaskFormat",value:function(e){this._maskFormat=e.reduce((function(e,t){return e[t.str]=t,e}),{})}},{key:"input",value:function(e){var t=this._value,n=void 0;this._reformat?n=this._reformat({data:t,input:e,selection:this.selection}):(t=(0,i.default)({value:t,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString}),this.selection.end=this.selection.start,n=(0,r.default)({data:t,input:e,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})),this._value=n.value,this._maskedValue=n.maskedValue,this._visibleValue=n.visibleValue,this.setSelection(n.selection)}},{key:"setSelection",value:function(e){var t=e.start,n=e.end;this.selection={start:t,end:n}}},{key:"getSelection",value:function(){return{start:this.selection.start,end:this.selection.end}}},{key:"backspace",value:function(){this.removePreviosOrSelected()}},{key:"paste",value:function(e){this.input(e)}},{key:"setMask",value:function(e){this._mask=(0,s.default)(e,this._maskFormat),this.setValue(this._value)}},{key:"getState",value:function(){return{value:this.getValue(),maskedValue:this.getMaskedValue(),visibleValue:this.getVisibleValue(),selection:this.getSelection()}}},{key:"getValue",value:function(){return this._value}},{key:"setReformat",value:function(e){this._reformat=e,this.setValue(this._value)}},{key:"getMaskedValue",value:function(){return this._maskedValue}},{key:"getVisibleValue",value:function(){return this._visibleValue}},{key:"setMaskChar",value:function(e){if(e.length>1)throw new Error("maskChar must have only 1 char");this._maskChar=e,this.setValue(this._value)}},{key:"setMaskString",value:function(e){if(e&&e.length!==this._mask.length)throw new Error("maskString must have same length as mask");this._maskString=e,this.setValue(this._value)}},{key:"removePreviosOrSelected",value:function(){this.selection.start===this.selection.end&&(this.selection.start=this.selection.end-1,this.selection.start<0&&(this.selection.start=0)),this.input("")}},{key:"removeNextOrSelected",value:function(){this.selection.start===this.selection.end&&this.selection.end++,this.input("")}},{key:"setValue",value:function(e){var t=void 0;if(this._reformat)t=this._reformat({data:e,selection:this.selection});else{var n=e;if(!Array.isArray(n)){n=[];for(var a=0;a<e.length;a++)n.push({char:e[a],type:o.default.USER})}t=(0,r.default)({data:n,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})}this._value=t.value,this._maskedValue=t.maskedValue,this._visibleValue=t.visibleValue,this.setSelection(t.selection)}}]),e}(),u=t.defaults={maskFormat:[{str:"0",regexp:/[0-9]/},{str:"*",regexp:/./},{str:"a",regexp:/[a-zA-Z]/}],maskChar:"",showMask:!1,removeSelectedRange:i.default};t.createInput=function(e){var t=e.value,n=e.maskString,a=e.mask,s=e.reformat,r=e.maskFormat,i=void 0===r?u.maskFormat:r,o=e.maskChar,l=s,d=a;return l||d?l&&(d=null):l=function(e){return e},new c({value:t,mask:d,reformat:l,maskFormat:i,maskChar:void 0===o?u.maskChar:o,maskString:n})}},780:(e,t,n)=>{"use strict";var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(217),i=(a=n(626))&&a.__esModule?a:{default:a},o=function(){function e(t,n){var a=this,s=n.mask,i=void 0===s?r.defaults.mask:s,o=n.value,l=void 0===o?"":o,c=n.reformat,u=n.maskString,d=n.maskChar,h=void 0===d?r.defaults.maskChar:d,m=n.maskFormat,p=void 0===m?r.defaults.maskFormat:m,f=n.showMask,v=n.alwaysShowMask,g=n.onChange;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showValue=function(){a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.element.value=a.input.getMaskedValue():a.element.value=a.input.getVisibleValue()},this.setSelection=function(){if(a.canSetSelection){var e=a.input.getSelection();a.element.setSelectionRange(e.start,e.end),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,0)})((function(){return a.element.setSelectionRange(e.start,e.end)}))}},this.onPaste=function(e){e.preventDefault(),a.getSelection(),a.input.paste(e.clipboardData.getData("Text")),a.showValue(),setTimeout(a.setSelection,0),a.props.onChange&&a.props.onChange(e)},this.onChange=function(e){var t;t=a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.input.getMaskedValue():a.input.getVisibleValue(),e.target.value!==t&&(a.getSelection(),a.input.setValue(e.target.value),a.showValue(),setTimeout(a.setSelection,0)),a.props.onChange&&a.props.onChange(e)},this.onKeyPress=function(e){e.metaKey||e.altKey||e.ctrlKey||"Enter"===e.key||(e.preventDefault(),a.getSelection(),a.input.input(e.key||e.data||String.fromCharCode(e.which)),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onKeyDown=function(e){8===e.which&&(e.preventDefault(),a.getSelection(),a.input.removePreviosOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e)),46===e.which&&(e.preventDefault(),a.getSelection(),a.input.removeNextOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onFocus=function(){a.canSetSelection=!0},this.onBlur=function(){a.canSetSelection=!1},this.input=this.input=(0,r.createInput)({value:l,reformat:c,maskString:u,maskChar:h,mask:i,maskFormat:p}),this.props={mask:i,value:l,reformat:c,maskChar:h,maskFormat:p,maskString:u,showMask:f,alwaysShowMask:v,onChange:g},this.showMask=v||f,this.element=t,this.showValue(),this.subscribe()}return s(e,[{key:"getSelection",value:function(){this.input.setSelection({start:this.element.selectionStart,end:this.element.selectionEnd})}},{key:"subscribe",value:function(){this.unsubscribe={onPaste:(0,i.default)(this.element,"paste",this.onPaste),onKeyDown:(0,i.default)(this.element,"keydown",this.onKeyDown),onKeyPress:(0,i.default)(this.element,this.keyPressPropName(),this.onKeyPress),onChange:(0,i.default)(this.element,"change",this.onChange),onFocus:(0,i.default)(this.element,"focus",this.onFocus),onBlur:(0,i.default)(this.element,"blur",this.onBlur)}}},{key:"keyPressPropName",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent.match(/Android/i)?"beforeinput":"keypress"}},{key:"setProps",value:function(e){var t=e.mask,n=e.value,a=e.reformat,s=e.maskString,r=e.maskChar,i=e.maskFormat,o=e.showMask,l=e.alwaysShowMask,c=e.onChange,u=!1;this.props.onChange!==c&&(this.props.onChange=c),this.props.alwaysShowMask===l&&this.props.showMask===o||(this.showMask=l||o,this.props.alwaysShowMask=l,this.props.showMask=o,u=!0),i&&i!==this.props.maskFormat&&(this.input.setMaskFormat(i),this.props.maskFormat=i,u=!0),t!==this.props.mask&&(this.input.setMask(t),this.props.mask=t,u=!0),s!==this.props.maskString&&(this.input.setMaskString(s),this.props.maskString=s,u=!0),r!==this.props.maskChar&&(this.input.setMaskChar(r),this.props.maskChar=r,u=!0),a!==this.props.reformat&&(this.input.setReformat(a),this.props.reformat=a,u=!0),n!==this.props.value&&(this.input.setValue(n),this.props.value=n,u=!0),u&&(this.showValue(),this.setSelection())}},{key:"destroy",value:function(){this.unsubscribe.onPaste(),this.unsubscribe.onKeyDown(),this.unsubscribe.onKeyPress(),this.unsubscribe.onChange(),this.unsubscribe.onFocus(),this.unsubscribe.onBlur()}}]),e}();t.Z=o},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],o=0;o<e.length;o++){var l=e[o],c=a.base?l[0]+a.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var h=n(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var p=s(m,a);a.byIndex=o,t.splice(o,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=a(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var o=n(r[i]);t[o].references--}for(var l=a(e,s),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},626:e=>{!function(){"use strict";function t(e,t,n,a){var s="removeEventListener",r=function(){e[s](t,n)};return e.addEventListener?(e.addEventListener(t,n,a),r):e.attachEvent?(t="on"+t,e.attachEvent(t,n),s="detachEvent",r):e.on?(e.on(t,n),s="off",r):void 0}t.define=function(e,t){return function(n,a,s,r){return n[e](a,s,r),function(){n[t](a,s)}}},e.exports=t}()},619:()=>{const e=document.querySelectorAll(".dropdown:not(.is-hoverable)");function t(){e.forEach((function(e){e.classList.remove("is-active")}))}e.length>0&&(e.forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation(),e.classList.toggle("is-active")}))})),document.addEventListener("click",(function(e){t()}))),document.addEventListener("keydown",(function(e){let n=e||window.event;"Esc"!==n.key&&"Escape"!==n.key||t()}))},72:()=>{for(var e=function(e){e.preventDefault(),e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)},t=document.getElementsByClassName("buy"),n=0;n<t.length;n++)t[n].addEventListener("click",e,!1)},514:()=>{const e=document.querySelector("#file-js-example input[type=file]");e.onchange=()=>{e.files.length>0&&(document.querySelector("#file-js-example .file-name").textContent=e.files[0].name)}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};n.r(e);var t=n(379),a=n.n(t),s=n(795),r=n.n(s),i=n(569),o=n.n(i),l=n(565),c=n.n(l),u=n(216),d=n.n(u),h=n(589),m=n.n(h),p={};function f(e,t,n=""){var a=new Headers;return n&&a.append("Content-Type",n),async e=>{const n=await fetch(t,{method:"POST",body:e,headers:a});if(!n.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await n.text()}}function v(e,t){if(0===e.length)return!0;for(let n=0;n<t;++n)if(!e[n].value)return!1;return!0}function g(e,t="success"){Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:t,text:e})}function k(e){let t=window.location.origin+window.location.pathname;return e.filter((e=>e.page===t.split("/").pop()))}function y(e,t){let n=JSON.parse(e);for(;t.firstChild;)t.firstChild.remove();for(let e=0;e<n.length;e++){let a=document.createElement("div");a.classList.add("column"),a.classList.add("is-one-quarter"),a.classList.add("game"),a.innerHTML+='\n                    <div class="game-cover">\n                        <div class="buy" id="'+n[e].id+'">\n                            <span class="icon">\n                                <ion-icon name="cart-outline"></ion-icon>\n                            </span>\n                            Добавить в корзину\n                        </div>\n                        <figure class=\'image is-full\'>\n                            <img src="images/administrator/'+n[e].cover_game+'" alt="<?=$game->name_game;?>">\n                        </figure>\n                    </div>\n                    <div class="game-description">\n                        <div class="game-title">\n                            '+n[e].name_game+'\n                        </div>\n                        <div class="game-company">\n                            '+n[e].company.name_company+'\n                        </div>\n                        <div class="game-price">\n                            '+n[e].base_price+' &#x20bd\n                            <span class="discount">-'+n[e].tax+"%</span>\n                        </div>\n                    </div>",t.append(a)}}p.styleTagTransform=m(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d(),a()(e.default,p),e.default&&e.default.locals&&e.default.locals,document.addEventListener("DOMContentLoaded",(()=>{let e=k([{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"},{page:"basket",action:"getProducts",header:"application/x-www-form-urlencoded"}]).shift();const t=f(FormData,e.action);document.querySelectorAll("form").forEach((n=>{n.addEventListener("submit",(function(a){let s=function(){let e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll("textarea"),n=v(e,e.length),a=v(t,t.length);return!(!n||!a)}();a.preventDefault();const r=new FormData(this);var i;0==s?g("Не все данные введены","error"):t(r).then((t=>{""==t.trim()?g(e.message):g(e.message_error,"error"),function(e,t){e.reset(),document.getElementById("file").value="",document.querySelector("#file-js-example .file-name").textContent="Ничего не добавлено"}(n)})).catch((e=>console.error(e))),setTimeout(void((i=e.redirect)&&window.setTimeout((function(){window.location=i}),2e3)),2e3)}))}))}));let w=document.getElementById("dashboard");document.getElementById("selector-games").addEventListener("change",(function(){g("Загружаем игры...","info"),f(this.value,"selector","application/x-www-form-urlencoded")(this.value).then((e=>{y(e,w)})).catch((e=>{console.log(e)}))}));let S=document.getElementById("dashboard");document.getElementById("selector-genres").addEventListener("change",(function(){g("Загружаем игры...","info"),f(this.value,"selector-genres","application/x-www-form-urlencoded")(this.value).then((e=>{y(e,S)})).catch((e=>{console.log(e)}))}));var _=n(780);function b(){let e=document.getElementById("phone").value,t=document.getElementById("password").value,n=function(e){return""==e?(C("phoneErrDiv","Телефон не введен!"),!1):!1===/[0-9]/.test(e)?(C("phoneErrDiv","Телефон не подходит!"),!1):(C("phoneErrDiv",""),!0)}(e),a=function(e){return""==e?(C("passwordErrDiv","Пароль не введен!"),!1):!1===/[a-z]/.test(e)?(C("passwordErrDiv","Пароль не подходит!"),!1):(C("passwordErrDiv",""),!0)}(t);return!(!n||!a)}function C(e,t){document.getElementById(e).innerHTML=t}var E=document.getElementById("enterToAccount");function M(e){const t=JSON.parse(localStorage.getItem("steamCart")).filter((t=>t.id!==e));localStorage.setItem("steamCart",JSON.stringify(t))}E&&(E.onclick=function(){Swal.fire({title:"Войти в аккаунт",html:'<input id="phone" type="tel" class="auth-field input-selector" placeholder="Номер телефона"><div id="phoneErrDiv"></div><input id="password" type="password" class="auth-field" placeholder="Пароль"><div id="passwordErrDiv"></div>',preConfirm:()=>{if(b()){const e={phone:document.getElementById("phone").value,password:document.getElementById("password").value};let t={header:"application/x-www-form-urlencoded"},n="login",a=JSON.stringify(e);f(0,n,t.header)(a,n,t.header).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}else Swal.showValidationMessage("Проверьте правильность введных данных")},backdrop:'\n            rgba(18,97,199,0.4)\n            url("/images/nyan-cat.gif")\n            left tops\n            no-repeat\n          ',showConfirmButton:!0,showDenyButton:!0,background:"linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)",confirmButtonColor:"#0C57C7",confirmButtonText:"Войти",denyButtonText:"или зарегестрироваться"}).then((e=>{e.isConfirmed?Swal.fire("Вы успешно вошли","","success"):e.isDenied&&(Swal.fire({title:"Зарегестрироваться",html:'<input id="phone" type="tel" class="auth-field input-selector" placeholder="Номер телефона"><div id="phoneErrDiv"></div><input id="password" type="password" class="auth-field" placeholder="Пароль"><div id="passwordErrDiv"></div>',preConfirm:()=>{if(b()){const e={phone:document.getElementById("phone").value,password:document.getElementById("password").value};let t={header:"application/x-www-form-urlencoded"},n="register",a=JSON.stringify(e);f(0,n,t.header)(a,n,t.header).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}else Swal.showValidationMessage("Проверьте правильность введных данных")},showConfirmButton:!0,background:"linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)",confirmButtonColor:"#0C57C7",confirmButtonText:"Зарегестрироваться"}).then((e=>{e.isConfirmed&&b()&&Swal.fire("Вы успешно зарегестрировались","","success")})),new _.Z(document.querySelector(".input-selector"),{mask:"+0-(000)-000-00-00",alwaysShowMask:!0,maskChar:"_"}))})),new _.Z(document.querySelector(".input-selector"),{mask:"+0-(000)-000-00-00",alwaysShowMask:!0,maskChar:"_"})});var x=document.getElementById("briefCart");function V(){if(x){let e=JSON.parse(localStorage.getItem("steamCart")),t={header:"application/x-www-form-urlencoded"},n=document.getElementById("cartContent"),a=document.createElement("div");a.classList.add("cart-products");let s=document.createElement("div");s.classList.add("product-in-cart");let r=document.createElement("div");if(r.classList.add("product-in-cart__final-price"),!e.length){let e=document.createElement("div");e.classList.add("empty-cart"),e.innerHTML="<div style='text-align: center;'>Корзина пустая :(</div>",n.append(e)}let i=0,o="cart/brief",l=[];e.forEach((e=>{l.push(parseInt(e.id))})),f(0,o,t.header)(l).then((t=>{JSON.parse(t).forEach(((t,o)=>{i+=e[o].count*t.price,s.innerHTML+="<div class='product-in-cart__title'>"+t.name_game+"<span class='product-in-cart__count'>(x"+e[o].count+")</span><div class='product-in-cart__price'>"+t.price+"<label class='product-in-cart__delete' data-el='"+e[o].id+"' id='"+e[o].id+"'>удалить</label></div></div>",r.innerHTML="<div class='product-in-cart__price'>Финальная цена: "+i+"</div><div class='arange'><a href='/basket'>Оформить</a></div>",a.append(s),a.append(r),n.append(a)}))})).catch((e=>{console.log(e)})),setTimeout(L,1e3)}}function L(){[...document.getElementsByClassName("product-in-cart__delete")].forEach((e=>e.addEventListener("click",(e=>{M(e.target.getAttribute("data-el"));let t=document.getElementsByClassName("cart-products")[0];t&&t.parentNode.removeChild(t),V()}))))}let T;document.getElementById("briefCart").addEventListener("click",(function(e){let t=document.getElementsByClassName("cart-products")[0];t&&t.parentNode.removeChild(t),V()})),document.querySelectorAll(".buy").forEach((e=>e.addEventListener("click",(()=>function(e){if((async()=>{const e=await fetch("get_auth",{method:"POST"});if(!e.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await e.text()})().then((e=>{e.length||(g("Вы не авторизованы","error"),T=0)})).catch((e=>console.error(e))),null!=T)return!1;let t=JSON.parse(localStorage.getItem("steamCart"))||[],n=t.find((t=>t.id===e));n?n.count=n.count+1:(n={id:e,count:1},t.push(n)),localStorage.setItem("steamCart",JSON.stringify(t)),V(),g("Товар под номером "+e+" в корзине")}(e.id)))));let B=k([{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"},{page:"basket",action:"getProducts",header:"application/x-www-form-urlencoded"}]);if(B.length){let e=document.createElement("div");e.classList.add("basket-products");let t=document.createElement("div"),n=document.getElementById("basket"),a=document.getElementById("cart-data"),s=0,r=0,i=[],o=B.shift(),l=JSON.parse(localStorage.getItem("steamCart"));l.length||window.setTimeout((function(){window.location="/"}),500),l.forEach((e=>{i.push(parseInt(e.id))})),f(0,o.action,o.header)(i).then((i=>{JSON.parse(i).forEach(((t,a)=>{s+=l[a].count*t.base_price,r+=l[a].count,e.innerHTML+="<div class='product-in-cart__image'><img src='images/administrator/"+t.cover_game+"' alt='"+t.name_game+"'></div><div class='product-in-cart__description'><h2 class='<h2'>"+t.name_game+"</h2><div class='product-in-cart__company-information'>"+t.company.name_company+"</div><div class='product-in-cart__price-information'>"+t.base_price+" &#x20bd<span>(x"+l[a].count+")</span><span class='discount'>"+t.tax.tax+" %</span></div><div class='product-in-cart__product-categories'><ul class='column is-12'><li>"+t.genre.name_genre+"</li></ul></div><div class='product-in-cart__delete-from-cart'><a class='delete-link' data-el='"+l[a].id+"' id='"+l[a].id+"'>удалить из корзины</a></div></div>",n.append(e)})),t.innerHTML+=r+"<br>"+s+"&#x20bd <br>",a.append(t)})).catch((e=>console.error(e))),setTimeout((function(){[...document.getElementsByClassName("delete-link")].forEach((e=>e.addEventListener("click",(e=>{M(e.target.getAttribute("data-el"));let t=document.getElementsByClassName("cart-products")[0];t&&t.parentNode.removeChild(t),V(),window.setTimeout((function(){window.location="/basket"}),500)}))))}),1e3)}n(619),n(72),n(514)})()})();

// ==UserScript==
// @author           Daniil
// @contributors     Oleg Valter <oleg.a.valter@gmail.com>
// @description      Gets the close vote count for people without the close vote priviledge
// @grant            none
// @homepage         https://github.com/userscripters/retrieveCVRVDV#readme
// @match            https://*.askubuntu.com/questions/*
// @match            https://*.mathoverflow.net/questions/*
// @match            https://*.serverfault.com/questions/*
// @match            https://*.stackapps.com/questions/*
// @match            https://*.stackexchange.com/questions/*
// @match            https://*.stackoverflow.com/questions/*
// @name             close-reopen-delete-vote-retriever
// @namespace        userscripters
// @source           git+https://github.com/userscripters/retrieveCVRVDV.git
// @supportURL       https://github.com/userscripters/retrieveCVRVDV/issues
// @version          1.1.0
// ==/UserScript==

"use strict";var __awaiter=this&&this.__awaiter||function(e,i,c,s){return new(c=c||Promise)(function(n,t){function r(e){try{a(s.next(e))}catch(e){t(e)}}function o(e){try{a(s.throw(e))}catch(e){t(e)}}function a(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(r,o)}a((s=s.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(n,r){var o,a,i,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,a=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){c.label=t[1];break}if(6===t[0]&&c.label<i[1]){c.label=i[1],i=t;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(t);break}i[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],a=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},__read=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};!function(e,l){e.addEventListener("load",function(){return __awaiter(void 0,void 0,void 0,function(){function t(e,t){$("#question-header").next().children().last().addClass("mr16"),$("#question-header").next().append('<div class="grid--cell ws-nowrap mb8"><span class="fc-light mr2">'+e+" votes</span> "+t+"</div>")}var n,r,o,a,i,c,s;return __generator(this,function(e){switch(e.label){case 0:return(n=StackExchange.options.user.canSeeDeletedPosts,r=!!document.getElementsByClassName("close-question-link").length,n&&r)?[2]:(c=l.hostname,s=StackExchange.question.getQuestionId(),o={site:c,filter:"!*7PiiPofIm9zBW4e_7IOD-h_DExn",key:"5uXDnm8574pzkaCadaFv)A(("},a="https://api.stackexchange.com/2.2/questions/"+s+"?"+Object.keys(o).map(function(e){return e+"="+o[e]}).join("&"),[4,fetch(a)]);case 1:return[4,e.sent().json()];case 2:return i=e.sent(),c=__read(i.items,1),s=c[0],a=s.close_vote_count,i=s.reopen_vote_count,c=s.delete_vote_count,s=s.closed_date,!r&&s?t("Reopen",i):r||t("Close",a),!n&&s&&t("Delete",c),[2]}})})})}(window,(document,location));
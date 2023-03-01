// ==UserScript==
// @name            Close Reopen Delete Vote Retriever
// @author          Daniil
// @contributors    Oleg Valter <oleg.a.valter@gmail.com>
// @description     Gets the close vote count for people without the close vote priviledge
// @grant           none
// @homepage        https://github.com/userscripters/retrieveCVRVDV#readme
// @match           https://stackoverflow.com/questions/*
// @match           https://serverfault.com/questions/*
// @match           https://superuser.com/questions/*
// @match           https://*.stackexchange.com/questions/*
// @match           https://askubuntu.com/questions/*
// @match           https://stackapps.com/questions/*
// @match           https://mathoverflow.net/questions/*
// @match           https://pt.stackoverflow.com/questions/*
// @match           https://ja.stackoverflow.com/questions/*
// @match           https://ru.stackoverflow.com/questions/*
// @match           https://es.stackoverflow.com/questions/*
// @match           https://meta.stackoverflow.com/questions/*
// @match           https://meta.serverfault.com/questions/*
// @match           https://meta.superuser.com/questions/*
// @match           https://meta.askubuntu.com/questions/*
// @match           https://meta.mathoverflow.net/questions/*
// @match           https://pt.meta.stackoverflow.com/questions/*
// @match           https://ja.meta.stackoverflow.com/questions/*
// @match           https://ru.meta.stackoverflow.com/questions/*
// @match           https://es.meta.stackoverflow.com/questions/*
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/retrieveCVRVDV.git
// @supportURL      https://github.com/userscripters/retrieveCVRVDV/issues
// @version         1.1.1
// ==/UserScript==

"use strict";var __awaiter=this&&this.__awaiter||function(e,i,c,s){return new(c=c||Promise)(function(n,t){function o(e){try{a(s.next(e))}catch(e){t(e)}}function r(e){try{a(s.throw(e))}catch(e){t(e)}}function a(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(o,r)}a((s=s.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(o,r){var a,i,c,s={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]},l={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function e(n){return function(e){var t=[n,e];if(a)throw new TypeError("Generator is already executing.");for(;s=l&&t[l=0]?0:s;)try{if(a=1,i&&(c=2&t[0]?i.return:t[0]?i.throw||((c=i.return)&&c.call(i),0):i.next)&&!(c=c.call(i,t[1])).done)return c;switch(i=0,(t=c?[2&t[0],c.value]:t)[0]){case 0:case 1:c=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(c=0<(c=s.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3]))s.label=t[1];else if(6===t[0]&&s.label<c[1])s.label=c[1],c=t;else{if(!(c&&s.label<c[2])){c[2]&&s.ops.pop(),s.trys.pop();continue}s.label=c[2],s.ops.push(t)}}t=r.call(o,s)}catch(e){t=[6,e],i=0}finally{a=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__read=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||0<t--)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i};!function(e,f){e.addEventListener("load",function(){return __awaiter(void 0,void 0,void 0,function(){function t(e,t){$("#question-header").next().children().last().addClass("mr16"),$("#question-header").next().append('<div class="flex--item ws-nowrap mb8"><span class="fc-light mr2">'.concat(e," votes</span> ").concat(t,"</div>"))}var n,o,r,a,i,c,s,l,u;return __generator(this,function(e){switch(e.label){case 0:return(n=StackExchange.options.user.canSeeDeletedPosts,o=!!document.getElementsByClassName("js-close-question-link").length,n&&o)?[2]:(i=f.hostname,a=StackExchange.question.getQuestionId(),r={site:i,filter:"!*7PiiPofIm9zBW4e_7IOD-h_DExn",key:"5uXDnm8574pzkaCadaFv)A(("},i="https://api.stackexchange.com/2.2/questions/"+a+"?"+Object.keys(r).map(function(e){return"".concat(e,"=").concat(r[e])}).join("&"),[4,fetch(i)]);case 1:return[4,e.sent().json()];case 2:return a=e.sent(),i=__read(a.items,1),u=i[0],c=u.close_vote_count,s=u.reopen_vote_count,l=u.delete_vote_count,u=u.closed_date,!o&&u?t("Reopen",s):o||t("Close",c),!n&&u&&t("Delete",l),[2]}})})})}(window,(document,location));
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

"use strict";((e,l)=>{e.addEventListener("load",async()=>{var e=StackExchange.options.user.canSeeDeletedPosts,t=!!document.getElementsByClassName("js-close-question-link").length;if(!e||!t){var s=l.hostname,n=StackExchange.question.getQuestionId();const c={site:s,filter:"!*7PiiPofIm9zBW4e_7IOD-h_DExn",key:"5uXDnm8574pzkaCadaFv)A(("};var s="https://api.stackexchange.com/2.2/questions/"+n+"?"+Object.keys(c).map(e=>e+"="+c[e]).join("&"),[{close_vote_count:n,reopen_vote_count:s,delete_vote_count:a,closed_date:o}]=(await(await fetch(s)).json())["items"];function i(e,t){$("#question-header").next().children().last().addClass("mr16"),$("#question-header").next().append(`<div class="flex--item ws-nowrap mb8"><span class="fc-light mr2">${e} votes</span> ${t}</div>`)}!t&&o?i("Reopen",s):t||i("Close",n),!e&&o&&i("Delete",a)}})})(window,(document,location));
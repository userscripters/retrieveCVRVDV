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

"use strict";
((w, _d, l) => {
    "use strict";
    w.addEventListener("load", async () => {
        const canSeeDVs = StackExchange.options.user.canSeeDeletedPosts;
        const canSeeCVs = !!document.getElementsByClassName("js-close-question-link").length;
        if (canSeeDVs && canSeeCVs)
            return;
        const API_KEY = "5uXDnm8574pzkaCadaFv)A((";
        const site = l.hostname;
        const questionid = StackExchange.question.getQuestionId();
        const parameters = { site: site, filter: "!*7PiiPofIm9zBW4e_7IOD-h_DExn", key: API_KEY };
        const url = "https://api.stackexchange.com/2.2/questions/" + questionid + "?" + Object.keys(parameters).map((k) => `${k}=${parameters[k]}`).join("&");
        function displayCount(type, variable) {
            $("#question-header").next().children().last().addClass("mr16");
            $("#question-header").next().append(`<div class="flex--item ws-nowrap mb8"><span class="fc-light mr2">${type} votes</span> ${variable}</div>`);
        }
        const resp = await fetch(url);
        const data = await resp.json();
        const { items: [{ close_vote_count, reopen_vote_count, delete_vote_count, closed_date }] } = data;
        if (!canSeeCVs && closed_date) {
            displayCount("Reopen", reopen_vote_count);
        }
        else if (!canSeeCVs) {
            displayCount("Close", close_vote_count);
        }
        if (!canSeeDVs && closed_date) {
            displayCount("Delete", delete_vote_count);
        }
    });
})(window, document, location);

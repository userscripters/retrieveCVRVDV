((w, _d, l) => {

    "use strict";
    w.addEventListener("load", async () => {
        const canSeeDVs = StackExchange.options.user.canSeeDeletedPosts;
        const canSeeCVs = !!document.getElementsByClassName("js-close-question-link").length;
        if (canSeeDVs && canSeeCVs) return;

        const API_KEY = "5uXDnm8574pzkaCadaFv)A((";
        const site = l.hostname;
        const questionid = StackExchange.question.getQuestionId();
        const parameters = { site: site, filter: "!*7PiiPofIm9zBW4e_7IOD-h_DExn", key: API_KEY };
        //@ts-expect-error
        const url = "https://api.stackexchange.com/2.2/questions/" + questionid + "?" + Object.keys(parameters).map((k) => `${k}=${parameters[k]}`).join("&");

        /**
         * @summary utility function for displaying vote counts
         * @param {"Reopen"|"Close"|"Delete"} type
         * @param {number} variable
         */
        function displayCount(type, variable) {
            $("#question-header").next().children().last().addClass("mr16");
            $("#question-header").next().append(`<div class="flex--item ws-nowrap mb8"><span class="fc-light mr2">${type} votes</span> ${variable}</div>`);
        }

        const resp = await fetch(url);
        const data = await resp.json();

        const { items: [{
            close_vote_count,
            reopen_vote_count,
            delete_vote_count,
            closed_date
        }] } = data;

        if (!canSeeCVs && closed_date) {
            displayCount("Reopen", reopen_vote_count);
        } else if (!canSeeCVs) {
            displayCount("Close", close_vote_count);
        }

        if (!canSeeDVs && closed_date) {
            displayCount("Delete", delete_vote_count);
        }
    });

})(window, document, location);
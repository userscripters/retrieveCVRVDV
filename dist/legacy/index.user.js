// ==UserScript==
// @author           Daniil
// @contributors     Oleg Valter <oleg.a.valter@gmail.com>
// @description      Gets the close vote count for people without the close vote priviledge
// @grant            none
// @homepage         https://github.com/userscripters/retrieveCVRVDV#readme
// @match            https://*.stackexchange.com/questions/*
// @match            https://askubuntu.com/questions/*
// @match            https://es.meta.stackoverflow.com/questions/*
// @match            https://es.stackoverflow.com/questions/*
// @match            https://ja.meta.stackoverflow.com/questions/*
// @match            https://ja.stackoverflow.com/questions/*
// @match            https://mathoverflow.net/questions/*
// @match            https://meta.askubuntu.com/questions/*
// @match            https://meta.mathoverflow.net/questions/*
// @match            https://meta.serverfault.com/questions/*
// @match            https://meta.stackoverflow.com/questions/*
// @match            https://meta.superuser.com/questions/*
// @match            https://pt.meta.stackoverflow.com/questions/*
// @match            https://pt.stackoverflow.com/questions/*
// @match            https://ru.meta.stackoverflow.com/questions/*
// @match            https://ru.stackoverflow.com/questions/*
// @match            https://serverfault.com/questions/*
// @match            https://stackapps.com/questions/*
// @match            https://stackoverflow.com/questions/*
// @match            https://superuser.com/questions/*
// @name             Close Reopen Delete Vote Retriever
// @namespace        userscripters
// @run-at           document-start
// @source           git+https://github.com/userscripters/retrieveCVRVDV.git
// @supportURL       https://github.com/userscripters/retrieveCVRVDV/issues
// @version          1.1.0
// ==/UserScript==

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
(function (w, _d, l) {
    "use strict";
    w.addEventListener("load", function () { return __awaiter(void 0, void 0, void 0, function () {
        function displayCount(type, variable) {
            $("#question-header").next().children().last().addClass("mr16");
            $("#question-header").next().append("<div class=\"grid--cell ws-nowrap mb8\"><span class=\"fc-light mr2\">".concat(type, " votes</span> ").concat(variable, "</div>"));
        }
        var canSeeDVs, canSeeCVs, API_KEY, site, questionid, parameters, url, resp, data, _a, _b, close_vote_count, reopen_vote_count, delete_vote_count, closed_date;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    canSeeDVs = StackExchange.options.user.canSeeDeletedPosts;
                    canSeeCVs = !!document.getElementsByClassName("close-question-link").length;
                    if (canSeeDVs && canSeeCVs)
                        return [2];
                    API_KEY = "5uXDnm8574pzkaCadaFv)A((";
                    site = l.hostname;
                    questionid = StackExchange.question.getQuestionId();
                    parameters = { site: site, filter: "!*7PiiPofIm9zBW4e_7IOD-h_DExn", key: API_KEY };
                    url = "https://api.stackexchange.com/2.2/questions/" + questionid + "?" + Object.keys(parameters).map(function (k) { return "".concat(k, "=").concat(parameters[k]); }).join("&");
                    return [4, fetch(url)];
                case 1:
                    resp = _c.sent();
                    return [4, resp.json()];
                case 2:
                    data = _c.sent();
                    _a = __read(data.items, 1), _b = _a[0], close_vote_count = _b.close_vote_count, reopen_vote_count = _b.reopen_vote_count, delete_vote_count = _b.delete_vote_count, closed_date = _b.closed_date;
                    if (!canSeeCVs && closed_date) {
                        displayCount("Reopen", reopen_vote_count);
                    }
                    else if (!canSeeCVs) {
                        displayCount("Close", close_vote_count);
                    }
                    if (!canSeeDVs && closed_date) {
                        displayCount("Delete", delete_vote_count);
                    }
                    return [2];
            }
        });
    }); });
})(window, document, location);

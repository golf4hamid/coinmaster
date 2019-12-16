$(document)["ready"](main);
usernames = ["FraudBlague", "ChrilleOnymy", "Religion", "Anacleto", "Batista", "Rindfleis", "Supercilious", "Marilena", "Akimbosam2903", "Hotbedcdull", "Abelardo", "ArrearToady", "Mafalda", "Sam", "Bullary", "Renitent", "OdcplayKelvin", "Lydian", "Calvin"];
minPostTime = 10;
maxPostTime = 300;
refreshRate = randomRange(minPostTime * 1000, maxPostTime * 1000);
websiteName = "PremiumHackGenerator";
website = "";
amount = ["5000", "10000", "15000", "20000", "25000", "25000", "25000", "25000", "25000", "25000", "25000"];
resources = ["Coins"];
punctuation = ["! ", ". ", ".. ", " "];
wowKeywords = ["Wow", "WOW", "wow"];
thisKeywords = ["This is simply amazing, thank you ", "this generator is incredible ", "This software is awesome ", "this is legit website ", "this website is giving me the real deal, all the Coins ", "thanks for sharing "];
thisKeywords2 = ["awesome man! you should sell this method ", "I can not believe believe that this really works, generated 25000 Coins today", "awesome tool indeed ", "now i dont need to buy Coins! thanks a lot "];
adverbKeywords = [" ", " ", " ", " ", " "];
adjectivesKeywords = ["", "", "", "", "", ""];
iKeywords = ["amazing tool bro. thanks you so much for sharing this ", "thank you! works for me!", "the most powerful tool ever! thank you ", "i wonder why this wasn't on the news. this is stunning tool! ", "thanks a lot dude!!!! WORKS like a charm!!! ", "about to get me some chicken dinners lol", " Thanks for this dude at first i thought this is some shit again thanks a lot! ", "that was amazing!!! thanks a lot for this. ", "Works like a charm. Thanks ", "thanks! I was looking for this in a long time! "];
workingKeywords = ["", "", "", "", "", "", "", "", "", "", "", ""];
conjunctionKeywords = [" ", " ", " ", " ", " ", " "];
conKeywords = ["", "", "", ""];
meKeywords = ["works for me guys, go on and try, nothing to lose", "thank you premiumhackgenerator! ", " found it on the forums, no ragrets for Coins have come my way! ", "amazing job admin thank you for sharing "];
gotKeywords = [" ", " ", " "];
thanksKeywords = ["thank you", "thanks", "thanks a lot", "thank you so much", "many thanks", "thank you", "thanks", "thanks a lot"];
emotes1 = [":D ", "^^ ", ":) ", " "];
emotes2 = ["=D ", " ", "=) ", " "];

function main() {
    if (readCookie("commented") != null) {
        $("#commentUsernameLabel")["addClass"]("state-disabled");
        $("#commentUsername")["attr"]("disabled", "");
        $("#commentCommentLabel")["addClass"]("state-disabled");
        $("#commentComment")["attr"]("disabled", "");
    };
    if (readCookie("comment1Cookie") != null && readCookie("username1Cookie") != null) {
        username1 = readCookie("username1Cookie");
        username2 = readCookie("username2Cookie");
        username3 = readCookie("username3Cookie");
        usernameArray = [username1, username2, username3];
        timePosted11 = parseInt(readCookie("timePosted11Cookie"));
        timePosted22 = parseInt(readCookie("timePosted22Cookie"));
        timePosted33 = parseInt(readCookie("timePosted33Cookie"));
        timePosted1 = timePostedTimer(timePosted11);
        timePosted2 = timePostedTimer(timePosted22);
        timePosted3 = timePostedTimer(timePosted33);
        timePostedArray = [timePosted1, timePosted2, timePosted3];
        comment1 = readCookie("comment1Cookie");
        comment2 = readCookie("comment2Cookie");
        comment3 = readCookie("comment3Cookie");
        commentsArray = [comment1, comment2, comment3];
    } else {
        username1 = randomKeyword(usernames);
        username2 = randomKeyword(usernames);
        while (username2 == username1) {
            username2 = randomKeyword(usernames);
        };
        username3 = randomKeyword(usernames);
        while (username3 == username2) {
            username3 = randomKeyword(usernames);
        };
        usernameArray = [username1, username2, username3];
        timePosted11 = randomRange(minPostTime * 1000, maxPostTime * 1000);
        timePosted22 = randomRange(minPostTime * 1000, timePosted11);
        timePosted33 = randomRange(minPostTime * 1000, timePosted22);
        timePosted1 = timePostedTimer(timePosted11);
        timePosted2 = timePostedTimer(timePosted22);
        timePosted3 = timePostedTimer(timePosted33);
        timePostedArray = [timePosted1, timePosted2, timePosted3];
        comment1 = newCommentCreator();
        comment2 = newCommentCreator();
        comment3 = newCommentCreator();
        commentsArray = [comment1, comment2, comment3];
        createCookie("username1Cookie", username1, 0.003);
        createCookie("username2Cookie", username2, 0.003);
        createCookie("username3Cookie", username3, 0.003);
        createCookie("comment1Cookie", comment1, 0.003);
        createCookie("comment2Cookie", comment2, 0.003);
        createCookie("comment3Cookie", comment3, 0.003);
    };
    updateComments();
    var _0x53c9x2 = setInterval(timer, 1000);
    var _0x53c9x3 = setInterval(getNewComment, refreshRate);
    $("#commentSubmit")["click"](submitEvent);
};

function getNewComment() {
    username1 = username2;
    username2 = username3;
    username3 = randomKeyword(usernames);
    while (username3 == username2 || username3 == username1) {
        username3 = randomKeyword(usernames);
    };
    usernameArray = [username1, username2, username3];
    timePosted11 = timePosted22;
    timePosted22 = timePosted33;
    timePosted33 = 1000;
    timePosted1 = timePostedTimer(timePosted11);
    timePosted2 = timePostedTimer(timePosted22);
    timePosted3 = timePostedTimer(timePosted33);
    timePostedArray = [timePosted1, timePosted2, timePosted3];
    comment1 = comment2;
    comment2 = comment3;
    comment3 = newCommentCreator();
    commentsArray = [comment1, comment2, comment3];
    createCookie("username1Cookie", username1, 0.003);
    createCookie("username2Cookie", username2, 0.003);
    createCookie("username3Cookie", username3, 0.003);
    createCookie("comment1Cookie", comment1, 0.003);
    createCookie("comment2Cookie", comment2, 0.003);
    createCookie("comment3Cookie", comment3, 0.003);
    refreshRate = randomRange(minPostTime * 1000, maxPostTime * 1000);
    updateComments();
};

function newCommentCreator() {
    emotesType = Math["floor"]((Math["random"]() * 2) + 1);
    part1 = part1Creator();
    part2 = part2Creator();
    part3 = part3Creator();
    part4 = part4Creator();
    part5 = part5Creator();
    allParts = [part2, part3, part4, part5];
    allPartsShuffled = shuffle(allParts);
    newComment = part1 + allPartsShuffled["join"]("");
    if (newComment == "") {
        return newCommentCreator();
    } else {
        return newComment;
    };
};

function part1Creator() {
    if (Math["random"]() > 0.8) {
        return randomKeyword(wowKeywords) + randomKeyword(punctuation) + emote();
    } else {
        return "";
    };
};

function part2Creator() {
    if (Math["random"]() > 0.4) {
        if (Math["random"]() > 0.5) {
            return randomKeyword(thisKeywords) + randomKeyword(adverbKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote();
        } else {
            return randomKeyword(thisKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote();
        };
    } else {
        return "";
    };
};

function part3Creator() {
    if (Math["random"]() > 0.6) {
        return thanks() + emote();
    } else {
        return "";
    };
};

function part4Creator() {
    if (Math["random"]() > 0.6) {
        if (Math["random"]() > 0.7) {
            return randomKeyword(iKeywords) + randomKeyword(workingKeywords) + " " + randomKeyword(conjunctionKeywords) + randomKeyword(thisKeywords2) + randomKeyword(conKeywords) + randomKeyword(punctuation) + emote();
        } else {
            return randomKeyword(iKeywords) + randomKeyword(workingKeywords) + randomKeyword(punctuation) + emote();
        };
    } else {
        return "";
    };
};

function part5Creator() {
    if (Math["random"]() > 0.7) {
        return randomKeyword(meKeywords) + randomKeyword(gotKeywords) + randomKeyword(amount) + " " + randomKeyword(resources) + randomKeyword(punctuation) + emote();
    } else {
        return "";
    };
};

function randomKeyword(_0x53c9xc) {
    return _0x53c9xc[Math["floor"]((Math["random"]() * _0x53c9xc["length"]))];
};

function emote() {
    if (emotesType == 1) {
        if (Math["random"]() > 0.3) {
            return "";
        } else {
            return randomKeyword(emotes1);
        };
    } else {
        if (Math["random"]() > 0.3) {
            return "";
        } else {
            return randomKeyword(emotes2);
        };
    };
};

function thanks() {
    if (Math["random"]() > 0.35) {
        return randomKeyword(thanksKeywords) + randomKeyword(punctuation);
    } else {
        if (Math["random"]() > 0.5) {
            return randomKeyword(thanksKeywords) + " " + website + randomKeyword(punctuation);
        } else {
            return randomKeyword(thanksKeywords) + " " + websiteName + randomKeyword(punctuation);
        };
    };
};

function shuffle(_0x53c9x10) {
    for (var _0x53c9x11, _0x53c9x12, _0x53c9x13 = _0x53c9x10["length"]; _0x53c9x13; _0x53c9x11 = Math["floor"](Math["random"]() * _0x53c9x13), _0x53c9x12 = _0x53c9x10[--_0x53c9x13], _0x53c9x10[_0x53c9x13] = _0x53c9x10[_0x53c9x11], _0x53c9x10[_0x53c9x11] = _0x53c9x12) {;;
    };
    return _0x53c9x10;
};

function updateComments() {
    for (i = 0; i <= 3; i++) {
        $("#username" + i)["html"](usernameArray[i - 1]);
        $("#comment" + i)["html"](commentsArray[i - 1] + " ");
        $("#timePosted" + i)["html"](timePostedArray[i - 1]);
    };
};

function timePostedTimer(_0x53c9x16) {
    var _0x53c9x17 = _0x53c9x16 / 1000;
    if (_0x53c9x17 < 60) {
        return "Posted few seconds ago";
    } else {
        if (_0x53c9x17 >= 60 && _0x53c9x17 < 120) {
            return "Posted a minute ago";
        } else {
            var _0x53c9x18 = Math["floor"](_0x53c9x17 / 60);
            return "Posted " + _0x53c9x18 + " minutes ago";
        };
    };
};

function randomRange(_0x53c9x1a, _0x53c9x1b) {
    return Math["round"]((Math["random"]() * (_0x53c9x1b - _0x53c9x1a) + _0x53c9x1a));
};

function timer() {
    timePosted11 = timePosted11 + 1000;
    timePosted22 = timePosted22 + 1000;
    timePosted33 = timePosted33 + 1000;
    eraseCookie("timePosted11Cookie");
    eraseCookie("timePosted22Cookie");
    eraseCookie("timePosted33Cookie");
    createCookie("timePosted11Cookie", timePosted11, 0.003);
    createCookie("timePosted22Cookie", timePosted22, 0.003);
    createCookie("timePosted33Cookie", timePosted33, 0.003);
    timePosted1 = timePostedTimer(timePosted11);
    timePosted2 = timePostedTimer(timePosted22);
    timePosted3 = timePostedTimer(timePosted33);
    timePostedArray = [timePosted1, timePosted2, timePosted3];
    for (i = 0; i <= 3; i++) {
        $("#timePosted" + i)["html"](timePostedArray[i - 1]);
    };
};

function submitEvent() {
    if ($("#commentUsername")["val"]() != "" && $("#commentComment")["val"]() != "") {
        username1 = username2;
        username2 = username3;
        username3 = $("#commentUsername")["val"]();
        usernameArray = [username1, username2, username3];
        timePosted11 = timePosted22;
        timePosted22 = timePosted33;
        timePosted33 = 1000;
        timePosted1 = timePostedTimer(timePosted11);
        timePosted2 = timePostedTimer(timePosted22);
        timePosted3 = timePostedTimer(timePosted33);
        timePostedArray = [timePosted1, timePosted2, timePosted3];
        comment1 = comment2;
        comment2 = comment3;
        comment3 = $("#commentComment")["val"]();
        commentsArray = [comment1, comment2, comment3];
        updateComments();
        createCookie("commented", "", 24);
        $("#commentUsername")["val"]("");
        $("#commentComment")["val"]("");
        $("#commentUsernameLabel")["addClass"]("state-disabled");
        $("#commentUsername")["attr"]("disabled", "");
        $("#commentCommentLabel")["addClass"]("state-disabled");
        $("#commentComment")["attr"]("disabled", "");
    } else {
        $("#commentUsernameLabel")["addClass"]("state-error");
        $("#commentCommentLabel")["addClass"]("state-error");
    };
};

function createCookie(_0x53c9x1f, _0x53c9x20, _0x53c9x21) {
    if (_0x53c9x21) {
        var _0x53c9x22 = new Date();
        _0x53c9x22["setTime"](_0x53c9x22["getTime"]() + (_0x53c9x21 * 24 * 60 * 60 * 1000));
        var _0x53c9x23 = "; expires=" + _0x53c9x22["toGMTString"]();
    } else {
        var _0x53c9x23 = "";
    };
    document["cookie"] = _0x53c9x1f + "=" + _0x53c9x20 + _0x53c9x23 + "; path=/";
};

function readCookie(_0x53c9x1f) {
    var _0x53c9x25 = _0x53c9x1f + "=";
    var _0x53c9x26 = document["cookie"]["split"](";");
    for (var _0x53c9x13 = 0; _0x53c9x13 < _0x53c9x26["length"]; _0x53c9x13++) {
        var _0x53c9x27 = _0x53c9x26[_0x53c9x13];
        while (_0x53c9x27["charAt"](0) == " ") {
            _0x53c9x27 = _0x53c9x27["substring"](1, _0x53c9x27["length"]);
        };
        if (_0x53c9x27["indexOf"](_0x53c9x25) == 0) {
            return _0x53c9x27["substring"](_0x53c9x25["length"], _0x53c9x27["length"]);
        };
    };
    return null;
};

function eraseCookie(_0x53c9x1f) {
    createCookie(_0x53c9x1f, "", -1);
};
function click(e) {
    document.cookie = "intl_locale=en_US;domain=.aliexpress.com;path=/ ";
    var target = e.target;
    while ((target.tagName.toLowerCase() != "a" || !target.href) && target.parentNode) {
        target = target.parentNode;
    }

    if (target.tagName.toLowerCase() == "a") {
        var parts,
        langs = ["af", "sq", "ar", "az", "eu", "bn", "be", "bg", "ca", "zh-cn", "zh-tw", "hr", "cs", "da", "nl", "eo", "et", "tl", "fi", "fr", "gl",
            "ka", "de", "el", "gu", "ht", "iw", "hi", "hu", "is", "id", "ga", "it", "ja", "kn", "ko", "la", "lv", "lt", "mk", "ms", "mt",
            "no", "fa", "pl", "pt", "ro", "ru", "sr", "sk", "sl", "es", "sw", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "cy", "yi"];

        if ((parts = target.href.match(/^(\S*?(?:^|(?:https?(?:\:|%3a)(?:(?:\/\/)|(?:%2f%2f)))))([a-z]{2}(?:\-[a-z]{2})?)(\.aliexpress\.com\S*)$/i)) && langs.indexOf(parts[2].toLowerCase()) >= 0) {
            target.href = parts[1] + "www" + parts[3];
        } else if (target.href.includes("aliexpress.ru")) {
            target.href = target.href.replace("aliexpress.ru", "aliexpress.com");
        }
    }
}

window.addEventListener("click", click);
document.cookie = "intl_locale=en_US;domain=.aliexpress.com;path=/ ";
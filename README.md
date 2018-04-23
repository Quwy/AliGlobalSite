# AliGlobalSite

When you click to localized Aliexpress URL like "https://ru.aliexpress.com/item_uri", site globally switches your language context to the language of that URL.
Next, even if you go to the non-localized URL like "https://www.aliexpress.com/item_uri", you automatically redirected to the translated version.
But click to "Global Site" button redirects you to the Aliexpress start page and you will loss opened item.

This addon transparently changes localized anchors &lt;a href="https://ru.aliexpress.com/..."&gt; to the global version &lt;a href="https://www.aliexpress.com/..."&gt; and you will not see a junk auto-translated page.
Only if you manually type localized URL in the address bar, language context will changed as usual.

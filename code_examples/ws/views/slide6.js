function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (pageTitle, youAreUsingJade) {pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Ctitle\u003E" + (pug_escape(null == (pug_interp = pageTitle) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cscript type=\"text\u002Fjavascript\"\u003Eif (foo) bar(1 + 5)\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Ch1\u003EJade - node template engine\u003C\u002Fh1\u003E\u003Cdiv class=\"col\" id=\"container\"\u003E";
if (youAreUsingJade) {
pug_html = pug_html + "\u003Cp\u003EYou are amazing\u003C\u002Fp\u003E";
}
else {
pug_html = pug_html + "\u003Cp\u003EGet on it!\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003Cp\u003EJade is a terse and simple templating language with a\nstrong focus on performance and powerful features\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"youAreUsingJade" in locals_for_with?locals_for_with.youAreUsingJade:typeof youAreUsingJade!=="undefined"?youAreUsingJade:undefined));;return pug_html;}
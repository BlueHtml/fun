(function(e){function t(t){for(var _,r,a=t[0],d=t[1],i=t[2],s=0,p=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(_ in d)Object.prototype.hasOwnProperty.call(d,_)&&(e[_]=d[_]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],_=!0,a=1;a<o.length;a++){var d=o[a];0!==n[d]&&(_=!1)}_&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var _={},n={app:0},c=[];function r(t){if(_[t])return _[t].exports;var o=_[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=_,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)r.d(o,_,function(t){return e[t]}.bind(null,_));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"093e":function(e,t,o){"use strict";o("8ca2")},"0f8a":function(e,t,o){"use strict";o("b890")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},1966:function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="🃟",t=4,o=new Map([["0",["🂡","🂢","🂣","🂤"]],["1",["🂥","🂦","🂧","🂨"]],["2",["🂩","🂪","🂫","🂬"]],["3",["🂭","🂭","🂮","🂮"]],["4",["🂱","🂲","🂳","🂴"]],["5",["🂵","🂶","🂷","🂸"]],["6",["🂹","🂺","🂻","🂼"]],["7",["🂽","🂽","🂾","🂾"]],["8",["🃁","🃂","🃃","🃄"]],["9",["🃅","🃆","🃇","🃈"]],["A",["🃉","🃊","🃋","🃌"]],["B",["🃍","🃍","🃎","🃎"]],["C",["🃑","🃒","🃓","🃔"]],["D",["🃕","🃖","🃗","🃘"]],["E",["🃙","🃚","🃛","🃜"]],["F",["🃝","🃝","🃞","🃞"]]]),_=new Map([["🂤","0"],["🂨","1"],["🂬","2"],["🂮","3"],["🂴","4"],["🂸","5"],["🂼","6"],["🂾","7"],["🃄","8"],["🃈","9"],["🃌","A"],["🃎","B"],["🃔","C"],["🃘","D"],["🃜","E"],["🃞","F"],["🂣","0"],["🂧","1"],["🂫","2"],["🂳","4"],["🂷","5"],["🂻","6"],["🃃","8"],["🃇","9"],["🃋","A"],["🃓","C"],["🃗","D"],["🃛","E"],["🂢","0"],["🂦","1"],["🂪","2"],["🂭","3"],["🂲","4"],["🂶","5"],["🂺","6"],["🂽","7"],["🃂","8"],["🃆","9"],["🃊","A"],["🃍","B"],["🃒","C"],["🃖","D"],["🃚","E"],["🃝","F"],["🂡","0"],["🂥","1"],["🂩","2"],["🂱","4"],["🂵","5"],["🂹","6"],["🃁","8"],["🃅","9"],["🃉","A"],["🃑","C"],["🃕","D"],["🃙","E"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},2:function(e,t){},"2ac5":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Codebook}));var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("466d"),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__),crypto_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3452"),crypto_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__),graphemer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("990e"),graphemer__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(graphemer__WEBPACK_IMPORTED_MODULE_5__),_codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("cc0d"),_codebooks_SmileysCodebook__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("7670"),_codebooks_HandInHandCodebook__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("df50"),_codebooks_GestureCodebook__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("53b8"),_codebooks_FlagCodebook__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("816a"),_codebooks_FoodCodebook__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("5719"),_codebooks_PokerCodebook__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("1966"),_codebooks_MahjongCodebook__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("66a5");function Codebook(){var smileysCodebook=Object(_codebooks_SmileysCodebook__WEBPACK_IMPORTED_MODULE_7__["a"])(),handInHandCodebook=Object(_codebooks_HandInHandCodebook__WEBPACK_IMPORTED_MODULE_8__["a"])(),gestureCodebook=Object(_codebooks_GestureCodebook__WEBPACK_IMPORTED_MODULE_9__["a"])(),glagCodebook=Object(_codebooks_FlagCodebook__WEBPACK_IMPORTED_MODULE_10__["a"])(),foodCodebook=Object(_codebooks_FoodCodebook__WEBPACK_IMPORTED_MODULE_11__["a"])(),pokerCodebook=Object(_codebooks_PokerCodebook__WEBPACK_IMPORTED_MODULE_12__["a"])(),mahjongCodebook=Object(_codebooks_MahjongCodebook__WEBPACK_IMPORTED_MODULE_13__["a"])(),codebook=smileysCodebook;function changeCodebookType(e){e==smileysCodebook.tag?codebook=smileysCodebook:e==handInHandCodebook.tag?codebook=handInHandCodebook:e==gestureCodebook.tag?codebook=gestureCodebook:e==glagCodebook.tag?codebook=glagCodebook:e==foodCodebook.tag?codebook=foodCodebook:e==pokerCodebook.tag?codebook=pokerCodebook:e==mahjongCodebook.tag&&(codebook=mahjongCodebook)}function spotType(cnt){for(var index in _codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__["a"])if(Object.prototype.hasOwnProperty.call(_codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__["a"],index)){var element=_codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__["a"][index],matchReg="/"+element+"(\\S*)"+element+"/g",matchResult=cnt.match(eval(matchReg));if(null!=matchResult)return element}return null}var splitter=new graphemer__WEBPACK_IMPORTED_MODULE_5___default.a;function encryptTranslate(e){for(var t="",o=0,_=e;o<_.length;o++){var n=_[o],c=codebook.encryptCodebook.get(n);if(void 0!=c){var r=Math.floor(Math.random()*codebook.scale),a=c[r];t+=a}}return t}function decryptTranslate(e){for(var t="",o=0,_=splitter.splitGraphemes(e);o<_.length;o++){var n=_[o],c=codebook.decryptCodebook.get(n);void 0!=c&&(t+=c)}return t}var key=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8.parse("ohouohouohouohou"),iv=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8.parse("ohouohouohouohou");function decrypt(e){var t=decryptTranslate(e),o=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Hex.parse(t),_=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Base64.stringify(o),n=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.AES.decrypt(_,key,{iv:iv,mode:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.mode.CBC,padding:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.pad.Pkcs7}),c=n.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8);return c.toString()}function encrypt(e){if(0==e.length)return"";var t=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8.parse(e),o=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.AES.encrypt(t,key,{iv:iv,mode:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.mode.CBC,padding:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.pad.Pkcs7}),_=o.ciphertext.toString().toUpperCase(),n=encryptTranslate(_);return codebook.tag+n+codebook.tag}return{encrypt:encrypt,decrypt:decrypt,changeCodebookType:changeCodebookType,spotType:spotType}}},3:function(e,t){},4:function(e,t){},5:function(e,t){},"53b8":function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="🤝",t=12,o=new Map([["0",["🤲","🤲🏻","🤲🏼","🤲🏽","🤲🏾","🤲🏿","👐","👐🏻","👐🏼","👐🏽","👐🏾","👐🏿"]],["1",["🙌","🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿","👏","👏🏻","👏🏼","👏🏽","👏🏾","👏🏿"]],["2",["👍","👍🏻","👍🏼","👍🏽","👍🏾","👍🏿","👎","👎🏻","👎🏼","👎🏽","👎🏾","👎🏿"]],["3",["👊","👊🏻","👊🏼","👊🏽","👊🏾","👊🏿","✊","✊🏻","✊🏼","✊🏽","✊🏾","✊🏿"]],["4",["🤛","🤛🏻","🤛🏼","🤛🏽","🤛🏾","🤛🏿","🤜","🤜🏻","🤜🏼","🤜🏽","🤜🏾","🤜🏿"]],["5",["🤞","🤞🏻","🤞🏼","🤞🏽","🤞🏾","🤞🏿","✌️","✌🏻","✌🏼","✌🏽","✌🏾","✌🏿"]],["6",["🤟","🤟🏻","🤟🏼","🤟🏽","🤟🏾","🤟🏿","🤘","🤘🏻","🤘🏼","🤘🏽","🤘🏾","🤘🏿"]],["7",["👌","👌🏻","👌🏼","👌🏽","👌🏾","👌🏿","🤏","🤏🏻","🤏🏼","🤏🏽","🤏🏾","🤏🏿"]],["8",["👈","👈🏻","👈🏼","👈🏽","👈🏾","👈🏿","👉","👉🏻","👉🏼","👉🏽","👉🏾","👉🏿"]],["9",["👆","👆🏻","👆🏼","👆🏽","👆🏾","👆🏿","👇","👇🏻","👇🏼","👇🏽","👇🏾","👇🏿"]],["A",["☝️","☝🏻","☝🏼","☝🏽","☝🏾","☝🏿","✋","✋🏻","✋🏼","✋🏽","✋🏾","✋🏿"]],["B",["🤚","🤚🏻","🤚🏼","🤚🏽","🤚🏾","🤚🏿","🖐","🖐🏻","🖐🏼","🖐🏽","🖐🏾","🖐🏿"]],["C",["🖖","🖖🏻","🖖🏼","🖖🏽","🖖🏾","🖖🏿","👋","👋🏻","👋🏼","👋🏽","👋🏾","👋🏿"]],["D",["🤙","🤙🏻","🤙🏼","🤙🏽","🤙🏾","🤙🏿","💪","💪🏻","💪🏼","💪🏽","💪🏾","💪🏿"]],["E",["🖕","🖕🏻","🖕🏼","🖕🏽","🖕🏾","🖕🏿","🙏","🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿"]],["F",["✍️","✍🏻","✍🏼","✍🏽","✍🏾","✍🏿","🦶","🦶🏻","🦶🏼","🦶🏽","🦶🏾","🦶🏿"]]]),_=new Map([["👐🏿","0"],["👏🏿","1"],["👎🏿","2"],["✊🏿","3"],["🤜🏿","4"],["✌🏿","5"],["🤘🏿","6"],["🤏🏿","7"],["👉🏿","8"],["👇🏿","9"],["✋🏿","A"],["🖐🏿","B"],["👋🏿","C"],["💪🏿","D"],["🙏🏿","E"],["🦶🏿","F"],["👐🏾","0"],["👏🏾","1"],["👎🏾","2"],["✊🏾","3"],["🤜🏾","4"],["✌🏾","5"],["🤘🏾","6"],["🤏🏾","7"],["👉🏾","8"],["👇🏾","9"],["✋🏾","A"],["🖐🏾","B"],["👋🏾","C"],["💪🏾","D"],["🙏🏾","E"],["🦶🏾","F"],["👐🏽","0"],["👏🏽","1"],["👎🏽","2"],["✊🏽","3"],["🤜🏽","4"],["✌🏽","5"],["🤘🏽","6"],["🤏🏽","7"],["👉🏽","8"],["👇🏽","9"],["✋🏽","A"],["🖐🏽","B"],["👋🏽","C"],["💪🏽","D"],["🙏🏽","E"],["🦶🏽","F"],["👐🏼","0"],["👏🏼","1"],["👎🏼","2"],["✊🏼","3"],["🤜🏼","4"],["✌🏼","5"],["🤘🏼","6"],["🤏🏼","7"],["👉🏼","8"],["👇🏼","9"],["✋🏼","A"],["🖐🏼","B"],["👋🏼","C"],["💪🏼","D"],["🙏🏼","E"],["🦶🏼","F"],["👐🏻","0"],["👏🏻","1"],["👎🏻","2"],["✊🏻","3"],["🤜🏻","4"],["✌🏻","5"],["🤘🏻","6"],["🤏🏻","7"],["👉🏻","8"],["👇🏻","9"],["✋🏻","A"],["🖐🏻","B"],["👋🏻","C"],["💪🏻","D"],["🙏🏻","E"],["🦶🏻","F"],["👐","0"],["👏","1"],["👎","2"],["✊","3"],["🤜","4"],["✌️","5"],["🤘","6"],["🤏","7"],["👉","8"],["👇","9"],["✋","A"],["🖐","B"],["👋","C"],["💪","D"],["🙏","E"],["🦶","F"],["🤲🏿","0"],["🙌🏿","1"],["👍🏿","2"],["👊🏿","3"],["🤛🏿","4"],["🤞🏿","5"],["🤟🏿","6"],["👌🏿","7"],["👈🏿","8"],["👆🏿","9"],["☝🏿","A"],["🤚🏿","B"],["🖖🏿","C"],["🤙🏿","D"],["🖕🏿","E"],["✍🏿","F"],["🤲🏾","0"],["🙌🏾","1"],["👍🏾","2"],["👊🏾","3"],["🤛🏾","4"],["🤞🏾","5"],["🤟🏾","6"],["👌🏾","7"],["👈🏾","8"],["👆🏾","9"],["☝🏾","A"],["🤚🏾","B"],["🖖🏾","C"],["🤙🏾","D"],["🖕🏾","E"],["✍🏾","F"],["🤲🏽","0"],["🙌🏽","1"],["👍🏽","2"],["👊🏽","3"],["🤛🏽","4"],["🤞🏽","5"],["🤟🏽","6"],["👌🏽","7"],["👈🏽","8"],["👆🏽","9"],["☝🏽","A"],["🤚🏽","B"],["🖖🏽","C"],["🤙🏽","D"],["🖕🏽","E"],["✍🏽","F"],["🤲🏼","0"],["🙌🏼","1"],["👍🏼","2"],["👊🏼","3"],["🤛🏼","4"],["🤞🏼","5"],["🤟🏼","6"],["👌🏼","7"],["👈🏼","8"],["👆🏼","9"],["☝🏼","A"],["🤚🏼","B"],["🖖🏼","C"],["🤙🏼","D"],["🖕🏼","E"],["✍🏼","F"],["🤲🏻","0"],["🙌🏻","1"],["👍🏻","2"],["👊🏻","3"],["🤛🏻","4"],["🤞🏻","5"],["🤟🏻","6"],["👌🏻","7"],["👈🏻","8"],["👆🏻","9"],["☝🏻","A"],["🤚🏻","B"],["🖖🏻","C"],["🤙🏻","D"],["🖕🏻","E"],["✍🏻","F"],["🤲","0"],["🙌","1"],["👍","2"],["👊","3"],["🤛","4"],["🤞","5"],["🤟","6"],["👌","7"],["👈","8"],["👆","9"],["☝️","A"],["🤚","B"],["🖖","C"],["🤙","D"],["🖕","E"],["✍️","F"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},5719:function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="🍋",t=7,o=new Map([["0",["🍏","🍎","🍐","🍊","🍌","🍉","🍇"]],["1",["🍓","🍈","🍒","🍑","🥭","🍍","🥥"]],["2",["🥝","🍅","🍆","🥑","🥦","🥬","🥒"]],["3",["🌶","🌽","🥕","🧄","🧅","🥔","🍠"]],["4",["🥐","🥯","🍞","🥖","🥨","🧀","🥚"]],["5",["🍳","🧈","🥞","🧇","🥓","🥩","🍗"]],["6",["🍖","🦴","🌭","🍔","🍟","🍕","🥪"]],["7",["🥙","🧆","🌮","🌯","🥗","🥘","🥫"]],["8",["🍝","🍜","🍲","🍛","🍣","🍱","🥟"]],["9",["🦪","🍤","🍙","🍚","🍘","🍥","🥠"]],["A",["🥮","🍢","🍡","🍧","🍨","🍦","🥧"]],["B",["🧁","🍰","🎂","🍮","🍭","🍬","🍫"]],["C",["🍿","🍩","🍪","🌰","🥜","🍯","🥛"]],["D",["🍼","☕️","🍵","🧃","🥤","🍶","🍺"]],["E",["🍻","🥂","🍷","🥃","🍸","🍹","🧉"]],["F",["🍾","🧊","🍴","🍽","🥣","🥢","🧂"]]]),_=new Map([["🍇","0"],["🥥","1"],["🥒","2"],["🍠","3"],["🥚","4"],["🍗","5"],["🥪","6"],["🥫","7"],["🥟","8"],["🥠","9"],["🥧","A"],["🍫","B"],["🥛","C"],["🍺","D"],["🧉","E"],["🧂","F"],["🍉","0"],["🍍","1"],["🥬","2"],["🥔","3"],["🧀","4"],["🥩","5"],["🍕","6"],["🥘","7"],["🍱","8"],["🍥","9"],["🍦","A"],["🍬","B"],["🍯","C"],["🍶","D"],["🍹","E"],["🥢","F"],["🍌","0"],["🥭","1"],["🥦","2"],["🧅","3"],["🥨","4"],["🥓","5"],["🍟","6"],["🥗","7"],["🍣","8"],["🍘","9"],["🍨","A"],["🍭","B"],["🥜","C"],["🥤","D"],["🍸","E"],["🥣","F"],["🍊","0"],["🍑","1"],["🥑","2"],["🧄","3"],["🥖","4"],["🧇","5"],["🍔","6"],["🌯","7"],["🍛","8"],["🍚","9"],["🍧","A"],["🍮","B"],["🌰","C"],["🧃","D"],["🥃","E"],["🍽","F"],["🍐","0"],["🍒","1"],["🍆","2"],["🥕","3"],["🍞","4"],["🥞","5"],["🌭","6"],["🌮","7"],["🍲","8"],["🍙","9"],["🍡","A"],["🎂","B"],["🍪","C"],["🍵","D"],["🍷","E"],["🍴","F"],["🍎","0"],["🍈","1"],["🍅","2"],["🌽","3"],["🥯","4"],["🧈","5"],["🦴","6"],["🧆","7"],["🍜","8"],["🍤","9"],["🍢","A"],["🍰","B"],["🍩","C"],["☕️","D"],["🥂","E"],["🧊","F"],["🍏","0"],["🍓","1"],["🥝","2"],["🌶","3"],["🥐","4"],["🍳","5"],["🍖","6"],["🥙","7"],["🍝","8"],["🦪","9"],["🥮","A"],["🧁","B"],["🍿","C"],["🍼","D"],["🍻","E"],["🍾","F"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},6:function(e,t){},"64be":function(e,t,o){"use strict";o("c894")},"66a5":function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="🀁",t=3,o=new Map([["0",["🀆","🀆","🀅"]],["1",["🀇","🀐","🀙"]],["2",["🀈","🀑","🀚"]],["3",["🀉","🀒","🀛"]],["4",["🀊","🀓","🀜"]],["5",["🀋","🀔","🀝"]],["6",["🀌","🀕","🀞"]],["7",["🀍","🀖","🀟"]],["8",["🀎","🀗","🀠"]],["9",["🀏","🀘","🀡"]],["A",["🀀","🀂","🀃"]],["B",["🀦","🀧","🀨"]],["C",["🀩","🀪","🀥"]],["D",["🀢","🀢","🀢"]],["E",["🀣","🀣","🀣"]],["F",["🀤","🀤","🀤"]]]),_=new Map([["🀅","0"],["🀙","1"],["🀚","2"],["🀛","3"],["🀜","4"],["🀝","5"],["🀞","6"],["🀟","7"],["🀠","8"],["🀡","9"],["🀃","A"],["🀨","B"],["🀥","C"],["🀢","D"],["🀣","E"],["🀤","F"],["🀆","0"],["🀐","1"],["🀑","2"],["🀒","3"],["🀓","4"],["🀔","5"],["🀕","6"],["🀖","7"],["🀗","8"],["🀘","9"],["🀂","A"],["🀧","B"],["🀪","C"],["🀇","1"],["🀈","2"],["🀉","3"],["🀊","4"],["🀋","5"],["🀌","6"],["🀍","7"],["🀎","8"],["🀏","9"],["🀀","A"],["🀦","B"],["🀩","C"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},"6adf":function(e,t,o){"use strict";o("85fb")},7:function(e,t){},7670:function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="🥳",t=6,o=new Map([["0",["😀","😃","😄","😁","😆","😅"]],["1",["😂","🤣","☺️","😊","😇","🙂"]],["2",["🙃","😉","😌","😍","🥰","😘"]],["3",["😗","😙","😚","😋","😛","😝"]],["4",["😜","🤪","🤨","🧐","🤓","😎"]],["5",["🤩","😏","😒","😞","😔","😟"]],["6",["😕","🙁","☹️","😣","😖","😫"]],["7",["😩","🥺","😢","😭","😤","😠"]],["8",["😡","🤬","🤯","😳","🥵","🥶"]],["9",["😱","😨","😰","😥","😓","🤗"]],["A",["🤔","🤭","🤫","🤥","😶","😐"]],["B",["😑","😬","🙄","😯","😦","😧"]],["C",["😮","😲","🥱","😴","🤤","😪"]],["D",["😵","🤐","🥴","🤢","🤮","🤧"]],["E",["😷","🤒","🤕","🤑","🤠","😈"]],["F",["👿","👹","🤡","💩","💀","☠️"]]]),_=new Map([["😅","0"],["🙂","1"],["😘","2"],["😝","3"],["😎","4"],["😟","5"],["😫","6"],["😠","7"],["🥶","8"],["🤗","9"],["😐","A"],["😧","B"],["😪","C"],["🤧","D"],["😈","E"],["☠️","F"],["😆","0"],["😇","1"],["🥰","2"],["😛","3"],["🤓","4"],["😔","5"],["😖","6"],["😤","7"],["🥵","8"],["😓","9"],["😶","A"],["😦","B"],["🤤","C"],["🤮","D"],["🤠","E"],["💀","F"],["😁","0"],["😊","1"],["😍","2"],["😋","3"],["🧐","4"],["😞","5"],["😣","6"],["😭","7"],["😳","8"],["😥","9"],["🤥","A"],["😯","B"],["😴","C"],["🤢","D"],["🤑","E"],["💩","F"],["😄","0"],["☺️","1"],["😌","2"],["😚","3"],["🤨","4"],["😒","5"],["☹️","6"],["😢","7"],["🤯","8"],["😰","9"],["🤫","A"],["🙄","B"],["🥱","C"],["🥴","D"],["🤕","E"],["🤡","F"],["😃","0"],["🤣","1"],["😉","2"],["😙","3"],["🤪","4"],["😏","5"],["🙁","6"],["🥺","7"],["🤬","8"],["😨","9"],["🤭","A"],["😬","B"],["😲","C"],["🤐","D"],["🤒","E"],["👹","F"],["😀","0"],["😂","1"],["🙃","2"],["😗","3"],["😜","4"],["🤩","5"],["😕","6"],["😩","7"],["😡","8"],["😱","9"],["🤔","A"],["😑","B"],["😮","C"],["😵","D"],["😷","E"],["👿","F"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},8:function(e,t){},"816a":function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="🏳️‍🌈",t=16,o=new Map([["0",["🇿🇼","🇦🇫","🇦🇽","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇶","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹"]],["1",["🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇮🇴"]],["2",["🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇮🇨","🇨🇻","🇧🇶","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳"]],["3",["🇨🇽","🇨🇨","🇨🇴","🇰🇲","🇨🇬","🇨🇩","🇨🇰","🇨🇷","🇨🇮","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇩🇰","🇩🇯"]],["4",["🇩🇲","🇩🇴","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇪🇹","🇪🇺","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫"]],["5",["🇵🇫","🇹🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳"]],["6",["🇬🇼","🇬🇾","🇭🇹","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇯🇲"]],["7",["🇯🇵","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮"]],["8",["🇱🇹","🇱🇺","🇲🇴","🇲🇰","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽"]],["9",["🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮"]],["A",["🇳🇪","🇳🇬","🇳🇺","🇳🇫","🇰🇵","🇲🇵","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭"]],["B",["🇵🇳","🇵🇱","🇵🇹","🇵🇷","🇶🇦","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🇼🇸","🇸🇲","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱"]],["C",["🇸🇬","🇸🇽","🇸🇰","🇸🇮","🇬🇸","🇸🇧","🇸🇴","🇿🇦","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇧🇱","🇸🇭","🇰🇳","🇱🇨"]],["D",["🇵🇲","🇻🇨","🇸🇩","🇸🇷","🇸🇿","🇸🇪","🇨🇭","🇸🇾","🇹🇯","🇹🇿","🇹🇭","🇹🇱","🇹🇬","🇹🇰","🇹🇴","🇹🇹"]],["E",["🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇻🇮","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏴󠁧󠁢󠁳󠁣󠁴󠁿","🏴󠁧󠁢󠁷󠁬󠁳󠁿","🇿🇲","🇺🇸","🇺🇾"]],["F",["🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳"]]]),_=new Map([["🇦🇹","0"],["🇮🇴","1"],["🇨🇳","2"],["🇩🇯","3"],["🇬🇫","4"],["🇬🇳","5"],["🇯🇲","6"],["🇱🇮","7"],["🇲🇽","8"],["🇳🇮","9"],["🇵🇭","A"],["🇸🇱","B"],["🇱🇨","C"],["🇹🇹","D"],["🇺🇾","E"],["🇺🇳","F"],["🇦🇺","0"],["🇧🇷","1"],["🇨🇱","2"],["🇩🇰","3"],["🇫🇷","4"],["🇬🇬","5"],["🇮🇹","6"],["🇱🇾","7"],["🇾🇹","8"],["🇳🇿","9"],["🇵🇪","A"],["🇸🇨","B"],["🇰🇳","C"],["🇹🇴","D"],["🇺🇸","E"],["🇦🇼","0"],["🇧🇼","1"],["🇹🇩","2"],["🇨🇿","3"],["🇫🇮","4"],["🇬🇹","5"],["🇮🇱","6"],["🇱🇷","7"],["🇲🇺","8"],["🇳🇨","9"],["🇵🇾","A"],["🇷🇸","B"],["🇸🇭","C"],["🇹🇰","D"],["🇿🇲","E"],["🇦🇲","0"],["🇧🇦","1"],["🇨🇫","2"],["🇨🇾","3"],["🇫🇯","4"],["🇬🇺","5"],["🇮🇲","6"],["🇱🇸","7"],["🇲🇷","8"],["🇳🇱","9"],["🇵🇬","A"],["🇸🇳","B"],["🇧🇱","C"],["🇹🇬","D"],["🏴󠁧󠁢󠁷󠁬󠁳󠁿","E"],["🇦🇷","0"],["🇧🇴","1"],["🇰🇾","2"],["🇨🇼","3"],["🇫🇴","4"],["🇬🇵","5"],["🇮🇪","6"],["🇱🇧","7"],["🇲🇶","8"],["🇳🇵","9"],["🇵🇦","A"],["🇸🇦","B"],["🇱🇰","C"],["🇹🇱","D"],["🏴󠁧󠁢󠁳󠁣󠁴󠁿","E"],["🇦🇬","0"],["🇧🇹","1"],["🇧🇶","2"],["🇨🇺","3"],["🇫🇰","4"],["🇬🇩","5"],["🇮🇶","6"],["🇱🇻","7"],["🇲🇭","8"],["🇳🇷","9"],["🇵🇸","A"],["🇸🇲","B"],["🇪🇸","C"],["🇹🇭","D"],["🏴󠁧󠁢󠁥󠁮󠁧󠁿","E"],["🇦🇶","0"],["🇧🇲","1"],["🇨🇻","2"],["🇭🇷","3"],["🇪🇺","4"],["🇬🇱","5"],["🇮🇷","6"],["🇱🇦","7"],["🇲🇹","8"],["🇳🇦","9"],["🇵🇼","A"],["🇼🇸","B"],["🇸🇸","C"],["🇹🇿","D"],["🇬🇧","E"],["🇦🇮","0"],["🇧🇯","1"],["🇮🇨","2"],["🇨🇮","3"],["🇪🇹","4"],["🇬🇷","5"],["🇮🇩","6"],["🇰🇬","7"],["🇲🇱","8"],["🇲🇲","9"],["🇵🇰","A"],["🇷🇼","B"],["🇰🇷","C"],["🇹🇯","D"],["🇦🇪","E"],["🇦🇴","0"],["🇧🇿","1"],["🇨🇦","2"],["🇨🇷","3"],["🇪🇪","4"],["🇬🇮","5"],["🇮🇳","6"],["🇰🇼","7"],["🇲🇻","8"],["🇲🇿","9"],["🇴🇲","A"],["🇷🇺","B"],["🇿🇦","C"],["🇸🇾","D"],["🇺🇦","E"],["🇾🇪","F"],["🇦🇩","0"],["🇧🇪","1"],["🇨🇲","2"],["🇨🇰","3"],["🇪🇷","4"],["🇬🇭","5"],["🇮🇸","6"],["🇽🇰","7"],["🇲🇾","8"],["🇲🇦","9"],["🇳🇴","A"],["🇷🇴","B"],["🇸🇴","C"],["🇨🇭","D"],["🇺🇬","E"],["🇪🇭","F"],["🇦🇸","0"],["🇧🇾","1"],["🇰🇭","2"],["🇨🇩","3"],["🇬🇶","4"],["🇩🇪","5"],["🇭🇺","6"],["🇰🇮","7"],["🇲🇼","8"],["🇲🇸","9"],["🇲🇵","A"],["🇷🇪","B"],["🇸🇧","C"],["🇸🇪","D"],["🇻🇮","E"],["🇼🇫","F"],["🇩🇿","0"],["🇧🇧","1"],["🇧🇮","2"],["🇨🇬","3"],["🇸🇻","4"],["🇬🇪","5"],["🇭🇰","6"],["🇰🇪","7"],["🇲🇬","8"],["🇲🇪","9"],["🇰🇵","A"],["🇶🇦","B"],["🇬🇸","C"],["🇸🇿","D"],["🇹🇻","E"],["🇻🇳","F"],["🇦🇱","0"],["🇧🇩","1"],["🇧🇫","2"],["🇰🇲","3"],["🇪🇬","4"],["🇬🇲","5"],["🇭🇳","6"],["🇰🇿","7"],["🇲🇰","8"],["🇲🇳","9"],["🇳🇫","A"],["🇵🇷","B"],["🇸🇮","C"],["🇸🇷","D"],["🇹🇨","E"],["🇻🇪","F"],["🇦🇽","0"],["🇧🇭","1"],["🇧🇬","2"],["🇨🇴","3"],["🇪🇨","4"],["🇬🇦","5"],["🇭🇹","6"],["🇯🇴","7"],["🇲🇴","8"],["🇲🇨","9"],["🇳🇺","A"],["🇵🇹","B"],["🇸🇰","C"],["🇸🇩","D"],["🇹🇲","E"],["🇻🇦","F"],["🇦🇫","0"],["🇧🇸","1"],["🇧🇳","2"],["🇨🇨","3"],["🇩🇴","4"],["🇹🇫","5"],["🇬🇾","6"],["🇯🇪","7"],["🇱🇺","8"],["🇲🇩","9"],["🇳🇬","A"],["🇵🇱","B"],["🇸🇽","C"],["🇻🇨","D"],["🇹🇷","E"],["🇻🇺","F"],["🇿🇼","0"],["🇦🇿","1"],["🇻🇬","2"],["🇨🇽","3"],["🇩🇲","4"],["🇵🇫","5"],["🇬🇼","6"],["🇯🇵","7"],["🇱🇹","8"],["🇫🇲","9"],["🇳🇪","A"],["🇵🇳","B"],["🇸🇬","C"],["🇵🇲","D"],["🇹🇳","E"],["🇺🇿","F"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},"85fb":function(e,t,o){},"8ca2":function(e,t,o){},9:function(e,t){},b890:function(e,t,o){},c894:function(e,t,o){},cc0d:function(e,t,o){"use strict";o.d(t,"a",(function(){return _})),o.d(t,"b",(function(){return n}));var _=["🥳","👬","🤝","🏳️‍🌈","🍋","🃟","🀁"],n=["表情","手拉手","手势","旗帜","食物","扑克","麻将"]},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var _=o("7a23");function n(e,t,o,n,c,r){var a=Object(_["l"])("OHou");return Object(_["g"])(),Object(_["c"])(a)}var c=o("9ab4"),r=o("ce1f"),a={id:"ohou"},d={class:"header floatText"},i=Object(_["e"])("div",{class:"footer floatText"},[Object(_["e"])("b",null,"提示：变身后的Emoji可以添加任意字符、文字，而不影响还原"),Object(_["e"])("br"),Object(_["d"])(" ⚠️这不是加密工具，故无法保障您的数据安全，请谨慎使用⚠️"),Object(_["e"])("br"),Object(_["e"])("b",{style:{color:"#f00"}},"⚠️使用本工具进行非法活动，后果自负⚠️")],-1);function u(e,t,o,n,c,r){var u=Object(_["l"])("GithubIcon"),s=Object(_["l"])("OHouContent"),p=Object(_["l"])("TypeSelect");return Object(_["g"])(),Object(_["c"])("div",a,[Object(_["e"])(u),Object(_["e"])("div",d,[Object(_["e"])("b",null,Object(_["m"])(e.state.codebooksType)+"噢吼 Emoji"+Object(_["m"])(e.state.codebooksType),1)]),Object(_["e"])(s,{codebooksType:e.state.codebooksType,"onUpdate:Type":t[1]||(t[1]=function(t){return e.updateCodebookType(t)}),selectingType:e.state.selectingType,"onUpdate:Selecting":t[2]||(t[2]=function(t){return e.state.selectingType=t})},null,8,["codebooksType","selectingType"]),i,Object(_["e"])(p,{style:{display:e.state.selectingType?"block":"none"},type:e.state.codebooksType,"onUpdate:type":t[3]||(t[3]=function(t){return e.codebooksTypeChanged(t)})},null,8,["style","type"])])}var s=Object(_["e"])("div",{class:"type_sel_title"},"选择变身类型",-1);function p(e,t,o,n,c,r){var a=this;return Object(_["g"])(),Object(_["c"])("div",{id:"type_select",onClick:t[1]||(t[1]=function(e){return a.$emit("update:type",null)})},[Object(_["e"])("div",{class:"type_select_cnt",style:{height:e.state.height+"rem"}},[Object(_["e"])("div",null,[s,(Object(_["g"])(!0),Object(_["c"])(_["a"],null,Object(_["k"])(e.codebooksType,(function(t,o){return Object(_["g"])(),Object(_["c"])("div",{key:t,onClick:function(e){return a.$emit("update:type",t)},class:["type_sel_cnt",{last_type_cnt:o==e.codebooksType.length-1,type_selected:e.type==e.codebooksType[o]}],style:{height:e.itemHeight+"rem","line-height":e.itemHeight+"rem"}},[Object(_["e"])("div",null,Object(_["m"])(t+e.CodebookTypeTitle[o]+t),1)],14,["onClick"])})),128))])],4)])}var b=o("cc0d"),l=Object(_["f"])({props:{type:String},setup:function(){var e=b["a"],t=3,o=Object(_["i"])({title:"title",height:b["b"].length*t+3.5});return{state:o,codebooksType:e,CodebookTypeTitle:b["b"],itemHeight:t}}});o("fa9e");l.render=p;var E=l,C={},f=Object(_["e"])();function y(){}var O={};o("093e");O.render=y;var D=O,k={class:"content"},T={class:"content_item input_box"},g={class:"content_item center_btns"},M={class:"content_item input_box"};function B(e,t,o,n,c,r){var a=this;return Object(_["g"])(),Object(_["c"])("div",k,[Object(_["e"])("div",T,[Object(_["o"])(Object(_["e"])("textarea",{class:"text_input","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.state.leftContent=t}),placeholder:"输入需要变身的内容",autofocus:"true"},null,512),[[_["n"],e.state.leftContent]])]),Object(_["e"])("div",g,[Object(_["e"])("div",{class:"btn",role:"button",onClick:t[2]||(t[2]=function(){return e.encryptText.apply(e,arguments)}),onMouseenter:t[3]||(t[3]=function(t){return e.state.encryptBtnText=e.state.isSmallDevice?e.btnTextSmall.encryptHoverText:e.btnText.encryptHoverText}),onMouseleave:t[4]||(t[4]=function(t){return e.state.encryptBtnText=e.state.isSmallDevice?e.btnTextSmall.encryptText:e.btnText.encryptText})},Object(_["m"])(e.state.encryptBtnText),33),Object(_["e"])("div",{class:"btn",role:"button",onClick:t[5]||(t[5]=function(){return e.decryptText.apply(e,arguments)}),onMouseenter:t[6]||(t[6]=function(t){return e.state.decryptBtnText=e.state.isSmallDevice?e.btnTextSmall.decryptHoverText:e.btnText.decryptHoverText}),onMouseleave:t[7]||(t[7]=function(t){return e.state.decryptBtnText=e.state.isSmallDevice?e.btnTextSmall.decryptText:e.btnText.decryptText})},Object(_["m"])(e.state.decryptBtnText),33),Object(_["e"])("div",{class:"btn",role:"button",onClick:t[8]||(t[8]=function(e){return a.$emit("update:Selecting",!0)})}," 变身方式 ")]),Object(_["e"])("div",M,[Object(_["o"])(Object(_["e"])("textarea",{class:"text_input","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.state.rightContent=t}),placeholder:"输入需要还原的Emoji\n\n⚠️注意：因为各版本操作系统对 Emoji 支持不同，可能出现 Emoji 显示不全的问题⚠️"},null,512),[[_["n"],e.state.rightContent]])])])}var j=o("2ac5");function v(){function e(e,t){if(null!=t&&void 0!=t&&""!=t){var o="";o=0==e?"convert":"restore",""!=o&&console.log('_hmt.push(["_trackEvent",o,t])')}}return{statistics:e}}var A=Object(_["f"])({props:{selectingType:Boolean,codebooksType:String},setup:function(e,t){var o={encryptText:"> 变身 >",encryptHoverText:"> > > >",decryptText:"< 还原 <",decryptHoverText:"< < < <"},n={encryptText:"∨ 变身 ∨",encryptHoverText:"∨ ∨ ∨ ∨",decryptText:"∧ 还原 ∧",decryptHoverText:"∧ ∧ ∧ ∧"},c=Object(_["i"])({encryptBtnText:o.encryptText,decryptBtnText:o.decryptText,leftContent:"",rightContent:"",isSmallDevice:!1}),r=Object(j["a"])(),a=r.encrypt,d=r.decrypt,i=r.changeCodebookType,u=r.spotType,s=v().statistics;function p(){var o=u(c.rightContent);null!=o&&(i(o),t.emit("update:Type",o)),s(1,e.codebooksType),c.leftContent=d(c.rightContent)}function b(){0!=c.leftContent.length&&(i(e.codebooksType),s(0,e.codebooksType),c.rightContent=a(c.leftContent))}function l(){document.body.clientWidth<=500?c.isSmallDevice=!0:c.isSmallDevice=!1,c.encryptBtnText=c.isSmallDevice?n.encryptHoverText:o.encryptHoverText,c.encryptBtnText=c.isSmallDevice?n.encryptText:o.encryptText,c.decryptBtnText=c.isSmallDevice?n.decryptHoverText:o.decryptHoverText,c.decryptBtnText=c.isSmallDevice?n.decryptText:o.decryptText}return window.onresize=function(){l()},l(),{btnText:o,btnTextSmall:n,state:c,encryptText:b,decryptText:p}}});o("6adf");A.render=B;var P=A,h=Object(_["f"])({components:{TypeSelect:E,GithubIcon:D,OHouContent:P},setup:function(){var e=Object(_["i"])({selectingType:!1,codebooksType:"🥳"}),t="codebook_type",o=localStorage.getItem(t);function n(t){e.selectingType=!1,null!=t&&c(t)}function c(o){e.codebooksType=o,localStorage.setItem(t,o)}return null!=o&&(e.codebooksType=o),{state:e,codebooksTypeChanged:n,updateCodebookType:c}}});o("0f8a");h.render=u;var m=h,x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c["b"])(t,e),t=Object(c["a"])([Object(r["a"])({components:{OHou:m}})],t),t}(r["b"]),U=x;o("64be");U.render=n;var I=U;Object(_["b"])(I).mount("#app")},d916:function(e,t,o){},df50:function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0");function _(){var e="👬",t=5,o=new Map([["0",["👬🏻","👨🏻‍🤝‍👨🏼","👨🏻‍🤝‍👨🏽","👨🏻‍🤝‍👨🏾","👨🏻‍🤝‍👨🏿"]],["1",["👨🏼‍🤝‍👨🏻","👬🏼","👨🏼‍🤝‍👨🏽","👨🏼‍🤝‍👨🏾","👨🏼‍🤝‍👨🏿"]],["2",["👨🏽‍🤝‍👨🏻","👨🏽‍🤝‍👨🏼","👬🏽","👨🏽‍🤝‍👨🏾","👨🏽‍🤝‍👨🏿"]],["3",["👨🏾‍🤝‍👨🏻","👨🏾‍🤝‍👨🏼","👨🏾‍🤝‍👨🏽","👬🏾","👨🏾‍🤝‍👨🏿"]],["4",["👨🏿‍🤝‍👨🏻","👨🏿‍🤝‍👨🏼","👨🏿‍🤝‍👨🏽","👨🏿‍🤝‍👨🏾","👬🏿"]],["5",["👭🏻","👩🏻‍🤝‍👩🏼","👩🏻‍🤝‍👩🏽","👩🏻‍🤝‍👩🏾","👩🏻‍🤝‍👩🏿"]],["6",["👩🏼‍🤝‍👩🏻","👭🏼","👩🏼‍🤝‍👩🏽","👩🏼‍🤝‍👩🏾","👩🏼‍🤝‍👩🏿"]],["7",["👩🏽‍🤝‍👩🏻","👩🏽‍🤝‍👩🏼","👭🏽","👩🏽‍🤝‍👩🏾","👩🏽‍🤝‍👩🏿"]],["8",["👩🏾‍🤝‍👩🏻","👩🏾‍🤝‍👩🏼","👩🏾‍🤝‍👩🏽","👭🏾","👩🏾‍🤝‍👩🏿"]],["9",["👩🏿‍🤝‍👩🏻","👩🏿‍🤝‍👩🏼","👩🏿‍🤝‍👩🏽","👩🏿‍🤝‍👩🏾","👭🏿"]],["A",["👫🏻","👩🏻‍🤝‍👨🏼","👩🏻‍🤝‍👨🏽","👩🏻‍🤝‍👨🏾","👩🏻‍🤝‍👨🏿"]],["B",["👩🏼‍🤝‍👨🏻","👫🏼","👩🏼‍🤝‍👨🏽","👩🏼‍🤝‍👨🏾","👩🏼‍🤝‍👨🏿"]],["C",["👩🏽‍🤝‍👨🏻","👩🏽‍🤝‍👨🏼","👫🏽","👩🏽‍🤝‍👨🏾","👩🏽‍🤝‍👨🏿"]],["D",["👩🏾‍🤝‍👨🏻","👩🏾‍🤝‍👨🏼","👩🏾‍🤝‍👨🏽","👫🏾","👩🏾‍🤝‍👨🏿"]],["E",["👩🏿‍🤝‍👨🏻","👩🏿‍🤝‍👨🏼","👩🏿‍🤝‍👨🏽","👩🏿‍🤝‍👨🏾","👫🏿"]],["F",["🧑‍🤝‍🧑","👭","👭","👫","👫"]]]),_=new Map([["👨🏻‍🤝‍👨🏿","0"],["👨🏼‍🤝‍👨🏿","1"],["👨🏽‍🤝‍👨🏿","2"],["👨🏾‍🤝‍👨🏿","3"],["👬🏿","4"],["👩🏻‍🤝‍👩🏿","5"],["👩🏼‍🤝‍👩🏿","6"],["👩🏽‍🤝‍👩🏿","7"],["👩🏾‍🤝‍👩🏿","8"],["👭🏿","9"],["👩🏻‍🤝‍👨🏿","A"],["👩🏼‍🤝‍👨🏿","B"],["👩🏽‍🤝‍👨🏿","C"],["👩🏾‍🤝‍👨🏿","D"],["👫🏿","E"],["👫","F"],["👨🏻‍🤝‍👨🏾","0"],["👨🏼‍🤝‍👨🏾","1"],["👨🏽‍🤝‍👨🏾","2"],["👬🏾","3"],["👨🏿‍🤝‍👨🏾","4"],["👩🏻‍🤝‍👩🏾","5"],["👩🏼‍🤝‍👩🏾","6"],["👩🏽‍🤝‍👩🏾","7"],["👭🏾","8"],["👩🏿‍🤝‍👩🏾","9"],["👩🏻‍🤝‍👨🏾","A"],["👩🏼‍🤝‍👨🏾","B"],["👩🏽‍🤝‍👨🏾","C"],["👫🏾","D"],["👩🏿‍🤝‍👨🏾","E"],["👨🏻‍🤝‍👨🏽","0"],["👨🏼‍🤝‍👨🏽","1"],["👬🏽","2"],["👨🏾‍🤝‍👨🏽","3"],["👨🏿‍🤝‍👨🏽","4"],["👩🏻‍🤝‍👩🏽","5"],["👩🏼‍🤝‍👩🏽","6"],["👭🏽","7"],["👩🏾‍🤝‍👩🏽","8"],["👩🏿‍🤝‍👩🏽","9"],["👩🏻‍🤝‍👨🏽","A"],["👩🏼‍🤝‍👨🏽","B"],["👫🏽","C"],["👩🏾‍🤝‍👨🏽","D"],["👩🏿‍🤝‍👨🏽","E"],["👭","F"],["👨🏻‍🤝‍👨🏼","0"],["👬🏼","1"],["👨🏽‍🤝‍👨🏼","2"],["👨🏾‍🤝‍👨🏼","3"],["👨🏿‍🤝‍👨🏼","4"],["👩🏻‍🤝‍👩🏼","5"],["👭🏼","6"],["👩🏽‍🤝‍👩🏼","7"],["👩🏾‍🤝‍👩🏼","8"],["👩🏿‍🤝‍👩🏼","9"],["👩🏻‍🤝‍👨🏼","A"],["👫🏼","B"],["👩🏽‍🤝‍👨🏼","C"],["👩🏾‍🤝‍👨🏼","D"],["👩🏿‍🤝‍👨🏼","E"],["👬🏻","0"],["👨🏼‍🤝‍👨🏻","1"],["👨🏽‍🤝‍👨🏻","2"],["👨🏾‍🤝‍👨🏻","3"],["👨🏿‍🤝‍👨🏻","4"],["👭🏻","5"],["👩🏼‍🤝‍👩🏻","6"],["👩🏽‍🤝‍👩🏻","7"],["👩🏾‍🤝‍👩🏻","8"],["👩🏿‍🤝‍👩🏻","9"],["👫🏻","A"],["👩🏼‍🤝‍👨🏻","B"],["👩🏽‍🤝‍👨🏻","C"],["👩🏾‍🤝‍👨🏻","D"],["👩🏿‍🤝‍👨🏻","E"],["🧑‍🤝‍🧑","F"]]);return{tag:e,scale:t,encryptCodebook:o,decryptCodebook:_}}},fa9e:function(e,t,o){"use strict";o("d916")}});
//# sourceMappingURL=app.c30bfc47.js.map
!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("1KlvB",(function(t,n){var o,a;o=t.exports,a=function(){return g},Object.defineProperty(o,"Sync",{get:a,set:undefined,enumerable:!0,configurable:!0});var i=e("Yawv5"),s=e("2swew"),d=e("kxanC"),u=e("hWDD9"),r=e("dLRop"),c=e("61A8y"),l=e("5gj45"),f=e("cksMj"),y=e("giCK6"),b=e("eQNFO"),p=e("dDIEk"),h=e("bF0bi"),g=function(e){"use strict";(0,f.default)(n,e);var t=(0,y.default)(n);function n(){var e;return(0,d.default)(this,n),e=t.apply(this,arguments),(0,r.default)((0,i.default)(e),"subject","liasync"),(0,r.default)((0,i.default)(e),"connected",!1),e}return(0,u.default)(n,[{key:"connect",value:function(e){var t=this,o=this;return(0,s.default)((function(){return(0,b.__generator)(this,(function(a){return(0,c.default)((0,l.default)(n.prototype),"connect",t).call(o,e),o.init(!0),[2]}))}))()}},{key:"destroy",value:function(){(0,c.default)((0,l.default)(n.prototype),"destroy",this).call(this)}},{key:"init",value:function(e,t){if(e){this.subject=this.room||"liasync";var n=this;window.addEventListener("message",(function(e){try{var t=e.data;"init"===t.subject?t.body&&(n.connected=!0,n.sendConnect()):(t.body=JSON.parse(t.body),t.body.message.param.id!==n.token&&t.body&&n.applyUpdate((0,h.decode)(t.body)))}catch(e){console.warn("Edrys",e.message)}})),window.parent.postMessage({subject:"init",body:""},"*"),setTimeout((function(){n.connected||n.sendDisconnectError("This seems not to be an Edrys classroom")}),2e3)}}},{key:"broadcast",value:function(e){window.parent.postMessage({subject:this.subject,body:e?(0,h.encode)(e):null},"*")}}]),n}(p.Sync)}))}();

!function(){function e(t,n=0){if(t.sourceUrl){let r=new XMLHttpRequest;r.open("GET",t.sourceUrl,!0),r.onload=function(e){if(4===r.readyState&&200===r.status)try{t.parse(r.responseText)}catch(e){console.warn("fetching",e)}},r.onerror=function(r){t.sourceUrl&&0===n&&(t.sourceUrl=`https://cors-anywhere.herokuapp.com/${t.sourceUrl}`,e(t,1))},r.send()}}class t extends HTMLElement{constructor(){super(),this.container=this.attachShadow({mode:"closed"}),this.sourceUrl=null,this.baseUrl=null}connectedCallback(){if(this.sourceUrl=this.getAttribute("src"),this.baseUrl=this.sourceUrl,this.sourceUrl){const t=document.createElement("template");t.innerHTML=`\n      <style></style>\n      <a href="${this.sourceUrl}" id="container_" style="display: inline-block;">preview-link</a>\n      <iframe id="iframe" style="display: none;"></iframe>`,this.container.appendChild(t.content.cloneNode(!0)),e(this)}}disconnectedCallback(){}parse(e){let t=this.container.getElementById("iframe");if(t){let n=this;t.onload=function(){n._title=function(e){if(null===e)return;const t=e.querySelector('meta[property="og:title"]');if(t&&t.content.length>0)return t.content;const n=e.querySelector('meta[name="twitter:title"]');if(n&&n.content.length>0)return n.content;const r=e.title;if(r&&r.length>0)return r;const o=e.querySelector("h1");if(o&&o.innerHTML)return o.innerHTML;const c=e.querySelector("h2");return c&&c.innerHTML?c.innerHTML:void 0}(t.contentDocument),n._description=function(e){if(null===e)return;const t=e.querySelector('meta[property="og:description"]');if(t&&t.content.length>0)return t.content;const n=e.querySelector('meta[name="twitter:description"]');if(n&&n.content.length>0)return n.content;const r=e.querySelector('meta[name="description"]');if(r&&r.content.length>0)return r.content;const o=e.querySelectorAll("p");for(let e=0;e<o.length;e++){const t=o[e];if(null!==t.offsetParent&&0!==t.childElementCount&&t.textContent)return t.textContent}}(t.contentDocument),n._domain=n.baseUrl?function(e,t){let n=null;if(e){const t=e.querySelector("link[rel=canonical]");if(t&&t.href.length>0)n=t.href;else{const t=e.querySelector('meta[property="og:url"]');t&&t.content.length>0&&(n=t.content)}}return null!=n?new URL(n).hostname.replace("www.",""):new URL(t).hostname.replace("www.","")}(t.contentDocument,n.baseUrl):void 0,n._image=function(e){if(null===e)return;const t=e.querySelector('meta[property="og:image"]');if(null!=t&&t.content.length>0)return t.content;const n=e.querySelector('link[rel="image_src"]');if(null!=n&&n.href.length>0)return n.href;const r=e.querySelector('meta[name="twitter:image"]');if(null!=r&&r.content.length>0)return r.content;try{return Array.from(e.getElementsByTagName("img"))[0].src}catch(e){}}(t.contentDocument),n.show()},t.srcdoc=e}}show(){const e=this.container.getElementById("container_");e&&(e.innerHTML=`<div style="float: left">\n                        <h4>${this._title}</h4>\n                        <p style="max-width: 400px">${this._description}</p>\n                      </div>\n                      <img src="${this._image}" style="height:100%; float: right;">`)}}customElements.define("preview-link",t)}();
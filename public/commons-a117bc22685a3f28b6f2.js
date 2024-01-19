/*! For license information please see commons-a117bc22685a3f28b6f2.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{8875:function(e,t,r){var n;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},7768:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),a=r(1721);let o=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,error:void 0,errorInfo:void 0},t}(0,a.Z)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var r=t.prototype;return r.componentDidCatch=function(e,t){console.error(e,t),this.setState({error:e,errorInfo:t})},r.render=function(){return this.state.hasError?n.createElement("div",{className:"h-screen w-screen flex flex-col items-center justify-center"},n.createElement("div",{className:"z-0 absolute inset-0 opacity-10",style:{background:"center / cover no-repeat url(center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)"}}),n.createElement("div",{className:"flex flex-col items-center max-w-[400px]"},n.createElement("title",null,"Error!"),n.createElement("h1",{className:"mb-2 text-xl"},"Error!"),n.createElement("div",{className:"flex flex-col items-start text-md"},n.createElement("p",{className:"mb-1"},"Oops! Sorry, something went wrong."),n.createElement("p",{className:"mb-1"},"Please take a moment to let us know what happened."),n.createElement("p",{className:"mb-2"},"Technical information about the error has also been captured and will be pasted into your message draft."),n.createElement("a",{className:"z-10 underline cursor-pointer hover:no-underline text-base w-full flex justify-center",href:"mailto:jormceachern@gmail.com?subject=AMAA%20site%20error&body="+this.state.error+":%20"+this.state.errorInfo,target:"_top"},"Email error report to the site developer")))):this.props.children},t}(n.Component);var i=o,c=r(4160);var s=e=>{let{currentRoutename:t}=e,r="";switch(t){case"":r="home page";break;case"bio":r="biography";break;default:r=t}const a="home page"===r?"":r;return n.createElement("div",{className:"site-navigation z-20 relative flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow-black dark:shadow-white sm:shadow border-black dark:border-white border-b bg-white dark:bg-slate"},n.createElement("input",{className:"mobile-menu hidden",type:"checkbox",id:"mobile-menu"}),n.createElement("div",{className:"w-full flex items-center sm:hidden"},n.createElement("label",{className:"w-10 h-full flex flex-col border-r border-black/20 dark:border-white/20",htmlFor:"mobile-menu","aria-label":"toggle mobile navigation"},n.createElement("hr",{className:"flex flex-grow bg-black dark:bg-white h-[2px] mt-2 mb-1 mx-2 rounded-sm"}),n.createElement("hr",{className:"flex flex-grow bg-black dark:bg-white h-[2px] my-1 mx-2 rounded-sm"}),n.createElement("hr",{className:"flex flex-grow bg-black dark:bg-white h-[2px] mt-1 mb-2 mx-2 rounded-sm"})),n.createElement("div",{className:"py-auto flex flex-grow justify-center"},n.createElement("div",{className:(""===t?"bg-black/20 dark:bg-transparent ":"")+"-ml-10"},n.createElement("div",{"aria-label":r,className:""===t?"h-6 w-16 ":void 0,style:""===t?{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)"}:void 0},n.createElement("span",{className:"uppercase text-black dark:text-white"},a))))),n.createElement("nav",{className:"max-w-3xl flex flex-col sm:flex-row w-full","aria-label":"main menu"},n.createElement("div",{className:"nav-items relative opacity-0 sm:opacity-100 sm:mt-0 sm:flex sm:grow"},n.createElement("div",{className:"absolute mt-px sm:mt-0 bg-white dark:bg-slate sm:bg-transparent sm:static z-10 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap sm:justify-evenly md:justify-between w-full"},n.createElement(c.rU,{to:"/",className:(""===t?"bg-blue/40 ":"")+" px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-black/30 dark:active:bg-white/30 hover:bg-black/20 dark:hover:bg-white/20"},n.createElement("div",{"aria-label":"logo",className:"h-4 w-16 hidden sm:inline",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)"}}),n.createElement("span",{className:"inline sm:hidden text-black dark:text-white"},"HOME PAGE")),n.createElement(c.rU,{to:"/bio",className:("bio"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-black dark:text-white border-black dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20 dark:hover:bg-white/20"},"BIOGRAPHY"),n.createElement(c.rU,{to:"/lyrics",className:("lyrics"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-black dark:text-white border-black dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20 dark:hover:bg-white/20"},"LYRICS"),n.createElement(c.rU,{to:"/subscribe",className:("subscribe"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-black dark:text-white border-black dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20 dark:hover:bg-white/20"},"SUBSCRIBE"),n.createElement(c.rU,{to:"/contact",className:("contact"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-black dark:text-white border-black dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20 dark:hover:bg-white/20"},"CONTACT"),n.createElement("a",{"aria-label":"link to shopify store",className:"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-black dark:text-white border-black dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20 dark:hover:bg-white/20",href:"https://qwinnmerch.myshopify.com/",target:"_blank",rel:"noopener noreferrer"},"MERCH")))))},l=r(5482);var u=()=>n.createElement(l.ql,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Qwinn"),n.createElement("meta",{name:"description",content:"Britt McQuinn (qwinn) is an award-winning Canadian East Coast\nsinger/songwriter. Her early musical influences of film and video game\nsoundtracks have shaped the synth-pop sound that audiences know today.\nBritt identifies as queer and a mental health advocate. She captivates\nCrowds with a magnetic, warm and engaging stage presence. She&#39;s opened\nfor k.d. lang during her 25th Anniversary Ingénue Tour, Milk & Bone,\nNeon Dreams, and Ria Mae, between her solo act and her dark pop duo,\nbleum. She performed for the recent World Junior Hockey Championships.\nBritt participates in songwriting camps and thrives in the co-writing\nenvironment. Notable past camps include Music PEI Canadian Song\nChallenge and CREATE Nordic Bridges Song Camp in Toronto. Qwinn&#39;s song\nWelcome to My Life landed a sync placement on Netflix&#39;s Ginny &\nGeorgia. She has songs on several Spotify editorial playlists,\nincluding It&#39;s a Bop, Fresh Finds Pop, New Music Friday Canada, and\nBangers. Qwinn has label releases on Circus Records, Kiwi Bear\nRecords, and Monstercat."}),n.createElement("link",{rel:"canonical",href:{}.SITE_URL}),n.createElement("link",{href:"/global.css",rel:"stylesheet"}));var f=()=>n.createElement("div",{className:"z-20 bg-white dark:bg-slate shadow shadow-black w-full py-2 flex justify-center"},n.createElement("div",{className:"w-full flex flex-wrap justify-center items-center max-w-3xl mx-6 sm:mx-0"},[{href:"https://music.apple.com/ca/artist/qwinn/1541048283",name:"apple music",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893495/qwinn/appleMusic_qjfxem.png"},{href:"https://soundcloud.com/qwinncreates",name:"soundcloud",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893519/qwinn/soundcloud_h67ltj.png"},{href:"https://discord.gg/tgHrxVUEJA",name:"discord",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893498/qwinn/discord_rz5g84.png"},{href:"https://open.spotify.com/artist/7LUgWAmGi0JiTUGtskeLd5?si=UaU6zM4XRkab4uhEG_2gCg",name:"spotify",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893525/qwinn/spotify_rgagnv.png"},{href:"https://www.tiktok.com/@qwinncreates?lang=en",name:"tiktok",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893529/qwinn/tiktok_uoilxa.png"},{href:"https://facebook.com/qwinncreates",name:"facebook",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675894655/qwinn/facebook_hlfrkh.png"},{href:"https://www.instagram.com/brittanymcquinn/?hl=en",name:"instagram",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893504/qwinn/instagram_kxgg9b.png"},{href:"https://twitter.com/brittanymcquinn",name:"twitter",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893533/qwinn/twitter_mhizj5.png"},{href:"https://www.youtube.com/user/BrittanyMcQuinn",name:"youtube",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png"},{href:"https://qwinnmerch.myshopify.com/",name:"shopify",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893515/qwinn/shopify_hxvb5t.png"}].map((e=>{let{href:t,name:r,src:a}=e;return n.createElement("div",{className:"w-10 h-10 m-2"},n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{id:r,src:a,alt:"link to "+r})))}))));var d=e=>{let{children:t,currentPathname:r}=e;const a=r.slice(1,r.length-1);return n.createElement(i,null,n.createElement("div",{className:"relative flex flex-col h-fit min-h-screen max-h-screen"},n.createElement(u,null),n.createElement(s,{currentRoutename:a}),n.createElement("div",{className:"main-content z-10 flex flex-col grow overflow-y-auto",style:{backgroundImage:"url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675637511/qwinn/qwinn_awmtfe.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}},t||null),n.createElement(f,null)))}},9590:function(e){"use strict";var t=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var c,s,l,u=t(e),f=t(i);if(u&&f){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(u!=f)return!1;var d=e instanceof Date,p=i instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==i.getTime();var m=e instanceof RegExp,T=i instanceof RegExp;if(m!=T)return!1;if(m&&T)return e.toString()==i.toString();var E=r(e);if((s=E.length)!==r(i).length)return!1;for(c=s;0!=c--;)if(!n.call(i,E[c]))return!1;if(a&&e instanceof Element&&i instanceof Element)return e===i;for(c=s;0!=c--;)if(!("_owner"===(l=E[c])&&e.$$typeof||o(e[l],i[l])))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},5482:function(e,t,r){t.ql=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r(7294)),i=f(r(5697)),c=f(r(3524)),s=f(r(9590)),l=r(2994),u=r(4455);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,m,T,E=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),h=(p=E,T=m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=c,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=p.peek,m.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);h.renderStatic=h.rewind,t.ql=h},4455:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},2994:function(e,t,r){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=s(r(7294)),i=s(r(4852)),c=r(4455);function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),r=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},T=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&w("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();-1===t.indexOf(l)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),s=0;s<o.length;s++){var l=o[s],u=(0,i.default)({},a[l],n[l]);a[l]=u}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){h(e)}),0)}),b=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:r.g.requestAnimationFrame||h,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:r.g.cancelAnimationFrame||b,w=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(c.TAG_NAMES.BODY,n),R(c.TAG_NAMES.HTML,a),S(d,p);var m={baseTag:k(c.TAG_NAMES.BASE,r),linkTags:k(c.TAG_NAMES.LINK,o),metaTags:k(c.TAG_NAMES.META,i),noscriptTags:k(c.TAG_NAMES.NOSCRIPT,s),scriptTags:k(c.TAG_NAMES.SCRIPT,u),styleTags:k(c.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(E[e]=m[e].oldTags)})),t&&t(),l(e,T,E)},_=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var f=o.indexOf(l);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},k=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},N=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},x=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=P(r,n),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=N(r),o=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){A&&g(A),e.defer?A=y((function(){v(e,(function(){A=null}))})):(v(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,n),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,a,n),link:x(c.TAG_NAMES.LINK,o,n),meta:x(c.TAG_NAMES.META,i,n),noscript:x(c.TAG_NAMES.NOSCRIPT,s,n),script:x(c.TAG_NAMES.SCRIPT,l,n),style:x(c.TAG_NAMES.STYLE,u,n),title:x(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=w},3524:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r(7294),o=n(a),i=n(r(8875)),c=n(r(6774));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s=[],l=void 0;function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){s.push(this),u()},t.prototype.componentDidUpdate=function(){u()},t.prototype.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},t.prototype.render=function(){return o.createElement(n,this.props)},t}(a.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",f.canUseDOM=i.canUseDOM,f}}},6774:function(e){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var l=o[s];if(!c(l))return!1;var u=e[l],f=t[l];if(!1===(a=r?r.call(n,u,f,l):void 0)||void 0===a&&u!==f)return!1}return!0}}}]);
//# sourceMappingURL=commons-a117bc22685a3f28b6f2.js.map
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[223],{8828:function(e){"use strict";e.exports=Object.assign},1206:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var n=r(6540),a=r(5540);let o=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,error:void 0,errorInfo:void 0},t}(0,a.A)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var r=t.prototype;return r.componentDidCatch=function(e,t){console.error(e,t),this.setState({error:e,errorInfo:t})},r.render=function(){return this.state.hasError?n.createElement("div",{className:"h-screen w-screen flex flex-col items-center justify-center"},n.createElement("div",{className:"z-0 absolute inset-0 opacity-10",style:{background:"center / cover no-repeat url(center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)"}}),n.createElement("div",{className:"flex flex-col items-center max-w-[400px]"},n.createElement("title",null,"Error!"),n.createElement("h1",{className:"mb-2 text-xl"},"Error!"),n.createElement("div",{className:"flex flex-col items-start text-md"},n.createElement("p",{className:"mb-1"},"Oops! Sorry, something went wrong."),n.createElement("p",{className:"mb-1"},"Please take a moment to let us know what happened."),n.createElement("p",{className:"mb-2"},"Technical information about the error has also been captured and will be pasted into your message draft."),n.createElement("a",{className:"z-10 underline cursor-pointer hover:no-underline text-base w-full flex justify-center",href:"mailto:jormceachern@gmail.com?subject=AMAA%20site%20error&body="+this.state.error+":%20"+this.state.errorInfo,target:"_top"},"Email error report to the site developer")))):this.props.children},t}(n.Component);var i=o,s=r(4810);var l=e=>{let{currentRoutename:t}=e,r="";switch(t){case"":r="home page";break;case"bio":r="biography";break;default:r=t}const a="home page"===r?"":r;return n.createElement("div",{className:"site-navigation z-20 relative flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow-slate dark:shadow-white sm:shadow border-slate dark:border-white border-b bg-white dark:bg-slate"},n.createElement("input",{className:"mobile-menu hidden",type:"checkbox",id:"mobile-menu"}),n.createElement("div",{className:"w-full flex items-center sm:hidden"},n.createElement("label",{className:"w-10 h-full flex flex-col border-r border-slate/20 dark:border-white/20",htmlFor:"mobile-menu","aria-label":"toggle mobile navigation"},n.createElement("hr",{className:"flex flex-grow bg-slate dark:bg-white h-[2px] mt-2 mb-1 mx-2 rounded-sm"}),n.createElement("hr",{className:"flex flex-grow bg-slate dark:bg-white h-[2px] my-1 mx-2 rounded-sm"}),n.createElement("hr",{className:"flex flex-grow bg-slate dark:bg-white h-[2px] mt-1 mb-2 mx-2 rounded-sm"})),n.createElement("div",{className:"py-auto flex flex-grow justify-center"},n.createElement("div",{className:(""===t?"bg-slate/20 dark:bg-transparent ":"")+"-ml-10"},n.createElement("div",{"aria-label":r,className:""===t?"h-6 w-16 ":void 0,style:""===t?{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)"}:void 0},n.createElement("span",{className:"uppercase text-slate dark:text-white"},a))))),n.createElement("nav",{className:"max-w-3xl flex flex-col sm:flex-row w-full","aria-label":"main menu"},n.createElement("div",{className:"nav-items relative opacity-0 sm:opacity-100 sm:mt-0 sm:flex sm:grow"},n.createElement("div",{className:"absolute mt-px sm:mt-0 bg-white dark:bg-slate sm:bg-transparent sm:static z-10 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap sm:justify-evenly md:justify-between w-full"},n.createElement(s.N_,{to:"/",className:(""===t?"bg-blue/40 ":"")+" px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-slate dark:border-white border-b sm:border-0 flex justify-center items-center sm:bg-slate/30 sm:dark:bg-transparent active:bg-slate/40 dark:active:bg-white/30 hover:bg-slate/20 dark:hover:bg-white/20"},n.createElement("div",{"aria-label":"logo",className:"h-4 w-16 hidden sm:inline",style:{background:"center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)"}}),n.createElement("span",{className:"inline sm:hidden text-slate dark:text-white"},"HOME PAGE")),n.createElement(s.N_,{to:"/bio",className:("bio"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-slate dark:text-white border-slate dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-slate/30 hover:bg-slate/20 dark:hover:bg-white/20"},"BIOGRAPHY"),n.createElement(s.N_,{to:"/lyrics",className:("lyrics"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-slate dark:text-white border-slate dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-slate/30 hover:bg-slate/20 dark:hover:bg-white/20"},"LYRICS"),n.createElement("a",{"aria-label":"link to shopify store",className:"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-slate dark:text-white border-slate dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-slate/30 hover:bg-slate/20 dark:hover:bg-white/20",href:"https://qwinnmerch.myshopify.com/",target:"_blank",rel:"noopener noreferrer"},"MERCH"),n.createElement(s.N_,{to:"/subscribe",className:("subscribe"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-slate dark:text-white border-slate dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-slate/30 hover:bg-slate/20 dark:hover:bg-white/20"},"SUBSCRIBE"),n.createElement(s.N_,{to:"/contact",className:("contact"===t?"bg-blue/40 ":"")+"px-2 py-1 text-sm sm:text-base w-full sm:w-auto text-slate dark:text-white border-slate dark:border-white border-b sm:border-0 flex justify-center items-center active:bg-slate/30 hover:bg-slate/20 dark:hover:bg-white/20"},"CONTACT")))))},c=r(9125);var u=()=>n.createElement(c.mg,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Qwinn"),n.createElement("meta",{name:"description",content:"Qwinn is a skilled singer, songwriter and producer from Canada's East Coast known for her catchy and heartfelt synth-pop creations. Her lyrics cover a range of themes, from the ups \nand downs of relationships with loved ones to learning to have self-compassion. She also sings about breaking free from oppressive situations and the importance of embracing oneself, especially for \nthe LGBTQIA2S+ community. Her relatable words and commanding vocals have a way of captivating audiences from all corners of the world. Qwinn had the privilege of opening for k.d. lang during her \n25th Anniversary Ingénue Tour and performing at the World Junior Hockey Championships. Her music has been featured on Apple and Spotify official playlists, including It's a Bop, Fresh Finds Pop, \nAs Heard on TV, New Music Friday Canada, and Bangers. Notably, she has released music under Circus Records, Kiwi Bear Records, and Monstercat labels. Additionally, Qwinn has participated in \nsongwriting camps such as Create Nordic Bridges through Music Publishers Canada at Toronto's Noble Street Studios. She was also accepted into the Incubator for Creative Entrepreneurship through \nthe SOCAN Foundation. Recently, Netflix featured her music on their top show Ginny & Georgia, with her bold and feisty track, Welcome to My Life. Qwinn aims to help others find their path to \nhealing through the power of music. In addition to releasing music and performing, she plans to create therapeutic songwriting and production groups, events, and retreats after obtaining a \nMaster of Arts in Counselling Psychotherapy. Qwinn's music gets the listener's attention, and her performances are no different. Complete with talented choreographed dancers, she provides a \npop performance experience that's a rare treat from Atlantic Canada. But Qwinn's music is more than just entertainment; it's a beautiful form of self-expression that promotes self-acceptance \nand confidence. Her music has an impact on her followers, inspiring them to create the change they want for themselves."}),n.createElement("link",{rel:"canonical",href:{}.SITE_URL}),n.createElement("link",{href:"/global.css",rel:"stylesheet"}));var f=()=>n.createElement("div",{className:"z-20 bg-white dark:bg-slate shadow shadow-slate w-full py-2 flex justify-center"},n.createElement("div",{className:"w-full flex flex-wrap justify-center items-center max-w-3xl mx-6 sm:mx-0"},[{href:"https://music.apple.com/ca/artist/qwinn/1541048283",name:"apple music",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893495/qwinn/appleMusic_qjfxem.png"},{href:"https://soundcloud.com/qwinncreates",name:"soundcloud",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893519/qwinn/soundcloud_h67ltj.png"},{href:"https://discord.gg/tgHrxVUEJA",name:"discord",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893498/qwinn/discord_rz5g84.png"},{href:"https://open.spotify.com/artist/7LUgWAmGi0JiTUGtskeLd5?si=UaU6zM4XRkab4uhEG_2gCg",name:"spotify",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893525/qwinn/spotify_rgagnv.png"},{href:"https://www.tiktok.com/@qwinncreates?lang=en",name:"tiktok",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893529/qwinn/tiktok_uoilxa.png"},{href:"https://facebook.com/qwinncreates",name:"facebook",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675894655/qwinn/facebook_hlfrkh.png"},{href:"https://www.instagram.com/brittanymcquinn/?hl=en",name:"instagram",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893504/qwinn/instagram_kxgg9b.png"},{href:"https://twitter.com/brittanymcquinn",name:"twitter",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893533/qwinn/twitter_mhizj5.png"},{href:"https://www.youtube.com/user/BrittanyMcQuinn",name:"youtube",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png"},{href:"https://qwinnmerch.myshopify.com/",name:"shopify",src:"https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893515/qwinn/shopify_hxvb5t.png"}].map((e=>{let{href:t,name:r,src:a}=e;return n.createElement("div",{className:"w-10 h-10 m-2"},n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{id:r,src:a,alt:"link to "+r})))}))));var d=e=>{let{children:t,currentPathname:r}=e;const a=r.slice(1,r.length-1);return n.createElement(i,null,n.createElement("div",{className:"relative flex flex-col h-fit min-h-screen max-h-screen"},n.createElement(u,null),n.createElement(l,{currentRoutename:a}),n.createElement("div",{className:"main-content z-10 flex flex-col grow overflow-y-auto bg-no-repeat bg-cover",style:{backgroundImage:"url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_crop,w_1400,h_800,g_auto/v1675637511/qwinn/qwinn_awmtfe.jpg)",backgroundPosition:"center center"}},t||null),n.createElement(f,null)))}},115:function(e){"use strict";var t=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var s,l,c,u=t(e),f=t(i);if(u&&f){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(u!=f)return!1;var d=e instanceof Date,m=i instanceof Date;if(d!=m)return!1;if(d&&m)return e.getTime()==i.getTime();var p=e instanceof RegExp,h=i instanceof RegExp;if(p!=h)return!1;if(p&&h)return e.toString()==i.toString();var T=r(e);if((l=T.length)!==r(i).length)return!1;for(s=l;0!=s--;)if(!n.call(i,T[s]))return!1;if(a&&e instanceof Element&&i instanceof Element)return e===i;for(s=l;0!=s--;)if(!("_owner"===(c=T[s])&&e.$$typeof||o(e[c],i[c])))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},9125:function(e,t,r){t.mg=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r(6540)),i=f(r(5556)),s=f(r(4647)),l=f(r(115)),c=r(9628),u=r(3752);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var m,p,h,T=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),E=(m=T,h=p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,s=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=s,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=m.peek,p.rewind=function(){var e=m.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);E.renderStatic=E.rewind,t.mg=E},3752:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},9628:function(e,t,r){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=l(r(6540)),i=l(r(8828)),s=r(3752);function l(e){return e&&e.__esModule?e:{default:e}}var c,u=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=T(e,s.TAG_NAMES.TITLE),r=T(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=T(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return T(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},h=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),l=0;l<o.length;l++){var c=o[l],u=(0,i.default)({},a[c],n[c]);a[c]=u}return e}),[]).reverse()},T=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},E=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){E(e)}),0)}),b=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:r.g.requestAnimationFrame||E,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:r.g.cancelAnimationFrame||b,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,m=e.titleAttributes;N(s.TAG_NAMES.BODY,n),N(s.TAG_NAMES.HTML,a),S(d,m);var p={baseTag:R(s.TAG_NAMES.BASE,r),linkTags:R(s.TAG_NAMES.LINK,o),metaTags:R(s.TAG_NAMES.META,i),noscriptTags:R(s.TAG_NAMES.NOSCRIPT,l),scriptTags:R(s.TAG_NAMES.SCRIPT,u),styleTags:R(s.TAG_NAMES.STYLE,f)},h={},T={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(T[e]=p[e].oldTags)})),t&&t(),c(e,h,T)},_=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),N(s.TAG_NAMES.TITLE,t)},N=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var f=o.indexOf(c);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},O=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=x(r,n),[o.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),o=_(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){w&&y(w),e.defer?w=g((function(){v(e,(function(){w=null}))})):(v(e),w=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,m=e.titleAttributes;return{base:O(s.TAG_NAMES.BASE,t,n),bodyAttributes:O(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:O(s.ATTRIBUTE_NAMES.HTML,a,n),link:O(s.TAG_NAMES.LINK,o,n),meta:O(s.TAG_NAMES.META,i,n),noscript:O(s.TAG_NAMES.NOSCRIPT,l,n),script:O(s.TAG_NAMES.SCRIPT,c,n),style:O(s.TAG_NAMES.STYLE,u,n),title:O(s.TAG_NAMES.TITLE,{title:d,titleAttributes:m},n)}},t.reducePropsToState=function(e){return{baseTag:p([s.TAG_PROPERTIES.HREF],e),bodyAttributes:m(s.ATTRIBUTE_NAMES.BODY,e),defer:T(e,s.HELMET_PROPS.DEFER),encode:T(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(s.ATTRIBUTE_NAMES.HTML,e),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:m(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=A},4647:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r(6540),o=n(a),i=n(r(2833));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function f(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!i(e,this.props)},s.componentWillMount=function(){u.push(this),f()},s.componentDidUpdate=function(){f()},s.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},s.render=function(){return o.createElement(n,this.props)},a}(a.Component);return s(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(d,"canUseDOM",l),d}}},2833:function(e){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],f=t[c];if(!1===(a=r?r.call(n,u,f,c):void 0)||void 0===a&&u!==f)return!1}return!0}}}]);
//# sourceMappingURL=commons-cebd088854c5dac765b7.js.map
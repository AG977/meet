(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(58),i=n.n(a),c=(n(280),n(54)),s=n(22),u=n(29),l=n(25),h=n(23),f=n(24),p=(n(282),function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={collapsed:!0},n.handleClick=function(){n.state.collapsed?n.setState({collapsed:!1}):n.setState({collapsed:!0})},n.dateNewFormat=function(t){return"".concat(new Date(t))},n.changeBtnText=function(){return!0===n.state.collapsed?"show details":"hide details"},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.event;return o.a.createElement("div",{className:"event"},o.a.createElement("h3",{className:"title"},t.summary),o.a.createElement("p",{className:"start-time"},this.dateNewFormat(t.start.dateTime)),o.a.createElement("p",{className:"location"},t.location),!this.state.collapsed&&o.a.createElement("p",{className:"event-details"},t.description),o.a.createElement("button",{className:"btn-details",onClick:this.handleClick},this.changeBtnText()))}}]),e}(r.Component)),d=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.events;return o.a.createElement("ul",{className:"EventList"},t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(p,{event:t}))}))}}]),e}(r.Component),v=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"Alert"},o.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),e}(r.Component),m=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).color="blue",n}return Object(f.a)(e,t),e}(v),g=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).color="red",n}return Object(f.a)(e,t),e}(v),y=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).color="green",n}return Object(f.a)(e,t),e}(v),w=function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},n.handleInputChanged=function(t){var e=t.target.value,r=n.props.locations.filter(function(t){return t.toUpperCase().indexOf(e.toUpperCase())>-1});0===r.length?n.setState({query:e,showSuggestions:!1,suggestions:[],infoText:"We can not find the city you are looking for. Please try another city"}):n.setState({query:e,suggestions:r,showSuggestions:!0,infoText:""})},n.handleItemClicked=function(t){n.setState({query:t,showSuggestions:!1}),n.props.updateEvents(t,void 0)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"CitySearch"},o.a.createElement("input",{type:"text",className:"city",value:this.state.query,onFocus:function(){return t.setState({showSuggestions:!0})},onChange:this.handleInputChanged}),o.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(e){return o.a.createElement("li",{key:e,onClick:function(){return t.handleItemClicked(e)}},e)}),o.a.createElement("li",{onClick:function(){return t.handleItemClicked("all")}},o.a.createElement("b",null,"See all cities"))),o.a.createElement(m,{id:"infoAlert",text:this.state.infoText}))}}]),e}(r.Component),b=function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={errorText:"",numberOfEvents:n.props.numberOfEvents},n.changeNumOfEvents=function(t){var e=t.target.value,r=e<0||e>32||!e?"Please choose any number between 1 and 32":"";n.setState({errorText:r,numberOfEvents:e}),r||n.props.updateEvents(void 0,e)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"numberOfEvents text-muted"},o.a.createElement("input",{className:"events_number__input my-3",type:"number",min:0,onChange:this.changeNumOfEvents,value:this.state.numberOfEvents}),o.a.createElement(g,{text:this.state.errorText}))}}]),e}(r.Component),E=n(270),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(71),O=n.n(k),j=n(242),L=n.n(j);function S(){S=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&n.call(m,o)&&(d=m);var g=p.prototype=h.prototype=Object.create(d);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(s.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var T=function(t){var e=t.map(function(t){return t.location});return Object(E.a)(new Set(e))},N=function(){var t=Object(c.a)(S().mark(function t(){var e,n,r,o,a;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(O.a.start(),!window.location.href.startsWith("http://localhost")){t.next=4;break}return O.a.done(),t.abrupt("return",x);case 4:if(navigator.onLine){t.next=9;break}return e=localStorage.getItem("lastEvents"),O.a.done(),t.abrupt("return",e?JSON.parse(e).events:[]);case 9:return t.next=11,_();case 11:if(!(n=t.sent)){t.next=21;break}return A(),r="https://8scveetdph.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,t.next=17,L.a.get(r);case 17:return(o=t.sent).data&&(a=T(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(a))),O.a.done(),t.abrupt("return",o.data.events);case 21:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(S().mark(function t(){var e,n,r,o,a,i;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("access_token"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,C(e);case 5:t.t0=t.sent;case 6:if(n=t.t0,e&&!n.error){t.next=21;break}return t.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),t.next=13,r.get("code");case 13:if(o=t.sent){t.next=20;break}return t.next=17,L.a.get("https://8scveetdph.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return a=t.sent,i=a.data.authUrl,t.abrupt("return",window.location.href=i);case 20:return t.abrupt("return",o&&W(o));case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(c.a)(S().mark(function t(e){var n;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(e)).then(function(t){return t.json()}).catch(function(t){return t.json()});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",t)}else t=window.location.protocol+"//"+window.location.host,window.history.pushState("","",t)},W=function(){var t=Object(c.a)(S().mark(function t(e){var n,r,o;return S().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(e),t.next=3,fetch("https://8scveetdph.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then(function(t){return t.json()}).catch(function(t){return t});case 3:return r=t.sent,(o=r.access_token)&&localStorage.setItem("access_token",o),t.abrupt("return",o);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();n(307),n(309);var F=function(t){return t.showWelcomeScreen?o.a.createElement("div",{className:"WelcomeScreen"},o.a.createElement("h1",null,"Welcome to the Meet app"),o.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),o.a.createElement("div",{className:"button_cont",align:"center"},o.a.createElement("div",{class:"google-btn"},o.a.createElement("div",{class:"google-icon-wrapper"},o.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})),o.a.createElement("button",{onClick:function(){t.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},o.a.createElement("b",null,"Sign in with google")))),o.a.createElement("a",{href:"https://ag977.github.io/meet/privacy.html",rel:"nofollow noopener"},"Privacy policy")):null},I=n(18),Z=n(358),G=n(367),P=n(356),B=n(218),M=n(88),D=function(t){var e=t.events,n=Object(r.useState)([]),a=Object(I.a)(n,2),i=a[0],c=a[1];Object(r.useEffect)(function(){c(["React","JavaScript","Node","jQuery","AngularJS"].map(function(t){var n=e.filter(function(e){return e.summary.split(" ").includes(t)}).length;return{name:t,value:n}}))},[e]);var s=["#0088FE","#00C49F","#FFBB28","#FF8042","#ba00fe"];return o.a.createElement(Z.a,{height:400},o.a.createElement(G.a,{width:400,height:400},o.a.createElement(P.a,{cursor:{strokeDasharray:"3 3"}}),o.a.createElement(B.a,{data:i,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(t){var e=t.name,n=t.percent;return"".concat(e," ").concat((100*n).toFixed(0),"%")}},i.map(function(t,e){return o.a.createElement(M.a,{key:"cell-".concat(e),fill:s[e%s.length]})}))))},J=n(363),q=n(364),R=n(223),U=n(224),Y=n(357);function z(){z=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&n.call(m,o)&&(d=m);var g=p.prototype=h.prototype=Object.create(d);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(s.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var H=function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={events:[],locations:[],currentLocation:"All",numberOfEvents:32,showWelcomeScreen:void 0},n.updateEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.currentLocation,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.numberOfEvents;N().then(function(r){var o="All"===t?r:r.filter(function(e){return e.location===t});n.setState({events:o.slice(0,e),currentLocation:t})})},n.updateNumberOfEvents=function(t){n.setState({numberOfEvents:t}),n.updateEvents(n.currentLocation,t)},n.getData=function(){var t=n.state,e=t.locations,r=t.events;return e.map(function(t){var e=r.filter(function(e){return e.location===t}).length;return{city:t.split(", ").shift(),number:e}})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(c.a)(z().mark(function t(){var e,n,r,o,a=this;return z().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.mounted=!0,e=localStorage.getItem("access_token"),t.next=4,C(e);case 4:if(!t.sent.error){t.next=8;break}t.t0=!1,t.next=9;break;case 8:t.t0=!0;case 9:n=t.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&N().then(function(t){a.mounted&&a.setState({events:t,locations:T(t)})});case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var t=this,e=this.state,n=(e.locations,e.numberOfEvents,e.events);return void 0===this.state.showWelcomeScreen?o.a.createElement("div",{className:"App"}):o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Meet App"),!navigator.onLine&&o.a.createElement(y,{text:"You are currently offline, data may not be updated."}),o.a.createElement("h4",null,"Choose your nearest city"),o.a.createElement(w,{locations:this.state.locations,updateEvents:this.updateEvents}),o.a.createElement("h4",null,"How many events would you like to see on this page?"),o.a.createElement(b,{updateNumberOfEvents:this.updateNumberOfEvents,updateEvents:function(){return t.updateEvents()}}),o.a.createElement("h4",null,"Events by genre"),o.a.createElement("div",{className:"data-vis-wrapper"},o.a.createElement(D,{events:n}),o.a.createElement("h4",null,"Events in each city"),o.a.createElement(Z.a,{height:400},o.a.createElement(J.a,{margin:{top:20,right:20,bottom:20,left:20}},o.a.createElement(q.a,null),o.a.createElement(R.a,{type:"category",dataKey:"city",name:"city"}),o.a.createElement(U.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),o.a.createElement(P.a,{cursor:{strokeDasharray:"3 3"}}),o.a.createElement(Y.a,{data:this.getData(),fill:"#8884d8"})))),o.a.createElement(d,{events:this.state.events}),o.a.createElement(F,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){_()}}))}}]),e}(r.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}var X=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,365)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};n(199).config("c7dafcfde41a403896346adc10442d73").install(),i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/meet","/service-worker.js");K?(function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):V(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):V(e,t)})}}(),X()},275:function(t,e,n){t.exports=n(225)},280:function(t,e,n){},282:function(t,e,n){},307:function(t,e,n){},309:function(t,e,n){}},[[275,3,2]]]);
//# sourceMappingURL=main.07b67add.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(50),o=t.n(i),c=t(12),l=t(7),u=t(23),s=t(2),p=t(3);function d(){var n=Object(s.a)(["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n      display: block;\n    }\n    body {\n      line-height: 1;\n    }\n    ol, ul {\n      list-style: none;\n    }\n    blockquote, q {\n      quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n      content: '';\n      content: none;\n    }\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n    html {\n      overflow-y: scroll;\n    }\n  "]);return d=function(){return n},n}var f=function(){Object(p.c)(d())},m=function(){f()},h=t(10),b=t(55),v=t(56),x="FETCH_POSTS_BEGIN",g="FETCH_POSTS_SUCCESS",E="FETCH_POSTS_FAILURE",j={posts:[],loading:!1,error:null};var O=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return{loading:!0};case g:return console.log("success",e.payload.data.children),{posts:e.payload.data.children,loading:!1};case E:return{loading:!1,error:"404 Posts Not Found"};default:return n}};var y=t(115);var w=function(n,e){return function(t){return t(C()),fetch(function(n,e){return"https://www.reddit.com/r/".concat(n,".json?limit=").concat(e)}(n,e)).then(_).then(function(n){return n.json()}).then(function(n){return t(P(n.data)),n}).catch(function(n){return t(S(n))})}},k=function(n){return function(e){return e(C()),fetch(function(n){return"https://www.reddit.com/original.json?limit=".concat(n)}(n)).then(_).then(function(n){return n.json()}).then(function(n){return e(P(n.data)),n}).catch(function(n){return e(S(n))})}};function _(n){if(!n.ok)throw Error(n.statusText);return n}var C=function(){return{type:x}},P=function(n){return{type:g,payload:{data:n}}},S=function(n){return{type:E}},z=t(16),N=t(17),R=t(20),T=t(18),q=t(19),H=t(57),F=t(116),I=t(117),A=t(58),M=t.n(A),G=t(40),L=t(114);function U(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n\n  width: 130px;\n  height: 35px;\n  backface-visibility: hidden;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  border-radius: 5px;\n  border-width: 2px 2px 2px 2px;\n  font-size: initial;\n  font-family: Helvetica Neue;\n  font-weight: 500;\n  font-style: normal;\n  word-spacing: 4px;\n  border: 2px solid #353031;\n"]);return U=function(){return n},n}var B=p.b.button(U(),function(n){return n.primary?"#504b4c":"#fff"},function(n){return n.primary?"#fff":"#504b4c"});function D(){var n=Object(s.a)(["\n  cursor: pointer;\n  a {\n    color: #000;\n    text-decoration: none;\n    :hover, :active {\n      text-decoration: none;\n    }\n  }\n  i {\n    padding: 8px;\n    border-radius: 3px;\n    :hover {\n      background-color: #dddcdc;\n    }\n  } \n"]);return D=function(){return n},n}var J=p.b.div(D()),W=function(n){var e=n.classname,t=n.click,r=n.type;return a.a.createElement(J,{onClick:t},a.a.createElement(L.a,{to:"/r/".concat(r)},a.a.createElement("i",{className:"fa ".concat(e),"aria-hidden":"true"})))};function K(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: center;\n  position: relative;\n  color: #aaa;\n  font-size: 16px;\n  span {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n  }\n  form input {\n    width: 400px;\n    height: 32px;\n    background: #fcfcfc;\n    border: 1px solid #aaa;\n    border-radius: 5px;\n    text-indent: 32px;\n  }\n"]);return K=function(){return n},n}var Q=p.b.div(K()),V=function(n){var e=n.placeholder;return a.a.createElement(Q,null,a.a.createElement("span",{className:"fa fa-search"}),a.a.createElement("form",null,a.a.createElement("input",{type:"text",placeholder:e})))};function X(){var n=Object(s.a)(["\n  display: flex;\n"]);return X=function(){return n},n}var Y=p.b.div(X()),Z=function(){return a.a.createElement(Y,null,a.a.createElement("i",{className:"fa fa-user-circle","aria-hidden":"true"}))},$=t(59),nn=t.n($);function en(){var n=Object(s.a)(["\n  width: 140px;\n  a img {\n    width: 110px;\n  }\n"]);return en=function(){return n},n}var tn=p.b.div(en()),rn=function(n){var e=n.link,t=n.click;return a.a.createElement(tn,null,a.a.createElement("a",{href:e,onClick:t},a.a.createElement("img",{src:nn.a,alt:"reddit-logo"})))};function an(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: center;\n  width: 165px;\n  i {\n    font-size: 20px;\n    color: blue;\n    margin-right: 6px;\n  }\n"]);return an=function(){return n},n}var on=p.b.div(an()),cn=function(n){var e=n.classname,t=n.postType;return a.a.createElement(on,null,a.a.createElement("i",{className:"fa ".concat(e),"aria-hidden":"true"}),a.a.createElement("p",null,t))};function ln(){var n=Object(s.a)(["\n      width: 300px;\n    "]);return ln=function(){return n},n}function un(){var n=Object(s.a)(["\n      width: 120px;\n      font-size: 16px;\n      margin: 0px 22px;      \n    "]);return un=function(){return n},n}function sn(){var n=Object(s.a)(["\n      padding: 5px 10px;\n      border-bottom: 1px solid rgba(0,0,0,0.2);\n      position: fixed;\n      top: 0;\n      width: 99%;\n      background-color: white;\n    "]);return sn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  ","\n  ","\n  ","\n"]);return pn=function(){return n},n}var dn=p.b.div(pn(),function(n){return n.header&&Object(p.a)(sn())},function(n){return n.icons&&Object(p.a)(un())},function(n){return n.btns&&Object(p.a)(ln())}),fn=function(){var n=Object(r.useState)("fa-line-chart"),e=Object(G.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)("Popular"),c=Object(G.a)(o,2),l=c[0],u=c[1],s=function(n,e){i(e),u(n)};return a.a.createElement("header",null,a.a.createElement(dn,{header:!0},a.a.createElement(L.a,{to:"/"},a.a.createElement(rn,{link:"http://localhost:3000/",click:function(){return s("Popular","fa-line-chart")}})),a.a.createElement(cn,{classname:t,postType:l}),a.a.createElement(V,{placeholder:"Search Reddit"}),a.a.createElement(dn,{icons:!0},a.a.createElement(W,{classname:"fa-line-chart",type:"popular",click:function(){return s("Popular","fa-line-chart")}}),a.a.createElement(W,{classname:"fa-bar-chart",type:"all",click:function(){return s("All","fa-bar-chart")}}),a.a.createElement(W,{classname:"fa-pie-chart",type:"original",click:function(){return s("Original","fa-pie-chart")}})),a.a.createElement(dn,{btns:!0},a.a.createElement(B,{primary:!0},"LOG IN"),a.a.createElement(B,null,"SING UP")),a.a.createElement(Z,null)))},mn=t(60),hn=t.n(mn),bn=t(39),vn=t.n(bn);function xn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding-right: 10px;\n  min-width: 45px;\n  i {\n    font-size: 22px;\n    color: #6e6e6e;\n    padding: 3px 6px;\n  }\n  p {\n    font-size: 18px;\n  }\n  .fa-caret-up:hover {\n    color: red;\n  }\n  .fa-caret-down:hover {\n    color: blue;\n  }\n"]);return xn=function(){return n},n}var gn=p.b.div(xn()),En=function(n){var e=n.children;return a.a.createElement(gn,null,a.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}),a.a.createElement("p",null,e),a.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"}))};function jn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  margin-bottom: 15px;\n  * {\n    margin-right: 6px;\n  }\n  h5 {\n    font-size: 14px;\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  p {\n    font-size: 11px;\n    color: grey;\n    span:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return jn=function(){return n},n}var On=p.b.div(jn()),yn=function(n){var e=n.subreddit,t=n.author;return a.a.createElement(On,null,a.a.createElement("h5",null,e),a.a.createElement("p",null,"- Posted by ",a.a.createElement("span",null,t)))};function wn(){var n=Object(s.a)(["\n  font-size: 20px;\n  h2 a {\n    text-decoration: none;\n    color: black;\n  }\n"]);return wn=function(){return n},n}var kn=p.b.div(wn()),_n=function(n){var e=n.title,t=n.permalink;return a.a.createElement(kn,null,a.a.createElement("h2",null,a.a.createElement(L.a,{to:"".concat(t)},e)))};function Cn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  color: #8a8888;\n  align-items: baseline;\n  width: min-content;\n  padding: 2px 4px;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-right: 5px;\n  :hover {\n    background-color: #e2e0e0;\n  }\n  p {\n    margin-right: 4px;\n  }\n  i {\n    font-size: 16px;\n    margin-right: 4px;\n  }\n"]);return Cn=function(){return n},n}var Pn=p.b.div(Cn()),Sn=function(n){var e=n.faClass,t=n.children,r=n.text;return a.a.createElement(Pn,null,a.a.createElement("i",{className:"fa ".concat(e),"aria-hidden":"true"}),a.a.createElement("p",null,t),a.a.createElement("span",null,r))};function zn(){var n=Object(s.a)(["\n      margin-top: 15px;\n      display: flex;\n      flex-direction: row;\n      align-items: baseline;\n    "]);return zn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n      display: flex;\n      flex-direction: column;\n    "]);return Nn=function(){return n},n}function Rn(){var n=Object(s.a)(["\n      display: flex;\n      flex-direction: row;\n      padding: 5px 10px;\n    "]);return Rn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n      width: 600px;\n      padding: 10px 0px;\n      border: 1px solid rgba(0,0,0,0.2);\n      margin: 10px;\n      border-radius: 5px;\n      cursor: pointer;\n      transition: border 0.07s ease-out;\n      :hover {\n        border: 1px solid rgba(0,0,0,0.4);\n      }\n    "]);return Tn=function(){return n},n}function qn(){var n=Object(s.a)(["\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n  \n"]);return qn=function(){return n},n}var Hn=p.b.div(qn(),function(n){return n.container&&Object(p.a)(Tn())},function(n){return n.posts&&Object(p.a)(Rn())},function(n){return n.content&&Object(p.a)(Nn())},function(n){return n.footer&&Object(p.a)(zn())});function Fn(){var n=Object(s.a)(["\n  display: ",";\n  img {\n    max-height: 500px;\n    max-width: 400px;\n    margin: 20px 10px 0px 10px;\n  }\n"]);return Fn=function(){return n},n}var In=p.b.div(Fn(),function(n){return"image"===n.post_hint?"block":"none"}),An=function(n){var e=n.post_hint,t=n.url;return a.a.createElement(In,{post_hint:e},a.a.createElement("img",{src:t,alt:"eslint shut up!"}))};function Mn(){var n=Object(s.a)(["\n  display: ",";\n  margin-top: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 440px;\n  font-size: 12px;\n  font-family: 'Courier New', Courier, monospace;\n"]);return Mn=function(){return n},n}var Gn=p.b.div(Mn(),function(n){return"link"===n.post_hint?"block":"none"}),Ln=function(n){var e=n.post_hint,t=n.url;return a.a.createElement(Gn,{post_hint:e},a.a.createElement("a",{href:t},a.a.createElement("span",{className:"link"},t)))},Un=t(30),Bn=t.n(Un);function Dn(){var n=Object(s.a)(["\n  * {\n    margin: 10px 0px;\n    max-height: 480px;\n    max-width: 480px;\n  }\n"]);return Dn=function(){return n},n}var Jn=p.b.div(Dn()),Wn=function(n){var e=n.preview;return a.a.createElement(Jn,null,a.a.createElement(Bn.a,{url:e.reddit_video_preview.fallback_url,controls:!0!==e.reddit_video_preview.is_gif,playing:!0===e.reddit_video_preview.is_gif,loop:!0===e.reddit_video_preview.is_gif}))};function Kn(){var n=Object(s.a)(["\n  * {\n    margin: 10px 0px;\n    max-height: 480px;\n    max-width: 480px;\n  }\n"]);return Kn=function(){return n},n}var Qn=p.b.div(Kn()),Vn=function(n){var e=n.media;return a.a.createElement(Qn,null,a.a.createElement(Bn.a,{url:e.reddit_video.fallback_url,playing:"true",loop:"true"}))},Xn=function(n){var e=n.data,t=e.ups,r=e.subreddit_name_prefixed,i=e.author,o=e.url,c=e.post_hint,l=e.media,u=e.preview,s=e.title,p=e.num_comments,d=e.permalink;return a.a.createElement(Hn,{container:!0},a.a.createElement(Hn,{posts:!0},a.a.createElement(En,null,vn()(t).format("0a")),a.a.createElement(Hn,{content:!0},a.a.createElement(yn,{subreddit:r,author:i}),a.a.createElement(_n,{title:s,permalink:d}),"rich:video"===c?a.a.createElement(Wn,{preview:u}):null,"hosted:video"===c?a.a.createElement(Vn,{media:l}):null,a.a.createElement(Ln,{post_hint:c,url:o,preview:u}),"link"===c&&void 0!==u.reddit_video_preview?a.a.createElement(Wn,{preview:u}):null,a.a.createElement(An,{post_hint:c,url:o}),a.a.createElement(Hn,{footer:!0},a.a.createElement(Sn,{faClass:"fa-comments",children:vn()(p).format("0a"),text:"Comments"}),a.a.createElement(Sn,{faClass:"fa-share",text:"Share"}),a.a.createElement(Sn,{faClass:"fa-bookmark",text:"Save"})))))};function Yn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 89vh;\n  margin-top: 40px;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Zn=function(){return n},n}var $n=p.b.section(Zn()),ne=p.b.section(Yn()),ee=function(n){function e(n){var t;return Object(z.a)(this,e),(t=Object(R.a)(this,Object(T.a)(e).call(this,n))).props.history.listen(function(n){t.fetchReddit(t.props.match.url)}),t}return Object(q.a)(e,n),Object(N.a)(e,[{key:"fetchReddit",value:function(n){switch(n){case"/":case"/r/popular":this.props.actions.fetchPosts("popular",10);break;case"/r/all":this.props.actions.fetchPosts("all",10);break;case"/r/original":this.props.actions.fetchOriginalPosts("original",10);break;default:this.props.actions.fetchPosts("popular",10)}}},{key:"componentDidMount",value:function(){this.fetchReddit(this.props.match.url)}},{key:"render",value:function(){return a.a.createElement(ne,null,!0===this.props.loading?a.a.createElement(hn.a,{type:"Oval",color:"orange",height:120,width:120}):a.a.createElement($n,null,this.props.posts.map(function(n){return a.a.createElement(Xn,{key:n.data.id,data:n.data})})))}}]),e}(r.Component),te=Object(y.a)(Object(c.connect)(function(n){return{posts:n.postsReducer.posts,loading:n.postsReducer.loading}},function(n){return{actions:Object(h.bindActionCreators)({fetchPosts:w,fetchOriginalPosts:k},n)}})(ee));function re(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n"]);return re=function(){return n},n}var ae=p.b.section(re()),ie=function(n){function e(){return Object(z.a)(this,e),Object(R.a)(this,Object(T.a)(e).apply(this,arguments))}return Object(q.a)(e,n),Object(N.a)(e,[{key:"render",value:function(){return a.a.createElement(ae,null,"this is post page")}}]),e}(r.Component),oe=Object(y.a)(ie),ce=function(n){function e(){return Object(z.a)(this,e),Object(R.a)(this,Object(T.a)(e).apply(this,arguments))}return Object(q.a)(e,n),Object(N.a)(e,[{key:"render",value:function(){return a.a.createElement("section",null,a.a.createElement(H.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"reddit-client"),a.a.createElement("link",{rel:"icon",href:M.a,type:"image/png",sizes:"16x16"})),a.a.createElement(fn,null),a.a.createElement(F.a,null,a.a.createElement(I.a,{exact:!0,path:"/",component:te}),a.a.createElement(I.a,{exact:!0,path:"/r/:type",component:te}),a.a.createElement(I.a,{path:"/:permalink",component:oe})))}}]),e}(r.Component),le=Object(y.a)(Object(c.connect)(function(n){return{posts:n.postsReducer.posts,loading:n.postsReducer.loading,error:n.postsReducer.error}},function(n){return{actions:Object(h.bindActionCreators)({fetchPosts:w,fetchOriginalPosts:k},n)}})(ce)),ue=Object(l.a)(),se=function(n){var e=[v.a,Object(u.routerMiddleware)(n)],t=Object(b.composeWithDevTools)(h.applyMiddleware.apply(void 0,e));return Object(h.createStore)(Object(u.connectRouter)(n)(Object(h.combineReducers)({postsReducer:O})),t)}(ue);m();var pe=function(){return a.a.createElement(c.Provider,{store:se},a.a.createElement(u.ConnectedRouter,{history:ue},a.a.createElement(le,null)))};o.a.render(a.a.createElement(pe,null),document.getElementById("root"))},58:function(n,e,t){n.exports=t.p+"static/media/reddit-icon.990cf579.png"},59:function(n,e,t){n.exports=t.p+"static/media/reddit-logo-full.bffb9b95.png"},61:function(n,e,t){n.exports=t(113)}},[[61,1,2]]]);
//# sourceMappingURL=main.8705a130.chunk.js.map
(this["webpackJsonpfinbig-front"]=this["webpackJsonpfinbig-front"]||[]).push([[33],{1307:function(n,t,e){"use strict";e.r(t);var i,r,o,a,c,d,l,u=e(521),s=e(8),p=e(185),b=e(503),f=b.a.div(i||(i=Object(p.a)(["\n  max-width: 1920px;\n  min-width: 1100px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 70px;\n  padding-bottom: 100px;\n"]))),x=b.a.img(r||(r=Object(p.a)(["\n  width: 444px;\n  height: 428px;\n"]))),v=b.a.div(o||(o=Object(p.a)(["\n  font-size: 14px;\n  margin-top: 37px;\n  margin-bottom: 4px;\n  color: #999999;\n"]))),h=b.a.div(a||(a=Object(p.a)(["\n  font-family: SpoqaHanSansNeo-Bold;\n  margin-bottom: 32px;\n"]))),j=b.a.div(c||(c=Object(p.a)(["\n  font-size: 14px;\n  color: #999999;\n  width: 444px;\n  flex-wrap: wrap;\n  text-align: center;\n"]))),g=b.a.div(d||(d=Object(p.a)(["\n  max-width: 1920px;\n  min-width: 1100px;\n  width: 100%;\n  border-top: 1px solid #c1c1c1;\n  margin-bottom: 24px;\n  margin-top: 45px;\n"]))),m=e(673),O=e(625),w=e(4),y=function(n){var t,e=n.data,i=Object(s.d)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(f,{children:[Object(w.jsx)(x,{src:(null===e||void 0===e?void 0:e.thumbnail)||""}),Object(w.jsx)(v,{children:"[\ub370\uc774\ud130 \ud65c\uc6a9]"}),Object(w.jsx)(h,{children:null===e||void 0===e?void 0:e.title}),Object(w.jsx)(j,{children:null===e||void 0===e?void 0:e.description}),Object(w.jsx)(g,{}),(null===e||void 0===e?void 0:e.contents)&&Object(w.jsx)(m.a,{initialValue:e.contents}),Object(w.jsx)(O.l,{children:"\uad00\ub828 \uc0c1\ud488"}),Object(w.jsx)(O.k,{children:null===e||void 0===e||null===(t=e.finbigs)||void 0===t?void 0:t.map((function(n){return Object(w.jsxs)(O.j,{children:[Object(w.jsx)(O.n,{src:String(null===n||void 0===n?void 0:n.thumbnail),onClick:function(){i("/data/".concat(null===n||void 0===n?void 0:n.id))}}),Object(w.jsxs)(O.v,{children:[Object(w.jsx)(O.o,{onClick:function(){i("/data/".concat(null===n||void 0===n?void 0:n.id))},children:null===n||void 0===n?void 0:n.title}),Object(w.jsx)(O.m,{children:null===n||void 0===n?void 0:n.description})]})]})}))})]})})},k=e(1299),P=Object(k.a)(l||(l=Object(p.a)(["\n  query visualDatum($id: ID!) {\n    visualDatum(id: $id) {\n      id\n      created_at\n      title\n      category\n      description\n      viewCount\n      contents\n      thumbnail\n      finbigs {\n        id\n        title\n        thumbnail\n        description\n      }\n    }\n  }\n"])));t.default=function(){var n=Object(s.e)().visualId,t=Object(u.a)(P,{variables:{id:String(n)}}).data;return Object(w.jsx)(y,{data:null===t||void 0===t?void 0:t.visualDatum})}},521:function(n,t,e){"use strict";e.d(t,"a",(function(){return p}));var i=e(0),r=e(1),o=e(19),a=e(498),c=e(271),d=e(59),l=e(14),u=e(510),s=e(509);function p(n,t){var e,a=Object(r.useContext)(Object(c.a)()),p=Object(s.a)(null===t||void 0===t?void 0:t.client),f=p.defaultOptions.watchQuery;Object(u.b)(n,u.a.Query);var x,v=Object(r.useState)((function(){var e=b(n,t,f),i=null;return a.renderPromises&&(i=a.renderPromises.getSSRObservable(e)),i||(i=p.watchQuery(e),a.renderPromises&&a.renderPromises.registerSSRObservable(i,e)),a.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&i.getCurrentResult().loading&&a.renderPromises.addQueryPromise({getOptions:function(){return b(n,t,f)},fetchData:function(){return new Promise((function(n){var t=i.subscribe({next:function(e){e.loading||(n(),t.unsubscribe())},error:function(){n(),t.unsubscribe()},complete:function(){n()}})}))}},(function(){return null})),i})),h=v[0],j=v[1],g=Object(r.useState)((function(){var n,e,i=h.getCurrentResult();return!i.loading&&t&&(i.error?null===(n=t.onError)||void 0===n||n.call(t,i.error):i.data&&(null===(e=t.onCompleted)||void 0===e||e.call(t,i.data))),i})),m=g[0],O=g[1],w=Object(r.useRef)({client:p,query:n,options:t,result:m,previousData:void 0,watchQueryOptions:b(n,t,f)});Object(r.useEffect)((function(){var e,i,r,a=b(n,t,f);if(w.current.client===p&&Object(o.a)(w.current.query,n))Object(o.a)(w.current.watchQueryOptions,a)||(h.setOptions(a).catch((function(){})),r=h.getCurrentResult(),w.current.watchQueryOptions=a);else{var c=p.watchQuery(a);j(c),r=c.getCurrentResult()}if(r){var d=w.current.result;d.data&&(w.current.previousData=d.data),O(w.current.result=r),!r.loading&&t&&(r.error?null===(e=t.onError)||void 0===e||e.call(t,r.error):r.data&&(null===(i=t.onCompleted)||void 0===i||i.call(t,r.data)))}Object.assign(w.current,{client:p,query:n})}),[h,p,n,t]),Object(r.useEffect)((function(){if(!a.renderPromises){var n=h.subscribe(t,(function e(i){var r,a,c=h.last;n.unsubscribe();try{h.resetLastResults(),n=h.subscribe(t,e)}finally{h.last=c}if(!i.hasOwnProperty("graphQLErrors"))throw i;var d=w.current.result;(d&&d.loading||!Object(o.a)(i,d.error))&&(O(w.current.result={data:d.data,error:i,loading:!1,networkStatus:l.a.error}),null===(a=null===(r=w.current.options)||void 0===r?void 0:r.onError)||void 0===a||a.call(r,i))}));return function(){return n.unsubscribe()}}function t(){var n,t,e=w.current.result,i=h.getCurrentResult();e&&e.loading===i.loading&&e.networkStatus===i.networkStatus&&Object(o.a)(e.data,i.data)||(e.data&&(w.current.previousData=e.data),O(w.current.result=i),i.loading||null===(t=null===(n=w.current.options)||void 0===n?void 0:n.onCompleted)||void 0===t||t.call(n,i.data))}}),[h,a.renderPromises,p.disableNetworkFetches]),x=(e=m).partial,m=Object(i.e)(e,["partial"]),!x||!(null===t||void 0===t?void 0:t.partialRefetch)||m.loading||m.data&&0!==Object.keys(m.data).length||"cache-only"===h.options.fetchPolicy||(m=Object(i.a)(Object(i.a)({},m),{loading:!0,networkStatus:l.a.refetch}),h.refetch()),a.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&m.loading&&h.setOptions(b(n,t,f)).catch((function(){})),Object.assign(w.current,{options:t}),(a.renderPromises||p.disableNetworkFetches)&&!1===(null===t||void 0===t?void 0:t.ssr)?m=w.current.result={loading:!0,data:void 0,error:void 0,networkStatus:l.a.loading}:((null===t||void 0===t?void 0:t.skip)||"standby"===(null===t||void 0===t?void 0:t.fetchPolicy))&&(m={loading:!1,data:void 0,error:void 0,networkStatus:l.a.ready}),m.errors&&m.errors.length&&(m=Object(i.a)(Object(i.a)({},m),{error:m.error||new d.a({graphQLErrors:m.errors})}));var y=Object(r.useMemo)((function(){return{refetch:h.refetch.bind(h),fetchMore:h.fetchMore.bind(h),updateQuery:h.updateQuery.bind(h),startPolling:h.startPolling.bind(h),stopPolling:h.stopPolling.bind(h),subscribeToMore:h.subscribeToMore.bind(h)}}),[h]);return Object(i.a)(Object(i.a)(Object(i.a)({},y),{variables:b(n,t,f).variables,client:p,called:!0,previousData:w.current.previousData}),m)}function b(n,t,e){var r;void 0===t&&(t={});var o=t.skip,c=(t.ssr,t.onCompleted,t.onError,t.displayName,Object(i.e)(t,["skip","ssr","onCompleted","onError","displayName"])),d=Object(i.a)({query:n},c);return e&&(d=Object(a.b)(e,d)),o?d.fetchPolicy="standby":(!(null===(r=d.context)||void 0===r?void 0:r.renderPromises)||"network-only"!==d.fetchPolicy&&"cache-and-network"!==d.fetchPolicy)&&d.fetchPolicy||(d.fetchPolicy="cache-first"),d.variables||(d.variables={}),d}},625:function(n,t,e){"use strict";e.d(t,"w",(function(){return q})),e.d(t,"a",(function(){return D})),e.d(t,"d",(function(){return R})),e.d(t,"g",(function(){return z})),e.d(t,"u",(function(){return E})),e.d(t,"c",(function(){return N})),e.d(t,"t",(function(){return M})),e.d(t,"s",(function(){return B})),e.d(t,"r",(function(){return H})),e.d(t,"q",(function(){return F})),e.d(t,"p",(function(){return L})),e.d(t,"b",(function(){return I})),e.d(t,"f",(function(){return J})),e.d(t,"h",(function(){return T})),e.d(t,"i",(function(){return $})),e.d(t,"e",(function(){return V})),e.d(t,"l",(function(){return _})),e.d(t,"k",(function(){return A})),e.d(t,"j",(function(){return G})),e.d(t,"v",(function(){return K})),e.d(t,"o",(function(){return U})),e.d(t,"n",(function(){return W})),e.d(t,"m",(function(){return X}));var i,r,o,a,c,d,l,u,s,p,b,f,x,v,h,j,g,m,O,w,y,k,P,S,C=e(185),Q=e(503),q=Q.a.div(i||(i=Object(C.a)(["\n  max-width: 1920px;\n  min-width: 1100px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 80px;\n  padding-bottom: 70px;\n"]))),D=Q.a.div(r||(r=Object(C.a)(["\n  display: flex;\n  width: 1100px;\n  justify-content: space-between;\n"]))),R=Q.a.div(o||(o=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n  width: 537px;\n"]))),z=Q.a.img(a||(a=Object(C.a)(["\n  width: 465px;\n  height: 444px;\n"]))),E=Q.a.div(c||(c=Object(C.a)(["\n  font-size: 20px;\n  font-family: SpoqaHanSansNeo-Bold;\n  margin-bottom: 24px;\n"]))),N=Q.a.div(d||(d=Object(C.a)(["\n  font-size: 14px;\n  color: #999999;\n  /* margin-bottom: 100px; */\n  height: 180px;\n"]))),M=Q.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  border-bottom: 1px solid #c1c1c1;\n"]))),B=Q.a.div(u||(u=Object(C.a)(["\n  width: 134px;\n  height: 55px;\n  background-color: #f3f3f3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n"]))),H=Q.a.div(s||(s=Object(C.a)(["\n  width: 134px;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n"]))),F=Q.a.div(p||(p=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 536px;\n  margin-top: 20px;\n  margin-bottom: 16px;\n  align-items: center;\n  height: 38px;\n"]))),L=Q.a.div(b||(b=Object(C.a)(["\n  font-size: 14px;\n"]))),I=Q.a.div(f||(f=Object(C.a)(["\n  display: flex;\n"]))),J=Q.a.button(x||(x=Object(C.a)(["\n  width: 482px;\n  height: 48px;\n  background-color: #4033a2;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: white;\n  font-size: 14px;\n  margin-right: 6px;\n"]))),T=Q.a.button(v||(v=Object(C.a)(["\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #999999;\n  background-color: white;\n  padding-top: 4px;\n"]))),$=Q.a.img(h||(h=Object(C.a)([""]))),V=Q.a.div(j||(j=Object(C.a)(["\n  width: 100%;\n  max-width: 1920px;\n  min-width: 1100px;\n  border-top: 1px solid #cccccc;\n  margin: 100px 0px 100px 0px;\n"]))),_=(Q.a.img(g||(g=Object(C.a)(["\n  width: 1100px;\n  height: 658px;\n  border: 1px solid #cccccc;\n"]))),Q.a.div(m||(m=Object(C.a)(["\n  border-top: 1px solid #cccccc;\n  border-bottom: 1px solid #cccccc;\n  width: 100%;\n  max-width: 1920px;\n  min-width: 1100px;\n  padding-top: 23px;\n  padding-bottom: 23px;\n  margin-top: 100px;\n  margin-bottom: 67px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: SpoqaHanSansNeo-Bold;\n"])))),A=Q.a.div(O||(O=Object(C.a)(["\n  width: 1100px;\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: space-between;\n"]))),G=Q.a.div(w||(w=Object(C.a)(["\n  width: 510px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n"]))),K=Q.a.div(y||(y=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 37px;\n  width: 318px;\n"]))),U=Q.a.div(k||(k=Object(C.a)(["\n  font-family: SpoqaHanSansNeo-Bold;\n  margin-bottom: 23px;\n  cursor: pointer;\n"]))),W=Q.a.img(P||(P=Object(C.a)(["\n  width: 168px;\n  height: 168px;\n  cursor: pointer;\n"]))),X=Q.a.div(S||(S=Object(C.a)(["\n  font-size: 12px;\n  color: #999999;\n"])))}}]);
//# sourceMappingURL=33.80dd9932.chunk.js.map
(window["webpackJsonplending-page"]=window["webpackJsonplending-page"]||[]).push([[0],[,,function(e,t,n){e.exports={"header-container":"Header_header-container__16_5v",content:"Header_content__3z1OQ","header-title":"Header_header-title__3CwIl","go-btn":"Header_go-btn__1T5qm"}},,,function(e,t,n){e.exports={"preview-container":"MoviePreview_preview-container__L3cjc","img-movie":"MoviePreview_img-movie__3J6VF"}},,,,,,function(e,t,n){e.exports={"main-layout":"Layout_main-layout__-VOaa"}},function(e,t,n){e.exports={"about-container":"About_about-container__2wzk2"}},function(e,t,n){e.exports={"list-container":"MovieList_list-container__3YWV6"}},function(e,t,n){e.exports={"modal-container":"Modal_modal-container__joHEQ"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1-2Yk"}},,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(23),n(24),n(1)),s=n.n(c),l=n(3),u=n(4),m=n(8),p=n(9),v=n(16),d=n(10),h=n(17),g=n(11),f=n.n(g),w=n(2),k=n.n(w),b=function(e){return o.a.createElement("div",{className:k.a["header-container"]},o.a.createElement("div",{className:k.a.content},o.a.createElement("h1",{className:k.a["header-title"]},"CHooSE YoUR FAVoRiTE STAR-WARS MoViE")),o.a.createElement("button",{onClick:function(){document.getElementById("about").scrollIntoView()},className:k.a["go-btn"]},"May the force be with you"))},_=n(12),E=n.n(_),y=n(13),O=n.n(y),j=n(5),S=n.n(j);var M={"Attack of the Clones":"https://vignette.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257","A New Hope":"https://starwarsblog.starwars.com/wp-content/uploads/2014/05/a-new-hope.jpg","The Phantom Menace":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg","Revenge of the Sith":"https://images-na.ssl-images-amazon.com/images/I/81cUuRhZw%2BL._SL1500_.jpg","Return of the Jedi":"https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg","The Empire Strikes Back":"https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg","The Force Awakens":"https://images-na.ssl-images-amazon.com/images/I/91xZGOnCFSL._SL1500_.jpg"};var N={saveToStorage:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},getImg:function(e){return M[e]}},P=n(14),I=n.n(P),x=function(e){return o.a.createElement("div",{className:I.a["modal-container"]},o.a.createElement("h2",null,e.movie.title),o.a.createElement("p",null,"director: ",e.movie.director),o.a.createElement("p",null,"producer: ",e.movie.producer),o.a.createElement("p",null,"release_date: ",e.movie.release_date),o.a.createElement("p",null,"opening_crawl: ",e.movie.opening_crawl))},A=function(e){var t=e.movie.title,n=e.savedMovie&&Object.keys(e.savedMovie).find(function(e){return e===t}),a=e.savedMovie[n]?"fas fa-bookmark ":"far fa-bookmark ",r=N.getImg(t),i=e.show?o.a.createElement(x,{movie:e.movie}):"";return o.a.createElement("div",{className:S.a["preview-container"]},i,o.a.createElement("div",{className:S.a["img-movie"],style:{backgroundImage:"url(".concat(r,")")},onClick:e.backdrop}),o.a.createElement("h1",null,t),o.a.createElement("span",{onClick:function(){e.click(t)},className:a}))},B=function(e){console.log(e);var t=e.movies?e.movies.map(function(t){return o.a.createElement("li",{key:t.title},o.a.createElement(A,{movie:t,savedMovie:e.savedMovie,click:e.click,backdrop:e.backdrop,show:e.show}))}):"";return o.a.createElement("div",{className:O.a["list-container"]},o.a.createElement("ul",null,t))},F=function(e){return o.a.createElement("div",{className:E.a["about-container"],id:"about"},o.a.createElement(B,{movies:e.movies,savedMovie:e.savedMovie,click:e.click,backdrop:e.backdrop,show:e.show}))};function V(){return(V=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getFilms();case 2:return t=e.sent,console.log(t),e.abrupt("return",t.results);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var L={loadMovies:function(){return V.apply(this,arguments)}},T=function(){var e="https://swapi.co/api/";function t(e,t){return fetch(e).then(function(e){return e.json()}).then(function(e){return"function"===typeof t&&t(e),e}).catch(function(e){console.log(e)})}function n(n){return function(a,o){return t(e+n+"/"+a+"/",o)}}function a(n){return function(){var a=void 0,o=void 0;if(arguments.length>1?(a=arguments[0],o=arguments[1]):arguments[0]&&("function"===typeof arguments[0]?(o=arguments[0],a=null):(o=null,a=arguments[0])),a){for(var r=new URLSearchParams,i=0,c=Object.keys(a);i<c.length;i++){var s=c[i],l=a[s];r.append(s,l)}return t(e+n+"/?"+r.toString(),o)}return t(e+n+"/",o)}}return{getResources:function(n){return t(e,n)},getPerson:n("people"),getPeople:a("people"),getFilm:n("films"),getFilms:a("films"),getPlanet:n("planets"),getPlanets:a("planets"),getSpecies:n("species"),getAllSpecies:a("species"),getStarship:n("starships"),getStarships:a("starships"),getVehicle:n("vehicles"),getVehicles:a("vehicles")}}(),C=n(15),R=n.n(C),z=function(e){return e.show?o.a.createElement("div",{className:R.a.Backdrop,onClick:e.clicked}):null};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var H=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={movies:null,savedMovie:[],show:!1},n.handleSave=function(e){var t=N.loadFromStorage("movies")?N.loadFromStorage("movies"):{},a=!t[e];t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,Object(u.a)({},e,a)),N.saveToStorage("movies",t),n.setState({savedMovie:t})},n.handleBackdrop=function(){console.log("innnnn"),n.setState(function(e){return{show:!e.show}})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.loadMovies();case 2:t=e.sent,n=N.loadFromStorage("movies"),this.setState({movies:t,savedMovie:n}),console.log(this.state.savedMovie);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:f.a["main-layout"]},o.a.createElement(z,{show:this.state.show,clicked:this.handleBackdrop}),o.a.createElement(b,{click:this.handelClick}),o.a.createElement(F,{movies:this.state.movies,savedMovie:this.state.savedMovie,click:this.handleSave,backdrop:this.handleBackdrop,show:this.state.show}))}}]),t}(a.Component);var J=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.547a87e2.chunk.js.map
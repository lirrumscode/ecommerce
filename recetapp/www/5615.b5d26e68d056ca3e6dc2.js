(self.webpackChunkvurotron=self.webpackChunkvurotron||[]).push([[5615],{5615:(e,t,r)=>{"use strict";r.r(t),r.d(t,{VideosPageModule:()=>y});var o=r(1116),i=r(1462),n=r(6611),c=r(5860),s=r(4762),a=r(8619),p=r(5710),l=r(4409);function u(e,t){if(1&e&&(a.TgZ(0,"ion-col",7),a.TgZ(1,"p",12),a._uU(2),a.qZA(),a.qZA()),2&e){const e=a.oxw();a.xp6(2),a.Oqu(e.msg)}}function h(e,t){if(1&e&&a._UZ(0,"img",17),2&e){const e=a.oxw().$implicit;a.Q6J("src",e.thumbnail,a.LSH)}}function g(e,t){if(1&e&&(a.TgZ(0,"ion-card",13),a.YNc(1,h,1,1,"img",14),a.TgZ(2,"ion-card-header"),a.TgZ(3,"ion-card-subtitle"),a.TgZ(4,"a",15),a._uU(5),a.qZA(),a.qZA(),a.TgZ(6,"ion-card-title"),a._uU(7),a.qZA(),a.TgZ(8,"p",16),a._uU(9),a.qZA(),a.TgZ(10,"p",16),a._uU(11),a.qZA(),a.qZA(),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.Q6J("ngIf",e.thumbnail),a.xp6(3),a.MGl("href","https://youtu.be/",e.youTubeId,"",a.LSH),a.xp6(1),a.Oqu(e.shortTitle),a.xp6(2),a.Oqu(e.title),a.xp6(2),a.hij("Views: ",e.views,""),a.xp6(2),a.hij("Rating: ",e.rating,"")}}const d=[{path:"",component:(()=>{class e{constructor(e){this.apiService=e}ngOnInit(){this.setDefaultValues()}setDefaultValues(){this.msg="Please search a video with a name of food!"}getVideosSearch(e){return(0,s.mG)(this,void 0,void 0,function*(){this.textSearch=e.detail.value,yield this.apiService.getVideosSearch(this.textSearch).subscribe(e=>(this.msg="",this.dataAllVideos=e.videos,this.dataAllVideos))})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(p.s))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-videos"]],decls:20,vars:5,consts:[["mode","ios",1,"ion-no-border"],["mode","ios","color","dark"],["slot","start"],["src","./assets/icons/left.svg","alt","img",1,"back"],["color","light"],["color","dark"],[1,"ion-padding"],["size","12"],[1,"title"],["placeholder","Search your videos fav","mode","ios","color","dark",3,"ionChange"],["size","12",4,"ngIf"],["mode","ios",4,"ngFor","ngForOf"],[1,"text"],["mode","ios"],["alt","image",3,"src",4,"ngIf"],[3,"href"],[1,"text-one"],["alt","image",3,"src"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar",1),a.TgZ(2,"ion-buttons",2),a._UZ(3,"img",3),a._UZ(4,"ion-back-button",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"ion-content",5),a.TgZ(6,"div",6),a.TgZ(7,"ion-grid"),a.TgZ(8,"ion-row"),a.TgZ(9,"ion-col",7),a.TgZ(10,"h1",8),a._uU(11,"Search "),a.TgZ(12,"span"),a._uU(13,"Videos"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"ion-col",7),a.TgZ(15,"ion-searchbar",9),a.NdJ("ionChange",function(e){return t.getVideosSearch(e)}),a.qZA(),a.qZA(),a.TgZ(16,"ion-col",7),a.YNc(17,u,3,1,"ion-col",10),a.YNc(18,g,12,6,"ion-card",11),a.ALo(19,"search"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(17),a.Q6J("ngIf",t.msg),a.xp6(1),a.Q6J("ngForOf",a.xi3(19,2,t.dataAllVideos,t.textSearch)))},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.W2,n.jY,n.Nd,n.wI,n.VI,n.j9,o.O5,o.sg,n.PM,n.Zi,n.tO,n.gZ],pipes:[l.C],styles:[".title[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:700;text-align:left;padding-left:10px}ion-card-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}.text[_ngcontent-%COMP%]{text-align:center;color:#fff;font-weight:700;font-size:20px}.text[_ngcontent-%COMP%], .text-one[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:0}.text-one[_ngcontent-%COMP%]{text-align:left;color:#000;font-weight:300}.back[_ngcontent-%COMP%]{width:22px;position:absolute;right:40px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),e})();var m=r(3398);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,i.u5,n.Pc,f,m.d]]}),e})()},5710:(e,t,r)=>{"use strict";r.d(t,{s:()=>s});var o=r(9996),i=r(529),n=r(8619),c=r(2693);let s=(()=>{class e{constructor(e){this.http=e}getDetailRecipes(e){try{return this.http.get(`${i.N.url}recipes/${e}/information?apiKey=${i.N.apiKey}`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getMenuItems(e){try{return this.http.get(`${i.N.url}/food/menuItems/search?apiKey=${i.N.apiKey}&query=${e}&number=5`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getMenuItemsById(e){try{return this.http.get(`${i.N.url}food/menuItems/${e}?apiKey=${i.N.apiKey}`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getRandomRecipes(){try{return this.http.get(`${i.N.url}recipes/random?apiKey=${i.N.apiKey}&number=100`).pipe((0,o.U)(e=>e))}catch(e){console.error(e)}}getSimilarRecipes(e){try{return this.http.get(`${i.N.url}recipes/${e}/similar?apiKey=${i.N.apiKey}&number=100`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getCardRecipes(e){try{return this.http.get(`${i.N.url}recipes/${e}/card?apiKey=${i.N.apiKey}`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getAllRecipes(){try{return this.http.get(`${i.N.url}recipes/complexSearch?apiKey=${i.N.apiKey}&number=1000`).pipe((0,o.U)(e=>e))}catch(e){console.error(e)}}getAllSearchRecipes(e){try{return this.http.get(`${i.N.url}recipes/complexSearch?query=${e}&apiKey=${i.N.apiKey}&number=1000`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getAllsRecipes(){try{return this.http.get(`${i.N.url}recipes/complexSearch?apiKey=${i.N.apiKey}&number=1000`).pipe((0,o.U)(e=>e))}catch(e){console.error(e)}}getRecipeDesserts(e){try{return this.http.get(`${i.N.url}recipes/complexSearch?apiKey=${i.N.apiKey}&query=${e}&number=1000`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}getRandomJoke(){try{return this.http.get(`${i.N.url}food/jokes/random?apiKey=${i.N.apiKey}`).pipe((0,o.U)(e=>e))}catch(e){console.error(e)}}getRandomTriviaJoke(){try{return this.http.get(`${i.N.url}food/trivia/random?apiKey=${i.N.apiKey}`).pipe((0,o.U)(e=>e))}catch(e){console.error(e)}}getVideosSearch(e){try{return this.http.get(`${i.N.url}food/videos/search?query=${e}&apiKey=${i.N.apiKey}&number=1000`).pipe((0,o.U)(e=>e))}catch(t){console.error(t)}}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(c.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4762:(e,t,r)=>{"use strict";function o(e,t,r,o){return new(r||(r=Promise))(function(i,n){function c(e){try{a(o.next(e))}catch(t){n(t)}}function s(e){try{a(o.throw(e))}catch(t){n(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(c,s)}a((o=o.apply(e,t||[])).next())})}r.d(t,{mG:()=>o})}}]);
(self.webpackChunkvurotron=self.webpackChunkvurotron||[]).push([[5164],{5164:(t,n,i)=>{"use strict";i.r(n),i.d(n,{DetailPageModule:()=>x});var e=i(1116),o=i(1462),a=i(6611),c=i(5860),r=i(4762),g=i(8619),s=i(5710);function d(t,n){1&t&&(g.TgZ(0,"p",22),g._uU(1," Product Vegan! "),g.qZA())}function l(t,n){1&t&&(g.TgZ(0,"p",22),g._uU(1," Product not Vegan! "),g.qZA())}function p(t,n){if(1&t&&g._UZ(0,"img",26),2&t){const t=g.oxw().$implicit;g.MGl("src","https://spoonacular.com/recipeImages/",t.image,"",g.LSH)}}function f(t,n){if(1&t&&(g.TgZ(0,"ion-item"),g.TgZ(1,"ion-avatar"),g.YNc(2,p,1,1,"img",23),g.qZA(),g.TgZ(3,"ion-label"),g.TgZ(4,"h2",24),g._uU(5),g.qZA(),g.TgZ(6,"p",25),g._uU(7),g.qZA(),g.qZA(),g.qZA()),2&t){const t=n.$implicit;g.xp6(2),g.Q6J("ngIf",t.image),g.xp6(3),g.Oqu(t.originalName),g.xp6(2),g.Oqu(t.consistency)}}function Z(t,n){if(1&t&&(g.TgZ(0,"ion-grid"),g.TgZ(1,"ion-row"),g.TgZ(2,"ion-col",9),g.TgZ(3,"ion-card-header"),g.TgZ(4,"ion-card-subtitle"),g._uU(5,"Detail"),g.qZA(),g.TgZ(6,"ion-card-title",13),g._uU(7),g.qZA(),g.qZA(),g.TgZ(8,"ion-card"),g._UZ(9,"img",14),g.TgZ(10,"ion-card-content"),g.TgZ(11,"ion-row"),g.TgZ(12,"ion-col",15),g.TgZ(13,"ion-avatar"),g._UZ(14,"img",16),g.qZA(),g.qZA(),g.TgZ(15,"ion-col",17),g.TgZ(16,"h3",18),g._uU(17),g.qZA(),g.YNc(18,d,2,0,"p",19),g.YNc(19,l,2,0,"p",19),g.qZA(),g.qZA(),g._UZ(20,"p",20),g._UZ(21,"p",20),g.TgZ(22,"h3",10),g._uU(23,"Ingredients:"),g.qZA(),g.TgZ(24,"ion-list",21),g.YNc(25,f,8,3,"ion-item",12),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t){const t=g.oxw();g.xp6(7),g.Oqu(t.dataDetail.title),g.xp6(2),g.Q6J("src",t.dataDetail.image,g.LSH),g.xp6(8),g.Oqu(t.dataDetail.creditsText),g.xp6(1),g.Q6J("ngIf",t.dataDetail.vegan),g.xp6(1),g.Q6J("ngIf",!t.dataDetail.vegan),g.xp6(1),g.Q6J("innerHTML",t.dataDetail.instructions,g.oJD),g.xp6(1),g.Q6J("innerHTML",t.dataDetail.summary,g.oJD),g.xp6(4),g.Q6J("ngForOf",t.dataDetail.extendedIngredients)}}function m(t,n){if(1&t&&(g.TgZ(0,"ion-slide"),g.TgZ(1,"ion-row"),g._UZ(2,"ion-col",9),g.TgZ(3,"ion-col",9),g.TgZ(4,"h3",27),g.TgZ(5,"a",28),g._uU(6),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t){const t=n.$implicit,i=g.oxw();g.xp6(5),g.s9C("href",i.dataSimilar.sourceUrl,g.LSH),g.xp6(1),g.hij(" ",t.title," ")}}const u=[{path:"",component:(()=>{class t{constructor(t,n,i){this.route=t,this.router=n,this.apiService=i}ngOnInit(){this.route.params.subscribe(t=>{this.id=t.id}),this.getDetail(this.id),this.getSimilar(this.id)}setDefaultValues(){this.slideOpts={initialSlide:0,slidesPerView:2,spaceBetween:10,speed:1e3,autoplay:!0,zoom:!1}}getDetail(t){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.apiService.getDetailRecipes(t).subscribe(t=>{this.dataDetail=t})}catch(n){console.error(n)}})}getSimilar(t){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.apiService.getSimilarRecipes(t).subscribe(t=>{this.dataSimilar=t})}catch(n){console.error(n)}})}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(c.gz),g.Y36(c.F0),g.Y36(s.s))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-detail"]],decls:18,vars:3,consts:[["mode","ios",1,"ion-no-border"],["mode","ios"],["slot","start"],["src","./assets/icons/left.svg","alt","img",2,"width","20px"],["color","dark"],[1,"ion-padding"],[1,"sec-inf"],[4,"ngIf"],[1,"sec-similar"],["size","12"],[1,"heading-four"],["pager","false",3,"options"],[4,"ngFor","ngForOf"],[1,"title-card"],[2,"border-radius","35px",3,"src"],["size","2"],["src","https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740753.jpg","alt","img"],["size","10"],[1,"title-card-one"],["class","txt-card-date",4,"ngIf"],[1,"txt-card",3,"innerHTML"],[2,"border-radius","20px"],[1,"txt-card-date"],[3,"src",4,"ngIf"],[1,"heading-two"],[1,"heading-three"],[3,"src"],[1,"title"],["target","_blank",3,"href"]],template:function(t,n){1&t&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar",1),g.TgZ(2,"ion-buttons",2),g._UZ(3,"img",3),g._UZ(4,"ion-back-button",4),g.qZA(),g.qZA(),g.qZA(),g.TgZ(5,"ion-content"),g.TgZ(6,"div",5),g.TgZ(7,"section",6),g.YNc(8,Z,26,8,"ion-grid",7),g.qZA(),g.TgZ(9,"section",8),g.TgZ(10,"ion-row"),g.TgZ(11,"ion-col",9),g.TgZ(12,"h3",10),g._uU(13,"Similar Receipes:"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(14,"ion-row"),g.TgZ(15,"ion-col",9),g.TgZ(16,"ion-slides",11),g.YNc(17,m,7,2,"ion-slide",12),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(8),g.Q6J("ngIf",n.dataDetail),g.xp6(8),g.Q6J("options",n.slideOpts),g.xp6(1),g.Q6J("ngForOf",n.dataSimilar))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.W2,e.O5,a.Nd,a.wI,a.Hr,e.sg,a.jY,a.Zi,a.tO,a.gZ,a.PM,a.FN,a.BJ,a.q_,a.Ie,a.Q$,a.A$],styles:[".sec-inf[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;text-align:center;font-family:Poppins;color:#2fd565}.sec-inf[_ngcontent-%COMP%]   .notificacion-icon[_ngcontent-%COMP%]{width:8%;margin-left:20px}.sec-inf[_ngcontent-%COMP%]   .title-card[_ngcontent-%COMP%]{font-family:Poppins;font-size:20px;margin-bottom:0!important;font-weight:700}.sec-inf[_ngcontent-%COMP%]   .txt-card[_ngcontent-%COMP%]{text-align:justify;margin-top:5%;font-family:Poppins;padding-left:0;padding-right:0}.sec-inf[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding-top:0}.sec-inf[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{border-radius:13px;box-shadow:none;margin-top:0}.sec-inf[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.sec-inf[_ngcontent-%COMP%]   .title-card-one[_ngcontent-%COMP%]{padding-left:20px;font-weight:700;color:#000;margin-top:10px;font-family:Poppins}.sec-inf[_ngcontent-%COMP%]   .txt-card-date[_ngcontent-%COMP%]{padding-left:20px;font-family:Poppins;color:#c3c3c3}.sec-inf[_ngcontent-%COMP%]   .icon-header[_ngcontent-%COMP%]{position:absolute;font-size:20px;color:#c3c3c3;top:40px;right:23px}.sec-inf[_ngcontent-%COMP%]   .heading-four[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:20px;margin-top:20px;margin-bottom:20px}.sec-inf[_ngcontent-%COMP%]   .heading-two[_ngcontent-%COMP%]{font-weight:700;padding-top:20px;padding-left:20px}.sec-inf[_ngcontent-%COMP%]   .heading-three[_ngcontent-%COMP%]{padding-left:20px;color:#000;font-weight:300}.sec-similar[_ngcontent-%COMP%]   .text-one[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:left;font-size:14px}.sec-similar[_ngcontent-%COMP%]   .text-two[_ngcontent-%COMP%]{font-weight:500;color:#ffbfa8;text-align:right;font-size:13px}.sec-similar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:11px;color:#000;margin-top:0;margin-bottom:0}.sec-similar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.sec-similar[_ngcontent-%COMP%]   .heading-four[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:20px;margin-top:20px;margin-bottom:20px;padding-left:20px}.sec-similar[_ngcontent-%COMP%]   .sli-image[_ngcontent-%COMP%]{border-radius:10px}@media only screen and (min-width:768px) and (max-width:1024px){ion-card[_ngcontent-%COMP%]{width:70%;display:block;margin:5% auto 0}}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[e.ez,o.u5,a.Pc,h]]}),t})()}}]);
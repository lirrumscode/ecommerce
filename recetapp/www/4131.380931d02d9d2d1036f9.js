(self.webpackChunkvurotron=self.webpackChunkvurotron||[]).push([[4131],{4131:(t,n,i)=>{"use strict";i.r(n),i.d(n,{FinishPageModule:()=>_});var o=i(1116),e=i(1462),c=i(6611),s=i(5860),r=i(4762),g=i(8619),a=i(3808);function l(t,n){1&t&&(g.TgZ(0,"div",9),g.TgZ(1,"div",10),g._UZ(2,"img",11),g.qZA(),g.TgZ(3,"p",12),g._uU(4," \xa1Welcome to RecetApp, "),g._UZ(5,"br"),g.TgZ(6,"span"),g._uU(7,"Please add recipes that you love!"),g.qZA(),g.qZA(),g.qZA())}function p(t,n){1&t&&g._UZ(0,"img",20)}function d(t,n){if(1&t&&(g.TgZ(0,"p",21),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.hij(" ",t," ")}}function f(t,n){if(1&t&&(g.TgZ(0,"p",21),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.hij(" ",t," ")}}function u(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"ion-col",14),g.YNc(1,p,1,0,"img",15),g._UZ(2,"img",16),g.TgZ(3,"ion-row"),g.TgZ(4,"ion-col",6),g.TgZ(5,"p",17),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw(2).goToDetail(n.id)}),g._uU(6),g.qZA(),g.YNc(7,d,2,1,"p",18),g.YNc(8,f,2,1,"p",18),g.qZA(),g.TgZ(9,"ion-col",6),g.TgZ(10,"p",19),g._uU(11),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=n.$implicit;g.xp6(1),g.Q6J("ngIf","new"===t.condition),g.xp6(1),g.Q6J("src",t.image,g.LSH),g.xp6(4),g.Oqu(t.title),g.xp6(1),g.Q6J("ngForOf",t.dishTypes),g.xp6(1),g.Q6J("ngForOf",t.diets),g.xp6(3),g.Oqu(t.creditsText)}}function Z(t,n){if(1&t&&(g.TgZ(0,"ion-col",6),g.TgZ(1,"ion-row"),g.YNc(2,u,12,6,"ion-col",13),g.qZA(),g.qZA()),2&t){const t=g.oxw();g.xp6(2),g.Q6J("ngForOf",t.dataFinish)}}const m=function(){return[]},h=[{path:"",component:(()=>{class t{constructor(t,n){this.storageService=t,this.router=n}ngOnInit(){}ionViewDidEnter(){this.getRecipeData()}getRecipeData(){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.storageService.get("data").then(t=>{this.dataFinish=t,console.log(this.dataFinish)})}catch(t){console.error(t)}})}goToDetail(t){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.router.navigate(["home/detail/",t])}catch(n){console.error(n)}})}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(a.V),g.Y36(s.F0))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-finish"]],decls:11,vars:3,consts:[["mode","ios",1,"ion-no-border"],["mode","ios","color","dark"],["slot","start"],["src","./assets/icons/left.svg","alt","img",1,"back"],["color","light"],["color","dark"],["size","12"],["class","div-add-fav",4,"ngIf"],["size","12",4,"ngIf"],[1,"div-add-fav"],[1,"containt-img"],["src","assets/icons/salad.png","alt","img",1,"img"],[1,"txt-alert"],["size","6",4,"ngFor","ngForOf"],["size","6"],["src","assets/icons/new.png","alt","img","class","img-condition",4,"ngIf"],["alt","img",1,"img-fav",3,"src"],[1,"txt-price",3,"click"],["class","txt-quantity",4,"ngFor","ngForOf"],[1,"title"],["src","assets/icons/new.png","alt","img",1,"img-condition"],[1,"txt-quantity"]],template:function(t,n){1&t&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar",1),g.TgZ(2,"ion-buttons",2),g._UZ(3,"img",3),g._UZ(4,"ion-back-button",4),g.qZA(),g.qZA(),g.qZA(),g.TgZ(5,"ion-content",5),g.TgZ(6,"ion-grid"),g.TgZ(7,"ion-row"),g.TgZ(8,"ion-col",6),g.YNc(9,l,8,0,"div",7),g.YNc(10,Z,3,1,"ion-col",8),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(9),g.Q6J("ngIf",n.dataFinish>=0),g.xp6(1),g.Q6J("ngIf",n.dataFinish!=g.DdM(2,m)))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.W2,c.jY,c.Nd,c.wI,o.O5,o.sg],styles:[".containt-img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.containt-img[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:50%}.img-fav[_ngcontent-%COMP%]{width:100%;border-radius:10px}.img-condition[_ngcontent-%COMP%]{width:50px;position:absolute;right:4px}.title[_ngcontent-%COMP%]{font-weight:700;color:#fff;text-align:left;padding-left:10px;font-size:12px;margin-top:-8px}.txt-quantity[_ngcontent-%COMP%]{font-weight:300}.txt-price[_ngcontent-%COMP%], .txt-quantity[_ngcontent-%COMP%]{text-align:left;padding-left:10px;font-size:16px;margin-top:0;margin-bottom:0}.txt-price[_ngcontent-%COMP%]{font-weight:700}.div-add-fav[_ngcontent-%COMP%]{width:100%;position:absolute;top:-300%;left:50%;transform:translate(-50%,100%)}.txt-alert[_ngcontent-%COMP%]{font-size:25px;font-weight:700;color:#fff;text-align:center}.txt-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px}.back[_ngcontent-%COMP%]{width:22px;position:absolute;right:40px}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),t})();var q=i(2935);let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[o.ez,e.u5,c.Pc,x,q.U]]}),t})()}}]);
(self.webpackChunkvurotron=self.webpackChunkvurotron||[]).push([[6425],{6425:(t,n,e)=>{"use strict";e.r(n),e.d(n,{HomePageModule:()=>k});var o=e(1116),i=e(1462),c=e(6611),s=e(5860),r=e(4762),g=e(8619),l=e(5710);function a(t,n){1&t&&(g.TgZ(0,"p",9),g._uU(1," Doesn't exist a recipe card for this item! "),g.qZA())}function d(t,n){if(1&t&&g._UZ(0,"img",11),2&t){const t=g.oxw(2);g.Q6J("src",t.dataCard.url,g.LSH)}}function p(t,n){if(1&t&&(g.TgZ(0,"ion-col",6),g.YNc(1,d,1,1,"img",10),g.qZA()),2&t){const t=g.oxw();g.xp6(1),g.Q6J("ngIf",t.dataCard)}}let u=(()=>{class t{constructor(t,n){this.apiService=t,this.modalCtrl=n}ngOnInit(){this.getCardRecipes()}getCardRecipes(){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.apiService.getCardRecipes(this.id).subscribe(t=>{t.status?(this.validateDataCard=!0,this.dataCard=t):this.validateDataCard=!1})}catch(t){console.error(t)}})}dismissModal(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(l.s),g.Y36(c.IN))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-modal"]],inputs:{id:"id"},decls:15,vars:2,consts:[["translucent",""],["slot","end"],[3,"click"],["color","light","fullscreen",""],[1,"ion-padding"],[1,"sec-inf"],["size","12"],["class","heading",4,"ngIf"],["size","12",4,"ngIf"],[1,"heading"],["alt","img",3,"src",4,"ngIf"],["alt","img",3,"src"]],template:function(t,n){1&t&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-title"),g._uU(3,"Card recipe detail"),g.qZA(),g.TgZ(4,"ion-buttons",1),g.TgZ(5,"ion-button",2),g.NdJ("click",function(){return n.dismissModal()}),g._uU(6,"Close"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(7,"ion-content",3),g.TgZ(8,"div",4),g.TgZ(9,"section",5),g.TgZ(10,"ion-grid"),g.TgZ(11,"ion-row"),g.TgZ(12,"ion-col",6),g.YNc(13,a,2,0,"p",7),g.qZA(),g.YNc(14,p,2,1,"ion-col",8),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(13),g.Q6J("ngIf",!n.validateDataCard),g.xp6(1),g.Q6J("ngIf",n.validateDataCard))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.YG,c.W2,c.jY,c.Nd,c.wI,o.O5],styles:[".sec-inf[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:center}"]}),t})(),m=(()=>{class t{constructor(t,n,e){this.router=t,this.apiService=n,this.alertController=e}goAboutMe(){this.router.navigateByUrl("/about")}goRandom(){return(0,r.mG)(this,void 0,void 0,function*(){try{this.apiService.getRandomJoke().subscribe(t=>{this.alertShow(t.text)})}catch(t){console.error(t)}})}goTrivia(){return(0,r.mG)(this,void 0,void 0,function*(){try{this.apiService.getRandomTriviaJoke().subscribe(t=>{this.alertShow(t.text)})}catch(t){console.error(t)}})}alertShow(t){return(0,r.mG)(this,void 0,void 0,function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Alert",message:`${t}`,buttons:["OK"]});yield n.present()})}goVideos(){this.router.navigateByUrl("videos")}goExit(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Alert!",message:"\xbfDo you really exit from <strong>RecetApp?</strong>",mode:"ios",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:t=>{}},{text:"Okay",handler:()=>{this.router.navigateByUrl("/splash")}}]});yield t.present()})}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(s.F0),g.Y36(l.s),g.Y36(c.Br))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-menu"]],decls:36,vars:0,consts:[["side","end","menuId","first","contentId","main"],["color","light"],[2,"background","none !important"],["color","light","lines","none",1,"menu-item",3,"click"],["src","./assets/icons/user.svg"],["src","./assets/icons/happy.svg"],["src","./assets/icons/burger.svg"],["src","./assets/icons/play.svg"],["src","./assets/icons/exit.svg"],["color","light",1,"ion-no-border"],[1,"title",2,"color","#000 !important"],["id","main"],["translucent","true",1,"ion-no-border"],["size","3"],["src","./assets/icons/apps.svg",1,"icon-menu"],["size","9"],[1,"rectangule"],["src","./assets/images/user1.png","alt","img"]],template:function(t,n){1&t&&(g.TgZ(0,"ion-menu",0),g.TgZ(1,"ion-content",1),g.TgZ(2,"ion-list",2),g.TgZ(3,"ion-item",3),g.NdJ("click",function(){return n.goAboutMe()}),g._UZ(4,"img",4),g.TgZ(5,"ion-label"),g._uU(6,"About me"),g.qZA(),g.qZA(),g.TgZ(7,"ion-item",3),g.NdJ("click",function(){return n.goRandom()}),g._UZ(8,"img",5),g.TgZ(9,"ion-label"),g._uU(10,"Random food Joke"),g.qZA(),g.qZA(),g.TgZ(11,"ion-item",3),g.NdJ("click",function(){return n.goTrivia()}),g._UZ(12,"img",6),g.TgZ(13,"ion-label"),g._uU(14,"Random food Trivia"),g.qZA(),g.qZA(),g.TgZ(15,"ion-item",3),g.NdJ("click",function(){return n.goVideos()}),g._UZ(16,"img",7),g.TgZ(17,"ion-label"),g._uU(18,"Videos"),g.qZA(),g.qZA(),g.TgZ(19,"ion-item",3),g.NdJ("click",function(){return n.goExit()}),g._UZ(20,"img",8),g.TgZ(21,"ion-label"),g._uU(22,"Exit"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(23,"ion-footer",9),g.TgZ(24,"p",10),g._uU(25," Design by: @lirrumscode "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(26,"ion-router-outlet",11),g.TgZ(27,"ion-header",12),g.TgZ(28,"ion-toolbar",1),g.TgZ(29,"ion-row"),g.TgZ(30,"ion-col",13),g.TgZ(31,"ion-menu-toggle"),g._UZ(32,"img",14),g.qZA(),g.qZA(),g.TgZ(33,"ion-col",15),g.TgZ(34,"div",16),g._UZ(35,"img",17),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA())},directives:[c.z0,c.W2,c.q_,c.Ie,c.Q$,c.fr,c.jP,c.Gu,c.sr,c.Nd,c.wI,c.zc],styles:["@media only screen and (min-width:320px) and (max-width:812px){ion-menu-button[_ngcontent-%COMP%]{--color:#000}.icon-menu[_ngcontent-%COMP%]{width:30px;margin-left:10px;margin-top:10px}.rectangule[_ngcontent-%COMP%]{float:right;background:#fde268;width:40px;height:40px;border-radius:10px;margin-right:18px}.rectangule[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto;padding-top:4px;width:30px}.title-comerce[_ngcontent-%COMP%]{font-family:Poppins;padding-left:25px;font-size:20px}.title-h1[_ngcontent-%COMP%]{padding:5% 30px 2%}.img-exterior[_ngcontent-%COMP%]{width:100%;padding-right:1px;padding-left:1px}.col-form[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.alert[_ngcontent-%COMP%]{width:95%;padding-left:20px;padding-right:20px}form[_ngcontent-%COMP%], ion-button[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}ion-button[_ngcontent-%COMP%]{height:50px;box-shadow:none}.logo[_ngcontent-%COMP%]{width:20%;margin-left:2%}.img-logo[_ngcontent-%COMP%]{width:70%;display:block;margin:auto;padding-top:5%}.menu-item[_ngcontent-%COMP%]{font-family:Poppins;color:#000;font-weight:700}.menu-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;margin-right:10px}.menu-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#000;font-family:Poppins}ion-list[_ngcontent-%COMP%]{margin-top:5%}.menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:20px;color:#000}ion-footer[_ngcontent-%COMP%]{position:fixed;bottom:0}.title[_ngcontent-%COMP%]{font-family:Poppins;font-size:15px;padding:7px;color:#000;background:linear-gradient(180deg,#f7fcff,#f7fcff);margin-bottom:0}.h6[_ngcontent-%COMP%]{margin-top:0}.h3[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%]{color:#000;text-align:center;font-family:Poppins;font-weight:700}}"]}),t})();function Z(t,n){if(1&t&&g._UZ(0,"img",19),2&t){const t=g.oxw().$implicit;g.Q6J("src",t.image,g.LSH)}}function f(t,n){1&t&&g._UZ(0,"img",20)}function h(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"ion-slide"),g.TgZ(1,"ion-row"),g.TgZ(2,"ion-col",15),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw().goModal(n.id)}),g.YNc(3,Z,1,1,"img",16),g.YNc(4,f,1,0,"img",17),g.qZA(),g.TgZ(5,"ion-col",2),g.TgZ(6,"h3",18),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw().goToDetail(n)}),g._uU(7),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=n.$implicit;g.xp6(3),g.Q6J("ngIf",t.image),g.xp6(1),g.Q6J("ngIf",!t.image),g.xp6(3),g.hij(" ",t.title," ")}}function x(t,n){if(1&t&&g._UZ(0,"img",19),2&t){const t=g.oxw().$implicit;g.Q6J("src",t.image,g.LSH)}}function C(t,n){1&t&&g._UZ(0,"img",20)}function A(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"ion-slide"),g.TgZ(1,"ion-row"),g.TgZ(2,"ion-col",15),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw().goModal(n.id)}),g.YNc(3,x,1,1,"img",16),g.YNc(4,C,1,0,"img",17),g.qZA(),g.TgZ(5,"ion-col",2),g.TgZ(6,"h3",18),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw().goToDetail(n)}),g._uU(7),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=n.$implicit;g.xp6(3),g.Q6J("ngIf",t.image),g.xp6(1),g.Q6J("ngIf",!t.image),g.xp6(3),g.hij(" ",t.title," ")}}const _=function(t){return{background:t}},M=function(t){return{color:t}};function O(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"ion-slide"),g.TgZ(1,"ion-row",21),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw().goMenuItems(n)}),g.TgZ(2,"ion-col",2),g._UZ(3,"img",19),g.qZA(),g.TgZ(4,"ion-col",2),g.TgZ(5,"h3",22),g._uU(6),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=n.$implicit;g.xp6(1),g.Q6J("ngStyle",g.VKq(4,_,t.colorOne)),g.xp6(2),g.Q6J("src",t.url,g.LSH),g.xp6(2),g.Q6J("ngStyle",g.VKq(6,M,t.color)),g.xp6(1),g.hij(" ",t.name," ")}}const T=[{path:"",component:(()=>{class t{constructor(t,n,e){this.apiService=t,this.router=n,this.modalCtrl=e}ngOnInit(){this.getRandomRecipes(),this.getAllRecipes(),this.setDefaultValues()}setDefaultValues(){this.slideOpts={initialSlide:0,slidesPerView:2,spaceBetween:10,speed:1e3,autoplay:!0,zoom:!1},this.slideOptsOne={initialSlide:0,slidesPerView:4,spaceBetween:10,speed:1e3,autoplay:!1,zoom:!1},this.objDataMenusItems=[{url:"assets/images/food2.png",slug:"curry",name:"Curry",color:"#FF5055",colorOne:"#FFDBDC"},{url:"assets/images/food3.png",slug:"snacks",name:"Snacks",color:"#FF9B15",colorOne:"#FFE2BB"},{url:"assets/images/food4.png",slug:"drinks",name:"Drinks",color:"#FF3F3F",colorOne:"#FFBBBB"},{url:"assets/images/food5.png",slug:"dessert",name:"Dessert",color:"#0CA300",colorOne:"#C0FFBB"}]}getRandomRecipes(){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.apiService.getRandomRecipes().subscribe(t=>{this.dataRandomRecipes=t.recipes})}catch(t){console.error(t)}})}getAllRecipes(){return(0,r.mG)(this,void 0,void 0,function*(){try{yield this.apiService.getAllRecipes().subscribe(t=>{this.dataAllRecipes=t.results})}catch(t){console.error(t)}})}goModal(t){return(0,r.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:u,cssClass:"my-custom-class",componentProps:{id:t}});return yield n.present()})}goSeeMore(){this.router.navigateByUrl("/home/all")}goToDetail(t){this.router.navigate(["home/detail",t.id])}goMenuItems(t){this.router.navigate(["home/menu",t.slug])}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(l.s),g.Y36(s.F0),g.Y36(c.IN))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-home"]],decls:42,vars:6,consts:[["color","light"],[1,"ion-padding"],["size","12"],[1,"sec-inf"],[1,"title"],[1,"text"],[1,"sec-random"],[1,"text-one"],["pager","false",3,"options"],[4,"ngFor","ngForOf"],[1,"sec-recipes"],["size","8"],["size","4",3,"click"],[1,"text-two"],[1,"sec-menu"],["size","12",3,"click"],["alt","img","class","sli-image",3,"src",4,"ngIf"],["src","https://spoonacular.com/recipeImages/whole-chicken.jpg","alt","img","class","sli-image",4,"ngIf"],[1,"title",3,"click"],["alt","img",1,"sli-image",3,"src"],["src","https://spoonacular.com/recipeImages/whole-chicken.jpg","alt","img",1,"sli-image"],[2,"border-radius","10px",3,"ngStyle","click"],[1,"title",3,"ngStyle"]],template:function(t,n){1&t&&(g._UZ(0,"app-menu"),g.TgZ(1,"ion-content",0),g.TgZ(2,"div",1),g.TgZ(3,"ion-grid"),g.TgZ(4,"ion-row"),g.TgZ(5,"ion-col",2),g.TgZ(6,"section",3),g.TgZ(7,"h3",4),g._uU(8,"Welcome to "),g.TgZ(9,"span"),g._uU(10,"RecetsApp!"),g.qZA(),g.qZA(),g.TgZ(11,"p",5),g._uU(12,"How you doin?"),g.qZA(),g.qZA(),g.TgZ(13,"section",6),g.TgZ(14,"ion-row"),g.TgZ(15,"ion-col",2),g.TgZ(16,"h4",7),g._uU(17,"Random recipies"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(18,"ion-row"),g.TgZ(19,"ion-col",2),g.TgZ(20,"ion-slides",8),g.YNc(21,h,8,3,"ion-slide",9),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(22,"section",10),g.TgZ(23,"ion-row"),g.TgZ(24,"ion-col",11),g.TgZ(25,"h4",7),g._uU(26,"All recipies"),g.qZA(),g.qZA(),g.TgZ(27,"ion-col",12),g.NdJ("click",function(){return n.goSeeMore()}),g.TgZ(28,"h4",13),g._uU(29,"See more"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(30,"ion-row"),g.TgZ(31,"ion-col",2),g.TgZ(32,"ion-slides",8),g.YNc(33,A,8,3,"ion-slide",9),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(34,"section",14),g.TgZ(35,"ion-row"),g.TgZ(36,"ion-col",2),g.TgZ(37,"h4",7),g._uU(38,"All Menus"),g.qZA(),g.qZA(),g.TgZ(39,"ion-col",2),g.TgZ(40,"ion-slides",8),g.YNc(41,O,7,8,"ion-slide",9),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(20),g.Q6J("options",n.slideOpts),g.xp6(1),g.Q6J("ngForOf",n.dataRandomRecipes),g.xp6(11),g.Q6J("options",n.slideOpts),g.xp6(1),g.Q6J("ngForOf",n.dataAllRecipes),g.xp6(7),g.Q6J("options",n.slideOptsOne),g.xp6(1),g.Q6J("ngForOf",n.objDataMenusItems))},directives:[m,c.W2,c.jY,c.Nd,c.wI,c.Hr,o.sg,c.A$,o.O5,o.PC],styles:['@charset "UTF-8";ion-menu-button[_ngcontent-%COMP%]{--color:#000}.rectangule[_ngcontent-%COMP%]{float:right;background:#fde268;width:40px;height:40px;border-radius:10px;margin-right:18px}.rectangule[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto;padding-top:4px;width:30px}.sec-inf[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#000;font-size:23px;font-weight:300;text-align:left;margin-top:0;margin-bottom:0}.sec-inf[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-weight:700}.sec-inf[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"\ud83e\udd1d"}.sec-inf[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:18px;margin-top:0;color:#000;font-weight:300;text-align:left}.sec-random[_ngcontent-%COMP%]   .text-one[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:left;font-size:14px}.sec-random[_ngcontent-%COMP%]   .text-two[_ngcontent-%COMP%]{font-weight:500;color:#ffbfa8;text-align:right;font-size:13px}.sec-random[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:11px;color:#000;margin-top:0;margin-bottom:0}.sec-random[_ngcontent-%COMP%]   .sli-image[_ngcontent-%COMP%]{border-radius:10px}.sec-recipes[_ngcontent-%COMP%]   .text-one[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:left;font-size:14px}.sec-recipes[_ngcontent-%COMP%]   .text-two[_ngcontent-%COMP%]{font-weight:500;color:#ffbfa8;text-align:right;font-size:13px}.sec-recipes[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:11px;color:#000;margin-top:0;margin-bottom:0}.sec-recipes[_ngcontent-%COMP%]   .sli-image[_ngcontent-%COMP%]{border-radius:10px}.sec-menu[_ngcontent-%COMP%]   .text-one[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:left;font-size:14px}.sec-menu[_ngcontent-%COMP%]   .text-two[_ngcontent-%COMP%]{font-weight:500;color:#ffbfa8;text-align:right;font-size:13px}.sec-menu[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:13px;color:#000;margin-top:-5px;margin-bottom:0}.sec-menu[_ngcontent-%COMP%]   .sli-image[_ngcontent-%COMP%]{width:100%;height:55px}']}),t})()},{path:"detail/:id",loadChildren:()=>e.e(5164).then(e.bind(e,5164)).then(t=>t.DetailPageModule)},{path:"all",loadChildren:()=>Promise.all([e.e(8592),e.e(8037)]).then(e.bind(e,8037)).then(t=>t.AllPageModule)},{path:"menu/:id",loadChildren:()=>e.e(5903).then(e.bind(e,5903)).then(t=>t.MenuPageModule)}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[o.ez,c.Pc]]}),t})();var w=e(3398);const b=[{path:"",component:u}];let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[s.Bz.forChild(b)],s.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[o.ez,i.u5,c.Pc,v]]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[o.ez,i.u5,c.Pc,P,q,w.d,y]]}),t})()}}]);
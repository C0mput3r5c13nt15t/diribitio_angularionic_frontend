!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"ct+p":function(t,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",function(){return x});var c=i("ofXK"),r=i("3Pt+"),b=i("tyNb"),a=i("TEn/"),l=i("fXoL"),s=i("r4Kj"),u=i("OeS+");function d(e,n){if(1&e&&(l.Mb(0,"ion-card-content"),l.Mb(1,"ion-label",18),l.pc(2),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(2),l.rc(" ",t.welcome.text," ")}}function h(e,n){if(1&e&&(l.Mb(0,"ion-item",19),l.Kb(1,"ion-icon",20),l.Mb(2,"ion-label"),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.rc("Registrierung und Erstellung der ",t.projectsNoun,"")}}function g(e,n){if(1&e&&(l.Mb(0,"ion-item",8),l.Kb(1,"ion-icon",21),l.Mb(2,"ion-label",18),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.rc("Registrierung und Erstellung der ",t.projectsNoun,"")}}function M(e,n){if(1&e&&(l.Mb(0,"ion-item",19),l.Kb(1,"ion-icon",22),l.Mb(2,"ion-label"),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.rc("Kontrolle und Freigabe der ",t.projectsNoun,"")}}function m(e,n){if(1&e&&(l.Mb(0,"ion-item",8),l.Kb(1,"ion-icon",23),l.Mb(2,"ion-label",18),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.rc("Kontrolle und Freigabe der ",t.projectsNoun,"")}}function p(e,n){if(1&e&&(l.Mb(0,"ion-item",19),l.Kb(1,"ion-icon",24),l.Mb(2,"ion-label"),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.rc("Anmeldung f\xfcr die ",t.projectsNoun,"")}}function f(e,n){if(1&e&&(l.Mb(0,"ion-item",8),l.Kb(1,"ion-icon",25),l.Mb(2,"ion-label",18),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.rc("Anmeldung f\xfcr die ",t.projectsNoun,"")}}function y(e,n){1&e&&(l.Mb(0,"ion-item",19),l.Kb(1,"ion-icon",26),l.Mb(2,"ion-label"),l.pc(3,"Sortierung durch den Algorithmus"),l.Lb(),l.Lb())}function L(e,n){1&e&&(l.Mb(0,"ion-item",8),l.Kb(1,"ion-icon",27),l.Mb(2,"ion-label",18),l.pc(3,"Sortierung durch den Algorithmus"),l.Lb(),l.Lb())}function D(e,n){1&e&&(l.Mb(0,"ion-item",19),l.Kb(1,"ion-icon",28),l.Mb(2,"ion-label"),l.pc(3,"Tauschphase"),l.Lb(),l.Lb())}function v(e,n){1&e&&(l.Mb(0,"ion-item",8),l.Kb(1,"ion-icon",29),l.Mb(2,"ion-label",18),l.pc(3,"Tauschphase"),l.Lb(),l.Lb())}function w(e,n){if(1&e&&(l.Mb(0,"ion-item",19),l.Kb(1,"ion-icon",30),l.Mb(2,"ion-label"),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.qc(t.eventNoun)}}function j(e,n){if(1&e&&(l.Mb(0,"ion-item",8),l.Kb(1,"ion-icon",31),l.Mb(2,"ion-label",18),l.pc(3),l.Lb(),l.Lb()),2&e){var t=l.Wb();l.yb(3),l.qc(t.eventNoun)}}function k(e,n){if(1&e&&(l.Mb(0,"ion-card-content"),l.Mb(1,"ion-label",18),l.pc(2),l.Lb(),l.Lb()),2&e){var t=l.Wb().$implicit;l.yb(2),l.rc(" ",t.text," ")}}function S(e,n){if(1&e&&(l.Mb(0,"ion-card",4),l.Mb(1,"ion-card-header"),l.Mb(2,"ion-card-title"),l.pc(3),l.Lb(),l.Lb(),l.oc(4,k,3,1,"ion-card-content",7),l.Lb()),2&e){var t=n.$implicit;l.yb(3),l.qc(t.title),l.yb(1),l.bc("ngIf",t.text)}}var Y,N,J=function(){return["../../Help"]},O=((N=function(){function t(n,o){e(this,t),this.config=n,this.scheduleService=o,this.subscriptions=[],this.schedule={id:1,begin:Object(c.n)(new Date,"yyyy-MM-dd","en"),control:Object(c.n)(new Date,"yyyy-MM-dd","en"),registration:Object(c.n)(new Date,"yyyy-MM-dd","en"),sort_students:Object(c.n)(new Date,"yyyy-MM-dd","en"),exchange:Object(c.n)(new Date,"yyyy-MM-dd","en"),projects:Object(c.n)(new Date,"yyyy-MM-dd","en"),end:Object(c.n)(new Date,"yyyy-MM-dd","en")},this.welcome=this.config.home.welcome,this.articles=this.config.home.articles,this.projectsNoun=this.config.app_config.projects_noun,this.eventNoun=this.config.app_config.event_name}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.currentDate=this.currentDate=Object(c.n)(new Date,"yyyy-MM-dd","en"),this.getSchedule(),this.subscriptions.push(this.scheduleService.update.subscribe(function(){return e.getSchedule()}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})}},{key:"getSchedule",value:function(){var e=this;this.scheduleService.getSchedule().subscribe(function(n){e.schedule=n.data})}}])&&n(o.prototype,i),r&&n(o,r),t}()).\u0275fac=function(e){return new(e||N)(l.Jb(s.a),l.Jb(u.a))},N.\u0275cmp=l.Db({type:N,selectors:[["app-home"]],decls:54,vars:24,consts:[["color","menu"],["color","buttons","slot","end",3,"routerLink"],["name","help-circle"],["color","background"],["color","background",1,"content"],["src","../../assets/logo/Logo_light.svg",1,"logo_light"],["src","../../assets/logo/Logo_dark.svg",1,"logo_dark"],[4,"ngIf"],["color","items","lines","none"],["displayFormat","DD.MM.YYYY","placeholder","Bitte ein Datum w\xe4hlen","readonly","","name","Beginn","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez",3,"ngModel","ngModelChange"],["color","buttons","lines","none",4,"ngIf"],["color","items","lines","none",4,"ngIf"],["displayFormat","DD.MM.YYYY","placeholder","Bitte ein Datum w\xe4hlen","readonly","","name","Anmeldung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez",3,"ngModel","ngModelChange"],["displayFormat","DD.MM.YYYY","placeholder","Bitte ein Datum w\xe4hlen","readonly","","name","Sortierung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez",3,"ngModel","ngModelChange"],["displayFormat","DD.MM.YYYY","placeholder","Bitte ein Datum w\xe4hlen","readonly","","name","Tausch","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez",3,"ngModel","ngModelChange"],["displayFormat","DD.MM.YYYY","placeholder","Bitte ein Datum w\xe4hlen","readonly","","name","Projekte","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez",3,"ngModel","ngModelChange"],["displayFormat","DD.MM.YYYY","placeholder","Bitte ein Datum w\xe4hlen","readonly","","name","Ende","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez",3,"ngModel","ngModelChange"],["color","background","class","content",4,"ngFor","ngForOf"],["color","text"],["color","buttons","lines","none"],["slot","start","name","create"],["color","text","slot","start","name","create"],["slot","start","name","shield-checkmark"],["color","text","slot","start","name","shield-checkmark"],["slot","start","name","log-in"],["color","text","slot","start","name","log-in"],["slot","start","name","funnel"],["color","text","slot","start","name","funnel"],["slot","start","name","swap-horizontal"],["color","text","slot","start","name","swap-horizontal"],["slot","start","name","flag"],["color","text","slot","start","name","flag"]],template:function(e,n){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-title"),l.pc(3,"Startseite"),l.Lb(),l.Mb(4,"ion-button",1),l.Kb(5,"ion-icon",2),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",3),l.Mb(7,"ion-card",4),l.Kb(8,"img",5),l.Kb(9,"img",6),l.Mb(10,"ion-card-header"),l.Mb(11,"ion-card-title"),l.pc(12),l.Lb(),l.Lb(),l.oc(13,d,3,1,"ion-card-content",7),l.Lb(),l.Mb(14,"ion-card",4),l.Mb(15,"ion-card-header"),l.Mb(16,"ion-card-title"),l.pc(17,"Zeitplan"),l.Lb(),l.Lb(),l.Mb(18,"ion-card-content"),l.Mb(19,"ion-list"),l.Mb(20,"ion-item",8),l.pc(21," ab "),l.Mb(22,"ion-datetime",9),l.Ub("ngModelChange",function(e){return n.schedule.begin=e}),l.Lb(),l.Lb(),l.oc(23,h,4,1,"ion-item",10),l.oc(24,g,4,1,"ion-item",11),l.Mb(25,"ion-item",8),l.pc(26," bis "),l.Mb(27,"ion-datetime",12),l.Ub("ngModelChange",function(e){return n.schedule.control=e}),l.Lb(),l.Lb(),l.oc(28,M,4,1,"ion-item",10),l.oc(29,m,4,1,"ion-item",11),l.Mb(30,"ion-item",8),l.pc(31," bis "),l.Mb(32,"ion-datetime",12),l.Ub("ngModelChange",function(e){return n.schedule.registration=e}),l.Lb(),l.Lb(),l.oc(33,p,4,1,"ion-item",10),l.oc(34,f,4,1,"ion-item",11),l.Mb(35,"ion-item",8),l.pc(36," bis "),l.Mb(37,"ion-datetime",13),l.Ub("ngModelChange",function(e){return n.schedule.sort_students=e}),l.Lb(),l.Lb(),l.oc(38,y,4,0,"ion-item",10),l.oc(39,L,4,0,"ion-item",11),l.Mb(40,"ion-item",8),l.pc(41," bis "),l.Mb(42,"ion-datetime",14),l.Ub("ngModelChange",function(e){return n.schedule.exchange=e}),l.Lb(),l.Lb(),l.oc(43,D,4,0,"ion-item",10),l.oc(44,v,4,0,"ion-item",11),l.Mb(45,"ion-item",8),l.pc(46," bis "),l.Mb(47,"ion-datetime",15),l.Ub("ngModelChange",function(e){return n.schedule.projects=e}),l.Lb(),l.Lb(),l.oc(48,w,4,1,"ion-item",10),l.oc(49,j,4,1,"ion-item",11),l.Mb(50,"ion-item",8),l.pc(51," bis"),l.Mb(52,"ion-datetime",16),l.Ub("ngModelChange",function(e){return n.schedule.end=e}),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.oc(53,S,5,2,"ion-card",17),l.Lb()),2&e&&(l.yb(4),l.bc("routerLink",l.fc(23,J)),l.yb(8),l.qc(n.welcome.title),l.yb(1),l.bc("ngIf",n.welcome.text),l.yb(9),l.bc("ngModel",n.schedule.begin),l.yb(1),l.bc("ngIf",n.currentDate>n.schedule.begin&&n.currentDate<=n.schedule.control),l.yb(1),l.bc("ngIf",n.currentDate<=n.schedule.begin||n.currentDate>n.schedule.control),l.yb(3),l.bc("ngModel",n.schedule.control),l.yb(1),l.bc("ngIf",n.currentDate>n.schedule.control&&n.currentDate<=n.schedule.registration),l.yb(1),l.bc("ngIf",n.currentDate<=n.schedule.control||n.currentDate>n.schedule.registration),l.yb(3),l.bc("ngModel",n.schedule.registration),l.yb(1),l.bc("ngIf",n.currentDate>n.schedule.registration&&n.currentDate<=n.schedule.sort_students),l.yb(1),l.bc("ngIf",n.currentDate<=n.schedule.registration||n.currentDate>n.schedule.sort_students),l.yb(3),l.bc("ngModel",n.schedule.sort_students),l.yb(1),l.bc("ngIf",n.currentDate>n.schedule.sort_students&&n.currentDate<=n.schedule.exchange),l.yb(1),l.bc("ngIf",n.currentDate<=n.schedule.sort_students||n.currentDate>n.schedule.exchange),l.yb(3),l.bc("ngModel",n.schedule.exchange),l.yb(1),l.bc("ngIf",n.currentDate>n.schedule.exchange&&n.currentDate<=n.schedule.projects),l.yb(1),l.bc("ngIf",n.currentDate<=n.schedule.exchange||n.currentDate>n.schedule.projects),l.yb(3),l.bc("ngModel",n.schedule.projects),l.yb(1),l.bc("ngIf",n.currentDate>n.schedule.projects&&n.currentDate<=n.schedule.end),l.yb(1),l.bc("ngIf",n.currentDate<=n.schedule.projects||n.currentDate>n.schedule.end),l.yb(3),l.bc("ngModel",n.schedule.end),l.yb(1),l.bc("ngForOf",n.articles))},directives:[a.t,a.R,a.P,a.h,a.Y,b.h,a.u,a.p,a.j,a.l,a.n,c.j,a.k,a.B,a.x,a.q,a.Z,r.f,r.i,c.i,a.A],styles:["img[_ngcontent-%COMP%]{width:auto;margin-left:auto;margin-right:auto;display:block;padding:10px}"]}),N),x=((Y=function n(){e(this,n)}).\u0275mod=l.Hb({type:Y}),Y.\u0275inj=l.Gb({factory:function(e){return new(e||Y)},imports:[[c.b,r.a,a.S,b.k.forChild([{path:"",component:O}])]]}),Y)}}])}();
//# sourceMappingURL=home-home-module-es5.2685f5bb494589205afa.js.map
!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{qLtw:function(t,o,i){"use strict";i.r(o),i.d(o,"AdminSchedulePageModule",function(){return N});var c=i("ofXK"),r=i("3Pt+"),a=i("tyNb"),b=i("TEn/"),u=i("fXoL"),l=i("OeS+"),s=i("3LUQ"),d=i("r4Kj");function h(e,n){if(1&e&&(u.Mb(0,"ion-card-content"),u.Mb(1,"ion-label",20),u.pc(2),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(2),u.rc(" ",t.text," ")}}function g(e,n){if(1&e&&(u.Mb(0,"ion-item",21),u.Kb(1,"ion-icon",22),u.Mb(2,"ion-label"),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.rc("Registrierung und Erstellung der ",t.projectsNoun,"")}}function m(e,n){if(1&e&&(u.Mb(0,"ion-item",8),u.Kb(1,"ion-icon",23),u.Mb(2,"ion-label",20),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.rc("Registrierung und Erstellung der ",t.projectsNoun,"")}}function p(e,n){if(1&e&&(u.Mb(0,"ion-item",21),u.Kb(1,"ion-icon",24),u.Mb(2,"ion-label"),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.rc("Kontrolle und Freigabe der ",t.projectsNoun,"")}}function f(e,n){if(1&e&&(u.Mb(0,"ion-item",8),u.Kb(1,"ion-icon",25),u.Mb(2,"ion-label",20),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.rc("Kontrolle und Freigabe der ",t.projectsNoun,"")}}function M(e,n){if(1&e&&(u.Mb(0,"ion-item",21),u.Kb(1,"ion-icon",26),u.Mb(2,"ion-label"),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.rc("Anmeldung f\xfcr die ",t.projectsNoun,"")}}function y(e,n){if(1&e&&(u.Mb(0,"ion-item",8),u.Kb(1,"ion-icon",27),u.Mb(2,"ion-label",20),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.rc("Anmeldung f\xfcr die ",t.projectsNoun,"")}}function L(e,n){1&e&&(u.Mb(0,"ion-item",21),u.Kb(1,"ion-icon",28),u.Mb(2,"ion-label"),u.pc(3,"Sortierung durch den Algorithmus"),u.Lb(),u.Lb())}function v(e,n){1&e&&(u.Mb(0,"ion-item",8),u.Kb(1,"ion-icon",29),u.Mb(2,"ion-label",20),u.pc(3,"Sortierung durch den Algorithmus"),u.Lb(),u.Lb())}function D(e,n){1&e&&(u.Mb(0,"ion-item",21),u.Kb(1,"ion-icon",30),u.Mb(2,"ion-label"),u.pc(3,"Tauschphase"),u.Lb(),u.Lb())}function k(e,n){1&e&&(u.Mb(0,"ion-item",8),u.Kb(1,"ion-icon",31),u.Mb(2,"ion-label",20),u.pc(3,"Tauschphase"),u.Lb(),u.Lb())}function S(e,n){if(1&e&&(u.Mb(0,"ion-item",21),u.Kb(1,"ion-icon",32),u.Mb(2,"ion-label"),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.qc(t.eventName)}}function x(e,n){if(1&e&&(u.Mb(0,"ion-item",8),u.Kb(1,"ion-icon",33),u.Mb(2,"ion-label",20),u.pc(3),u.Lb(),u.Lb()),2&e){var t=u.Wb();u.yb(3),u.qc(t.eventName)}}var A,w,J=[{path:"",component:(A=function(){function t(n,o,i,c,r){e(this,t),this.activatedRoute=n,this.scheduleService=o,this.router=i,this.alert=c,this.config=r,this.subscriptions=[],this.schedule={id:1,begin:new Date,control:new Date,registration:new Date,sort_students:new Date,exchange:new Date,projects:new Date,end:new Date},this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.text=this.config.get_content("admin-schedule"),this.currentDate=Object(c.n)(new Date,"yyyy-MM-dd","en"),this.activatedRoute.paramMap.subscribe(function(n){e.adminUrl=n.get("AdminName")}),this.getSchedule(),this.subscriptions.push(this.scheduleService.update.subscribe(function(){return e.getSchedule()}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})}},{key:"getSchedule",value:function(){var e=this;this.scheduleService.getSchedule().subscribe(function(n){e.schedule=n.data})}},{key:"manageSchedule",value:function(){var e=this;this.scheduleService.putSchedule(this.schedule).subscribe(function(n){e.alert.alert(n.message),e.scheduleService.update.emit(),e.router.navigate([e.eventName+"/Admin/"+e.adminUrl])},function(n){e.alert.error("Aktualisierung des Zeitplans fehlgeschlagen!",n.error)})}}])&&n(o.prototype,i),r&&n(o,r),t}(),A.\u0275fac=function(e){return new(e||A)(u.Jb(a.a),u.Jb(l.a),u.Jb(a.g),u.Jb(s.a),u.Jb(d.a))},A.\u0275cmp=u.Db({type:A,selectors:[["app-admin-schedule"]],decls:52,vars:23,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["name","ParticipantForm",3,"ngSubmit"],["form","ngForm"],["color","background",1,"content"],[4,"ngIf"],["color","items","lines","none"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Beginn","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["color","buttons","lines","none",4,"ngIf"],["color","items","lines","none",4,"ngIf"],["placeholder","Bitte ein Datum w\xe4hlen","name","Kontrolle","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Anmeldung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Sortierung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Tausch","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Projekte","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Ende","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc","cancelText","Abbrechen","doneText","Ok",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"disabled"],["color","text"],["color","buttons","lines","none"],["slot","start","name","create"],["color","text","slot","start","name","create"],["slot","start","name","shield-checkmark"],["color","text","slot","start","name","shield-checkmark"],["slot","start","name","log-in"],["color","text","slot","start","name","log-in"],["slot","start","name","funnel"],["color","text","slot","start","name","funnel"],["slot","start","name","swap-horizontal"],["color","text","slot","start","name","swap-horizontal"],["slot","start","name","flag"],["color","text","slot","start","name","flag"]],template:function(e,n){if(1&e&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar",0),u.Mb(2,"ion-button",1),u.Kb(3,"ion-back-button",2),u.Lb(),u.Mb(4,"ion-title"),u.pc(5,"Zeitplan verwalten"),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content",3),u.Mb(7,"form",4,5),u.Ub("ngSubmit",function(){return n.manageSchedule()}),u.Mb(9,"ion-card",6),u.Mb(10,"ion-card-header"),u.Mb(11,"ion-card-title"),u.pc(12,"Zeitplan"),u.Lb(),u.Lb(),u.oc(13,h,3,1,"ion-card-content",7),u.Mb(14,"ion-card-content"),u.Mb(15,"ion-list"),u.Mb(16,"ion-item",8),u.pc(17," ab "),u.Mb(18,"ion-datetime",9),u.Ub("ngModelChange",function(e){return n.schedule.begin=e}),u.Lb(),u.Lb(),u.oc(19,g,4,1,"ion-item",10),u.oc(20,m,4,1,"ion-item",11),u.Mb(21,"ion-item",8),u.pc(22," bis "),u.Mb(23,"ion-datetime",12),u.Ub("ngModelChange",function(e){return n.schedule.control=e}),u.Lb(),u.Lb(),u.oc(24,p,4,1,"ion-item",10),u.oc(25,f,4,1,"ion-item",11),u.Mb(26,"ion-item",8),u.pc(27," bis "),u.Mb(28,"ion-datetime",13),u.Ub("ngModelChange",function(e){return n.schedule.registration=e}),u.Lb(),u.Lb(),u.oc(29,M,4,1,"ion-item",10),u.oc(30,y,4,1,"ion-item",11),u.Mb(31,"ion-item",8),u.pc(32," bis "),u.Mb(33,"ion-datetime",14),u.Ub("ngModelChange",function(e){return n.schedule.sort_students=e}),u.Lb(),u.Lb(),u.oc(34,L,4,0,"ion-item",10),u.oc(35,v,4,0,"ion-item",11),u.Mb(36,"ion-item",8),u.pc(37," bis "),u.Mb(38,"ion-datetime",15),u.Ub("ngModelChange",function(e){return n.schedule.exchange=e}),u.Lb(),u.Lb(),u.oc(39,D,4,0,"ion-item",10),u.oc(40,k,4,0,"ion-item",11),u.Mb(41,"ion-item",8),u.pc(42," bis "),u.Mb(43,"ion-datetime",16),u.Ub("ngModelChange",function(e){return n.schedule.projects=e}),u.Lb(),u.Lb(),u.oc(44,S,4,1,"ion-item",10),u.oc(45,x,4,1,"ion-item",11),u.Mb(46,"ion-item",8),u.pc(47," bis"),u.Mb(48,"ion-datetime",17),u.Ub("ngModelChange",function(e){return n.schedule.end=e}),u.Lb(),u.Lb(),u.Lb(),u.Mb(49,"div",18),u.Mb(50,"ion-button",19),u.pc(51,"Zeitplan best\xe4tigen"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&e){var t=u.jc(8);u.yb(3),u.dc("defaultHref","",n.eventName,"/Admin/",n.adminUrl,""),u.yb(10),u.bc("ngIf",n.text),u.yb(5),u.bc("ngModel",n.schedule.begin),u.yb(1),u.bc("ngIf",n.currentDate>n.schedule.begin&&n.currentDate<=n.schedule.control),u.yb(1),u.bc("ngIf",n.currentDate<=n.schedule.begin||n.currentDate>n.schedule.control),u.yb(3),u.bc("ngModel",n.schedule.control),u.yb(1),u.bc("ngIf",n.currentDate>n.schedule.control&&n.currentDate<=n.schedule.registration),u.yb(1),u.bc("ngIf",n.currentDate<=n.schedule.control||n.currentDate>n.schedule.registration),u.yb(3),u.bc("ngModel",n.schedule.registration),u.yb(1),u.bc("ngIf",n.currentDate>n.schedule.registration&&n.currentDate<=n.schedule.sort_students),u.yb(1),u.bc("ngIf",n.currentDate<=n.schedule.registration||n.currentDate>n.schedule.sort_students),u.yb(3),u.bc("ngModel",n.schedule.sort_students),u.yb(1),u.bc("ngIf",n.currentDate>n.schedule.sort_students&&n.currentDate<=n.schedule.exchange),u.yb(1),u.bc("ngIf",n.currentDate<=n.schedule.sort_students||n.currentDate>n.schedule.exchange),u.yb(3),u.bc("ngModel",n.schedule.exchange),u.yb(1),u.bc("ngIf",n.currentDate>n.schedule.exchange&&n.currentDate<=n.schedule.projects),u.yb(1),u.bc("ngIf",n.currentDate<=n.schedule.exchange||n.currentDate>n.schedule.projects),u.yb(3),u.bc("ngModel",n.schedule.projects),u.yb(1),u.bc("ngIf",n.currentDate>n.schedule.projects&&n.currentDate<=n.schedule.end),u.yb(1),u.bc("ngIf",n.currentDate<=n.schedule.projects||n.currentDate>n.schedule.end),u.yb(3),u.bc("ngModel",n.schedule.end),u.yb(2),u.bc("disabled",t.invalid)}},directives:[b.t,b.R,b.h,b.e,b.f,b.P,b.p,r.k,r.g,r.h,b.j,b.l,b.n,c.j,b.k,b.B,b.x,b.q,b.Z,r.j,r.f,r.i,b.A,b.u],styles:[""]}),A)}],N=((w=function n(){e(this,n)}).\u0275mod=u.Hb({type:w}),w.\u0275inj=u.Gb({factory:function(e){return new(e||w)},imports:[[c.b,r.a,b.S,a.k.forChild(J)]]}),w)}}])}();
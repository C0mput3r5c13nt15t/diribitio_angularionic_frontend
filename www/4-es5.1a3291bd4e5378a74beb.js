!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4,30,31,40,41],{"9pHg":function(t,i,o){"use strict";o.d(i,"a",(function(){return u}));var r=o("fXoL"),a=o("tk/3"),c=o("18Le"),s=o("wxHw"),u=function(){var t=function(){function t(n,i,o){e(this,t),this.http=n,this.auth=i,this.config=o,this.update=new r.n,this.backendUrl=this.config.backend_config.url}return n(t,[{key:"getSchedule",value:function(){var e=new a.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"schedule/1",{headers:e})}},{key:"putSchedule",value:function(e){var t=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/update_schedule",e,{headers:t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Pb(a.a),r.Pb(c.a),r.Pb(s.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},kXZ0:function(t,i,o){"use strict";o.d(i,"a",(function(){return h}));var r=o("fXoL"),a=o("tk/3"),c=o("18Le"),s=o("YdJ5"),u=o("wxHw"),l=o("tyNb"),h=function(){var t=function(){function t(n,i,o,a,c){e(this,t),this.http=n,this.auth=i,this.alert=o,this.config=a,this.router=c,this.update=new r.n,this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}return n(t,[{key:"signUpAdmin",value:function(e,t){var n=this,i=new a.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"admins/register",e,{headers:i}).subscribe((function(e){e.token&&(n.auth.set_jwt(e.token),n.auth.setLoggedIn(!0),n.router.navigate([n.eventName+"/Anmeldung"])),n.alert.alert("Dein Account wurde erfolgreich erstellt!"),n.sendAuthentificationEmail(),n.update.emit(),t.reset()}),(function(e){n.alert.error("Erstellung des Accounts fehlgeschlagen!",e.error)}))}},{key:"sendAuthentificationEmail",value:function(){var e=this,t=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/email/resend",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message)}),(function(t){e.alert.error("Versandt der Verifizierungs E-Mail fehlgeschlagen!",t.error)}))}},{key:"sendAuthentificationEmailSubscribe",value:function(){var e=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/email/resend",null,{headers:e})}},{key:"logInAdmin",value:function(e){var t=new a.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"admins/login",e,{headers:t})}},{key:"logOutAdmin",value:function(){var e=this,t=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/logout",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message),e.auth.setLoggedIn(!1),e.router.navigate([e.eventName+"/Anmeldung"])}),(function(t){e.alert.error("Logout fehlgeschlagen!",t.error)}))}},{key:"getSelfAdmin",value:function(){var e=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/self",{headers:e})}},{key:"getAllSignUpEmails",value:function(){var e=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"sign_up_emails",{headers:e})}},{key:"createSignUpEmail",value:function(e){var t=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"sign_up_emails",e,{headers:t})}},{key:"deleteSignUpEmail",value:function(e){var t=this,n=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"sign_up_emails/"+e,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("Sperrung der E-Mail fehlgeschlagen!",e.error)}))}},{key:"createSortingProposal",value:function(){var e=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/create_sorting_proposal",null,{headers:e})}},{key:"requestSortingProposal",value:function(){var e=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/request_sorting_proposal",{headers:e})}},{key:"editSortingProposal",value:function(e){var t=this,n=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/edit_sorting_proposal",e,{headers:n}).subscribe((function(e){t.alert.alert(e.message)}),(function(e){t.alert.error("Erstellung eines Backups fehlgeschlagen!",e.error)}))}},{key:"applySortingProposal",value:function(){var e=this,t=new a.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/apply_sorting_proposal",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message)}),(function(t){e.alert.error("Erstellung eines Backups fehlgeschlagen!",t.error)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Pb(a.a),r.Pb(c.a),r.Pb(s.a),r.Pb(u.a),r.Pb(l.g))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},qLtw:function(t,i,o){"use strict";o.r(i),o.d(i,"AdminSchedulePageModule",(function(){return C}));var r=o("ofXK"),a=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),u=o("fXoL"),l=o("kXZ0"),h=o("9pHg"),b=o("YdJ5"),d=o("wxHw");function g(e,t){if(1&e&&(u.Lb(0,"ion-card-content"),u.Lb(1,"ion-label",20),u.oc(2),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(2),u.qc(" ",n.text," ")}}function p(e,t){if(1&e&&(u.Lb(0,"ion-item",21),u.Jb(1,"ion-icon",22),u.Lb(2,"ion-label"),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.qc("Registrierung und Erstellung der ",n.projectsNoun,"")}}function m(e,t){if(1&e&&(u.Lb(0,"ion-item",8),u.Jb(1,"ion-icon",23),u.Lb(2,"ion-label",20),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.qc("Registrierung und Erstellung der ",n.projectsNoun,"")}}function f(e,t){if(1&e&&(u.Lb(0,"ion-item",21),u.Jb(1,"ion-icon",24),u.Lb(2,"ion-label"),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.qc("Kontrolle und Freigabe der ",n.projectsNoun,"")}}function v(e,t){if(1&e&&(u.Lb(0,"ion-item",8),u.Jb(1,"ion-icon",25),u.Lb(2,"ion-label",20),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.qc("Kontrolle und Freigabe der ",n.projectsNoun,"")}}function k(e,t){if(1&e&&(u.Lb(0,"ion-item",21),u.Jb(1,"ion-icon",26),u.Lb(2,"ion-label"),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.qc("Anmeldung f\xfcr die ",n.projectsNoun,"")}}function w(e,t){if(1&e&&(u.Lb(0,"ion-item",8),u.Jb(1,"ion-icon",27),u.Lb(2,"ion-label",20),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.qc("Anmeldung f\xfcr die ",n.projectsNoun,"")}}function L(e,t){1&e&&(u.Lb(0,"ion-item",21),u.Jb(1,"ion-icon",28),u.Lb(2,"ion-label"),u.oc(3,"Sortierung durch den Algorithmus"),u.Kb(),u.Kb())}function y(e,t){1&e&&(u.Lb(0,"ion-item",8),u.Jb(1,"ion-icon",29),u.Lb(2,"ion-label",20),u.oc(3,"Sortierung durch den Algorithmus"),u.Kb(),u.Kb())}function K(e,t){1&e&&(u.Lb(0,"ion-item",21),u.Jb(1,"ion-icon",30),u.Lb(2,"ion-label"),u.oc(3,"Tauschphase"),u.Kb(),u.Kb())}function x(e,t){1&e&&(u.Lb(0,"ion-item",8),u.Jb(1,"ion-icon",31),u.Lb(2,"ion-label",20),u.oc(3,"Tauschphase"),u.Kb(),u.Kb())}function j(e,t){if(1&e&&(u.Lb(0,"ion-item",21),u.Jb(1,"ion-icon",32),u.Lb(2,"ion-label"),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.pc(n.eventName)}}function A(e,t){if(1&e&&(u.Lb(0,"ion-item",8),u.Jb(1,"ion-icon",33),u.Lb(2,"ion-label",20),u.oc(3),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(3),u.pc(n.eventName)}}var M,S,D,J=[{path:"",component:(M=function(){function t(n,i,o,r,a,c){e(this,t),this.activatedRoute=n,this.adminsService=i,this.scheduleService=o,this.router=r,this.alert=a,this.config=c,this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.text=this.config.get_content("admin-schedule"),this.currentDate=Object(r.n)(new Date,"yyyy-MM-dd","en"),this.activatedRoute.paramMap.subscribe((function(t){e.adminUrl=t.get("AdminName")})),this.getSchedule(),this.adminsService.update.subscribe((function(){return e.getSchedule()}))}},{key:"getSchedule",value:function(){var e=this;this.scheduleService.getSchedule().subscribe((function(t){e.schedule=t.data}))}},{key:"mangaeSchedule",value:function(){var e=this;this.scheduleService.putSchedule(this.schedule).subscribe((function(t){e.alert.alert(t.message),e.scheduleService.update.emit(),e.router.navigate([e.eventName+"/Admin/"+e.adminUrl])}),(function(t){e.alert.error("Aktualisierung des Zeitplans fehlgeschlagen!",t.error)}))}}]),t}(),M.\u0275fac=function(e){return new(e||M)(u.Ib(s.a),u.Ib(l.a),u.Ib(h.a),u.Ib(s.g),u.Ib(b.a),u.Ib(d.a))},M.\u0275cmp=u.Cb({type:M,selectors:[["app-admin-schedule"]],decls:52,vars:23,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["name","ParticipantForm",3,"ngSubmit"],["form","ngForm"],["color","background",1,"content"],[4,"ngIf"],["color","items","lines","none"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Beginn","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],["color","buttons","lines","none",4,"ngIf"],["color","items","lines","none",4,"ngIf"],["placeholder","Bitte ein Datum w\xe4hlen","name","Kontrolle","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Anmeldung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Sortierung","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Tausch","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Projekte","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],["placeholder","Bitte ein Datum w\xe4hlen","required","","name","Ende","monthShortNames","Jan, Feb, M\xe4rz, Apr, Mai, Jun, Jul, Aug, Sept, Okt, Nov, Dez","display-timezone","utc",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"disabled"],["color","text"],["color","buttons","lines","none"],["slot","start","name","create"],["color","text","slot","start","name","create"],["slot","start","name","shield-checkmark"],["color","text","slot","start","name","shield-checkmark"],["slot","start","name","log-in"],["color","text","slot","start","name","log-in"],["slot","start","name","funnel"],["color","text","slot","start","name","funnel"],["slot","start","name","swap-horizontal"],["color","text","slot","start","name","swap-horizontal"],["slot","start","name","flag"],["color","text","slot","start","name","flag"]],template:function(e,t){if(1&e&&(u.Lb(0,"ion-header"),u.Lb(1,"ion-toolbar",0),u.Lb(2,"ion-button",1),u.Jb(3,"ion-back-button",2),u.Kb(),u.Lb(4,"ion-title"),u.oc(5,"Zeitplan verwalten"),u.Kb(),u.Kb(),u.Kb(),u.Lb(6,"ion-content",3),u.Lb(7,"form",4,5),u.Tb("ngSubmit",(function(){return t.mangaeSchedule()})),u.Lb(9,"ion-card",6),u.Lb(10,"ion-card-header"),u.Lb(11,"ion-card-title"),u.oc(12,"Zeitplan"),u.Kb(),u.Kb(),u.nc(13,g,3,1,"ion-card-content",7),u.Lb(14,"ion-card-content"),u.Lb(15,"ion-list"),u.Lb(16,"ion-item",8),u.oc(17," ab "),u.Lb(18,"ion-datetime",9),u.Tb("ngModelChange",(function(e){return t.schedule.begin=e})),u.Kb(),u.Kb(),u.nc(19,p,4,1,"ion-item",10),u.nc(20,m,4,1,"ion-item",11),u.Lb(21,"ion-item",8),u.oc(22," bis "),u.Lb(23,"ion-datetime",12),u.Tb("ngModelChange",(function(e){return t.schedule.control=e})),u.Kb(),u.Kb(),u.nc(24,f,4,1,"ion-item",10),u.nc(25,v,4,1,"ion-item",11),u.Lb(26,"ion-item",8),u.oc(27," bis "),u.Lb(28,"ion-datetime",13),u.Tb("ngModelChange",(function(e){return t.schedule.registration=e})),u.Kb(),u.Kb(),u.nc(29,k,4,1,"ion-item",10),u.nc(30,w,4,1,"ion-item",11),u.Lb(31,"ion-item",8),u.oc(32," bis "),u.Lb(33,"ion-datetime",14),u.Tb("ngModelChange",(function(e){return t.schedule.sort_students=e})),u.Kb(),u.Kb(),u.nc(34,L,4,0,"ion-item",10),u.nc(35,y,4,0,"ion-item",11),u.Lb(36,"ion-item",8),u.oc(37," bis "),u.Lb(38,"ion-datetime",15),u.Tb("ngModelChange",(function(e){return t.schedule.exchange=e})),u.Kb(),u.Kb(),u.nc(39,K,4,0,"ion-item",10),u.nc(40,x,4,0,"ion-item",11),u.Lb(41,"ion-item",8),u.oc(42," bis "),u.Lb(43,"ion-datetime",16),u.Tb("ngModelChange",(function(e){return t.schedule.projects=e})),u.Kb(),u.Kb(),u.nc(44,j,4,1,"ion-item",10),u.nc(45,A,4,1,"ion-item",11),u.Lb(46,"ion-item",8),u.oc(47," bis"),u.Lb(48,"ion-datetime",17),u.Tb("ngModelChange",(function(e){return t.schedule.end=e})),u.Kb(),u.Kb(),u.Kb(),u.Lb(49,"div",18),u.Lb(50,"ion-button",19),u.oc(51,"Zeitplan best\xe4tigen"),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb()),2&e){var n=u.ic(8);u.xb(3),u.cc("defaultHref","",t.eventName,"/Admin/",t.adminUrl,""),u.xb(10),u.ac("ngIf",t.text),u.xb(5),u.ac("ngModel",t.schedule.begin),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.begin&&t.currentDate<=t.schedule.control),u.xb(1),u.ac("ngIf",t.currentDate<=t.schedule.begin||t.currentDate>t.schedule.control),u.xb(3),u.ac("ngModel",t.schedule.control),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.control&&t.currentDate<=t.schedule.registration),u.xb(1),u.ac("ngIf",t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration),u.xb(3),u.ac("ngModel",t.schedule.registration),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.registration&&t.currentDate<=t.schedule.sort_students),u.xb(1),u.ac("ngIf",t.currentDate<=t.schedule.registration||t.currentDate>t.schedule.sort_students),u.xb(3),u.ac("ngModel",t.schedule.sort_students),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.sort_students&&t.currentDate<=t.schedule.exchange),u.xb(1),u.ac("ngIf",t.currentDate<=t.schedule.sort_students||t.currentDate>t.schedule.exchange),u.xb(3),u.ac("ngModel",t.schedule.exchange),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.exchange&&t.currentDate<=t.schedule.projects),u.xb(1),u.ac("ngIf",t.currentDate<=t.schedule.exchange||t.currentDate>t.schedule.projects),u.xb(3),u.ac("ngModel",t.schedule.projects),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.projects&&t.currentDate<=t.schedule.end),u.xb(1),u.ac("ngIf",t.currentDate<=t.schedule.projects||t.currentDate>t.schedule.end),u.xb(3),u.ac("ngModel",t.schedule.end),u.xb(2),u.ac("disabled",n.invalid)}},directives:[c.t,c.R,c.h,c.e,c.f,c.P,c.p,a.k,a.g,a.h,c.j,c.l,c.n,r.j,c.k,c.B,c.x,c.q,c.Z,a.j,a.f,a.i,c.A,c.u],styles:[""]}),M)}],z=((D=function t(){e(this,t)}).\u0275mod=u.Gb({type:D}),D.\u0275inj=u.Fb({factory:function(e){return new(e||D)},imports:[[s.k.forChild(J)],s.k]}),D),C=((S=function t(){e(this,t)}).\u0275mod=u.Gb({type:S}),S.\u0275inj=u.Fb({factory:function(e){return new(e||S)},imports:[[r.b,a.a,c.S,z]]}),S)}}])}();
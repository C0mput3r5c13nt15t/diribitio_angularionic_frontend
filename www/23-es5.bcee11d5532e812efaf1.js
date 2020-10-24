!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10,40,41,48,49,50,51,52],{"4ARy":function(t,r,i){"use strict";i.d(r,"a",(function(){return d}));var a=i("fXoL"),o=i("tk/3"),s=i("18Le"),c=i("YdJ5"),u=i("wxHw"),l=i("tyNb"),d=function(){var t=function(){function t(n,r,i,o,s){e(this,t),this.http=n,this.auth=r,this.alert=i,this.config=o,this.router=s,this.update=new a.n,this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}return n(t,[{key:"signUpParticipant",value:function(e,t){var n=this,r=new o.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"students/register",e,{headers:r}).subscribe((function(e){e.token&&(n.auth.set_jwt(e.token),n.auth.setLoggedIn(!0),n.router.navigate([n.eventName+"/Anmeldung"])),n.alert.alert("Dein Account wurde erfolgreich erstellt!"),n.sendAuthentificationEmail(),n.update.emit(),t.reset()}),(function(e){n.alert.error("Accounterstellung fehlgeschlagen!",e.error)}))}},{key:"sendAuthentificationEmail",value:function(){var e=this,t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"students/email/resend",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message)}),(function(t){e.alert.error("Verifizierungs E-Mail konnte nicht versandt werden!",t.error)}))}},{key:"sendAuthentificationEmailSubscribe",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/email/resend",null,{headers:e})}},{key:"logInParticipant",value:function(e){var t=new o.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"students/login",e,{headers:t})}},{key:"logOutParticipant",value:function(){var e=this,t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/logout",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message),e.auth.setLoggedIn(!1),e.router.navigate([e.eventName+"/Anmeldung"])}),(function(t){e.alert.error("Logout fehlgeschlagen!",t.error)}))}},{key:"getSelfParticipant",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/self",{headers:e})}},{key:"getParticipantID",value:function(e){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/id",e,{headers:t})}},{key:"getAllParticipantNames",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/little_index_students",{headers:e})}},{key:"getAllStudents",value:function(e){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/index_students?page="+e,{headers:t})}},{key:"getAllSearchedStudents",value:function(e){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/search_index_students",{search_value:e},{headers:t})}},{key:"getFriends",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/friends",{headers:e})}},{key:"promoteStudent",value:function(e){var t=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/promote_student/"+e,null,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("Ernennung des Assistenten fehlgeschlagen!",e.error)}))}},{key:"suspendStudent",value:function(e){var t=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/suspend_student/"+e,null,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("Suspendierung des Assistenten fehlgeschlagen!",e.error)}))}},{key:"quitAssistant",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"students/quit_assistant",null,{headers:e})}},{key:"putSelfParticipant",value:function(e){var t=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/self_update",e,{headers:n}).subscribe((function(){t.alert.alert("Erfolgreich registriert!"),t.update.emit()}),(function(e){t.alert.error("Aktualisierung des Accounts fehlgeschlagen!",e.error)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Pb(o.a),a.Pb(s.a),a.Pb(c.a),a.Pb(u.a),a.Pb(l.g))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"9pHg":function(t,r,i){"use strict";i.d(r,"a",(function(){return u}));var a=i("fXoL"),o=i("tk/3"),s=i("18Le"),c=i("wxHw"),u=function(){var t=function(){function t(n,r,i){e(this,t),this.http=n,this.auth=r,this.config=i,this.update=new a.n,this.backendUrl=this.config.backend_config.url}return n(t,[{key:"getSchedule",value:function(){var e=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"schedule/1",{headers:e})}},{key:"putSchedule",value:function(e){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/update_schedule",e,{headers:t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Pb(o.a),a.Pb(s.a),a.Pb(c.a))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Rw8U:function(t,r,i){"use strict";i.r(r),i.d(r,"UserPagePageModule",(function(){return I}));var a=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),c=i("TEn/"),u=i("fXoL"),l=i("SfEx"),d=i("4ARy"),h=i("zbRu"),p=i("9pHg"),b=i("wxHw"),f=i("YdJ5");function g(e,t){if(1&e&&(u.Lb(0,"ion-card-content"),u.Lb(1,"ion-label",13),u.oc(2),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.xb(2),u.qc(" ",n.text," ")}}function v(e,t){if(1&e){var n=u.Mb();u.Lb(0,"ion-card-content"),u.Lb(1,"ion-label",13),u.oc(2," Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren. "),u.Kb(),u.Lb(3,"div",11),u.Lb(4,"ion-button",12),u.Tb("click",(function(){return u.kc(n),u.Vb().sendVerificationEmail()})),u.oc(5,"E-Mail senden"),u.Kb(),u.Kb(),u.Kb()}}var m=function(){return["./Anmeldung"]};function k(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",15),u.oc(2,"Anmeldedaten eingeben "),u.Kb()),2&e){var n=u.Vb();u.ac("disabled",null==n.loadedUser.email_verified_at)("routerLink",u.ec(2,m))}}var j=function(){return["./Tauschanfrage senden"]};function _(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",16),u.oc(2,"Tauschanfragen senden "),u.Kb()),2&e){var n=u.Vb();u.ac("disabled",null==n.loadedUser.email_verified_at)("routerLink",u.ec(2,j))}}var w=function(){return["./Tauschanfrage best\xe4tigen"]};function y(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",17),u.oc(2,"Tauschanfrage best\xe4tigen "),u.Lb(3,"ion-badge",18),u.oc(4),u.Kb(),u.Kb()),2&e){var n=u.Vb();u.ac("disabled",null==n.loadedUser.email_verified_at)("routerLink",u.ec(3,w)),u.xb(4),u.pc(n.loadedUser.exchange_requests.length)}}function U(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",19),u.oc(2),u.Kb()),2&e){var n=u.Vb();u.bc("routerLink","./",n.projectNoun,""),u.ac("disabled",null==n.loadedUser.email_verified_at),u.xb(2),u.qc("",n.projectNoun," einsehen ")}}function A(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",20),u.oc(2),u.Kb()),2&e){var n=u.Vb();u.bc("routerLink","./",n.projectNoun," erstellen"),u.ac("disabled",null==n.loadedUser.email_verified_at),u.xb(2),u.qc("",n.projectNoun," erstellen ")}}function P(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",21),u.oc(2),u.Kb()),2&e){var n=u.Vb();u.bc("routerLink","./",n.projectNoun," verwalten"),u.ac("disabled",null==n.loadedUser.email_verified_at),u.xb(2),u.qc("",n.projectNoun," verwalten ")}}var x=function(){return["./Assistenten verwalten"]};function L(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",21),u.oc(2,"Assistenten verwalten "),u.Kb()),2&e){var n=u.Vb();u.ac("disabled",null==n.loadedUser.email_verified_at)("routerLink",u.ec(2,x))}}var S=function(){return["./Nachricht senden"]};function C(e,t){if(1&e&&(u.Lb(0,"ion-item",14),u.Jb(1,"ion-icon",16),u.oc(2,"Nachricht senden "),u.Kb()),2&e){var n=u.Vb();u.ac("disabled",null==n.loadedUser.email_verified_at)("routerLink",u.ec(2,S))}}var T,z,K=[{path:"",component:(T=function(){function t(n,r,i,a,o,s,c,u){e(this,t),this.activatedRoute=n,this.router=r,this.exchangesService=i,this.participantsService=a,this.projectsService=o,this.scheduleService=s,this.config=c,this.alert=u,this.loadedUser={id:0,user_name:"",email:"",password:"",first_name:"",last_name:"",grade:0,letter:"",exchange_id:0,exchange_requests:[],first_friend:0,second_friend:0,third_friend:0,first_wish:0,second_wish:0,third_wish:0,project_id:0,role:1},this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.buttonPressed=!0,this.projectNoun=this.config.app_config.project_noun,this.studentsCanCreateProjects=this.config.app_config.students_can_create_projects}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.text=this.config.get_content("user-page"),this.currentDate=Object(a.n)(new Date,"yyyy-MM-dd","en"),this.activatedRoute.paramMap.subscribe((function(t){t.has("ParticipantName")||e.router.navigate([""])})),this.scheduleService.getSchedule().subscribe((function(t){e.schedule=t.data})),this.getStudent(),this.participantsService.update.subscribe((function(){return e.getStudent()})),this.projectsService.update.subscribe((function(){return e.getStudent()}))}},{key:"getStudent",value:function(){var e=this;this.participantsService.getSelfParticipant().subscribe((function(t){e.loadedUser=t.data,e.loadedUser.exchange_requests=[],e.currentDate>e.schedule.exchange&&e.currentDate<=e.schedule.projects&&e.exchangesService.getAllExchangesForParticipant().subscribe((function(t){e.loadedUser.exchange_requests=t.data})),null==e.loadedUser.email_verified_at&&(e.buttonPressed=!1)}))}},{key:"refresh",value:function(){var e=this;this.getStudent(),this.scheduleService.getSchedule().subscribe((function(t){e.schedule=t.data}))}},{key:"logout",value:function(){this.participantsService.logOutParticipant()}},{key:"sendVerificationEmail",value:function(){var e=this;this.participantsService.sendAuthentificationEmailSubscribe().subscribe((function(t){e.alert.alert(t.message),e.buttonPressed=!0}),(function(t){e.alert.error("Verifizierungs E-Mail konnte nicht versandt werden!",t.error)}))}}]),t}(),T.\u0275fac=function(e){return new(e||T)(u.Ib(s.a),u.Ib(s.g),u.Ib(l.a),u.Ib(d.a),u.Ib(h.a),u.Ib(p.a),u.Ib(b.a),u.Ib(f.a))},T.\u0275cmp=u.Cb({type:T,selectors:[["app-user-page"]],features:[u.wb([a.d])],decls:30,vars:11,consts:[["color","menu"],["color","buttons","slot","end",3,"click"],["name","log-out"],["color","background"],["color","background",1,"content"],["color","items","lines","none"],["color","buttons"],["slot","end","color","buttons",3,"click"],["name","refresh"],[4,"ngIf"],["color","items",3,"disabled","routerLink",4,"ngIf"],[1,"ion-padding"],["color","buttons","expand","block",1,"ion-no-margin",3,"click"],["color","text"],["color","items",3,"disabled","routerLink"],["color","text","slot","start","name","log-in"],["color","text","slot","start","name","send"],["color","text","slot","start","name","swap-horizontal"],["color","buttons","slot","end"],["color","text","slot","start","name","people"],["color","text","slot","start","name","create"],["color","text","slot","start","name","construct"]],template:function(e,t){1&e&&(u.Lb(0,"ion-header"),u.Lb(1,"ion-toolbar",0),u.Lb(2,"ion-title"),u.oc(3,"Sch\xfcler"),u.Kb(),u.Lb(4,"ion-button",1),u.Tb("click",(function(){return t.logout()})),u.Jb(5,"ion-icon",2),u.Kb(),u.Kb(),u.Kb(),u.Lb(6,"ion-content",3),u.Lb(7,"ion-card",4),u.Lb(8,"ion-card-header"),u.Lb(9,"ion-item",5),u.Lb(10,"ion-card-title"),u.Lb(11,"ion-label",6),u.oc(12),u.Kb(),u.Kb(),u.Lb(13,"ion-button",7),u.Tb("click",(function(){return t.refresh()})),u.Jb(14,"ion-icon",8),u.Kb(),u.Kb(),u.Kb(),u.nc(15,g,3,1,"ion-card-content",9),u.nc(16,v,6,0,"ion-card-content",9),u.Lb(17,"ion-card-content"),u.Lb(18,"ion-list"),u.nc(19,k,3,3,"ion-item",10),u.nc(20,_,3,3,"ion-item",10),u.nc(21,y,5,4,"ion-item",10),u.nc(22,U,3,3,"ion-item",10),u.nc(23,A,3,3,"ion-item",10),u.nc(24,P,3,3,"ion-item",10),u.nc(25,L,3,3,"ion-item",10),u.nc(26,C,3,3,"ion-item",10),u.Kb(),u.Lb(27,"div",11),u.Lb(28,"ion-button",12),u.Tb("click",(function(){return t.logout()})),u.oc(29,"Abmelden"),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb()),2&e&&(u.xb(12),u.qc("Wilkommen ",t.loadedUser.user_name,""),u.xb(3),u.ac("ngIf",t.text),u.xb(1),u.ac("ngIf",null==t.loadedUser.email_verified_at&&!t.buttonPressed),u.xb(3),u.ac("ngIf",t.currentDate>t.schedule.registration&&t.currentDate<=t.schedule.sort_students),u.xb(1),u.ac("ngIf",1===t.loadedUser.role&&0!=t.loadedUser.project_id&&t.currentDate>t.schedule.exchange&&t.currentDate<=t.schedule.projects),u.xb(1),u.ac("ngIf",1===t.loadedUser.role&&t.loadedUser.exchange_requests.length>0&&0!=t.loadedUser.project_id&&0==t.loadedUser.exchange_id&&t.currentDate>t.schedule.exchange&&t.currentDate<=t.schedule.projects),u.xb(1),u.ac("ngIf",1===t.loadedUser.role&&0!=t.loadedUser.project_id),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.begin&&t.currentDate<=t.schedule.control&&0==t.loadedUser.project_id&&1===t.loadedUser.role&&t.studentsCanCreateProjects),u.xb(1),u.ac("ngIf",2===t.loadedUser.role&&0!=t.loadedUser.project_id&&t.studentsCanCreateProjects),u.xb(1),u.ac("ngIf",t.currentDate>t.schedule.begin&&t.currentDate<=t.schedule.control&&2===t.loadedUser.role&&0!=t.loadedUser.project_id&&t.studentsCanCreateProjects),u.xb(1),u.ac("ngIf",2===t.loadedUser.role&&0!=t.loadedUser.project_id&&t.studentsCanCreateProjects))},directives:[c.t,c.R,c.P,c.h,c.u,c.p,c.j,c.l,c.x,c.n,c.A,a.j,c.k,c.B,c.Y,s.h,c.g],styles:[""]}),T)}],I=((z=function t(){e(this,t)}).\u0275mod=u.Gb({type:z}),z.\u0275inj=u.Fb({factory:function(e){return new(e||z)},imports:[[a.b,o.a,c.S,s.k.forChild(K)]]}),z)},zbRu:function(t,r,i){"use strict";i.d(r,"a",(function(){return d}));var a=i("fXoL"),o=i("tk/3"),s=i("18Le"),c=i("YdJ5"),u=i("wxHw"),l=i("tyNb"),d=function(){var t=function(){function t(n,r,i,o,s){e(this,t),this.http=n,this.auth=r,this.alert=i,this.config=o,this.router=s,this.update=new a.n,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}return n(t,[{key:"getAllProjects",value:function(){var e=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:e})}},{key:"getProject",value:function(e){var t=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+e,{headers:t})}},{key:"getLittleProject",value:function(e){var t=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+e,{headers:t})}},{key:"getProjectAdmin",value:function(e){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+e,{headers:t})}},{key:"getSelfProject",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:e})}},{key:"getSelfLeadedProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+e+"/leaded_project",{headers:t})}},{key:"createProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={headers:new o.c({Authorization:"Bearer "+this.auth.jwt})},i=new FormData;return i.append("title",t.title),i.append("image",n),i.append("descr",t.descr),i.append("leader_name",t.leader_name),i.append("cost",t.cost),i.append("first_day_begin",t.first_day_begin),i.append("first_day_end",t.first_day_end),i.append("second_day_begin",t.second_day_begin),i.append("second_day_end",t.second_day_end),i.append("min_grade",t.min_grade),i.append("max_grade",t.max_grade),i.append("min_participants",t.min_participants),i.append("max_participants",t.max_participants),this.http.post(this.backendUrl+e+"/store_project",i,r)}},{key:"toogleAuthorizedProject",value:function(e,t){var n=this,r=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+e,{authorized:t},{headers:r}).subscribe((function(e){e&&n.alert.alert(e.message),n.update.emit()}),(function(e){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)}))}},{key:"toogleEditableProject",value:function(e,t){var n=this,r=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+e,{editable:t},{headers:r}).subscribe((function(e){n.alert.alert(e.message),n.update.emit()}),(function(e){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)}))}},{key:"putProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=new o.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",n,{headers:i}).subscribe((function(n){e.alert.alert(n.message),e.router.navigate("students"===t?[e.eventName+"/Sch\xfcler/"+r]:[e.eventName+"/"+e.projectNoun+"leiter/"+r]),e.update.emit()}),(function(t){e.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)}))}},{key:"touchUpProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=new o.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",n,{headers:i}).subscribe((function(n){e.alert.alert(n.message),e.router.navigate("students"===t?[e.eventName+"/Sch\xfcler/"+r]:[e.eventName+"/"+e.projectNoun+"leiter/"+r]),e.update.emit()}),(function(t){e.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)}))}},{key:"deleteProject",value:function(e){var t=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+e,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("L\xf6schen des Projektes fehlgeschlagen!",e.error)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Pb(o.a),a.Pb(s.a),a.Pb(c.a),a.Pb(u.a),a.Pb(l.g))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();
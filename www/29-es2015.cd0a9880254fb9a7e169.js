(window.webpackJsonp=window.webpackJsonp||[]).push([[29,40,41,49,50,51,52],{"9pHg":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("fXoL"),i=n("tk/3"),o=n("18Le"),c=n("wxHw");let s=(()=>{class t{constructor(t,e,n){this.http=t,this.auth=e,this.config=n,this.update=new r.n,this.backendUrl=this.config.backend_config.url}getSchedule(){const t=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"schedule/1",{headers:t})}putSchedule(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/update_schedule",t,{headers:e})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.a),r.Pb(o.a),r.Pb(c.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Wm2z:function(t,e,n){"use strict";n.r(e),n.d(e,"ProjectsPageModule",(function(){return L}));var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),c=n("TEn/"),s=n("fXoL"),a=n("zbRu"),h=n("wxHw"),u=n("9pHg");function d(t,e){if(1&t&&(s.Lb(0,"ion-card-content"),s.Lb(1,"ion-label",6),s.mc(2),s.Kb(),s.Kb()),2&t){const t=s.Vb();s.xb(2),s.oc(" ",t.text," ")}}function l(t,e){if(1&t&&(s.Lb(0,"ion-card-content"),s.Lb(1,"ion-card",3),s.Lb(2,"ion-card-header"),s.Lb(3,"ion-title",7),s.mc(4," Zu fr\xfch "),s.Kb(),s.Kb(),s.Lb(5,"ion-card-content"),s.Lb(6,"ion-text",6),s.mc(7),s.Kb(),s.Kb(),s.Kb(),s.Kb()),2&t){const t=s.Vb();s.xb(7),s.pc("Die ",t.projectsNoun," werden hier erst nach dem ",t.schedule.registration," ausgestellt.")}}function p(t,e){if(1&t&&s.Jb(0,"ion-img",15),2&t){const t=s.Vb(2).$implicit;s.ac("src","http://192.248.186.231:8000/storage/images/"+t.image)}}function b(t,e){if(1&t&&(s.Lb(0,"ion-text",6),s.mc(1),s.Kb()),2&t){const t=s.Vb(2).$implicit;s.xb(1),s.nc(t.descr)}}function g(t,e){1&t&&(s.Lb(0,"ion-text",7),s.mc(1," (Nicht zugelassen!)"),s.Kb())}const f=function(t){return["./",t]};function j(t,e){if(1&t&&(s.Lb(0,"ion-item",10),s.Lb(1,"ion-avatar",11),s.lc(2,p,1,1,"ion-img",12),s.Kb(),s.Lb(3,"ion-label",6),s.Lb(4,"h2"),s.mc(5),s.Kb(),s.lc(6,b,2,1,"ion-text",13),s.lc(7,g,2,0,"ion-text",14),s.Kb(),s.Kb()),2&t){const t=s.Vb().$implicit;s.ac("routerLink",s.dc(6,f,t.id)),s.xb(1),s.ac("hidden",""==t.image||null==t.image),s.xb(1),s.ac("ngIf",""!=t.image&&null!=t.image),s.xb(3),s.nc(t.title),s.xb(1),s.ac("ngIf",1==!!(t.authorized-0)),s.xb(1),s.ac("ngIf",0==!!(t.authorized-0))}}function m(t,e){if(1&t&&(s.Lb(0,"div"),s.lc(1,j,8,8,"ion-item",9),s.Kb()),2&t){const t=e.$implicit;s.xb(1),s.ac("ngIf",!!(t.authorized-0))}}function k(t,e){if(1&t&&(s.Lb(0,"ion-list"),s.lc(1,m,2,1,"div",8),s.Kb()),2&t){const t=s.Vb(2);s.xb(1),s.ac("ngForOf",t.projects)}}function w(t,e){if(1&t&&(s.Lb(0,"ion-card-content"),s.lc(1,k,2,1,"ion-list",5),s.Kb()),2&t){const t=s.Vb();s.xb(1),s.ac("ngIf",t.projects)}}const _=function(){return["../../Help"]},P=[{path:"",component:(()=>{class t{constructor(t,e,n){this.projectsService=t,this.config=e,this.scheduleService=n,this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.projectsNoun="Projekte",this.text=""}ngOnInit(){this.projectsNoun=this.config.app_config.projects_noun,this.text=this.config.get_content("projects"),this.currentDate=Object(r.n)(new Date,"yyyy-MM-dd","en"),this.scheduleService.getSchedule().subscribe(t=>{this.schedule=t.data}),this.getProjects(),this.projectsService.update.subscribe(()=>{this.getProjects()})}getProjects(){this.projectsService.getAllProjects().subscribe(t=>{this.projects=t.data})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(a.a),s.Ib(h.a),s.Ib(u.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-projects"]],decls:14,vars:7,consts:[["color","menu"],["color","buttons","slot","end",3,"routerLink"],["name","help-circle"],["color","background"],["color","background",1,"content"],[4,"ngIf"],["color","text"],["color","danger"],[4,"ngFor","ngForOf"],["color","background",3,"routerLink",4,"ngIf"],["color","background",3,"routerLink"],["slot","start",3,"hidden"],[3,"src",4,"ngIf"],["color","text",4,"ngIf"],["color","danger",4,"ngIf"],[3,"src"]],template:function(t,e){1&t&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar",0),s.Lb(2,"ion-title"),s.mc(3),s.Kb(),s.Lb(4,"ion-button",1),s.Jb(5,"ion-icon",2),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"ion-content",3),s.Lb(7,"ion-card",4),s.Lb(8,"ion-card-header"),s.Lb(9,"ion-title"),s.mc(10),s.Kb(),s.Kb(),s.lc(11,d,3,1,"ion-card-content",5),s.lc(12,l,8,2,"ion-card-content",5),s.lc(13,w,2,1,"ion-card-content",5),s.Kb(),s.Kb()),2&t&&(s.xb(3),s.nc(e.projectsNoun),s.xb(1),s.ac("routerLink",s.cc(6,_)),s.xb(6),s.oc(" ",e.projectsNoun," "),s.xb(1),s.ac("ngIf",e.text),s.xb(1),s.ac("ngIf",e.currentDate<=e.schedule.registration),s.xb(1),s.ac("ngIf",e.currentDate>e.schedule.registration))},directives:[c.t,c.R,c.P,c.h,c.Y,o.h,c.u,c.p,c.j,c.l,r.j,c.k,c.A,c.N,c.B,r.i,c.x,c.d,c.v],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[r.b,i.a,c.S,o.k.forChild(P)]]}),t})()},zbRu:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("fXoL"),i=n("tk/3"),o=n("18Le"),c=n("YdJ5"),s=n("wxHw"),a=n("tyNb");let h=(()=>{class t{constructor(t,e,n,i,o){this.http=t,this.auth=e,this.alert=n,this.config=i,this.router=o,this.update=new r.n,this.backendUrl=this.config.backend_config.url}getAllProjects(){const t=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:t})}getProject(t){const e=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+t,{headers:e})}getLittleProject(t){const e=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+t,{headers:e})}getProjectAdmin(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+t,{headers:e})}getSelfProject(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:t})}getSelfLeadedProject(t="students"){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+t+"/leaded_project",{headers:e})}createProject(t="students",e,n=null){const r={headers:new i.c({Authorization:"Bearer "+this.auth.jwt})},o=new FormData;return o.append("title",e.title),o.append("image",n),o.append("descr",e.descr),o.append("leader_name",e.leader_name),o.append("cost",e.cost),o.append("first_day_begin",e.first_day_begin),o.append("first_day_end",e.first_day_end),o.append("second_day_begin",e.second_day_begin),o.append("second_day_end",e.second_day_end),o.append("min_grade",e.min_grade),o.append("max_grade",e.max_grade),o.append("min_participants",e.min_participants),o.append("max_participants",e.max_participants),this.http.post(this.backendUrl+t+"/store_project",o,r)}toogleAuthorizedProject(t,e){const n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+t,{authorized:e},{headers:n}).subscribe(t=>{t&&this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}toogleEditableProject(t,e){const n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+t,{editable:e},{headers:n}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}putProject(t="students",e,n){const r=new i.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",e,{headers:r}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?["Projekttage/Benutzer/"+n]:["Projekttage/Projektleiter/"+n]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}touchUpProject(t="students",e,n){const r=new i.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",e,{headers:r}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?["Projekttage/Benutzer/"+n]:["Projekttage/Projektleiter/"+n]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}deleteProject(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+t,{headers:e}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("L\xf6schen des Projektes fehlgeschlagen!",t.error)})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.a),r.Pb(o.a),r.Pb(c.a),r.Pb(s.a),r.Pb(a.g))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[34,49,50,51,52],{gH7Q:function(t,e,n){"use strict";n.r(e),n.d(e,"AdminProjectsPageModule",(function(){return j}));var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),a=n("TEn/"),s=n("fXoL"),c=n("zbRu"),h=n("wxHw");function p(t,e){if(1&t&&(s.Lb(0,"ion-card-content"),s.Lb(1,"ion-label",7),s.oc(2),s.Kb(),s.Kb()),2&t){const t=s.Vb();s.xb(2),s.qc(" ",t.text," ")}}function d(t,e){if(1&t&&s.Jb(0,"ion-img",12),2&t){const t=s.Vb().$implicit,e=s.Vb();s.cc("src","",e.imageUrl,"",t.image,"")}}function u(t,e){if(1&t&&(s.Lb(0,"p"),s.oc(1),s.Kb()),2&t){const t=s.Vb().$implicit;s.xb(1),s.pc(t.descr)}}function l(t,e){1&t&&(s.Lb(0,"ion-text",13),s.oc(1," (Nicht zugelassen!)"),s.Kb())}const b=function(t){return["./",t]};function g(t,e){if(1&t&&(s.Lb(0,"ion-item",8),s.Lb(1,"ion-avatar",9),s.nc(2,d,1,2,"ion-img",10),s.Kb(),s.Lb(3,"ion-label",7),s.Lb(4,"h2"),s.oc(5),s.Kb(),s.nc(6,u,2,1,"p",5),s.nc(7,l,2,0,"ion-text",11),s.Kb(),s.Kb()),2&t){const t=e.$implicit;s.ac("routerLink",s.fc(6,b,t.id)),s.xb(1),s.ac("hidden",null==t.image||""==t.image),s.xb(1),s.ac("ngIf",""!=t.image&&null!=t.image),s.xb(3),s.pc(t.title),s.xb(1),s.ac("ngIf",1==!!(t.authorized-0)),s.xb(1),s.ac("ngIf",0==!!(t.authorized-0))}}const f=[{path:"",component:(()=>{class t{constructor(t,e,n){this.projectsService=t,this.activatedRoute=e,this.config=n,this.imageUrl=this.config.backend_config.imageUrl,this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.text=this.config.get_content("admin-projects"),this.activatedRoute.paramMap.subscribe(t=>{this.adminUrl=t.get("AdminName")}),this.getProjects(),this.projectsService.update.subscribe(()=>this.getProjects())}getProjects(){this.projectsService.getAllProjects().subscribe(t=>{this.projects=t.data})}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(c.a),s.Ib(o.a),s.Ib(h.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-admin-projects"]],decls:15,vars:6,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["color","background",1,"content"],[4,"ngIf"],["color","background",3,"routerLink",4,"ngFor","ngForOf"],["color","text"],["color","background",3,"routerLink"],["slot","start",3,"hidden"],[3,"src",4,"ngIf"],["color","danger",4,"ngIf"],[3,"src"],["color","danger"]],template:function(t,e){1&t&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar",0),s.Lb(2,"ion-button",1),s.Jb(3,"ion-back-button",2),s.Kb(),s.Lb(4,"ion-title"),s.oc(5),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"ion-content",3),s.Lb(7,"ion-card",4),s.Lb(8,"ion-card-header"),s.Lb(9,"ion-card-title"),s.oc(10),s.Kb(),s.Kb(),s.nc(11,p,3,1,"ion-card-content",5),s.Lb(12,"ion-card-content"),s.Lb(13,"ion-list"),s.nc(14,g,8,8,"ion-item",6),s.Kb(),s.Kb(),s.Kb(),s.Kb()),2&t&&(s.xb(3),s.cc("defaultHref","",e.eventName,"/Admin/",e.adminUrl,""),s.xb(2),s.pc(e.projectsNoun),s.xb(5),s.qc(" ",e.projectsNoun," "),s.xb(1),s.ac("ngIf",e.text),s.xb(3),s.ac("ngForOf",e.projects))},directives:[a.t,a.R,a.h,a.e,a.f,a.P,a.p,a.j,a.l,a.n,r.j,a.k,a.B,r.i,a.A,a.x,a.Y,o.h,a.d,a.v,a.N],styles:[""]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[r.b,i.a,a.S,o.k.forChild(f)]]}),t})()},zbRu:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("fXoL"),i=n("tk/3"),o=n("18Le"),a=n("YdJ5"),s=n("wxHw"),c=n("tyNb");let h=(()=>{class t{constructor(t,e,n,i,o){this.http=t,this.auth=e,this.alert=n,this.config=i,this.router=o,this.update=new r.n,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}getAllProjects(){const t=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:t})}getProject(t){const e=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+t,{headers:e})}getLittleProject(t){const e=new i.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+t,{headers:e})}getProjectAdmin(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+t,{headers:e})}getSelfProject(){const t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:t})}getSelfLeadedProject(t="students"){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+t+"/leaded_project",{headers:e})}createProject(t="students",e,n=null){const r={headers:new i.c({Authorization:"Bearer "+this.auth.jwt})},o=new FormData;return o.append("title",e.title),o.append("image",n),o.append("descr",e.descr),o.append("leader_name",e.leader_name),o.append("cost",e.cost),o.append("first_day_begin",e.first_day_begin),o.append("first_day_end",e.first_day_end),o.append("second_day_begin",e.second_day_begin),o.append("second_day_end",e.second_day_end),o.append("min_grade",e.min_grade),o.append("max_grade",e.max_grade),o.append("min_participants",e.min_participants),o.append("max_participants",e.max_participants),this.http.post(this.backendUrl+t+"/store_project",o,r)}toogleAuthorizedProject(t,e){const n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+t,{authorized:e},{headers:n}).subscribe(t=>{t&&this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}toogleEditableProject(t,e){const n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+t,{editable:e},{headers:n}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}putProject(t="students",e,n){const r=new i.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",e,{headers:r}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?[this.eventName+"/Sch\xfcler/"+n]:[this.eventName+"/"+this.projectNoun+"leiter/"+n]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}touchUpProject(t="students",e,n){const r=new i.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",e,{headers:r}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?[this.eventName+"/Sch\xfcler/"+n]:[this.eventName+"/"+this.projectNoun+"leiter/"+n]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}deleteProject(t){const e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+t,{headers:e}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("L\xf6schen des Projektes fehlgeschlagen!",t.error)})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.a),r.Pb(o.a),r.Pb(a.a),r.Pb(s.a),r.Pb(c.g))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
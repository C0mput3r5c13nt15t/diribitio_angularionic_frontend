(window.webpackJsonp=window.webpackJsonp||[]).push([[33,49,50,51,52],{oKxh:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminExchangeDetailPageModule",(function(){return m}));var a=n("ofXK"),r=n("3Pt+"),i=n("tyNb"),s=n("TEn/"),o=n("fXoL"),c=n("SfEx"),d=n("zbRu"),h=n("wxHw");function l(e,t){if(1&e&&(o.Lb(0,"ion-card-header"),o.Lb(1,"ion-card-title"),o.mc(2),o.Kb(),o.Kb()),2&e){const e=o.Vb();o.xb(2),o.rc("Tauschanfrage von ",e.loadedExchange.sender.first_name," ",e.loadedExchange.sender.last_name," und ",e.loadedExchange.receiver.first_name," ",e.loadedExchange.receiver.last_name,"")}}function b(e,t){if(1&e&&(o.Lb(0,"ion-label",14),o.mc(1),o.Kb()),2&e){const e=o.Vb(2);o.xb(1),o.pc("",e.loadedExchange.receiver.first_name," ",e.loadedExchange.receiver.last_name," erf\xfcllt NICHT die Projektbedingungen!")}}function u(e,t){if(1&e&&(o.Lb(0,"ion-label",14),o.mc(1),o.Kb()),2&e){const e=o.Vb(2);o.xb(1),o.pc("",e.loadedExchange.sender.first_name," ",e.loadedExchange.sender.last_name," erf\xfcllt NICHT die Projektbedingungen!")}}function g(e,t){if(1&e&&(o.Lb(0,"ion-item-group"),o.Lb(1,"ion-item-divider",5),o.Lb(2,"ion-label",11),o.mc(3),o.Kb(),o.Kb(),o.Lb(4,"ion-item",12),o.mc(5),o.Kb(),o.Lb(6,"ion-item",12),o.mc(7),o.Kb(),o.Lb(8,"ion-item",12),o.lc(9,b,2,2,"ion-label",13),o.Kb(),o.Lb(10,"ion-item-divider",5),o.Lb(11,"ion-label",11),o.mc(12),o.Kb(),o.Kb(),o.Lb(13,"ion-item",12),o.mc(14),o.Kb(),o.Lb(15,"ion-item",12),o.mc(16),o.Kb(),o.Lb(17,"ion-item",12),o.lc(18,u,2,2,"ion-label",13),o.Kb(),o.Kb()),2&e){const e=o.Vb();o.xb(3),o.pc("",e.loadedExchange.sender.first_name," ",e.loadedExchange.sender.last_name," (Ersteller/in der Anfrage)"),o.xb(2),o.pc(" Klasse: ",e.loadedExchange.sender.grade,"",e.loadedExchange.sender.letter," "),o.xb(2),o.rc(" ",e.projectNoun,": ",e.firstProjectName," (",e.firstMinGrade,".Klasse bis ",e.firstMaxGrade,".Klasse) "),o.xb(2),o.ac("ngIf",e.loadedExchange.receiver.grade>e.firstMaxGrade||e.loadedExchange.receiver.grade<e.firstMinGrade),o.xb(3),o.pc("",e.loadedExchange.receiver.first_name," ",e.loadedExchange.receiver.last_name," (Empf\xe4nger/in)"),o.xb(2),o.pc(" Klasse: ",e.loadedExchange.receiver.grade,"",e.loadedExchange.receiver.letter," "),o.xb(2),o.rc(" ",e.projectNoun,": ",e.secondProjectName," (",e.secondMinGrade,".Klasse bis ",e.secondMaxGrade,".Klasse) "),o.xb(2),o.ac("ngIf",e.loadedExchange.sender.grade>e.secondMaxGrade||e.loadedExchange.sender.grade<e.secondMinGrade)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,a,r,i){this.activatedRoute=e,this.router=t,this.exchangesService=n,this.projectService=a,this.alertCtrl=r,this.config=i,this.loadedExchange={id:0,sender_id:0,receiver_id:0,confirmed:0,accomplished:0,sender:null,receiver:null},this.firstProjectName="",this.firstMinGrade=0,this.firstMaxGrade=0,this.secondProjectName="",this.secondMinGrade=0,this.secondMaxGrade=0}ngOnInit(){this.projectNoun=this.config.app_config.projects_noun,this.activatedRoute.paramMap.subscribe(e=>{if(!e.has("ExchangeID"))return void this.router.navigate([""]);this.adminUrl=e.get("AdminName");const t=e.get("ExchangeID");this.exchangesService.getExchange(t).subscribe(e=>{this.loadedExchange=e.data,this.projectService.getProject(this.loadedExchange.sender.project_id).subscribe(e=>{this.firstProjectName=e.data.title,this.firstMinGrade=e.data.min_grade,this.firstMaxGrade=e.data.max_grade}),this.projectService.getProject(this.loadedExchange.receiver.project_id).subscribe(e=>{this.secondProjectName=e.data.title,this.secondMinGrade=e.data.min_grade,this.secondMaxGrade=e.data.max_grade})})})}deleteExchange(){this.alertCtrl.create({header:"Bist du sicher?",message:"Wollen sie diesen Tausch wirklich unwiederruflich l\xf6schen?",buttons:[{text:"Abbrechen",role:"cancel"},{text:"L\xf6schen",handler:()=>{this.exchangesService.deleteExchange(this.loadedExchange.id),this.router.navigate(["Projekttage/Admin/"+this.adminUrl+"/Tauschanfragen"])}}]}).then(e=>{e.present()})}carryOutExchange(){this.exchangesService.carryOutExchange(this.loadedExchange.id),this.router.navigate(["Projekttage/Admin/"+this.adminUrl+"/Tauschanfragen"])}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(i.a),o.Ib(i.g),o.Ib(c.a),o.Ib(d.a),o.Ib(s.a),o.Ib(h.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-admin-exchange-detail"]],decls:20,vars:3,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","buttons","color","danger","slot","end",3,"click"],["name","trash"],["color","background"],["color","background",1,"content"],[4,"ngIf"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"click"],["color","buttons","expand","block","color","buttons","color","danger","slot","end",1,"ion-no-margin",3,"click"],["color","text"],["color","items","lines","none"],["color","danger",4,"ngIf"],["color","danger"]],template:function(e,t){1&e&&(o.Lb(0,"ion-header"),o.Lb(1,"ion-toolbar",0),o.Lb(2,"ion-button",1),o.Jb(3,"ion-back-button",2),o.Kb(),o.Lb(4,"ion-title"),o.mc(5,"Tauschanfrage"),o.Kb(),o.Lb(6,"ion-button",3),o.Tb("click",(function(){return t.deleteExchange()})),o.Jb(7,"ion-icon",4),o.Kb(),o.Kb(),o.Kb(),o.Lb(8,"ion-content",5),o.Lb(9,"ion-card",6),o.lc(10,l,3,4,"ion-card-header",7),o.Lb(11,"ion-card-content"),o.Lb(12,"form"),o.lc(13,g,19,18,"ion-item-group",7),o.Lb(14,"div",8),o.Lb(15,"ion-button",9),o.Tb("click",(function(){return t.carryOutExchange()})),o.mc(16,"Tausch best\xe4tigen"),o.Kb(),o.Kb(),o.Lb(17,"div",8),o.Lb(18,"ion-button",10),o.Tb("click",(function(){return t.deleteExchange()})),o.mc(19,"Tauschanfrage l\xf6schen"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&e&&(o.xb(3),o.bc("defaultHref","Projekttage/Admin/",t.adminUrl,"/Tauschanfragen"),o.xb(7),o.ac("ngIf",t.loadedExchange.sender&&t.loadedExchange.receiver),o.xb(3),o.ac("ngIf",t.loadedExchange.sender&&t.loadedExchange.receiver))},directives:[s.t,s.R,s.h,s.e,s.f,s.P,s.u,s.p,s.j,a.j,s.k,r.k,r.g,r.h,s.l,s.n,s.z,s.y,s.A,s.x],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[a.b,r.a,s.S,i.k.forChild(p)]]}),e})()},zbRu:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("fXoL"),r=n("tk/3"),i=n("18Le"),s=n("YdJ5"),o=n("wxHw"),c=n("tyNb");let d=(()=>{class e{constructor(e,t,n,r,i){this.http=e,this.auth=t,this.alert=n,this.config=r,this.router=i,this.update=new a.n,this.backendUrl=this.config.backend_config.url}getAllProjects(){const e=new r.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:e})}getProject(e){const t=new r.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+e,{headers:t})}getLittleProject(e){const t=new r.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+e,{headers:t})}getProjectAdmin(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+e,{headers:t})}getSelfProject(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:e})}getSelfLeadedProject(e="students"){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+e+"/leaded_project",{headers:t})}createProject(e="students",t,n=null){const a={headers:new r.c({Authorization:"Bearer "+this.auth.jwt})},i=new FormData;return i.append("title",t.title),i.append("image",n),i.append("descr",t.descr),i.append("leader_name",t.leader_name),i.append("cost",t.cost),i.append("first_day_begin",t.first_day_begin),i.append("first_day_end",t.first_day_end),i.append("second_day_begin",t.second_day_begin),i.append("second_day_end",t.second_day_end),i.append("min_grade",t.min_grade),i.append("max_grade",t.max_grade),i.append("min_participants",t.min_participants),i.append("max_participants",t.max_participants),this.http.post(this.backendUrl+e+"/store_project",i,a)}toogleAuthorizedProject(e,t){const n=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+e,{authorized:t},{headers:n}).subscribe(e=>{e&&this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}toogleEditableProject(e,t){const n=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+e,{editable:t},{headers:n}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}putProject(e="students",t,n){const a=new r.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+e+"/update_project",t,{headers:a}).subscribe(t=>{this.alert.alert(t.message),this.router.navigate("students"===e?["Projekttage/Benutzer/"+n]:["Projekttage/Projektleiter/"+n]),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}touchUpProject(e="students",t,n){const a=new r.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+e+"/touch_up_project",t,{headers:a}).subscribe(t=>{this.alert.alert(t.message),this.router.navigate("students"===e?["Projekttage/Benutzer/"+n]:["Projekttage/Projektleiter/"+n]),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}deleteProject(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+e,{headers:t}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("L\xf6schen des Projektes fehlgeschlagen!",e.error)})}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(r.a),a.Pb(i.a),a.Pb(s.a),a.Pb(o.a),a.Pb(c.g))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
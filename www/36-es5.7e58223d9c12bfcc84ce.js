!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[36,45,46,47,48],{"99HH":function(t,i,a){"use strict";a.r(i),a.d(i,"MessagesPageModule",(function(){return _}));var r=a("ofXK"),o=a("3Pt+"),s=a("tyNb"),c=a("TEn/"),d=a("fXoL"),u=a("YdJ5"),l=a("zbRu"),h=a("qvOR"),p=a("wxHw");function b(e,t){if(1&e){var n=d.Mb();d.Lb(0,"ion-item",15),d.Lb(1,"ion-card",3),d.Lb(2,"ion-card-content"),d.Lb(3,"ion-text",16),d.oc(4),d.Kb(),d.Kb(),d.Kb(),d.Lb(5,"ion-buttons",17),d.Tb("click",(function(){d.kc(n);var e=t.$implicit;return d.Vb(2).delete(e)})),d.Jb(6,"ion-icon",18),d.Kb(),d.Kb()}if(2&e){var i=t.$implicit;d.xb(4),d.pc(i.message)}}function g(e,t){if(1&e&&(d.Lb(0,"ion-list",13),d.nc(1,b,7,1,"ion-item",14),d.Kb()),2&e){var n=d.Vb();d.xb(1),d.ac("ngForOf",n.leadedProject.messages)}}var f,m,v=[{path:"",component:(f=function(){function t(n,i,a,r,o,s){e(this,t),this.activatedRoute=n,this.router=i,this.alert=a,this.projectsService=r,this.messagesService=o,this.config=s,this.leadedProject={id:0,authorized:0,editable:0,title:"",image:"",descr:"",leader_name:"",leader_id:0,cost:0,first_day_begin:{hours:0,minutes:0},first_day_end:{hours:0,minutes:0},second_day_begin:{hours:0,minutes:0},second_day_end:{hours:0,minutes:0},min_grade:0,max_grade:0,min_participants:0,max_participants:0,messages:[],participants:[]},this.loadedStudent={id:0,user_name:"",email:"",password:"",first_name:"",last_name:"",grade:0,letter:"",exchange_id:0,exchange_requests:[],first_friend:0,second_friend:0,third_friend:0,first_wish:0,second_wish:0,third_wish:0,project_id:0,role:2},this.newMessage={project_id:0,message:""},this.eventName=this.config.app_config.event_name}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){t.has("ParticipantName")?e.studentUrl=t.get("ParticipantName"):e.router.navigate([""])})),this.getProject()}},{key:"getProject",value:function(){var e=this;this.projectsService.getSelfLeadedProject("students").subscribe((function(t){e.leadedProject=t.data}))}},{key:"send",value:function(e){var t=this;!0===e.valid&&(this.messagesService.createMessage("students",this.newMessage).subscribe((function(e){t.messagesService.update.emit(),t.leadedProject.messages.push(e.data)}),(function(e){t.alert.error("Versandt der Nachricht fehlgeschlagen!",e.error)})),e.reset())}},{key:"delete",value:function(e){this.leadedProject.messages=this.leadedProject.messages.filter((function(t){return e.id!==t.id})),this.messagesService.deleteMessage("students",e.id)}}]),t}(),f.\u0275fac=function(e){return new(e||f)(d.Ib(s.a),d.Ib(s.g),d.Ib(u.a),d.Ib(l.a),d.Ib(h.a),d.Ib(p.a))},f.\u0275cmp=d.Cb({type:f,selectors:[["app-messages"]],decls:18,vars:5,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["class","content",4,"ngIf"],["color","background","name","MessageBox",1,"content"],["id","Formular","name","MessageForm",3,"ngSubmit"],["form","ngForm"],["color","items"],["color","text","required","","name","MessageText","type","text",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","type","submit","expand","block",1,"ion-no-margin",3,"disabled"],["name","send"],[1,"content"],["color","items","lines","none",4,"ngFor","ngForOf"],["color","items","lines","none"],["color","text"],[3,"click"],["color","danger","name","close"]],template:function(e,t){if(1&e){var n=d.Mb();d.Lb(0,"ion-header"),d.Lb(1,"ion-toolbar",0),d.Lb(2,"ion-button",1),d.Jb(3,"ion-back-button",2),d.Kb(),d.Lb(4,"ion-title"),d.oc(5,"Nachrichten"),d.Kb(),d.Kb(),d.Kb(),d.Lb(6,"ion-content",3),d.nc(7,g,2,1,"ion-list",4),d.Lb(8,"ion-card",5),d.Lb(9,"form",6,7),d.Tb("ngSubmit",(function(){d.kc(n);var e=d.ic(10);return t.send(e)})),d.Lb(11,"ion-item",8),d.Lb(12,"ion-input",9),d.Tb("ngModelChange",(function(e){return t.newMessage.message=e})),d.Kb(),d.Kb(),d.Lb(13,"div",10),d.Lb(14,"ion-button",11),d.Lb(15,"ion-label"),d.Jb(16,"ion-icon",12),d.oc(17," Nachricht senden"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb()}if(2&e){var i=d.ic(10);d.xb(3),d.cc("defaultHref","",t.eventName,"/Sch\xfcler/",t.studentUrl,""),d.xb(4),d.ac("ngIf",t.leadedProject.messages.length),d.xb(5),d.ac("ngModel",t.newMessage.message),d.xb(2),d.ac("disabled",i.invalid)}},directives:[c.t,c.R,c.h,c.e,c.f,c.P,c.p,r.j,c.j,o.k,o.g,o.h,c.x,c.w,c.ab,o.j,o.f,o.i,c.A,c.u,c.B,r.i,c.k,c.N,c.i],styles:[""]}),f)}],_=((m=function t(){e(this,t)}).\u0275mod=d.Gb({type:m}),m.\u0275inj=d.Fb({factory:function(e){return new(e||m)},imports:[[r.b,o.a,c.S,s.k.forChild(v)]]}),m)},zbRu:function(t,i,a){"use strict";a.d(i,"a",(function(){return l}));var r=a("fXoL"),o=a("tk/3"),s=a("18Le"),c=a("YdJ5"),d=a("wxHw"),u=a("tyNb"),l=function(){var t=function(){function t(n,i,a,o,s){e(this,t),this.http=n,this.auth=i,this.alert=a,this.config=o,this.router=s,this.update=new r.n,this.backendUrl=this.config.backend_config.url,this.projectNoun=this.config.app_config.project_noun,this.eventName=this.config.app_config.event_name}return n(t,[{key:"getAllProjects",value:function(){var e=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:e})}},{key:"getProject",value:function(e){var t=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+e,{headers:t})}},{key:"getLittleProject",value:function(e){var t=new o.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+e,{headers:t})}},{key:"getProjectAdmin",value:function(e){var t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+e,{headers:t})}},{key:"getSelfProject",value:function(){var e=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:e})}},{key:"getSelfLeadedProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",t=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+e+"/leaded_project",{headers:t})}},{key:"createProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i={headers:new o.c({Authorization:"Bearer "+this.auth.jwt})},a=new FormData;return a.append("title",t.title),a.append("image",n),a.append("descr",t.descr),a.append("leader_name",t.leader_name),a.append("cost",t.cost),a.append("first_day_begin",t.first_day_begin),a.append("first_day_end",t.first_day_end),a.append("second_day_begin",t.second_day_begin),a.append("second_day_end",t.second_day_end),a.append("min_grade",t.min_grade),a.append("max_grade",t.max_grade),a.append("min_participants",t.min_participants),a.append("max_participants",t.max_participants),this.http.post(this.backendUrl+e+"/store_project",a,i)}},{key:"toogleAuthorizedProject",value:function(e,t){var n=this,i=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+e,{authorized:t},{headers:i}).subscribe((function(e){e&&n.alert.alert(e.message),n.update.emit()}),(function(e){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)}))}},{key:"toogleEditableProject",value:function(e,t){var n=this,i=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_editable/"+e,{editable:t},{headers:i}).subscribe((function(e){n.alert.alert(e.message),n.update.emit()}),(function(e){n.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)}))}},{key:"putProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=new o.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",n,{headers:a}).subscribe((function(n){e.alert.alert(n.message),e.router.navigate("students"===t?[e.eventName+"/Sch\xfcler/"+i]:[e.eventName+"/"+e.projectNoun+"leiter/"+i]),e.update.emit()}),(function(t){e.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)}))}},{key:"touchUpProject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"students",n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=new o.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",n,{headers:a}).subscribe((function(n){e.alert.alert(n.message),e.router.navigate("students"===t?[e.eventName+"/Sch\xfcler/"+i]:[e.eventName+"/"+e.projectNoun+"leiter/"+i]),e.update.emit()}),(function(t){e.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)}))}},{key:"deleteProject",value:function(e){var t=this,n=new o.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+e,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("L\xf6schung des Projektes fehlgeschlagen!",e.error)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.a),r.Pb(s.a),r.Pb(c.a),r.Pb(d.a),r.Pb(u.g))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();
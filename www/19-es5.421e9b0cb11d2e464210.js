!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7RvP":function(i,n,o){"use strict";o.r(n),o.d(n,"AdminProjectDetailPageModule",function(){return S});var r=o("ofXK"),c=o("3Pt+"),a=o("tyNb"),d=o("TEn/"),b=o("fXoL"),l=o("OeS+"),s=o("CoJz"),u=o("r4Kj");function g(e,t){if(1&e&&b.Kb(0,"ion-img",18),2&e){var i=b.Wb();b.dc("src","",i.imageUrl,"",i.loadedProject.image,"")}}function h(e,t){1&e&&(b.Mb(0,"ion-item-divider",5),b.Mb(1,"ion-label",9),b.pc(2,"Nachrichten"),b.Lb(),b.Lb())}function m(e,t){if(1&e&&(b.Mb(0,"ion-item",11),b.Mb(1,"ion-card",20),b.Mb(2,"ion-card-content"),b.Mb(3,"ion-text",21),b.pc(4),b.Lb(),b.Kb(5,"br"),b.Mb(6,"ion-text",9),b.pc(7),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.yb(4),b.qc(i.sender_name),b.yb(3),b.qc(i.message)}}function p(e,t){if(1&e&&(b.Mb(0,"div"),b.oc(1,m,8,2,"ion-item",19),b.Lb()),2&e){var i=b.Wb();b.yb(1),b.bc("ngForOf",i.loadedProject.messages)}}function f(e,t){1&e&&(b.Mb(0,"ion-item-divider",5),b.Mb(1,"ion-label",9),b.pc(2,"Projektleiter"),b.Lb(),b.Lb())}function M(e,t){if(1&e&&(b.Mb(0,"div"),b.Mb(1,"ion-item",11),b.Mb(2,"ion-card",5),b.Mb(3,"ion-card-content"),b.Mb(4,"ion-text",9),b.Kb(5,"ion-icon",22),b.pc(6),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){var i=b.Wb();b.yb(6),b.uc(" ",i.loadedProject.leader.first_name," ",i.loadedProject.leader.last_name," ",i.loadedProject.leader.grade,"",i.loadedProject.leader.letter,"")}}function L(e,t){if(1&e&&(b.Mb(0,"div"),b.Mb(1,"ion-item",11),b.Mb(2,"ion-card",5),b.Mb(3,"ion-card-content"),b.Mb(4,"ion-text",9),b.Kb(5,"ion-icon",22),b.pc(6),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){var i=b.Wb();b.yb(6),b.sc(" ",i.loadedProject.leader.user_name," ",i.loadedProject.leader.email,"")}}function j(e,t){1&e&&(b.Mb(0,"ion-item-divider",5),b.Mb(1,"ion-label",9),b.pc(2,"Assistenten"),b.Lb(),b.Lb())}function v(e,t){if(1&e&&(b.Mb(0,"ion-item",11),b.Mb(1,"ion-card",5),b.Mb(2,"ion-card-content"),b.Mb(3,"ion-text",9),b.Kb(4,"ion-icon",23),b.pc(5),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.yb(5),b.uc(" ",i.first_name," ",i.last_name," ",i.grade,"",i.letter,"")}}function y(e,t){if(1&e&&(b.Mb(0,"div"),b.oc(1,v,6,4,"ion-item",19),b.Lb()),2&e){var i=b.Wb();b.yb(1),b.bc("ngForOf",i.loadedProject.assistant_student_leaders)}}function _(e,t){if(1&e&&(b.Mb(0,"ion-item",11),b.Mb(1,"ion-card",5),b.Mb(2,"ion-card-content"),b.Mb(3,"ion-text",9),b.pc(4),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.yb(4),b.uc("",i.first_name," ",i.last_name," ",i.grade,"",i.letter,"")}}function P(e,t){if(1&e&&(b.Mb(0,"div"),b.oc(1,_,5,4,"ion-item",19),b.Lb()),2&e){var i=b.Wb();b.yb(1),b.bc("ngForOf",i.loadedProject.participants)}}function k(e,t){1&e&&(b.Mb(0,"div"),b.Mb(1,"ion-item",11),b.Mb(2,"ion-card",5),b.Mb(3,"ion-card-content"),b.Mb(4,"ion-text",24),b.pc(5,"keine Teilnehmer"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb())}function w(e,t){if(1&e&&(b.Mb(0,"ion-label",9),b.pc(1),b.Lb()),2&e){var i=b.Wb();b.yb(1),b.rc(" ",i.adminWrongTime," ")}}var x,I,D=[{path:"",component:(x=function(){function i(t,n,o,r,c,a){e(this,i),this.activatedRoute=t,this.router=n,this.scheduleService=o,this.projectsService=r,this.alertCtrl=c,this.config=a,this.subscriptions=[],this.loadedProject={id:0,authorized:0,editable:0,title:"",image:"",descr:"",leader_name:"",leader_type:"",leader_id:0,cost:0,first_day_begin:{hours:0,minutes:0},first_day_end:{hours:0,minutes:0},second_day_begin:{hours:0,minutes:0},second_day_end:{hours:0,minutes:0},min_grade:0,max_grade:0,min_participants:0,max_participants:0,messages:[],participants:[],leader:null,assistant_student_leaders:[]},this.loadedStudentLeader={id:0,user_name:"",email:"",password:"",first_name:"",last_name:"",grade:0,letter:"",exchange_id:0,exchange_requests:[],first_friend:0,second_friend:0,third_friend:0,first_wish:0,second_wish:0,third_wish:0,project_id:0,role:2},this.schedule={id:1,begin:null,control:null,registration:null,sort_students:null,exchange:null,projects:null,end:null},this.imageUrl=this.config.backend_config.imageUrl,this.projectNoun=this.config.app_config.project_noun,this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name}var n,o,c;return n=i,(o=[{key:"ngOnInit",value:function(){var e=this;this.adminWrongTime=this.config.get_error("admin-wrong_time"),this.currentDate=Object(r.n)(new Date,"yyyy-MM-dd","en"),this.activatedRoute.paramMap.subscribe(function(t){t.has("ProjectID")?(e.adminUrl=t.get("AdminName"),e.projectId=Number(t.get("ProjectID"))):e.router.navigate([""])}),this.getSchedule(),this.getProject(),this.subscriptions.push(this.scheduleService.update.subscribe(function(){return e.getSchedule()}),this.projectsService.update.subscribe(function(){return e.getProject()}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){return e.unsubscribe()})}},{key:"getSchedule",value:function(){var e=this;this.scheduleService.getSchedule().subscribe(function(t){e.schedule=t.data})}},{key:"getProject",value:function(){var e=this;this.projectsService.getProjectAdmin(this.projectId).subscribe(function(t){t.data?e.loadedProject=t.data:e.router.navigate([e.eventName+"/Admin/"+e.adminUrl])})}},{key:"authorizedChanged",value:function(){this.currentDate>this.schedule.control&&this.currentDate<=this.schedule.registration&&this.projectsService.toogleAuthorizedProject(this.loadedProject.id,Boolean(this.loadedProject.authorized))}},{key:"editableChanged",value:function(){this.projectsService.toogleEditableProject(this.loadedProject.id,Boolean(this.loadedProject.editable))}},{key:"deleteProject",value:function(){var e=this;this.alertCtrl.create({header:"Sind sie sicher?",message:"Wollen sie dieses Projekt wirklich unwiederruflich l\xf6schen?",buttons:[{text:"Abbrechen",role:"cancel"},{text:"L\xf6schen",handler:function(){e.projectsService.deleteProject(e.loadedProject.id),e.router.navigate([e.eventName+"/Admin/"+e.adminUrl+"/"+e.projectsNoun])}}]}).then(function(e){e.present()})}}])&&t(n.prototype,o),c&&t(n,c),i}(),x.\u0275fac=function(e){return new(e||x)(b.Jb(a.a),b.Jb(a.g),b.Jb(l.a),b.Jb(s.a),b.Jb(d.a),b.Jb(u.a))},x.\u0275cmp=b.Db({type:x,selectors:[["app-admin-project-detail"]],decls:86,vars:42,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","danger","slot","end",3,"disabled","click"],["name","trash"],["color","background"],["color","background",1,"content"],[3,"src",4,"ngIf"],["text-wrap",""],["color","text"],["color","items","lines","none",1,"descr"],["color","items","lines","none"],["color","background",4,"ngIf"],[4,"ngIf"],["color","buttons",3,"disabled","ngModel","ngModelChange","ionChange"],[1,"ion-padding"],["expand","block","color","danger","slot","end",1,"ion-no-margin",3,"disabled","click"],["color","text",4,"ngIf"],[3,"src"],["color","items","lines","none",4,"ngFor","ngForOf"],["color","background",1,"message"],["color","buttons"],["name","star"],["name","star-half"],["color","danger"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-button",1),b.Kb(3,"ion-back-button",2),b.Lb(),b.Mb(4,"ion-title"),b.pc(5),b.Lb(),b.Mb(6,"ion-button",3),b.Ub("click",function(){return t.deleteProject()}),b.Kb(7,"ion-icon",4),b.Lb(),b.Lb(),b.Lb(),b.Mb(8,"ion-content",5),b.Mb(9,"ion-card",6),b.oc(10,g,1,2,"ion-img",7),b.Mb(11,"ion-card-header"),b.Mb(12,"ion-card-title",8),b.pc(13),b.Lb(),b.Mb(14,"ion-card-subtitle"),b.Mb(15,"ion-label",9),b.pc(16),b.Xb(17,"date"),b.Xb(18,"date"),b.Lb(),b.Lb(),b.Lb(),b.Mb(19,"ion-card-content"),b.Mb(20,"ion-item-group"),b.Mb(21,"ion-item",10),b.Mb(22,"ion-label",9),b.pc(23),b.Lb(),b.Lb(),b.Mb(24,"ion-item-divider",5),b.Mb(25,"ion-label",9),b.pc(26,"Leiter"),b.Lb(),b.Lb(),b.Mb(27,"ion-item",11),b.Mb(28,"ion-label",9),b.pc(29),b.Lb(),b.Lb(),b.Mb(30,"ion-item-divider",5),b.Mb(31,"ion-label",9),b.pc(32,"Kosten"),b.Lb(),b.Lb(),b.Mb(33,"ion-item",11),b.Mb(34,"ion-label",9),b.pc(35),b.Lb(),b.Lb(),b.Mb(36,"ion-item-divider",5),b.Mb(37,"ion-label",9),b.pc(38,"Zeitraum"),b.Lb(),b.Lb(),b.Mb(39,"ion-item",11),b.Mb(40,"ion-label",9),b.pc(41),b.Lb(),b.Lb(),b.Mb(42,"ion-item",11),b.Mb(43,"ion-label",9),b.pc(44),b.Lb(),b.Lb(),b.Mb(45,"ion-item-divider",5),b.Mb(46,"ion-label",9),b.pc(47,"Klassenstufe"),b.Lb(),b.Lb(),b.Mb(48,"ion-item",11),b.Mb(49,"ion-label",9),b.pc(50),b.Lb(),b.Lb(),b.Mb(51,"ion-item-divider",5),b.Mb(52,"ion-label",9),b.pc(53,"Teinehmeranzahl"),b.Lb(),b.Lb(),b.Mb(54,"ion-item",11),b.Mb(55,"ion-label",9),b.pc(56),b.Lb(),b.Lb(),b.oc(57,h,3,0,"ion-item-divider",12),b.oc(58,p,2,1,"div",13),b.oc(59,f,3,0,"ion-item-divider",12),b.oc(60,M,7,4,"div",13),b.oc(61,L,7,2,"div",13),b.oc(62,j,3,0,"ion-item-divider",12),b.oc(63,y,2,1,"div",13),b.Mb(64,"ion-item-divider",5),b.Mb(65,"ion-label",9),b.pc(66,"Teilnehmer"),b.Lb(),b.Lb(),b.oc(67,P,2,1,"div",13),b.oc(68,k,6,0,"div",13),b.Mb(69,"ion-item-divider",5),b.Mb(70,"ion-label",9),b.pc(71,"Administration"),b.Lb(),b.Lb(),b.Mb(72,"ion-item",11),b.Mb(73,"ion-label",9),b.pc(74,"Zugelassen"),b.Lb(),b.Mb(75,"ion-toggle",14),b.Ub("ngModelChange",function(e){return!!((t.loadedProject.authorized=e)-0)})("ionChange",function(){return t.authorizedChanged()}),b.pc(76,"Aktiviert"),b.Lb(),b.Lb(),b.Mb(77,"ion-item",11),b.Mb(78,"ion-label",9),b.pc(79,"Bearbeitbar"),b.Lb(),b.Mb(80,"ion-toggle",14),b.Ub("ngModelChange",function(e){return!!((t.loadedProject.editable=e)-0)})("ionChange",function(){return t.editableChanged()}),b.pc(81,"Aktiviert"),b.Lb(),b.Lb(),b.Mb(82,"div",15),b.Mb(83,"ion-button",16),b.Ub("click",function(){return t.deleteProject()}),b.pc(84),b.Lb(),b.oc(85,w,2,1,"ion-label",17),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.yb(3),b.ec("defaultHref","",t.eventName,"/Admin/",t.adminUrl,"/",t.projectsNoun,""),b.yb(2),b.qc(t.projectNoun),b.yb(1),b.bc("disabled",t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration),b.yb(4),b.bc("ngIf",""!=t.loadedProject.image&&null!=t.loadedProject.image),b.yb(3),b.qc(t.loadedProject.title),b.yb(3),b.sc("Erstellt am ",b.Yb(17,36,t.loadedProject.created_at,"dd.MM.yyyy")," | Zuletzt aktualisiert am ",b.Yb(18,39,t.loadedProject.updated_at,"dd.MM.yyyy"),""),b.yb(7),b.qc(t.loadedProject.descr),b.yb(6),b.qc(t.loadedProject.leader_name),b.yb(6),b.rc("",t.loadedProject.cost,"\u20ac"),b.yb(6),b.sc("1.Tag: ",t.loadedProject.first_day_begin," bis ",t.loadedProject.first_day_end,""),b.yb(3),b.sc("2.Tag: ",t.loadedProject.second_day_begin," bis ",t.loadedProject.second_day_end,""),b.yb(6),b.sc("",t.loadedProject.min_grade,". bis ",t.loadedProject.max_grade,".Klasse"),b.yb(6),b.sc("von ",t.loadedProject.min_participants," bis ",t.loadedProject.max_participants,""),b.yb(1),b.bc("ngIf",t.loadedProject.messages.length),b.yb(1),b.bc("ngIf",t.loadedProject.messages.length),b.yb(1),b.bc("ngIf",t.loadedProject.leader),b.yb(1),b.bc("ngIf",t.loadedProject.leader&&"App\\Student"===t.loadedProject.leader_type),b.yb(1),b.bc("ngIf",t.loadedProject.leader&&"App\\Leader"===t.loadedProject.leader_type),b.yb(1),b.bc("ngIf",t.loadedProject.assistant_student_leaders.length),b.yb(1),b.bc("ngIf",t.loadedProject.assistant_student_leaders.length),b.yb(4),b.bc("ngIf",t.loadedProject.participants.length),b.yb(1),b.bc("ngIf",!t.loadedProject.participants.length),b.yb(7),b.bc("disabled",t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration||1==!!(t.loadedProject.editable-0))("ngModel",!!(t.loadedProject.authorized-0)),b.yb(5),b.bc("disabled",t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration)("ngModel",!!(t.loadedProject.editable-0)),b.yb(3),b.bc("disabled",t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration),b.yb(1),b.rc("",t.projectNoun," l\xf6schen"),b.yb(1),b.bc("ngIf",t.currentDate<=t.schedule.control||t.currentDate>t.schedule.registration))},directives:[d.t,d.R,d.h,d.e,d.f,d.P,d.u,d.p,d.j,r.j,d.l,d.n,d.m,d.A,d.k,d.z,d.x,d.y,d.Q,d.b,c.f,c.i,d.v,r.i,d.N],pipes:[r.d],styles:["img[_ngcontent-%COMP%]{width:auto;margin:10px auto auto}"]}),x)}],S=((I=function t(){e(this,t)}).\u0275mod=b.Hb({type:I}),I.\u0275inj=b.Gb({factory:function(e){return new(e||I)},imports:[[r.b,c.a,d.S,a.k.forChild(D)]]}),I)}}])}();
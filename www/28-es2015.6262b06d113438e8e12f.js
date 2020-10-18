(window.webpackJsonp=window.webpackJsonp||[]).push([[28,10,48,49,50,51,52],{"4ARy":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("fXoL"),r=i("tk/3"),s=i("18Le"),a=i("YdJ5"),o=i("wxHw"),d=i("tyNb");let c=(()=>{class e{constructor(e,t,i,r,s){this.http=e,this.auth=t,this.alert=i,this.config=r,this.router=s,this.update=new n.n,this.backendUrl=this.config.backend_config.url}signUpParticipant(e,t){const i=new r.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"students/register",e,{headers:i}).subscribe(e=>{e.token&&(this.auth.set_jwt(e.token),this.auth.setLoggedIn(!0),this.router.navigate(["Projekttage/Anmeldung"])),this.alert.alert("Dein Account wurde erfolgreich erstellt!"),this.sendAuthentificationEmail(),this.update.emit(),t.reset()},e=>{this.alert.error("Accounterstellung fehlgeschlagen!",e.error)})}sendAuthentificationEmail(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"students/email/resend",null,{headers:e}).subscribe(e=>{this.alert.alert(e.message)},e=>{this.alert.error("Verifizierungs E-Mail konnte nicht versandt werden!",e.error)})}sendAuthentificationEmailSubscribe(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/email/resend",null,{headers:e})}logInParticipant(e){const t=new r.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"students/login",e,{headers:t})}logOutParticipant(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/logout",null,{headers:e}).subscribe(e=>{this.alert.alert(e.message),this.auth.setLoggedIn(!1),this.router.navigate(["Projekttage/Anmeldung"])},e=>{this.alert.error("Logout fehlgeschlagen!",e.error)})}getSelfParticipant(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/self",{headers:e})}getParticipantID(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"students/id",e,{headers:t})}getAllParticipantNames(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/little_index_students",{headers:e})}getAllStudents(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/index_students?page="+e,{headers:t})}getAllSearchedStudents(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/search_index_students",{search_value:e},{headers:t})}getFriends(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/friends",{headers:e})}promoteStudent(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/promote_student/"+e,null,{headers:t}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("Ernennung des Assistenten fehlgeschlagen!",e.error)})}suspendStudent(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/suspend_student/"+e,null,{headers:t}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("Suspendierung des Assistenten fehlgeschlagen!",e.error)})}quitAssistant(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"students/quit_assistant",null,{headers:e})}putSelfParticipant(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"students/self_update",e,{headers:t}).subscribe(()=>{this.alert.alert("Erfolgreich registriert!"),this.update.emit()},e=>{this.alert.error("Aktualisierung des Accounts fehlgeschlagen!",e.error)})}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(r.a),n.Pb(s.a),n.Pb(a.a),n.Pb(o.a),n.Pb(d.g))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},HJbI:function(e,t,i){"use strict";i.r(t),i.d(t,"RegistrationPageModule",(function(){return w}));var n=i("ofXK"),r=i("3Pt+"),s=i("tyNb"),a=i("TEn/"),o=i("fXoL"),d=i("zbRu"),c=i("4ARy"),l=i("wxHw");function h(e,t){if(1&e&&(o.Lb(0,"ion-card-content"),o.Lb(1,"ion-label",11),o.mc(2),o.Kb(),o.Kb()),2&e){const e=o.Vb();o.xb(2),o.oc(" ",e.text," ")}}function b(e,t){if(1&e){const e=o.Mb();o.Lb(0,"ion-card",3),o.Lb(1,"form",6,7),o.Tb("ngSubmit",(function(){return o.ic(e),o.Vb().appendFriendFunction()})),o.Lb(3,"ion-item",8),o.Lb(4,"ion-input",34),o.Tb("ngModelChange",(function(t){return o.ic(e),o.Vb().appendFriend.first_name=t})),o.Kb(),o.Kb(),o.Lb(5,"ion-item",8),o.Lb(6,"ion-input",35),o.Tb("ngModelChange",(function(t){return o.ic(e),o.Vb().appendFriend.last_name=t})),o.Kb(),o.Kb(),o.Lb(7,"ion-item",8),o.Lb(8,"ion-label",11),o.mc(9,"Klassenstufe"),o.Kb(),o.Lb(10,"ion-select",36),o.Tb("ngModelChange",(function(t){return o.ic(e),o.Vb().appendFriend.grade=t})),o.Lb(11,"ion-select-option",13),o.mc(12,"5"),o.Kb(),o.Lb(13,"ion-select-option",14),o.mc(14,"6"),o.Kb(),o.Lb(15,"ion-select-option",15),o.mc(16,"7"),o.Kb(),o.Lb(17,"ion-select-option",16),o.mc(18,"8"),o.Kb(),o.Lb(19,"ion-select-option",17),o.mc(20,"9"),o.Kb(),o.Lb(21,"ion-select-option",18),o.mc(22,"10"),o.Kb(),o.Lb(23,"ion-select-option",19),o.mc(24,"11"),o.Kb(),o.Kb(),o.Kb(),o.Lb(25,"ion-item",8),o.Lb(26,"ion-radio-group",37),o.Tb("ngModelChange",(function(t){return o.ic(e),o.Vb().appendFriend.letter=t})),o.Lb(27,"ion-item",21),o.Lb(28,"ion-label",11),o.mc(29,"A "),o.Kb(),o.Jb(30,"ion-radio",22),o.Kb(),o.Lb(31,"ion-item",21),o.Lb(32,"ion-label",11),o.mc(33,"B "),o.Kb(),o.Jb(34,"ion-radio",23),o.Kb(),o.Lb(35,"ion-item",21),o.Lb(36,"ion-label",11),o.mc(37,"C "),o.Kb(),o.Jb(38,"ion-radio",24),o.Kb(),o.Lb(39,"ion-item",21),o.Lb(40,"ion-label",11),o.mc(41,"D "),o.Kb(),o.Jb(42,"ion-radio",25),o.Kb(),o.Kb(),o.Kb(),o.Lb(43,"div",32),o.Lb(44,"ion-button",33),o.mc(45,"Als Freund hinzuf\xfcgen"),o.Kb(),o.Kb(),o.Kb(),o.Kb()}if(2&e){const e=o.gc(2),t=o.Vb();o.xb(4),o.ac("ngModel",t.appendFriend.first_name),o.xb(2),o.ac("ngModel",t.appendFriend.last_name),o.xb(4),o.ac("selectedText",t.appendFriend.grade)("ngModel",t.appendFriend.grade),o.xb(16),o.ac("ngModel",t.appendFriend.letter),o.xb(18),o.ac("disabled",e.invalid)}}function p(e,t){if(1&e){const e=o.Mb();o.Lb(0,"ion-item",21),o.mc(1),o.Lb(2,"ion-button",39),o.Tb("click",(function(){o.ic(e);const i=t.$implicit;return o.Vb(2).removeFriendFunction(i)})),o.Jb(3,"ion-icon",40),o.Kb(),o.Kb()}if(2&e){const e=t.$implicit;o.xb(1),o.rc(" ",e.first_name," ",e.last_name," ",e.grade,"",e.letter," ")}}function u(e,t){if(1&e&&(o.Lb(0,"ion-item",8),o.Lb(1,"ion-list"),o.lc(2,p,4,4,"ion-item",38),o.Kb(),o.Kb()),2&e){const e=o.Vb();o.xb(2),o.ac("ngForOf",e.friendsList)}}function g(e,t){if(1&e&&(o.Lb(0,"ion-item",8),o.Lb(1,"ion-label",11),o.mc(2),o.Kb(),o.Kb()),2&e){const e=o.Vb();o.xb(2),o.rc(" ",e.definiteArticle," ",e.projectNoun," muss die Klassenstufen ",e.lowestGrade," bis ",e.highestGrade," erlauben. ")}}function f(e,t){if(1&e&&(o.Lb(0,"ion-item",3),o.Lb(1,"ion-label",41),o.mc(2),o.Kb(),o.Kb()),2&e){const e=o.Vb();o.xb(2),o.pc(" Du kanst leider keine Freunde ausw\xe4hlen, da du selbst ",e.indefiniteArticle," ",e.projectNoun," erstellt hast. ")}}function m(e,t){if(1&e&&(o.Lb(0,"ion-select-option",42),o.mc(1),o.Kb()),2&e){const e=t.$implicit;o.ac("value",e.id),o.xb(1),o.qc("",e.title," (",e.min_grade,". - ",e.max_grade,".Klasse)")}}function j(e,t){if(1&e&&(o.Lb(0,"ion-select-option",42),o.mc(1),o.Kb()),2&e){const e=t.$implicit;o.ac("value",e.id),o.xb(1),o.qc("",e.title," (",e.min_grade,". - ",e.max_grade,".Klasse)")}}function L(e,t){if(1&e&&(o.Lb(0,"ion-select-option",42),o.mc(1),o.Kb()),2&e){const e=t.$implicit;o.ac("value",e.id),o.xb(1),o.qc("",e.title," (",e.min_grade,". - ",e.max_grade,".Klasse)")}}const _=[{path:"",component:(()=>{class e{constructor(e,t,i,n,r,s){this.projectsService=e,this.participantsService=t,this.activatedRoute=i,this.router=n,this.alertCtrl=r,this.config=s,this.loadedProjects=[],this.possibleProjects=[],this.loadedUser={id:0,user_name:"",email:"",password:"",first_name:"",last_name:"",grade:0,letter:"",exchange_id:0,exchange_requests:[],first_friend:0,second_friend:0,third_friend:0,first_wish:0,second_wish:0,third_wish:0,project_id:0,role:1},this.appendFriend={id:0,first_name:"",last_name:"",grade:0,letter:""},this.friendsList=[]}ngOnInit(){this.definiteArticle=this.config.definite_article,this.indefiniteArticle=this.config.indefinite_article.toLowerCase(),this.projectsNoun=this.config.app_config.projects_noun,this.projectNoun=this.config.app_config.project_noun,this.text=this.config.get_content("user-registration"),this.activatedRoute.paramMap.subscribe(e=>{e.has("ParticipantName")?this.participantUrl=e.get("ParticipantName"):this.router.navigate([""])}),this.getProjects(),this.projectsService.update.subscribe(()=>this.getProjects()),this.getUser(),this.participantsService.update.subscribe(()=>this.getUser())}ionViewWillEnter(){this.getUser()}getUser(){this.participantsService.getSelfParticipant().subscribe(e=>{this.loadedUser=e.data,this.lowestGrade=+e.data.grade,this.highestGrade=+e.data.grade,this.friendsList=[],this.participantsService.getFriends().subscribe(e=>{this.friendsList=e.data,this.friendsList.forEach(e=>{+e.grade<=this.lowestGrade&&(this.lowestGrade=+e.grade),+e.grade>=this.highestGrade&&(this.highestGrade=+e.grade),this.filterProjects()})})})}userChanges(){this.lowestGrade=+this.loadedUser.grade,this.highestGrade=+this.loadedUser.grade,this.friendsList.forEach(e=>{+e.grade<=this.lowestGrade&&(this.lowestGrade=+e.grade),+e.grade>=this.highestGrade&&(this.highestGrade=+e.grade)}),this.filterProjects()}getProjects(){this.projectsService.getAllProjects().subscribe(e=>{this.loadedProjects=e.data})}validateProject(e){return this.lowestGrade>=+e.min_grade&&+e.max_grade>=this.highestGrade&&e.id!==this.loadedUser.project_id&&!!e.authorized}filterProjects(){this.possibleProjects=[],this.loadedProjects.forEach(e=>{this.validateProject(e)&&this.possibleProjects.push(e)})}appendFriendFunction(){this.participantsService.getParticipantID(this.appendFriend).subscribe(e=>{0!=e.id?(this.appendFriend.id=e.id,this.friendsList.length<3&&!this.friendsList.some(t=>t.id===e.id)&&(this.friendsList.push(JSON.parse(JSON.stringify(this.appendFriend))),console.log(this.friendsList),+this.appendFriend.grade<=this.lowestGrade&&(this.lowestGrade=+this.appendFriend.grade),+this.appendFriend.grade>=this.highestGrade&&(this.highestGrade=+this.appendFriend.grade)),this.filterProjects()):this.alertCtrl.create({header:"Fehler",message:"Der angegebene Sch\xfcler konnte nicht gefunden werden!",buttons:[{text:"Ok",role:"cancel"}]}).then(e=>{e.present()})})}removeFriendFunction(e){this.friendsList.splice(this.friendsList.indexOf(e),1),this.lowestGrade=+this.loadedUser.grade,this.highestGrade=+this.loadedUser.grade,this.friendsList.forEach(e=>{+e.grade<this.lowestGrade&&(this.lowestGrade=+e.grade),+e.grade>this.highestGrade&&(this.highestGrade=+e.grade)}),this.filterProjects()}registrate(){this.loadedUser.first_wish!=this.loadedUser.project_id&&this.loadedUser.second_wish!=this.loadedUser.project_id&&this.loadedUser.third_wish!=this.loadedUser.project_id?this.loadedUser.first_wish!==this.loadedUser.second_wish&&this.loadedUser.first_wish!==this.loadedUser.third_wish&&this.loadedUser.second_wish!==this.loadedUser.third_wish?3===this.friendsList.length?(this.loadedUser.first_friend=this.friendsList[0].id,this.loadedUser.second_friend=this.friendsList[1].id,this.loadedUser.third_friend=this.friendsList[2].id,this.participantsService.putSelfParticipant(this.loadedUser),this.router.navigate(["Projekttage/Benutzer/"+this.participantUrl])):2===this.friendsList.length?(this.loadedUser.first_friend=this.friendsList[0].id,this.loadedUser.second_friend=this.friendsList[1].id,this.loadedUser.third_friend=0,this.participantsService.putSelfParticipant(this.loadedUser),this.router.navigate(["Projekttage/Benutzer/"+this.participantUrl])):1===this.friendsList.length?(this.loadedUser.first_friend=this.friendsList[0].id,this.loadedUser.second_friend=0,this.loadedUser.third_friend=0,this.participantsService.putSelfParticipant(this.loadedUser),this.router.navigate(["Projekttage/Benutzer/"+this.participantUrl])):(this.loadedUser.first_friend=0,this.loadedUser.second_friend=0,this.loadedUser.third_friend=0,this.participantsService.putSelfParticipant(this.loadedUser),this.router.navigate(["Projekttage/Benutzer/"+this.participantUrl])):this.alertCtrl.create({header:"Fehler",message:"Du must drei verschiedene Projektw\xfcnsche angeben!",buttons:[{text:"Ok",role:"cancel"}]}).then(e=>{e.present()}):this.alertCtrl.create({header:"Fehler",message:"Du kannst nicht an deinem eigenen Projekt teilnehmen!",buttons:[{text:"Ok",role:"cancel"}]}).then(e=>{e.present()})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(d.a),o.Ib(c.a),o.Ib(s.a),o.Ib(s.g),o.Ib(a.a),o.Ib(l.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-registration"]],decls:81,vars:19,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["color","background",1,"content"],[4,"ngIf"],["name","ParticipantForm",3,"ngSubmit"],["form","ngForm"],["color","items"],["color","text","required","","name","ParticipantFirstName","placeholder","Vorname","type","text",3,"ngModel","ngModelChange"],["color","text","required","","name","ParticipantLastName","placeholder","Nachname","type","text",3,"ngModel","ngModelChange"],["color","text"],["required","","name","ParticipantGrade",3,"selectedText","ngModel","ionChange","ngModelChange"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["required","","name","ParticipantClass",3,"ngModel","ngModelChange"],["color","items","lines","none"],["color","text","slot","start","value","a"],["color","text","slot","start","value","b"],["color","text","slot","start","value","c"],["color","text","slot","start","value","d"],["color","background",4,"ngIf"],["color","items",4,"ngIf"],["required","","placeholder","1. Wunsch","name","ParticipantFirstWish","okText","Ausw\xe4hlen","cancelText","Abbrechen","type","number",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["required","","placeholder","2. Wunsch","name","ParticipantSecondWish","okText","Ausw\xe4hlen","cancelText","Abbrechen","type","number",3,"ngModel","ngModelChange"],["required","","placeholder","3. Wunsch","name","ParticipantThirdWish","okText","Ausw\xe4hlen","cancelText","Abbrechen",3,"ngModel","ngModelChange"],[1,"ion-padding"],["color","buttons","expand","block","type","submit",1,"ion-no-margin",3,"disabled"],["color","text","type","text","placeholder","Vorname","name","ExchangeSecondFirstName",3,"ngModel","ngModelChange"],["color","text","type","text","placeholder","Nachname","name","ExchangeSecondLastName",3,"ngModel","ngModelChange"],["name","ParticipantGrade",3,"selectedText","ngModel","ngModelChange"],["color","buttons","name","ParticipantClass",3,"ngModel","ngModelChange"],["color","items","lines","none",4,"ngFor","ngForOf"],["color","buttons","slot","end",3,"click"],["color","text","name","close"],["color","danger"],[3,"value"]],template:function(e,t){if(1&e&&(o.Lb(0,"ion-header"),o.Lb(1,"ion-toolbar",0),o.Lb(2,"ion-button",1),o.Jb(3,"ion-back-button",2),o.Kb(),o.Lb(4,"ion-title"),o.mc(5,"Anmeldung"),o.Kb(),o.Kb(),o.Kb(),o.Lb(6,"ion-content",3),o.Lb(7,"ion-card",4),o.Lb(8,"ion-card-header",3),o.Lb(9,"ion-title"),o.mc(10),o.Kb(),o.Kb(),o.lc(11,h,3,1,"ion-card-content",5),o.Lb(12,"ion-card-content"),o.Lb(13,"form",6,7),o.Tb("ngSubmit",(function(){return t.registrate()})),o.Lb(15,"ion-list"),o.Lb(16,"ion-item",8),o.Lb(17,"ion-input",9),o.Tb("ngModelChange",(function(e){return t.loadedUser.first_name=e})),o.Kb(),o.Kb(),o.Lb(18,"ion-item",8),o.Lb(19,"ion-input",10),o.Tb("ngModelChange",(function(e){return t.loadedUser.last_name=e})),o.Kb(),o.Kb(),o.Lb(20,"ion-item",8),o.Lb(21,"ion-label",11),o.mc(22,"Klassenstufe"),o.Kb(),o.Lb(23,"ion-select",12),o.Tb("ionChange",(function(){return t.userChanges()}))("ngModelChange",(function(e){return t.loadedUser.grade=e})),o.Lb(24,"ion-select-option",13),o.mc(25,"5"),o.Kb(),o.Lb(26,"ion-select-option",14),o.mc(27,"6"),o.Kb(),o.Lb(28,"ion-select-option",15),o.mc(29,"7"),o.Kb(),o.Lb(30,"ion-select-option",16),o.mc(31,"8"),o.Kb(),o.Lb(32,"ion-select-option",17),o.mc(33,"9"),o.Kb(),o.Lb(34,"ion-select-option",18),o.mc(35,"10"),o.Kb(),o.Lb(36,"ion-select-option",19),o.mc(37,"11"),o.Kb(),o.Kb(),o.Kb(),o.Lb(38,"ion-item",8),o.Lb(39,"ion-radio-group",20),o.Tb("ngModelChange",(function(e){return t.loadedUser.letter=e})),o.Lb(40,"ion-item",21),o.Lb(41,"ion-label",11),o.mc(42,"A "),o.Kb(),o.Jb(43,"ion-radio",22),o.Kb(),o.Lb(44,"ion-item",21),o.Lb(45,"ion-label",11),o.mc(46,"B "),o.Kb(),o.Jb(47,"ion-radio",23),o.Kb(),o.Lb(48,"ion-item",21),o.Lb(49,"ion-label",11),o.mc(50,"C "),o.Kb(),o.Jb(51,"ion-radio",24),o.Kb(),o.Lb(52,"ion-item",21),o.Lb(53,"ion-label",11),o.mc(54,"D "),o.Kb(),o.Jb(55,"ion-radio",25),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.lc(56,b,46,6,"ion-card",26),o.Lb(57,"ion-list"),o.Lb(58,"ion-title",3),o.mc(59,"Freunde"),o.Kb(),o.lc(60,u,3,1,"ion-item",27),o.lc(61,g,3,4,"ion-item",27),o.lc(62,f,3,2,"ion-item",26),o.Lb(63,"ion-item",8),o.Lb(64,"ion-label",11),o.mc(65,"1. Wunsch"),o.Kb(),o.Lb(66,"ion-select",28),o.Tb("ngModelChange",(function(e){return t.loadedUser.first_wish=e})),o.lc(67,m,2,4,"ion-select-option",29),o.Kb(),o.Kb(),o.Lb(68,"ion-item",8),o.Lb(69,"ion-label",11),o.mc(70,"2. Wunsch"),o.Kb(),o.Lb(71,"ion-select",30),o.Tb("ngModelChange",(function(e){return t.loadedUser.second_wish=e})),o.lc(72,j,2,4,"ion-select-option",29),o.Kb(),o.Kb(),o.Lb(73,"ion-item",8),o.Lb(74,"ion-label",11),o.mc(75,"3. Wunsch"),o.Kb(),o.Lb(76,"ion-select",31),o.Tb("ngModelChange",(function(e){return t.loadedUser.third_wish=e})),o.lc(77,L,2,4,"ion-select-option",29),o.Kb(),o.Kb(),o.Kb(),o.Lb(78,"div",32),o.Lb(79,"ion-button",33),o.mc(80,"Anmelden"),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&e){const e=o.gc(14);o.xb(3),o.bc("defaultHref","Projekttage/Benutzer/",t.participantUrl,""),o.xb(7),o.oc("F\xfcr ",t.projectsNoun," Anmelden"),o.xb(1),o.ac("ngIf",t.text),o.xb(6),o.ac("ngModel",t.loadedUser.first_name),o.xb(2),o.ac("ngModel",t.loadedUser.last_name),o.xb(4),o.ac("selectedText",t.loadedUser.grade)("ngModel",t.loadedUser.grade),o.xb(16),o.ac("ngModel",t.loadedUser.letter),o.xb(17),o.ac("ngIf",0==t.loadedUser.project_id),o.xb(4),o.ac("ngIf",0==t.loadedUser.project_id||null==t.loadedUser.project_id),o.xb(1),o.ac("ngIf",0==t.loadedUser.project_id&&1===t.loadedUser.role||null==t.loadedUser.project_id&&1===t.loadedUser.role),o.xb(1),o.ac("ngIf",0!=t.loadedUser.project_id&&null!=t.loadedUser.project_id||2===t.loadedUser.role),o.xb(4),o.ac("ngModel",t.loadedUser.first_wish),o.xb(1),o.ac("ngForOf",t.possibleProjects),o.xb(4),o.ac("ngModel",t.loadedUser.second_wish),o.xb(1),o.ac("ngForOf",t.possibleProjects),o.xb(4),o.ac("ngModel",t.loadedUser.third_wish),o.xb(1),o.ac("ngForOf",t.possibleProjects),o.xb(2),o.ac("disabled",e.invalid)}},directives:[a.t,a.R,a.h,a.e,a.f,a.P,a.p,a.j,a.l,n.j,a.k,r.k,r.g,r.h,a.B,a.x,a.w,a.ab,r.j,r.f,r.i,a.A,a.I,a.Z,a.J,a.D,a.C,a.X,n.i,a.u],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[n.b,r.a,a.S,s.k.forChild(_)]]}),e})()},zbRu:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("fXoL"),r=i("tk/3"),s=i("18Le"),a=i("YdJ5"),o=i("wxHw"),d=i("tyNb");let c=(()=>{class e{constructor(e,t,i,r,s){this.http=e,this.auth=t,this.alert=i,this.config=r,this.router=s,this.update=new n.n,this.backendUrl=this.config.backend_config.url}getAllProjects(){const e=new r.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:e})}getProject(e){const t=new r.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+e,{headers:t})}getLittleProject(e){const t=new r.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+e,{headers:t})}getProjectAdmin(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+e,{headers:t})}getSelfProject(){const e=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:e})}getSelfLeadedProject(e="students"){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+e+"/leaded_project",{headers:t})}createProject(e="students",t,i=null){const n={headers:new r.c({Authorization:"Bearer "+this.auth.jwt})},s=new FormData;return s.append("title",t.title),s.append("image",i),s.append("descr",t.descr),s.append("leader_name",t.leader_name),s.append("cost",t.cost),s.append("first_day_begin",t.first_day_begin),s.append("first_day_end",t.first_day_end),s.append("second_day_begin",t.second_day_begin),s.append("second_day_end",t.second_day_end),s.append("min_grade",t.min_grade),s.append("max_grade",t.max_grade),s.append("min_participants",t.min_participants),s.append("max_participants",t.max_participants),this.http.post(this.backendUrl+e+"/store_project",s,n)}toogleAuthorizedProject(e,t){const i=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+e,{authorized:t},{headers:i}).subscribe(e=>{e&&this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}toogleEditableProject(e,t){const i=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+e,{editable:t},{headers:i}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}putProject(e="students",t,i){const n=new r.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+e+"/update_project",t,{headers:n}).subscribe(t=>{this.alert.alert(t.message),this.router.navigate("students"===e?["Projekttage/Benutzer/"+i]:["Projekttage/Projektleiter/"+i]),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}touchUpProject(e="students",t,i){const n=new r.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+e+"/touch_up_project",t,{headers:n}).subscribe(t=>{this.alert.alert(t.message),this.router.navigate("students"===e?["Projekttage/Benutzer/"+i]:["Projekttage/Projektleiter/"+i]),this.update.emit()},e=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",e.error)})}deleteProject(e){const t=new r.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+e,{headers:t}).subscribe(e=>{this.alert.alert(e.message),this.update.emit()},e=>{this.alert.error("L\xf6schen des Projektes fehlgeschlagen!",e.error)})}}return e.\u0275fac=function(t){return new(t||e)(n.Pb(r.a),n.Pb(s.a),n.Pb(a.a),n.Pb(o.a),n.Pb(d.g))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
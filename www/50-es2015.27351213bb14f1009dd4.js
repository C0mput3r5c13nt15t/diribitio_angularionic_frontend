(window.webpackJsonp=window.webpackJsonp||[]).push([[50,49,51,52],{zbRu:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r("fXoL"),s=r("tk/3"),n=r("18Le"),i=r("YdJ5"),o=r("wxHw"),h=r("tyNb");let c=(()=>{class t{constructor(t,e,r,s,n){this.http=t,this.auth=e,this.alert=r,this.config=s,this.router=n,this.update=new a.n,this.backendUrl=this.config.backend_config.url}getAllProjects(){const t=new s.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects",{headers:t})}getProject(t){const e=new s.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/"+t,{headers:e})}getLittleProject(t){const e=new s.c({"Content-Type":"application/json"});return this.http.get(this.backendUrl+"projects/show_little/"+t,{headers:e})}getProjectAdmin(t){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/project/"+t,{headers:e})}getSelfProject(){const t=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"students/project",{headers:t})}getSelfLeadedProject(t="students"){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+t+"/leaded_project",{headers:e})}createProject(t="students",e,r=null){const a={headers:new s.c({Authorization:"Bearer "+this.auth.jwt})},n=new FormData;return n.append("title",e.title),n.append("image",r),n.append("descr",e.descr),n.append("leader_name",e.leader_name),n.append("cost",e.cost),n.append("first_day_begin",e.first_day_begin),n.append("first_day_end",e.first_day_end),n.append("second_day_begin",e.second_day_begin),n.append("second_day_end",e.second_day_end),n.append("min_grade",e.min_grade),n.append("max_grade",e.max_grade),n.append("min_participants",e.min_participants),n.append("max_participants",e.max_participants),this.http.post(this.backendUrl+t+"/store_project",n,a)}toogleAuthorizedProject(t,e){const r=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+"admins/toogle_authorized/"+t,{authorized:e},{headers:r}).subscribe(t=>{t&&this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}toogleEditableProject(t,e){const r=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.put(this.backendUrl+"admins/toogle_editable/"+t,{editable:e},{headers:r}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}putProject(t="students",e,r){const a=new s.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/update_project",e,{headers:a}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?["Projekttage/Benutzer/"+r]:["Projekttage/Projektleiter/"+r]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}touchUpProject(t="students",e,r){const a=new s.c({Authorization:"Bearer "+this.auth.jwt});this.http.put(this.backendUrl+t+"/touch_up_project",e,{headers:a}).subscribe(e=>{this.alert.alert(e.message),this.router.navigate("students"===t?["Projekttage/Benutzer/"+r]:["Projekttage/Projektleiter/"+r]),this.update.emit()},t=>{this.alert.error("Aktualisierung des Projektes fehlgeschlagen!",t.error)})}deleteProject(t){const e=new s.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"admins/destroy_project/"+t,{headers:e}).subscribe(t=>{this.alert.alert(t.message),this.update.emit()},t=>{this.alert.error("L\xf6schen des Projektes fehlgeschlagen!",t.error)})}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(s.a),a.Pb(n.a),a.Pb(i.a),a.Pb(o.a),a.Pb(h.g))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
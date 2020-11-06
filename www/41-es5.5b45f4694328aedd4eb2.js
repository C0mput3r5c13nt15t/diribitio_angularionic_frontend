!function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[41,40],{kXZ0:function(t,n,a){"use strict";a.d(n,"a",(function(){return h}));var r=a("fXoL"),i=a("tk/3"),o=a("18Le"),s=a("YdJ5"),l=a("wxHw"),u=a("tyNb"),h=function(){var t=function(){function t(e,n,a,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.http=e,this.auth=n,this.alert=a,this.config=i,this.router=o,this.update=new r.n,this.backendUrl=this.config.backend_config.url,this.eventName=this.config.app_config.event_name}var n,a,o;return n=t,(a=[{key:"signUpAdmin",value:function(e,t){var n=this,a=new i.c({"Content-Type":"application/json"});this.http.post(this.backendUrl+"admins/register",e,{headers:a}).subscribe((function(e){e.token&&(n.auth.set_jwt(e.token),n.auth.setLoggedIn(!0),n.router.navigate([n.eventName+"/Anmeldung"])),n.alert.alert("Dein Account wurde erfolgreich erstellt!"),n.sendAuthentificationEmail(),n.update.emit(),t.reset()}),(function(e){n.alert.error("Erstellung des Accounts fehlgeschlagen!",e.error)}))}},{key:"sendAuthentificationEmail",value:function(){var e=this,t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/email/resend",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message)}),(function(t){e.alert.error("Versandt der Verifizierungs E-Mail fehlgeschlagen!",t.error)}))}},{key:"sendAuthentificationEmailSubscribe",value:function(){var e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/email/resend",null,{headers:e})}},{key:"logInAdmin",value:function(e){var t=new i.c({"Content-Type":"application/json"});return this.http.post(this.backendUrl+"admins/login",e,{headers:t})}},{key:"logOutAdmin",value:function(){var e=this,t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/logout",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message),e.auth.setLoggedIn(!1),e.router.navigate([e.eventName+"/Anmeldung"])}),(function(t){e.alert.error("Logout fehlgeschlagen!",t.error)}))}},{key:"getSelfAdmin",value:function(){var e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/self",{headers:e})}},{key:"getAllSignUpEmails",value:function(){var e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"sign_up_emails",{headers:e})}},{key:"createSignUpEmail",value:function(e){var t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"sign_up_emails",e,{headers:t})}},{key:"deleteSignUpEmail",value:function(e){var t=this,n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.delete(this.backendUrl+"sign_up_emails/"+e,{headers:n}).subscribe((function(e){t.alert.alert(e.message),t.update.emit()}),(function(e){t.alert.error("Sperrung der E-Mail fehlgeschlagen!",e.error)}))}},{key:"createSortingProposal",value:function(){var e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.post(this.backendUrl+"admins/create_sorting_proposal",null,{headers:e})}},{key:"requestSortingProposal",value:function(){var e=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});return this.http.get(this.backendUrl+"admins/request_sorting_proposal",{headers:e})}},{key:"editSortingProposal",value:function(e){var t=this,n=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/edit_sorting_proposal",e,{headers:n}).subscribe((function(e){t.alert.alert(e.message)}),(function(e){t.alert.error("Erstellung eines Backups fehlgeschlagen!",e.error)}))}},{key:"applySortingProposal",value:function(){var e=this,t=new i.c({"Content-Type":"application/json",Authorization:"Bearer "+this.auth.jwt});this.http.post(this.backendUrl+"admins/apply_sorting_proposal",null,{headers:t}).subscribe((function(t){e.alert.alert(t.message)}),(function(t){e.alert.error("Erstellung eines Backups fehlgeschlagen!",t.error)}))}}])&&e(n.prototype,a),o&&e(n,o),t}();return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.a),r.Pb(o.a),r.Pb(s.a),r.Pb(l.a),r.Pb(u.g))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();
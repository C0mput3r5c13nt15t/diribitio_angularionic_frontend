(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{gH7Q:function(t,n,o){"use strict";o.r(n),o.d(n,"AdminProjectsPageModule",function(){return m});var i=o("ofXK"),c=o("3Pt+"),e=o("tyNb"),r=o("TEn/"),b=o("fXoL"),s=o("CoJz"),a=o("r4Kj");function u(t,n){if(1&t&&(b.Mb(0,"ion-card-content"),b.Mb(1,"ion-label",7),b.pc(2),b.Lb(),b.Lb()),2&t){const t=b.Wb();b.yb(2),b.rc(" ",t.text," ")}}function p(t,n){if(1&t&&b.Kb(0,"ion-img",12),2&t){const t=b.Wb().$implicit,n=b.Wb();b.dc("src","",n.imageUrl,"",t.image,"")}}function d(t,n){if(1&t&&(b.Mb(0,"p"),b.pc(1),b.Lb()),2&t){const t=b.Wb().$implicit;b.yb(1),b.qc(t.descr)}}function l(t,n){1&t&&(b.Mb(0,"ion-text",13),b.pc(1," (Nicht zugelassen!)"),b.Lb())}const g=function(t){return["./",t]};function f(t,n){if(1&t&&(b.Mb(0,"ion-item",8),b.Mb(1,"ion-avatar",9),b.oc(2,p,1,2,"ion-img",10),b.Lb(),b.Mb(3,"ion-label",7),b.Mb(4,"h2"),b.pc(5),b.Lb(),b.oc(6,d,2,1,"p",5),b.oc(7,l,2,0,"ion-text",11),b.Lb(),b.Lb()),2&t){const t=n.$implicit;b.bc("routerLink",b.gc(6,g,t.id)),b.yb(1),b.bc("hidden",null==t.image||""==t.image),b.yb(1),b.bc("ngIf",""!=t.image&&null!=t.image),b.yb(3),b.qc(t.title),b.yb(1),b.bc("ngIf",1==!!(t.authorized-0)),b.yb(1),b.bc("ngIf",0==!!(t.authorized-0))}}const h=[{path:"",component:(()=>{class t{constructor(t,n,o){this.projectsService=t,this.activatedRoute=n,this.config=o,this.subscriptions=[],this.imageUrl=this.config.backend_config.imageUrl,this.projectsNoun=this.config.app_config.projects_noun,this.eventName=this.config.app_config.event_name}ngOnInit(){this.text=this.config.get_content("admin-projects"),this.activatedRoute.paramMap.subscribe(t=>{this.adminUrl=t.get("AdminName")}),this.getProjects(),this.subscriptions.push(this.projectsService.update.subscribe(()=>this.getProjects()))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}getProjects(){this.projectsService.getAllProjects().subscribe(t=>{this.projects=t.data})}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(s.a),b.Jb(e.a),b.Jb(a.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-admin-projects"]],decls:15,vars:6,consts:[["color","menu"],["color","buttons","slot","start"],["icon","arrow-back",3,"defaultHref"],["color","background"],["color","background",1,"content"],[4,"ngIf"],["color","background",3,"routerLink",4,"ngFor","ngForOf"],["color","text"],["color","background",3,"routerLink"],["slot","start",3,"hidden"],[3,"src",4,"ngIf"],["color","danger",4,"ngIf"],[3,"src"],["color","danger"]],template:function(t,n){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-button",1),b.Kb(3,"ion-back-button",2),b.Lb(),b.Mb(4,"ion-title"),b.pc(5),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",3),b.Mb(7,"ion-card",4),b.Mb(8,"ion-card-header"),b.Mb(9,"ion-card-title"),b.pc(10),b.Lb(),b.Lb(),b.oc(11,u,3,1,"ion-card-content",5),b.Mb(12,"ion-card-content"),b.Mb(13,"ion-list"),b.oc(14,f,8,8,"ion-item",6),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.yb(3),b.dc("defaultHref","",n.eventName,"/Admin/",n.adminUrl,""),b.yb(2),b.qc(n.projectsNoun),b.yb(5),b.qc(n.projectsNoun),b.yb(1),b.bc("ngIf",n.text),b.yb(3),b.bc("ngForOf",n.projects))},directives:[r.t,r.R,r.h,r.e,r.f,r.P,r.p,r.j,r.l,r.n,i.j,r.k,r.B,i.i,r.A,r.x,r.Y,e.h,r.d,r.v,r.N],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[i.b,c.a,r.S,e.k.forChild(h)]]}),t})()}}]);
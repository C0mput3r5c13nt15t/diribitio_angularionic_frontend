(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{QRSX:function(t,i,e){"use strict";e.r(i),e.d(i,"VerifyEmailPageModule",function(){return u});var s=e("ofXK"),n=e("3Pt+"),o=e("tyNb"),c=e("TEn/"),r=e("fXoL"),a=e("r4Kj");const b=[{path:"",component:(()=>{class t{constructor(t,i,e){this.activatedRoute=t,this.router=i,this.config=e,this.subscriptions=[],this.status=200,this.title="",this.descr=""}ngOnInit(){this.mailStatusNotfound=this.config.get_error("mail_status_not_found"),this.activatedRoute.paramMap.subscribe(t=>{if(t.has("Status"))try{this.contents=this.config.get_mail_status_descr("email-verification",Number(this.activatedRoute.snapshot.paramMap.get("Status"))),this.title=this.contents.title,this.descr=this.contents.descr}catch(i){this.title="Es gab einen Fehler.",this.descr=this.mailStatusNotfound}else this.router.navigate([""])})}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(i){return new(i||t)(r.Jb(o.a),r.Jb(o.g),r.Jb(a.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-verify-email"]],decls:12,vars:3,consts:[["color","menu"],["color","background"],["color","background",1,"content"],["color","text"]],template:function(t,i){1&t&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar",0),r.Mb(2,"ion-title"),r.pc(3),r.Lb(),r.Lb(),r.Lb(),r.Mb(4,"ion-content",1),r.Mb(5,"ion-card",2),r.Mb(6,"ion-card-header"),r.Mb(7,"ion-card-title"),r.pc(8),r.Lb(),r.Lb(),r.Mb(9,"ion-card-content"),r.Mb(10,"ion-label",3),r.pc(11),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.yb(3),r.qc(i.title),r.yb(5),r.qc(i.title),r.yb(3),r.rc(" ",i.descr," "))},directives:[c.t,c.R,c.P,c.p,c.j,c.l,c.n,c.k,c.A],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(i){return new(i||t)},imports:[[s.b,n.a,c.S,o.k.forChild(b)]]}),t})()}}]);
//# sourceMappingURL=log-in-verify-email-verify-email-module-es2015.779ef1c6504650657f38.js.map
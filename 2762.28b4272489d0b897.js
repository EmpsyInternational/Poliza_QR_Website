"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2762],{2762:(M,u,r)=>{r.r(u),r.d(u,{RecuperacionPageModule:()=>F});var d=r(177),a=r(4341),l=r(5150),p=r(5260),m=r(467),h=r(9437),b=r(8810),x=r(7669),e=r(3953),v=r(3656),g=r(1626);function P(o,i){if(1&o){const c=e.RV6();e.j41(0,"a",9),e.bIt("click",function(){e.eBV(c);const t=e.XpG();return e.Njj(t.handleResetLinkClick())}),e.EFF(1,"Iniciar sesi\xf3n con el enlace de recuperaci\xf3n"),e.k0s()}}const C=[{path:"",component:(()=>{var o;class i{constructor(n,t,s,f){this.fb=n,this.toastCtrl=t,this.navCtrl=s,this.http=f,this.title="Recuperar Contrase\xf1a"}ngOnInit(){this.buildForm()}buildForm(){this.formForgot=this.fb.group({email:["",[a.k0.required,a.k0.email]],resetLink:[{value:"",disabled:!0}]})}presentToast(n,t){var s=this;return(0,m.A)(function*(){(yield s.toastCtrl.create({message:n,duration:2e3,position:"top",color:t})).present()})()}onSubmit(){this.formForgot.valid?this.http.post(`${x.c.forgot}/forgot`,this.formForgot.value).pipe((0,h.W)(n=>(this.presentToast("El correo no existe, verifica nuevamente","danger"),(0,b.$)(n)))).subscribe(n=>{var t;n.resetLink&&(null===(t=this.formForgot.get("resetLink"))||void 0===t||t.setValue(n.resetLink)),this.presentToast("Correo enviado","success")}):this.presentToast("Introduce el correo","danger")}handleResetLinkClick(){this.navCtrl.navigateRoot(["qrgenerator"])}}return(o=i).\u0275fac=function(n){return new(n||o)(e.rXU(a.ok),e.rXU(l.K_),e.rXU(v.q9),e.rXU(g.Qq))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-recuperacion"]],decls:19,vars:4,consts:[[1,"body"],[1,"container"],["src","../../../assets/img/logo_polizaqui.jpeg","alt","PolizaAqui Logo"],[3,"formGroup"],["type","email","placeholder","Correo electr\xf3nico","formControlName","email",1,"input-field"],["type","text","placeholder","Contrase\xf1a Recuperada","formControlName","resetLink",1,"input-field",3,"disabled"],["type","submit",1,"button",3,"click"],[1,"message"],[3,"click",4,"ngIf"],[3,"click"]],template:function(n,t){if(1&n&&(e.j41(0,"ion-content")(1,"div",0)(2,"div",1),e.nrm(3,"img",2),e.j41(4,"h1"),e.EFF(5),e.k0s(),e.j41(6,"form",3),e.nrm(7,"input",4)(8,"input",5),e.j41(9,"button",6),e.bIt("click",function(){return t.onSubmit()}),e.EFF(10,"Enviar"),e.k0s()(),e.j41(11,"p",7),e.EFF(12,"Introduce tu correo electr\xf3nico y te enviaremos un enlace para restablecer tu contrase\xf1a."),e.k0s(),e.DNE(13,P,2,0,"a",8),e.k0s(),e.j41(14,"footer")(15,"p"),e.EFF(16,"\xa9 2024 PolizaAqui. Todos los derechos reservados. "),e.j41(17,"a"),e.EFF(18,"T\xe9rminos y Condiciones"),e.k0s()()()()()),2&n){let s;e.R7$(5),e.JRh(t.title),e.R7$(),e.Y8G("formGroup",t.formForgot),e.R7$(2),e.Y8G("disabled",t.formForgot.get("resetLink").disabled),e.R7$(5),e.Y8G("ngIf",null==(s=t.formForgot.get("resetLink"))?null:s.enabled)}},dependencies:[d.bT,a.qT,a.me,a.BC,a.cb,l.W9,a.j4,a.JD],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff}.body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;background-color:#f7f8fc;color:#424242;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;margin:0}.container[_ngcontent-%COMP%]{width:90%;max-width:400px;padding:30px;border-radius:15px;box-shadow:0 0 15px #0003;background-color:#fff;text-align:center}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:50%;height:auto;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-family:Chau Philomene One,sans-serif;font-size:24px;margin-top:0;margin-bottom:20px;color:#424242}.input-field[_ngcontent-%COMP%]{width:100%;padding:12px;margin:10px 0;border:1px solid #B7B7B7;border-radius:5px;box-sizing:border-box;font-size:14px;color:#424242;transition:border-color .3s ease,box-shadow .3s ease;background-color:#f9f9f9}.input-field[_ngcontent-%COMP%]::placeholder{color:#424242b3}.input-field[_ngcontent-%COMP%]:hover{border-color:gray}.input-field[_ngcontent-%COMP%]:focus{border-color:#eb018a;box-shadow:0 0 5px #eb018a80;outline:none}.button[_ngcontent-%COMP%]{width:100%;padding:15px;margin:15px 0;border:none;border-radius:5px;background-color:#eb018a;color:#fff;font-size:16px;cursor:pointer;box-shadow:0 0 10px 1px #eb018a66;transition:background-color .3s ease,box-shadow .3s ease}.button[_ngcontent-%COMP%]:hover{background-color:#d60079;box-shadow:0 0 15px 1px #d6007999}.message[_ngcontent-%COMP%]{font-size:14px;color:#424242;margin-top:20px}footer[_ngcontent-%COMP%]{font-size:12px;color:#979797;text-align:center;width:100%;padding:10px;margin-bottom:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#424242;text-decoration:none}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),i})()}];let R=(()=>{var o;class i{}return(o=i).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[p.iI.forChild(C),p.iI]}),i})(),F=(()=>{var o;class i{}return(o=i).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[d.MD,a.YN,l.bv,R,a.X1,g.q1]}),i})()}}]);
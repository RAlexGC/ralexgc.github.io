(function(){"use strict";var e={95:function(e,t,s){var o=s(9242),l=s(3396),a=s(1723);const n={class:"w-full bg-topbar flex justify-between items-center fixed z-50 shadow-md"},r=(0,l._)("div",{class:"px-4"},[(0,l._)("img",{src:a,alt:"Logo_Stella",class:"w-auto h-28"})],-1),i={class:"font-bold text-xl text-red-400 px-6"},d=(0,l.Uk)("Home"),p=(0,l.Uk)(" | "),c=(0,l.Uk)("Pastelero");function u(e,t){const s=(0,l.up)("router-link"),o=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("nav",n,[r,(0,l._)("div",i,[(0,l.Wm)(s,{to:"/"},{default:(0,l.w5)((()=>[d])),_:1}),p,(0,l.Wm)(s,{to:"/baker"},{default:(0,l.w5)((()=>[c])),_:1})])]),(0,l.Wm)(o)],64)}var f=s(89);const b={},m=(0,f.Z)(b,[["render",u]]);var x=m,v=s(678);const w={class:"w-full h-screen pt-28 relative"};function h(e,t,s,o,a,n){const r=(0,l.up)("Menu"),i=(0,l.up)("Toppings"),d=(0,l.up)("Order"),p=(0,l.up)("TopOrder"),c=(0,l.up)("ClientData"),u=(0,l.up)("Info");return(0,l.wg)(),(0,l.iD)("div",w,[(0,l.Wm)(r),(0,l.Wm)(i),(0,l.Wm)(d),(0,l.Wm)(p),(0,l.Wm)(c),(0,l.Wm)(u)])}const g={class:"font-sans bg-red-300 flex flex-col py-2"},_=(0,l._)("p",{class:"font-bold text-xl text-white pt-2 ml-2"},"Bienvenidos a Stella",-1),y={class:"flex justify-center items-center px-4 pt-4"},k=["src"],$=(0,l.uE)('<p class="font-semibold text-lg text-black ml-2 pb-4">Pasteles</p><div class="flex justify-between px-4 text-base font-semibold"><p>Vía Láctea (3 leches)</p><p>$150.00/kg</p></div><div class="flex justify-between px-4 text-base font-semibold"><p>Andrómeda (chocolate)</p><p>$160.00/kg</p></div><div class="flex justify-between px-4 text-base font-semibold"><p>Nube de Magallanes (red velvet)</p><p>$160.00/kg</p></div><div class="flex justify-between px-4 text-base font-semibold"><p>NGC 6753 (vainilla)</p><p>$140.00/kg</p></div>',5);function j(e,t,o,a,n,r){return(0,l.wg)(),(0,l.iD)("div",g,[_,(0,l._)("div",y,[(0,l._)("img",{src:s(2659),alt:"",class:"w-1/2 h-auto shadow-md rounded-md"},null,8,k)]),$])}var F={name:"Menu",props:{}};const C=(0,f.Z)(F,[["render",j]]);var N=C,T=s(7139);const D={class:"py-4 text-gray-500 text-sm mx-auto text-center bg-topbar"},V=(0,l._)("p",null,"Pastelería Stella",-1),z=(0,l._)("span",{class:"text-red-500"},"♥",-1),M=(0,l._)("p",null,"Telefóno: 55-55555555",-1),O=(0,l._)("p",null,"Horarios de atención: L-V 09:00 a 18:00 hrs.",-1),I={class:"flex justify-center space-x-2"},U={class:""},S=(0,l._)("a",{class:"hover:underline text-gray-600",href:"https://twitter.com/tlozot"},"tlozot",-1);function W(e,t,s,o,a,n){return(0,l.wg)(),(0,l.iD)("div",D,[V,z,M,O,(0,l._)("div",I,[(0,l._)("p",U,(0,T.zw)((new Date).getFullYear())+" - by ",1),S])])}var L={name:"Info",props:{}};const Z=(0,f.Z)(L,[["render",W]]);var A=Z;const G={class:"bg-red-300 pb-2"},P={class:"flex justify-center items-center px-4 pt-2 rounded-full"},H=["src"],R=(0,l.uE)('<p class="font-semibold text-lg text-black ml-2 pb-4">Adornos</p><div class="flex justify-between items-center px-4 text-base font-semibold"><div class="flex flex-col"><p>Frutos rojos</p><p class="text-base font-normal">150 g de frutos rojos mixtos</p></div><p>$70.00</p></div><div class="flex justify-between items-center px-4 text-base font-semibold"><div class="flex flex-col"><p>Frutas de temporada</p><p class="text-base font-normal"> 150 g de frutas de temporada a elegir </p></div><p>$50.00</p></div><div class="flex flex-col px-4 text-base font-semibold"><p>Fondant</p><div class="flex justify-between"><p class="text-base font-normal">Color a elegir</p><p>$50.00</p></div><div class="flex justify-between"><p class="text-base font-normal">Figura hecha con fondant</p><p>$80.00</p></div></div><div class="flex justify-between items-center px-4 text-base font-semibold"><div class="flex flex-col"><p>Flores comestibles</p><p class="text-base font-normal"> Floes comestibles a elegir </p></div><p>$80.00</p></div>',5);function E(e,t,o,a,n,r){return(0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("div",P,[(0,l._)("img",{src:s(2012),alt:"",class:"w-1/2 h-auto shadow-md rounded-md"},null,8,H)]),R])}var B={name:"Toppings",props:{}};const Y=(0,f.Z)(B,[["render",E]]);var q=Y;const Q={class:"font-semibold text-base text-black pl-2 py-2 flex flex-col justify-start w-full h-auto bg-red-300 space-y-1"},K=(0,l._)("p",{class:"text-xl py-2 items-center justify-center"},"Pedido",-1),J=(0,l._)("p",null,"¿Qué tipo de pastel quieres?",-1),X=(0,l._)("p",{class:"font-normal text-sm"},"(Puedes combinar hasta dos opciones)",-1),ee=(0,l._)("option",{value:"Vía Láctea (3 leches)"},"Vía Láctea (3 leches)",-1),te=(0,l._)("option",{value:"Andrómeda (chocolate)"},"Andrómeda (chocolate)",-1),se=(0,l._)("option",{value:"Nube de Magallanes (red velvet)"}," Nube de Magallanes (red velvet) ",-1),oe=(0,l._)("option",{value:"NGC 6753 (vainilla)"},"NGC 6753 (vainilla)",-1),le=[ee,te,se,oe],ae=(0,l._)("option",{disable:"",value:""},"Sólo un sabor",-1),ne=(0,l._)("option",{value:"Vía Láctea (3 leches)"},"Vía Láctea (3 leches)",-1),re=(0,l._)("option",{value:"Andrómeda (chocolate)"},"Andrómeda (chocolate)",-1),ie=(0,l._)("option",{value:"Nube de Magallanes (red velvet)"}," Nube de Magallanes (red velvet) ",-1),de=(0,l._)("option",{value:"NGC 6753 (vainilla)"},"NGC 6753 (vainilla)",-1),pe=[ae,ne,re,ie,de];function ce(e,t,s,a,n,r){return(0,l.wg)(),(0,l.iD)("div",Q,[K,J,X,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.sabor1=e),id:"sabor1",class:"w-3/4 rounded-full bg-white"},le,512),[[o.bM,r.sabor1]]),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.sabor2=e),id:"sabor2",class:"w-3/4 rounded-full bg-white"},pe,512),[[o.bM,r.sabor2]])])}var ue={name:"Order",props:{},computed:{sabor1:{get(){return this.$store.state.sabor1},set(e){this.$store.commit("updateSabor1",e)}},sabor2:{get(){return this.$store.state.sabor2},set(e){this.$store.commit("updateSabor2",e)}}}};const fe=(0,f.Z)(ue,[["render",ce]]);var be=fe;const me={class:"font-semibold text-base text-black pl-2 pb-2 w-full h-auto pt-2 bg-red-300 space-y-1"},xe=(0,l._)("div",{class:"flex flex-col"},[(0,l._)("p",null,"¿Qué adornos añadiremos?"),(0,l._)("p",{class:"font-normal text-sm"},"(Selecciona las opciones que desees)")],-1),ve={class:"flex flex-col items-start"},we={class:"space-x-2"},he=(0,l._)("label",{for:"FR"},"Frutos Rojos",-1),ge={class:"space-x-2"},_e=(0,l._)("label",{for:"FT"},"Frutas de temporada",-1),ye={class:"space-x-2"},ke=(0,l._)("label",{for:"F1"},"Fondant (selecciona un color)",-1),$e={class:"space-x-2"},je=(0,l._)("label",{for:"F2"},"Figura de fondant",-1);function Fe(e,t,s,a,n,r){return(0,l.wg)(),(0,l.iD)("div",me,[xe,(0,l._)("div",ve,[(0,l._)("div",we,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"FR",name:"FR","onUpdate:modelValue":t[0]||(t[0]=e=>r.fr=e)},null,512),[[o.e8,r.fr]]),he]),(0,l._)("div",ge,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"FT",name:"FT","onUpdate:modelValue":t[1]||(t[1]=e=>r.ft=e)},null,512),[[o.e8,r.ft]]),_e]),(0,l._)("div",ye,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"F1",name:"F1","onUpdate:modelValue":t[2]||(t[2]=e=>r.f1=e)},null,512),[[o.e8,r.f1]]),ke,(0,l.wy)((0,l._)("input",{type:"color",name:"FC",id:"FC",class:"","onUpdate:modelValue":t[3]||(t[3]=e=>r.f1color=e)},null,512),[[o.nr,r.f1color]])]),(0,l._)("div",$e,[(0,l.wy)((0,l._)("input",{type:"checkbox",id:"F2",name:"F2","onUpdate:modelValue":t[4]||(t[4]=e=>r.f2=e)},null,512),[[o.e8,r.f2]]),je])])])}var Ce={name:"TopOrder",props:{},computed:{f1color:{get(){return this.$store.state.f1color},set(e){this.$store.commit("updateFColor",e)}},fr:{get(){return this.$store.state.fr},set(e){this.$store.commit("updateFR",e)}},ft:{get(){return this.$store.state.ft},set(e){this.$store.commit("updateFT",e)}},f1:{get(){return this.$store.state.f1},set(e){this.$store.commit("updateF1",e)}},f1color:{get(){return this.$store.state.f1color},set(e){this.$store.commit("updateF1C",e)}},f2:{get(){return this.$store.state.f2},set(e){this.$store.commit("updateF2",e)}}}};const Ne=(0,f.Z)(Ce,[["render",Fe]]);var Te=Ne;const De={class:"font-semibold text-base text-black pl-2 pb-2 w-full h-auto pt-2 bg-red-300 space-y-2"},Ve=(0,l._)("p",{class:"text-xl font-bold"},"Ingresa tus datos",-1),ze={class:"flex justify-between px-6"},Me=(0,l._)("label",{for:"Nombre"},"Nombre:",-1),Oe={class:"flex justify-between px-6"},Ie=(0,l._)("label",{for:"Teléfono"},"Teléfono:",-1),Ue={class:"flex justify-between px-6"},Se=(0,l._)("label",{for:"Correo "},"E-mail:",-1),We=(0,l._)("br",null,null,-1),Le={class:"flex flex-col px-6"},Ze=(0,l._)("label",{for:"Descripción"},"Descripción general del pastel:",-1),Ae={class:"flex flex-col justify-center items-center space-y-2"};function Ge(e,t,s,a,n,r){return(0,l.wg)(),(0,l.iD)("div",De,[Ve,(0,l._)("div",ze,[Me,(0,l.wy)((0,l._)("input",{type:"text",name:"Nombre",id:"Nombre",placeholder:"Nombre",class:"rounded-full w-3/4 text-center","onUpdate:modelValue":t[0]||(t[0]=e=>r.nombre=e)},null,512),[[o.nr,r.nombre]])]),(0,l._)("div",Oe,[Ie,(0,l.wy)((0,l._)("input",{type:"number",name:"Teléfono",id:"Teléfono",placeholder:"Número telefónico",class:"rounded-full w-3/4 text-center","onUpdate:modelValue":t[1]||(t[1]=e=>r.tel=e)},null,512),[[o.nr,r.tel]])]),(0,l._)("div",Ue,[Se,We,(0,l.wy)((0,l._)("input",{type:"email",name:"Correo",id:"Correo",placeholder:"correo@ejemplo.com",class:"rounded-full w-3/4 text-center","onUpdate:modelValue":t[2]||(t[2]=e=>r.email=e)},null,512),[[o.nr,r.email]])]),(0,l._)("div",Le,[Ze,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.desc=e),placeholder:"Ingresa una descripción general de tu pastel",class:"rounded-lg px-4 py-2"},null,512),[[o.nr,r.desc]])]),(0,l._)("div",Ae,[(0,l._)("button",{type:"reset",class:"font-semibold text-lg bg-slate-700 text-white rounded-full py-1 px-4",onClick:t[4]||(t[4]=t=>e.$store.commit("reset"))}," Reestablecer "),(0,l._)("button",{type:"submit",class:"font-semibold text-lg bg-slate-700 text-white rounded-full py-1 px-4",onClick:t[5]||(t[5]=t=>e.$store.commit("submit"))}," Enviar ")])])}var Pe={name:"ClientData",props:{},computed:{nombre:{get(){return this.$store.state.nombre},set(e){this.$store.commit("updateNombre",e)}},tel:{get(){return this.$store.state.tel},set(e){this.$store.commit("updateTel",e)}},email:{get(){return this.$store.state.email},set(e){this.$store.commit("updateMail",e)}},desc:{get(){return this.$store.state.desc},set(e){this.$store.commit("updateDesc",e)}}}};const He=(0,f.Z)(Pe,[["render",Ge]]);var Re=He,Ee={name:"HomeView",components:{Menu:N,Info:A,Toppings:q,Order:be,TopOrder:Te,ClientData:Re}};const Be=(0,f.Z)(Ee,[["render",h]]);var Ye=Be;const qe={class:"w-full h-screen pt-28 bg-red-300"};function Qe(e,t,s,o,a,n){const r=(0,l.up)("InvCakes"),i=(0,l.up)("InvToppings"),d=(0,l.up)("CakeDesc"),p=(0,l.up)("Info");return(0,l.wg)(),(0,l.iD)("div",qe,[(0,l.Wm)(r),(0,l.Wm)(i),(0,l.Wm)(d),(0,l.Wm)(p)])}const Ke={class:"font-sans bg-red-300 flex flex-col py-2"},Je=(0,l._)("p",{class:"font-bold text-xl text-white pt-2 ml-2"},"Bienvenido(a)",-1),Xe=(0,l._)("div",{class:"flex justify-center items-center px-4 pt-4"},null,-1),et=(0,l._)("p",{class:"font-semibold text-lg text-black ml-2 pb-4"},"Inventario de pasteles",-1),tt={class:"flex justify-between px-4 text-base font-semibold"},st=(0,l._)("p",null,"Vía Láctea (3 leches)",-1),ot={class:"flex justify-between px-4 text-base font-semibold"},lt=(0,l._)("p",null,"Andrómeda (chocolate)",-1),at={class:"flex justify-between px-4 text-base font-semibold"},nt=(0,l._)("p",null,"Nube de Magallanes (red velvet)",-1),rt={class:"flex justify-between px-4 text-base font-semibold"},it=(0,l._)("p",null,"NGC 6753 (vainilla)",-1);function dt(e,t,s,o,a,n){return(0,l.wg)(),(0,l.iD)("div",Ke,[Je,Xe,et,(0,l._)("div",tt,[st,(0,l._)("p",null,(0,T.zw)(e.$store.state.invs1),1)]),(0,l._)("div",ot,[lt,(0,l._)("p",null,(0,T.zw)(e.$store.state.invs2),1)]),(0,l._)("div",at,[nt,(0,l._)("p",null,(0,T.zw)(e.$store.state.invs3),1)]),(0,l._)("div",rt,[it,(0,l._)("p",null,(0,T.zw)(e.$store.state.invs4),1)])])}var pt={name:"InvCakes",props:{}};const ct=(0,f.Z)(pt,[["render",dt]]);var ut=ct;const ft={class:"font-sans bg-red-300 flex flex-col py-2"},bt=(0,l._)("div",{class:"flex justify-center items-center px-4 pt-4"},[(0,l._)("p",{class:"font-semibold text-lg text-black ml-2 pb-4"}," Inventario de toppings ")],-1),mt={class:"flex justify-between px-4 text-base font-semibold"},xt=(0,l._)("p",null,"Frutos rojos",-1),vt={class:"flex justify-between px-4 text-base font-semibold"},wt=(0,l._)("p",null,"Frutas de temporada",-1),ht={class:"flex justify-between px-4 text-base font-semibold"},gt=(0,l._)("p",null,"Fondant de color",-1),_t={class:"flex justify-between px-4 text-base font-semibold"},yt=(0,l._)("p",null,"Figura de fondant",-1);function kt(e,t,s,o,a,n){return(0,l.wg)(),(0,l.iD)("div",ft,[bt,(0,l._)("div",mt,[xt,(0,l._)("p",null,(0,T.zw)(e.$store.state.invt1),1)]),(0,l._)("div",vt,[wt,(0,l._)("p",null,(0,T.zw)(e.$store.state.invt2),1)]),(0,l._)("div",ht,[gt,(0,l._)("p",null,(0,T.zw)(e.$store.state.invt3),1)]),(0,l._)("div",_t,[yt,(0,l._)("p",null,(0,T.zw)(e.$store.state.invt4),1)])])}var $t={name:"InvToppings",props:{}};const jt=(0,f.Z)($t,[["render",kt]]);var Ft=jt;const Ct={class:"font-sans bg-red-300 flex flex-col py-2 w-full h-auto"},Nt={class:"flex justify-center w-full h-10 px-4 pt-4 space-x-2"},Tt=(0,l._)("p",{class:"font-semibold text-lg text-black ml-2 pb-4"}," Selecciona un pedido: ",-1),Dt=["value"],Vt={class:"space-y-2"},zt=(0,l._)("div",{class:"flex justify-center items-center px-4 pt-4"},[(0,l._)("p",{class:"font-semibold text-lg text-black ml-2 pb-4"}," Información del pedido ")],-1),Mt={class:"flex justify-between px-4 text-base font-semibold"},Ot=(0,l._)("p",null,"Nombre:",-1),It={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},Ut={class:"flex justify-between px-4 text-base font-semibold"},St=(0,l._)("p",null,"Correo:",-1),Wt={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},Lt={class:"flex justify-between px-4 text-base font-semibold"},Zt=(0,l._)("p",null,"Teléfono:",-1),At={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},Gt={class:"flex justify-between px-4 text-base font-semibold"},Pt=(0,l._)("p",null,"Sabor 1:",-1),Ht={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},Rt={class:"flex justify-between px-4 text-base font-semibold"},Et=(0,l._)("p",null,"Sabor 2:",-1),Bt={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},Yt={class:"flex justify-between px-4 text-base font-semibold"},qt=(0,l._)("p",null,"Topping 1:",-1),Qt={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},Kt={class:"flex justify-between px-4 text-base font-semibold"},Jt=(0,l._)("p",null,"Topping 2:",-1),Xt={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},es={class:"flex justify-between px-4 text-base font-semibold"},ts=(0,l._)("p",null,"Topping 3:",-1),ss={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},os={class:"flex justify-between px-4 text-base font-semibold"},ls=(0,l._)("p",null,"Topping 4:",-1),as={class:"bg-white rounded-full w-4/6 text-base font-normal px-4"},ns={class:"flex flex-col px-4 text-base font-semibold items-center"},rs=(0,l._)("p",null,"Descripción:",-1),is={class:"bg-white rounded-md w-5/6 h-auto text-base font-normal p-4"};function ds(e,t,s,a,n,r){return(0,l.wg)(),(0,l.iD)("div",Ct,[(0,l._)("div",Nt,[Tt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.selor=e),id:"Pedidos",class:"bg-white w-1/5 h-auto rounded-full p-1 text-center"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.$store.state.ordersno,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,T.zw)(e),9,Dt)))),128))],512),[[o.bM,r.selor]])]),(0,l._)("div",Vt,[zt,(0,l._)("div",Mt,[Ot,(0,l._)("p",It,(0,T.zw)(n.nombre),1)]),(0,l._)("div",Ut,[St,(0,l._)("p",Wt,(0,T.zw)(n.correo),1)]),(0,l._)("div",Lt,[Zt,(0,l._)("p",At,(0,T.zw)(n.telefono),1)]),(0,l._)("div",Gt,[Pt,(0,l._)("p",Ht,(0,T.zw)(n.sabor1),1)]),(0,l._)("div",Rt,[Et,(0,l._)("p",Bt,(0,T.zw)(n.sabor2),1)]),(0,l._)("div",Yt,[qt,(0,l._)("p",Qt,(0,T.zw)(n.topping1),1)]),(0,l._)("div",Kt,[Jt,(0,l._)("p",Xt,(0,T.zw)(n.topping2),1)]),(0,l._)("div",es,[ts,(0,l._)("p",ss,(0,T.zw)(n.topping3),1)]),(0,l._)("div",os,[ls,(0,l._)("p",as,(0,T.zw)(n.topping4),1)]),(0,l._)("div",ns,[rs,(0,l._)("p",is,(0,T.zw)(n.desc),1)])])])}var ps={name:"CakeDesc",props:{},data(){return{nombre:"",correo:"",telefono:"",sabor1:"",sabor2:"",topping1:"",topping2:"",topping3:"",topping4:"",desc:"",sel:""}},computed:{selor:{get(){return this.$store.state.selor},set(e){this.$store.commit("updateSO",e),this.nombre=this.$store.state.orders[e-1].nom,this.correo=this.$store.state.orders[e-1].correo,this.telefono=this.$store.state.orders[e-1].telefono,this.sabor1=this.$store.state.orders[e-1].psabor,this.sabor2=this.$store.state.orders[e-1].ssabor,this.topping1=this.$store.state.orders[e-1].top1,this.topping2=this.$store.state.orders[e-1].top2,this.topping3=this.$store.state.orders[e-1].top3,this.topping4=this.$store.state.orders[e-1].top4,this.desc=this.$store.state.orders[e-1].d}}}};const cs=(0,f.Z)(ps,[["render",ds]]);var us=cs,fs={name:"BakerView",components:{Info:A,InvCakes:ut,InvToppings:Ft,CakeDesc:us}};const bs=(0,f.Z)(fs,[["render",Qe]]);var ms=bs;const xs=[{path:"/",name:"home",component:Ye},{path:"/baker",name:"baker",component:ms}],vs=(0,v.p7)({history:(0,v.r5)(),routes:xs});var ws=vs,hs=s(65),gs=(0,hs.MT)({state:{sabor1:" Hola ",sabor2:" Holi ",fr:"",ft:"",f1:"",f1color:"",f2:"",nombre:"",tel:"",email:"",desc:"",invs1:100,invs2:100,invs3:100,invs4:100,invt1:100,invt2:100,invt3:100,invt4:100,s1:!1,s2:!1,s3:!1,s4:!1,t1:!1,t2:!1,t3:!1,t4:!1,numorder:0,order:{no:0,nom:"",correo:"",telefono:"",psabor:"",ssabor:"",top1:"",top2:"",top3:"",top4:"",d:""},orders:[],ordersno:[],selor:0},getters:{},mutations:{updateSabor1(e,t){switch(e.sabor1=t,t){case"Vía Láctea (3 leches)":e.s1=!0;break;case"Andrómeda (chocolate)":e.s2=!0;break;case"Nube de Magallanes (red velvet)":e.s3=!0;break;case"NGC 6753 (vainilla)":e.s4=!0;break;default:break}},updateSabor2(e,t){switch(e.sabor2=t,t){case"Vía Láctea (3 leches)":e.s1=!0;break;case"Andrómeda (chocolate)":e.s2=!0;break;case"Nube de Magallanes (red velvet)":e.s3=!0;break;case"NGC 6753 (vainilla)":e.s4=!0;break;default:break}},updateFColor(e,t){e.f1color=t},updateNombre(e,t){e.nombre=t},updateTel(e,t){e.tel=t},updateMail(e,t){e.email=t},updateDesc(e,t){e.desc=t},updateFR(e,t){e.fr=t,e.t1=!0},updateFT(e,t){e.ft=t,e.t2=!0},updateF1(e,t){e.f1=t,e.t3=!0},updateF1C(e,t){e.f1color=t},updateF2(e,t){e.f2=t,e.t4=!0},updateSO(e,t){e.selor=t},reset(e){e.sabor1=null,e.sabor2=null,e.fr=null,e.ft=null,e.f1=null,e.f1color=null,e.f2=null,e.nombre=null,e.tel=null,e.email=null,e.desc=null,e.test=null,e.s1=!1,e.s2=!1,e.s3=!1,e.s4=!1,e.t1=!1,e.t2=!1,e.t3=!1,e.t4=!1},submit(e){switch(e.order.no++,e.order.nom=e.nombre,e.order.correo=e.email,e.order.telefono=e.tel,e.order.psabor=e.sabor1,e.order.ssabor=e.sabor2,e.order.d=e.desc,e.sabor1){case"Vía Láctea (3 leches)":e.invs1--;break;case"Andrómeda (chocolate)":e.invs2--;break;case"Nube de Magallanes (red velvet)":e.invs3--;break;case"NGC 6753 (vainilla)":e.invs4--;break;default:break}switch(e.sabor2){case"Vía Láctea (3 leches)":e.invs1--;break;case"Andrómeda (chocolate)":e.invs2--;break;case"Nube de Magallanes (red velvet)":e.invs3--;break;case"NGC 6753 (vainilla)":e.invs4--;break;default:break}1==e.t1&&(e.invt1--,e.order.top1="Frutos rojos"),1==e.t2&&(e.invt2--,e.order.top2="Frutas de temporada"),1==e.t3&&(e.invt3--,e.order.top3="Fondant de color"),1==e.t4&&(e.invt4--,e.order.top4="Figura de fondant"),e.orders.push(e.order),e.ordersno.push(e.order.no),console.log(e.order),console.log(e.orders),e.sabor1=null,e.sabor2=null,e.fr=null,e.ft=null,e.f1=null,e.f1color=null,e.f2=null,e.nombre=null,e.tel=null,e.email=null,e.desc=null,e.test=null,e.s1=!1,e.s2=!1,e.s3=!1,e.s4=!1,e.t1=!1,e.t2=!1,e.t3=!1,e.t4=!1,e.order={no:e.order.no,nom:"",correo:"",telefono:"",psabor:"",ssabor:"",top1:"",top2:"",top3:"",top4:"",d:""},alert("¡Pedido enviado exitosamente!")}},actions:{submit:(e,t)=>{e.commit("submit",t)}},modules:{}});(0,o.ri)(x).use(gs).use(ws).mount("#app")},2659:function(e,t,s){e.exports=s.p+"img/cake.e65644c0.jpg"},2012:function(e,t,s){e.exports=s.p+"img/cake2.67d536ff.jpg"},1723:function(e,t,s){e.exports=s.p+"img/logo_stella.4ee71696.png"}},t={};function s(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,o,l,a){if(!o){var n=1/0;for(p=0;p<e.length;p++){o=e[p][0],l=e[p][1],a=e[p][2];for(var r=!0,i=0;i<o.length;i++)(!1&a||n>=a)&&Object.keys(s.O).every((function(e){return s.O[e](o[i])}))?o.splice(i--,1):(r=!1,a<n&&(n=a));if(r){e.splice(p--,1);var d=l();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,l,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,a,n=o[0],r=o[1],i=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(l in r)s.o(r,l)&&(s.m[l]=r[l]);if(i)var p=i(s)}for(t&&t(o);d<n.length;d++)a=n[d],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(p)},o=self["webpackChunkbakery"]=self["webpackChunkbakery"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(95)}));o=s.O(o)})();
//# sourceMappingURL=app.2e5b7ecf.js.map
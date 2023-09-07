(function(){"use strict";var e={464:function(e,n,o){var t=o(369),h=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view"),e.isHomeRoute?e._e():n("div",{staticStyle:{width:"100px",height:"30px","line-height":"30px",margin:"40px auto",cursor:"pointer","background-color":"red",color:"#fff"},on:{click:e.redirectToHome}},[e._v("돌아가기")]),n("div",{staticClass:"reset",on:{click:function(n){e.showReset=!e.showReset}}},[e._v("#")]),e.showReset?n("div",{staticClass:"reset-btn"},[n("p",{on:{click:e.complete}},[e._v("Reset")]),n("p",{on:{click:e.goEmail}},[e._v("send Email")])]):e._e()],1)},i=[],s={name:"App",data(){return{showReset:!1}},computed:{isHomeRoute(){return"/"===this.$route.path}},methods:{goEmail(){"/"==this.$route.path&&(window.location="/email")},redirectToHome(){window.location="/"},complete(){this.showReset=!1,localStorage.removeItem("phones"),alert("초기화 되었습니다.")}}},p=s,r=o(1),a=(0,r.Z)(p,h,i,!1,null,null,null),l=a.exports,c=o(631),u=function(){var e=this,n=e._self._c;return n("div",{staticClass:"home-container"},[e._m(0),n("div",{staticClass:"phone-input"},[e._m(1),n("h2",{staticStyle:{padding:"0px 0px 20px 0px"}},[e._v("정기후원자 인증")]),n("label",{staticClass:"phone-label",attrs:{for:"phone"}},[e._v("후원자님의 휴대폰 번호")]),n("div",{staticClass:"input-button-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPhoneNumber,expression:"inputPhoneNumber"}],attrs:{type:"tel",id:"phone",placeholder:"숫자만 입력해주세요"},domProps:{value:e.inputPhoneNumber},on:{input:[function(n){n.target.composing||(e.inputPhoneNumber=n.target.value)},e.handleInput]}}),n("button",{on:{click:function(n){e.showConfirmationDialog=!0}}},[e._v("조회")])]),e._m(2),e.showConfirmationDialog?n("div",{staticClass:"confirmation-dialog"},[e.showErrorMessage?e._e():n("p",[e._v("입력하신 번호가 맞나요?")]),e.showErrorMessage?e._e():n("p",{staticStyle:{height:"30px"}},[e._v("( "+e._s(e.formatPhoneNumber(e.inputPhoneNumber))+" )")]),e.showErrorMessage?n("div",{staticClass:"error-message",staticStyle:{height:"30px"}},[n("p",[e._v("번호를 다시 확인해주세요")])]):e._e(),n("div",{staticClass:"confirmation-buttons"},[n("button",{on:{click:e.cancelFind}},[e._v("취소")]),n("button",{on:{click:e.findPhone}},[e._v("확인")])])]):e._e()])])},d=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"logo-container"},[n("img",{attrs:{src:"https://msf.or.kr/sites/all/themes/msfkorea/images/logo.svg",alt:"로고 이미지"}})])},function(){var e=this,n=e._self._c;return n("h2",[e._v("국경없는의사회 한국"),n("br")])},function(){var e=this,n=e._self._c;return n("div",{staticStyle:{"line-height":"20px","margin-top":"20px","font-size":"12px",width:"100%",position:"fixed",bottom:"30px",left:"50%",transform:"translateX(-50%)"}},[n("p",[e._v(" ● 입력하신 번호는 후원자 확인 외 용도로 사용되지 않으며,")]),n("p",[e._v("조회 내역은 행사 종료 후 즉시 파기 예정입니다.")])])}],m=JSON.parse('[{"phone":"01062302643"},{"phone":"01050195607"},{"phone":"01043372579"},{"phone":"01091645170"},{"phone":"01026283460"},{"phone":"01036793785"},{"phone":"01053825666"},{"phone":"01035634970"},{"phone":"01049337489"},{"phone":"01033174050"},{"phone":"01072442509"},{"phone":"01041486639"},{"phone":"01066385716"},{"phone":"01063570533"},{"phone":"01098149303"},{"phone":"01063109465"},{"phone":"01035713076"},{"phone":"01090331731"},{"phone":"01037698183"},{"phone":"01045425865"},{"phone":"01035992026"},{"phone":"01047506412"},{"phone":"01089410431"},{"phone":"01094397060"},{"phone":"01089771332"},{"phone":"01083894950"},{"phone":"01023563539"},{"phone":"01080114516"},{"phone":"01046121183"},{"phone":"01071110563"},{"phone":"01031853040"},{"phone":"01025864365"},{"phone":"01025393857"},{"phone":"01092193657"},{"phone":"01039761073"},{"phone":"01050642354"},{"phone":"01043901544"},{"phone":"01099634614"},{"phone":"01038117409"},{"phone":"01064833950"},{"phone":"01035603500"},{"phone":"01082482585"},{"phone":"01037349084"},{"phone":"01092418838"},{"phone":"01043130566"},{"phone":"01076889657"},{"phone":"01024863262"},{"phone":"01099923449"},{"phone":"01045356586"},{"phone":"01046012033"},{"phone":"01089256460"},{"phone":"01054181170"},{"phone":"01040640350"},{"phone":"01063423428"},{"phone":"01085930824"},{"phone":"01083390930"},{"phone":"01023538591"},{"phone":"01080749786"},{"phone":"01085240967"},{"phone":"01092375417"},{"phone":"01072935588"},{"phone":"01053008005"},{"phone":"01062301763"},{"phone":"01050909476"},{"phone":"01033877002"},{"phone":"01044709927"},{"phone":"01092496542"},{"phone":"01066209030"},{"phone":"01087085694"},{"phone":"01022900604"},{"phone":"01075335923"},{"phone":"01051605261"},{"phone":"01088772468"},{"phone":"01033556027"},{"phone":"01036121597"},{"phone":"01030276030"},{"phone":"01097700366"},{"phone":"01035970452"},{"phone":"01093889440"},{"phone":"01027278865"},{"phone":"01076365038"},{"phone":"01020354729"},{"phone":"01083846954"},{"phone":"01093248478"},{"phone":"01090942427"},{"phone":"01093808601"},{"phone":"01030289053"},{"phone":"01087359005"},{"phone":"01090239846"},{"phone":"01024380102"},{"phone":"01063526722"},{"phone":"01092241171"},{"phone":"01031767627"},{"phone":"01055604083"},{"phone":"01088879996"},{"phone":"01036801181"},{"phone":"01023208703"},{"phone":"01025226652"},{"phone":"01093092237"},{"phone":"01050294752"},{"phone":"01088525235"},{"phone":"01096993387"},{"phone":"01074132912"},{"phone":"01087245079"},{"phone":"01057749568"},{"phone":"01047352244"},{"phone":"01051171247"},{"phone":"01038994776"},{"phone":"01076566042"},{"phone":"01021393275"},{"phone":"01054624169"},{"phone":"01063345914"},{"phone":"01054267022"},{"phone":"01054002407"},{"phone":"01034584772"},{"phone":"01034035034"},{"phone":"01057411998"},{"phone":"01042444654"},{"phone":"01049340389"},{"phone":"01090999113"},{"phone":"01031917804"},{"phone":"01063806706"},{"phone":"01031800013"},{"phone":"01086962971"},{"phone":"01086631318"},{"phone":"01026106932"},{"phone":"01045357198"},{"phone":"01056015170"},{"phone":"01040202965"},{"phone":"01027793605"},{"phone":"01035197817"},{"phone":"01063839004"},{"phone":"01038280375"},{"phone":"01084896733"},{"phone":"01025517215"},{"phone":"01053051885"},{"phone":"01095285840"},{"phone":"01068773241"},{"phone":"01048098999"},{"phone":"01082778770"},{"phone":"01035148768"},{"phone":"01090243325"},{"phone":"01085673656"},{"phone":"01040483016"},{"phone":"01082839365"},{"phone":"01035776572"},{"phone":"01086621130"},{"phone":"01058473332"},{"phone":"01066220585"},{"phone":"01041282211"},{"phone":"01056789443"},{"phone":"01057774476"},{"phone":"01082441586"},{"phone":"01054135506"},{"phone":"01092210421"},{"phone":"01032025577"},{"phone":"01098875326"},{"phone":"01035252743"},{"phone":"01075179983"},{"phone":"01087292823"},{"phone":"01040884260"},{"phone":"01083810035"},{"phone":"01092141381"},{"phone":"01087139326"},{"phone":"01088731682"},{"phone":"01026213200"},{"phone":"01046934412"},{"phone":"01097677929"},{"phone":"01033950300"},{"phone":"01027266648"},{"phone":"01027270909"},{"phone":"01066531722"},{"phone":"01083993362"},{"phone":"01054072593"},{"phone":"01045145759"},{"phone":"01027446935"},{"phone":"01062382105"},{"phone":"01096114874"},{"phone":"01082446599"},{"phone":"01027114417"},{"phone":"01023361139"},{"phone":"01038574548"},{"phone":"01093317052"},{"phone":"01022985462"},{"phone":"01036736311"},{"phone":"01065037801"},{"phone":"01057139088"},{"phone":"01022574970"},{"phone":"01041662490"},{"phone":"01046588136"},{"phone":"01040653045"},{"phone":"01086991202"},{"phone":"01067929908"},{"phone":"01033159544"},{"phone":"01096707899"},{"phone":"01093901125"},{"phone":"01096770798"},{"phone":"01052338426"},{"phone":"01038493990"},{"phone":"01025597806"},{"phone":"01050493973"},{"phone":"01033132601"}]'),f={data(){return{inputPhoneNumber:"",list:m,showConfirmationDialog:!1,showErrorMessage:!1}},methods:{handleInput(){this.inputPhoneNumber=this.inputPhoneNumber.replace(/[^0-9]/g,""),this.showErrorMessage=!1},findPhone(){const e=this.inputPhoneNumber;if(11!==e.length)return void(this.showErrorMessage=!0);const n=this.list.find((n=>n.phone===e));n?this.$router.push(`/check?phone=${encodeURIComponent(n.phone)}`):this.$router.push("/fail")},cancelFind(){this.inputPhoneNumber="",this.showConfirmationDialog=!1,this.showErrorMessage=!1},formatPhoneNumber(e){const n=(""+e).replace(/\D/g,""),o=n.match(/^(\d{3})(\d{4})(\d{4})$/);return o?o[1]+" "+o[2]+" "+o[3]:e}}},v=f,g=(0,r.Z)(v,u,d,!1,null,"f8d5e0c0",null),_=g.exports,x=function(){var e=this,n=e._self._c;return n("div",{staticClass:"result-container"},[n("div",{staticClass:"message"},[this.$route.query.phone?n("h3",[e._v("후원자님 안녕하세요")]):e._e(),e._m(0)]),e.duplicate?n("Alert"):e._e(),n("FireworksCanvas")],1)},w=[function(){var e=this,n=e._self._c;return n("p",{staticStyle:{"margin-top":"20px","font-size":"15px","letter-spacing":"-1px"}},[e._v("사진전에 와주셔서 감사합니다."),n("br"),e._v(" 직원에게 화면을 보여주신 후 "),n("br"),e._v(" 커피쿠폰을 수령하세요.")])}],C=function(){var e=this,n=e._self._c;return n("div",[e.duplicate?n("div",{staticClass:"alert-backdrop"}):e._e(),e.duplicate?n("div",{staticClass:"alert-container"},[n("div",{staticClass:"alert-content"},[n("p",[e._v("이미 조회한 번호입니다.")]),n("button",{on:{click:e.goBack}},[e._v("돌아가기")])])]):e._e()])},b=[],y={methods:{goBack(){this.$router.push("/")}},data(){return{duplicate:!1}},mounted(){const e=localStorage.getItem("phones"),n=this.$route.query.phone;if(n){let o=e?JSON.parse(e):[];o.includes(n)?this.duplicate=!0:(o.push(n),localStorage.setItem("phones",JSON.stringify(o)))}}},P=y,N=(0,r.Z)(P,C,b,!1,null,"78b631fe",null),k=N.exports,S=function(){var e=this,n=e._self._c;return n("canvas",{ref:"colorfulFlowerfallCanvas",staticClass:"colorful-flowerfall-canvas"})},z=[],M={mounted(){this.setupCanvas(),this.startColorfulFlowerfall()},methods:{setupCanvas(){this.canvas=this.$refs.colorfulFlowerfallCanvas,this.ctx=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},startColorfulFlowerfall(){const e=[],n=["circle","triangle","square","diamond","ellipse"],o=5e3;let t=Date.now();const h=()=>{const e="0123456789ABCDEF";let n="#";for(let o=0;o<6;o++)n+=e[Math.floor(16*Math.random())];return n},i=()=>{const o=n[Math.floor(Math.random()*n.length)],t={x:Math.random()*this.canvas.width,y:-10*Math.random(),size:10*Math.random()+5,speed:4*Math.random()+1,color:h(),type:o};e.push(t)},s=()=>{const n=Date.now(),h=n-t;if(h<o)for(let o=e.length-1;o>=0;o--){const n=e[o];n.y+=n.speed,n.y>=this.canvas.height&&e.splice(o,1)}else e.length=0},p=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),e.forEach((e=>{this.ctx.beginPath(),"circle"===e.type?this.ctx.arc(e.x,e.y,e.size,0,2*Math.PI):"triangle"===e.type?(this.ctx.moveTo(e.x,e.y-e.size),this.ctx.lineTo(e.x-e.size,e.y+e.size),this.ctx.lineTo(e.x+e.size,e.y+e.size)):"square"===e.type?this.ctx.rect(e.x-e.size,e.y-e.size,2*e.size,2*e.size):"diamond"===e.type?(this.ctx.moveTo(e.x,e.y-e.size),this.ctx.lineTo(e.x-e.size,e.y),this.ctx.lineTo(e.x,e.y+e.size),this.ctx.lineTo(e.x+e.size,e.y)):"ellipse"===e.type&&this.ctx.ellipse(e.x,e.y,2*e.size,e.size,0,0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=e.color,this.ctx.fill()}))};setInterval((()=>{i()}),100);const r=()=>{s(),p(),requestAnimationFrame(r)};r()}}},O=M,Z=(0,r.Z)(O,S,z,!1,null,"ed8f5c4a",null),F=Z.exports,E={components:{Alert:k,FireworksCanvas:F},data(){return{duplicate:!1}},mounted(){const e=localStorage.getItem("phones"),n=this.$route.query.phone;if(n){let o=e?JSON.parse(e):[];o.includes(n)?this.duplicate=!0:(o.push(n),localStorage.setItem("phones",JSON.stringify(o)))}}},R=E,T=(0,r.Z)(R,x,w,!1,null,"694ad903",null),$=T.exports,I=function(){var e=this,n=e._self._c;return n("div",{staticClass:"fail-container"},[n("div",{staticClass:"fail-icon"},[n("svg",{attrs:{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M32 6.66663C18.1531 6.66663 6.66663 18.1531 6.66663 32C6.66663 45.8469 18.1531 57.3333 32 57.3333C45.8469 57.3333 57.3333 45.8469 57.3333 32C57.3333 18.1531 45.8469 6.66663 32 6.66663ZM32 54.6666C19.215 54.6666 8.66663 44.1182 8.66663 32C8.66663 19.215 19.215 8.66663 32 8.66663C44.785 8.66663 55.3333 19.215 55.3333 32C55.3333 44.1182 44.785 54.6666 32 54.6666Z",fill:"#FF4C4C"}}),n("path",{attrs:{d:"M40.9287 23.2269C40.5921 22.8902 40.0556 22.8902 39.719 23.2269L31.9999 30.9457L24.2809 23.2267C23.9442 22.8901 23.4077 22.8901 23.0711 23.2267C22.7345 23.5633 22.7345 24.0998 23.0711 24.4364L31.7901 32.1554L23.0711 39.8743C22.7345 40.2109 22.7345 40.7474 23.0711 41.084C23.235 41.2479 23.437 41.3333 23.6389 41.3333C23.8409 41.3333 24.0429 41.2479 24.2068 41.084L31.9258 33.365L39.6448 41.084C39.8087 41.2479 40.0107 41.3333 40.2127 41.3333C40.4146 41.3333 40.6166 41.2479 40.7805 41.084C41.1171 40.7474 41.1171 40.2109 40.7805 39.8743L32.0615 32.1554L40.7805 24.4364C41.1171 24.0998 41.1171 23.5633 40.9287 23.2269Z",fill:"#FF4C4C"}})])]),n("h1",{staticClass:"fail-title"},[e._v("NOT FOUND")]),n("div",{staticClass:"fail-message"},[e._v("입력하신 번호로 조회되는 내역이 없습니다.")])])},D=[],j={data(){return{}},created(){},methods:{}},q=j,L=(0,r.Z)(q,I,D,!1,null,"05381f16",null),H=L.exports,A=function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("check")]),n("div",[n("label",{attrs:{for:"phone"}},[e._v("핸드폰 번호:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPhoneNumber,expression:"inputPhoneNumber"}],attrs:{type:"text",id:"phone"},domProps:{value:e.inputPhoneNumber},on:{input:function(n){n.target.composing||(e.inputPhoneNumber=n.target.value)}}}),n("button",{on:{click:e.findName}},[e._v("조회")])]),e.foundName?n("p",[e._v("일치하는 이름: "+e._s(e.foundName))]):n("p",[e._v("해당 핸드폰 번호에 대한 이름을 찾을 수 없습니다.")])])},J=[],B={data(){return{list:[],inputPhoneNumber:"",foundName:null}},created(){this.list=m},methods:{findName(){const e=this.inputPhoneNumber,n=this.list.find((n=>n.phone===e));this.foundName=n?n.name:null}}},U=B,K=(0,r.Z)(U,A,J,!1,null,null,null),G=K.exports,V=function(){var e=this,n=e._self._c;return n("div",[n("h1",{staticStyle:{padding:"20px 0"}},[e._v("Visitor List Distribution")]),n("button",{staticStyle:{margin:"10px 0",width:"200px",height:"60px","background-color":"skyblue",cursor:"pointer","font-size":"20px"},on:{click:e.sendRequestEmail}},[e._v(" send ")])])},W=[],X={created(){},methods:{sendRequestEmail(){const e=new Date;e.setHours(e.getHours()+0);const n={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"},o=e.toLocaleString("ko-KR",n),t=localStorage.getItem("phones");let h="";if(null!=t){const e=JSON.parse(t);h=e.map((e=>`[ ${e} ]`))}else h="방문객 정보가 없습니다.";const i={from_name:"MSF HOUSE",to_name:"MSF KOREA",message:h,form_time:o};emailjs.send("service_b8py2h6","template_gj3zzmp",i,"qqo-gvFtkmGuoCltY").then((e=>{console.log(e),alert("발송 성공")}),(e=>{console.log(e),alert("발송 실패")}))}}},Y=X,Q=(0,r.Z)(Y,V,W,!1,null,null,null),ee=Q.exports;t.ZP.use(c.ZP);var ne=new c.ZP({mode:"history",routes:[{path:"/",name:"Home",component:_},{path:"/check",name:"check",component:$},{path:"/fail",name:"fail",component:H},{path:"/error",name:"error",component:G},{path:"/email",name:"email",component:ee}]}),oe=o(822);t.ZP.use(oe.ZP);var te=new oe.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});t.ZP.config.productionTip=!1,new t.ZP({router:ne,store:te,render:e=>e(l)}).$mount("#app")}},n={};function o(t){var h=n[t];if(void 0!==h)return h.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,h,i){if(!t){var s=1/0;for(l=0;l<e.length;l++){t=e[l][0],h=e[l][1],i=e[l][2];for(var p=!0,r=0;r<t.length;r++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[r])}))?t.splice(r--,1):(p=!1,i<s&&(s=i));if(p){e.splice(l--,1);var a=h();void 0!==a&&(n=a)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,h,i]}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var h,i,s=t[0],p=t[1],r=t[2],a=0;if(s.some((function(n){return 0!==e[n]}))){for(h in p)o.o(p,h)&&(o.m[h]=p[h]);if(r)var l=r(o)}for(n&&n(t);a<s.length;a++)i=s[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},t=self["webpackChunkproject"]=self["webpackChunkproject"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(464)}));t=o.O(t)})();
//# sourceMappingURL=app.f28d9638.js.map
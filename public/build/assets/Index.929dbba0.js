import{C as v,o as n,c as I,l as S,f as s,t as w,L as $,A as o,k as u,a as e,w as m,g as b,H as N,F as A,D as x}from"./app.8209e439.js";import{m as V}from"./modalidades.849f8ea2.js";import{N as k,F as q}from"./Footer.61b0a700.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";const T="/build/assets/copo.d56d907c.jpg",j="/build/assets/esporte.57a1b0c1.jpg";var g=v({name:"VueWriter",props:{array:{type:Array,required:!0},eraseSpeed:{type:Number,default:100},typeSpeed:{type:Number,default:200},delay:{type:Number,default:2e3},intervals:{type:Number,default:500},start:{type:Number,default:0},caret:{type:String,default:"cursor"},iterations:{type:Number,default:0}},data:function(){return{typeValue:"",count:0,typeStatus:!1,arrayIndex:0,charIndex:0}},methods:{typewriter:function(){var a=0;if(this.charIndex<this.array[this.arrayIndex].length)this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.array[this.arrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typewriter,this.typeSpeed);else{if(this.count+=1,this.count===this.array.length&&(a+=1,a===this.iterations))return this.typeStatus=!1;this.typeStatus=!1,setTimeout(this.eraser,this.delay)}},eraser:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.array[this.arrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraser,this.eraseSpeed)):(this.typeStatus=!1,this.arrayIndex+=1,this.arrayIndex>=this.array.length&&(this.arrayIndex=0),setTimeout(this.typewriter,this.typeSpeed+this.intervals))}},created:function(){setTimeout(this.typewriter,this.start)}}),F={class:"is-typed"},H={class:"typed"};function C(t,a,l,c,r,p){return n(),I("div",F,[S(t.$slots,"default"),s("span",H,w(t.typeValue),1),s("span",{class:t.caret+" "+{typing:t.typeStatus}},"\xA0",2)])}g.render=C;var L=function(){var t=g;return t.install=function(a){a.component("VueWriter",t)},t}();const M=L;const W={components:{Link:$,VueWriter:M},data(){return{headerImg:j}}},B={id:"header",class:"bg-amber-500 bg-img"},D={class:"max-w-screen-xl mx-auto"},E={class:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 py-8 md:py-16"},O={class:""},z=e("p",{class:"text-lg text-white mb-8"}," A. A. A. S. I. SISTEM\xC1TICOS - Associa\xE7\xE3o Atl\xE9tica Acad\xEAmica de Sistemas de Informa\xE7\xE3o. Investindo no esporte universit\xE1rio desde 2019. ",-1),G=["src"];function Q(t,a,l,c,r,p){const i=o("VueWriter"),d=o("Link");return n(),u("section",B,[e("div",D,[e("div",E,[e("div",O,[s(i,{class:"text-5xl md:text-7xl text-white font-bold mb-8",array:["#GoCapi"]}),z,s(d,{type:"button",href:"/sobre",class:"px-6 py-3 bg-blue-900 hover:bg-blue-800 hover:text-white hover:shadow-lg transition-all ease-out rounded font-bold text-gray-100 text-lg"},{default:m(()=>[b("Conhe\xE7a mais!")]),_:1})]),e("div",null,[e("img",{class:"aspect-video object-fit rounded shadow-lg",src:r.headerImg,alt:""},null,8,G)])])])])}const R=h(W,[["render",Q]]),J={components:{Head:N,Nav:k,Header:R,Footer:q},data(){return{modalidadesImg:V,copoImg:T}}},K={class:"bg-white"},P={class:"max-w-screen-xl mx-auto"},U={id:"sobre"},X={class:"grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16"},Y={class:"bg-white"},Z=e("span",{class:"text-amber-600 text-lg"},"Sobre",-1),ee=e("h1",{class:"text-5xl text-blue-900 font-bold mb-8"},"Quem somos",-1),te=e("p",{class:"text-xl text-blue-900 mb-8"}," Acreditamos no poder de transforma\xE7\xE3o do esporte e na sua import\xE2ncia para uma vida saud\xE1vel. Aqui, todos s\xE3o bem-vindos! ",-1),se=e("a",{type:"button",href:"#",class:"px-6 py-3 rounded border border-blue-900 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all ease-out font-bold text-blue-900 text-lg"},"Nossas conquistas",-1),ae=["src"],oe={class:"bg-gray-100"},re={class:"max-w-screen-xl mx-auto"},ie={id:"modalidades"},de={class:"grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16"},ne=["src"],le=x('<div><span class="text-amber-600 text-lg">Modalidades</span><h1 class="text-5xl text-blue-900 font-bold mb-8"> Fomentando o esporte </h1><p class="text-xl text-blue-900 mb-8"> Mais do que um grupo formado para fomentar o esporte, as Atl\xE9ticas s\xE3o sin\xF4nimo de intera\xE7\xE3o, divers\xE3o e solidariedade. </p><ul class="list-inside text-xl text-blue-900 space-y-4 mb-8"><li><span class="px-3 rounded-full bg-amber-500 mr-4"></span> Treinos gratuitos </li><li><span class="px-3 rounded-full bg-amber-500 mr-4"></span> Integra\xE7\xE3o social </li></ul><a type="button" href="#" class="px-6 py-3 bg-blue-900 rounded font-bold text-amber-300 text-lg mr-6">Saiba mais!</a><a type="button" href="#" class="px-6 py-3 rounded border border-blue-900 font-bold text-blue-900 text-lg">Nossas conquistas</a></div>',1),ce=x('<div class="bg-white"><div class="max-w-screen-xl mx-auto"><section id="midia"><div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16 items-center"><div><span class="text-amber-600 text-lg">M\xEDdia</span><h1 class="text-5xl text-blue-900 font-bold mb-8"> Melhor conte\xFAdo universit\xE1rio </h1><p class="text-xl text-blue-900 mb-8"> Acreditamos no poder de transforma\xE7\xE3o do esporte e na sua import\xE2ncia para uma vida saud\xE1vel. Aqui, todos s\xE3o bem-vindos! </p><a type="button" href="#" class="px-6 py-3 bg-blue-900 rounded font-bold text-amber-300 text-lg mr-6">Saiba mais!</a><a type="button" href="#" class="px-6 py-3 rounded border border-blue-900 font-bold text-blue-900 text-lg">Nossas conquistas</a></div><div class="grid md:grid-cols-2 gap-8"><div><p class="font-bold text-3xl text-blue-900 mb-2">Fotos</p><p class="text-blue-900"> Suas fotos est\xE3o aqui! N\xE3o esque\xE7a de nos marcar. </p></div><div><p class="font-bold text-3xl text-blue-900 mb-2">M\xFAsicas</p><p class="text-blue-900">Os maiores sucessos da calourada.</p></div></div></div></section></div></div><div class="bg-gray-100"><div class="max-w-screen-xl mx-auto"><section id="ingressos"><div class="grid grid-cols-1 md:grid-cols-2 items-center px-4 py-16"><div><span class="text-amber-600 text-lg">Loja e Ingressos</span><h1 class="text-5xl text-blue-900 font-bold mb-8"> Vista as nossas cores </h1><p class="text-xl text-blue-900 mb-8"> Renove seu guarda-roupa de azul, branco e amarelo e bora curtir com a Sistematicos! </p></div><div class="flex md:flex-row md:justify-end space-x-4"><a type="button" href="#" class="px-6 py-3 bg-blue-900 rounded font-bold text-amber-300 text-lg">Ingressos!</a><a type="button" href="#" class="px-6 py-3 rounded border border-blue-900 font-bold text-blue-900 text-lg">Seja s\xF3cio</a></div></div></section></div></div>',2);function pe(t,a,l,c,r,p){const i=o("Head"),d=o("Nav"),_=o("Header"),y=o("Link"),f=o("Footer");return n(),u(A,null,[s(i,{title:"In\xEDcio"}),s(d),s(_),e("div",K,[e("div",P,[e("section",U,[e("div",X,[e("div",Y,[Z,ee,te,s(y,{type:"button",href:"/sobre",class:"px-6 py-3 bg-blue-800 hover:bg-blue-700 hover:text-white transition-all ease-out rounded font-bold text-amber-100 text-lg mr-6"},{default:m(()=>[b("Saiba mais!")]),_:1}),se]),e("div",null,[e("img",{class:"aspect-video object-cover rounded shadow-lg",src:r.copoImg,alt:""},null,8,ae)])])])])]),e("div",oe,[e("div",re,[e("section",ie,[e("div",de,[e("div",null,[e("img",{class:"object-cover rounded shadow-lg",src:r.modalidadesImg,alt:""},null,8,ne)]),le])])])]),ce,s(f)],64)}const he=h(J,[["render",pe]]);export{he as default};

import{D as I,o as c,c as S,l as N,f as s,t as x,L as g,B as a,k as p,a as e,w as i,g as n,H as $,p as V,F as k,A as _}from"./app.1419c855.js";import{m as A}from"./modalidades.849f8ea2.js";import{N as q,F as T}from"./Footer.ff28fdef.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";const F="/build/assets/copo.d56d907c.jpg",H="/build/assets/esporte.57a1b0c1.jpg";var y=I({name:"VueWriter",props:{array:{type:Array,required:!0},eraseSpeed:{type:Number,default:100},typeSpeed:{type:Number,default:200},delay:{type:Number,default:2e3},intervals:{type:Number,default:500},start:{type:Number,default:0},caret:{type:String,default:"cursor"},iterations:{type:Number,default:0}},data:function(){return{typeValue:"",count:0,typeStatus:!1,arrayIndex:0,charIndex:0}},methods:{typewriter:function(){var o=0;if(this.charIndex<this.array[this.arrayIndex].length)this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.array[this.arrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typewriter,this.typeSpeed);else{if(this.count+=1,this.count===this.array.length&&(o+=1,o===this.iterations))return this.typeStatus=!1;this.typeStatus=!1,setTimeout(this.eraser,this.delay)}},eraser:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.array[this.arrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraser,this.eraseSpeed)):(this.typeStatus=!1,this.arrayIndex+=1,this.arrayIndex>=this.array.length&&(this.arrayIndex=0),setTimeout(this.typewriter,this.typeSpeed+this.intervals))}},created:function(){setTimeout(this.typewriter,this.start)}}),j={class:"is-typed"},C={class:"typed"};function L(t,o,r,m,d,b){return c(),S("div",j,[N(t.$slots,"default"),s("span",C,x(t.typeValue),1),s("span",{class:t.caret+" "+{typing:t.typeStatus}},"\xA0",2)])}y.render=L;var B=function(){var t=y;return t.install=function(o){o.component("VueWriter",t)},t}();const M=B;const W={components:{Link:g,VueWriter:M},data(){return{headerImg:H}}},D={id:"header",class:"bg-amber-500 bg-img"},E={class:"max-w-screen-xl mx-auto"},O={class:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8 py-8 md:py-16"},R={class:""},z=e("p",{class:"text-lg text-white mb-8"}," A. A. A. S. I. SISTEM\xC1TICOS - Associa\xE7\xE3o Atl\xE9tica Acad\xEAmica de Sistemas de Informa\xE7\xE3o. Investindo no esporte universit\xE1rio desde 2019. ",-1),G=["src"];function Q(t,o,r,m,d,b){const u=a("VueWriter"),h=a("Link");return c(),p("section",D,[e("div",E,[e("div",O,[e("div",R,[s(u,{class:"text-5xl md:text-7xl text-white font-bold mb-8",array:["#GoCapi"]}),z,s(h,{type:"button",href:"/sobre",class:"px-6 py-3 bg-blue-900 hover:bg-blue-800 hover:text-white hover:shadow transition-all ease-out rounded-xl font-bold text-gray-100 text-lg border-2 border-amber-500 hover:ring-2 ring-blue-800"},{default:i(()=>[n("Conhe\xE7a mais!")]),_:1})]),e("div",null,[e("img",{class:"aspect-video object-fit rounded shadow-lg hover:scale-105 transition-all ease-out hover:brightness-110",src:d.headerImg,alt:""},null,8,G)])])])])}const J=v(W,[["render",Q]]),K={props:["links","noticia"],components:{Head:$,Link:g,Nav:q,Header:J,Footer:T},data(){return{modalidadesImg:A,copoImg:F}}},P={key:0,id:"prenav",class:"bg-red-500"},U={class:"max-w-4xl mx-auto p-4 text-center"},X={class:"text-white font-bold"},Y={class:"bg-white"},Z={class:"max-w-screen-xl mx-auto"},ee={id:"sobre"},te={class:"grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-16"},se={class:"bg-white"},oe=e("span",{class:"text-amber-600 text-lg"},"Sobre",-1),ae=e("h1",{class:"text-4xl md:text-5xl text-blue-900 font-bold mb-8"},"Quem somos",-1),re=e("p",{class:"text-lg lg:text-xl text-blue-900 mb-8"}," Acreditamos no poder de transforma\xE7\xE3o do esporte e na sua import\xE2ncia para uma vida saud\xE1vel. Aqui, todos s\xE3o bem-vindos! ",-1),ie=["src"],ne={class:"bg-gray-100"},de={class:"max-w-screen-xl mx-auto"},le={id:"modalidades"},ce={class:"grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-16"},ue=["src"],he=_('<span class="text-amber-600 text-lg">Modalidades</span><h1 class="text-4xl md:text-5xl text-blue-900 font-bold mb-8"> Fomentando o esporte </h1><p class="text-lg lg:text-xl text-blue-900 mb-8"> Mais do que um grupo formado para fomentar o esporte, as Atl\xE9ticas s\xE3o sin\xF4nimo de intera\xE7\xE3o, divers\xE3o e solidariedade. </p><ul class="list-inside text-lg text-blue-900 space-y-4 mb-8"><li><span class="px-3 rounded-full bg-amber-500 mr-4"></span> Treinos gratuitos </li><li><span class="px-3 rounded-full bg-amber-500 mr-4"></span> Integra\xE7\xE3o social </li></ul>',4),pe={class:"bg-white"},me={class:"max-w-screen-xl mx-auto"},be={id:"midia"},xe={class:"grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 px-4 md:px-8 py-16 items-center"},ge=e("span",{class:"text-amber-600 text-lg"},"M\xEDdia",-1),_e=e("h1",{class:"text-4xl md:text-5xl text-blue-900 font-bold mb-8"}," Melhor conte\xFAdo universit\xE1rio ",-1),ve=e("p",{class:"text-lg lg:text-xl text-blue-900 mb-8"}," As m\xFAsicas que bombam na nossa calourada e em nossos treinos, e as fotos que s\xE3o tiradas e que voc\xEA participou podem estar por aqui! ",-1),ye=_('<div class="grid md:grid-cols-2 gap-8"><div class="p-4 rounded-xl hover:shadow hover:ring-2 ring-blue-900 transition-all ease-out"><p class="font-bold text-3xl text-blue-900 mb-2">Fotos</p><p class="text-blue-900"> Suas fotos est\xE3o aqui! N\xE3o esque\xE7a de nos marcar. </p></div><div class="p-4 rounded-xl hover:shadow hover:ring-2 ring-blue-900 transition-all ease-out"><p class="font-bold text-3xl text-blue-900 mb-2">M\xFAsicas</p><p class="text-blue-900">Os maiores sucessos da calourada.</p></div></div>',1),fe={class:"bg-gray-100"},we={class:"max-w-screen-xl mx-auto"},Ie={id:"ingressos"},Se={class:"grid grid-cols-1 items-center px-4 md:px-8 py-16"},Ne=e("div",null,[e("span",{class:"text-amber-600 text-lg"},"Loja e Ingressos"),e("h1",{class:"text-4xl md:text-5xl text-blue-900 font-bold mb-8"}," Vista as nossas cores "),e("p",{class:"text-lg md:text-xl text-blue-900 mb-8"}," Renove seu guarda-roupa de azul, branco e amarelo e bora curtir com a Sistematicos! ")],-1),$e=["href"];function Ve(t,o,r,m,d,b){const u=a("Head"),h=a("Nav"),f=a("Header"),l=a("Link"),w=a("Footer");return c(),p(k,null,[s(u,{title:"In\xEDcio"}),r.noticia.active?(c(),p("div",P,[e("div",U,[e("span",X,x(r.noticia.description),1)])])):V("",!0),s(h),s(f),e("div",Y,[e("div",Z,[e("section",ee,[e("div",te,[e("div",se,[oe,ae,re,s(l,{type:"button",href:"/sobre",class:"px-6 py-3 bg-blue-800 hover:bg-blue-700 hover:text-white transition-all ease-out rounded-xl font-bold text-gray-50 hover:text-white text-lg mr-6 mb-4 md:mb-0 border-2 border-white hover:ring-2 ring-blue-800"},{default:i(()=>[n("Saiba mais!")]),_:1}),s(l,{type:"button",href:"/sobre#conquistas",class:"px-4 py-2 rounded-xl border border-blue-900 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all ease-out text-blue-900 text-lg"},{default:i(()=>[n("Nossas conquistas")]),_:1})]),e("div",null,[e("img",{class:"aspect-video object-cover rounded shadow-lg hover:scale-105 transition-all ease-out hover:brightness-110",src:d.copoImg,alt:""},null,8,ie)])])])])]),e("div",ne,[e("div",de,[e("section",le,[e("div",ce,[e("div",null,[e("img",{class:"object-cover rounded shadow-lg hover:scale-105 transition-all ease-out hover:brightness-110",src:d.modalidadesImg,alt:""},null,8,ue)]),e("div",null,[he,s(l,{type:"button",href:"/modalidades",class:"px-6 py-3 bg-blue-800 hover:bg-blue-700 hover:text-white transition-all ease-out rounded-xl font-bold text-gray-50 hover:text-white text-lg mr-6 mb-4 md:mb-0 border-2 border-white hover:ring-2 ring-blue-800"},{default:i(()=>[n("Treine conosco!")]),_:1})])])])])]),e("div",pe,[e("div",me,[e("section",be,[e("div",xe,[e("div",null,[ge,_e,ve,s(l,{type:"button",href:"/midia",class:"px-6 py-3 bg-blue-800 hover:bg-blue-700 hover:text-white transition-all ease-out rounded-xl font-bold text-gray-50 text-lg mr-6 mb-4 md:mb-0 border-2 border-white hover:ring-2 ring-blue-800"},{default:i(()=>[n("Bora acessar!")]),_:1})]),ye])])])]),e("div",fe,[e("div",we,[e("section",Ie,[e("div",Se,[Ne,e("div",null,[s(l,{type:"button",href:r.links.loja,class:"px-6 py-3 bg-blue-800 hover:bg-blue-700 hover:text-white transition-all ease-out rounded-xl font-bold text-gray-50 hover:text-white text-lg mr-6 mb-4 md:mb-0 border-2 border-white hover:ring-2 ring-blue-800"},{default:i(()=>[n("Roupas e acess\xF3rios")]),_:1},8,["href"]),e("a",{type:"button",href:r.links.ingressos,class:"px-4 py-2 rounded-xl border border-blue-900 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all ease-out text-blue-900 text-lg"},"Ingressos",8,$e)])])])])]),s(w)],64)}const Fe=v(K,[["render",Ve]]);export{Fe as default};

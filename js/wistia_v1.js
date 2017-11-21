var __slice=[].slice;
(function(j){var i,q,p,n,m,l,k;
i="2015-02-17",l=j.Wistia,p=function(){var a;
return a={},a.wistia=i,a._initializers={},a._destructors={},a.extend=function(){var e,c,f;
return e=arguments[0],c=2<=arguments.length?__slice.call(arguments,1):[],c.length||(c=[e],e=a),(f=a.obj).merge.apply(f,[e].concat(__slice.call(c))),e
},a.proto=function(c){return c==null&&(c=j.location.href),a.url.proto(c)
},a.mixin=function(g,f){var s,r,h;
h=[];
for(s in f){r=f[s],f.hasOwnProperty(s)&&h.push(g[s]=r)
}return h
},a.data=function(d,c){return a.obj.isArray(d)||(d=d.split(".")),c!=null&&a.obj.set(a,["_data"].concat(d),c),a.obj.get(a,["_data"].concat(d))
},a.removeData=function(b){return a.obj.isArray(b)||(b=b.split(".")),a.obj.unset(a,["_data"].concat(b))
},a._timeouts||(a._timeouts={}),a.timeout=function(g,c,s){var r,h=this;
return s==null&&(s=1),a.debug("W.timeout",g,s),a.clearTimeouts(g),a.obj.isArray(g)||(g=g.split(".")),g=["timeouts"].concat(g).join("."),c?(r=setTimeout(function(){return delete a._timeouts[g],c()
},s),a._timeouts[g]=r):a._timeouts[g]
},a.clearTimeouts=function(g){var c,s,r,h;
a.debug("W.clearTimeouts",g),a.obj.isArray(g)||(g=g.split(".")),g=["timeouts"].concat(g).join("."),r=a._timeouts,h=[];
for(c in r){s=r[c],(typeof c.indexOf=="function"?c.indexOf(g):void 0)!==0||c.length!==g.length&&c.charAt(g.length)!=="."?h.push(void 0):(clearTimeout(s),h.push(delete a._timeouts[c]))
}return h
},a.seqId=function(f,c){var h,g;
return f==null&&(f="wistia_"),c==null&&(c=""),h=a._sequenceVal||1,g=""+f+h+c,a._sequenceVal=h+1,g
},a.uniqId=function(e,d){var f;
return e==null&&(e=""),d==null&&(d=""),f="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(h){var g,r;
return g=Math.random()*16|0,r=h==="x"?g:g&3|8,r.toString(16)
}),e+f+d
},a.css=function(){var e,c,f;
return arguments.length===2?(f=arguments[0]||document.body||document.head,e=arguments[1]):(f=document.body||document.head,e=arguments[0]),/\{/.test(e)&&/\}/.test(e)?a.util.addInlineCss(f,e):(c=document.createElement("link"),c.setAttribute("rel","stylesheet"),c.setAttribute("href",e),a.elem.append(f,c),c)
},a.script=function(){var d,c;
return d=1<=arguments.length?__slice.call(arguments,0):[],(c=a.remote).scripts.apply(c,d)
},a.require=function(){var d,c;
return d=1<=arguments.length?__slice.call(arguments,0):[],(c=a.remote).require.apply(c,d)
},a
},q=function(){return j.Wistia!=null&&j.Wistia.wistia!=null
},q()||(j.Wistia=p());
if(l!=null&&l.wistia==null){k=[];
for(n in l){m=l[n],k.push(Wistia[n]=m)
}return k
}})(window);
var __slice=[].slice;
(function(b){if(b.obj){return
}return b.obj={merge:function(){var h,g,l,k,j,i=this;
h=arguments[0],l=2<=arguments.length?__slice.call(arguments,1):[];
if(!l.length){return h
}for(k=0,j=l.length;
k<j;
k++){g=l[k],this.eachDeep(g,function(a,f){var e;
e=i.get(h,f);
if(i.isArray(a)){if(i.isEmpty(e)){return i.set(h,f,[])
}}else{if(!i.isObject(a)){return i.set(h,f,a)
}if(i.isEmpty(e)){return i.set(h,f,{})
}}})
}return h
},clone:function(c){return c instanceof Array?this.merge([],c):this.merge({},c)
},get:function(h,g,l){var k,j,i;
typeof g=="string"?g=g.split("."):g=g.slice(0,g.length),k=h;
while(h!=null&&g.length){i=g.shift(),(h[i]===void 0||!this.isObject(h[i])&&!this.isArray(h[i]))&&l&&(i===0?(h=k[j]=[],h[i]={}):h[i]={}),k=h,j=i,h=h[i]
}return h
},set:function(f,e,h){var g;
return typeof e=="string"?e=e.split("."):e=e.slice(0,e.length),g=e.pop(),f=this.get(f,e,!0),f!=null&&(this.isObject(f)||this.isArray(f))&&g!=null?h!=null?f[g]=h:delete f[g]:void 0
},unset:function(d,c){return this.set(d,c)
},exists:function(d,c){return this.get(d,c)!==void 0
},cast:function(c){return c==null?c:this.isObject(c)||this.isArray(c)?this.castDeep(c):(c=""+c,/^[1-9]\d*?$/.test(c)?parseInt(c,10):c==="0"?0:/^\d*\.\d+/.test(c)?parseFloat(c):/^true$/i.test(c)?!0:/^false$/i.test(c)?!1:c)
},castDeep:function(d){var c=this;
return this.eachLeaf(d,function(e,a){if(typeof e=="string"){return c.set(d,a,c.cast(e))
}}),d
},only:function(j,i){var q,p,n,m,l,k;
n={},p={};
for(l=0,k=i.length;
l<k;
l++){q=i[l],p[q]=!0
}for(q in j){m=j[q],p[q]&&(n[q]=m)
}return n
},except:function(j,i){var q,p,n,m,l,k;
n={},p={};
for(l=0,k=i.length;
l<k;
l++){q=i[l],p[q]=!0
}for(q in j){m=j[q],p[q]||(n[q]=m)
}return n
},select:function(w,v){var u,t,s,r,q,p,n,m,l;
p=[],s=typeof v=="function",s&&(t=v);
for(m=0,l=w.length;
m<l;
m++){u=w[m];
if(s){t(u)&&p.push(u)
}else{q=!0;
for(r in v){n=v[r];
if(n instanceof Array){if(!u[r]||u[r]<n[0]||u[r]>n[1]){q=!1;
break
}}else{if(n instanceof RegExp){if(!n.test(u[r])){q=!1;
break
}}else{if(u[r]!==n){q=!1;
break
}}}}q&&p.push(u)
}}return p
},sort:function(a,l){var k,j,i,h;
return i=typeof l=="function",i&&(j=l),h=function(){var d,g,f;
f=[];
for(d=0,g=a.length;
d<g;
d++){k=a[d],f.push(k)
}return f
}(),i?h.sort(j):h.sort(function(c,s){var r,q,p,n,m;
l instanceof Array?n=b.obj.clone(l):n=l.split(/\s*,\s*/),q=0;
while(q===0&&n.length>0){m=n.shift().split(/\s+/),p=m[0],r=m[1],r=r==="desc"?-1:1;
if(c[p]<s[p]){q=-1*r;
break
}if(c[p]===s[p]){q=0
}else{q=1*r;
break
}}return q
}),h
},isArray:function(c){return c!=null&&/^\s*function Array()/.test(c.constructor)
},isObject:function(c){return c!=null&&/^\s*function Object()/.test(c.constructor)
},isRegExp:function(c){return c!=null&&/^\s*function RegExp()/.test(c.constructor)
},isBasicType:function(c){return c!=null&&(this.isRegExp(c)||/^string|number|boolean|function$/i.test(typeof c))
},isEmpty:function(f){var e,h,g;
if(f==null){return !0
}if(this.isArray(f)&&!f.length){return !0
}if(this.isObject(f)){e=!0;
for(h in f){g=f[h],e=!1
}return e
}return !1
},isSubsetDeep:function(f,e){var h,g=this;
return f===e?!0:f!=null&&e==null||f==null&&e!=null?!1:(h=!0,this.eachLeaf(f,function(c,i){var d;
d=g.get(e,i);
if(c!==d){return h=!1
}}),h)
},equalsDeep:function(d,c){return this.isSubsetDeep(d,c)&&this.isSubsetDeep(c,d)
},eachDeep:function(h,g,l){var k,j,i;
l==null&&(l=[]);
if(this.isBasicType(h)){g(h,l)
}else{if(this.isObject(h)||this.isArray(h)){g(h,l);
for(k in h){i=h[k],j=l.slice(0,l.length),j.push(k),this.eachDeep(i,g,j)
}}else{g(h,l)
}}},eachLeaf:function(e,d){var f=this;
return this.eachDeep(e,function(c,g){if(!f.isArray(c)&&!f.isObject(c)){return d(c,g)
}})
},hasDontEnumBug:!{toString:null}.propertyIsEnumerable("toString"),DontEnums:["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],keys:function(s){var r,q,p,n,m,l,k,a;
if(Object.keys){return Object.keys(s)
}if(typeof o!="object"&&typeof o!="function"||o===null){throw new TypeError("Object.keys called on a non-object")
}if(b.obj.hasDontEnumBug){l=b.obj.DontEnums,k=[];
for(n=0,m=l.length;
n<m;
n++){q=l[n],o.hasOwnProperty(q)&&k.push(q)
}return k
}a=[];
for(r in o){p=o[r],a.push(p)
}return a
}}
})(Wistia),function(W){if(W.util){return
}return W.util={bindEvent:function(){var a;
return(a=W.elem).bind.apply(a,arguments)
},unbindEvent:function(){var a;
return(a=W.elem).unbind.apply(a,arguments)
},elemHeight:function(a){return W.elem.height(a)
},elemWidth:function(a){return W.elem.width(a)
},elemInDom:function(a){return W.elem.inDom(a)
},winHeight:function(){return W.elem.height(window)
},winWidth:function(){return W.elem.width(window)
},docHeight:function(){return W.elem.height(document)
},docWidth:function(){return W.elem.width(document)
},addInlineCss:function(a,b){var c,d;
return c=document.createElement("style"),c.id=Wistia.seqId("wistia_","_style"),c.setAttribute("type","text/css"),c.className="wistia_injected_style",d=document.getElementsByTagName("style"),a.appendChild(c,a.nextSibling),c.styleSheet?c.styleSheet.cssText=b:c.appendChild(document.createTextNode(b)),c
},cssTags:function(a){return a.match(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig)||[]
},execCssTags:function(a){var b,c,d,e,f,g,h;
if(!a){return null
}a instanceof Array||(a=Wistia.util.cssTags(a)),c=[];
for(g=0,h=a.length;
g<h;
g++){b=a[g];
if(/<link.*?rel=['"]stylesheet['"][^>]*>/.test(b)){if(e=b.match(/href=['"](.*?)['"]/i)){d=document.createElement("link"),d.setAttribute("rel","stylesheet"),d.setAttribute("href",e[1]),d.className="wistia_injected_style",Wistia.elem.append(document.body||document.head,d),c.push(d)
}}else{/<style>[\s\S]+?<\/style>/ig.test(b)&&(e=b.match(/<style>([\s\S]+?)<\/style>/i))&&(f=Wistia.util.addInlineCss(document.body||document.head,e[1]),c.push(f))
}}return c
},removeCssTags:function(a){return a.replace(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/ig,"")
},unescapeHtml:function(a){var b;
return b=document.createElement("div"),b.innerHTML=a,b.childNodes.length>0?b.childNodes[0].nodeValue:""
},scriptTags:function(a){return a.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/ig)||[]
},execScriptTags:function(scriptTags,callback){var hash,hashes,matches,scriptTag,src,_i,_len;
if(!scriptTags){return null
}scriptTags instanceof Array||(scriptTags=Wistia.util.scriptTags(scriptTags)),hashes=[];
for(_i=0,_len=scriptTags.length;
_i<_len;
_i++){scriptTag=scriptTags[_i],hash={};
if((matches=scriptTag.match(/<script.*?>/i))&&(matches=matches[0].match(/src="([^"]+)"/i))){hash.src=matches[1],hash.async=/async/i.test(scriptTag.replace(hash.src,""))
}else{if(matches=scriptTag.match(/<script>([\s\S]+?)<\/script>/i)){src=matches[1],hash.fn=function(){return eval(src)
}
}}hashes.push(hash)
}return Wistia.remote.scripts(hashes,callback)
},removeScriptTags:function(a){return a.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g,"")
},scrollTop:function(a){var b,c,d,e;
return a!=null?((b=document.body)!=null&&(b.scrollTop=a),(c=document.documentElement)!=null?c.scrollTop=a:void 0):(typeof document!="undefined"&&document!==null?(d=document.documentElement)!=null?d.scrollTop:void 0:void 0)||(typeof document!="undefined"&&document!==null?(e=document.body)!=null?e.scrollTop:void 0:void 0)||0
},scrollLeft:function(a){var b,c,d,e;
return a!=null?((b=document.body)!=null&&(b.scrollLeft=a),(c=document.documentElement)!=null?c.scrollLeft=a:void 0):(typeof document!="undefined"&&document!==null?(d=document.documentElement)!=null?d.scrollLeft:void 0:void 0)||(typeof document!="undefined"&&document!==null?(e=document.body)!=null?e.scrollLeft:void 0:void 0)||0
},transitionCss:function(){var a,b,c;
return arguments[0] instanceof Array?(b=arguments,c=function(){var c,d,e;
e=[];
for(c=0,d=b.length;
c<d;
c++){a=b[c],e.push(""+a[0]+" "+a[1]+" linear "+(a[2]||"0s"))
}return e
}().join(",")):(a=arguments,c=""+a[0]+" "+a[1]+" linear "+(a[2]||"0s")),"-webkit-transition: "+c+";\n-moz-transition: "+c+";\n-o-transition: "+c+";\n-ms-transition: "+c+";\ntransition: "+c+";"
},niceDuration:function(a){var b,c,d;
return b=d=0,a>0&&(b+=Math.floor(a/60),a%=60),d=Math.round(a),d===60&&(b+=1,d=0),c=""+b+":"+this.padNumber(d,2),c
},padNumber:function(a,b){var c;
b==null&&(b=0),c=""+a;
while(c.length<b){c="0"+c
}return c
},localDate:function(a){var b,c;
return a==null&&(a=new Date),c=-a.getTimezoneOffset(),b=c>=0?"+":"-",""+a.getFullYear()+"-"+this.padNumber(a.getMonth()+1,2)+"-"+this.padNumber(a.getDate(),2)+"T"+this.padNumber(a.getHours(),2)+":"+this.padNumber(a.getMinutes(),2)+":"+this.padNumber(a.getSeconds(),2)+b+this.padNumber(Math.abs(Math.floor(c/60)),2)+":"+this.padNumber(Math.abs(Math.floor(c%60)),2)
},requestAnimationFrame:function(a){var b;
return b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){return setTimeout(a,1000/60)
},b(a)
},notSetOrTrue:function(a){return a==null||a===!0
},indexOf:function(a,b){var c,d,e;
for(c=d=0,e=a.length;
0<=e?d<=e:d>=e;
c=0<=e?++d:--d){if(typeof b=="function"){if(b(a[c])){return c
}}else{if(a[c]===b&&a[c]===b){return c
}}}return -1
},insertIntoArray:function(a,b,c){var d;
return c==null&&(c={}),c.after?(d=W.util.indexOf(a,c.detect||c.after),d>=0?a.splice(d+1,0,entry):typeof console!="undefined"&&console!==null?console.log(""+c.after+" not found when trying to add "+b+" to array"):void 0):c.before?(d=W.util.indexOf(a,c.detect||c.before),d>=0?a.splice(d,0,entry):typeof console!="undefined"&&console!==null?console.log(""+c.before+" not found when trying to add "+b+" to array"):void 0):c.index?a.splice(c.index,0,entry):a.push(b)
},throttle:function(a,b,c){var d,e,f,g,h,i;
return c==null&&(c={}),e=null,d=null,h=null,i=null,g=0,f=function(){g=c.leading===!1?0:(new Date).getTime(),i=null,h=b.apply(e,d);
if(!i){return e=d=null
}},function(){var j,k;
return j=(new Date).getTime(),!g&&c.leading===!1&&(g=j),k=a-(j-g),e=this,d=arguments,k<=0||k>a?(clearTimeout(i),i=null,g=j,h=b.apply(e,d),i||(e=d=null)):!i&&c.trailing!==!1&&(i=setTimeout(f,k)),h
}
},toArray:function(a,b){b==null&&(b=/\s+/);
if(a instanceof Array){return a
}if(typeof a=="string"){return a.split(b)
}throw new Error("Don't know how to convert "+a+" into an array.")
},poll:function(a,b,c,d,e){var f,g,h;
return c==null&&(c=50),d==null&&(d=5000),g=null,h=(new Date).getTime(),f=function(){if((new Date).getTime()-h>d){typeof e=="function"&&e();
return
}return a()?b():(clearTimeout(g),g=setTimeout(f,c))
},g=setTimeout(f,1)
},aps:function(a){var b,c,d,e;
e=[];
for(c=0,d=a.length;
c<d;
c++){b=a[c],e.push(b)
}return e
},_readyFunc:function(){return/loaded|complete/.test(document.readyState)
},onDocReady:function(){var a,b,c,d,e,f,g,h;
return arguments.length>1?(g=arguments[0],b=arguments[1]):(g=10000,b=arguments[0]),/loaded|complete/.test(document.readyState)?b():top===self&&document.documentElement.doScroll?(f=function(){var a;
try{return document.documentElement.doScroll("left"),!0
}catch(b){return a=b,!1
}},W.util.poll(f,b,50,g,b)):(e=function(a){if(/loaded|complete/.test(document.readyState)){return clearTimeout(d),h(),b()
}},a=function(){return W.elem.bind(document,"DOMContentLoaded",e),W.elem.bind(document,"readystatechange",e),W.elem.bind(window,"load",e)
},h=function(){return W.elem.unbind(document,"DOMContentLoaded",e),W.elem.unbind(document,"readystatechange",e),W.elem.unbind(window,"load",e)
},c=function(){return h(),b()
},d=setTimeout(c,g),a())
},camelCase:function(a){return a.replace(/[_-]([a-z])/g,function(a){return a[1].toUpperCase()
})
},snakeCase:function(a){return a.replace(/[A-Z]/g,function(a){return"_"+a.toLowerCase()
})
}}
}(Wistia);
var __slice=[].slice;
(function(d){var c;
c=d;
if(c.elem){return
}return c.elem={},c.elem.html=function(b,h){var g,f;
return g=c.util.cssTags(h),f=c.util.scriptTags(h),h=c.util.removeCssTags(h),h=c.util.removeScriptTags(h),c.util.execCssTags(g),b.innerHTML=h,c.util.execScriptTags(f)
},c.elem.fromObject=function(P){var O,N,M,L,K,J,I,H,G,F,E,D,C,B,A,z,y,x,w,b;
if(c.obj.isArray(P)){return function(){var g,f,a;
a=[];
for(g=0,f=P.length;
g<f;
g++){E=P[g],a.push(c.elem.fromObject(E))
}return a
}()
}D=P.tagName||"div",M=P.childNodes||[],c.obj.isArray(M)||(M=[M]),J=document.createElement(D);
for(H in P){B=P[H];
if(H==="childNodes"||H==="tagName"){continue
}K=H.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();
if(H==="style"){if(c.obj.isObject(B)){for(G in B){C=B[G],J.style[G]=C
}}else{w=B.split(";");
for(A=0,y=w.length;
A<y;
A++){F=w[A],b=F.split(/\s*:\s*/),G=b[0],C=b[1],G&&C&&(J.style[G]=C)
}}}else{if(H==="events"){for(I in B){O=B[I],c.elem.bind(J,I,O)
}}else{H==="className"||H==="class"?J.className=B:H==="innerHTML"?J.innerHTML=B:B!=null&&typeof B=="string"&&J.setAttribute(K,B.toString())
}}}for(z=0,x=M.length;
z<x;
z++){L=M[z],c.obj.isObject(L)?(N=c.elem.fromObject(L),c.elem.append(J,N)):(N=document.createTextNode(L.toString()),c.elem.append(J,N))
}return J
},c.elem.toObject=function(D){var C,B,A,z,y,x,w,v,u,t,s,r,q,b;
if(c.obj.isArray(D)){return function(){var g,f,a;
a=[];
for(g=0,f=D.length;
g<f;
g++){x=D[g],a.push(c.elem.toObject(x))
}return a
}()
}y={},y.tagName=D.tagName.toLowerCase(),q=c.obj.keys(D);
for(u=0,s=q.length;
u<s;
u++){C=q[u];
if(C==="tagName"||C==="childNodes"||C==="nodeType"||C==="nodeValue"){continue
}if(C==="style"){y.style={},b=c.obj.keys(D.style);
for(t=0,r=b.length;
t<r;
t++){z=b[t],w=D.style[z],w&&!/^\d/.test(z)&&z!=="length"&&(y.style[z]=w)
}}else{v=D.getAttribute(C),v!=null&&(y[C]=v)
}}return A=function(){var j,i,h,a;
h=D.childNodes,a=[];
for(j=0,i=h.length;
j<i;
j++){B=h[j],B.nodeType===1?a.push(c.elem.toObject(B)):B.nodeType===3?a.push(B.nodeValue):a.push(null)
}return a
}(),A=function(){var f,e,g;
g=[];
for(f=0,e=A.length;
f<e;
f++){B=A[f],B&&g.push(B)
}return g
}(),A.length!==0&&(y.childNodes=A),y
},c.elem.clone=function(f){var e;
return e=this.toObject(f),this.fromObject(e)
},c.elem.append=function(b,j){var i,h,g;
if(c.obj.isArray(j)){for(h=0,g=j.length;
h<g;
h++){i=j[h],c.elem.append(b,i)
}return
}return b.appendChild(j)
},c.elem.prepend=function(b,j){var i,h,g;
if(c.obj.isArray(j)){for(h=0,g=j.length;
h<g;
h++){i=j[h],c.elem.prepend(b,i)
}return
}return b.childNodes.length===0?this.append(b,j):b.insertBefore(j,b.childNodes[0])
},c.elem.before=function(b,l){var k,j,i,h;
if(c.obj.isArray(l)){h=l.reverse();
for(j=0,i=h.length;
j<i;
j++){k=h[j],c.elem.before(b,k)
}return
}return b.parentNode.insertBefore(l,b)
},c.elem.after=function(b,l){var k,j,i,h;
if(c.obj.isArray(l)){h=l.reverse();
for(j=0,i=h.length;
j<i;
j++){k=h[j],c.elem.after(b,k)
}return
}return b.parentNode.insertBefore(l,b.nextSibling)
},c.elem.remove=function(b){var j,i,h,g;
if(c.obj.isArray(b)||window.NodeList&&b instanceof NodeList){for(h=0,g=b.length;
h<g;
h++){j=b[h],c.elem.remove(j)
}return
}if((b!=null?b.nodeType:void 0)===1&&(i=b.parentNode)){return i.removeChild(b),b=null
}},c.elem.removeClass=function(f,e){var g;
if(!this.hasClass(f,e)){return
}if(f.className!=null){return g=new RegExp(""+e,"g"),f.className=this.normalizeClassName(f.className.replace(g,""))
}},c.elem.addClass=function(f,e){if(this.hasClass(f,e)){return
}return f.className!=null?(this.removeClass(f,e),f.className=this.normalizeClassName(""+f.className+" "+e)):f.className=e
},c.elem.hasClass=function(i,h){var n,m,l,k,j;
return((j=i.className)!=null?!j.indexOf:!void 0)?!1:(k=i.className.indexOf(h),n=k===0||i.className.charAt(k-1)===" ",l=k+h.length===i.className.length,m=i.className.charAt(k+h.length)===" ",n&&(l||m))
},c.elem.classes=function(b){return(b.className||"").split(/\s+/)
},c.elem.normalizeClassName=function(b){return b.replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g," ")
},c.elem.style=function(){var u,t,s,r,q,p,n,m,l;
s=arguments[0],u=2<=arguments.length?__slice.call(arguments,1):[];
if(s instanceof Array||window.NodeList&&s instanceof NodeList){return n=function(){var j,i,e,a;
a=[];
for(j=0,i=s.length;
j<i;
j++){r=s[j],r.nodeType===1?a.push((e=c.elem).style.apply(e,[r].concat(__slice.call(u)))):a.push(void 0)
}return a
}(),n
}if(u.length===2){return q=u[0],m=u[1],s.style[q]=m
}if(u.length!==1){return c.log.apply(c,["Unexpected args for Wistia.elem.style",s].concat(__slice.call(u)))
}if(typeof u[0]!="string"){p=this.propsWithVendorPrefixes(u[0]),l=[];
for(q in p){m=p[q],l.push(s.style[q]=m)
}return l
}q=u[0];
try{return s.currentStyle?s.currentStyle[q]:window.getComputedStyle?getComputedStyle(s,null).getPropertyValue(q):null
}catch(b){return t=b,c.notice(t)
}},c.elem.vendoredProperties=function(){return{transition:!0,transform:!0}
},c.elem.vendoredProperty=function(b){return this.vendoredProperties()[b]
},c.elem.vendorPrefixes=function(){return["webkit","moz","o","ms"]
},c.elem.propsWithVendorPrefixes=function(s){var r,q,p,n,m,l,k,j;
n={};
for(p in s){m=s[p],n[p]=m;
if(this.vendoredProperty(p)){j=this.vendorPrefixes();
for(l=0,k=j.length;
l<k;
l++){r=j[l],q=r+p[0].toUpperCase()+p.slice(1),p[q]||(n[q]=m)
}}}return n
},c.elem.width=function(b){var j,i,h,g;
return b===window?window.innerWidth?window.innerWidth:document.documentElement?document.documentElement.offsetWidth:document.body.offsetWidth:b===document?(j=document.body,i=document.documentElement,Math.max(j.scrollWidth,j.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)):c.detect.browser.quirks?parseInt(b.offsetWidth,10):(h=typeof window.getComputedStyle=="function"?(g=window.getComputedStyle(b,null))!=null?g.width:void 0:void 0)?parseInt(h,10):b.currentStyle?b.offsetWidth:-1
},c.elem.height=function(b){var j,i,h,g;
return b===window?window.innerHeight?window.innerHeight:document.documentElement?document.documentElement.offsetHeight:document.body.offsetHeight:b===document?(j=document.body,i=document.documentElement,Math.max(j.scrollHeight,j.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)):c.detect.browser.quirks?parseInt(b.offsetHeight,10):(h=typeof window.getComputedStyle=="function"?(g=window.getComputedStyle(b,null))!=null?g.height:void 0:void 0)?parseInt(h,10):b.currentStyle?b.offsetHeight:-1
},c.elem.isBoxModel=function(){var b;
return this._isBoxModel!=null?this._isBoxModel:(b=document.createElement("div"),b.style.paddingLeft=b.style.width="1px",document.body.appendChild(b),this._isBoxModel=b.offsetWidth===2,document.body.removeChild(b),this._isBoxModel)
},c.elem.offset=function(u){var t,s,r,q,p,n,m,l,k;
return t=document.body,k=document.defaultView,p=document.documentElement,n=this.isBoxModel(),s=u.getBoundingClientRect(),q=p.clientTop||t.clientTop||0,r=p.clientLeft||t.clientLeft||0,l=(k!=null?k.pageYOffset:void 0)||n&&p.scrollTop||t.scrollTop,m=(k!=null?k.pageXOffset:void 0)||n&&p.scrollLeft||t.scrollLeft,{top:s.top+l-q,left:s.left+m-r}
},c.elem.containsOffset=function(b,h,g){var f;
return f=this.offset(b),f.right=f.left+c.elem.width(b),f.bottom=f.top+c.elem.height(b),f.left<=h&&h<f.right&&f.top<=g&&g<f.bottom
},c.elem.scrollOffset=function(f){var e,g;
e=g=0;
if(f.parentNode){while(f!=null?f.offsetParent:void 0){g+=f.scrollTop,e+=f.scrollLeft,f=f.parentNode
}}return{left:e,top:g}
},c.elem.isHidden=function(b){if(b.offsetParent===null&&c.elem.style(b,"position")!=="fixed"){return !0
}while(b&&b.nodeType===1){if(c.elem.style(b,"display")==="none"){return !0
}b=b.parentNode
}return !1
},c.elem.inDom=function(b){while(b=b.parentNode){if(b===document){return !0
}}return !1
},c.elem.isDescendantOf=function(h,g){var l,k,j,i;
i=this.ancestors(h);
for(k=0,j=i.length;
k<j;
k++){l=i[k];
if(l===g){return !0
}}return !1
},c.elem.ancestorHasClass=function(h,g){var l,k,j,i;
i=this.ancestors(h);
for(k=0,j=i.length;
k<j;
k++){l=i[k];
if(this.hasClass(l,g)){return !0
}}return !1
},c.elem.ancestors=function(f){var e,g;
e=f,g=[];
while(e=e.parentNode){g.push(e)
}return g
},c.elem.isInside=function(f,e){return f===e||this.isDescendantOf(f,e)
},c.elem.animate=function(b,l,k){var j,i,h;
return l==null&&(l={}),k==null&&(k={}),k=c.obj.merge({time:400,easing:"ease"},k),i=function(){var e;
e=[];
for(j in l){h=l[j],e.push(""+j+" "+k.time+"ms "+k.easing)
}return e
}().join(","),c.elem.style(b,{transition:i}),c.util.requestAnimationFrame(function(){return c.elem.style(b,l),setTimeout(function(){return c.elem.style(b,{transition:""}),typeof k.callback=="function"?k.callback():void 0
},k.time)
})
},c.elem.bind=function(b,l,k){var j,i,h=this;
return j=function(){var n,m,g,a;
return m=arguments[0],n=2<=arguments.length?__slice.call(arguments,1):[],m=m||window.event,!m.pageX&&!m.pageY&&(m.clientX||m.clientY)&&(m.pageX=m.clientX+c.util.scrollLeft(),m.pageY=m.clientY+c.util.scrollTop()),m.preventDefault||(m.preventDefault=function(){return m.returnValue=!1
}),m.stopPropagation||(m.stopPropagation=function(){return m.cancelBubble=!0
}),m.which==null&&(m.which=m.charCode!=null?m.charCode:m.keyCode),!m.which&&m.button!=null&&(m.which=m.button&1?1:m.button&2?3:m.button&4?2:c.detect.browser.msie&&m.button===0?1:0),m.target||m.srcElement&&(m.target=m.srcElement),((a=m.target)!=null?a.nodeType:void 0)===3&&(m.target=m.target.parentNode),g=k.apply(m.target,[m].concat(n)),g===h.unbind&&h.unbind(b,l,k),g
},c._elemBind||(c._elemBind={}),i=this._bindKey(b,l,k),c._elemBind[i]=j,j.elem=b,j.event=l,c.detect.browser.msie&&c.detect.browser.version<9?b.attachEvent("on"+l,j):b.addEventListener(l,j,!1)
},c.elem.unbind=function(b,j,i){var h,g;
if(b._wistiaElemId==null||(i!=null?!i._wistiaBindId:!void 0)){return
}return g=this._bindKey(b,j,i),h=c._elemBind[g],h&&(c.detect.browser.msie&&c.detect.browser.version<9?b.detachEvent("on"+j,h):b.removeEventListener(j,h,!1),h.elem=null,h.event=null),delete c._elemBind[g]
},c.elem.unbindAll=function(b){var l,k,j,i,h;
i=c._elemBind,h=[];
for(j in i){k=i[j],k&&b===k.elem?(l=k.event,c.detect.browser.msie&&c.detect.browser.version<9?k.elem.detachEvent("on"+l,k):k.elem.removeEventListener(l,k,!1),k.elem=null,k.event=null,h.push(delete c._elemBind[j])):h.push(void 0)
}return h
},c.elem.unbindAllInside=function(b){var l,k,j,i,h;
i=c._elemBind,h=[];
for(j in i){k=i[j],k&&c.elem.isInside(k.elem,b)?(l=k.event,c.detect.browser.msie&&c.detect.browser.version<9?k.elem.detachEvent("on"+l,k):k.elem.removeEventListener(l,k,!1),k.elem=null,k.event=null,h.push(delete c._elemBind[j])):h.push(void 0)
}return h
},c.elem._bindKey=function(b,f,e){return b._wistiaElemId||(b._wistiaElemId=c.seqId("wistia_elem_")),e._wistiaBindId||(e._wistiaBindId=c.seqId("wistia_bind_")),""+b._wistiaElemId+"."+f+"."+e._wistiaBindId
},c.elem.rebind=function(f,e,g){if(g){return this.unbind(f,e,g),this.bind(f,e,g)
}},c.elem.bindOnce=function(b,h,g){var f;
return f=function(){return g.call.apply(g,[this].concat(__slice.call(arguments))),c.elem.unbind
},this.bind(b,h,f)
},c.elem.trigger=function(){var f,e,h,g;
return e=arguments[0],h=arguments[1],f=3<=arguments.length?__slice.call(arguments,2):[],e.fireEvent?e.fireEvent("on"+h):(g=document.createEvent("Events"),g.initEvent(h,!0,!1),h==="click"||h==="doubleclick"?g.which=1:h==="rightclick"&&(g.which=2),g.target=e,e.dispatchEvent(g))
},c.elem.fullscreenElement=function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement
},c.elem.requestFullscreen=function(b){return b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.webkitRequestFullscreen?b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):b.msRequestFullscreen?b.msRequestFullscreen():b.webkitEnterFullscreen?b.webkitEnterFullscreen():typeof console!="undefined"&&console!==null?console.log("no requestFullscreen functionality detected"):void 0
},c.elem.cancelFullscreen=function(b){return document.cancelFullscreen?document.cancelFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():(b!=null?b.webkitExitFullscreen:void 0)?b.webkitExitFullscreen():typeof console!="undefined"&&console!==null?console.log("no cancelFullscreen functionality detected"):void 0
},c.elem.stripEventAttributes=function(y){var x,w,v,u,t,s,r,q,p,n;
w=(y!=null?y.attributes:void 0)||[];
try{for(t=0,r=w.length;
t<r;
t++){x=w[t],/^on.+/i.test(x.name)&&(y[x.name]=null,y.removeAttribute(x.name))
}}catch(m){u=m,typeof console!="undefined"&&console!==null&&console.log(u)
}p=y!=null?y.childNodes:void 0,n=[];
for(s=0,q=p.length;
s<q;
s++){v=p[s],v.nodeType===1?n.push(this.stripEventAttributes(v)):n.push(void 0)
}return n
},c.elem.mutationObserver=function(b){var e;
return e=c._detect.mutationObserver(),e?new window[e](b):null
},c.elem.domDistance=function(i,h){var n,m,l,k,j;
if(i===h){return{up:0,across:0,down:0}
}m=[i],l=[h],n=1,j=0,k=null;
while(i!==document.body){i=i.parentNode;
if(i===h){return{up:m.length,across:0,down:0}
}m.unshift(i)
}i=m[m.length-1];
while(h!==document.body){h=h.parentNode;
if(h===i){return{up:0,across:0,down:l.length}
}l.unshift(h)
}while(m[n]===l[n]){n+=1
}k=m[n];
while(k){k=k.nextSibling;
if(k!=null?k.tagName:void 0){j+=1;
if(k===l[n]){return{up:m.length-n-1,across:j,down:l.length-n-1}
}}}j=0,k=m[n];
while(k){k=k.previousSibling;
if(k!=null?k.tagName:void 0){j-=1;
if(k===l[n]){return{up:m.length-n-1,across:j,down:l.length-n-1}
}}}},c.elem.allBetween=function(w,v,u){var t,s,r,q,p,n,m,b;
w==null&&(w=document.body),v==null&&(v=document.body),u==null&&(u="*"),n=[],u=u.toLowerCase(),s=c.elem.domDistance(w,v),p=w,q=0,b=null;
while(q<s.up){if(p!=null?p.tagName:void 0){if(u==="*"||p.tagName.toLowerCase()===u){n=n.concat([p])
}m=p.nextSibling;
while(m){if(m.tagName){if(u==="*"||m.tagName.toLowerCase()===u){n=n.concat([m])
}n=n.concat(c.util.aps(m.getElementsByTagName(u)))
}m=m.nextSibling
}}p=p.parentNode,p&&(b=p),q+=1
}t=Math.abs(s.across),p=b||w,q=1;
while(q<t){s.across<0?p=p.previousSibling:p=p.nextSibling;
if(p.tagName){if(0<q&&q<t){if(u==="*"||p.tagName.toLowerCase()===u){n=n.concat([p])
}n=n.concat(c.util.aps(p.getElementsByTagName(u)))
}q+=1
}}r=[],p=v,q=0;
while(q<s.down){if(p!=null?p.tagName:void 0){if(u==="*"||p.tagName.toLowerCase()===u){r=r.concat([p])
}m=p.previousSibling;
while(m){if(m.tagName){if(u==="*"||m.tagName.toLowerCase()===u){r=r.concat([m])
}r=r.concat(c.util.aps(m.getElementsByTagName(u)).reverse())
}m=m.previousSibling
}}p=p.parentNode,q+=1
}return n=n.concat(r.reverse()),n
}
})(Wistia);
var __slice=[].slice;
(function(g){var f,j,i,h;
if(g.bindable){return
}g.bindable={bind:function(a,d){return g.debug(this.constructor.name,"bind",a),this._bindings||(this._bindings={}),this._bindings[a]||(this._bindings[a]=[]),this._bindings[a].push(d),this
},unbind:function(a,q){var p,n,m,l,k;
g.debug(this.constructor.name,"unbind",a),this._bindings||(this._bindings={}),p=this._bindings[a];
if(p){if(q){m=[];
for(n=l=0,k=p.length;
0<=k?l<k:l>k;
n=0<=k?++l:--l){q!==p[n]&&m.push(p[n])
}this._bindings[a]=m
}else{this._bindings[a]=[]
}}return this._bindings[a]&&!this._bindings[a].length&&(this._bindings[a]=null,delete this._bindings[a]),this
},rebind:function(d,c){return this.unbind(d,c),this.bind(d,c)
},hasBindings:function(){var k,e,m,l;
this._bindings||(this._bindings={}),e=!1,l=this._bindings;
for(k in l){m=l[k],this._bindings.hasOwnProperty(k)&&(e=!0)
}return e
},trigger:function(){var F,E,D,C,B,A,z,y,x,w,v,u,t,s,r;
A=arguments[0],F=2<=arguments.length?__slice.call(arguments,1):[],A!=="flushlogs"&&g.debug.apply(g,[this.constructor.name,"trigger",A].concat(__slice.call(F))),this._bindings||(this._bindings={}),z=[];
if(D=this._bindings[A]){for(y=0,u=D.length;
y<u;
y++){C=D[y];
try{C&&C.apply(this,F)===this.unbind&&z.push({event:A,fn:C})
}catch(a){B=a,typeof B=="string"?typeof console!="undefined"&&console!==null&&console.log(B):(B.message&&typeof console!="undefined"&&console!==null&&console.log(B.message),B.stack&&typeof console!="undefined"&&console!==null&&console.log(B.stack))
}}for(x=0,t=z.length;
x<t;
x++){E=z[x],this.unbind(E.event,E.fn)
}}if(D=this._bindings.all){for(w=0,s=D.length;
w<s;
w++){C=D[w];
try{C&&C.apply(this,[A].concat(F))===this.unbind&&z.push({event:A,fn:C})
}catch(a){B=a,typeof B=="string"?typeof console!="undefined"&&console!==null&&console.log(B):(B.message&&typeof console!="undefined"&&console!==null&&console.log(B.message),B.stack&&typeof console!="undefined"&&console!==null&&console.log(B.stack))
}}}for(v=0,r=z.length;
v<r;
v++){E=z[v],this.unbind(E.event,E.fn)
}return this
}},i=g.bindable,h=[];
for(f in i){j=i[f],g[f]?h.push(void 0):h.push(g[f]=j)
}return h
})(Wistia);
var __slice=[].slice;
(function(b){return b.StopGo=function(){function c(){var d=this;
return this._queue=[],this._green=!1,this._lock=!1,this.allInOne=function(){return d._allInOne.apply(d,arguments)
},this.defineMethodsOn(this.allInOne),this.allInOne
}return c.prototype.defineMethodsOn=function(h){var g,l,k,j,i=this;
g={},j=[];
for(l in this){k=this[l],j.push(function(m,f,a){if(g.toString.call(f)==="[object Function]"){return h[m]=function(){return a[m].apply(a,arguments)
}
}}(l,k,this))
}return j
},c.prototype.flush=function(){var e,d,f=this;
e=1<=arguments.length?__slice.call(arguments,0):[];
if(!this._green){return this
}this._lock=!0;
while(this._queue.length>0){d=this._queue.shift(),e.length||!this.goArgs?this.tryAndReport(function(){return d.apply(null,e)
}):this.tryAndReport(function(){return d.apply(null,f.goArgs)
});
if(this._block||!this._green){break
}}return this._lock=!1,this
},c.prototype._debug=function(){return typeof console!="undefined"&&console!==null?console.log.apply(console,arguments):void 0
},c.prototype.synchronize=function(){var f,e,h,g;
e=1<=arguments.length?__slice.call(arguments,0):[];
for(h=0,g=e.length;
h<g;
h++){f=e[h],this.synchronizeFn(f)
}return this
},c.prototype.synchronizeFn=function(g){var f,j,i,h=this;
return j=null,f=function(){return clearTimeout(j),h._block=!1,h.go()
},i=function(){return h._block=!0,h.stop(),g(f)
},j=setTimeout(function(){return h._debug("StopGo#synchronize timed out",g),f()
},5000),this.runFn(i),this
},c.prototype.tryAndReport=function(e){var d;
try{return e()
}catch(f){return d=f,d.stack?(typeof console!="undefined"&&console!==null&&console.log(d.message),typeof console!="undefined"&&console!==null?console.log(d.stack):void 0):typeof console!="undefined"&&console!==null?console.log(d):void 0
}},c.prototype.clearSynchronized=function(){return this.setQueue([]),this._block=!1,this._green=!0
},c.prototype.filter=function(e){var d;
return this._queue=function(){var i,h,g,a;
g=this._queue,a=[];
for(i=0,h=g.length;
i<h;
i++){d=g[i],e(d)&&a.push(d)
}return a
}.call(this),this
},c.prototype.push=function(d){return this._queue.push(d),this
},c.prototype.go=function(){var d;
return d=1<=arguments.length?__slice.call(arguments,0):[],this._green=!0,this.goArgs=d,this.flush.apply(this,d),this
},c.prototype.stop=function(){return this._green=!1,this
},c.prototype.run=function(){var f,e,h,g;
e=1<=arguments.length?__slice.call(arguments,0):[];
for(h=0,g=e.length;
h<g;
h++){f=e[h],this.runFn(f)
}return this
},c.prototype.runFn=function(d){return this._green&&!this._block?this._lock?this.tryAndReport(d):(this.push(d),this.flush()):this.push(d),this
},c.prototype.remove=function(){var f,e,h,g;
e=1<=arguments.length?__slice.call(arguments,0):[];
for(h=0,g=e.length;
h<g;
h++){f=e[h],this.removeFn(f)
}return this
},c.prototype.removeFn=function(d){return this.filter(function(a){return d!==a
}),this
},c.prototype.setQueue=function(d){return this._queue=d,this
},c.prototype.getQueue=function(){return this._queue
},c.prototype._allInOne=function(){var e,d;
return e=arguments[0],d=2<=arguments.length?__slice.call(arguments,1):[],e===!0?this.go.apply(this,d):e===!1?this.stop():e!=null?e instanceof Array?this.run.apply(this,e):typeof e=="string"?this[e].apply(this,d):this.run.apply(this,arguments):this._green
},c
}(),b.StopGo.when=function(){var a,q,p,n,m,l,k,j;
n=1<=arguments.length?__slice.call(arguments,0):[],q=new b.StopGo,a=function(){return q.go.apply(q,arguments)
},j=n.reverse(),m=function(d,e){return a=function(){return e(function(){return d.apply(null,arguments)
})
}
};
for(l=0,k=j.length;
l<k;
l++){p=j[l],m(a,p)
}return a(),q
},b.StopGo.prototype._debug=function(){return b.notice.apply(b,arguments)
}
})(Wistia),function(){function z(a){var n,m,l,k='{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',f=a=="json";
if(f||a=="json-stringify"||a=="json-parse"){if(a=="json-stringify"||f){if(n=typeof S.stringify=="function"&&E){(l=function(){return 1
}).toJSON=l;
try{n=S.stringify(0)==="0"&&S.stringify(new Number)==="0"&&S.stringify(new String)=='""'&&S.stringify(X)===U&&S.stringify(U)===U&&S.stringify()===U&&S.stringify(l)==="1"&&S.stringify([l])=="[1]"&&S.stringify([U])=="[null]"&&S.stringify(null)=="null"&&S.stringify([U,X,null])=="[null,null,null]"&&S.stringify({A:[l,true,false,null,"\0\b\n\f\r\t"]})==k&&S.stringify(null,l)==="1"&&S.stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&S.stringify(new Date(-8640000000000000))=='"-271821-04-20T00:00:00.000Z"'&&S.stringify(new Date(8640000000000000))=='"+275760-09-13T00:00:00.000Z"'&&S.stringify(new Date(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&S.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'
}catch(d){n=!1
}}if(!f){return n
}}if(a=="json-parse"||f){if(typeof S.parse=="function"){try{if(S.parse("0")===0&&!S.parse(!1)){l=S.parse(k);
if(m=l.A.length==5&&l.A[0]==1){try{m=!S.parse('"\t"')
}catch(d){}if(m){try{m=S.parse("01")!=1
}catch(d){}}}}}catch(d){m=!1
}}if(!f){return m
}}return n&&m
}}var X={}.toString,W,V,U,T=typeof define=="function"&&define.amd,S=!T&&typeof exports=="object"&&exports;
S=this.JSON||(this.JSON={});
var R,Q,P,O,N,M,L,K,J,I,H,G,F,E=new Date(-3509827334573292),D,C,B;
try{E=E.getUTCFullYear()==-109252&&E.getUTCMonth()===0&&E.getUTCDate()==1&&E.getUTCHours()==10&&E.getUTCMinutes()==37&&E.getUTCSeconds()==6&&E.getUTCMilliseconds()==708
}catch(A){}z("json")||(E||(D=Math.floor,C=[0,31,59,90,120,151,181,212,243,273,304,334],B=function(d,c){return C[c]+365*(d-1970)+D((d-1969+(c=+(c>1)))/4)-D((d-1901+c)/100)+D((d-1601+c)/400)
}),(W={}.hasOwnProperty)||(W=function(f){var b={},a;
return(b.__proto__=null,b.__proto__={toString:1},b).toString!=X?W=function(e){var d=this.__proto__,g=e in (this.__proto__=null,this);
return this.__proto__=d,g
}:(a=b.constructor,W=function(d){var c=(this.constructor||a).prototype;
return d in this&&!(d in c&&this[d]===c[d])
}),b=null,W.call(this,f)
}),V=function(n,m){var l=0,k,j,b,a;
(k=function(){this.valueOf=0
}).prototype.valueOf=0,j=new k;
for(b in j){W.call(j,b)&&l++
}return k=j=null,l?l==2?a=function(r,q){var p={},i=X.call(r)=="[object Function]",h;
for(h in r){(!i||h!="prototype")&&!W.call(p,h)&&(p[h]=1)&&W.call(r,h)&&q(h)
}}:a=function(r,q){var p=X.call(r)=="[object Function]",i,h;
for(i in r){(!p||i!="prototype")&&W.call(r,i)&&!(h=i==="constructor")&&q(i)
}(h||W.call(r,i="constructor"))&&q(i)
}:(j=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],a=function(r,q){var p=X.call(r)=="[object Function]",i,g;
for(i in r){(!p||i!="prototype")&&W.call(r,i)&&q(i)
}for(g=j.length;
i=j[--g];
W.call(r,i)&&q(i)){}}),a(n,m)
},z("json-stringify")||(R={"\\":"\\\\",'"':'\\"',"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},Q=function(d,c){return("000000"+(c||0)).slice(-d)
},P=function(f){var e='"',h=0,g;
for(;
g=f.charAt(h);
h++){e+='\\"\b\f\n\r\t'.indexOf(g)>-1?R[g]:R[g]=g<" "?"\\u00"+Q(2,g.charCodeAt(0).toString(16)):g
}return e+'"'
},O=function(am,al,ak,aj,ai,ah,ag){var af=al[am],ae,ac,aa,Y,u,h,c,b,a,ad,ab,Z,w,j,i,d;
if(typeof af=="object"&&af){ae=X.call(af);
if(ae=="[object Date]"&&!W.call(af,"toJSON")){if(af>-1/0&&af<1/0){if(B){Y=D(af/86400000);
for(ac=D(Y/365.2425)+1970-1;
B(ac+1,0)<=Y;
ac++){}for(aa=D((Y-B(ac,0))/30.42);
B(ac,aa+1)<=Y;
aa++){}Y=1+Y-B(ac,aa),u=(af%86400000+86400000)%86400000,h=D(u/3600000)%24,c=D(u/60000)%60,b=D(u/1000)%60,a=u%1000
}else{ac=af.getUTCFullYear(),aa=af.getUTCMonth(),Y=af.getUTCDate(),h=af.getUTCHours(),c=af.getUTCMinutes(),b=af.getUTCSeconds(),a=af.getUTCMilliseconds()
}af=(ac<=0||ac>=10000?(ac<0?"-":"+")+Q(6,ac<0?-ac:ac):Q(4,ac))+"-"+Q(2,aa+1)+"-"+Q(2,Y)+"T"+Q(2,h)+":"+Q(2,c)+":"+Q(2,b)+"."+Q(3,a)+"Z"
}else{af=null
}}else{typeof af.toJSON=="function"&&(ae!="[object Number]"&&ae!="[object String]"&&ae!="[object Array]"||W.call(af,"toJSON"))&&(af=af.toJSON(am))
}}ak&&(af=ak.call(al,am,af));
if(af===null){return"null"
}ae=X.call(af);
if(ae=="[object Boolean]"){return""+af
}if(ae=="[object Number]"){return af>-1/0&&af<1/0?""+af:"null"
}if(ae=="[object String]"){return P(af)
}if(typeof af=="object"){for(w=ag.length;
w--;
){if(ag[w]===af){throw TypeError()
}}ag.push(af),ad=[],j=ah,ah+=ai;
if(ae=="[object Array]"){for(Z=0,w=af.length;
Z<w;
i||(i=!0),Z++){ab=O(Z,af,ak,aj,ai,ah,ag),ad.push(ab===U?"null":ab)
}d=i?ai?"[\n"+ah+ad.join(",\n"+ah)+"\n"+j+"]":"["+ad.join(",")+"]":"[]"
}else{V(aj||af,function(f){var e=O(f,af,ak,aj,ai,ah,ag);
e!==U&&ad.push(P(f)+":"+(ai?" ":"")+e),i||(i=!0)
}),d=i?ai?"{\n"+ah+ad.join(",\n"+ah)+"\n"+j+"}":"{"+ad.join(",")+"}":"{}"
}return ag.pop(),d
}},S.stringify=function(s,r,q){var p,n,m,l,j,a;
if(typeof r=="function"||typeof r=="object"&&r){if(X.call(r)=="[object Function]"){n=r
}else{if(X.call(r)=="[object Array]"){m={};
for(l=0,j=r.length;
l<j;
a=r[l++],(X.call(a)=="[object String]"||X.call(a)=="[object Number]")&&(m[a]=1)){}}}}if(q){if(X.call(q)=="[object Number]"){if((q-=q%1)>0){for(p="",q>10&&(q=10);
p.length<q;
p+=" "){}}}else{X.call(q)=="[object String]"&&(p=q.length<=10?q:q.slice(0,10))
}}return O("",(a={},a[""]=s,a),n,m,p,"",[])
}),z("json-parse")||(N=String.fromCharCode,M={"\\":"\\",'"':'"',"/":"/",b:"\b",t:"\t",n:"\n",f:"\f",r:"\r"},L=function(){throw G=F=null,SyntaxError()
},K=function(){var i=F,h=i.length,n,m,l,k,j;
while(G<h){n=i.charAt(G);
if("\t\r\n ".indexOf(n)>-1){G++
}else{if("{}[]:,".indexOf(n)>-1){return G++,n
}if(n=='"'){for(m="@",G++;
G<h;
){n=i.charAt(G);
if(n<" "){L()
}else{if(n=="\\"){n=i.charAt(++G);
if('\\"/btnfr'.indexOf(n)>-1){m+=M[n],G++
}else{if(n=="u"){l=++G;
for(k=G+4;
G<k;
G++){n=i.charAt(G),n>="0"&&n<="9"||n>="a"&&n<="f"||n>="A"&&n<="F"||L()
}m+=N("0x"+i.slice(l,G))
}else{L()
}}}else{if(n=='"'){break
}m+=n,G++
}}}if(i.charAt(G)=='"'){return G++,m
}L()
}else{l=G,n=="-"&&(j=!0,n=i.charAt(++G));
if(n>="0"&&n<="9"){n=="0"&&(n=i.charAt(G+1),n>="0"&&n<="9")&&L(),j=!1;
for(;
G<h&&(n=i.charAt(G),n>="0"&&n<="9");
G++){}if(i.charAt(G)=="."){k=++G;
for(;
k<h&&(n=i.charAt(k),n>="0"&&n<="9");
k++){}k==G&&L(),G=k
}n=i.charAt(G);
if(n=="e"||n=="E"){n=i.charAt(++G),(n=="+"||n=="-")&&G++;
for(k=G;
k<h&&(n=i.charAt(k),n>="0"&&n<="9");
k++){}k==G&&L(),G=k
}return +i.slice(l,G)
}j&&L();
if(i.slice(G,G+4)=="true"){return G+=4,!0
}if(i.slice(G,G+5)=="false"){return G+=5,!1
}if(i.slice(G,G+4)=="null"){return G+=4,null
}L()
}}}return"$"
},J=function(f){var e,h,g;
f=="$"&&L();
if(typeof f=="string"){if(f.charAt(0)=="@"){return f.slice(1)
}if(f=="["){e=[];
for(;
;
h||(h=!0)){f=K();
if(f=="]"){break
}h&&(f==","?(f=K(),f=="]"&&L()):L()),f==","&&L(),e.push(J(f))
}return e
}if(f=="{"){e={};
for(;
;
h||(h=!0)){f=K();
if(f=="}"){break
}h&&(f==","?(f=K(),f=="}"&&L()):L()),(f==","||typeof f!="string"||f.charAt(0)!="@"||K()!=":")&&L(),e[f.slice(1)]=J(K())
}return e
}L()
}return f
},H=function(f,d,h){var g=I(f,d,h);
g===U?delete f[d]:f[d]=g
},I=function(a,j,i){var h=a[j],c;
if(typeof h=="object"&&h){if(X.call(h)=="[object Array]"){for(c=h.length;
c--;
){H(h,c,i)
}}else{V(h,function(b){H(h,b,i)
})
}}return i.call(a,j,h)
},S.parse=function(a,h){var g,f;
return G=0,F=a,g=J(K()),K()!="$"&&L(),G=F=null,h&&X.call(h)=="[object Function]"?I((f={},f[""]=g,f),"",h):g
}))
}.call(Wistia),function(d){var c;
return d.extend({url:{proto:function(b){return b==null&&(b=window.location.href),/^https:\/\//.test(b)?"https:":"http:"
},paramsToJson:function(B){var A,z,y,x,w,v,u,t,s,r,q,p;
t={};
if(!B){return t
}u=B.split("&");
for(r=0,q=u.length;
r<q;
r++){v=u[r],p=v.split("="),w=p[0],s=p[1];
try{w=this._debrack(decodeURIComponent(w))||""
}catch(a){z=a,setTimeout(function(){return d.notice(z)
},50),w=""
}w=function(){var e,g,f;
f=[];
for(e=0,g=w.length;
e<g;
e++){x=w[e],f.push(d.obj.cast(x))
}return f
}(),y=d.obj.get(t,w),y!=null?d.obj.isArray(y)?y.push(this.urlComponentToJson(s)):(A=[y],A.push(this.urlComponentToJson(s)),d.obj.set(t,w,A)):d.obj.set(t,w,this.urlComponentToJson(s))
}return t
},urlComponentToJson:function(a){var h,g;
g=function(){try{return decodeURIComponent(a)
}catch(b){return h=b,setTimeout(function(){return d.notice(h)
},50),a
}}();
if(typeof a!="string"||!/^[\{\[].*[\}\]]$/.test(g)){return g
}try{return d.JSON.parse(g)
}catch(f){return h=f,g
}},jsonToParams:function(a){var f,e=this;
return f=[],d.obj.eachLeaf(a,function(h,g){return f.push(encodeURIComponent(e._brack(g))+"="+encodeURIComponent(h))
}),f.join("&")
},splitPath:function(h){var g,l,k,j,i;
k=[],h!=null&&(l=h.split(/\/+/));
for(j=0,i=l.length;
j<i;
j++){g=l[j],g!=null&&g!==""&&k.push(g)
}return k
},joinPath:function(f){var e;
return e="",f!=null&&(e="/"+f.join("/")),e
},_brack:function(g){var f,j,i,h;
j=g[0];
for(f=i=1,h=g.length;
1<=h?i<h:i>h;
f=1<=h?++i:--i){j+="["+g[f]+"]"
}return j
},_debrack:function(b){return b.match(/([\w\-\_]+)/g)
}}}),c=function(){function a(b){this.params={},this.path=[],this.host="",typeof b=="object"?this.fromOptions(b):b&&this.fromRaw(b)
}return a.prototype._paramsR=/\?(.+)$/,a.prototype.fromOptions=function(g){var f,j,i,h;
h=["protocol","host","port","params","path"];
for(j=0,i=h.length;
j<i;
j++){f=h[j],g[f]!=null&&(this[f]=g[f])
}return this
},a.prototype.fromRaw=function(e){var f;
this.rawUrl=e;
if(f=e.match(/^((?:https?\:)|(?:file\:)|(?:ftp\:))?\/\//)){this.protocol=f[1]||void 0
}if(f=e.match(/\/\/([^\:\?\/]*)/)){this.host=f[1]||void 0
}if(f=e.match(/\/\/.*?((?:\/[^\?#$]+))/)){this.rawPath=f[1],this._hasTrailingSlash=/\/$/.test(this.rawPath),this.path=d.url.splitPath(this.rawPath)
}if(f=e.match(/\:(\d+)/)){this.port=parseInt(f[1],10)
}if(f=e.match(/\?([^#]+)/)){this.rawParams=f[1],this.params=d.url.paramsToJson(this.rawParams)
}if(f=e.match(/#(.*)$/)){this.anchor=f[1]
}return this
},a.prototype.clone=function(){return new a({protocol:this.protocol,host:this.host,port:this.port,path:d.extend([],this.path),params:this.params,anchor:this.anchor})
},a.prototype.ext=function(g){var f,j,i,h;
return g!=null?(f=this.ext(),j=this.path.length-1,i=new RegExp("\\."+f,"g"),f&&(this.path[j]=""+this.path[j].replace(i,"")),this.path[j]=""+this.path[j]+"."+g):((h=this.path[this.path.length-1].match(/\.(.*)$/))!=null?h[1]:void 0)||null
},a.prototype.isRelative=function(){return(this.protocol==null||this.protocol===""||this.protocol===window.location.protocol)&&(!this.host||this.host===window.location.hostname)
},a.prototype.toString=function(){return this.isRelative()?this.relative():this.absolute()
},a.prototype.absolute=function(){var f,e;
return e="",this.protocol!=null&&(e=this.protocol),f="",this.port!=null&&(f=":"+this.port),""+e+"//"+this.host+f+this.relative()
},a.prototype.relative=function(){var e,f;
return f="",this.path.length>0&&(f=d.url.joinPath(this.path),this._hasTrailingSlash&&(f+="/")),e="?"+d.url.jsonToParams(this.params),e.length===1&&(e=""),""+f+e+this.relativeAnchor()
},a.prototype.authority=function(){var b;
return b=this.port!=null?":"+this.port:"",""+this.host+b
},a.prototype.relativeProtocol=function(){var b;
return b="",this.port!=null&&(b=":"+this.port),"//"+this.host+b+this.relative()
},a.prototype.relativeAnchor=function(){var b;
return b="",this.anchor!=null&&(b="#"+this.anchor),""+b
},a
}(),d.url.create=function(b){return new c(b)
},d.url.parse=function(b){return new c(b)
}
}(Wistia);
var __slice=[].slice;
(function(d){var c;
c=d;
if(c.log){return
}return c._logLevels={error:0,warning:1,notice:2,info:3,debug:4},c._logLevel=0,c.logLevel=function(b){return c._logLevels[b]!=null?(c._logLevel=c._logLevels[b],typeof console!="undefined"&&console!==null?console.log('Log level set to "'+b+'" ('+c._logLevels[b]+")"):void 0):typeof console!="undefined"&&console!==null?console.log('Unknown log level "'+b+'"'):void 0
},c._logs=[],c._lastLoggedAt=new Date,c._log=function(){var w,v,u,t,s,r,q,p,n,m,b;
u=arguments[0],n=2<=arguments.length?__slice.call(arguments,1):[],b=c._logLevels[u]<=c._logLevel;
if(!b){return
}s=!1,c._logGrep||c._logGrepv?(v=function(){var a,h,g;
g=[];
for(a=0,h=n.length;
a<h;
a++){p=n[a];
try{g.push((typeof p.toString=="function"?p.toString():void 0)||"")
}catch(f){w=f,g.push("")
}}return g
}().join(" "),r=!c._logGrep||v.match(c._logGrep),q=!c._logGrepv||!v.match(c._logGrepv),s=r&&q):s=!0;
if(!s){return
}m=new Date,t=[u,m],t=t.concat(n);
if(c._logs.length>=1000||m.getTime()-c._lastLoggedAt.getTime()>5000){c._logs=[]
}c._lastLoggedAt=m,c._logs.push(t);
if(!(n.length===1&&(w=n[0]) instanceof Error)){return c.detect.browser.msie&&(c.detect.browser.version<9||c.detect.browser.quirks)?typeof console!="undefined"&&console!==null?console.log(n.join(" ")):void 0:typeof console!="undefined"&&console!==null?console.log.apply(console,n):void 0
}typeof console!="undefined"&&console!==null&&console.log(w.message);
if(w.stack){return typeof console!="undefined"&&console!==null?console.log(w.stack):void 0
}},c.stacktrace=function(){var f;
try{throw new Error("stacktrace")
}catch(e){return f=e,f.stack
}},c.info=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],c._log.apply(c,["info"].concat(__slice.call(b)))
},c.error=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],c._log.apply(c,["error"].concat(__slice.call(b)))
},c.notice=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],c._log.apply(c,["warning"].concat(__slice.call(b)))
},c.debug=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],c._log.apply(c,["debug"].concat(__slice.call(b)))
},c.log=c.error,c._initializers.initWLog=function(){var w,v,u,t,s,r,q,p,n,m,b;
w=c.url.parse(location.href),document.referrer&&(v=c.url.parse(document.referrer)),((s=w!=null?(r=w.params)!=null?r.wlog:void 0:void 0)||(s=v!=null?(q=v.params)!=null?q.wlog:void 0:void 0))&&c.logLevel(s);
if((u=w!=null?(p=w.params)!=null?p.wgrep:void 0:void 0)||(u=v!=null?(n=v.params)!=null?n.wgrep:void 0:void 0)){c._logGrep=new RegExp(u,"i")
}if((t=w!=null?(m=w.params)!=null?m.wgrepv:void 0:void 0)||(t=v!=null?(b=v.params)!=null?b.wgrepv:void 0:void 0)){return c._logGrepv=new RegExp(t,"i")
}},c._destructors.destroyWLog=function(){return c._logLevel=0,c._logGrep=null,c._logGrepv=null
}
})(Wistia),function(b){return b.extend({_detect:{na:navigator.userAgent,rwebkit:/(webkit)[ \/]([^\s]+)/i,ropera:/OPR\/([^\s]+)/i,rmsie:/(msie) ([^\s;]+)/i,rtrident:/(trident)\/\s*([^;]+)/i,rmozilla:/(mozilla)(?:.*? rv:([^\s\)]+))?/i,randroid:/(android) ([^;]+)/i,riphone:/(iphone)/i,ripad:/(ipad)/i,rwinphone:/(Windows Phone OS (\d+(?:\.\d+)?))/,rios:/OS (\d+)_(\d+)/i,rps3:/(playstation 3)/i,rblackberry:/BlackBerry|BB10/i,rfirefox:/(firefox)/i,browser:function(){return(this.browserMatch()[1]||"webkit").toLowerCase()
},browserVersion:function(){return this.browserMatch()[2]
},browserMatch:function(){var c;
return(c=this.na.match(this.rwebkit))!=null?c:(c=this.na.match(this.ropera))!=null?c:(c=this.na.match(this.rmsie))?(document.documentMode!=null&&(c[2]=document.documentMode),c):(c=this.na.match(this.rmozilla))?c:[]
},android:function(){var c;
return c=this.na.match(this.randroid),c==null?!1:{version:c[2]}
},oldandroid:function(){return this.android()&&this.android().version<"4.1.0"
},iphone:function(){return this.riphone.test(this.na)
},blackberry:function(){return this.rblackberry.test(this.na)
},retina:function(){return window.devicePixelRatio>1
},ipad:function(){return this.ripad.test(this.na)
},safari:function(){return this.rwebkit.test(this.na)&&!/chrome/i.test(this.na)&&!this.ipad()&&!this.iphone()
},opera:function(){return this.ropera.test(this.na)
},iosVersion:function(){var c;
return c=this.na.match(this.rios),c!=null?parseFloat(""+c[1]+"."+c[2]):0
},windowsPhone:function(){return this.rwinphone.test(this.na)
},ps3:function(){return this.rps3.test(this.na)
},trident:function(){return this.rtrident.test(this.na)
},firefox:function(){return this.rfirefox.test(this.na)
},windows:function(){return/win/i.test(navigator.platform)
},mac:function(){return/mac/i.test(navigator.platform)
},linux:function(){return/linux/i.test(navigator.platform)
},flash:function(){var c;
return c=this.flashFullVersion(),{version:parseFloat(c[0]+"."+c[1]),major:parseInt(c[0],10),minor:parseInt(c[1],10),rev:parseInt(c[2],10)}
},flashFullVersion:function(){var e,d;
try{try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
try{e.AllowScriptAccess="always"
}catch(f){return d=f,[6,0,0]
}}catch(f){d=f
}return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",")
}catch(f){d=f;
try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",")
}}catch(f){d=f
}}return[0,0,0]
},html5Video:function(){var g,f,j,i;
f=document.createElement("video"),i=!1;
try{!f.canPlayType||(i={},j='video/mp4; codecs="avc1.42E01E',i.h264=!!f.canPlayType(j+'"')||!!f.canPlayType(j+', mp4a.40.2"'))
}catch(h){g=h,i={h264:!1}
}return i
},localStorage:function(){var d;
try{return"localStorage" in window&&window.localStorage!==null
}catch(c){return d=c,!1
}},json:function(){return !!window.JSON&&typeof JSON.parse=="function"
},backgroundSize:function(){var c;
return c=document.createElement("div"),c.style.backgroundSize===""||c.style.webkitBackgroundSize===""||c.style.mozBackgroundSize===""||c.style.oBackgroundSize===""
},fullscreenEnabled:function(){return document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled
},mutationObserver:function(){var g,f,j,i,h;
f=["WebKit","Moz","O","Ms",""];
for(i=0,h=f.length;
i<h;
i++){g=f[i],j=g+"MutationObserver";
if(window[j]){return j
}}return null
},romulusSupport:function(){return !!(!this.iphone()&&!this.ipad()&&!this.android()&&!this.blackberry()&&!this.opera()&&(/webkit|mozilla/.test(this.browser())||this.browser()==="msie"&&this.browserVersion()>=11)&&this.localStorage()&&this.html5Video().h264)
}}}),b._initializers.initDetect=function(){if(!b.detect){return b.detect={browser:{version:b._detect.browserVersion(),quirks:b._detect.browser()==="msie"&&document.compatMode==="BackCompat",old:b._detect.browser()==="msie"&&(document.compatMode==="BackCompat"||b._detect.browserVersion()<7),ltie8:b._detect.browser()==="msie"&&(document.compatMode==="BackCompat"||b._detect.browserVersion()<8)},trident:b._detect.trident(),firefox:b._detect.firefox(),android:b._detect.android(),oldandroid:b._detect.oldandroid(),iphone:b._detect.iphone(),ipad:b._detect.ipad(),blackberry:b._detect.blackberry(),safari:b._detect.safari(),opera:b._detect.opera(),winphone:{version:b._detect.windowsPhone()[2]},ios:{version:b._detect.iosVersion()},windows:b._detect.windows(),mac:b._detect.mac(),linux:b._detect.linux(),retina:b._detect.retina(),ps3:b._detect.ps3(),flash:b._detect.flash(),video:b._detect.html5Video(),localstorage:b._detect.localStorage(),json:b._detect.json(),backgroundSize:b._detect.backgroundSize(),fullscreenEnabled:b._detect.fullscreenEnabled(),romulusSupport:b._detect.romulusSupport()},b.detect.browser[b._detect.browser()]=!0
}}
}(Wistia),function(d){var c;
c=d;
if(c.eventLoop){return
}return c.EventLoop=function(){function b(e){var f=this;
this._timeoutId=null,this._latency=(e!=null?e.latency:void 0)||100,this._blurLatency=(e!=null?e.blurLatency:void 0)||2000,this._functions={},this._paused={},c.elem.bind(window,"blur",function(){return f.blur()
}),c.elem.bind(window,"focus",function(){return f.focus()
}),this.start()
}return b.prototype.start=function(){var e=this;
return clearTimeout(this._timeoutId),this._loopFn==null&&(this._loopFn=function(){return e.runFunctions(),e._timeoutId=setTimeout(e._loopFn,e._latency)
}),this._loopFn()
},b.prototype.resync=function(){return this.start()
},b.prototype.resyncNextTick=function(){var e=this;
return setTimeout(function(){return e.resync()
},0)
},b.prototype.stop=function(){return clearTimeout(this._timeoutId)
},b.prototype.clear=function(){return this._functions={}
},b.prototype.runFunctions=function(){var z,y,x,w,v,u,t,s,r,q,p;
this._pausedDirty&&this.updatePaused(),t=[],q=this._functions;
for(x in q){y=q[x],w=(new Date).getTime(),u=w-y.lastRanAt;
if(!y.paused&&u>=y.interval){y.lastRanAt=w;
try{v=y.fn(),v===this.remove&&t.push(x)
}catch(n){z=n,c.error(z)
}}}p=[];
for(s=0,r=t.length;
s<r;
s++){x=t[s],p.push(this.remove(x))
}return p
},b.prototype.add=function(f,e,h){var g;
g=(new Date).getTime();
if(h()!==this.remove){return this._functions[f]={addedAt:g,lastRanAt:g,interval:e,fn:h},this._pausedDirty=!0
}},b.prototype.remove=function(f){var e=this;
return this.forEachMatchingKey(f,function(g){return delete e._functions[g]
})
},b.prototype.forEachMatchingKey=function(h,g){var l,k,j,i;
j=this._functions,i=[];
for(k in j){l=j[k],this.key1IncludesKey2(h,k)?i.push(g(k,l)):i.push(void 0)
}return i
},b.prototype.latency=function(e){return e!=null?this._latency=e:this._latency
},b.prototype.interval=function(f,e){return e!=null?this._functions[f].interval=e:this._functions[f].interval
},b.prototype.pause=function(e){return this._paused[e]=!0,this._pausedDirty=!0
},b.prototype.unpause=function(e){return this._paused[e]=!1,this._pausedDirty=!0
},b.prototype.isPaused=function(f){var e,h,g;
g=this._paused;
for(h in g){e=g[h];
if(e&&this.key1IncludesKey2(h,f)){return !0
}}return !1
},b.prototype.updatePaused=function(){var f,e,g;
g=this._functions;
for(e in g){f=g[e],f.paused=this.isPaused(e)
}return this._pausedDirty=!1
},b.prototype.key1IncludesKey2=function(f,e){return(typeof e.indexOf=="function"?e.indexOf(f):void 0)===0&&(e.length===f.length||e.charAt(f.length)===".")
},b.prototype.blur=function(){if(this._blurred){return
}return this._blurred=!0,this._savedLatency=this._latency,this._latency=this._blurLatency
},b.prototype.focus=function(){if(!this._blurred){return
}return this._blurred=!1,this._latency=this._savedLatency,this.resync()
},b
}(),c._initializers.initEventLoop=function(){var b;
return b=100,c.eventLoop=new c.EventLoop({latency:100,blurLatency:b})
},c._destructors.destroyEventLoop=function(){var b;
return(b=c.eventLoop)!=null&&b.stop(),c.eventLoop=null
}
}(Wistia),function(b){if(b.JudgeJudy){return
}return b.JudgeJudy=function(){function a(c){this.publicApi=c
}return a.prototype.mediaData=function(){return this.publicApi._mediaData
},a.prototype.opts=function(){return this.publicApi._opts
},a.prototype.bestPlayerType=function(h){var m,l,k,j,i;
return k=this.mediaData(),h=b.obj.merge({},this.opts(),h),m=k.assets,i=h.plea||b.localStorage("platformPreference")||h.platformPreference,l=h.force,i||(h.platformPreference==="romulus"?j="html5":j=h.playerPreference||k.playerPreference,j==="auto"||!j?this.fullRomulusSupport()&&(i="romulus"):j==="flash"?i="flash":j==="html5"&&(this.baseRomulusSupport()?i="romulus":k.assets.iphone&&(i="html5"))),l==="romulus"?l:b.detect.iphone||b.detect.ipad?"html5":b.detect.oldandroid?this.isHttps()&&this.flashSupport()?"flash":"external":i==="romulus"&&this.baseRomulusSupport()?"romulus":i==="html5"&&this.h264Support()?"html5":i==="flash"&&this.flashSupport()?"flash":i==="external"?"external":this.fullRomulusSupport()?"romulus":this.flashSupport()?"flash":this.baseRomulusSupport()?"romulus":this.h264Support()?"html5":this.noFallbackFromFlash()?"flash":"external"
},a.prototype.noFallbackFromFlash=function(){return b.detect.browser.msie&&(b.detect.browser.version<9||b.detect.browser.quirks)||b.detect.browser.mozilla
},a.prototype.has2PassIphoneEncode=function(){var c;
return(c=this.mediaData().assets.iphone)!=null?!!c["2pass"]:!!void 0
},a.prototype.isLessThan15Minutes=function(){return this.mediaData().duration<900
},a.prototype.sdFlashIsScreencast=function(){var c;
return(((c=this.mediaData().assets.flv)!=null?c.width:void 0)||0)>720
},a.prototype.hasNoFlashHdAssets=function(){return !this.hdFlashAsset()
},a.prototype.hdFlashAsset=function(){return b.Video.asset(this.mediaData(),{container:"flv",width:[940,1920],bitrate:[1200,20000]})
},a.prototype.hasGoodRomulusAssetsForSdOnly=function(){return this.hasNoFlashHdAssets()&&this.isLessThan15Minutes()&&this.has2PassIphoneEncode()&&!this.isScreencast()
},a.prototype.hasGoodRomulusAssetsForMd=function(){return this.isLessThan15Minutes()?this.isScreencast()?!!this.romulusScreencastAsset():!!b.Video.asset(this.mediaData(),{container:"mp4",width:[720,980]}):!1
},a.prototype.original=function(){return b.Video.asset(this.mediaData(),{type:"original"})
},a.prototype.isScreencast=function(){return this.original().width>640&&this.original().bitrate<1200
},a.prototype.romulusScreencastAsset=function(){return b.Video.asset(this.mediaData(),{container:"mp4",bitrate:[300,1300],sortBy:"width desc",width:[0,this.original().width]})
},a.prototype.hasGoodRomulusAssets=function(){return this.hasGoodRomulusAssetsForSdOnly()||this.hasGoodRomulusAssetsForMd()
},a.prototype.baseRomulusSupport=function(){return b.detect.romulusSupport&&this.mediaData().assets.iphone
},a.prototype.fullRomulusSupport=function(){return b.detect.romulusSupport&&this.hasGoodRomulusAssets()&&this.fullscreenSupport()
},a.prototype.h264Support=function(){return b.detect.video.h264
},a.prototype.flashSupport=function(){return b.detect.flash.version>=9
},a.prototype.fullscreenSupport=function(){return b._detect.fullscreenEnabled()
},a.prototype.isHttps=function(){return window.location.protocol==="https:"
},a
}()
}(Wistia),function(d){var c;
c=d;
if(c.embed){return
}return c._embed={},c.embed=function(b,h){var g,f;
return h==null&&(h={}),c.info("Wistia.embed",b,h),typeof b=="string"?f=b:(f=b.hashedId,c.cacheMedia(f,b)),g=new c.PublicApi(f,h),g
}
}(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
},__slice=[].slice;
(function(d){var c;
c=d;
if(c.PublicApi){return
}return c.PublicApi=function(){function a(b,h){this._initWithMediaData=__bind(this._initWithMediaData,this),this._allocEmbedSlot=__bind(this._allocEmbedSlot,this);
var g,f=this;
this.info("initialize"),this._judy=new c.JudgeJudy(this),this._hasImpl=new c.StopGo,this.hasPlugins=new c.StopGo,this.up=new c.StopGo,this.up(!0),this.down=new c.StopGo,this.down(!1),this.inViewport=new c.StopGo,this.inViewport(!1),this._playlistIndex=0,this._attrs={},this.params={},this.options={},this._pluginStopGos={},this.plugins={},this.data={},this.hashedId(b),this._givenOptions=h,this._playlist=[],this._setupContainer(),this._validate(),this._inferPropertiesBeforeMediaData(),this._dedupContainer(),this._addToGlobalCache(),this._setupBindings(),this._resetTracker(),this.addToPlaylist(this.hashedId(),h),this.down(this.looksDown()),this.up(this.looksUp()),(g=window.wistiaEmbeds)!=null&&g.bindHandles(),this.trigger("initembed"),this.monitor(),this.embedded(function(){return f.monitor()
}),this.ready(function(){return f.monitor()
}),this._withFreeEmbedSlots(function(){return c.remote.media(f.hashedId(),f._initWithMediaData)
})
}return a.prototype._log=function(){var b,f,e;
return b=arguments[0],f=2<=arguments.length?__slice.call(arguments,1):[],c[b].apply(c,[this.constructor.name,this.hashedId()||"no hashedId",(e=this.container)!=null?e.id:void 0,this.uuid].concat(__slice.call(f)))
},a.prototype.error=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["error"].concat(__slice.call(b)))
},a.prototype.warn=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(b)))
},a.prototype.notice=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(b)))
},a.prototype.info=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["info"].concat(__slice.call(b)))
},a.prototype.debug=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["debug"].concat(__slice.call(b)))
},a.prototype.log=function(){var b;
return b=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["log"].concat(__slice.call(b)))
},a.prototype._withFreeEmbedSlots=function(b){var e=this;
return this._setupEmbedSlots(),this.embedded(function(){return setTimeout(function(){return e._freeEmbedSlot()
},e._embedSlotThrottleInterval())
}),this._freeEmbedSlotOnError==null&&(this._freeEmbedSlotOnError=function(){return e._freeEmbedSlot(),e.unbind
}),this.rebind("servererror",this._freeEmbedSlotOnError),c._embedSlotFree(function(){return e._allocEmbedSlot(),b()
})
},a.prototype._setupEmbedSlots=function(){c._embedSlots==null&&(c._embedSlots=[]);
if(!c._embedSlotFree){return c._embedSlotFree=new c.StopGo,c._embedSlotFree(!0)
}},a.prototype._maxEmbedSlots=function(){var b,f,e;
return e=function(){var h,g;
h=c.data("video"),g=[];
for(b in h){f=h[b],g.push(b)
}return g
}().length,e>20?3:e>10?6:10
},a.prototype._embedSlotThrottleInterval=function(){return 500
},a.prototype._freeEmbedSlot=function(){var b;
c._embedSlots=function(){var j,i,h,g;
h=c._embedSlots,g=[];
for(j=0,i=h.length;
j<i;
j++){b=h[j],b!==this&&g.push(b)
}return g
}.call(this);
if(c._embedSlots.length<this._maxEmbedSlots()){return c._embedSlotFree(!0)
}},a.prototype._allocEmbedSlot=function(){c._embedSlots.push(this);
if(c._embedSlots.length>=this._maxEmbedSlots()){return c._embedSlotFree(!1)
}},a.prototype._shouldLazyLoad=function(){var b;
return b=this._gatherOptions(),!window._inWistiaIframe&&parent===self&&(b.lazyLoad||this.popover&&b.lazyLoad!==!1)
},a.prototype._initWithMediaData=function(b){var l,k,j,i=this;
this.info("_initWithMediaData",b);
try{c.Video.assets(b,{"public":!0}).length===0&&c.Metrics.videoCount(this,"player/no-public-assets")
}catch(h){l=h,this.debug(l)
}if(this.isRemoved()){this.notice("abort, video already removed");
return
}if(b.error){this.notice("display error message from server"),this._displayServerError(b),this.trigger("servererror");
return
}return this._mediaData=b,this.data.media=b,this.info("_optionSources",this._optionSources()),this._opts=this._gatherOptions(),this.info("_opts",c.obj.clone(this._opts)),c.obj.merge(this._mediaData,this._opts.mediaData),this._inferPropertiesAfterMediaData(),j=c.PublicApi.classFor(this._judy.bestPlayerType()),this._impl=(new j(this)).init(),this.grid=this._impl.setupGrid(),this._hasImpl(!0),this.hasData(!0),k=this._impl,this._execPlugins(function(){var e;
return i.hasPlugins(!0),((e=i._embedContainer)!=null?e.parentNode:void 0)?k===i._impl?(i._impl.embed(),i._runMethodsFromOptions(),c.timeout(""+i.uuid+".prefetch_next_media",function(){return i.prefetchNextMedia()
},2000)):(k.remove(),i.notice("embed(): impl changed from",k,"to",i._impl,"removing zombie")):i.notice("embed(): container removed, giving up")
})
},a.prototype._setDeprecatedProperties=function(){var b=this;
return this.options=c.obj.clone(this._opts),this.params=c.obj.clone(this._opts),c.obj.merge(this.params,this._attrs),this._attrs.email&&(this.params.trackEmail=this._attrs.email),this._hasImpl(function(){var e;
return b.playerType=b.embedType=(e=b._impl)!=null?e.playerType:void 0
})
},a.prototype.elem=function(){var b;
return(b=this._impl)!=null?typeof b.elem=="function"?b.elem():void 0:void 0
},a.prototype._resetTracker=function(){var b,e=this;
return(b=this._tracker)!=null&&b.reset(),this._tracker||(this._tracker=new c.VideoTracker2(this)),this.tracker=this._tracker,this._visitorKey=this._tracker.visitorKey(),this._tracker.monitor(),this.hasData(function(){return e._impl._tracker=e._tracker
})
},a.prototype._execPlugins=function(b){return this._pluginScripts=c.plugin._scriptsFromVideo(this),this.info("_execPlugins",this._pluginScripts),c.plugin._execQueue(this,this._pluginScripts,b)
},a.prototype._optionSources=function(b){var l,k,j,i,h;
b==null&&(b={}),b=c.obj.merge({givenOptions:c.obj.clone(this._givenOptions),mediaData:c.obj.clone(this._mediaData),hashedId:this._hashedId,container:this.container},b),k=b.givenOptions,k.version==="v1"?l={}:b.mediaData?(l=c.obj.clone(b.mediaData.embed_options),delete l.stillUrl):l={},i={customize:l,global:c.options("__global__"),hashedId:c.options(b.hashedId),dom:c.options("__"+b.container.id+"_dom_options__"),container:c.options(b.container.id),inline:k};
for(j in i){h=i[j],c.obj.isEmpty(h)&&delete i[j]
}return i
},a.prototype._gatherOptions=function(b){var n,m,l,k,j,i;
b==null&&(b={}),m={},l=this._optionSources(b);
for(n in l){k=l[n],((j=b.only)!=null?j.indexOf(n):void 0)>=0?c.obj.merge(m,k):((i=b.except)!=null?i.indexOf(n):void 0)<0?c.obj.merge(m,k):!b.only&&!b.except&&c.obj.merge(m,k)
}return c.obj.cast(m),this._normalizeOptions(m),m
},a.prototype.hashedId=function(b){return b!=null?(this._hashedId=b,this):this._hashedId
},a.prototype._normalizeOptions=function(b){return b.twitter&&(this.info("twitter detected"),c.obj.get(b,"plugin.socialbar-v1")&&(this.info("disabled socialbar"),c.obj.set(b,"plugin.socialbar-v1.on",!1)),c.obj.get(b,"plugin.transcript-v2")&&(this.info("disabled transcript"),c.obj.set(b,"plugin.transcript-v2.on",!1))),b.playButtonVisible!=null&&(b.playButton=c.obj.cast(b.playButtonVisible),delete b.playButtonVisible),b
},a.prototype._setupContainer=function(){return this._containerId=this._givenOptions.container?this._givenOptions.container:"wistia_"+this.hashedId(),typeof this._containerId=="string"?this.container=document.getElementById(this._containerId):this.container=this._containerId,this.container&&(this.container.wistiaApi=this,this._startingHtml=this.container.innerHTML,this.container.innerHTML=""),this.info("container",this.container)
},a.prototype._inferPropertiesBeforeMediaData=function(){var b,j,i,h,g;
this.chrome=c.elem.fromObject({id:c.seqId("wistia_chrome_"),style:c.generate.relativeBlockCss()}),c.elem.style(this.chrome,{overflow:"hidden",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"}),j=this._gatherOptions(),j.popover==="v2"?(g=((h=j.popoverSize)!=null?h.split("x"):void 0)||[640,360],i=g[0],b=g[1],this._embedContainer=c.elem.fromObject({id:""+this.container.id+"_popover",style:{height:""+b+"px",width:""+i+"px"}}),c.elem.append(document.body,this._embedContainer),this.popover=new c.Popover(this)):this._embedContainer=this.container,c.elem.append(this._embedContainer,this.chrome),j.uuid?this.uuid=j.uuid:this.uuid=c.seqId(),this.info("uuid",this.uuid),j.playlistLoop!=null&&(this._attrs.playlistLoop=j.playlistLoop);
if(this._embedContainer){return this._attrs.startingWidth=c.elem.width(this._embedContainer),this._attrs.startingHeight=c.elem.height(this._embedContainer)
}},a.prototype._inferPropertiesAfterMediaData=function(){var b,f,e;
return this._attrs.shouldTrack=!this._opts.doNotTrack,this._attrs.seekThreshold=this._opts.seekThreshold||1.5,this._opts.rawEmbed!=null?this._attrs.rawEmbed=c.obj.cast(this._opts.rawEmbed):this._opts._inIframe!=null?this._attrs.rawEmbed=!c.obj.cast(this._opts._inIframe||!1):this._attrs.rawEmbed=!0,this._opts.pageUrl?this._attrs.pageUrl=this._opts.pageUrl:this._attrs.pageUrl||(this._attrs.pageUrl=((f=window.FreshUrl)!=null?f.originalUrl:void 0)||location.href),this._opts.trackEmail!=null&&(this._attrs.email=this._opts.trackEmail),!this._attrs.email&&this._attrs.shouldTrack&&(b=((e=this._attrs.pageUrl)!=null?e.match(/wemail\=([^\&\#]+)/):void 0)||null,b=b?b[1]:null,b&&(this._attrs.email=b)),this._attrs.playerColor=c.Video._sanePlayerColor(this._opts.playerColor||"636155"),this._attrs.trackWithJs=!0,this._attrs.newStillLogic=!0,this._opts.noDeprecatedProperties||this._setDeprecatedProperties(),this
},a.prototype._runMethodsFromOptions=function(){var b=this;
this._opts.foreignData!=null&&this.foreignData(this._opts.foreignData),this._opts.email!=null?this.email(this._opts.email):this._opts.trackEmail!=null&&this.email(this._opts.trackEmail),this._opts.videoFoam!=null&&this.videoFoam(this._opts.videoFoam),this._hasImpl(function(){if(b._opts.playerColor!=null&&b.playerType!=="flash"){return b.playerColor(b._opts.playerColor)
}}),this._opts.volume!=null&&this.volume(this._opts.volume),this._opts.suppressPlay&&this.suppressPlay(this._opts.suppressPlay),this._hasImpl(function(){if(b._opts.autoPlay&&b._impl.canAutoPlay()){return b.play()
}}),this._opts.pause&&this.pause();
if(this._opts.time!=null){return this.time(this._opts.time,{lazy:c.detect.iphone||c.detect.ipad||c.detect.android})
}},a.prototype._validate=function(){var b;
b=this._errors();
if(b.length>0){throw new Error(b.join(", "))
}return !0
},a.prototype._errors=function(){var b;
return b=[],this.container||b.push('Could not find element with ID "'+this._containerId+'" in DOM. Failed to initialize video "'+this._hashedId+'".'),b
},a.prototype._dedupContainer=function(){var b,q,p,n,m,l,k,j;
if(c.data("video")){q=[],l=c.data("video");
for(p in l){b=l[p],((k=b.container)!=null?k.id:void 0)===this.container.id&&q.push(b)
}j=[];
for(n=0,m=q.length;
n<m;
n++){b=q[n],this.notice("_dedupContainer",b.container.id),j.push(b.remove())
}return j
}},a.prototype._addToGlobalCache=function(){return this.info("_addToGlobalCache",this.uuid),c.data(["video",this.uuid],this),c.data(["video-by-hashed-id",this.hashedId()],this)
},a.prototype._displayServerError=function(b){return b.iframe?this.container.innerHTML="<iframe src='"+c.proto()+"//"+c.remote.embedHost()+"/embed/iframe/"+this.hashedId()+"' height='"+this.height()+"' width='"+this.width()+"' frameborder='0' scrolling='no'></iframe>":this.container.innerHTML="<div style='background:#fff;border:2px dashed #ddd;color:#aaa;font-family:Century Gothic,Arial;font-size:14px;text-align:center;width:"+this.width()+";height:"+this.height()+";'><div style='padding:20px;'>"+(b.message||b.error)+"</div></div>"
},a.prototype._implExec=function(){var b,f,e=this;
return f=arguments[0],b=2<=arguments.length?__slice.call(arguments,1):[],this._hasImpl(function(){var g;
return e._impl[f]?(g=e._impl)[f].apply(g,b):e.warn(""+f+" is not defined",c.stacktrace())
}),this
},a.prototype._implGet=function(){var b,h,g,f;
return g=arguments[0],h=arguments[1],b=3<=arguments.length?__slice.call(arguments,2):[],h==null&&(h=null),this._hasImpl()?this._impl[g]?(f=this._impl)[g].apply(f,b):this.warn(""+g+" is not defined",c.stacktrace()):h
},a.prototype._implSetOrGet=function(){var f,e,g;
return g=arguments[0],e=arguments[1],f=3<=arguments.length?__slice.call(arguments,2):[],f.length>0?this._implExec.apply(this,[g].concat(__slice.call(f))):this._implGet(g,e)
},a.prototype.rebuild=function(){var b=this;
return this._hasImpl(function(){return b._impl.rebuild()
})
},a.prototype.fullRebuild=function(b){return b==null&&(b={}),this.replaceWith(this._impl._mediaData,c.obj.merge({force:this._impl.playerType,inPlace:!1,transition:"none"},b))
},a.prototype.rebuildAs=function(b,e){return e==null&&(e={}),this.fullRebuild(c.obj.merge(this._givenOptions,e,{force:b,transition:"none"}))
},a.prototype.replace=function(b,e){return e==null&&(e={}),this.replaceWith(b,c.obj.merge({inPlace:!0,inlineOptionsOnly:!0},e))
},a.prototype.replaceWith=function(b,j){var i,h,g=this;
return j==null&&(j={}),this.info("replaceWith",b,j),h=function(){},c.obj.isObject(b)?this._replaceWithMediaData(b,j):(i=c.mediaFromCache(b))?this._replaceWithMediaData(i,j):(this.hasData(!1),this._hasImpl(!1),c.remote.media(b,function(e){return g._replaceWithMediaData(e,j)
})),this._hasImpl()?h():this._hasImpl(h),this
},a.prototype._replaceWithMediaData=function(D,C){var B,A,z,y,x,w,v,u,t,s,r,q=this;
C==null&&(C={}),this.info("_replaceWithMediaData",D,C);
if(D.error){this._displayServerError(D),this.trigger("servererror");
return
}if(!this._impl){this._initWithMediaData(D,C);
return
}C.playlistIndex!=null?(this._playlistIndex=C.playlistIndex,delete C.playlistIndex):this._inPlaylist(D.hashedId)&&(this._playlistIndex=this._playlistIndexOf(D.hashedId)),C.inlineOptionsOnly!=null&&(y=C.inlineOptionsOnly,delete C.inlineOptionsOnly),C.inPlace!=null&&(z=C.inPlace,delete C.inPlace),C.transition!=null&&(s=C.transition,delete C.transition),C.transitionTime!=null&&(r=C.transitionTime,delete C.transitionTime),C.pauseBefore!=null?(u=C.pauseBefore,delete C.pauseBefore):u=!0,this.trigger("beforereplace"),this.hasData(!1),this._hasImpl(!1),this._tracker.stopMonitoring(),v=this._impl,typeof v.wipeOutstandingAsyncFunctions=="function"&&v.wipeOutstandingAsyncFunctions(),u&&v.pause(),this._hashedId=D.hashedId,this._mediaData=D;
try{c.Video.assets(D,{"public":!0}).length===0&&c.Metrics.videoCount(this,"player/no-public-assets")
}catch(b){B=b,this.debug(B)
}return this.data.media=D,this._givenOptions=C,this._opts=y?this._gatherOptions({only:"inline"}):this._gatherOptions(),this.info("_opts",c.obj.clone(this._opts)),c.obj.merge(this._mediaData,this._opts.mediaData),this._inferPropertiesAfterMediaData(),t=this._judy.bestPlayerType(),A=t!==v.playerType?!1:v.playerType==="html5"&&c.elem.fullscreenElement()?!0:c.detect.iphone||c.detect.android||c.detect.ipad?!0:z!=null?z:!1,this.info("inPlace",A),x=c.PublicApi.classFor(t),w=this._impl=(new x(this)).init(),A?this.grid=this._impl.grid=v.grid:this.grid=this._impl.setupGrid(),this._hasImpl(!0),this.hasData(!0),this._resetTracker(),this.turnOffPluginApis(),A&&(this.removePlugins(),v.stopStreaming()),this.hasPlugins(!1),(!A&&s==="fade"||s==="crossfade")&&c.elem.style(this._impl.gridChildren(),{opacity:0}),this._execPlugins(function(){q.hasPlugins(!0);
if(q._impl!==w){q.notice("replaceWith(): impl changed from",w,"to",q._impl,"not completing replacement");
return
}return A?q._replaceMode(function(){return q._impl.initFrom(v)
}):q._replaceMode(function(){return q._embedWithTransitionFrom(v,s,{time:r})
}),q._runMethodsFromOptions(),q._allowContainerMatch()&&q.width(q.containerWidth(),{constrain:!0}),q.trigger("afterreplace"),c.timeout(""+q.uuid+".prefetch_next_media",function(){return q.prefetchNextMedia()
},2000)
})
},a.prototype._embedWithTransitionFrom=function(b,j,i){var h,g=this;
return j==null&&(j="none"),this.info("_embedWithTransitionFrom",b,j),typeof(h=this._impl).transferStateFrom=="function"&&h.transferStateFrom(b),j==="slide"||j==="slideleft"?(this.info("slideleft"),b.slideOutLeft(i,function(){return b.remove()
}),this._impl.embed(),this._impl.slideInLeft(i)):j==="slideright"?(this.info("slideright"),b.slideOutRight(i,function(){return b.remove()
}),this._impl.embed(),this._impl.slideInRight(i)):j==="fade"?(this.info("fade"),b._opts.wmode!=="transparent"&&(b.grid.center.style.backgroundColor="#000"),i.time!=null&&(i.time=Math.round(i.time/2)),b.fadeOut(i,function(){return b.remove(),g._impl._opts.wmode!=="transparent"&&(g._impl.grid.center.style.backgroundColor="#000"),g._impl.embed(),g._impl.fadeIn(i,function(){var e;
return(e=g._impl.grid)!=null?e.center.style.backgroundColor="":void 0
})
})):j==="crossfade"?(this.info("crossfade"),c.elem.style(b.grid.root,{position:"absolute",zIndex:0}),c.elem.style(this._impl.grid.root,{zIndex:1}),this._impl.embed(),this._impl.fadeIn(i,function(){return b.remove(),c.elem.style(g._impl.grid.root,{zIndex:""})
})):(this.info("no transition"),this._impl.embed(),b.remove())
},a.prototype._replaceMode=function(f){var e=this;
return this.info("_replaceMode",!0),this._impl._replacing=!0,f(),this._impl.embedded(function(){return e._impl._replacing=!1,e.info("_replaceMode",!1)
})
},a.prototype.remove=function(){var b,e;
return this.info("remove"),this.trigger("down"),this.trigger("beforeremove"),this._freeEmbedSlot(),this._implExec("remove",{trigger:!1}),this._hasImpl(!1),(b=this.popover)!=null&&b.remove(),c.elem.remove(this._foamDummyElem),(e=c.eventLoop)!=null&&e.remove(this.uuid),c.clearTimeouts(this.uuid),this._unbindListeners(),c.elem.remove(this.chrome),c.removeData(["video",this.uuid]),this.trigger("afterremove"),this._bindings={}
},a.prototype.isRemoved=function(){return !c.data(["video",this.uuid])
},a.prototype._unbindListeners=function(){c.elem.unbindAllInside(this.chrome);
if(this._throttleTriggerViewport){return c.elem.unbind(window,"scroll",this._throttleTriggerViewport),c.elem.unbind(window,"resize",this._throttleTriggerViewport)
}},a.prototype._saveState=function(){return this._savedState={state:this.state(),time:this.time(),volume:this.volume(),inFullscreen:this.inFullscreen()}
},a.prototype.suspend=function(){if(this._suspended){return
}return this._saveState(),this.info("suspend",c.obj.clone(this._savedState)),this.pause(),this.suppressPlay(!0),this.cancelFullscreen(),this._suspended=!0,this
},a.prototype.resume=function(b){var e;
return b==null&&(b={}),e=c.obj.merge({},this._savedState,b),this.info("resume",c.obj.clone(e)),this._suspended=!1,this.suppressPlay(!1),this.volume(e.volume),e.time>0&&(e.state==="ended"?this.playerType==="flash"&&this.duration()>1800?this.time(e.time-10):this.time(e.time-1):this.time(e.time)),e.state==="playing"&&this.play(),this
},a.prototype._setupBindings=function(){var b=this;
return this.bind("afterend",function(){if(!b._suspended){if(b.nextVideo()){return b.embedNext()
}if(b._attrs.playlistLoop){return b.info("playlistLoop"),b.embedIndex(0,{autoPlay:!0})
}}}),this.bind("widthchange",function(){var e,f;
return(e=b._impl)!=null&&(e._width=b._width=b.width()),(f=b._impl)!=null?f._videoWidth=b._videoWidth=b.videoWidth():void 0
}),this.bind("heightchange",function(){return b._impl._height=b._height=b.height(),b._impl._videoHeight=b._videoHeight=b.videoHeight()
}),this._throttleTriggerViewport==null&&(this._throttleTriggerViewport=c.util.throttle(300,function(){var e;
e=b._isInViewportNow();
if(e&&!b._inViewport){return b.trigger("enterviewport"),b.inViewport(!0)
}if(b._inViewport&&e){return b.trigger("leaveviewport"),b.inViewport(!1)
}})),c.elem.rebind(window,"scroll",this._throttleTriggerViewport),c.elem.rebind(window,"resize",this._throttleTriggerViewport),this.bind("initembed",this._throttleTriggerViewport),this.bind("up",this._throttleTriggerViewport)
},a.prototype._isInViewportNow=function(){var b,j,i,h,g;
return this.down()||this.looksDown()?!1:(b=c.elem.offset(this.container),i=b.top,j=i+c.elem.height(this.container),g=c.util.scrollTop(),h=c.util.scrollTop()+c.elem.height(window),i>=g&&i<h||j>=g&&j<h||i<=g&&j>=h)
},a.prototype._pauseEventLoop=function(){var b;
c.eventLoop.pause(this.uuid);
if((b=this._impl)!=null?b.uuid:void 0){return c.eventLoop.pause(this._impl.uuid)
}},a.prototype._unpauseEventLoop=function(){var b;
c.eventLoop.unpause(this.uuid);
if((b=this._impl)!=null?b.uuid:void 0){return c.eventLoop.unpause(this._impl.uuid)
}},a.prototype.playlistIndex=function(){return this._playlistIndexOf(this.hashedId())
},a.prototype.nextVideo=function(){return this.playlistIndex()>=0?this._playlist[this.playlistIndex()+1]||null:null
},a.prototype.previousVideo=function(){return this.playlistIndex()>0?this._playlist[this.playlistIndex()-1]||null:null
},a.prototype._playlistIndexOf=function(g){var f,j,i,h;
for(f=j=0,i=this._playlist.length;
0<=i?j<=i:j>=i;
f=0<=i?++j:--j){if(((h=this._playlist[f])!=null?h.hashedId:void 0)===g){return f
}}return -1
},a.prototype._inPlaylist=function(b){return this._playlistIndexOf(b)>=0
},a.prototype._setTransitionOptions=function(b){b.transition||(b.transition=this._opts.playlistTransition||"fade"),b.transitionTime||(b.transitionTime=this._opts.playlistTransitionTime);
if(b.playlistIndex&&b.transition==="slide"){return b.playlistIndex>=this._playlistIndex?b.transition="slideleft":b.transition="slideright"
}},a.prototype.embedNext=function(b){var f,e;
return e=this.nextVideo(),this.info("embedNext",e),f=c.obj.merge({autoPlay:!0},e.options,b),f.playlistIndex=this._playlistIndex+1,this._setTransitionOptions(f),this.replaceWith(e.hashedId,f)
},a.prototype.embedPrevious=function(b){var f,e;
return e=this.previousVideo(),this.info("embedPrevious",e),f=c.obj.merge({autoPlay:!0},e.options,b),f.playlistIndex=this._playlistIndex-1,this.replaceWith(e.hashedId,f)
},a.prototype.embedIndex=function(b,h){var g,f;
return f=this._playlist[b],this.info("embedIndex",b,f),g=c.obj.merge({autoPlay:!0},f.options,h),g.playlistIndex=b,this.replaceWith(f.hashedId,g)
},a.prototype.addToPlaylist=function(b,q,p){var n,m,l,k,j;
q==null&&(q={}),p==null&&(p={}),this._playlist==null&&(this._playlist=[]),j=c.util.toArray(b);
for(l=0,k=j.length;
l<k;
l++){m=j[l],n={hashedId:m,options:q},p=c.obj.clone(p),p.after?p.detect=function(e){return e.hashedId===p.after
}:p.before&&(p.detect=function(e){return e.hashedId===p.before
}),this.info("addToPlaylist",n,p),c.util.insertIntoArray(this._playlist,n,p)
}return this.info("updated _playlist",c.obj.clone(this._playlist)),this._playlist
},a.prototype.prefetchNextMedia=function(){var b;
if(!this._opts._inLegacyPlaylist&&(b=this.nextVideo())){return this.prefetchMedia(b.hashedId,b.options)
}},a.prototype.prefetchMedia=function(b,f){var e=this;
return this.info("@prefetchMedia",b),c.remote.media(b,function(g){return e.info("prefetched",b),e._prefetchPluginScripts(g,f)
})
},a.prototype._prefetchPluginScripts=function(b,q){var p,n,m,l,k,j=this;
this.info("@_prefetchPluginScripts for",b,q),p=this._gatherOptions({givenOptions:q,mediaData:b,hashedId:b.hashedId,container:this.container}),n=c.plugin._scriptsFromOptions(p),n=function(){var e,g,f;
f=[];
for(e=0,g=n.length;
e<g;
e++){m=n[e],c.plugin._prefetched[m.src]||f.push(m)
}return f
}();
if(n.length===0){this.info("@_prefetchPluginScripts: no need to fetch plugins");
return
}for(l=0,k=n.length;
l<k;
l++){m=n[l],c.plugin._prefetched[m.src]="fetching"
}return this.info("prefetching scripts",n),c.remote.scripts(n,function(){var e,f;
for(e=0,f=n.length;
e<f;
e++){m=n[e],c.plugin._prefetched[m.src]="fetched"
}return j.info("prefetched scripts",n)
})
},a.prototype.addPlugin=function(b,f){var e=this;
return f==null&&(f={}),this.info("addPlugin",b,f),this._hasImpl(function(){if(!e.hasPlugin(b)){return c.plugin._inject(e,b,f)
}}),this
},a.prototype.hasPlugin=function(b){return !!this.plugin[b]
},a.prototype.turnOffPluginApis=function(){var g,f,j,i,h;
this.info("turnOffPluginApis"),i=this.plugin,h=[];
for(f in i){g=i[f],h.push(typeof(j=this._pluginStopGos)[f]=="function"?j[f](!1):void 0)
}return h
},a.prototype.removePlugins=function(){var f,e,h,g;
this.info("removePlugins"),h=this.plugin,g=[];
for(e in h){f=h[e],g.push(typeof f.remove=="function"?f.remove():void 0)
}return g
},a.prototype.containerWidth=function(){return this._attrs.rawEmbed&&c.detect.browser.old?c.grid.wrapperWidth(this):this._attrs.rawEmbed?c.elem.width(this._embedContainer):c.util.winWidth()
},a.prototype.containerHeight=function(){return this._attrs.rawEmbed&&c.detect.browser.old?c.grid.wrapperHeight(this):this._attrs.rawEmbed?c.elem.height(this._embedContainer):c.util.winHeight()
},a.prototype._goToDownState=function(){return this.info("_goToDownState"),this._stateBeforeDown=this._lastState,this.up(!1),this.down(!0),this.embedType!=="flash"&&this.pause(),this.ready(!1),this.trigger("down")
},a.prototype._goToUpState=function(){var b;
return this.info("_goToUpState"),this.down(!1),this.up(!0),this.ready(!1),this.embedType==="flash"?this.rebuild():(this.fit(),(b=this._impl)!=null&&b.checkForReady(),this._stateBeforeDown==="playing"&&this.play()),this.trigger("up")
},a.prototype._checkDownState=function(){var b;
b=this.looksDown();
if(this.up()&&b){return this.info("moving to down state"),this._goToDownState()
}if(this.down()&&!b){return this.info("moving to up state"),this._goToUpState()
}},a.prototype._removeHandleIfGoneFromDOM=function(){return this.embedded()?this.elem()?this._embedContainer&&!this._embedContainer.parentNode?(this.warn("container removed from DOM",this._embedContainer.id),this.remove(),!0):!1:(this.warn("video element removed from DOM",this._embedContainer.id),this.remove(),!0):!1
},a.prototype._doFoam=function(){var b,q,p,n,m,l,k,j;
this._parentBoxSizing==null&&(this._parentBoxSizing=c.elem.style(this._embedContainer.parentNode,"box-sizing")),this.popover?(j=c.elem.width(window),k=c.elem.height(window),l=j/k,l>this.aspect()?m=Math.round((k-160)*this.aspect()):m=j-160):this._parentBoxSizing==="border-box"||c.detect.browser.ltie8||c.detect.browser.msie&&c.detect.browser.version===8?(this._foamDummyElem||(this._foamDummyElem=c.elem.fromObject({"class":"wistia_video_foam_dummy","data-source-container-id":this._embedContainer.id,style:{border:0,display:"block",height:0,margin:0,padding:0,position:"static",visibility:"hidden",width:"auto"}}),c.elem.before(this._embedContainer,this._foamDummyElem)),m=c.elem.width(this._foamDummyElem)):m=c.elem.width(this._embedContainer.parentNode);
if(!isNaN(m)&&(this._lastParentWidth!==m||!this._didFoam)){return this._didFoam=!0,n=m,p=n-this.extraWidth(),q=this.heightForWidth(p),b=q+this.extraHeight(),this.videoFoam().maxHeight&&b>this.videoFoam().maxHeight&&(b=this.videoFoam().maxHeight,q=b-this.extraHeight(),p=this.widthForHeight(q),n=p+this.extraWidth()),this.videoFoam().maxWidth&&n>this.videoFoam().maxWidth&&(n=this.videoFoam().maxWidth,p=n-this.extraWidth(),q=this.heightForWidth(p),b=q+this.extraHeight()),this.videoFoam().minHeight&&b<this.videoFoam().minHeight&&(b=this.videoFoam().minHeight,q=b-this.extraHeight(),p=this.widthForHeight(q),n=p+this.extraWidth()),this.videoFoam().minWidth&&n<this.videoFoam().minWidth&&(n=this.videoFoam().minWidth,p=n-this.extraWidth(),q=this.heightForWidth(p),b=q+this.extraHeight()),this.info("videoFoam set width",n),this.width(n,{constrain:!0}),this._lastParentWidth=m
}},a.prototype._allowFoam=function(){return this._hasImpl()&&this.grid&&this.up()&&this.looksUp()&&this._attrs.rawEmbed&&this.videoFoam()
},a.prototype._allowContainerMatch=function(){return this.up()&&!this._opts.dontMonitorSize&&!this.inFullscreen()
},a.prototype._doContainerMatch=function(){var f,e;
e=this.containerWidth(),f=this.containerHeight(),this._lastWidth!==e&&(this.notice("container width changed to "+e+", matching"),this.width(e,{dontChangeContainer:!0}),this.info("_doContainerMatch set width",e),this.trigger("widthchange",e,this._lastWidth),this._lastWidth=e);
if(this._lastHeight!==f){return this.notice("container height changed to "+f+", matching"),this.height(f,{dontChangeContainer:!0}),this.trigger("heightchange",f,this._lastHeight),this._lastHeight=f
}},a.prototype.monitor=function(){var b=this;
return this.info("monitor"),this._lastWidth=this._attrs.startingWidth,this._lastHeight=this._attrs.startingHeight,this._lastParentWidth=this.width(),this._didFoam=!1,this._hasImpl(function(){return c.eventLoop.add(""+b.uuid+".monitor",500,function(){if(b._removeHandleIfGoneFromDOM()){return
}b._checkDownState();
if(b._allowFoam()){return b._doFoam()
}if(b._allowContainerMatch()){return b._doContainerMatch()
}})
})
},a.prototype.looksDown=function(){return !this._embedContainer||!c.elem.inDom(this._embedContainer)||c.elem.isHidden(this._embedContainer)
},a.prototype.looksUp=function(){return !this.looksDown()
},a.prototype.plugin=function(b,h){var g,f=this;
return(g=this._pluginStopGos[b])||(g=this._pluginStopGos[b]=new c.StopGo,g(!!this.plugin[b])),g(function(){return h(f.plugin[b])
})
},a.prototype.videoFoam=function(b){return b!=null?(this.info("videoFoam",b),this._attrs.videoFoam=b):this._attrs.videoFoam||!1
},a.prototype._formattedDurationToSeconds=function(b){return c.TimeHelper.isValidHumanDuration(b)?c.TimeHelper.humanDurationToSeconds(b):c.TimeHelper.isValidIso8601(b)?c.TimeHelper.iso8601ToSeconds(b):b
},a.prototype.onCrossTime=function(u,t){var s,r,q,p,n,m,l,b=this;
return this._onCrossTimeBindings==null&&(this._onCrossTimeBindings={}),(l=this._onCrossTimeBindings)[u]==null&&(l[u]=[]),m=""+this.uuid+"."+c.uniqId("after_time_"),s=this.time()>u,r=function(){if(b.time()<u){return q()
}if(!s){return s=!0,t()
}},q=function(){if(b.time()>=u){return c.clearTimeouts(m),r()
}if(!s){return c.timeout(m,r,(u-b.time())*1000)
}},p=function(){if(b.time()<u){s=!1;
if(u-b.time()<2){return q()
}}else{if(!s){return r()
}}},n=function(){return c.clearTimeouts(m)
},this.bind("play",p),this.bind("timechange",p),this.bind("pause",n),this.bind("end",n),this.bind("waiting",n),this.state()==="playing"&&!s&&p(),this._onCrossTimeBindings[u].push({fn:t,setupTimeoutFromNowIfClose:p,suspendTimeoutIndefinitely:n}),this
},a.prototype.unbindOnCrossTime=function(j,i){var q,p,n,m,l,k;
if(!this._onCrossTimeBindings||!this._onCrossTimeBindings[j]){return this
}q=null,n=0,k=this._onCrossTimeBindings[j];
for(m=0,l=k.length;
m<l;
m++){p=k[m];
if(p.fn===i){q=p;
break
}n+=1
}return q?(this.unbind("play",q.setupTimeoutFromNowIfClose),this.unbind("timechange",q.setupTimeoutFromNowIfClose),this.unbind("pause",q.suspendTimeoutIndefinitely),this.unbind("end",q.suspendTimeoutIndefinitely),this.unbind("waiting",q.suspendTimeoutIndefinitely),this._onCrossTimeBindings[j].splice(n,1),this._onCrossTimeBindings[j].length===0&&delete this._onCrossTimeBindings[j],this):this
},a.prototype.betweenTimes=function(j,i,q){var p,n,m,l,k=this;
return n=""+j+"-"+i,this._betweenTimeBindings==null&&(this._betweenTimeBindings={}),(l=this._betweenTimeBindings)[n]==null&&(l[n]=[]),m=!1,p=function(){var b;
b=k.time();
if(j<=b&&b<i&&!m){return m=!0,q(m)
}if(!(j<=b&&b<i)&&m){return m=!1,q(m)
}},this.onCrossTime(j,p),this.onCrossTime(i,p),this.bind("timechange",p),p(),this._betweenTimeBindings[n].push({fn:q,onTimechange:p}),this
},a.prototype.unbindBetweenTimes=function(u,t,s){var r,q,p,n,m,l,k;
n=""+u+"-"+t;
if(!this._betweenTimeBindings[n]){return this
}r=null,p=0,k=this._betweenTimeBindings[n];
for(m=0,l=k.length;
m<l;
m++){q=k[m];
if(q.fn===s){r=q;
break
}p+=1
}return r?(this.unbindOnCrossTime(u,r.onTimechange),this.unbindOnCrossTime(t,r.onTimechange),this.unbind("timechange",r.onTimechange),this._betweenTimeBindings[n].splice(p,1),this._betweenTimeBindings[n].length===0&&delete this._betweenTimeBindings[n],this):this
},a.prototype.aspect=function(){return this._implGet("aspect",0)
},a.prototype.asset=function(){return this._implGet.apply(this,["asset",null].concat(__slice.call(arguments)))
},a.prototype.assets=function(){return this._implGet.apply(this,["assets",null].concat(__slice.call(arguments)))
},a.prototype.bigPlayButtonEnabled=function(){return this._implSetOrGet.apply(this,["bigPlayButtonEnabled",!1].concat(__slice.call(arguments)))
},a.prototype.cancelFullscreen=function(){return this._implExec("cancelFullscreen")
},a.prototype.duration=function(){return this._implGet("duration",null)
},a.prototype.embedded=function(){return this._implSetOrGet.apply(this,["embedded",!1].concat(__slice.call(arguments)))
},a.prototype.eventKey=function(){return this._tracker.eventKey()||null
},a.prototype.extraHeight=function(){return this._implGet("extraHeight",0)
},a.prototype.extraWidth=function(){return this._implGet("extraWidth",0)
},a.prototype.fit=function(){return this._implExec("fit")
},a.prototype.fullscreenButtonEnabled=function(){return this._implSetOrGet.apply(this,["fullscreenButtonEnabled",!1].concat(__slice.call(arguments)))
},a.prototype.hasData=function(){return this._implSetOrGet.apply(this,["hasData",!1].concat(__slice.call(arguments)))
},a.prototype.height=function(){return this._implSetOrGet.apply(this,["height",null].concat(__slice.call(arguments)))
},a.prototype.heightForWidth=function(){return this._implGet.apply(this,["heightForWidth",null].concat(__slice.call(arguments)))
},a.prototype.ieSizeHack=function(){return this._implExec("ieSizeHack")
},a.prototype.inFullscreen=function(){return this._implGet("inFullscreen",!1)
},a.prototype.name=function(){return this._implGet("name","")
},a.prototype.pause=function(){return this._implExec("pause")
},a.prototype.percentWatched=function(){return this._implGet("percentWatched",0)
},a.prototype.playbarControlEnabled=function(){return this._implSetOrGet.apply(this,["playbarControlEnabled",!1].concat(__slice.call(arguments)))
},a.prototype.play=function(){return this._implExec("play")
},a.prototype.playbackRate=function(){return this._implSetOrGet.apply(this,["playbackRate",1].concat(__slice.call(arguments)))
},a.prototype.playerColor=function(){return this._implSetOrGet.apply(this,["playerColor","636155"].concat(__slice.call(arguments)))
},a.prototype.ready=function(){return this._implSetOrGet.apply(this,["ready",!1].concat(__slice.call(arguments)))
},a.prototype.secondsWatched=function(){return this._implGet("secondsWatched",0)
},a.prototype.secondsWatchedVector=function(){return this._implGet("secondsWatchedVector",[])
},a.prototype.smallPlayButtonEnabled=function(){return this._implSetOrGet.apply(this,["smallPlayButtonEnabled",!1].concat(__slice.call(arguments)))
},a.prototype.state=function(){return this._implGet("state","beforeplay")
},a.prototype.stillUrl=function(){return this._implGet.apply(this,["stillUrl",null].concat(__slice.call(arguments)))
},a.prototype.suppressPlay=function(){return this._implSetOrGet.apply(this,["suppressPlay",this].concat(__slice.call(arguments)))
},a.prototype.time=function(){var f,e;
return e=arguments[0],f=2<=arguments.length?__slice.call(arguments,1):[],e!=null?this._implSetOrGet.apply(this,["time",0,this._formattedDurationToSeconds(e)].concat(__slice.call(f))):this._implSetOrGet("time",0)
},a.prototype.timeInHumanDuration=function(){return d.TimeHelper.secondsToHumanDuration(this._implGet.apply(this,["time",0].concat(__slice.call(arguments))))
},a.prototype.timeInIso8601Duration=function(){return d.TimeHelper.secondsToIso8601(this._implGet.apply(this,["time",0].concat(__slice.call(arguments))))
},a.prototype.videoHeight=function(){return this._implSetOrGet.apply(this,["videoHeight",null].concat(__slice.call(arguments)))
},a.prototype.videoWidth=function(){return this._implSetOrGet.apply(this,["videoWidth",null].concat(__slice.call(arguments)))
},a.prototype.visitorKey=function(){return this._tracker.visitorKey()||null
},a.prototype.volume=function(){return this._implSetOrGet.apply(this,["volume",0].concat(__slice.call(arguments)))
},a.prototype.volumeControlEnabled=function(){return this._implSetOrGet.apply(this,["volumeControlEnabled",!1].concat(__slice.call(arguments)))
},a.prototype.width=function(){return this._implSetOrGet.apply(this,["width",null].concat(__slice.call(arguments)))
},a.prototype.widthForHeight=function(){return this._implGet.apply(this,["widthForHeight",null].concat(__slice.call(arguments)))
},a.prototype.getEmail=function(){return this.email()
},a.prototype.getEventKey=function(){return this.eventKey()
},a.prototype.getVisitorKey=function(){return this.visitorKey()
},a.prototype.setEmail=function(b){return this.email(b)
},a.prototype.setPlayerColor=function(){return this._implExec.apply(this,["playerColor"].concat(__slice.call(arguments)))
},a.prototype.removeReadyFn=function(){var f,e=this;
return f=1<=arguments.length?__slice.call(arguments,0):[],this._hasImpl(function(){var b;
return(b=e._impl.ready).remove.apply(b,f)
})
},a.prototype.email=function(f){var e,h,g=this;
if(f!=null){this.info("email",f),e=this._attrs.email,this._attrs.email=f;
if((h=this._opts)!=null?!h.noDeprecatedProperties:!void 0){this.params.trackEmail=f
}return this._hasImpl(function(){var i;
return typeof(i=g._impl).email=="function"?i.email(f):void 0
}),f!==e&&this.trigger("emailchange",f),this
}return this._attrs.email||null
},a.prototype.foreignData=function(b){var e;
if(b===void 0){return this._attrs.foreignData||this._foreignData||null
}if(b===null){return this._attrs.foreignData=null,this.trigger("foreigndatachange",b)
}this.info("foreignData",b);
if(!c.obj.isObject(b)){throw new Error("foreignData can only be an Object")
}return b=c.obj.clone(b),this._attrs.foreignData=b,(e=this.tracker)!=null&&e.transmit({force:!0}),this.trigger("foreigndatachange",b)
},a.classFor=function(b){var e;
b instanceof c.Video?b=b.embedType:b instanceof c.PublicApi&&(b=(e=b._impl)!=null?e.embedType:void 0);
switch(b){case"romulus":return c.RomulusVideo;
case"html5":return c.Html5Video;
case"flash":return c.FlashVideo;
case"external":return c.ExternalVideo;
default:return c.Video
}},a
}(),c.mixin(c.PublicApi.prototype,c.bindable)
})(Wistia),function(b){if(b.generate){return
}return b.generate={},b.generate.html=function(D){var C,B,A,z,y,x,w,v,u,t,s,r,q,a;
if(/string|number|boolean/.test(typeof D)){return D.toString()
}if(D instanceof Array){w="";
for(s=0,q=D.length;
s<q;
s++){z=D[s],w+=b.generate.html(z)
}return w
}if(typeof D!="object"){return D.toString()
}B=[];
for(y in D){u=D[y],y==="tagName"?v=u:y==="childNodes"?A=u:B.push({key:y,val:u})
}v||(v="div"),w="<"+v;
for(r=0,a=B.length;
r<a;
r++){C=B[r],C.key==="style"&&b.obj.isObject(C.val)&&(C.val=function(){var d,c;
d=C.val,c=[];
for(x in d){t=d[x],c.push(""+x.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+":"+t)
}return c
}().join(";")+";"),w+=" "+C.key+'="'+C.val+'"'
}return/^(br|hr|img|link|meta|input)$/i.test(v)?w+=" />":(w+=">",A&&(typeof A=="string"?w+=A:typeof A=="object"&&(w+=b.generate.html(A))),w+="</"+v+">"),w
},b.generate.stillWidth=function(h){var g,l,k,j,i;
g=[640,960,1280],h.masterStillWidth<1280&&g.push(h.masterStillWidth),i=g.sort(function(d,c){return d-c
});
for(k=0,j=i.length;
k<j;
k++){l=i[k];
if(h.videoWidth<=l){return l
}}return Math.max.apply(Math,g)
},b.generate.relativeBlockCss=function(d,c){return d==null&&(d="100%"),c==null&&(c="100%"),"display:inline-block;*display:inline;height:"+c+";margin:0;padding:0;position:relative;vertical-align:top;width:"+d+";zoom:1;"
},b.extend({generate:{video:function(a,f,e){e=b.obj.merge({},f.params,e,{uuid:f.uuid,videoWidth:f.videoWidth(),videoHeight:f.videoHeight()});
switch(a){case"flash":return b.generate.flashEmbedCode(f._mediaData,e);
case"html5":return b.generate.html5EmbedElem(f._mediaData,e);
case"romulus":return b.generate.romulusEmbedElem(f._mediaData,e);
case"external":return b.generate.externalEmbedCode(f._mediaData,e);
case"flashUrl":return b.generate.flashUrl(f._mediaData,e)
}}}})
}(Wistia);
var __slice=[].slice;
(function(e){var d,f;
d=e;
if(d.Video){return
}return d.Video=function(){function b(c){this.publicApi=c,this.uuid=d.seqId(),this.info("constructor"),this.chrome=this.publicApi.chrome,this.transferFacadeProperties(),this.ready=new d.StopGo,this.hasData=new d.StopGo,this.embedded=new d.StopGo,this.commandQueueOpen=new d.StopGo,this.hasData(!0),this.commandQueueOpen(!0),this.playing=new d.StopGo,this.notFullscreen=new d.StopGo,this.plugin||(this.plugin={}),this.resetStateVariables(),this.setupPercentTracking(),this
}return b.prototype._log=function(){var g,i,h;
return i=arguments[0],g=2<=arguments.length?__slice.call(arguments,1):[],d[i].apply(d,[this.constructor.name,this.hashedId()||"no hashedId",(h=this._embedContainer)!=null?h.id:void 0,this.uuid].concat(__slice.call(g)))
},b.prototype.error=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["error"].concat(__slice.call(c)))
},b.prototype.warn=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},b.prototype.notice=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},b.prototype.info=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["info"].concat(__slice.call(c)))
},b.prototype.debug=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["debug"].concat(__slice.call(c)))
},b.prototype.log=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["log"].concat(__slice.call(c)))
},b.FAILED=-1,b.QUEUED=0,b.PROCESSING=1,b.READY=2,b.prototype.init=function(){return this.setupPipedreamTracking(),this
},b.prototype.transferFacadeProperties=function(){var h,g,k,j,i;
g="_attrs\n_embedContainer\n_givenOptions\n_hashedId\n_mediaData\n_opts\nchrome\ncontainer\ndata\ndown\nfullscreenContainer\nup".split(/[\n\s]+/),i=[];
for(k=0,j=g.length;
k<j;
k++){h=g[k],i.push(this[h]=this.publicApi[h])
}return i
},b.prototype.elem=function(){return null
},b.prototype.embed=function(){throw new Error("Define in subclass!")
},b.prototype.checkForReady=function(){throw new Error("Define in subclass!")
},b.prototype.setupGrid=function(){return this.grid||(this.grid=d.createGrid(this),d.elem.append(this.chrome,this.grid.root)),this.grid
},b.prototype.placeEmbed=function(g){var i,h=this;
return this._opts.subContainer?i=this._embedContainer:i=this.grid.center,this.info("placeEmbed",i,g),this.wrapperElem=d.elem.fromObject({id:d.seqId("wistia_video_wrapper_"),style:d.generate.relativeBlockCss()}),d.elem.style(this.wrapperElem,{overflow:"hidden"}),d.elem.append(i,this.wrapperElem),typeof g=="string"?this.wrapperElem.innerHTML+=g:d.elem.append(this.wrapperElem,g),this.embedded(function(){return h.correctForIntegers()
}),this.ieSizeHack()
},b.prototype.stopStreaming=function(){},b.prototype.wipeOutstandingAsyncFunctions=function(){var c;
this.info("wipeOutstandingAsyncFunctions"),(c=d.eventLoop)!=null&&c.remove(this.uuid),d.clearTimeouts(this.uuid);
if(this._remoteMediaKey){return d.clearTimeouts(this._remoteMediaKey)
}},b.prototype.resetStateVariables=function(){return this.info("resetStateVariables"),this._lastTimePosition=-1,this._lastState="beforeplay",this._streamSet=!1,this._issuedPlay=!1,this._issuedPause=!1,this._beforePlay=!0,this._hasPlayed=!1,this._waiting=0,this._ended=!1,this.playing(!1)
},b.prototype.rebuild=function(g){var h=this;
return g==null&&(g={}),this.info("rebuild"),this.embedded(function(){return h.ready(!1),d.elem.remove(h.wrapperElem),h.embed()
}),this
},b.prototype.cancelFullscreen=function(){return this.info("cancelFullscreen"),this.rebuild()
},b.prototype.requestFullscreen=function(){},b.prototype.suspend=function(){return this.publicApi.suspend()
},b.prototype.resume=function(){return this.publicApi.resume()
},b.prototype.fit=function(){return this.info("fit"),d.detect.browser.old&&(this._embedContainer.style.width=""+this._opts.videoWidth+"px",this._embedContainer.style.height=""+this._opts.videoHeight+"px"),this._opts.dontFit||(this.grid.root.style.height=""+d.elem.height(this._embedContainer)+"px",this.grid.root.style.width=""+d.elem.width(this._embedContainer)+"px"),d.grid.fitVertical(this),d.grid.fitHorizontal(this),this.correctForIntegers(),this.ieSizeHack()
},b.prototype.setupPercentTracking=function(){var h,g,j,i=this;
if(this._trackPercent){return
}if(this.state()==="playing"){for(h=g=0,j=Math.floor(this.time());
0<=j?g<j:g>j;
h=0<=j?++g:--g){this._logSecondWatched(h)
}}return this._trackPercent==null&&(this._trackPercent=function(k){var c;
c=i.percentWatched(),i._logSecondWatched(k);
if(i.percentWatched()!==c){return i.trigger("percentwatchedchanged",i.percentWatched(),c)
}}),this.rebind("secondchange",this._trackPercent)
},b.prototype._checkDownState=function(){return this.publicApi._checkDownState()
},b.prototype._logSecondWatched=function(g){var c;
this._secondsWatched==null&&(this._secondsWatched=function(){var h,j,i;
i=[];
for(c=h=0,j=Math.floor(this.duration());
0<=j?h<j:h>j;
c=0<=j?++h:--h){i.push(0)
}return i
}.call(this)),this._totalWatched==null&&(this._totalWatched=0),this._totalRewatched==null&&(this._totalRewatched=0);
if(g>=this._secondsWatched.length){return
}return this._secondsWatched[g]+=1,this._secondsWatched[g]===1?this._totalWatched+=1:this._totalRewatched+=1
},b.prototype.percentWatched=function(){return this.secondsWatched()/Math.floor(this.duration())
},b.prototype.secondsWatched=function(){return this._totalWatched||0
},b.prototype.secondsWatchedVector=function(){return this._secondsWatched
},b.prototype.setupPipedreamTracking=function(){var c=this;
if(this._opts.flashShim){return
}return this.embedded(function(){var i,h,g,a;
if(c._opts.flashShim){return
}d.Metrics.videoCount(c,"player/initembed"),a=d.Metrics.assetBuckets(c);
for(h=0,g=a.length;
h<g;
h++){i=a[h],d.Metrics.videoCount(c,"player/initembed."+i)
}return c._determineAssetCacheStatus(function(){var j;
return(typeof c.elem=="function"?(j=c.elem())!=null?j.getAttribute("preload"):void 0:void 0)!=="none"?d.Metrics.videoCount(c,"player/asset/"+c._cacheStatus):c.bind("play",function(){return d.Metrics.videoCount(c,"player/asset/"+c._cacheStatus),c.unbind
})
}),c.bind("switched-asset-without-load",function(){var j=this;
return this._determineAssetCacheStatus(function(){return d.Metrics.videoCount(j,"player/asset/"+j._cacheStatus)
})
})
}),this.bind("play",function(){var i,h,g,a;
d.Metrics.videoCount(c,"player/play"),a=d.Metrics.assetBuckets(c);
for(h=0,g=a.length;
h<g;
h++){i=a[h],d.Metrics.videoCount(c,"player/play."+i)
}return c.unbind
}),d.Metrics.countEventOnce(this,"enter-fullscreen"),d.Metrics.countEventOnce(this,"end"),d.Metrics.countShowLoadingOnce(this),d.Metrics.countShowLoadingAll(this),d.Metrics.countShowLoadingLongTimeOnce(this),d.Metrics.countShowLoadingLongTimeAll(this),d.Metrics.sampleBufferingWaitDurationOnce(this),d.Metrics.sampleBufferingWaitDurationAll(this),d.Metrics.sampleTimeFromPlayToTimechangeAll(this)
},b.prototype.animate=function(g,j){var i,h=this;
return g==null&&(g={}),j==null&&(j={}),this.info("animate",g,j),i=j.callback,j.callback=function(){return d.elem.style(h.grid.root,{position:"relative"}),typeof i=="function"?i():void 0
},d.elem.style(this.grid.root,{position:"absolute"}),d.elem.animate(this.grid.root,g,j),this
},b.prototype.slide=function(){var h,g,i;
return h=arguments[0],i=arguments[1],g=3<=arguments.length?__slice.call(arguments,2):[],this.animate.apply(this,[{transform:"translate("+h+"px,"+i+"px)"}].concat(__slice.call(g)))
},b.prototype._shortAnimArgs=function(g){var h;
return typeof g[0]=="function"?h={callback:g[0]}:h=d.obj.merge({},g[0],{callback:g[1]})
},b.prototype.slideOutLeft=function(){var g,h=this;
return g=this._shortAnimArgs(arguments),d.elem.style(this.grid.root,{transform:"translate(0px, 0px)"}),setTimeout(function(){return h.slide(-h.videoWidth(),0,g)
},1),this
},b.prototype.slideInLeft=function(g){var i,h=this;
return i=this._shortAnimArgs(arguments),d.elem.style(this.grid.root,{transform:"translate("+this.videoWidth()+"px, 0px)"}),setTimeout(function(){return h.slide(0,0,i)
},1),this
},b.prototype.slideOutRight=function(g){var i,h=this;
return i=this._shortAnimArgs(arguments),d.elem.style(this.grid.root,{transform:"translate(0px, 0px)"}),setTimeout(function(){return h.slide(h.videoWidth(),0,i)
},1),this
},b.prototype.slideInRight=function(){var g,h=this;
return g=this._shortAnimArgs(arguments),d.elem.style(this.grid.root,{transform:"translate("+-this.videoWidth()+"px, 0px)"}),setTimeout(function(){return h.slide(0,0,g)
},1),this
},b.prototype.fade=function(){var g,i,h;
return i=arguments[0],g=2<=arguments.length?__slice.call(arguments,1):[],i==null&&(i=0),(h=d.elem).animate.apply(h,[this.gridChildren(),{opacity:i}].concat(__slice.call(g)))
},b.prototype.fadeIn=function(){var g,i,h=this;
return i=this._shortAnimArgs(arguments),g=i.callback,i.callback=function(){return d.elem.style(h.gridChildren(),{opacity:""}),typeof g=="function"?g():void 0
},d.elem.style(this.gridChildren(),{opacity:0}),setTimeout(function(){return h.fade(1,i)
},1)
},b.prototype.fadeOut=function(){var g,h=this;
return g=this._shortAnimArgs(arguments),d.elem.style(this.gridChildren(),{opacity:1}),setTimeout(function(){return h.fade(0,g)
},1)
},b.prototype.gridChildren=function(){var j,r,q,p,n,m,l,k;
q=[],l=this.grid;
for(p in l){r=l[p],k=r.childNodes;
for(n=0,m=k.length;
n<m;
n++){j=k[n],d.isGridElem(this.grid,j)||q.push(j)
}}return q
},b.prototype.correctForIntegers=function(){var j,r,q,p,n,m,l,k;
if(d.detect.iphone||d.detect.ipad){return
}q=this.elem();
if(q!=null?!q.style:!void 0){return
}if(!/video/i.test(q!=null?q.tagName:void 0)){return
}j=this.videoHeight(),r=this.videoWidth(),n=j*this.originalAspect(),p=Math.floor(r/this.originalAspect()/2)*2,l=p-j,k=n-r,m=d.detect.firefox&&d.detect.browser.mozilla&&d.detect.browser.version>=36;
if(d.detect.browser.webkit||m){Math.abs(k)<6&&Math.abs(l)<6?q.style.objectFit="fill":q.style.objectFit="contain";
return
}return 0<l&&l<=6?(this.info("correctForIntegers heightDiff",l),q.style.height="calc(100% + "+Math.ceil(l)+"px)",q.style.width="100%",q.style.left="",l>1?q.style.top=""+-Math.ceil(l/2)+"px":q.style.top=""):0<k&&k<=6?(this.info("correctForIntegers widthDiff",k),q.style.width="calc(100% + "+Math.ceil(k)+"px)",q.style.height="100%",q.style.top="",k>1?q.style.left=""+-Math.ceil(k/2)+"px":q.style.left=""):(this.info("correctForIntegers perfect"),q.style.height="100%",q.style.width="100%",q.style.top="",q.style.left="")
},b.prototype.remove=function(g){var k,j,i,h;
g==null&&(g={}),this.info("remove"),g.trigger!==!1&&this.trigger("beforeremove"),this.hasData(!1),this.ready(!1),this.embedded(!1),this.stopStreaming(),i=this.plugin;
for(j in i){k=i[j],k!=null&&typeof k.remove=="function"&&k.remove()
}if((h=this.grid)!=null?h.root:void 0){d.elem.unbindAllInside(this.grid.root),d.elem.remove(this.grid.root)
}return this.grid=null,g.trigger!==!1&&this.trigger("down"),g.trigger!==!1&&this.trigger("afterremove"),this.wipeOutstandingAsyncFunctions(),this._bindings={},this.cleanupRefs()
},b.prototype.isRemoved=function(){return this.grid===null
},b.prototype.cleanupRefs=function(){var h,g,j,i;
typeof this.cleanup=="function"&&this.cleanup(),i=[];
for(h in this){g=this[h],i.push((j=this[h])!=null?typeof j.cleanup=="function"?j.cleanup():void 0:void 0)
}return i
},b.prototype._baseEventLoopDuration=300,b.prototype._eventLoopDuration=300,b.prototype.canAutoPlay=function(){return !this.suppressPlay()
},b.prototype.play=function(){var c=this;
return this.info("play"),this.ready(function(){return c.play()
}),this
},b.prototype.suppressPlay=function(c){return c!=null?(this.info("suppressPlay",c),this._suppressPlay=!!c):this._suppressPlay
},b.prototype.videoFoam=function(){var c;
return(c=this.publicApi).videoFoam.apply(c,arguments)
},b.prototype.pause=function(){var c=this;
return this.info("pause"),this.ready(function(){return c.pause()
}),this
},b.prototype.time=function(g){var c=this;
return g!=null?(this.info("time",g),this.ready(function(){return c.time(g)
}),this):0
},b.prototype.state=function(){return"beforeplay"
},b.prototype.duration=function(){return this._mediaData.duration||null
},b.prototype.volume=function(g){var c=this;
return g!=null?(this.info("volume",g),this.ready(function(){return c.volume(g)
})):0
},b.prototype.name=function(){return this._mediaData.name||null
},b.prototype.hashedId=function(){return this._hashedId
},b.prototype.bigPlayButtonEnabled=function(){return this
},b.prototype.smallPlayButtonEnabled=function(){return this
},b.prototype.playbarControlEnabled=function(){return this
},b.prototype.volumeControlEnabled=function(){return this
},b.prototype.fullscreenButtonEnabled=function(){return this
},b.prototype.setPlayerColor=function(c){return this.playerColor(c),this
},b.prototype.playerColor=function(g){var h;
return g!=null?(this.info("playerColor",g),h=this._attrs.playerColor,this._attrs.playerColor=d.Video._sanePlayerColor(g),h!==this._attrs.playerColor&&this.trigger("playercolorchange",this._attrs.playerColor,h),this):this._attrs.playerColor
},b._sanePlayerColor=function(h){var g,k,j,i;
if(h){h=(""+h).replace(/^#/g,"");
if(h.length<6){k="";
for(g=j=0,i=6-h.length;
0<=i?j<i:j>i;
g=0<=i?++j:--j){k+="0"
}h=""+k+h
}return/^[\da-f]{6}$/i.test(h)||(h="636155"),h
}return"636155"
},b.prototype.playbackRate=function(c){return c!=null?this:1
},b.prototype.width=function(i,p){var n,m,l,k,j;
return p==null&&(p={}),i!=null?(this.info("width",i,p),i=parseInt(i,10),n=this.width(),this.grid.wrapper.style.width=this.chrome.style.width=""+i+"px",p.dontChangeContainer||(this._embedContainer.style.width=""+i+"px"),this.grid.center.style.width="100%",this.embedType==="flash"&&(l=this.elem())!=null&&(l.style.width="100%"),this._opts.dontFit?(this.grid.main.style.width=""+(i-d.elem.width(this.grid.left)-d.elem.width(this.grid.right))+"px",this.grid.main.style.marginLeft=""+d.elem.width(this.grid.left)+"px"):(d.grid.fitHorizontal(this),d.grid.fitVertical(this)),i!==n&&this.trigger("widthchange",i,n),p.constrain&&this.constrainToWidth(),this._width=i,this.correctForIntegers(),this.ieSizeHack(),this):(d.detect.browser.old&&(k=this.elem())!=null&&(k.style.position="absolute"),m=d.elem.width(this.grid.left)+d.elem.width(this.grid.center)+d.elem.width(this.grid.right),d.detect.browser.old&&(j=this.elem())!=null&&(j.style.position="static"),m)
},b.prototype.height=function(i,p){var n,m,l,k,j;
return p==null&&(p={}),i!=null?(this.info("height",i,p),i=parseInt(i,10),n=this.height(),this.grid.wrapper.style.height=this.chrome.style.height=""+i+"px",p.dontChangeContainer||(this._embedContainer.style.height=""+i+"px"),this.grid.center.style.height="100%",this.embedType==="flash"&&(l=this.elem())!=null&&(l.style.height="100%"),this._opts.dontFit?(this.grid.main.style.height=""+(i-d.elem.height(this.grid.above)-d.elem.height(this.grid.below))+"px",this.grid.main.style.marginTop=""+d.elem.height(this.grid.top)+"px"):(d.grid.fitHorizontal(this),d.grid.fitVertical(this)),i!==n&&this.trigger("heightchange",i,n),p.constrain&&this.constrainToHeight(),this.correctForIntegers(),this.ieSizeHack(),this):(d.detect.browser.old&&(k=this.elem())!=null&&(k.style.position="absolute"),m=d.elem.height(this.grid.center)+Math.max(d.elem.height(this.grid.above),d.elem.height(this.grid.top))+Math.max(d.elem.height(this.grid.below),d.elem.height(this.grid.bottom)),d.detect.browser.old&&(j=this.elem())!=null&&(j.style.position="static"),m)
},b.prototype.videoWidth=function(i,p){var n,m,l,k,j;
return p==null&&(p={}),i!=null?(this.info("videoWidth",i,p),i=parseInt(i,10),m=this.width(),this.grid.center.style.width="100%",this.grid.main.style.width=""+i+"px",n=d.elem.width(this.grid.left)+d.elem.width(this.grid.right),this.grid.wrapper.style.width=this.chrome.style.width=""+(i+n)+"px",p.dontChangeContainer||(this._embedContainer.style.width=""+(i+n)+"px"),d.grid.fitHorizontal(this),d.grid.fitVertical(this),i!==m&&this.trigger("widthchange",i,m),p.constrain&&this.constrainToWidth(),this.correctForIntegers(),this.ieSizeHack(),this):(d.detect.browser.old&&(k=this.elem())!=null&&(k.style.position="absolute"),l=d.elem.width(this.grid.center),d.detect.browser.old&&(j=this.elem())!=null&&(j.style.position="static"),l)
},b.prototype.videoHeight=function(t,s){var r,q,p,n,m,l,k;
return s==null&&(s={}),t!=null?(this.info("videoHeight",t,s),t=parseInt(t,10),p=this.height(),this.grid.main.style.height=""+t+"px",this.grid.center.style.height="100%",this.grid.main.style.height=""+t+"px",d.detect.browser.ltie8&&d.grid.zeroEmptySections(this),m=Math.max(d.elem.height(this.grid.above),d.elem.height(this.grid.top)),r=Math.max(d.elem.height(this.grid.below),d.elem.height(this.grid.bottom)),q=m+r,this.grid.wrapper.style.height=this.chrome.style.height=""+(t+q)+"px",s.dontChangeContainer||(this._embedContainer.style.height=""+(t+q)+"px"),d.grid.fitHorizontal(this),d.grid.fitVertical(this),t!==p&&this.trigger("heightchange",t,p),s.constrain&&this.constrainToHeight(),this.correctForIntegers(),this.ieSizeHack(),this):(d.detect.browser.old&&this.elem&&(l=this.elem())!=null&&(l.style.position="absolute"),n=d.elem.height(this.grid.center),d.detect.browser.old&&this.elem&&(k=this.elem())!=null&&(k.style.position="static"),n)
},b.prototype.constrainToHeight=function(){return this.videoWidth(this.widthForHeight(this.videoHeight()))
},b.prototype.constrainToWidth=function(){return this.videoHeight(this.heightForWidth(this.videoWidth()))
},b.prototype.extraHeight=function(){var g,h;
return h=Math.max(d.elem.height(this.grid.above),d.elem.height(this.grid.top)),g=Math.max(d.elem.height(this.grid.below),d.elem.height(this.grid.bottom)),h+g
},b.prototype.extraWidth=function(){return d.elem.width(this.grid.left)+d.elem.width(this.grid.right)
},b.prototype.heightForWidth=function(c){return Math.round(c/this.aspect())
},b.prototype.widthForHeight=function(c){return Math.round(c*this.aspect())
},b.prototype.aspect=function(){var c;
return this._opts.aspect?this._opts.aspect:this._currentAsset?this._currentAsset.width/this._currentAsset.height:(c=this.asset({container:/mp4|flv/}),c.width/c.height)
},b.prototype.originalAspect=function(){return this.originalAsset()?this.originalAsset().width/this.originalAsset().height:this.bestAsset().width/this.bestAsset().height
},b.prototype.ieSizeHack=function(){d.detect.browser.msie&&(typeof this.elem=="function"?this.elem():void 0)&&(this.info("ieSizeHack"),this.elem().offsetLeft%2===0?this.elem().style.width=""+(this.videoWidth()+1)+"px":this.elem().style.width="100%")
},b.prototype.inFullscreen=function(){return !1
},b.prototype.savePlatformPreference=function(c){return this.info("savePlatformPreference",c),d.localStorage("platformPreference",c)
},b.prototype.visitorKey=function(){return this._tracker.visitorKey()
},b.prototype.eventKey=function(){return this._tracker.eventKey()
},b.prototype.getVisitorKey=function(){return this.visitorKey()
},b.prototype.getEventKey=function(){return this.eventKey()
},b.prototype.disableTextTracks=function(){var c=this;
return this.info("disableTextTracks"),this._disableTextTracks==null&&(this._disableTextTracks=function(){var a,l,k,j,i,h;
if((j=c.elem())!=null?!j.textTracks:!void 0){return
}i=c.elem().textTracks,h=[];
for(l=0,k=i.length;
l<k;
l++){a=i[l],h.push(a.mode="disabled")
}return h
}),this.rebind("play",this._disableTextTracks)
},b.prototype.judyReport=function(){var g,k,j,i,h;
k="        has2PassIphoneEncode        isLessThan15Minutes        sdFlashIsScreencast        hasNoFlashHdAssets        hasGoodRomulusAssetsForSdOnly        hasGoodRomulusAssetsForMd        hasGoodRomulusAssets        baseRomulusSupport        fullRomulusSupport        h264Support        flashSupport        fullscreenSupport        ",h=k.split(/[\s\n]+/);
for(j=0,i=h.length;
j<i;
j++){g=h[j],g&&console.log(g,d.judy[g](this.data.media))
}return this
},b.prototype.sdAsset=function(){throw new Error("Implement in subclass!")
},b.prototype.mdAsset=function(){throw new Error("Implement in subclass!")
},b.prototype.hdAsset=function(){throw new Error("Implement in subclass!")
},b.assets=function(B,A){var z,y,x,w,v,u,t,s,r,q,p;
A==null&&(A={}),x=["select","sortFn","sortBy","unique"],w=d.obj.only(A,x),t=w.select||d.obj.except(A,x),t&&(w.select=t),u=w.select?d.obj.select(B.unnamed_assets,w.select):d.obj.clone(B.unnamed_assets);
if(w.sortFn||w.sortBy){u=d.obj.sort(u,w.sortFn||w.sortBy)
}if(w.unique){s={};
for(q=0,p=u.length;
q<p;
q++){z=u[q],y=z[""+w.unique]||"__undefined__",s[y]||(s[y]=z)
}u=function(){var c;
c=[];
for(v in s){r=s[v],c.push(r)
}return c
}()
}return u
},b.asset=function(g,c){return this.assets(g,c)[0]||null
},b.stillUrl=function(j,r){var q,p,n,m,l,k;
p=this.stillAsset(j,r),r=d.obj.merge({aspect:p.width/p.height,stillUrl:p.url,playButton:!1,playerColor:(k=j.embed_options)!=null?k.playerColor:void 0,videoWidth:p.width||640,videoHeight:p.height||360,stillSnap:!0},r),r.stillSnap?(m=d.generate.stillWidth({videoWidth:r.videoWidth,masterStillWidth:p.width}),n=Math.round(m/r.aspect)):(m=r.videoWidth,n=r.videoHeight),q=d.url.parse(r.stillUrl),l=[d.constant.assetHost,d.constant.assetSslHost,d.constant.freeAssetHost,d.constant.freeAssetSslHost,"prime.wistia.com","mixergy-cdn.wistia.com"];
if(!q.host||l.join(",").indexOf(q.host)<0){return r.stillUrl
}q.params.image_crop_resized=""+m+"x"+n;
if(r.playButton==null||r.playButton){q.params.image_play_button=1,q.params.image_play_button_color=""+r.playerColor+"e0"
}return q.ext("jpg"),q.absolute()
},b.stillAsset=function(g){var c;
return c=this.asset(g,{type:"still_image",sortBy:"created_at desc"}),c||(c=this.asset(g,{type:"original"})),c||(c=this.asset(g,{container:/flv|mp4/})),c
},b.prototype.stillUrl=function(c){return c=d.obj.merge({videoWidth:this.grid?this.videoWidth():null,videoHeight:this.grid?this.videoHeight():null},this._opts,c),d.Video.stillUrl(this._mediaData,c)
},b.prototype.stillAsset=function(){return d.Video.stillAsset(this._mediaData)
},b.prototype.thumbnailAssets=function(){var i,h,n,m,l,k,j;
k=[320,640,960,1280],j=[];
for(m=0,l=k.length;
m<l;
m++){n=k[m],i=this.heightForWidth(n),h=this.stillUrl({videoWidth:n,videoHeight:i}),j.push({height:i,url:h,width:n})
}return j
},b.prototype.changeStill=function(g,j){var i,h=this;
return j==null&&(j={}),i=new Image,i.src=g,i.style.visibility="hidden",i.style.position="absolute",d.elem.append(document.body,i),i.onload=function(){var m,l,k,a;
return a=d.elem.width(i),k=d.elem.height(i),d.elem.remove(i),l=function(){var n,c,q,p;
q=this.assets(),p=[];
for(n=0,c=q.length;
n<c;
n++){m=q[n],m.type!=="still_image"&&p.push(m)
}return p
}.call(h),h._mediaData.unnamed_assets=l,h._mediaData.unnamed_assets.push({type:"still_image",url:g,width:a,height:k,bitrate:0,status:d.Video.READY,created_at:(new Date).getTime()}),h.rebuild()
}
},b.prototype.assets=function(c){return d.Video.assets(this._mediaData,c)
},b.prototype.asset=function(){var g,c;
return typeof arguments[0]=="string"?(g=arguments[0]+"Asset",c=arguments[1],this[g](c)):(c=arguments[0],this.assets(c)[0]||null)
},b.prototype.mp4Asset=function(c){return this.asset(d.obj.merge({container:"mp4","public":!0,status:d.Video.READY},c))
},b.prototype.flashAsset=function(c){return this.asset(d.obj.merge({container:"flv",status:d.Video.READY},c))
},b.prototype.isScreencast=function(){return this.originalAsset().width>640&&this.originalAsset().bitrate<1200
},b.prototype.originalAsset=function(){return this._original||(this._original=this.asset({type:"original"}))
},b.prototype.iphoneAsset=function(){return this._iphoneAsset||(this._iphoneAsset=this.aspect()>1?this.mp4Asset({width:640})||this.smallestNormalMp4Asset():this.mp4Asset({width:320})||this.mp4Asset({width:640})||this.smallestNormalMp4Asset())
},b.prototype.masterM3u8Asset=function(){return this.hasHlsAssets()?{bitrate:"variable",ext:"m3u8",height:"variable","public":!0,size:"variable",type:"hls_video",url:""+d.proto()+"//"+d.remote.embedHost()+"/embed/medias/"+this.hashedId()+".m3u8",width:"variable"}:null
},b.prototype.hasHlsAssets=function(){return this.assets({container:"m3u8"}).length>0
},b.prototype.smallestNormalMp4Asset=function(){return this._smallestNormalMp4||(this._smallestNormalMp4=this.mp4Asset({sortBy:"width asc",width:[640,1920]}))
},b.prototype.properAssetUrl=function(c){return/\.bin$/.test(c)?c.replace(/\.bin$/,"")+"/file.mp4":c
},b.prototype._determineAssetCacheStatus=function(g){var j,i=this;
this.info("_determineAssetCacheStatus");
if(!this._mediaData.createdAt||this._mediaData.createdAt<1415981174){return
}if(d.detect.browser.msie&&d.detect.browser.version<11){return
}try{return d.util.poll(function(){return i.elem()
},function(){var k,a;
if(i.elem().tagName.toLowerCase()==="video"){k=i.properAssetUrl(i._currentAsset.url)
}else{if(/object|embed/.test(i.elem().tagName.toLowerCase())){k=i._currentAsset.url
}else{if(i.elem().tagName.toLowerCase()==="a"){k=i._currentAsset.url
}else{return
}}}return a=d.remote.head(k),a.addEventListener("load",function(){var F,E,D,C,B,A,z,y,x,w,v,u,t;
D={};
if(y=a.getAllResponseHeaders()){C=y.split("\n");
for(u=0,t=C.length;
u<t;
u++){z=C[u];
try{x=z.indexOf(":"),A=z.substring(0,x),v=z.substring(x+1,z.length),A=A.replace(/^\s+/,"").replace(/\s+$/,""),v=v.replace(/^\s+/,"").replace(/\s+$/,""),A&&(D[A]=v)
}catch(s){E=s,d.notice(E)
}}}return w=D.Server,B=D["X-Cache"]==="HIT",F=D["x-amz-version-id"],F?(i._cacheStatus="served-by-s3",i._assetServer=w,i._cacheHit=B):/nginx/.test(w)?(i._cacheStatus="served-by-prime",i._assetServer=w,i._cacheHit=B):/EC/.test(w)?(i._cacheStatus="served-by-edgecast",i._assetServer=w,i._cacheHit=B):/PWS/.test(w)?(i._cacheStatus="served-by-cdnetworks",i._assetServer=w,i._cacheHit=B):(i._cacheStatus="served-by-unknown",i._assetServer=w,i._cacheHit=B),typeof g=="function"?g():void 0
})
})
}catch(h){return j=h,this.notice(j)
}},b.prototype.looksDown=function(){return this.publicApi.looksDown()
},b.prototype.looksUp=function(){return this.publicApi.looksUp()
},b
}(),d.mixin(d.Video.prototype,d.bindable),f=d.Video.prototype.trigger,d.Video.prototype.trigger=function(){var g,c;
return g=1<=arguments.length?__slice.call(arguments,0):[],f.apply(this,g),(c=this.publicApi).trigger.apply(c,arguments)
}
})(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
};
(function(b){if(b.BigPlayButton){return
}return b.BigPlayButton=function(){function a(d,e){this.container=d,this.options=e!=null?e:{},this.touchend=__bind(this.touchend,this),this.touchmove=__bind(this.touchmove,this),this.touchstart=__bind(this.touchstart,this),this.click=__bind(this.click,this),this.mouseup=__bind(this.mouseup,this),this.mousedown=__bind(this.mousedown,this),this.mouseout=__bind(this.mouseout,this),this.mouseover=__bind(this.mouseover,this),this.blur=__bind(this.blur,this),this.keyup=__bind(this.keyup,this),this.focus=__bind(this.focus,this),this.uuid=""+(this.options.uuid||b.seqId())+".big_play_button",this.color(this.options.color||"636155"),this.options.tabbable==null&&(this.options.tabbable=!0),this.elem=this.createElem(),b.elem.append(this.container,this.elem),this.fit(),this.setupBindings()
}return a.prototype.destroy=function(){return this.destroyBindings(),b.elem.remove(this.elem),this.elem=null
},a.prototype.createElem=function(){return b.elem.fromObject({id:this.uuid,tabindex:this.options.tabbable?"0":"-1","aria-role":"Button","aria-label":"Play",style:{background:""+this.color().alpha(0.8).toRgbaOrHex()+" url("+this.iconBase64()+") no-repeat center center",cursor:"pointer",display:"block",height:""+this.height()+"px",outline:"none",position:"absolute",width:""+this.width()+"px",zIndex:1}})
},a.prototype.setupBindings=function(){return b.elem.bind(this.elem,"mouseover",this.mouseover),b.elem.bind(this.elem,"mouseout",this.mouseout),b.elem.bind(this.elem,"focus",this.focus),b.elem.bind(this.elem,"blur",this.blur),b.elem.bind(this.elem,"mousedown",this.mousedown),b.elem.bind(this.elem,"mouseup",this.mouseup),b.elem.bind(this.elem,"click",this.click),b.elem.bind(this.elem,"touchstart",this.touchstart)
},a.prototype.destroyBindings=function(){return b.elem.unbind(this.elem,"mouseover",this.mouseover),b.elem.unbind(this.elem,"mouseout",this.mouseout),b.elem.unbind(this.elem,"focus",this.focus),b.elem.unbind(this.elem,"blur",this.blur),b.elem.unbind(this.elem,"mousedown",this.mousedown),b.elem.unbind(this.elem,"mouseup",this.mouseup),b.elem.unbind(this.elem,"click",this.click),b.elem.unbind(this.elem,"touchstart",this.touchstart),b.elem.unbind(document,"touchmove",this.touchmove),b.elem.unbind(document,"touchend",this.touchend),b.elem.unbind(document,"keyup",this.keyup)
},a.prototype.focus=function(){var c;
return b.elem.addClass(this.elem,"wistia_focus"),!this.onMobile()&&this.options.autoHighlight!==!1&&this.highlightBackground(),b.elem.rebind(document,"keyup",this.keyup),this._focus=!0,typeof(c=this.options).onFocus=="function"&&c.onFocus.apply(c,arguments),!0
},a.prototype.keyup=function(e){var d,f;
return typeof(d=this.options).onKeyup=="function"&&d.onKeyup.apply(d,arguments),(e.keyCode===32||e.keyCode===13)&&typeof(f=this.options).onActivate=="function"&&f.onActivate.apply(f,arguments),!0
},a.prototype.blur=function(){var c;
return b.elem.unbind(this.elem,"keyup",this.keyup),b.elem.removeClass(this.elem,"wistia_focus"),!this.onMobile()&&this.options.autoHighlight!==!1&&this.resetBackground(),this._focus=!1,typeof(c=this.options).onBlur=="function"&&c.onBlur.apply(c,arguments),!0
},a.prototype.mouseover=function(){var c;
return b.elem.addClass(this.elem,"wistia_mouseover"),!this.onMobile()&&this.options.autoHighlight!==!1&&this.highlightBackground(),typeof(c=this.options).onMouseover=="function"&&c.onMouseover.apply(c,arguments),!0
},a.prototype.mouseout=function(){var c;
return b.elem.removeClass(this.elem,"wistia_mouseover"),!this.onMobile()&&this.options.autoHighlight!==!1&&this.resetBackground(),typeof(c=this.options).onMouseout=="function"&&c.onMouseout.apply(c,arguments),!0
},a.prototype.mousedown=function(){var c;
return b.elem.addClass(this.elem,"wistia_mousedown"),typeof(c=this.options).onMousedown=="function"&&c.onMousedown.apply(c,arguments),!0
},a.prototype.mouseup=function(){var c;
return b.elem.removeClass(this.elem,"wistia_mousedown"),typeof(c=this.options).onMouseup=="function"&&c.onMouseup.apply(c,arguments),!0
},a.prototype.click=function(){var d,c;
return typeof(d=this.options).onClick=="function"&&d.onClick.apply(d,arguments),this._blockClickActivate||typeof(c=this.options).onActivate=="function"&&c.onActivate.apply(c,arguments),!0
},a.prototype.touchstart=function(){var c;
return(this.onMobile()||this.options.autoHighlight===!1)&&this.highlightBackground(),typeof(c=this.options).onTouchstart=="function"&&c.onTouchstart.apply(c,arguments),this._swiped=!1,b.elem.bind(document,"touchmove",this.touchmove),b.elem.bind(document,"touchend",this.touchend),!0
},a.prototype.touchmove=function(){var c;
return this._highlighted&&this.onMobile()&&this.options.autoHighlight!==!1&&this.resetBackground(),this._swiped=!0,typeof(c=this.options).onTouchmove=="function"&&c.onTouchmove.apply(c,arguments),!0
},a.prototype.touchend=function(){var d,e;
return b.elem.unbind(document,"touchmove",this.touchmove),b.elem.unbind(document,"touchend",this.touchend),this.onMobile()&&this.options.autoHighlight!==!1&&this.resetBackground(),typeof(d=this.options).onTouchend=="function"&&d.onTouchend.apply(d,arguments),this._swiped||(typeof(e=this.options).onActivate=="function"&&e.onActivate.apply(e,arguments),this.blockClickActivateTemporarily()),this._swiped=!1,!0
},a.prototype.onMobile=function(){return b.detect.iphone||b.detect.ipad||b.detect.android
},a.prototype.blockClickActivateTemporarily=function(){var c=this;
return this._blockClickActivate=!0,b.timeout(""+this.uuid+".block_click_activate",function(){return c._blockClickActivate=!1
},350)
},a.prototype.highlightBackground=function(){return this._highlighted=!0,this.elem.style.backgroundColor=this.highlightColor().alpha(0.8).toRgbaOrHex()
},a.prototype.resetBackground=function(){return this._highlighted=!1,this.elem.style.backgroundColor=this.color().alpha(0.8).toRgbaOrHex()
},a.prototype.fit=function(){return b.elem.style(this.elem,{backgroundImage:"url("+this.iconBase64()+")",backgroundSize:""+this.width()+"px "+this.height()+"px",height:""+this.height()+"px",width:""+this.width()+"px"}),this.center()
},a.prototype.show=function(){return this.elem.style.display="block"
},a.prototype.hide=function(){return this.elem.style.display="none"
},a.prototype.correctedWidth=function(){var c;
return c=this.containerWidth(),this.options.widthCorrection&&(c+=this.options.widthCorrection),c
},a.prototype.correctedHeight=function(){var c;
return c=this.containerHeight(),this.options.heightCorrection&&(c+=this.options.heightCorrection),c
},a.prototype.center=function(){var d,e;
return d=Math.round((this.correctedWidth()-this.width())/2),e=Math.round((this.correctedHeight()-this.height())/2),b.elem.style(this.elem,{left:""+d+"px",top:""+e+"px"})
},a.prototype.containerWidth=function(){return b.elem.width(this.container)
},a.prototype.containerHeight=function(){return b.elem.height(this.container)
},a.prototype.shouldShrink=function(){return this.containerWidth()<=320||this.containerHeight()<=200
},a.prototype.width=function(){return this.shouldShrink()?60:127
},a.prototype.height=function(){return this.shouldShrink()?38:81
},a.prototype.color=function(d){var e;
return d!=null?(this._color=(new b.Color(d)).alpha(0.8),(e=this.elem)!=null&&(e.style.backgroundColor=this._color.toRgbaOrHex()),this._color):this._color.clone()
},a.prototype.highlightColor=function(){return this.color().clone().lighten(40)
},a.prototype.iconBase64=function(){return window.devicePixelRatio>1?this.retinaBase64():this.shouldShrink()?this.smallNonRetinaBase64():this.bigNonRetinaBase64()
},a.prototype.retinaBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACiCAYAAABh2nDdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAulJREFUeNrs3d1tGlEQBtAlSgEpgXSAO8AdxB2QDuwONhWQDpxUAB14OyAdmA5IB+SOvDdCSHnLn/WdI91XP4z1aYY77DIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAvnc/nQzsrlYCs4JdTOxvVgKzgd7t23qkKZAW/PLezVhnICn43qg7kBb88tbNUJcgKfr/4+6BSkBX8buviD/KCf7bzh8zgd/cqB3nBt/OH0OD3i7+1KkJW8O38ITj4/eJvqaKQFXw7fwgNfvfo4i/PQgleV/D/0J8+tnO3WCy+qXKGN0pAU5/3D3b+Oj5ZHf/SNHf/7yqu45Nj3Y7n/AWfQHXZV4/5bpXCqE/GqH+tLvw+uvjT8cmymrv/Ril0fHI6/qX93P1d/Ak+QcEvx8HO36hPnOXwsvMflULHJ6fjX5oGO38dnzjr4WXn72EfwSdM7fx3XvBp1Cdn1L9m56/jE6jv/D3so+MT1PEv2fnr+ASqC7+Dh30EnzzLefQflcKoT8aof60u/Grnf/Sf1PHJsZpHfzt/wSfMz52/Ugg+WWrk/6oMgk+OL+3c+oLPv/dWCfgLapdfO/29Uuj4ZJjauRF6wSfHpxb4Wys8oz4ZjvNoPymFjk+G/TzaC73gE6Au8B5a4L2Rx6hPCM/h6/iE+dwCfyP0Oj45o73dvOATZBq8XdeoT5S+mxd6HZ8Ax8Ev6Oj4ROm7eaEXfAL0Czyf5436hPCqLB2fMH03L/Q6PiGj/Z3v2ev45Kiwvxd6wSfHg908/KfOv1+97nqlspAT/Ec/aw05wT/5UQvICn6N9kuVhJzgjyoIOcE/+alqyAr+zgUe5AS/uvy9ikFO8O3mISz4W6M95ATfbh7Cgv9kNw9ZwR9VBXKC/+wCD7KCbzcPYcHfqAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvE4/BBgAB9Vp0xXzB8AAAAAASUVORK5CYII="
},a.prototype.bigNonRetinaBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABRCAYAAAD7G3lVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATFJREFUeNrs22FtwkAYx+F2QcAkMAfgYBKQwBxMQh1MwiRQB+CgEoaDzkG5S1a+E5IF+n+e5D4ve3+7N0s4mgYAAAAAAAAAAAAA7jFN06cp5MavjuWsTSMzfjWWszORzPizQzmvJpMZ3xYIj28LiG8LpMeffdsCufGrn3LeTS0z/uzLFsiNbwuEx7cFxL9ugY1pZsafdSaaG78abIHc+LaA+MvbAi/+XG5Sww9L2QLtEm/+P/2oUzkfbduexc+LX51L/DdrP09fzvaZf4GVhjf7/Vv3vVFk/bfvMUhg/PoAZG+6efE9Aw+MP/oCSGZ8tz0wvtseGn9w2zPjdyaXF99n9aHx3fbA+G57aHy3PTC+N/mh8b3DD4zvtofGd9tD47vtAAAAAAAAAAAAADymiwADAOSj1JBfF8xMAAAAAElFTkSuQmCC"
},a.prototype.smallNonRetinaBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAmCAYAAACYsfiPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNJREFUeNrs1ksNhEAURNGWgAQkjAQkIAUJ7QApIwEJSEACEh6PBatJhmZJ1T1JCahU+lMKAACAioj4Zjqnwqc9MzoVvszya8evLTM4FdZeO/7TWzva6Kwd7dbMx6nwpboV3l99rh+WXV5/lh+sOrlcWueqvcOzpLNqQ2GtVW8KT0WZ3MeisXAtLixWBQAAQDoEGACTzSwy3SX7YgAAAABJRU5ErkJggg=="
},a
}()
})(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
};
(function(b){if(b.Thumbnail){return
}return b.Thumbnail=function(){function a(g,k){var j,i,h;
this.container=g,this.options=k,this.hideOverlay=__bind(this.hideOverlay,this),this.showOverlay=__bind(this.showOverlay,this),this.touchend=__bind(this.touchend,this),this.touchmove=__bind(this.touchmove,this),this.touchstart=__bind(this.touchstart,this),this.click=__bind(this.click,this),this.mouseup=__bind(this.mouseup,this),this.mousedown=__bind(this.mousedown,this),this.mouseout=__bind(this.mouseout,this),this.mouseover=__bind(this.mouseover,this),this.blur=__bind(this.blur,this),this.keyup=__bind(this.keyup,this),this.focus=__bind(this.focus,this),this.loaded=new b.StopGo,this.uuid=""+(this.options.uuid||b.seqId())+".thumbnail",this.options.tabbable==null&&(this.options.tabbable=!0),((h=this.options.images)!=null?h.length:void 0)>0||(i=b.proto()==="http:"?"http://embed.wistia.com/deliveries/c0612aa8586d19f8471478c66c73ef7ab3f8e334/default-thumb.jpg":"https://embed-ssl.wistia.com/deliveries/c0612aa8586d19f8471478c66c73ef7ab3f8e334/default-thumb.jpg",this.options.images=[{url:i,height:360,width:640}]),this.elem=this.createElem(),b.elem.append(this.container,this.elem),this.img=this.createImg(),this.overlay=this.createOverlay(),this.fit(),this.setupBindings(),this.loadImageFirstTime(),this.options.bigPlayButton!=null&&this.options.bigPlayButton!==!1&&(j=b.obj.isObject(this.options.bigPlayButton)?b.obj.clone(this.options.bigPlayButton):{},this.bigPlayButton=new b.BigPlayButton(this.elem,j))
}return a.prototype.destroy=function(){var c;
return(c=this.bigPlayButton)!=null&&c.destroy(),this.destroyBindings(),b.elem.remove(this.elem),this.elem=this.img=this.overlay=null
},a.prototype.preventDefault=function(c){return c.preventDefault()
},a.prototype.setupBindings=function(){return b.elem.bind(this.elem,"mouseover",this.mouseover),b.elem.bind(this.elem,"mouseout",this.mouseout),b.elem.bind(this.elem,"focus",this.focus),b.elem.bind(this.elem,"blur",this.blur),b.elem.bind(this.elem,"mousedown",this.mousedown),b.elem.bind(this.elem,"mouseup",this.mouseup),b.elem.bind(this.elem,"click",this.click),b.elem.bind(this.elem,"touchstart",this.touchstart),b.elem.bind(this.img,"mousedown",this.preventDefault)
},a.prototype.destroyBindings=function(){return b.elem.unbind(this.elem,"mouseover",this.mouseover),b.elem.unbind(this.elem,"mouseout",this.mouseout),b.elem.unbind(this.elem,"focus",this.focus),b.elem.unbind(this.elem,"blur",this.blur),b.elem.unbind(this.elem,"mousedown",this.mousedown),b.elem.unbind(this.elem,"mouseup",this.mouseup),b.elem.unbind(this.elem,"click",this.click),b.elem.unbind(this.elem,"touchstart",this.touchstart),b.elem.unbind(this.img,"mousedown",this.preventDefault),b.elem.unbind(document,"touchmove",this.touchmove),b.elem.unbind(document,"touchend",this.touchend),b.elem.unbind(document,"keyup",this.keyup)
},a.prototype.focus=function(){var c;
return b.elem.addClass(this.elem,"wistia_focus"),b.elem.rebind(document,"keyup",this.keyup),this._focus=!0,typeof(c=this.options).onFocus=="function"&&c.onFocus.apply(c,arguments),!0
},a.prototype.keyup=function(e){var d,f;
return typeof(d=this.options).onKeyup=="function"&&d.onKeyup.apply(d,arguments),(e.keyCode===32||e.keyCode===13)&&typeof(f=this.options).onActivate=="function"&&f.onActivate.apply(f,arguments),!0
},a.prototype.blur=function(){var c;
return b.elem.unbind(document,"keyup",this.keyup),b.elem.removeClass(this.elem,"wistia_focus"),this._focus=!1,typeof(c=this.options).onBlur=="function"&&c.onBlur.apply(c,arguments),!0
},a.prototype.mouseover=function(){var c;
return b.elem.addClass(this.elem,"wistia_mouseover"),typeof(c=this.options).onMouseover=="function"&&c.onMouseover.apply(c,arguments),!0
},a.prototype.mouseout=function(){var c;
return b.elem.removeClass(this.elem,"wistia_mouseover"),typeof(c=this.options).onMouseout=="function"?c.onMouseout.apply(c,arguments):void 0
},a.prototype.mousedown=function(){var c;
return b.elem.addClass(this.elem,"wistia_mousedown"),typeof(c=this.options).onMousedown=="function"&&c.onMousedown.apply(c,arguments),!0
},a.prototype.mouseup=function(){var c;
return b.elem.removeClass(this.elem,"wistia_mousedown"),typeof(c=this.options).onMouseup=="function"&&c.onMouseup.apply(c,arguments),!0
},a.prototype.click=function(){var d,c;
return typeof(d=this.options).onClick=="function"&&d.onClick.apply(d,arguments),this._blockClickActivate||typeof(c=this.options).onActivate=="function"&&c.onActivate.apply(c,arguments),!0
},a.prototype.touchstart=function(){var c;
return this.showOverlay(),typeof(c=this.options).onTouchstart=="function"&&c.onTouchstart.apply(c,arguments),this._swiped=!1,b.elem.bind(document,"touchmove",this.touchmove),b.elem.bind(document,"touchend",this.touchend),!0
},a.prototype.touchmove=function(){var c;
return b.timeout(""+this.uuid+".hide_overlay_later",this.hideOverlay,300),this._swiped=!0,typeof(c=this.options).onTouchmove=="function"&&c.onTouchmove.apply(c,arguments),!0
},a.prototype.touchend=function(){var d,e;
return b.elem.unbind(document,"touchmove",this.touchmove),b.elem.unbind(document,"touchend",this.touchend),typeof(d=this.options).onTouchend=="function"&&d.onTouchend.apply(d,arguments),this._swiped||(b.timeout(""+this.uuid+".hide_overlay_later",this.hideOverlay,300),typeof(e=this.options).onActivate=="function"&&e.onActivate.apply(e,arguments),this.blockClickActivateTemporarily()),this._swiped=!1,!0
},a.prototype.blockClickActivateTemporarily=function(){var c=this;
return this._blockClickActivate=!0,b.timeout(""+this.uuid+".block_click_activate",function(){return c._blockClickActivate=!1
},350)
},a.prototype.hide=function(){return this.elem.style.display="none"
},a.prototype.show=function(){return this.elem.style.display="block"
},a.prototype.bestImage=function(){var g,k,j,i,h;
j=this.sortedImages(),g=b.elem.width(this.img),g<=0&&(g=640);
if(g<=j[0].width){return j[0]
}for(i=0,h=j.length;
i<h;
i++){k=j[i];
if(k.width>=g){return k
}}return j[j.length-1]
},a.prototype.sortedImages=function(){var d,e;
return this._sortedImages!=null?this._sortedImages:this._sortedImages=function(){var j,i,h,c;
h=this.options.images.sort(function(g,f){return g.width-f.width
}),c=[];
for(j=0,i=h.length;
j<i;
j++){e=h[j],d=b.obj.clone(e),d.aspect=d.width/d.height,c.push(d)
}return c
}.call(this)
},a.prototype.quickPreload=function(g,k){var j,i,h=this;
return i=new Image,j=function(){if(!b.elem.inDom(h.container)){return
}return b.clearTimeouts(""+h.uuid+".long_still_load"),typeof k=="function"?k():void 0
},b.elem.bind(i,"load",j),b.elem.bind(i,"error",j),b.timeout(""+this.uuid+".long_still_load",j,1000),i.src=g
},a.prototype.surePreload=function(g,k){var j,i,h=this;
return i=new Image,j=function(){b.elem.unbind(i,"load",j),b.clearTimeouts(""+h.uuid+".long_still_load");
if(!b.elem.inDom(h.container)){return
}return typeof k=="function"?k():void 0
},b.elem.bind(i,"load",j),i.src=g
},a.prototype.loadImageFirstTime=function(){var d,e=this;
return d=this.bestImage(),this.quickPreload(d.url,function(){return b.elem.append(e.elem,e.img),e.img.src=d.url,e.fitWithoutReload(),e.loaded(!0)
})
},a.prototype.loadImageAtProperSize=function(){var d,c=this;
return d=this.bestImage(),this.surePreload(d.url,function(){return c.img.src=d.url,c.fitWithoutReload()
})
},a.prototype.createElem=function(){return b.elem.fromObject({id:this.uuid,tabindex:this.options.tabbable?"0":"-1",style:{cursor:"default",display:"block",height:"100%",overflow:"hidden",outline:"none",position:"relative",width:"100%"}})
},a.prototype.createImg=function(){return b.elem.fromObject({tagName:"img",id:""+this.uuid+"_img",style:{border:0,display:"block","float":"none",height:"100%",margin:0,maxWidth:"none",padding:0,position:"absolute",width:"100%"}})
},a.prototype.createOverlay=function(){return b.elem.fromObject({id:""+this.uuid+"_overlay",style:{background:"rgba(0,0,0,.5)",border:0,display:"block","float":"none",height:"100%",margin:0,maxWidth:"none",padding:0,pointerEvents:"none",position:"absolute",width:"100%"}})
},a.prototype.showOverlay=function(){return b.elem.append(this.elem,this.overlay)
},a.prototype.hideOverlay=function(){return b.elem.remove(this.overlay)
},a.prototype.containerWidth=function(){return b.elem.width(this.container)
},a.prototype.containerHeight=function(){return b.elem.height(this.container)
},a.prototype.containerAspect=function(){return this.containerWidth()/this.containerHeight()
},a.prototype.fitStrategy=function(c){return c!=null?(this.options.fitStrategy=c,this.fit()):/^cropfill|letterbox$/.test(this.options.fitStrategy)?this.options.fitStrategy:"letterbox"
},a.prototype.fit=function(){return this.fitWithoutReload(),this.loadImageAtProperSize()
},a.prototype.fitWithoutReload=function(){var c;
return b.elem.style(this.elem,{height:""+this.containerHeight()+"px",width:""+this.containerWidth()+"px"}),this.fitStrategy()==="cropfill"?this.cropFillFit():this.letterboxFit(),(c=this.bigPlayButton)!=null?c.fit():void 0
},a.prototype.stretchLimit=function(){return this.options.stretchLimit!=null?this.options.stretchLimit:10
},a.prototype.cropFillFit=function(){var v,u,t,s,r,q,p,n,m,l;
return v=this.bestImage().aspect,s=this.containerWidth(),t=this.containerHeight(),u=this.containerAspect(),this.options.stillSnap===!1?(q=s,r=t):u>v?(q=s,r=Math.round(q/v)):u<=v&&(r=t,q=Math.round(r*v)),l=t-r,n=s-q,m=Math.round(l/2),p=Math.round(n/2),Math.abs(m*2)<=this.stretchLimit()&&(m=0,r=t),Math.abs(p*2)<=this.stretchLimit()&&(p=0,q=s),b.elem.isHidden(this.elem)||!b.elem.inDom(this.elem)?(b.elem.style(this.img,{height:"100%",width:"100%"}),p=m=0):b.elem.style(this.img,{height:""+r+"px",width:""+q+"px"}),b.elem.style(this.img,{border:0,left:""+p+"px",top:""+m+"px"})
},a.prototype.letterboxFit=function(){var G,F,E,D,C,B,A,z,y,x,w,v,u,t,s,r;
return G=this.bestImage().aspect,B=this.containerWidth(),C=this.containerHeight(),D=this.containerAspect(),this.options.stillSnap===!1?(x=B,y=C):D>G?(y=C,x=Math.round(y*G)):D<=G&&(x=B,y=Math.round(x/G)),r=Math.max(0,C-y),t=Math.max(0,B-x),s=Math.round(r/2),u=Math.round(t/2),v=E=s,z=w=u,E*2<=this.stretchLimit()&&(E=0,v=0,y=C),z*2<=this.stretchLimit()&&(z=0,w=0,x=B),F=this.options.backgroundColor||"#000",F==="transparent"?F:(new b.Color(F)).alpha(0.8).toRgbaOrHex(),b.elem.isHidden(this.elem)||!b.elem.inDom(this.elem)?(b.elem.style(this.img,{height:"100%",width:"100%"}),v=E=A=w=0):b.elem.style(this.img,{height:""+y+"px",width:""+x+"px"}),b.elem.style(this.img,{borderTop:""+v+"px solid "+F,borderBottom:""+E+"px solid "+F,borderLeft:""+z+"px solid "+F,borderRight:""+w+"px solid "+F,left:0,top:0})
},a
}()
})(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
};
(function(b){if(b.Html5BigPlayButton){return
}return b.Html5BigPlayButton=function(){function a(c){this.video=c,this.touchend=__bind(this.touchend,this),this.touchmove=__bind(this.touchmove,this),this.touchstart=__bind(this.touchstart,this),this.name="bigPlayButton",this.uuid=b.seqId("wistia_"+this.name+"_"),this.bpb=new b.BigPlayButton(this.video.chromeElem(),{uuid:this.video.uuid,color:this.video.playerColor(),onTouchstart:this.touchstart,onTouchmove:this.touchmove,onTouchend:this.touchend}),this.bpb.hide(),this.elem=this.bpb.elem,typeof this.setupBindings=="function"&&this.setupBindings()
}return a.prototype.initialize=function(){return b.util.notSetOrTrue(this.video._opts.playButton)&&this.turnOn(),this
},a.prototype.touchstart=function(){var c;
return this.video._swiped=!1,(c=this.video.still)!=null?c.touch():void 0
},a.prototype.touchmove=function(){return this.video._swiped=!0
},a.prototype.touchend=function(c){return !this.video._swiped&&b.elem.isInside(c.target,this.elem)&&this.video.play(),this.video._swiped=!1
},a.prototype.setupBindings=function(){var c=this;
return this.video.state()==="playing"&&b.timeout(""+this.video.uuid+".hide_play_button",function(){return c.hide()
}),this.video.bind("play",function(){return c.hide()
}),b.elem.bind(this.video.chromeElem(),"click",function(d){if(d.which===3){return
}return b.elem.isInside(d.target,c.elem)&&c.video.play(),!0
}),this.video.bind("widthchange",function(){return c.reorient()
}),this.video.bind("heightchange",function(){return c.reorient()
})
},a.prototype.turnOn=function(){return this._on=!0,this.show()
},a.prototype.turnOff=function(){return this._on=!1,this.hide()
},a.prototype.on=function(){return this._on
},a.prototype.off=function(){return !this._on
},a.prototype.turnOn=function(){return this._on=!0,this.show(),this.video.trigger("control-on",this.name)
},a.prototype.show=function(){if(this.on()&&/beforeplay|paused|ended/.test(this.video.state())){return this.bpb.show(),this.reorient()
}},a.prototype.hide=function(){return this.bpb.hide()
},a.prototype.reorient=function(){return this.video.looksDown()?this.bpb.hide():this.bpb.fit()
},a.prototype.updateColor=function(){return this.bpb.color(this.video.playerColor())
},a.prototype.remove=function(){return this.bpb.destroy(),this.elem=null
},a
}()
})(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
};
(function(b){if(b.Html5Still){return
}return b.Html5Still=function(){function a(d){var e=this;
this.video=d,this.activate=__bind(this.activate,this),this.name="still",this.uuid=b.seqId("wistia_"+this.name+"_"),this.thumbnail=new b.Thumbnail(this.video.chromeElem(),{tabbable:!1,onActivate:this.activate,stillSnap:this.video._opts.stillSnap,images:this.video.thumbnailAssets()}),b.elem.style(this.thumbnail.elem,{left:0,position:"absolute",top:0}),this.elem=this.thumbnail.elem,this.loaded=new b.StopGo,this.thumbnail.loaded(function(){return e.loaded(!0)
}),typeof this.setupBindings=="function"&&this.setupBindings()
}return a.prototype.initialize=function(){return this.fitStill(),this
},a.prototype.activate=function(c){return b.elem.isInside(c.target,this.elem)&&this.video.play(),!0
},a.prototype.setupBindings=function(){var c=this;
return this.video.state()==="playing"&&b.timeout(""+this.video.uuid+".hide_still",function(){return c.hide()
}),this.video.bind("play",function(){return c.hide()
}),this.video.bind("startplay",function(){return c.hide()
}),b.elem.bind(this.video.chromeElem(),"click",function(d){if(d.which!==1){return
}return b.elem.isInside(d.target,c.elem)&&c.video.play(),!0
}),this.video.bind("widthchange",function(){return c.fitStill()
}),this.video.bind("heightchange",function(){return c.fitStill()
})
},a.prototype.fitStill=function(){return this.thumbnail.fit()
},a.prototype.shouldShow=function(){return this.video.state()==="beforeplay"
},a.prototype.show=function(){return this.thumbnail.show(),this.fitStill()
},a.prototype.hide=function(){return this.thumbnail.hide()
},a.prototype.remove=function(){return this.thumbnail.destroy(),this.elem=null
},a
}()
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(d){var c;
if(d.FlashVideo){return
}d.FlashVideo=function(b){function a(){return c=a.__super__.constructor.apply(this,arguments),c
}return __extends(a,b),a.prototype.playerType="flash",a.prototype.elem=function(){return document[this.uuid]
},a.prototype.embed=function(){var e=this;
return this._currentAsset=this.bestAsset(),this.data.asset=this._currentAsset,this.resetStateVariables(),this.placeEmbed(this.createEmbedElem()),this._switchToHtml5==null&&(this._switchToHtml5=function(){return d.timeout(""+e.uuid+".delayed_rebuild_as_html5",function(){return e.savePlatformPreference("romulus"),e.publicApi.rebuildAs("romulus"),e.trigger("widthchange"),e.trigger("heightchange")
})
}),d.unbind("switch-to-html5",this._switchToHtml5),d.bind("switch-to-html5",this._switchToHtml5),this.embedded(!0),this.checkForReady(),this
},a.prototype.checkForReady=function(){var e=this;
return this.info("checkForReady"),this._checkDownState(),this._readyCheckFunc=function(g){var f;
g==null&&(g=0),e.info("_readyCheckFunc",g);
if(g>=25){return
}return e.elem()&&e._allFuncsUp()?d.timeout(""+e.uuid+".ready_delay",function(){return e.info("ready(true)"),e.ready(!0),e.listenForEvents()
},200):(f=Math.max(1000,50+g*75),d.timeout(""+e.uuid+".ready_check",function(){return e._readyCheckFunc(g+1)
},f))
},this.up(function(){return e.info("start _readyCheckFunc"),e._readyCheckFunc()
})
},a.prototype.initFrom=function(e){return d.elem.remove(e.wrapperElem),this.embed()
},a.prototype.cleanupRefs=function(){if(this._switchToHtml5){return d.unbind("switch-to-html5",this._switchToHtml5)
}},a.prototype.bestAsset=function(){return this._forceAsset?this._forceAsset:this._opts.videoQuality==="sd-only"?this.mdOrSdAsset():this._opts.videoQuality==="hd-only"?this.hdAsset()||this.mdAsset()||this.sdAsset():this._opts.videoQuality==="md"?this.mdAsset()||this.sdAsset():this.chosenAsset()?this.chosenAsset():this.isScreencast()&&this.screencastAsset()?this.screencastAsset()||this.mdOrSdAsset():this.mdOrSdAsset()
},a.prototype.chosenAsset=function(){var f,e,h,g;
return/width:/.test(this._opts.videoQuality)?(g=this._opts.videoQuality.match(/width:([a-z]*)(\d+)/i),h=g[0],f=g[1],e=g[2],f===""||f==="lte"?this.flashAsset({width:[0,e],sortBy:"width desc"})||this.flashAsset({width:[e,10000],sortBy:"width asc"}):f==="gte"?this.flashAsset({width:[e,10000],sortBy:"width asc"})||this.flashAsset({width:[0,e],sortBy:"width desc"}):null):null
},a.prototype.mdOrSdAsset=function(){return this._mdOrSdAsset||(this._mdOrSdAsset=this._opts.videoQuality==="sd-only"?this.sdAsset():this._opts.videoQuality==="md"||this._opts.videoFoam||this.grid&&this.videoWidth()>=720?this.mdAsset()||this.sdAsset():this.sdAsset())
},a.prototype.screencastAsset=function(){return this._screencastAsset||(this._screencastAsset=this.flashAsset({bitrate:[0,1300],sortBy:"width desc, bitrate asc",width:[0,this.originalAsset().width]}))
},a.prototype.sdAsset=function(){return this._sdAsset||(this._sdAsset=this.flashAsset({width:640})||this.flashAsset({sortBy:"width asc"})||this.iphoneAsset()||this.mp4Asset())
},a.prototype.mdAsset=function(){return this._mdAsset||(this._mdAsset=this.flashAsset({width:[720,980],sortBy:"width desc, bitrate desc"}))
},a.prototype.hdAsset=function(){return this._hdAsset||(this._hdAsset=this.flashAsset({width:[980,this._opts.maxHdWidth||1300],sortBy:"width desc, bitrate desc"}))
},a.prototype.playerVersion=function(){return parseFloat(this.playerUrl().match(/_v(\d+(?:\.\d+)?)/)[1]||2)
},a.prototype.stillUrl=function(e){return e=d.obj.merge({playButton:!1},e),a.__super__.stillUrl.call(this,e)
},a.prototype.generateFlashVars=function(){var e,g,f;
g={autoLoad:this._opts.autoLoad,autoPlay:this._opts.autoPlay&&!this.suppressPlay(),banner:this._mediaData.branding||this._opts.branding?!0:null,chromeless:this._opts.chromeless?!0:null,controlsVisibleOnLoad:this._opts.controlsVisibleOnLoad?!0:!1,customColor:this.playerVersion()>=2?this.playerColor():null,endVideoBehavior:this._opts.endVideoBehavior||null,endVideoCallback:this._opts.endVideoCallback||null,foreignData:this._opts.foreignData,fullscreenDisabled:this._opts.fullscreenButton===!1?!0:null,mediaDuration:this._mediaData.duration,playButtonVisible:this._opts.playButton!=null?this._opts.playButton:!0,quality:d.detect.ps3&&!this._opts.videoQuality?"sd-only":this._opts.videoQuality,referrer:this._attrs.pageUrl,showAbout:this._mediaData.showAbout!=null?this._mediaData.showAbout:!0,showPlayButton:this._opts.smallPlayButton===!1?!1:null,showPlaybar:this._opts.playbar===!1?!1:null,showVolume:this._opts.volumeControl?!0:!1,stillUrl:this.stillUrl(),allowSwitchToHtml5:d.detect.romulusSupport,trackingTransmitInterval:this._opts.trackingTransmitInterval||this._mediaData.trackingTransmitInterval||null,unbufferedSeek:/flash/i.test(this.bestAsset().type),videoUrl:this.bestAsset().url,wemail:this.email(),wmode:this._opts.wmode||"opaque"},d.detect.android&&(g.quality="sd-only"),this.chosenAsset()||(this.hdAsset()?g.hdUrl=this.hdAsset().url:this.mdAsset()&&this.mdAsset().url!==this.mdOrSdAsset().url&&(g.hdUrl=this.mdAsset().url)),this._attrs.shouldTrack&&!this._attrs.trackWithJs&&(g.embedServiceURL=this._opts.distilleryUrl||this._mediaData.distilleryUrl,g.accountKey=this._opts.accountKey||this._mediaData.accountKey,g.mediaID=this._opts.mediaKey||this._mediaData.mediaKey);
for(e in g){f=g[e],f==null&&delete g[e]
}return g
},a.prototype.createEmbedObject=function(){var g,k,j,i,h;
return h=this._opts.wmode||"opaque",j={tagName:"object",id:this.uuid,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",style:d.generate.relativeBlockCss()},this._opts.wmode!=="transparent"&&(j.bgcolor="#000000"),k=this.generateFlashVars(),i=[{tagName:"param",name:"movie",value:this.playerUrl()},{tagName:"param",name:"allowfullscreen",value:"true"},{tagName:"param",name:"allowscriptaccess",value:"always"},{tagName:"param",name:"wmode",value:h},{tagName:"param",name:"flashvars",value:d.url.jsonToParams(k)}],g={tagName:"embed",src:this.playerUrl(),name:this.uuid,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",wmode:h,flashvars:d.url.jsonToParams(k),style:d.generate.relativeBlockCss()},h!=="transparent"&&(g.bgcolor="#000000"),j.childNodes=i.concat(g),j
},a.prototype.playerUrl=function(){var e,f;
return((f=this.bestAsset())!=null?f.url:void 0)?(e=d.url.parse(this.bestAsset().url),this.info("using player url derived from bestAsset",e.authority()),""+d.proto()+"//"+e.authority()+"/flash/embed_player_v2.0.swf?2015-02-27"):(this.info("Couldn't determine player url from bestAsset. Falling back to defaults."),""+d.proto()+"//"+d.remote.assetHost()+"/flash/embed_player_v2.0.swf?2015-02-27")
},a.prototype.createEmbedElem=function(){return d.generate.html(this.createEmbedObject())
},a.prototype._allFuncsUp=function(){var f,e,h,g;
g=["changeColor","getCurrentTime","getCurrentState","videoPlay","videoSeek","getVolume","setVolume","setEmail"];
for(e=0,h=g.length;
e<h;
e++){f=g[e];
if(!this.elem()[f]){return !1
}}return !0
},a.prototype.listenForEvents=function(){var e=this;
return d.eventLoop.add(""+this.uuid+".events",this._eventLoopDuration,function(){var f,h,g;
if(e.up()&&e.elem()&&e._allFuncsUp()){return f=e.state(),h=e.time(),g=e.volume(),f==="playing"&&(e._lastState==="playing"||e._lastState==="beforeplay")&&(e._lastTimePosition===-1||e.time()===e._lastTimePosition)&&e.trigger("waiting"),f!==e._lastState&&(e.trigger("statechange",f),f==="playing"&&e.trigger("play")),h!==e._lastTimePosition&&h>0&&(e.trigger("timechange",h),Math.floor(h)!==Math.floor(e._lastTimePosition)&&e.trigger("secondchange",Math.floor(h)),Math.abs(h-e._lastTimePosition)>e._attrs.seekThreshold&&e.trigger("seek",h,e._lastTimePosition),e._lastTimePosition=h),f!==e._lastState&&(f==="paused"?e.trigger("pause"):f==="ended"?(e.trigger("end"),e.trigger("afterend")):e._lastState==="playing"&&f==="beforeplay"&&e._opts.endVideoBehavior==="reset"&&(e.trigger("end"),e.trigger("afterend"))),g!==e._lastVolume&&(e.trigger("volumechange",g),e._lastVolume=g),e._lastState=f
}})
},a.prototype.play=function(){var e=this;
return this.suppressPlay()?this:(this.ready(function(){return e.commandQueueOpen.synchronize(function(f){return e.elem().videoPlay(),f()
})
}),this)
},a.prototype.pause=function(){var e=this;
return this.ready(function(){return e.commandQueueOpen.synchronize(function(f){return e.elem().videoPause(),f()
})
}),this
},a.prototype.time=function(f){var e,h=this;
if(f!=null){return this.suppressPlay()?this:(this.ready(function(){return h.commandQueueOpen.synchronize(function(i){var k,j;
return j=h.state(),!h._streamSet||j==="beforeplay"||j==="ended"?(h.info("time("+f+"): seek before play from",j),k=function(){return h.info("time("+f+"): seek on play"),h._streamSet=!0,h.elem().videoSeek(f),j==="playing"?h.elem().videoPlay():h.elem().videoPause(),i(),h.unbind
},h.bind("timechange",k),h.elem().videoPlay()):(h.elem().videoSeek(f),/paused|ended/.test(j)&&h.elem().videoPause(),i())
})
}),this)
}try{return this.elem().getCurrentTime()||0
}catch(g){return e=g,-1
}},a.prototype.state=function(){var f;
try{switch(this.elem().getCurrentState()){case 0:return"ended";
case 1:return"playing";
case 2:return"paused";
default:return"beforeplay"
}}catch(e){return f=e,"beforeplay"
}},a.prototype.volume=function(f){var e,h=this;
if(f!=null){return this.ready(function(){var i;
i=h.volume(),h.elem().setVolume(Math.min(Math.round(f*100),100));
if(i!==h.volume()){return h.trigger("volumechange",h.volume(),i)
}}),this
}try{return e=this.elem().getVolume(),e>0&&(e/=100),e
}catch(g){return 1
}},a.prototype.controlEnabled=function(f,e){var g=this;
return e!=null?this.ready(function(){return g.elem()[""+f+"Enabled"](e)
}):this.elem()[""+f+"Enabled"]()
},a.prototype.bigPlayButtonEnabled=function(e){return this.controlEnabled("bigPlayButton",e),this
},a.prototype.smallPlayButtonEnabled=function(e){return this.controlEnabled("playButton",e),this
},a.prototype.playbarControlEnabled=function(e){return this.controlEnabled("playbar",e),this
},a.prototype.volumeControlEnabled=function(e){return this.controlEnabled("volumeControl",e),this
},a.prototype.fullscreenButtonEnabled=function(e){return this.controlEnabled("fullscreenButton",e),this
},a.prototype.setPlayerColor=function(e){return this.playerColor(e)
},a.prototype.playerColor=function(e){var g,f=this;
return e?(g=this._attrs.playerColor,e=d.Video._sanePlayerColor(e),this._attrs.playerColor=e,this.playerVersion()>=2&&this.ready(function(){f.elem().changeColor(e);
if(g!==f._attrs.playerColor){return f.trigger("playercolorchange",f._attrs.playerColor,g)
}}),this):this._attrs.playerColor
},a.prototype.email=function(f){var e=this;
return f!=null?this.ready(function(){return e.elem().setEmail(f)
}):null
},a
}(d.Video)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(d){var c;
c=d;
if(c.NoFlashVideo){return
}return c.NoFlashVideo=function(b){function e(){e.__super__.constructor.apply(this,arguments)
}return __extends(e,b),e.prototype.embed=function(){var f=this;
return this.placeEmbed('<div style="background:#fff;border:3px #eee dashed;color:#999;font-family:Helvetica,Arial;font-size:15px;height:100%;overflow:hidden;text-align:center;text-overflow:ellipsis;width:100%;">\n<div id="'+this.uuid+'_padding" style="padding:0px;">\n<p style="margin-top:0;">This video requires a Flash plugin to play in this browser.</p>\n<p style="margin-bottom:0;">Please download and install <a href="http://get.adobe.com/flashplayer/" style="color:#54bbff;text-decoration:underline;" target="_blank">Adobe Flash Player</a> to continue.</p>\n</div>\n</div>'),this.fit(),this._fit==null&&(this._fit=function(){return f.fit()
}),this.rebind("widthchange",this._fit),this.rebind("heightchange",this._fit)
},e.prototype.fit=function(){var f,i,h,g=this;
if(!this.paddingElem()){return
}return h=Math.floor(this.height()*0.3),this.paddingElem().style.paddingTop=""+h+"px",this.paddingElem().style.paddingBottom=""+h+"px",i=c.elem.height(this.paddingElem())+h*2,f=c.elem.height(this.container),i>f&&(h=Math.max(0,Math.floor((f-i)/2)),this.paddingElem().style.paddingTop=""+h+"px",this.paddingElem().style.paddingBottom=""+h+"px"),i=c.elem.height(this.paddingElem())+h*2,f=c.elem.height(this.container),this._clickToGetFlash==null&&(this._clickToGetFlash=function(){return window.open("http://get.adobe.com/flashplayer/")
}),i>f?(this.paddingElem().setAttribute("title","This video requires a Flash plugin to play in this browser. Click to get the Flash player from Adobe."),this.paddingElem().style.cursor="pointer",c.elem.rebind(this.paddingElem(),"click",this._clickToGetFlash)):(this.paddingElem().removeAttribute("title"),this.paddingElem().style.cursor="",c.elem.unbind(this.paddingElem(),"click",this._clickToGetFlash))
},e.prototype.paddingElem=function(){return document.getElementById(""+this.uuid+"_padding")
},e
}(c.Video)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
},__slice=[].slice;
(function(e){var d,f;
d=e;
if(d.Html5Video){return
}return d.Html5Video=function(b){function c(){return f=c.__super__.constructor.apply(this,arguments),f
}return __extends(c,b),c.prototype.playerType="html5",c.prototype.elem=function(){return document.getElementById(this.uuid)
},c.prototype.source=function(){return this.elem().childNodes[0]
},c.prototype.chromeElem=function(){return document.getElementById(""+this.uuid+"_html5_player")
},c.prototype.embed=function(){var g=this;
return this.info("embed"),this.onIos8Plus()?(this.info("wait for docReady"),d.util.onDocReady(function(){return g.embedForReal()
})):this.embedForReal(),this
},c.prototype.embedForReal=function(){var g=this;
return this.info("embedForReal"),this.resetStateVariables(),this._currentAsset=this.bestAsset(),this.data.asset=this._currentAsset,this.placeEmbed(this.createEmbedElem()),this._opts.uiWebView?d.timeout(""+this.uuid+".inject_source",function(){return d.elem.append(g.elem(),d.elem.fromObject(g.sourceElemObj())),g.setupEmbed()
},100):this.setupEmbed()
},c.prototype.setupEmbed=function(){return this.info("setupEmbed"),this._currentAsset=this.bestAsset(),this.data.asset=this._currentAsset,this.setupControls(),this.applyHacks(),this.setupBindings(),this.listenForEvents(),this.pollForEvents(),this.embedded(!0),this.checkForReady()
},c.prototype.checkForReady=function(){var g,h=this;
return this.info("checkForReady"),this._checkDownState(),g=function(){return d.detect.iphone||d.detect.ipad?(h.info("ready"),h._hasBeenReady=!0,h.info("@ready(true) synchronous"),h.ready(!0)):d.timeout(""+h.uuid+".delayed_ready",function(){return h.info("ready"),h._hasBeenReady=!0,h.info("@ready(true) async"),h.ready(!0)
})
},this._hasBeenReady&&this.looksUp()?g():(this.info("set ready on up"),this.up(g))
},c.prototype.createEmbedElem=function(){var g,i,h;
h={id:""+this.uuid+"_html5_player",style:{background:"transparent",display:"block",height:"100%",position:"relative",width:"100%"}},i={tagName:"video",style:{background:"transparent",display:"block",height:"100%",left:"-100%",position:"relative",top:0,width:"100%"},id:this.uuid,preload:"none",poster:"//"+d.constant.embedHost+"/assets/images/blank.gif"};
if(d.detect.browser.msie||d.detect.trident){i.style.minWidth="10px",i.style.minHeight="10px"
}return this._opts.chromeless||(i.controls="controls"),this._opts.endVideoBehavior==="loop"&&(i.loop="loop"),this._opts.uiWebView||(g=this.sourceElemObj(),i.childNodes=[g]),h.childNodes=[i],d.elem.fromObject(h)
},c.prototype.sourceElemObj=function(){return{tagName:"source",src:this.properAssetUrl(this._currentAsset.url),type:"video/mp4"}
},c.prototype.setupControls=function(){var g=this;
return this.info("setupControls"),this.still=(new d.Html5Still(this)).initialize(),this._opts.wmode!=="transparent"&&this.still.loaded(function(){var a;
return(a=g.chromeElem())!=null?a.style.backgroundColor="#000":void 0
}),this.bigPlayButton=(new d.Html5BigPlayButton(this)).initialize(),this.showControls()
},c.prototype.showControls=function(){if(!this._controlsVisible){return this.info("showControls"),this.still.show(),this.bigPlayButton.show(),this.hideVideoElem(),this._controlsVisible=!0
}},c.prototype.hideControls=function(){if(this._controlsVisible){return this.info("hideControls"),this.still.hide(),this.bigPlayButton.hide(),this.showVideoElem(),this._controlsVisible=!1
}},c.prototype.controlsVisible=function(){return !!this._controlsVisible
},c.prototype.hideVideoElem=function(){return this.info("hideVideoElem"),this.elem().style.left="-100%"
},c.prototype.showVideoElem=function(){return this.info("showVideoElem"),this.elem().style.left=0,this.correctForIntegers()
},c.prototype.setupBindings=function(){return this.setupIosBindings()
},c.prototype.setupIosBindings=function(){var g=this;
if(!d.detect.ipad&&!d.detect.iphone){return
}this._iosOnEnd==null&&(this._iosOnEnd=function(){g.info("_iosOnEnd");
if(!g.publicApi.nextVideo()){return g.showControls()
}}),this._iosOnPause==null&&(this._iosOnPause=function(){return g.info("_iosOnPause"),g.showControls()
}),d.detect.iphone&&this.rebind("pause",this._iosOnPause);
if(d.detect.iphone||d.detect.ipad){return this.rebind("end",this._iosOnEnd)
}},c.prototype.fixWebkitControlsBug=function(){return this.info("fixWebkitControlsBug"),this.elem().removeAttribute("controls"),this.elem().setAttribute("controls","controls")
},c.prototype.fit=function(){var g=this;
return c.__super__.fit.apply(this,arguments),this.embedded(function(){return g.still.fitStill(),g.bigPlayButton.reorient(),g.correctForIntegers()
})
},c.prototype.cancelFullscreen=function(){if(this.inFullscreen()){return this.info("cancelFullscreen"),d.elem.cancelFullscreen(this.elem())
}},c.prototype.correctForIntegers=function(){if(!this.controlsVisible()){return c.__super__.correctForIntegers.apply(this,arguments)
}},c.prototype.applyHacks=function(){if(!d.detect.iphone&&!d.detect.ipad){return this.disableTextTracks(),this.fixWebkitControlsBug()
}},c.prototype.inFullscreen=function(){return !!this._inFullscreen
},c.prototype.listenForEvents=function(){var g=this;
return this._martialPlay==null&&(this._martialPlay=function(){return g._hasPlayed=!0,g._beforePlay=!1,g.playing(!0),g.trigger("play")
}),this._martialPause==null&&(this._martialPause=function(){return g.fireTimeChangedEventsIfChanged(),g.playing(!1),g.trigger("pause")
}),this._martialEnd==null&&(this._martialEnd=function(){var a,h;
return g._inEndEventContext=!0,g.fireTimeChangedEventsIfChanged(),g.playing(!1),g.trigger("end"),g.trigger("afterend"),g._inEndEventContext=!1,(a=g.publicApi)!=null?(h=a._impl)!=null?h._inEndEventContext=!1:void 0:void 0
}),this._martialVolumeChange==null&&(this._martialVolumeChange=function(){return g.trigger("volumechange",g.volume())
}),this._beginFullscreen==null&&(this._beginFullscreen=function(){if(!g._inFullscreen){return g._inFullscreen=!0,g.trigger("enter-fullscreen")
}}),this._endFullscreen==null&&(this._endFullscreen=function(){if(g._inFullscreen){return g._inFullscreen=!1,g.trigger("cancel-fullscreen")
}}),this._onEnterFullscreen==null&&(this._onEnterFullscreen=function(a){return a===g.elem()&&(g.info("_onEnterFullscreen"),g._inFullscreen=!0,g.trigger("enter-fullscreen")),!0
}),this._onCancelFullscreen==null&&(this._onCancelFullscreen=function(){return g._inFullscreen&&(g.info("_onCancelFullscreen"),g._inFullscreen=!1,g.trigger("cancel-fullscreen")),!0
}),this.unbindListeners(),this.info("listenForEvents"),d.elem.bind(this.elem(),"playing",this._martialPlay),d.elem.bind(this.elem(),"pause",this._martialPause),d.elem.bind(this.elem(),"ended",this._martialEnd),d.elem.bind(this.elem(),"volumechange",this._martialVolumeChange),d.elem.bind(this.elem(),"webkitbeginfullscreen",this._beginFullscreen),d.elem.bind(this.elem(),"webkitendfullscreen",this._endFullscreen),d.bind("enter-fullscreen",this._onEnterFullscreen),d.bind("cancel-fullscreen",this._onCancelFullscreen)
},c.prototype.unbindListeners=function(){return this.info("unbindListeners"),d.elem.unbind(this.elem(),"playing",this._martialPlay),d.elem.unbind(this.elem(),"pause",this._martialPause),d.elem.unbind(this.elem(),"ended",this._martialEnd),d.elem.unbind(this.elem(),"volumechange",this._martialVolumeChange),d.elem.unbind(this.elem(),"webkitbeginfullscreen",this._beginFullscreen),d.elem.unbind(this.elem(),"webkitendfullscreen",this._endFullscreen)
},c.prototype.pollForEvents=function(){var g=this;
return this.info("pollForEvents"),d.eventLoop.add(""+this.uuid+".events",this._eventLoopDuration,function(){var a;
if(!g.looksDown()){return a=g.state(),a==="playing"&&a===g._lastState&&g.time()===g._lastTimePosition&&g.trigger("waiting"),a!==g._lastState&&(g.trigger("statechange",a),g._lastState=a),g.fireTimeChangedEventsIfChanged()
}})
},c.prototype.fireTimeChangedEventsIfChanged=function(){var g;
if((g=this.time())!==this._lastTimePosition&&g>0){return this.trigger("timechange",g),Math.floor(g)!==Math.floor(this._lastTimePosition)&&this.trigger("secondchange",Math.floor(g)),Math.abs(g-this._lastTimePosition)>this._attrs.seekThreshold&&this.trigger("seek",g,this._lastTimePosition),this._lastTimePosition=g
}},c.prototype.onIos8Plus=function(){return parseInt(d.detect.ios.version,10)>=8
},c.prototype.canAutoPlay=function(){return !this.suppressPlay()&&this.inUserEventContext()
},c.prototype.bestAsset=function(){return this._useHls==null&&(this._useHls=Math.random()<0.5),d.detect.iphone&&this.hasHlsAssets()&&this._useHls?this.masterM3u8Asset():d.detect.iphone||d.detect.android?this.iphoneAsset()||this.mp4Asset():this._opts.videoQuality==="hd-only"||d.detect.retina&&d.detect.ipad?this.hdAsset()||this.mdAsset()||this.sdAsset():this.chosenAsset()?this.chosenAsset():d.detect.ipad?this.iphoneAsset():this.mdOrSdAsset()
},c.prototype.chosenAsset=function(){var h,g,j,i;
return/width:/.test(this._opts.videoQuality)?(i=this._opts.videoQuality.match(/width:([a-z]*)(\d+)/i),j=i[0],h=i[1],g=i[2],h===""||h==="lte"?this.mp4Asset({width:[0,g],sortBy:"width desc"})||this.mp4Asset({width:[g,10000],sortBy:"width asc"}):h==="gte"?this.mp4Asset({width:[g,10000],sortBy:"width asc"})||this.mp4Asset({width:[0,g],sortBy:"width desc"}):null):null
},c.prototype.mdOrSdAsset=function(){return this._mdOrSdAsset||(this._mdOrSdAsset=this._opts.videoQuality==="sd-only"?this.sdAsset():this._opts.videoQuality==="md"||this._opts.videoFoam||this.videoWidth()>=720?this.mdAsset()||this.sdAsset():this.sdAsset())
},c.prototype.sdAsset=function(){return this._sdAsset||(this._sdAsset=this.isScreencast()?this.screencastAsset()||this.smallestNormalMp4Asset()||this.mp4Asset():this.iphoneAsset()||this.mp4Asset())
},c.prototype.mdAsset=function(){return this._mdAsset||(this._mdAsset=this.isScreencast()&&this.screencastAsset()?this.screencastAsset():this.mp4Asset({width:[720,980],sortBy:"width desc"}))
},c.prototype.hdAsset=function(){return this._hdAsset||(this._hdAsset=this.mp4Asset({width:[980,this._opts.maxHdWidth||1300],sortBy:"width desc, bitrate desc"}))
},c.prototype.screencastAsset=function(){return this._screencastAsset||(this._screencastAsset=this.mp4Asset({bitrate:[0,1300],sortBy:"width desc, bitrate asc",width:[0,this.originalAsset().width]}))
},c.prototype.stillUrl=function(g){return g=d.obj.merge({playButton:!1},g),c.__super__.stillUrl.call(this,g)
},c.prototype.play=function(){var g=this;
return this.suppressPlay()?this:(this.info("play"),this.ready(function(){var a;
return a=function(h){return d.detect.iphone||d.detect.ipad||d.detect.android||(g.hideControls(),g.trigger("startplay")),g.elem().play(),g.playing(function(){return g.hideControls(),g.info("play: done"),typeof h=="function"?h():void 0
})
},d.detect.iphone||d.detect.ipad||d.detect.android?g.inUserEventContext()?g.commandQueueOpen.synchronize(a):(g.info("play received, but cannot execute because not in the context of a user generated event. calling issuePlay() anyway, for devices that may respond."),a()):g.commandQueueOpen.synchronize(a)
}),this)
},c.prototype.inUserEventContext=function(){return d.detect.ipad||d.detect.iphone||d.detect.android?this._inEndEventContext||window.event&&window.UIEvent&&event instanceof UIEvent:!0
},c.prototype.pause=function(){var g=this;
return this.info("pause"),this.ready(function(){return g.commandQueueOpen.synchronize(function(a){return g.elem().pause(),a()
})
}),this
},c.prototype.time=function(g,j){var i,h=this;
return j==null&&(j={}),g!=null?this.suppressPlay()?this:(this.info("time",g),this.ready(function(){return h.state()==="beforeplay"||h.state()==="ended"?h.commandQueueOpen.synchronize(function(l){var k,a;
return h.state()==="beforeplay"||h.state()==="ended"?(h.info("seek before play"),a=h.state(),h.info("time "+g+": state before seek is "+a),k=function(){return d.detect.iphone||d.detect.ipad?(h.info("time "+g+": doing iOS event chain to seek before play"),d.elem.bindOnce(h.elem(),"canplaythrough",function(){return d.elem.bindOnce(h.elem(),"progress",function(){return d.elem.bindOnce(h.elem(),"seeked",function(){return a==="playing"?h.info("time: "+g+": play after seek"):(h.info("time: "+g+": pause after seek"),h.elem().pause()),l()
}),h.elem().currentTime=g
})
})):(h.info("time "+g+": changing currentTime and waiting for seek"),h._waitForTimeChangeOrSeek(function(){return a==="playing"?h.info("time: "+g+": play after seek"):(h.info("time: "+g+": pause after seek"),h.elem().pause()),l()
}),h.elem().currentTime=g)
},h._hasPlayed?(h.info("time "+g+": already played, seeking"),k()):(h.info("time "+g+": starting stream by calling play()"),j.lazy?(h.bind("play",function(){return h.elem().currentTime=g
}),l()):(h.bind("play",function(){return k(),h.unbind
}),h.elem().play()))):(h.info("time "+g+": already played, just change currentTime"),h._waitForTimeChangeOrSeek(l),h.elem().currentTime=g,l())
}):h.commandQueueOpen(function(){return h.info("time "+g+": already played, just change currentTime immediately"),h.elem().currentTime=g
})
}),this):((i=this.elem())!=null?i.currentTime:void 0)||0
},c.prototype._waitForTimeChangeOrSeek=function(g){var h=this;
return d.detect.browser.msie?this.bind("timechange",function(){return g(),h.unbind
}):d.elem.bindOnce(this.elem(),"seeked",function(){return g()
})
},c.prototype.state=function(){var h;
try{return this._beforePlay?"beforeplay":this.elem().ended?"ended":this.elem().paused?"paused":"playing"
}catch(g){return h=g,"unknown"
}},c.prototype.volume=function(h){var g,i=this;
return h!=null?(this.info("volume",h),h=Math.max(0,Math.min(1,h)),this.ready(function(){return i.elem().volume=h
}),this):((g=this.elem())!=null?g.volume:void 0)||0
},c.prototype.playerColor=function(g){var i,h;
return g!=null?(this.info("playerColor",g),i=this._attrs.playerColor,this._attrs.playerColor=d.Video._sanePlayerColor(g),(h=this.bigPlayButton)!=null&&h.updateColor(),i!==this._attrs.playerColor&&this.trigger("playercolorchange",this._attrs.playerColor,i),this):this._attrs.playerColor
},c.prototype.playbackRate=function(g){return this.elem().playbackRate!=null?g!=null?(this.info("playbackRate",g),this.elem().playbackRate=g,this._eventLoopDuration=Math.max(50,Math.min(500,this._baseEventLoopDuration*g)),this._playbackRate=g,this):this.elem().playbackRate:(this.info("playbackRate",g,"not supported"),c.__super__.playbackRate.call(this,g))
},c.prototype.stopStreaming=function(){var h,m,l,k,j;
this.info("stopStreaming");
try{return d.detect.trident?(m=this.elem())!=null&&(m.src=".mp4"):(l=this.elem())!=null&&(l.src=""),(k=this.elem())!=null&&k.load(),(j=this.elem())!=null?j.currentTime=0:void 0
}catch(i){return h=i,this.notice(h)
}},c.prototype.removeNonVideoElements=function(){return this.info("removeNonVideoElements"),this.still.remove(),this.bigPlayButton.remove()
},c.prototype.initFrom=function(g){return this.info("initFrom",g),this.uuid=g.uuid,this.wrapperElem=g.wrapperElem,this._inFullscreen=g._inFullscreen,this._inEndEventContext=g._inEndEventContext,this.resetStateVariables(),g.unbindListeners(),g.removeNonVideoElements(),this.setupEmbed(),this._opts.autoPlay&&this.canAutoPlay()&&this.hideControls(),this.switchToAsset(this._currentAsset,!0)
},c.prototype.trigger=function(){var h,g;
g=arguments[0],h=2<=arguments.length?__slice.call(arguments,1):[];
if(!/timechange|secondchange/.test(g)||!this._suppressTimechange){return c.__super__.trigger.apply(this,[g].concat(__slice.call(h)))
}},c.prototype.switchToAsset=function(g,i){var h=this;
i==null&&(i=!1),this.info("switchToAsset",g,i);
if(!i&&g.type===this._currentAsset.type){return
}return this.commandQueueOpen.synchronize(function(a){return d.detect.browser.mozilla?(h.switchToAssetWithoutLoad(g,i),h.elem().load(),a()):(h._suppressTimechange=!0,d.elem.rebind(h.elem(),"loadeddata",function(){return h._suppressTimechange=!1,a(),d.elem.unbind
}),h.switchToAssetWithoutLoad(g,i),h.elem().load())
})
},c.prototype.switchToAssetWithoutLoad=function(h,g){g==null&&(g=!1),this.info("switchToAssetWithoutLoad",h,g);
if(!g&&h.type===this._currentAsset.type){return
}return this._currentAsset=h,this.data.asset=h,this.elem().src=this.source().src=this.properAssetUrl(h.url),this.trigger("switched-to-asset-without-load",h.type)
},c.prototype.totalBuffered=function(){var g,h;
return g=(h=this.elem())!=null?h.buffered:void 0,d.Metrics.sumTimeRanges(g)
},c.prototype.totalPlayed=function(){var g,h;
return g=(h=this.elem())!=null?h.played:void 0,d.Metrics.sumTimeRanges(g)
},c
}(d.Video)
})(Wistia),function(d){var c;
if((c=d.Romulus)!=null?c.Control:void 0){return
}return d.Romulus||(d.Romulus={}),d.Romulus.Control=function(){function a(e){var f=this;
this.video=e,this.grid=this.video.grid,this.uuid=d.seqId("wistia_"+this.name+"_"),this.elem=document.createElement("div"),this.elem.id=this.uuid,this.elem.className="wistia_romulus_control wistia_romulus_hidden",d.elem.append(this.video.romulusElem,this.elem),this.elem.style.cursor="pointer",d.elem.bind(this.elem,"mouseover",function(b){return typeof f.mouseover=="function"?f.mouseover(b):void 0
}),d.elem.bind(this.elem,"mouseout",function(b){return typeof f.mouseout=="function"?f.mouseout(b):void 0
}),typeof this.setupBindings=="function"&&this.setupBindings()
}return a.prototype.cleanup=function(){},a.prototype.show=function(){if(this.shouldShow()){return this.elem.style.height=""+this.height()+"px",this.elem.style.width=""+this.width()+"px",d.elem.removeClass(this.elem,"wistia_romulus_hidden"),d.elem.addClass(this.elem,"wistia_romulus_visible")
}},a.prototype.shouldShow=function(){return this.on()&&!this.isAutoPlayBeforePlay()&&!this.video.isRemoved()&&(this._forceShow||this.isControlsVisibleOnLoad()||this.isMouseoverAfterPlay()||this.isPreviewingControls())
},a.prototype.isControlsVisibleOnLoad=function(){return this.video.state()==="beforeplay"&&this.video._opts.controlsVisibleOnLoad&&(this.video._mouseover||!this.video._replacing||!this.video._opts.autoPlay)
},a.prototype.isMouseoverAfterPlay=function(){return this.video._mouseover&&this.video.state()!=="beforeplay"
},a.prototype.isPreviewingControls=function(){return this.video._previewControls&&this.video.state()!=="beforeplay"
},a.prototype.hide=function(){return d.elem.removeClass(this.elem,"wistia_romulus_visible"),d.elem.addClass(this.elem,"wistia_romulus_hidden"),this.elem.style.height="0px",this.elem.style.width="0px"
},a.prototype.turnOn=function(){var f,e=this;
f=this._on,this._on=!0,this.dontAnimate(this.elem,function(){return e.show()
});
if(this._on!==f){return this.video.trigger("control-on",this.name)
}},a.prototype.turnOff=function(){var e,f=this;
e=this._on,this._on=!1,d.elem.addClass(this.elem,"wistia_dont_animate"),this.hide(),d.util.requestAnimationFrame(function(){return d.elem.removeClass(f.elem,"wistia_dont_animate")
});
if(this._on!==e){return this.video.trigger("control-off",this.name)
}},a.prototype.on=function(){return this._on
},a.prototype.off=function(){return !this._on
},a.prototype.initialize=function(){return this
},a.prototype.primaryColor=function(){return new d.Color(this.video.playerColor())
},a.prototype.secondaryColor=function(){return this.primaryColor().lighten(100)
},a.prototype.tertiaryColor=function(){return this.primaryColor().lighten(40)
},a.prototype.preventAnimation=function(g){var k,j,i,h;
g instanceof Array||(g=[g]),h=[];
for(j=0,i=g.length;
j<i;
j++){k=g[j],h.push(d.elem.addClass(k,"wistia_dont_animate"))
}return h
},a.prototype.allowAnimation=function(g){var k,j,i,h;
g instanceof Array||(g=[g]),h=[];
for(j=0,i=g.length;
j<i;
j++){k=g[j],h.push(d.elem.removeClass(k,"wistia_dont_animate"))
}return h
},a.prototype.dontAnimate=function(e,g){var f=this;
return this.preventAnimation(e),g(),d.util.requestAnimationFrame(function(){return f.allowAnimation(e)
})
},a.prototype.updateColor=function(){},a.prototype.remove=function(){return d.elem.remove(this.elem)
},a.prototype.isAutoPlayBeforePlay=function(){return this.video.state()==="beforeplay"&&this.video._opts.autoPlay
},a
}()
}(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.SmallPlayButton){return
}return b.Romulus.SmallPlayButton=function(a){function d(c){this.video=c,this.name="smallPlayButton",d.__super__.constructor.call(this,this.video),this.elem.style.position="absolute",this.elem.style.bottom="0px",this.elem.style.background=""+this.primaryColor().alpha(0.8).toRgba()+" url("+this.playBase64()+") no-repeat 0 0",this.elem.style.backgroundSize="50px 32px",this.elem.style.width="0px",this.elem.style.height="0px",this.elem.setAttribute("alt","Click to play")
}return __extends(d,a),d.prototype.initialize=function(){var c=this;
return !this.video._opts.chromeless&&b.util.notSetOrTrue(this.video._opts.smallPlayButton)&&this.video.still.loaded(function(){return c.turnOn()
}),this
},d.prototype.setupBindings=function(){var c=this;
return this.video.bind("play",function(){return b.elem.removeClass(c.elem,"paused"),b.elem.addClass(c.elem,"playing"),c.elem.setAttribute("alt","Click to pause"),c.elem.style.backgroundImage="url("+c.pauseBase64()+")",c.elem.style.backgroundPosition="20px 7px",c.elem.style.backgroundSize="11px 16px"
}),this.video.bind("pause",function(){return b.elem.removeClass(c.elem,"playing"),b.elem.addClass(c.elem,"paused"),c.elem.setAttribute("alt","Click to play"),c.elem.style.backgroundImage="url("+c.playBase64()+")",c.elem.style.backgroundPosition="0 0",c.elem.style.backgroundSize="50px 32px"
}),b.elem.bind(this.video.romulusElem,"click",function(e){if(e.which!==1){return
}if(c.video.state()==="beforeplay"){return c.video.play()
}if(b.elem.isInside(e.target,c.elem)){return c.video.togglePlay()
}})
},d.prototype.mouseover=function(){return this.elem.style.backgroundColor=this.tertiaryColor().alpha(0.8).toRgba()
},d.prototype.mouseout=function(){return this.elem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba()
},d.prototype.width=function(){return 50
},d.prototype.height=function(){return 32
},d.prototype.playBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABMCAYAAACmj3NpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARtJREFUeNrs2kFRAzEYgNEuCioBCeAACZWABCQsCpCABCRUAjioBHCwbA65MFx7+freTK4c/g8yG5LDAQAAAAAAAAAAAP7Ytm01hXbg4byve9PoBh6+93UykW7g6X1fR5PpBh4+9/VgOt3A04sJtQMPH7bsduD5AfZkWt3A05uJtQPPDzBn5nDguWU/m143sDPzjQQeLs7M7cDOzDcSeF5aJLbsO78a/xpn5YtLi+5fcObMvJQCX/HHfy3L8miLbvrZ16sxNLdoL0TCgVdTbQb2D49wYHfG0cAuHcKBvdsKB3bxHw3s6U448NmHVDewq8BoYGfbcGDPcaKBnW3DgT2JDQdeTaMZ2Nk2HtiHFAAAAAAAAAAAAFf1K8AAF3b4jLx17LUAAAAASUVORK5CYII="
},d.prototype.pauseBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAYAAAAWl4iLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNrszLENADAIA0Fg/50TBkBJRXdfWvLl6eJRdtP++1UsBQaDwWAwGAwG78FXgAEAVEEIPN51OakAAAAASUVORK5CYII="
},d.prototype.updateColor=function(){return this.elem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba()
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.VolumeControl){return
}return b.Romulus.VolumeControl=function(a){function d(c){this.video=c,this.name="volumeControl",d.__super__.constructor.call(this,this.video),this.elem.innerHTML="&nbsp;",this.elem.style.position="absolute",this.elem.style.bottom="0px",this.elem.style.height="0px",this.elem.style.overflow="hidden",this.elem.style.width="0px",this.elem.setAttribute("alt","Volume - click and drag to change"),this.levelElem=document.createElement("div"),this.levelElem.style.position="absolute",this.levelElem.style.left="0px",this.levelElem.style.top="0px",this.levelElem.style.height=""+this.height()+"px",this.levelElem.style.width=""+this.width()+"px",this.levelElem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba(),b.elem.append(this.elem,this.levelElem),this.inverseLevelElem=document.createElement("div"),this.inverseLevelElem.style.position="absolute",this.inverseLevelElem.style.left=""+this.width()+"px",this.inverseLevelElem.style.top="0px",this.inverseLevelElem.style.height=""+this.height()+"px",this.inverseLevelElem.style.width="0px",this.inverseLevelElem.style.backgroundColor=this.primaryColor().alpha(0.5).toRgba(),b.elem.append(this.elem,this.inverseLevelElem),this.iconElem=document.createElement("div"),this.iconElem.style.position="absolute",this.iconElem.style.backgroundImage="url("+this.iconBase64()+")",this.iconElem.style.backgroundSize="21px 18px",this.iconElem.style.left="15px",this.iconElem.style.top="7px",this.iconElem.style.height="18px",this.iconElem.style.width="21px",b.elem.append(this.elem,this.iconElem)
}return __extends(d,a),d.prototype.initialize=function(){var c=this;
return !this.video._opts.chromeless&&b.util.notSetOrTrue(this.video._opts.volumeControl)&&this.video.still.loaded(function(){return c.turnOn()
}),this
},d.prototype.cleanup=function(){return b.elem.unbind(document.body,"mousemove",this._onDragLevel),b.elem.unbind(document.body,"mouseup",this._onReleaseLevel),b.elem.unbind(document,"mouseout",this._onMouseLeavesWindow)
},d.prototype.setupBindings=function(){var c=this;
return b.elem.bind(this.elem,"mousedown",function(e){var f;
if(e.which!==1){return
}return e.preventDefault(),f=(e.pageX-c.leftMostX())/c.width(),c.updateLevel(f),c.video.volume(f),c.startDrag()
}),b.elem.bind(this.elem,"click",function(e){return e.stopPropagation()
}),this.video.bind("volumechange",function(){if(!c.video.elem().seeking){return c.updateLevel(c.video.volume())
}})
},d.prototype.turnOn=function(){var c;
return d.__super__.turnOn.apply(this,arguments),this.video._opts.volume!=null?this.updateLevel(this.video._opts.volume):(c=this.savedVolume(),this.updateLevel(c),this.video.volume(c))
},d.prototype.leftMostX=function(){return this.video.inFullscreen()?this.video.leftControlsWidth()+this.video.playbarControl.width()+5:b.elem.offset(this.elem).left
},d.prototype.startDrag=function(){var c=this;
return this._onDragLevel==null&&(this._onDragLevel=function(e){var f;
return f=Math.min(1,Math.max(0,(e.pageX-c.leftMostX())/c.width())),c.updateLevel(f),c.video.volume(f)
}),b.elem.bind(document.body,"mousemove",this._onDragLevel),this._onReleaseLevel==null&&(this._onReleaseLevel=function(e){return c.saveVolume(),c.stopDrag()
}),b.elem.bind(document.body,"mouseup",this._onReleaseLevel)
},d.prototype.stopDrag=function(){this._onDragLevel&&b.elem.unbind(document.body,"mousemove",this._onDragLevel),this._onReleaseLevel&&b.elem.unbind(document.body,"mouseup",this._onReleaseLevel);
if(this._onMouseLeavesWindow){return b.elem.unbind(document,"mouseout",this._onMouseLeavesWindow)
}},d.prototype.updateLevel=function(e){var c;
return c=Math.min(this.width(),Math.max(0,Math.round(this.width()*e))),this.levelElem.style.width=""+c+"px",this.inverseLevelElem.style.left=""+c+"px",this.inverseLevelElem.style.width=""+(this.width()-c)+"px",this.elem.setAttribute("alt","Volume ("+Math.round(e*100)+"%) - click and drag horizontally to change")
},d.prototype.saveVolume=function(){return b.localStorage("romulus.volume",this.video.volume())
},d.prototype.savedVolume=function(){var c;
return this.on()?(c=b.localStorage("romulus.volume"))!=null?c:1:1
},d.prototype.mouseover=function(){return this.levelElem.style.backgroundColor=this.tertiaryColor().alpha(0.8).toRgba()
},d.prototype.mouseout=function(){return this.levelElem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba()
},d.prototype.width=function(){return 50
},d.prototype.height=function(){return 32
},d.prototype.iconBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfZJREFUeNrsWO1thDAMhVMHYIOyQRmBbsAIbHCMcJ0AdQLUCU6dADpBrhNwN8HdBmkiBdVyHYePAPlRSwiEA3l5tmM7h2hHkVLW6mqikEUBLOWvOMEedsR6UdfDPGvQZcisZuq6A2azUEzdEO8LAFSsNXlhAkKMGGf1R/OPQSqfAFMNDvxcOsYnaPyJ0A8uoO+JLxahXzmBgsXB73Kkr7yxqpmQFiHGNnpR6F3O+SNYSD8XoDZNKxlB4wUwY8r4Y8kQkc/ZQnrpEMaMLeOPPeEeg9Rzs8dooObblvHH2rZ3Amv0Y03dyAliCR5yS+KYQ+ZPocKLWBZ8ZhYiqKBCAVdsles/IQCk68w9I2qACOvWBtqBZwz0m1pEHMcPUKw8bwJUTXqlJjVydVRWWtIty7w/k86RPevRf6BzJSeiebIrrAoUZZ0bUr+AoOuQLtma0cKyVXFMw/3za3jxpFYTW9iQC9nUrByHrUhNc4EpFIDpGCs8xjD6tpDNCpjwHemO4PnDwjRlBbbEE1NzPaq6ethacGUeqg/uXit7C9B6ZIlXElXbIOclPbiYUOYJAoirFTlRlZPXvslDc5eATqL3tj/6bJcJAk6hHkBktuAL6UgHs11EoQkBsgkRJD4WEpzJ9yzzMpBGdXp9NW1IkOejtclEzuD5EWAA23jc4a3H7VsAAAAASUVORK5CYII="
},d.prototype.updateColor=function(){return this.levelElem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba(),this.inverseLevelElem.style.backgroundColor=this.primaryColor().alpha(0.5).toRgba()
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.FullscreenButton){return
}return b.Romulus.FullscreenButton=function(a){function d(c){this.video=c,this.name="fullscreenButton",d.__super__.constructor.call(this,this.video),this.elem.innerHTML="&nbsp;",this.elem.style.position="absolute",this.elem.style.bottom="0px",this.elem.style.width="0px",this.elem.style.height="0px",this.elem.style.background=""+this.primaryColor().alpha(0.8).toRgba()+" url("+this.iconBase64()+") no-repeat 12px 7px",this.elem.style.backgroundSize="25px 18px",this.elem.style.mozUserSelect="none",this.elem.style.msUserSelect="none",this.elem.style.webkitUserSelect="none",this.elem.style.webkitTouchCallout="none",this.elem.setAttribute("alt","Fullscreen - click to toggle")
}return __extends(d,a),d.prototype.initialize=function(){var c=this;
return !this.video._opts.chromeless&&b.util.notSetOrTrue(this.video._opts.fullscreenButton)&&this.video.still.loaded(function(){return c.turnOn()
}),this
},d.prototype.setupBindings=function(){var c=this;
return b.elem.bind(this.elem,"click",function(e){if(e.which!==1){return
}return e.stopPropagation(),c.video.inFullscreen()?c.video.cancelFullscreen():c.video.requestFullscreen()
})
},d.prototype.mouseover=function(){return this.elem.style.backgroundColor=this.tertiaryColor().alpha(0.8).toRgba()
},d.prototype.mouseout=function(){return this.elem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba()
},d.prototype.width=function(){return 50
},d.prototype.height=function(){return 32
},d.prototype.iconBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK9JREFUeNrsmW0KgCAMhjW6l96supmdzCYkjDBRCqbjfUHwh+Ae9oGbJrZpN0JKd7cYuBglWtk+0DpfzgVBG2t3O1o+u048fP4IOzWhpTJHnm6LIxpsSao9oiq0jgFK7OfSbJEjyBGAAAQgAAEIQAACEIAARKqxYmOgQE/9qZorst2be66VOsSt1HFNIp/tR44MlyO9vTE8ApD+0HKVibxYaeYltiDHD+LHaiRdAgwAGD3VmeLXH3kAAAAASUVORK5CYII="
},d.prototype.updateColor=function(){return this.elem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba()
},d.prototype.turnOn=function(){if(b._detect.fullscreenEnabled()){return d.__super__.turnOn.apply(this,arguments)
}},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.Playbar){return
}return b.Romulus.PlaybarControl=function(a){function d(c){this.video=c,this.name="playbarControl",d.__super__.constructor.call(this,this.video),this.elem.style.position="absolute",this.elem.style.bottom="0px",this.elem.style.height="0px",this.elem.style.overflow="hidden",this.elem.style.width="0px",this.elem.style.mozUserSelect="none",this.elem.style.msUserSelect="none",this.elem.style.webkitUserSelect="none",this.elem.style.webkitTouchCallout="none",this.elem.setAttribute("alt","Playbar - click to seek"),b.elem.addClass(this.elem,"wistia_playbar"),this.backgroundElem=b.elem.fromObject({id:b.seqId("wistia_playbar_background_"),style:{background:this.primaryColor().alpha(0.5).toRgba(),position:"absolute",left:"4px",top:"4px",width:""+this.width+"px",height:""+(this.height()-8)+"px",pointerEvents:"none"}}),b.elem.append(this.elem,this.backgroundElem),this.bufferedElem=b.elem.fromObject({id:b.seqId("buffered_"),"class":"wistia_buffered",style:{background:this.secondaryColor().alpha(0.8).toRgba(),position:"absolute",left:"4px",top:"4px",width:"0px",height:""+(this.height()-8)+"px"}}),b.elem.append(this.elem,this.bufferedElem),this.borderElem=b.elem.fromObject({style:{position:"absolute",left:"0px",top:"0px",border:"4px solid "+this.primaryColor().alpha(0.8).toRgba(),pointerEvents:"none"}}),b.elem.append(this.elem,this.borderElem),this.watchedElem=b.elem.fromObject({id:b.seqId("watched_"),"class":"wistia_played",style:{backgroundImage:"url("+this.diagonalLinesBase64()+")",position:"absolute",left:"0px",top:"0px",width:"0px",height:""+this.height()+"px"}}),b.elem.append(this.elem,this.watchedElem),this.timeElem=b.elem.fromObject({id:b.seqId("time_"),"class":"wistia_time",innerHTML:b.util.niceDuration(this.video.duration()),style:{bottom:"7px",color:"rgba(255, 255, 255, .7)",cursor:"pointer",display:"inline-block",fontFamily:"Arial, Sans-Serif",fontWeight:"bold",fontSize:"15px",lineHeight:"1.1em",position:"absolute",textShadow:"0 0 9px #7b796a",whiteSpace:"nowrap",width:"0px"}}),b.elem.append(this.watchedElem,this.timeElem),b.elem.bind(this.timeElem,"mousedown",function(e){return e.preventDefault()
}),this.scrubBar=b.elem.fromObject({id:b.seqId("scrub_bar_"),"class":"wistia_scrub_bar",innerHTML:"<div class='wistia_scrub_bar_top'>&nbsp;</div>\n<div class='wistia_scrub_bar_middle'>&nbsp;</div>\n<div class='wistia_scrub_bar_bottom'>&nbsp;</div>",style:{position:"absolute",left:"0px",top:"0px",width:"4px",height:""+this.height()+"px"}}),b.elem.append(this.elem,this.scrubBar),this.updateScrubBar()
}return __extends(d,a),d.prototype.initialize=function(){var c=this;
return !this.video._opts.chromeless&&b.util.notSetOrTrue(this.video._opts.playbar)&&this.video.still.loaded(function(){return c.turnOn()
}),this
},d.prototype.cleanup=function(){return b.elem.unbind(document.body,"mousemove",this._onDragScrubBar),b.elem.unbind(document.body,"mouseup",this._onReleaseScrubBar),b.elem.unbind(document.body,"mousemove",this._onMouseLeavesRomulus),b.elem.unbind(document,"mouseout",this._onMouseLeavesWindow)
},d.prototype.setupBindings=function(){var c=this;
return b.elem.bind(this.elem,"mousedown",function(f){var e;
if(f.which!==1){return
}f.preventDefault();
if(c.video.state()==="beforeplay"){return c.video.play()
}e=(f.pageX-2-c.leftMostX())/c.width(),c._stateOnDrag=c.video.state(),b.elem.addClass(c.elem,"wistia_dragging"),c.updateScrubBar(e),c.updateTime(e),c.startDrag();
if(c.video.state()==="beforeplay"){return c.video.play()
}c.video.ready(function(){return c.video.videoElem.pause()
});
if(c._stateOnDrag==="playing"){return b.elem.bind(document,"mouseup",function(){return c.video.ready(function(){if(c.video.state()!=="ended"&&!c.video.publicApi._suspended){return c.video.videoElem.play()
}}),c.instaUpdateScrubBar(c.video.time()/c.video.duration()),b.elem.unbind
})
}}),this.video.bind("timechange",function(e){return !c.video._seekingBeforePlay&&!c._scrubbing&&c.updateScrubBar(e/c.video.duration()),c.updateBuffered()
}),this.video.bind("seek",function(e){return c.instaUpdateScrubBar(e/c.video.duration())
}),this.video.bind("startplay",function(){return c.instaUpdateScrubBar(c.video.time()/c.video.duration())
}),this.video.bind("progress",function(){return c.updateBuffered()
}),this.video.bind("pause",function(){return c.instaUpdateScrubBar(),c.updateBuffered()
}),this.video.bind("end",function(){return b.timeout(""+c.video.uuid+".after_end",function(){return c.instaUpdateScrubBar(),c.updateBuffered()
},50)
}),this.video.bind("switched-to-asset",function(){return c.instaUpdateScrubBar()
}),this.video.bind("widthchange",function(){return c.instaUpdateScrubBar(),c.updateBuffered()
})
},d.prototype.instaUpdateScrubBar=function(){var c=this;
return this.dontAnimate([this.scrubBar,this.watchedElem],function(){return c.updateScrubBar(c.video.time()/c.video.duration())
})
},d.prototype.startDrag=function(){var c=this;
return this._onDragScrubBar==null&&(this._onDragScrubBar=function(f){var e;
return b.elem.addClass(c.elem,"wistia_dragging"),c.video.state()==="playing"&&c.video.pause(),e=Math.min(1,Math.max(0,(f.pageX-2-c.leftMostX())/c.width())),c.instaUpdateScrubBar(e),c.updateTime(e)
}),b.elem.bind(document.body,"mousemove",this._onDragScrubBar),this._onReleaseScrubBar==null&&(this._onReleaseScrubBar=function(e){return c.stopDrag()
}),b.elem.bind(document.body,"mouseup",this._onReleaseScrubBar),this.preventAnimation([this.scrubBar,this.watchedElem]),this._scrubbing=!0
},d.prototype.leftMostX=function(){return this.video.inFullscreen()?this.video.leftControlsWidth():b.elem.offset(this.elem).left
},d.prototype.stopDrag=function(){return b.elem.removeClass(this.elem,"wistia_dragging"),this._onDragScrubBar&&b.elem.unbind(document.body,"mousemove",this._onDragScrubBar),this._onReleaseScrubBar&&b.elem.unbind(document.body,"mouseup",this._onReleaseScrubBar),this._onMouseLeavesRomulus&&b.elem.unbind(document.body,"mousemove",this._onMouseLeavesRomulus),this._onMouseLeavesWindow&&b.elem.unbind(document,"mouseout",this._onMouseLeavesWindow),this._stateOnDrag==="ended"&&this.video.play(),this._scrubbing=!1,this.updateScrubBar(this.video.time()/this.video.duration()),this.updateBuffered(),this.allowAnimation([this.scrubBar,this.watchedElem])
},d.prototype.updateScrubBar=function(e){var g,f;
return e==null&&(e=0),this.video.state()==="beforeplay"?(this.scrubBar.style.left="0px",this.watchedElem.style.width="0px",this.watchedElem.style.overflow="",this.timeElem.innerHTML=b.util.niceDuration(this.video.duration()),this.timeElem.style.left="auto",this.timeElem.style.right=""+(-b.elem.width(this.timeElem)-8)+"px",this.timeElem.style.width="0px"):(g=this.width()-4,e>0.99&&(e=1),f=Math.max(0,Math.min(g,Math.round(this.width()*e)-1)),this.scrubBar.style.left=""+f+"px",this.watchedElem.style.width=""+f+"px",this.watchedElem.style.overflow="hidden",this.timeElem.style.left="auto",this.timeElem.style.width="auto",this.timeElem.style.right="4px",this.timeElem.innerHTML=b.util.niceDuration(this.video.time()))
},d.prototype.updateTime=function(e){var c;
return c=Math.min(this.video.duration(),Math.max(0,e*this.video.duration())),this.video.time(c)
},d.prototype.updateBuffered=function(){var h,g,l,k,j,i;
if(this._scrubbing){return
}return k=this.sequentialBufferedRange(),this.video.state()==="beforeplay"?(this.bufferedElem.style.left="0px",this.bufferedElem.style.width="0px"):k!=null?(i=Math.max(0,k[0]/this.video.duration()),l=Math.min(1,k[1]/this.video.duration()),i<0.02&&(i=0),l>0.99&&(l=1),j=4+Math.round(this.scrubWidth()*i),g=Math.round(this.scrubWidth()*l),h=g-j,this.bufferedElem.style.left=""+j+"px",this.bufferedElem.style.width=""+Math.max(0,h)+"px"):(this.bufferedElem.style.left="0px",this.bufferedElem.style.width="0px")
},d.prototype.sequentialBufferedRange=function(){var y,x,w,v,u,t,s,r,q,p,n,m;
t=null;
for(x=r=0,p=this.video.videoElem.buffered.length;
0<=p?r<p:r>p;
x=0<=p?++r:--r){u=this.video.videoElem.buffered.start(x)-0.5,y=this.video.videoElem.buffered.end(x)+0.5;
if(u<=(n=this.video.time())&&n<y){t=x;
break
}}if(t!=null){v=t;
for(x=q=t,m=this.video.videoElem.buffered.length;
t<=m?q<m:q>m;
x=t<=m?++q:--q){s=this.video.videoElem.buffered.start(x)-0.5,w=this.video.videoElem.buffered.end(v)+0.5;
if(s<=w){v=x
}else{break
}}return u=this.video.videoElem.buffered.start(t),y=this.video.videoElem.buffered.end(v),[u,y]
}return null
},d.prototype.width=function(){return this.video.videoWidth()-this.video.leftControlsWidth()-this.video.rightControlsWidth()
},d.prototype.scrubWidth=function(){return this.width()-4
},d.prototype.height=function(){return 32
},d.prototype.reorient=function(){return this.elem.style.left=""+this.video.leftControlsWidth()+"px",this.elem.style.width=""+this.width()+"px",this.borderElem.style.width=""+(this.width()-8)+"px",this.borderElem.style.height=""+(this.height()-8)+"px",this.backgroundElem.style.width=""+(this.width()-8)+"px",this.backgroundElem.style.height=""+(this.height()-8)+"px"
},d.prototype.diagonalLinesBase64=function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQFJREFUeNrsl6EOwkAQRC+T1CBAYDAIEFRgiiiW/6cCDAJTBKYGQQWmouyGbbLZD5gzNBnxcmbSd+3dpnEcC8lJUkoSm5FS2ksGyT39HiprgZWkscU1m2GgjebWjspa4CUpJAfJg82wV7ELnmg87QF1c7VFKmuByuAjmbFZCzwlnbWr2awFbu77TGxG8NKwGTm8e0YO754RvJRs1gIXg6Vkw2Yt0NuvsbZmVIbz0pkbKsO8FMETjeG8DMEThZHDu2c4L5Wd1VSeNuFWsnBHJo3hrkrncHWisBY4Bi9U1gJvSeu8UBk5vHtGDu+e4a7I3hON/WjWhtGJwv/RLPto9hVgAAkkA1W/Un5YAAAAAElFTkSuQmCC"
},d.prototype.updateColor=function(){return this.backgroundElem.style.backgroundColor=this.primaryColor().alpha(0.5).toRgba(),this.bufferedElem.style.backgroundColor=this.secondaryColor().alpha(0.8).toRgba(),this.borderElem.style.borderColor=this.primaryColor().alpha(0.8).toRgba()
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.BigPlayButton){return
}return b.Romulus.BigPlayButton=function(a){function d(c){this.video=c,this.name="bigPlayButton",d.__super__.constructor.call(this,this.video),b.elem.remove(this.elem),this.bpb=new b.BigPlayButton(this.video.romulusElem,{uuid:this.video.uuid,color:this.video.playerColor(),heightCorrection:this.video._opts.controlsVisibleOnLoad?-22:0}),this.bpb.hide(),this.elem=this.bpb.elem,this.bpb.fit()
}return __extends(d,a),d.prototype.initialize=function(){var c=this;
return b.util.notSetOrTrue(this.video._opts.playButton)&&this.video.still.loaded(function(){return c.turnOn()
}),this
},d.prototype.setupBindings=function(){var c=this;
return this.video.state()==="playing"&&b.timeout(""+this.video.uuid+".hide_big_play_button",function(){return c.hide()
}),this.video.bind("play",function(){return c.hide()
}),this.video.bind("startplay",function(){return c.hide()
}),b.elem.bind(this.video.romulusElem,"click",function(e){if(e.which!==1){return
}if(b.elem.isInside(e.target,c.elem)){return c.video.showControls(),c.video.play()
}})
},d.prototype.turnOn=function(){return this._on=!0,this.show(),this.video.trigger("control-on",this.name)
},d.prototype.show=function(){if(this.shouldShow()){return this.bpb.show()
}},d.prototype.shouldShow=function(){return this.on()&&this.video.state()==="beforeplay"&&(!this.video._opts.autoPlay||!this.video._replacing)
},d.prototype.hide=function(){return this.bpb.hide()
},d.prototype.reorient=function(){return this.bpb.fit()
},d.prototype.updateColor=function(){return this.bpb.color(this.primaryColor())
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.Still){return
}return b.Romulus.Still=function(a){function d(c){var e=this;
this.video=c,this.name="still",this.loaded=new b.StopGo,d.__super__.constructor.call(this,this.video),this.thumbnail=new b.Thumbnail(this.video.romulusElem,{tabbable:!1,onActivate:this.activate,stillSnap:this.video._opts.stillSnap,images:this.video.thumbnailAssets()}),b.elem.style(this.thumbnail.elem,{left:0,position:"absolute",top:0}),this.elem=this.thumbnail.elem,this.loaded=new b.StopGo,this.thumbnail.loaded(function(){return e.loaded(!0)
}),typeof this.setupBindings=="function"&&this.setupBindings()
}return __extends(d,a),d.prototype.initialize=function(){return this.fitStill(),this
},d.prototype.setupBindings=function(){var c=this;
return this.video.state()==="playing"&&b.timeout(""+this.video.uuid+".hide_still",function(){return c.hide()
}),this.video.bind("play",function(){return c.hide()
}),this.video.bind("startplay",function(){return b.timeout(""+c.video.uuid+".delayed_hide_still",function(){if(c.video.state()!=="beforeplay"){return c.hide()
}},1000)
}),b.elem.bind(this.video.romulusElem,"click",function(e){if(e.which!==1){return
}if(b.elem.isInside(e.target,c.elem)){return c.video.showControls(),c.video.play()
}}),this._debounceFitStill=function(e){return e==null&&(e=250),b.timeout(""+c.video.uuid+".fitStill",function(){return c.fitStill()
},e)
},this.video.bind("enter-fullscreen",function(){return c._debounceFitStill()
}),this.video.bind("cancel-fullscreen",function(){return c._debounceFitStill()
}),this.video.bind("heightchange",function(){return c.fitStill()
}),this.video.bind("widthchange",function(){return c.fitStill()
})
},d.prototype.fitStill=function(){return this.thumbnail.fit()
},d.prototype.shouldShow=function(){return this.video.state()==="beforeplay"&&(!this.video._opts.autoPlay||!this.video._replacing)
},d.prototype.show=function(){if(this.shouldShow()){return this.thumbnail.show(),this.fitStill()
}},d.prototype.hide=function(){return this.thumbnail.hide()
},d.prototype.mouseover=function(){},d.prototype.mouseout=function(){},d.prototype.remove=function(){return this.thumbnail.destroy(),this.elem=null
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.Branding){return
}return b.Romulus.Branding=function(a){function d(c){var e=this;
this.video=c,this.name="branding",d.__super__.constructor.call(this,this.video),this.elem.style.overflow="hidden",this.elem.style.position="absolute",this.elem.style.left="0px",this.elem.style.top="0px",this.elem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba(),this.elem.style.height="0px",this.elem.style.width="0px",this.elem.className="wistia_romulus_control wistia_romulus_hidden",this.linkElem=b.elem.fromObject({tagName:"a",href:"http://wistia.com",tabindex:"-1",style:{display:"block",fontSize:"12px",fontFamily:"Gill Sans, Sans-Serif",height:""+(this.height()-4)+"px",letterSpacing:"1px",lineHeight:""+(this.height()-4)+"px",paddingLeft:"5px",paddingTop:"2px",paddingBottom:"2px",textDecoration:"none",width:""+(this.width()-5)+"px"}}),this.video.hasData(function(){return e.linkElem.setAttribute("href","http://wistia.com/about-wistia?player="+e.video._mediaData.accountKey.match(/\d+/)[0])
}),this.poweredByElem=b.elem.fromObject({tagName:"span",style:{color:"rgba(255, 255, 255, .65)"},innerHTML:"POWERED BY"}),this.wistiaElem=b.elem.fromObject({tagName:"span",style:{color:"#fff"},innerHTML:"WISTIA"}),b.elem.append(this.linkElem,this.poweredByElem),b.elem.append(this.linkElem,document.createTextNode(" ")),b.elem.append(this.linkElem,this.wistiaElem),b.elem.append(this.elem,this.linkElem)
}return __extends(d,a),d.prototype.initialize=function(){return(this.video._opts.branding||this.video._mediaData.branding)&&this.turnOn(),this
},d.prototype.setupBindings=function(){var c=this;
return this.video.bind("widthchange",function(){return c.elem.style.width=""+c.width()+"px",c.linkElem.style.width=""+(c.width()-5)+"px"
}),b.elem.bind(this.elem,"click",function(e){return e.stopPropagation()
}),this.video.bind("play",function(){return c.showBeforePlay()
})
},d.prototype.height=function(){return 18
},d.prototype.width=function(){return this.video.videoWidth()
},d.prototype.show=function(){if(this.video.state()!=="beforeplay"){return d.__super__.show.apply(this,arguments)
}},d.prototype.showBeforePlay=function(){if(this.on()){return this.elem.style.height=""+this.height()+"px",this.elem.style.width=""+this.width()+"px",b.elem.removeClass(this.elem,"wistia_romulus_hidden"),b.elem.addClass(this.elem,"wistia_romulus_visible")
}},d.prototype.mouseover=function(){return this.linkElem.style.textShadow="0 0 8px rgba(255, 255, 255, .8)"
},d.prototype.mouseout=function(){return this.linkElem.style.textShadow="none"
},d.prototype.updateColor=function(){return this.elem.style.backgroundColor=this.primaryColor().alpha(0.8).toRgba()
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){if(b.Romulus.Loading){return
}return b.Romulus.Loading=function(a){function d(c){this.video=c,this.name="loading",d.__super__.constructor.call(this,this.video),this.elem.innerHTML="Loading...",b.elem.removeClass(this.elem,"wistia_romulus_hidden"),b.elem.removeClass(this.elem,"wistia_romulus_visible"),b.elem.style(this.elem,{position:"absolute",display:"none",left:"0px",top:"0px",backgroundColor:this.primaryColor().toRgba(),color:"rgba(255, 255, 255, .8)",fontFamily:"Arial, Sans-Serif",fontStyle:"italic",lineHeight:"1.1em",padding:"2px 5px",display:"none"})
}return __extends(d,a),d.prototype.initialize=function(){return this
},d.prototype.showSoon=function(){var c=this;
if(this._showingSoon){return
}return this._showingSoon=!0,b.timeout(""+this.video.uuid+".show_loading",function(){return c.show()
},2000),this.video.bind("timechange",function(e){return c.cancelShow(),c.video.unbind
}),this._hideIfNotPlaying==null&&(this._hideIfNotPlaying=function(){return c.video.state()==="paused"||c.video.state()==="ended"?c.cancelShow():b.timeout(""+c.video.uuid+".hide_if_paused",c._hideIfNotPlaying,500)
}),this._hideIfNotPlaying()
},d.prototype.cancelShow=function(){return this._showingSoon=!1,b.clearTimeouts(""+this.video.uuid+".show_loading"),b.clearTimeouts(""+this.video.uuid+".hide_if_paused"),this.hide()
},d.prototype.setupBindings=function(){var c=this;
return this.video.bind("waiting",function(){return c.showSoon()
}),this.video.bind("play",function(){return c.showSoon()
}),this.video.bind("seek",function(){if(c.video.state()==="playing"){return c.showSoon()
}}),this.video.bind("show-controls",function(){return c.video.branding.on()?c.elem.style.top="18px":c.elem.style.top="0px"
}),this.video.bind("hide-controls",function(){return c.elem.style.top="0px"
})
},d.prototype.show=function(){return this.elem.style.display="block"
},d.prototype.hide=function(){return this.elem.style.display="none"
},d.prototype.updateColor=function(){return this.elem.style.backgroundColor=this.primaryColor().toRgba()
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
},__slice=[].slice;
(function(b){if(b.Romulus.ContextMenu){return
}return b.Romulus.ContextMenu=function(a){function d(c){this.video=c,this.name="context_menu",this.showed=new Wistia.StopGo,d.__super__.constructor.call(this,this.video),b.elem.style(this.elem,{backgroundColor:"#fff",boxShadow:"0px 3px 10px rgba(0,0,0,.2)",height:"",left:"0px",lineHeight:"1.5em",position:"absolute",textShadow:"none",top:"0px",width:""+this.width()+"px",zIndex:100000}),b.elem.addClass(this.elem,"wistia_context_menu"),b.elem.removeClass(this.elem,"wistia_romulus_hidden"),b.elem.removeClass(this.elem,"wistia_romulus_visible"),this.items=[],this.setupItems()
}return __extends(d,a),d.prototype.initialize=function(){return this.turnOn(),this
},d.prototype.turnOn=function(){return d.__super__.turnOn.apply(this,arguments),this.hide()
},d.prototype.hide=function(){return this.elem.style.display="none"
},d.prototype.show=function(){return this.elem.style.display="block"
},d.prototype.cleanup=function(){return b.elem.unbind(document,"mouseup",this._hideContextMenuOnClickOutside),d.__super__.cleanup.apply(this,arguments)
},d.prototype.setupBindings=function(){var c=this;
return this._showContextMenuOnRightClick==null&&(this._showContextMenuOnRightClick=function(e){return b.detect.mac&&e.altKey||!b.detect.mac&&e.ctrlKey||(e.preventDefault(),c.showed(!0),c.show(),c.repositionFromEvent(e),c._suppressHide=!0,b.timeout(""+c.video.uuid+".contextmenu.suppress_hide",function(){return c._suppressHide=!1
},200)),!0
}),b.elem.rebind(this.video.romulusElem,"contextmenu",this._showContextMenuOnRightClick),this._hideContextMenuOnClickOutside==null&&(this._hideContextMenuOnClickOutside=function(e){if(c._suppressHide){return
}if(!b.elem.isInside(e.target,c.elem)){return c.hide()
}}),b.elem.rebind(document,"mouseup",this._hideContextMenuOnClickOutside),this.video.bind("enter-fullscreen",function(){return c.hide()
}),this.video.bind("cancel-fullscreen",function(){return c.hide()
}),this._onSwitchedAsset==null&&(this._onSwitchedAsset=function(){return c.playingIn.innerHTML="Playing in <span id='playingInName'>"+c.assetName(c.video._currentAsset)+"</span>",c.video._forceAsset?c.activateAsset(c.video._currentAsset):(c.activateItem("auto"),c.deactivateAssets())
}),this.video.bind("switched-to-asset",this._onSwitchedAsset),this.video.bind("switched-to-asset-without-load",this._onSwitchedAsset)
},d.prototype.repositionFromEvent=function(h){var m,l,k,j,i;
return this.video.inFullscreen()?j={left:b.util.scrollLeft(),top:b.util.scrollTop()}:j=b.elem.offset(this.video.romulusElem),l=h.pageX-j.left,i=h.pageY-j.top,k=l+this.width(),m=i+this.height(),k>this.video.videoWidth()&&(l-=this.width()-1),m>this.video.videoHeight()&&(i-=this.height()-1),this.elem.style.left=""+Math.max(0,l)+"px",this.elem.style.top=""+Math.max(0,i)+"px",this.fixZoom()
},d.prototype.fixZoom=function(){var c;
return this.elem.style.zoom=1,c=this.height()>this.video.videoHeight()?this.video.videoHeight()/this.height():1,this.elem.style.zoom=c
},d.prototype.setupItems=function(){var i,p,n,m,l,k,j=this;
this.addMenuItem("playingIn",{innerHTML:"Playing in <span id='playingInName'>"+this.assetName(this.video._currentAsset)+"</span>",events:{click:function(c){return c.stopPropagation(),j.hide()
}},"class":"wistia_disabled"}),this.video.embedded(function(){var c;
return(c=document.getElementById("playingInName"))!=null?c.innerHTML=j.assetName(j.video._currentAsset):void 0
}),this.addHr(),this.addMenuItem("auto",{innerHTML:"<span id='autoBullet' class='wistia_bullet'>&#9675;</span> Auto",events:{click:function(c){return c.stopPropagation(),j.video._forceAsset=null,j.video.swapVideoAsset(j.video.bestAsset()),j.deactivateAssets(),j.activateItem("auto"),j.hide()
}}}),this.activateItem("auto"),l=this.assets(),p=function(c){return j.addMenuItem(c.slug,{innerHTML:"<span id='"+c.slug+"Bullet' class='wistia_bullet'>&#9675;</span> "+j.assetName(c),events:{click:function(e){return e.stopPropagation(),j.video.forceSwitchToAsset(c),j.deactivateItem("auto"),j.activateAsset(c),j.hide()
}}})
};
for(n=0,m=l.length;
n<m;
n++){i=l[n],p(i)
}((k=b.detect.flash)!=null?k.version:void 0)>=9&&(this.addHr(),this.addMenuItem("switchToFlash",{innerHTML:"Switch to Flash",events:{click:function(c){return c.stopPropagation(),j.video.savePlatformPreference("flash"),j.video.publicApi.rebuildAs("flash"),j.video.trigger("widthchange"),j.video.trigger("heightchange"),j.hide()
}}})),this.video._mediaData.showAbout&&(this.addHr(),this.addMenuItem("aboutWistia",{tagName:"a",href:"http://wistia.com/about-wistia?about="+this.video._mediaData.accountKey.match(/\d+/)[0],target:"_blank",innerHTML:"About Wistia",style:{display:"block",textDecoration:"none"},events:{click:function(c){return c.stopPropagation(),j.hide()
}}})),this.showed(function(){return b.jsonp.get("//"+b.constant.appHost+"/media_url",{hashed_id:j.video.hashedId()},function(e){var g,f;
if(e.logged_in&&!j.onPageUrl(e.media_url)){return g=e.whitelabel?"Logged In to Account":"Logged In to Wistia",b.elem.remove(j.aboutWistia),j.addMenuItem("loggedIn",{innerHTML:g,"class":"wistia_disabled wistia_title",events:{click:function(c){return c.stopPropagation(),j.hide()
}}}),e.whitelabel||j.addMenuItem("troubleshooting",{tagName:"a",innerHTML:"Troubleshoot this embed",href:"http://wistia.com/doc/embed-troubleshooting?player=true&media="+j.video.hashedId()+"&page="+encodeURIComponent(j.video._attrs.pageUrl),target:"_blank",style:{display:"block",textDecoration:"none"},events:{click:function(c){return c.stopPropagation(),j.hide()
}}}),f=e.whitelabel?"Open video in account":"Open video in Wistia",j.addMenuItem("viewInWistia",{tagName:"a",href:e.media_url,target:"_blank",innerHTML:f,style:{display:"block",textDecoration:"none"},events:{click:function(c){return c.stopPropagation(),j.hide()
}}}),j.fixZoom()
}})
});
if(this.video.hdAsset()&&this.video._opts.videoQuality==="hd-only"){return this.activateItem("hdOnly"),this.deactivateItems("autoHd","sdOnly")
}},d.prototype.addMenuItem=function(e,g){var f;
return f=b.elem.fromObject(g),f.id=e,b.elem.addClass(f,"wistia_menu_item"),b.elem.addClass(f,"wistia_menu_item_"+e),b.elem.bind(f,"mousedown",function(c){return c.preventDefault()
}),b.elem.append(this.elem,f),this[e]=f,this.items.push(f)
},d.prototype.onPageUrl=function(e){var g,f;
return f=b.url.parse(location.href),g=b.url.parse(e),f._opts={},f.protocol="http:",g._opts={},g.protocol="http:",f.absolute()===g.absolute()
},d.prototype.addHr=function(){return b.elem.append(this.elem,b.elem.fromObject({style:{fontSize:"0px",height:"0px",lineHeight:"0px",borderTop:"1px solid #e8e8e8",margin:"1px 0"}}))
},d.prototype.activateItem=function(e){var c;
return(c=document.getElementById(""+e+"Bullet"))!=null?c.innerHTML="&#9679;":void 0
},d.prototype.deactivateItem=function(e){var c;
return(c=document.getElementById(""+e+"Bullet"))!=null?c.innerHTML="&#9675;":void 0
},d.prototype.deactivateItems=function(){var g,f,j,i,h;
f=1<=arguments.length?__slice.call(arguments,0):[],h=[];
for(j=0,i=f.length;
j<i;
j++){g=f[j],h.push(this.deactivateItem(g))
}return h
},d.prototype.assets=function(){return this._assets||(this._assets=this.video.assets({container:"mp4",sortBy:"width asc, bitrate desc",unique:"width","public":!0}))
},d.prototype.activateAsset=function(c){return this.playingIn.innerHTML="Playing in <span id='playingInName'>"+this.assetName(c)+"</span>",this.activateItem(c.slug),this.deactivateAssetsExcept(c)
},d.prototype.deactivateAsset=function(c){return this.deactivateItem(c.slug)
},d.prototype.deactivateAssets=function(){var g,f,j,i,h;
i=this.assets(),h=[];
for(f=0,j=i.length;
f<j;
f++){g=i[f],h.push(this.deactivateAsset(g))
}return h
},d.prototype.deactivateAssetsExcept=function(h){var g,l,k,j,i;
j=this.assets(),i=[];
for(l=0,k=j.length;
l<k;
l++){g=j[l],g.url!==h.url?i.push(this.deactivateAsset(g)):i.push(void 0)
}return i
},d.prototype.assetName=function(c){return !c||!c.width||!c.height?"?":c.width>=3840?""+Math.max(4,Math.round(c.width/1000*10)/10)+"k":c.width>=2700?""+Math.max(2.7,Math.round(c.width/1000*10)/10)+"k":""+c.height+"p"
},d.prototype.hideItem=function(c){return b.elem.removeClass(this[c],"wistia_visible"),b.elem.addClass(this[c],"wistia_hidden")
},d.prototype.showItem=function(c){return b.elem.removeClass(this[c],"wistia_hidden"),b.elem.addClass(this[c],"wistia_visible")
},d.prototype.visibleItems=function(){var g,f,j,i,h;
i=this.items,h=[];
for(f=0,j=i.length;
f<j;
f++){g=i[f],g.style.display!=="none"&&h.push(g)
}return h
},d.prototype.height=function(){return b.elem.height(this.elem)
},d.prototype.width=function(){return 200
},d.prototype.updateColor=function(){},d.prototype.remove=function(){return this.cleanup(),b.elem.unbind(this.video.romulusElem,"contextmenu",this._showContextMenuOnRightClick),b.elem.remove(this.elem)
},d
}(b.Romulus.Control)
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
},__slice=[].slice;
(function(e){var d,f;
d=e;
if(d.RomulusVideo){return
}return d.RomulusVideo=function(b){function c(){return f=c.__super__.constructor.apply(this,arguments),f
}return __extends(c,b),c.prototype.playerType="romulus",c.prototype.elem=function(){return document.getElementById(this.uuid)
},c.prototype.embed=function(){return this.resetStateVariables(),this.setCurrentAsset(),this.placeEmbed(this.createEmbedElem()),this.setupEmbed()
},c.prototype.setupEmbed=function(){var g=this;
return this.info("setupEmbed"),this.setCurrentAsset(),this.videoElem=document.getElementById(this.uuid),this.romulusElem=document.getElementById(""+this.uuid+"_romulus"),this.sourceElem=document.getElementById(""+this.uuid+"_source"),this.setupCss(),this.setupControls(),this.setupBindings(),this.fixWebkitControlsBug(),!d.detect.iphone&&!d.detect.ipad&&this.disableTextTracks(),this.checkForReady(),this.info("embedded"),this.embedded(!0),d.timeout(""+this.uuid+".fit_later",function(){return g.fit()
},500)
},c.prototype.checkForReady=function(){var g,h=this;
return this._checkDownState(),g=function(){if(!h.videoElem){return
}return h.videoElem.readyState>=2?d.timeout(""+h.uuid+".ready_later",function(){return h.info("ready readyState",h.videoElem.readyState),h._hasBeenReady=!0,h.ready(!0)
}):(h._onLoadStart==null&&(h._onLoadStart=function(){return d.timeout(""+h.uuid+".loadstart",function(){return h.info("ready loadstart"),h._hasBeenReady=!0,h.ready(!0)
})
}),d.elem.rebind(h.videoElem,"loadstart",h._onLoadStart)),d.timeout(""+h.uuid+".ready_fallback",function(){if(!h.ready()&&h.up()){return h.info("ready fallback"),h._hasBeenReady=!0,h.ready(!0)
}},200)
},this._hasBeenReady?g():this.up(g)
},c.prototype.transferStateFrom=function(h){var g=this;
this._heightBeforeFullscreen=h._heightBeforeFullscreen,this._widthBeforeFullscreen=h._widthBeforeFullscreen,this._inFullscreen=h._inFullscreen;
if(h._inFullscreen){return this.notFullscreen(function(){return g.width(g._widthBeforeFullscreen),g.height(g._heightBeforeFullscreen)
})
}},c.prototype.createEmbedElem=function(){var g;
return g={id:""+this.uuid+"_romulus",style:{background:"transparent",display:"block",height:"100%",overflow:"hidden",position:"relative",width:"100%"}},g.childNodes=this.createVideoObject(this.uuid,this._currentAsset),d.elem.fromObject(g)
},c.prototype.createVideoObject=function(t,s){var r,q,p,n,m,l,k;
l={tagName:"video",style:{background:"transparent",display:"block",height:"100%",position:"relative",visibility:"visible",width:"100%"},id:t,preload:"none",poster:"//"+d.constant.embedHost+"/assets/images/blank.gif"};
if(d.detect.browser.msie||d.detect.trident){l.style.minWidth="10px",l.style.minHeight="10px"
}return p=this._opts.autoPlay?"auto":this._opts.preload!=null?this._opts.preload:this._mediaData.preloadPreference,p==="metadata"?l.preload="metadata":p===!0||p==="auto"?l.preload="auto":p===!1||p==="none"?l.preload="none":(r=function(){var g,h;
g=d.data("video"),h=[];
for(q in g){m=g[q],h.push(m)
}return h
}(),this._opts._inIframe&&top!==parent?l.preload="none":this._opts._inIframe&&parent.frames.length>25?l.preload="none":this._opts._inIframe&&(!window._allIframes||_allIframes.length>2)?l.preload="none":!this._opts._inIframe&&r.length>2?l.preload="none":((k=this._mediaData.stats)!=null?k.loadCount:void 0)>5000&&this._mediaData.stats.uniquePlayCount/this._mediaData.stats.uniqueLoadCount<0.1?l.preload="none":l.preload="metadata"),n={tagName:"source",id:""+t+"_source",src:this.properAssetUrl(s.url),type:"video/mp4"},l.childNodes=[n],l
},c.prototype.setupBindings=function(){return this.setupPlayerApiBindings(),this.setupDomBindings(),this.setupVideoBindings(),this.setupFullscreenBindings(),this.setupKeyBindings()
},c.prototype.setupPlayerApiBindings=function(){return this.listenForEvents(),this.pollForEvents()
},c.prototype.setupDomBindings=function(){var g=this;
return this._onMouseoverVideo==null&&(this._onMouseoverVideo=function(a){return d.elem.containsOffset(g.romulusElem,a.pageX,a.pageY)&&(g.debug("_onMouseoverVideo",a.pageX,a.pageY),g._keyBindingsActive=!0,g._mouseover=!0),!0
}),d.elem.rebind(this.romulusElem,"mouseover",this._onMouseoverVideo),this._onMousemoveVideo==null&&(this._onMousemoveVideo=function(a){return d.elem.containsOffset(g.romulusElem,a.pageX,a.pageY)&&(g.debug("_onMousemoveVideo",a.pageX,a.pageY),g._keyBindingsActive=!0,g._mouseover=!0),!0
}),d.elem.rebind(this.romulusElem,"mousemove",this._onMousemoveVideo),this._onMouseoutVideo==null&&(this._onMouseoutVideo=function(a){return d.elem.containsOffset(g.romulusElem,a.pageX,a.pageY)||(g.debug("_onMouseoutVideo",a.pageX,a.pageY),g._keyBindingsActive=!1,g._mouseover=!1),!0
}),d.elem.rebind(this.romulusElem,"mouseout",this._onMouseoutVideo),this._onMouseLeavesWindow==null&&(this._onMouseLeavesWindow=function(a){var h;
h=a.relatedTarget||a.toElement;
if(!h||h.nodeName==="HTML"){g.debug("_onMouseLeavesWindow",h),g._mouseover=!1,g._keyBindingsActive=!1
}return !0
}),d.elem.rebind(document,"mouseout",this._onMouseLeavesWindow),this._onClickVideo==null&&(this._onClickVideo=function(a){return a.target===g.videoElem&&(g.debug("_onClickVideo"),g.togglePlay(),g.showControls()),!0
}),d.elem.rebind(this.romulusElem,"click",this._onClickVideo),this._onDblClickVideo==null&&(this._onDblClickVideo=function(a){return a.target===g.videoElem&&(g.debug("_onDblClickVideo"),g.fullscreenButton.on()&&(g.inFullscreen()?g.cancelFullscreen():g.requestFullscreen())),!0
}),d.elem.rebind(this.romulusElem,"dblclick",this._onDblClickVideo),this._showControlsOnMouseover==null&&(this._showControlsOnMouseover=function(a){return g.state()!=="beforeplay"&&(g.debug("_showControlsOnMouseover"),g.showControls()),!0
}),d.elem.rebind(this.romulusElem,"mouseover",this._showControlsOnMouseover),this._hideControlsOnMouseout==null&&(this._hideControlsOnMouseout=function(a){return g.inFullscreen()?(g.debug("_hideControlsOnMouseout -- in fullscreen, so showControls"),g.showControls()):(g.debug("_hideControlsOnMouseout"),g.state()!=="beforeplay"&&!d.elem.containsOffset(g.romulusElem,a.pageX,a.pageY)&&g.hideControls()),!0
}),d.elem.rebind(this.romulusElem,"mouseout",this._hideControlsOnMouseout),this._showControlsOnMousemove==null&&(this._showControlsOnMousemove=function(a){if(g.state()!=="beforeplay"&&!g._suppressShowControls){return g.debug("_showControlsOnMousemove"),g.showControls()
}}),d.elem.rebind(this.romulusElem,"mousemove",this._showControlsOnMousemove),this._fullscreenResizeToWindow==null&&(this._fullscreenResizeToWindow=function(a){if(g.inFullscreen()){return g.debug("_fullscreenResizeToWindow"),g.width(d.elem.width(window),{fullscreen:!0}),g.height(d.elem.height(window)-1,{fullscreen:!0})
}}),d.elem.rebind(window,"resize",this._fullscreenResizeToWindow)
},c.prototype.setupVideoBindings=function(){var g=this;
return this.videoElem.getAttribute("preload")!=="none"?this._startedLoadingAt=(new Date).getTime():this.bind("play",function(){return g._startedLoadingAt=(new Date).getTime(),g.unbind
}),this.bind("progress",function(){if(g.videoElem.buffered.length>0&&g.videoElem.buffered.end(0)>0){return g._firstByteReceivedAt=(new Date).getTime(),g._startedLoadingAt!=null&&(g._timeToFirstByte=g._firstByteReceivedAt-g._startedLoadingAt),d.elem.unbind
}}),this.bind("control-on",function(){return g.repositionControls()
}),this.bind("control-off",function(){return g.repositionControls()
}),this.bind("widthchange",function(){return g.repositionControls()
}),this.bind("heightchange",function(){return g.repositionControls()
}),this.embedded(function(){if(g.bandwidthTest().isFresh()){return g._supportsHd=g.bandwidthTest().savedResult().supportsHd
}if(g.hdAsset()&&g._supportsHd==null){return g.bind("play",function(){return g.doBandwidthTest(),g.unbind
})
}}),this.bind("play",function(){return g._beforePlay=!1,g._ended=!1
}),this.bind("end",function(){if(g._opts.endVideoBehavior==="reset"){return g.resetToFirstFrame()
}if(g._opts.endVideoBehavior==="loop"){return g.play()
}})
},c.prototype.setupFullscreenBindings=function(){var g=this;
return this._onEnterFullscreen==null&&(this._onEnterFullscreen=function(a){return a===g.chrome&&(g.info("_onEnterFullscreen"),g._inFullscreen=!0,g.notFullscreen(!1),g.showControls(),g.width(d.elem.width(window),{fullscreen:!0}),g.height(d.elem.height(window)-1,{fullscreen:!0}),g.videoElem.style.background="#000",g.swapVideoAsset(g.bestAsset()),g.trigger("enter-fullscreen")),!0
}),d.bind("enter-fullscreen",this._onEnterFullscreen),this._onCancelFullscreen==null&&(this._onCancelFullscreen=function(){return g._inFullscreen&&(g.info("_onCancelFullscreen"),g._inFullscreen=!1,g.hideControls(),g.videoElem.style.background="transparent",g.swapVideoAsset(g.bestAsset()),g.showControls(),g.notFullscreen(!0),g.width(g._widthBeforeFullscreen),g.height(g._heightBeforeFullscreen),g.fit(),g.trigger("cancel-fullscreen")),!0
}),d.bind("cancel-fullscreen",this._onCancelFullscreen)
},c.prototype.setupKeyBindings=function(){var g,h=this;
return g=!1,this._onKeyDown=function(j){var i,a;
return i=/^(input|textarea|select)$/i.test((a=document.activeElement)!=null?a.tagName:void 0),h._keyBindingsActive&&!i&&(j.which===32?(h.togglePlay(),h.showControls(),j.preventDefault()):j.which===37?(d.timeout(""+h.uuid+".left_key_held",function(){return g=!0
},200),d.elem.bind(document,"keyup",function(k){return d.clearTimeouts(""+h.uuid+".left_key_held"),g=!1,d.elem.unbind
}),h.playbarControl.on()&&(h.state()!=="playing"?j.shiftKey?h.time(h.time()-1):h.time(h.time()-1/24):j.shiftKey||g?h.time(h.time()-h.fastTimeDiff(h.duration())):h.time(h.time()-h.slowTimeDiff(h.duration())),h.showControls(),j.preventDefault())):j.which===39?(d.timeout(""+h.uuid+".right_key_held",function(){return g=!0
},200),d.elem.bind(document,"keyup",function(k){return d.clearTimeouts(""+h.uuid+".right_key_held"),g=!1
}),h.playbarControl.on()&&(h.state()!=="playing"?j.shiftKey?h.time(h.time()+1):h.time(h.time()+1/24):j.shiftKey||g?h.time(h.time()+h.fastTimeDiff(h.duration())):h.time(h.time()+h.slowTimeDiff(h.duration())),h.showControls(),j.preventDefault())):j.which===38?h.volumeControl.on()&&(j.shiftKey?(h.volume(h.volume()+0.1),h.showControls()):(h.volume(h.volume()+0.01),h.showControls()),j.preventDefault()):j.which===40?h.volumeControl.on()&&(j.shiftKey?(h.volume(h.volume()-0.1),h.showControls()):(h.volume(h.volume()-0.01),h.showControls()),j.preventDefault()):h.fullscreenButton.on()&&(j.which===70?h.requestFullscreen():j.which===13&&(j.altKey||j.metaKey)?h.requestFullscreen():j.which===122&&h.requestFullscreen())),!0
},d.elem.rebind(document,"keydown",this._onKeyDown)
},c.prototype.setupControls=function(){var g,i=this;
this.info("setupControls");
try{return this.still=(new d.Romulus.Still(this)).initialize(),this._opts.wmode!=="transparent"&&this.still.loaded(function(){return i.romulusElem.style.backgroundColor="#000"
}),this._controls=[this.smallPlayButton=(new d.Romulus.SmallPlayButton(this)).initialize(),this.playbarControl=(new d.Romulus.PlaybarControl(this)).initialize(),this.volumeControl=(new d.Romulus.VolumeControl(this)).initialize(),this.fullscreenButton=(new d.Romulus.FullscreenButton(this)).initialize(),this.branding=(new d.Romulus.Branding(this)).initialize()],this.bigPlayButton=(new d.Romulus.BigPlayButton(this)).initialize(),this.loading=(new d.Romulus.Loading(this)).initialize(),this.contextMenu=(new d.Romulus.ContextMenu(this)).initialize(),this._allControls=[this.smallPlayButton,this.playbarControl,this.volumeControl,this.fullscreenButton,this.branding,this.bigPlayButton,this.loading,this.contextMenu,this.still],this._bottomLeftControls=[this.smallPlayButton],this._bottomRightControls=[this.fullscreenButton,this.volumeControl],this.resetControls(),this.ready(function(){if(i.volumeControl.off()&&i._opts.volume==null){return i.volume(1)
}})
}catch(h){return g=h,this.error(g)
}},c.prototype.resetControls=function(){return this.info("resetControls"),this.repositionControls(),this.bigPlayButton.show(),this.state()==="beforeplay"&&this.still.show(),this.playbarControl.updateScrubBar(),this._opts.controlsVisibleOnLoad?this.showControls():this.hideControls()
},c.prototype.repositionControls=function(){return this.info("repositionControls"),this.positionBottomLeftControls(),this.positionBottomRightControls(),this.playbarControl.reorient(),this.bigPlayButton.reorient()
},c.prototype.positionBottomLeftControls=function(){var h,g,l,k,j,i;
g=0,j=this._bottomLeftControls,i=[];
for(l=0,k=j.length;
l<k;
l++){h=j[l],h.on()?(h.elem.style.left=""+g+"px",i.push(g+=h.width()+5)):i.push(void 0)
}return i
},c.prototype.positionBottomRightControls=function(){var h,g,l,k,j,i;
g=0,j=this._bottomRightControls,i=[];
for(l=0,k=j.length;
l<k;
l++){h=j[l],h.on()?(h.elem.style.right=""+g+"px",i.push(g+=h.width()+5)):i.push(void 0)
}return i
},c.prototype.leftControlsWidth=function(){var h,g,k,j,i;
g=0,i=this._bottomLeftControls||[];
for(k=0,j=i.length;
k<j;
k++){h=i[k],h.on()&&(g+=h.width()+5)
}return g
},c.prototype.rightControlsWidth=function(){var h,g,k,j,i;
g=0,i=this._bottomRightControls||[];
for(k=0,j=i.length;
k<j;
k++){h=i[k],h.on()&&(g+=h.width()+5)
}return g
},c.prototype.controlEnabled=function(h,g){if(g==null){return this[h].on()
}this.info("controlEnabled",h,g),g?this[h].turnOn():this[h].turnOff();
if(this._opts.controlsVisibleOnLoad||this.state()!=="beforeplay"){return this.showControls()
}},c.prototype.bigPlayButtonEnabled=function(g){return this.controlEnabled("bigPlayButton",g),this
},c.prototype.smallPlayButtonEnabled=function(g){return this.controlEnabled("smallPlayButton",g),this
},c.prototype.playbarControlEnabled=function(g){return this.controlEnabled("playbarControl",g),this
},c.prototype.volumeControlEnabled=function(g){return this.controlEnabled("volumeControl",g),this
},c.prototype.fullscreenButtonEnabled=function(g){return this.controlEnabled("fullscreenButton",g),this
},c.prototype.showControls=function(){var g,k,j,i,h=this;
this.debug("showControls"),i=this._controls;
for(k=0,j=i.length;
k<j;
k++){g=i[k],g.show()
}return this.bigPlayButton.show(),d.timeout(""+this.uuid+".hide_controls_if_no_movement",function(){if(h.inFullscreen()&&h._mouseover){return h.hideControls()
}},2500),this.showCursor(),this._controlsVisible=!0,this.trigger("show-controls")
},c.prototype.forceShowControls=function(){var j,i,q,p,n,m,l,k;
this.info("forceShowControls"),m=this._controls;
for(i=0,p=m.length;
i<p;
i++){j=m[i],j._forceShow=!0
}this.showControls(),l=this._controls,k=[];
for(q=0,n=l.length;
q<n;
q++){j=l[q],k.push(j._forceShow=!1)
}return k
},c.prototype.previewControls=function(){return this.info("previewControls"),this._previewControls=!0,this.showControls(),this._previewControls=!1
},c.prototype.hideControls=function(){var h,g,j,i;
this.info("hideControls"),i=this._controls;
for(g=0,j=i.length;
g<j;
g++){h=i[g],(h.name!=="bigPlayButton"||this.state()!=="beforeplay")&&h.hide()
}return this.inFullscreen()&&this.hideCursor(),this._controlsVisible=!1,this.trigger("hide-controls")
},c.prototype.hideCursor=function(){var g=this;
return this.info("hideCursor"),this._suppressShowControls=!0,this._embedContainer.style.cursor="none",d.timeout(""+this.uuid+".suppress_show_controls",function(){return g._suppressShowControls=!1
},500)
},c.prototype.showCursor=function(){return this._embedContainer.style.cursor=""
},c.prototype.listenForEvents=function(){var g=this;
return this.playRelay==null&&(this.playRelay=function(){return g._hasPlayed=!0,g._ended=!1,g._waiting=0,g.trigger("play")
}),this.pauseRelay==null&&(this.pauseRelay=function(){return g.fireTimeChangedEventsIfChanged(),g.trigger("pause")
}),this.endRelay==null&&(this.endRelay=function(){return g.fireTimeChangedEventsIfChanged(),g.trigger("end"),g.trigger("afterend")
}),this.volumechangeRelay==null&&(this.volumechangeRelay=function(){return g.trigger("volumechange",g.volume())
}),this.waitingRelay==null&&(this.waitingRelay=function(){return g.trigger("waiting")
}),this.progressRelay==null&&(this.progressRelay=function(){return g.trigger("progress")
}),this.unbindVideoListeners(),this.info("listenForEvents"),d.elem.bind(this.videoElem,"pause",this.pauseRelay),d.elem.bind(this.videoElem,"playing",this.playRelay),d.elem.bind(this.videoElem,"ended",this.endRelay),d.elem.bind(this.videoElem,"volumechange",this.volumechangeRelay),d.elem.bind(this.videoElem,"waiting",this.waitingRelay),d.elem.bind(this.videoElem,"progress",this.progressRelay)
},c.prototype.unbindVideoListeners=function(){return this.info("unbindVideoListeners"),d.elem.unbind(this.videoElem,"pause",this.pauseRelay),d.elem.unbind(this.videoElem,"playing",this.playRelay),d.elem.unbind(this.videoElem,"ended",this.endRelay),d.elem.unbind(this.videoElem,"volumechange",this.volumechangeRelay),d.elem.unbind(this.videoElem,"waiting",this.waitingRelay),d.elem.unbind(this.videoElem,"progress",this.progressRelay)
},c.prototype.unbindListeners=function(){return this.info("unbindListeners"),this.unbindVideoListeners(),d.elem.unbindAll(this.romulusElem),d.unbind("enter-fullscreen",this._onEnterFullscreen),d.unbind("cancel-fullscreen",this._onCancelFullscreen),d.elem.unbind(window,"resize",this._fullscreenResizeToWindow),d.elem.unbind(document,"mouseout",this._onMouseLeavesWindow),d.elem.unbind(document,"keydown",this._onKeyDown)
},c.prototype.pollForEvents=function(){var g=this;
return this.info("pollForEvents"),d.eventLoop.add(""+this.uuid+".events",this._eventLoopDuration,function(){var a;
if(!g.looksDown()){a=g.state(),a==="playing"&&a===g._lastState&&g.time()===g._lastTimePosition&&(g._waiting+=1,g.trigger("waiting")),a!==g._lastState&&(g.trigger("statechange",a),g._lastState=a,a==="playing"?g.playing(!0):g.playing(!1)),g.fireTimeChangedEventsIfChanged();
if(a!=="ended"&&g.mozillaAtEnd()){return g.videoElem.pause(),g._ended=!0,g.trigger("end")
}}})
},c.prototype.mozillaAtEnd=function(){return d.detect.browser.mozilla&&d.detect.windows&&this._waiting>=2&&Math.abs(this.time()-this.duration())<2
},c.prototype.fireTimeChangedEventsIfChanged=function(){var g;
if((g=this.time())!==this._lastTimePosition&&g>0){return this._ended=!1,this._waiting=0,this.trigger("timechange",g),Math.floor(g)!==Math.floor(this._lastTimePosition)&&this.trigger("secondchange",Math.floor(g)),!this._beforePlay&&!this._ended&&Math.abs(g-this._lastTimePosition)>this._attrs.seekThreshold&&this.trigger("seek",g,this._lastTimePosition),this._lastTimePosition=g
}},c.prototype.setupCss=function(){return this.info("setupCss"),this.romulusStyle=d.css(this.romulusElem,"#"+this.chrome.id+":fullscreen,\n#"+this.chrome.id+":-webkit-full-screen,\n#"+this.chrome.id+":-moz-full-screen {\nbackground:#000;\n}\n#"+this._embedContainer.id+" .wistia_romulus_control {\n  -webkit-font-smoothing: antialiased;\n  z-index: 1;\n}\n#"+this._embedContainer.id+" .wistia_romulus_hidden {\n  opacity: 0;\n  "+d.util.transitionCss(["opacity","200ms"],["width","0s","200ms"],["height","0s","200ms"])+"\n}\n#"+this._embedContainer.id+" .wistia_romulus_visible {\n  opacity: 1;\n  visibility: visible;\n  "+d.util.transitionCss(["opacity","200ms"])+"\n}\n#"+this._embedContainer.id+" .wistia_played {\n  "+d.util.transitionCss("width",""+this._eventLoopDuration+"ms")+"\n}\n#"+this._embedContainer.id+" .wistia_playbar.wistia_dragging .wistia_played {\n  "+d.util.transitionCss("left","0")+"\n}\n#"+this._embedContainer.id+" .wistia_scrub_bar {\n  "+d.util.transitionCss("left",""+this._eventLoopDuration+"ms")+"\n}\n#"+this._embedContainer.id+" .wistia_playbar.wistia_dragging .wistia_scrub_bar {\n  "+d.util.transitionCss("left","0")+"\n}\n#"+this._embedContainer.id+" .wistia_scrub_bar_top {\n  background: rgba(255, 255, 255, .33);\n  height: 4px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 4px;\n}\n#"+this._embedContainer.id+" .wistia_scrub_bar_middle {\n  background: rgba(255, 255, 255, .66);\n  height: 24px;\n  left: 0;\n  position: absolute;\n  top: 4px;\n  width: 4px;\n}\n#"+this._embedContainer.id+" .wistia_scrub_bar_bottom {\n  background: rgba(255, 255, 255, .33);\n  height: 4px;\n  left: 0;\n  position: absolute;\n  top: 28px;\n  width: 4px;\n}\n#"+this._embedContainer.id+" .wistia_menu_item {\n  background: transparent;\n  color: #555;\n  font-family: Arial, Sans-Serif;\n  font-size: 14px;\n  font-weight: normal;\n  padding: 6px 16px;\n  transition: none;\n  -webkit-font-smoothing: antialiased;\n}\n#"+this._embedContainer.id+" .wistia_menu_item .wistia_bullet {\n  display: inline-block;\n  margin: -1px 7px 0 0;\n  vertical-align: top;\n}\n#"+this._embedContainer.id+" .wistia_menu_item.wistia_visible {\n  display: block;\n}\n#"+this._embedContainer.id+" .wistia_menu_item.wistia_hidden {\n  display: none;\n}\n#"+this._embedContainer.id+" .wistia_menu_item:hover {\n  background: #54bbff;\n  color: #fff;\n}\n#"+this._embedContainer.id+" .wistia_menu_item.wistia_disabled {\n  background: transparent;\n  color: #bbb;\n}\n#"+this._embedContainer.id+" .wistia_menu_item.wistia_title {\n  background: transparent;\n  color: #bbb;\n  font-size: 11px;\n  line-height: 1em;\n  padding-bottom: 3px;\n}\n#"+this._embedContainer.id+" .wistia_dont_animate {\n  -webkit-transition: none;\n  -moz-transition: none;\n  -o-transition: none;\n  -ms-transition: none;\n  transition: none;\n}\n#"+this.uuid+" {\n  -ms-object-fit: contain;\n  -o-object-fit: contain;\n  -moz-object-fit: contain;\n  -webkit-object-fit: contain;\n  object-fit: contain;\n}")
},c.prototype.fit=function(){var g=this;
return c.__super__.fit.apply(this,arguments),this.embedded(function(){return g.correctForIntegers(),g.repositionControls(),g.still.fitStill(),g.bigPlayButton.reorient()
})
},c.prototype.rangeBuffered=function(){var h,g,l,k,j,i;
for(g=k=0,j=this.videoElem.buffered.length;
0<=j?k<j:k>j;
g=0<=j?++k:--k){l=this.videoElem.buffered.start(g),h=this.videoElem.buffered.end(g);
if(l<=(i=this.time())&&i<h){return[l,h]
}}return null
},c.prototype.timeBuffered=function(){var g;
return g=this.rangeBuffered(),g?g[1]-g[0]:0
},c.prototype.totalBuffered=function(){return d.Metrics.sumTimeRanges(this.videoElem.buffered)
},c.prototype.totalPlayed=function(){return d.Metrics.sumTimeRanges(this.videoElem.played)
},c.prototype.togglePlay=function(){return this.info("togglePlay"),this.state()==="playing"?this.pause():this.play()
},c.prototype.requestFullscreen=function(){if(this.inFullscreen()){return
}return this.info("requestFullscreen"),this._widthBeforeFullscreen=this.width(),this._heightBeforeFullscreen=this.height(),d.elem.requestFullscreen(this.chrome)
},c.prototype.cancelFullscreen=function(){if(!this.inFullscreen()){return
}return this.info("cancelFullscreen"),d.elem.cancelFullscreen()
},c.prototype.inFullscreen=function(){return !!this._inFullscreen
},c.prototype.fixWebkitControlsBug=function(){if(d.detect.browser.webkit){return this.info("fixWebkitControlsBug"),this.videoElem.setAttribute("controls","controls"),this.videoElem.removeAttribute("controls")
}},c.prototype.stopStreaming=function(){var g,k,j,i;
this.info("stopStreaming");
try{return d.detect.trident?(k=this.videoElem)!=null&&(k.src=".mp4"):(j=this.videoElem)!=null&&(j.src=""),(i=this.videoElem)!=null?i.load():void 0
}catch(h){return g=h,this.notice(g)
}},c.prototype.cleanup=function(){return this.info("cleanup"),d.elem.unbind(document,"mouseout",this._onMouseLeavesWindow),d.elem.unbind(document,"keydown",this._onKeyDown),d.elem.unbind(window,"resize",this._fullscreenResizeToWindow),d.unbind("cancel-fullscreen",this._onCancelFullscreen),d.unbind("enter-fullscreen",this._onEnterFullscreen)
},c.prototype.resetToFirstFrame=function(){var g=this;
return this.info("resetToFirstFrame"),this.commandQueueOpen(function(){return g._beforePlay=!0,g._ended=!1,g.resetControls()
})
},c.prototype.fastTimeDiff=function(g){return g<30?5:g<60?10:10+g/60
},c.prototype.slowTimeDiff=function(g){return g<60?2:10
},c.prototype.removeNonVideoElements=function(){var g,j,i,h;
this.info("removeNonVideoElements"),h=this._allControls;
for(j=0,i=h.length;
j<i;
j++){g=h[j],g.remove()
}if(this.romulusStyle){return d.elem.remove(this.romulusStyle),this.romulusStyle=null
}},c.prototype.initFrom=function(h){var g,k,j,i;
this.info("initFrom",h),k="_cssBeforeFullscreen\n_heightBeforeFullscreen\n_inFullscreen\n_mouseover\n_widthBeforeFullscreen\nuuid\nwrapperElem".split(/[\s\n]+/);
for(j=0,i=k.length;
j<i;
j++){g=k[j],this[g]=h[g]
}return this.resetStateVariables(),h.unbindListeners(),h.removeNonVideoElements(),this.setupEmbed(),this.switchToAssetWithoutLoad(this._currentAsset,!0)
},c.prototype.setCurrentAsset=function(){return this._currentAsset=this.bestAsset(),this.data.asset=this._currentAsset,this.info("setCurrentAsset",this._currentAsset)
},c.prototype.switchToAsset=function(g,k){var j,i,h=this;
k==null&&(k=!1),this.info("switchToAsset",g,k);
if(!k&&g.type===this._currentAsset.type){return
}i=this.time(),j=this.state(),this._suppressTimechange=!0,d.elem.rebind(this.videoElem,"loadeddata",function(){return k?(h.videoElem.style.visibility="visible",h._suppressTimechange=!1):i>2?(h.time(i),h.commandQueueOpen.synchronize(function(a){return j==="playing"?h.ready(function(){return h.videoElem.play(),h._suppressTimechange=!1,h.videoElem.style.visibility="visible",h.trigger("switched-to-asset",g.type),a()
}):h.ready(function(){return h.videoElem.pause(),h.videoElem.style.visibility="visible",h._suppressTimechange=!1,h.trigger("switched-to-asset",g.type),a()
})
})):(j==="playing"&&h.play(),h.videoElem.style.visibility="visible",h._suppressTimechange=!1),h._playbackRate!==1&&h.playbackRate(h._playbackRate),d.elem.unbind
}),this.videoElem.style.visibility="hidden",this.switchToAssetWithoutLoad(g,k),this.videoElem.load();
if(j!=="beforeplay"&&!this._opts.autoPlay){return this.videoElem.play()
}},c.prototype.switchToAssetWithoutLoad=function(g,h){h==null&&(h=!1),this.info("switchToAssetWithoutLoad",g,h);
if(!h&&g.type===this._currentAsset.type){return
}if(!d.elem.inDom(this.videoElem)){return
}return this._currentAsset=g,this.data.asset=g,this.videoElem.src=this.sourceElem.src=this.properAssetUrl(g.url),this.trigger("switched-to-asset-without-load",g.type)
},c.prototype.swapVideoAsset=function(g){var i,h=this;
if(g.url===this._currentAsset.url){return
}if(!d.elem.inDom(this.videoElem)){return
}return d.detect.safari?this.switchToAsset(g):(this.clearVideoElems(),i=this.injectNewVideoElem(g),this.syncVideoElemWithCurrent(i,function(){return h.finishVideoElemSwap(i),h._currentAsset=g,h.data.asset=g,h.trigger("swapped-video-elem"),h.trigger("switched-to-asset",g)
}))
},c.prototype.injectNewVideoElem=function(g){var j,i,h;
return j=d.seqId("wistia_","_video_elem"),h=this.createVideoObject(j,g),i=d.elem.fromObject(h),d.elem.after(this.videoElem,i),d.elem.style(i,{left:"-100%",position:"absolute",top:0}),this._videoElems==null&&(this._videoElems={}),this._videoElems[j]=i,i
},c.prototype.clearVideoElems=function(){var g,j,i,h;
i=this._videoElems,h=[];
for(j in i){g=i[j],d.elem.unbindAllInside(g),d.elem.remove(g),h.push(delete this._videoElems[g.id])
}return h
},c.prototype.syncVideoElemWithCurrent=function(g,i){var h=this;
return d.elem.bind(g,"loadstart",function(){return d.timeout(""+h.uuid+".delayed_video_elem_sync",function(){return h.time()>0?(g.volume=0,d.elem.bind(g,"playing",function(){return d.elem.bind(g,"seeked",function(){return h.state()==="playing"?g.play():g.pause(),g.currentTime=h.time(),typeof i=="function"&&i(),d.elem.unbind
}),g.currentTime=h.time(),d.elem.unbind
}),g.play()):typeof i=="function"?i():void 0
}),d.elem.unbind
})
},c.prototype.finishVideoElemSwap=function(g){var j,i,h;
return j=g.id,h=this.videoElem,i=this.sourceElem,this.unbindVideoListeners(),this.videoElem=g,this.videoElem.id=h.id,this.sourceElem=this.videoElem.childNodes[0],this.sourceElem.id=i.id,h.id=d.seqId("wistia_","_defunct_video"),i.id=d.seqId("wistia_","_defunct_source"),this.listenForEvents(),h.currentTime&&(this.videoElem.currentTime=h.currentTime),this.videoElem.volume=h.volume,d.elem.style(h,{left:0,position:"absolute",top:0}),d.elem.style(this.videoElem,{left:0,position:"relative"}),h.src="",h.load(),d.elem.remove(h),delete this._videoElems[j]
},c.prototype.forceSwitchToAsset=function(g){return this.info("forceSwitchToAsset",g),this._forceAsset=g,this.swapVideoAsset(g)
},c.prototype.supportsHd=function(){return this.hdAsset()?this._supportsHd!=null?this._supportsHd:!0:!1
},c.prototype.bestAsset=function(){return this._forceAsset?this._forceAsset:this._opts.videoQuality==="sd-only"?this.mdOrSdAsset():this._opts.videoQuality==="hd-only"?this.hdAsset()||this.mdAsset()||this.sdAsset():this._opts.videoQuality==="md"?this.mdAsset()||this.sdAsset():this._opts.videoQuality==="low-fps"?this.lowFpsAsset()||this.sdAsset():this.chosenAsset()?this.chosenAsset():this.isScreencast()&&this.screencastAsset()?this.screencastAsset():this.inFullscreen()?this.supportsHd()?this.hdAsset()||this.mdAsset()||this.sdAsset():this.mdOrSdAsset():this.mdOrSdAsset()
},c.prototype.chosenAsset=function(){var h,g,j,i;
return/width:/.test(this._opts.videoQuality)?(i=this._opts.videoQuality.match(/width:([a-z]*)(\d+)/i),j=i[0],h=i[1],g=i[2],/^\d+$/.test(g)?(g=parseInt(g,10),h===""||h==="lte"?this.mp4Asset({width:[0,g],sortBy:"width desc"})||this.mp4Asset({width:[g,10000],sortBy:"width asc"}):h==="gte"?this.mp4Asset({width:[g,10000],sortBy:"width asc"})||this.mp4Asset({width:[0,g],sortBy:"width desc"}):null):null):null
},c.prototype.mdOrSdAsset=function(){return this._mdOrSdAsset||(this._mdOrSdAsset=this._opts.videoQuality==="sd-only"?this.sdAsset():this._opts.videoQuality==="md"||this._opts.videoFoam||this.videoWidth()>=720?this.mdAsset()||this.sdAsset():this.sdAsset())
},c.prototype.screencastAsset=function(){return this._screencastAsset||(this._screencastAsset=this.mp4Asset({bitrate:[0,1300],sortBy:"width desc, bitrate asc",width:[0,this.originalAsset().width]}))
},c.prototype.sdAsset=function(){return this._sdAsset||(this._sdAsset=this.iphoneAsset()||this.mp4Asset())
},c.prototype.mdAsset=function(){return this._mdAsset||(this._mdAsset=this.mp4Asset({width:[720,980],sortBy:"width desc, bitrate desc"}))
},c.prototype.hdAsset=function(){return this._hdAsset||(this._hdAsset=this.mp4Asset({width:[980,this._opts.maxHdWidth||1300],sortBy:"width desc, bitrate desc"}))
},c.prototype.lowFpsAsset=function(){return this._lowFpsAsset||(this._lowFpsAsset=this.mp4Asset({"public":!1}))
},c.prototype.stillUrl=function(g){return g=d.obj.merge({playButton:!1},g),c.__super__.stillUrl.call(this,g)
},c.prototype.bandwidthTest=function(){return this._bandwidthTest!=null?this._bandwidthTest:this._bandwidthTest=new d.BandwidthTest({timeoutLength:this._currentAsset.type==="iphone"?4000:5000,uuid:this.uuid,saveKey:"romulus.bandwidth"})
},c.prototype.doBandwidthTest=function(){var g,k,j,i,h=this;
this.info("doBandwidthTest"),this._endBandwidthTestEarly==null&&(this._endBandwidthTestEarly=function(){return h.info("_endBandwidthTestEarly"),h.bandwidthTest().endEarly(),d.Metrics.videoCount(h,"player/bandwidth_test/ended_early")
}),i=["seek","pause","end","switched-to-asset-without-load"];
for(k=0,j=i.length;
k<j;
k++){g=i[k],this.rebind(g,this._endBandwidthTestEarly)
}return this._failBandwidthTestOnWaiting==null&&(this._failBandwidthTestOnWaiting=function(){return h.info("_failBandwidthTestOnWaiting"),h.bandwidthTest().fail(),d.Metrics.videoCount(h,"player/bandwidth_test/failed"),h.unbind
}),this.rebind("waiting",this._failBandwidthTestOnWaiting),this._endBandwidthTestOnTime=function(){var m,l,a;
h.info("_endBandwidthTestOnTime"),h._supportsHd=h.bandwidthTest().supportsHd(),h._failBandwidthTestOnWaiting&&h.unbind("waiting",h._failBandwidthTestOnWaiting);
if(h._endBandwidthTestEarly){a=["seek","pause","end","switched-to-asset-without-load"];
for(m=0,l=a.length;
m<l;
m++){g=a[m],h.unbind(g,h._endBandwidthTestEarly)
}}return d.Metrics.videoCount(h,"player/bandwidth_test/ended_on_time")
},this.bandwidthTest().bind("ended",this._endBandwidthTestOnTime),this.bandwidthTest().start()
},c.prototype.switchAllAssets=function(h,g){var i;
return g==null&&(g={}),this.info("switchAllAssets",h,g),this.still.img.src=this.stillUrl({playButton:!1}),i=this.bestAsset(),this.switchToAsset(i,!0)
},c.prototype.play=function(){var g=this;
return this.suppressPlay()?this:(this.info("play"),this.ready(function(){return g.commandQueueOpen.synchronize(function(a){return g.trigger("startplay"),g.mozillaAtEnd()?(g.videoElem.currentTime=0,g.videoElem.play()):g.videoElem.play(),g.playing(function(){return g.info("play: done"),a()
})
})
}),this)
},c.prototype.pause=function(){var g=this;
return this.info("pause"),this.ready(function(){return g.commandQueueOpen.synchronize(function(a){return g.videoElem.pause(),g.info("pause: done"),a()
})
}),this
},c.prototype.time=function(h){var g,i=this;
return h!=null?(this.info("time",h),h=Math.max(0,Math.min(this.duration(),h)),this.ready(function(){return i.state()==="beforeplay"?i.commandQueueOpen.synchronize(function(a){var k,j;
return i.state()==="beforeplay"?(j=i.state(),i.info("time "+h+": seek beforeplay"),k=i.volume(),i.playing(function(){return i.info("time "+h+": jump to time after playing"),i.videoElem.currentTime=h,j==="playing"?i.info("time: "+h+": play after seek"):(i.info("time: "+h+": pause after seek"),i.videoElem.pause()),i.volume(k),i._sayWhenDoneSeeking(a),i.commandQueueOpen(function(){return i.videoElem.style.visibility="visible"
})
}),i.videoElem.style.visibility="hidden",i.volume(0),i.info("time "+h+": start stream by calling play"),i.trigger("startplay"),i.videoElem.play()):(i.info("time "+h+": set immediately after synchronize"),i.videoElem.currentTime=h,a())
}):(i.info("time "+h+": set immediately"),i.commandQueueOpen(function(){return i.videoElem.currentTime=h
}))
}),this):((g=this.videoElem)!=null?g.currentTime:void 0)||0
},c.prototype._sayWhenDoneSeeking=function(g){var h=this;
return this.videoElem.seeking?(this.info("waiting for seek"),d.elem.rebind(this.videoElem,"seeked",function(){return h.info("seeked"),g(),d.elem.unbind
})):(this.info("no wait for seek"),g())
},c.prototype.volume=function(h){var g,i=this;
return h!=null?(this.info("volume",h),h=Math.max(0,Math.min(1,h)),this.ready(function(){return i.commandQueueOpen(function(){return i.videoElem.volume=h
})
}),this):((g=this.videoElem)!=null?g.volume:void 0)||0
},c.prototype.trigger=function(){var h,g;
g=arguments[0],h=2<=arguments.length?__slice.call(arguments,1):[];
if(!/timechange|secondchange/.test(g)||!this._suppressTimechange){return c.__super__.trigger.apply(this,[g].concat(__slice.call(h)))
}},c.prototype.state=function(){var h;
try{return this._beforePlay?"beforeplay":this._ended?"ended":this.videoElem.ended?"ended":this.videoElem.paused?"paused":"playing"
}catch(g){return h=g,"unknown"
}},c.prototype.playerColor=function(h){var m,l,k,j,i;
if(h!=null){this.info("playerColor",h),l=this._attrs.playerColor,h=d.Video._sanePlayerColor(h),this._attrs.playerColor=(new d.Color(h)).toHex();
if(this._allControls){i=this._allControls;
for(k=0,j=i.length;
k<j;
k++){m=i[k],m.updateColor()
}this.forceShowControls()
}return l!==this._attrs.playerColor&&this.trigger("playercolorchange",this._attrs.playerColor,l),this
}return this._attrs.playerColor
},c.prototype.width=function(h,g){var i=this;
return g==null&&(g={}),h!=null?g.fullscreen||!this.inFullscreen()?c.__super__.width.call(this,h,g):(this.info("notFullscreen => width("+h+")"),this.notFullscreen(function(){return c.__super__.width.call(i,h,g)
}),this):c.__super__.width.apply(this,arguments)
},c.prototype.height=function(h,g){var i=this;
return g==null&&(g={}),h!=null?g.fullscreen||!this.inFullscreen()?c.__super__.height.call(this,h,g):(this.info("notFullscreen => height("+h+")"),this.notFullscreen(function(){return c.__super__.height.call(i,h,g)
}),this):c.__super__.height.apply(this,arguments)
},c.prototype.videoWidth=function(h,g){var i=this;
return g==null&&(g={}),h!=null?g.fullscreen||!this.inFullscreen()?c.__super__.videoWidth.call(this,h,g):(this.info("notFullscreen => videoWidth("+h+")"),this.notFullscreen(function(){return c.__super__.videoWidth.call(i,h,g)
}),this):c.__super__.videoWidth.apply(this,arguments)
},c.prototype.videoHeight=function(h,g){var i=this;
return g==null&&(g={}),h!=null?g.fullscreen||!this.inFullscreen()?c.__super__.videoHeight.call(this,h,g):(this.info("notFullscreen => videoHeight("+h+")"),this.notFullscreen(function(){return c.__super__.videoHeight.call(i,h,g)
}),this):c.__super__.videoHeight.apply(this,arguments)
},c.prototype.playbackRate=function(g){return this.videoElem.playbackRate!=null?g!=null?(this.info("playbackRate",g),this.videoElem.playbackRate=g,this._eventLoopDuration=Math.max(50,Math.min(500,this._baseEventLoopDuration*g)),this._playbackRate=g,this):this.videoElem.playbackRate:(this.info("playbackRate",g,"not supported"),c.__super__.playbackRate.call(this,g))
},c
}(d.Video),d._onFullscreenChange==null&&(d._onFullscreenChange=function(){return d.elem.fullscreenElement()?d.trigger("enter-fullscreen",d.elem.fullscreenElement()):d.trigger("cancel-fullscreen")
}),d._initializers.initFullscreenTriggers=function(){return d.elem.rebind(document,"mozfullscreenchange",d._onFullscreenChange),d.elem.rebind(document,"webkitfullscreenchange",d._onFullscreenChange),d.elem.rebind(document,"MSFullscreenChange",d._onFullscreenChange),d.elem.rebind(document,"fullscreenchange",d._onFullscreenChange)
},d._destructors.destroyFullscreenTriggers=function(){return d.elem.unbind(document,"mozfullscreenchange",d._onFullscreenChange),d.elem.unbind(document,"webkitfullscreenchange",d._onFullscreenChange),d.elem.unbind(document,"MSFullscreenChange",d._onFullscreenChange),d.elem.unbind(document,"fullscreenchange",d._onFullscreenChange)
}
})(Wistia),function(b){return b.BandwidthTest=function(){function a(c){this.opt=c,this.opt=b.obj.merge({minKbps:2500,timeoutLength:4000,freshFor:3600000},this.opt),this.opt.uuid||(this.opt.uuid=b.seqId("bandwidth_test_"))
}return a.prototype.start=function(){var d,e=this;
return(d=this._testXhr)!=null&&d.abort(),this._testStart=(new Date).getTime(),this._testXhr=new XMLHttpRequest,this._testXhr.open("GET",this.testFileUrl(),!0),b.timeout(""+this.uuid+".cancel_bandwidth_test",function(){return e.trigger("timeout"),e.fail()
},this.opt.timeoutLength),this._testDataLoaded=0,this._onTestXhrProgress=function(c){return e._testDataLoaded=c.loaded,e.trigger("progress",c)
},this._testXhr.addEventListener("progress",this._onTestXhrProgress),this._onTestXhrLoaded=function(){return e.succeed()
},this._testXhr.addEventListener("load",this._onTestXhrLoaded),this._testXhr.send(null),this.trigger("started")
},a.prototype.fail=function(){return this._sampleKbps(),this._supportsHd=!1,this.saveResult(),this.trigger("failed"),this.end()
},a.prototype.succeed=function(){return this._sampleKbps(),this._supportsHd=!0,this.saveResult(),this.trigger("succeeded"),this.end()
},a.prototype._sampleKbps=function(){return this._testEnd=(new Date).getTime(),this._testTime=(this._testEnd-this._testStart)/1000,this._kbps=this._testDataLoaded*8/1000/this._testTime
},a.prototype.endEarly=function(){return this._supportsHd==null&&this._testDataLoaded!=null?(this._sampleKbps(),this._supportsHd=this._testTime>1?this._kbps>=this.opt.minKbps:!0,this.trigger("ended-early"),this.end()):(this.end(),this.trigger("ended-early"))
},a.prototype.end=function(){var e,g,f;
return this._onTestXhrLoaded&&(e=this._testXhr)!=null&&e.removeEventListener("load",this._onTestXhrLoaded),this._onTestXhrProgress&&(g=this._testXhr)!=null&&g.removeEventListener("progress",this._onTestXhrProgress),(f=this._testXhr)!=null&&f.abort(),this._testXhr=null,b.clearTimeouts(""+this.uuid+".cancel_bandwidth_test"),this.trigger("ended")
},a.prototype.testFileUrl=function(){return this.opt.testFileUrl||""+b.proto()+"//"+b.constant.embedHost+"/bandwidth_check.png?bust=20131016c"
},a.prototype.saveKey=function(){return this.opt.saveKey||"bandwidth_test"
},a.prototype.saveResult=function(){return b.localStorage(this.saveKey(),{updatedAt:(new Date).getTime(),supportsHd:this._supportsHd,clientKbps:this._kbps})
},a.prototype.savedResult=function(){return b.localStorage(this.saveKey())
},a.prototype.isFresh=function(){var d,c;
return d=(new Date).getTime()-(((c=this.savedResult())!=null?c.updatedAt:void 0)||0),d<this.opt.freshFor
},a.prototype.supportsHd=function(){return this._supportsHd||!1
},a
}(),b.mixin(b.BandwidthTest.prototype,b.bindable)
}(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(d){var c;
if(d.ExternalVideo){return
}return d.ExternalVideo=function(b){function a(){return c=a.__super__.constructor.apply(this,arguments),c
}return __extends(a,b),a.prototype.playerType="external",a.prototype.elem=function(){return document.getElementById(this.uuid)
},a.prototype.chromeElem=function(){return document.getElementById(""+this.uuid+"_external_player")
},a.prototype.createEmbedElem=function(){var e,f;
return f={id:""+this.uuid+"_external_player",style:{background:"transparent",display:"block",height:"100%",position:"relative",width:"100%"}},e={tagName:"a",href:this.sdAsset().url,id:this.uuid,target:"_parent",style:d.generate.relativeBlockCss(),alt:"Click to play video"},f.childNodes=[e],d.elem.fromObject(f)
},a.prototype.stillUrl=function(e){return e=d.obj.merge({playButton:!1},e),a.__super__.stillUrl.call(this,e)
},a.prototype.embed=function(){var e,g,f=this;
return this._currentAsset=this.sdAsset(),this.data.asset=this._currentAsset,this.placeEmbed(this.createEmbedElem()),this.elem().wistiaApi=this,this.bigPlayButton=(new d.Html5BigPlayButton(this)).initialize(),this.bigPlayButton.elem.style.pointerEvents="none",this.elem()&&d.elem.append(this.elem(),this.bigPlayButton.elem),this.still=(new d.Html5Still(this)).initialize(),this._opts.stillUrl=(e=this.still.thumbnail)!=null?(g=e.img)!=null?g.getAttribute("src"):void 0:void 0,this._opts.wmode!=="transparent"&&this.still.loaded(function(){var h;
return f.elem()&&d.elem.prepend(f.elem(),f.still.elem),(h=f.chromeElem())!=null?h.style.backgroundColor="#000":void 0
}),d.elem.bind(this.elem(),"click",function(){return f.trigger("play"),d.timeout(""+f.uuid+".fake_video_end",function(){return f.trigger("end"),f.trigger("afterend")
},500),!0
}),this.embedded(!0),this.checkForReady()
},a.prototype.checkForReady=function(){var e,f=this;
return this._checkDownState(),e=function(){return d.timeout(""+f.uuid+".async_ready",function(){return f._hasBeenReady=!0,f.ready(!0)
})
},this._hasBeenReady?e():this.publicApi.up(e)
},a.prototype.fit=function(){var e=this;
return a.__super__.fit.apply(this,arguments),this.embedded(function(){var f,g;
return(f=e.still)!=null&&f.fitStill(),(g=e.bigPlayButton)!=null?g.reorient():void 0
})
},a.prototype.play=function(){return this
},a.prototype.time=function(e){return e!=null?this:0
},a.prototype.pause=function(){return this
},a.prototype.volume=function(e){return e!=null?this:1
},a.prototype.bestAsset=function(){return this.sdAsset()
},a.prototype.sdAsset=function(){return this.iphoneAsset()||this.mp4Asset()
},a.prototype.mdAsset=function(){return this.iphoneAsset()||this.mp4Asset()
},a.prototype.hdAsset=function(){return this.iphoneAsset()||this.mp4Asset()
},a.prototype.initFrom=function(e){return d.elem.remove(e.wrapperElem),this.embed()
},a
}(d.Video)
})(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
},__slice=[].slice;
(function(b){if(b.Popover){return
}return b.Popover=function(){function a(d){var e;
this.video=d,this.fitVideo=__bind(this.fitVideo,this),this.show=__bind(this.show,this),this.showAndPlay=__bind(this.showAndPlay,this),this.hide=__bind(this.hide,this),this.fitOverlay=__bind(this.fitOverlay,this),this.fit=__bind(this.fit,this),this.setupThumbnailAfterMediaData=__bind(this.setupThumbnailAfterMediaData,this),this.info("init"),this._embedContainer=this.video._embedContainer,this._thumbContainer=b.elem.fromObject({id:""+b.seqId()+".thumb_container",style:{position:"relative"}}),b.elem.append(this.video.container,this._thumbContainer),e=this.video._gatherOptions(),this.info("opts",e),e.popoverContent==="thumbnail"||e.popoverContent==null?this.video.hasData(this.setupThumbnailAfterMediaData):(this.info("init with bare html",this.video._startingHtml),this._thumbContainer.innerHTML=this.video._startingHtml),this.resizeToContainer(),this.hide(!0),this.setupBindings()
}return a.prototype._log=function(){var f,i,h,g;
return i=arguments[0],f=2<=arguments.length?__slice.call(arguments,1):[],b[i].apply(b,["popover",((h=this.video)!=null?h.hashedId():void 0)||"no hashedId",(g=this._thumbContainer)!=null?g.id:void 0].concat(__slice.call(f)))
},a.prototype.error=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["error"].concat(__slice.call(c)))
},a.prototype.warn=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},a.prototype.notice=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},a.prototype.info=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["info"].concat(__slice.call(c)))
},a.prototype.debug=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["debug"].concat(__slice.call(c)))
},a.prototype.log=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["log"].concat(__slice.call(c)))
},a.prototype.setupThumbnailAfterMediaData=function(){return this.info("setupThumbnailAfterMediaData"),this.thumbnail=new b.Thumbnail(this._thumbContainer,{tabbable:!0,fitStrategy:"cropfill",onActivate:this.showAndPlay,images:this.video._impl.thumbnailAssets(),bigPlayButton:b.util.notSetOrTrue(this.video._opts.playButton)?{color:this.video.playerColor(),tabbable:!0}:!1}),b.elem.style(this.thumbnail.elem,{cursor:"pointer"}),this.resizeToContainer(),this.monitor()
},a.prototype.monitor=function(){var c=this;
return this.info("monitor container size"),this._lastWidth=this.containerWidth(),this._lastHeight=this.containerHeight(),b.eventLoop.add(""+this.video.uuid+"_popover.watch_popover_thumb_elem",300,function(){if(c._lastWidth!==c.containerWidth()||c._lastHeight!==c.containerHeight()){return c.resizeToContainer(),c._lastWidth=c.containerWidth(),c._lastHeight=c.containerHeight()
}})
},a.prototype.resizeToContainer=function(){var c;
return b.elem.style(this._thumbContainer,{height:""+this.containerHeight()+"px",width:""+this.containerWidth()+"px"}),(c=this.thumbnail)!=null?c.fit():void 0
},a.prototype.containerWidth=function(){return b.elem.width(this.video.container)
},a.prototype.containerHeight=function(){return b.elem.height(this.video.container)
},a.prototype.setupBindings=function(){var c=this;
return this.video.videoFoam()||b.elem.bind(window,"resize",this.fit),this.video.bind("widthchange",this.fit),this.video.bind("heightchange",this.fit),this._showIfHidden==null&&(this._showIfHidden=function(){if(!c._visible){return c.show()
}}),this.video.bind("play",this._showIfHidden)
},a.prototype.unbindAll=function(){return b.elem.unbind(window,"resize",this.fit),this._hideOnClick&&b.elem.unbind(this._overlay,"click",this._hideOnClick),this._hideOnEscape&&b.elem.unbind(document,"keyup",this._hideOnEscape),this.video.unbind("widthchange",this.fit),this.video.unbind("heightchange",this.fit),this._showIfHidden&&this.video.unbind("play",this._showIfHidden),b.elem.unbindAllInside(this._thumbContainer)
},a.prototype.remove=function(){var c;
return(c=this.thumbnail)!=null&&c.destroy(),this.unbindAll(),b.eventLoop.remove(""+this.video.uuid+"_popover"),b.clearTimeouts(""+this.video.uuid+"_popover"),b.elem.remove(this._thumbContainer),b.elem.remove(this._overlay),b.elem.remove(this._captionElem),this._thumbContainer=this._overlay=this._captionElem=this.thumbnail=null
},a.prototype.fit=function(){return this.fitOverlay(),this.fitVideo()
},a.prototype.bestOverlayHeight=function(){return Math.max(b.elem.height(document),b.elem.height(window))
},a.prototype.bestOverlayWidth=function(){return Math.max(b.elem.width(document),b.elem.width(window))
},a.prototype.createOverlay=function(){var c=this;
return this.destroyOverlay(),this.info("createOverlay"),this._overlay=b.elem.fromObject({id:""+this._embedContainer.id+"_overlay",style:{background:"rgba(0,0,0,.7)",height:""+this.bestOverlayHeight()+"px",left:0,opacity:0,position:"absolute",top:0,width:""+this.bestOverlayWidth()+"px",zIndex:10000}}),b.elem.append(document.body,this._overlay),this._blockClick=!0,this._hideOnClick==null&&(this._hideOnClick=function(){c.info("hideOnClick",c._blockClick);
if(!c._blockClick){return c.hide()
}}),b.elem.rebind(this._overlay,"click",this._hideOnClick),b.timeout(""+this.video.uuid+".popover.allow_click",function(){return c._blockClick=!1
},600)
},a.prototype.destroyOverlay=function(){return this.info("destroyOverlay"),b.elem.remove(this._overlay),this._overlay=null
},a.prototype.fitOverlay=function(){if(!this._visible){return
}if(!this._overlay){return
}return b.elem.style(this._overlay,{height:""+this.bestOverlayHeight()+"px",width:""+this.bestOverlayWidth()+"px"})
},a.prototype.hide=function(g){var k,j,i,h=this;
return g==null&&(g=!1),this.info("hide"),this._visible=!1,((i=this.video._opts)!=null?i.popoverResume:void 0)&&this.video.time()>0&&this.video._saveState(),j=function(){return b.elem.style(h._embedContainer,{boxShadow:"",left:"-99999px",position:"absolute",top:0}),h.destroyOverlay(),h.destroyCaption()
},this.video.pause(),b.timeout(""+this.video.uuid+".delayed_rebuild",function(){return h.video.rebuild()
},600),this.video.embedded(function(){return h.video._pauseEventLoop()
}),this.video.trigger("popoverhide"),g===!0?j():(k=this.animateArgs(),k.push(j),this.animateClose.apply(this,k))
},a.prototype.animateClose=function(f,i,h){var g=this;
f==null&&(f=!0),this.info("animateClose",f,i),this._overlay&&(f||b.elem.style(this._overlay,{opacity:0}),setTimeout(function(){return b.elem.animate(g._overlay,{opacity:0})
},1)),f||b.elem.style(this._embedContainer,{opacity:0}),setTimeout(function(){return b.elem.animate(g._embedContainer,{opacity:0,transform:g.transformProp(i)},{callback:h})
},1);
if(this._captionElem){return f||b.elem.style(this._captionElem,{opacity:0}),setTimeout(function(){return b.elem.animate(g._captionElem,{opacity:0,transform:g.transformProp(i)})
},1)
}},a.prototype.showAndPlay=function(){return this.info("showAndPlay"),this.show(),this.video.play()
},a.prototype.transformProp=function(c){return c==="up"?"translate(0, "+Math.round(this.fullHeight()/6)+"px)":c==="down"?"translate(0, "+-Math.round(this.fullHeight()/6)+"px)":c==="left"?"translate("+Math.round(this.fullWidth()/6)+"px, 0)":c==="right"?"translate("+-Math.round(this.fullWidth()/6)+"px, 0)":""
},a.prototype.animateOpen=function(e,g){var f=this;
e==null&&(e=!0),this.info("animateOpen",e,g),e||b.elem.style(this._overlay,{opacity:1}),e||b.elem.style(this._embedContainer,{opacity:1}),b.elem.style(this._embedContainer,{transform:this.transformProp(g)}),setTimeout(function(){return b.elem.animate(f._embedContainer,{opacity:1,transform:"translate(0px, 0px)"}),b.elem.animate(f._overlay,{opacity:1})
},1);
if(this._captionElem){return e||b.elem.style(this._captionElem,{opacity:1}),b.elem.style(this._captionElem,{transform:this.transformProp(g)}),setTimeout(function(){return b.elem.animate(f._captionElem,{opacity:1,transform:"translate(0px, 0px)"})
},1)
}},a.prototype.animateArgs=function(){return b.detect.browser.msie&&(b.detect.browser.version<9||b.detect.browser.quirks)?[!1,"none"]:this.video._opts.popoverAnimation==="fade"?[!0,"none"]:this.video._opts.popoverAnimation==="slide"?this.slideOrFadeBasedOnPlayerType():this.video._opts.popoverAnimation==="none"?[!1,"none"]:this.slideOrFadeBasedOnPlayerType()
},a.prototype.slideOrFadeBasedOnPlayerType=function(){return this.video.playerType==="flash"?[!0,"none"]:[!0,"up"]
},a.prototype.show=function(){var d,c=this;
return this.info("show"),this._visible=!0,this.createOverlay(),this.applyVisibleStyles(),this.addCaption(),this.fitVideo(),this.animateOpen.apply(this,this.animateArgs()),this.setupVisibleBindings(),((d=this.video._opts)!=null?d.popoverResume:void 0)&&this.video.resume(),this.video.embedded(function(){return c.video._unpauseEventLoop()
}),this.video.trigger("popovershow")
},a.prototype.setupVisibleBindings=function(){var c=this;
return this._hideOnEscape==null&&(this._hideOnEscape=function(d){if(d.keyCode===27){return c.info("hide on escape"),c.hide(),b.elem.unbind(document,"keyup",c._hideOnEscape)
}}),b.elem.rebind(document,"keyup",this._hideOnEscape)
},a.prototype.applyVisibleStyles=function(){var i,p,n,m,l,k,j;
return n=this.video._opts.popoverBorderWidth||0,i=(new b.Color(this.video._opts.popoverBorderColor||"#ffffff")).toHex(),p=this.video._opts.popoverBorderRadius||0,l=this.video._opts.popoverBoxShadowBlur!=null?this.video._opts.popoverBoxShadowBlur:50,j=this.video._opts.popoverBoxShadowSpread!=null?this.video._opts.popoverBoxShadowSpread:5,k=this.video._opts.popoverBoxShadow!=null?this.video._opts.popoverBoxShadow:!0,m=k?"0 0 "+l+"px "+j+"px rgba(0,0,0,.95)":"",b.elem.style(this._embedContainer,{border:""+n+"px solid #"+i,borderRadius:""+p+"px",boxShadow:m,left:0,opacity:0,position:"absolute",top:0,zIndex:10001})
},a.prototype.addCaption=function(){if(!this.video._opts.popoverCaption&&!this.video._opts.popoverCaptionContainer){return
}this.destroyCaption(),this.info("addCaption"),this._captionElem=b.elem.fromObject({id:""+this.video.uuid+"_popover_caption",style:{color:"#ffffff",fontFamily:"Verdana, Geneva, sans-serif",fontSize:"14px",left:0,opacity:0,position:"absolute",top:0,width:0,zIndex:10001}}),b.elem.append(document.body,this._captionElem);
if(this.video._opts.popoverCaption){return this.info("build new caption with content",this.video._opts.popoverCaption),this._captionContainer?this._captionContainer.style.display="block":this._captionContainer=b.elem.fromObject({innerHTML:this.video._opts.popoverCaption,style:{padding:"10px 0 0 0"}}),b.elem.append(this._captionElem,this._captionContainer)
}if(this.video._opts.popoverCaptionContainer){return this.info("use caption container",this.video._opts.popoverCaptionContainer),this._captionContainer?this._captionContainer.style.display="block":this._captionContainer=document.getElementById(this.video._opts.popoverCaptionContainer),b.elem.style(this._captionContainer,{display:"block"}),b.elem.append(this._captionElem,this._captionContainer)
}},a.prototype.destroyCaption=function(){return this.info("destroyCaption"),this._captionContainer&&(b.elem.style(this._captionContainer,{display:"none"}),b.elem.append(document.body,this._captionContainer)),b.elem.remove(this._captionElem),this._captionElem=null
},a.prototype.fitCaption=function(){if(!this._captionElem){return
}return b.elem.style(this._captionElem,{left:""+parseInt(b.elem.style(this._embedContainer,"left"),10)+"px",top:""+(parseInt(b.elem.style(this._embedContainer,"top"),10)+this.fullHeight())+"px",width:""+this.fullWidth()+"px"})
},a.prototype.height=function(c){return c!=null?(b.elem.style(this.video.container,{height:""+c+"px"}),this.resizeToContainer(),this):b.elem.height(this.video.container)
},a.prototype.width=function(c){return c!=null?(b.elem.style(this.video.container,{width:""+c+"px"}),this.resizeToContainer(),this):b.elem.width(this.video.container)
},a.prototype.fullWidth=function(){return this.video.width()+(this.video._opts.popoverBorderWidth||0)*2
},a.prototype.fullHeight=function(){return this.video.height()+(this.video._opts.popoverBorderWidth||0)*2
},a.prototype.fitVideo=function(){var f,i,h,g;
if(!this._visible){return
}return g=b.elem.width(window),h=b.elem.height(window),f=b.util.scrollLeft()+Math.round((g-this.fullWidth())/2),i=b.util.scrollTop()+Math.round((h-this.fullHeight())/2),f=Math.max(0,f),i=Math.max(0,i),b.elem.style(this._embedContainer,{left:""+f+"px",top:""+i+"px"}),this.fitCaption()
},a
}()
})(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
};
(function(b){if(b.VideoTracker2){return
}return b.VideoTracker2=function(){function a(d){var e=this;
this.publicApi=d,this.resendAllFailedEvents=__bind(this.resendAllFailedEvents,this),this.retrySendingFailedEvent=__bind(this.retrySendingFailedEvent,this),this.eventQueue=[],this.clockStart=(new Date).getTime(),this.initializedOnce=!1,this.monitoring=!1,this.publicApi.hasData(function(){e.params=b.extend({transmitInterval:(e.publicApi._mediaData.trackingTransmitInterval||10)*1000},e.publicApi._opts),!!e.publicApi._attrs.shouldTrack
}),this
}return a.prototype.conversions={"missing-conversion":0,"pre-roll-email":1,"post-roll-email":2,"mid-roll-email":3,"post-roll-click":4,"mid-roll-click":5,"non-video":6},a.prototype._getAccountKey=function(){return this.publicApi._opts.accountKey||this.publicApi._mediaData.accountKey
},a.prototype._data=function(){var d,e;
return e={account_key:this._getAccountKey(),session_id:this.visitorKey(),media_id:this.publicApi._mediaData.mediaKey,event_key:this.eventKey(),media_duration:parseFloat(this.publicApi._mediaData.duration),visitor_version:this._getVisitorVersion(),referrer:this.publicApi._attrs.pageUrl,event_details:this.eventQueue},this.publicApi.email()&&(e.email=this.publicApi.email()),d=this.publicApi.foreignData(),d&&d.page_name!=null&&(d.page_name=d.page_name.replace(/'/g,'\\"'),e.foreignData=d),this.params.conversionType&&(e.conversion_type=this.conversions[this.params.conversionType]),this.params.conversionData&&(e.conversion_data=this.params.conversionData),b.JSON.stringify(e)
},a.prototype._secondsSinceTime=function(c){return c?Math.round(((new Date).getTime()-c)/1000):null
},a.prototype.nullToNone=function(c){return c===null?"none":c
},a.prototype.lastLoadForAccount=function(){return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("accounts_loaded."+this._getAccountKey())))
},a.prototype.lastLoadForMedia=function(){return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("medias_loaded."+this.publicApi.hashedId())))
},a.prototype.lastPlayForAccount=function(){return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("accounts_played."+this._getAccountKey())))
},a.prototype.lastPlayForMedia=function(){return this.nullToNone(this._secondsSinceTime(Wistia.localStorage("medias_played."+this.publicApi.hashedId())))
},a.prototype.recordLoad=function(){return this.publicApi.info("recordLoad"),Wistia.localStorage("accounts_loaded."+this._getAccountKey(),(new Date).getTime()),Wistia.localStorage("medias_loaded."+this.publicApi.hashedId(),(new Date).getTime())
},a.prototype.recordPlay=function(){return this.publicApi.info("recordPlay"),Wistia.localStorage("accounts_played."+this._getAccountKey(),(new Date).getTime()),Wistia.localStorage("medias_played."+this.publicApi.hashedId(),(new Date).getTime())
},a.prototype.isValidKey=function(c){return(c!=null?c.length:void 0)>25&&/^[a-z0-9_\-\.]+$/i.test(c)
},a.prototype._saveVisitorVersion=function(c){c==null&&(c=1);
if(Wistia.localStorage("visitor_version")==null){return Wistia.localStorage("visitor_version",c)
}},a.prototype._getVisitorVersion=function(){var c;
return c=Wistia.localStorage("visitor_version"),c?c:(this._saveVisitorVersion(0),0)
},a.prototype.reset=function(){return this.stopMonitoring(),this.initializedOnce=!1,this._eventKey=null
},a.prototype.initialize=function(){return this.initializedOnce||(this.publicApi.info("video tracker initialize"),this._lastLoadForAccount=this.lastLoadForAccount(),this._lastLoadForMedia=this.lastLoadForMedia(),this._lastPlayForAccount=this.lastPlayForAccount(),this._lastPlayForMedia=this.lastPlayForMedia(),this._failedEventsQueue=[],this._retryTimer=null,this._retryInterval=1000,this.initializedOnce=!0,this.log("initialized"),this.recordLoad(),this.debounceTransmit()),this
},a.prototype.monitor=function(){var c=this;
return this.publicApi.embedded(function(){return c.stopMonitoring(),c.publicApi.info("_tracker.monitor"),c.initialize(),c.onPlay==null&&(c.onPlay=function(){c.log("play"),c.recordPlay();
if(!c._played){return c._played=!0,c.debounceTransmit()
}}),c.onPause==null&&(c.onPause=function(){if(Math.abs(c.publicApi.duration()-c.publicApi.time())>0.3){return c.log("pause")
}}),c.onEnd==null&&(c.onEnd=function(){return c.log("end"),c.transmit()
}),c.onSeek==null&&(c.onSeek=function(d,e){if(Math.abs(e-d)>=5){return c.log("seek")
}}),c.monitoring=!0,c.publicApi.rebind("play",c.onPlay),c.publicApi.rebind("pause",c.onPause),c.publicApi.rebind("end",c.onEnd),c.publicApi.rebind("seek",c.onSeek),c.publicApi.state()==="playing"&&c.onPlay(),b.timeout(""+c.publicApi.uuid+".start_tracking_timeout",function(){return c.publicApi.info("_tracker start tracking_loop"),b.eventLoop.add(""+c.publicApi.uuid+".tracking_loop",c.params.transmitInterval,function(){return c.publicApi.state()==="playing"&&c.log("update"),c.transmit()
})
},Math.random()*c.params.transmitInterval+1000)
})
},a.prototype.stopMonitoring=function(){this.publicApi.info("_tracker.stopMonitoring"),this.monitoring=!1,this.onPlay&&this.publicApi.unbind("play",this.onPlay),this.onPause&&this.publicApi.unbind("pause",this.onPause),this.onEnd&&this.publicApi.unbind("end",this.onEnd);
if(this.onSeek){return this.publicApi.unbind("seek",this.onSeek)
}},a.prototype.distilleryUrl=function(){return this.publicApi._opts.distilleryUrl||this.publicApi._mediaData.distilleryUrl
},a.prototype.sendToDistillery=function(e){var g,f=this;
return g=30000,b.remote.script(""+this.distilleryUrl()+"?data="+encodeURIComponent(e),null,g).loaded(function(d,i){var h;
if(d==="success"){return f._retryInterval=1000,f.resendAllFailedEvents()
}if(i==="error"){return f._failedEventsQueue.push(e),f._retryTimer&&(clearTimeout(f._retryTimer),h=60000,f._retryInterval=Math.min(f._retryInterval*2,h)),f._retryTimer=setTimeout(f.retrySendingFailedEvent,f._retryInterval)
}})
},a.prototype.retrySendingFailedEvent=function(){return this.sendToDistillery(this._failedEventsQueue.shift())
},a.prototype.resendAllFailedEvents=function(){var s,r,q,p,n,m,l,k,j=this;
q=this._failedEventsQueue.length,clearTimeout(this._retryTimer);
if(q>0){p=350,k=this._failedEventsQueue,n=function(d,c){return setTimeout(function(){return j.sendToDistillery(d)
},p*c)
};
for(r=m=0,l=k.length;
m<l;
r=++m){s=k[r],n(s,r)
}return this._failedEventsQueue=[]
}return
},a.prototype.transmit=function(d){var e=this;
d==null&&(d={});
if(!this.publicApi._attrs.shouldTrack){return
}return b.visitorKey.ready(function(){var f,c;
if(e.eventQueue.length>0||d.force){f=e._data(),e.publicApi.info("_tracker.transmit",f),e.publicApi.trigger("transmit-stats",f),e.sendToDistillery(b.base64.encode(f)),e.eventQueue=[]
}if(!b.visitorKey._reported){b.visitorKey._reported=!0,c=b.visitorKey.origin(),(c==="new"||c==="timeout")&&b.Metrics.videoCount(e.publicApi,"player/visitor_key/new",1,{visitor_key:b.visitorKey.value(),visitor_key_origin:c}),c==="timeout"&&b.Metrics.videoCount(e.publicApi,"player/visitor_key/shim_timeout",1,{visitor_key:b.visitorKey.value()}),c==="suggested"&&b.Metrics.videoCount(e.publicApi,"player/visitor_key/suggested",1,{visitor_key:b.visitorKey.value()});
if(/-conflict$/.test(c)){return b.Metrics.videoCount(e.publicApi,"player/visitor_key/conflict",1,{visitor_key:b.visitorKey.value()})
}}})
},a.prototype.debounceTransmit=function(){var c=this;
return b.timeout(""+this.publicApi.uuid+".transmit_play_data",function(){return c.transmit()
},350)
},a.prototype.log=function(f,e,h){var g;
if(!this.publicApi._attrs.shouldTrack){return
}return this.publicApi.info("_tracker.log",f,e,h),f==="conversion"?(this.params.conversionType=e,this.params.conversionData=h,this.transmit({force:!0})):(g={key:f,value:this.timeInVideo(),timeDelta:this.timeDelta()},f==="initialized"?(g.lastAccountInstance=this._lastLoadForAccount,g.lastMediaInstance=this._lastLoadForMedia):f==="play"&&(g.lastAccountInstance=this._lastPlayForAccount,g.lastMediaInstance=this._lastPlayForMedia),this.publicApi.debug("_tracker.log",g),this.eventQueue.push(g))
},a.prototype.logConversionOpportunity=function(d){var e;
if(!this.publicApi._attrs.shouldTrack){return
}return d.co_key!=null?(e={key:"conversion",value:d,timeDelta:this.timeDelta()},this.publicApi.info("_tracker.logConversionOpportunity",d),this.eventQueue.push(e)):b.Metrics.videoCount(this.publicApi,"player/no-co-key",1)
},a.prototype.logCaptionSelection=function(d){var c;
if(!this.publicApi._attrs.shouldTrack){return
}if(!d.caption_key){return
}return c={key:"caption",value:d,timeDelta:this.timeDelta()},this.publicApi.info("_tracker.logCaptionSelection",d),this.eventQueue.push(c)
},a.prototype.timeInVideo=function(){var c;
return c=this.publicApi.time(),c==null&&(this.publicApi.state()==="beforeplay"?c=0:c=this.publicApi.duration()),c.toFixed(1)
},a.prototype.timeDelta=function(){return(new Date).getTime()-this.clockStart
},a.prototype.visitorKey=function(){return b.visitorKey.ready()?b.visitorKey.value():null
},a.prototype.eventKey=function(){return this.isValidKey(this._eventKey)?this._eventKey:(this._eventKey=b.uniqId("v20150225_"),this._eventKey)
},a
}()
})(Wistia),Wistia.extend({base64:{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(u){var t,s,r,q,p,n,m,l,k;
l=0,k="";
while(l<u.length){t=u.charCodeAt(l++),s=u.charCodeAt(l++),r=u.charCodeAt(l++),q=t>>2,p=(t&3)<<4|s>>4,n=(s&15)<<2|r>>6,m=r&63,isNaN(s)?n=m=64:isNaN(r)&&(m=64),k=k+this._keyStr.charAt(q)+this._keyStr.charAt(p)+this._keyStr.charAt(n)+this._keyStr.charAt(m)
}return k
}}});
var __slice=[].slice;
(function(b){if(b.remote){return
}return b.constant={appHost:"app.wistia.com",sslAppHost:"app.wistia.com",embedHost:"fast.wistia.com",sslEmbedHost:"fast.wistia.com",oembedHost:"get-embed.wistia.com",externalEmbedHost:"fast.wistia.net",externalSslEmbedHost:"fast.wistia.net",assetHost:"embed.wistia.com",assetSslHost:"embed-ssl.wistia.com",freeAssetHost:"embed-0.wistia.com",freeAssetSslHost:"embed-ssl.wistia.com",metricsHost:"pipedream.wistia.com"},b.remote={},b.remote.assetUrlWithCorrectHost=function(a,f,e){e==null&&(e=b.url.proto()),f=b.url.parse(f),f.protocol=e;
if(f.host===b.constant.assetHost||f.host===b.constant.freeAssetHost||f.host===b.constant.assetSslHost||f.host===b.constant.freeAssetSslHost){f.host=a.branding?e==="https:"?b.constant.freeAssetSslHost:b.constant.freeAssetHost:e==="https:"?b.constant.assetSslHost:b.constant.assetHost
}return f.absolute()
},b.remote.embedHost=function(a){return a==null&&(a=window.location.protocol),a==="https:"?b.constant.sslEmbedHost:b.constant.embedHost
},b.remote.externalEmbedHost=function(a){return a==null&&(a=window.location.protocol),a==="https:"?b.constant.externalSslEmbedHost:b.constant.externalEmbedHost
},b.remote.appHost=function(a){return a==null&&(a=window.location.protocol),a==="https:"?b.constant.sslAppHost:b.constant.appHost
},b.remote.assetHost=function(a){return a==null&&(a=window.location.protocol),a==="https:"?b.constant.assetSslHost:b.constant.assetHost
},b.remote.script=function(A,z,y){var x,w,v,u,t,s,r,q,p,a;
return y==null&&(y=8000),u=new b.StopGo,s=new b.StopGo,p=document.createElement("script"),p.src=A,p.async=!0,p.type="text/javascript",a=p.id=b.seqId(),w=null,v=!1,x=function(){return clearTimeout(w),clearTimeout(t),w=setTimeout(function(){var c;
if(c=document.getElementById(a)){return c.parentNode.removeChild(c),c.onreadystatechange=p.onload=p.onerror=null
}},500)
},r=function(c){return c==null&&(c="error"),function(d){return v=!0,typeof z=="function"&&z(),u(!0,"failed",c),x(),s.go()
}
},q=function(){var c;
c=p.readyState,!v&&(!c||/loaded|complete/.test(c))&&(v=!0,typeof z=="function"&&z(),u(!0,"success"),x())
},t=setTimeout(r("timeout"),y),p.onerror=r(),p.onreadystatechange=p.onload=q,b.elem.append(document.body||document.head,p),{loaded:u,error:function(){return s
}}
},b.remote.scripts=function(){var y,x,w,v,u,t,s,r,q,p,n,a;
s=1<=arguments.length?__slice.call(arguments,0):[],s[0] instanceof Array&&(x=s[1],s=s[0],x&&(s=s.concat(x))),s[s.length-1]==="require"?(v=b.remote.requireScript,s=s.slice(0,-1)):v=b.remote.script,s=this.scriptInputsToHash(s),u=[],y=[],q=function(e,i,h){var f;
return(f=b.StopGo).when.apply(f,u).run(function(){var c,d;
if(e.fn){return d=function(){var g;
try{return e.fn()
}catch(j){return g=j,typeof console!="undefined"&&console!==null&&console.log(g.message),typeof console!="undefined"&&console!==null?console.log(g.stack):void 0
}finally{i.go(),h.go()
}},e.async?setTimeout(d,1):d()
}if(e.src){return c=function(){return v(e.src).loaded(function(g){return h.go(),i.go()
})
},e.async?(setTimeout(c,1),i.go()):setTimeout(c,1)
}})
};
for(p=0,n=s.length;
p<n;
p++){t=s[p],w=new b.StopGo,r=new b.StopGo,q(t,w,r),u.push(w),y.push(r)
}return{loaded:(a=b.StopGo).when.apply(a,y)}
},b.remote.require=function(){var a,f,e;
return f=1<=arguments.length?__slice.call(arguments,0):[],a=(e=b.remote).scripts.apply(e,__slice.call(f).concat(["require"])),a.wait=function(d){return a.loaded(d),{require:function(){var g;
return g=1<=arguments.length?__slice.call(arguments,0):[],a.loaded(function(){var c;
return(c=b.remote).require.apply(c,g)
})
}}
}
},b.remote.scriptInputsToHash=function(a){var j,i,h,g;
g=[];
for(i=0,h=a.length;
i<h;
i++){j=a[i],typeof j=="string"?g.push({src:j,async:!1}):b.obj.isObject(j)?g.push(j):g.push({fn:j,async:!1})
}return g
},b.remote.ajaxDefaults={type:"GET",contentType:"",headers:void 0,data:void 0,dataType:void 0,timeout:0,success:void 0,error:void 0,complete:void 0},b.remote.get=function(a,d){return b.remote.ajax(a,b.obj.merge({},d,{type:"GET",data:void 0}))
},b.remote.head=function(a,d){return b.remote.ajax(a,b.obj.merge({},d,{type:"HEAD",data:void 0}))
},b.remote.post=function(a,d){return b.remote.ajax(a,b.obj.merge({},{contentType:"application/x-www-form-urlencoded"},d,{type:"POST"}))
},b.remote.ajax=function(D,C){var B,A,z,y,x,w,v,u,t,s,r,q,a;
v=b.obj.merge({},b.remote.ajaxDefaults,C),u=b.url.parse(D),u.protocol||(u.protocol=window.location.protocol||"http:"),s=u.absolute(),u=void 0,r=this._createXMLHTTPObject(s);
if(!r){v.error.call(null,r,"error","Could not create XMLHttpRequest"),v.complete.call(null,r,"error");
return
}y=window.XDomainRequest!=null&&r instanceof window.XDomainRequest,a=!1,q=!1,A=function(f,e,h){var g;
return a||(g=v.error)!=null&&g.call(null,f,e,h),a=!0
},t=function(f,e,h){var g;
return a||(g=v.success)!=null&&g.call(null,f,e,h),a=!0
},B=function(e,d){var f;
return q||(f=v.complete)!=null&&f.call(null,e,d),e.onerror=e.ontimeout=e[y?"onload":"onreadystatechange"]=null,q=!0
},r.open(v.type,s,!0),w=function(){var d,g;
if(r.status!=null&&r.status>=200&&r.status<300||r.status===304){if(v.dataType==="json"&&typeof r.response!="object"){try{g=b.JSON.parse(r.responseText),t(g,r.statusText,r)
}catch(e){d=e,A(r,"parseerror",d)
}}else{t(r.response||r.responseText,r.statusText,r)
}}else{A(r,"error",r.statusText)
}return B(r,r.statusText)
},x=function(d,c){return A(r,d,c),B(r,d)
},v.timeout&&(r.timeout=v.timeout),v.dataType!=null&&(r.responseType=v.dataType),v.contentType&&typeof r.setRequestHeader=="function"&&r.setRequestHeader("Content-Type",v.contentType);
for(z in v.headers){typeof r.setRequestHeader=="function"&&r.setRequestHeader(z,v.headers[z])
}if(y){if(v.headers!=null){return x("error","custom headers disallowed for XDomainRequest")
}r.onload=function(){return r.status=200,r.statusText="OK",w()
},r.onerror=function(){return x("error","error")
},r.ontimeout=function(){return x("timeout","timeout")
}
}else{r.onreadystatechange=function(){if(r.readyState===4){return w()
}},r.onerror=function(){return x("error","error")
},r.ontimeout=function(){return x("timeout","timeout")
}
}return r.send(v.data),r
},b.remote._XMLHttpFactories=[function(){var a,d;
return a=d=void 0,function(h){var g,c;
if(window.XDomainRequest==null){return
}return a==null&&(a=window.location.href),d==null&&(d=b.url.parse(a.toLowerCase())||{}),c=b.url.parse(h.toLowerCase())||{},g=!1,g||(g=d.protocol!==c.protocol),g||(g=d.host!==c.host),g?new window.XDomainRequest:null
}
}(),function(){return new XMLHttpRequest
},function(){return new ActiveXObject("Microsoft.XMLHTTP")
}],b.remote._createXMLHTTPObject=function(j){var i,q,p,n,m,l;
p=void 0,l=this._XMLHttpFactories;
for(n=0,m=l.length;
n<m;
n++){q=l[n];
try{p=q(j)
}catch(k){i=k;
continue
}if(!!p){break
}}return p
},b.remote.media=function(a,h){var g,f;
return b.mediaFromCache(a)?(b.info("W.remote.media",a,"from local cache"),g="remote-media."+a+"."+b.seqId(),b.timeout(g,function(){return h(b.mediaFromCache(a))
}),g):(b.info("W.remote.media",a,"fetching"),f=""+(location.protocol==="https:"?"https:":"http:")+"//"+b.constant.embedHost+"/embed/medias/"+a+".json",b.remote.fetch(f,{},function(c){c.error?(b.info("W.remote.media",a,"error",c),b.cacheMedia(a,c),h(c)):(b.cacheMedia(a,c.media),b.info("W.remote.media",a,"responded",c.media),h(c.media))
},{onerror:function(){window.console&&console.log("Timed out fetching "+f)
},timeout:10000}))
},b.cacheMedia=function(a,d){return b.data(["remote-media",a],d)
},b.mediaFromCache=function(a){return b.data(["remote-media",a])
},b.remote.playlist=function(a,f){var e;
b.data(["remote-playlist",a])?b.timeout("remote-playlist."+a+"."+b.seqId(),function(){return f(b.data(["remote-playlist",a]))
}):(e=""+(location.protocol==="https:"?"https:":"http:")+"//"+b.constant.embedHost+"/embed/playlists/"+a+".json",b.remote.fetch(e,{},function(c){b.data(["remote-playlist",a],c),f(c)
},{onerror:function(){window.console&&console.log("Timed out fetching "+e)
},timeout:10000}))
},b.remote.fetch=function(a,j,i,h){var g;
h==null&&(h={}),h.timeout||(h.timeout=5000),h.onerror||(h.onerror=function(){}),g=setTimeout(h.onerror,h.timeout),b.jsonp.get(a,j,function(c){clearTimeout(g),i&&i(c)
})
}
})(Wistia),Wistia.jsonp||(Wistia.jsonp=function(){function k(b){var f=document.createElement("script"),e=!1;
f.src=b,f.async=!0,f.onload=f.onreadystatechange=function(){!e&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(e=!0,f.onload=f.onreadystatechange=null,f&&f.parentNode&&f.parentNode.removeChild(f))
},h||(h=document.getElementsByTagName("head")[0]),h.appendChild(f)
}function j(a,e,d){n="?",e=e||{};
for(m in e){e.hasOwnProperty(m)&&(n+=encodeURIComponent(m)+"="+encodeURIComponent(e[m])+"&")
}var c="wistiajson"+ ++i;
return l[c]=function(g){d(g);
try{delete l[c]
}catch(f){}l[c]=null
},k(a+n+"callback="+c),c
}var i=0,h,n,m,l=this;
return{get:j}
}());
var __slice=[].slice;
(function(b){return b.Metrics||(b.Metrics={videoCount:function(f,e,h,g){return h==null&&(h=1),this.videoSend(f,"count",e,h,g)
},videoSample:function(f,e,h,g){return this.videoSend(f,"sample",e,h,g)
},videoSend:function(a,l,k,j,i){var h=this;
return i==null&&(i={}),typeof a.hasData=="function"?a.hasData(function(){var A,z,y,x,w,v,g,f,e,d,c,D,C,B;
A=(typeof a.bandwidthTest=="function"?a.bandwidthTest().savedResult():void 0)||{},i=b.obj.merge({location:(typeof location!="undefined"&&location!==null?(z=location.protocol)!=null?z.length:void 0:void 0)&&(typeof location!="undefined"&&location!==null?(y=location.hostname)!=null?y.length:void 0:void 0)?""+location.protocol+"//"+location.hostname:null,agent:navigator.userAgent,account_key:(g=a._mediaData)!=null?g.accountKey:void 0,at:a.time(),video_id:a.hashedId(),embed_type:a.playerType,duration:a.duration(),client_kbps:A.clientKbps,supports_hd:A.supportsHd,autoplay:(f=a.params)!=null?!!f.autoPlay:!!void 0,in_iframe:top!==self,device_pixel_ratio:window.devicePixelRatio,window_width:b.elem.width(window),window_height:b.elem.height(window),video_width:a.videoWidth(),video_height:a.videoHeight(),visitor_key:(e=a._tracker)!=null?e.visitorKey():void 0,event_key:(d=a._tracker)!=null?d.eventKey():void 0,event_time_delta:(c=a._tracker)!=null?c.timeDelta():void 0,connection_type:h.connectionType()},i),/romulus|html5/.test(a.playerType)&&(b.detect.trident?i.errorState=(D=a.elem())!=null?(C=D.error)!=null?C.code:void 0:void 0:i.errorState=(B=a.elem())!=null?B.error:void 0),a._cacheStatus!=null&&(i.cache_status=a._cacheStatus),a._assetServer!=null&&(i.asset_server=a._assetServer),a._cacheHit!=null&&(i.cache_hit=a._cacheHit),a.inFullscreen&&(i.in_fullscreen=a.inFullscreen());
if((x=a.data)!=null?x.asset:void 0){i.asset_type=a.data.asset.type
}return((w=a.videoElem)!=null?(v=w.buffered)!=null?v.length:void 0:void 0)>0&&(i.bufferedFrom0=a.videoElem.buffered.end(0)),a._timeToFirstByte!=null&&(i.time_to_first_byte=a._timeToFirstByte),h.send(l,k,j,i)
}):void 0
},count:function(e,d,f){return d==null&&(d=1),this.send("count",e,d,f)
},sample:function(e,d,f){return this.send("sample",e,d,f)
},send:function(u,t,s,r){var q,p,n,m,l=this;
r==null&&(r={});
try{return(m=this._private).toMput==null&&(m.toMput=[]),p=b.obj.merge({type:u,key:t,value:s!=null?s:null},r),n=b.JSON.stringify(p),b.info("send metrics",n),this._private.toMput.push(n),b.timeout("metrics.debounce",function(){return l.msend.apply(l,l._private.toMput),l._private.toMput=[]
},500)
}catch(a){return q=a,typeof q=="string"?typeof console!="undefined"&&console!==null?console.log(q):void 0:(typeof console!="undefined"&&console!==null&&console.log(q.message),typeof console!="undefined"&&console!==null?console.log(q.stack):void 0)
}},msend:function(){var a,d;
return a=1<=arguments.length?__slice.call(arguments,0):[],d="//"+b.constant.metricsHost+"/mput?topic=metrics",b.remote.post(d,{data:a.join("\n")})
},countEvent:function(f,e,h){var g;
return h||(h=e),(g=this._private.countEventCallbacks)[h]==null&&(g[h]=this._private.mkCountEventCallback(e,h)),f.rebind(e,this._private.countEventCallbacks[h])
},countEventOnce:function(f,e,h){var g;
return h||(h=e),(g=this._private.countEventOnceCallbacks)[h]==null&&(g[h]=this._private.mkCountEventOnceCallback(e,h)),f.rebind(e,this._private.countEventOnceCallbacks[h])
},sampleEvent:function(f,e,h){var g;
return h||(h=e),(g=this._private.sampleEventCallbacks)[h]==null&&(g[h]=this._private.mkSampleEventCallback(e,h)),f.rebind(e,this._private.sampleEventCallbacks[h])
},countShowLoadingOnce:function(d){var c=this;
return d.rebind("waiting",this._private.deriveWaitingEvents),d.bind("show-loading",function(e,a){return c.videoCount(d,"player/show-loading/first",1,{buffered:e,played:a}),d.unbind
})
},countShowLoadingAll:function(d){var c=this;
return d.rebind("waiting",this._private.deriveWaitingEvents),d.bind("show-loading",function(e,a){return c.videoCount(d,"player/show-loading/all",1,{buffered:e,played:a})
})
},countShowLoadingLongTimeOnce:function(d){var c=this;
return d.rebind("waiting",this._private.deriveWaitingEvents),d.bind("show-loading-long-time",function(e,a){return c.videoCount(d,"player/show-loading-long-time/first",1,{buffered:e,played:a}),d.unbind
})
},countShowLoadingLongTimeAll:function(d){var c=this;
return d.rebind("waiting",this._private.deriveWaitingEvents),d.bind("show-loading-long-time",function(e,a){return c.videoCount(d,"player/show-loading-long-time/all",1,{buffered:e,played:a})
})
},sampleBufferingWaitDurationOnce:function(d){var c=this;
return d.rebind("waiting",this._private.deriveWaitingEvents),d.bind("buffering-wait-duration",function(g,f,a){return c.videoSample(d,"player/buffering-wait-duration/first",g,{buffered:f,played:a}),d.unbind
})
},sampleBufferingWaitDurationAll:function(d){var c=this;
return d.rebind("waiting",this._private.deriveWaitingEvents),d.bind("buffering-wait-duration",function(g,f,a){return c.videoSample(d,"player/buffering-wait-duration/all",g,{buffered:f,played:a})
})
},sampleTimeFromPlayToTimechangeAll:function(e){var d,f=this;
return d=null,e.bind("play",function(){return d=(new Date).getTime(),e.unbind
}),e.bind("timechange",function(c){var a;
if(!(c>2)){return d?(a=((new Date).getTime()-d)/1000,f.videoSample(e,"player/play-to-timechange/all",a)):f.videoCount(e,"player/timechange-before-play/all")
}})
},assetBuckets:function(a){var j,i,h;
j=a._currentAsset,h=b.detect.iphone||b.detect.android||b.detect.blackberry||/mobile/i.test(navigator.userAgent);
if(!j){try{throw new Error("blah")
}catch(g){i=g,typeof console!="undefined"&&console!==null&&console.log(i.stack)
}return[]
}return h?b.detect.iphone?["mobile","iphone"]:b.detect.android?["mobile","android"]:["mobile"]:/md/.test(j.type)?["md"]:/hd/.test(j.type)?["hd"]:["sd"]
},connectionType:function(){var c;
return c=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,c!=null?c.type:void 0
},sumTimeRanges:function(g){var f,j,i,h;
if(g==null){return null
}j=0;
for(f=i=0,h=g.length;
0<=h?i<h:i>h;
f=0<=h?++i:--i){j+=g.end(f)-g.start(f)
}return j
},_private:{countEventCallbacks:{},mkCountEventCallback:function(a,d){return function(c){return d||(d=a),b.Metrics.videoCount(this,"player/"+d,c)
}
},countEventOnceCallbacks:{},mkCountEventOnceCallback:function(a,d){return function(c){return d||(d=a),b.Metrics.videoCount(this,"player/"+d,c),this.unbind
}
},sampleEventCallbacks:{},mkSampleEventCallback:function(a,d){return function(c){return d||(d=a),b.Metrics.videoSample(this,"player/"+d,c)
}
},showLoadingDelay:2000,showLoadingLongTimeDelay:5000,deriveWaitingEvents:function(){var a,f,e=this;
return a=""+this.uuid+".show-loading-trigger",f=""+this.uuid+".show-loading-long-time-trigger",this._startedWaitingAt=Date.now(),b.timeout(a,function(){var d,c;
return d=e.totalBuffered!=null?e.totalBuffered():null,c=e.totalPlayed!=null?e.totalPlayed():null,e.trigger("show-loading",d,c)
},b.Metrics._private.showLoadingDelay),b.timeout(f,function(){var d,c;
return d=e.totalBuffered!=null?e.totalBuffered():null,c=e.totalPlayed!=null?e.totalPlayed():null,e.trigger("show-loading-long-time",d,c)
},b.Metrics._private.showLoadingLongTimeDelay),this._clearShowLoadingTrigger==null&&(this._clearShowLoadingTrigger=function(){var j,i,d,c;
return b.clearTimeouts(a),b.clearTimeouts(f),i=Date.now()-e._startedWaitingAt,d=i/1000,j=e.totalBuffered!=null?e.totalBuffered():null,c=e.totalPlayed!=null?e.totalPlayed():null,e.trigger("buffering-wait-duration",d,j,c),e.rebind("waiting",b.Metrics._private.deriveWaitingEvents),e.unbind
}),this.rebind("timechange",this._clearShowLoadingTrigger),this.unbind
}}})
})(Wistia),function(b){b.Plugin||(b.Plugin={});
if(b.Plugin.Base){return
}b.Plugin.Base=function(){function a(){this.pluginName="plugin",this
}return a.prototype.instances=function(){return b.data(["plugins",this.pluginName,this.video.uuid])
},a.prototype.register=function(d){var e;
return e=this.playlist||this.video,e.plugins[this.uuid]=d,b.data(["plugins",this.pluginName,e.uuid,this.uuid],d)
},a.prototype.remove=function(d){var e;
d==null&&(d={}),e=this.playlist||this.video,e.plugins[this.uuid]=null,b.removeData(["plugins",this.pluginName,e.uuid,this.uuid]),delete e.plugins[this.uuid],delete e.plugin[this.pluginName];
if(!d.dontFit){return b.grid.fitHorizontal(e),b.grid.fitVertical(e)
}},a.prototype.fit=function(){},a.prototype.init=function(d,e){return d.plugins==null&&(d.plugins={}),(d!=null?d.playlist:void 0)?this.playlist=d:this.video=d,this.target=this.playlist||this.video,this.options=e||{},this.params=b.extend({},e||{}),this.uuid=this.params.uuid||b.seqId("wistia_","_plugin")
},a
}();
if(!b.plugin){return b.plugin=function(a,q){var p,n,m,l,k,j;
if(p=(m=b.pluginQueue)!=null?(l=m[a])!=null?l.shift():void 0:void 0){((k=p.video)!=null?k.looksDown():void 0)?(p.video.notice('W.plugin: delaying initialization of plugin until "up"',a,p.options),p.video.bind("up",function(){var c,d;
return p.video.info("initializing plugin",a,p.options),c=q(p.video,p.options)||!0,p.video.plugin[a]=c,p.impl&&(p.impl.plugin[a]=c),(d=p.video._pluginStopGos)!=null&&typeof d[a]=="function"&&d[a](!0),this.unbind
})):p.video._impl===p.impl?(p.video.info("W.plugin: initializing plugin",a,p.options),n=q(p.video,p.options)||!0,p.video.plugin[a]=n,p.impl&&(p.impl.plugin[a]=n),(j=p.video._pluginStopGos)!=null&&typeof j[a]=="function"&&j[a](!0)):p.video.notice("W.plugin impl changed, ignoring initialization",a,p.options)
}if(!b.plugin[a]){return b.plugin[a]=q
}},b.plugin._scriptsFromVideo=function(a){var d;
return d=b.plugin._scriptsFromOptions(a._opts),b.plugin._setFnForDefinedPlugins(a,d),d
},b.plugin._prefetched={},b.plugin._scriptsFromOptions=function(a){var n,m,l,k,j,i;
l=[],i=a.plugin;
for(m in i){a=i[m],(a!=null?a.on:void 0)!==!1&&(k=function(){switch(m){case"socialbar":return"socialbar-v1";
case"requireEmail":return"requireEmail-v1";
case"postRoll":return"postRoll-v1";
case"transcript":return"transcript-v2";
default:return m
}}(),n={name:k,options:a,src:""+b.proto()+"//"+b.remote.embedHost()+"/assets/external/"+k+".js",async:a.async!=null?a.async:!/^(requireEmail|socialbar|transcript|midrollLink)/.test(m)},a.src&&b.plugin._allow3rdParty()&&(n.src=a.src),/transcript/.test(m)&&(b.proto()==="https:"?j="https://s3.amazonaws.com/origin-p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js":j="http://p3.3playmedia.com/javascripts/vendor/jquery-1.6.2.min.js",l.push({src:j,async:!1})),l.push(n))
}return l
},b.plugin._inject=function(a,j,i){var h,g;
i==null&&(i={});
if(i.on!==!1){return h=""+b.proto()+"//"+b.remote.embedHost()+"/assets/external/"+j+".js",g=[{name:j,options:i,src:i.src&&b.plugin._allow3rdParty()?i.src:h,async:!0}],b.plugin._setFnForDefinedPlugins(a,g),b.plugin._execQueue(a,g)
}},b.plugin._allow3rdParty=function(){return !/([\w\_\-]+\.)?wistia\.(com|st)$/.test(window.location.hostname)
},b.plugin._setFnForDefinedPlugins=function(a,l){var k,j,i,h;
h=[];
for(j=0,i=l.length;
j<i;
j++){k=l[j],b.plugin[k.name]&&h.push(function(d){return d.fn=function(){var m,g,c;
return m=b.plugin[d.name](a,d.options)||!0,a.plugin[d.name]=m,a._impl&&(a._impl.plugin[d.name]=m),(c=a._pluginStopGos)!=null?typeof c[g=d.name]=="function"?c[g](!0):void 0:void 0
},d.async=!1
}(k))
}return h
},b.plugin._queueUndefinedPlugins=function(a,q){var p,n,m,l,k,j;
b.pluginQueue==null&&(b.pluginQueue={}),j=[];
for(l=0,k=q.length;
l<k;
l++){n=q[l],n.subScripts?j.push(function(){var r,f,e,d;
e=n.subScripts,d=[];
for(r=0,f=e.length;
r<f;
r++){m=e[r],p=m.name||m.src,b.pluginQueue[p]==null&&(b.pluginQueue[p]=[]),n.fn?d.push(void 0):d.push(b.pluginQueue[p].push({video:a,impl:a._impl,options:m.options}))
}return d
}()):(p=n.name||n.src,b.pluginQueue[p]==null&&(b.pluginQueue[p]=[]),n.fn?j.push(void 0):j.push(b.pluginQueue[p].push({video:a,impl:a._impl,options:n.options})))
}return j
},b.plugin._execQueue=function(a,f,e){return b.plugin._queueUndefinedPlugins(a,f),b.remote.scripts(f,e)
},b.plugin._init=function(a,l,k){var j,i,h;
return h=a.charAt(0).toUpperCase()+a.substr(1),i=b.Plugin[h],j=new i,j.init(l,k),j
},b.plugin._instance=function(a,f,e){return b.data(["plugins",a,f.uuid,e])
},b.plugin._remove=function(a,h,g){var f;
(f=b.plugin._instance(a,h,g))!=null&&f.remove()
},b.plugin._isActive=function(a,f,e){return !!b.plugin._instance(a,f,e)
},b.plugin._defined=function(){var a,h,g,f;
g=b.plugin,f=[];
for(a in g){h=g[a],/^_/.test(a)||f.push({name:a,options:h})
}return f
}
}}(Wistia),function(b){return b.extend({seo:{writeMeta:function(d,c){this.metaExists(d)||this.forceWriteMeta(d,c)
},forceWriteMeta:function(f,e){var h,g;
g=document.getElementsByTagName("script")[0],h=document.createElement("meta"),h.setAttribute("property",f),h.setAttribute("content",e),g.parentNode.insertBefore(h,g)
},metaExists:function(g){var f,j,i,h;
h=document.getElementsByTagName("meta");
for(j=0,i=h.length;
j<i;
j++){f=h[j];
if(f.getAttribute("property")===g){return !0
}}return !1
},inject:function(a,j){var i,h,g;
j==null&&(j={}),this.metaExists("og:video")||(g=a.sitemap_entry,i={_mediaData:a,_givenOptions:j,_opts:j,_attrs:{}},h=new b.FlashVideo(i),h.sdAsset=function(){return b.Video.asset(a,{container:"flv",sortBy:"width asc"})
},this.writeMeta("og:type","article"),this.writeMeta("og:title",(g!=null?g.title:void 0)||document.title||h.name()),this.writeMeta("og:url",(g!=null?g.loc:void 0)||location.href),this.writeMeta("og:image",b.Video.stillUrl(h._mediaData)),this.writeMeta("og:video",""+a.flashPlayerUrl+b.url.jsonToParams(h.generateFlashVars())),j.videoWidth&&this.writeMeta("og:video:width",j.videoWidth),j.videoHeight&&this.writeMeta("og:video:height",j.videoHeight),this.writeMeta("og:video:type","application/x-shockwave-flash"))
}}})
}(Wistia),function(b){return b.extend({localStorage:function(a,l,k){var j,i;
k==null&&(k=!1);
if(!b.detect.localstorage){return
}i=b.data("localStorage")||{};
if(l!=null){k?b.obj.unset(i,a):b.obj.set(i,a,l),b.data("localStorage",i);
try{localStorage.wistia=b.JSON.stringify(i)
}catch(h){j=h,typeof console!="undefined"&&console!==null&&console.log(j)
}return l
}return a!=null?b.obj.get(i,a):i
},removeLocalStorage:function(c){return this.localStorage(c,"nada",!0)
},dumpLocalStorage:function(){var a;
if(!b.detect.localstorage){return
}b.removeData("localStorage");
try{localStorage.removeItem("wistia")
}catch(d){a=d,typeof console!="undefined"&&console!==null&&console.log(a)
}}}),b._initializers.initLocalStorage=function(){var a;
if(b.detect.localstorage){try{return localStorage.wistia?b.data("localStorage",b.JSON.parse(localStorage.wistia)):b.data("localStorage",{})
}catch(d){return a=d,b.data("localStorage",{})
}}},b._destructors.destroyLocalStorage=function(){return b.removeData("localStorage")
}
}(Wistia),function(b){return b.extend({cookie:function(a,n,m){var l,k,j,i;
return arguments.length>1&&String(n)!=="[object Object]"?(m=b.extend({},m),n==null&&(m.expires=-1),typeof m.expires=="number"&&(l=m.expires,i=m.expires=new Date,i.setDate(i.getDate()+l)),n=String(n),document.cookie=[encodeURIComponent(a),"=",m.raw?n:encodeURIComponent(n),m.expires?"; expires="+m.expires.toUTCString():"",m.path?"; path="+m.path:"",m.domain?"; domain="+m.domain:"",m.secure?"; secure":""].join("")):(m=n||{},k=m.raw?function(c){return c
}:decodeURIComponent,(j=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?k(j[1]):null)
}})
}(Wistia),function(b){if(b.gridify){return
}b.extend({gridifyCss:function(d){var c;
return c=d.replace(/_grid$/,""),"#"+d+"_wrapper{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Arial,sans-serif;font-size:14px;height:100%;position:relative;text-align:left;width:100%;}\n#"+d+"_wrapper *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}\n#"+d+"_above{position:relative;}\n#"+d+"_main{display:block;height:100%;position:relative;}\n#"+d+"_behind{height:100%;left:0;position:absolute;top:0;width:100%;}\n#"+d+"_center{height:100%;overflow:hidden;position:relative;width:100%;}\n#"+d+"_front{display:none;height:100%;left:0;position:absolute;top:0;width:100%;}\n#"+d+"_top_inside{position:absolute;left:0;top:0;width:100%;}\n#"+d+"_top{width:100%;position:absolute;bottom:0;left:0;}\n#"+d+"_bottom_inside{position:absolute;left:0;bottom:0;width:100%;}\n#"+d+"_bottom{width:100%;position:absolute;top:0;left:0;}\n#"+d+"_left_inside{height:100%;position:absolute;left:0;top:0;}\n#"+d+"_left{height:100%;position:absolute;right:0;top:0;}\n#"+d+"_right_inside{height:100%;right:0;position:absolute;top:0;}\n#"+d+"_right{height:100%;left:0;position:absolute;top:0;}\n#"+d+"_below{position:relative;}"
},gridifyHtml:function(c){return{id:""+c+"_wrapper",childNodes:[{id:""+c+"_above"},{id:""+c+"_main",childNodes:[{id:""+c+"_behind"},{id:""+c+"_center"},{id:""+c+"_front"},{id:""+c+"_top_inside",childNodes:{id:""+c+"_top"}},{id:""+c+"_bottom_inside",childNodes:{id:""+c+"_bottom"}},{id:""+c+"_left_inside",childNodes:{id:""+c+"_left"}},{id:""+c+"_right_inside",childNodes:{id:""+c+"_right"}}]},{id:""+c+"_below"}]}
},createGrid:function(d){var c;
return c=this.createGridSkeleton(),this.initGridDimensions(d,c),c
},createGridSkeleton:function(){var a,q,p,n,m,l,k,j;
q=b.seqId("wistia_grid_"),p=b.elem.fromObject(b.gridifyHtml(q)),a=b.css(p,b.gridifyCss(q)),n={},n.css=a,n.root=p,b.elem.style(p,{display:"none"}),b.elem.append(document.body,p),l=["wrapper","main","above","below","top","right","bottom","left","top_inside","right_inside","bottom_inside","left_inside","front","center","behind"];
for(k=0,j=l.length;
k<j;
k++){m=l[k],n[m]=document.getElementById(""+q+"_"+m)
}return b.elem.remove(p),b.elem.style(p,{display:"block"}),n
},initGridDimensions:function(a,j){var i,h,g;
h=a._embedContainer,i=a.chrome,g=a._opts,b.detect.browser.old&&(i.style.width=h.style.width=""+b.elem.width(h)+"px",i.style.height=h.style.height=""+b.elem.height(h)+"px");
if(!b.detect.browser.old){return i.style.height=""+b.elem.height(h)+"px",j.main.style.width=""+b.elem.width(h)+"px"
}if(g.rawEmbed&&g.aspectRatio){return j.main.style.height=""+b.elem.width(j.center)/g.aspectRatio+"px"
}},gridify:function(a,q){var p,n,m,l,k,j;
n={},p=""+q.id+"_grid",b.detect.browser.old&&(q.style.width=""+b.elem.width(q)+"px",q.style.height=""+b.elem.height(q)+"px"),q.innerHTML=b.generate.html(b.gridifyHtml(p)),j=["wrapper","main","above","below","top","right","bottom","left","top_inside","right_inside","bottom_inside","left_inside","front","center","behind"];
for(l=0,k=j.length;
l<k;
l++){m=j[l],n[m]=document.getElementById(""+p+"_"+m)
}return b.util.addInlineCss(n.wrapper,b.gridifyCss(p)),b.detect.browser.old?a.rawEmbed&&a.aspectRatio&&(n.main.style.height=""+b.elem.width(n.center)/a.aspectRatio+"px"):(n.wrapper.style.height=""+b.elem.height(q)+"px",n.main.style.width=""+b.elem.width(q)+"px"),n
},isGridElem:function(f,e){var h,g;
for(g in f){h=f[g];
if(e===h){return !0
}}return !1
},grid:{allNodesHidden:function(f){var e,h,g;
if(f.length===0){return !0
}for(h=0,g=f.length;
h<g;
h++){e=f[h];
if(e.style&&e.style.display!=="none"){return !1
}}return !0
},zeroEmptySections:function(i){var h,n,m,l,k,j;
k=["top","bottom","left","right","above","below"],j=[];
for(m=0,l=k.length;
m<l;
m++){n=k[m],h=i.grid[n],h.childNodes.length?this.allNodesHidden(h.childNodes)?(h.style.height="0px",h.style.fontSize="0px",h.style.lineHeight="0px",j.push(h.isEmpty=!0)):(h.style.height="",h.style.fontSize="",j.push(h.style.lineHeight="")):(h.appendChild(document.createTextNode(" ")),h.style.height="0px",h.style.fontSize="0px",h.style.lineHeight="0px",j.push(h.isEmpty=!0))
}return j
},wrapperHeight:function(a){var f,e;
return f=a.grid.wrapper,e=b.elem.height(f),b.detect.browser.old&&(a._attrs.rawEmbed&&a.container&&(e=parseInt(a.container.currentStyle.height,10)),a._attrs.rawEmbed||(e=b.util.winHeight())),e
},wrapperWidth:function(a){var f,e;
return f=a.grid.wrapper,e=b.elem.width(f),b.detect.browser.old&&(a._attrs.rawEmbed&&a.container&&(e=parseInt(a.container.currentStyle.width,10)),a._attrs.rawEmbed||(e=b.util.winWidth())),e
},fitVertical:function(a){var n,m,l,k,j,i;
if(a._opts.dontFit){return
}this.zeroEmptySections(a),m=a.grid,l=m.main,i=m.wrapper,j=Math.max(b.elem.height(m.above),b.elem.height(m.top)),n=Math.max(b.elem.height(m.below),b.elem.height(m.bottom)),k=Math.max(0,this.wrapperHeight(a)-j-n),l.style.height=""+k+"px",b.elem.width(m.left)===0&&(l.style.left="0px"),l.style.marginTop=""+b.elem.height(m.top)+"px"
},fitHorizontal:function(a){var n,m,l,k,j,i;
if(a._opts.dontFit){return
}this.zeroEmptySections(a),n=a.grid,i=n.wrapper,l=n.main,m=b.elem.width(n.left),j=b.elem.width(n.right),k=this.wrapperWidth(a)-m-j,l.style.width=k+"px",l.style.left=m+"px"
},fit:function(d,c){/left|right/.test(c)?this.fitHorizontal(d):/top|bottom|above|below/.test(c)&&this.fitVertical(d),d.ieSizeHack()
}}})
}(Wistia),function(b){if(b.Color){return
}return b.Color=function(){function j(c){c instanceof b.Color?(this.r=c.r,this.g=c.g,this.b=c.b,this.a=c.a):c?this.parse(c):(this.r=this.g=this.b=0,this.a=1),this
}var a,q,p,n,m,l,k;
return m=/^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,k=/^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,l=/^\d+(\.\d+)*%$/,q=/([0-9a-f])/gi,a=function(c){return 0.5+c<<0
},n=function(c){return l.test(c)?parseFloat(c)*2.55:c
},p=function(e,d,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?e+(d-e)*6*f:f<0.5?d:f<2/3?e+(d-e)*(2/3-f)*6:e
},j.prototype.parse=function(e){var c,f;
if(m.test(e)){f=e.replace(/^\#/,"");
if(f.length===3||f.length===4){f=f.replace(q,"$1$1")
}this.r=parseInt(f.substr(0,2),16),this.g=parseInt(f.substr(2,2),16),this.b=parseInt(f.substr(4,2),16),f.length===8?this.a=parseInt(f.substr(6,2),16)/255:this.a=1
}else{k.test(e)&&(c=e.match(k),this.r=parseFloat(n(c[1])),this.g=parseFloat(n(c[2])),this.b=parseFloat(n(c[3])),c[4]?this.a=parseFloat(c[4]):this.a=1)
}return this
},j.prototype.clone=function(){return new b.Color(this)
},j.prototype._hslFromRgb=function(){var A,z,y,x,w,v,u,t,s,r;
return t=this.r/255,y=this.g/255,A=this.b/255,v=Math.max(t,y,A),u=Math.min(t,y,A),w=(v+u)/2,r=v,v===u&&(this._h=this._s=0),z=v-u,z===0?(this._h=0,this._s=0,this._l=t*100,this):(w>0.5?s=z/(2-v-u):s=z/(v+u),v===t?x=(y-A)/z+(y<A?6:0):v===y?x=(A-t)/z+2:x=(t-y)/z+4,x/=6,this._h=x*360,this._s=s*100,this._l=w*100,this)
},j.prototype._rgbFromHsl=function(){var g,d,r,i,h;
return g=this._h/360,h=this._s/100,d=this._l/100,i=d<0.5?d*(1+h):d+h-d*h,r=2*d-i,this.r=p(r,i,g+1/3)*255,this.g=p(r,i,g)*255,this.b=p(r,i,g-1/3)*255,this
},j.prototype.blendChannel=function(e,d,f){return this[e]=f*d+(1-f)*this[e],this
},j.prototype.blend=function(d,e){return d=new b.Color(d),this.blendChannel("r",d.r,e),this.blendChannel("g",d.g,e),this.blendChannel("b",d.b,e),this
},j.prototype.lightenChannel=function(d,c){return this[d]+=c,this[d]<0?this[d]=0:this[d]>255&&(this[d]=255),this
},j.prototype.lighten=function(c){return this.lightenChannel("r",c),this.lightenChannel("g",c),this.lightenChannel("b",c),this
},j.prototype.darken=function(c){return this.lighten(-c)
},j.prototype.lightness=function(c){return this._hslFromRgb(),c!=null?(this._l=Math.max(0,Math.min(100,c)),this._rgbFromHsl(),this):this._l
},j.prototype.saturation=function(c){return this._hslFromRgb(),c!=null?(this._s=Math.max(0,Math.min(100,c)),this._rgbFromHsl(),this):this._s
},j.prototype.grayLevel=function(){return(0.299*this.r+0.587*this.g+0.114*this.b)/255
},j.prototype.whiteLevel=function(){return Math.min(Math.min(this.r,this.g),this.b)
},j.prototype.isGrayscale=function(){return this.r===this.g&&this.g===this.b
},j.prototype.distanceFrom=function(c){return Math.sqrt(Math.pow(this.r-c.r,2)+Math.pow(this.g-c.g,2)+Math.pow(this.b-c.b,2))
},j.prototype.channelDominance=function(){var c=this;
return["r","g","b"].sort(function(d,e){return c[e]-c[d]
})
},j.prototype.alpha=function(c){return this.a!=null?(this.a=c,this):this.a
},j.prototype.red=function(c){return c!=null?(this.r=c,this):this.r
},j.prototype.green=function(c){return this.g!=null?(this.g=c,this):this.g
},j.prototype.blue=function(c){return this.b!=null?(this.b=c,this):this.b
},j.prototype.toHex=function(){var e,d,f;
return f=Math.round(this.r).toString(16),d=Math.round(this.g).toString(16),e=Math.round(this.b).toString(16),f.length===1&&(f="0"+f),d.length===1&&(d="0"+d),e.length===1&&(e="0"+e),""+f+d+e
},j.prototype.toHexWithAlpha=function(){var c;
return c=Math.round(this.a*255).toString(16),c.length===1&&(c="0"+c),""+c+this.toHex()
},j.prototype.toRgb=function(){return"rgb("+Math.round(this.r)+","+Math.round(this.g)+","+Math.round(this.b)+")"
},j.prototype.toRgba=function(){return"rgba("+Math.round(this.r)+","+Math.round(this.g)+","+Math.round(this.b)+","+this.a+")"
},j.prototype.toRgbaOrHex=function(){return b.detect.browser.msie&&b.detect.browser.version<9&&b.detect.browser.quirks?"#"+this.toHex():this.toRgba()
},j.prototype.toPercent=function(){return"rgba("+this.r/255*100+"%,"+this.g/255*100+"%,"+this.b/255*100+"%,"+this.a+")"
},j.prototype.toIeGradient=function(){return"progid:DXImageTransform.Microsoft.gradient(startColorStr='#"+this.toHexWithAlpha()+"', endColorStr='#"+this.toHexWithAlpha()+"')"
},j.prototype.toString=function(){return this.toPercent()
},j
}()
}(Wistia),function(b){if(b.embeds){return
}return b.embeds={},b.embeds.setup=function(a){var l,k,j,i,h;
a=b.embeds.uninitialized(a);
for(i=0,h=a.length;
i<h;
i++){l=a[i],k=b.embeds.hashedIdForElem(l,{asyncOnly:!0}),l.id||(l.id=b.embeds.genIdFor(k)),j=b.embeds.optionsFromElemClass(l),b.options("__"+l.id+"_dom_options__",j),b.embed(k,{container:l.id})
}return b.watchForInit()
},b.embeds.optionsFromElemClass=function(a){var n,m,l,k,j,i;
m=[],i=b.elem.classes(a);
for(k=0,j=i.length;
k<j;
k++){n=i[k],n.indexOf("=")>0&&m.push(n)
}return l=b.url.paramsToJson(m.join("&")),b.obj.cast(l),l
},b.embeds.hashedIdForElem=function(j,i){var q,p,n,m,l,k;
return i==null&&(i={}),i.asyncOnly?((q=j.className)!=null?(p=q.match(/wistia_async_([^\s]+)/))!=null?p[1]:void 0:void 0)||null:((n=j.className)!=null?(m=n.match(/wistia_async_([^\s]+)/))!=null?m[1]:void 0:void 0)||((l=j.className)!=null?(k=l.match(/wistia_([^\s]+)/))!=null?k[1]:void 0:void 0)||null
},b.embeds.genIdFor=function(f){var e,h,g;
e="wistia-"+f,g=1;
for(;
;
){h=""+e+"-"+g;
if(!document.getElementById(h)){break
}g+=1
}return h
},b.embeds._options={},b.embeds.options=function(a,d){return b.obj.isObject(a)&&(d=a,a="__global__"),d!=null?b.embeds._options[a]=b.obj.cast(b.obj.clone(d)):a?b.embeds._options[a]||{}:b.embeds._options
},b.options=b.embeds.options,b.embeds.api=function(){var a,l,k,j,i,h;
if(document.querySelectorAll){return document.querySelectorAll("div.wistia_embed")
}l=((i=document.body)!=null?i.getElementsByTagName("div"):void 0)||[],h=[];
for(k=0,j=l.length;
k<j;
k++){a=l[k],b.elem.hasClass(a,"wistia_embed")&&h.push(a)
}return h
},b.embeds.uninitialized=function(a){var l,k,j,i,h;
a==null&&(a=b.embeds.api()),j=[];
for(i=0,h=a.length;
i<h;
i++){l=a[i],k=b.embeds.hashedIdForElem(l,{asyncOnly:!0}),k&&!l.wistiaApi&&j.push(l)
}return j
},b.embeds.initialized=function(a){var l,k,j,i,h;
a==null&&(a=b.embeds.api()),j=[];
for(i=0,h=a.length;
i<h;
i++){l=a[i],k=b.embeds.hashedIdForElem(l),k&&l.wistiaApi&&j.push(l)
}return j
},b.embeds.observe=function(){var a;
if(b.embeds.initObserver){return
}return b.embeds.initObserver=b.elem.mutationObserver(function(t){var s,r,q,p,n,m,l,k;
s=[];
for(p=0,m=t.length;
p<m;
p++){r=t[p],k=r.addedNodes||[];
for(n=0,l=k.length;
n<l;
n++){q=k[n],b.elem.hasClass(q,"wistia_embed")&&s.push(q)
}}if(s.length>0){return setTimeout(function(){return b.embeds.setup(s)
},10)
}}),a={subtree:!0,childList:!0},b.detect.ios.version>0?b.util.onDocReady(function(){return b.embeds.initObserver.observe(document.body,a)
}):b.embeds.initObserver.observe(document.body,a)
},b.embeds.unobserve=function(){var a;
return(a=b.embeds.initObserver)!=null&&a.disconnect(),b.embeds.initObserver=null
},b.embeds.poll=function(){return b.eventLoop.add("poll_setup_embeds",500,function(){return b.embeds.setup()
})
},b.embeds.unpoll=function(){var a;
return(a=b.eventLoop)!=null?a.remove("poll_setup_embeds"):void 0
},b.embeds.watch=function(){return b.embeds._dontWatch=!1,b._detect.mutationObserver()&&!b.detect.trident?b.embeds.observe():b.embeds.poll()
},b.embeds.dontWatch=function(){return b.embeds._dontWatch=!0,b.embeds.unwatch()
},b.embeds.unwatch=function(){return b.embeds.unobserve(),b.embeds.unpoll()
},b.flushInit=function(){var a,j,i,h;
if(!window.wistiaInit){return
}if(wistiaInit instanceof Array){for(i=0,h=wistiaInit.length;
i<h;
i++){j=wistiaInit[i];
try{typeof j=="function"&&j(b)
}catch(g){a=g,typeof console!="undefined"&&console!==null&&console.log(a.message),typeof console!="undefined"&&console!==null&&console.log(a.stack)
}}}else{typeof wistiaInit=="function"&&wistiaInit(b)
}return window.wistiaInit=null
},b.flushInitQueue=function(){var a,j,i,h;
if(!window.wistiaInitQueue){return
}if(wistiaInitQueue instanceof Array){for(i=0,h=wistiaInitQueue.length;
i<h;
i++){j=wistiaInitQueue[i];
try{typeof j=="function"&&j(b)
}catch(g){a=g,typeof console!="undefined"&&console!==null&&console.log(a.message),typeof console!="undefined"&&console!==null&&console.log(a.stack)
}}}else{typeof console!="undefined"&&console!==null&&console.log("window.wistiaInitQueue must be an array of functions. Given "+wistiaInitQueue+". Please do not clobber.")
}if(window.wistiaInitQueue.length>0){return window.wistiaInitQueue.length=0
}},b.watchForInit=function(){return b._pollInit==null&&(b._pollInit=function(){return b.flushInitQueue(),b.flushInit()
}),b._pollInit(),b.eventLoop.unpause("poll_init"),b.eventLoop.add("poll_init",500,b._pollInit)
},b.api=function(a){var q,p,n,m,l,k,j;
if(a!=null){if(typeof a=="string"){m=a,a=document.getElementById(m),a=a||((l=b.data(["video-by-hashed-id",m]))!=null?l.container:void 0);
if(!a){k=b.data(["video-by-hashed-id"]);
for(n in k){p=k[n];
if(n.indexOf(m)>=0||((j=p.container.id)!=null?j.indexOf(m):void 0)>=0){a=p.container;
break
}}}a||m==="first"&&(a=b.api.all()[0].container),a||(q=b.api.all(),m==="last"&&(a=q[q.length-1].container))
}return(a!=null?a.wistiaApi:void 0)?a.wistiaApi:b.notice("No API handle found for "+a.id)
}return p=b.api.all()[0]||null,p||b.notice("No API handles found on page"),p
},b.api.all=function(){var a;
return function(){var j,i,h,g;
h=b.embeds.initialized(),g=[];
for(j=0,i=h.length;
j<i;
j++){a=h[j],g.push(a.wistiaApi)
}return g
}()||[]
},b._asyncInitSoonAfterLoad=function(){return setTimeout(function(){var a;
try{return b.embeds.setup(),b.embeds._dontWatch||b.embeds.watch(),b.watchForInit()
}catch(d){a=d;
if(window.wistiaDebug){return typeof console!="undefined"&&console!==null?console.log(a):void 0
}}},10)
},b._initializers.initAsyncEmbeds=function(){if(!window._inWistiaIframe){return b.detect.ios.version>0?b.util.onDocReady(b._asyncInitSoonAfterLoad):b._asyncInitSoonAfterLoad(),b.eventLoop.pause("poll_init")
}},b._destructors.destroyAsyncEmbeds=function(){var a,d;
return(a=b.eventLoop)!=null&&a.remove("poll_init"),(d=b.embeds)!=null?d.unwatch():void 0
}
}(Wistia);
var __bind=function(d,c){return function(){return d.apply(c,arguments)
}
};
(function(d){var c;
c=d;
if(c.EmbedLink){return
}return c.EmbedLink=function(){function b(e,g){var f;
this.elem=e,this._apiHandle=g,this._onClickLink=__bind(this._onClickLink,this),this.defaults={autoPlay:!0,transition:"fade"},this.givenOptions=c.EmbedLink.optionsFromElem(this.elem),this.options=c.obj.merge({},this.defaults,this.givenOptions),this.hashedId=c.EmbedLink.hashedIdFromElem(this.elem),this.uuid=c.seqId("wistia_embed_link_"),this.options.includeInPlaylist===!1&&(this._apiHandle=null),this.options.includeInPlaylist!==!1&&((f=this._apiHandle)!=null?f._opts.playlistLinks:void 0)&&!this._apiHandle._inPlaylist(this.hashedId)&&this.apiHandle().addToPlaylist(this.hashedId,this.options),c.elem.rebind(this.elem,"click",this._onClickLink),this.elem._wistiaEmbedLink=this
}return b.prototype._onClickLink=function(e){return e.preventDefault(),this._followLink()
},b.prototype._followLink=function(){var f,e,g;
return this.hashedId===((f=this.apiHandle())!=null?f.hashedId():void 0)&&this._onlyRunnableOptionsGiven()?(this.apiHandle()._givenOptions=this.options,this.apiHandle()._opts=this.apiHandle()._gatherOptions(),this.options.autoPlay&&(e=this.apiHandle().plugin["postRoll-v1"])!=null&&e.close(),this.apiHandle()._runMethodsFromOptions()):((g=this.apiHandle().popover)!=null&&g.show(),this.apiHandle().replaceWith(this.hashedId,this.options))
},b.prototype._onlyRunnableOptionsGiven=function(){var f,e,g;
g=this.options;
for(f in g){e=g[f];
if(!this._allRunnableOptions[f]){return !1
}}return !0
},b.prototype._allRunnableOptions={autoPlay:!0,pause:!0,time:!0,transition:!0,volume:!0},b.prototype.apiHandle=function(){return this._apiHandle||(this.options.container?c.api(this.options.container):this.closestEmbed())
},b.prototype.closestEmbed=function(g){var k,j,i,h;
return k=c.api.all(),k.length===0?null:k.length===1?k[0]:(i=function(){var l,n,m;
m=[];
for(l=0,n=k.length;
l<n;
l++){j=k[l],m.push([j,c.elem.domDistance(this.elem,j.container)])
}return m
}.call(this),g==="above"?i=function(){var f,e,l;
l=[];
for(f=0,e=i.length;
f<e;
f++){h=i[f],h[1].across<0&&l.push(h)
}return l
}():g==="below"&&(i=function(){var f,e,l;
l=[];
for(f=0,e=i.length;
f<e;
f++){h=i[f],h[1].across>0&&l.push(h)
}return l
}()),i.sort(function(f,e){var m,l;
return m=f[1].up+f[1].down+Math.abs(f[1].across),l=e[1].up+e[1].down+Math.abs(e[1].across),m-l
}),i[0][0])
},b.prototype.destroy=function(){return c.elem.unbind(this.elem,"click",this._onClickLink),this.elem._wistiaEmbedLink=null,c.EmbedLink._all[this.uuid]=null,delete c.EmbedLink._all[this.uuid]
},b.inManualPlaylist=function(f){var e;
return this.hashedIdFromElem(f)?(e=this.optionsFromElem(f),e.container&&e.includeInPlaylist!==!1):!1
},b.inContainerPlaylist=function(e){var f;
return this.hashedIdFromElem(e)?(f=this.optionsFromElem(e),f.includeInPlaylist!==!1&&c.elem.ancestorHasClass(e,"wistia_playlist_links")):!1
},b.optionsFromElem=function(e){var g,f;
return f=this.optionsFromHref(e.getAttribute("href")),g=c.embeds.optionsFromElemClass(e),c.obj.merge(f,g)
},b.hashedIdFromElem=function(e){return this.hashedIdFromHref(e.getAttribute("href"))||this.optionsFromElem(e).hashedId
},b.matchesElem=function(e){return !!e&&!!this.hashedIdFromElem(e)
},b.EMBED_LINK_REGEXP=/^\#wistia_([^\?]+)/,b.hashedIdFromHref=function(e){return e&&this.EMBED_LINK_REGEXP.test(e)?e.match(this.EMBED_LINK_REGEXP)[1]:null
},b.optionsFromHref=function(e){return this.hashedIdFromHref(e)&&e.indexOf("?")>=0?c.obj.cast(c.url.paramsToJson(e.substring(e.indexOf("?")+1,e.length))):{}
},b._all={},b.setup=function(e,g){var f;
return g?c.info("PlaylistLink setup",e,g.container):c.info("EmbedLink setup",e),e._wistiaEmbedLink&&(e._wistiaEmbedLink.destroy(),e._wistiaEmbedLink=null),f=new c.EmbedLink(e,g),this._all[f.uuid]=f
},b.filterPlaylistLinkCandidates=function(i,p){var n,m,l,k,j;
p==null&&(p=null),l=[];
for(k=0,j=i.length;
k<j;
k++){n=i[k],c.EmbedLink.matchesElem(n)&&(m=this.optionsFromElem(n),m.includeInPlaylist!==!1&&(!p||p(n))&&l.push(n))
}return l
},b.firstHandleWithPlaylistLinks=function(){var f,i,h,g;
g=c.api.all();
for(i=0,h=g.length;
i<h;
i++){f=g[i];
if(f._opts.playlistLinks){return f
}}return null
},b.playlistLinkElems=function(K,J,I){var H,G,F,E,D,C,B,A,z,y,x,w,v,u,t=this;
B=this.firstHandleWithPlaylistLinks(),y=(K!=null?K.container:void 0)||null,D=J.container,z=(I!=null?I.container:void 0)||null;
if(J._opts.playlistLinks==="auto"){return E=this.filterPlaylistLinkCandidates(c.elem.allBetween(y,D,"a"),function(e){return !t.inManualPlaylist(e)&&!t.inContainerPlaylist(e)
}),F=this.filterPlaylistLinkCandidates(c.elem.allBetween(D,z,"a"),function(e){return !t.inManualPlaylist(e)&&!t.inContainerPlaylist(e)
}),J===B&&(E.length>0?(c.info("EmbedLink @_firstHandleHasLinksBefore = true"),this._firstHandleHasLinksBefore=!0):(c.info("EmbedLink @_firstHandleHasLinksBefore = false"),this._firstHandleHasLinksBefore=!1)),this._firstHandleHasLinksBefore?E.length>0?E:F:F.length>0?F:E
}if(J._opts.playlistLinks==="manual"){G=c.util.aps(document.getElementsByTagName("a")),x=[];
for(w=0,v=G.length;
w<v;
w++){H=G[w],A=c.EmbedLink.hashedIdFromElem(H),C=A&&c.EmbedLink.optionsFromElem(H),D=(C!=null?C.container:void 0)&&document.getElementById(C.container),(D!=null?D.wistiaApi:void 0)?C&&((u=J.container)!=null?u.id:void 0)===C.container&&x.push(H):(C!=null?C.container:void 0)&&c.error("Embed Link container '"+C.container+"' not found. You must specify the DOM ID of an initialized Wistia embed on the page.")
}return x
}return J._opts.playlistLinks?(D=document.getElementById(J._opts.playlistLinks),D?(G=c.util.aps(D.getElementsByTagName("a")),this.filterPlaylistLinkCandidates(G,function(e){return !t.inManualPlaylist(e)
})):(c.error("Embed Link container '"+J._opts.playlistLinks+"' not found. You must specify auto, manual, or the ID of an element on the page."),[])):[]
},b.destroyAll=function(x){var w,v,u,t,s,r,q,p,n,m;
x==null&&(x=document),c.info("EmbedLink.destroyAll",x);
if(x===document){q=this._all,n=[];
for(t in q){u=q[t],n.push(u.destroy())
}return n
}v=x.getElementsByTagName("a"),m=[];
for(s=0,r=v.length;
s<r;
s++){w=v[s],m.push((p=w._wistiaEmbedLink)!=null?p.destroy():void 0)
}return m
},b.setupAll=function(C){var B,A,z,y,x,w,v,u,t,s,r,q;
C==null&&(C=document),c.info("EmbedLink.setupAll",C);
try{c.EmbedLink.destroyAll(C),z=c.api.all(),v=function(e,g){var f=this;
return g.hasData(function(){var F,E,D,n,m,l,a;
if(!g._opts.playlistLinks){return
}c.info("EmbedLink setup handle",g),m=z[e-1],D=z[e+1],n=c.EmbedLink.playlistLinkElems(m,g,D),n=c.EmbedLink.filterPlaylistLinkCandidates(n,function(h){return !h._wistiaEmbedLink
});
if(n.length>0){g._playlist=[];
for(l=0,a=n.length;
l<a;
l++){F=n[l],c.EmbedLink.setup(F,g)
}if(E=g.nextVideo()){return g.bind("play",function(){return g.prefetchMedia(E.hashedId,E.options),g.unbind
})
}}})
};
for(w=u=0,r=z.length;
0<=r?u<r:u>r;
w=0<=r?++u:--u){x=z[w],v(w,x)
}A=c.util.aps(C.getElementsByTagName("a")),q=[];
for(t=0,s=A.length;
t<s;
t++){B=A[t],c.EmbedLink.matchesElem(B)?B._wistiaEmbedLink?q.push(c.notice("Conflict setting up embed link",B," already belongs to ",B._wistiaEmbedLink)):q.push(c.EmbedLink.setup(B)):q.push(void 0)
}return q
}catch(p){return y=p,c.error(y)
}},b
}(),c.EmbedLink.setupAllThrottled=c.util.throttle(1000,c.EmbedLink.setupAll),c._initializers.initEmbedLinks=function(){return wistiaEmbeds.bind("initembed",function(){return c.EmbedLink.setupAllThrottled(),c.timeout("setup_embed_links_1000",c.EmbedLink.setupAllThrottled,1000),c.timeout("setup_embed_links_3000",c.EmbedLink.setupAllThrottled,3000)
}),c.EmbedLink.setupAllThrottled(),c.util.onDocReady(function(){return c.EmbedLink.setupAllThrottled(),c.timeout("setup_embed_links_5000",c.EmbedLink.setupAllThrottled,5000)
})
},c._destructors.destroyEmbedLinks=function(){var b,f,e;
if(c.EmbedLink){e=c.EmbedLink._all;
for(f in e){b=e[f],b.destroy()
}return c.EmbedLink._all={}
}}
})(Wistia);
var __slice=[].slice;
(function(b){if(b.iframeInit){return
}return b.iframeInit=function(A,z){var y,x,w,v,u,t,s,r,q,p,a;
t=b.url.parse(location.href),y=b.extend(z,t.params),y.pageUrl||(y.pageUrl=(document.referrer||"").replace(/\#.*$/,"")||t.absolute().replace(/\#.*$/,"")),y.pageTitle=document.title,b.obj.castDeep(y),y.container="wistia_video",y.canonicalUrl||(y.canonicalUrl=y.pageUrl),y.canonicalTitle||(y.canonicalTitle=y.pageTitle),p=y.plugin||{};
for(w in p){s=p[w],y.plugin[w].outsideIframe&&(y.plugin[w]=null,delete y.plugin[w])
}t.params.popover&&(b.obj.get(t.params,"plugin.requireEmail")?y.autoPlay=!1:y.autoPlay=!0),t.params.twitter&&(y.autoPlay=!1),y._inIframe=!0,window.wistiaEmbed=b.embed(A,y),b.timeout(""+wistiaEmbed.uuid+".fit_later",function(){return window.wistiaEmbed.fit()
},100),(b.detect.iphone||b.detect.ipad)&&wistiaEmbed.ready(function(){return setInterval(function(){return wistiaEmbed.elem().style.zoom="",wistiaEmbed.elem().style.zoom=1
},3000)
}),u=function(d){var e;
return e={},Wistia.obj.eachLeaf(d,function(c,f){if(/^string|number|boolean$/i.test(typeof c)){return b.obj.set(e,f,c)
}}),e
};
if(!b.detect.browser.ltie8){if(parent===self){return
}window.apiSignature=null,window.iframeUuid=Math.random().toString(36).replace(/[^a-z0-9]+/g,""),window._allIframes=["wistia-iframe-"+iframeUuid],parent.postMessage("new-wistia-iframe","*");
if(parent.frames.length<=25){a=parent.frames;
for(r=0,q=a.length;
r<q;
r++){x=a[r],x!==self&&x!==parent&&(x.postMessage("wistia-iframe-"+iframeUuid,"*"),x.postMessage("declare-existing-wistia-iframe","*"))
}}return wistiaEmbed.postMessage=function(){var e,g,f;
f=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[];
if(parent===self){return
}return g={signature:apiSignature,method:f,args:e},g=b.JSON.stringify(g),parent.postMessage(g,"*")
},wistiaEmbed.ping=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],wistiaEmbed.postMessage.apply(wistiaEmbed,["pong"].concat(__slice.call(c)))
},wistiaEmbed.updateProperties=function(c){for(w in c){s=c[w],b.obj.isObject(s)?this[w]=b.obj.merge({},this[w],s):this[w]=s
}return this.postMessage("updateProperties",u(c))
},wistiaEmbed.bind("down",function(){return wistiaEmbed.postMessage("updateProperties",{_down:!0})
}),wistiaEmbed.bind("up",function(){return wistiaEmbed.postMessage("updateProperties",{_down:!1})
}),wistiaEmbed.bind("volumechange",function(c){return wistiaEmbed.postMessage("updateProperties",{_volume:c})
}),wistiaEmbed.bind("emailchange",function(c){return wistiaEmbed.postMessage("updateProperties",{_email:c,params:{trackEmail:c}})
}),wistiaEmbed.bind("timechange",function(c){return wistiaEmbed.postMessage("updateProperties",{_time:c})
}),wistiaEmbed.bind("statechange",function(c){return wistiaEmbed.postMessage("updateProperties",{_state:c})
}),wistiaEmbed.bind("widthchange",function(){return wistiaEmbed.postMessage("updateProperties",{_videoWidth:wistiaEmbed.videoWidth(),_width:wistiaEmbed.width()})
}),wistiaEmbed.bind("heightchange",function(){return wistiaEmbed.postMessage("updateProperties",{_videoHeight:wistiaEmbed.videoHeight(),_height:wistiaEmbed.height()})
}),wistiaEmbed.bind("foreigndatachange",function(c){return wistiaEmbed.postMessage("updateProperties",{_foreignData:c})
}),wistiaEmbed.bind("all",function(){var c;
c=1<=arguments.length?__slice.call(arguments,0):[];
if(c[0]==="afterremove"){return wistiaEmbed.postMessage("relay.trigger","_afterremove")
}if(!/^up|down$/.test(c[0])){return wistiaEmbed.postMessage.apply(wistiaEmbed,["_trigger"].concat(__slice.call(c)))
}}),v=function(h){var m,l,k,j;
if(h.data==="remove"){wistiaEmbed.remove();
return
}if(/^(visitor_key|send_visitor_key|clear_visitor_key)/.test(h.data)){return
}if(/^wistia-iframe-/.test(h.data)){window._allIframes.join(" ").indexOf(h.data)<0&&window._allIframes.push(h.data);
return
}if(h.data==="declare-existing-wistia-iframe"){h.source.postMessage("wistia-iframe-"+iframeUuid,"*");
return
}if(typeof h.data=="string"){try{k=b.JSON.parse(h.data)
}catch(i){l=i,b.notice("inside_iframe","receiveMessage","Could not parse message from "+h.origin),b.notice("inside_iframe","receiveMessage",h.data),k={}
}}else{k=h.data
}j=k.method,m=k.args;
if(j==="startIframeHandshake"){window.apiSignature=m[0];
if(!window.wistiaEmbed){return
}return wistiaEmbed.postMessage("relay.trigger","iframebound"),wistiaEmbed.postMessage("updateProperties",{options:u(wistiaEmbed.options),params:u(wistiaEmbed.params),_embedType:wistiaEmbed.embedType,_hashedId:wistiaEmbed.hashedId(),_width:wistiaEmbed.width(),_height:wistiaEmbed.height(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight()}),wistiaEmbed._hasImpl(function(){return wistiaEmbed.postMessage("_hasImpl",!0)
}),wistiaEmbed.hasData(function(){return wistiaEmbed.postMessage("updateProperties",{_embedType:wistiaEmbed.embedType,options:u(wistiaEmbed.options),params:u(wistiaEmbed.params),_name:wistiaEmbed.name(),_duration:wistiaEmbed.duration(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight(),_mediaData:wistiaEmbed._mediaData}),wistiaEmbed.postMessage("hasData",!0)
}),wistiaEmbed.embedded(function(){return wistiaEmbed.postMessage("updateProperties",{_embedType:wistiaEmbed.embedType,options:u(wistiaEmbed.options),params:u(wistiaEmbed.params),origAspectRatio:wistiaEmbed.aspect(),origVideoHeight:wistiaEmbed.videoHeight(),origVideoWidth:wistiaEmbed.videoWidth(),origHeight:wistiaEmbed.height(),origWidth:wistiaEmbed.width(),origPluginWidth:wistiaEmbed.extraWidth(),origPluginHeight:wistiaEmbed.extraHeight(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight(),_width:wistiaEmbed.width(),_height:wistiaEmbed.height()}),wistiaEmbed.postMessage("embedded",!0)
}),wistiaEmbed.ready(function(){return wistiaEmbed.postMessage("updateProperties",{options:u(wistiaEmbed.options),params:u(wistiaEmbed.params),_embedType:wistiaEmbed.embedType,_visitorKey:wistiaEmbed.visitorKey(),_eventKey:wistiaEmbed.eventKey(),_width:wistiaEmbed.width(),_height:wistiaEmbed.height(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight(),_state:wistiaEmbed.state(),_time:wistiaEmbed.time(),_volume:wistiaEmbed.volume()}),wistiaEmbed.postMessage("relay.trigger","videoready"),b.visitorKey.ready(function(){return wistiaEmbed.postMessage("updateProperties",{_visitorKey:wistiaEmbed.visitorKey()})
})
})
}if(j){return typeof wistiaEmbed!="undefined"&&wistiaEmbed!==null?wistiaEmbed[j].apply(wistiaEmbed,m):void 0
}},b.elem.bind(window,"message",v)
}}
})(Wistia);
var __slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
};
(function(b){return b.IframeApi=function(){function a(e,g){var f=this;
this.iframe=e,g==null&&(g={}),this.enableFullscreen(),this._bindings={},this._injectedPlugins={},this._firedPlayCount=0,this.options=this.params=g,this.plugin||(this.plugin={}),this.container=this.iframe,this.relay=b.obj.clone(b.bindable),this.ready=new b.StopGo,this.bound=new b.StopGo,this.hasData=new b.StopGo,this._hasImpl=new b.StopGo,this.embedded=new b.StopGo,this.down=new b.StopGo,this.down(!1),this.up=new b.StopGo,this.up(!0),this.uuid=this.uuid||g.uuid||""+(this.iframe.id||b.seqId()),this.signature=g.signature||"wistia-iframe-"+this.uuid.replace(/"/g,"__QUOTE__").replace(/\n/g,"__NEWLINE__"),this.inferParamsFromSrc(),this.monitor(),b.detect.browser.ltie8&&b.timeout(""+this.uuid+".ie8_ready",function(){return f.ready(!0)
})
}return a.prototype._log=function(){var e,g,f;
return g=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[],b[g].apply(b,[this.constructor.name,this.hashedId()||"no hashedId",(f=this.container)!=null?f.id:void 0,this.uuid].concat(__slice.call(e)))
},a.prototype.error=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["error"].concat(__slice.call(c)))
},a.prototype.warn=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},a.prototype.notice=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},a.prototype.info=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["info"].concat(__slice.call(c)))
},a.prototype.debug=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["debug"].concat(__slice.call(c)))
},a.prototype.log=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["log"].concat(__slice.call(c)))
},a.prototype.inferParamsFromSrc=function(){var d,e;
this.src=this.iframe.src,this.parsedSrc=b.url.parse(this.src),this.origWidth=parseInt(this.iframe.width||b.elem.width(this.iframe),10),this.origHeight=parseInt(this.iframe.height||b.elem.height(this.iframe),10),this.origVideoWidth=parseInt(this.parsedSrc.params.videoWidth||((d=this.parsedSrc.params.videoOptions)!=null?d.videoWidth:void 0)||this.origWidth,10),this.origVideoHeight=parseInt(this.parsedSrc.params.videoHeight||((e=this.parsedSrc.params.videoOptions)!=null?e.videoHeight:void 0)||this.origHeight,10),this.origPluginWidth=this.origWidth-this.origVideoWidth,this.origPluginHeight=this.origHeight-this.origVideoHeight,this.origAspectRatio=this.origVideoHeight?this.origVideoWidth/this.origVideoHeight:1.333;
if(this.parsedSrc.params.videoFoam){return this._videoFoam=b.obj.cast(this.parsedSrc.params.videoFoam)
}},a.prototype.init=function(){var g,k,j,i,h=this;
if(b.detect.browser.ltie8){return this
}this.inferParamsFromSrc(),this.relay.bind("iframebound",function(){return h.bound(!0)
}),this.relay.bind("videoready",function(){return h.bound(function(){if(!h.looksDown()){return h.ready(!0)
}})
}),b.elem.bind(this.iframe,"load",function(){return h.startIframeHandshake()
}),this.startIframeHandshake(),this.ready(function(){if(h.state()==="playing"){return h._firedSyntheticPlay=!0,h.trigger("play")
}}),j=this.parsedSrc.params.plugin||{};
for(g in j){k=j[g],((i=k.outsideIframe)!=null?i.toString():void 0)==="true"&&this.addPlugin(g,k)
}return this.monitor(),this
},a.prototype.rebuild=function(){var h,m,l,k,j,i=this;
if(m=this.iframe.parentNode){this.bound(!1),this.ready(!1),l=document.createElement("span"),l.style.display="none",h=null,j=function(){return i.trigger("beforerebuild"),h=i.iframe.src,m.insertBefore(l,i.iframe),m.removeChild(i.iframe),i.iframe.src="javascript:return false;"
},k=function(){return i.iframe.src=h,m.insertBefore(i.iframe,l.nextSibling),m.removeChild(l),l=null,i._state="beforeplay",i.trigger("afterrebuild")
},b.detect.browser.msie&&b.detect.browser.version<9?(j(),b.timeout(""+this.uuid+".rebuild_delay",k,50)):(j(),k())
}return this
},a.prototype.remove=function(){var c=this;
return this._hasImpl(!1),this.hasData(!1),this.ready(!1),this.embedded(!1),b.eventLoop.remove(this.uuid),b.clearTimeouts(this.uuid),this.bound(function(){var d;
return d=function(){var e;
return b.elem.remove(c._foamDummyElem),c.iframe&&(e=c.iframe.parentNode)&&(c.iframe.wistiaApi=null,e.removeChild(c.iframe),c.iframe.src="javascript:return false;",c.iframe=c.container=null),c.trigger("down"),b.clearTimeouts(c.uuid),b.eventLoop.remove(c.uuid),c.ready.setQueue([]),c.hasData.setQueue([]),c._hasImpl.setQueue([]),c.trigger("afterremove"),c._bindings={},b.removeData("iframe_api."+c.signature),c.unbind
},c.relay.bind("_afterremove",d),c.postMessage("remove")
})
},a.prototype.reinitializePlugins=function(){return this.postMessage("reinitializePlugins")
},a.prototype.monitor=function(){var g,k,j,i,h=this;
return j=this.width(),i=b.elem.width(this.iframe),k=b.elem.height(this.iframe),g=!1,this.embedded(function(){return b.eventLoop.add(""+h.uuid+".monitor",500,function(){var A,z,y,x,w,v,u,t,f,e,d,c;
if(h.up()&&h.looksDown()){h._stateBeforeDown=h._state;
if(h.embedType()==="flash"){try{h.rebuild()
}catch(B){A=B
}}else{h.pause()
}h.ready(!1),h.down(!0),h.up(!1),h.trigger("down")
}else{h.down()&&h.looksUp()&&(h.down(!1),h.up(!0),h.embedType()==="flash"?h.rebuild():(h.ready(!0),h._stateBeforeDown==="playing"&&h.play()),h.trigger("up"))
}if(h.hasVideoFoam()&&h.up()&&h.looksUp()){h._parentBoxSizing==null&&(h._parentBoxSizing=b.elem.style(h.iframe.parentNode,"box-sizing")),h._parentBoxSizing==="border-box"||b.detect.browser.msie&&b.detect.browser.version<9?(h._foamDummyElem||(h._foamDummyElem=b.elem.fromObject({"class":"wistia_video_foam_dummy","data-source-container-id":h.container.id,style:{border:0,display:"block",height:0,margin:0,padding:0,position:"static",visibility:"hidden",width:"auto"}}),b.elem.before(h.iframe,h._foamDummyElem)),u=b.elem.width(h._foamDummyElem)):u=b.elem.width(h.iframe.parentNode);
if(j!==u||!g){g=!0,v=u,w=v-h.extraWidth(),x=h.heightForWidth(w),y=x+h.extraHeight(),((f=h.videoFoam())!=null?f.maxHeight:void 0)&&y>h.videoFoam().maxHeight&&(y=h.videoFoam().maxHeight,x=y-h.extraHeight(),w=h.widthForHeight(x),v=w+h.extraWidth()),((e=h.videoFoam())!=null?e.maxWidth:void 0)&&v>h.videoFoam().maxWidth&&(v=h.videoFoam().maxWidth,w=v-h.extraWidth(),x=h.heightForWidth(w),y=x+h.extraHeight()),((d=h.videoFoam())!=null?d.minHeight:void 0)&&y<h.videoFoam().minHeight&&(y=h.videoFoam().minHeight,x=y-h.extraHeight(),w=h.widthForHeight(x),v=w+h.extraWidth()),((c=h.videoFoam())!=null?c.minWidth:void 0)&&v<h.videoFoam().minWidth&&(v=h.videoFoam().minWidth,w=v-h.extraWidth(),x=h.heightForWidth(w),y=x+h.extraHeight()),h.width(v).height(y),b.timeout(""+h.uuid+".delayed_resize",function(){return h.width(v).height(y)
},1000),j=u
}}if(b.detect.browser.ltie8){t=b.elem.width(h.iframe),z=b.elem.height(h.iframe),t!==i&&(h.trigger("widthchange",t,i),i=t);
if(z!==i){return h.trigger("heightchange",z,k),k=z
}}})
})
},a.prototype.hasVideoFoam=function(){return this.videoFoam()!=null?this.videoFoam():/videoFoam=true/.test(this.src)
},a.prototype.stopMonitoring=function(){return b.eventLoop.remove(""+this.uuid+".monitor")
},a.prototype.looksDown=function(){return !this.iframe||!b.elem.inDom(this.iframe)||b.elem.isHidden(this.iframe)
},a.prototype.looksUp=function(){return !this.looksDown()
},a.prototype._trigger=function(){var e,g,f=this;
g=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[];
if(g==="play"){this._firedPlayCount+=1;
if(this.embedType()==="flash"&&this.params.autoPlay&&this._firedPlayCount===1&&this._firedSyntheticPlay){return
}}return b.timeout(""+this.uuid+".trigger."+g,function(){return f.trigger.apply(f,[g].concat(__slice.call(e)))
})
},a.prototype.play=function(){var c=this;
return this.ready(function(){return c.postMessage("play")
}),this
},a.prototype.pause=function(){var c=this;
return this.ready(function(){return c.postMessage("pause")
}),this
},a.prototype.time=function(d){var c=this;
return d!=null?(this.ready(function(){return c.postMessage("time",d)
}),this):this._time||0
},a.prototype.volume=function(d){var c=this;
return d!=null?(this.ready(function(){return c.postMessage("volume",d)
}),this):this._volume||0
},a.prototype.setEmail=function(c){return this.email(c)
},a.prototype.email=function(e){var d,f=this;
return e===void 0?this._email||((d=this.params)!=null?d.trackEmail:void 0)||null:(this.bound(function(){return f.postMessage("email",e)
}),this._email=e)
},a.prototype.foreignData=function(d){var e=this;
if(!b.detect.json){return
}if(d===void 0){return this._foreignData||null
}if(d===null){return this.bound(function(){return e.postMessage("foreignData",d)
}),this._foreignData=null
}if(!b.obj.isObject(d)){throw"foreignData can only be an Object"
}return d=b.obj.clone(d),this.bound(function(){return e.postMessage("foreignData",d)
}),this._foreignData=d
},a.prototype.height=function(d){var e=this;
return d!=null?(d=parseInt(d,10),this.bound(function(){return e.postMessage("height",d)
}),this.iframe.style.height=""+d+"px",this.iframe.height=d,this):b.elem.isHidden(this.iframe)?this.iframe.style.height!=null?parseInt(this.iframe.style.height,10):parseInt(this.iframe.height,10):b.elem.height(this.iframe)
},a.prototype.width=function(d){var e=this;
return d!=null?(d=parseInt(d,10),this.bound(function(){return e.postMessage("width",d)
}),this.iframe.style.width=""+d+"px",this.iframe.width=d,this):b.elem.isHidden(this.iframe)?this.iframe.style.width!=null?parseInt(this.iframe.style.width,10):parseInt(this.iframe.width,10):b.elem.width(this.iframe)
},a.prototype.videoHeight=function(e){var g,f=this;
return e!=null?(e=parseInt(e,10),this.bound(function(){return f.postMessage("videoHeight",e)
}),this.embedded(function(){var d;
f._height!=null?d=e+f._height-f._videoHeight:d=e+f.origPluginHeight,f.iframe.style.height=""+d+"px",f.iframe.height=d;
if(b.detect.browser.ltie8){return f._videoHeight=e
}}),this):this._videoHeight>0?this._videoHeight:(g=this.src.match(/videoHeight=(\d+)/))?parseInt(g[1],10):b.elem.height(this.iframe)
},a.prototype.videoWidth=function(e){var g,f=this;
return e!=null?(e=parseInt(e,10),this.bound(function(){return f.postMessage("videoWidth",e)
}),this.embedded(function(){var d;
f._width!=null?d=e+f._width-f._videoWidth:d=e+f.origPluginWidth,f.iframe.style.width=""+d+"px",f.iframe.width=d;
if(b.detect.browser.ltie8){return f._videoWidth=e
}}),this):this._videoWidth>0?this._videoWidth:(g=this.src.match(/videoWidth=(\d+)/))?parseInt(g[1],10):b.elem.width(this.iframe)
},a.prototype.extraHeight=function(){return this.origPluginHeight?this.origPluginHeight:this._height?this._height-this._videoHeight:0
},a.prototype.extraWidth=function(){return this.origPluginWidth?this.origPluginWidth:this._width?this._width-this._videoWidth:0
},a.prototype.heightForWidth=function(c){return Math.round(c/this.aspect())
},a.prototype.widthForHeight=function(c){return Math.round(c*this.aspect())
},a.prototype.aspect=function(){return this.origAspectRatio||1.333
},a.prototype.addPlugin=function(f,i){var h,g=this;
return i==null&&(i={}),i.on!==!1&&(this.injectedPlugin(f)||(i.outsideIframe?b.plugin._inject(this,f,i):b.detect.browser.msie?(h=b.url.parse(this.iframe.src),b.obj.set(h.params,["plugin",f],i),this.iframe.src=h.absolute()):this.bound(function(){return g.postMessage("addPlugin",f,i)
}),this._injectedPlugins[f]=!0)),this
},a.prototype.videoFoam=function(c){return c!=null?this._videoFoam=c:this._videoFoam
},a.prototype.hasPlugin=function(d){var c;
return !!(this._injectedPlugins[d]||((c=this.parsedSrc.params.plugin)!=null?c[d]:void 0))
},a.prototype.injectedPlugin=function(c){return !!this._injectedPlugins[c]
},a.prototype.duration=function(){return this._duration||null
},a.prototype.state=function(){return this._state||"beforeplay"
},a.prototype.name=function(){return this._name||""
},a.prototype.hashedId=function(){return this._hashedId||this.parsedSrc.path[this.parsedSrc.path.length-1]
},a.prototype.embedType=function(){return this._embedType
},a.prototype.eventKey=function(){return this._eventKey||null
},a.prototype.visitorKey=function(){return this._visitorKey||null
},a.prototype.getEventKey=function(){return this.eventKey()
},a.prototype.getVisitorKey=function(){return this.visitorKey()
},a.prototype.startIframeHandshake=function(){return this.postMessage("startIframeHandshake",this.signature)
},a.prototype.postMessage=function(){var g,k,j,i;
i=arguments[0],g=2<=arguments.length?__slice.call(arguments,1):[];
if(b.detect.browser.ltie8){return
}try{if(!this.iframe.contentWindow.postMessage){return
}}catch(h){k=h;
return
}return j={signature:this.signature,method:i,args:g},j=JSON.stringify(j),this.iframe.contentWindow.postMessage(j,"*")
},a.prototype.updateProperties=function(f){var i,h,g;
g=[];
for(i in f){h=f[i],b.obj.isObject(h)?g.push(this[i]=b.obj.merge({},this[i],h)):g.push(this[i]=h)
}return g
},a.prototype.enableFullscreen=function(){var h,g,l,k,j,i;
k="allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen".split(" "),i=[];
for(g=0,l=k.length;
g<l;
g++){h=k[g],i.push((j=this.iframe)!=null?j.setAttribute(h,h):void 0)
}return i
},a
}(),b.mixin(b.IframeApi.prototype,b.bindable),b.PlaylistIframeAPI=function(a){function d(){var c=this;
d.__super__.constructor.apply(this,arguments),this.relay.bind("boundcurrentvideo",function(){return c._currentVideo=(new b.IframeApi(c.iframe,{uuid:""+c.uuid+"-current-video",signature:""+c.signature+"-current-video"})).init()
})
}return __extends(d,a),d.prototype.embed=function(f,e){var g=this;
return this.ready(function(){return g.postMessage("embed",f,e)
})
},d.prototype.play=function(f,e){var g=this;
return this.ready(function(){return g.postMessage("play",f,e)
})
},d.prototype.currentVideo=function(){return this._currentVideo
},d
}(b.IframeApi),window.wistiaBindIframes=function(){var u,t,s,r,q,p,n,m,l,a;
s=document.getElementsByTagName("iframe"),r=[];
for(q=0,n=s.length;
q<n;
q++){t=s[q],!t.wistiaApi&&(/wistia_embed/.test(t.className)||t.name==="wistia_embed")?(t.wistiaApi=new b.IframeApi(t),b.data("iframe_api."+t.wistiaApi.signature,t.wistiaApi),t.wistiaApi.init(),r.push(t.wistiaApi),window.wistiaApi=t.wistiaApi):!t.wistiaApi&&(/wistia_playlist/.test(t.className)||t.name==="wistia_playlist")&&(t.wistiaApi=new b.PlaylistIframeAPI(t),b.data("iframe_api."+t.wistiaApi.signature,t.wistiaApi),t.wistiaApi.init(),r.push(t.wistiaApi),window.wistiaApi=t.wistiaApi)
}(l=window.wistiaEmbeds)!=null&&l.bindHandles(),a=[];
for(p=0,m=r.length;
p<m;
p++){u=r[p],a.push(u.trigger("initembed"))
}return a
},b._initializers.initIframeApi=function(){wistiaBindIframes();
if(!window._inWistiaIframe&&!window.wistiaDispatch&&!window._wistiaIframeShim){return window.wistiaDispatch==null&&(window.wistiaDispatch=function(a){var f,e;
if(a.data==="new-wistia-iframe"){return wistiaBindIframes()
}typeof a.data=="string"&&/wistia-iframe-/.test(a.data)?e=b.JSON.parse(a.data):e=a.data;
if(/wistia-iframe-/.test(e.signature)){if(!(f=b.data("iframe_api."+e.signature))){return typeof console!="undefined"&&console!==null?console.log("Ignored "+e.method+" call, no handle for "+e.signature):void 0
}if(e.method==="relay.trigger"){return b.obj.get(f,e.method).apply(f.relay,e.args)
}if(e.method!=="play"||!(b.detect.iphone||b.detect.ipad||b.detect.android)){return b.obj.get(f,e.method).apply(f,e.args)
}}}),b.elem.bind(window,"message",wistiaDispatch)
}},b._destructors.destroyIframeApi=function(){return window.wistiaDispatch&&b.elem.unbind(window,"message",window.wistiaDispatch),window.wistiaDispatch=null
}
})(Wistia);
var __hasProp={}.hasOwnProperty,__extends=function(f,e){function g(){this.constructor=f
}for(var h in e){__hasProp.call(e,h)&&(f[h]=e[h])
}return g.prototype=e.prototype,f.prototype=new g,f.__super__=e.prototype,f
},__slice=[].slice;
(function(b){if(window.WistiaEmbedListener){return
}return window.WistiaEmbedListener=function(a){function d(){var c=this;
this.uuid=b.seqId(),this.bindHandles(),this.bind("down",function(){return c.info("got down event, prune and rebind handles"),b.timeout("prune_zombies_later",function(){return c.pruneZombies(),c.bindHandles()
})
}),this.bind("up",function(e){return c.info("got up event, set _bound=false for",e),e._bound=!1,c.bindHandles()
})
}return __extends(d,a),d.prototype._log=function(){var e,f;
return f=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[],b[f].apply(b,[this.constructor.name].concat(__slice.call(e)))
},d.prototype.error=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["error"].concat(__slice.call(c)))
},d.prototype.warn=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},d.prototype.notice=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(c)))
},d.prototype.info=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["info"].concat(__slice.call(c)))
},d.prototype.debug=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["debug"].concat(__slice.call(c)))
},d.prototype.log=function(){var c;
return c=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["log"].concat(__slice.call(c)))
},d.prototype.bindHandles=function(){var h,m,l,k,j,i;
this._marshalEvent||(l=this,this._marshalEvent=function(){var e,f;
return f=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[],b.obj.castDeep(e),l.trigger.apply(l,[f,this].concat(__slice.call(e)))
}),h=this.allUnboundHandles(),this.info("bindHandles",h),i=[];
for(k=0,j=h.length;
k<j;
k++){m=h[k],this.info("bind to all events for",m),m.unbind("all",this._marshalEvent),m.bind("all",this._marshalEvent),m._bound=!0,i.push(this.push(m))
}return i
},d.prototype.pruneZombies=function(){var j,i,q,p,n,m,l,k;
this.info("pruneZombies"),i=[],l=this.allBoundHandles();
for(q=0,n=l.length;
q<n;
q++){j=l[q],j.looksDown()?this.info("prune zombie",j):i.push(j)
}this.length=0,k=[];
for(p=0,m=i.length;
p<m;
p++){j=i[p],k.push(this.push(j))
}return k
},d.prototype.allBoundHandles=function(){var g,f,j,i,h;
f=[],h=this.allHandles();
for(j=0,i=h.length;
j<i;
j++){g=h[j],g._bound&&f.push(g)
}return f
},d.prototype.allUnboundHandles=function(){var g,f,j,i,h;
f=[],h=this.allHandles();
for(j=0,i=h.length;
j<i;
j++){g=h[j],g._bound||f.push(g)
}return f
},d.prototype.allHandles=function(){return this.apiHandles().concat(this.iframeApiHandles())
},d.prototype.iframeApiHandles=function(){var g,f,j,i,h;
this.iframes||(this.iframes=document.getElementsByTagName("iframe")),f=[],h=this.iframes;
for(j=0,i=h.length;
j<i;
j++){g=h[j],g.wistiaApi&&f.push(g.wistiaApi)
}return f
},d.prototype.apiHandles=function(){var f,e,h,g;
e=[];
if(window.Wistia){g=Wistia.data("video");
for(h in g){f=g[h],e.push(f)
}}return e
},d.prototype.each=function(h){var g,l,k,j,i;
j=this.allBoundHandles(),i=[];
for(l=0,k=j.length;
l<k;
l++){g=j[l],i.push(h(g))
}return i
},d.prototype.onFind=function(f){var e,g=this;
return e=function(c){return c.up(function(){return g.info("onFind",c),f(c),c.unbind
})
},this.each(e),this.bind("initembed",e)
},d
}(Array),b.mixin(WistiaEmbedListener.prototype,b.bindable),b._initializers.initEmbedShepherd=function(){return window.wistiaEmbeds?(b.info("window.wistiaEmbeds already exists, call bindHandles"),wistiaEmbeds.bindHandles()):(b.info("initialize embed shepherd"),window.wistiaEmbeds=new WistiaEmbedListener),b.info("call window.wistiaEmbedShepherdReady()"),typeof window.wistiaEmbedShepherdReady=="function"?window.wistiaEmbedShepherdReady():void 0
},b._destructors.destroyEmbedShepherd=function(){var c;
return(c=window.wistiaEmbeds)!=null&&c.each(function(d){return d.unbind("all",window.wistiaEmbeds._marshalEvent),d._bound=!1
}),window.wistiaEmbeds=null
}
})(Wistia);
var __slice=[].slice;
(function(b){if(b.integrations){return
}return b.integrations={},b.integrations._all={},b.integrations.register=function(a,j){var i,h,g;
return i=function(f){var c;
return j[f]?(c=function(){var k,d;
return d=arguments[0],k=2<=arguments.length?__slice.call(arguments,1):[],d.hasData(function(){var m,l,e;
if(((m=d.params)!=null?m[b.util.camelCase(a)]:void 0)===!1){return
}if(a==="google_analytics"||((l=d._mediaData)!=null?(e=l.integrations)!=null?e[a]:void 0:void 0)){return j[f].apply(j,[d].concat(__slice.call(k)))
}})
},c):null
},h=function(f){var c;
return j[f]?(j.initialized=!1,c=function(){var k,d;
return d=arguments[0],k=2<=arguments.length?__slice.call(arguments,1):[],d.hasData(function(){var m,l,e;
if(((m=d.params)!=null?m[b.util.camelCase(a)]:void 0)===!1){return
}if(!j.initialized&&(a==="google_analytics"||((l=d._mediaData)!=null?(e=l.integrations)!=null?e[a]:void 0:void 0))){return j[f].apply(j,[d].concat(__slice.call(k))),j.initialized=!0
}})
},c):null
},g={pushPercentWatchedEvent:i("pushPercentWatchedEvent"),pushPlayEvent:i("pushPlayEvent"),pushConversionEvent:i("pushConversionEvent"),pushConversionMidrollLinkEvent:i("pushConversionMidrollLinkEvent"),pushConversionPostRollEvent:i("pushConversionPostRollEvent"),onFind:i("onFind"),onInit:h("onInit")},b.integrations._all[a]=g
},b.integrations.each=function(){var a,l,k,j,i,h;
l=arguments[0],a=2<=arguments.length?__slice.call(arguments,1):[],i=b.integrations._all,h=[];
for(j in i){k=i[j],typeof l=="string"?h.push(typeof k[l]=="function"?k[l].apply(k,a):void 0):h.push(l(k,j))
}return h
},b._initializers.initIntegrations=function(){if(b.integrations._setup){return
}return b.integrations.setup()
},b._destructors.destroyIntegrations=function(){return typeof wistiaEmbeds!="undefined"&&wistiaEmbeds!==null&&wistiaEmbeds.each(function(c){return typeof c._destroyIntegrations=="function"?c._destroyIntegrations():void 0
}),this._all={},b.integrations._setup=!1
},b.integrations.setup=function(){if(window._inWistiaIframe){return
}return b.integrations._setup=!0,wistiaEmbeds.onFind(function(s){var r,q,p,n,m,l,k,a;
m=[],k=function(){var u,t,j,i,g;
i=[0.25,0.5,0.75,1],g=[];
for(t=0,j=i.length;
t<j;
t++){u=i[t],g.push(function(f){var e;
return e=function(c){c=Math.round(c*100)/100;
if(c>=f){return b.integrations.each("pushPercentWatchedEvent",s,f),s.unbind
}},s.bind("percentwatchedchanged",e),m.push(e)
}(u))
}return g
},q=function(){var d;
return(d=b.integrations).each.apply(d,["pushConversionEvent",s].concat(__slice.call(arguments)))
},p=function(d){return b.integrations.each("pushConversionMidrollLinkEvent",s,d)
},n=function(d){return b.integrations.each("pushConversionPostRollEvent",s,d)
},l=function(){return b.integrations.each("pushPlayEvent",s),s.unbind
},r=function(){return s.hasData(function(){return k(),s.bind("conversion",q),s.bind("conversion-link",p),s.bind("conversion-postRoll",n),s.bind("play",l)
})
},a=function(){var d,g,f;
for(g=0,f=m.length;
g<f;
g++){d=m[g],s.unbind("percentwatchedchanged",d)
}return m=[],s.unbind("play",l),s.unbind("conversion",q)
},s._initIntegrations=function(){return r()
},s._destroyIntegrations=function(){return a()
},s.bind("beforereplace",a),s.bind("afterreplace",r),r(),b.integrations.each("onInit",s),b.integrations.each("onFind",s);
if(s.state==="playing"){return l()
}})
}
})(Wistia),function(b){return b.integrations.register("google_analytics",{pushPercentWatchedEvent:function(d,c){return this._pushEvent(""+Math.round(c*100)+"% Watched",d.name())
},pushPlayEvent:function(c){return this._pushEvent("Play",c.name())
},pushConversionEvent:function(e,d,f){return this._pushEvent("Conversion",e.name())
},pushConversionMidrollLinkEvent:function(d,c){return this._pushEvent("Clicked Link - "+c.link,d.name())
},pushConversionPostRollEvent:function(d,c){return this._pushEvent("Clicked Link - "+c.link,d.name())
},_gaTrackers:function(){var w,v,u,t,s,r,q,p,n,m,l;
w=[];
if(typeof ga!="undefined"&&ga!==null?ga.getAll:void 0){n=ga.getAll();
for(u=0,r=n.length;
u<r;
u++){v=n[u],w.push(v.get("name"))
}}if(typeof gaTracker!="undefined"&&gaTracker!==null?gaTracker.getAll:void 0){m=gaTracker.getAll();
for(t=0,q=m.length;
t<q;
t++){v=m[t],w.push(v.get("name"))
}}if(typeof __gaTracker!="undefined"&&__gaTracker!==null?__gaTracker.getAll:void 0){l=__gaTracker.getAll();
for(s=0,p=l.length;
s<p;
s++){v=l[s],w.push(v.get("name"))
}}return w
},_pushEvent:function(a,q){var p,n,m,l,k,j;
if(window[window.GoogleAnalyticsObject]!=null){p=window[window.GoogleAnalyticsObject],k=this._gaTrackers(),j=[];
for(m=0,l=k.length;
m<l;
m++){n=k[m],p(""+n+".send","event","Video",a,q),j.push(b.info("Push to "+window.GoogleAnalyticsObject+": "+n+".send, event, Video, "+a+", "+q))
}return j
}if(window._gaq!=null){return _gaq.push(["_trackEvent","Video",a,q]),b.info("Push to _gaq: _trackEvent, Video, "+a+", "+q)
}}})
}(Wistia);
var __slice=[].slice;
(function(b){return b.integrations.register("hubspot",{onFind:function(d){var c=this;
return window._hsq.push(function(a){return c._setForeignData(d,a)
})
},onInit:function(){var a;
return window._hsq==null&&(window._hsq=[]),a=!1,b.visitorKey.ready(function(){if(a){return
}return _hsq.push(["identify",{wistia_visitor_key:b.visitorKey.value()}]),a=!0
})
},pushPercentWatchedEvent:function(d,c){return this._pushEvent(d.name(),""+Math.round(c*100)+"% Watched")
},pushPlayEvent:function(c){return this._pushEvent(c.name(),"play")
},pushConversionEvent:function(){var e,d,f;
return f=arguments[0],d=arguments[1],e=3<=arguments.length?__slice.call(arguments,2):[],this._pushEvent(f.name(),"conversion")
},pushConversionMidrollLinkEvent:function(d,c){return this._pushEvent(d.name(),"click - "+c.link)
},pushConversionPostRollEvent:function(d,c){return this._pushEvent(d.name(),"click - "+c.link)
},_pushEvent:function(d,c){return _hsq.push(["trackEvent",{id:'Video "'+d+'": '+c}])
},_setForeignData:function(g,f){var j,i,h;
return i=document.location.href.split("?")[0],j=((h=document.getElementsByTagName("title")[0])!=null?h.innerHTML:void 0)||"",j=j.replace(/^[\n\s]+/,"").replace(/[\n\s]+$/,""),j=j.replace(/[^\x00-\x7F]/g,""),g.foreignData({hubspot_hutk:f.utk.visitor,wistia_visitor_key:g.visitorKey(),page_url:i,page_name:j,canonical_url:f.canonicalUrl,page_id:f.pageId,content_type:f.contentType})
}})
})(Wistia),function(b){return b.integrations.register("marketo",{onFind:function(c){return this._setForeignData(c)
},pushPercentWatchedEvent:function(d,c){return this._pushEvent(d,""+Math.round(c*100)+"% Watched")
},pushPlayEvent:function(c){return this._pushEvent(c,"Played")
},pushConversionEvent:function(e,d,f){return this._pushEvent(e,"Conversion: "+f)
},pushConversionMidrollLinkEvent:function(d,c){return this._pushEvent(d,"Clicked Link - "+c.link)
},pushConversionPostRollEvent:function(d,c){return this._pushEvent(d,"Clicked Link - "+c.link)
},_pushEvent:function(d,c){if(!window.Munchkin){return
}return this._setForeignData(d),Munchkin.munchkinFunction("visitWebPage",{url:' - Wistia Video: "'+d.name()+'" - '+c})
},_setForeignData:function(d,c){return c==null&&(c=""),this._cookie||this._setCookie(),d.foreignData({marketoCookie:this._cookie})
},_setCookie:function(){return this._cookie=b.cookie("_mkto_trk")
}})
}(Wistia);
var __slice=[].slice;
(function(d){var c;
c=d;
if(c.VisitorKey){return
}return c.DISTILLERY_COOKIE="__distillery",c.VisitorKey=function(){function b(){this.ready=new c.StopGo,window.wistiaIframeShim===!1||c.detect.browser.msie&&(c.detect.browser.version<8||c.detect.browser.quirks)?(this.savedValue()||(this._origin="new",this.persist(c.VisitorKey.generate())),this.ready(!0)):window._wistiaIframeShim?this.setupInsideShim():(this.setupOutsideShim(),this.executeShim("send_visitor_key|"+(this.savedValue()||""),!0))
}return b.prototype._log=function(){var e,f;
return f=arguments[0],e=2<=arguments.length?__slice.call(arguments,1):[],c[f].apply(c,["visitorKey"].concat(__slice.call(e)))
},b.prototype.error=function(){var e;
return e=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["error"].concat(__slice.call(e)))
},b.prototype.warn=function(){var e;
return e=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(e)))
},b.prototype.notice=function(){var e;
return e=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["notice"].concat(__slice.call(e)))
},b.prototype.info=function(){var e;
return e=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["info"].concat(__slice.call(e)))
},b.prototype.debug=function(){var e;
return e=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["debug"].concat(__slice.call(e)))
},b.prototype.log=function(){var e;
return e=1<=arguments.length?__slice.call(arguments,0):[],this._log.apply(this,["log"].concat(__slice.call(e)))
},b.prototype.setupInsideShim=function(){var e=this;
return this.info("@setupInsideShim"),this._insideShim==null&&(this._insideShim=function(m){var l,k,j,i,a;
if(typeof m.data=="string"&&/^send_visitor_key/.test(m.data)){return a=m.data.split("|"),l=a[0],i=a[1],e.isValid()?(k=c.localStorage(c.DISTILLERY_COOKIE)?(e.info("post up visitor key from localStorage",e.value()),"localstorage"):c.cookie(c.DISTILLERY_COOKIE)?(e.info("post up visitor key from cookie",e.value()),"cookie"):(e.notice("post up visitor key from memory",e.value()),"memory"),i&&i!==e.value()&&(e.notice("suggestedKey provided, but has a different value than shim:",i,"vs",e.value()),k+="-conflict"),parent.postMessage("visitor_key|"+e.value()+"|"+k,"*")):c.VisitorKey.isValid(i)?(e.info("post up suggested visitor key from parent",i),e.persist(i),parent.postMessage("visitor_key|"+i+"|suggested","*")):(j=c.VisitorKey.generate(),e.info("post up newly generated key",j),e.persist(j),parent.postMessage("visitor_key|"+j+"|new","*")),c.elem.unbind
}if(typeof m.data=="string"&&/^clear_visitor_key/.test(m.data)){return e.info("insideShim clear visitor key"),e.clearFromCurrentDomain(),c.elem.unbind
}}),c.elem.rebind(window,"message",this._insideShim)
},b.prototype.setupOutsideShim=function(){var e=this;
return this.info("@setupOutsideShim"),this._outsideShim==null&&(this._outsideShim=function(k){var j,i,h,a;
c.clearTimeouts("shim_timeout");
if(typeof k.data=="string"&&/^visitor_key/.test(k.data)){return a=k.data.split("|"),j=a[0],h=a[1],i=a[2],e._origin=i,e.info("outsideShim got message "+k.data),e.persist(h),c.timeout("remove_iframe_shim",function(){return c.elem.remove(e._iframeShim)
},1000),c.timeout("visitor_key_ready",function(){return e.info("visitorKey ready(true)"),e.ready(!0)
}),c.elem.unbind
}}),c.elem.rebind(window,"message",this._outsideShim)
},b.prototype.executeShim=function(f,i){var h,g=this;
i==null&&(i=!1),this.info("@executeShim",f,i),this._iframeShim=c.elem.fromObject({allowtransparency:"true",frameborder:0,height:1,scrolling:"no",src:""+c.proto()+"//"+c.remote.embedHost()+"/embed/iframe_shim?"+c.url.jsonToParams(this.ev1ParamsForShim()),style:{height:"1px",left:"-200px",position:"absolute",top:"-200px",width:"1px"},tagName:"iframe",width:1}),this._iframeShim.onload=function(){return g.info("post request for visitor key",f),g._iframeShim.contentWindow.postMessage(f,"*")
},(h=document.getElementsByTagName("script")[0])&&c.elem.after(h,this._iframeShim);
if(i){return c.timeout("shim_timeout",function(){return g.notice("shim timeout for",f),c.elem.unbind(window,"message",g._outsideShim),g.savedValue()||(g._origin="timeout",g.persist(c.VisitorKey.generate())),g.ready(!0)
},5000)
}},b.prototype.persist=function(e){var f;
if(!c.VisitorKey.isValid(e)){this.error(new Error("Attempted to persist invalid visitor key '"+e+"'"));
return
}this.info("@persist",e),this._value=e,this.localStorageValue()!==this._value&&c.localStorage(c.DISTILLERY_COOKIE,this._value);
if(this.cookieValue()!==this._value){return f=new Date,f.setTime(f.getTime()+31536000000),c.cookie(c.DISTILLERY_COOKIE,this._value,{expires:f,path:"/"})
}},b.prototype.clear=function(){this.info("clear"),this.clearFromCurrentDomain();
if(!window._wistiaIframeShim){return this.clearFromShimDomain()
}},b.prototype.clearFromCurrentDomain=function(){return c.removeLocalStorage(c.DISTILLERY_COOKIE,null),c.cookie(c.DISTILLERY_COOKIE,"",{expires:0,path:"/"})
},b.prototype.clearFromShimDomain=function(){return this.executeShim("clear_visitor_key")
},b.prototype.value=function(){return this._value||this.savedValue()
},b.prototype.savedValue=function(){return this.localStorageValue()||this.cookieValue()
},b.prototype.cookieValue=function(){return c.cookie(c.DISTILLERY_COOKIE)
},b.prototype.localStorageValue=function(){return c.localStorage(c.DISTILLERY_COOKIE)
},b.prototype.isValid=function(){return c.VisitorKey.isValid(this.value())
},b.prototype.origin=function(){return this._origin
},b.prototype.ev1ParamsForShim=function(){var v,u,t,s,r,q,p,n,m,l;
p=document.getElementsByTagName("script"),s={domain:"net"};
for(m=0,l=p.length;
m<l;
m++){q=p[m];
if(n=q.getAttribute("src")){if(!n.indexOf){continue
}v=n.indexOf(c.remote.embedHost())>=0?"com":n.indexOf(c.remote.externalEmbedHost())>=0?"net":null,u=n.indexOf("/E-v1.js")>=0,t=n.indexOf("/static/")>=0;
if(v&&u){return r={domain:v},t&&(r.legacy=!0),r
}}}return{domain:"net"}
},b.prototype.cancelShim=function(){this._iframeShim&&c.elem.remove(c.visitorKey._iframeShim);
if(this._outsideShim){return c.elem.unbind(window,"message",this._outsideShim)
}},b.isValid=function(e){return(e!=null?e.length:void 0)>25&&/^[a-z0-9_\-\.]+$/i.test(e)
},b.generate=function(){return c.uniqId("v20150227_")
},b
}(),c._initializers.initVisitorKey=function(){return c.visitorKey=new c.VisitorKey
},c._destructors.destroyVisitorKey=function(){var b;
return(b=c.visitorKey)!=null&&b.cancelShim(),c.visitorKey=null
}
})(Wistia),function(b){if(b.TimeHelper){return
}return b.TimeHelper=function(){function g(){}var f,e,h;
return h=function(i){var l,k,j;
return i=e(i),j=Math.floor(i),l=Math.floor(j/3600),j-=l*3600,k=Math.floor(j/60),j-=k*60,{hours:l,minutes:k,seconds:j}
},e=function(c){return Math.abs(parseInt(c))|0
},g.secondsToIso8601=function(i){var c,m,l,k,j;
return c=h(i),m=c.hours.toString(),l=c.minutes.toString(),k=c.seconds.toString(),j=["00".substring(m.length)+m,"00".substring(l.length)+l,"00".substring(k.length)+k],j.join(":")
},g.secondsToHumanDuration=function(c){var m,l,k,j,i;
c=e(c),m=h(c),j={hours:m.hours!==0?""+m.hours+"h":void 0,minutes:m.minutes!==0||c>=60&&m.seconds!==0?""+m.minutes+"m":void 0,seconds:m.seconds!==0||m.minutes===0&&c<3600?""+m.seconds+"s":void 0},k="";
for(l in j){i=j[l],i!=null&&(k+=i)
}return k
},g.TRIM_REGEXP=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,g.isValidHumanDuration=function(A){var z,y,x,w,v,u,t,s,r,q,p,n;
if(A===void 0||A===null||A===""){return !1
}A=(""+A).replace(this.TRIM_REGEXP,"");
if(A.match(/[\dhms]+/)===null||A.match(/[hms]+/)===null){return !1
}if(A.match(/[\dhms]+/)[0]!==A){return !1
}p=["h","m","s"];
for(t=0,r=p.length;
t<r;
t++){y=p[t],v=new RegExp(y,"g");
if(A.match(v)!==null&&A.match(v).length>1){return !1
}}x=A.match(/[hms]/g);
if(x.length===3){if(x[0]!=="h"||x[1]!=="m"||x[2]!=="s"){return !1
}}if(x.length===2){z=!1,w=x.join(""),n=["hm","hs","ms"];
for(s=0,q=n.length;
s<q;
s++){u=n[s];
if(w===u){z=!0;
break
}}if(!z){return !1
}}return !0
},f=function(j,i){var l,k;
return l=new RegExp("\\d+"+j),k=i.match(l),k?parseInt(k[0].match(/\d+/)[0]):0
},g.humanDurationToSeconds=function(a){var m,l,k,j,i;
a=a?a.toString():"",k=0;
if(this.isValidHumanDuration(a)){l=[f("h",a)*3600,f("m",a)*60,f("s",a)];
for(j=0,i=l.length;
j<i;
j++){m=l[j],k+=m
}}return k
},g.isValidIso8601=function(c){return c===void 0||c===null||c===""?!1:typeof c!="string"?!1:(c=c.replace(this.TRIM_REGEXP,""),c.match(/[\d:]+/)===null?!1:c.match(/[\d:]+/)[0]!==c?!1:!0)
},g.iso8601ToSeconds=function(j){var r,q,p,n,m,l,k;
j=j?j.toString():"",m=0,n=[1,60,3600],q=j.split(":").reverse();
for(p=l=0,k=q.length;
l<k;
p=++l){r=q[p],m+=r*n[p]
}return e(m)
},g
}()
}(Wistia),function(b){return b._initializers.initSpecificTime=function(){var a,h,g;
try{if(parent!==self){return
}g=location.href.match(/[\?&]wtime=([\dhms]*)/);
if((g!=null?g.length:void 0)>=2){if(b._specificTimeInitiated){return
}return b._specificTimeInitiated=!0,h=!1,wistiaEmbeds.onFind(function(c){if(!h){return h=!0,c.time(g[1]).play()
}})
}return
}catch(f){return a=f,b.error(a),b._specificTimeInitiated=!1
}}
}(Wistia),function(f){var e,h,g;
return e=f,g=e.initializeOnce=function(){return e._initializers.initDetect(),e._initializers.initLocalStorage(),e._initializers.initWLog(),e._initializers.initVisitorKey(),e._initializers.initEventLoop(),e._initializers.initFullscreenTriggers()
},h=e.initializeEveryTime=function(){var b;
return e._initializers.initEmbedShepherd(),e._initializers.initAsyncEmbeds(),e._initializers.initIframeApi(),e._initializers.initEmbedLinks(),e._initializers.initSpecificTime(),e._initializers.initIntegrations(),(b=e.eventLoop)!=null?b.resync():void 0
},e.destroy=function(){return e._destructors.destroyAsyncEmbeds(),e._destructors.destroyIframeApi(),e._destructors.destroyEmbedShepherd(),e._destructors.destroyEmbedLinks(),e._destructors.destroyFullscreenTriggers(),e._destructors.destroyEventLoop(),e._destructors.destroyVisitorKey(),e._destructors.destroyWLog(),e._destructors.destroyIntegrations()
},e.destroyGlobals=function(){var i,d,j;
window.Wistia=null,window.wistiaApi=null,window.wistiaDispatch=null,window.wistiaBindIframes=null,window.wistiaEmbeds=null,window._wistiaElemId=null,window.wistiaInitQueue=null,window.wistiaInit=null,window.wistiaEmbedShepherdReady=null,j=[];
for(i in window){d=window[i],/^wistiajson/.test(i)?j.push(window[i]=null):j.push(void 0)
}return j
},e.reinitialize=function(){return e.destroy(),e.initializeOnce(),e.initializeEveryTime()
},e._initialized||(e._initialized=!0,e.initializeOnce()),e.initializeEveryTime()
}(Wistia);
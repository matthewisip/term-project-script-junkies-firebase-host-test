(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},Mr=[],jt=()=>{},I_=()=>!1,No=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$c=t=>t.startsWith("onUpdate:"),ct=Object.assign,qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},w_=Object.prototype.hasOwnProperty,ve=(t,e)=>w_.call(t,e),se=Array.isArray,Lr=t=>ri(t)==="[object Map]",xo=t=>ri(t)==="[object Set]",$u=t=>ri(t)==="[object Date]",ce=t=>typeof t=="function",Oe=t=>typeof t=="string",Wt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",nf=t=>(Se(t)||ce(t))&&ce(t.then)&&ce(t.catch),rf=Object.prototype.toString,ri=t=>rf.call(t),A_=t=>ri(t).slice(8,-1),sf=t=>ri(t)==="[object Object]",Hc=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},b_=/-(\w)/g,bt=Mo(t=>t.replace(b_,(e,n)=>n?n.toUpperCase():"")),S_=/\B([A-Z])/g,_r=Mo(t=>t.replace(S_,"-$1").toLowerCase()),Lo=Mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ka=Mo(t=>t?`on${Lo(t)}`:""),Dn=(t,e)=>!Object.is(t,e),$i=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},of=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},no=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qu;const Fo=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?k_(r):Kc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(t)||Se(t))return t}const R_=/;(?![^(]*\))/g,C_=/:([^]+)/,P_=/\/\*[^]*?\*\//g;function k_(t){const e={};return t.replace(P_,"").split(R_).forEach(n=>{if(n){const r=n.split(C_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function on(t){let e="";if(Oe(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=on(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const D_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O_=jc(D_);function af(t){return!!t||t===""}function V_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Uo(t[r],e[r]);return n}function Uo(t,e){if(t===e)return!0;let n=$u(t),r=$u(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Wt(t),r=Wt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?V_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Uo(t[a],e[a]))return!1}}return String(t)===String(e)}function N_(t,e){return t.findIndex(n=>Uo(n,e))}const cf=t=>!!(t&&t.__v_isRef===!0),qe=t=>Oe(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===rf||!ce(t.toString))?cf(t)?qe(t.value):JSON.stringify(t,lf,2):String(t),lf=(t,e)=>cf(e)?lf(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Da(r,i)+" =>"]=s,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Da(n))}:Wt(e)?Da(e):Se(e)&&!se(e)&&!sf(e)?String(e):e,Da=(t,e="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class x_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function M_(){return gt}let Ae;const Oa=new WeakSet;class uf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||df(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hu(this),ff(this);const e=Ae,n=kt;Ae=this,kt=!0;try{return this.fn()}finally{pf(this),Ae=e,kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rc(this)&&this.run()}get dirty(){return rc(this)}}let hf=0,ks,Ds;function df(t,e=!1){if(t.flags|=8,e){t.next=Ds,Ds=t;return}t.next=ks,ks=t}function zc(){hf++}function Wc(){if(--hf>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ks;){let e=ks;for(ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ff(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gc(r),L_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js))return;t.globalVersion=js;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!rc(t)){t.flags&=-3;return}const n=Ae,r=kt;Ae=t,kt=!0;try{ff(t);const s=t.fn(t._value);(e.version===0||Dn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,kt=r,pf(t),t.flags&=-3}}function Gc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function L_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kt=!0;const mf=[];function Kn(){mf.push(kt),kt=!1}function zn(){const t=mf.pop();kt=t===void 0?!0:t}function Hu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let js=0;class F_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!kt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new F_(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,_f(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){zc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wc()}}}function _f(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_f(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sc=new WeakMap,lr=Symbol(""),ic=Symbol(""),$s=Symbol("");function Ze(t,e,n){if(kt&&Ae){let r=sc.get(t);r||sc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Qc),s.map=r,s.key=n),s.track()}}function an(t,e,n,r,s,i){const a=sc.get(t);if(!a){js++;return}const c=l=>{l&&l.trigger()};if(zc(),e==="clear")a.forEach(c);else{const l=se(t),h=l&&Hc(n);if(l&&n==="length"){const f=Number(r);a.forEach((g,I)=>{(I==="length"||I===$s||!Wt(I)&&I>=f)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get($s)),e){case"add":l?h&&c(a.get("length")):(c(a.get(lr)),Lr(t)&&c(a.get(ic)));break;case"delete":l||(c(a.get(lr)),Lr(t)&&c(a.get(ic)));break;case"set":Lr(t)&&c(a.get(lr));break}}Wc()}function Pr(t){const e=ye(t);return e===t?e:(Ze(e,"iterate",$s),wt(t)?e:e.map(et))}function Bo(t){return Ze(t=ye(t),"iterate",$s),t}const U_={__proto__:null,[Symbol.iterator](){return Va(this,Symbol.iterator,et)},concat(...t){return Pr(this).concat(...t.map(e=>se(e)?Pr(e):e))},entries(){return Va(this,"entries",t=>(t[1]=et(t[1]),t))},every(t,e){return nn(this,"every",t,e,void 0,arguments)},filter(t,e){return nn(this,"filter",t,e,n=>n.map(et),arguments)},find(t,e){return nn(this,"find",t,e,et,arguments)},findIndex(t,e){return nn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nn(this,"findLast",t,e,et,arguments)},findLastIndex(t,e){return nn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Na(this,"includes",t)},indexOf(...t){return Na(this,"indexOf",t)},join(t){return Pr(this).join(t)},lastIndexOf(...t){return Na(this,"lastIndexOf",t)},map(t,e){return nn(this,"map",t,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...t){return Ts(this,"push",t)},reduce(t,...e){return Ku(this,"reduce",t,e)},reduceRight(t,...e){return Ku(this,"reduceRight",t,e)},shift(){return Ts(this,"shift")},some(t,e){return nn(this,"some",t,e,void 0,arguments)},splice(...t){return Ts(this,"splice",t)},toReversed(){return Pr(this).toReversed()},toSorted(t){return Pr(this).toSorted(t)},toSpliced(...t){return Pr(this).toSpliced(...t)},unshift(...t){return Ts(this,"unshift",t)},values(){return Va(this,"values",et)}};function Va(t,e,n){const r=Bo(t),s=r[e]();return r!==t&&!wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const B_=Array.prototype;function nn(t,e,n,r,s,i){const a=Bo(t),c=a!==t&&!wt(t),l=a[e];if(l!==B_[e]){const g=l.apply(t,i);return c?et(g):g}let h=n;a!==t&&(c?h=function(g,I){return n.call(this,et(g),I,t)}:n.length>2&&(h=function(g,I){return n.call(this,g,I,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function Ku(t,e,n,r){const s=Bo(t);let i=n;return s!==t&&(wt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,et(c),l,t)}),s[e](i,...r)}function Na(t,e,n){const r=ye(t);Ze(r,"iterate",$s);const s=r[e](...n);return(s===-1||s===!1)&&Zc(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function Ts(t,e,n=[]){Kn(),zc();const r=ye(t)[e].apply(t,n);return Wc(),zn(),r}const j_=jc("__proto__,__v_isRef,__isVue"),yf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function $_(t){Wt(t)||(t=String(t));const e=ye(this);return Ze(e,"has",t),e.hasOwnProperty(t)}class vf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?X_:wf:i?If:Tf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=U_[n]))return l;if(n==="hasOwnProperty")return $_}const c=Reflect.get(e,n,rt(e)?e:r);return(Wt(n)?yf.has(n):j_(n))||(s||Ze(e,"get",n),i)?c:rt(c)?a&&Hc(n)?c:c.value:Se(c)?s?Af(c):Yc(c):c}}class Ef extends vf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ur(i);if(!wt(r)&&!ur(r)&&(i=ye(i),r=ye(r)),!se(e)&&rt(i)&&!rt(r))return l?!1:(i.value=r,!0)}const a=se(e)&&Hc(n)?Number(n)<e.length:ve(e,n),c=Reflect.set(e,n,r,rt(e)?e:s);return e===ye(s)&&(a?Dn(r,i)&&an(e,"set",n,r):an(e,"add",n,r)),c}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&an(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wt(n)||!yf.has(n))&&Ze(e,"has",n),r}ownKeys(e){return Ze(e,"iterate",se(e)?"length":lr),Reflect.ownKeys(e)}}class q_ extends vf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const H_=new Ef,K_=new q_,z_=new Ef(!0);const oc=t=>t,Oi=t=>Reflect.getPrototypeOf(t);function W_(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),a=Lr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?oc:e?ac:et;return!e&&Ze(i,"iterate",l?ic:lr),{next(){const{value:g,done:I}=h.next();return I?{value:g,done:I}:{value:c?[f(g[0]),f(g[1])]:f(g),done:I}},[Symbol.iterator](){return this}}}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function G_(t,e){const n={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);t||(Dn(s,c)&&Ze(a,"get",s),Ze(a,"get",c));const{has:l}=Oi(a),h=e?oc:t?ac:et;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ze(ye(s),"iterate",lr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return t||(Dn(s,c)&&Ze(a,"has",s),Ze(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?oc:t?ac:et;return!t&&Ze(l,"iterate",lr),c.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return ct(n,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(s){!e&&!wt(s)&&!ur(s)&&(s=ye(s));const i=ye(this);return Oi(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!wt(i)&&!ur(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Oi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?Dn(i,f)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Oi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&an(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=W_(s,t,e)}),n}function Jc(t,e){const n=G_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const Q_={get:Jc(!1,!1)},J_={get:Jc(!1,!0)},Y_={get:Jc(!0,!1)};const Tf=new WeakMap,If=new WeakMap,wf=new WeakMap,X_=new WeakMap;function Z_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ey(t){return t.__v_skip||!Object.isExtensible(t)?0:Z_(A_(t))}function Yc(t){return ur(t)?t:Xc(t,!1,H_,Q_,Tf)}function ty(t){return Xc(t,!1,z_,J_,If)}function Af(t){return Xc(t,!0,K_,Y_,wf)}function Xc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=ey(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Fr(t){return ur(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function wt(t){return!!(t&&t.__v_isShallow)}function Zc(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function ny(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&of(t,"__v_skip",!0),t}const et=t=>Se(t)?Yc(t):t,ac=t=>Se(t)?Af(t):t;function rt(t){return t?t.__v_isRef===!0:!1}function xa(t){return ry(t,!1)}function ry(t,e){return rt(t)?t:new sy(t,e)}class sy{constructor(e,n){this.dep=new Qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||wt(e)||ur(e);e=r?e:ye(e),Dn(e,n)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function iy(t){return rt(t)?t.value:t}const oy={get:(t,e,n)=>e==="__v_raw"?t:iy(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bf(t){return Fr(t)?t:new Proxy(t,oy)}class ay{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return df(this,!0),!0}get value(){const e=this.dep.track();return gf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cy(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new ay(r,s,n)}const Ni={},ro=new WeakMap;let sr;function ly(t,e=!1,n=sr){if(n){let r=ro.get(n);r||ro.set(n,r=[]),r.push(t)}}function uy(t,e,n=we){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=K=>s?K:wt(K)||s===!1||s===0?cn(K,1):cn(K);let f,g,I,S,O=!1,L=!1;if(rt(t)?(g=()=>t.value,O=wt(t)):Fr(t)?(g=()=>h(t),O=!0):se(t)?(L=!0,O=t.some(K=>Fr(K)||wt(K)),g=()=>t.map(K=>{if(rt(K))return K.value;if(Fr(K))return h(K);if(ce(K))return l?l(K,2):K()})):ce(t)?e?g=l?()=>l(t,2):t:g=()=>{if(I){Kn();try{I()}finally{zn()}}const K=sr;sr=f;try{return l?l(t,3,[S]):t(S)}finally{sr=K}}:g=jt,e&&s){const K=g,pe=s===!0?1/0:s;g=()=>cn(K(),pe)}const F=M_(),W=()=>{f.stop(),F&&F.active&&qc(F.effects,f)};if(i&&e){const K=e;e=(...pe)=>{K(...pe),W()}}let Q=L?new Array(t.length).fill(Ni):Ni;const J=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const pe=f.run();if(s||O||(L?pe.some((_e,w)=>Dn(_e,Q[w])):Dn(pe,Q))){I&&I();const _e=sr;sr=f;try{const w=[pe,Q===Ni?void 0:L&&Q[0]===Ni?[]:Q,S];l?l(e,3,w):e(...w),Q=pe}finally{sr=_e}}}else f.run()};return c&&c(J),f=new uf(g),f.scheduler=a?()=>a(J,!1):J,S=K=>ly(K,!1,f),I=f.onStop=()=>{const K=ro.get(f);if(K){if(l)l(K,4);else for(const pe of K)pe();ro.delete(f)}},e?r?J(!0):Q=f.run():a?a(J.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function cn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,rt(t))cn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)cn(t[r],e,n);else if(xo(t)||Lr(t))t.forEach(r=>{cn(r,e,n)});else if(sf(t)){for(const r in t)cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function si(t,e,n,r){try{return r?t(...r):t()}catch(s){jo(s,e,n)}}function Gt(t,e,n,r){if(ce(t)){const s=si(t,e,n,r);return s&&nf(s)&&s.catch(i=>{jo(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function jo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||we;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](t,l,h)===!1)return}c=c.parent}if(i){Kn(),si(i,null,10,[t,l,h]),zn();return}}hy(t,n,s,r,a)}function hy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const at=[];let Lt=-1;const Ur=[];let An=null,kr=0;const Sf=Promise.resolve();let so=null;function Rf(t){const e=so||Sf;return t?e.then(this?t.bind(this):t):e}function dy(t){let e=Lt+1,n=at.length;for(;e<n;){const r=e+n>>>1,s=at[r],i=qs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function el(t){if(!(t.flags&1)){const e=qs(t),n=at[at.length-1];!n||!(t.flags&2)&&e>=qs(n)?at.push(t):at.splice(dy(e),0,t),t.flags|=1,Cf()}}function Cf(){so||(so=Sf.then(kf))}function fy(t){se(t)?Ur.push(...t):An&&t.id===-1?An.splice(kr+1,0,t):t.flags&1||(Ur.push(t),t.flags|=1),Cf()}function zu(t,e,n=Lt+1){for(;n<at.length;n++){const r=at[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;at.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pf(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,r)=>qs(n)-qs(r));if(Ur.length=0,An){An.push(...e);return}for(An=e,kr=0;kr<An.length;kr++){const n=An[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}An=null,kr=0}}const qs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kf(t){try{for(Lt=0;Lt<at.length;Lt++){const e=at[Lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),si(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Lt<at.length;Lt++){const e=at[Lt];e&&(e.flags&=-2)}Lt=-1,at.length=0,Pf(),so=null,(at.length||Ur.length)&&kf()}}let mt=null,Df=null;function io(t){const e=mt;return mt=t,Df=t&&t.type.__scopeId||null,e}function py(t,e=mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&rh(-1);const i=io(e);let a;try{a=t(...s)}finally{io(i),r._d&&rh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function oo(t,e){if(mt===null)return t;const n=Ko(mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=we]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&cn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Kn(),Gt(l,n,8,[t.el,c,t,e]),zn())}}const gy=Symbol("_vte"),my=t=>t.__isTeleport;function tl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,tl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Of(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(se(t)){t.forEach((O,L)=>ao(O,e&&(se(e)?e[L]:e),n,r,s));return}if(Os(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ko(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===we?c.refs={}:c.refs,g=c.setupState,I=ye(g),S=g===we?()=>!1:O=>ve(I,O);if(h!=null&&h!==l&&(Oe(h)?(f[h]=null,S(h)&&(g[h]=null)):rt(h)&&(h.value=null)),ce(l))si(l,c,12,[a,f]);else{const O=Oe(l),L=rt(l);if(O||L){const F=()=>{if(t.f){const W=O?S(l)?g[l]:f[l]:l.value;s?se(W)&&qc(W,i):se(W)?W.includes(i)||W.push(i):O?(f[l]=[i],S(l)&&(g[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else O?(f[l]=a,S(l)&&(g[l]=a)):L&&(l.value=a,t.k&&(f[t.k]=a))};a?(F.id=-1,pt(F,n)):F()}}}Fo().requestIdleCallback;Fo().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,Vf=t=>t.type.__isKeepAlive;function _y(t,e){Nf(t,"a",e)}function yy(t,e){Nf(t,"da",e)}function Nf(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($o(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vf(s.parent.vnode)&&vy(r,e,n,s),s=s.parent}}function vy(t,e,n,r){const s=$o(e,t,r,!0);xf(()=>{qc(r[e],s)},n)}function $o(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Kn();const c=ii(n),l=Gt(e,n,t,a);return c(),zn(),l});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=nt)=>{(!zs||t==="sp")&&$o(t,(...r)=>e(...r),n)},Ey=_n("bm"),Ty=_n("m"),Iy=_n("bu"),wy=_n("u"),Ay=_n("bum"),xf=_n("um"),by=_n("sp"),Sy=_n("rtg"),Ry=_n("rtc");function Cy(t,e=nt){$o("ec",t,e)}const Py="components";function Wu(t,e){return Dy(Py,t,!0,e)||t}const ky=Symbol.for("v-ndc");function Dy(t,e,n=!0,r=!1){const s=mt||nt;if(s){const i=s.type;{const c=vv(i,!1);if(c&&(c===e||c===bt(e)||c===Lo(bt(e))))return i}const a=Gu(s[t]||i[t],e)||Gu(s.appContext[t],e);return!a&&r?i:a}}function Gu(t,e){return t&&(t[e]||t[bt(e)]||t[Lo(bt(e))])}function Oy(t,e,n,r){let s;const i=n,a=se(t);if(a||Oe(t)){const c=a&&Fr(t);let l=!1;c&&(l=!wt(t),t=Bo(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?et(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const cc=t=>t?rp(t)?Ko(t):cc(t.parent):null,Vs=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cc(t.parent),$root:t=>cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lf(t),$forceUpdate:t=>t.f||(t.f=()=>{el(t.update)}),$nextTick:t=>t.n||(t.n=Rf.bind(t.proxy)),$watch:t=>ev.bind(t)}),Ma=(t,e)=>t!==we&&!t.__isScriptSetup&&ve(t,e),Vy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ma(r,e))return a[e]=1,r[e];if(s!==we&&ve(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&ve(h,e))return a[e]=3,i[e];if(n!==we&&ve(n,e))return a[e]=4,n[e];lc&&(a[e]=0)}}const f=Vs[e];let g,I;if(f)return e==="$attrs"&&Ze(t.attrs,"get",""),f(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==we&&ve(n,e))return a[e]=4,n[e];if(I=l.config.globalProperties,ve(I,e))return I[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ma(s,e)?(s[e]=n,!0):r!==we&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==we&&ve(t,a)||Ma(e,a)||(c=i[0])&&ve(c,a)||ve(r,a)||ve(Vs,a)||ve(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qu(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lc=!0;function Ny(t){const e=Lf(t),n=t.proxy,r=t.ctx;lc=!1,e.beforeCreate&&Ju(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:g,mounted:I,beforeUpdate:S,updated:O,activated:L,deactivated:F,beforeDestroy:W,beforeUnmount:Q,destroyed:J,unmounted:K,render:pe,renderTracked:_e,renderTriggered:w,errorCaptured:m,serverPrefetch:v,expose:T,inheritAttrs:A,components:R,directives:y,filters:dt}=e;if(h&&xy(h,r,null),a)for(const Te in a){const ge=a[Te];ce(ge)&&(r[Te]=ge.bind(n))}if(s){const Te=s.call(n,n);Se(Te)&&(t.data=Yc(Te))}if(lc=!0,i)for(const Te in i){const ge=i[Te],St=ce(ge)?ge.bind(n,n):ce(ge.get)?ge.get.bind(n,n):jt,Qn=!ce(ge)&&ce(ge.set)?ge.set.bind(n):jt,Xt=Tv({get:St,set:Qn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ve=>Xt.value=Ve})}if(c)for(const Te in c)Mf(c[Te],r,n,Te);if(l){const Te=ce(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ge=>{jy(ge,Te[ge])})}f&&Ju(f,t,"c");function Ue(Te,ge){se(ge)?ge.forEach(St=>Te(St.bind(n))):ge&&Te(ge.bind(n))}if(Ue(Ey,g),Ue(Ty,I),Ue(Iy,S),Ue(wy,O),Ue(_y,L),Ue(yy,F),Ue(Cy,m),Ue(Ry,_e),Ue(Sy,w),Ue(Ay,Q),Ue(xf,K),Ue(by,v),se(T))if(T.length){const Te=t.exposed||(t.exposed={});T.forEach(ge=>{Object.defineProperty(Te,ge,{get:()=>n[ge],set:St=>n[ge]=St})})}else t.exposed||(t.exposed={});pe&&t.render===jt&&(t.render=pe),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),y&&(t.directives=y),v&&Of(t)}function xy(t,e,n=jt){se(t)&&(t=uc(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=qi(s.from||r,s.default,!0):i=qi(s.from||r):i=qi(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Ju(t,e,n){Gt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mf(t,e,n,r){let s=r.includes(".")?Yf(n,r):()=>n[r];if(Oe(t)){const i=e[t];ce(i)&&Fa(s,i)}else if(ce(t))Fa(s,t.bind(n));else if(Se(t))if(se(t))t.forEach(i=>Mf(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&Fa(s,i,t)}}function Lf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>co(l,h,a,!0)),co(l,e,a)),Se(e)&&i.set(e,l),l}function co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&co(t,i,n,!0),s&&s.forEach(a=>co(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=My[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const My={data:Yu,props:Xu,emits:Xu,methods:ws,computed:ws,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ws,directives:ws,watch:Fy,provide:Yu,inject:Ly};function Yu(t,e){return e?t?function(){return ct(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function Ly(t,e){return ws(uc(t),uc(e))}function uc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ws(t,e){return t?ct(Object.create(null),t,e):e}function Xu(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:ct(Object.create(null),Qu(t),Qu(e??{})):e}function Fy(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Ff(){return{app:null,config:{isNativeTag:I_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uy=0;function By(t,e){return function(r,s=null){ce(r)||(r=ct({},r)),s!=null&&!Se(s)&&(s=null);const i=Ff(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Uy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Iv,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ce(f.install)?(a.add(f),f.install(h,...g)):ce(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,I){if(!l){const S=h._ceVNode||On(r,s);return S.appContext=i,I===!0?I="svg":I===!1&&(I=void 0),t(S,f,I),l=!0,h._container=f,f.__vue_app__=h,Ko(S.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Gt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Br;Br=h;try{return f()}finally{Br=g}}};return h}}let Br=null;function jy(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function qi(t,e,n=!1){const r=nt||mt;if(r||Br){const s=Br?Br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}const Uf={},Bf=()=>Object.create(Uf),jf=t=>Object.getPrototypeOf(t)===Uf;function $y(t,e,n,r=!1){const s={},i=Bf();t.propsDefaults=Object.create(null),$f(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ty(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=ye(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let I=f[g];if(qo(t.emitsOptions,I))continue;const S=e[I];if(l)if(ve(i,I))S!==i[I]&&(i[I]=S,h=!0);else{const O=bt(I);s[O]=hc(l,c,O,S,t,!1)}else S!==i[I]&&(i[I]=S,h=!0)}}}else{$f(t,e,s,i)&&(h=!0);let f;for(const g in c)(!e||!ve(e,g)&&((f=_r(g))===g||!ve(e,f)))&&(l?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=hc(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ve(e,g))&&(delete i[g],h=!0)}h&&an(t.attrs,"set","")}function $f(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Ps(l))continue;const h=e[l];let f;s&&ve(s,f=bt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:qo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(n),h=c||we;for(let f=0;f<i.length;f++){const g=i[f];n[g]=hc(s,l,g,h[g],t,!ve(h,g))}}return a}function hc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=ve(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ce(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ii(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const Hy=new WeakMap;function qf(t,e,n=!1){const r=n?Hy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ce(t)){const f=g=>{l=!0;const[I,S]=qf(g,e,!0);ct(a,I),S&&c.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,Mr),Mr;if(se(i))for(let f=0;f<i.length;f++){const g=bt(i[f]);Zu(g)&&(a[g]=we)}else if(i)for(const f in i){const g=bt(f);if(Zu(g)){const I=i[f],S=a[g]=se(I)||ce(I)?{type:I}:ct({},I),O=S.type;let L=!1,F=!0;if(se(O))for(let W=0;W<O.length;++W){const Q=O[W],J=ce(Q)&&Q.name;if(J==="Boolean"){L=!0;break}else J==="String"&&(F=!1)}else L=ce(O)&&O.name==="Boolean";S[0]=L,S[1]=F,(L||ve(S,"default"))&&c.push(g)}}const h=[a,c];return Se(t)&&r.set(t,h),h}function Zu(t){return t[0]!=="$"&&!Ps(t)}const Hf=t=>t[0]==="_"||t==="$stable",nl=t=>se(t)?t.map(Bt):[Bt(t)],Ky=(t,e,n)=>{if(e._n)return e;const r=py((...s)=>nl(e(...s)),n);return r._c=!1,r},Kf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hf(s))continue;const i=t[s];if(ce(i))e[s]=Ky(s,i,r);else if(i!=null){const a=nl(i);e[s]=()=>a}}},zf=(t,e)=>{const n=nl(e);t.slots.default=()=>n},Wf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},zy=(t,e,n)=>{const r=t.slots=Bf();if(t.vnode.shapeFlag&32){const s=e._;s?(Wf(r,e,n),n&&of(r,"_",s,!0)):Kf(e,r)}else e&&zf(t,e)},Wy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=we;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Wf(s,e,n):(i=!e.$stable,Kf(e,s)),a=e}else e&&(zf(t,e),a={default:1});if(i)for(const c in s)!Hf(c)&&a[c]==null&&delete s[c]},pt=av;function Gy(t){return Qy(t)}function Qy(t,e){const n=Fo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:g,nextSibling:I,setScopeId:S=jt,insertStaticContent:O}=t,L=(_,E,P,N=null,D=null,x=null,$=void 0,B=null,U=!!E.dynamicChildren)=>{if(_===E)return;_&&!Is(_,E)&&(N=Zt(_),Ve(_,D,x,!0),_=null),E.patchFlag===-2&&(U=!1,E.dynamicChildren=null);const{type:M,ref:Z,shapeFlag:q}=E;switch(M){case Ho:F(_,E,P,N);break;case Hs:W(_,E,P,N);break;case Ua:_==null&&Q(E,P,N,$);break;case Ut:R(_,E,P,N,D,x,$,B,U);break;default:q&1?pe(_,E,P,N,D,x,$,B,U):q&6?y(_,E,P,N,D,x,$,B,U):(q&64||q&128)&&M.process(_,E,P,N,D,x,$,B,U,xt)}Z!=null&&D&&ao(Z,_&&_.ref,x,E||_,!E)},F=(_,E,P,N)=>{if(_==null)r(E.el=c(E.children),P,N);else{const D=E.el=_.el;E.children!==_.children&&h(D,E.children)}},W=(_,E,P,N)=>{_==null?r(E.el=l(E.children||""),P,N):E.el=_.el},Q=(_,E,P,N)=>{[_.el,_.anchor]=O(_.children,E,P,N,_.el,_.anchor)},J=({el:_,anchor:E},P,N)=>{let D;for(;_&&_!==E;)D=I(_),r(_,P,N),_=D;r(E,P,N)},K=({el:_,anchor:E})=>{let P;for(;_&&_!==E;)P=I(_),s(_),_=P;s(E)},pe=(_,E,P,N,D,x,$,B,U)=>{E.type==="svg"?$="svg":E.type==="math"&&($="mathml"),_==null?_e(E,P,N,D,x,$,B,U):v(_,E,D,x,$,B,U)},_e=(_,E,P,N,D,x,$,B)=>{let U,M;const{props:Z,shapeFlag:q,transition:G,dirs:ne}=_;if(U=_.el=a(_.type,x,Z&&Z.is,Z),q&8?f(U,_.children):q&16&&m(_.children,U,null,N,D,La(_,x),$,B),ne&&nr(_,null,N,"created"),w(U,_,_.scopeId,$,N),Z){for(const ae in Z)ae!=="value"&&!Ps(ae)&&i(U,ae,null,Z[ae],x,N);"value"in Z&&i(U,"value",null,Z.value,x),(M=Z.onVnodeBeforeMount)&&Mt(M,N,_)}ne&&nr(_,null,N,"beforeMount");const ee=Jy(D,G);ee&&G.beforeEnter(U),r(U,E,P),((M=Z&&Z.onVnodeMounted)||ee||ne)&&pt(()=>{M&&Mt(M,N,_),ee&&G.enter(U),ne&&nr(_,null,N,"mounted")},D)},w=(_,E,P,N,D)=>{if(P&&S(_,P),N)for(let x=0;x<N.length;x++)S(_,N[x]);if(D){let x=D.subTree;if(E===x||Zf(x.type)&&(x.ssContent===E||x.ssFallback===E)){const $=D.vnode;w(_,$,$.scopeId,$.slotScopeIds,D.parent)}}},m=(_,E,P,N,D,x,$,B,U=0)=>{for(let M=U;M<_.length;M++){const Z=_[M]=B?bn(_[M]):Bt(_[M]);L(null,Z,E,P,N,D,x,$,B)}},v=(_,E,P,N,D,x,$)=>{const B=E.el=_.el;let{patchFlag:U,dynamicChildren:M,dirs:Z}=E;U|=_.patchFlag&16;const q=_.props||we,G=E.props||we;let ne;if(P&&rr(P,!1),(ne=G.onVnodeBeforeUpdate)&&Mt(ne,P,E,_),Z&&nr(E,_,P,"beforeUpdate"),P&&rr(P,!0),(q.innerHTML&&G.innerHTML==null||q.textContent&&G.textContent==null)&&f(B,""),M?T(_.dynamicChildren,M,B,P,N,La(E,D),x):$||ge(_,E,B,null,P,N,La(E,D),x,!1),U>0){if(U&16)A(B,q,G,P,D);else if(U&2&&q.class!==G.class&&i(B,"class",null,G.class,D),U&4&&i(B,"style",q.style,G.style,D),U&8){const ee=E.dynamicProps;for(let ae=0;ae<ee.length;ae++){const de=ee[ae],We=q[de],Be=G[de];(Be!==We||de==="value")&&i(B,de,We,Be,D,P)}}U&1&&_.children!==E.children&&f(B,E.children)}else!$&&M==null&&A(B,q,G,P,D);((ne=G.onVnodeUpdated)||Z)&&pt(()=>{ne&&Mt(ne,P,E,_),Z&&nr(E,_,P,"updated")},N)},T=(_,E,P,N,D,x,$)=>{for(let B=0;B<E.length;B++){const U=_[B],M=E[B],Z=U.el&&(U.type===Ut||!Is(U,M)||U.shapeFlag&70)?g(U.el):P;L(U,M,Z,null,N,D,x,$,!0)}},A=(_,E,P,N,D)=>{if(E!==P){if(E!==we)for(const x in E)!Ps(x)&&!(x in P)&&i(_,x,E[x],null,D,N);for(const x in P){if(Ps(x))continue;const $=P[x],B=E[x];$!==B&&x!=="value"&&i(_,x,B,$,D,N)}"value"in P&&i(_,"value",E.value,P.value,D)}},R=(_,E,P,N,D,x,$,B,U)=>{const M=E.el=_?_.el:c(""),Z=E.anchor=_?_.anchor:c("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:ne}=E;ne&&(B=B?B.concat(ne):ne),_==null?(r(M,P,N),r(Z,P,N),m(E.children||[],P,Z,D,x,$,B,U)):q>0&&q&64&&G&&_.dynamicChildren?(T(_.dynamicChildren,G,P,D,x,$,B),(E.key!=null||D&&E===D.subTree)&&Gf(_,E,!0)):ge(_,E,P,Z,D,x,$,B,U)},y=(_,E,P,N,D,x,$,B,U)=>{E.slotScopeIds=B,_==null?E.shapeFlag&512?D.ctx.activate(E,P,N,$,U):dt(E,P,N,D,x,$,U):yn(_,E,U)},dt=(_,E,P,N,D,x,$)=>{const B=_.component=pv(_,N,D);if(Vf(_)&&(B.ctx.renderer=xt),gv(B,!1,$),B.asyncDep){if(D&&D.registerDep(B,Ue,$),!_.el){const U=B.subTree=On(Hs);W(null,U,E,P)}}else Ue(B,_,E,P,D,x,$)},yn=(_,E,P)=>{const N=E.component=_.component;if(iv(_,E,P))if(N.asyncDep&&!N.asyncResolved){Te(N,E,P);return}else N.next=E,N.update();else E.el=_.el,N.vnode=E},Ue=(_,E,P,N,D,x,$)=>{const B=()=>{if(_.isMounted){let{next:q,bu:G,u:ne,parent:ee,vnode:ae}=_;{const Ge=Qf(_);if(Ge){q&&(q.el=ae.el,Te(_,q,$)),Ge.asyncDep.then(()=>{_.isUnmounted||B()});return}}let de=q,We;rr(_,!1),q?(q.el=ae.el,Te(_,q,$)):q=ae,G&&$i(G),(We=q.props&&q.props.onVnodeBeforeUpdate)&&Mt(We,ee,q,ae),rr(_,!0);const Be=th(_),vt=_.subTree;_.subTree=Be,L(vt,Be,g(vt.el),Zt(vt),_,D,x),q.el=Be.el,de===null&&ov(_,Be.el),ne&&pt(ne,D),(We=q.props&&q.props.onVnodeUpdated)&&pt(()=>Mt(We,ee,q,ae),D)}else{let q;const{el:G,props:ne}=E,{bm:ee,m:ae,parent:de,root:We,type:Be}=_,vt=Os(E);rr(_,!1),ee&&$i(ee),!vt&&(q=ne&&ne.onVnodeBeforeMount)&&Mt(q,de,E),rr(_,!0);{We.ce&&We.ce._injectChildStyle(Be);const Ge=_.subTree=th(_);L(null,Ge,P,N,_,D,x),E.el=Ge.el}if(ae&&pt(ae,D),!vt&&(q=ne&&ne.onVnodeMounted)){const Ge=E;pt(()=>Mt(q,de,Ge),D)}(E.shapeFlag&256||de&&Os(de.vnode)&&de.vnode.shapeFlag&256)&&_.a&&pt(_.a,D),_.isMounted=!0,E=P=N=null}};_.scope.on();const U=_.effect=new uf(B);_.scope.off();const M=_.update=U.run.bind(U),Z=_.job=U.runIfDirty.bind(U);Z.i=_,Z.id=_.uid,U.scheduler=()=>el(Z),rr(_,!0),M()},Te=(_,E,P)=>{E.component=_;const N=_.vnode.props;_.vnode=E,_.next=null,qy(_,E.props,N,P),Wy(_,E.children,P),Kn(),zu(_),zn()},ge=(_,E,P,N,D,x,$,B,U=!1)=>{const M=_&&_.children,Z=_?_.shapeFlag:0,q=E.children,{patchFlag:G,shapeFlag:ne}=E;if(G>0){if(G&128){Qn(M,q,P,N,D,x,$,B,U);return}else if(G&256){St(M,q,P,N,D,x,$,B,U);return}}ne&8?(Z&16&&Yn(M,D,x),q!==M&&f(P,q)):Z&16?ne&16?Qn(M,q,P,N,D,x,$,B,U):Yn(M,D,x,!0):(Z&8&&f(P,""),ne&16&&m(q,P,N,D,x,$,B,U))},St=(_,E,P,N,D,x,$,B,U)=>{_=_||Mr,E=E||Mr;const M=_.length,Z=E.length,q=Math.min(M,Z);let G;for(G=0;G<q;G++){const ne=E[G]=U?bn(E[G]):Bt(E[G]);L(_[G],ne,P,null,D,x,$,B,U)}M>Z?Yn(_,D,x,!0,!1,q):m(E,P,N,D,x,$,B,U,q)},Qn=(_,E,P,N,D,x,$,B,U)=>{let M=0;const Z=E.length;let q=_.length-1,G=Z-1;for(;M<=q&&M<=G;){const ne=_[M],ee=E[M]=U?bn(E[M]):Bt(E[M]);if(Is(ne,ee))L(ne,ee,P,null,D,x,$,B,U);else break;M++}for(;M<=q&&M<=G;){const ne=_[q],ee=E[G]=U?bn(E[G]):Bt(E[G]);if(Is(ne,ee))L(ne,ee,P,null,D,x,$,B,U);else break;q--,G--}if(M>q){if(M<=G){const ne=G+1,ee=ne<Z?E[ne].el:N;for(;M<=G;)L(null,E[M]=U?bn(E[M]):Bt(E[M]),P,ee,D,x,$,B,U),M++}}else if(M>G)for(;M<=q;)Ve(_[M],D,x,!0),M++;else{const ne=M,ee=M,ae=new Map;for(M=ee;M<=G;M++){const je=E[M]=U?bn(E[M]):Bt(E[M]);je.key!=null&&ae.set(je.key,M)}let de,We=0;const Be=G-ee+1;let vt=!1,Ge=0;const vn=new Array(Be);for(M=0;M<Be;M++)vn[M]=0;for(M=ne;M<=q;M++){const je=_[M];if(We>=Be){Ve(je,D,x,!0);continue}let Et;if(je.key!=null)Et=ae.get(je.key);else for(de=ee;de<=G;de++)if(vn[de-ee]===0&&Is(je,E[de])){Et=de;break}Et===void 0?Ve(je,D,x,!0):(vn[Et-ee]=M+1,Et>=Ge?Ge=Et:vt=!0,L(je,E[Et],P,null,D,x,$,B,U),We++)}const cs=vt?Yy(vn):Mr;for(de=cs.length-1,M=Be-1;M>=0;M--){const je=ee+M,Et=E[je],mi=je+1<Z?E[je+1].el:N;vn[M]===0?L(null,Et,P,mi,D,x,$,B,U):vt&&(de<0||M!==cs[de]?Xt(Et,P,mi,2):de--)}}},Xt=(_,E,P,N,D=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:M}=_;if(M&6){Xt(_.component.subTree,E,P,N);return}if(M&128){_.suspense.move(E,P,N);return}if(M&64){$.move(_,E,P,xt);return}if($===Ut){r(x,E,P);for(let q=0;q<U.length;q++)Xt(U[q],E,P,N);r(_.anchor,E,P);return}if($===Ua){J(_,E,P);return}if(N!==2&&M&1&&B)if(N===0)B.beforeEnter(x),r(x,E,P),pt(()=>B.enter(x),D);else{const{leave:q,delayLeave:G,afterLeave:ne}=B,ee=()=>r(x,E,P),ae=()=>{q(x,()=>{ee(),ne&&ne()})};G?G(x,ee,ae):ae()}else r(x,E,P)},Ve=(_,E,P,N=!1,D=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:Z,patchFlag:q,dirs:G,cacheIndex:ne}=_;if(q===-2&&(D=!1),B!=null&&ao(B,null,P,_,!0),ne!=null&&(E.renderCache[ne]=void 0),Z&256){E.ctx.deactivate(_);return}const ee=Z&1&&G,ae=!Os(_);let de;if(ae&&(de=$&&$.onVnodeBeforeUnmount)&&Mt(de,E,_),Z&6)Jn(_.component,P,N);else{if(Z&128){_.suspense.unmount(P,N);return}ee&&nr(_,null,E,"beforeUnmount"),Z&64?_.type.remove(_,E,P,xt,N):M&&!M.hasOnce&&(x!==Ut||q>0&&q&64)?Yn(M,E,P,!1,!0):(x===Ut&&q&384||!D&&Z&16)&&Yn(U,E,P),N&&Ne(_)}(ae&&(de=$&&$.onVnodeUnmounted)||ee)&&pt(()=>{de&&Mt(de,E,_),ee&&nr(_,null,E,"unmounted")},P)},Ne=_=>{const{type:E,el:P,anchor:N,transition:D}=_;if(E===Ut){pa(P,N);return}if(E===Ua){K(_);return}const x=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:B}=D,U=()=>$(P,x);B?B(_.el,x,U):U()}else x()},pa=(_,E)=>{let P;for(;_!==E;)P=I(_),s(_),_=P;s(E)},Jn=(_,E,P)=>{const{bum:N,scope:D,job:x,subTree:$,um:B,m:U,a:M}=_;eh(U),eh(M),N&&$i(N),D.stop(),x&&(x.flags|=8,Ve($,_,E,P)),B&&pt(B,E),pt(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Yn=(_,E,P,N=!1,D=!1,x=0)=>{for(let $=x;$<_.length;$++)Ve(_[$],E,P,N,D)},Zt=_=>{if(_.shapeFlag&6)return Zt(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=I(_.anchor||_.el),P=E&&E[gy];return P?I(P):E};let os=!1;const gi=(_,E,P)=>{_==null?E._vnode&&Ve(E._vnode,null,null,!0):L(E._vnode||null,_,E,null,null,null,P),E._vnode=_,os||(os=!0,zu(),Pf(),os=!1)},xt={p:L,um:Ve,m:Xt,r:Ne,mt:dt,mc:m,pc:ge,pbc:T,n:Zt,o:t};return{render:gi,hydrate:void 0,createApp:By(gi)}}function La({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gf(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=bn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Gf(a,c)),c.type===Ho&&(c.el=a.el)}}function Yy(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Qf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qf(e)}function eh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xy=Symbol.for("v-scx"),Zy=()=>qi(Xy);function Fa(t,e,n){return Jf(t,e,n)}function Jf(t,e,n=we){const{immediate:r,deep:s,flush:i,once:a}=n,c=ct({},n),l=e&&r||!e&&i!=="post";let h;if(zs){if(i==="sync"){const S=Zy();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!l){const S=()=>{};return S.stop=jt,S.resume=jt,S.pause=jt,S}}const f=nt;c.call=(S,O,L)=>Gt(S,f,O,L);let g=!1;i==="post"?c.scheduler=S=>{pt(S,f&&f.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(S,O)=>{O?S():el(S)}),c.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const I=uy(t,e,c);return zs&&(h?h.push(I):l&&I()),I}function ev(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?Yf(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=ii(this),c=Jf(s,i.bind(r),n);return a(),c}function Yf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function nv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),a=i&&tv(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Oe(f)?f.trim():f)),a.number&&(s=n.map(no)));let c,l=r[c=ka(e)]||r[c=ka(bt(e))];!l&&i&&(l=r[c=ka(_r(e))]),l&&Gt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Gt(h,t,6,s)}}function Xf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ce(t)){const l=h=>{const f=Xf(h,e,!0);f&&(c=!0,ct(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>a[l]=null):ct(a,i),Se(t)&&r.set(t,a),a)}function qo(t,e){return!t||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,_r(e))||ve(t,e))}function th(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:g,data:I,setupState:S,ctx:O,inheritAttrs:L}=t,F=io(t);let W,Q;try{if(n.shapeFlag&4){const K=s||r,pe=K;W=Bt(h.call(pe,K,f,g,S,I,O)),Q=c}else{const K=e;W=Bt(K.length>1?K(g,{attrs:c,slots:a,emit:l}):K(g,null)),Q=e.props?c:rv(c)}}catch(K){Ns.length=0,jo(K,t,1),W=On(Hs)}let J=W;if(Q&&L!==!1){const K=Object.keys(Q),{shapeFlag:pe}=J;K.length&&pe&7&&(i&&K.some($c)&&(Q=sv(Q,i)),J=zr(J,Q,!1,!0))}return n.dirs&&(J=zr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&tl(J,n.transition),W=J,io(F),W}const rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||No(n))&&((e||(e={}))[n]=t[n]);return e},sv=(t,e)=>{const n={};for(const r in t)(!$c(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?nh(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const I=f[g];if(a[I]!==r[I]&&!qo(h,I))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?nh(r,a,h):!0:!!a;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qo(n,i))return!0}return!1}function ov({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zf=t=>t.__isSuspense;function av(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):fy(t)}const Ut=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),Hs=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),Ns=[];let _t=null;function Ct(t=!1){Ns.push(_t=t?null:[])}function cv(){Ns.pop(),_t=Ns[Ns.length-1]||null}let Ks=1;function rh(t,e=!1){Ks+=t,t<0&&_t&&e&&(_t.hasOnce=!0)}function ep(t){return t.dynamicChildren=Ks>0?_t||Mr:null,cv(),Ks>0&&_t&&_t.push(t),t}function rn(t,e,n,r,s,i){return ep(z(t,e,n,r,s,i,!0))}function sh(t,e,n,r,s){return ep(On(t,e,n,r,s,!0))}function tp(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const np=({key:t})=>t??null,Hi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||rt(t)||ce(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,s=null,i=t===Ut?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&np(e),ref:e&&Hi(e),scopeId:Df,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return c?(rl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Ks>0&&!a&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const On=lv;function lv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ky)&&(t=Hs),tp(t)){const c=zr(t,e,!0);return n&&rl(c,n),Ks>0&&!i&&_t&&(c.shapeFlag&6?_t[_t.indexOf(t)]=c:_t.push(c)),c.patchFlag=-2,c}if(Ev(t)&&(t=t.__vccOpts),e){e=uv(e);let{class:c,style:l}=e;c&&!Oe(c)&&(e.class=on(c)),Se(l)&&(Zc(l)&&!se(l)&&(l=ct({},l)),e.style=Kc(l))}const a=Oe(t)?1:Zf(t)?128:my(t)?64:Se(t)?4:ce(t)?2:0;return z(t,e,n,r,s,a,i,!0)}function uv(t){return t?Zc(t)||jf(t)?ct({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?hv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&np(h),ref:e&&e.ref?n&&i?se(i)?i.concat(Hi(e)):[i,Hi(e)]:Hi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&tl(f,l.clone(f)),f}function dc(t=" ",e=0){return On(Ho,null,t,e)}function Bt(t){return t==null||typeof t=="boolean"?On(Hs):se(t)?On(Ut,null,t.slice()):tp(t)?bn(t):On(Ho,null,String(t))}function bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function rl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!jf(e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[dc(e)]):n=8);t.children=e,t.shapeFlag|=n}function hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=on([e.class,r.class]));else if(s==="style")e.style=Kc([e.style,r.style]);else if(No(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){Gt(t,e,7,[n,r])}const dv=Ff();let fv=0;function pv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dv,i={uid:fv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new x_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qf(r,s),emitsOptions:Xf(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nv.bind(null,i),t.ce&&t.ce(i),i}let nt=null,lo,fc;{const t=Fo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};lo=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),fc=e("__VUE_SSR_SETTERS__",n=>zs=n)}const ii=t=>{const e=nt;return lo(t),t.scope.on(),()=>{t.scope.off(),lo(e)}},ih=()=>{nt&&nt.scope.off(),lo(null)};function rp(t){return t.vnode.shapeFlag&4}let zs=!1;function gv(t,e=!1,n=!1){e&&fc(e);const{props:r,children:s}=t.vnode,i=rp(t);$y(t,r,i,e),zy(t,s,n);const a=i?mv(t,e):void 0;return e&&fc(!1),a}function mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vy);const{setup:r}=n;if(r){Kn();const s=t.setupContext=r.length>1?yv(t):null,i=ii(t),a=si(r,t,0,[t.props,s]),c=nf(a);if(zn(),i(),(c||t.sp)&&!Os(t)&&Of(t),c){if(a.then(ih,ih),e)return a.then(l=>{oh(t,l)}).catch(l=>{jo(l,t,0)});t.asyncDep=a}else oh(t,a)}else sp(t)}function oh(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=bf(e)),sp(t)}function sp(t,e,n){const r=t.type;t.render||(t.render=r.render||jt);{const s=ii(t);Kn();try{Ny(t)}finally{zn(),s()}}}const _v={get(t,e){return Ze(t,"get",""),t[e]}};function yv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_v),slots:t.slots,emit:t.emit,expose:e}}function Ko(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bf(ny(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function vv(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function Ev(t){return ce(t)&&"__vccOpts"in t}const Tv=(t,e)=>cy(t,e,zs),Iv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pc;const ah=typeof window<"u"&&window.trustedTypes;if(ah)try{pc=ah.createPolicy("vue",{createHTML:t=>t})}catch{}const ip=pc?t=>pc.createHTML(t):t=>t,wv="http://www.w3.org/2000/svg",Av="http://www.w3.org/1998/Math/MathML",sn=typeof document<"u"?document:null,ch=sn&&sn.createElement("template"),bv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?sn.createElementNS(wv,t):e==="mathml"?sn.createElementNS(Av,t):n?sn.createElement(t,{is:n}):sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sn.createTextNode(t),createComment:t=>sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ch.innerHTML=ip(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ch.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sv=Symbol("_vtc");function Rv(t,e,n){const r=t[Sv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lh=Symbol("_vod"),Cv=Symbol("_vsh"),Pv=Symbol(""),kv=/(^|;)\s*display\s*:/;function Dv(t,e,n){const r=t.style,s=Oe(n);let i=!1;if(n&&!s){if(e)if(Oe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ki(r,c,"")}else for(const a in e)n[a]==null&&Ki(r,a,"");for(const a in n)a==="display"&&(i=!0),Ki(r,a,n[a])}else if(s){if(e!==n){const a=r[Pv];a&&(n+=";"+a),r.cssText=n,i=kv.test(n)}}else e&&t.removeAttribute("style");lh in t&&(t[lh]=i?r.display:"",t[Cv]&&(r.display="none"))}const uh=/\s*!important$/;function Ki(t,e,n){if(se(n))n.forEach(r=>Ki(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ov(t,e);uh.test(n)?t.setProperty(_r(r),n.replace(uh,""),"important"):t[r]=n}}const hh=["Webkit","Moz","ms"],Ba={};function Ov(t,e){const n=Ba[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Ba[e]=r;r=Lo(r);for(let s=0;s<hh.length;s++){const i=hh[s]+r;if(i in t)return Ba[e]=i}return e}const dh="http://www.w3.org/1999/xlink";function fh(t,e,n,r,s,i=O_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dh,e.slice(6,e.length)):t.setAttributeNS(dh,e,n):n==null||i&&!af(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Wt(n)?String(n):n)}function ph(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ip(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=af(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function or(t,e,n,r){t.addEventListener(e,n,r)}function Vv(t,e,n,r){t.removeEventListener(e,n,r)}const gh=Symbol("_vei");function Nv(t,e,n,r,s=null){const i=t[gh]||(t[gh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=xv(e);if(r){const h=i[e]=Fv(r,s);or(t,c,h,l)}else a&&(Vv(t,c,a,l),i[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function xv(t){let e;if(mh.test(t)){e={};let r;for(;r=t.match(mh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let ja=0;const Mv=Promise.resolve(),Lv=()=>ja||(Mv.then(()=>ja=0),ja=Date.now());function Fv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(Uv(r,n.value),e,5,[r])};return n.value=t,n.attached=Lv(),n}function Uv(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Rv(t,r,a):e==="style"?Dv(t,n,r):No(e)?$c(e)||Nv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jv(t,e,r,a))?(ph(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(r))?ph(t,bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fh(t,e,r,a))};function jv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_h(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&Oe(n)?!1:e in t}const uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>$i(e,n):e};function $v(t){t.target.composing=!0}function yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr=Symbol("_assign"),gc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jr]=uo(s);const i=r||s.props&&s.props.type==="number";or(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=no(c)),t[jr](c)}),n&&or(t,"change",()=>{t.value=t.value.trim()}),e||(or(t,"compositionstart",$v),or(t,"compositionend",yh),or(t,"change",yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[jr]=uo(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?no(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},qv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xo(e);or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?no(ho(a)):ho(a));t[jr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Rf(()=>{t._assigning=!1})}),t[jr]=uo(r)},mounted(t,{value:e}){vh(t,e)},beforeUpdate(t,e,n){t[jr]=uo(n)},updated(t,{value:e}){t._assigning||vh(t,e)}};function vh(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!xo(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],c=ho(a);if(n)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=N_(e,c)>-1}else a.selected=e.has(c);else if(Uo(ho(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ho(t){return"_value"in t?t._value:t.value}const Hv=["ctrl","shift","alt","meta"],Kv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Hv.some(n=>t[`${n}Key`]&&!e.includes(n))},zv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=Kv[e[a]];if(c&&c(s,e))return}return t(s,...i)})},Wv=ct({patchProp:Bv},bv);let Eh;function Gv(){return Eh||(Eh=Gy(Wv))}const Qv=(...t)=>{const e=Gv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yv(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Jv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Jv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Yv(t){return Oe(t)?document.querySelector(t):t}const Xv=()=>{};var Th={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let I=(c&15)<<2|h>>6,S=h&63;l||(S=64,a||(I=64)),r.push(n[f],n[g],n[I],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new eE;const I=i<<2|c>>4;if(r.push(I),h!==64){const S=c<<4&240|h>>2;if(r.push(S),g!==64){const O=h<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tE=function(t){const e=op(t);return ap.encodeByteArray(e,!0)},fo=function(t){return tE(t).replace(/\./g,"")},cp=function(t){try{return ap.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=()=>nE().__FIREBASE_DEFAULTS__,sE=()=>{if(typeof process>"u"||typeof Th>"u")return;const t=Th.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cp(t[1]);return e&&JSON.parse(e)},zo=()=>{try{return Xv()||rE()||sE()||iE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lp=t=>{var e,n;return(n=(e=zo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oE=t=>{const e=lp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},up=()=>{var t;return(t=zo())===null||t===void 0?void 0:t.config},hp=t=>{var e;return(e=zo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fo(JSON.stringify(n)),fo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function uE(){var t;const e=(t=zo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fE(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pE(){return!uE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fp(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function gE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mE,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?_E(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Nt(s,c,r)}}function _E(t,e){return t.replace(yE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yE=/\{\$([^}]+)}/g;function vE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Ih(i)&&Ih(a)){if(!Fn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ih(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function EE(t,e){const n=new TE(t,e);return n.subscribe.bind(n)}class TE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=1e3,AE=2,bE=4*60*60*1e3,SE=.5;function wh(t,e=wE,n=AE){const r=e*Math.pow(n,t),s=Math.round(SE*r*(Math.random()-.5)*2);return Math.min(bE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CE(t){return t===ir?void 0:t}function PE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const DE={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},OE=le.INFO,VE={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},NE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=VE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=OE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let Ah,bh;function ME(){return Ah||(Ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return bh||(bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,mc=new WeakMap,mp=new WeakMap,qa=new WeakMap,sl=new WeakMap;function FE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Vn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&gp.set(n,t)}).catch(()=>{}),sl.set(e,t),e}function UE(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});mc.set(t,e)}let _c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BE(t){_c=t(_c)}function jE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ha(this),e,...n);return mp.set(r,e.sort?e.sort():[e]),Vn(r)}:LE().includes(t)?function(...e){return t.apply(Ha(this),e),Vn(gp.get(this))}:function(...e){return Vn(t.apply(Ha(this),e))}}function $E(t){return typeof t=="function"?jE(t):(t instanceof IDBTransaction&&UE(t),xE(t,ME())?new Proxy(t,_c):t)}function Vn(t){if(t instanceof IDBRequest)return FE(t);if(qa.has(t))return qa.get(t);const e=$E(t);return e!==t&&(qa.set(t,e),sl.set(e,t)),e}const Ha=t=>sl.get(t);function _p(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Vn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Vn(a.result),l.oldVersion,l.newVersion,Vn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const qE=["get","getKey","getAll","getAllKeys","count"],HE=["put","add","delete","clear"],Ka=new Map;function Sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ka.set(e,i),i}BE(t=>({...t,get:(e,n,r)=>Sh(e,n)||t.get(e,n,r),has:(e,n)=>!!Sh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",Rh="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Wo("@firebase/app"),WE="@firebase/app-compat",GE="@firebase/analytics-compat",QE="@firebase/analytics",JE="@firebase/app-check-compat",YE="@firebase/app-check",XE="@firebase/auth",ZE="@firebase/auth-compat",eT="@firebase/database",tT="@firebase/data-connect",nT="@firebase/database-compat",rT="@firebase/functions",sT="@firebase/functions-compat",iT="@firebase/installations",oT="@firebase/installations-compat",aT="@firebase/messaging",cT="@firebase/messaging-compat",lT="@firebase/performance",uT="@firebase/performance-compat",hT="@firebase/remote-config",dT="@firebase/remote-config-compat",fT="@firebase/storage",pT="@firebase/storage-compat",gT="@firebase/firestore",mT="@firebase/vertexai",_T="@firebase/firestore-compat",yT="firebase",vT="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="[DEFAULT]",ET={[yc]:"fire-core",[WE]:"fire-core-compat",[QE]:"fire-analytics",[GE]:"fire-analytics-compat",[YE]:"fire-app-check",[JE]:"fire-app-check-compat",[XE]:"fire-auth",[ZE]:"fire-auth-compat",[eT]:"fire-rtdb",[tT]:"fire-data-connect",[nT]:"fire-rtdb-compat",[rT]:"fire-fn",[sT]:"fire-fn-compat",[iT]:"fire-iid",[oT]:"fire-iid-compat",[aT]:"fire-fcm",[cT]:"fire-fcm-compat",[lT]:"fire-perf",[uT]:"fire-perf-compat",[hT]:"fire-rc",[dT]:"fire-rc-compat",[fT]:"fire-gcs",[pT]:"fire-gcs-compat",[gT]:"fire-fst",[_T]:"fire-fst-compat",[mT]:"fire-vertex","fire-js":"fire-js",[yT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map,TT=new Map,Ec=new Map;function Ch(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(Ec.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,t);for(const n of po.values())Ch(n,t);for(const n of TT.values())Ch(n,t);return!0}function vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new yr("app","Firebase",IT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=vT;function yp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(n||(n=up()),!n)throw Nn.create("no-options");const i=po.get(s);if(i){if(Fn(n,i.options)&&Fn(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new kE(s);for(const l of Ec.values())a.addComponent(l);const c=new wT(n,r,a);return po.set(s,c),c}function il(t=vc){const e=po.get(t);if(!e&&t===vc&&up())return yp();if(!e)throw Nn.create("no-app",{appName:t});return e}function At(t,e,n){var r;let s=(r=ET[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(c.join(" "));return}Qt(new Ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firebase-heartbeat-database",bT=1,Ws="firebase-heartbeat-store";let za=null;function vp(){return za||(za=_p(AT,bT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ws)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),za}async function ST(t){try{const n=(await vp()).transaction(Ws),r=await n.objectStore(Ws).get(Ep(t));return await n.done,r}catch(e){if(e instanceof Nt)fn.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function Ph(t,e){try{const r=(await vp()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,Ep(t)),await r.done}catch(n){if(n instanceof Nt)fn.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function Ep(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=1024,CT=30;class PT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>CT){const a=OT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kh(),{heartbeatsToSend:r,unsentEntries:s}=kT(this._heartbeatsCache.heartbeats),i=fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fn.warn(n),""}}}function kh(){return new Date().toISOString().substring(0,10)}function kT(t,e=RT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Dh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fp()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ST(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dh(t){return fo(JSON.stringify({version:2,heartbeats:t})).length}function OT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){Qt(new Ot("platform-logger",e=>new KE(e),"PRIVATE")),Qt(new Ot("heartbeat",e=>new PT(e),"PRIVATE")),At(yc,Rh,t),At(yc,Rh,"esm2017"),At("fire-js","")}VT("");function ol(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NT=Tp,Ip=new yr("auth","Firebase",Tp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Wo("@firebase/auth");function xT(t,...e){go.logLevel<=le.WARN&&go.warn(`Auth (${es}): ${t}`,...e)}function zi(t,...e){go.logLevel<=le.ERROR&&go.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw al(t,...e)}function $t(t,...e){return al(t,...e)}function wp(t,e,n){const r=Object.assign(Object.assign({},NT()),{[e]:n});return new yr("auth","Firebase",r).create(e,{appName:t.name})}function dn(t){return wp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function al(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ip.create(t,...e)}function te(t,e,...n){if(!t)throw al(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function pn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MT(){return Oh()==="http:"||Oh()==="https:"}function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MT()||dp()||"connection"in navigator)?navigator.onLine:!0}function FT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=lE()||dE()}get(){return LT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new ai(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,s={}){return bp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=oi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return hE()||(h.referrerPolicy="no-referrer"),Ap.fetch()(Sp(t,t.config.apiHost,n,c),h)})}async function bp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UT),e);try{const s=new $T(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw xi(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wp(t,f,h);Vt(t,f)}}catch(s){if(s instanceof Nt)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function ci(t,e,n,r,s={}){const i=await Gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?cl(t.config,s):`${t.config.apiScheme}://${s}`}function jT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $T{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),BT.get())})}}function xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$t(t,e,r);return s.customData._tokenResponse=n,s}function Vh(t){return t!==void 0&&t.enterprise!==void 0}class qT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HT(t,e){return Gn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function Rp(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zT(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=ll(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(Wa(s.auth_time)),issuedAtTime:xs(Wa(s.iat)),expirationTime:xs(Wa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wa(t){return Number(t)*1e3}function ll(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=cp(n);return s?JSON.parse(s):(zi("Failed to decode base64 JWT payload"),null)}catch(s){return zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nh(t){const e=ll(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&WT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gs(t,Rp(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cp(i.providerUserInfo):[],c=JT(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ic(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function QT(t){const e=ht(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cp(t){return t.map(e=>{var{providerId:n}=e,r=ol(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e){const n=await bp(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Sp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ap.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XT(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Nh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new $r;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zT(this,e)}reload(){return QT(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await Gs(this,KT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,I=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,W=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:J,emailVerified:K,isAnonymous:pe,providerData:_e,stsTokenManager:w}=n;te(J&&w,e,"internal-error");const m=$r.fromJSON(this.name,w);te(typeof J=="string",e,"internal-error"),wn(g,e.name),wn(I,e.name),te(typeof K=="boolean",e,"internal-error"),te(typeof pe=="boolean",e,"internal-error"),wn(S,e.name),wn(O,e.name),wn(L,e.name),wn(F,e.name),wn(W,e.name),wn(Q,e.name);const v=new un({uid:J,auth:e,email:I,emailVerified:K,displayName:g,isAnonymous:pe,photoURL:O,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:W,lastLoginAt:Q});return _e&&Array.isArray(_e)&&(v.providerData=_e.map(T=>Object.assign({},T))),F&&(v._redirectEventId=F),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new $r;c.updateFromIdToken(r);const l=new un({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ic(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new Map;function hn(t){pn(t instanceof Function,"Expected a class definition");let e=xh.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pp.type="NONE";const Mh=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(hn(Mh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||hn(Mh);const a=Wi(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const g=un._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xp(e))return"Blackberry";if(Mp(e))return"Webos";if(Dp(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(Np(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kp(t=st()){return/firefox\//i.test(t)}function Dp(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(t=st()){return/crios\//i.test(t)}function Vp(t=st()){return/iemobile/i.test(t)}function Np(t=st()){return/android/i.test(t)}function xp(t=st()){return/blackberry/i.test(t)}function Mp(t=st()){return/webos/i.test(t)}function ul(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZT(t=st()){var e;return ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eI(){return fE()&&document.documentMode===10}function Lp(t=st()){return ul(t)||Np(t)||Mp(t)||xp(t)||/windows phone/i.test(t)||Vp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e=[]){let n;switch(t){case"Browser":n=Lh(st());break;case"Worker":n=`${Lh(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=6;class sI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:rI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fh(this),this.idTokenSubscription=new Fh(this),this.beforeStateQueue=new tI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rp(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(dn(this));const n=e?ht(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nI(this),n=new sI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return ht(t)}class Fh{constructor(e){this.auth=e,this.observer=null,this.addObserver=EE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oI(t){Go=t}function Up(t){return Go.loadJS(t)}function aI(){return Go.recaptchaEnterpriseScript}function cI(){return Go.gapiScript}function lI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class uI{constructor(){this.enterprise=new hI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dI="recaptcha-enterprise",Bp="NO_RECAPTCHA";class fI{constructor(e){this.type=dI,this.auth=Er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{HT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new qT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Vh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Bp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!n&&Vh(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=aI();l.length!==0&&(l+=c),Up(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Uh(t,e,n,r=!1,s=!1){const i=new fI(t);let a;if(s)a=Bp;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function wc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Uh(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Uh(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e){const n=vr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fn(i,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function gI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mI(t,e,n){const r=Er(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=jp(e),{host:a,port:c}=_I(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Fn(h,r.config.emulator)&&Fn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,yI()}function jp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _I(t){const e=jp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Bh(a)}}}function Bh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function vI(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function II(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends hl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,n,"signInWithPassword",EI);case"emailLink":return TI(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,r,"signUpPassword",vI);case"emailLink":return II(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="http://localhost";class hr extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ol(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new hr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:wI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bI(t){const e=As(bs(t)).link,n=e?As(bs(e)).deep_link_id:null,r=As(bs(t)).deep_link_id;return(r?As(bs(r)).link:null)||r||n||e||t}class dl{constructor(e){var n,r,s,i,a,c;const l=As(bs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,g=AI((s=l.mode)!==null&&s!==void 0?s:null);te(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=bI(e);try{return new dl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(e,n){return Qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dl.parseLink(n);return te(r,"argument-error"),Qs._fromEmailAndCode(e,r.code,r.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends $p{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends li{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends li{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends li{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e){return ci(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await un._fromIdTokenResponse(e,r,s),a=jh(r);return new dr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jh(r);return new dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _o(e,n,r,s)}}function qp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(t,i,e,r):i})}async function RI(t,e,n=!1){const r=await Gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(dn(r));const s="reauthenticate";try{const i=await Gs(t,qp(r,s,e,t),n);te(i.idToken,r,"internal-error");const a=ll(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(t.uid===c,r,"user-mismatch"),dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e,n=!1){if(Tt(t.app))return Promise.reject(dn(t));const r="signIn",s=await qp(t,r,e),i=await dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PI(t,e){return Hp(Er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kI(t,e,n){if(Tt(t.app))return Promise.reject(dn(t));const r=Er(t),a=await wc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Kp(t),l}),c=await dr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function DI(t,e,n){return Tt(t.app)?Promise.reject(dn(t)):PI(ht(t),ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kp(t),r})}function OI(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function VI(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}const yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=1e3,xI=10;class Wp extends zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);eI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wp.type="LOCAL";const MI=Wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gp.type="SESSION";const Qp=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await LI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=fl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const I=g;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(I.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function UI(t){qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function BI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $I(){return Jp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebaseLocalStorageDb",qI=1,vo="firebaseLocalStorage",Xp="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function HI(){const t=indexedDB.deleteDatabase(Yp);return new ui(t).toPromise()}function Ac(){const t=indexedDB.open(Yp,qI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vo,{keyPath:Xp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await HI(),e(await Ac()))})})}async function $h(t,e,n){const r=Jo(t,!0).put({[Xp]:e,value:n});return new ui(r).toPromise()}async function KI(t,e){const n=Jo(t,!1).get(e),r=await new ui(n).toPromise();return r===void 0?null:r.value}function qh(t,e){const n=Jo(t,!0).delete(e);return new ui(n).toPromise()}const zI=800,WI=3;class Zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance($I()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BI(),!this.activeServiceWorker)return;this.sender=new FI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await $h(e,yo,"1"),await qh(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$h(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jo(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zp.type="LOCAL";const GI=Zp;new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e){return e?hn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JI(t){return Hp(t.auth,new pl(t),t.bypassAuthState)}function YI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),CI(n,new pl(t),t.bypassAuthState)}async function XI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),RI(n,new pl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JI;case"linkViaPopup":case"linkViaRedirect":return XI;case"reauthViaPopup":case"reauthViaRedirect":return YI;default:Vt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new ai(2e3,1e4);class xr extends eg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZI.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="pendingRedirect",Gi=new Map;class tw extends eg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const r=await nw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nw(t,e){const n=iw(e),r=sw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rw(t,e){Gi.set(t._key(),e)}function sw(t){return hn(t._redirectPersistence)}function iw(t){return Wi(ew,t.config.apiKey,t.name)}async function ow(t,e,n=!1){if(Tt(t.app))return Promise.reject(dn(t));const r=Er(t),s=QI(r,e),a=await new tw(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=10*60*1e3;class cw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dw=/^https?/;async function fw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uw(t);for(const n of e)try{if(pw(n))return}catch{}Vt(t,"unauthorized-domain")}function pw(t){const e=Tc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!dw.test(n))return!1;if(hw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new ai(3e4,6e4);function Kh(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mw(t){return new Promise((e,n)=>{var r,s,i;function a(){Kh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kh(),n($t(t,"network-request-failed"))},timeout:gw.get()})}if(!((s=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)a();else{const c=lI("iframefcb");return qt()[c]=()=>{gapi.load?a():n($t(t,"network-request-failed"))},Up(`${cI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function _w(t){return Qi=Qi||mw(t),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new ai(5e3,15e3),vw="__/auth/iframe",Ew="emulator/auth/iframe",Tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Iw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ww(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cl(e,Ew):`https://${t.config.authDomain}/${vw}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=Iw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oi(r).slice(1)}`}async function Aw(t){const e=await _w(t),n=qt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:ww(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=$t(t,"network-request-failed"),c=qt().setTimeout(()=>{i(a)},yw.get());function l(){qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sw=500,Rw=600,Cw="_blank",Pw="http://localhost";class zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kw(t,e,n,r=Sw,s=Rw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},bw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=st().toLowerCase();n&&(c=Op(h)?Cw:n),kp(h)&&(e=e||Pw,l.scrollbars="yes");const f=Object.entries(l).reduce((I,[S,O])=>`${I}${S}=${O},`,"");if(ZT(h)&&c!=="_self")return Dw(e||"",c),new zh(null);const g=window.open(e||"",c,f);te(g,t,"popup-blocked");try{g.focus()}catch{}return new zh(g)}function Dw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="__/auth/handler",Vw="emulator/auth/handler",Nw=encodeURIComponent("fac");async function Wh(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof $p){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",vE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof li){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${Nw}=${encodeURIComponent(l)}`:"";return`${xw(t)}?${oi(c).slice(1)}${h}`}function xw({config:t}){return t.emulator?cl(t,Vw):`https://${t.authDomain}/${Ow}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class Mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qp,this._completeRedirectFn=ow,this._overrideRedirectResult=rw}async _openPopup(e,n,r,s){var i;pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Wh(e,n,r,Tc(),s);return kw(e,a,fl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wh(e,n,r,Tc(),s);return UI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Aw(e),r=new cw(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ga,{type:Ga},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ga];a!==void 0&&n(!!a),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lp()||Dp()||ul()}}const Lw=Mw;var Gh="@firebase/auth",Qh="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bw(t){Qt(new Ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(t)},h=new iI(r,s,i,l);return gI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new Ot("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(r=>new Fw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Gh,Qh,Uw(t)),At(Gh,Qh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=5*60,$w=hp("authIdTokenMaxAge")||jw;let Jh=null;const qw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$w)return;const s=n==null?void 0:n.token;Jh!==s&&(Jh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hw(t=il()){const e=vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pI(t,{popupRedirectResolver:Lw,persistence:[GI,MI,Qp]}),r=hp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=qw(i.toString());VI(n,a,()=>a(n.currentUser)),OI(n,c=>a(c))}}const s=lp("auth");return s&&mI(n,`http://${s}`),n}function Kw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Kw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bw("Browser");var zw="firebase",Ww="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(zw,Ww,"app");const ng="@firebase/installations",gl="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=1e4,sg=`w:${gl}`,ig="FIS_v2",Gw="https://firebaseinstallations.googleapis.com/v1",Qw=60*60*1e3,Jw="installations",Yw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fr=new yr(Jw,Yw,Xw);function og(t){return t instanceof Nt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag({projectId:t}){return`${Gw}/projects/${t}/installations`}function cg(t){return{token:t.token,requestStatus:2,expiresIn:eA(t.expiresIn),creationTime:Date.now()}}async function lg(t,e){const r=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ug({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zw(t,{refreshToken:e}){const n=ug(t);return n.append("Authorization",tA(e)),n}async function hg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eA(t){return Number(t.replace("s","000"))}function tA(t){return`${ig} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ag(t),s=ug(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:ig,appId:t.appId,sdkVersion:sg},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await hg(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:cg(h.authToken)}}else throw await lg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^[cdef][\w-]{21}$/,bc="";function iA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oA(t);return sA.test(n)?n:bc}catch{return bc}}function oA(t){return rA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function pg(t,e){const n=Yo(t);gg(n,e),aA(n,e)}function gg(t,e){const n=fg.get(t);if(n)for(const r of n)r(e)}function aA(t,e){const n=cA();n&&n.postMessage({key:t,fid:e}),lA()}let ar=null;function cA(){return!ar&&"BroadcastChannel"in self&&(ar=new BroadcastChannel("[Firebase] FID Change"),ar.onmessage=t=>{gg(t.data.key,t.data.fid)}),ar}function lA(){fg.size===0&&ar&&(ar.close(),ar=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="firebase-installations-database",hA=1,pr="firebase-installations-store";let Qa=null;function ml(){return Qa||(Qa=_p(uA,hA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}}})),Qa}async function Eo(t,e){const n=Yo(t),s=(await ml()).transaction(pr,"readwrite"),i=s.objectStore(pr),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&pg(t,e.fid),e}async function mg(t){const e=Yo(t),r=(await ml()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.done}async function Xo(t,e){const n=Yo(t),s=(await ml()).transaction(pr,"readwrite"),i=s.objectStore(pr),a=await i.get(n),c=e(a);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&pg(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){let e;const n=await Xo(t.appConfig,r=>{const s=dA(r),i=fA(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===bc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dA(t){const e=t||{fid:iA(),registrationStatus:0};return _g(e)}function fA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(fr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gA(t)}:{installationEntry:e}}async function pA(t,e){try{const n=await nA(t,e);return Eo(t.appConfig,n)}catch(n){throw og(n)&&n.customData.serverCode===409?await mg(t.appConfig):await Eo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gA(t){let e=await Yh(t.appConfig);for(;e.registrationStatus===1;)await dg(100),e=await Yh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _l(t);return r||n}return e}function Yh(t){return Xo(t,e=>{if(!e)throw fr.create("installation-not-found");return _g(e)})}function _g(t){return mA(t)?{fid:t.fid,registrationStatus:0}:t}function mA(t){return t.registrationStatus===1&&t.registrationTime+rg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A({appConfig:t,heartbeatServiceProvider:e},n){const r=yA(t,n),s=Zw(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:sg,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await hg(()=>fetch(r,c));if(l.ok){const h=await l.json();return cg(h)}else throw await lg("Generate Auth Token",l)}function yA(t,{fid:e}){return`${ag(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t,e=!1){let n;const r=await Xo(t.appConfig,i=>{if(!yg(i))throw fr.create("not-registered");const a=i.authToken;if(!e&&TA(a))return i;if(a.requestStatus===1)return n=vA(t,e),i;{if(!navigator.onLine)throw fr.create("app-offline");const c=wA(i);return n=EA(t,c),c}});return n?await n:r.authToken}async function vA(t,e){let n=await Xh(t.appConfig);for(;n.authToken.requestStatus===1;)await dg(100),n=await Xh(t.appConfig);const r=n.authToken;return r.requestStatus===0?yl(t,e):r}function Xh(t){return Xo(t,e=>{if(!yg(e))throw fr.create("not-registered");const n=e.authToken;return AA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function EA(t,e){try{const n=await _A(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Eo(t.appConfig,r),n}catch(n){if(og(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Eo(t.appConfig,r)}throw n}}function yg(t){return t!==void 0&&t.registrationStatus===2}function TA(t){return t.requestStatus===2&&!IA(t)}function IA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qw}function wA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function AA(t){return t.requestStatus===1&&t.requestTime+rg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t){const e=t,{installationEntry:n,registrationPromise:r}=await _l(e);return r?r.catch(console.error):yl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e=!1){const n=t;return await RA(n),(await yl(n,e)).token}async function RA(t){const{registrationPromise:e}=await _l(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){if(!t||!t.options)throw Ja("App Configuration");if(!t.name)throw Ja("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ja(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ja(t){return fr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="installations",PA="installations-internal",kA=t=>{const e=t.getProvider("app").getImmediate(),n=CA(e),r=vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},DA=t=>{const e=t.getProvider("app").getImmediate(),n=vr(e,vg).getImmediate();return{getId:()=>bA(n),getToken:s=>SA(n,s)}};function OA(){Qt(new Ot(vg,kA,"PUBLIC")),Qt(new Ot(PA,DA,"PRIVATE"))}OA();At(ng,gl);At(ng,gl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="analytics",VA="firebase_id",NA="origin",xA=60*1e3,MA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Wo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yt=new yr("analytics","Analytics",LA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){if(!t.startsWith(vl)){const e=yt.create("invalid-gtag-resource",{gtagURL:t});return ut.warn(e.message),""}return t}function Eg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function BA(t,e){const n=UA("firebase-js-sdk-policy",{createScriptURL:FA}),r=document.createElement("script"),s=`${vl}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function jA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $A(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const l=(await Eg(n)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){ut.error(c)}t("config",s,i)}async function qA(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Eg(n);for(const l of a){const h=c.find(g=>g.measurementId===l),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ut.error(i)}}function HA(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[c,l]=a;await qA(t,e,n,c,l)}else if(i==="config"){const[c,l]=a;await $A(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=a;t("consent",c,l)}else if(i==="get"){const[c,l,h]=a;t("get",c,l,h)}else if(i==="set"){const[c]=a;t("set",c)}else t(i,...a)}catch(c){ut.error(c)}}return s}function KA(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=HA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function zA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vl)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=30,GA=1e3;class QA{constructor(e={},n=GA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tg=new QA;function JA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YA(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:JA(r)},i=MA.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw yt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function XA(t,e=Tg,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw yt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw yt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new tb;return setTimeout(async()=>{c.abort()},xA),Ig({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Ig(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Tg){var i;const{appId:a,measurementId:c}=t;try{await ZA(r,e)}catch(l){if(c)return ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await YA(t);return s.deleteThrottleMetadata(a),l}catch(l){const h=l;if(!eb(h)){if(s.deleteThrottleMetadata(a),c)return ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw l}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?wh(n,s.intervalMillis,WA):wh(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(a,g),ut.debug(`Calling attemptFetch again in ${f} millis`),Ig(t,g,r,s)}}function ZA(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eb(t){if(!(t instanceof Nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nb(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(){if(fp())try{await pp()}catch(t){return ut.warn(yt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ut.warn(yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sb(t,e,n,r,s,i,a){var c;const l=XA(t);l.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>ut.error(S)),e.push(l);const h=rb().then(S=>{if(S)return r.getId()}),[f,g]=await Promise.all([l,h]);zA(i)||BA(i,f.measurementId),s("js",new Date);const I=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return I[NA]="firebase",I.update=!0,g!=null&&(I[VA]=g),s("config",f.measurementId,I),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.app=e}_delete(){return delete Ms[this.app.options.appId],Promise.resolve()}}let Ms={},Zh=[];const ed={};let Ya="dataLayer",ob="gtag",td,wg,nd=!1;function ab(){const t=[];if(dp()&&t.push("This is a browser extension environment."),gE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=yt.create("invalid-analytics-context",{errorInfo:e});ut.warn(n.message)}}function cb(t,e,n){ab();const r=t.options.appId;if(!r)throw yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yt.create("no-api-key");if(Ms[r]!=null)throw yt.create("already-exists",{id:r});if(!nd){jA(Ya);const{wrappedGtag:i,gtagCore:a}=KA(Ms,Zh,ed,Ya,ob);wg=i,td=a,nd=!0}return Ms[r]=sb(t,Zh,ed,e,td,Ya,n),new ib(t)}function lb(t=il()){t=ht(t);const e=vr(t,To);return e.isInitialized()?e.getImmediate():ub(t)}function ub(t,e={}){const n=vr(t,To);if(n.isInitialized()){const s=n.getImmediate();if(Fn(e,n.getOptions()))return s;throw yt.create("already-initialized")}return n.initialize({options:e})}function hb(t,e,n,r){t=ht(t),nb(wg,Ms[t.app.options.appId],e,n,r).catch(s=>ut.error(s))}const rd="@firebase/analytics",sd="0.10.12";function db(){Qt(new Ot(To,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cb(r,s,n)},"PUBLIC")),Qt(new Ot("analytics-internal",t,"PRIVATE")),At(rd,sd),At(rd,sd,"esm2017");function t(e){try{const n=e.getProvider(To).getImmediate();return{logEvent:(r,s,i)=>hb(n,r,s,i)}}catch(n){throw yt.create("interop-component-reg-failed",{reason:n})}}}db();var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Ag;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,A,R){for(var y=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)y[dt-2]=arguments[dt];return m.prototype[A].apply(T,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var R=w.g[3],y=m+(R^v&(A^R))+T[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(v^A))+T[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^R)+T[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~R))+T[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<m;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)w[v++]=this.g[m]>>>T&255;return w};function i(w,m){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==m||(v[A]=R,T=!1)}this.g=v}var c={};function l(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(h(-w));for(var m=[],v=1,T=0;w>=v;T++)m[T]=w/v|0,v*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),T=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),T=T.j(R).add(h(y))):(T=T.j(v),T=T.add(h(y)))}return T}var g=l(0),I=l(1),S=l(16777216);t=a.prototype,t.m=function(){if(L(this))return-F(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(L(this))return"-"+F(this).toString(w);for(var m=h(Math.pow(w,6)),v=this,T="";;){var A=K(v,m).g;v=W(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,O(v))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}t.l=function(w){return w=W(this,w),L(w)?-1:O(w)?0:1};function F(w){for(var m=w.g.length,v=[],T=0;T<m;T++)v[T]=~w.g[T];return new a(v,~w.h).add(I)}t.abs=function(){return L(this)?F(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=y>>>16,R&=65535,y&=65535,v[A]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function W(w,m){return w.add(F(m))}t.j=function(w){if(O(this)||O(w))return g;if(L(this))return L(w)?F(this).j(F(w)):F(F(this).j(w));if(L(w))return F(this.j(F(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,y=this.i(T)&65535,dt=w.i(A)>>>16,yn=w.i(A)&65535;v[2*T+2*A]+=y*yn,Q(v,2*T+2*A),v[2*T+2*A+1]+=R*yn,Q(v,2*T+2*A+1),v[2*T+2*A+1]+=y*dt,Q(v,2*T+2*A+1),v[2*T+2*A+2]+=R*dt,Q(v,2*T+2*A+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function J(w,m){this.g=w,this.h=m}function K(w,m){if(O(m))throw Error("division by zero");if(O(w))return new J(g,g);if(L(w))return m=K(F(w),m),new J(F(m.g),F(m.h));if(L(m))return m=K(w,F(m)),new J(F(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var v=I,T=m;0>=T.l(w);)v=pe(v),T=pe(T);var A=_e(v,1),R=_e(T,1);for(T=_e(T,2),v=_e(v,2);!O(T);){var y=R.add(T);0>=y.l(w)&&(A=A.add(v),R=y),T=_e(T,1),v=_e(v,1)}return m=W(w,A.j(m)),new J(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(v),y=R.j(m);L(y)||0<y.l(w);)v-=T,R=h(v),y=R.j(m);O(R)&&(R=I),A=A.add(R),w=W(w,y)}return new J(A,w)}t.A=function(w){return K(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&w.i(T);return new a(v,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|w.i(T);return new a(v,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^w.i(T);return new a(v,this.h^w.h)};function pe(w){for(var m=w.g.length+1,v=[],T=0;T<m;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(v,w.h)}function _e(w,m){var v=m>>5;m%=32;for(var T=w.g.length-v,A=[],R=0;R<T;R++)A[R]=0<m?w.i(R+v)>>>m|w.i(R+v+1)<<32-m:w.i(R+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ag=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,xn=a}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bg,Ss,Sg,Ji,Sc,Rg,Cg,Pg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in d))break e;d=d[b]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,b={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function I(o,u,d){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,I.apply(null,arguments)}function S(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function O(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var j=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)j[Ie-2]=arguments[Ie];return u.prototype[b].apply(p,j)}}function L(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function F(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let j=0;j<C;j++)o[b+j]=p[j]}else o.push(p)}}class W{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var pe=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function _e(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(d in p)o[d]=p[d];for(let C=0;C<v.length;C++)d=v[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){c.setTimeout(()=>{throw o},0)}function y(){var o=St;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const p=yn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var yn=new W(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ge=!1,St=new dt,Qn=()=>{const o=c.Promise.resolve(void 0);Te=()=>{o.then(Xt)}};var Xt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){R(d)}var u=yn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var pa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Jn(o,u){if(Ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(pe){e:{try{K(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Yn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Jn.aa.h.call(this)}}O(Jn,Ne);var Yn={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),os=0;function gi(o,u,d,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=b,this.key=++os,this.da=this.fa=!1}function xt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function as(o){this.src=o,this.g={},this.h=0}as.prototype.add=function(o,u,d,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=E(o,u,p,b);return-1<j?(u=o[j],d||(u.fa=!1)):(u=new gi(u,this.src,C,!!p,b),u.fa=d,o.push(u)),u};function _(o,u){var d=u.type;if(d in o.g){var p=o.g[d],b=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(xt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function E(o,u,d,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return b}return-1}var P="closure_lm_"+(1e6*Math.random()|0),N={};function D(o,u,d,p,b){if(Array.isArray(u)){for(var C=0;C<u.length;C++)D(o,u[C],d,p,b);return null}return d=ne(d),o&&o[Zt]?o.K(u,d,h(p)?!!p.capture:!1,b):x(o,u,d,!1,p,b)}function x(o,u,d,p,b,C){if(!u)throw Error("Invalid event type");var j=h(b)?!!b.capture:!!b,Ie=q(o);if(Ie||(o[P]=Ie=new as(o)),d=Ie.add(u,d,p,j,C),d.proxy)return d;if(p=$(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)pa||(b=j),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(M(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $(){function o(d){return u.call(o.src,o.listener,d)}const u=Z;return o}function B(o,u,d,p,b){if(Array.isArray(u))for(var C=0;C<u.length;C++)B(o,u[C],d,p,b);else p=h(p)?!!p.capture:!!p,d=ne(d),o&&o[Zt]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=E(C,d,p,b),-1<d&&(xt(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,d,p,b)),(d=-1<o?u[o]:null)&&U(d))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Zt])_(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(M(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=q(u))?(_(d,o),d.h==0&&(d.src=null,u[P]=null)):xt(o)}}}function M(o){return o in N?N[o]:N[o]="on"+o}function Z(o,u){if(o.da)o=!0;else{u=new Jn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&U(o),o=d.call(p,u)}return o}function q(o){return o=o[P],o instanceof as?o:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[G]||(o[G]=function(u){return o.handleEvent(u)}),o[G])}function ee(){Ve.call(this),this.i=new as(this),this.M=this,this.F=null}O(ee,Ve),ee.prototype[Zt]=!0,ee.prototype.removeEventListener=function(o,u,d,p){B(this,o,u,d,p)};function ae(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ne(u,o);else if(u instanceof Ne)u.target=u.target||o;else{var b=u;u=new Ne(p,o),T(u,b)}if(b=!0,d)for(var C=d.length-1;0<=C;C--){var j=u.g=d[C];b=de(j,p,!0,u)&&b}if(j=u.g=o,b=de(j,p,!0,u)&&b,b=de(j,p,!1,u)&&b,d)for(C=0;C<d.length;C++)j=u.g=d[C],b=de(j,p,!1,u)&&b}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)xt(d[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ee.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function de(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==d){var Ie=j.listener,$e=j.ha||j.src;j.fa&&_(o.i,j),b=Ie.call($e,p)!==!1&&b}}return b&&!p.defaultPrevented}function We(o,u,d){if(typeof o=="function")d&&(o=I(o,d));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Be(o){o.g=We(()=>{o.g=null,o.i&&(o.i=!1,Be(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class vt extends Ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(o){Ve.call(this),this.h=o,this.g={}}O(Ge,Ve);var vn=[];function cs(o){_e(o.g,function(u,d){this.g.hasOwnProperty(d)&&U(u)},o),o.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),cs(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=c.JSON.stringify,Et=c.JSON.parse,mi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ga(){}ga.prototype.h=null;function Yl(o){return o.h||(o.h=o.i())}function Xl(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ma(){Ne.call(this,"d")}O(ma,Ne);function _a(){Ne.call(this,"c")}O(_a,Ne);var Xn={},Zl=null;function _i(){return Zl=Zl||new ee}Xn.La="serverreachability";function eu(o){Ne.call(this,Xn.La,o)}O(eu,Ne);function us(o){const u=_i();ae(u,new eu(u))}Xn.STAT_EVENT="statevent";function tu(o,u){Ne.call(this,Xn.STAT_EVENT,o),this.stat=u}O(tu,Ne);function it(o){const u=_i();ae(u,new tu(u,o))}Xn.Ma="timingevent";function nu(o,u){Ne.call(this,Xn.Ma,o),this.size=u}O(nu,Ne);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function Zm(o,u,d,p,b,C){o.info(function(){if(o.g)if(C)for(var j="",Ie=C.split("&"),$e=0;$e<Ie.length;$e++){var me=Ie[$e].split("=");if(1<me.length){var Qe=me[0];me=me[1];var Je=Qe.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Qe+"="+me+"&"):j+(Qe+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+d+`
`+j})}function e_(o,u,d,p,b,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+d+`
`+C+" "+j})}function br(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+n_(o,d)+(p?" "+p:"")})}function t_(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function n_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return je(d)}catch{return u}}var yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ru={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ya;function vi(){}O(vi,ga),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},ya=new vi;function En(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new su}function su(){this.i=null,this.g="",this.h=!1}var iu={},va={};function Ea(o,u,d){o.L=1,o.v=wi(en(u)),o.m=d,o.P=!0,ou(o,null)}function ou(o,u){o.F=Date.now(),Ei(o),o.A=en(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Eu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new su,o.g=Fu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new vt(I(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(vn[0]=b.toString()),b=vn);for(var C=0;C<b.length;C++){var j=D(d,b[C],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),Zm(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const u=this.M;u&&tn(o)==3?u.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const Je=tn(this.g);var u=this.g.Ba();const Cr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Ru(this.g)))){this.J||Je!=4||u==7||(u==8||0>=Cr?us(3):us(2)),Ta(this);var d=this.g.Z();this.X=d;t:if(au(this)){var p=Ru(this.g);o="";var b=p.length,C=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),fs(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,e_(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,$e=this.g;if((Ie=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ie)){var me=Ie;break t}}me=null}if(d=me)br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ia(this,d);else{this.o=!1,this.s=3,it(12),Zn(this),fs(this);break e}}if(this.P){d=!0;let Rt;for(;!this.J&&this.C<j.length;)if(Rt=r_(this,j),Rt==va){Je==4&&(this.s=4,it(14),d=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==iu){this.s=4,it(15),br(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else br(this.i,this.l,Rt,null),Ia(this,Rt);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)br(this.i,this.l,j,"[Invalid Chunked Response]"),Zn(this),fs(this);else if(0<j.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ca(Qe),Qe.M=!0,it(11))}}else br(this.i,this.l,j,null),Ia(this,j);Je==4&&Zn(this),this.o&&!this.J&&(Je==4?Nu(this.j,this):(this.o=!1,Ei(this)))}else E_(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Zn(this),fs(this)}}}catch{}finally{}};function au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function r_(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?va:(d=Number(u.substring(d,p)),isNaN(d)?iu:(p+=1,p+d>u.length?va:(u=u.slice(p,p+d),o.C=p+d,u)))}En.prototype.cancel=function(){this.J=!0,Zn(this)};function Ei(o){o.S=Date.now()+o.I,cu(o,o.I)}function cu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(I(o.ba,o),u)}function Ta(o){o.B&&(c.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(t_(this.i,this.A),this.L!=2&&(us(),it(17)),Zn(this),this.s=2,fs(this)):cu(this,this.S-o)};function fs(o){o.j.G==0||o.J||Nu(o.j,o)}function Zn(o){Ta(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,cs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ia(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||wa(d.h,o))){if(!o.K&&wa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Pi(d),Ri(d);else break e;Ra(d),it(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=hs(I(d.Za,d),6e3));if(1>=hu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((o.K||d.g==o)&&Pi(d),!Q(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let me=b[u];if(d.T=me[0],me=me[1],d.G==2)if(me[0]=="c"){d.K=me[1],d.ia=me[2];const Qe=me[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Je=me[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const Cr=me[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(p=1.5*Cr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Rt=o.g;if(Rt){const Di=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var C=p.h;C.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Aa(C,C.h),C.h=null))}if(p.D){const Pa=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(p.ya=Pa,be(p.I,p.D,Pa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=o;if(p.qa=Lu(p,p.J?p.ia:null,p.W),j.K){du(p.h,j);var Ie=j,$e=p.L;$e&&(Ie.I=$e),Ie.B&&(Ta(Ie),Ei(Ie)),p.g=j}else Ou(p);0<d.i.length&&Ci(d)}else me[0]!="stop"&&me[0]!="close"||tr(d,7);else d.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?tr(d,7):Sa(d):me[0]!="noop"&&d.l&&d.l.ta(me),d.v=0)}}us(4)}catch{}}var s_=class{constructor(o,u){this.g=o,this.map=u}};function lu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hu(o){return o.h?1:o.g?o.g.size:0}function wa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Aa(o,u){o.g?o.g.add(u):o.h=u}function du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}lu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return L(o.i)}function i_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function o_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function pu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=o_(o),p=i_(o),b=p.length,C=0;C<b;C++)u.call(void 0,p[C],d&&d[C],o)}var gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function a_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),b=null;if(0<=p){var C=o[d].substring(0,p);b=o[d].substring(p+1)}else C=o[d];u(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var u=o.i,d=new ms;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),mu(this,d),this.m=o.m}else o&&(u=String(o).match(gu))?(this.h=!1,Ti(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),Ii(this,u[4]),this.l=ps(u[5]||"",!0),mu(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gs(u,_u,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gs(u,_u,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gs(d,d.charAt(0)=="/"?u_:l_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gs(d,d_)),o.join("")};function en(o){return new er(o)}function Ti(o,u,d){o.j=d?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function mu(o,u,d){u instanceof ms?(o.i=u,f_(o.i,o.h)):(d||(u=gs(u,h_)),o.i=new ms(u,o.h))}function be(o,u,d){o.i.set(u,d)}function wi(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,c_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function c_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _u=/[#\/\?@]/g,l_=/[#\?:]/g,u_=/[#\?]/g,h_=/[#\?@]/g,d_=/#/g;function ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&a_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(o,u){Tn(this),this.i=null,o=Sr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function yu(o,u){Tn(o),u=Sr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function vu(o,u){return Tn(o),u=Sr(o,u),o.g.has(u)}t.forEach=function(o,u){Tn(this),this.g.forEach(function(d,p){d.forEach(function(b){o.call(u,b,p,this)},this)},this)},t.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const b=o[p];for(let C=0;C<b.length;C++)d.push(u[p])}return d},t.V=function(o){Tn(this);let u=[];if(typeof o=="string")vu(this,o)&&(u=u.concat(this.g.get(Sr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Tn(this),this.i=null,o=Sr(this,o),vu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Eu(o,u,d){yu(o,u),0<d.length&&(o.i=null,o.g.set(Sr(o,u),L(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var b=C;j[p]!==""&&(b+="="+encodeURIComponent(String(j[p]))),o.push(b)}}return this.i=o.join("&")};function Sr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function f_(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(d,p){var b=p.toLowerCase();p!=b&&(yu(this,p),Eu(this,b,d))},o)),o.j=u}function p_(o,u){const d=new ds;if(c.Image){const p=new Image;p.onload=S(In,d,"TestLoadImage: loaded",!0,u,p),p.onerror=S(In,d,"TestLoadImage: error",!1,u,p),p.onabort=S(In,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(In,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function g_(o,u){const d=new ds,p=new AbortController,b=setTimeout(()=>{p.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(d)}catch{}}function m_(){this.g=new mi}function __(o,u,d){const p=d||"";try{pu(o,function(b,C){let j=b;h(b)&&(j=je(b)),u.push(p+C+"="+encodeURIComponent(j))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function Ai(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Ai,ga),Ai.prototype.g=function(){return new bi(this.l,this.j)},Ai.prototype.i=function(o){return function(){return o}}({});function bi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(bi,ee),t=bi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ys(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_s(this):ys(this),this.readyState==3&&Tu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,_s(this))},t.Qa=function(o){this.g&&(this.response=o,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ys(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ys(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Iu(o){let u="";return _e(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ba(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Iu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):be(o,u,d))}function Pe(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Pe,ee);var y_=/^https?$/i,v_=["POST","PUT"];t=Pe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ya.g(),this.v=this.o?Yl(this.o):Yl(ya),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){wu(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)d.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(v_,u,void 0))||p||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of d)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Su(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){wu(this,C)}};function wu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Au(o),Si(o)}function Au(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Si(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?bu(this):this.bb())},t.bb=function(){bu(this)};function bu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tn(o)!=4||o.Z()!=2)){if(o.u&&tn(o)==4)We(o.Ea,0,o);else if(ae(o,"readystatechange"),tn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=j===0){var b=String(o.D).match(gu)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!y_.test(b?b.toLowerCase():"")}d=p}if(d)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<tn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Au(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){Su(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{d.onreadystatechange=p}catch{}}}function Su(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Et(u)}};function Ru(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function E_(o){const u={};o=(o.g&&2<=tn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var d=A(o[p]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[b]||[];u[b]=C,C.push(d)}w(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Cu(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,o),this.cb=vs("retryDelaySeedMs",1e4,o),this.Wa=vs("forwardChannelMaxRetries",2,o),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new lu(o&&o.concurrentRequestLimit),this.Da=new m_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){it(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Lu(this,null,this.W),Ci(this)};function Sa(o){if(Pu(o),o.G==3){var u=o.U++,d=en(o.I);if(be(d,"SID",o.K),be(d,"RID",u),be(d,"TYPE","terminate"),Es(o,d),u=new En(o,o.j,u),u.L=2,u.v=wi(en(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Fu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ei(u)}Mu(o)}function Ri(o){o.g&&(Ca(o),o.g.cancel(),o.g=null)}function Pu(o){Ri(o),o.u&&(c.clearTimeout(o.u),o.u=null),Pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ci(o){if(!uu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Te||Qn(),ge||(Te(),ge=!0),St.add(u,o),o.B=0}}function T_(o,u){return hu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(I(o.Ga,o,u),xu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new En(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Du(this,b,u),d=en(this.I),be(d,"RID",o),be(d,"CVER",22),this.D&&be(d,"X-HTTP-Session-Id",this.D),Es(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Iu(C)))+"&"+u:this.m&&ba(d,this.m,C)),Aa(this.h,b),this.Ua&&be(d,"TYPE","init"),this.P?(be(d,"$req",u),be(d,"SID","null"),b.T=!0,Ea(b,d,null)):Ea(b,d,u),this.G=2}}else this.G==3&&(o?ku(this,o):this.i.length==0||uu(this.h)||ku(this))};function ku(o,u){var d;u?d=u.l:d=o.U++;const p=en(o.I);be(p,"SID",o.K),be(p,"RID",d),be(p,"AID",o.T),Es(o,p),o.m&&o.o&&ba(p,o.m,o.o),d=new En(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Du(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Aa(o.h,d),Ea(d,p,u)}function Es(o,u){o.H&&_e(o.H,function(d,p){be(u,p,d)}),o.l&&pu({},function(d,p){be(u,p,d)})}function Du(o,u,d){d=Math.min(o.i.length,d);var p=o.l?I(o.l.Na,o.l,o):null;e:{var b=o.i;let C=-1;for(;;){const j=["count="+d];C==-1?0<d?(C=b[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let Ie=!0;for(let $e=0;$e<d;$e++){let me=b[$e].g;const Qe=b[$e].map;if(me-=C,0>me)C=Math.max(0,b[$e].g-100),Ie=!1;else try{__(Qe,j,"req"+me+"_")}catch{p&&p(Qe)}}if(Ie){p=j.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Ou(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Te||Qn(),ge||(Te(),ge=!0),St.add(u,o),o.v=0}}function Ra(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(I(o.Fa,o),xu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(I(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ri(this),Vu(this))};function Ca(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Vu(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=en(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),Es(o,u),o.m&&o.o&&ba(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=wi(en(u)),d.m=null,d.P=!0,ou(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ri(this),Ra(this),it(19))};function Pi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Nu(o,u){var d=null;if(o.g==u){Pi(o),Ca(o),o.g=null;var p=2}else if(wa(o.h,u))d=u.D,du(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=_i(),ae(p,new nu(p,d)),Ci(o)}else Ou(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&T_(o,u)||p==2&&Ra(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),b){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function xu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var d=I(o.fb,o),p=o.Xa;const b=!p;p=new er(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ti(p,"https"),wi(p),b?p_(p.toString(),d):g_(p.toString(),d)}else it(2);o.G=0,o.l&&o.l.sa(u),Mu(o),Pu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Mu(o){if(o.G=0,o.ka=[],o.l){const u=fu(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Lu(o,u,d){var p=d instanceof er?en(d):new er(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ii(p,p.s);else{var b=c.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var C=new er(null);p&&Ti(C,p),u&&(C.g=u),b&&Ii(C,b),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&be(p,d,u),be(p,"VER",o.la),Es(o,p),p}function Fu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Pe(new Ai({eb:d})):new Pe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}t=Uu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ki(){}ki.prototype.g=function(o,u){return new ft(o,u)};function ft(o,u){ee.call(this),this.g=new Cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}O(ft,ee),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Sa(this.g)},ft.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=je(o),o=d);u.i.push(new s_(u.Ya++,o)),u.G==3&&Ci(u)},ft.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,ft.aa.N.call(this)};function Bu(o){ma.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(Bu,ma);function ju(){_a.call(this),this.status=1}O(ju,_a);function Rr(o){this.g=o}O(Rr,Uu),Rr.prototype.ua=function(){ae(this.g,"a")},Rr.prototype.ta=function(o){ae(this.g,new Bu(o))},Rr.prototype.sa=function(o){ae(this.g,new ju)},Rr.prototype.ra=function(){ae(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,Pg=function(){return new ki},Cg=function(){return _i()},Rg=Xn,Sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yi.NO_ERROR=0,yi.TIMEOUT=8,yi.HTTP_ERROR=6,Ji=yi,ru.COMPLETE="complete",Sg=ru,Xl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ss=Xl,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,bg=Pe}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});const od="@firebase/firestore",ad="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Wo("@firebase/firestore");function Dr(){return gr.logLevel}function H(t,...e){if(gr.logLevel<=le.DEBUG){const n=e.map(El);gr.debug(`Firestore (${ns}): ${t}`,...n)}}function gn(t,...e){if(gr.logLevel<=le.ERROR){const n=e.map(El);gr.error(`Firestore (${ns}): ${t}`,...n)}}function Wr(t,...e){if(gr.logLevel<=le.WARN){const n=e.map(El);gr.warn(`Firestore (${ns}): ${t}`,...n)}}function El(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function Ee(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gb{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new kg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Xe(e)}}class mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _b{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yb{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Tt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ee(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new cd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new cd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Gr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=-62135596800,ud=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ud);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ld)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ud}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ld;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Me(0,0))}static max(){return new ie(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="__name__";class Ft{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ft.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ft?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Ft.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=Ft.isNumericId(e),s=Ft.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ft.extractNumericId(e).compare(Ft.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class Re extends Ft{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const Eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Ft{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return Eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hd}static keyField(){return new Ke([hd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Y(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=-1;function Tb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Un(s,X.empty(),e)}function Ib(t){return new Un(t.readTime,t.key,Js)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(ie.min(),X.empty(),Js)}static max(){return new Un(ie.max(),X.empty(),Js)}}function wb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Ab)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Sb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Zo.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=-1;function ea(t){return t==null}function Io(t){return t===0&&1/t==-1/0}function Rb(t){return typeof t=="number"&&Number.isInteger(t)&&!Io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="";function Cb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dd(e)),e=Pb(t.get(n),e);return dd(e)}function Pb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Og:n+="";break;default:n+=i}}return n}function dd(t){return t+Og+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(e){return new pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Le(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ng("Invalid base64 string: "+i):i}}(e);return new ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=kb.exec(t);if(Ee(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jn(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="server_timestamp",Mg="__type__",Lg="__previous_value__",Fg="__local_write_time__";function Il(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mg])===null||n===void 0?void 0:n.stringValue)===xg}function ta(t){const e=t.mapValue.fields[Lg];return Il(e)?ta(e):e}function Ys(t){const e=Bn(t.mapValue.fields[Fg].timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const wo="(default)";class Xs{constructor(e,n){this.projectId=e,this.database=n||wo}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===wo}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="__type__",Ob="__max__",Fi={mapValue:{}},Bg="__vector__",Ao="value";function $n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Il(t)?4:Nb(t)?9007199254740991:Vb(t)?10:11:re()}function Jt(t,e){if(t===e)return!0;const n=$n(t);if(n!==$n(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bn(s.timestampValue),c=Bn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jn(s.bytesValue).isEqual(jn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ke(s.doubleValue),c=ke(i.doubleValue);return a===c?Io(a)===Io(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(fd(a)!==fd(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Jt(a[l],c[l])))return!1;return!0}(t,e);default:return re()}}function Zs(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Qr(t,e){if(t===e)return 0;const n=$n(t),r=$n(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ke(i.integerValue||i.doubleValue),l=ke(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return gd(t.timestampValue,e.timestampValue);case 4:return gd(Ys(t),Ys(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,a){const c=jn(i),l=jn(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=he(c[h],l[h]);if(f!==0)return f}return he(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=he(ke(i.latitude),ke(a.latitude));return c!==0?c:he(ke(i.longitude),ke(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return md(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const g=i.fields||{},I=a.fields||{},S=(c=g[Ao])===null||c===void 0?void 0:c.arrayValue,O=(l=I[Ao])===null||l===void 0?void 0:l.arrayValue,L=he(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=O==null?void 0:O.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:md(S,O)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Fi.mapValue&&a===Fi.mapValue)return 0;if(i===Fi.mapValue)return 1;if(a===Fi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const I=he(l[g],f[g]);if(I!==0)return I;const S=Qr(c[l[g]],h[f[g]]);if(S!==0)return S}return he(l.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function gd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Bn(t),r=Bn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qr(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function Jr(t){return Rc(t)}function Rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Bn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Rc(n.fields[a])}`;return s+"}"}(t.mapValue):re()}function Yi(t){switch($n(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ta(t);return e?16+Yi(e):16;case 5:return 2*t.stringValue.length;case 6:return jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Yi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Tr(r.fields,(i,a)=>{s+=i.length+Yi(a)}),s}(t.mapValue);default:throw re()}}function Cc(t){return!!t&&"integerValue"in t}function wl(t){return!!t&&"arrayValue"in t}function _d(t){return!!t&&"nullValue"in t}function yd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xi(t){return!!t&&"mapValue"in t}function Vb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ug])===null||n===void 0?void 0:n.stringValue)===Bg}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ob}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Ls(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Tr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ls(this.value))}}function jg(t){const e=[];return Tr(t.fields,(n,r)=>{const s=new Ke([n]);if(Xi(r)){const i=jg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new tt(e,0,ie.min(),ie.min(),ie.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,ie.min(),ie.min(),It.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ie.min(),ie.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.position=e,this.inclusive=n}}function vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=Qr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ed(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n="asc"){this.field=e,this.dir=n}}function xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{}class xe extends $g{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Lb(e,n,r):n==="array-contains"?new Bb(e,r):n==="in"?new jb(e,r):n==="not-in"?new $b(e,r):n==="array-contains-any"?new qb(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fb(e,r):new Ub(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qr(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(Qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends $g{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Yt(e,n)}matches(e){return qg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function qg(t){return t.op==="and"}function Hg(t){return Mb(t)&&qg(t)}function Mb(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Pc(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Jr(t.value);if(Hg(t))return t.filters.map(e=>Pc(e)).join(",");{const e=t.filters.map(n=>Pc(n)).join(",");return`${t.op}(${e})`}}function Kg(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Kg(a,s.filters[c]),!0):!1}(t,e):void re()}function zg(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Jr(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(zg).join(" ,")+"}"}(t):"Filter"}class Lb extends xe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fb extends xe{constructor(e,n){super(e,"in",n),this.keys=Wg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ub extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Wg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Bb extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wl(n)&&Zs(n.arrayValue,this.value)}}class jb extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zs(this.value.arrayValue,n)}}class $b extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zs(this.value.arrayValue,n)}}class qb extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.le=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Hb(t,e,n,r,s,i,a)}function Al(t){const e=oe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),e.le=n}return e.le}function bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ed(t.startAt,e.startAt)&&Ed(t.endAt,e.endAt)}function kc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Kb(t,e,n,r,s,i,a,c){return new na(t,e,n,r,s,i,a,c)}function Gg(t){return new na(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zb(t){return t.collectionGroup!==null}function Fs(t){const e=oe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Le(Ke.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new So(i,r))}),n.has(Ke.keyField().canonicalString())||e.he.push(new So(Ke.keyField(),r))}return e.he}function Ht(t){const e=oe(t);return e.Pe||(e.Pe=Wb(e,Fs(t))),e.Pe}function Wb(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new So(s.field,i)});const n=t.endAt?new bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bo(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dc(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ra(t,e){return bl(Ht(t),Ht(e))&&t.limitType===e.limitType}function Qg(t){return`${Al(Ht(t))}|lt:${t.limitType}`}function Or(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>zg(s)).join(", ")}]`),ea(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Jr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Jr(s)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=vd(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Fs(r),s)||r.endAt&&!function(a,c,l){const h=vd(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Fs(r),s))}(t,e)}function Gb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jg(t){return(e,n)=>{let r=!1;for(const s of Fs(t)){const i=Qb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Qb(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Qr(l,h):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Ce(X.comparator);function mn(){return Jb}const Yg=new Ce(X.comparator);function Rs(...t){let e=Yg;for(const n of t)e=e.insert(n.key,n);return e}function Xg(t){let e=Yg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Us()}function Zg(){return Us()}function Us(){return new Ir(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yb=new Ce(X.comparator),Xb=new Le(X.comparator);function ue(...t){let e=Xb;for(const n of t)e=e.add(n);return e}const Zb=new Le(he);function eS(){return Zb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Io(e)?"-0":e}}function em(t){return{integerValue:""+t}}function tS(t,e){return Rb(e)?em(e):Sl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this._=void 0}}function nS(t,e,n){return t instanceof Ro?function(s,i){const a={fields:{[Mg]:{stringValue:xg},[Fg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Il(i)&&(i=ta(i)),i&&(a.fields[Lg]=i),{mapValue:a}}(n,e):t instanceof ei?nm(t,e):t instanceof ti?rm(t,e):function(s,i){const a=tm(s,i),c=wd(a)+wd(s.Ie);return Cc(a)&&Cc(s.Ie)?em(c):Sl(s.serializer,c)}(t,e)}function rS(t,e,n){return t instanceof ei?nm(t,e):t instanceof ti?rm(t,e):n}function tm(t,e){return t instanceof Co?function(r){return Cc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ro extends ia{}class ei extends ia{constructor(e){super(),this.elements=e}}function nm(t,e){const n=sm(e);for(const r of t.elements)n.some(s=>Jt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ti extends ia{constructor(e){super(),this.elements=e}}function rm(t,e){let n=sm(e);for(const r of t.elements)n=n.filter(s=>!Jt(s,r));return{arrayValue:{values:n}}}class Co extends ia{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function wd(t){return ke(t.integerValue||t.doubleValue)}function sm(t){return wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ei&&s instanceof ei||r instanceof ti&&s instanceof ti?Gr(r.elements,s.elements,Jt):r instanceof Co&&s instanceof Co?Jt(r.Ie,s.Ie):r instanceof Ro&&s instanceof Ro}(t.transform,e.transform)}class iS{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oa{}function im(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rl(t.key,Kt.none()):new hi(t.key,t.data,Kt.none());{const n=t.data,r=It.empty();let s=new Le(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new wr(t.key,r,new Pt(s.toArray()),Kt.none())}}function oS(t,e,n){t instanceof hi?function(s,i,a){const c=s.value.clone(),l=bd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(s,i,a){if(!Zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(om(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof hi?function(i,a,c,l){if(!Zi(i.precondition,a))return c;const h=i.value.clone(),f=Sd(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(i,a,c,l){if(!Zi(i.precondition,a))return c;const h=Sd(i.fieldTransforms,l,a),f=a.data;return f.setAll(om(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,c){return Zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function aS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=tm(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,(i,a)=>sS(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hi extends oa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wr extends oa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bd(t,e,n){const r=new Map;Ee(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,rS(a,c,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,nS(i,a,e))}return r}class Rl extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cS extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&oS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=im(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,r)=>Ad(n,r))&&Gr(this.baseMutations,e.baseMutations,(n,r)=>Ad(n,r))}}class Cl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length);let s=function(){return Yb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,fe;function dS(t){switch(t){case V.OK:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return re()}}function am(t){if(t===void 0)return gn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(fe=De||(De={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new xn([4294967295,4294967295],0);function Rd(t){const e=fS().encode(t),n=new Ag;return n.update(e),new Uint8Array(n.digest())}function Cd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([n,r],0),new xn([s,i],0)]}class Pl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Cs(`Invalid padding: ${n}`);if(r<0)throw new Cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Cs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=xn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(xn.fromNumber(r)));return s.compare(pS)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Rd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Pl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const n=Rd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new aa(ie.min(),s,new Ce(he),mn(),ue())}}class di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new di(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class cm{constructor(e,n){this.targetId=e,this.ge=n}}class lm{constructor(e,n,r=ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pd{constructor(){this.pe=0,this.ye=kd(),this.we=ze.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ue(),n=ue(),r=ue();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new di(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=kd()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ee(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class gS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=mn(),this.$e=Ui(),this.Ke=Ui(),this.Ue=new Ce(he)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(kc(i))if(r===0){const a=new X(i.path);this.ze(n,a,tt.newNoDocument(a,ie.min()))}else Ee(r===1);else{const a=this.et(n);if(a!==r){const c=this.tt(e),l=c?this.nt(c,e,a):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=jn(r).toUint8Array()}catch(l){if(l instanceof Ng)return Wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Pl(a,s,i)}catch(l){return Wr(l instanceof Cs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,a)=>{const c=this.Xe(a);if(c){if(i.current&&kc(c.target)){const l=new X(c.target.path);this._t(l).has(a)||this.ut(a,l)||this.ze(a,l,tt.newNoDocument(l,e))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=ue();this.Ke.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new aa(e,n,this.Ue,this.Qe,r);return this.Qe=mn(),this.$e=Ui(),this.Ke=Ui(),this.Ue=new Ce(he),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Pd,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new Le(he),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Le(he),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Pd),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ui(){return new Ce(X.comparator)}function kd(){return new Ce(X.comparator)}const mS={asc:"ASCENDING",desc:"DESCENDING"},_S={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yS={and:"AND",or:"OR"};class vS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Oc(t,e){return t.useProto3Json||ea(e)?e:{value:e}}function Po(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ES(t,e){return Po(t,e.toTimestamp())}function zt(t){return Ee(!!t),ie.fromTimestamp(function(n){const r=Bn(n);return new Me(r.seconds,r.nanos)}(t))}function kl(t,e){return Vc(t,e).canonicalString()}function Vc(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hm(t){const e=Re.fromString(t);return Ee(mm(e)),e}function Nc(t,e){return kl(t.databaseId,e.path)}function Xa(t,e){const n=hm(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(fm(n))}function dm(t,e){return kl(t.databaseId,e)}function TS(t){const e=hm(t);return e.length===4?Re.emptyPath():fm(e)}function xc(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fm(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dd(t,e,n){return{name:Nc(t,e),fields:n.value.mapValue.fields}}function IS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ee(f===void 0||typeof f=="string"),ze.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?V.UNKNOWN:am(h.code);return new Y(f,h.message||"")}(a);n=new lm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xa(t,r.document.name),i=zt(r.document.updateTime),a=r.document.createTime?zt(r.document.createTime):ie.min(),c=new It({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new eo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xa(t,r.document),i=r.readTime?zt(r.readTime):ie.min(),a=tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new eo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xa(t,r.document),i=r.removedTargetIds||[];n=new eo([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new hS(s,i),c=r.targetId;n=new cm(c,a)}}return n}function wS(t,e){let n;if(e instanceof hi)n={update:Dd(t,e.key,e.value)};else if(e instanceof Rl)n={delete:Nc(t,e.key)};else if(e instanceof wr)n={update:Dd(t,e.key,e.data),updateMask:OS(e.fieldMask)};else{if(!(e instanceof cS))return re();n={verify:Nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Ro)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ei)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ti)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Co)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ES(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function AS(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?zt(s.updateTime):zt(i);return a.isEqual(ie.min())&&(a=zt(i)),new iS(a,s.transformResults||[])}(n,e))):[]}function bS(t,e){return{documents:[dm(t,e.path)]}}function SS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dm(t,s);const i=function(h){if(h.length!==0)return gm(Yt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(I){return{field:Vr(I.field),direction:PS(I.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Oc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function RS(t){let e=TS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const I=pm(g);return I instanceof Yt&&Hg(I)?I.getFilters():[I]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(I=>function(O){return new So(Nr(O.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(I))}(n.orderBy));let c=null;n.limit&&(c=function(g){let I;return I=typeof g=="object"?g.value:g,ea(I)?null:I}(n.limit));let l=null;n.startAt&&(l=function(g){const I=!!g.before,S=g.values||[];return new bo(S,I)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const I=!g.before,S=g.values||[];return new bo(S,I)}(n.endAt)),Kb(e,s,a,i,c,"F",l,h)}function CS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nr(n.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function PS(t){return mS[t]}function kS(t){return _S[t]}function DS(t){return yS[t]}function Vr(t){return{fieldPath:t.canonicalString()}}function Nr(t){return Ke.fromServerFormat(t.fieldPath)}function gm(t){return t instanceof xe?function(n){if(n.op==="=="){if(yd(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(_d(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yd(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(_d(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:kS(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>gm(s));return r.length===1?r[0]:{compositeFilter:{op:DS(n.op),filters:r}}}(t):re()}function OS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=ie.min(),a=ie.min(),c=ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.Tt=e}}function NS(t){const e=RS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.Tn=new MS}addToCollectionParentIndex(e,n){return this.Tn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Un.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class MS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_m=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(_m,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Yr(0)}static Un(){return new Yr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="LruGarbageCollector",LS=1048576;function Nd([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class FS{constructor(e){this.Hn=e,this.buffer=new Le(Nd),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Nd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class US{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){H(Vd,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ss(n)?H(Vd,"Ignoring IndexedDB error during garbage collection: ",n):await rs(n)}await this.er(3e5)})}}class BS{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return k.resolve(Zo.ae);const r=new FS(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Od)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Od):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Dr()<=le.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function jS(t,e){return new BS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.changes=new Ir(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bs(r.mutation,s,Pt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Rs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=mn();const a=Us(),c=function(){return Us()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof wr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),Me.now())):a.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return c.set(h,new qS(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Us();let s=new Ce((a,c)=>a-c),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Pt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const g=(s.get(c.batchId)||ue()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=Zg();f.forEach(I=>{if(!i.has(I)){const S=im(n.get(I),r.get(I));S!==null&&g.set(I,S),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(cr());let c=Js,l=i;return a.next(h=>k.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{l=l.insert(f,I)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ue())).next(f=>({batchId:c,changes:Xg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Rs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Rs();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const h=function(g,I){return new na(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,tt.newInvalidDocument(f)))});let c=Rs();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Bs(f.mutation,h,Pt.empty(),Me.now()),sa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return k.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:NS(s.bundledQuery),readTime:zt(s.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.overlays=new Ce(X.comparator),this.Rr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=cr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return k.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uS(n,r));let i=this.Rr.get(n);i===void 0&&(i=ue(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.sessionToken=ze.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.Vr=new Le(Fe.mr),this.gr=new Le(Fe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Fe(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new X(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new X(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=ue();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return X.comparator(e.key,n.key)||he(e.Cr,n.Cr)}static pr(e,n){return he(e.Cr,n.Cr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Le(Fe.mr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lS(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new Fe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,n){return k.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Tl:this.Fr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const c=this.Or(a.Cr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(he);return n.forEach(s=>{const i=new Fe(s,0),a=new Fe(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],c=>{r=r.add(c.Cr)})}),k.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Fe(new X(i),0);let c=new Le(he);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Cr)),!0)},a),k.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return k.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Mr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.kr=e,this.docs=function(){return new Ce(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mn();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||wb(Ib(f),r)<=0||(s.has(f.key)||sa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}qr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JS(this)}getSize(e){return k.resolve(this.size)}}class JS extends $S{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.persistence=e,this.Qr=new Ir(n=>Al(n),bl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Dl,this.targetCount=0,this.Ur=Yr.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),k.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Yr(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.zn(n),k.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Zo(0),this.zr=!1,this.zr=!0,this.jr=new WS,this.referenceDelegate=e(this),this.Hr=new YS(this),this.indexManager=new xS,this.remoteDocumentCache=function(s){return new QS(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new VS(n),this.Yr=new KS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new GS(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new XS(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return k.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class XS extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class Ol{constructor(e){this.persistence=e,this.ti=new Dl,this.ni=null}static ri(e){return new Ol(e)}get ii(){if(this.ni)return this.ni;throw re()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),k.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ii,r=>{const s=X.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return k.or([()=>k.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ko{constructor(e,n){this.persistence=e,this.oi=new Ir(r=>Cb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jS(this,n)}static ri(e,n){return new ko(e,n)}Zr(){}Xr(e){return k.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return k.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?k.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(c=>{c||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),k.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),k.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Yi(e.data.value)),n}ar(e,n,r){return k.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pE()?8:Sb(st())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ZS;return this._s(e,n,a).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,a,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Dr()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Or(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),k.resolve()):(Dr()<=le.DEBUG&&H("QueryEngine","Query:",Or(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Dr()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Or(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):k.resolve())}rs(e,n){if(Id(n))return k.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Dc(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ue(...i);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,a,l.readTime)?this.rs(e,Dc(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,s){return Id(n)||s.isEqual(ie.min())?k.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?k.resolve(null):(Dr()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(n)),this.hs(e,a,n,Tb(s,Js)).next(c=>c))})}cs(e,n){let r=new Le(Jg(e));return n.forEach((s,i)=>{sa(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Dr()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Or(n)),this.ns.getDocumentsMatchingQuery(e,n,Un.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="LocalStore",t0=3e8;class n0{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ce(he),this.Is=new Ir(i=>Al(i),bl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function r0(t,e,n,r){return new n0(t,e,n,r)}async function vm(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ue();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:c}))})})}function s0(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const g=h.batch,I=g.keys();let S=k.resolve();return I.forEach(O=>{S=S.next(()=>f.getEntry(l,O)).next(L=>{const F=h.docVersions.get(O);Ee(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),f.addEntry(L)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ue();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Em(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function i0(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((f,g)=>{const I=s.get(g);if(!I)return;c.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,g)));let S=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(ze.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(L,F,W){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=t0?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,S,f)&&c.push(n.Hr.updateTargetData(i,S))});let l=mn(),h=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(o0(i,a,e.documentUpdates).next(f=>{l=f.Vs,h=f.fs})),!r.isEqual(ie.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(g=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ts=s,i))}function o0(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=mn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):H(Nl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:a,fs:s}})}function a0(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Tl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function c0(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Mc(t,e,n){const r=oe(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ss(a))throw a;H(Nl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function xd(t,e,n){const r=oe(t);let s=ie.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const g=oe(l),I=g.Is.get(f);return I!==void 0?k.resolve(g.Ts.get(I)):g.Hr.getTargetData(h,f)}(r,a,Ht(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,n?s:ie.min(),n?i:ue())).next(c=>(l0(r,Gb(e),c),{documents:c,gs:i})))}function l0(t,e,n){let r=t.Es.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Md{constructor(){this.activeTargetIds=eS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u0{constructor(){this.ho=new Md,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Md,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="ConnectivityMonitor";class Fd{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){H(Ld,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){H(Ld,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=null;function Lc(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="RestConnection",d0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class f0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===wo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const a=Lc(),c=this.So(e,n.toUriEncodedString());H(Za,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(h=>(H(Za,`Received RPC '${e}' ${a}: `,h),h),h=>{throw Wr(Za,`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,s,i,a){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=d0[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class g0 extends f0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Lc();return new Promise((a,c)=>{const l=new bg;l.setWithCredentials(!0),l.listenOnce(Sg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ji.NO_ERROR:const f=l.getResponseJson();H(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ji.TIMEOUT:H(Ye,`RPC '${e}' ${i} timed out`),c(new Y(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const g=l.getStatus();if(H(Ye,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const O=function(F){const W=F.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(W)>=0?W:V.UNKNOWN}(S.status);c(new Y(O,S.message))}else c(new Y(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{H(Ye,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);H(Ye,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=Lc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pg(),c=Cg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");H(Ye,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let I=!1,S=!1;const O=new p0({Fo:F=>{S?H(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(I||(H(Ye,`Opening RPC '${e}' stream ${s} transport.`),g.open(),I=!0),H(Ye,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},Mo:()=>g.close()}),L=(F,W,Q)=>{F.listen(W,J=>{try{Q(J)}catch(K){setTimeout(()=>{throw K},0)}})};return L(g,Ss.EventType.OPEN,()=>{S||(H(Ye,`RPC '${e}' stream ${s} transport opened.`),O.Qo())}),L(g,Ss.EventType.CLOSE,()=>{S||(S=!0,H(Ye,`RPC '${e}' stream ${s} transport closed`),O.Ko())}),L(g,Ss.EventType.ERROR,F=>{S||(S=!0,Wr(Ye,`RPC '${e}' stream ${s} transport errored:`,F),O.Ko(new Y(V.UNAVAILABLE,"The operation could not be completed")))}),L(g,Ss.EventType.MESSAGE,F=>{var W;if(!S){const Q=F.data[0];Ee(!!Q);const J=Q,K=(J==null?void 0:J.error)||((W=J[0])===null||W===void 0?void 0:W.error);if(K){H(Ye,`RPC '${e}' stream ${s} received error:`,K);const pe=K.status;let _e=function(v){const T=De[v];if(T!==void 0)return am(T)}(pe),w=K.message;_e===void 0&&(_e=V.INTERNAL,w="Unknown error status: "+pe+" with message "+K.message),S=!0,O.Ko(new Y(_e,w)),g.close()}else H(Ye,`RPC '${e}' stream ${s} received:`,Q),O.Uo(Q)}}),L(c,Rg.STAT_EVENT,F=>{F.stat===Sc.PROXY?H(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Sc.NOPROXY&&H(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.$o()},0),O}}function ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){return new vS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="PersistentStream";class Im{constructor(e,n,r,s,i,a,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tm(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Y(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return H(Ud,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(H(Ud,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m0 extends Im{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=IS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?zt(a.readTime):ie.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=xc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=kc(l)?{documents:bS(i,l)}:{query:SS(i,l).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=um(i,a.resumeToken);const h=Oc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=Po(i,a.snapshotVersion.toTimestamp());const h=Oc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=CS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=xc(this.serializer),n.removeTarget=e,this.I_(n)}}class _0 extends Im{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=AS(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=xc(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wS(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{}class v0 extends y0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(e,Vc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(V.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,Vc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(V.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class E0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(gn(n),this.N_=!1):H("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="RemoteStore";class T0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Ar(this)&&(H(mr,"Restarting streams for network reachability change."),await async function(l){const h=oe(l);h.W_.add(4),await fi(h),h.j_.set("Unknown"),h.W_.delete(4),await la(h)}(this))})}),this.j_=new E0(r,s)}}async function la(t){if(Ar(t))for(const e of t.G_)await e(!0)}async function fi(t){for(const e of t.G_)await e(!1)}function wm(t,e){const n=oe(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Fl(n)?Ll(n):is(n).c_()&&Ml(n,e))}function xl(t,e){const n=oe(t),r=is(n);n.U_.delete(e),r.c_()&&Am(n,e),n.U_.size===0&&(r.c_()?r.P_():Ar(n)&&n.j_.set("Unknown"))}function Ml(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).y_(e)}function Am(t,e){t.H_.Ne(e),is(t).w_(e)}function Ll(t){t.H_=new gS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),is(t).start(),t.j_.B_()}function Fl(t){return Ar(t)&&!is(t).u_()&&t.U_.size>0}function Ar(t){return oe(t).W_.size===0}function bm(t){t.H_=void 0}async function I0(t){t.j_.set("Online")}async function w0(t){t.U_.forEach((e,n)=>{Ml(t,e)})}async function A0(t,e){bm(t),Fl(t)?(t.j_.q_(e),Ll(t)):t.j_.set("Unknown")}async function b0(t,e,n){if(t.j_.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.U_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){H(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Do(t,r)}else if(e instanceof eo?t.H_.We(e):e instanceof cm?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ie.min()))try{const r=await Em(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.H_.ot(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.U_.get(h);f&&i.U_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.U_.get(l);if(!f)return;i.U_.set(l,f.withResumeToken(ze.EMPTY_BYTE_STRING,f.snapshotVersion)),Am(i,l);const g=new kn(f.target,l,h,f.sequenceNumber);Ml(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){H(mr,"Failed to raise snapshot:",r),await Do(t,r)}}async function Do(t,e,n){if(!ss(e))throw e;t.W_.add(1),await fi(t),t.j_.set("Offline"),n||(n=()=>Em(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(mr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await la(t)})}function Sm(t,e){return e().catch(n=>Do(t,n,e))}async function ua(t){const e=oe(t),n=qn(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Tl;for(;S0(e);)try{const s=await a0(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,R0(e,s)}catch(s){await Do(e,s)}Rm(e)&&Cm(e)}function S0(t){return Ar(t)&&t.K_.length<10}function R0(t,e){t.K_.push(e);const n=qn(t);n.c_()&&n.b_&&n.S_(e.mutations)}function Rm(t){return Ar(t)&&!qn(t).u_()&&t.K_.length>0}function Cm(t){qn(t).start()}async function C0(t){qn(t).C_()}async function P0(t){const e=qn(t);for(const n of t.K_)e.S_(n.mutations)}async function k0(t,e,n){const r=t.K_.shift(),s=Cl.from(r,e,n);await Sm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ua(t)}async function D0(t,e){e&&qn(t).b_&&await async function(r,s){if(function(a){return dS(a)&&a!==V.ABORTED}(s.code)){const i=r.K_.shift();qn(r).h_(),await Sm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ua(r)}}(t,e),Rm(t)&&Cm(t)}async function Bd(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H(mr,"RemoteStore received new credentials");const r=Ar(n);n.W_.add(3),await fi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await la(n)}async function O0(t,e){const n=oe(t);e?(n.W_.delete(2),await la(n)):e||(n.W_.add(2),await fi(n),n.j_.set("Unknown"))}function is(t){return t.J_||(t.J_=function(n,r,s){const i=oe(n);return i.M_(),new m0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:I0.bind(null,t),No:w0.bind(null,t),Lo:A0.bind(null,t),p_:b0.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Fl(t)?Ll(t):t.j_.set("Unknown")):(await t.J_.stop(),bm(t))})),t.J_}function qn(t){return t.Y_||(t.Y_=function(n,r,s){const i=oe(n);return i.M_(),new _0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:C0.bind(null,t),Lo:D0.bind(null,t),D_:P0.bind(null,t),v_:k0.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await ua(t)):(await t.Y_.stop(),t.K_.length>0&&(H(mr,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Ul(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(t,e){if(gn("AsyncQueue",`${e}: ${t}`),ss(t))return new Y(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{static emptySet(e){return new Kr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Rs(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Z_=new Ce(X.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):re():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xr{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Xr(e,n,Kr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class N0{constructor(){this.queries=$d(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=$d(),i.forEach((a,c)=>{for(const l of c.ta)l.onError(r)})})(this,new Y(V.ABORTED,"Firestore shutting down"))}}function $d(){return new Ir(t=>Qg(t),ra)}async function x0(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new V0,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Bl(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&jl(n)}async function M0(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function L0(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.ta)c.oa(s)&&(r=!0);a.ea=s}}r&&jl(n)}function F0(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function jl(t){t.ia.forEach(e=>{e.next()})}var Fc,qd;(qd=Fc||(Fc={}))._a="default",qd.Cache="cache";class U0{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Fc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class B0{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ue(),this.mutatedKeys=ue(),this.ya=Jg(e),this.wa=new Kr(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new jd,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const I=s.get(f),S=sa(this.query,g)?g:null,O=!!I&&this.mutatedKeys.has(I.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let F=!1;I&&S?I.data.isEqual(S.data)?O!==L&&(r.track({type:3,doc:S}),F=!0):this.va(I,S)||(r.track({type:2,doc:S}),F=!0,(l&&this.ya(S,l)>0||h&&this.ya(S,h)<0)&&(c=!0)):!I&&S?(r.track({type:0,doc:S}),F=!0):I&&!S&&(r.track({type:1,doc:I}),F=!0,(l||h)&&(c=!0)),F&&(S?(a=a.add(S),i=L?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,g)=>function(S,O){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return L(S)-L(O)}(f.type,g.type)||this.ya(f.doc,g.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,h=l!==this.ga;return this.ga=l,a.length!==0||h?{snapshot:new Xr(this.query,e.wa,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new jd,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ue(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new km(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new Pm(r))}),n}Oa(e){this.fa=e.gs,this.pa=ue();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Xr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const $l="SyncEngine";class j0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $0{constructor(e){this.key=e,this.Ba=!1}}class q0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Ir(c=>Qg(c),ra),this.qa=new Map,this.Qa=new Set,this.$a=new Ce(X.comparator),this.Ka=new Map,this.Ua=new Dl,this.Wa={},this.Ga=new Map,this.za=Yr.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function H0(t,e,n=!0){const r=Mm(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Dm(r,e,n,!0),s}async function K0(t,e){const n=Mm(t);await Dm(n,e,!0,!1)}async function Dm(t,e,n,r){const s=await c0(t.localStore,Ht(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await z0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&wm(t.remoteStore,s),c}async function z0(t,e,n,r,s){t.Ha=(g,I,S)=>async function(L,F,W,Q){let J=F.view.Sa(W);J.ls&&(J=await xd(L.localStore,F.query,!1).then(({documents:w})=>F.view.Sa(w,J)));const K=Q&&Q.targetChanges.get(F.targetId),pe=Q&&Q.targetMismatches.get(F.targetId)!=null,_e=F.view.applyChanges(J,L.isPrimaryClient,K,pe);return Kd(L,F.targetId,_e.Ma),_e.snapshot}(t,g,I,S);const i=await xd(t.localStore,e,!0),a=new B0(e,i.gs),c=a.Sa(i.documents),l=di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Kd(t,n,h.Ma);const f=new j0(e,n,a);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function W0(t,e,n){const r=oe(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ra(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xl(r.remoteStore,s.targetId),Uc(r,s.targetId)}).catch(rs)):(Uc(r,s.targetId),await Mc(r.localStore,s.targetId,!0))}async function G0(t,e){const n=oe(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xl(n.remoteStore,r.targetId))}async function Q0(t,e,n){const r=nR(t);try{const s=await function(a,c){const l=oe(a),h=Me.now(),f=c.reduce((S,O)=>S.add(O.key),ue());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let O=mn(),L=ue();return l.ds.getEntries(S,f).next(F=>{O=F,O.forEach((W,Q)=>{Q.isValidDocument()||(L=L.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,O)).next(F=>{g=F;const W=[];for(const Q of c){const J=aS(Q,g.get(Q.key).overlayedDocument);J!=null&&W.push(new wr(Q.key,J,jg(J.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,h,W,c)}).next(F=>{I=F;const W=F.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(S,F.batchId,W)})}).then(()=>({batchId:I.batchId,changes:Xg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Wa[a.currentUser.toKey()];h||(h=new Ce(he)),h=h.insert(c,l),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await pi(r,s.changes),await ua(r.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");n.reject(i)}}async function Om(t,e){const n=oe(t);try{const r=await i0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ka.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Ee(a.Ba):s.removedDocuments.size>0&&(Ee(a.Ba),a.Ba=!1))}),await pi(n,r,e)}catch(r){await rs(r)}}function Hd(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const c=a.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=oe(a);l.onlineState=c;let h=!1;l.queries.forEach((f,g)=>{for(const I of g.ta)I.sa(c)&&(h=!0)}),h&&jl(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J0(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let a=new Ce(X.comparator);a=a.insert(i,tt.newNoDocument(i,ie.min()));const c=ue().add(i),l=new aa(ie.min(),new Map,new Ce(he),a,c);await Om(r,l),r.$a=r.$a.remove(i),r.Ka.delete(e),ql(r)}else await Mc(r.localStore,e,!1).then(()=>Uc(r,e,n)).catch(rs)}async function Y0(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await s0(n.localStore,e);Nm(n,r,null),Vm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pi(n,s)}catch(s){await rs(s)}}async function X0(t,e,n){const r=oe(t);try{const s=await function(a,c){const l=oe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(Ee(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Nm(r,e,n),Vm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pi(r,s)}catch(s){await rs(s)}}function Vm(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Nm(t,e,n){const r=oe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||xm(t,r)})}function xm(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(xl(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),ql(t))}function Kd(t,e,n){for(const r of n)r instanceof Pm?(t.Ua.addReference(r.key,e),Z0(t,r)):r instanceof km?(H($l,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||xm(t,r.key)):re()}function Z0(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(H($l,"New document in limbo: "+n),t.Qa.add(r),ql(t))}function ql(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new X(Re.fromString(e)),r=t.za.next();t.Ka.set(r,new $0(n)),t.$a=t.$a.insert(n,r),wm(t.remoteStore,new kn(Ht(Gg(n.path)),r,"TargetPurposeLimboResolution",Zo.ae))}}async function pi(t,e,n){const r=oe(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{a.push(r.Ha(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Vl.Yi(l.targetId,h);i.push(g)}}))}),await Promise.all(a),r.La.p_(s),await async function(l,h){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(h,I=>k.forEach(I.Hi,S=>f.persistence.referenceDelegate.addReference(g,I.targetId,S)).next(()=>k.forEach(I.Ji,S=>f.persistence.referenceDelegate.removeReference(g,I.targetId,S)))))}catch(g){if(!ss(g))throw g;H(Nl,"Failed to update sequence numbers: "+g)}for(const g of h){const I=g.targetId;if(!g.fromCache){const S=f.Ts.get(I),O=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(O);f.Ts=f.Ts.insert(I,L)}}}(r.localStore,i))}async function eR(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H($l,"User change. New user:",e.toKey());const r=await vm(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new Y(V.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pi(n,r.Rs)}}function tR(t,e){const n=oe(t),r=n.Ka.get(e);if(r&&r.Ba)return ue().add(r.key);{let s=ue();const i=n.qa.get(e);if(!i)return s;for(const a of i){const c=n.ka.get(a);s=s.unionWith(c.view.ba)}return s}}function Mm(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J0.bind(null,e),e.La.p_=L0.bind(null,e.eventManager),e.La.Ja=F0.bind(null,e.eventManager),e}function nR(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X0.bind(null,e),e}class Oo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ca(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return r0(this.persistence,new e0,e.initialUser,this.serializer)}Xa(e){return new ym(Ol.ri,this.serializer)}Za(e){return new u0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oo.provider={build:()=>new Oo};class rR extends Oo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ee(this.persistence.referenceDelegate instanceof ko);const r=this.persistence.referenceDelegate.garbageCollector;return new US(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new ym(r=>ko.ri(r,n),this.serializer)}}class Bc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eR.bind(null,this.syncEngine),await O0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N0}()}createDatastore(e){const n=ca(e.databaseInfo.databaseId),r=function(i){return new g0(i)}(e.databaseInfo);return function(i,a,c,l){return new v0(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new T0(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Hd(this.syncEngine,n,0),function(){return Fd.D()?new Fd:new h0}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const g=new q0(s,i,a,c,l,h);return f&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);H(mr,"RemoteStore shutting down."),i.W_.add(5),await fi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bc.provider={build:()=>new Bc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="FirestoreClient";class iR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Dg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(Hn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(Hn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),H(Hn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oR(t);H(Hn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bd(e.remoteStore,s)),t._onlineComponents=e}async function oR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Hn,"Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new Oo)}}else H(Hn,"Using default OfflineComponentProvider"),await tc(t,new rR(void 0));return t._offlineComponents}async function Lm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Hn,"Using user provided OnlineComponentProvider"),await zd(t,t._uninitializedComponentsProvider._online)):(H(Hn,"Using default OnlineComponentProvider"),await zd(t,new Bc))),t._onlineComponents}function aR(t){return Lm(t).then(e=>e.syncEngine)}async function cR(t){const e=await Lm(t),n=e.eventManager;return n.onListen=H0.bind(null,e.syncEngine),n.onUnlisten=W0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=K0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=G0.bind(null,e.syncEngine),n}function lR(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new sR({next:I=>{f.su(),a.enqueueAndForget(()=>M0(i,g)),I.fromCache&&l.source==="server"?h.reject(new Y(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(I)},error:I=>h.reject(I)}),g=new U0(c,f,{includeMetadataChanges:!0,Ta:!0});return x0(i,g)}(await cR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e,n){if(!n)throw new Y(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uR(t,e,n,r){if(e===!0&&r===!0)throw new Y(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gd(t){if(!X.isDocumentKey(t))throw new Y(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(X.isDocumentKey(t))throw new Y(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hl(t);throw new Y(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="firestore.googleapis.com",Jd=!0;class Yd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bm,this.ssl=Jd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_m;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LS)throw new Y(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ha{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fb;switch(r.type){case"firstParty":return new _b(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wd.get(n);r&&(H("ComponentProvider","Removing Datastore"),Wd.delete(n),r.terminate())}(this),Promise.resolve()}}function hR(t,e,n,r={}){var s;const i=(t=ni(t,ha))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==Bm&&i.host!==c&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Fn(l,a)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Xe.MOCK_USER;else{h=cE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Xe(g)}t._authCredentials=new pb(new kg(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new da(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Ln extends da{constructor(e,n,r){super(e,n,Gg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new X(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function Xd(t,e,...n){if(t=ht(t),Um("collection","path",e),t instanceof ha){const r=Re.fromString(e,...n);return Qd(r),new Ln(t,null,r)}{if(!(t instanceof Dt||t instanceof Ln))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Qd(r),new Ln(t.firestore,null,r)}}function jm(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Dg.newId()),Um("doc","path",e),t instanceof ha){const r=Re.fromString(e,...n);return Gd(r),new Dt(t,null,new X(r))}{if(!(t instanceof Dt||t instanceof Ln))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Gd(r),new Dt(t.firestore,t instanceof Ln?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="AsyncQueue";class ef{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tm(this,"async_queue_retry"),this.bu=()=>{const r=ec();r&&H(Zd,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Mn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ss(e))throw e;H(Zd,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Ul.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class fa extends ha{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ef,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ef(e),this._firestoreClient=void 0,await e}}}function dR(t,e){const n=typeof t=="object"?t:il(),r=typeof t=="string"?t:wo,s=vr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oE("firestore");i&&hR(s,...i)}return s}function $m(t){if(t._terminated)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fR(t),t._firestoreClient}function fR(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new Db(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(ze.fromBase64String(e))}catch(n){throw new Y(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^__.*__$/;class gR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new hi(e,this.data,n,this.fieldTransforms)}}function Hm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Gl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Gl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Vo(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Hm(this.Lu)&&pR.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class mR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ca(e)}ju(e,n,r,s=!1){return new Gl({Lu:e,methodName:n,zu:r,path:Ke.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _R(t){const e=t._freezeSettings(),n=ca(t._databaseId);return new mR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yR(t,e,n,r,s,i={}){const a=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Gm("Data must be an object, but it was:",a,r);const c=zm(r,a);let l,h;if(i.merge)l=new Pt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const I=vR(e,g,n);if(!a.contains(I))throw new Y(V.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);TR(f,I)||f.push(I)}l=new Pt(f),h=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=a.fieldTransforms;return new gR(new It(c),l,h)}function Km(t,e){if(Wm(t=ht(t)))return Gm("Unsupported field value:",e,t),zm(t,e);if(t instanceof qm)return function(r,s){if(!Hm(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Km(c,s.Uu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Po(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Po(s.serializer,i)}}if(r instanceof zl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:um(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wl)return function(a,c){return{mapValue:{fields:{[Ug]:{stringValue:Bg},[Ao]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return Sl(c.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Hl(r)}`)}(t,e)}function zm(t,e){const n={};return Vg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(t,(r,s)=>{const i=Km(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof zl||t instanceof Zr||t instanceof Dt||t instanceof qm||t instanceof Wl)}function Gm(t,e,n){if(!Wm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Hl(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function vR(t,e,n){if((e=ht(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return Qm(t,e);throw Vo("Field path arguments must be of type string or ",t,!1,void 0,n)}const ER=new RegExp("[~\\*/\\[\\]]");function Qm(t,e,n){if(e.search(ER)>=0)throw Vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw Vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Y(V.INVALID_ARGUMENT,c+t+l)}function TR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IR extends Jm{data(){return super.data()}}function Ym(t,e){return typeof e=="string"?Qm(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AR{convertValue(e,n="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Tr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ao].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ke(a.doubleValue));return new Wl(i)}convertGeoPoint(e){return new zl(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ta(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Ee(mm(r));const s=new Xs(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SR extends Jm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new to(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class to extends SR{data(e={}){return super.data(e)}}class RR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new to(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new to(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ji(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new to(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ji(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:CR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class PR extends AR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function kR(t){t=ni(t,da);const e=ni(t.firestore,fa),n=$m(e),r=new PR(e);return wR(t._query),lR(n,t._query).then(s=>new RR(e,r,t,s))}function DR(t){return Xm(ni(t.firestore,fa),[new Rl(t._key,Kt.none())])}function OR(t,e){const n=ni(t.firestore,fa),r=jm(t),s=bR(t.converter,e);return Xm(n,[yR(_R(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function Xm(t,e){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>Q0(await aR(r),s,i)),i.promise}($m(t),e)}(function(e,n=!0){(function(s){ns=s})(es),Qt(new Ot("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new fa(new gb(r.getProvider("auth-internal")),new yb(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),At(od,ad,e),At(od,ad,"esm2017")})();const VR={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},Ql=yp(VR);lb(Ql);const tf=Hw(Ql),nc=dR(Ql),Jl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},NR={class:"auth-container"},xR={type:"submit"},MR={__name:"AuthScreen",emits:["authenticated"],setup(t,{emit:e}){const n=e,r=xa(""),s=xa(""),i=xa(!0),a=async()=>{try{i.value?(await DI(tf,r.value,s.value),n("authenticated")):(await kI(tf,r.value,s.value),alert("Account created!"))}catch(c){alert(c.message)}};return(c,l)=>(Ct(),rn("div",NR,[z("h2",null,qe(i.value?"Login":"Sign Up"),1),z("form",{onSubmit:zv(a,["prevent"])},[oo(z("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>r.value=h),type:"email",placeholder:"Email",required:""},null,512),[[gc,r.value]]),oo(z("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>s.value=h),type:"password",placeholder:"Password",required:""},null,512),[[gc,s.value]]),z("button",xR,qe(i.value?"Login":"Sign Up"),1)],32),z("p",{onClick:l[2]||(l[2]=h=>i.value=!i.value)},qe(i.value?"Need an account? Sign Up":"Already have an account? Login"),1)]))}},LR=Jl(MR,[["__scopeId","data-v-94345881"]]),FR={name:"MainScreen",data(){return{pitchType:"FB",pitchResult:"",isSidebarMinimized:!1,successRates:{FB:"--",CB:"--",CH:"--",SL:"--"},battingPercentage:"--",sluggingPercentage:"--",expectedSuccess:"--",previousScenario:"",count:"--",savedScenarios:[],balls:0,strikes:0,sequence:[],previousCount:null,isNewAtBat:!1,countHistory:[]}},methods:{toggleSidebar(){this.isSidebarMinimized=!this.isSidebarMinimized},async handlePitchAndPredict(){const t=this.pitchResult.trim().toLowerCase();if(!["strike","ball","hit","out","foul"].includes(t)){alert("Invalid result. Please enter: Strike, Ball, Hit, Out, Foul"),this.pitchResult="";return}t.charAt(0).toUpperCase()+t.slice(1),this.isNewAtBat&&(this.resetAtBat(),this.isNewAtBat=!1),this.storePreviousCount(),this.sequence.push(this.pitchType),this.updateSequenceDisplay(),t==="strike"?(this.strikes++,this.updateCountDisplay(this.strikes>=3?"strikeout":null),this.isNewAtBat=this.strikes>=3):t==="foul"?(this.strikes<2&&this.strikes++,this.updateCountDisplay()):t==="ball"?(this.balls++,this.updateCountDisplay(this.balls>=4?"walk":null),this.isNewAtBat=this.balls>=4):["hit","out"].includes(t)&&(this.updateCountDisplay(),this.isNewAtBat=!0),this.pitchResult="",this.updatePrediction()},updateCountDisplay(t=null){t==="strikeout"?this.previousScenario="Result: K":t==="walk"?this.previousScenario="Result: BB":this.previousScenario=`Count: ${this.balls}-${this.strikes}`},updateSequenceDisplay(){this.sequenceDisplay=this.sequence.join(" - ")},resetAtBat(){this.balls=0,this.strikes=0,this.sequence=[],this.isNewAtBat=!0,this.previousScenario="",this.updatePrediction()},async updatePrediction(){try{const e=await(await fetch("https://term-project-script-junkies-firebase.onrender.com/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({balls:this.balls,strikes:this.strikes,prev_pitches:this.sequence})})).json();this.successRates={FB:e.FB??"--",CB:e.CB??"--",CH:e.CH??"--",SL:e.SL??"--"},console.log("Updated prediction:",e)}catch(t){console.error("Prediction fetch failed:",t),alert("Failed to reach prediction API.")}},storePreviousCount(){this.countHistory.push({balls:this.balls,strikes:this.strikes})},undoLastPitch(){if(this.sequence.length===0||this.countHistory.length===0){alert("No pitch to undo!");return}this.sequence.pop();const t=this.countHistory.pop();this.balls=t.balls,this.strikes=t.strikes,this.updateSequenceDisplay(),this.updateCountDisplay(),this.updatePrediction()},async addScenario(){const t={count:`${this.balls}-${this.strikes}`,sequence:this.sequence.join("-")};try{await OR(Xd(nc,"scenarios"),t),this.fetchScenarios()}catch(e){console.error("Error adding scenario:",e)}},async fetchScenarios(){try{const t=await kR(Xd(nc,"scenarios"));this.savedScenarios=t.docs.map(e=>({id:e.id,...e.data()})),console.log("Fetched scenarios:",this.savedScenarios)}catch(t){console.error("Error fetching scenarios:",t)}},async deleteScenario(t){if(confirm("Are you sure you want to delete this scenario?"))try{await DR(jm(nc,"scenarios",t)),this.fetchScenarios()}catch(e){console.error("Error deleting scenario:",e)}},loadScenario(t){const[e,n]=t.count.split("-").map(Number);this.balls=e,this.strikes=n,this.sequence=Array.isArray(t.sequence)?t.sequence:t.sequence.split("-"),this.previousScenario=`Count: ${t.count}, Sequence: ${this.sequence.join(" - ")}`,this.updatePrediction()}},computed:{highestSuccessKey(){let t="",e=-1;for(const[n,r]of Object.entries(this.successRates)){const s=parseFloat(r);!isNaN(s)&&s>e&&(e=s,t=n)}return t},lowestSuccessKey(){let t="",e=101;for(const[n,r]of Object.entries(this.successRates)){const s=parseFloat(r);!isNaN(s)&&s<e&&(e=s,t=n)}return t}},mounted(){this.updatePrediction(),this.fetchScenarios()}},UR={class:"input-group"},BR={class:"input-group"},jR={class:"content"},$R={class:"count"},qR={key:0},HR={key:1},KR={class:"sequence"},zR={class:"stat-box-container"},WR={class:"stat-box"},GR={class:"stat-box"},QR={class:"stat-box"},JR={class:"success-rates-container"},YR={class:"previous-scenarios-wrapper"},XR={key:0,class:"no-scenarios-box"},ZR={key:1,class:"scenario-list"},eC=["onClick"],tC=["onClick"];function nC(t,e,n,r,s,i){return Ct(),rn("div",{class:on(["container",{minimized:s.isSidebarMinimized}])},[z("div",{class:on(["sidebar",{minimized:s.isSidebarMinimized}]),id:"sidebar"},[z("button",{onClick:e[0]||(e[0]=(...a)=>i.toggleSidebar&&i.toggleSidebar(...a)),class:"toggle-icon"},"«"),e[10]||(e[10]=z("h2",null,"Pitch Input",-1)),z("div",UR,[e[8]||(e[8]=z("label",{for:"pitch-type"},"Pitch Type:",-1)),oo(z("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.pitchType=a),id:"pitch-type"},e[7]||(e[7]=[z("option",{value:"FB"},"Fastball (FB)",-1),z("option",{value:"CB"},"Curveball (CB)",-1),z("option",{value:"CH"},"Changeup (CH)",-1),z("option",{value:"SL"},"Slider (SL)",-1)]),512),[[qv,s.pitchType]])]),z("div",BR,[e[9]||(e[9]=z("label",{for:"pitch-result"},"Result of Pitch:",-1)),oo(z("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.pitchResult=a),type:"text",id:"pitch-result",placeholder:"Enter result (e.g., Strike, Ball, Hit, Out, Foul)"},null,512),[[gc,s.pitchResult]])]),z("button",{onClick:e[3]||(e[3]=(...a)=>i.handlePitchAndPredict&&i.handlePitchAndPredict(...a))},"Pitch"),z("button",{onClick:e[4]||(e[4]=(...a)=>i.undoLastPitch&&i.undoLastPitch(...a))},"Undo Last Pitch"),z("button",{onClick:e[5]||(e[5]=(...a)=>i.resetAtBat&&i.resetAtBat(...a))},"Reset At Bat"),z("button",{onClick:e[6]||(e[6]=(...a)=>i.addScenario&&i.addScenario(...a))},"Save Current Scenario")],2),z("div",jR,[e[22]||(e[22]=z("h1",null,"Batter Success Rates",-1)),z("div",$R,[s.previousScenario?(Ct(),rn("span",qR,qe(s.previousScenario),1)):(Ct(),rn("span",HR,"Count: "+qe(s.balls)+"-"+qe(s.strikes),1))]),z("div",KR,"Sequence: "+qe(s.sequence.join(" - ")),1),z("div",zR,[z("div",WR,[e[11]||(e[11]=z("h3",null,"Batting %",-1)),z("p",null,qe(s.battingPercentage)+"%",1)]),z("div",GR,[e[12]||(e[12]=z("h3",null,"Slugging %",-1)),z("p",null,qe(s.sluggingPercentage)+"%",1)]),z("div",QR,[e[13]||(e[13]=z("h3",null,"Expected Success %",-1)),z("p",null,qe(s.expectedSuccess)+"%",1)])]),z("div",JR,[z("div",{class:on(["success-box",{highlight:i.highestSuccessKey==="FB",lowlight:i.lowestSuccessKey==="FB"}])},[e[14]||(e[14]=z("h4",null,"Fastball Success",-1)),z("p",null,qe(s.successRates.FB)+"%",1)],2),z("div",{class:on(["success-box",{highlight:i.highestSuccessKey==="CB",lowlight:i.lowestSuccessKey==="CB"}])},[e[15]||(e[15]=z("h4",null,"Curveball Success",-1)),z("p",null,qe(s.successRates.CB)+"%",1)],2),z("div",{class:on(["success-box",{highlight:i.highestSuccessKey==="CH",lowlight:i.lowestSuccessKey==="CH"}])},[e[16]||(e[16]=z("h4",null,"Changeup Success",-1)),z("p",null,qe(s.successRates.CH)+"%",1)],2),z("div",{class:on(["success-box",{highlight:i.highestSuccessKey==="SL",lowlight:i.lowestSuccessKey==="SL"}])},[e[17]||(e[17]=z("h4",null,"Slider Success",-1)),z("p",null,qe(s.successRates.SL)+"%",1)],2)]),e[23]||(e[23]=z("h2",null,"Previous Scenarios",-1)),z("div",YR,[s.savedScenarios.length===0?(Ct(),rn("div",XR,e[18]||(e[18]=[z("p",null,"No previous scenarios to display.",-1)]))):(Ct(),rn("div",ZR,[(Ct(!0),rn(Ut,null,Oy(s.savedScenarios,a=>(Ct(),rn("div",{key:a.id,class:"scenario-card"},[e[21]||(e[21]=z("h3",null,"Scenario",-1)),z("p",null,[e[19]||(e[19]=z("strong",null,"Count:",-1)),dc(" "+qe(a.count),1)]),z("p",null,[e[20]||(e[20]=z("strong",null,"Sequence:",-1)),dc(" "+qe(a.sequence),1)]),z("button",{onClick:c=>i.loadScenario(a)},"Load",8,eC),z("button",{onClick:c=>i.deleteScenario(a.id)},"Delete",8,tC)]))),128))]))])])],2)}const rC=Jl(FR,[["render",nC]]),sC={components:{AuthScreen:LR,MainScreen:rC},data(){return{isAuthenticated:!1}}},iC={class:"app-container"};function oC(t,e,n,r,s,i){const a=Wu("AuthScreen"),c=Wu("MainScreen");return Ct(),rn("div",iC,[s.isAuthenticated?(Ct(),sh(c,{key:1})):(Ct(),sh(a,{key:0,onAuthenticated:e[0]||(e[0]=l=>s.isAuthenticated=!0)}))])}const aC=Jl(sC,[["render",oC],["__scopeId","data-v-65553591"]]);Qv(aC).mount("#app");

import{bg as Ft,d as Ut,p as Q,af as tt,r as et,b as st,o as nt,c as rt,i as at,w as Bt,a2 as Ht,a as S,x as Zt,V as G,g as Xt,a1 as Kt,Z as Jt,T as Qt,_ as te,__tla as ee}from"./index-0f589822.js";import{_ as se}from"./_plugin-vue_export-helper-1b428a4d.js";let ot,ne=Promise.all([(()=>{try{return ee}catch{}})()]).then(async()=>{const N=(r,t)=>r.push.apply(r,t),E=r=>r.sort((t,e)=>t.i-e.i||t.j-e.j),V=r=>{const t={};let e=1;return r.forEach(s=>{t[s]=e,e+=1}),t},it={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},F=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,lt=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,ct=/^[A-Z\xbf-\xdf]+$/,U=/^[^a-z\xdf-\xff]+$/,ht=/^[a-z\xdf-\xff]+$/,ut=/^[^A-Z\xbf-\xdf]+$/,dt=/[a-z\xdf-\xff]/,gt=/[A-Z\xbf-\xdf]/,pt=/[^A-Za-z\xbf-\xdf]/gi,ft=/^\d+$/,$=new Date().getFullYear(),mt={recentYear:/19\d\d|200\d|201\d|202\d/g};class bt{match({password:t}){const e=[...this.getMatchesWithoutSeparator(t),...this.getMatchesWithSeparator(t)],s=this.filterNoise(e);return E(s)}getMatchesWithSeparator(t){const e=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(t.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=t.length);a+=1){const o=t.slice(n,+a+1||9e9),i=s.exec(o);if(i!=null){const l=this.mapIntegersToDayMonthYear([parseInt(i[1],10),parseInt(i[3],10),parseInt(i[4],10)]);l!=null&&e.push({pattern:"date",token:o,i:n,j:a,separator:i[2],year:l.year,month:l.month,day:l.day})}}return e}getMatchesWithoutSeparator(t){const e=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-$);for(let a=0;a<=Math.abs(t.length-4);a+=1)for(let o=a+3;o<=a+7&&!(o>=t.length);o+=1){const i=t.slice(a,+o+1||9e9);if(s.exec(i)){const l=[],h=i.length;if(it[h].forEach(([c,d])=>{const p=this.mapIntegersToDayMonthYear([parseInt(i.slice(0,c),10),parseInt(i.slice(c,d),10),parseInt(i.slice(d),10)]);p!=null&&l.push(p)}),l.length>0){let c=l[0],d=n(l[0]);l.slice(1).forEach(p=>{const b=n(p);b<d&&(c=p,d=b)}),e.push({pattern:"date",token:i,i:a,j:o,separator:"",year:c.year,month:c.month,day:c.day})}}}return e}filterNoise(t){return t.filter(e=>{let s=!1;const n=t.length;for(let a=0;a<n;a+=1){const o=t[a];if(e!==o&&o.i<=e.i&&o.j>=e.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(t){if(t[1]>31||t[1]<=0)return null;let e=0,s=0,n=0;for(let a=0,o=t.length;a<o;a+=1){const i=t[a];if(i>99&&i<1e3||i>2050)return null;i>31&&(s+=1),i>12&&(e+=1),i<=0&&(n+=1)}return s>=2||e===3||n>=2?null:this.getDayMonth(t)}getDayMonth(t){const e=[[t[2],t.slice(0,2)],[t[0],t.slice(1,3)]],s=e.length;for(let n=0;n<s;n+=1){const[a,o]=e[n];if(1e3<=a&&a<=2050){const i=this.mapIntegersToDayMonth(o);return i!=null?{year:a,month:i.month,day:i.day}:null}}for(let n=0;n<s;n+=1){const[a,o]=e[n],i=this.mapIntegersToDayMonth(o);if(i!=null)return{year:this.twoToFourDigitYear(a),month:i.month,day:i.day}}return null}mapIntegersToDayMonth(t){const e=[t,t.slice().reverse()];for(let s=0;s<e.length;s+=1){const n=e[s],a=n[0],o=n[1];if(a>=1&&a<=31&&o>=1&&o<=12)return{day:a,month:o}}return null}twoToFourDigitYear(t){return t>99?t:t>50?t+1900:t+2e3}}const A=new Uint32Array(65536),yt=(r,t)=>{if(r.length<t.length){const e=t;t=r,r=e}return t.length===0?r.length:r.length<=32?((e,s)=>{const n=e.length,a=s.length,o=1<<n-1;let i=-1,l=0,h=n,c=n;for(;c--;)A[e.charCodeAt(c)]|=1<<c;for(c=0;c<a;c++){let d=A[s.charCodeAt(c)];const p=d|l;d|=(d&i)+i^i,l|=~(d|i),i&=d,l&o&&h++,i&o&&h--,l=l<<1|1,i=i<<1|~(p|l),l&=p}for(c=n;c--;)A[e.charCodeAt(c)]=0;return h})(r,t):((e,s)=>{const n=s.length,a=e.length,o=[],i=[],l=Math.ceil(n/32),h=Math.ceil(a/32);for(let g=0;g<l;g++)i[g]=-1,o[g]=0;let c=0;for(;c<h-1;c++){let g=0,y=-1;const x=32*c,w=Math.min(32,a)+x;for(let f=x;f<w;f++)A[e.charCodeAt(f)]|=1<<f;for(let f=0;f<n;f++){const v=A[s.charCodeAt(f)],T=i[f/32|0]>>>f&1,m=o[f/32|0]>>>f&1,I=v|g,L=((v|m)&y)+y^y|v|m;let D=g|~(L|y),z=y&L;D>>>31^T&&(i[f/32|0]^=1<<f),z>>>31^m&&(o[f/32|0]^=1<<f),D=D<<1|T,z=z<<1|m,y=z|~(I|D),g=D&I}for(let f=x;f<w;f++)A[e.charCodeAt(f)]=0}let d=0,p=-1;const b=32*c,M=Math.min(32,a-b)+b;for(let g=b;g<M;g++)A[e.charCodeAt(g)]|=1<<g;let k=a;for(let g=0;g<n;g++){const y=A[s.charCodeAt(g)],x=i[g/32|0]>>>g&1,w=o[g/32|0]>>>g&1,f=y|d,v=((y|w)&p)+p^p|y|w;let T=d|~(v|p),m=p&v;k+=T>>>a-1&1,k-=m>>>a-1&1,T>>>31^x&&(i[g/32|0]^=1<<g),m>>>31^w&&(o[g/32|0]^=1<<g),T=T<<1|x,m=m<<1|w,p=m|~(f|T),d=T&f}for(let g=b;g<M;g++)A[e.charCodeAt(g)]=0;return k})(r,t)},kt=(r,t,e)=>{let s=0;const n=Object.keys(t).find(a=>{const o=((h,c,d)=>{const p=h.length<=c.length,b=h.length<=d;return p||b?Math.ceil(h.length/4):d})(r,a,e);if(Math.abs(r.length-a.length)>o)return!1;const i=yt(r,a),l=i<=o;return l&&(s=i),l});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var B={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},_={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class R{constructor(t=[]){this.parents=t,this.children=new Map}addSub(t,...e){const s=t.charAt(0);this.children.has(s)||this.children.set(s,new R([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<t.length;a+=1){const o=t.charAt(a);n.hasChild(o)||n.addChild(o),n=n.getChild(o)}return n.subs=(n.subs||[]).concat(e),this}getChild(t){return this.children.get(t)}isTerminal(){return!!this.subs}addChild(t){this.hasChild(t)||this.children.set(t,new R([...this.parents,t]))}hasChild(t){return this.children.has(t)}}var H=(r,t)=>(Object.entries(r).forEach(([e,s])=>{s.forEach(n=>{t.addSub(n,e)})}),t);const u=new class{constructor(){this.matchers={},this.l33tTable=B,this.trieNodeRoot=H(B,new R),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=_,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=512,this.maxLength=256,this.setRankedDictionaries()}setOptions(r={}){r.l33tTable&&(this.l33tTable=r.l33tTable,this.trieNodeRoot=H(r.l33tTable,new R)),r.dictionary&&(this.dictionary=r.dictionary,this.setRankedDictionaries()),r.translations&&this.setTranslations(r.translations),r.graphs&&(this.graphs=r.graphs),r.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=r.useLevenshteinDistance),r.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=r.levenshteinThreshold),r.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=r.l33tMaxSubstitutions),r.maxLength!==void 0&&(this.maxLength=r.maxLength)}setTranslations(r){if(!this.checkCustomTranslations(r))throw new Error("Invalid translations object fallback to keys");this.translations=r}checkCustomTranslations(r){let t=!0;return Object.keys(_).forEach(e=>{if(e in r){const s=e;Object.keys(_[s]).forEach(n=>{n in r[s]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const r={},t={};Object.keys(this.dictionary).forEach(e=>{r[e]=V(this.dictionary[e]),t[e]=this.getRankedDictionariesMaxWordSize(this.dictionary[e])}),this.rankedDictionaries=r,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(r){const t=r.map(e=>typeof e!="string"?e.toString().length:e.length);return t.length===0?0:t.reduce((e,s)=>Math.max(e,s),-1/0)}buildSanitizedRankedDictionary(r){const t=[];return r.forEach(e=>{const s=typeof e;s!=="string"&&s!=="number"&&s!=="boolean"||t.push(e.toString().toLowerCase())}),V(t)}extendUserInputsDictionary(r){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...r];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(r,t){this.matchers[r]||(this.matchers[r]=t)}};class wt{constructor(t){this.defaultMatch=t}match({password:t}){const e=t.split("").reverse().join("");return this.defaultMatch({password:e}).map(s=>({...s,token:s.token.split("").reverse().join(""),reversed:!0,i:t.length-1-s.j,j:t.length-1-s.i}))}}class xt{constructor(t){this.defaultMatch=t}isAlreadyIncluded(t,e){return t.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===e[n]))}match({password:t}){const e=[],s=(n=t,a=u.l33tMaxSubstitutions,o=u.trieNodeRoot,(({substr:h,buffer:c,limit:d,trieRoot:p})=>{const b=[],M=(k,g,y,x,w)=>{if(b.length>=d)return;if(y===h.length)return void(k===g&&b.push({password:c.join(""),changes:w}));const f=[];let v=p;for(let m=y;m<h.length;m+=1){const I=h.charAt(m);if(v=v.getChild(I),!v)break;f.push(v)}let T=!1;for(let m=y+f.length-1;m>=y;m-=1)if(v=f[m-y],v.isTerminal()){T=!0;const I=v.subs;for(const L of I){c.push(L);const D=w.concat({i:x,letter:L,substitution:v.parents.join("")});if(M(k,g,m+1,x+L.length,D),c.pop(),b.length>=d)return}}if(!k||!T){const m=h.charAt(y);c.push(m),M(k,g&&!T,y+1,x+1,w),c.pop()}};return M(!0,!0,0,0,[]),M(!1,!0,0,0,[]),b})({substr:n,buffer:[],limit:a,trieRoot:o}));var n,a,o;let i=!1,l=!0;return s.forEach(h=>{if(i)return;const c=this.defaultMatch({password:h.password,useLevenshtein:l});l=!1,c.forEach(d=>{i||(i=d.i===0&&d.j===t.length-1);const p=((g,y,x)=>{const w=g.changes.filter(m=>m.i>=y&&m.i<=x),f=w.reduce((m,I)=>m-I.letter.length+I.substitution.length,x),v=[],T=[];return w.forEach(m=>{v.findIndex(I=>I.letter===m.letter&&I.substitution===m.substitution)<0&&(v.push({letter:m.letter,substitution:m.substitution}),T.push(`${m.substitution} -> ${m.letter}`))}),{j:f,subs:v,subDisplay:T.join(", ")}})(h,d.i,d.j),b=t.slice(d.i,+p.j+1||9e9),M={...d,l33t:!0,token:b,...p},k=this.isAlreadyIncluded(e,M);b.toLowerCase()===d.matchedWord||k||e.push(M)})}),e.filter(h=>h.token.length>1)}}class Mt{constructor(){this.l33t=new xt(this.defaultMatch),this.reverse=new wt(this.defaultMatch)}match({password:t}){const e=[...this.defaultMatch({password:t}),...this.reverse.match({password:t}),...this.l33t.match({password:t})];return E(e)}defaultMatch({password:t,useLevenshtein:e=!0}){const s=[],n=t.length,a=t.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(o=>{const i=u.rankedDictionaries[o],l=u.rankedDictionariesMaxWordSize[o],h=Math.min(l,n);for(let c=0;c<n;c+=1){const d=Math.min(c+h,n);for(let p=c;p<d;p+=1){const b=a.slice(c,+p+1||9e9),M=b in i;let k={};const g=c===0&&p===n-1;u.useLevenshteinDistance&&g&&!M&&e&&(k=kt(b,i,u.levenshteinThreshold));const y=Object.keys(k).length!==0;if(M||y){const x=i[y?k.levenshteinDistanceEntry:b];s.push({pattern:"dictionary",i:c,j:p,token:t.slice(c,+p+1||9e9),matchedWord:b,rank:x,dictionaryName:o,reversed:!1,l33t:!1,...k})}}}}),s}}class vt{match({password:t,regexes:e=mt}){const s=[];return Object.keys(e).forEach(n=>{const a=e[n];a.lastIndex=0;const o=a.exec(t);if(o){const i=o[0];s.push({pattern:"regex",token:i,i:o.index,j:o.index+o[0].length-1,regexName:n,regexMatch:o})}}),E(s)}}var C={nCk(r,t){let e=r;if(t>e)return 0;if(t===0)return 1;let s=1;for(let n=1;n<=t;n+=1)s*=e,s/=n,e-=1;return s},log10:r=>r===0?0:Math.log(r)/Math.log(10),log2:r=>Math.log(r)/Math.log(2),factorial(r){let t=1;for(let e=2;e<=r;e+=1)t*=e;return t}},Tt=r=>{const t=r.replace(pt,"");if(t.match(ut)||t.toLowerCase()===t)return 1;const e=[F,lt,U],s=e.length;for(let n=0;n<s;n+=1){const a=e[n];if(t.match(a))return 2}return(n=>{const a=n.split(""),o=a.filter(c=>c.match(gt)).length,i=a.filter(c=>c.match(dt)).length;let l=0;const h=Math.min(o,i);for(let c=1;c<=h;c+=1)l+=C.nCk(o+i,c);return l})(t)};const St=({token:r,graph:t,turns:e})=>{const s=Object.keys(u.graphs[t]).length,n=(i=>{let l=0;return Object.keys(i).forEach(h=>{const c=i[h];l+=c.filter(d=>!!d).length}),l/=Object.entries(i).length,l})(u.graphs[t]);let a=0;const o=r.length;for(let i=2;i<=o;i+=1){const l=Math.min(e,i-1);for(let h=1;h<=l;h+=1)a+=C.nCk(i-1,h-1)*s*n**h}return a},Z={bruteforce:({token:r})=>{let t,e=10**r.length;return e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE),t=r.length===1?11:51,Math.max(e,t)},date:({year:r,separator:t})=>{let e=365*Math.max(Math.abs(r-$),20);return t&&(e*=4),e},dictionary:({rank:r,reversed:t,l33t:e,subs:s,token:n,dictionaryName:a})=>{const o=r,i=Tt(n),l=(({l33t:c,subs:d,token:p})=>{if(!c)return 1;let b=1;return d.forEach(M=>{const{subbedCount:k,unsubbedCount:g}=(({sub:y,token:x})=>{const w=x.toLowerCase().split("");return{subbedCount:w.filter(f=>f===y.substitution).length,unsubbedCount:w.filter(f=>f===y.letter).length}})({sub:M,token:p});if(k===0||g===0)b*=2;else{const y=Math.min(g,k);let x=0;for(let w=1;w<=y;w+=1)x+=C.nCk(g+k,w);b*=x}}),b})({l33t:e,subs:s,token:n});let h;return h=a==="diceware"?3888:o*i*l*(t?2:1),{baseGuesses:o,uppercaseVariations:i,l33tVariations:l,calculation:h}},regex:({regexName:r,regexMatch:t,token:e})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return r in s?s[r]**e.length:r==="recentYear"?Math.max(Math.abs(parseInt(t[0],10)-$),20):0},repeat:({baseGuesses:r,repeatCount:t})=>r*t,sequence:({token:r,ascending:t})=>{const e=r.charAt(0);let s=0;return s=["a","A","z","Z","0","1","9"].includes(e)?4:e.match(/\d/)?10:26,t||(s*=2),s*r.length},spatial:({graph:r,token:t,shiftedCount:e,turns:s})=>{let n=St({token:t,graph:r,turns:s});if(e){const a=t.length-e;if(e===0||a===0)n*=2;else{let o=0;for(let i=1;i<=Math.min(e,a);i+=1)o+=C.nCk(e+a,i);n*=o}}return Math.round(n)}};var jt=(r,t)=>{const e={};if("guesses"in r&&r.guesses!=null)return r;const s=((i,l)=>{let h=1;return i.token.length<l.length&&(h=i.token.length===1?10:50),h})(r,t),n=((i,l)=>Z[i]?Z[i](l):u.matchers[i]&&"scoring"in u.matchers[i]?u.matchers[i].scoring(l):0)(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,e.baseGuesses=n.baseGuesses,e.uppercaseVariations=n.uppercaseVariations,e.l33tVariations=n.l33tVariations);const o=Math.max(a,s);return{...r,...e,guesses:o,guessesLog10:C.log10(o)}};const j={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,t){const e=[];for(let s=0;s<r;s+=1){let n=[];t==="object"&&(n={}),e.push(n)}return e},makeBruteforceMatch(r,t){return{pattern:"bruteforce",token:this.password.slice(r,+t+1||9e9),i:r,j:t}},update(r,t){const e=r.j,s=jt(r,this.password);let n=s.guesses;t>1&&(n*=this.optimal.pi[s.i-1][t-1]);let a=C.factorial(t)*n;this.excludeAdditive||(a+=1e4**(t-1));let o=!1;Object.keys(this.optimal.g[e]).forEach(i=>{const l=this.optimal.g[e][i];parseInt(i,10)<=t&&l<=a&&(o=!0)}),o||(this.optimal.g[e][t]=a,this.optimal.m[e][t]=s,this.optimal.pi[e][t]=n)},bruteforceUpdate(r){let t=this.makeBruteforceMatch(0,r);this.update(t,1);for(let e=1;e<=r;e+=1){t=this.makeBruteforceMatch(e,r);const s=this.optimal.m[e-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(t,parseInt(n,10)+1)})}},unwind(r){const t=[];let e=r-1,s=0,n=1/0;const a=this.optimal.g[e];for(a&&Object.keys(a).forEach(o=>{const i=a[o];i<n&&(s=parseInt(o,10),n=i)});e>=0;){const o=this.optimal.m[e][s];t.unshift(o),e=o.i-1,s-=1}return t}};var q={mostGuessableMatchSequence(r,t,e=!1){j.password=r,j.excludeAdditive=e;const s=r.length;let n=j.fillArray(s,"array");t.forEach(l=>{n[l.j].push(l)}),n=n.map(l=>l.sort((h,c)=>h.i-c.i)),j.optimal={m:j.fillArray(s,"object"),pi:j.fillArray(s,"object"),g:j.fillArray(s,"object")};for(let l=0;l<s;l+=1)n[l].forEach(h=>{h.i>0?Object.keys(j.optimal.m[h.i-1]).forEach(c=>{j.update(h,parseInt(c,10)+1)}):j.update(h,1)}),j.bruteforceUpdate(l);const a=j.unwind(s),o=a.length,i=this.getGuesses(r,o);return{password:r,guesses:i,guessesLog10:C.log10(i),sequence:a}},getGuesses(r,t){const e=r.length;let s=0;return s=r.length===0?1:j.optimal.g[e-1][t],s}};function O({isLazy:r=!1,isAnchored:t=!1,flags:e=""}){return new RegExp(`${t?"^":""}(.+${r?"?":""})\\1+${t?"$":""}`,e)}class It{match({password:t,omniMatch:e}){const s=[];let n=0;for(;n<t.length;){const a=this.getGreedyMatch(t,n),o=this.getLazyMatch(t,n);if(a==null)break;const{match:i,baseToken:l}=this.setMatchToken(a,o);if(i){const h=i.index+i[0].length-1,c=this.getBaseGuesses(l,e);s.push(this.normalizeMatch(l,h,i,c)),n=h+1}}return s.some(a=>a instanceof Promise)?Promise.all(s):s}normalizeMatch(t,e,s,n){const a={pattern:"repeat",i:s.index,j:e,token:s[0],baseToken:t,baseGuesses:0,repeatCount:s[0].length/t.length};return n instanceof Promise?n.then(o=>({...a,baseGuesses:o})):{...a,baseGuesses:n}}getGreedyMatch(t,e){const s=O({isLazy:!1,flags:"g"});return s.lastIndex=e,s.exec(t)}getLazyMatch(t,e){const s=O({isLazy:!0,flags:"g"});return s.lastIndex=e,s.exec(t)}setMatchToken(t,e){const s=O({isLazy:!0,isAnchored:!0});let n,a="";if(e&&t[0].length>e[0].length){n=t;const o=s.exec(n[0]);o&&(a=o[1])}else n=e,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(t,e){const s=e.match(t);return s instanceof Promise?s.then(n=>q.mostGuessableMatchSequence(t,n).guesses):q.mostGuessableMatchSequence(t,s).guesses}}class At{constructor(){this.MAX_DELTA=5}match({password:t}){const e=[];if(t.length===1)return[];let s=0,n=null;const a=t.length;for(let o=1;o<a;o+=1){const i=t.charCodeAt(o)-t.charCodeAt(o-1);if(n==null&&(n=i),i!==n){const l=o-1;this.update({i:s,j:l,delta:n,password:t,result:e}),s=l,n=i}}return this.update({i:s,j:a-1,delta:n,password:t,result:e}),e}update({i:t,j:e,delta:s,password:n,result:a}){if(e-t>1||Math.abs(s)===1){const o=Math.abs(s);if(o>0&&o<=this.MAX_DELTA){const i=n.slice(t,+e+1||9e9),{sequenceName:l,sequenceSpace:h}=this.getSequence(i);return a.push({pattern:"sequence",i:t,j:e,token:n.slice(t,+e+1||9e9),sequenceName:l,sequenceSpace:h,ascending:s>0})}}return null}getSequence(t){let e="unicode",s=26;return ht.test(t)?(e="lower",s=26):ct.test(t)?(e="upper",s=26):ft.test(t)&&(e="digits",s=10),{sequenceName:e,sequenceSpace:s}}}class Ct{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:t}){const e=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];N(e,this.helper(t,n,s))}),E(e)}checkIfShifted(t,e,s){return!t.includes("keypad")&&this.SHIFTED_RX.test(e.charAt(s))?1:0}helper(t,e,s){let n;const a=[];let o=0;const i=t.length;for(;o<i-1;){let l=o+1,h=0,c=0;for(n=this.checkIfShifted(s,t,o);;){const d=e[t.charAt(l-1)]||[];let p=!1,b=-1,M=-1;if(l<i){const k=t.charAt(l),g=d.length;for(let y=0;y<g;y+=1){const x=d[y];if(M+=1,x){const w=x.indexOf(k);if(w!==-1){p=!0,b=M,w===1&&(n+=1),h!==b&&(c+=1,h=b);break}}}}if(!p){l-o>2&&a.push({pattern:"spatial",i:o,j:l-1,token:t.slice(o,l),graph:s,turns:c,shiftedCount:n}),o=l;break}l+=1}}return a}}const Dt=new RegExp(`[${[" ",",",";",":","|","/","\\","_",".","-"].join("")}]`);class P{static getMostUsedSeparatorChar(t){const e=[...t.split("").filter(n=>Dt.test(n)).reduce((n,a)=>{const o=n.get(a);return o?n.set(a,o+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[o,i])=>i-a);if(!e.length)return;const s=e[0];return s[1]<2?void 0:s[0]}static getSeparatorRegex(t){return new RegExp(`([^${t}
])(${t})(?!${t})`,"g")}match({password:t}){const e=[];if(t.length===0)return e;const s=P.getMostUsedSeparatorChar(t);if(s===void 0)return e;const n=P.getSeparatorRegex(s);for(const a of t.matchAll(n)){if(a.index===void 0)continue;const o=a.index+1;e.push({pattern:"separator",token:s,i:o,j:o})}return e}}class Et{constructor(){this.matchers={date:bt,dictionary:Mt,regex:vt,repeat:It,sequence:At,spatial:Ct,separator:P}}match(t){const e=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(n=>{if(!this.matchers[n]&&!u.matchers[n])return;const a=new(this.matchers[n]?this.matchers[n]:u.matchers[n].Matching)().match({password:t,omniMatch:this});a instanceof Promise?(a.then(o=>{N(e,o)}),s.push(a)):N(e,a)}),s.length>0?new Promise((n,a)=>{Promise.all(s).then(()=>{n(E(e))}).catch(o=>{a(o)})}):E(e)}}const Lt=2678400,Rt=32140800,W={second:1,minute:60,hour:3600,day:86400,month:Lt,year:Rt,century:321408e4};class Pt{translate(t,e){let s=t;e!==void 0&&e!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${e}`)}estimateAttackTimes(t){const e={onlineThrottling100PerHour:t/.027777777777777776,onlineNoThrottling10PerSecond:t/10,offlineSlowHashing1e4PerSecond:t/1e4,offlineFastHashing1e10PerSecond:t/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(e).forEach(n=>{const a=e[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:e,crackTimesDisplay:s,score:this.guessesToScore(t)}}guessesToScore(t){return t<1005?0:t<1000005?1:t<100000005?2:t<10000000005?3:4}displayTime(t){let e,s="centuries";const n=Object.keys(W),a=n.findIndex(o=>t<W[o]);return a>-1&&(s=n[a-1],a!==0?e=Math.round(t/W[s]):s="ltSecond"),this.translate(s,e)}}var zt=()=>null,Nt=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const $t=(r,t)=>{let e=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?e=((a,o)=>{let i=null;return!o||a.l33t||a.reversed?a.guessesLog10<=4&&(i=u.translations.warnings.similarToCommon):i=a.rank<=10?u.translations.warnings.topTen:a.rank<=100?u.translations.warnings.topHundred:u.translations.warnings.common,i})(r,t):s.includes("wikipedia")?e=((a,o)=>{let i=null;return o&&(i=u.translations.warnings.wordByItself),i})(0,t):n?e=((a,o)=>o?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames)(0,t):s==="userInputs"&&(e=u.translations.warnings.userInputs),e};var _t=(r,t)=>{const e=$t(r,t),s=[],n=r.token;return n.match(F)?s.push(u.translations.suggestions.capitalization):n.match(U)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(u.translations.suggestions.reverseWords),r.l33t&&s.push(u.translations.suggestions.l33t),{warning:e,suggestions:s}},qt=r=>r.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Ot=r=>{let t=u.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(t=u.translations.warnings.simpleRepeat),{warning:t,suggestions:[u.translations.suggestions.repeated]}},Wt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),Yt=r=>{let t=u.translations.warnings.keyPattern;return r.turns===1&&(t=u.translations.warnings.straightRow),{warning:t,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},Gt=()=>null;const X={warning:null,suggestions:[]};class Vt{constructor(){this.matchers={bruteforce:zt,date:Nt,dictionary:_t,regex:qt,repeat:Ot,sequence:Wt,spatial:Yt,separator:Gt},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(t,e){if(e.length===0)return this.defaultFeedback;if(t>2)return X;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(e);let a=this.getMatchFeedback(n,e.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(t){let e=t[0];return t.slice(1).forEach(s=>{s.token.length>e.token.length&&(e=s)}),e}getMatchFeedback(t,e){return this.matchers[t.pattern]?this.matchers[t.pattern](t,e):u.matchers[t.pattern]&&"feedback"in u.matchers[t.pattern]?u.matchers[t.pattern].feedback(t,e):X}}let Y,K,J;Y=()=>new Date().getTime(),K=(r,t)=>{const e=Y(),s=((n,a)=>(a&&u.extendUserInputsDictionary(a),new Et().match(n)))(r,t);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return((n,a,o)=>{const i=new Vt,l=new Pt,h=q.mostGuessableMatchSequence(a,n),c=Y()-o,d=l.estimateAttackTimes(h.guesses);return{calcTime:c,...h,...d,feedback:i.getFeedback(d.score,h.sequence)}})(s,r,e)},J=["data-score"],ot=se(Ut({name:"InputPassword",__name:"InputPassword",props:{strength:Q.bool.def(!1),modelValue:Q.string.def("")},emits:["update:modelValue"],setup(r,{emit:t}){const e=r,{getPrefixCls:s}=Jt(),n=s("input-password");tt(()=>e.modelValue,d=>{d!==S(l)&&(l.value=d)});const{configGlobal:a}={configGlobal:Ft("configGlobal",{})},o=et("password"),i=()=>{o.value=S(o)==="text"?"password":"text"},l=et(e.modelValue);tt(()=>l.value,d=>{t("update:modelValue",d)});const h=st(()=>{const d=S(l),p=K(S(l));return d?p.score:-1}),c=st(()=>S(o)==="password"?"ep:hide":"ep:view");return(d,p)=>{var k;const b=te,M=Qt;return nt(),rt("div",{class:G([S(n),`${S(n)}--${(k=S(a))==null?void 0:k.size}`])},[at(M,Ht({modelValue:S(l),"onUpdate:modelValue":p[0]||(p[0]=g=>Zt(l)?l.value=g:null),type:S(o)},d.$attrs),{suffix:Bt(()=>[at(b,{icon:S(c),class:"el-input__icon cursor-pointer",onClick:i},null,8,["icon"])]),_:1},16,["modelValue","type"]),r.strength?(nt(),rt("div",{key:0,class:G([`${S(n)}__bar`,"relative h-6px mt-10px mb-6px mr-auto ml-auto"])},[Xt("div",{class:G(`${S(n)}__bar--fill`),"data-score":S(h)},null,10,J)],2)):Kt("",!0)],2)}}}),[["__scopeId","data-v-4d3bb740"]])});export{ot as I,ne as __tla};
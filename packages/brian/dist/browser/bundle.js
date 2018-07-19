var freesewing_patterns_brian=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e,n){"use strict";var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n(2),s=n(15),a=n(23),u=r(n(7));e.Freesewing=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.version="1.0.1",this.pattern=i.Pattern,this.point=o.Point,this.path=s.Path,this.snippet=a.Snippet,this.utils=u}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list={}}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"add",value:function(t,e){return void 0===this.list[t]&&(this.list[t]=[]),this.list[t].push(e),this}},{key:"get",value:function(t){return this.list[t].join(" ")}},{key:"render",value:function(){var t="";for(var e in this.list){this.list;t+=" ".concat(e,'="').concat(this.list[e].join(" "),'"')}return t}}]),t}();e.Attributes=i},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),o=n(1),s=function(){function t(e,n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.attributes=new o.Attributes,this.x=i.round(e),this.y=i.round(n),this}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"dist",value:function(t){var e=this.x-t.x,n=this.y-t.y;return i.round(Math.sqrt(Math.pow(e,2)+Math.pow(n,2)))}},{key:"slope",value:function(t){return(t.y-this.y)/(t.x-this.x)}},{key:"dx",value:function(t){return t.x-this.x}},{key:"dy",value:function(t){return t.y-this.y}},{key:"angle",value:function(t){for(var e=Math.atan2(-1*this.dy(t),this.dx(t));e<0;)e+=2*Math.PI;return i.rad2deg(e)}},{key:"rotate",value:function(e,n){var r=this.dist(n),o=this.angle(n);return new t(n.x+r*Math.cos(i.deg2rad(o+e))*-1,n.y+r*Math.sin(i.deg2rad(o+e)))}},{key:"copy",value:function(){return new t(this.x,this.y)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"flipX",value:function(e){return new t(e.x+this.dx(e),e.y)}},{key:"flipY",value:function(e){return new t(e.x,e.y+this.dy(e))}},{key:"shift",value:function(t,e){var n=this.copy();return n.x+=e,n.rotate(t,this)}},{key:"shiftTowards",value:function(t,e){return this.shift(this.angle(t),e)}},{key:"shiftFractionTowards",value:function(t,e){return this.shiftTowards(t,this.dist(t)*e)}},{key:"shiftOutwards",value:function(t,e){return this.shiftTowards(t,this.dist(t)+e)}}]),t}();e.Point=s},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),o=n(20),s=n(25),a=n(23),u=n(15),l=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.values={},this.settings={mode:"draft",units:"metric"},!e)throw"Could not create pattern: You need to provide a pattern config.";if(void 0===e.parts||!e.parts||e.parts.length<1)throw"Could not create pattern: You should define at least one part in your pattern config";this.config=e,this.path=u.Path,this.snippet=a.Snippet,this.parts={},this.svg=new o.Svg(this),this.hooks=new s.Hooks;var n=!0,r=!1,l=void 0;try{for(var c,h=e.parts[Symbol.iterator]();!(n=(c=h.next()).done);n=!0){var f=c.value;this.parts[f]=new i.Part(f)}}catch(t){r=!0,l=t}finally{try{n||null==h.return||h.return()}finally{if(r)throw l}}if(this.options={},void 0!==e.options&&e.options.length>0){var p=!0,d=!1,v=void 0;try{for(var y,m=e.options[Symbol.iterator]();!(p=(y=m.next()).done);p=!0){var b=y.value;"percentage"===b.type?this.options[b.id]=b.val/100:this.options[b.id]=b.val}}catch(t){d=!0,v=t}finally{try{p||null==m.return||m.return()}finally{if(d)throw v}}}return this.context={parts:this.parts,options:this.options,values:this.values,config:this.config,settings:this.settings},this}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"draft",value:function(){throw Error("You have to implement the draft() method in your Pattern instance.")}},{key:"render",value:function(){return this.hooks.attach("preRenderSvg",this.svg),this.hooks.attach("postRenderSvg",this.svg),this.svg.render(this)}},{key:"on",value:function(t,e){void 0===this.hooks._hooks[t]&&(this.hooks._hooks[t]=[]),this.hooks._hooks[t].push(e)}},{key:"loadPlugin",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,o=this.hooks.all[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value;"function"==typeof t[s]&&this.on(s,t[s])}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}}}]),t}();e.Pattern=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(8)),i=o(n(5));function o(t){return t&&t.__esModule?t:{default:t}}var s={draft:function(t,e){var n=r.default.utils.shorthand(t,e),o=(n.measurements,n.options,n.points),s=n.paths;n.snippets,n.macro,n.final,n.paperless;console.log("shorthand",r.default.utils.shorthand(t,e)),i.default.draft(t,e),s.seam=(new r.default.path).move(o.cbNeck).line(o.cbHips).line(o.hips).line(o.armhole).curve(o.armholeCp1,o.armholeCp2,o.armholeHollow).curve(o.armholeHollowCp1,o.armholeHollowCp2,o.armholePitch).curve(o.armholePitchCp1,o.armholePitchCp2,o.shoulder).line(o.neck).curve(o.neckCp1,o.cbNeck,o.cbNeck).close()}};e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(8));var i={draft:function(t,e){var n=r.default.utils.shorthand(t,e),i=n.measurements,o=n.options,s=n.points;n.paths,n.snippets;s.cbNeck=new r.default.point(0,o.backNeckCutout),s.cbShoulder=new r.default.point(0,(i.shoulderSlope-o.shoulderSlopeReduction)/2),s.cbArmhole=new r.default.point(0,s.cbShoulder.y+(i.bicepsCircumference+o.bicepsEase)*o.armholeDepthFactor),s.cbWaist=new r.default.point(0,i.centerBackNeckToWaist+o.backNeckCutout),s.cbHips=new r.default.point(0,s.cbWaist.y+i.naturalWaistToHip),s.armhole=new r.default.point(i.chestCircumference/4+o.chestEase/4,s.cbArmhole.y),s.waist=new r.default.point(s.armhole.x,s.cbWaist.y),s.hips=new r.default.point(s.armhole.x,s.cbHips.y),s.neck=new r.default.point(i.neckCircumference/o.collarFactor,0),s.shoulder=new r.default.point(i.shoulderToShoulder/2+o.shoulderEase/2,s.cbShoulder.y),s.armholePitch=new r.default.point(i.shoulderToShoulder*o.acrossBackFactor/2,s.shoulder.y+s.shoulder.dy(s.armhole)/2),s._tmp1=new r.default.point(s.armholePitch.x,s.armhole.y),s._tmp2=s._tmp1.shift(45,10),s._tmp3=r.default.utils.beamsCross(s._tmp1,s._tmp2,s.armhole,s.armholePitch),s.armholeHollow=s._tmp1.shiftFractionTowards(s._tmp3,.5),s.armholeCp1=s.armhole.shift(180,s._tmp1.dx(s.armhole)/4),s.armholeCp2=s.armholeHollow.shift(-45,s.armholeHollow.dy(s.armhole)/2),s.armholeHollowCp1=s.armholeHollow.shift(135,s.armholePitch.dx(s.armholeHollow)),s.armholeHollowCp2=s.armholePitch.shift(-90,s.armholePitch.dy(s.armholeHollow)/2),s.armholePitchCp1=s.armholePitch.shift(90,s.shoulder.dy(s.armholePitch)/2),s.armholePitchCp2=s.shoulder.shiftTowards(s.neck,s.shoulder.dy(s.armholePitch)/5).rotate(90,s.shoulder),s._tmp4=s.neck.shiftTowards(s.shoulder,10).rotate(-90,s.neck),s.neckCp1=r.default.utils.beamCrossesY(s.neck,s._tmp4,s.cbNeck.y),s.neckCp2=s.cbNeck.shift(0,s.cbNeck.dx(s.neck)/2)}};e.default=i},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);function i(t){return Math.round(100*t)/100}function o(t,e,n,i){var o=t.slope(e),s=n.slope(i);if(o===s)return!1;if(t.x===e.x)return new r.Point(t.x,s*t.x+(n.y-s*n.x));if(n.x===i.x)return new r.Point(n.x,o*n.x+(t.y-o*t.x));if(t.x>e.x){var a=t.copy();t=e.copy(),e=a}if(n.x>i.x){var u=n.copy();n=i.copy(),i=u}var l=t.y-o*t.x,c=(n.y-s*n.x-l)/(o-s),h=o*c+l;return new r.Point(c,h)}e.round=i,e.rad2deg=function(t){return 57.29577951308232*t},e.deg2rad=function(t){return t/57.29577951308232},e.beamsCross=o,e.linesCross=function(t,e,n,r){var s=o(t,e,n,r);if(s){var a=t.dist(e),u=n.dist(r),l=t.dist(s)+s.dist(e),c=n.dist(s)+s.dist(r);if(i(a)==i(l)&&i(u)==i(c))return s}return!1},e.beamCrossesY=function(t,e,n){return t.y!==e.y&&o(t,e,new r.Point(-10,n),new r.Point(10,n))},e.shorthand=function(t,e){var n="draft"===e.settings.mode,r=!0===e.settings.paperless;return{measurements:e.settings.measurements||{},options:e.options||{},values:e.values||{},points:t.points||{},paths:t.paths||{},snippets:t.snippets||{},final:n,paperless:r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=new(n(0).Freesewing);e.default=r},,function(t,e,n){"use strict";t.exports={parts:["back","front","_sleeve"],measurements:["bicepsCircumference","centerBackNeckToWaist","chestCircumference","naturalWaistToHip","neckCircumference","shoulderSlope","shoulderToShoulder","hipsCircumference","shoulderToWrist","wristCircumference"],options:[{id:"backNeckCutout",val:20,type:"constant"},{id:"bicepsEase",val:50,type:"constant"},{id:"collarEase",val:15,type:"constant"},{id:"frontArmholeExtra",val:5,type:"constant"},{id:"shoulderSlopeReduction",val:0,type:"constant"},{id:"sleevecapEase",val:5,type:"constant"},{id:"collarFactor",val:4.8,type:"constant"},{id:"bicepsEase",val:50,min:30,max:80},{id:"chestEase",val:30,min:-40,max:160},{id:"shoulderEase",val:0,min:-20,max:60},{id:"cuffEase",val:45,min:0,max:100},{id:"lengthBonus",val:0,min:-40,max:120},{id:"sleeveLengthBonus",val:0,min:-40,max:80},{id:"acrossBackFactor",val:96,type:"percentage",min:93,max:99},{id:"armholeDepthFactor",val:50,type:"percentage",min:35,max:65},{id:"sleevecapHeightFactor",val:55,type:"percentage",min:35,max:75}]}},,,,,function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.render=!0,this.ops=[],this.attributes=new i.Attributes}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"move",value:function(t){return this.ops.push({type:"move",to:t}),this}},{key:"line",value:function(t){return this.ops.push({type:"line",to:t}),this}},{key:"curve",value:function(t,e,n){return this.ops.push({type:"curve",cp1:t,cp2:e,to:n}),this}},{key:"close",value:function(){return this.ops.push({type:"close"}),this}},{key:"asPathstring",value:function(){var t="",e=!0,n=!1,r=void 0;try{for(var i,o=this.ops[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value;switch(s.type){case"move":t+="M ".concat(s.to.x,",").concat(s.to.y);break;case"line":t+=" L ".concat(s.to.x,",").concat(s.to.y);break;case"curve":t+=" C ".concat(s.cp1.x,",").concat(s.cp1.y," ").concat(s.cp2.x,",").concat(s.cp2.y," ").concat(s.to.x,",").concat(s.to.y);break;case"close":t+=" z";break;default:throw"".concat(s.type," is not a valid path command")}}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}return t}}]),t}();e.Path=o},,,,,function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),s=i(n(24)),a=function(){function t(e){for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.body="",this.style="",this.script="",this.header="",this.footer="",this.defs="",this.attributes=new o.Attributes,this.tabs=0,this.freeId=1,this.svg="",this.openGroups=[],this.pattern=e,this.prefix='<?xml version="1.0" encoding="UTF-8" standalone="no"?>',this.attributes.add("xmlns","http://www.w3.org/2000/svg"),this.attributes.add("xmlns:svg","http://www.w3.org/2000/svg"),this.attributes.add("xmlns:xlink","http://www.w3.org/1999/xlink"),this.hooks=["preRenderSvg","postRenderSvg"],s.default)this[n]=s.default[n];for(var r in this.hooks)this.hook(r,this[r]);return this}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"preRenderSvg",value:function(){}},{key:"postRenderSvg",value:function(){}},{key:"render",value:function(t){for(var e in this.preRenderSvg(),this.svg=this.prefix,this.svg+=this.renderComments(this.header),this.svg+=this.renderSvgTag(t),this.svg+=this.renderStyle(),this.svg+=this.renderScript(),this.svg+=this.renderDefs(),this.svg+=this.openGroup("draftContainer"),t.parts){var n=t.parts[e];n.render&&(this.svg+=this.openGroup(n.id,n.attributes),this.svg+=this.renderPart(n),this.svg+=this.closeGroup())}return this.svg+=this.closeGroup(),this.svg+=this.nl()+"</svg>",this.svg+=this.renderComments(this.footer),this.postRenderSvg(),this.svg}},{key:"renderSvgTag",value:function(t){var e="<svg";return this.indent(),e+=this.nl()+this.attributes.render(),this.outdent(),e+=this.nl()+">"+this.nl()}},{key:"renderStyle",value:function(){var t='<style type="text/css"> <![CDATA[ ';return this.indent(),t+=this.nl()+this.style,this.outdent(),t+=this.nl()+"]]>"+this.nl()+"</style>"+this.nl()}},{key:"renderScript",value:function(){var t='<script type="text/javascript"> <![CDATA[';return this.indent(),t+=this.nl()+this.script,this.outdent(),t+=this.nl()+"]]>"+this.nl()+"<\/script>"+this.nl()}},{key:"renderDefs",value:function(){var t='<defs id="defs">';return this.indent(),t+=this.nl()+this.defs,this.outdent(),t+=this.nl()+"</defs>"+this.nl()}},{key:"renderComments",value:function(t){return this.nl()+this.nl()+"\x3c!--"+this.nl()+t+this.nl()+"--\x3e"}},{key:"renderPart",value:function(t){var e="";for(var n in t.paths){var r=t.paths[n];r.render&&(e+=this.renderPath(r))}for(var i in t.snippets){var o=t.snippets[i];e+=this.renderSnippet(o)}return e}},{key:"renderPath",value:function(t){return t.attributes.add("d",t.asPathstring()),"".concat(this.nl(),"<path ").concat(t.attributes.render()," />")}},{key:"renderSnippet",value:function(t){var e=this.nl();return e+='<use x="'.concat(t.anchor.x,'" y="').concat(t.anchor.y,'" '),e+='xlink:href="#'.concat(t.def,'" ').concat(t.attributes.render(),">"),t.description&&(e+="<title>".concat(t.description,"</title>")),e+="</use>"}},{key:"openGroup",value:function(t,e){var n=this.nl()+this.nl();return n+="\x3c!-- Start of group #".concat(t," --\x3e"),n+=this.nl(),n+='<g id="'.concat(t,'">'),this.indent(),this.openGroups.push(t),n}},{key:"closeGroup",value:function(){return this.outdent(),"".concat(this.nl(),"</g>").concat(this.nl(),"\x3c!-- end of group #").concat(this.openGroups.pop()," --\x3e")}},{key:"nl",value:function(){return"\n"+this.tab()}},{key:"tab",value:function(){for(var t="",e=0;e<this.tabs;e++)t+="  ";return t}},{key:"indent",value:function(){this.tabs+=1}},{key:"outdent",value:function(){this.tabs-=1}},{key:"getUid",value:function(){return this.freeId+=1,""+this.freeId}}]),t}();e.Svg=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(1);e.Part=function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.points={},this.paths={},this.snippets={},this.attributes=new i.Attributes,this.id=e,this.render="_"!==e.substr(0,1),this.points.origin=new r.Point(0,0),this}},function(t,e,n){"use strict";var r=s(n(8)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(10)),o=s(n(4));function s(t){return t&&t.__esModule?t:{default:t}}var a=new r.default.pattern(i);a.draft=function(){return o.default.draft(a.parts.back,a.context),a},t.exports=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.Snippet=function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.attributes=new r.Attributes,this.anchor=e,this.def=n,this.description=i,this}},function(t,e){function n(t,e){return function n(){if(!n.hookCalled)return n.hookCalled=!0,t.apply(e,arguments)}}t.exports={hook:function(t,e,r){if(1!==arguments.length||"object"!=typeof t){var i=this.prototype||this,o=i._pres=i._pres||{},s=i._posts=i._posts||{};return o[t]=o[t]||[],s[t]=s[t]||[],i[t]=function(){var o,s=this,a=arguments[arguments.length-1],u=this._pres[t],l=this._posts[t],c=u.length,h=-1,f=i[t].numAsyncPres,p=function(){if(arguments[0]instanceof Error)return y(arguments[0]);var e,r,l=Array.prototype.slice.call(arguments);if(!l.length||null==arguments[0]&&"function"==typeof a||(o=l),++h<c){if((e=u[h]).isAsync&&e.length<2)throw new Error("Your pre must have next and done arguments -- e.g., function (next, done, ...)");if(e.length<1)throw new Error("Your pre must have a next argument -- e.g., function (next, ...)");return r=(e.isAsync?[n(p),n(v)]:[n(p)]).concat(o),e.apply(s,r)}return i[t].numAsyncPres?void 0:d.apply(s,o)},d=function(){var t,r,i,u,f=Array.prototype.slice.call(arguments);if(h===c)return u=function(){if(arguments[0]instanceof Error)return y(arguments[0]);var t,e,c=Array.prototype.slice.call(arguments,1);if(c.length&&(o=c),++i<r){if((t=l[i]).length<1)throw new Error("Your post must have a next argument -- e.g., function (next, ...)");return e=[n(u)].concat(o),t.apply(s,e)}return"function"==typeof a?a.apply(s,arguments):void 0},"function"==typeof a&&(f[f.length-1]=n(u)),r=l.length,i=-1,t=e.apply(s,f),r&&"function"!=typeof a?u():t};if(f)function v(t){if(t&&t instanceof Error)return y(t);--f||d.apply(s,o)}function y(t){if("function"==typeof a)return a(t);if(r)return r.call(s,t);throw t}return p.apply(this,arguments)},i[t].numAsyncPres=0,this}for(var a in t)this.hook(a,t[a])},pre:function(t,e,n,r){"boolean"!=typeof arguments[1]&&(r=n,n=e,e=!1);var i=this.prototype||this,o=i._pres=i._pres||{};return this._lazySetupHooks(i,t,r),(n.isAsync=e)&&i[t].numAsyncPres++,(o[t]=o[t]||[]).push(n),this},post:function(t,e,n){2===arguments.length&&(n=e,e=!1);var r=this.prototype||this,i=r._posts=r._posts||{};return this._lazySetupHooks(r,t),(i[t]=i[t]||[]).push(n),this},removePre:function(t,e){var n=this.prototype||this,r=n._pres||n._pres||{};return r[t]?(1===arguments.length?r[t].length=0:r[t]=r[t].filter(function(t){return t!==e}),this):this},_lazySetupHooks:function(t,e,n){void 0===t[e].numAsyncPres&&this.hook(e,t[e],n)}}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._hooks={},this.all=["preRenderSvg","postRenderSvg"]}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"list",value:function(t){return void 0!==this._hooks[t]&&this._hooks[t]}},{key:"attachPre",value:function(t,e){this._attach("pre",t,e)}},{key:"attachPost",value:function(t,e){this._attach("post",t,e)}},{key:"attach",value:function(t,e){if(void 0!==this._hooks[t]){var n=!0,r=!1,i=void 0;try{for(var o,s=this._hooks[t][Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var a=o.value;e.pre(t,a)}}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}}}]),t}();e.Hooks=i}]);
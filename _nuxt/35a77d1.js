(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{467:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return d}));var o=r(469),n=r(1),l=Object(n.h)("v-card__actions"),c=Object(n.h)("v-card__subtitle"),h=Object(n.h)("v-card__text"),d=Object(n.h)("v-card__title");o.a},469:function(t,e,r){"use strict";r(11),r(6),r(14),r(17),r(7),r(18);var o=r(2),n=(r(37),r(293),r(472),r(470)),l=r(471),c=r(120),h=r(8);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(h.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},470:function(t,e,r){"use strict";var o=r(153);e.a=o.a},471:function(t,e,r){"use strict";r(37);var o=r(0),n=(r(11),r(6),r(14),r(17),r(7),r(18),r(2)),l=(r(292),r(474),r(200)),c=r(33),h=r(121),d=r(201),v=r(40),f=r(1),m=r(8);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _=Object(m.a)(c.a,Object(h.b)(["absolute","fixed","top","bottom"]),d.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(f.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.d:l.f},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=o.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(_,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},472:function(t,e,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("e23b7040",content,!0,{sourceMap:!1})},473:function(t,e,r){var o=r(19)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},474:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("cf87dc84",content,!0,{sourceMap:!1})},475:function(t,e,r){var o=r(19)(!1);o.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=o},516:function(t,e,r){var content=r(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2265fd50",content,!0,{sourceMap:!1})},608:function(t,e,r){"use strict";r(516)},609:function(t,e,r){var o=r(19)(!1);o.push([t.i,"h2[data-v-2b24cf2a]{margin-bottom:.5cm;margin-top:.5cm}.theme--dark h2[data-v-2b24cf2a]{color:#fff!important}.theme--light h2[data-v-2b24cf2a]{color:rgba(0,0,0,.87)!important}",""]),t.exports=o},658:function(t,e,r){"use strict";r.r(e);var o={auth:!1},n=(r(608),r(66)),l=r(76),c=r.n(l),h=r(469),d=r(467),v=r(625),f=r(670),m=r(626),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center",cols:"12"}},[r("v-card",{attrs:{"max-width":"25cm"}},[r("v-card-title",{staticClass:"headline"},[r("span",{staticClass:"text-center fill-width"},[t._v("Privacy Policy")])]),t._v(" "),r("v-card-text",[r("p",{staticClass:"text-center"},[t._v('\n            This privacy policy will explain how your data is handled on this\n            website. Sissy Enterprises (referred to as "we" or "us"\n            henceforth) is not a real company but a community of similar\n            minded individuals. This document is based on an official GDPR\n            compliant privacy policy template.\n          ')]),t._v(" "),r("h2",[t._v("Topics:")]),t._v(" "),r("ul",{staticClass:"text-left"},[r("li",[r("a",{on:{click:function(e){return t.$router.push("#what-data-do-we-collect")}}},[t._v("What data do we collect?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-do-we-collect-your-data")}}},[t._v("How do we collect your data?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-will-we-use-your-data")}}},[t._v("How will we use your data?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-do-we-store-your-data")}}},[t._v("How do we store your data?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#marketing")}}},[t._v("Marketing")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#what-are-your-data-protection-rights")}}},[t._v("What are your data protection rights?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#what-are-cookies")}}},[t._v("What are cookies?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-do-we-use-cookies")}}},[t._v("How do we use cookies?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#what-types-of-cookies-do-we-use")}}},[t._v("What types of cookies do we use?")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-to-manage-your-cookies")}}},[t._v("How to manage your cookies")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#privacy-policies-of-other-websites")}}},[t._v("Privacy policies of other websites")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#changes-to-our-privacy-policy")}}},[t._v("Changes to our privacy policy")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-to-contact-us")}}},[t._v("How to contact us")])]),t._v(" "),r("li",[r("a",{on:{click:function(e){return t.$router.push("#how-to-contact-the-appropriate-authorities")}}},[t._v("How to contact the appropriate authorities")])])]),t._v(" "),r("h2",{attrs:{id:"what-data-do-we-collect"}},[t._v("What data do we collect?")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("We collect the following data:")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            This project is radically serverless in its approach, no data is\n            sent our own servers in any way shape or form, nor do we share it\n            with third parties. All data is kept either offline or in cloud\n            storage owned by the user, and is only shared if the user gives\n            explicit permission to do so.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            As such, we don't actually collect data on our users, the\n            application has access to data on the user and builds up an\n            increasing understanding of the user, but we as a community have\n            no access to that data unless the user shares it willingly.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            It's important to note that since our application relies heavily\n            on the use of a users Google Account we cannot know nor guarantee\n            exactly what data Google collects on the user while on the site,\n            and the user should make sure they understand the privacy policy\n            related to their Google Account before using this application.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-do-we-collect-your-data"}},[t._v("\n            How do we collect your data?\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The user may provide data to us willingly. We do not collect it in\n            any sort of automated fashion.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-will-we-use-your-data"}},[t._v("How will we use your data?")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            We don't use your data. The application does.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-do-we-store-your-data"}},[t._v("How do we store your data?")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Data is only stored either in the users browser or in cloud\n            storage owned by the user. None is stored or collected by us.\n          ")]),t._v(" "),r("h2",{attrs:{id:"marketing"}},[t._v("Marketing")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Marketing is an opt-in feature of the application. If given\n            permission it will periodically send emails to the user.\n          ")]),t._v(" "),r("p",[t._v("\n            Users can always opt out from marketing by entering the marketing\n            section in their account settings.\n          ")]),t._v(" "),r("h2",{attrs:{id:"what-are-your-data-protection-rights"}},[t._v("\n            What are your data protection rights?\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("As a user you have the following rights:")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The right to access – You have the right to request for copies of\n            your personal data. As we centrally have none we can't actually\n            give you any, but you have the right to request it.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The right to rectification – You have the right to request that we\n            correct any information you believe is inaccurate. You also have\n            the right to request us to complete the information you believe is\n            incomplete. We can't always do it however since we have no central\n            storage of your information, so most likely you're looking for\n            something in the account settings that we can't change for you, or\n            you should contact e.g. Google to change your account, but you\n            have the right to make a request anyway and we'll try to help you.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The right to erasure – You have the right to request that us to\n            erase your personal data, under certain conditions. However, since\n            we don't have any central storage of your data, the only place you\n            need to go to delete your data is in the data deletion section of\n            your account settings.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The right to restrict processing – You have the right to request\n            that we restrict the processing of your personal data, under\n            certain conditions. Not much we can do here either but you have\n            the right to request it.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The right to object to processing – You have the right to object\n            to us processing your personal data, under certain conditions. We\n            don't actually do any central processing, so this would mean you\n            have a problem with the app, which would means you're not happy\n            with the application, so our best recommendation if you object to\n            it is to leave us feedback so we can improve it, or stop using it.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The right to data portability – You have the right to request that\n            we transfer the data that we have collected to another\n            organization, or directly to you, under certain conditions. Again,\n            we don't have any centrally, but you can access all your data\n            collected by the application in the data management section of\n            your account settings.\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            If you make a request, we have one month to respond to you. If you\n            would like to exercise any of these rights, please contact us on\n            Github.\n          ")]),t._v(" "),r("h2",{attrs:{id:"what-are-cookies"}},[t._v("What are cookies?")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Cookies are text files placed on your computer to collect standard\n            Internet log information and visitor behavior information. When\n            you visit our websites, we may collect information from you\n            automatically through cookies or similar technology\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            For further information, visit allaboutcookies.org.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-do-we-use-cookies"}},[t._v("How do we use cookies?")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Our Company uses cookies in a range of ways to improve your\n            experience on our website, including:\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("Keeping you signed in")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("Understanding how you use our website")]),t._v(" "),r("h2",{attrs:{id:"what-types-of-cookies-do-we-use"}},[t._v("\n            What types of cookies do we use?\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            There are a number of different types of cookies, however, our\n            website uses:\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Functionality – We uses these cookies so that we recognize you on\n            our website and remember your previously selected preferences.\n            These could include what language you prefer and location you are\n            in.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-to-manage-your-cookies"}},[t._v("How to manage your cookies")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            You can set your browser not to accept cookies, and the above\n            website tells you how to remove cookies from your browser.\n            However, in a few cases, some of our website features may not\n            function as a result.\n          ")]),t._v(" "),r("h2",{attrs:{id:"privacy-policies-of-other-websites"}},[t._v("\n            Privacy policies of other websites\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            The Our Company website contains links to other websites. Our\n            privacy policy applies only to our website, so if you click on a\n            link to another website, you should read their privacy policy.\n          ")]),t._v(" "),r("h2",{attrs:{id:"changes-to-our-privacy-policy"}},[t._v("\n            Changes to our privacy policy\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Our Company keeps its privacy policy under regular review and\n            places any updates on this web page. This privacy policy was last\n            updated on 27 December 2021.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-to-contact-us"}},[t._v("How to contact us")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            If you have any questions about our privacy policy, the data we\n            hold on you, or you would like to exercise one of your data\n            protection rights, please do not hesitate to contact us.\n          ")]),t._v(" "),r("h2",{attrs:{id:"how-to-contact-the-appropriate-authorities"}},[t._v("\n            How to contact the appropriate authorities\n          ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n            Should you wish to report a complaint or if you feel that we have\n            not addressed your concern in a satisfactory manner, you may\n            contact the Information Commissioner’s Office.\n          ")])])],1)],1)],1)],1)}),[],!1,null,"2b24cf2a",null);e.default=component.exports;c()(component,{VCard:h.a,VCardText:d.b,VCardTitle:d.c,VCol:v.a,VContainer:f.a,VRow:m.a})}}]);
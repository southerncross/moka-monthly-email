webpackJsonp([1,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(91),a=i(o),r=n(65),l=i(r);new a.default({el:"#app",template:"<App/>",components:{App:l.default}})},,,,,,,,,,function(t,e){"use strict";function n(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",n=0;n<6;n++)e+=t[Math.floor(Math.random()*t.length)];return e}Object.defineProperty(e,"__esModule",{value:!0}),e.randomId=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(68),a=i(o);e.default={name:"app",components:{Workshop:a.default}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(71),a=i(o),r=n(70),l=i(r),s=n(69),c=i(s);e.default={name:"Editor",components:{WeeklyNews:a.default,NewFeatures:l.default,Activities:c.default},props:{bannerImgUrl:String,typeToSection:Object,sectionChange:Function,articleChange:Function,appendArticle:Function,removeArticle:Function,bannerImgUrlChange:Function}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(75),a=i(o),r=n(73),l=i(r),s=n(74),c=i(s);e.default={name:"Previewer",components:{EmailHeader:a.default,EmailBody:l.default,EmailFooter:c.default},props:{bannerImgUrl:String,typeToSection:Object},data:function(){return{commonTableStyle:{borderCollapse:"collapse",borderSpacing:"0",msoTableLspace:"0",msoTableRspace:"0",fontFamily:"Helvetica Neue, Arial, Open Sans, Hiragino Sans GB, -apple-system, Lantinghei SC, Microsoft Yahei, sans-serif"},copyHintActive:!1,copyHintTimer:null,showSourceCodeModal:!1,sourceCode:""}},methods:{openSourceCodeModal:function(){this.sourceCode=this.$refs.email.outerHTML,this.showSourceCodeModal=!0},closeSourceCodeModal:function(){this.showSourceCodeModal=!1},copySourceCode:function(){var t=this,e=document.querySelector(".source-code");e.select();try{var n=document.execCommand("copy");n&&(clearTimeout(this.copyHintTimer),this.copyHintActive=!0,setTimeout(function(){t.copyHintActive=!1},3e3))}catch(t){}document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),a=i(o),r=n(24),l=i(r),s=n(66),c=i(s),d=n(67),p=i(d),u=n(10);e.default={name:"Workshop",components:{Editor:c.default,Previewer:p.default},data:function(){return{bannerImgUrl:"http://www.mokahr.com/images/home/banner.jpg",typeToSection:{weeklyNews:{title:"本周内容",articles:[{title:"干货 | HR的三支柱与「灰度」",abstract:"HR三支柱模型大约形成在上世纪90年代，分别是COE、HRBP、SSC。本文从三支柱是什么入手，介绍了三个部门的工作以及企业应该在什么时候从六模块转向三支柱，希望能给你启发。",imgUrl:"http://www.mokahr.com/images/home/banner.jpg",link:"http://www.mokahr.com",linkText:"了解更多"},{title:"经验 | 招聘——得渠道者得天下",abstract:"招聘三大难：伪需求、没渠道、难判断。外部简历获取的方式无外乎以下三类：招聘广告、主动搜索、猎头推荐。本文着重分析了这些每个渠道适应的不同职位，希望每个宝宝都能找到自己合适的渠道。",imgUrl:"http://www.mokahr.com/images/home/banner.jpg",link:"http://www.mokahr.com",linkText:"了解更多"}]},activities:{title:"Moka活动",articles:[{title:"Selecting The Right Hotel",subtitle:"时间：2017-02-23  15：23    地点：北京市朝阳区望京桥77 Enoch Branch",abstract:"招聘三大难：伪需求、没渠道、难判断。外部简历获取的方式无外乎以下三类：招聘广告、主动搜索、猎头推荐。本文着重分析了这些每个渠道适应的不同职位，希望每个宝宝都能找到自己合",link:"http://www.mokahr.com",linkText:"了解更多"},{title:"A Sound Way To Treat Hearing Loss In Children",subtitle:"时间：2017-02-23  15：23    地点：北京市朝阳区望京桥77 Enoch Branch",abstract:"招聘三大难：伪需求、没渠道、难判断。外部简历获取的方式无外乎以下三类：招聘广告、主动搜索、猎头推荐。本文着重分析了这些每个渠道适应的不同职位，希望每个宝宝都能找到自己合",link:"http://www.mokahr.com",linkText:"了解更多"}]},newFeatures:{title:"Moka产品更新",articles:[{title:"优化 | 移动端微官网全面升级",abstract:"此次更新使得移动端微官网有了PC端官网一样强大的可配置性。用户可以为主页添加四类模块，并上传不同的图片，充分展示雇主特色，打造雇主品牌。",type:"enhancement"},{title:"新增 | 用人部门移动端联系候选人",abstract:"用人部门移动端可以在面试环节下的候选人详情页里直接打电话联系候选人。省去了输入电话再拨打的麻烦。",type:"newFeature"}],bottomLeftImg:"http://www.mokahr.com/images/home/banner.jpg",bottomLeftTxt:"12 Handy Tips For Generating Leads Through Cold Calling",bottomLeftLink:"http://www.mokahr.com",bottomRightImg:"http://www.mokahr.com/images/home/banner.jpg",bottomRightTxt:"12 Handy Tips For Generating Leads Through Cold Calling",bottomRightLink:"http://www.mokahr.com"}}}},mounted:function(){this.loadTypeToSectionFromLS(),this.loadBannerFromLS()},methods:{sectionChange:function(t,e,n){var i=this.typeToSection[t];i[e]=n,console.warn("boring wtf",JSON.parse((0,l.default)(this.typeToSection))),this.saveTypeToSectionToLS()},articleChange:function(t,e,n,i){var o=this.typeToSection[t],a=o.articles.find(function(t){return t.id===e});a[n]=i,this.saveTypeToSectionToLS()},appendArticle:function(t,e){var n=this.typeToSection[t];n.articles.push((0,a.default)({},e,{id:(0,u.randomId)()})),this.saveTypeToSectionToLS()},removeArticle:function(t,e){var n=this.typeToSection[t];n.articles=n.articles.filter(function(t){return t.id!==e}),this.saveTypeToSectionToLS()},bannerImgUrlChange:function(t){this.bannerImgUrl=t,this.saveBannerToLS()},loadBannerFromLS:function(){var t=window.localStorage.getItem("moka-weekly-email__banner");try{this.bannerImgUrl=JSON.parse(t)||this.bannerImgUrl}catch(t){console.error("Failed to load data from local storage: "+t)}},saveBannerToLS:function(){window.localStorage.setItem("moka-weekly-email__banner",(0,l.default)(this.bannerImgUrl))},loadTypeToSectionFromLS:function(){var t=window.localStorage.getItem("moka-weekly-email__type-to-section");try{this.typeToSection=JSON.parse(t)||this.typeToSection}catch(t){console.error("Failed to load data from local storage: "+t)}},saveTypeToSectionToLS:function(){window.localStorage.setItem("moka-weekly-email__type-to-section",(0,l.default)(this.typeToSection))}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Activities",props:{title:String,articles:Array,appendArticle:Function,removeArticle:Function,sectionChange:Function,articleChange:Function},data:function(){return{defaultArticle:{title:"",subtitle:"",abstract:"",link:"",linkText:""}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"NewFeatures",props:{title:String,articles:Array,bottomLeftImg:String,bottomLeftTxt:String,bottomLeftLink:String,bottomRightImg:String,bottomRightTxt:String,bottomRightLink:String,appendArticle:Function,removeArticle:Function,sectionChange:Function,articleChange:Function},data:function(){return{defaultNewFeature:{type:"newFeature",title:"",abstract:""},defaultEnhancement:{type:"enhancement",title:"",abstract:""}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"WeeklyNews",props:{title:String,articles:Array,appendArticle:Function,removeArticle:Function,sectionChange:Function,articleChange:Function},data:function(){return{defaultArticle:{title:"",abstract:"",imgUrl:"",link:"",linkText:""}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Activities",props:{tableStyle:Object,title:String,articles:Array},data:function(){return{spriteStyle:{backgroundImage:"url(http://moka-public.oss-cn-beijing.aliyuncs.com/email_sprite.png)",backgroundRepeat:"no-repeat"},speakSprite:{width:"28px",height:"28px",backgroundPosition:"-28px -32px"}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(72),a=i(o),r=n(77),l=i(r),s=n(76),c=i(s);e.default={name:"EmailBody",components:{Activities:a.default,WeeklyNews:l.default,NewFeatures:c.default},props:{tableStyle:Object,bannerImgUrl:String,typeToSection:Object}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"EmailHeader",props:{tableStyle:Object}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"EmailHeader",props:{tableStyle:Object},data:function(){return{spriteStyle:{backgroundImage:"url(http://moka-public.oss-cn-beijing.aliyuncs.com/email_sprite.png)",backgroundRepeat:"no-repeat"},logoSprite:{width:"158px",height:"32px",backgroundPosition:"-0px -0px"},checkSprite:{width:"16px",height:"16px",backgroundPosition:"-84px -32px"}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"NewFeatures",props:{tableStyle:Object,title:String,articles:Array,bottomLeftImg:String,bottomLeftTxt:String,bottomLeftLink:String,bottomRightImg:String,bottomRightTxt:String,bottomRightLink:String},data:function(){return{spriteStyle:{backgroundImage:"url(http://moka-public.oss-cn-beijing.aliyuncs.com/email_sprite.png)",backgroundRepeat:"no-repeat"},rocketSprite:{width:"28px",height:"28px",overflow:"hidden",backgroundPosition:"-0px -32px"},thunderSprite:{width:"28px",height:"28px",backgroundPosition:"-56px -32px"}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"WeeklyNews",props:{tableStyle:Object,title:String,articles:Array}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var i,o;n(59),i=n(11);var a=n(84);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,o;n(61),i=n(12);var a=n(86);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-6ad68e70",t.exports=i},function(t,e,n){var i,o;n(55),i=n(13);var a=n(78);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-099cc06a",t.exports=i},function(t,e,n){var i,o;n(62),i=n(14);var a=n(88);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-747631bc",t.exports=i},function(t,e,n){var i,o;n(56),i=n(15);var a=n(80);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-0dc76a04",t.exports=i},function(t,e,n){var i,o;n(63),i=n(16);var a=n(89);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-9c5e7814",t.exports=i},function(t,e,n){var i,o;n(64),i=n(17);var a=n(90);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-b950acea",t.exports=i},function(t,e,n){var i,o;n(58),i=n(18);var a=n(83);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,o;i=n(19);var a=n(87);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,o;i=n(20);var a=n(82);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,o;i=n(21);var a=n(79);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,o;n(57),i=n(22);var a=n(81);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,o;n(60),i=n(23);var a=n(85);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"previewer"},[n("table",{ref:"email",style:{width:"100%",backgroundColor:"#f4f4f6"}},[n("tbody",[n("tr",[n("td",[n("table",{staticClass:"root-table",style:[{width:"720px",height:"100%",margin:"0 auto"},t.commonTableStyle]},[n("tbody",[n("tr",[n("td",{attrs:{align:"center"}},[n("email-header",{attrs:{tableStyle:t.commonTableStyle}})],1)]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[n("email-body",{attrs:{bannerImgUrl:t.bannerImgUrl,typeToSection:t.typeToSection,tableStyle:t.commonTableStyle}})],1)]),t._v(" "),n("tr",[n("td",{style:{padding:"32px 0"},attrs:{valign:"bottom"}},[n("email-footer",{attrs:{tableStyle:t.commonTableStyle}})],1)])])])])])])]),t._v(" "),n("button",{staticClass:"source-btn",on:{click:t.openSourceCodeModal}},[t._v("查看源代码")]),t._v(" "),n("div",{class:["source-overlay",{active:t.showSourceCodeModal}],on:{click:t.closeSourceCodeModal}},[n("div",{staticClass:"source-modal",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal-header"},[t._v("\n        邮件源代码\n        "),n("span",{staticClass:"close-btn",on:{click:t.closeSourceCodeModal}},[t._v("×")])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("textarea",{staticClass:"source-code",domProps:{value:t.sourceCode}})]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"copy-btn",on:{click:t.copySourceCode}},[t._v("复制")]),t._v(" "),n("span",{class:["copy-hint",{active:t.copyHintActive}]},[t._v("已复制！")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{style:[{width:"720px",height:"80px",padding:"20px 0"},t.tableStyle]},[n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"http://www.mokahr.com",target:"_blank"}},[n("div",{style:[t.spriteStyle,t.logoSprite]})])]),t._v(" "),n("td",{style:{textAlign:"right"}},[n("a",{style:{display:"inline-block",padding:"6px 16px",fontSize:"13px",lineHeight:1,textDecoration:"none",color:"white",backgroundColor:"#0C8CF6",border:"1px solid #087BD9",borderRadius:"28px",cursor:"pointer"},attrs:{_target:"blank",href:"http://www.mokahr.com/subscribe-email"}},[t._v("\n          申请试用\n          "),n("span",{style:[{display:"inline-block",verticalAlign:"-3px"},t.spriteStyle,t.checkSprite]})])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"section-title text-input"},[n("label",[t._v("标题")]),t._v(" "),n("input",{attrs:{placeholder:"段落标题"},domProps:{value:t.title},on:{input:function(e){t.sectionChange("activities","title",e.target.value)}}})]),t._v(" "),t._l(t.articles,function(e,i){return n("div",{key:e.id,staticClass:"panel"},[n("div",{staticClass:"order"},[t._v("\n      活动#"+t._s(i+1)+"\n      "),n("button",{staticClass:"delete-btn",on:{click:function(n){t.removeArticle("activities",e.id)}}},[t._v("删除")])]),t._v(" "),n("div",{staticClass:"article-title text-input"},[n("label",{attrs:{for:"article-title-"+e.id}},[t._v("标题")]),t._v(" "),n("input",{attrs:{id:"article-title-"+e.id,placeholder:"文章标题"},domProps:{value:e.title},on:{input:function(n){t.articleChange("activities",e.id,"title",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-title text-input"},[n("label",{attrs:{for:"article-title-"+e.id}},[t._v("副标题")]),t._v(" "),n("input",{attrs:{id:"article-title-"+e.id,placeholder:"文章副标题"},domProps:{value:e.subtitle},on:{input:function(n){t.articleChange("activities",e.id,"subtitle",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-preview-text text-input"},[n("label",{attrs:{for:"article-preview-text-"+e.id}},[t._v("简介")]),t._v(" "),n("textarea",{attrs:{id:"article-preview-text-"+e.id,placeholder:"文章简介"},domProps:{value:e.abstract},on:{input:function(n){t.articleChange("activities",e.id,"abstract",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-link text-input"},[n("label",{attrs:{for:"article-link-"+e.id}},[t._v("链接")]),t._v(" "),n("input",{attrs:{id:"article-link-"+e.id,placeholder:"文章链接"},domProps:{value:e.link},on:{input:function(n){t.articleChange("activities",e.id,"link",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-link-text text-input"},[n("label",{attrs:{for:"article-link-text-"+e.id}},[t._v("链接文字")]),t._v(" "),n("input",{attrs:{id:"article-link-text-"+e.id,placeholder:"文章链接显示文字，例如“查看更多”"},domProps:{value:e.linkText},on:{input:function(n){t.articleChange("activities",e.id,"linkText",n.target.value)}}})])])}),t._v(" "),n("div",{staticClass:"add-btn-wrapper"},[n("button",{staticClass:"add-btn",on:{click:function(e){t.appendArticle("activities",t.defaultArticle)}}},[t._v("添加活动")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{style:[{width:"100%",backgroundColor:"white"},t.tableStyle]},[n("tbody",[n("tr",[n("td",{style:{padding:"36px 48px 0 48px",fontSize:"24px",fontWeight:"bold",color:"black"},attrs:{colspan:"2"}},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("tr",[n("td",{style:{padding:"20px 48px"},attrs:{valign:"top"}},[n("table",[n("tbody",t._l(t.articles,function(e,i){return n("tr",{key:e.id},[n("td",{style:{width:"17px",borderLeft:"1px solid #F4F4F6"},attrs:{valign:"top"}},[n("div",{style:{height:"38px",borderBottom:"1px solid #F4F4F6"}})]),t._v(" "),n("td",{style:{width:"35px",paddingTop:"23px"},attrs:{valign:"top"}},[n("div",{style:[t.spriteStyle,"newFeature"===e.type?t.rocketSprite:t.thunderSprite],attrs:{src:e.imgUrl}})]),t._v(" "),n("td",{style:{padding:"14px 48px 0 0"},attrs:{valign:"top"}},[n("table",{style:t.tableStyle},[n("tbody",[n("tr",[n("td",{style:{fontSize:"24px",fontWeight:"bold",lineHeight:"40px",color:"black"}},[t._v("\n                        "+t._s(e.title)+"\n                      ")])]),t._v(" "),n("tr",[n("td",{style:{paddingBottom:"5px",fontSize:"15px",lineHeight:"20px",color:"#090A0B"}},[t._v("\n                          "+t._s(e.subtitle)+"\n                      ")])]),t._v(" "),n("tr",[n("td",{style:{paddingBottom:"5px",fontSize:"13px",lineHeight:"20px",color:"#5C6170"}},[t._v("\n                          "+t._s(e.abstract)+"\n                      ")])])])])])])}))])])]),t._v(" "),n("tr",[n("td",{style:{paddingTop:"10px",textAlign:"center"}},[n("a",{style:{display:"inline-block",padding:"13px 91px",fontSize:"13px",color:"white",backgroundColor:"#0C8CF6",borderColor:"#087BD9",borderRadius:"28px",textDecoration:"none"},attrs:{href:"http://www.mokahr.com",_target:"blank"}},[t._v("\n          申请试用\n        ")])])]),t._v(" "),n("tr",[n("td",{style:{padding:"24px 47px"}},[n("table",{style:t.tableStyle},[n("tbody",[n("tr",[n("td",{style:{width:"312px",padding:"15px 16px",border:"1px solid #DDDFE3"}},[n("a",{attrs:{href:t.bottomLeftLink,target:"_blank"}},[n("img",{style:{width:"100%"},attrs:{src:t.bottomLeftImg}})]),t._v(" "),n("div",{style:{padding:"10px 0 4px 0",fontSize:"15px",lineHeight:"20px",color:"#5C6170",textAlign:"center"}},[t._v(t._s(t.bottomLeftTxt))])]),t._v(" "),n("td",{style:{width:"312px",padding:"15px 16px",border:"1px solid #DDDFE3"}},[n("a",{attrs:{href:t.bottomRightLink,target:"_blank"}},[n("img",{style:{width:"100%"},attrs:{src:t.bottomRightImg}})]),t._v(" "),n("div",{style:{padding:"10px 0 4px 0",fontSize:"15px",lineHeight:"20px",color:"#5C6170",textAlign:"center"}},[t._v(t._s(t.bottomRightTxt))])])])])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{style:[{width:"720px",fontSize:"13px"},t.tableStyle]},[n("tbody",[n("tr",{style:{height:"24px"}},[n("td",{style:{paddingBottom:"10px",color:"#5C6170"}},[t._v("\n        Moka -- 智能化招聘CRM\n      ")]),t._v(" "),n("td",{style:{paddingBottom:"10px",textAlign:"right",color:"#0C8CF6"}},[n("a",{style:{color:"#0C8CF6",textDecoration:"none"},attrs:{href:"http://www.mokahr.com"}},[t._v("www.mokahr.com")])])]),t._v(" "),n("tr",[n("td",{style:{height:"3px",backgroundColor:"#DDDFE3"},attrs:{colspan:"2"}})]),t._v(" "),n("tr",[n("td",{style:{paddingTop:"10px",color:"black"}},[t._v("\n        北京希瑞亚斯科技有限公司\n      ")]),t._v(" "),n("td",{style:{paddingTop:"10px",color:"black",textAlign:"right"}},[t._v("\n        联系电话：010-57169313\n      ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{style:[{width:"100%",backgroundColor:"white"},t.tableStyle]},[n("tbody",[n("tr",[n("td",{style:{padding:"36px 48px 0 48px",fontSize:"24px",fontWeight:"bold",color:"black"},attrs:{colspan:"2"}},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("tr",[n("td",{style:{padding:"20px 48px"},attrs:{valign:"top"}},[n("table",[n("tbody",t._l(t.articles,function(e,i){return n("tr",{key:e.id,style:{height:"153px"}},[n("td",{style:{width:"17px",borderLeft:"1px solid #F4F4F6"},attrs:{valign:"top"}},[n("div",{style:{height:"38px",borderBottom:"1px solid #F4F4F6"}})]),t._v(" "),n("td",{style:{width:"35px",paddingTop:"22px"},attrs:{valign:"top"}},[n("div",{style:[t.spriteStyle,t.speakSprite],attrs:{src:e.imgUrl}})]),t._v(" "),n("td",{style:{padding:"14px 48px 18px 0"},attrs:{valign:"top"}},[n("table",{style:t.tableStyle},[n("tbody",[n("tr",[n("td",{style:{fontSize:"24px",fontWeight:"bold",lineHeight:"40px",color:"black"}},[t._v("\n                        "+t._s(e.title)+"\n                      ")])]),t._v(" "),n("tr",[n("td",{style:{paddingBottom:"5px",fontSize:"15px",lineHeight:"20px",color:"#090A0B"}},[t._v("\n                          "+t._s(e.subtitle)+"\n                      ")])]),t._v(" "),n("tr",[n("td",{style:{paddingBottom:"5px",fontSize:"13px",lineHeight:"20px",color:"#5C6170"}},[t._v("\n                          "+t._s(e.abstract)+"\n                      ")])]),t._v(" "),n("tr",[n("td",[n("a",{style:{display:"inline-block",padding:"7px 16px",fontSize:"13px",color:"white",backgroundColor:"#0C8CF6",borderColor:"#087BD9",borderRadius:"28px",textDecoration:"none"},attrs:{_target:"blank",href:e.link}},[t._v("\n                          "+t._s(e.linkText)+"\n                        ")])])])])])])])}))])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("workshop")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{style:[{width:"100%",backgroundColor:"white"},t.tableStyle]},[n("tbody",[n("tr",[n("td",{style:{padding:"36px 48px 0 48px",fontSize:"24px",fontWeight:"bold",color:"black"},attrs:{colspan:"2"}},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),n("tr",[n("td",{style:{padding:"0 48px 20px 48px"},attrs:{valign:"top"}},[n("table",{style:t.tableStyle},[n("tbody",t._l(t.articles,function(e,i){return n("tr",{key:e.id},[n("td",{style:{width:"234px",borderTop:t.articles.length>1&&i>0?"1px solid #F4F4F6":null}},[n("img",{style:{width:"100%",border:"1px solid rgba(0,0,0,0.10)",borderRadius:"2px"},attrs:{src:e.imgUrl}})]),t._v(" "),n("td",{style:{padding:"24px 0 24px 24px",borderTop:t.articles.length>1&&i>0?"1px solid #F4F4F6":null}},[n("table",{style:t.tableStyle},[n("tbody",[n("tr",[n("td",{style:{paddingBottom:"10px",fontSize:"20px",fontWeight:"bold",lineHeight:"30px",color:"black"}},[t._v("\n                        "+t._s(e.title)+"\n                      ")])]),t._v(" "),n("tr",[n("td",{style:{paddingBottom:"10px",fontSize:"13px",lineHeight:"20px",color:"#40444F"}},[t._v("\n                          "+t._s(e.abstract)+"\n                      ")])]),t._v(" "),n("tr",[n("td",[n("a",{style:{display:"inline-block",padding:"7px 16px",fontSize:"13px",color:"white",backgroundColor:"#0C8CF6",borderColor:"#087BD9",borderRadius:"28px",textDecoration:"none"},attrs:{_target:"blank",href:e.link}},[t._v("\n                          "+t._s(e.linkText)+"\n                        ")])])])])])])])}))])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"text-input"},[n("label",{attrs:{for:"banner"}},[t._v("Banner图片")]),t._v(" "),n("input",{attrs:{id:"banner",placeholder:"Banner图片链接"},domProps:{value:t.bannerImgUrl},on:{input:function(e){t.bannerImgUrlChange(e.target.value)}}})])]),t._v(" "),n("weekly-news",{attrs:{title:t.typeToSection.weeklyNews.title,articles:t.typeToSection.weeklyNews.articles,appendArticle:t.appendArticle,removeArticle:t.removeArticle,sectionChange:t.sectionChange,articleChange:t.articleChange}}),t._v(" "),n("activities",{attrs:{title:t.typeToSection.activities.title,articles:t.typeToSection.activities.articles,appendArticle:t.appendArticle,removeArticle:t.removeArticle,sectionChange:t.sectionChange,articleChange:t.articleChange}}),t._v(" "),n("new-features",{attrs:{title:t.typeToSection.newFeatures.title,articles:t.typeToSection.newFeatures.articles,bottomLeftImg:t.typeToSection.newFeatures.bottomLeftImg,bottomLeftTxt:t.typeToSection.newFeatures.bottomLeftTxt,bottomLeftLink:t.typeToSection.newFeatures.bottomLeftLink,bottomRightImg:t.typeToSection.newFeatures.bottomRightImg,bottomRightTxt:t.typeToSection.newFeatures.bottomRightTxt,bottomRightLink:t.typeToSection.newFeatures.bottomRightLink,appendArticle:t.appendArticle,removeArticle:t.removeArticle,sectionChange:t.sectionChange,articleChange:t.articleChange}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{style:[{width:"720px"},t.tableStyle]},[n("tbody",[n("tr",{style:{height:"240px"}},[n("td",[n("img",{style:{width:"720px"},attrs:{src:t.bannerImgUrl}})])]),t._v(" "),n("tr",[n("td",[n("weekly-news",{attrs:{tableStyle:t.tableStyle,title:t.typeToSection.weeklyNews.title,articles:t.typeToSection.weeklyNews.articles}})],1)]),t._v(" "),n("tr",[n("td",{style:{paddingTop:"24px"}},[n("activities",{attrs:{tableStyle:t.tableStyle,title:t.typeToSection.activities.title,articles:t.typeToSection.activities.articles}})],1)]),t._v(" "),n("tr",[n("td",{style:{paddingTop:"24px"}},[n("new-features",{attrs:{tableStyle:t.tableStyle,title:t.typeToSection.newFeatures.title,articles:t.typeToSection.newFeatures.articles,bottomLeftImg:t.typeToSection.newFeatures.bottomLeftImg,bottomLeftTxt:t.typeToSection.newFeatures.bottomLeftTxt,bottomLeftLink:t.typeToSection.newFeatures.bottomLeftLink,bottomRightImg:t.typeToSection.newFeatures.bottomRightImg,bottomRightTxt:t.typeToSection.newFeatures.bottomRightTxt,bottomRightLink:t.typeToSection.newFeatures.bottomRightLink}})],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workshop"},[n("div",{staticClass:"workshop__editor"},[n("editor",{attrs:{bannerImgUrl:t.bannerImgUrl,typeToSection:t.typeToSection,sectionChange:t.sectionChange,articleChange:t.articleChange,appendArticle:t.appendArticle,removeArticle:t.removeArticle,bannerImgUrlChange:t.bannerImgUrlChange}})],1),t._v(" "),n("div",{staticClass:"workshop__previewer"},[n("previewer",{attrs:{bannerImgUrl:t.bannerImgUrl,typeToSection:t.typeToSection}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"section-title text-input"},[n("label",[t._v("标题")]),t._v(" "),n("input",{attrs:{placeholder:"段落标题"},domProps:{value:t.title},on:{input:function(e){t.sectionChange("newFeatures","title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-input"},[n("label",[t._v("左底图")]),t._v(" "),n("input",{attrs:{placeholder:"左侧图片链接"},domProps:{value:t.bottomLeftImg},on:{input:function(e){t.sectionChange("newFeatures","bottomLeftImg",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-input"},[n("label",[t._v("左底文字")]),t._v(" "),n("input",{attrs:{placeholder:"左侧图片文字"},domProps:{value:t.bottomLeftTxt},on:{input:function(e){t.sectionChange("newFeatures","bottomLeftTxt",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-input"},[n("label",[t._v("左底链接")]),t._v(" "),n("input",{attrs:{placeholder:"左侧图片链接"},domProps:{value:t.bottomLeftLink},on:{input:function(e){t.sectionChange("newFeatures","bottomLeftLink",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-input"},[n("label",[t._v("右底图")]),t._v(" "),n("input",{attrs:{placeholder:"右侧图片文字"},domProps:{value:t.bottomLeftImg},on:{input:function(e){t.sectionChange("newFeatures","bottomRightImg",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-input"},[n("label",[t._v("右底文字")]),t._v(" "),n("input",{attrs:{placeholder:"右侧图片文字"},domProps:{value:t.bottomRightTxt},on:{input:function(e){t.sectionChange("newFeatures","bottomRightTxt",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-input"},[n("label",[t._v("右底链接")]),t._v(" "),n("input",{attrs:{placeholder:"右侧图片链接"},domProps:{value:t.bottomRightLink},on:{input:function(e){t.sectionChange("newFeatures","bottomRightLink",e.target.value)}}})]),t._v(" "),t._l(t.articles,function(e,i){return n("div",{key:e.id,staticClass:"panel"},[n("div",{staticClass:"order"},[t._v("\n      "+t._s({newFeature:"新功能",enhancement:"优化"}[e.type])+"#"+t._s(i+1)+"\n      "),n("button",{staticClass:"delete-btn",on:{click:function(n){t.removeArticle("newFeatures",e.id)}}},[t._v("删除")])]),t._v(" "),n("div",{staticClass:"article-title text-input"},[n("label",{attrs:{for:"article-title-"+e.id}},[t._v("标题")]),t._v(" "),n("input",{attrs:{id:"article-title-"+e.id,placeholder:"文章标题"},domProps:{value:e.title},on:{input:function(n){t.articleChange("newFeatures",e.id,"title",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-preview-text text-input"},[n("label",{attrs:{for:"article-preview-text-"+e.id}},[t._v("简介")]),t._v(" "),n("textarea",{attrs:{id:"article-preview-text-"+e.id,placeholder:"文章简介"},domProps:{value:e.abstract},on:{input:function(n){t.articleChange("newFeatures",e.id,"abstract",n.target.value)}}})])])}),t._v(" "),n("div",{staticClass:"add-btn-wrapper"},[n("button",{staticClass:"add-btn",on:{click:function(e){t.appendArticle("newFeatures",t.defaultNewFeature)}}},[t._v("添加新功能")]),t._v(" "),n("button",{staticClass:"add-btn",on:{click:function(e){t.appendArticle("newFeatures",t.defaultEnhancement)}}},[t._v("添加优化")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"section-title text-input"},[n("label",[t._v("标题")]),t._v(" "),n("input",{attrs:{placeholder:"段落标题"},domProps:{value:t.title},on:{input:function(e){t.sectionChange("weeklyNews","title",e.target.value)}}})]),t._v(" "),t._l(t.articles,function(e,i){return n("div",{key:e.id,staticClass:"panel"},[n("div",{staticClass:"order"},[t._v("\n      文章#"+t._s(i+1)+"\n      "),n("button",{staticClass:"delete-btn",on:{click:function(n){t.removeArticle("weeklyNews",e.id)}}},[t._v("删除")])]),t._v(" "),n("div",{staticClass:"article-title text-input"},[n("label",{attrs:{for:"article-title-"+e.id}},[t._v("标题")]),t._v(" "),n("input",{attrs:{id:"article-title-"+e.id,placeholder:"文章标题"},domProps:{value:e.title},on:{input:function(n){t.articleChange("weeklyNews",e.id,"title",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-preview-text text-input"},[n("label",{attrs:{
for:"article-preview-text-"+e.id}},[t._v("简介")]),t._v(" "),n("textarea",{attrs:{id:"article-preview-text-"+e.id,placeholder:"文章简介"},domProps:{value:e.abstract},on:{input:function(n){t.articleChange("weeklyNews",e.id,"abstract",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-img-url text-input"},[n("label",{attrs:{for:"article-img-url-"+e.id}},[t._v("配图")]),t._v(" "),n("input",{attrs:{id:"article-img-url-"+e.id,placeholder:"文章配图链接"},domProps:{value:e.imgUrl},on:{input:function(n){t.articleChange("weeklyNews",e.id,"imgUrl",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-link text-input"},[n("label",{attrs:{for:"article-link-"+e.id}},[t._v("链接")]),t._v(" "),n("input",{attrs:{id:"article-link-"+e.id,placeholder:"文章链接"},domProps:{value:e.link},on:{input:function(n){t.articleChange("weeklyNews",e.id,"link",n.target.value)}}})]),t._v(" "),n("div",{staticClass:"article-link-text text-input"},[n("label",{attrs:{for:"article-link-text-"+e.id}},[t._v("链接文字")]),t._v(" "),n("input",{attrs:{id:"article-link-text-"+e.id,placeholder:"文章链接显示文字，例如“查看更多”"},domProps:{value:e.linkText},on:{input:function(n){t.articleChange("weeklyNews",e.id,"linkText",n.target.value)}}})])])}),t._v(" "),n("div",{staticClass:"add-btn-wrapper"},[n("button",{staticClass:"add-btn",on:{click:function(e){t.appendArticle("weeklyNews",t.defaultArticle)}}},[t._v("添加文章")])])],2)},staticRenderFns:[]}}]);
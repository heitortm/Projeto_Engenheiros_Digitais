"use strict";(self.webpackChunkprojeto_engenheiros_digitais=self.webpackChunkprojeto_engenheiros_digitais||[]).push([[5389],{5389:(C,f,r)=>{r.d(f,{UQ:()=>v,US:()=>m,fx:()=>U});var o=r(6825),d=r(6814),e=r(9467),h=r(5219),g=r(2076),_=r(6005),u=r(4562),p=r(2332);function T(i,l){if(1&i&&e._UZ(0,"span",11),2&i){const t=e.oxw(3);e.Tol(t.accordion.collapseIcon),e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function I(i,l){if(1&i&&e._UZ(0,"ChevronDownIcon",11),2&i){const t=e.oxw(3);e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function A(i,l){if(1&i&&(e.ynx(0),e.YNc(1,T,1,4,"span",9)(2,I,1,2,"ChevronDownIcon",10),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.accordion.collapseIcon),e.xp6(1),e.Q6J("ngIf",!t.accordion.collapseIcon)}}function y(i,l){if(1&i&&e._UZ(0,"span",11),2&i){const t=e.oxw(3);e.Tol(t.accordion.expandIcon),e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function x(i,l){if(1&i&&e._UZ(0,"ChevronRightIcon",11),2&i){const t=e.oxw(3);e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function E(i,l){if(1&i&&(e.ynx(0),e.YNc(1,y,1,4,"span",9)(2,x,1,2,"ChevronRightIcon",10),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.accordion.expandIcon),e.xp6(1),e.Q6J("ngIf",!t.accordion.expandIcon)}}function D(i,l){if(1&i&&(e.ynx(0),e.YNc(1,A,3,2,"ng-container",3)(2,E,3,2,"ng-container",3),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.selected),e.xp6(1),e.Q6J("ngIf",!t.selected)}}function S(i,l){}function k(i,l){1&i&&e.YNc(0,S,0,0,"ng-template")}function w(i,l){if(1&i&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.header," ")}}function O(i,l){1&i&&e.GkF(0)}function L(i,l){1&i&&e.Hsn(0,1,["*ngIf","hasHeaderFacet"])}function P(i,l){1&i&&e.GkF(0)}function H(i,l){if(1&i&&(e.ynx(0),e.YNc(1,P,1,0,"ng-container",6),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const F=["*",[["p-header"]]],M=i=>({$implicit:i}),b=i=>({transitionParams:i}),K=i=>({value:"visible",params:i}),Q=i=>({value:"hidden",params:i}),B=["*","p-header"],J=["*"];let m=(()=>{class i{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new e.vpe;headerFacet;templates;_selected=!1;get iconClass(){return"end"===this.iconPos?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(t,a,n){this.el=a,this.changeDetector=n,this.accordion=t,this.id=(0,p.Th)()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"icon":this.iconTemplate=t.template}})}toggle(t){if(this.disabled)return!1;let a=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:t,index:a});else{if(!this.accordion.multiple)for(var n=0;n<this.accordion.tabs.length;n++)this.accordion.tabs[n].selected&&(this.accordion.tabs[n].selected=!1,this.accordion.tabs[n].selectedChange.emit(!1),this.accordion.tabs[n].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:t,index:a})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),t?.preventDefault()}findTabIndex(){let t=-1;for(var a=0;a<this.accordion.tabs.length;a++)if(this.accordion.tabs[a]==this){t=a;break}return t}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(t){switch(t.code){case"Enter":case"Space":this.toggle(t),t.preventDefault()}}getTabHeaderActionId(t){return`${t}_header_action`}getTabContentId(t){return`${t}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(a){return new(a||i)(e.Y36((0,e.Gpc)(()=>v)),e.Y36(e.SBq),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-accordionTab"]],contentQueries:function(a,n,s){if(1&a&&(e.Suo(s,h.h4,4),e.Suo(s,h.jx,4)),2&a){let c;e.iGM(c=e.CRH())&&(n.headerFacet=c),e.iGM(c=e.CRH())&&(n.templates=c)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:"headerAriaLevel"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:B,decls:12,vars:45,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"ngClass","click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(a,n){1&a&&(e.F$t(F),e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e.NdJ("click",function(c){return n.toggle(c)})("keydown",function(c){return n.onKeydown(c)}),e.YNc(3,D,3,2,"ng-container",3)(4,k,1,0,null,4)(5,w,2,1,"span",5)(6,O,1,0,"ng-container",6)(7,L,1,0,"ng-content",3),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8),e.Hsn(10),e.YNc(11,H,2,1,"ng-container",3),e.qZA()()()),2&a&&(e.ekj("p-accordion-tab-active",n.selected),e.Q6J("ngClass",n.tabStyleClass)("ngStyle",n.tabStyle),e.uIk("data-pc-name","accordiontab"),e.xp6(1),e.ekj("p-highlight",n.selected)("p-disabled",n.disabled),e.uIk("aria-level",n.headerAriaLevel)("data-p-disabled",n.disabled)("data-pc-section","header"),e.xp6(1),e.Akn(n.headerStyle),e.Q6J("ngClass",n.headerStyleClass),e.uIk("tabindex",n.disabled?null:0)("id",n.getTabHeaderActionId(n.id))("aria-controls",n.getTabContentId(n.id))("aria-expanded",n.selected)("aria-disabled",n.disabled)("data-pc-section","headeraction"),e.xp6(1),e.Q6J("ngIf",!n.iconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",n.iconTemplate)("ngTemplateOutletContext",e.VKq(35,M,n.selected)),e.xp6(1),e.Q6J("ngIf",!n.hasHeaderFacet),e.xp6(1),e.Q6J("ngTemplateOutlet",n.headerTemplate),e.xp6(1),e.Q6J("ngIf",n.hasHeaderFacet),e.xp6(1),e.Q6J("@tabContent",n.selected?e.VKq(39,K,e.VKq(37,b,n.transitionOptions)):e.VKq(43,Q,e.VKq(41,b,n.transitionOptions))),e.uIk("id",n.getTabContentId(n.id))("aria-hidden",!n.selected)("aria-labelledby",n.getTabHeaderActionId(n.id))("data-pc-section","toggleablecontent"),e.xp6(1),e.Q6J("ngClass",n.contentStyleClass)("ngStyle",n.contentStyle),e.xp6(2),e.Q6J("ngIf",n.contentTemplate&&(n.cache?n.loaded:n.selected)))},dependencies:()=>[d.mk,d.O5,d.tP,d.PC,u.X,_.v],styles:["@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}\n"],encapsulation:2,data:{animation:[(0,o.X$)("tabContent",[(0,o.SB)("hidden",(0,o.oB)({height:"0",visibility:"hidden"})),(0,o.SB)("visible",(0,o.oB)({height:"*",visibility:"visible"})),(0,o.eR)("visible <=> hidden",[(0,o.jt)("{{transitionParams}}")]),(0,o.eR)("void => *",(0,o.jt)(0))])]},changeDetection:0})}return i})(),v=(()=>{class i{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(t){"number"==typeof t&&t>0?this._headerAriaLevel=t:2!==this._headerAriaLevel&&(this._headerAriaLevel=2)}onClose=new e.vpe;onOpen=new e.vpe;activeIndexChange=new e.vpe;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(t,a){this.el=t,this.changeDetector=a}onKeydown(t){switch(t.code){case"ArrowDown":this.onTabArrowDownKey(t);break;case"ArrowUp":this.onTabArrowUpKey(t);break;case"Home":t.shiftKey||this.onTabHomeKey(t);break;case"End":t.shiftKey||this.onTabEndKey(t)}}onTabArrowDownKey(t){const a=this.findNextHeaderAction(t.target.parentElement.parentElement.parentElement);a?this.changeFocusedTab(a):this.onTabHomeKey(t),t.preventDefault()}onTabArrowUpKey(t){const a=this.findPrevHeaderAction(t.target.parentElement.parentElement.parentElement);a?this.changeFocusedTab(a):this.onTabEndKey(t),t.preventDefault()}onTabHomeKey(t){const a=this.findFirstHeaderAction();this.changeFocusedTab(a),t.preventDefault()}changeFocusedTab(t){t&&(g.p.focus(t),this.selectOnFocus&&this.tabs.forEach((a,n)=>{let s=this.multiple?this._activeIndex.includes(n):n===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),a.id==t.id&&(a.selected=!a.selected,this._activeIndex.includes(n)?this._activeIndex=this._activeIndex.filter(c=>c!==n):this._activeIndex.push(n))):a.id==t.id?(a.selected=!a.selected,this._activeIndex=n):a.selected=!1,a.selectedChange.emit(s),this.activeIndexChange.emit(this._activeIndex),a.changeDetector.markForCheck()}))}findNextHeaderAction(t,a=!1){const s=g.p.findSingle(a?t:t.nextElementSibling,'[data-pc-section="header"]');return s?g.p.getAttribute(s,"data-p-disabled")?this.findNextHeaderAction(s.parentElement.parentElement):g.p.findSingle(s,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(t,a=!1){const s=g.p.findSingle(a?t:t.previousElementSibling,'[data-pc-section="header"]');return s?g.p.getAttribute(s,"data-p-disabled")?this.findPrevHeaderAction(s.parentElement.parentElement):g.p.findSingle(s,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){return this.findNextHeaderAction(this.el.nativeElement.firstElementChild.childNodes[0],!0)}findLastHeaderAction(){const t=this.el.nativeElement.firstElementChild.childNodes;return this.findPrevHeaderAction(t[t.length-1],!0)}onTabEndKey(t){const a=this.findLastHeaderAction();this.changeFocusedTab(a),t.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(t=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(t=>{t.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let t=0;t<this.tabs.length;t++){let a=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;a!==this.tabs[t].selected&&(this.tabs[t].selected=a,this.tabs[t].selectedChange.emit(a),this.tabs[t].changeDetector.markForCheck())}}isTabActive(t){return this.multiple?this._activeIndex&&this._activeIndex.includes(t):this._activeIndex===t}getTabProp(t,a){return t.props?t.props[a]:void 0}updateActiveIndex(){let t=this.multiple?[]:null;this.tabs.forEach((a,n)=>{if(a.selected){if(!this.multiple)return void(t=n);t.push(n)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(t)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(a){return new(a||i)(e.Y36(e.SBq),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-accordion"]],contentQueries:function(a,n,s){if(1&a&&e.Suo(s,m,5),2&a){let c;e.iGM(c=e.CRH())&&(n.tabList=c)}},hostAttrs:[1,"p-element"],hostBindings:function(a,n){1&a&&e.NdJ("keydown",function(c){return n.onKeydown(c)})},inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:J,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(a,n){1&a&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&a&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-accordion p-component")("ngStyle",n.style))},dependencies:[d.mk,d.PC],encapsulation:2,changeDetection:0})}return i})(),U=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[d.ez,u.X,_.v,h.m8]})}return i})()},6005:(C,f,r)=>{r.d(f,{v:()=>e});var o=r(9467),d=r(4713);let e=(()=>{class h extends d.s{static \u0275fac=(()=>{let _;return function(p){return(_||(_=o.n5z(h)))(p||h)}})();static \u0275cmp=o.Xpm({type:h,selectors:[["ChevronDownIcon"]],standalone:!0,features:[o.qOj,o.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(u,p){1&u&&(o.O4$(),o.TgZ(0,"svg",0),o._UZ(1,"path",1),o.qZA()),2&u&&(o.Tol(p.getClassNames()),o.uIk("aria-label",p.ariaLabel)("aria-hidden",p.ariaHidden)("role",p.role))},encapsulation:2})}return h})()}}]);
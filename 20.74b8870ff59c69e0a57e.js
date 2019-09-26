(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{cK1b:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),r=u("zl1X"),a=u("pMnS"),c=u("8KBR"),b=u("+Xo0"),o=u("0G9f"),s=u("gIcY"),i=u("xLE1"),d=u("6/Z3"),g=u("QkwE"),p=u("vAyd"),m=u("mrSG"),E=u("N+3j"),v='\n<clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data1"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template1">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-input>\n<clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template2">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-textarea>\n',h='\ndata1 = new Map();\nthis.data1.set("EN", "english text");\nthis.data1.set("DE", "deutscher text");\nthis.data1.set("FR", "texte fran\xe7ais");\n',f='\n<form clrForm [formGroup]="exampleForm">\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample1"\n        clrControlClasses="clr-col-md-5" name="reactive1">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample2"\n        clrControlClasses="clr-col-md-5" name="reactive2">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-textarea>\n</form>\n',C='\nreactiveData1 = new Map();\nthis.reactiveData1.set("EN", "english text");\nthis.reactiveData1.set("DE", "deutscher text");\nthis.reactiveData1.set("FR", "texte fran\xe7ais");\n\nexampleForm = new FormGroup({\n  sample1: new FormControl(this.reactiveData1, {\n    updateOn: "blur",\n    validators: [ClrMultilingualInputValidators.requiredAll()]\n  })\n});\n',x=function(l){function n(){var n=l.call(this,"multilingual-input")||this;return n.templateExample=v,n.templateTSExample=h,n.reactiveExample=f,n.reactiveTSExample=C,n.data1=new Map,n.data2=new Map,n.reactiveData1=new Map,n.reactiveData2=new Map,n.exampleForm=new s.h({sample1:new s.f(n.reactiveData1,{updateOn:"blur",validators:[d.C.requiredAll()]}),sample2:new s.f(n.reactiveData2,{updateOn:"blur",validators:[d.C.requiredAll()]})}),n}return Object(m.c)(n,l),n.prototype.ngOnInit=function(){this.data1.set("EN","english text"),this.data1.set("DE","deutscher text"),this.data1.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text\nSecond line with a little more text"),this.data2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.data2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte"),this.reactiveData1.set("EN","english text"),this.reactiveData1.set("DE","deutscher text"),this.reactiveData1.set("FR","texte fran\xe7ais"),this.reactiveData2.set("EN","english text\nSecond line with a little more text"),this.reactiveData2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.reactiveData2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte")},n}(E.a),G=e.sb({encapsulation:2,styles:[],data:{}});function O(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,222,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,b.b,b.a)),e.tb(1,49152,null,0,o.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.ub(2,0,null,0,220,"article",[],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The multilingual input/textarea fields are used to enter texts in different languages."])),(l()(),e.ub(5,0,null,null,217,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Code & Examples"])),(l()(),e.ub(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" The multilingual input/textarea components require you to use custom validators: "])),(l()(),e.ub(10,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.ub(11,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Reactive forms: "])),(l()(),e.ub(13,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ClrMultilingualInputValidators"])),(l()(),e.ub(15,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Template-driven forms: "])),(l()(),e.ub(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["clrRequiredOneMultilang, clrRequiredAllMultilang"])),(l()(),e.ub(19,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Angular Component"])),(l()(),e.ub(21,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Summary of Options"])),(l()(),e.ub(23,0,null,null,53,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.ub(24,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Parameter"])),(l()(),e.ub(28,0,null,null,1,"th",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Values"])),(l()(),e.ub(30,0,null,null,1,"th",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default"])),(l()(),e.ub(32,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Effect"])),(l()(),e.ub(34,0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),e.ub(35,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(36,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(37,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["value binding (ngModel or reactive)"])),(l()(),e.ub(39,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: Map<string, string>"])),(l()(),e.ub(41,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: null"])),(l()(),e.ub(43,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Map of language and translation"])),(l()(),e.ub(45,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["null"])),(l()(),e.ub(47,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Value binding for control represented by a map of language as key and translation as value."])),(l()(),e.ub(49,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(50,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrSelectedLang]"])),(l()(),e.ub(53,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: String"])),(l()(),e.ub(55,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['Default: ""'])),(l()(),e.ub(57,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Javascript String"])),(l()(),e.ub(59,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['""'])),(l()(),e.ub(61,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Defines the currently selected language."])),(l()(),e.ub(63,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(65,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrControlClasses]"])),(l()(),e.ub(67,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: String"])),(l()(),e.ub(69,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['Default: "clr-col-md-10"'])),(l()(),e.ub(71,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Javascript String"])),(l()(),e.ub(73,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['"clr-col-md-10"'])),(l()(),e.ub(75,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Defines the css classes applied to the input control."])),(l()(),e.ub(77,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Reactive forms"])),(l()(),e.ub(79,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Validation will happen on blur"])),(l()(),e.ub(81,0,null,null,60,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,83).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,83).onReset()&&t),t},null,null)),e.tb(82,16384,null,0,s.G,[],null,null),e.tb(83,540672,null,0,s.i,[[8,null],[8,null]],{form:[0,"form"]},null),e.Lb(2048,null,s.c,null,[s.i]),e.tb(85,16384,null,0,s.q,[[4,s.c]],null,null),e.Lb(512,null,i.Xc,i.Xc,[]),e.Lb(512,null,i.ad,i.ad,[]),e.tb(88,16384,null,0,i.db,[i.Xc,i.ad],null,null),(l()(),e.ub(89,0,null,null,15,"clr-multilingual-input",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrSelectedLang","EN"],["formControlName","sample1"],["name","reactive1"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,c.Q,c.p)),e.tb(90,4374528,null,0,d.B,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,s.n,function(l){return[l]},[d.B]),e.tb(92,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.n],[2,s.E]],{name:[0,"name"]},null),e.Lb(2048,null,s.o,null,[s.g]),e.tb(94,16384,null,0,s.p,[[4,s.o]],null,null),e.Lb(512,null,i.Yc,i.Yc,[]),(l()(),e.ub(96,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(97,212992,null,0,i.nb,[[2,i.Wc],[2,i.Xc],[2,i.Yc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Reactive"])),(l()(),e.ub(99,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null],[8,"id",0]],null,null,r.K,r.o)),e.tb(100,49152,null,0,i.y,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(102,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[8,"id",0]],null,null,r.J,r.n)),e.tb(103,49152,null,0,i.x,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(105,0,null,null,15,"clr-multilingual-textarea",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrSelectedLang","EN"],["formControlName","sample2"],["name","reactive2"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,c.R,c.q)),e.tb(106,4374528,null,0,d.E,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,s.n,function(l){return[l]},[d.E]),e.tb(108,671744,null,0,s.g,[[3,s.c],[8,null],[8,null],[6,s.n],[2,s.E]],{name:[0,"name"]},null),e.Lb(2048,null,s.o,null,[s.g]),e.tb(110,16384,null,0,s.p,[[4,s.o]],null,null),e.Lb(512,null,i.Yc,i.Yc,[]),(l()(),e.ub(112,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(113,212992,null,0,i.nb,[[2,i.Wc],[2,i.Xc],[2,i.Yc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Reactive"])),(l()(),e.ub(115,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null],[8,"id",0]],null,null,r.K,r.o)),e.tb(116,49152,null,0,i.y,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(118,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[8,"id",0]],null,null,r.J,r.n)),e.tb(119,49152,null,0,i.x,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(121,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Output texts"])),(l()(),e.ub(123,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(124,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(125,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Input"])),(l()(),e.ub(127,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(128,null,[" EN: ",""])),(l()(),e.ub(129,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(130,null,[" DE: ",""])),(l()(),e.ub(131,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(132,null,[" FR: "," "])),(l()(),e.ub(133,0,null,null,8,"div",[["class","clr-col-8"]],null,null,null,null,null)),(l()(),e.ub(134,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Textarea"])),(l()(),e.ub(136,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(137,null,[" EN: ",""])),(l()(),e.ub(138,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(139,null,[" DE: ",""])),(l()(),e.ub(140,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(141,null,[" FR: "," "])),(l()(),e.ub(142,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),e.tb(143,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.ub(144,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,g.b,g.a)),e.tb(145,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.ub(146,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Template driven"])),(l()(),e.ub(148,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Validation will happen on blur"])),(l()(),e.ub(150,0,null,null,68,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,152).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,152).onReset()&&t),t},null,null)),e.tb(151,16384,null,0,s.G,[],null,null),e.tb(152,4210688,null,0,s.r,[[8,null],[8,null]],null,null),e.Lb(2048,null,s.c,null,[s.r]),e.tb(154,16384,null,0,s.q,[[4,s.c]],null,null),e.Lb(512,null,i.Xc,i.Xc,[]),e.Lb(512,null,i.ad,i.ad,[]),e.tb(157,16384,null,0,i.db,[i.Xc,i.ad],null,null),(l()(),e.ub(158,0,null,null,18,"clr-multilingual-input",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrRequiredAllMultilang",""],["clrSelectedLang","EN"],["name","template1"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.data1=u)&&e),e},c.Q,c.p)),e.tb(159,16384,null,0,d.V,[],null,null),e.Lb(1024,null,s.m,function(l){return[l]},[d.V]),e.tb(161,4374528,null,0,d.B,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,s.n,function(l){return[l]},[d.B]),e.tb(163,671744,null,0,s.s,[[2,s.c],[6,s.m],[8,null],[6,s.n]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),e.Jb(164,{updateOn:0}),e.Lb(2048,null,s.o,null,[s.s]),e.tb(166,16384,null,0,s.p,[[4,s.o]],null,null),e.Lb(512,null,i.Yc,i.Yc,[]),(l()(),e.ub(168,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(169,212992,null,0,i.nb,[[2,i.Wc],[2,i.Xc],[2,i.Yc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Template"])),(l()(),e.ub(171,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[8,"id",0]],null,null,r.J,r.n)),e.tb(172,49152,null,0,i.x,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(174,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null],[8,"id",0]],null,null,r.K,r.o)),e.tb(175,49152,null,0,i.y,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(177,0,null,null,18,"clr-multilingual-textarea",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrRequiredAllMultilang",""],["clrSelectedLang","EN"],["name","template2"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.data2=u)&&e),e},c.R,c.q)),e.tb(178,16384,null,0,d.V,[],null,null),e.Lb(1024,null,s.m,function(l){return[l]},[d.V]),e.tb(180,4374528,null,0,d.E,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,s.n,function(l){return[l]},[d.E]),e.tb(182,671744,null,0,s.s,[[2,s.c],[6,s.m],[8,null],[6,s.n]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),e.Jb(183,{updateOn:0}),e.Lb(2048,null,s.o,null,[s.s]),e.tb(185,16384,null,0,s.p,[[4,s.o]],null,null),e.Lb(512,null,i.Yc,i.Yc,[]),(l()(),e.ub(187,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(188,212992,null,0,i.nb,[[2,i.Wc],[2,i.Xc],[2,i.Yc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Template"])),(l()(),e.ub(190,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[8,"id",0]],null,null,r.J,r.n)),e.tb(191,49152,null,0,i.x,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(193,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null],[8,"id",0]],null,null,r.K,r.o)),e.tb(194,49152,null,0,i.y,[[2,i.Wc]],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(196,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Output texts"])),(l()(),e.ub(198,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(199,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(200,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Input"])),(l()(),e.ub(202,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(203,null,[" EN: ",""])),(l()(),e.ub(204,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(205,null,[" DE: ",""])),(l()(),e.ub(206,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(207,null,[" FR: "," "])),(l()(),e.ub(208,0,null,null,8,"div",[["class","clr-col-8"]],null,null,null,null,null)),(l()(),e.ub(209,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Textarea"])),(l()(),e.ub(211,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(212,null,[" EN: ",""])),(l()(),e.ub(213,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(214,null,[" DE: ",""])),(l()(),e.ub(215,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(216,null,[" FR: "," "])),(l()(),e.ub(217,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Output texts"])),(l()(),e.ub(219,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),e.tb(220,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.ub(221,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,g.b,g.a)),e.tb(222,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,83,0,u.exampleForm),l(n,90,0,"clr-col-md-5","EN"),l(n,92,0,"sample1"),l(n,97,0),l(n,106,0,"clr-col-md-5","EN"),l(n,108,0,"sample2"),l(n,113,0),l(n,143,0,u.reactiveExample),l(n,145,0,u.reactiveTSExample,"typescript"),l(n,161,0,"clr-col-md-5","EN");var e=u.data1,t=l(n,164,0,"blur");l(n,163,0,"template1",e,t),l(n,169,0),l(n,180,0,"clr-col-md-5","EN");var r=u.data2,a=l(n,183,0,"blur");l(n,182,0,"template2",r,a),l(n,188,0),l(n,220,0,u.templateExample),l(n,222,0,u.templateTSExample,"typescript")},function(l,n){var u=n.component;l(n,0,0,!0),l(n,81,0,e.Gb(n,85).ngClassUntouched,e.Gb(n,85).ngClassTouched,e.Gb(n,85).ngClassPristine,e.Gb(n,85).ngClassDirty,e.Gb(n,85).ngClassValid,e.Gb(n,85).ngClassInvalid,e.Gb(n,85).ngClassPending,!0,e.Gb(n,88).layoutService.isHorizontal(),e.Gb(n,88).layoutService.isCompact()),l(n,89,0,e.Gb(n,90).formControl,e.Gb(n,90).multi,e.Gb(n,90).invalid,e.Gb(n,94).ngClassUntouched,e.Gb(n,94).ngClassTouched,e.Gb(n,94).ngClassPristine,e.Gb(n,94).ngClassDirty,e.Gb(n,94).ngClassValid,e.Gb(n,94).ngClassInvalid,e.Gb(n,94).ngClassPending),l(n,96,0,e.Gb(n,97).forAttr),l(n,99,0,!0,(null==e.Gb(n,100).controlIdService?null:e.Gb(n,100).controlIdService.id)+"-helper"),l(n,102,0,!0,"polite",(null==e.Gb(n,103).controlIdService?null:e.Gb(n,103).controlIdService.id)+"-error"),l(n,105,0,e.Gb(n,106).formControl,e.Gb(n,106).multi,e.Gb(n,106).invalid,e.Gb(n,110).ngClassUntouched,e.Gb(n,110).ngClassTouched,e.Gb(n,110).ngClassPristine,e.Gb(n,110).ngClassDirty,e.Gb(n,110).ngClassValid,e.Gb(n,110).ngClassInvalid,e.Gb(n,110).ngClassPending),l(n,112,0,e.Gb(n,113).forAttr),l(n,115,0,!0,(null==e.Gb(n,116).controlIdService?null:e.Gb(n,116).controlIdService.id)+"-helper"),l(n,118,0,!0,"polite",(null==e.Gb(n,119).controlIdService?null:e.Gb(n,119).controlIdService.id)+"-error"),l(n,128,0,u.exampleForm.get("sample1").value.get("EN")),l(n,130,0,u.exampleForm.get("sample1").value.get("DE")),l(n,132,0,u.exampleForm.get("sample1").value.get("FR")),l(n,137,0,u.exampleForm.get("sample2").value.get("EN")),l(n,139,0,u.exampleForm.get("sample2").value.get("DE")),l(n,141,0,u.exampleForm.get("sample2").value.get("FR")),l(n,150,0,e.Gb(n,154).ngClassUntouched,e.Gb(n,154).ngClassTouched,e.Gb(n,154).ngClassPristine,e.Gb(n,154).ngClassDirty,e.Gb(n,154).ngClassValid,e.Gb(n,154).ngClassInvalid,e.Gb(n,154).ngClassPending,!0,e.Gb(n,157).layoutService.isHorizontal(),e.Gb(n,157).layoutService.isCompact()),l(n,158,0,e.Gb(n,161).formControl,e.Gb(n,161).multi,e.Gb(n,161).invalid,e.Gb(n,166).ngClassUntouched,e.Gb(n,166).ngClassTouched,e.Gb(n,166).ngClassPristine,e.Gb(n,166).ngClassDirty,e.Gb(n,166).ngClassValid,e.Gb(n,166).ngClassInvalid,e.Gb(n,166).ngClassPending),l(n,168,0,e.Gb(n,169).forAttr),l(n,171,0,!0,"polite",(null==e.Gb(n,172).controlIdService?null:e.Gb(n,172).controlIdService.id)+"-error"),l(n,174,0,!0,(null==e.Gb(n,175).controlIdService?null:e.Gb(n,175).controlIdService.id)+"-helper"),l(n,177,0,e.Gb(n,180).formControl,e.Gb(n,180).multi,e.Gb(n,180).invalid,e.Gb(n,185).ngClassUntouched,e.Gb(n,185).ngClassTouched,e.Gb(n,185).ngClassPristine,e.Gb(n,185).ngClassDirty,e.Gb(n,185).ngClassValid,e.Gb(n,185).ngClassInvalid,e.Gb(n,185).ngClassPending),l(n,187,0,e.Gb(n,188).forAttr),l(n,190,0,!0,"polite",(null==e.Gb(n,191).controlIdService?null:e.Gb(n,191).controlIdService.id)+"-error"),l(n,193,0,!0,(null==e.Gb(n,194).controlIdService?null:e.Gb(n,194).controlIdService.id)+"-helper"),l(n,203,0,u.data1.get("EN")),l(n,205,0,u.data1.get("DE")),l(n,207,0,u.data1.get("FR")),l(n,212,0,u.data2.get("EN")),l(n,214,0,u.data2.get("DE")),l(n,216,0,u.data2.get("FR"))})}function w(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"clr-multilingual-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,O,G)),e.tb(1,114688,null,0,x,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,!0,!0)})}var y=e.qb("clr-multilingual-demo",x,w,{},{},[]),D=u("Ip0R"),S=u("XPsC"),L=u("ZYCi"),N=u("JsA7");u.d(n,"MultilingualInputDemoModuleNgFactory",function(){return R});var R=e.rb(t,[],function(l){return e.Db([e.Eb(512,e.j,e.db,[[8,[r.ab,r.a,r.b,r.d,r.e,r.f,r.g,r.h,r.c,r.bb,r.cb,r.db,r.eb,a.a,c.a,y]],[3,e.j],e.z]),e.Eb(4608,D.s,D.r,[e.w,[2,D.K]]),e.Eb(4608,s.D,s.D,[]),e.Eb(4608,s.e,s.e,[]),e.Eb(4608,d.f,d.f,[]),e.Eb(1073742336,D.c,D.c,[]),e.Eb(1073742336,s.C,s.C,[]),e.Eb(1073742336,s.k,s.k,[]),e.Eb(1073742336,s.x,s.x,[]),e.Eb(1073742336,i.hb,i.hb,[]),e.Eb(1073742336,i.Sc,i.Sc,[]),e.Eb(1073742336,i.We,i.We,[]),e.Eb(1073742336,i.Z,i.Z,[]),e.Eb(1073742336,i.j,i.j,[]),e.Eb(1073742336,i.bb,i.bb,[]),e.Eb(1073742336,i.v,i.v,[]),e.Eb(1073742336,i.bd,i.bd,[]),e.Eb(1073742336,i.t,i.t,[]),e.Eb(1073742336,i.ed,i.ed,[]),e.Eb(1073742336,i.P,i.P,[]),e.Eb(1073742336,i.mb,i.mb,[]),e.Eb(1073742336,i.Cb,i.Cb,[]),e.Eb(1073742336,i.Nb,i.Nb,[]),e.Eb(1073742336,i.Rb,i.Rb,[]),e.Eb(1073742336,i.oc,i.oc,[]),e.Eb(1073742336,i.eb,i.eb,[]),e.Eb(1073742336,i.sb,i.sb,[]),e.Eb(1073742336,i.od,i.od,[]),e.Eb(1073742336,i.qd,i.qd,[]),e.Eb(1073742336,i.T,i.T,[]),e.Eb(1073742336,i.Xb,i.Xb,[]),e.Eb(1073742336,i.xd,i.xd,[]),e.Eb(1073742336,i.I,i.I,[]),e.Eb(1073742336,i.dc,i.dc,[]),e.Eb(1073742336,i.uc,i.uc,[]),e.Eb(1073742336,i.z,i.z,[]),e.Eb(1073742336,i.wb,i.wb,[]),e.Eb(1073742336,i.qe,i.qe,[]),e.Eb(1073742336,i.rb,i.rb,[]),e.Eb(1073742336,i.o,i.o,[]),e.Eb(1073742336,i.p,i.p,[]),e.Eb(1073742336,i.ub,i.ub,[]),e.Eb(1073742336,i.zb,i.zb,[]),e.Eb(1073742336,i.te,i.te,[]),e.Eb(1073742336,i.ve,i.ve,[]),e.Eb(1073742336,i.lc,i.lc,[]),e.Eb(1073742336,i.zc,i.zc,[]),e.Eb(1073742336,i.pb,i.pb,[]),e.Eb(1073742336,i.Ub,i.Ub,[]),e.Eb(1073742336,i.rc,i.rc,[]),e.Eb(1073742336,i.Gb,i.Gb,[]),e.Eb(1073742336,i.Dc,i.Dc,[]),e.Eb(1073742336,i.e,i.e,[]),e.Eb(1073742336,i.fc,i.fc,[]),e.Eb(1073742336,i.Kb,i.Kb,[]),e.Eb(1073742336,i.a,i.a,[]),e.Eb(1073742336,S.a,S.a,[]),e.Eb(1073742336,L.p,L.p,[[2,L.u],[2,L.l]]),e.Eb(1073742336,N.a,N.a,[]),e.Eb(1073742336,d.gb,d.gb,[]),e.Eb(1073742336,d.Q,d.Q,[]),e.Eb(1073742336,d.s,d.s,[]),e.Eb(1073742336,d.O,d.O,[]),e.Eb(1073742336,d.h,d.h,[]),e.Eb(1073742336,d.e,d.e,[]),e.Eb(1073742336,d.A,d.A,[]),e.Eb(1073742336,d.o,d.o,[]),e.Eb(1073742336,d.G,d.G,[]),e.Eb(1073742336,d.u,d.u,[]),e.Eb(1073742336,d.c,d.c,[]),e.Eb(1073742336,d.J,d.J,[]),e.Eb(1073742336,d.X,d.X,[]),e.Eb(1073742336,d.cb,d.cb,[]),e.Eb(1073742336,d.S,d.S,[]),e.Eb(1073742336,d.j,d.j,[]),e.Eb(1073742336,d.q,d.q,[]),e.Eb(1073742336,d.U,d.U,[]),e.Eb(1073742336,d.y,d.y,[]),e.Eb(1073742336,d.D,d.D,[]),e.Eb(1073742336,d.w,d.w,[]),e.Eb(1073742336,d.a,d.a,[]),e.Eb(1073742336,t,t,[]),e.Eb(1024,L.j,function(){return[[{path:"",component:x}]]},[])])})}}]);
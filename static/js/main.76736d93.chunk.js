(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,r){n.exports={app:"App_app__12qws"}},2:function(n,e,r){n.exports={formulaWrapper:"FormulaEditor_formulaWrapper__2MAe0",title:"FormulaEditor_title__DKEy-",formulaOptions:"FormulaEditor_formulaOptions__25AG7",formulaInput:"FormulaEditor_formulaInput__11beu",formulaDisplayWrapper:"FormulaEditor_formulaDisplayWrapper__323Cl",formulaDisplay:"FormulaEditor_formulaDisplay__2Zm9A",formulaDisplayError:"FormulaEditor_formulaDisplayError__1dchW"}},21:function(n,e,r){n.exports=r(37)},31:function(n,e,r){},37:function(n,e,r){"use strict";r.r(e);var t={};r.r(t),r.d(t,"circle_volume",function(){return Z}),r.d(t,"combination",function(){return Q}),r.d(t,"complex_trig",function(){return nn}),r.d(t,"demorgans",function(){return en}),r.d(t,"dot_product",function(){return rn}),r.d(t,"fundamental_calculus",function(){return tn}),r.d(t,"geometric_series",function(){return an}),r.d(t,"geometry",function(){return on}),r.d(t,"identity",function(){return ln}),r.d(t,"law_of_sines",function(){return cn}),r.d(t,"limit_delta_epsilon",function(){return un}),r.d(t,"matrix_determinant",function(){return fn}),r.d(t,"matrix_multiplication",function(){return sn}),r.d(t,"perpendicular",function(){return dn}),r.d(t,"piecewise",function(){return mn}),r.d(t,"quadratic_formula",function(){return pn}),r.d(t,"slope",function(){return gn}),r.d(t,"sum_of_cubes",function(){return yn}),r.d(t,"taylor_series",function(){return bn}),r.d(t,"vector",function(){return vn});var a=r(0),i=r.n(a),o=r(12),l=r(3),c=r(5);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(31);var u=r(15),f=r(16),s=r(19),d=r(17),m=r(20),p=r(18),g=r.n(p),y=r(2),b=r.n(y),v="SET_FORMULA",_="SET_FORMULA_DISPLAYSIZE",h="TOGGLE_FORMULA_DISPLAYMODE",E=function(n){return{type:v,payload:n}},x=2;function O(n){if(9===n.keyCode){var e=n.target,r=e.selectionStart,t=e.selectionEnd,a=e.value;e.value=a.substring(0,r)+Array(x).fill(" ").join("")+a.substring(t),e.selectionStart=r+x,e.selectionEnd=t+x,n.preventDefault()}else if(8===n.keyCode){var i=n.target,o=i.selectionStart;if(o===i.selectionEnd){var l=i.value;l.substring(o-x,o)===Array(x).fill(" ").join("")&&(i.value=l.substring(0,o-x)+l.substring(o),i.selectionStart=o-x,i.selectionEnd=o-x,n.preventDefault())}}}var j=Object(l.b)(function(n){return{formula:n.formula.formula}},function(n){return{onchange:function(e){return n(E(e.target.value))}}})(function(n){var e=n.formula,r=n.onchange;return i.a.createElement("div",{className:b.a.formulaInput},i.a.createElement("textarea",{id:"formulaInput",className:b.a.inputFormula,onKeyDown:O,onChange:r,title:"Type LaTeX code here",rows:"6",cols:"50",spellCheck:"false",autoComplete:"disable",defaultValue:e}))}),D=r(10),k=r.n(D),S=(r(35),Object(l.b)(function(n){return{math:n.formula.formula,displayMode:n.formula.displayMode,size:n.formula.displaySize}})(function(n){var e=n.math,r=n.displayMode,t=n.size;try{var a=k.a.renderToString(e,{displayMode:r});return i.a.createElement("div",{style:{fontSize:"".concat(t,"rem")},className:b.a.formulaDisplay},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))}catch(l){if(l instanceof k.a.ParseError){var o=l.message.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").split(": ").join("\n");return i.a.createElement("pre",{className:b.a.formulaDisplayError,dangerouslySetInnerHTML:{__html:o}})}}})),C=Object(l.b)(function(n){return{initial:n.formula.displaySize}},function(n){return{onchange:function(e){return n((r=e.target.value,{type:_,payload:r}));var r}}})(function(n){n.initial;var e=n.onchange;return i.a.createElement("div",{className:b.a.optionDisplaySlider},i.a.createElement("div",null,"Size:"),i.a.createElement("input",{type:"range",min:"0.4",max:"7",step:"0.2",defaultValue:"1.4",onChange:e}))}),w=Object(l.b)(function(n){return{initial:n.formula.displayMode}},function(n){return{onchange:function(){return n({type:h})}}})(function(n){var e=n.initial,r=n.onchange;return i.a.createElement("div",{className:b.a.optionDisplayMode},i.a.createElement("div",null,"Inline Style:"),i.a.createElement("input",{id:"inlineStyleCheck",type:"checkbox",onChange:r,defaultChecked:!e}))}),A=function(){return String.raw.apply(String,arguments).replace("\\`","`")},M=r(1);function F(){var n=Object(M.a)(["\vec{u} = langle x,y \rangle , quad\n|\vec{u}| = sqrt{x^2 + y^2}"],["\\vec{u} = \\langle x,y \\rangle , \\quad\n|\\vec{u}| = \\sqrt{x^2 + y^2}"]);return F=function(){return n},n}function B(){var n=Object(M.a)(["sum_{n=0}^{infty}\frac{f^{(n)}(a)}{n!}(x-a)^n"],["\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n"]);return B=function(){return n},n}function I(){var n=Object(M.a)(["(a^3 + b^3) = (a + b)(a^2 - ab + b^2)"]);return I=function(){return n},n}function q(){var n=Object(M.a)(["\frac{\text{rise}}{\text{run}} = \n\frac{Delta y}{Delta x} = \n\frac{y_2 - y_1}{x_2 - x_1}"],["\\frac{\\text{rise}}{\\text{run}} = \n\\frac{\\Delta y}{\\Delta x} = \n\\frac{y_2 - y_1}{x_2 - x_1}"]);return q=function(){return n},n}function L(){var n=Object(M.a)(["x = \frac{-b pm sqrt{b^2 - 4ac}}{2a}"],["x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"]);return L=function(){return n},n}function N(){var n=Object(M.a)(["a_{n+1} = left{\n  \begin{array}{l l}\n    a_n div 2 & \text{ if $a_n$ is even} \\\n      3a_n + 1 & \text{ if $a_n$ is odd} \\\n  end{array}\n\right."],["a_{n+1} = \\left\\{\n  \\begin{array}{l l}\n    a_n \\div 2 & \\text{ if $a_n$ is even} \\\\\n      3a_n + 1 & \\text{ if $a_n$ is odd} \\\\\n  \\end{array}\n\\right."]);return N=function(){return n},n}function T(){var n=Object(M.a)(["overleftrightarrow{AB} perp overline{BC} iff mangle{ABC} = 90^circ"],["\\overleftrightarrow{AB} \\perp \\overline{BC} \\iff m\\angle{ABC} = 90^\\circ"]);return T=function(){return n},n}function W(){var n=Object(M.a)(["left[\n  \begin{array}{rr}\n    1 & -3 \\\n    2 & 5\n  end{array}\n\right]\ncdot\nleft[\n  \begin{array}{r}\n    x \\\n    y\n  end{array}\n\right]\n=\nleft[\n  \begin{array}{r}\n    x-3y \\\n    2x+5y\n  end{array}\n\right]"],["\\left[\n  \\begin{array}{rr}\n    1 & -3 \\\\\n    2 & 5\n  \\end{array}\n\\right]\n\\cdot\n\\left[\n  \\begin{array}{r}\n    x \\\\\n    y\n  \\end{array}\n\\right]\n=\n\\left[\n  \\begin{array}{r}\n    x-3y \\\\\n    2x+5y\n  \\end{array}\n\\right]"]);return W=function(){return n},n}function $(){var n=Object(M.a)(["left|\begin{array}{c c c}\n  a & b & c \\\n  d & e & f \\\n  g & h & i \\\nend{array}\right|\n= aei + bfg + cdh - afh - bdi - ceg"],["\\left|\\begin{array}{c c c}\n  a & b & c \\\\\n  d & e & f \\\\\n  g & h & i \\\\\n\\end{array}\\right|\n= aei + bfg + cdh - afh - bdi - ceg"]);return $=function(){return n},n}function z(){var n=Object(M.a)(["\forall epsilon > 0, x in mathbb{R} \\\nexists delta > 0 \text{ such that } \\\n0 < |x-c| < delta implies |f(x) - L| < epsilon"],["\\forall\\ \\epsilon > 0, x \\in \\mathbb{R} \\\\\n\\exists\\ \\delta > 0 \\text{ such that } \\\\\n0 < |x-c| < \\delta \\implies |f(x) - L| < \\epsilon"]);return z=function(){return n},n}function R(){var n=Object(M.a)(["\frac{sin A}{a} = \frac{sin B}{b} = \frac{sin C}{c}"],["\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}"]);return R=function(){return n},n}function V(){var n=Object(M.a)(["e^{ipi}+1=0"],["e^{i\\pi}+1=0"]);return V=function(){return n},n}function G(){var n=Object(M.a)(["\triangle{ABC} cong \triangle{DEF}\nimplies mangle{CAB} = mangle{FDE}"],["\\triangle{ABC} \\cong \\triangle{DEF}\n\\implies m\\angle{CAB} = m\\angle{FDE}"]);return G=function(){return n},n}function P(){var n=Object(M.a)(["sum_{i=1}^nleft(acdot r^n\right)\n= \frac{a(1 - r^n)}{1-r}"],["\\sum_{i=1}^n\\left(a\\cdot r^n\\right)\n= \\frac{a(1 - r^n)}{1-r}"]);return P=function(){return n},n}function U(){var n=Object(M.a)(["int_a^b f'(x)dx = f(b) - f(a)"],["\\int_a^b f'(x)dx = f(b) - f(a)"]);return U=function(){return n},n}function H(){var n=Object(M.a)(["langle 2,6,-1\rangle cdot langle -3,4,5\rangle = 13"],["\\langle 2,6,-1\\rangle \\cdot \\langle -3,4,5\\rangle = 13"]);return H=function(){return n},n}function J(){var n=Object(M.a)(["lnot (p land q) iff (lnot p lor lnot q)"],["\\lnot (p \\land q) \\iff (\\lnot p \\lor \\lnot q)"]);return J=function(){return n},n}function K(){var n=Object(M.a)(["re^{i\theta} = r(cos\theta + isin\theta)"],["re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)"]);return K=function(){return n},n}function X(){var n=Object(M.a)(["\binom{n}{k} = \frac{n!}{k!(n-k)!}"],["\\binom{n}{k} = \\frac{n!}{k!(n-k)!}"]);return X=function(){return n},n}function Y(){var n=Object(M.a)(["V = \frac{4}{3}pi r^3"],["V = \\frac{4}{3}\\pi r^3"]);return Y=function(){return n},n}var Z=A(Y()),Q=A(X()),nn=A(K()),en=A(J()),rn=A(H()),tn=A(U()),an=A(P()),on=A(G()),ln=A(V()),cn=A(R()),un=A(z()),fn=A($()),sn=A(W()),dn=A(T()),mn=A(N()),pn=A(L()),gn=A(q()),yn=A(I()),bn=A(B()),vn=A(F()),_n=[];var hn=Object(l.b)(function(n){return{}},function(n){return{onclick:function(){return n(E((e=function(){if(0===_n.length)for(var n in console.log("restocking"),t){var e=Math.floor(Math.random()*(1+_n.length));_n.splice(e,0,t[n])}return _n.pop()}(),document.getElementById("formulaInput").value=e,e)));var e}}})(function(n){var e=n.onclick;return i.a.createElement("div",{className:b.a.optionRandomExample},i.a.createElement("button",{onClick:e},"Random Example"))}),En=function(){return i.a.createElement("div",{className:b.a.formulaWrapper},i.a.createElement("div",{className:b.a.title},"Formula Editor (LaTeX)"),i.a.createElement("div",{className:b.a.formulaOptions},i.a.createElement(w,null),i.a.createElement(C,null),i.a.createElement(hn,null)),i.a.createElement(j,null),i.a.createElement("div",{className:b.a.formulaDisplayWrapper},i.a.createElement(S,null)))},xn=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(f.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:g.a.app},i.a.createElement("link",{rel:"text/css",href:"../node_modules/katex/dist/katex.min.css"}),i.a.createElement(En,null))}}]),e}(a.Component),On=r(7),jn={formula:"",displayMode:!0,displaySize:1.5};var Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(On.a)({},n,{formula:e.payload});case _:return Object(On.a)({},n,{displaySize:e.payload});case h:return Object(On.a)({},n,{displayMode:!n.displayMode});default:return n}},kn=Object(c.b)({formula:Dn}),Sn=Object(c.c)(kn);Object(o.render)(i.a.createElement(l.a,{store:Sn},i.a.createElement(xn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.76736d93.chunk.js.map
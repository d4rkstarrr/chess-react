(this.webpackJsonpletsplaychess=this.webpackJsonpletsplaychess||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(12),c=a.n(n),o=(a(18),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))}),l=a(13),r=a(2),d=a(5),p=a(6),h=a(4),g=a(8),b=a(7),u=(a(19),a(20),["a","b","c","d","e","f","g","h"]),v=["8","7","6","5","4","3","2","1"],j={"00":"rook_b.png",10:"knight_b.png",20:"bishop_b.png",30:"queen_b.png",40:"king_b.png",50:"bishop_b.png",60:"knight_b.png",70:"rook_b.png","01":"pawn_b.png",11:"pawn_b.png",21:"pawn_b.png",31:"pawn_b.png",41:"pawn_b.png",51:"pawn_b.png",61:"pawn_b.png",71:"pawn_b.png","07":"rook_w.png",17:"knight_w.png",27:"bishop_w.png",37:"queen_w.png",47:"king_w.png",57:"bishop_w.png",67:"knight_w.png",77:"rook_w.png","06":"pawn_w.png",16:"pawn_w.png",26:"pawn_w.png",36:"pawn_w.png",46:"pawn_w.png",56:"pawn_w.png",66:"pawn_w.png",76:"pawn_w.png"},m=a(1),f=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={},s}return Object(p.a)(a,[{key:"render",value:function(){return void 0!==j["".concat(this.props.xAxis).concat(this.props.yAxis)]?(this.props.xAxis+this.props.yAxis)%2===0?Object(m.jsx)("div",{id:"".concat(1+this.props.xAxis).concat(8-this.props.yAxis),className:"tile light-tile",children:Object(m.jsx)("div",{className:"piece",style:{backgroundImage:"url('".concat("/letsplaychess","/assets/pieces/").concat(j["".concat(this.props.xAxis).concat(this.props.yAxis)],"')")}})}):Object(m.jsx)("div",{id:"".concat(1+this.props.xAxis).concat(8-this.props.yAxis),className:"tile dark-tile",children:Object(m.jsx)("div",{className:"piece",style:{backgroundImage:"url('".concat("/letsplaychess","/assets/pieces/").concat(j["".concat(this.props.xAxis).concat(this.props.yAxis)],"')")}})}):(this.props.xAxis+this.props.yAxis)%2===0?Object(m.jsx)("div",{id:"".concat(1+this.props.xAxis).concat(8-this.props.yAxis),className:"tile light-tile"}):Object(m.jsx)("div",{id:"".concat(1+this.props.xAxis).concat(8-this.props.yAxis),className:"tile dark-tile"})}}]),a}(i.a.Component),x=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={grabbedPiece:null,chessboardLeft:null,chessboardRight:null,chessBoardTop:null,chessBoardBottom:null,validSquares:null,isMobile:null},s.grabPiece=s.grabPiece.bind(Object(h.a)(s)),s.movePiece=s.movePiece.bind(Object(h.a)(s)),s.dropPiece=s.dropPiece.bind(Object(h.a)(s)),s.dropPieceMobile=s.dropPieceMobile.bind(Object(h.a)(s)),s.handleRightClick=s.handleRightClick.bind(Object(h.a)(s)),s}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({chessboardLeft:document.getElementById("chessboard").getBoundingClientRect().left+window.pageXOffset,chessboardRight:document.getElementById("chessboard").getBoundingClientRect().right+window.pageXOffset,chessBoardTop:document.getElementById("chessboard").getBoundingClientRect().top+window.pageYOffset,chessBoardBottom:document.getElementById("chessboard").getBoundingClientRect().bottom+window.pageYOffset,isMobile:window.innerWidth<=768})}},{key:"grabPiece",value:function(e){if(2!==e.button&&e.target.classList.contains("piece")){var t=(this.state.isMobile&&"onTouchStart"===e._reactName?e.touches[0].clientX:e.clientX)+(-e.target.clientWidth/2+window.pageXOffset),a=(this.state.isMobile&&"onTouchStart"===e._reactName?e.touches[0].clientY:e.clientY)+(-e.target.clientHeight/2+window.pageYOffset);e.target.style.position="absolute",e.target.style.left="".concat(t,"px"),e.target.style.top="".concat(a,"px"),this.getAllValidSquaresForPiece(this.getPieceTypeAndColour(e.target)[0],e.target.parentNode.id),this.setState({grabbedPiece:e})}}},{key:"getAllValidSquaresForPiece",value:function(e,t){var a=[];return this.styleToValidSquares(a,1),this.setState({validSquares:a}),a}},{key:"styleToValidSquares",value:function(e,t){if(t)for(var a=0;a<e.length;a++)document.getElementById(e[a]).classList.add("validSquare");else{for(var s=0;s<this.state.validSquares.length;s++)document.getElementById(this.state.validSquares[s]).classList.remove("validSquare");this.setState({validSquares:null})}}},{key:"movePiece",value:function(e){if(this.state.grabbedPiece){var t=this.state.isMobile&&"onTouchMove"===e._reactName?e.touches[0].clientX:e.clientX,a=this.state.isMobile&&"onTouchMove"===e._reactName?e.touches[0].clientY:e.clientY,s=window.pageXOffset,i=window.pageYOffset,n=e.target,c=n.clientWidth,o=n.clientHeight,l=t-c/2+window.pageXOffset,r=a-o/2+window.pageYOffset,d=this.state.grabbedPiece;this.validatePieceInsideChessboard(e,t,a,s,i,c/4,o/4)&&(d.target.style.left="".concat(l,"px"),d.target.style.top="".concat(r,"px"))}}},{key:"validatePieceInsideChessboard",value:function(e,t,a,s,i,n,c){return this.state.chessboardLeft+n<=t+s&&this.state.chessboardRight-n>=t+s&&this.state.chessBoardTop+c<=a+i&&this.state.chessBoardBottom-c>=a+i}},{key:"dropPiece",value:function(e){if(this.state.grabbedPiece){this.styleToValidSquares(null,null);var t=this.state.grabbedPiece;t.target.style.position="static";var a=this.state.isMobile&&"onTouchEnd"===e._reactName?document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY):document.elementFromPoint(e.clientX,e.clientY),s=!1;a.classList.contains("piece")&&(s=!0,a=a.parentNode),a.firstChild!==e.target&&this.validDropSquare(a,t)&&(s?(a.removeChild(a.firstChild),a.appendChild(t.target)):(e.target.parentNode.removeChild(e.target),a.appendChild(t.target))),this.setState({grabbedPiece:null})}}},{key:"dropPieceMobile",value:function(e){if(this.state.grabbedPiece){this.styleToValidSquares(null,null);var t=this.state.grabbedPiece;t.target.style.position="static";var a=document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY),s=!1;a.classList.contains("piece")&&(s=!0,a=a.parentNode),a.firstChild!==e.target&&this.validDropSquare(a,t)&&(s?(a.removeChild(a.firstChild),a.appendChild(t.target)):(e.target.parentNode.removeChild(e.target),a.appendChild(t.target))),this.setState({grabbedPiece:null})}}},{key:"validDropSquare",value:function(e,t){return!e.firstChild||!e.firstChild.classList.contains("piece")||this.getPieceTypeAndColour(e.firstChild)[1]!==this.getPieceTypeAndColour(t.target)[1]}},{key:"handleRightClick",value:function(e){e.preventDefault(),e.target.classList.contains("piece")&&(e.target.classList.contains("selected")?e.target.classList.remove("selected"):e.target.classList.add("selected"))}},{key:"getPieceTypeAndColour",value:function(e){return e.style.backgroundImage.split(".")[0].split("/").pop().split("_")}},{key:"render",value:function(){for(var e=[],t=0;t<v.length;t++)for(var a=0;a<u.length;a++)e.push(Object(m.jsx)(f,{xAxis:a,yAxis:t},"".concat(a,",").concat(t)));return Object(m.jsx)("div",{id:"chessboard-center",children:Object(m.jsx)("div",{onMouseDown:this.grabPiece,onTouchStart:this.grabPiece,onMouseMove:this.movePiece,onTouchMove:this.movePiece,onMouseUp:this.dropPiece,onTouchEnd:this.dropPiece,onContextMenu:this.handleRightClick,id:"chessboard",children:e})})}}]),a}(i.a.Component),w=(a(22),function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom",children:[Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{className:"logo-custom",src:"/letsplaychess/assets/pieces/knight_b.png",alt:"knight black"})}),Object(m.jsx)("a",{className:"nav-link navbar-brand-custom",href:"/letsplaychess",children:"LetsPlayChess"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsxs)("li",{className:"nav-item dropdown",children:[Object(m.jsx)("a",{className:"nav-link dropdown-toggle",href:".",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Username"}),Object(m.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(m.jsx)("a",{className:"dropdown-item",href:"/letsplaychess",children:"Profile"}),Object(m.jsx)("div",{className:"dropdown-divider"}),Object(m.jsx)("a",{className:"dropdown-item",href:"/letsplaychess",children:"Settings"}),Object(m.jsx)("div",{className:"dropdown-divider"}),Object(m.jsx)("a",{className:"dropdown-item",href:"/letsplaychess",children:"Logout"})]})]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"nav-link",href:"/letsplaychess/play",children:"Play!"})})]})})]})})}}]),a}(s.Component)),y=w;c.a.render(Object(m.jsxs)(l.a,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(x,{}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"letsplaychess/play",element:Object(m.jsx)(x,{})})})]}),document.getElementById("root")),o()}},[[23,1,2]]]);
//# sourceMappingURL=main.678fed8b.chunk.js.map
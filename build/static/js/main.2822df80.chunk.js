(this.webpackJsonphowfaris=this.webpackJsonphowfaris||[]).push([[0],[,,,,,function(e,t,n){e.exports={Button:"Button_Button__3gFiX",HeaderButton:"Button_HeaderButton__12Cm1",FooterButton:"Button_FooterButton__3O_qb",Cross:"Button_Cross__2NXbU",SwitchBlockButton:"Button_SwitchBlockButton__J5caA",SlideshowControls:"Button_SlideshowControls__2YnxS"}},function(e,t,n){e.exports={Slideshow:"Slideshow_Slideshow__3YDFS",SlideshowBox:"Slideshow_SlideshowBox__1hFFY",SlideshowControls:"Slideshow_SlideshowControls__2ziRq",Active:"Slideshow_Active__2_1Kt"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH",LogoRotating:"Logo_LogoRotating__2tVV7",rotate:"Logo_rotate__34v4t"}},function(e,t,n){e.exports={RadioInput:"RadioInput_RadioInput__1l2h1",Selected:"RadioInput_Selected__zjyf1"}},function(e,t,n){e.exports={InfoBlockHover:"InfoBlock_InfoBlockHover__jAeHS",InfoBlockStatic:"InfoBlock_InfoBlockStatic__2udLo"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN",CloseButton:"Modal_CloseButton__JfngM"}},,,function(e,t,n){e.exports={App:"App_App__16ZpL"}},function(e,t,n){e.exports={Footer:"Footer_Footer__10YAK"}},function(e,t,n){e.exports={Header:"Header_Header__3w3i_"}},function(e,t,n){e.exports=n.p+"static/media/logoA.cecb619b.svg"},function(e,t,n){e.exports={Main:"Main_Main__3rSe0"}},function(e,t,n){e.exports={SwitchBlock:"SwitchBlock_SwitchBlock__NhiSI",Sidebar:"SwitchBlock_Sidebar__2evnB"}},function(e,t,n){e.exports={Loading:"Loading_Loading__1Bfvh"}},function(e,t,n){e.exports=n.p+"static/media/bed.07af22f0.svg"},function(e,t,n){e.exports=n.p+"static/media/bicycle.c5d27ac4.svg"},function(e,t,n){e.exports=n.p+"static/media/trolley.eeb416be.svg"},function(e,t,n){e.exports=n.p+"static/media/escooter.458abbf5.svg"},function(e,t,n){e.exports=n.p+"static/media/warriorPose.75fc27f5.svg"},function(e,t,n){e.exports=n.p+"static/media/railwayTrackGauge.f92762a2.svg"},function(e,t,n){e.exports=n.p+"static/media/door.ad4c27db.svg"},function(e,t,n){e.exports={About:"About_About__scHdH"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),c=(n(35),n(1)),l=n(2),s=n(4),u=n(3),d=n(13),p=n.n(d),h=n(14),m=n.n(h),f=n(5),g=n.n(f),_=function(e){var t=[g.a.Button];switch(e.buttonStylingType){case"cross":t.push(g.a.Cross);break;case"header":t.push(g.a.HeaderButton);break;case"footer":t.push(g.a.FooterButton);break;case"switchBlock":t.push(g.a.SwitchBlockButton);break;case"slideshowControls":t[0]=g.a.SlideshowControls}return o.a.createElement("button",{type:"button",className:t.join(" "),onClick:e.clickHandler},e.buttonText)},b=function(){return o.a.createElement("footer",{className:m.a.Footer},o.a.createElement("a",{href:"https://github.com/larisachristie/howfaris",target:"_blank",rel:"noopener noreferrer",title:"Hire me!"},o.a.createElement(_,{buttonText:"GitHub",buttonStylingType:"footer"})))},v=n(15),k=n.n(v),B=n(7),w=n.n(B),S=n(16),E=n.n(S),y=function(e){return o.a.createElement("span",{className:e.isRotating?w.a.LogoRotating:w.a.Logo},o.a.createElement("img",{src:E.a,alt:"logo",width:e.width}))},x=function(e){return o.a.createElement("header",{className:k.a.Header},o.a.createElement(_,{buttonStylingType:"header",clickHandler:e.handleBackdrop,buttonText:"About"}),o.a.createElement(y,{isRotating:!1,width:"60vw"}))},C=n(17),I=n.n(C),H=n(18),j=n.n(H),A=n(29),N=n(8),O=n.n(N),F=n(9),L=n.n(F),T=function(e){return o.a.createElement("div",{className:e.isHovering?L.a.InfoBlockHover:L.a.InfoBlockStatic},e.isHovering?o.a.createElement("p",null,"As recommended by ",e.text):o.a.createElement("p",null,"As recommended by ",e.fullInfo.entities,".",o.a.createElement("br",null),"The distance of ",e.fullInfo.distanceM," equals roughly to ",e.fullInfo.distanceF,"."))},M=function(e){var t=Object(a.useState)(!1),n=Object(A.a)(t,2),r=n[0],i=n[1],c=[O.a.RadioInput];return e.currentChoice===e.radioInputLabel&&c.push(O.a.Selected),o.a.createElement("div",{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},o.a.createElement("div",{className:c.join(" ")},o.a.createElement("label",{htmlFor:e.radioInputID.split(" ").join(""),onChange:function(t){return e.changeHandler(t)}},o.a.createElement("input",{type:"radio",name:e.radioGroupName,id:e.radioInputID.split(" ").join(""),value:e.radioInputLabel}),o.a.createElement("br",null),e.radioInputLabel)),r?o.a.createElement(T,{text:e.entities,isHovering:!0}):null)},D=function(e){var t=e.options.map((function(t,n){return o.a.createElement(M,{key:n,buttonStylingType:"switchBlock",radioInputLabel:t.distanceM,radioGroupName:"dataOptions",radioInputID:t.distanceM,changeHandler:e.changeHandler,currentChoice:e.currentChoice,entities:t.entities})}));return o.a.createElement("form",{className:j.a.SwitchBlock},t)},R=n(6),G=n.n(R);var P=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{id:e.id,src:e.file,alt:e.title}),o.a.createElement("h3",null,e.title))},U=n(19),Y=n.n(U),J=function(e){return o.a.createElement("div",{className:Y.a.Loading},o.a.createElement(y,{isRotating:!0,width:"200vh"}),o.a.createElement("p",null,e.loadingText))},K=n(20),q=n.n(K),z=n(21),V=n.n(z),X=n(22),W=n.n(X),Z=n(23),Q=n.n(Z),$=n(24),ee=n.n($),te=n(25),ne=n.n(te),ae=n(26),oe=n.n(ae),re=[{id:"bicycle1",file:V.a,title:"Average bicycle's wheelbase"},{id:"escooter1",file:Q.a,title:"Electric ride-share scooter",actualLength:"1.07 m"},{id:"trolley1",file:W.a,title:"Average shopping cart"}],ie=[{id:"railwayTrackGauge15",file:ne.a,title:"Standard-gauge railway, in use in Europe, North America and Australia",actualLength:"1.43 m"},{id:"warriorPose15",file:ee.a,title:"Two outstretched arms"}],ce=[{id:"bed2",file:q.a,title:"Standard bed's length"},{id:"door2",file:oe.a,title:"Standard door's height"}];function le(e){switch(e){case"1 meter":return re;case"1.5 meters":return ie;case"2 meters":return ce;default:return[]}}var se=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={currentImage:le(e.props.currentChoice)[0]},e.helperFunctionPrevSlide=function(t,n){if(t.indexOf(n)>0){var a=t[t.indexOf(n)-1];e.setState({currentImage:a})}else e.setState({currentImage:t[t.length-1]})},e.helperFunctionNextSlide=function(t,n){if(t.indexOf(n)<t.length-1){var a=t[t.indexOf(n)+1];e.setState({currentImage:a})}else e.setState({currentImage:t[0]})},e.handlePrevSlide=function(){var t=le(e.props.currentChoice);e.helperFunctionPrevSlide(t,e.state.currentImage)},e.handleNextSlide=function(){var t=le(e.props.currentChoice);e.helperFunctionNextSlide(t,e.state.currentImage)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.currentChoice!==e.currentChoice&&this.setState({currentImage:le(this.props.currentChoice)[0]})}},{key:"render",value:function(){var e=null;return this.state.currentImage&&(e=o.a.createElement("div",{className:"".concat(G.a.SlideshowBox," ").concat(G.a.Active)},o.a.createElement(P,{id:this.state.currentImage.id,file:this.state.currentImage.file,title:this.state.currentImage.title}))),o.a.createElement(o.a.Fragment,null,e?o.a.createElement("div",{className:G.a.Slideshow},o.a.createElement(_,{buttonText:"<",buttonStylingType:"slideshowControls",clickHandler:this.handlePrevSlide}),e,o.a.createElement(_,{buttonText:">",buttonStylingType:"slideshowControls",clickHandler:this.handleNextSlide})):o.a.createElement(J,{loadingText:"Choose the distance above!"}))}}]),n}(a.Component),ue=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={options:[{distanceM:"1 meter",distanceF:"just over 3 feet",entities:"the WHO, the EU"},{distanceM:"1.5 meters",distanceF:"almost 5 feet",entities:"Australia, Germany"},{distanceM:"2 meters",distanceF:"about 6.5 feet",entities:"Canada, the UK, the US"}],currentChoice:""},e.choiceHandler=function(t){var n=t.target.value;e.setState({currentChoice:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.options.find((function(t){return t.distanceM===e.state.currentChoice}));return o.a.createElement("main",{className:I.a.Main},o.a.createElement("h1",null,"How far is... ",this.state.currentChoice,"?"),o.a.createElement(D,{options:this.state.options,currentChoice:this.state.currentChoice,changeHandler:this.choiceHandler}),this.state.currentChoice?o.a.createElement(T,{currentChoice:this.state.currentChoice,fullInfo:t,isHovering:!1}):null,o.a.createElement(se,{currentChoice:this.state.currentChoice}))}}]),n}(a.Component),de=n(27),pe=n.n(de),he=function(){return o.a.createElement("section",{className:pe.a.About},o.a.createElement("h2",null,"About this project"),o.a.createElement("p",null,"Literal physical distancing can be tough. This app visualizes the distances we're supposed to keep from each other in public spaces."))},me=n(10),fe=n.n(me),ge=n(28),_e=n.n(ge),be=function(e){return e.isBackdropDown?o.a.createElement("div",{className:_e.a.Backdrop,onClick:e.handleBackdrop}):null},ve=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.isBackdropDown!==this.props.isBackdropDown}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(be,{handleBackdrop:this.props.handleBackdrop,isBackdropDown:this.props.isBackdropDown}),o.a.createElement("div",{className:fe.a.Modal,style:{transform:this.props.isBackdropDown?"translateY(0)":"translateY(-100vh)",opacity:this.props.isBackdropDown?"1":"0"}},o.a.createElement("div",{className:fe.a.CloseButton},o.a.createElement("span",{title:"Close"},o.a.createElement(_,{buttonText:"X",buttonStylingType:"cross",clickHandler:this.props.handleBackdrop}))),this.props.children))}}]),n}(a.Component),ke=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isBackdropDown:!1},e.backdropHandler=function(){e.setState((function(e){return{isBackdropDown:!e.isBackdropDown}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:p.a.App},o.a.createElement(x,{handleBackdrop:this.backdropHandler}),o.a.createElement(ve,{handleBackdrop:this.backdropHandler,isBackdropDown:this.state.isBackdropDown},o.a.createElement(he,{handleBackdrop:this.backdropHandler})),o.a.createElement(ue,null),o.a.createElement(b,null))}}]),n}(o.a.Component);i.a.render(o.a.createElement(ke,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.2822df80.chunk.js.map
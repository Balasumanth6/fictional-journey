(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,a,t){e.exports=t(175)},109:function(e,a,t){},172:function(e,a,t){},175:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),s=t.n(l),o=(t(108),t(109),t(21)),c=t(22),m=t(24),i=t(25),u=t(176),d=t(177),E=t(178),h=t(179),f=t(180),p=t(181),g=function(){return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("span",{className:"fa fa-spin fa-cog fa-3x fa-fw "}," "),r.a.createElement("br",null),r.a.createElement("p",null," Loading ... "))},b="https://ris-confu-default-rtdb.firebaseio.com/",N=t(31);function v(e){var a=e.item,t=e.isLoading,n=e.errmess;return t?r.a.createElement(g,null):n?r.a.createElement("h4",null," ",n," "):r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement("h5",null,r.a.createElement(h.a,null," ",a.name," ")),a.designation?r.a.createElement("h6",null,r.a.createElement(f.a,null,a.designation)):null,r.a.createElement(p.a,null," ",a.description," "))))}var y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.dish,isLoading:e.dishesLoading,errmess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.promotion,isLoading:e.promosLoading,errmess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(v,{item:e.leader,isLoading:e.leadersLoading,errmess:e.leadersErrMess}))),r.a.createElement("br",null))},w=t(182),O=t(183),L=t(184),k=t(6);function M(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(k.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",object:!0,src:b+a.image,alt:a.name}),r.a.createElement(w.a,null,r.a.createElement(h.a,null,r.a.createElement("h5",null," ",a.name," ")))))}var S=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 mt-4"},r.a.createElement(M,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.dishes.errmess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null," ",e.dishes.errmess," "))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"}," Home ")),r.a.createElement(L.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null," Menu "),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a),r.a.createElement("br",null),r.a.createElement("br",null))},C=t(20),j=t(185),F=t(186),x=t(187),D=t(188),A=t(7),T=function(e){return e&&e.length},I=function(e){return function(a){return!a||a.length<=e}},R=function(e){return function(a){return!a||a.length>=e}},q=function(e){return!isNaN(Number(e))},H=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},_=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(C.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"}," Home ")),r.a.createElement(L.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null," Contact Us "),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/#"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("br",{className:"d-none d-md-block"}),r.a.createElement(A.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"firstname",md:2}," First Name "),r.a.createElement(x.a,{md:10},r.a.createElement(A.Control.text,{model:".firstname",id:"firstname",className:"form-control",name:"firstname",placeholder:"Type Here",validators:{required:T,minLength:R(3),maxLength:I(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 charaters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"lastname",md:2}," Last Name "),r.a.createElement(x.a,{md:10},r.a.createElement(A.Control.text,{model:".lastname",id:"lastname",className:"form-control",name:"lastname",placeholder:"Type Here",validators:{required:T,minLength:R(3),maxLength:I(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 charaters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"telnum",md:2}," Contact Tel. "),r.a.createElement(x.a,{md:10},r.a.createElement(A.Control.text,{model:".telnum",id:"telnum",className:"form-control",name:"telnum",placeholder:"Type Here",validators:{required:T,minLength:R(3),maxLength:I(15),isNumber:q}}),r.a.createElement(A.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"email",md:2}," Email "),r.a.createElement(x.a,{md:10},r.a.createElement(A.Control.text,{model:".email",id:"email",className:"form-control",name:"email",placeholder:"Type Here",validators:{required:T,validEmail:H}}),r.a.createElement(A.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(x.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(F.a,{check:!0},r.a.createElement(A.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null," May we contact you? ")))),r.a.createElement(x.a,{md:{size:3,offset:1}},r.a.createElement(A.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null," Tel. "),r.a.createElement("option",null," Email ")))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"message",md:2}," Your Feedback "),r.a.createElement(x.a,{md:10},r.a.createElement(A.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(x.a,{md:{size:10,offset:2}},r.a.createElement(D.a,{type:"submit",color:"primary"}," Send Feedback ")))))))}}]),t}(n.Component),P=t(189),G=t(190),Y=t(203),W=t(191),B=t(192),U=function(e){return e&&e.length},K=function(e){return function(a){return!a||a.length<=e}};function z(e){var a=e.dish;return r.a.createElement("fadeTransform",{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",object:!0,src:b+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement("h4",null," ",a.name," ")),r.a.createElement(p.a,null," ",a.description," "))))}function J(e){var a=e.comments,t=e.postComment,n=e.dishId;if(null!=a){var l=a.map((function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement("p",{key:e.id},r.a.createElement("span",null," ",e.comment," "),r.a.createElement("br",null),r.a.createElement("span",null," -- ",e.author," , \xa0",new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(e.date)))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",l," "),r.a.createElement(Z,{dishId:n,postComment:t}))}return r.a.createElement("div",null," ")}var Z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(C.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(C.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{className:"ml-auto",navbar:!0},r.a.createElement(G.a,null,r.a.createElement(D.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"))),r.a.createElement(Y.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(W.a,{toggle:this.toggleModal}," Add Comment "),r.a.createElement(B.a,null,r.a.createElement(A.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"rating",xs:12}," Rating "),r.a.createElement(x.a,{xs:12},r.a.createElement(A.Control.select,{model:".rating",name:"rating",className:"form-control",validators:{required:U}},r.a.createElement("option",null,"   "),r.a.createElement("option",null," 1 "),r.a.createElement("option",null," 2 "),r.a.createElement("option",null," 3 "),r.a.createElement("option",null," 4 "),r.a.createElement("option",null," 5 ")),r.a.createElement(A.Errors,{className:"text-danger",model:".rating",show:"touched",messages:{required:"Required "}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"author",xs:12}," Your Name "),r.a.createElement(x.a,{xs:12},r.a.createElement(A.Control.text,{model:".author",id:"author",className:"form-control",name:"author",placeholder:"Type Here",validators:{required:U,minLength:(e=3,function(a){return!a||a.length>=e}),maxLength:K(15)}}),r.a.createElement(A.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 charaters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{htmlFor:"comment",xs:12}," Comment "),r.a.createElement(x.a,{xs:12},r.a.createElement(A.Control.textarea,{model:".comment",id:"comment",className:"form-control",name:"comment",rows:"6"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(x.a,null,r.a.createElement(D.a,{type:"submit",color:"primary"}," Submit ")))))))}}]),t}(n.Component);var $=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.errmess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null," ",e.errmess," "))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"}," Home ")),r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/menu"}," Menu ")),r.a.createElement(L.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null," ",e.dish.name," "),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 mt-4"},r.a.createElement(z,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 mt-4 m-1"},r.a.createElement("h4",null," Comments "),r.a.createElement(N.Stagger,{in:!0},r.a.createElement(J,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement("div",null)},Q=t(193),V=t(194),X=t(195),ee=t(196),ae=t(197),te=t(198),ne=t(199),re=t(200),le=t(99),se=t.n(le),oe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(C.a)(n)),n.toggleModal=n.toggleModal.bind(Object(C.a)(n)),n.handleLogin=n.handleLogin.bind(Object(C.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(V.a,{onClick:this.toggleNav}),r.a.createElement(X.a,{className:"mr-auto ml-3 ml-md-0"},r.a.createElement(k.b,{to:"/home"}," ",r.a.createElement("img",{src:se.a,height:"30",width:"41",alt:"Ristorante ConFusion"}))),r.a.createElement(ee.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(P.a,{navbar:!0},r.a.createElement(G.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(G.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," AboutUs")),r.a.createElement(G.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(G.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(P.a,{className:"ml-auto",navbar:!0},r.a.createElement(G.a,null,r.a.createElement(D.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in"})," Login")))))),r.a.createElement(ae.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null," Ristorante ConFusion "),r.a.createElement("p",null," We take inspiration from the worlds best cusines, and create unique food experiences. "))))),r.a.createElement(Y.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(W.a,{toggle:this.toggleModal}," Login "),r.a.createElement(B.a,null,r.a.createElement(te.a,{onSubmit:this.handleLogin},r.a.createElement(ne.a,null,r.a.createElement(F.a,{hmtlFor:"username"}," Username "),r.a.createElement(re.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(ne.a,null,r.a.createElement(F.a,{hmtlFor:"password"}," Password "),r.a.createElement(re.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(ne.a,{check:!0},r.a.createElement(F.a,{check:!0},r.a.createElement(re.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),r.a.createElement(D.a,{type:"submit",value:"submit",color:"primary"}," Login ")))))}}]),t}(n.Component);var ce=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-5 col-sm-5 offset-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-3 align-self-center"},r.a.createElement("br",{className:"d-block d-sm-none"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("br",null),r.a.createElement("br",{className:"d-none d-sm-block"}),r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},me=t(201),ie=t(202);function ue(e){var a=e.leader;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(N.Fade,{in:!0},r.a.createElement("div",{className:"row"},r.a.createElement(me.a,{left:!0,middle:!0,className:"md-2"},r.a.createElement(me.a,{object:!0,src:b+a.image,alt:a.name})),r.a.createElement(me.a,{body:!0,className:"ml-5 md-10"},r.a.createElement(me.a,{heading:!0},a.name),r.a.createElement("p",null,r.a.createElement("h6",null," ",a.designation," ")),r.a.createElement("p",null," ",a.description," "))))))}var de=function(e){var a=e.leaders.leaders.map((function(e){return r.a.createElement("div",{key:e.id,className:"container"},r.a.createElement(me.a,{tag:"li"},r.a.createElement(N.Stagger,{in:!0},r.a.createElement(ue,{leader:e}))))}));return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null))):e.leaders.errmess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null," ",e.leaders.errmess," "))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(L.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(ie.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(E.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(E.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(me.a,{list:!0},r.a.createElement("br",null),a))))},Ee=t(8),he=t(29),fe=function(){return{type:"DISHES_LOADING"}},pe=function(e){return{type:"DISHES_FAILED",payload:e}},ge=function(e){return{type:"ADD_DISHES",payload:e}},be=function(e){return{type:"COMMENTS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_COMMENTS",payload:e}},ve=function(){return{type:"PROMOS_LOADING"}},ye=function(e){return{type:"ADD_PROMOS",payload:e}},we=function(){return{type:"LEADERS_LOADING"}},Oe=function(e){return{type:"LEADERS_FAILED",payload:e}},Le=function(e){return{type:"ADD_LEADERS",payload:e}},ke=t(62),Me=t(96),Se=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(oe,null),r.a.createElement(ke.a,null,r.a.createElement(Me.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(Ee.d,null,r.a.createElement(Ee.b,{path:"/home",component:function(){return r.a.createElement(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errmess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errmess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errmess})}}),r.a.createElement(Ee.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(S,{dishes:e.props.dishes})}}),r.a.createElement(Ee.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(_,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(Ee.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement($,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errmess:e.props.dishes.errmess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errmess,postComment:e.props.postComment})}}),r.a.createElement(Ee.b,{path:"/aboutus",component:function(){return r.a.createElement(de,{leaders:e.props.leaders})}}),r.a.createElement(Ee.a,{to:"/home"})))),r.a.createElement(ce,null))}}]),t}(n.Component),Ce=Object(Ee.g)(Object(he.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(b+"comments/",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post Comments ",e.message),alert("Your Comment could not be posted! \n Error: "+e.message)}))}}(a,t,n,r))},postFeedback:function(a){return e(function(e){return function(a){var t={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};return t.date=(new Date).toISOString(),fetch(b+"feedback/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your Feedback! \n"+JSON.stringify(e))})).catch((function(e){console.log("Post Comments ",e.message),alert("Your Comment could not be posted! \n Error: "+e.message)}))}}(a))},fetchDishes:function(){return e((function(e){return e(fe(!0)),fetch(b+"dishes/").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchComments:function(){return e((function(e){return fetch(b+"comments/").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(be(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(ve(!0)),fetch(b+"promotions/").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ye(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(we(!0)),fetch(b+"leaders/").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Le(a))})).catch((function(a){return e(Oe(a.message))}))}))},resetFeedbackForm:function(){return e(A.actions.reset("feedback"))}}}))(Se)),je=(t(172),t(11)),Fe=t(30),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(je.a)({},e,{isLoading:!1,errmess:null,dishes:a.payload});case"DISHES_LOADING":return Object(je.a)({},e,{isLoading:!0,errmess:null,dishes:[]});case"DISHES_FAILED":return Object(je.a)({},e,{isLoading:!1,errmess:a.payload,dishes:[]});default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errmess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(je.a)({},e,{isLoading:!1,errmess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(je.a)({},e,{isLoading:!1,errmess:a.payload,comments:[]});case"ADD_COMMENT":console.log("Comments action is invoked!");var t=a.payload;return Object(je.a)({},e,{comments:e.comments.concat(t)});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(je.a)({},e,{isLoading:!1,errmess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(je.a)({},e,{isLoading:!0,errmess:null,promotions:[]});case"PROMOS_FAILED":return Object(je.a)({},e,{isLoading:!1,errmess:a.payload,promotions:[]});default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(je.a)({},e,{isLoading:!1,errmess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(je.a)({},e,{isLoading:!0,errmess:null,leaders:[]});case"LEADERS_FAILED":return Object(je.a)({},e,{isLoading:!1,errmess:a.payload,leaders:[]});default:return e}},Ie=t(100),Re=t(101),qe=t.n(Re),He={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",messege:""},_e=Object(Fe.createStore)(Object(Fe.combineReducers)(Object(je.a)({dishes:xe,comments:De,promotions:Ae,leaders:Te},Object(A.createForms)({feedback:He}))),Object(Fe.applyMiddleware)(Ie.a,qe.a)),Pe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(he.Provider,{store:_e},r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(Ce,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(173),t(174);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,a,t){e.exports=t.p+"static/media/logo.eb267f35.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.3e78f588.chunk.js.map
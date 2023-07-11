(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,a){e.exports=a(92)},65:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),s=a.n(r),c=(a(65),a(10)),i=a(11),m=a(13),o=a(12),u=a(28),h=a(8),d=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/login",className:"nav-link"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/register",className:"nav-link"},"Register"))),t=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/addTicket",className:"nav-link"},"AddTicket")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/tickets",className:"nav-link"},"Tickets")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/userProfile",className:"nav-link"},"Profile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"",onClick:this.logOut.bind(this),className:"nav-link"},"Logout")));return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark rounded"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample10","aria-controls":"navbarsExample10","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample10"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/",className:"nav-link"},"Home"))),localStorage.usertoken?t:e))}}]),a}(n.Component),g=Object(h.e)(d),p=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container-1"},l.a.createElement("h1",null,"Welcome to Our Website"),l.a.createElement("p",null,"Feel free to leave you concerns we will get back to you as soon as possible, thank you for the support! ."))),l.a.createElement("section",{className:"features"},l.a.createElement("div",{className:"container-1"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",null,"Ticket Creation"),l.a.createElement("p",null,"Users can create new tickets by providing details such as title, description, priority level, and category. This feature allows users to submit their support requests or issues to the support team.")),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",null,"Ticket Tracking"),l.a.createElement("p",null,"Users can track the status and progress of their submitted tickets. They can view information such as ticket number, creation date, assigned agent, current status (open, in progress, closed), and any updates or comments made by the support team.")),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("h3",null,"Ticket Management"),l.a.createElement("p",null,"Support agents can efficiently manage and prioritize tickets using this feature. They can view a list of all tickets, filter and sort them based on various criteria, assign tickets to specific agents, update ticket status, add internal notes, and communicate with users regarding ticket resolution."))))),l.a.createElement("section",{className:"testimonial"},l.a.createElement("div",{className:"container-1"},l.a.createElement("h2",null,"Testimonials"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"testimonial-card"},l.a.createElement("blockquote",null,l.a.createElement("p",null,'"I have been using the ticket support system for our company\'s IT department, and it has been a game-changer. The system makes it so easy to submit support requests, and I can track the progress of my tickets in real-time. The support team has been incredibly responsive and professional, providing timely updates and resolving my issues promptly. I highly recommend this ticket support system for efficient and reliable customer support."'),l.a.createElement("cite",null,"- John Doe")))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"testimonial-card"},l.a.createElement("blockquote",null,l.a.createElement("p",null,'"Managing customer support requests was a daunting task until we implemented the ticket support system. It has transformed our customer service operations. The system allows us to organize and prioritize tickets effectively, ensuring that no customer request goes unanswered. Our agents can collaborate seamlessly, update ticket statuses, and provide timely resolutions to our customers. The ticket support system has improved our response times and customer satisfaction. We couldn\'t be happier with the results!"'),l.a.createElement("cite",null,"- Jane Smith"))))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container-1"},l.a.createElement("p",null,"\xa9 2023 Your Company. All rights reserved."))))}}]),a}(n.Component),E=a(30),v=a(14),f=a(23),b=a.n(f),k=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={email:"",password:"",error:{}},e.onChange=e.onChange.bind(Object(v.a)(e)),e.onSubmit=e.onSubmit.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return b.a.post("users/login",{email:e.email,password:e.password}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log(e)}))}({email:this.state.email,password:this.state.password}).then((function(e){e&&t.props.history.push("/")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign in")))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={first_name:"",last_name:"",email:"",password:"",role:"",errors:{}},e.onChange=e.onChange.bind(Object(v.a)(e)),e.onSubmit=e.onSubmit.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return b.a.post("users/register",{first_name:e.first_name,last_name:e.last_name,email:e.email,password:e.password,role:e.role}).then((function(e){console.log("Registered")}))}({first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password,role:this.state.role}).then((function(e){t.props.history.push("/login")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Register"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"First name"),l.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter your first name",value:this.state.first_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Last name"),l.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter your lastname name",value:this.state.last_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register!")))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={name:"",content:"",messages:"",status:"",img:"",file:"",imagePreviewUrl:"",errors:{}},e.onChange=e.onChange.bind(Object(v.a)(e)),e.onSubmit=e.onSubmit.bind(Object(v.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(v.a)(e)),e._handleImageChange=e._handleImageChange.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"_handleSubmit",value:function(e){e.preventDefault(),console.log("handle uploading-",this.state.file),console.log("file burada")}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"onSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("img",this.state.file),t.append("name",this.state.name),t.append("content",this.state.content),t.append("messages",this.state.messages),b()({method:"post",url:"tickets/addTickets",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl;return t?l.a.createElement("img",{src:t,alt:"Preview"}):l.a.createElement("div",{className:"previewText"},"Please select an Image for Preview"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"ticket-form"},l.a.createElement("div",{className:"form-header"},l.a.createElement("h1",{className:"text-center"},"ADD TICKET")),l.a.createElement("form",{encType:"multipart/form-data",noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name",className:"mx-3"},"Ticket Name"),l.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Enter ticket name",value:this.state.name,onChange:this.onChange,name:"name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"content",className:"mx-3"},"Content"),l.a.createElement("textarea",{id:"content",name:"content",className:"form-control",rows:"2",placeholder:"Enter content",value:this.state.content,onChange:this.onChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"messages",className:"mx-3"},"Message"),l.a.createElement("textarea",{id:"messages",className:"form-control",name:"messages",rows:"2",placeholder:"Enter Message",value:this.state.messages,onChange:this.onChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"previewComponent"},l.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},l.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e._handleImageChange(t)}}),l.a.createElement("button",{className:"submitButton",type:"submit",onClick:function(t){return e._handleSubmit(t)}},"Upload Image")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),C=a(40),w=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={first_name:"",last_name:"",email:"",role:"",errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=Object(C.a)(e);console.log(t),this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email,role:t.role})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"PROFILE")),l.a.createElement("table",{className:"table col-md-6 mx-auto"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Fist Name"),l.a.createElement("td",null,this.state.first_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Name"),l.a.createElement("td",null,this.state.last_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,this.state.email)),l.a.createElement("tr",null,l.a.createElement("td",null,"role"),l.a.createElement("td",null,this.state.role))))))}}]),a}(n.Component),S=a(116),j=a(119),O=a(122),x=a(114),T=a(117),_=a(118),M=a(113),F=a(120),I=a(121),A=a(115),P=a(57),D=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getTicket=function(t){return b.a.get("tickets/getTicketAll",{}).then((function(t){e.setState({data:t.data});var a=[];return t.data.map((function(e){a.push(e.name)})),e.setState({namesData:a}),console.log(t.data),t.data})).catch((function(e){console.log(e)}))},e.editSearchTerm=function(t){if(t.target.value){e.setState({search:t.target.value});var a=e.state.data.filter((function(e){var a="".concat(e.name.toUpperCase()," ").concat(e.name.toUpperCase()," ").concat(e.name.toUpperCase()),n=t.target.value.toUpperCase();return a.indexOf(n)>-1}));e.setState({data:a})}else e.setState({search:""}),e.getTicket()},e.handleShow=function(t){return e.setState({show:!0,id:t})},e.MakeItem=function(e){return console.log(e),l.a.createElement("option",null,e)},e.state={data:[],show:!1,message:"",id:"",search:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleClose",value:function(e,t){this.setState({show:!1})}},{key:"handleAddMessage",value:function(e,t){this.addMessage(e,t),this.setState({show:!1}),this.getTicket()}},{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=Object(C.a)(e);this.getTicket(),this.setState({role:t.role})}},{key:"changeStatus",value:function(e,t){var a=this;return b.a.put("tickets/changeStatus",{id:e,status:t}).then((function(e){return a.getTicket(),e.data})).catch((function(e){console.log(e)}))}},{key:"statusFilter",value:function(e){var t=this;return b.a.post("tickets/filterStatus",{status:e}).then((function(e){return t.setState({data:e.data}),e.data})).catch((function(e){console.log(e)}))}},{key:"addMessage",value:function(e,t){var a=this;return b.a.post("tickets/addMessages",{id:e,messages:t}).then((function(e){return a.setState({data:e.data}),e.data})).catch((function(e){console.log(e)}))}},{key:"statusName",value:function(e){switch(e){case 0:return l.a.createElement("h5",null,l.a.createElement(M.a,{pill:!0,variant:"primary"},"Opening"));case 1:return l.a.createElement("h5",null,l.a.createElement(M.a,{pill:!0,variant:"danger"},"Waiting"));case 2:return l.a.createElement("h5",null,l.a.createElement(M.a,{pill:!0,variant:"success"},"Closed"));default:return l.a.createElement("h5",null,l.a.createElement(M.a,{pill:!0,variant:"primary"},"Opening"))}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},1===this.state.role?l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"ADMIN PAGE",l.a.createElement("br",null),"TICKETS")),l.a.createElement(P.a,{variant:"primary",className:"mx-1",onClick:function(){return e.statusFilter(0)}},"Opening"),l.a.createElement(P.a,{variant:"danger",className:"mx-1",onClick:function(){return e.statusFilter(1)}},"Waiting"),l.a.createElement(P.a,{variant:"success",className:"mx-1",onClick:function(){return e.statusFilter(2)}},"Closed"),l.a.createElement(P.a,{variant:"dark",className:"mx-1",onClick:function(){return e.getTicket()}},"ALL"),l.a.createElement("input",{style:{float:"right"},value:this.state.search,placeholder:"Search TicketName",type:"text",onChange:this.editSearchTerm}),l.a.createElement(x.a,{component:A.a},l.a.createElement(S.a,{size:"small","aria-label":"a dense table"},l.a.createElement(T.a,null,l.a.createElement(_.a,null,l.a.createElement(O.a,null,"TicketName"),l.a.createElement(O.a,{align:"right"},"Content"),l.a.createElement(O.a,{align:"right"},"\u0130mage"),l.a.createElement(O.a,{align:"right"},"Message"),l.a.createElement(O.a,{align:"right"},"Status"),l.a.createElement(O.a,{align:"right"},"Change Status"),l.a.createElement(O.a,{align:"right"},"Add Message"))),l.a.createElement(j.a,null,this.state.data.length>0&&this.state.data.map((function(t,a){return l.a.createElement(_.a,{key:a},l.a.createElement(O.a,{component:"th",scope:"row"},t.name),l.a.createElement(O.a,{align:"right"},t.content),l.a.createElement(O.a,{align:"right"},l.a.createElement("a",{target:"_parent",href:"http://localhost:5000/public/".concat(t.img)},l.a.createElement("img",{width:"100px",src:"http://localhost:5000/public/".concat(t.img)}))),t.messages.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,e.text),l.a.createElement("br",null))})),l.a.createElement(O.a,{align:"right"},e.statusName(t.status)),l.a.createElement(O.a,{align:"right"},l.a.createElement(F.a,null,l.a.createElement(F.a.Toggle,{size:"sm",variant:"success",id:"dropdown-basic"},"Change Status"),l.a.createElement(F.a.Menu,null,l.a.createElement(F.a.Item,{onClick:function(){return e.changeStatus(t._id,0)}},"Opening"),l.a.createElement(F.a.Item,{onClick:function(){return e.changeStatus(t._id,1)}},"Waiting"),l.a.createElement(F.a.Item,{onClick:function(){return e.changeStatus(t._id,2)}},"Closed")))),l.a.createElement(O.a,{align:"right"},"   ",l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{name:"addButton",size:"sm",variant:"primary",onClick:function(){return e.handleShow(t._id)}},"Add Message"),l.a.createElement(I.a,{show:e.state.show,onHide:function(){return e.handleClose()}},l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,null,"Add Message ")),l.a.createElement(I.a.Body,null,l.a.createElement("form",null,l.a.createElement("label",null,"Message :",l.a.createElement("input",{type:"text",name:"message",value:e.state.message,onChange:e.handleChange})))),l.a.createElement(I.a.Footer,null,l.a.createElement(P.a,{variant:"secondary",onClick:function(){return e.handleClose()}},"Close"),l.a.createElement(P.a,{variant:"primary",onClick:function(){return e.handleAddMessage(e.state.id,e.state.message)}},"Add Message"))))))}))," ")))):l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"USER PAGE",l.a.createElement("br",null),"TICKETS")),l.a.createElement(x.a,{component:A.a},l.a.createElement(S.a,{size:"small","aria-label":"a dense table"},l.a.createElement(T.a,null,l.a.createElement(_.a,null,l.a.createElement(O.a,null,"TicketName"),l.a.createElement(O.a,{align:"right"},"Content"),l.a.createElement(O.a,{align:"right"},"\u0130mage"),l.a.createElement(O.a,{align:"right"},"Message"),l.a.createElement(O.a,{align:"right"},"Status"),l.a.createElement(O.a,{align:"right"},"Add Message"))),l.a.createElement(j.a,null,this.state.data.length>0&&this.state.data.map((function(t,a){return l.a.createElement(_.a,{key:a},l.a.createElement(O.a,{component:"th",scope:"row"},t.name),l.a.createElement(O.a,{align:"right"},t.content),l.a.createElement(O.a,{align:"right"},l.a.createElement("a",{target:"_parent",href:"http://localhost:5000/public/".concat(t.img)},l.a.createElement("img",{width:"100px",src:"http://localhost:5000/public/".concat(t.img)}))),t.messages.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,e.text),l.a.createElement("br",null))})),l.a.createElement(O.a,{align:"right"},e.statusName(t.status)),l.a.createElement(O.a,{align:"right"},"   ",l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{name:"addButton",size:"sm",variant:"primary",onClick:function(){return e.handleShow(t._id)}},"Add Message"),l.a.createElement(I.a,{show:e.state.show,onHide:function(){return e.handleClose()}},l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,null,"Add Message")),l.a.createElement(I.a.Body,null,l.a.createElement("form",null,l.a.createElement("label",null,"Message :",l.a.createElement("input",{type:"text",name:"message",value:e.state.message,onChange:e.handleChange})))),l.a.createElement(I.a.Footer,null,l.a.createElement(P.a,{variant:"secondary",onClick:function(){return e.handleClose()}},"Close"),l.a.createElement(P.a,{variant:"primary",onClick:function(){return e.handleAddMessage(e.state.id,e.state.message)}},"Add Message"))))))}))," ")))))}}]),a}(n.Component),U=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdn3.devexpress.com/jslib/20.1.7/css/dx.common.css"}),l.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdn3.devexpress.com/jslib/20.1.7/css/dx.light.css"}),l.a.createElement("script",{src:"https://unpkg.com/core-js@2.4.1/client/shim.min.js"}),l.a.createElement("script",{src:"https://unpkg.com/systemjs@0.21.3/dist/system.js"}),l.a.createElement("script",{type:"text/javascript",src:"config.js"}),l.a.createElement("script",{type:"text/javascript"},"System.import('./index.js');"),l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(h.a,{exact:!0,path:"/",component:p}),l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{exact:!0,path:"/register",component:y}),l.a.createElement(h.a,{exact:!0,path:"/login",component:k}),l.a.createElement(h.a,{exact:!0,path:"/addTicket",component:N}),l.a.createElement(h.a,{exact:!0,path:"/tickets",component:D}),l.a.createElement(h.a,{exact:!0,path:"/userProfile",component:w}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.920193d7.chunk.js.map
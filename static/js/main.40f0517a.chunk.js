(window["webpackJsonphydro-health-on-demand"]=window["webpackJsonphydro-health-on-demand"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/favicon.942e51a6.png"},30:function(e,t,a){e.exports=a(52)},35:function(e,t,a){},36:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(17),o=a.n(n),i=(a(35),a(36),a(15)),l=a(12),c=a(7),m=a(8),u=a(10),d=a(9),p=a(11),h=a(13),g=Object(h.c)({accessToken:"pk.eyJ1IjoibG9vaWtpYW5zZW5nIiwiYSI6ImNqdWF3MzFrMzA2bmYzeXBkMGdkMTdsM2sifQ.SMkjjzrxv1Gwmf127YmGpA"}),v=(r.Component,function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log(this.props.num)}},{key:"render",value:function(){return s.a.createElement("div",{className:"param_"+(this.props.num<4?"upper":"lower")+"_column"},s.a.createElement("div",{className:"horseshoe_upper_wrapper"},s.a.createElement("div",{className:"horseshoe"},s.a.createElement("div",{className:"radial-wrapper"},s.a.createElement("h1",{className:"param_value unit_value"+this.props.num,id:"text1"},this.props.value),s.a.createElement("h1",{className:"param_unit unit_value"+this.props.num},this.props.unit),s.a.createElement("div",{className:"radial-section radial-right-section"},s.a.createElement("div",{className:"wedge"+this.props.num})),s.a.createElement("div",{className:"radial-section radial-left-section"},s.a.createElement("div",{className:"wedge"+this.props.num})),s.a.createElement("div",{className:"marker"+this.props.num+" start"}),s.a.createElement("div",{className:"marker"+this.props.num+" end"})),s.a.createElement("div",{className:"radial-wrapper radial-progress-wrapper"},s.a.createElement("div",{className:"radial-section radial-right-section"},s.a.createElement("div",{className:"wedge"+this.props.num,id:"right1",style:{WebkitTransform:"rotateZ("+this.props.right_degree+"deg)",transform:"rotateZ("+this.props.right_degree+"deg)"}})),s.a.createElement("div",{className:"radial-section radial-left-section"},s.a.createElement("div",{className:"wedge"+this.props.num,id:"left1",style:{WebkitTransform:"rotateZ("+this.props.left_degree+"deg)",transform:"rotateZ("+this.props.left_degree+"deg)"}})),s.a.createElement("div",{className:"marker"+this.props.num+" start"}),s.a.createElement("div",{className:"marker"+this.props.num+" end",id:"marker1",style:{WebkitTransform:"rotateZ("+this.props.marker_degree+"deg)",transform:"rotateZ("+this.props.marker_degree+"deg)"}}))),s.a.createElement("h1",{className:"param_title"},this.props.param)))}}]),t}(r.Component)),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={param:["Conductivity","Dissolved Oxygen","Total Dissolved Solids","Turbidity","pH","Temperature"],unit:["\u03bcS","mg/L","mg/L","NTU","","\u2103"],isLoading:!0,response:[],values:{conductivity:{marker:0,left:0,right:0,oldValue:50},oxygen:{marker:0,left:0,right:0,oldValue:50},tds:{marker:0,left:0,right:0,oldValue:50},turbidity:{marker:0,left:0,right:0,oldValue:50},ph:{marker:0,left:0,right:0,oldValue:50},temperature:{marker:0,left:0,right:0,oldValue:50}}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.get_xpand()}},{key:"render",value:function(){return this.state.isLoading?s.a.createElement("div",null,"Loading Data"):s.a.createElement("div",null,s.a.createElement("div",{className:"monitor_status_bar"},s.a.createElement("h2",{className:"page-header"},"Monitor Parameter Value"),s.a.createElement("div",{className:"upper_status_bar"},s.a.createElement(v,{num:"1",param:this.state.param[0],unit:this.state.unit[0],value:this.state.response[0].conductivity,marker_degree:this.state.values.conductivity.marker,left_degree:this.state.values.conductivity.left,right_degree:this.state.values.conductivity.right}),s.a.createElement(v,{num:"2",param:this.state.param[1],unit:this.state.unit[1],value:this.state.response[0].oxygen,marker_degree:this.state.values.oxygen.marker,left_degree:this.state.values.oxygen.left,right_degree:this.state.values.oxygen.right}),s.a.createElement(v,{num:"3",param:this.state.param[2],unit:this.state.unit[2],value:this.state.response[0].tds,marker_degree:this.state.values.tds.marker,left_degree:this.state.values.tds.left,right_degree:this.state.values.tds.right})),s.a.createElement("div",{className:"lower_status_bar"},s.a.createElement(v,{num:"4",param:this.state.param[3],unit:this.state.unit[3],value:this.state.response[0].turbidity,marker_degree:this.state.values.turbidity.marker,left_degree:this.state.values.turbidity.left,right_degree:this.state.values.turbidity.right}),s.a.createElement(v,{num:"5",param:this.state.param[4],unit:this.state.unit[4],value:this.state.response[0].ph,marker_degree:this.state.values.ph.marker,left_degree:this.state.values.ph.left,right_degree:this.state.values.ph.right}),s.a.createElement(v,{num:"6",param:this.state.param[5],unit:this.state.unit[5],value:this.state.response[0].temperature,marker_degree:this.state.values.temperature.marker,left_degree:this.state.values.temperature.left,right_degree:this.state.values.temperature.right}))))}},{key:"changeProgressDial",value:function(e,t){if(t<=66){e.right=-181,e.oldValue>66&&(e.right=-181,e.marker=0);var a=-Math.abs(180-Math.round(2.7*t));e.left=a+1,e.marker=a}else{e.oldValue<=66&&(e.left=0,e.marker=0);var r=-90-2.7*(100-t);e.right=r,e.marker=180+r}return e.oldValue=t,e}},{key:"get_xpand",value:function(e,t){var a=this;fetch("https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/applicationmgt/authenticate",{headers:{"X-Secret":"UmNvalVjX09Td2JtY0NHTE9ST3AyNFdpbUdrYTpyTXRQaVNOVzNsTEhHaEREWDZSbFRmYjM0bVVh","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(r){a.xpandGetJWT(r.access_token,e,t)}))}},{key:"xpandGetJWT",value:function(e,t,a,r){var s=this;fetch("https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/usermgt/v1/authenticate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify({username:"utmgroup02@noreply.com",password:"teamh2o"})}).then((function(e){return e.json()})).then((function(a){s.xpandGetData(a["X-IoT-JWT"],e,t,r)}))}},{key:"xpandGetData",value:function(e,t,a,r){var s=this;fetch("https://cors-anywhere.herokuapp.com/https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?eventName=Try&deviceIds=16492&noOfEvents=7&zoneId=Asia%2FKuala_Lumpur",{headers:{Authorization:"Bearer "+t,"X-IoT-JWT":e}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e[16492][0]);var t=s.state.values;console.log("temp",t),t.conductivity=s.changeProgressDial(s.state.values.conductivity,e[16492][0].conductivity/6e3*100),t.oxygen=s.changeProgressDial(s.state.values.oxygen,e[16492][0].oxygen/8.8*100),t.tds=s.changeProgressDial(s.state.values.tds,e[16492][0].tds/3500*100),t.turbidity=s.changeProgressDial(s.state.values.turbidity,e[16492][0].turbidity/50*100),t.ph=s.changeProgressDial(s.state.values.ph,(e[16492][0].ph-5)/9*100),t.temperature=s.changeProgressDial(s.state.values.temperature,(e[16492][0].temperature-16)/24*100),s.setState({values:t,response:e[16492],isLoading:!1})}))}}]),t}(r.Component),b=a(6),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{border:"2px "+this.props.borderColor+" solid",color:this.props.textColor,margin:"1vh 2.5vw"}},s.a.createElement("h4",null,this.props.text),s.a.createElement("h4",null,this.props.count))}}]),t}(r.Component),E=Object(h.c)({accessToken:"pk.eyJ1IjoibG9vaWtpYW5zZW5nIiwiYSI6ImNqdWF3MzFrMzA2bmYzeXBkMGdkMTdsM2sifQ.SMkjjzrxv1Gwmf127YmGpA"}),k=[103.6715,1.5177],x=[7],j=function(){var e=Object(l.e)(),t=Object(r.useState)({location:[{lat:1.5177,lon:103.6715,name:"JB Sutera Mall",type:"scattermapbox",mode:"markers",state:"Safe",response:[]},{lat:3.172788,lon:101.719556,name:"5G Ericsson KL",type:"scattermapbox",mode:"markers",state:"",response:[]},{lat:1.555145,lon:103.63764,name:"UTM JB Lake",type:"scattermapbox",mode:"markers",state:"Safe"},{lat:1.460468,lon:103.940487,name:"Sungai Kim Kim",type:"scattermapbox",mode:"markers",state:"Safe"},{lat:3.828111,lon:103.265507,name:"Sungai Tiram",type:"scattermapbox",mode:"markers",state:"Safe"},{lat:2.892086,lon:101.68903,name:"Sungai Langat",type:"scattermapbox",mode:"markers",state:"Safe"},{lat:3.496129,lon:102.912493,name:"Sungai Pahang",type:"scattermapbox",mode:"markers",state:"Extremely Polluted"},{lat:2.235268,lon:102.256568,name:"Sungai Malacca",type:"scattermapbox",mode:"markers",state:"Polluted"},{lat:4.370342,lon:101.072384,name:"Sungai Kinta",type:"scattermapbox",mode:"markers",state:"Polluted"}]}),a=Object(b.a)(t,2),n=a[0],o=(a[1],Object(r.useState)(!1)),i=Object(b.a)(o,2),c=i[0],m=i[1],u=Object(r.useState)(""),d=Object(b.a)(u,2),p=(d[0],d[1],Object(r.useState)([])),g=Object(b.a)(p,2),v=(g[0],g[1],Object(r.useState)(0)),f=Object(b.a)(v,2),j=f[0],_=(f[1],Object(r.useState)(0)),O=Object(b.a)(_,2),w=O[0],S=(O[1],Object(r.useState)(0)),N=Object(b.a)(S,2),T=N[0],M=(N[1],Object(r.useState)(0)),C=Object(b.a)(M,2),L=C[0];C[1];Object(r.useEffect)((function(){console.log(typeof n)}),[]);var W={width:"33.33%"},z={fontFamily:"Comic Sans MS",fontSize:"1em",textAlign:"left",paddingLeft:"1.5em"};return j?s.a.createElement("div",null,"Loading Data..."):s.a.createElement("div",null,s.a.createElement("h3",{style:z},"Number of river spot according to the pollution level"),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("div",{style:W},s.a.createElement(y,{textColor:"green",borderColor:"green",text:"SAFE",count:w})),s.a.createElement("div",{style:W},s.a.createElement(y,{textColor:"blue",borderColor:"blue",text:"POLLUTED",count:T})),s.a.createElement("div",{style:W},s.a.createElement(y,{textColor:"red",borderColor:"red",text:"EXTREMELY POLLUTED",count:L}))),s.a.createElement("h3",{style:z},"Location of devices in Malaysia"),s.a.createElement("div",{style:{border:"5px orange solid",display:"-webkit-inline-box"}},s.a.createElement(E,{zoom:x,style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"65vh",width:"95vw",display:"table-cell"},center:k,onClick:function(e,t){return console.log("onClickMap!",t.lngLat)}},c?s.a.createElement(h.b,{coordinates:[c.lon,c.lat],offset:{"bottom-left":[12,0],bottom:[0,-10],"bottom-right":[-12,-38]}},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.description}})):s.a.createElement("div",null),function(){var t=[],a="";return n.location.forEach((function(r){console.log(r.state),a="Safe"===r.state?"green":"Polluted"===r.state?"blue":"red",console.log(a),t.push(s.a.createElement(h.a,{properties:{description:"<strong>"+r.name+"</strong>"},coordinates:[r.lon,r.lat],anchor:"bottom",onClick:function(t){console.log("mouse click",t),e.push("/monitor")},onMouseEnter:function(e){console.log("mouse enter",e),m({lat:r.lat,lon:r.lon,description:"<strong>"+r.name+"</strong>"})},onMouseLeave:function(e){console.log("mouse leave",e),m(!1)}},s.a.createElement("div",{style:{zIndex:1e3,width:"1em",height:"1em",backgroundColor:a,borderRadius:"50%"}})))})),console.log(t),t}())))},_=a(29),O=a.n(_);var w=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(i.a,null,s.a.createElement("div",{className:"",style:{backgroundColor:"blue",justifyContent:"flexStart !important",position:"relative",display:"flex",flexWrap:"wrap",alignItems:"center",padding:".5rem 1rem"}},s.a.createElement("div",{style:{width:"60%",color:"white",textAlign:"left",paddingLeft:"5em"}},s.a.createElement("img",{src:O.a,style:{width:"2em"},alt:"Water logo"}),s.a.createElement("span",null,"Hydro Health On-demand")),s.a.createElement("div",{style:{width:"40%"}},s.a.createElement(i.b,{className:"btn btn-success mx-2",to:"/"},"Home"),s.a.createElement(i.b,{className:"btn btn-success mx-2",to:"monitor"},"Monitor"))),s.a.createElement(l.a,{exact:!0,path:"/",component:j}),s.a.createElement(l.a,{path:"/monitor",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50),a(51);o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.40f0517a.chunk.js.map
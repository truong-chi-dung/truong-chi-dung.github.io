(this["webpackJsonptruong-chi-dung.github.io"]=this["webpackJsonptruong-chi-dung.github.io"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/close.5d73447f.svg"},22:function(e,t,a){e.exports=a.p+"static/media/check.5dc41d67.svg"},23:function(e,t,a){e.exports=a.p+"static/media/add.5b875795.svg"},31:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/heart.15aff7cb.svg"},45:function(e,t,a){e.exports=a.p+"static/media/heart-filled.1dc208da.svg"},46:function(e,t,a){e.exports=a.p+"static/media/pen.f6baaf74.svg"},47:function(e,t,a){e.exports=a.p+"static/media/trash-bin.f4b0a28b.svg"},48:function(e,t,a){e.exports=a.p+"static/media/play.50c5aad9.svg"},51:function(e,t,a){e.exports=a.p+"static/media/back.c37b3ba6.svg"},53:function(e,t,a){e.exports=a(82)},58:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(43),r=a.n(s),l=(a(58),a(3)),c=a(4),o=a(6),m=a(5),d=a(7),p=a(20),h=a(15),u=a(21),g=a.n(u),f=(a(31),a(22)),b=a.n(f),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.editItem(a.state),a.props.handleClose()},a.state={nasaId:"",title:"",description:"",mediaType:"",imgUrl:"",fileUrl:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({nasaId:this.props.item._id,title:this.props.item.title,description:this.props.item.description,mediaType:this.props.item.mediaType,imgUrl:this.props.item.imgUrl,fileUrl:this.props.item.fileUrl})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props.show?"modal display-block":"modal display-none";return n.a.createElement("div",{className:e},n.a.createElement("div",{className:"modal-main"},n.a.createElement("h2",{className:"modal-header"},"Edit"),n.a.createElement("img",{onClick:this.props.handleClose,className:"close",src:g.a,alt:"close"}),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"title-label",htmlFor:"title-input"},"Title"),n.a.createElement("input",{className:"input",name:"title",id:"title-input",type:"text",value:this.state.title,onChange:this.handleChange})),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"description-label",htmlFor:"description-input"},"Description"),n.a.createElement("input",{name:"description",id:"description-input",value:this.state.description,onChange:this.handleChange})),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"media-label",htmlFor:"media-input"},"Type"),n.a.createElement("select",{name:"mediaType",id:"media-input"},n.a.createElement("option",{value:this.state.mediaType,onChange:this.handleChange},this.state.mediaType))),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"img-label",htmlFor:"img-input"},"Link preview image url:"),n.a.createElement("input",{name:"imgUrl",id:"img-input",type:"text",value:this.state.imgUrl,onChange:this.handleChange})),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"file-label",htmlFor:"file-input"},"Link file url:"),n.a.createElement("input",{name:"fileUrl",id:"file-input",type:"text",value:this.state.fileUrl,onChange:this.handleChange})),n.a.createElement("div",{className:"button-box"},n.a.createElement("button",{type:"submit",className:"save-btn",style:{flex:"1"}},n.a.createElement("img",{className:"checkimg",src:b.a,alt:"check-img"}),"Save")))))}}]),t}(n.a.Component),E=a(44),y=a.n(E),N=a(45),C=a.n(N),k=a(46),O=a.n(k),j=a(47),I=a.n(j),U=a(48),_=a.n(U);var w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showModal=function(){a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.state={show:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:this.props.item.fileUrl},n.a.createElement("div",{className:"play-btn"},n.a.createElement("img",{className:"playimg",src:_.a,alt:"play_button"})),n.a.createElement("img",{className:"video",alt:this.props.item._id,src:this.props.item.imgUrl})),n.a.createElement("div",{className:"author"},this.props.item.photographer,n.a.createElement("p",{className:"datecreated"},this.props.item.dateCreated)),n.a.createElement("div",{className:"title"},this.props.item.title),n.a.createElement("div",{className:"description"},function(e,t){try{return e.length<=t?e:e.slice(0,t)+"..."}catch(a){console.error("Failed to truncate string: ".concat(a))}}(this.props.item.description,100)),n.a.createElement("div",null,n.a.createElement("button",{className:"favorite",onClick:this.props.markFavorite.bind(this,this.props.item._id)},!this.props.item.favorite&&n.a.createElement("img",{src:y.a,alt:"favorite_button"}),this.props.item.favorite&&n.a.createElement("img",{src:C.a,alt:"favorite_button"})),n.a.createElement("button",{className:"edit",onClick:this.showModal},n.a.createElement("img",{src:O.a,alt:"edit_button"})),n.a.createElement("button",{className:"delete",onClick:this.props.deleteItem.bind(this,this.props.item._id)},n.a.createElement("img",{src:I.a,alt:"delete_button"}))),n.a.createElement(v,{show:this.state.show,handleClose:this.hideModal,item:this.props.item,editItem:this.props.editItem}))}}]),t}(n.a.Component),S=a(16),x=a(23),F=a.n(x),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderItems=function(){return a.props.items.map((function(e){return n.a.createElement(w,{key:e._id,item:e,editItem:a.props.editItem,markFavorite:a.props.markFavorite,deleteItem:a.props.deleteItem})}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"nasa-collection"},"NASA Collection"),n.a.createElement(S.b,{to:"/search"},n.a.createElement("button",{className:"add"},n.a.createElement("img",{className:"addimg",src:F.a,alt:"add-img"}),"Add new item"))),n.a.createElement("div",{className:"row"},this.renderItems()))}}]),t}(n.a.Component),A=a(17),M=a.n(A),D=(a(42),a(11)),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.addItem(a.state),a.setState({redirect:!0})},a.state={nasaId:"",title:"",description:"",photographer:"",dateCreated:"",mediaType:"",imgUrl:"",fileUrl:"",redirect:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.imgUrl!==e.imgUrl&&this.setState({nasaId:this.props.nasaId,title:this.props.title,photographer:this.props.photographer,dateCreated:this.props.dateCreated,description:this.props.description,mediaType:this.props.mediaType,imgUrl:this.props.imgUrl,fileUrl:this.props.fileUrl})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){if(this.state.redirect)return n.a.createElement(D.a,{to:"/"});var e=this.props.show?"modal display-block":"modal display-none",t=this.state,a=t.title,i=t.description,s=t.mediaType,r=t.imgUrl,l=t.fileUrl;return n.a.createElement("div",{className:e},n.a.createElement("div",{className:"modal-main"},n.a.createElement("h2",{className:"modal-header"},"Edit"),n.a.createElement("img",{onClick:this.props.handleClose,className:"close",src:g.a,alt:"close"}),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"title-label",htmlFor:"title-input"},"Title"),n.a.createElement("input",{className:"input",name:"title",id:"title-input",type:"text",value:a,onChange:this.handleChange})),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"description-label",htmlFor:"description-input"},"Description"),n.a.createElement("input",{name:"description",id:"description-input",value:i,onChange:this.handleChange})),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"media-label",htmlFor:"media-input"},"Type"),n.a.createElement("select",{name:"mediaType",id:"media-input",onChange:this.handleChange},n.a.createElement("option",{value:s},s))),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"img-label",htmlFor:"img-input"},"Link preview image url:"),n.a.createElement("input",{name:"imgUrl",id:"img-input",type:"text",value:r,onChange:this.handleChange})),n.a.createElement("div",{className:"formbox"},n.a.createElement("label",{className:"file-label",htmlFor:"file-input"},"Link file url:"),n.a.createElement("input",{name:"fileUrl",id:"file-input",type:"text",value:l,onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("button",{type:"submit",className:"add-btn",style:{flex:"1"}},n.a.createElement("img",{className:"checkimg",src:b.a,alt:"check-img"}),"Add to Collection")))))}}]),t}(n.a.Component);function L(e,t){try{return e.length<=t?e:e.slice(0,t)+"..."}catch(a){console.error("Failed to truncate string: ".concat(a))}}var q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).renderModal=function(){return n.a.createElement(W,{show:a.state.show,nasaId:a.props.result.data[0].nasa_id,title:a.props.result.data[0].title,photographer:void 0!==a.props.result.data[0].photographer?a.props.result.data[0].photographer:a.props.result.data[0].media_type,dateCreated:a.props.result.data[0].date_created,description:a.props.result.data[0].description,mediaType:a.props.result.data[0].media_type,imgUrl:a.state.imgUrl[0],fileUrl:a.state.fileUrl[0],handleClose:a.hideModal,addItem:a.props.addItem})},a.showModal=function(){var e="https://images-assets.nasa.gov/".concat(a.props.result.data[0].media_type,"/").concat(a.props.result.data[0].nasa_id,"/collection.json");M.a.get(e).then((function(e){a.setState({show:!0,imgUrl:e.data.filter((function(e){return e.endsWith("~thumb.jpg")})),fileUrl:e.data.filter((function(e){switch(a.props.result.data[0].media_type){case"video":return e.endsWith(".mp4");case"image":return e.endsWith("~orig.jpg");case"audio":return e.endsWith("~orig.mp3");default:return"File url not found."}}))})})).catch((function(){a.setState({show:!0,imgUrl:"Can not get data",fileUrl:"Can not get data"})}))},a.hideModal=function(){a.setState({show:!1})},a.state={show:!1,imgUrl:"",fileUrl:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=void 0!==this.props.result.data[0].photographer?this.props.result.data[0].photographer:this.props.result.data[0].media_type,t="audio"===this.props.result.data[0].media_type;return n.a.createElement("div",{className:"col"},!t&&n.a.createElement("img",{className:"video",alt:"".concat(this.props.result.data[0].nasa_id),src:"https://images-assets.nasa.gov/".concat(this.props.result.data[0].media_type,"/").concat(this.props.result.data[0].nasa_id,"/").concat(this.props.result.data[0].nasa_id,"~thumb.jpg")}),n.a.createElement("div",{className:"author"},e,n.a.createElement("p",{className:"datecreated"},this.props.result.data[0].date_created)),n.a.createElement("div",{className:"title"},this.props.result.data[0].title),n.a.createElement("div",{className:"description"},L(this.props.result.data[0].description,100)),n.a.createElement("div",null,n.a.createElement("button",{className:"add-collection",onClick:this.showModal},n.a.createElement("img",{className:"add-collection-img",src:F.a,alt:"add_button"}),"Add to NASA Collection")),this.renderModal())}}]),t}(n.a.Component),R=a(51),B=a.n(R),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).fetchSearchResult=function(e){var t="https://images-api.nasa.gov/search?q=".concat(e);a.cancel&&a.cancel.cancel(),a.cancel=M.a.CancelToken.source(),M.a.get(t,{cancelToken:a.cancel.token}).then((function(e){var t=e.data.collection.items.length?"":"There is no result.";a.setState({results:e.data.collection.items,message:t,loading:!1})})).catch((function(e){(M.a.isCancel(e)||e)&&a.setState({loading:!1,message:"Fail to fetch data."})}))},a.handleOnInputChange=function(e){var t=e.target.value;a.setState({query:t,message:"",loading:!0},(function(){t?a.fetchSearchResult(t):a.setState({result:{}})}))},a.renderSearchResultsChild=function(){var e=a.state.results;return n.a.createElement("div",{className:"row"},e.length&&e.map((function(e){return n.a.createElement(q,{result:e,key:e.data[0].nasa_id,addItem:a.props.addItem})})))},a.renderSearchResults=function(){var e=a.state.results;if(Object.keys(e).length&&e.length)return n.a.createElement("div",{className:"row"},e.map((function(e){var t=void 0!==e.data[0].photographer?e.data[0].photographer:e.data[0].media_type,a="audio"===e.data[0].media_type;return n.a.createElement("div",{className:"col",key:e.data[0].nasa_id},!a&&n.a.createElement("img",{className:"video",alt:"".concat(e.data[0].nasa_id),src:"https://images-assets.nasa.gov/".concat(e.data[0].media_type,"/").concat(e.data[0].nasa_id,"/").concat(e.data[0].nasa_id,"~thumb.jpg")}),n.a.createElement("div",{className:"author"},t,n.a.createElement("p",{className:"datecreated"},e.data[0].date_created)),n.a.createElement("div",{className:"title"},e.data[0].title),n.a.createElement("div",{className:"description"},L(e.data[0].description,100)))})))},a.state={query:"",results:{},message:"",loading:!1},a.cancel="",a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.message,i=e.loading;return n.a.createElement("div",{className:"container"},n.a.createElement(S.b,{to:"/"},n.a.createElement("button",{className:"back"},n.a.createElement("img",{className:"backimg",src:B.a,alt:"back-img"}),"Back to Collection")),n.a.createElement("h2",{className:"heading"},"Search from NASA"),n.a.createElement("div",{className:"search-label",htmlFor:"search-input"},n.a.createElement("input",{type:"text",name:"query",value:t,id:"search-input",placeholder:"Search ...",onChange:this.handleOnInputChange})),!i&&this.renderSearchResultsChild(),n.a.createElement("p",{className:"message"},a))}}]),t}(n.a.Component),J=a(25),z=(a(81),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).editItem=function(e){a.db.collection("items").updateOne({_id:e.nasaId},{$set:{title:e.title,description:e.description,mediaType:e.mediaType,imgUrl:e.imgUrl,fileUrl:e.fileUrl}}).then(a.displayItems()).catch((function(e){return console.error("Failed to find and update document: ".concat(e))}))},a.addItem=function(e){a.db.collection("items").insertOne({_id:e.nasaId,title:e.title,photographer:e.photographer,dateCreated:e.dateCreated,description:e.description,mediaType:e.mediaType,imgUrl:e.imgUrl,fileUrl:e.fileUrl,favorite:!1}).then(a.displayItems()).catch((function(e){return console.error("Failed to create document: ".concat(e))}))},a.markFavorite=function(e){a.state.items.map((function(t){return t._id===e&&a.db.collection("items").updateOne({_id:e},{$set:{favorite:!t.favorite}}).then(a.displayItems()).catch((function(e){return console.error("Failed to find and update document: ".concat(e))})),a.displayItems()}))},a.deleteItem=function(e){a.state.items.map((function(t){return t._id===e&&a.db.collection("items").deleteOne({_id:e}).then(a.displayItems()).catch((function(e){return console.error("Failed to remove: ".concat(e))})),a.displayItems()}))},a.state={items:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.client=J.c.initializeDefaultAppClient("nasa-ohcab");var e=this.client.getServiceClient(J.b.factory,"mongodb-atlas");this.db=e.db("nasa"),this.displayItemsOnLoad()}},{key:"displayItemsOnLoad",value:function(){this.client.auth.loginWithCredential(new J.a).then(this.displayItems()).catch(console.error)}},{key:"displayItems",value:function(){var e=this;this.db.collection("items").find({},{limit:1e3}).asArray().then((function(t){e.setState({items:t})}))}},{key:"render",value:function(){var e=this;return n.a.createElement(S.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(D.b,{exact:!0,path:"/",render:function(t){return n.a.createElement(T,Object.assign({},t,{items:e.state.items,editItem:e.editItem,markFavorite:e.markFavorite,deleteItem:e.deleteItem}))}}),n.a.createElement(D.b,{path:"/search",render:function(t){return n.a.createElement($,Object.assign({},t,{db:e.db,addItem:e.addItem}))}})))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.2b505aa1.chunk.js.map
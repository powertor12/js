"undefined"!=typeof jQuery&&jQuery(function(m){m.fn.extend({faded:function(e){var v=m.extend({},m.fn.faded.defaults,e);return this.each(function(){var a,r,o,u,c,l,e,d,t,s,p,n,h,f;function g(){clearInterval(autoplay),clearTimeout(t),t=setTimeout(function(){autoplay=setInterval(function(){y("next")},o.autoplay)},o.autorestart)}function y(e,t,n){if(!p&&s){switch(p=!0,e){case"next":l=c,u===(c=+d+1)&&(c=0);break;case"prev":l=c,-1===(c=+d-1)&&(c=u-1);break;case"pagination":c=t,l=n}o.pagination&&(m(".pagination li.current",a).removeClass("current"),m(".pagination li a:eq("+c+")",a).parent().addClass("current")),o.crossfade?r.children(":eq("+c+")").css({zIndex:10}).fadeIn(o.speed,function(){r.children(":eq("+l+")").css({display:"none",zIndex:0}),m(this).css({zIndex:0}),d=c,p=!1}):r.children(":eq("+l+")").fadeOut(o.speed,function(){o.autoheight?r.animate({height:r.children(":eq("+c+")").outerHeight()},o.autoheight,function(){r.children(":eq("+c+")").fadeIn(o.speed)}):r.children(":eq("+c+")").fadeIn(o.speed),d=c,p=!1})}}m.fn.jquery<"1.3.1"||(a=m(this),r=a.children(":nth-child(1)"),o=m.metadata?m.extend({},v,a.metadata()):v,u=r.children().size(),t=d=e=l=c=0,o.random&&(m.fn.reorder=function(o){function n(){return Math.round(Math.random())-.5}return m(this).each(function(){var a=m(this),r=a.children(),e=r.length;if(1<e){r.hide();var t=new Array;for(i=0;i<e;i++)t[t.length]=i;t=t.sort(n),m.each(t,function(e,t){var n=r.eq(t),t=n.clone(!0);t.show().appendTo(a),void 0!==o&&o(n,t),n.remove()})}})},r.reorder()),r.css({position:"relative"}),r.children().css({position:"absolute",top:0,left:0,zIndex:0,display:"none"}),o.autoheight&&r.animate({height:r.children(":eq(0)").outerHeight()},o.autoheight),o.pagination&&(o.autopagination&&(a.append("<ul class="+o.pagination+"></ul>"),r.children().each(function(){m("."+o.pagination,a).append("<li><a rel="+e+' href="#" >'+(e+1)+"</a></li>"),e++})),m("."+o.pagination+" li a:eq(0)",a).parent().addClass("current"),m("."+o.pagination+" li a",a).click(function(){return f=m("."+o.pagination+" li.current a",a).attr("rel"),h=m(this).attr("rel"),f!=h&&y("pagination",h,f),o.autoplay&&g(),!1})),o.loading&&"IMG"==r.children()[0].tagName?(r.css({background:"url("+o.loadingimg+") no-repeat 50% 50%"}),n=m("img:eq(0)",r).attr("src")+"?"+(new Date).getTime(),m("img:eq(0)",r).attr("src",n).load(function(){m(this).fadeIn(o.speed,function(){s=!0})})):r.find(":eq(0)").fadeIn(o.speed,function(){s=!0}),o.bigtarget&&(r.css({cursor:"pointer"}),r.click(function(){return y("next"),o.autoplay&&(o.autorestart?g():clearInterval(autoplay)),!1})),o.autoplay&&(autoplay=setInterval(function(){y("next")},o.autoplay),g()),m("."+o.nextbtn,a).click(function(){return y("next"),o.autoplay&&(o.autorestart?g():clearInterval(autoplay)),!1}),m("."+o.prevbtn,a).click(function(){return y("prev"),o.autoplay&&(o.autorestart?g():clearInterval(autoplay)),!1}))})}}),m.fn.faded.defaults={speed:300,crossfade:!1,bigtarget:!1,loading:!1,autoheight:!1,pagination:"pagination",autopagination:!0,nextbtn:"next",prevbtn:"prev",loadingimg:!1,autoplay:!1,autorestart:!1,random:!1}});

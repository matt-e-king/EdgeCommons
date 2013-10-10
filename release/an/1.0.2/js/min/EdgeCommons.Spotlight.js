// EdgeCommons v1.0.2 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.
// Input 0
(function(g){var d=function(){};d.VERSION="1.0.0";var c=g.$,i=ModulogLog;d.open=function(a,b){try{if("image"!=a.type&&"animate"!=a.type&&"youtube"!=a.type)i.error("Error in open(). Unsupported type: "+a.type,"EdgeCommons | Spotlight");else{void 0==b&&(b=window.top.document);a.width=a.width||400;a.height=a.height||600;a.borderWidth=a.borderWidth||5;a.borderColor=a.borderColor||"#FFF";c("body",b).append('<div id="spotlight"> <div class="background"> </div> </div>');c("#spotlight .background",b).append('<div class="base"></div>');
c("#spotlight .background",b).append('<div class="close-button"></div>');c("#spotlight .close-button",b).css("margin-left",0.5*a.width-15+a.borderWidth).css("margin-top",-0.5*a.height-15);var d=c("#spotlight .base",b);d.css("width",0).css("height",0).css("margin-left",0).css("margin-top",0).css("border-width",a.borderWidth).css("border-color",a.borderColor).css("border-radius",5);d.animate({width:a.width,"margin-left":-0.5*a.width,height:a.height,"margin-top":-0.5*a.height},400,"easeOutBack",function(){c("#spotlight .content",
b).css("display","inline");c("#spotlight .fader",b).fadeOut(2E3);c("#spotlight .close-button",b).fadeIn()});d.append('<div class="content"></div>');var e=c("#spotlight .content",b),f=document.location.href.split("/");-1!=f[f.length-1].indexOf(".")&&f.pop();var j=f.join("/");switch(a.type){case "image":var h=-1==a.source.indexOf("http:")?j+"/"+a.source:a.source;e.append('<img src="'+h+'" />');break;case "animate":h=-1==a.source.indexOf("http:")?j+"/"+a.source:a.source;e.append('<iframe src="'+h+'" style="overflow: hidden; width: 100%; height: 100%; margin: auto; border: 0 none;"></iframe>');
break;case "youtube":e.append('<iframe width="'+a.width+'" height="'+a.height+'" src="http://www.youtube.com/embed/'+a.source+"?autoplay="+(a.param&&a.param.autoPlay?"1":"0")+'" frameborder="0" allowfullscreen></iframe>')}e.append('<div class="fader"></div>');c("#spotlight .fader",b);c("#spotlight .background",b).click(function(){g.Spotlight.close(a,b)});return!0}}catch(k){return i.error(k.toString()),!1}};d.close=function(a,b){void 0==b&&(b=window.top.document);c("#spotlight .content",b).remove();
c("#spotlight .close-button",b).remove();c("#spotlight .background",b).fadeOut(400);c("#spotlight .base",b).animate({width:0,"margin-left":0,height:0,"margin-top":0,opacity:0},400,"easeOutCubic",function(){c("#spotlight",b).remove()})};g.Spotlight=d})(EdgeCommons);

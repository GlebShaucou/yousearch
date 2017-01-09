var globals=function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={exports:{},id:s,loaded:!1};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var s=n(1),a=n(2),i=n(3),o=n(4),r=n(12),d=document.querySelector("body");d.appendChild(s.SearchContainer),d.appendChild(a.ResultContainer),d.appendChild(i.PaginationContainer),(0,o.eventListeners)(),(0,r.touchEventListener)()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=document.createElement("header"),s=document.createElement("form"),a=document.createElement("input"),i=document.createElement("button"),o=document.createElement("i");n.classList.add("search-container"),s.classList.add("search-form"),a.setAttribute("id","search-input"),a.setAttribute("type","text"),a.classList.add("search-input"),o.classList.add("fa"),o.classList.add("fa-search"),o.setAttribute("aria-hidden","true"),i.setAttribute("id","search-button"),i.classList.add("search-button"),s.appendChild(a),s.appendChild(i),n.appendChild(s),i.appendChild(o),i.textContent=" SEARCH",t.SearchContainer=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=document.createElement("main"),s=document.createElement("ul");n.setAttribute("id","search-results"),n.classList.add("search-results"),s.setAttribute("id","results-list"),s.classList.add("results-list"),n.appendChild(s),t.ResultContainer=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=document.createElement("footer"),s=document.createElement("ul"),a=document.createElement("p");n.classList.add("footer"),s.classList.add("pagination-bar"),s.setAttribute("id","pagination-bar"),a.classList.add("footer-info"),a.innerHTML="&copy; This WebApp was created by Gleb Shaucou special for Rolling Scopes School. All rights reserved.",n.appendChild(s),n.appendChild(a),t.PaginationContainer=n},function(e,t,n){"use strict";function s(){var e=document.querySelector("body"),t=(0,r.checkScreenWidth)();e.addEventListener("click",function(e){e.preventDefault(),"video-title"===e.target.className&&window.open(e.target.href);var n=document.querySelector("#search-results"),s=0,r="";if("search-button"===e.target.id){var d=document.querySelector("#search-input"),l=document.querySelector("#results-list"),c=document.querySelector("#pagination-bar"),u=d.value;l.style.left="0",l.innerHTML="",c.innerHTML="",(0,a.requestData)({query:u,searchType:"searchlist"})}if("page"==e.target.className){var p=document.querySelector("#results-list"),v=document.querySelector("#pagination-bar"),h=document.querySelector(".page-active"),f=+v.lastElementChild.textContent,m=+e.target.textContent,C=(m-1)*t;h.classList.toggle("page-active"),e.target.classList.toggle("page-active"),p.style.left="-"+C+"px",m===f&&(0,a.requestData)(a.Tokens)}else n.onmousedown=function(e){var t=document.querySelector("#results-list"),d=+t.style.left.slice(0,-2);s=+t.style.left.slice(0,-2),n.onmousemove=function(e){e.movementX>0?(d+=o.StyleConstants.SLIDE_SPEED,t.style.left=d+"px",r="left"):(d-=o.StyleConstants.SLIDE_SPEED,t.style.left=d+"px",r="right")},n.onmouseup=function(e){n.onmousemove=null;var o={posOfVideos:d,videosList:t,movementDirection:r,resultContainerPos:s,requestData:a.requestData,Tokens:a.Tokens};(0,i.handleSwipeEnd)(o)}}})}Object.defineProperty(t,"__esModule",{value:!0}),t.eventListeners=void 0;var a=n(5),i=n(10),o=n(7),r=n(11);t.eventListeners=s},function(e,t,n){"use strict";function s(e){var t=new XMLHttpRequest,n=void 0;f.query=e.query,n=a(e.query,e.nextPageToken),t.open("GET",n,!0),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText);f.nextPageToken=e.nextPageToken,f.prevPageToken=e.prevPageToken,i(e)}},t.send()}function a(e,t){var n="https://www.googleapis.com/youtube/v3/search",s="snippet",a="video",i=p.Constants.NUM_OF_RESULTS,o=encodeURIComponent(e);return t?n+"?key="+p.Constants.API_KEY+"&type="+a+"&part="+s+"&pageToken="+t+"&maxResults="+i+"&q="+o:n+"?key="+p.Constants.API_KEY+"&type="+a+"&part="+s+"&maxResults="+i+"&q="+o}function i(e){o(e)}function o(e){for(var t=[],n=[],s=e.items,a=0;a<s.length;a++){var i=s[a].snippet,o=s[a].id.videoId,d={title:i.title,preview:i.thumbnails.medium.url,description:i.description,author:i.channelTitle,pubDate:new Date(i.publishedAt),viewCount:0,videoLink:"https://www.youtube.com/watch?v="+o};n.push(o),t.push(d)}r({ids:n,videos:t})}function r(e){var t=new XMLHttpRequest,n=void 0;n=d(e.ids),t.open("GET",n,!0),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var n=JSON.parse(t.responseText);l({response:n,videos:e.videos})}},t.send()}function d(e){var t="https://www.googleapis.com/youtube/v3/videos",n="snippet, statistics",s=e.join(",");return t+"?key="+p.Constants.API_KEY+"&part="+n+"&id="+s}function l(e){for(var t=e.response.items,n=e.videos,s=0;s<t.length;s++)n[s].viewCount=t[s].statistics.viewCount;c(n)}function c(e){(0,h.correctResultListWidth)();for(var t=0;t<e.length;t++)(0,u.buildVideoDataContainer)(e[t]);(0,v.buildPagination)()}Object.defineProperty(t,"__esModule",{value:!0}),t.Tokens=t.requestData=void 0;var u=n(6),p=n(7),v=n(8),h=n(9),f={query:"",nextPageToken:"",prevPageToken:""};t.requestData=s,t.Tokens=f},function(e,t){"use strict";function n(e){var t=document.querySelector("#results-list"),n=document.createElement("li"),s=document.createElement("div"),a=document.createElement("img"),i=document.createElement("ul"),o=document.createElement("p"),r=document.createElement("a"),d=[],l=[],c=[],u=e.pubDate;s.classList.add("video-details"),a.classList.add("video-thumb"),a.setAttribute("src",e.preview),a.setAttribute("alt","Video Thumbnail"),i.classList.add("video-props-list"),o.classList.add("video-descr");for(var p=0;p<4;p++){var v=document.createElement("li");d.push(v)}for(var h=0;h<5;h++){var f=document.createElement("i");f.classList.add("fa"),f.setAttribute("aria-hidden","true"),l.push(f)}for(var m=0;m<3;m++){var C=document.createElement("span");c.push(C)}r.classList.add("video-title"),r.setAttribute("href",e.videoLink),r.textContent=" "+e.title,l[0].classList.add("fa-link"),l[1].classList.add("fa-eye"),l[2].classList.add("fa-calendar-check-o"),l[3].classList.add("fa-user"),c[0].classList.add("video-view-count"),c[0].textContent=" "+e.viewCount,c[1].classList.add("video-pubdate"),c[1].textContent=" "+u.getDate()+"/"+u.getMonth()+"/"+u.getFullYear()+" "+u.getHours()+":"+u.getMinutes(),c[2].classList.add("video-author"),c[2].textContent=" "+e.author,d[0].appendChild(l[0]),d[0].appendChild(r),d[1].appendChild(l[1]),d[1].appendChild(c[0]),d[2].appendChild(l[2]),d[2].appendChild(c[1]),d[3].appendChild(l[3]),d[3].appendChild(c[2]);for(var y=0;y<d.length;y++)i.appendChild(d[y]);o.textContent=e.description,s.appendChild(a),s.appendChild(i),s.appendChild(o),n.appendChild(s),t.appendChild(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.buildVideoDataContainer=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={API_KEY:"AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE",NUM_OF_RESULTS:15},s={INITIAL_RESULT_LIST_WIDTH:5440,ADDITIONAL_RESULT_LIST_WIDTH:5100,PC_PAGE_WIDTH:1360,ANDROID_PAGE_WIDTH:1020,SLIDE_SPEED:10};t.Constants=n,t.StyleConstants=s},function(e,t){"use strict";function n(){var e=document.querySelector("#pagination-bar"),t=e.childElementCount;if(t)for(var n=+e.lastElementChild.textContent,s=n+1;s<=n+3;s++){var a=document.createElement("li");a.classList.add("page"),a.textContent=s,e.appendChild(a)}else{for(var i=1;i<=3;i++){var o=document.createElement("li");o.classList.add("page"),o.textContent=i,e.appendChild(o)}e.firstElementChild.classList.add("page-active")}}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPagination=n},function(e,t,n){"use strict";function s(){var e=document.querySelector("#results-list"),t=e.style.width;t?(t=+t.slice(0,-2),t+=a.StyleConstants.ADDITIONAL_RESULT_LIST_WIDTH,e.style.width=t+"px"):(t=a.StyleConstants.INITIAL_RESULT_LIST_WIDTH,e.style.width=t+"px")}Object.defineProperty(t,"__esModule",{value:!0}),t.correctResultListWidth=void 0;var a=n(7);t.correctResultListWidth=s},function(e,t,n){"use strict";function s(e){var t=(0,a.checkScreenWidth)();if(e.posOfVideos>0)return void(e.videosList.style.left="0");if("right"===e.movementDirection){var n=document.querySelector("#pagination-bar"),s=document.querySelector(".page-active"),i=s.nextSibling,o=+n.lastElementChild.textContent,r=+i.textContent;r===o&&e.requestData(e.Tokens),i&&(s.classList.toggle("page-active"),i.classList.toggle("page-active")),e.resultContainerPos-=t,e.videosList.style.left=e.resultContainerPos+"px"}if("left"===e.movementDirection){var d=document.querySelector(".page-active"),l=d.previousSibling;l&&(d.classList.toggle("page-active"),l.classList.toggle("page-active")),e.resultContainerPos+=t,e.videosList.style.left=e.resultContainerPos+"px"}}Object.defineProperty(t,"__esModule",{value:!0}),t.handleSwipeEnd=void 0;var a=(n(7),n(11));t.handleSwipeEnd=s},function(e,t,n){"use strict";function s(){return window.screen.width<=1024?a.StyleConstants.ANDROID_PAGE_WIDTH:a.StyleConstants.PC_PAGE_WIDTH}Object.defineProperty(t,"__esModule",{value:!0}),t.checkScreenWidth=void 0;var a=n(7);t.checkScreenWidth=s},function(e,t,n){"use strict";function s(){var e=document.querySelector("#search-results"),t=document.querySelector("#results-list"),n=0,s=0,r="",d=void 0,l=void 0,c=void 0;e.addEventListener("touchstart",function(e){var a=e.changedTouches[0];n=+t.style.left.slice(0,-2),s=+t.style.left.slice(0,-2),l=a.screenX}),e.addEventListener("touchmove",function(e){var s=e.changedTouches[0];d=l,l=s.screenX,c=l-d,c>0?(n+=o.StyleConstants.SLIDE_SPEED,t.style.left=n+"px",r="left"):(n-=o.StyleConstants.SLIDE_SPEED,t.style.left=n+"px",r="right")}),e.addEventListener("touchend",function(e){var o={posOfVideos:n,videosList:t,movementDirection:r,resultContainerPos:s,requestData:a.requestData,Tokens:a.Tokens};(0,i.handleSwipeEnd)(o)})}Object.defineProperty(t,"__esModule",{value:!0}),t.touchEventListener=void 0;var a=n(5),i=n(10),o=n(7);t.touchEventListener=s}]);
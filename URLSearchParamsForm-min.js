window.onload=function(){if(document.getElementsByClassName("URLSearchParamsField").length>0){let t=document.getElementsByClassName("URLSearchParamsField");const l=window.location.search;let n=new URLSearchParams(l);for(let e of t)if("radio"==e.type||"checkbox"==e.type){let t=n.getAll(e.name);for(let l=0;l<t.length;l++)t[l]==e.value&&(document.getElementById(e.id).checked=!0)}else document.getElementById(e.id).value=n.get(e.id);for(var e=0;e<t.length;e++)t[e].onchange=function(){if("checkbox"==this.type){var e=document.getElementsByName(this.name);n.delete(this.name);for(var t=0;t<e.length;t++)e[t].checked&&n.append(this.name,e[t].value)}else 0!=this.value.length?n.set(this.name,this.value):n.delete(this.name);window.history.replaceState(null,null,"?"+n)}}};
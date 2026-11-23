(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var ck=$('jk-clock');if(ck){function c(){var d=new Date();ck.textContent='Local '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');}c();setInterval(c,20000);}
var el=$('jk-el');if(el){function e(){var m=document.documentElement.scrollHeight-innerHeight;el.textContent=Math.round((m>0?scrollY/m:0)*2400).toLocaleString('en-US');}addEventListener('scroll',e,{passive:true});e();}
var HOT=[['Hood','A hood with a stiff peak and adjusters at the back and sides turns with your head and keeps rain off your face.','Check: it fits over a hat, or a helmet if you climb.'],
 ['Main zip','A water-resistant zip, or one behind a storm flap, stops rain driving through the front. A two-way zip lets you vent from the bottom.','Check: an inner flap or garage at the chin.'],
 ['Pit zips','Zips under the arms dump heat and moisture fast on climbs without letting rain in from above.','Check: you can reach them with gloves on.'],
 ['Cuffs','Adjustable tabs seal the wrists against wind and water running down your arms.','Check: they close over gloves as well as bare wrists.'],
 ['Hem drawcord','A cord at the hem stops wind blowing up under the jacket and holds warm air in.','Check: you can tighten it with one hand.'],
 ['Chest pockets','Pockets placed high stay clear of a pack hip belt or harness, so you can still reach them.','Check: storm flaps or water-resistant zips.']];
var hs=[].slice.call(document.querySelectorAll('.jk-hot'));if(hs.length){function sh(i){hs.forEach(function(h,j){h.classList.toggle('on',i===j);h.setAttribute('aria-pressed',i===j);});var h=HOT[i];$('an-o').innerHTML='<h3>'+(i+1)+' &middot; '+h[0]+'</h3><p>'+h[1]+'</p><small>'+h[2]+'</small>';}hs.forEach(function(h,i){h.addEventListener('click',function(){sh(i);});});sh(0);}
var lt=$('lb-t');if(lt){var lw=$('lb-w'),lr=$('lb-r'),la=$('lb-a'),ls=[].slice.call(document.querySelectorAll('#lb-svg .l'));
 function lb(){var t=+lt.value,w=lw.checked,r=lr.checked,a=la.checked,f=t-(w?6:0)+(a?5:0);$('lb-to').innerHTML=t+'&deg;C';var L=[['Base layer','Merino or synthetic, close fitting.']],on=[1,0,0,0];
  if(f<14){L.push(['Mid layer',f<4?'A warm fleece or synthetic jacket.':'A light grid fleece you can vent.']);on[1]=1;}
  if(f<3||(!a&&f<8)){L.push(['Insulated jacket',f<-8?'A warm down or synthetic parka-weight jacket.':'A packable down or synthetic jacket, worn at stops.']);on[2]=1;}
  if(r||w||f<-2){L.push(['Shell',r?'A waterproof hardshell with a good hood.':w?'A windproof shell or softshell.':'A light shell to block the wind.']);on[3]=1;}
  ls.forEach(function(p,i){p.classList.toggle('on',!!on[i]);});$('lb-l').innerHTML=L.map(function(x){return '<li><b>'+x[0]+'</b>'+x[1]+'</li>';}).join('');
  $('lb-n').textContent='Feels like about '+f+'°C for your body once wind and effort are counted. Start a little cool, and carry one more layer than you think you need.';}
 [lt,lw,lr,la].forEach(function(x){x.addEventListener('input',lb);x.addEventListener('change',lb);});lb();}
var wh=$('wr-h');if(wh){var wb=$('wr-b'),rn=$('wr-rain');function wr(){var v=+wh.value,b=+wb.value,c=v<5000?['Water resistant','Fine for light showers and short trips. Expect it to wet through in steady rain.']:v<10000?['Rainproof','Handles moderate rain for a few hours. Good for town and easy walks.']:v<20000?['Waterproof','Handles heavy rain and a pack pressing on the shoulders. A solid all-round choice.']:['Storm-proof','For long days of driving rain, high winds and exposed ground.'];
 $('wr-ho').textContent=v.toLocaleString('en-US')+' mm';$('wr-col').style.height=Math.min(100,v/30000*100)+'%';var br=b>=20000?'High breathability: suits running, climbing and ski touring.':b>=10000?'Moderate breathability: suits walking and hiking at a steady pace.':'Lower breathability: best for slow walks, travel and town.';
 $('wr-o').innerHTML='<b>'+c[0]+'</b><p>'+c[1]+'</p><p>'+br+'</p>';if(!rm){var n=Math.round(6+v/30000*60),h='';for(var i=0;i<n;i++)h+='<i style="left:'+(Math.random()*100).toFixed(1)+'%;animation-duration:'+(.5+Math.random()*.6).toFixed(2)+'s;animation-delay:-'+(Math.random()*1.2).toFixed(2)+'s"></i>';rn.innerHTML=h;}}wh.addEventListener('input',wr);wb.addEventListener('change',wr);wr();}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.2});[].forEach.call(document.querySelectorAll('.jk-wp'),function(x){io.observe(x);});}else{[].forEach.call(document.querySelectorAll('.jk-wp'),function(x){x.classList.add('in');});}
})();

const LEVELS=[
  {id:1,ico:"🏠",badge:"typing",bl:"Dasar",title:"Posisi Home Row",desc:"Jari selalu kembali ke ASDF JKL; setelah menekan tombol",wpm:5,time:60,cat:"typing",
   ex:["asdf","jkl;","asdf jkl;","a s d f j k l ;","aaa sss ddd fff"],
   tip:"🖐️ Posisi jari dasar: tangan kiri di ASDF, tangan kanan di JKL;"},
  {id:2,ico:"🔡",badge:"typing",bl:"Dasar",title:"Kata Pendek",desc:"Gabungkan huruf home row jadi kata nyata",wpm:8,time:60,cat:"typing",
   ex:["aku ada","dia suka","kita juga","luka pada","aku suka dua"],
   tip:"💡 Gunakan ibu jari untuk SPASI! Jangan lihat keyboard ya!"},
  {id:3,ico:"⬆️",badge:"typing",bl:"Menengah",title:"Baris Atas QWERTY",desc:"Tambahkan Q W E R T Y U I O P",wpm:10,time:60,cat:"typing",
   ex:["the quick","your type","write out","print your","quit or write"],
   tip:"☝️ Jari telunjuk kiri jangkau R dan T, telunjuk kanan untuk Y dan U!"},
  {id:4,ico:"⬇️",badge:"typing",bl:"Menengah",title:"Baris Bawah ZXCV",desc:"Tambahkan Z X C V B N M",wpm:12,time:60,cat:"typing",
   ex:["box van","mix zero","next move","calm zone","blank zone mix"],
   tip:"👇 Jari kelingking kiri untuk Z, telunjuk untuk V dan B!"},
  {id:5,ico:"📝",badge:"typing",bl:"Mahir",title:"Kalimat Lengkap",desc:"Ketik kalimat dengan semua huruf secara lancar",wpm:15,time:90,cat:"typing",
   ex:["kita belajar mengetik dengan cepat","latihan membuat kita semakin mahir","jari bergerak di atas keyboard","fokus dan jangan lihat tangan kamu"],
   tip:"🎯 Utamakan akurasi dulu, kecepatan akan datang sendiri!"},
  {id:6,ico:"🏎️",badge:"typing",bl:"Cepat",title:"Sprint Mode",desc:"Ketik secepat mungkin! Buktikan kemampuanmu!",wpm:20,time:60,cat:"typing",
   ex:["the fast brown fox jumps","pack my box with five","sphinx of black quartz","how quickly daft jumping"],
   tip:"🚀 Waktunya buktikan kemampuanmu! Ketik secepat angin!"},
  {id:7,ico:"🐍",badge:"python",bl:"Python",title:"Hello, Python!",desc:"Kenalan dengan Python — bahasa pemrograman favoritmu!",wpm:12,time:90,cat:"python",
   ex:['print("Halo Dunia!")','print("Saya belajar Python")','print("TypeKids rocks!")'],
   tip:'🐍 print() menampilkan teks ke layar. Teks ditulis dalam tanda kutip ""',
   py:{title:"Fungsi print()",exp:"print() adalah fungsi pertama di Python. Gunakan untuk menampilkan pesan!",code:'print("Halo, dunia!")\nprint("Namaku:", "Andi")\nprint(3 + 5)',out:'Halo, dunia!\nNamaku: Andi\n8'}},
  {id:8,ico:"📦",badge:"python",bl:"Python",title:"Variabel Python",desc:"Simpan data dalam variabel!",wpm:12,time:90,cat:"python",
   ex:["nama = 'Andi'","umur = 12","tinggi = 1.55","aktif = True","print(nama, umur)"],
   tip:"📦 Variabel = kotak penyimpan data. Beri nama yang mudah diingat!",
   py:{title:"Variabel",exp:"Variabel menyimpan data. Kamu bisa menggunakannya kapan saja!",code:"nama = 'Budi'\numur = 15\nprint(nama, 'berumur', umur, 'tahun')",out:"Budi berumur 15 tahun"}},
  {id:9,ico:"🔢",badge:"python",bl:"Python",title:"Matematika Python",desc:"Python bisa menghitung! Coba berbagai operator",wpm:12,time:90,cat:"python",
   ex:["print(10 + 5)","print(20 - 8)","print(6 * 7)","print(15 / 3)","print(2 ** 8)"],
   tip:"🔢 ** artinya pangkat. 2**8 = 256. Python adalah kalkulator super!",
   py:{title:"Operator Matematika",exp:"Python bisa melakukan semua operasi matematika!",code:"print(10 + 5)   # tambah\nprint(6 * 7)    # kali\nprint(2 ** 8)   # pangkat",out:"15\n42\n256"}},
  {id:10,ico:"🔄",badge:"python",bl:"Python",title:"For Loop",desc:"Ulangi kode berkali-kali dengan for loop!",wpm:10,time:120,cat:"python",
   ex:["for i in range(5):","    print(i)","for nama in ['Ali','Budi']:","    print('Halo', nama)"],
   tip:"🔄 Indentasi (4 spasi) penting di Python! Kode di dalam loop harus menjorok!",
   py:{title:"For Loop",exp:"for loop mengulang kode. range(5) = angka 0 sampai 4!",code:"for i in range(5):\n    print('Ke-', i)\n\nfor b in ['apel','mangga']:\n    print('Saya suka', b)",out:"Ke- 0\nKe- 1\n...\nSaya suka apel"}},
  {id:11,ico:"❓",badge:"python",bl:"Python",title:"If - Else",desc:"Buat keputusan dalam program!",wpm:10,time:120,cat:"python",
   ex:["nilai = 85","if nilai >= 70:","    print('Lulus!')","else:","    print('Belajar lagi!')"],
   tip:"❓ if = jika kondisi benar. else = jika tidak. Sederhana kan?",
   py:{title:"If - Else",exp:"if/else membuat program bisa memilih antara dua aksi!",code:"nilai = 85\nif nilai >= 70:\n    print('Lulus!')\nelse:\n    print('Belajar lagi!')",out:"Lulus!"}},
  {id:12,ico:"🎓",badge:"python",bl:"Python",title:"Fungsi (def)",desc:"Buat fungsimu sendiri!",wpm:10,time:120,cat:"python",
   ex:["def sapa(nama):","    print('Halo', nama)","sapa('Andi')","sapa('Budi')","def tambah(a, b):"],
   tip:"🎓 def = define fungsi. Tulis sekali, pakai berkali-kali!",
   py:{title:"Fungsi def",exp:"Fungsi memungkinkan kamu menggunakan kode yang sama berkali-kali!",code:"def sapa(nama):\n    print('Halo,', nama + '!')\n\ndef tambah(a, b):\n    return a + b\n\nsapa('Andi')\nprint(tambah(3, 4))",out:"Halo, Andi!\n7"}},
];

let S={lvl:0,ex:0,running:false,t0:null,tI:null,tC:null,correct:0,errs:0,stars:[],totalStars:0,streak:0};

function load(){const p=localStorage.getItem('tk2');if(p){const d=JSON.parse(p);S.stars=d.s||[];S.totalStars=d.ts||0;S.streak=d.st||0}}
function save(){localStorage.setItem('tk2',JSON.stringify({s:S.stars,ts:S.totalStars,st:S.streak}))}
function unlocked(){let u=0;for(let i=0;i<LEVELS.length;i++){if(S.stars[i]>0)u=i+1;else break}return u}

function makeStar(){for(let i=0;i<60;i++){const el=document.createElement('div');el.className='star';el.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--r:${Math.random()};--d:${Math.random()*4}s`;document.getElementById('stars-bg').appendChild(el);}}
const FKEYS=['A','S','D','F','J','K','L',';','Q','W','E','R','T','Y','U','I'];
const FPOS=['8%:12%','82%:18%','18%:72%','72%:68%','50%:8%','4%:48%','92%:55%','35%:85%','25%:32%','60%:25%','15%:55%','78%:40%','45%:60%','65%:80%','30%:20%','55%:35%'];
function makeFloatKeys(){FKEYS.forEach((k,i)=>{const el=document.createElement('div');el.className='fkey';const[y,x]=FPOS[i].split(':');el.style.cssText=`left:${x};top:${y};--d:${i*0.35}s`;el.textContent=k;document.getElementById('home').appendChild(el);});}

function renderHome(){
  const u=unlocked();const grid=document.getElementById('level-grid');grid.innerHTML='';
  LEVELS.forEach((lv,i)=>{
    const locked=i>u,done=(S.stars[i]||0)>0,st=S.stars[i]||0;
    const d=document.createElement('div');d.className=`lcard${locked?' locked':''}${done?' done':''}`;
    d.innerHTML=`<span class="done-tick">✓</span><span class="badge ${locked?'lock':lv.badge}">${locked?'🔒 Terkunci':lv.bl}</span><span class="lcard-ico">${lv.ico}</span><div class="lcard-title">Lv.${lv.id} ${lv.title}</div><div class="lcard-desc">${lv.desc}</div><div class="lcard-stars">${st>=1?'⭐':'☆'}${st>=2?'⭐':'☆'}${st>=3?'⭐':'☆'}</div>`;
    if(!locked)d.onclick=()=>startLevel(i);
    grid.appendChild(d);
  });
  document.getElementById('st-lv').textContent=Math.min(u+1,LEVELS.length);
  document.getElementById('st-stars').textContent=S.totalStars;
  document.getElementById('st-streak').textContent=S.streak;
}

function startLevel(i){
  S.lvl=i;S.ex=0;S.running=false;S.correct=0;S.errs=0;
  clearInterval(S.tI);clearInterval(S.tC);
  const lv=LEVELS[i];showScreen('game');
  document.getElementById('glvl').textContent=`Lv.${lv.id} — ${lv.title}`;
  document.getElementById('lico').textContent=lv.ico;document.getElementById('ltitle').textContent=lv.title;document.getElementById('ldesc').textContent=lv.desc;
  document.getElementById('gWPM').textContent='0';document.getElementById('gACC').textContent='100%';document.getElementById('gSCORE').textContent='0';
  document.getElementById('kb').style.display=lv.cat==='python'?'none':'flex';
  loadEx();
}

function loadEx(){
  const lv=LEVELS[S.lvl];const text=lv.ex[S.ex];
  S.running=false;S.t0=null;S.correct=0;S.errs=0;clearInterval(S.tI);clearInterval(S.tC);
  renderText(text);resetRing(lv.time);
  const inp=document.getElementById('tinput');inp.value='';inp.disabled=true;inp.className='tinput';
  document.getElementById('pbar').style.width='0%';
  const btn=document.getElementById('btnGo');btn.disabled=false;btn.textContent='▶ Mulai';
  document.getElementById('gWPM').textContent='0';document.getElementById('gACC').textContent='100%';
  clearActive();if(lv.cat!=='python')hintKey(text[0]);
}

function renderText(text){const d=document.getElementById('tdisp');d.innerHTML=text.split('').map((c,i)=>`<span class="ch pend${i===0?' cur':''}" data-i="${i}">${c===' '?'\u00a0':c}</span>`).join('');}

function startEx(){
  const lv=LEVELS[S.lvl];S.running=true;S.t0=Date.now();S.correct=0;S.errs=0;
  const inp=document.getElementById('tinput');inp.disabled=false;inp.focus();inp.value='';
  const btn=document.getElementById('btnGo');btn.disabled=true;btn.textContent='⏳ Mengetik...';
  let rem=lv.time;updateRing(rem,lv.time);
  S.tC=setInterval(()=>{rem--;updateRing(rem,lv.time);if(rem<=0){clearInterval(S.tC);clearInterval(S.tI);finishEx(false);}},1000);
  S.tI=setInterval(()=>{if(!S.t0)return;const el=(Date.now()-S.t0)/60000;const wpm=el>0?Math.round((S.correct/5)/el):0;const tot=S.correct+S.errs;const acc=tot>0?Math.round(S.correct/tot*100):100;document.getElementById('gWPM').textContent=wpm;document.getElementById('gACC').textContent=acc+'%';document.getElementById('gSCORE').textContent=wpm*acc;},400);
}

document.addEventListener('DOMContentLoaded',()=>{
  load();makeStar();makeFloatKeys();renderHome();
  const inp=document.getElementById('tinput');
  inp.addEventListener('input',onInput);
  inp.addEventListener('keydown',e=>{
    // Tab untuk indentasi di Python
    if(e.key==='Tab'){e.preventDefault();const p=e.target.selectionStart;const v=e.target.value;e.target.value=v.slice(0,p)+'    '+v.slice(p);e.target.selectionStart=e.target.selectionEnd=p+4;onInput({target:e.target});}
    // Spasi untuk memulai latihan (jika belum berjalan)
    if(e.key===' '&&!S.running&&!inp.disabled&&document.getElementById('game').classList.contains('active')){e.preventDefault();startEx();}
  });
  // Dengarkan spasi di document juga (jika fokus di tempat lain)
  document.addEventListener('keydown',e=>{
    if(e.key===' '&&!S.running&&document.getElementById('game').classList.contains('active')){const inp=document.getElementById('tinput');if(!inp.disabled){e.preventDefault();startEx();inp.focus();}}
  });
});

function onInput(e){
  if(!S.running)return;
  const lv=LEVELS[S.lvl];const text=lv.ex[S.ex];const typed=e.target.value;
  const chars=document.querySelectorAll('#tdisp .ch');
  let ok=0,bad=0;
  chars.forEach((sp,i)=>{if(i<typed.length){if(typed[i]===text[i]){sp.className='ch ok';ok++;}else{sp.className='ch bad';bad++;}}else if(i===typed.length)sp.className='ch cur';else sp.className='ch pend';});
  S.correct=ok;S.errs=bad;
  if(typed.length<text.length){clearActive();hintKey(text[typed.length]);}
  document.getElementById('pbar').style.width=Math.round(typed.length/text.length*100)+'%';
  e.target.className='tinput '+(bad>0?'bad':'ok');
  if(typed.length>=text.length&&bad===0){clearInterval(S.tC);clearInterval(S.tI);setTimeout(()=>finishEx(true),280);}
}

function finishEx(ok){
  S.running=false;clearInterval(S.tI);clearInterval(S.tC);
  const lv=LEVELS[S.lvl];S.ex++;
  if(ok&&S.ex<lv.ex.length){setTimeout(()=>loadEx(),500);return;}
  const el=S.t0?(Date.now()-S.t0)/60000:1;const wpm=el>0?Math.round((S.correct/5)/el):0;const tot=S.correct+S.errs;const acc=tot>0?Math.round(S.correct/tot*100):100;
  showResult(wpm,acc,lv,!ok);
}

function showResult(wpm,acc,lv,failed){
  let st=0;if(acc>=90&&wpm>=lv.wpm*1.3)st=3;else if(acc>=80&&wpm>=lv.wpm)st=2;else if(acc>=65)st=1;if(failed)st=Math.max(0,st-1);
  const prev=S.stars[S.lvl]||0;if(st>prev){S.stars[S.lvl]=st;S.totalStars+=st-prev;}
  S.streak=st>0?S.streak+1:0;save();showScreen('result');
  const burst=document.getElementById('rburst'),rt=document.getElementById('rtitle'),rm=document.getElementById('rmsg');
  if(st===3){burst.textContent='🏆';rt.textContent='Luar Biasa!';rm.textContent=`Level ${lv.id} sempurna!`;confetti();}
  else if(st===2){burst.textContent='⭐';rt.textContent='Bagus Sekali!';rm.textContent='Level berhasil diselesaikan!';confetti(35);}
  else if(st===1){burst.textContent='👍';rt.textContent='Cukup Baik!';rm.textContent='Masih bisa lebih baik!';}
  else{burst.textContent='💪';rt.textContent='Jangan Menyerah!';rm.textContent='Latihan lagi, kamu pasti bisa!';}
  document.getElementById('rWPM').textContent=wpm;document.getElementById('rACC').textContent=acc+'%';
  document.getElementById('rSTARS').textContent=(st>=1?'⭐':'☆')+(st>=2?'⭐':'☆')+(st>=3?'⭐':'☆');
  let feed='';if(lv.tip)feed+=`💡 ${lv.tip}\n`;
  if(lv.cat==='python'&&lv.py){const p=lv.py;feed+=`\n📚 ${p.title}\n${p.exp}\n\n<span style="display:block;background:#07071a;border-left:3px solid var(--accent3);border-radius:6px;padding:10px 12px;margin-top:4px;font-size:12px">${pyHL(p.code)}</span>\n<span style="color:var(--accent4);font-size:12px">▶ Output:\n${p.out}</span>`;}
  document.getElementById('rfeed').innerHTML=feed;
  document.getElementById('btnNext').style.display=(S.lvl<LEVELS.length-1&&st>0)?'inline-flex':'none';
}

function pyHL(code){return code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/#[^\n]*/g,m=>`<span class="py-cm">${m}</span>`).replace(/'[^']*'/g,m=>`<span class="py-str">${m}</span>`).replace(/"[^"]*"/g,m=>`<span class="py-str">${m}</span>`).replace(/\b(def|return|if|else|elif|for|while|in|and|or|not|True|False|None|import|from|class|pass|break|continue)\b/g,m=>`<span class="py-kw">${m}</span>`).replace(/\b(print|input|range|len|int|str|float|list|dict|sum|max|min)\b/g,m=>`<span class="py-fn">${m}</span>`).replace(/\b\d+(\.\d+)?\b/g,m=>`<span class="py-num">${m}</span>`).replace(/\n/g,'<br>');}

function nextLevel(){if(S.lvl<LEVELS.length-1)startLevel(S.lvl+1);}
function replayLevel(){startLevel(S.lvl);}
function goHome(){clearInterval(S.tI);clearInterval(S.tC);renderHome();showScreen('home');}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active');s.style.display='none'});const t=document.getElementById(id);t.style.display='flex';t.classList.add('active');}
function resetRing(lim){updateRing(lim,lim);document.getElementById('ttime').textContent='—';}
function updateRing(cur,tot){const o=213.6*(1-cur/tot);const rf=document.getElementById('rfill');rf.style.strokeDashoffset=o;rf.style.stroke=cur/tot>.5?'var(--accent4)':cur/tot>.25?'var(--accent3)':'var(--accent2)';document.getElementById('ttime').textContent=cur;}
function clearActive(){document.querySelectorAll('.k.active,.k.err').forEach(k=>{k.classList.remove('active','err');});}
function hintKey(ch){if(!ch)return;const k=ch===' '?' ':ch.toLowerCase();const el=document.querySelector(`.k[data-k="${k}"]`);if(el)el.classList.add('active');}
function confetti(n=75){const cols=['#00d4ff','#ff5e78','#ffc73a','#4ecb71','#bf6aff','#ff9d5e'];for(let i=0;i<n;i++){setTimeout(()=>{const el=document.createElement('div');el.className='confp';el.style.cssText=`left:${Math.random()*100}vw;background:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.4}s;border-radius:${Math.random()>.5?'50%':'2px'}`;document.body.appendChild(el);setTimeout(()=>el.remove(),4000);},i*18);}}

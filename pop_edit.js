document.addEventListener('DOMContentLoaded', () => {

  // ===== ONBOARDING =====
  const onboardVideoBg = document.querySelector('.onboard-video-bg');
  const onboardBlur = document.querySelector('.onboard-blur-full');
  const onboardContent = document.querySelector('.onboard-content');
  const iconItems = Array.from(document.querySelectorAll('.icon-item'));
  const btnContinuar = document.getElementById('btnContinuar');
  const videosSection = document.getElementById('videos');
  const pillNav = document.getElementById('pillNav');
  const pillItems = Array.from(document.querySelectorAll('.pill-item'));

  if(onboardContent && btnContinuar){
    const originalOnboardHTML = onboardContent.innerHTML;
    let selectedRole = null;

    function markSelected(iconEl){
      iconItems.forEach(it=>it.querySelector('.pill')?.classList.remove('selected'));
      iconEl.querySelector('.pill')?.classList.add('selected');
    }

    iconItems.forEach(icon=>{
      icon.addEventListener('click', ()=>{
        selectedRole = icon.dataset.role;
        markSelected(icon);
      });
    });

    function entrarComoVisitante(){
      onboardVideoBg && (onboardVideoBg.style.display='none');
      onboardBlur && (onboardBlur.style.display='none');
      onboardContent && (onboardContent.style.display='none');
      pillNav && (pillNav.style.display='flex');
      if(videosSection){
        videosSection.style.display='flex';
        videosSection.scrollIntoView({behavior:'smooth', block:'start'});
        document.body.style.overflow='auto';
        const primerVideo = videosSection.querySelector('video');
        primerVideo && (primerVideo.muted=true, primerVideo.play().catch(()=>{}));
      }
    }

    function mostrarPortalAlumno(){
      onboardBlur && (onboardBlur.style.display='none');
      onboardContent.innerHTML=`
        <div class="title-wrapper">
          <div class="card-title">Aula Estudiante</div>
        </div>
        <div class="card-subblock portal-intro">
          <div class="card-text">Ingresa a tu cuenta memanejo ID para acceder al contenido.</div>
        </div>
        <div class="portal-form">
          <input type="email" id="portalEmail" class="card-input" placeholder="Correo electrónico" />
          <input type="text" id="portalId" class="card-input" placeholder="memanejo ID" />
          <button id="portalIngresar" class="card-btn">Ingresar</button>
          <div id="portalVolver" class="card-back" style="margin-top:12px; cursor:pointer;">
            <i class="fas fa-arrow-left"></i> Volver
          </div>
        </div>
      `;
      const portalIngresar = document.getElementById('portalIngresar');
      const portalVolver = document.getElementById('portalVolver');

      portalIngresar?.addEventListener('click', ()=>{
        const email = document.getElementById('portalEmail')?.value.trim();
        const id = document.getElementById('portalId')?.value.trim();
        if(!email||!id){
          const e = document.createElement('div');
          e.className='error-msg'; e.textContent='Completa correo e memanejo ID';
          e.style.color='salmon'; e.style.marginTop='8px';
          const prev = onboardContent.querySelector('.error-msg'); if(prev) prev.remove();
          onboardContent.querySelector('.portal-form')?.appendChild(e);
          return;
        }
        entrarComoVisitante();
      });

      portalVolver?.addEventListener('click', ()=>{
        onboardContent.innerHTML = originalOnboardHTML;
        reattachOnboardHandlers();
        onboardBlur && (onboardBlur.style.display='');
      });
    }

    function ejecutarContinuar(){
      if(!selectedRole){
        const prev = onboardContent.querySelector('.error-msg'); if(prev) prev.remove();
        const msg = document.createElement('div'); msg.className='error-msg';
        msg.textContent='Selecciona Visitante o memanejo ID antes de continuar';
        msg.style.color='#ffb4b4'; msg.style.marginTop='8px';
        onboardContent.querySelector('.card-icons')?.after(msg);
        setTimeout(()=>msg.remove(),3000);
        return;
      }
      selectedRole==='visitante'? entrarComoVisitante(): mostrarPortalAlumno();
    }

    btnContinuar.addEventListener('click', ejecutarContinuar);

    function reattachOnboardHandlers(){
      const newIconItems = Array.from(document.querySelectorAll('.icon-item'));
      const newBtn = document.getElementById('btnContinuar');
      selectedRole=null;
      newIconItems.forEach(icon=>{
        icon.addEventListener('click', ()=>{
          selectedRole = icon.dataset.role;
          document.querySelectorAll('.pill').forEach(p=>p.classList.remove('selected'));
          icon.querySelector('.pill')?.classList.add('selected');
        });
      });
      if(newBtn) newBtn.addEventListener('click', ejecutarContinuar);
    }
  }

  // ===== NOTIFICACIÓN iOS =====
  const cursosSection = document.getElementById("cursos-section");
  const notificacion = document.getElementById("ios-notificacion");
  const btnEntendido = document.getElementById("btn-entendido");
  if(cursosSection && notificacion){
    let visible=false;
    window.addEventListener('scroll',()=>{
      const rect = cursosSection.getBoundingClientRect();
      const isVisible = rect.top<window.innerHeight*0.4 && rect.bottom>window.innerHeight*0.2;
      if(isVisible&&!visible){ visible=true; notificacion.classList.add('show'); setTimeout(()=>notificacion.classList.remove('show'),12000);}
      if(!isVisible) visible=false;
    });
    btnEntendido?.addEventListener('click',()=>notificacion?.classList.remove('show'));
  }

document.addEventListener('click', e => {
  const btn = e.target.closest('.curso-btn');
  if (!btn) return;

  // Encuentra el contenedor padre inmediato
  const parentSection = btn.closest('section'); // sección completa del curso
  if (!parentSection) return;

  // Encuentra solo el acordeón correspondiente a este botón
  const accordions = parentSection.querySelectorAll('.curso-accordion');
  const rows = parentSection.querySelectorAll('.curso-row');

  let index = Array.from(rows).indexOf(btn.closest('.curso-row'));
  if(index === -1) return;

  const accordion = accordions[index]; // el acordeón que corresponde al botón

  // Cierra todos los demás acordeones dentro de la misma sección
  accordions.forEach((acc,i) => {
    if(i !== index) acc.classList.remove('active');
  });

  // Alterna el acordeón correcto
  accordion.classList.toggle('active');

  // Scroll automático
  if (accordion.classList.contains('active')) {
    setTimeout(() => {
      const rect = accordion.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const offset = window.scrollY + rect.top - (isMobile ? 120 : 220);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 200);
  }
});

  // ===== TOOLTIP =====
  document.querySelectorAll('.icon-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (!window.matchMedia('(hover: none)').matches) {
        el.classList.add('show-tooltip');
      }
    });

    el.addEventListener('mouseleave', () => {
      el.classList.remove('show-tooltip');
    });

    el.addEventListener('click', e => {
      e.stopPropagation();
      if (window.matchMedia('(hover: none)').matches) {
        document.querySelectorAll('.icon-pill.show-tooltip').forEach(t => {
          if (t !== el) t.classList.remove('show-tooltip');
        });

        el.classList.toggle('show-tooltip');
        setTimeout(() => el.classList.remove('show-tooltip'), 500);
      }
    });
  });

  // ===== SLIDER FEEDBACK =====
  const slider=document.querySelector(".feedback-slider");
  const indicators=document.querySelector(".feedback-slider-indicators");
  if(slider&&indicators){
    const items = Array.from(slider.querySelectorAll(".feedback-item"));
    const gap=40; let index=0;
    function getVisibleCount(){ const w=window.innerWidth; if(w<768)return 1; if(w<1200)return 2; return 3;}
    function buildDots(){ indicators.innerHTML=''; const visible=getVisibleCount(); const totalDots=Math.max(items.length-visible+1,1); for(let i=0;i<totalDots;i++){ const dot=document.createElement('span'); dot.classList.add('dot'); if(i===0)dot.classList.add('active'); dot.addEventListener('click',()=>{index=i; updateSlider();}); indicators.appendChild(dot);} updateSlider();}
    function updateSlider(){ const cardWidth=items[0].offsetWidth+gap; const visible=getVisibleCount(); const maxIndex=items.length-visible; index=Math.max(0,Math.min(index,maxIndex)); slider.scrollTo({left:index*cardWidth,behavior:'smooth'}); Array.from(indicators.children).forEach((d,i)=>d.classList.toggle('active',i===index)); }
    slider.addEventListener('scroll',()=>{ const cardWidth=items[0].offsetWidth+gap; const newIndex=Math.round(slider.scrollLeft/cardWidth); if(newIndex!==index){ index=newIndex; updateSlider();} });
    window.addEventListener('resize',buildDots);
    buildDots();
  }

  // ===== HAMBURGER =====
  const hamburger=document.querySelector('.hamburger');
  const nav=document.querySelector('header nav');
  hamburger?.addEventListener('click',()=>{ hamburger.classList.toggle('active'); nav?.classList.toggle('show'); });

  // ===== LIKE COUNT =====
  document.querySelectorAll('.heart-btn').forEach(btn=>{
    let likes=0;
    const icon=btn.querySelector('i');
    const count=btn.querySelector('.like-count');
    btn.addEventListener('click',()=>{
      btn.classList.toggle('active');
      if(btn.classList.contains('active')) likes++; else likes=Math.max(0,likes-1);
      count.textContent=`${likes} me gusta`;
    });
  });

});
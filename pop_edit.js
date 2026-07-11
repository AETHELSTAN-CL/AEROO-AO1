document.addEventListener('DOMContentLoaded', () => {

  // ===== ONBOARDING =====
  const onboardVideoBg = document.querySelector('.onboard-video-bg');
  const onboardDim = document.querySelector('.onboard-dim-overlay');
  const onboardContent = document.querySelector('.onboard-content');
  const loginCardGlass = document.querySelector('.login-card-glass');
  const videosSection = document.getElementById('videos');
  const pillNav = document.getElementById('pillNav');

  if (onboardContent && loginCardGlass) {
    document.body.classList.add('onboarding-activo');
    document.body.style.overflow = 'hidden';

    const originalCardHTML = loginCardGlass.innerHTML;
    let selectedRole = null;

    function entrarAlCurso() {
      document.body.classList.remove('onboarding-activo');
      document.body.style.overflow = 'auto';
      onboardVideoBg && (onboardVideoBg.style.display = 'none');
      onboardDim && (onboardDim.style.display = 'none');
      onboardContent && (onboardContent.style.display = 'none');
      pillNav && (pillNav.style.display = 'flex');
      if (videosSection) {
        videosSection.style.display = 'flex';
        videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const primerVideo = videosSection.querySelector('video');
        primerVideo && (primerVideo.muted = true, primerVideo.play().catch(() => {}));
      }
    }

    function mostrarPortalLogin(role) {
      const esNuevo = role === 'new';

      const titulo = esNuevo ? 'Nuevo Estudiante' : 'Aula Estudiante';
      const textoIntro = esNuevo
        ? 'Completa tus datos para comenzar tu proceso.'
        : 'Ingresa a tu cuenta memanejo ID para acceder al contenido.';

      const campo1 = esNuevo
        ? `<input type="text" id="portalNombre" class="card-input" placeholder="Nombre completo" />`
        : `<input type="email" id="portalEmail" class="card-input" placeholder="Correo electrónico" />`;

      const campo2 = esNuevo
        ? `<input type="email" id="portalCorreo" class="card-input" placeholder="Correo electrónico" />`
        : `<input type="text" id="portalId" class="card-input" placeholder="memanejo ID" />`;

      const textoBoton = esNuevo ? 'Comenzar' : 'Ingresar';

      loginCardGlass.innerHTML = `
        <div class="title-wrapper portal-title">
          <div class="card-title">${titulo}</div>
        </div>
        <div class="card-subblock portal-intro">
          <div class="card-text">${textoIntro}</div>
        </div>
        <div class="portal-form">
          ${campo1}
          ${campo2}
          <button id="portalIngresar" class="card-btn">${textoBoton}</button>
          <div id="portalVolver" class="card-back" style="cursor:pointer;">
            <i class="fas fa-arrow-left"></i> Volver
          </div>
        </div>
      `;
    }

    function volverAlInicio() {
      loginCardGlass.innerHTML = originalCardHTML;
      selectedRole = null;
    }

    function ejecutarContinuar() {
      if (!selectedRole) {
        const prev = loginCardGlass.querySelector('.error-msg');
        if (prev) prev.remove();
        const msg = document.createElement('div');
        msg.className = 'error-msg';
        msg.textContent = 'Selecciona Nuevo estudiante o memanejo ID antes de continuar';
        msg.style.color = '#ffb4b4';
        msg.style.marginTop = '8px';
        loginCardGlass.querySelector('.card-icons')?.after(msg);
        setTimeout(() => msg.remove(), 3000);
        return;
      }
      mostrarPortalLogin(selectedRole);
    }

    loginCardGlass.addEventListener('click', (e) => {
      const icon = e.target.closest('.icon-item');
      if (icon) {
        selectedRole = icon.dataset.role;
        loginCardGlass.querySelectorAll('.pill').forEach(p => p.classList.remove('selected'));
        icon.querySelector('.pill')?.classList.add('selected');
        console.log('Rol seleccionado:', selectedRole); // 👈 déjalo un rato para confirmar en consola
        return;
      }

      if (e.target.closest('#btnContinuar')) {
        ejecutarContinuar();
        return;
      }

      if (e.target.closest('#portalIngresar')) {
        const esNuevo = !!document.getElementById('portalNombre');
        const campoA = esNuevo
          ? document.getElementById('portalNombre')?.value.trim()
          : document.getElementById('portalEmail')?.value.trim();
        const campoB = esNuevo
          ? document.getElementById('portalCorreo')?.value.trim()
          : document.getElementById('portalId')?.value.trim();

        if (!campoA || !campoB) {
          const prev = loginCardGlass.querySelector('.error-msg');
          if (prev) prev.remove();
          const err = document.createElement('div');
          err.className = 'error-msg';
          err.textContent = 'Completa todos los campos';
          err.style.color = 'salmon';
          err.style.marginTop = '8px';
          loginCardGlass.querySelector('.portal-form')?.appendChild(err);
          return;
        }
        entrarAlCurso();
        return;
      }

      if (e.target.closest('#portalVolver')) {
        volverAlInicio();
        return;
      }
    });
  }

  // ===== resto de tu JS (notificación iOS, acordeones, tooltips, slider, hamburguesa, likes) =====
  // ... sin cambios, tal como lo tenías ...
});

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
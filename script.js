// Tab-based navigation for Grace T. Aure Portfolio
(function(){
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.getElementById('nav-list');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[data-section]');
  const logo = document.querySelector('.logo[data-section]');
  const ctaButtons = document.querySelectorAll('.btn[data-section]');
  const year = document.getElementById('year');
  
  if(year){ year.textContent = new Date().getFullYear(); }

  // Function to switch sections
  function showSection(sectionName){
    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));
    
    // Show target section
    const targetSection = document.querySelector(`section[data-section="${sectionName}"]`);
    if(targetSection){
      targetSection.classList.add('active');
      
      // Animate skill bars when Skills section is shown
      if(sectionName === 'skills'){
        setTimeout(() => {
          const skillBars = targetSection.querySelectorAll('.skill-bar__fill');
          skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = width; }, 50);
          });
        }, 100);
      }
    }
    
    // Update active nav link
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionName);
    });
    
    // Close mobile menu
    navList.classList.remove('open');
    navToggle?.setAttribute('aria-expanded','false');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Mobile menu toggle
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const open = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const section = link.dataset.section;
      if(section){
        showSection(section);
      }
    });
  });

  // Logo click
  if(logo){
    logo.addEventListener('click', (e)=>{
      e.preventDefault();
      showSection('home');
    });
  }

  // CTA button clicks
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const section = btn.dataset.section;
      if(section){
        showSection(section);
      }
    });
  });
})();

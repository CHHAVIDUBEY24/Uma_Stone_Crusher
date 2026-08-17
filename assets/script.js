// Small behavior for nav toggle & demo only
document.addEventListener('DOMContentLoaded',function(){
  const btn=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(btn&&nav){
    btn.addEventListener('click',()=>{
      const expanded=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded',!expanded);
      nav.style.display = expanded ? '' : 'block';
    });
  }
});

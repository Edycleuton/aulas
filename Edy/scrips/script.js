const $header = document.querySelector('header');
window.addEventListener('scroll',toggleHeader,false);
function toggleHeader() {
     if (window.pageYOffset >0); {
        $header.classList.remove('max-header');
        $header.classlist.add('min header');
      }
      if(window.pageYOffset == 0){
         $header.classlist.add('max header');
         $header.classlist.remove('min header');
     }
}
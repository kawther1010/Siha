document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
});

/*
t => {
  if (t.target instanceof Element) {
    const o = e(t.target);
    return (0, a.g_)((() => {}), (e => this.sendLinkClickEvent(e, ((t, e) => !("_blank" === e.target || t.metaKey || t.ctrlKey || t.shiftKey || 2 === t.which || 3 === t.which))(t, e))))(o)
  }
}
*/

function changenewest(){
  document.getElementById("btnGroupDrop1").innerHTML="Newest";
}
function changeoldest(){
  document.getElementById("btnGroupDrop1").innerHTML="Oldest";
}
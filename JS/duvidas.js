var acc = document.getElementsByClassName("abaduvida");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var painel = this.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    } 
  });
}
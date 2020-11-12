<script>
var input = document.getElementById("buttonInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("Botton").click();
  }
});

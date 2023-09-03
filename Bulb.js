 <script>
         function bulb_on(){
            document.getElementById('bulb').src='ON.png';
            setTimeout(function() {
                alert("The light is switched on");
            }, 100);
        }
        function bulb_off(){
            document.getElementById('bulb').src='OFF.png';
            setTimeout(function() {
                alert("The light is switched off");
            }, 100);
        }
    </script>

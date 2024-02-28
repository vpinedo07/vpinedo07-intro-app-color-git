$(document).ready(function(){
    updateColor();
  
    $("#redInput, #greenInput, #blueInput, #redRange, #greenRange, #blueRange").on("input", function(){
      updateColor();
    });
  
    $("#colorPicker").on("input", function(){
      var color = $(this).val();
      var rgb = hexToRgb(color);
      
      $("#redInput").val(rgb.r);
      $("#greenInput").val(rgb.g);
      $("#blueInput").val(rgb.b);
      $("#redRange").val(rgb.r);
      $("#greenRange").val(rgb.g);
      $("#blueRange").val(rgb.b);
  
      updateColor();
    });
  
    function updateColor() {
      var redValue = $("#redInput").val();
      var greenValue = $("#greenInput").val();
      var blueValue = $("#blueInput").val();
  
      $("#redRange").val(redValue);
      $("#greenRange").val(greenValue);
      $("#blueRange").val(blueValue);
  
      var rgbColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
      var hexColor = rgbToHex(redValue, greenValue, blueValue);
  
      $("#colorBox").css("background-color", rgbColor);
      $("#hexCode").text("Código Hexadecimal: " + hexColor);
    }
  
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    function componentToHex(c) {
      var hex = parseInt(c).toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
  
    function hexToRgb(hex) {
      var bigint = parseInt(hex.substring(1), 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;
  
      return {r: r, g: g, b: b};
    }
  });
  
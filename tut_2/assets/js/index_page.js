let $ = require('jquery')

document.getElementById('btnValidate').onclick = (event) => {

   const jsonStr = txtJsonTxt.value;

   try {
      var json = JSON.parse(jsonStr);

      document.getElementById("sonucDiv").className = "alert alert-success";

      $('#sonucDiv').text('Valid');
   }
   catch (e) {
      document.getElementById("sonucDiv").className = "alert alert-danger";
      $('#sonucDiv').text('Invalid');
   }
}
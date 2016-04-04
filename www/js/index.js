function scanear(){
   localStorage.setItem("scanner","true");
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          $("#code_b").val(result.text);
          setCode(result.text);
      }, 
      function (error) {
          myApp.alert("Problemas Scanneando: "+error, "");
      }
      ); 
}
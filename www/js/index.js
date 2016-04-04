function scanear(){
  alert(22);
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert(result.text);
      }, 
      function (error) {
          $(".alert-danger").show();
      }
      ); 
}
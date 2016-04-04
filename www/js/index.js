function scanear(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert(result.text);
          var secret = "vinfo";
          var cryptedMsg = CryptoJS.AES.decrypt(plaintext, secret).toString(CryptoJS.enc.Utf8);
          alert(cryptedMsg);
      }, 
      function (error) {
          $(".alert-danger").show();
      }
      ); 
}
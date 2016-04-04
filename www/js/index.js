function scanear(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          var secret = "vinfo";
          var cryptedMsg = CryptoJS.AES.decrypt(result.text, secret).toString(CryptoJS.enc.Utf8);
          var dat= cryptedMsg.split('|');
          var vehiculo= dat[0].split(';');
          var apartamento= dat[1].split(';');
          var propietario= dat[2].split(';');
          $("#placa").html(vehiculo[0]);
          $("#marca").html(vehiculo[1]);
          $("#color").html(vehiculo[2]);
          $("#modelo").html(vehiculo[3]);
          $("#urbanizacion").html(apartamento[0]);
          $("#bloque").html(apartamento[1]);
          $("#apartamento").html(apartamento[2]);
          $("#propietario").html(propietario[0]);
          $("#identificacion").html(propietario[1]);
          $("#telefono").html(propietario[2]);
          $("#celular").html(propietario[3]);
          $("#email").html(propietario[4]);
          $("#myModal").modal();
      }, 
      function (error) {
          $(".alert-danger").show();
      }
      ); 
}
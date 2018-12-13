const notifier = require('node-notifier');

document.getElementById('btnGiris').onclick = (event) => {
    notifier.notify({
        title: 'İşlem Başarılı',
        message: 'Merhaba ' + txtKullaniciAdi.value + '.',
        sound: true,
        wait: true
    }, function (err, response) { });
    notifier.on('click', function (sender, options) {
        console.log('tıkladın');
    });
    notifier.on('timeout', function (sender, options) {
        console.log('zaman doldu');
    });
}
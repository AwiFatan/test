    var sharefacebook, shareline, sharemail, sharewhatsapp, sharetwitter, sharetelegram;
    var judulPost1 = document.getElementsByClassName("post-title");

    var xjudulPost = judulPost1[0].innerText;
    var URLpost = document.URL;

    var a1 = document.getElementById('sharefacebook');
    a1.href = "https://www.facebook.com/sharer/sharer.php?u=" + URLpost;

    var a2 = document.getElementById('shareline');
    a2.href = "https://line.me/R/msg/text/?" + escape(xjudulPost) + " - " + URLpost;

    var a3 = document.getElementById('sharemail');
    a3.href = "mailto:?subject=" + escape(xjudulPost) + " - " + URLpost;

    var a4 = document.getElementById('sharetelegram');
    a4.href = "https://t.me/share/url?url=" + escape(xjudulPost) + " - " + URLpost;

    var a5 = document.getElementById('sharewhatsapp');
    a5.href = "https://wa.me/?text=" + escape(xjudulPost) + " - " + URLpost;

    var a6 = document.getElementById('sharetwitter');
    a6.href = "https://twitter.com/intent/tweet?text=" + escape(xjudulPost) + " - " + URLpost;


    var judul = document.getElementsByClassName("post-title");
    document.getElementById("afTitle").innerHTML = judul[0].innerHTML;

    /*
        var Diskon = document.getElementById('afDiskon').innerHTML;
        var Harga = document.getElementById('afHarga').innerHTML;
        var hargabaru = (harga - ((diskon / 100) * harga));
        alert(Diskon);
        alert(Harga);
        alert(hargabaru);
    */

    // document.getElementById("afSubHarga").innerHTML = hargabaru;

    var XXXDESKRIPSI, XXXDISKON, XXXHARGA, XXXIMAGE1, XXXIMAGE2, XXXIMAGE3, XXXIMAGE4, XXXIMAGE5, XXXSUBHARGA, XXXTITLE;

    function GetImage() {

        var elms = document.getElementById('firstImage').getElementsByTagName('img');
        var urls = [];
        for (var i = 0; i < elms.length; i++) {
            urls.push(elms[i].src);
        }
        return urls;

    }




    function afBeliSekarang() {


        var afPilihUkuran = document.forms[0];
        var Ukuran = "";
        var i;
        for (i = 0; i < afPilihUkuran.length; i++) {
            if (afPilihUkuran[i].checked) {
                Ukuran = Ukuran + afPilihUkuran[i].value + " ";
            }
        }

        // <img             src="https://1.bp.blogspot.com/-8882FUtQrZQ/XVv79Yc3f7I/AAAAAAAAAmA/hUKhWVVga2sFNObwl7zNZnA4928lzRs1gCLcBGAs/AT70-03.jpg"             class="img-fluid rounded mx-auto d-block " alt="Responsive image">
        var Qty = document.getElementById('afQty').value;
        var SubHarga = document.getElementById('afSubHarga').innerHTML;
        var judul = document.getElementsByClassName("post-title");

        var urlimage = GetImage();


        document.getElementById("outputiimage").innerHTML = " <img src=\"" + urlimage +
            "\"  class=\"img-fluid rounded mx-auto d-block \" alt=\"kaos anak branded, kaos anak \" >";


        document.getElementById("OafJudulModal").innerHTML = judul[0].innerHTML;
        document.getElementById("OafUkuran").innerHTML = Ukuran;
        document.getElementById("OafJumlah").innerHTML = Qty;
        document.getElementById("OafSubTotal").innerHTML = SubHarga;
    }


    function afKirim() {
        var afPilihUkuran = document.forms[0];
        var Ukuran = "";
        var i;
        for (i = 0; i < afPilihUkuran.length; i++) {
            if (afPilihUkuran[i].checked) {
                Ukuran = Ukuran + afPilihUkuran[i].value + " ";
            }
        }
        var Qty = document.getElementById('afQty').value;

        var judulPost = document.getElementsByClassName("post-title");

        /*
        alert(Ukuran);
        alert(Qty);
        alert(document.title);
        alert(x[0].innerHTML);
        alert ( document.URL)

         var x = document.URL;
         document.getElementById("demo").innerHTML = x;
        */
        /*alert("The URL of this page is: " + window.location.href);*/

        var URLpost = document.URL;
        var Nama = document.getElementById('afNama').value;
        var Telepon = document.getElementById('afTelepon').value;
        var Alamat = document.getElementById('afAlamat').value;

        var ebank = document.getElementById("afBank");
        var Bank = ebank.options[ebank.selectedIndex].value;

        var epengiriman = document.getElementById("afPengiriman");
        var Pengiriman = epengiriman.options[epengiriman.selectedIndex].value;

        var RT = document.getElementById('afRT').value;
        var RW = document.getElementById('afRW').value;
        var Kodepos = document.getElementById('afKodepos').value;
        var Desa = document.getElementById('afDesa').value;
        var Kecamatan = document.getElementById('afKecamatan').value;
        var Kota = document.getElementById('afKota').value;
        var Propinsi = document.getElementById('afPropinsi').value;

        var vbreak = "\n";
        var Pembuka = "Assalamualaikum wr. wb. Admin \n";
        var vNama = "*Nama :* " + Nama + "\n";
        var vTelepon = "*No. Telepon :* " + Telepon + "\n";
        var vAlamat = "*Alamat :* " + Alamat + "\n";
        var vRT = "*RT :* " + RT + "\n";
        var vRW = "*RW :* " + RW + "\n";
        var vKodepos = "*KodePos :* " + Kodepos + "\n";
        var vDesa = "*Desa / Kelurahan :* " + Kota + "\n";
        var vKecamatan = "*Kecamatan :* " + Kecamatan + "\n";
        var vKota = "*Kota / Kabupaten :* " + Kota + "\n";
        var vPropinsi = "*Propinsi :* " + Propinsi + "\n";

        var vPengiriman = "*Via :* " + Pengiriman + "\n";


        var beforeBank = "*Metode Pembayaran*\n";
        var vBank = Bank + " \nA\\n Fenny Susanti" + "\n";

        var batas = "--------------------\n";
        var Penutup = "Setelah transfer harap konfirmasi agar bisa segera kami proses.\nTerimasih...";

        var xjudulPost = judulPost[0].innerText;
        var vjudulPost = "Saya mau membeli, \n\n*=== " + xjudulPost + " ===*";

        var vUkuran = "\n*Ukuran :* " + Ukuran + "\n";;
        var vJumlah = "*Jumlah :* " + Qty + "\n";
        var vURLpost = "*_sumber_* \n" + URLpost;

        var myNumber = "6285257562170";
        var pesan = Pembuka + vjudulPost + vUkuran + vJumlah + vbreak + batas + vNama + vTelepon + vAlamat +
            vRT + vRW +
            vDesa +
            vKecamatan +
            vKota +
            vPropinsi +
            vKodepos + batas + vPengiriman + vbreak + batas + beforeBank + vBank + batas + vbreak + Penutup + "\n\n" +
            vURLpost;
        var x = 'https://wa.me/' + myNumber + '?text=' + escape(pesan);
        openURL(x);
    }

    function openURL(x) {
        window.open(x);
    }

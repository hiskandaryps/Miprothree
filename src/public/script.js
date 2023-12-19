// api url
const api_url = "https://miprothree-default-rtdb.asia-southeast1.firebasedatabase.app/.json";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field1 = JSON.stringify(res.GreenMatic.kecerahan);
      var field2 = JSON.stringify(res.GreenMatic.kelembapan);
      var obj1 = JSON.parse(field1);
      var obj2 = JSON.parse(field2);

      if (typeof obj1 === 'number') {
        obj1 = parseFloat(obj1.toFixed(2));
    }

    if(obj1>=160 && obj2<=40){
        document.getElementById("indikator").innerHTML = "Tanamanmu haus, sedang kami siram...";
      }
    else if(obj1<=160 && obj2<=40){
        document.getElementById("indikator").innerHTML = "Tanamanmu sedang kekeringan, namun tidak kami siram karena kurang cahaya";
      }
    else if(obj1<=160 && obj2>=40){
        document.getElementById("indikator").innerHTML = "Tanamanmu sudah lembap. Namun perlu cahaya matahari";
      }else {
        document.getElementById("indikator").innerHTML = "Tenang, tanamanmu sudah minum hari ini. Kamu juga ingat minum ya!";
      }
      

      document.getElementById("LX").innerHTML = obj1+" lux";
      document.getElementById("PC").innerHTML = obj2+" %";
    });
}, 500);
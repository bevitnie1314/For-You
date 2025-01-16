function initengahan() {
  kadoIn.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:0";
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1.5);";
}

async function mulainama() {
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1);";
  fotostiker.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  setTimeout(kethalo, 500);
}

function ftmuncul() {
  if (ftganti == 0) {
    fotostiker.src = deffotostiker;
  }
  if (ftganti == 1) {
    fotostiker.src = fotostiker1.src;
  }
  if (ftganti == 2) {
    fotostiker.src = fotostiker2.src;
  }
  if (ftganti == 3) {
    fotostiker.src = fotostiker3.src;
  }
  if (ftganti == 4) {
    fotostiker.src = fotostiker4.src;
  }
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}
function fthilang() {
  fotostiker.style =
    "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}
function jjfoto() {
  fotostiker.style.animation = "rto .8s infinite alternate";
}

function bqmuncul() {
  bq.style =
    "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
  mulaiketik1();
  fungsi = 1;
}
function bqhilang() {
  wallpaper.style = "transform: scale(2);";
  bodyblur.style = "opacity:.3";
  bq.style = "position:relative;transition:all .7s ease;";
}
function kethalo() {
  new TypeIt("#halo", {
    strings: ["" + vketikhalo],
    startDelay: 50,
    speed: 40,
    waitUntilVisible: true,
    afterComplete: function () {
      halo.innerHTML = vketikhalo;
      setTimeout(bqmuncul, 200);
    },
  }).go();
}

function tombol() {
  wallpaper.style = "transform: scale(1);";
  Tombol.style = "opacity:1;transform: scale(1);";
  fungsi = 1;
}
document.getElementById("By").onclick = function () {
  if (fungsi == 1) {
    pertanyaan();
  }
  if (fungsi == 2) {
    menuju();
  }
};
async function menuju() {
  await swals.fire(
     "Okay,cùng xem nào!",
    "Xem xong đừng cảm động quá nhé😜",
    "success"
  );

  slideShow();
}

 let datetxt = "17 - 05 - 2003";
 let datatxtletter =
   "Em chọn quà dựa trên tính cách,con người cô thể hiện ở bên ngoài, hong biết món quà này có hợp gu bí thư hong há?Set web đúng màu cô thich luôn đó😄\nKhi cô còn dạy lớp em,em thấy cô cũng hay ăn kẹo ,nên em đã chuẩn bị nhiều kẹo tặng cô ak😄.Nhưng đừng ăn thường xuyên,không tốt cho răng và có hại cho sức khỏe lắm.\nCô còn trẻ và xinh đẹp nữa,nên dành thời gian để đi chơi,up str chớ,người gì sự kiện nào cũng thấy chụp dị mà hong thấy up gì hết😤Đã dị lúc xin ảnh còn bảo hong có ảnh nào ưng hết😒.\nCống hiến vì xã hội là 1 điều rất quan trọng,nhưng đừng quên dành thời gian chăm sóc bản thân nha@@.Ngay cả khi có người thương mình thì cũng hong bằng bản thân tự thương mình đâu😚.\nNếu có thể cô tập nấu ăn iiii,ăn ngoài quài hong tốt.Với lại phải nấu để trả nợ cho em nữa,em chuẩn bị ra trường rùi đó😾.\nMong món quà nhỏ và thư này sẽ mang lại năng lượng tích cực mỗi khi cô Trâm cảm thấy mệt mỏi ,không vui nhe◕‿◕.\nChúc cô một cái Tết thật vui ve,hạnh phúc bên cạnh những người mình thương🧡.";
 let titleLetter = "Gửi chị Trâm xinh đẹp";
 let charArrDate = datetxt.split("");
 let charArrDateLetter = datatxtletter.split("");
 let charArrTitle = titleLetter.split("");
 let currentIndex = 0;
 let currentIndexLetter = 0;
 let currentIndexTitle = 0;
 let date__of__birth = document.querySelector(".date__of__birth span");
 let text__letter = document.querySelector(".text__letter p");

 var intervalContent;
 var intervalTitle;

 

 function slideShow() {
   document.getElementById("Content").style.opacity = "0";
   $(".box__letter").slideDown();
   setTimeout(function () {
     $(".letter__border").slideDown();
   }, 1000);
   setTimeout(function () {
     intervalTitle = setInterval(function () {
       if (currentIndexTitle < charArrTitle.length) {
         document.querySelector(".title__letter").textContent +=
           charArrTitle[currentIndexTitle];
         let i = document.createElement("i");
         i.className = "fa-solid fa-heart";
         document.querySelector(".title__letter").appendChild(i);
         currentIndexTitle++;
       } else {
         clearInterval(intervalTitle);
       }
     }, 100);
   }, 2000);
   setTimeout(function () {
     document.querySelector("#heart__letter").classList.add("animationOp");
     document.querySelector(".love__img").classList.add("animationOp");
     document.querySelector("#mewmew").classList.add("animationOp");
   }, 2800);
   setTimeout(function () {
     document.querySelectorAll(".heart").forEach((item) => {
       item.classList.add("animation");
     });
   }, 3500);
   setTimeout(function () {
     intervalContent = setInterval(function () {
       if (currentIndexLetter < charArrDateLetter.length) {
         if (charArrDateLetter[currentIndexLetter] === "\n") {
           text__letter.innerHTML += "<br>";
         } else {
           text__letter.innerHTML += charArrDateLetter[currentIndexLetter];
         }
         currentIndexLetter++;
       } else {
         clearInterval(intervalContent);
       }
     }, 50);
   }, 6000);

 }

 $(".close").on("click", function () {
   document.getElementById("Content").style.opacity = "1";
   clearInterval(intervalContent);
   document.querySelector(".title__letter").textContent = "";
   text__letter.textContent = "";
   currentIndexLetter = 0;
   currentIndexTitle = 0;
   document.querySelector("#heart__letter").classList.remove("animationOp");
   document.querySelector(".love__img").classList.remove("animationOp");
   document.querySelector("#mewmew").classList.remove("animationOp");
   document.querySelectorAll(".heart").forEach((item) => {
     item.classList.remove("animation");
   });
   $(".box__letter").slideUp();
   $(".letter__border").slideUp();
 });



vketik1 = kalimat.innerHTML;
kalimat.innerHTML = "";
function mulaiketik1() {
  new TypeIt("#kalimat", {
    strings: ["" + vketik1],
    startDelay: 400,
    speed: 20,
    cursor: false,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      aktiopsL();
    },
  }).go();
}

opsLclick = 0;
opsLcheck = 0;
defopsL = opsL.innerHTML;
document.getElementById("bq").onclick = function () {
  if (opsLclick == 1) {
    if (opsLcheck == 1) {
      setTimeout(aktipesan1, 400);
    }
    if (opsLcheck == 2) {
      mulaiketik3();
    }
    if (opsLcheck == 3) {
      mulaiketik4();
    }
    if (opsLcheck == 4) {
      mulaiketik5();
    }
    if (opsLcheck == 5) {
      kethalo2();
    }
    otomatis();
    opsL.style.opacity = "0";
    opsLclick = 0;
  }
};
function aktiopsL() {
  opsL.innerHTML = defopsL;
  opsL.style.opacity = ".8";
  opsLclick = 1;
  opsLcheck += 1;
}
function gantiopsL() {
  opsL.innerHTML = "[ Klik beberapa LOVE-nya ]";
  opsL.style.opacity = ".8";
}
function otomatis() {
  kalimat.style = "opacity:0";
  setTimeout(otolanj, 400);
}
function otolanj() {
  kalimat.style = "opacity:1";
}

function aktipesan1() {
  kalimat.innerHTML = pesan1.innerHTML;
  kolombaru.style = "position:relative;opacity:1;transform:scale(1);";
}
vketik2 = pesan2.innerHTML;
vketik3 = pesan3.innerHTML;
vketik7 = pesan7.innerHTML;
function aktipesan2() {
  wallpaper.style = "transform: scale(1.5);";
  kolombaru.style = "";
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
    strings: ["" + vketik2, "" + vketik3, "" + vketik7],
    startDelay: 20,
    speed: 30,
    cursor: true,
    deleteSpeed: 30,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      kalimat.innerHTML = vketik7;
      setTimeout(aktipesan4, 700);
    },
  }).go();
}
vketik4 = pesan4.innerHTML;
pesan4.innerHTML = "";
function aktipesan4() {
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 2;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan4", {
    strings: ["" + vketik4],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      pesan4.innerHTML = vketik4;
      setTimeout(aktipesan5, 700);
    },
  }).go();
}
vketik5 = pesan5.innerHTML;
pesan5.innerHTML = "";
function aktipesan5() {
  wallpaper.style = "transform: scale(1.5);";
  fthilang();
  ftganti = 3;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan5", {
    strings: ["" + vketik5],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      pesan5.innerHTML = vketik5 + " ><";
      setTimeout(aktipesan6, 700);
    },
  }).go();
}
vketik6 = pesan6.innerHTML;
pesan6.innerHTML = "";
function aktipesan6() {
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 4;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan6", {
    strings: ["" + vketik6],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      pesan6.innerHTML = vketik6;
      setTimeout(tombol, 400);
    },
  }).go();
}

var slov = 0;
document.getElementById("lv1").onclick = function () {
  lv1.style = "opacity:0";
  slov += 1;
  this.onclick = null;
  checkslov();
};
document.getElementById("lv2").onclick = function () {
  lv2.style = "opacity:0";
  slov += 1;
  this.onclick = null;
  checkslov();
};
document.getElementById("lv3").onclick = function () {
  lv3.style = "opacity:0";
  slov += 1;
  this.onclick = null;
  checkslov();
};
document.getElementById("lv4").onclick = function () {
  lv4.style = "opacity:0";
  slov += 1;
  this.onclick = null;
  checkslov();
};
function checkslov() {
  if (slov == 4) {
    kolombaru.style = "position:relative;transform:scale(1)";
    fthilang();
    ftganti = 1;
    setTimeout(ftmuncul, 300);
    otomatis();
    setTimeout(aktipesan2, 400);
  }
}

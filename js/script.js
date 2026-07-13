(function () {
  // Cambia "sd42f5" por un nombre único por página si usas varias
  var NAMESPACE = "awildacastro";
  var KEY = "visitas";

  fetch("https://api.counterapi.dev/v1/" + NAMESPACE + "/" + KEY + "/up")
    .then(function (res) { return res.json(); })
    .then(function (data) {
      document.getElementById("visit-number").textContent = data.count + " visitantes en línea";
    })
    .catch(function () {
      document.getElementById("visit-number").textContent = "Visitantes en línea";
    });
})();

const ADSTERRA_URL = "https://bonnetdetectiveshomecoming.com/rqbamyp64c?key=866bc5ba1e525b6c9b55bb8d072f8b91";
const MONETAG_URL = "https://bonnetdetectiveshomecoming.com/rqbamyp64c?key=866bc5ba1e525b6c9b55bb8d072f8b91";
const COOLDOWN = 120000;

function getAdURL() {
  const now = Date.now();
  let net = localStorage.getItem("net");
  let time = localStorage.getItem("time");

  if (!net || !time) {
    localStorage.setItem("net", ADSTERRA_URL);
    localStorage.setItem("time", now);
    return ADSTERRA_URL;
  }

  if (now - time >= COOLDOWN) {
    net = net === ADSTERRA_URL ? "monetag" : ADSTERRA_URL;
    localStorage.setItem("net", net);
    localStorage.setItem("time", now);
  }

  return net === ADSTERRA_URL ? ADSTERRA_URL : MONETAG_URL;
}

const playBtn = document.getElementById("customPlay");
const data = document.getElementById("videoData");
const list = data.dataset.src.split(",").map(v => v.trim());
const selected = list[Math.floor(Math.random() * list.length)];

playBtn.onclick = () => {
  const adURL = getAdURL();

  if (selected.endsWith(".mp4")) {
    const w = window.open("about:blank", "_blank");
    w.document.write(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<style>
html,body{margin:0;height:100%;background:#000;display:flex;justify-content:center;align-items:center;}
video{width:96%;max-width:1200px;height:88vh;object-fit:contain;border-radius:16px;}
</style>
</head>
<body>
<video id="v" src="${selected}" autoplay controls></video>
<script>
document.getElementById("v").onended = function() {
  location.href = "${adURL}";
};
<\/script>
</body>
</html>`);
    w.document.close();
  } else {
    window.open(selected, "_blank");
  }

  location.href = adURL;
};

history.pushState(null, null, location.href);
window.onpopstate = function () {
  window.location.href = "https://bonnetdetectiveshomecoming.com/rqbamyp64c?key=866bc5ba1e525b6c9b55bb8d072f8b91";
};

(function () {
  const ua = navigator.userAgent.toLowerCase();
  const html = document.documentElement;
  if (/(iphone|ipod|ipad)/.test(ua)) {
    html.classList.add('ios', 'mobile');
  } else if (/android/.test(ua)) {
    html.classList.add('android', 'mobile');
  } else {
    html.classList.add('desktop');
  }
  if (/chrome/.test(ua) && !/edg|brave/.test(ua)) {
    html.classList.add('chrome');
  } else if (/safari/.test(ua) && !/chrome/.test(ua)) {
    html.classList.add('safari');
  } else if (/edg/.test(ua)) {
    html.classList.add('edge');
  } else if (/firefox/.test(ua)) {
    html.classList.add('firefox');
  } else if (/brave/.test(ua)) {
    html.classList.add('brave');
  } else if (/opr|opera/.test(ua)) {
    html.classList.add('opera');
  }
})();

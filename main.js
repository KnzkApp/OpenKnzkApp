let id = location.search.substring(1);
let id_a = id.split("@");
document.getElementById("open_in_browser").href = "https://"+id_a[2]+"/@"+id_a[1];
document.getElementById("open_in_knzkapp").href = "knzkapp://user/open?"+id;
document.getElementById("userid").innerText = id;

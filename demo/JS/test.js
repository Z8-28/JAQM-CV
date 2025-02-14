function find_me() {
    const me = document.getElementById("me");
    me.style.width = "10px";
    me.style.height = "10px";
    me.style.position.re
}

function read_doc() {
    const v1 = document.getElementById("map");
    const v2 = v1.getElementsByTagName("div");
    console.clear();
    console.log(v1);
    console.log("**************************************************************")
    console.log("**************************************************************")
    console.log("**************************************************************")
    console.log(v2);
}

function reload_map() {
    const link_1 = "https://maps.google.com/?ll=";
    const lat = document.getElementsById("lat");
    const link_2 = ",";
    const lon = document.getElementsById("lon");
    const link_3 = "&z=";
    const zoom = document.getElementsById("zoom");
    const link_4 = "&t=m&output=embed";
    //const link = link_1 + lat.innerHTML + link_2 + lon.innerHTML + link_3 + zoom.innerHTML + link_4;

    //console.clear();
    console.log(lat);
    //console.log(link)

}
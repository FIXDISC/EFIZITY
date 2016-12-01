// JavaScript Document
sel_ubicacion = 0;
sel_entidades = 0;
sel_metros = 0;
sel_agno = 0;
var filtro_ubi = [];
var filtro_enti = [];
var filtro_metr = [];
var filtro_agno = [];
var d = new Date();


function sel(obj){
	if (obj.id == "ubicacion"){
		if (sel_ubicacion==0){obj.className = "active";sel_ubicacion=1;}else{obj.className = "";sel_ubicacion=0;}
	}
	if (obj.id == "entidades"){
		if (sel_entidades==0){obj.className = "active";sel_entidades=1;}else{obj.className = "";sel_entidades=0;}
	}
	if (obj.id == "metros"){
		if (sel_metros==0){obj.className = "active";sel_metros=1;}else{obj.className = "";sel_metros=0;}
	}	
	if (obj.id == "agno"){
		if (sel_agno==0){obj.className = "active";sel_agno=1;}else{obj.className = "";sel_agno=0;}
	}	
}

function cerrar(obj){
	con = document.getElementById(obj);
	con.style.visibility = "hidden";	
}

function filtra(obj, filtro){		
	if (obj.checked==true){
		document.getElementById("img_"+filtro).src = "img/on.png";
		if (filtro=="ubi"){filtro_ubi.push(obj.value);}
		if (filtro=="enti"){filtro_enti.push(obj.value);}	
		if (filtro=="metr"){filtro_metr.push(obj.value);}
		if (filtro=="agno"){filtro_agno.push(obj.value);}
	}
	if (obj.checked==false){
		if (filtro=="ubi"){filtro_ubi = removeA(filtro_ubi, obj.value);}
		if (filtro=="enti"){filtro_ent = removeA(filtro_enti, obj.value);}
		if (filtro=="metr"){filtro_metr = removeA(filtro_metr, obj.value);}
		if (filtro=="agno"){filtro_agno = removeA(filtro_agno, obj.value);}
	}
	
	if (filtro_ubi.length==0){document.getElementById("img_ubi").src = "img/off.png";}
	if (filtro_enti.length==0){document.getElementById("img_enti").src = "img/off.png";}
	if (filtro_metr.length==0){document.getElementById("img_metr").src = "img/off.png";}
	if (filtro_agno.length==0){document.getElementById("img_agno").src = "img/off.png";}
	

	pie1(filtro_ubi,filtro_enti,filtro_metr,filtro_agno);
	// total_KWH(filtro_ubi,filtro_enti,filtro_metr,filtro_agno);	
}

function removeA(arr, elem) {
    for (v=0;v<arr.length;v++) {
        if (elem==arr[v]){
            arr.splice(v, 1);
        }
    }
    return arr;
}

function currency(num){
	num = num.toString();
	if (num!="undefined" && num.length>3){
		return (num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
	}else{
		return num;}
}


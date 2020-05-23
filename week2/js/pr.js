/*Name this external file gallery.js*/
var vBoxTxt,x;
x = document.getElementById("image");

function upDate(previewPic){

  vBoxTxt = x.innerHTML;
  x.style.backgroundImage = "url("+ previewPic.src + ")";
  x.innerHTML  = previewPic.alt;

	}

	function unDo(){
    x.style.backgroundImage = null;
    x.innerHTML  = vBoxTxt;
	}

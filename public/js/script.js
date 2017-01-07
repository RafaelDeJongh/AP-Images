//Dropzone
var imageUpload;
Dropzone.options.imageUpload={
	init:function(){imageUpload = this;},
	//forceFallback:true,
	uploadMultiple:false,
	parallelUploads:3,
	maxFiles:10,
	maxFilesize:5,
	filesizeBase:1024,
	acceptedFiles:".jpeg,.jpg,.png,.gif,.svg",
	dictDefaultMessage:"Paste, Drop or Select your Images here to Upload!",
	dictResponseError:"An unexpected error occurred when uploading your file!",
	addRemoveLinks:false, //Add Function To Remove Uploaded Image
	dictRemoveFile:'Remove Image',
	success:function(file,response){
		//console.log(response.success);
		var gTime = new Date(),
		y = gTime.getFullYear(),
		m = ("0" + (gTime.getMonth() + 1)).slice(-2),
		gFullPath = "up/"+y+"/"+m+"/"+response.success,
		gThumbPath = "up/"+y+"/"+m+"/thumbs/thm_"+response.success,
		gServerPath = window.location.href+gFullPath;
		$(".uploadedImages").append(
		'<div class="uploadImgSec">'
			+'<a href="'+gFullPath+'" title="'+gServerPath+'" class="uploadedImg"><img src="'+gThumbPath+'" alt="'+response.success+'"/></a>'
			+'<aside class="urlInfo">'
				+'<a href="'+gServerPath+'" target="_blank" class="extlUrl"><i class="fa fa-external-link" aria-hidden="true"></i></a>'
				+'<div class="URLBox"><input type="text" class="URLinfo" value="'+gServerPath+'"><button class="copyURL button">Copy</button></div>'
			+'</aside>'
		+'</div>'
		);
		$(".copyURL").click(function(){
			$(this).prev().focus().select();
			document.execCommand("Copy",false,null);
		});
	}
}
$(document).fileClipboard({accept:'image/*',on:{load:function(e,file){imageUpload.addFile(file);}}});
$(document).ready(function(){
//Nav Active
$('nav a[href="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//MagnificPopup
$('.recentUploads,.uploadedImages').magnificPopup({
	delegate:'a.recImg,a.uploadedImg',
	type:'image',
	image: {
		titleSrc: function(item) {
			return '<a href="' + item.el.attr("title") + '" target="_blank" class="extlUrl"><i class="fa fa-external-link" aria-hidden="true"></i></a><div class="URLBox"><input type="text" class="URLinfo" value="' + item.el.attr("title") + '"/><button class="copyURL button">Copy</button></div>';
		}
	},
	gallery:{
		enabled:true,
		preload:[0,2],
		navigateByImgClick:true,
		tPrev:'Previous',
		tNext:'Next',
	},
	mainClass:'mfp-with-zoom',
	zoom:{
		enabled:true,
		duration:400,
		easing:'ease-in-out',
	},
	callbacks: {
		elementParse:function(){
			//Copy ImageURL
			$(".copyURL").click(function(){
				$(this).prev().focus().select();
				document.execCommand("Copy",false,null);
			});
		}
	}
});
//End
});
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
	dictFallbackMessage:"JavaScript has been disabled in your browser.\n This image uploader requires JavaScript to function properly.",
	addRemoveLinks:false,
	dictRemoveFile:'Remove Image',
	success:function(file,response){
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
				+'<div class="URLBox"><h3>Image Link <a href="'+gServerPath+'" target="_blank" class="extlUrl"><i class="fa fa-external-link" aria-hidden="true"></i></a></h3><input type="text" class="URLinfo" value="'+gServerPath+'" readonly><button class="copyURL button">Copy</button></div>' //Direct URL
				+'<div class="URLBox"><h3>HTML Link</h3><input type="text" class="URLinfo" value="<a href=&quot;'+gServerPath+'&quot;><img src=&quot;'+gServerPath+'&quot; title=&quot;'+response.success+'&quot; alt=&quot;'+response.success+'&quot;/></a>" readonly><button class="copyURL button">Copy</button></div>' //HTML
				+'<div class="URLBox"><h3>Markdown Link</h3><input type="text" class="URLinfo" value="!['+response.success+']('+gServerPath+' &quot;'+response.success+'&quot;)" readonly><button class="copyURL button">Copy</button></div>' //Markdown
				+'<div class="URLBox"><h3>BBCode Link</h3><input type="text" class="URLinfo" value="[url='+gServerPath+'][img]'+gServerPath+'[/img][/url]" readonly><button class="copyURL button">Copy</button></div>' //BBCode
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
			return '<a href="' + item.el.attr("title") + '" target="_blank" class="extlUrl"><i class="fa fa-external-link" aria-hidden="true"></i></a><div class="URLBox"><input type="text" class="URLinfo" value="' + item.el.attr("title") + '" readonly/><button class="copyURL button">Copy</button></div>';
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
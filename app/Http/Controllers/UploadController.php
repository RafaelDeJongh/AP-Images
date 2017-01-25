<?php
namespace App\Http\Controllers;
use Storage;
use File;
use App\Http\Requests;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
class UploadController extends Controller{
	public function dropzone(){return view('dropzone-view');}
	public function dropzoneStore(Request $request){
		$image = $request->file('file');
		$imageName = date("dHis-").preg_replace("/[^a-zA-Z0-9.]+/","",$image->getClientOriginalName());
		$uploadPath = public_path('up/').date("Y/m");
		$image->move($uploadPath,$imageName);
		//Thumbnail Creation
		$thumbPath = $uploadPath.'/thumbs/';
		File::isDirectory($thumbPath) or File::makeDirectory($thumbPath,0775,true,true);
		if($image->getClientOriginalExtension() != 'svg'){
			$imageThmb = Image::make($uploadPath.'/'.$imageName);
			$imageThmb->fit(300,300,function($constraint){$constraint->upsize();})->save($uploadPath.'/thumbs/thm_'.$imageName,80);
		}else{
			File::copy($uploadPath.'/'.$imageName,$uploadPath.'/thumbs/thm_'.$imageName);
		}
		return response()->json(['success'=>$imageName]);
	}
}
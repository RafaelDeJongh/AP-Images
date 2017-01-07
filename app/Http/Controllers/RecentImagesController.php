<?php
namespace App\Http\Controllers;
use File;
class RecentImagesController extends Controller{
	public function recentImages(){
		$thumbPath = public_path('up/').date("Y/m").'/thumbs/';
		File::isDirectory($thumbPath) or File::makeDirectory($thumbPath,0775,true,true);
		foreach(array_reverse(File::directories("up")) as $dirYears){
			foreach(File::directories($dirYears) as $dir){
				foreach(array_reverse(File::files($dir)) as $path){
					$files[] = pathinfo($path);
				}
			}
		}
	return view("recent-images-view")->with("files",$files);
	}
}


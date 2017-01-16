<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//HomePage - Upload
Route::get('/','UploadController@dropzone');
Route::post('store',['as'=>'store','uses'=>'UploadController@dropzoneStore']);
//Recent Images
Route::get('/recent','RecentImagesController@recentImages');
//Error Pages
Route::get('/404',function(){return view('errors/404');});
Route::get('/500',function(){return view('errors/500');});
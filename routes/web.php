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
//Route::get('/',function(){return view('home');});
Route::get('/','UploadController@dropzone');
Route::post('store',['as'=>'store','uses'=>'UploadController@dropzoneStore']);
//Route::delete('delete',['as'=>'delete','uses'=>'UploadController@dropzoneDelete']);
//Recent Images
Route::get('/recent','RecentImagesController@recentImages');
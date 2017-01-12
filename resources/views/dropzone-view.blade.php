@include('template.head')
@include('template.nav')
<section class="uploadImage">
<h2 id="title">Image Upload - Drag & Drop</h2>
{!!Form::open(['route'=>['store'],'files'=>true,'enctype'=>'multipart/form-data','class'=>'dropzone','id'=>'image-upload'])!!}
<div class="dz-message">
	<p>Paste, Drop or Select your Images here to Upload!</p>
	<span>Accepts: .jpg, .png, .gif and .svg images up to 5MB each.</span>
</div>
	<div class="fallback">
		<p>JavaScript has been disabled in your browser.</p>
		<p>This image uploader requires JavaScript to function properly.</p>
		<input type="file" name="file" required>
		<input type="submit" value="Upload" name="submit">
	</div>
{!!Form::close()!!}
</section>
<div class="uploadedImages"></div>
@include('template.footer')
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
		<input type="file" name="image" required>
		<input type="submit" value="Upload" name="submit">
		<input type="hidden" value="{{csrf_token()}}" id="csrf-token" name="_token">
	</div>
{!!Form::close()!!}
</section>
<div class="uploadedImages"></div>
@include('template.footer')
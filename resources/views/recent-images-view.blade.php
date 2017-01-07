@include('template.head')
@include('template.nav')
<section class="recentUploads">
<h2 id="title">Recent Uploads</h2>
@foreach($files as $file=>$f)
@php
	$filePath=$files[$file]["dirname"]."/".$files[$file]["basename"];
	$thmPath=$files[$file]["dirname"]."/thumbs/thm_".$files[$file]["basename"];
@endphp
	<a href="{{$filePath}}" title="{{url('/')}}/{{$filePath}}" class="recImg"><img src="{{$thmPath}}" alt="{{$files[$file]['filename']}}"/></a>
@if(++$file == 20) @break @endif
@endforeach
</section>
@include('template.footer')
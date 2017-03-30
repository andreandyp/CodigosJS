$(function() {
	$("#ver").click(function() {
		var json = $("#archivo").val();
		$.getJSON(json,function() {
			alert("hue");
		});
	});
})
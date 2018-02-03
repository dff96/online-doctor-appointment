$(document).ready(function() {
				
	
			
			$("#fname").focus(function(){
				$("#fname").next().removeAttr('class').text('');
				$("<span> Please fill this field </span>").insertAfter("#fname").addClass("info");
			});
			$("#lname").focus(function(){
				$("#lname").next().removeAttr('class').text('');
				$("<span> Please fill this field </span>").insertAfter("#lname").addClass("info");
			});
			$("#dob").focus(function(){
				$("#dob").next().removeAttr('class').text('');
				$("<span> Please fill this field </span>").insertAfter("#dob").addClass("info");
			});
			$("#gender").focus(function(){
				$("#gender").next().removeAttr('class').text('');
				$("<span> Please fill this field </span>").insertAfter("#gender").addClass("info");
			});
			$("#insurance").focus(function(){
				$("#insurance").next().removeAttr('class').text('');
				$("<span> Please fill this field </span>").insertAfter("#insurance").addClass("info");
			});
			$("#contact").focus(function(){
				$("#contact").next().removeAttr('class').text('');
				$("<span> Please fill this field </span>").insertAfter("#contact").addClass("info");
			});
			$("#password").focus(function(){
				$("#password").next().removeAttr('class').text('');
				$("<span>Password should contain minimum 8 characters</span>").insertAfter("#password").addClass("info");
			});
			$("#email").focus(function(){
				
				$("#email").next().removeAttr('class').text('');
				$("<span>Enter a valid email id</span>").insertAfter("#email").addClass("info");
			});
	
	
			$( "#fname" ).blur(function() {
				var first = $('#fname').val();
				$('.info').text('').removeClass("info");
				if(!($('#fname').val())) {
					$( "<span>error</span>" ).insertAfter("#fname").addClass("error");
				}
				else{
				if (first=='')
				{
					$('.info').text('').removeClass("info");
				}
				
				else 
				{
					
					$( "<span>ok</span>" ).insertAfter("#fname").addClass("ok");
				}
				}
			});
			$( "#lname" ).blur(function() {
				var last = $('#lname').val();
				$('.info').text('').removeClass("info");
				
				if(!($('#lname').val())) {
					$( "<span>error</span>" ).insertAfter("#lname").addClass("error");
				}
				else{
			
				if (last=='')
				{
					$('.info').text('').removeClass("info");
				}
				
				else 
				{
					
					$( "<span>ok</span>" ).insertAfter("#lname").addClass("ok");
				}
				}
			});
			$( "#dob" ).blur(function() {
				var date = $('#dob').val();
				$('.info').text('').removeClass("info");
				if(!($('#dob').val())) {
					$( "<span>error</span>" ).insertAfter("#dob").addClass("error");
				}
				else{
				if (date=='')
				{
					$('.info').text('').removeClass("info");
				}
				
				else 
				{
					
					$( "<span>ok</span>" ).insertAfter("#dob").addClass("ok");
				}
				}
			});
			
			$( "#contact" ).blur(function() {
				var phno = $('#contact').val();
				$('.info').text('').removeClass("info");
				if(!($('#contact').val())) {
					$( "<span>error</span>" ).insertAfter("#contact").addClass("error");
				}
				else{
				if (phno=='')
				{
					$('.info').text('').removeClass("info");
				}
				else if (phno.match(/^[0-9]+$/) && phno.length==10)
					{
						
						$( "<span>ok</span>" ).insertAfter("#contact").addClass("ok");
					}
				
				else 
				{
					
					$( "<span>error</span>" ).insertAfter("#contact").addClass("error");
				}
				}
			});
			$( "#gender" ).blur(function() {
				var gen = $('#gender').val();
				$('.info').text('').removeClass("info");
				if(!($('#gender').val())) {
					$( "<span>error</span>" ).insertAfter("#gender").addClass("error");
				}
				else{
			
				if (gen=='')
				{
					$('.info').text('').removeClass("info");
				}
				
				else 
				{
					
					$( "<span>ok</span>" ).insertAfter("#gender").addClass("ok");
				}
				}
			});
			$( "#insurance" ).blur(function() {
				var insu = $('#insurance').val();
				$('.info').text('').removeClass("info");
				if(!($('#insurance').val())) {
					$( "<span>error</span>" ).insertAfter("#insurance").addClass("error");
				}
				else {
			
				if (insu=='')
				{
					$('.info').text('').removeClass("info");
				}
				
				else 
				{
					
					$( "<span>ok</span>" ).insertAfter("#insurance").addClass("ok");
				}
				}
			});
			$( "#password" ).blur(function() {
				var pswd = $('#password').val();
				$('.info').text('').removeClass("info");
				if(!($('#password').val())) {
					$( "<span>error</span>" ).insertAfter("#password").addClass("error");
				}
				else {
				if (pswd=='')
				{
					$('.info').text('').removeClass("info");
				}
				else if (pswd.length>=8)
					{
						
						$( "<span>ok</span>" ).insertAfter("#password").addClass("ok");
					}
				else 
					{
						
						$( "<span>error</span>" ).insertAfter("#password").addClass("error");
					}
				}
					
			});
			
			$( "#email" ).blur(function() {
				var email = $('#email').val();
				$('.info').text('').removeClass("info");
				if(!($('#email').val()))  {
					$( "<span>error</span>" ).insertAfter("#email").addClass("error");
				}
				else {
				if(email=='')
				{	
					$('.info').text('').removeClass("info");
				}
				else if (email.match(/^([\w-\-]+@([\w-]+\.)+[\w-]{2,4})/))
					{
						
						$( "<span>ok</span>" ).insertAfter("#email").addClass("ok");
					}
				else {
						
						$( "<span>error</span>" ).insertAfter("#email").addClass("error");
					}
				}
			});
			
});
		
	
	
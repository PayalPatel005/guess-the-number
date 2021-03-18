$(document).ready(function(){
	let i=1,rand_num,v;
	
	rand_num = Math.floor(Math.random()*100)+1; 
	
	$("#check").click(function() {
		
		v = $("#number").val();
		
		if(v=='') alert("Please enter number first!");
		
		if(v==rand_num) {
			$("#err").html("");
			$("#num_div").css({ 'color' : 'white' });
			$("#num_div").html("<h2>"+v+"</h2>");
			alert("Congratulations! You guessed the right number.");
		} else {
			if(v>rand_num) $("#err").html("Your guess is too high!");
			else $("#err").html("Your guess is too low!");
			$("#"+i).html(v);
			$("#number").val('');
			i++;
		}
	});
});


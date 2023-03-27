	$("#company_submit").click(function(){
        $("#modal").attr("style", "display:block");
		
    });
   
     $("#modal_close_btn").click(function(){
        $("#modal").attr("style", "display:none");
  		$("#cname").val('');
  		$("#caddr").val('');
  		$("#cnumber").val('');
  		$("#number").val('');
    });

	$(document).ready(function() {
	var i=1; // 변수설정은 함수의 바깥에 설정!
  		$("#team_submit").click(function() {
    
   		$(".team_board").append("<input type='text' name='team"+i+"'>");
    
    	i++; // 함수 내 하단에 증가문 설정
    

  		});
	});  

	$(document).ready(function() {
	$("#company_save").click(function() {

		var cname=$('#cname').val();
		var caddr=$('#caddr').val();
		var cnumber=$('#cnumber').val();
		var number=$('#number').val();

		if(cname.length==0 || caddr.length==0 || cnumber.length==0 || number.length==0){
			alert('데이터를 입력하셔야 합니다.');
			
		}else{
			$("#modal").attr("style", "display:none");
			$(".company_board").append("<div>"+cname+"</div>");
			$("#cname").val('');
  			$("#caddr").val('');
  			$("#cnumber").val('');
  			$("#number").val('');	
		}
	});
});
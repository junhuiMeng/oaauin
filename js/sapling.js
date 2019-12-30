$(function() {
			$('#doc-modal-list')
					.find('.am-icon-close')
					.add('#doc-confirm-toggle')
					.on(
							'click',
							function() {
                 //sessionStorage.setItem("password","2019314");
                 //let password = sessionStorage.getItem("password");
		         var uuid = Math.round(Math.random() * 10);
		$.ajax({
			type: "POST",
			url: url,
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({"opCode": "1001","recordSet": {"uuid":uuid}}),
			dataType: "json",
			success: function (data) {				
			if(data.code == 9000) {	
            $.ajax({
			async:false, 
			type: "POST",
			url: url,
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({"opCode": "1005","recordSet": {"uuid":uuid}}),
			dataType: "json",
			success: function (data) {
				if(data.code == 0000) {					
                      $('#my-confirm3').modal({
                              relatedTarget : this,
                                  });
				}else {
					 $('#my-confirm5').modal({
                              relatedTarget : this,
                                  });
				}
			},		
		});
				}else {
					jBox.tip("你已参与过该活动");
				}
			},
			
		});
		});

});
$(function() {
			$('#doc-modal-list')
					.find('.am-icon-close')
					.add('#doc-confirm-toggle2')
					.on(
							'click',
							function() {
								alert("1111");
								$('#my-confirm4').modal({
														relatedTarget : this,
													});
							});
		});
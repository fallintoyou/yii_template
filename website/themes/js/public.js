$(document).ready(function() {
	$('.main_footer_page_search_font').click(function() {

		var current = parseInt($('#pages').val());
		var total = parseInt($("#display_total").val());
		var baseUrl = $("#page_baseurl").val();
		if (current > 0 && current <= total) {
			window.location.href = baseUrl + "?page=" + current;
		} else {
			alert("输入页码错误");
		}
	});
	//enter
	$('#pages').bind('keydown', function (e) {
		var key = e.which;
		if (key == 13) {
		e.preventDefault();
		$('.main_footer_page_search_font').trigger('click');
		}
		});

	$(".action_del").click(function() {
		if ($('#myModal').length <= 0) {
			$('body').append('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"> <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">确定操作</h4></div><div class="modal-body">你确定要执行删除操作？</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">取消</button><button type="button" class="btn btn-primary"  id="confirm_delete">删除</button></div></div></div></div>');
			$('#confirm_delete').on("click", function(){
				var id = $('#confirm_delete').attr('data');
				$('#confirm_delete').attr('data', 0);
				if (id > 0) {
					var baseUrl = $("#del_baseurl").val();
					var token = baseUrl.indexOf('?')==-1 ? "?" : '&';
					window.location.href = baseUrl + token + "id=" + id;
				};
				
				$('#myModal').modal('hide');
			});
		};
		if ($('#confirm_delete').length > 0) {
			$('#confirm_delete').attr('data', $(this).attr('data'));
		}
		$('#myModal').modal('show');
	});

});

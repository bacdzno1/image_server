function calcHeight() {
	var height = $('#RightPane').height() - $('.ui-tabs-nav').height()
	$('#RightPane iframe').height(height)
}

function reload(id) {
	document.getElementById(id).src = document.getElementById(id).src
}

$(function () {
	// Set height home
	$(window).load(function () {
		$('#test-list').css('height', $('#LeftPane').height() - 300)
	})

	// LeftPanel - Sort able
	// $("#test-list").sortable({
	//     handle: '.handle',
	//     update: function () {
	//         var order = $('#test-list').sortable('serialize');
	//         $.ajax({
	//             url: "resource/process-sortable.php",
	//             type: "post",
	//             data: order,
	//             error: function () {
	//                 alert("Lỗi load dữ liệu");
	//             }
	//         });
	//         //alert(order);
	//         $("#info").load("process-sortable.php?" + order);
	//     }
	// });
	// $('.refresh_home').click(function () {
	//     $.ajax({
	//         type: 'post',
	//         data: {
	//             refresh: 1
	//         },
	//         url: "../cache_file/home-cache.php",
	//         success: function (data) {
	//             alert("Refresh thành công!");
	//         }
	//     });
	// });

	// Layout
	myLayout = $('body').layout({
		applyDefaultStyles: false,
		north__showOverflowOnHover: true,
		resizerClass: 'ui-state-default',
		spacing_open: 11,
		spacing_closed: 11,
		slideTrigger_open: 'mouseleave',
	})

	// Tabs - Right Panel
	var maintab = $('#RightPane')

	maintab.tabs({
		add: function (e, ui) {
			// append close thingy
			$(ui.tab)
				.parents('li:first')
				.append('<span class="ui-tabs-close ui-icon ui-icon-close" title="Close Tab"></span>')
				.find('span.ui-tabs-close')
				.click(function () {
					maintab.tabs('remove', $('li', maintab).index($(this).parents('li:first')[0]))
				})
			// select just added tab
			maintab.tabs('select', '#' + ui.panel.id)
		},
	})

	// Tabs - Move
	// maintab.sortable({
	//     items: "li"
	//     //axis: 'x'
	// });

	// Open Tab
	// $(".m").click(function () {
	//     var tab_id = $(this).attr('data-tab-id') || 0,
	//         tab_title = $(this).attr('data-tab-title') || "",
	//         elm_tab = "#tab_" + tab_id,
	//         elm_iframe_id = "idframe_" + tab_id,
	//         elm_iframe_src = $(this).find("a").attr("href");

	//     var elm_tab_title = "<span class='relo hide' title='Reload Tab'></span>";
	//     if (tab_title != "") elm_tab_title += tab_title + "<span id='raquo'>&raquo;</span>";
	//     elm_tab_title += $(this).find("a").text()

	//     // Neu da co tab nay
	//     if ($(elm_tab).html() != null) {
	//         $("#RightPane").tabs("select", elm_tab);
	//         reload(elm_iframe_id);
	//     }
	//     // Neu chua co tab thi tao tab
	//     else {
	//         $("#RightPane").tabs("add", elm_tab, elm_tab_title);
	//         $(elm_tab).append('<iframe id="' + elm_iframe_id + '" src="' + elm_iframe_src + '" frameborder="0" width="100%" height="100%" onload="calcHeight();"></iframe>');
	//     }

	//     // Reload iframe
	//     $(".relo").click(function () {
	//         reload(elm_iframe_id);
	//     });

	// });
})

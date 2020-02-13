(function($) {
	$.fn.mokuji = function(options){
		var defaults = {
			contentspace  : 'body',
			titletag      : 'h1,h2,h3,h4,h5,h6',
			dot           : false,
			decimal       : true
		};
		var params = $.extend(defaults, options);
		var titletags = params.titletag.split(',');
		var tags = [];
		var countId = 1;
		$.each(titletags, function(i, value) {
			tags.push(params.contentspace+" "+value);
		});
		tags = tags.join(',');
		var countId = 1;
		this.addClass("mokujibox");
		$(".mokujibox").append('<p>目次</p>');
		$(".mokujibox").append('<ul></ul>');
		$(tags).each(function(){
			var ttx = $(this).text();
			this.id = 'tid-' + countId;
			countId ++;
			$(".mokujibox").children("ul").append('<li><a href="#'+this.id+'">'+ttx+'</a></li>');
		});
		if (params.dot == false) {
			$(".mokujibox").find("li").addClass("dot-none");
		}
		var h1count = 1;
		var h2count = 1;
		var h3count = 1;
		var h4count = 1;
		var h5count = 1;
		var h6count = 1;
		var koumokucount = 0;
		if (params.decimal == true) {
			$(tags).each(function(){
				switch ($(this).get(0).tagName) {
					case "H1":
						$(".mokujibox").find("li").eq(koumokucount).children("a").prepend(h1count + ".");
						koumokucount++;
						h1count++;
					break;
					case "H2":
						$(".mokujibox").find("li").eq(koumokucount).children("a").prepend(h2count + ".");
						if (h1count > 1) {
							$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h1count - 1) + "-");
						}
						koumokucount++;
						h2count++;
					break;
					case "H3":
						$(".mokujibox").find("li").eq(koumokucount).children("a").prepend(h3count + ".");
						if (h1count > 1) {
							$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h1count - 1) + "-" + (h2count - 1) + "-");
						}else{
							if (h2count > 1) {
								$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h2count - 1) + "-");
							}
						}
						koumokucount++;
						h3count++;
					break;
					case "H4":
							$(".mokujibox").find("li").eq(koumokucount).children("a").prepend(h4count + ".");
						if (h1count > 1) {
							$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h1count - 1) + "-" + (h2count - 1) + "-" + (h3count - 1) + "-");
						}else{
							if (h2count > 1) {
								$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h2count - 1) + "-" + (h3count - 1) + "-");
							}else{
								if (h3count > 1) {
									$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h3count - 1) + "-");
								}
							}
						}
						koumokucount++;
						h4count++;
					break;
					case "H5":
						$(".mokujibox").find("li").eq(koumokucount).children("a").prepend(h5count + ".");
						if (h1count > 1) {
							$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h1count - 1) + "-" + (h2count - 1) + "-" + (h3count - 1) + "-" +(h4count - 1) + "-");
						}else{
							if (h2count > 1) {
								$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h2count - 1) + "-" + (h3count - 1) + "-" +(h4count - 1) + "-");
							}else{
								if (h3count > 1) {
									$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h3count - 1) + "-" +(h4count - 1) + "-");
								}else{
									if (h4count > 1) {
										$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h4count - 1) + "-");
									}
								}
							}
						}
						koumokucount++;
						h5count++;
					break;
					case "H6":
						$(".mokujibox").find("li").eq(koumokucount).children("a").prepend(h6count + ".");
						if (h1count > 1) {
							$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h1count - 1) + "-" + (h2count - 1) + "-" + (h3count - 1) + "-" +(h4count - 1) + "-" +(h5count - 1) + "-");
						}else{
							if (h2count > 1) {
								$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h2count - 1) + "-" + (h3count - 1) + "-" + (h4count - 1) + "-" +(h5count - 1) + "-");
							}else{
								if (h3count > 1) {
									$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h3count - 1) + "-" + (h4count - 1) + "-" +(h5count - 1) + "-");
								}else{
									if (h4count > 1) {
										$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h4count - 1) + "-" + (h5count - 1) + "-");
									}else{
										if (h5count > 1) {
											$(".mokujibox").find("li").eq(koumokucount).children("a").prepend((h5count - 1) + "-");
										}
									}
								}
							}
						}
						koumokucount++;
						h6count++;
					break;
				}
			});
			var mojistartleng = 0;
			for (var i=0; i<koumokucount; i++) {
				mojistartleng = $(".mokujibox").find("li").eq(i).children("a").text().indexOf(".");
				switch (mojistartleng) {
					case 1:
						$(".mokujibox").find("li").eq(i).addClass("indent-1");
					break;
					case 3:
						$(".mokujibox").find("li").eq(i).addClass("indent-2");
					break;
					case 5:
						$(".mokujibox").find("li").eq(i).addClass("indent-3");
					break;
					case 7:
						$(".mokujibox").find("li").eq(i).addClass("indent-4");
					break;
					case 9:
						$(".mokujibox").find("li").eq(i).addClass("indent-5");
					break;
					case 11:
						$(".mokujibox").find("li").eq(i).addClass("indent-6");
					break;
				}
			}
		}
	};
})(jQuery);
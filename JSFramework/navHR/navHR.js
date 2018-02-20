$(document).ready(function(){
	navBar=new Object();


	navBar.make=function(links,containerclass,verticalNav){

			var json_links=JSON.parse(links);
			var nav = $("<nav></nav>");
			nav.addClass("navbar navbar-inverse");

			var container_div_fluid = $("<div></div>");
			container_div_fluid.addClass("container-fluid");

			var navbar_header = $("<div></div>");
			navbar_header.addClass("navbar-header");

			var navbar_brand = $("<a></a>").text("Mondal Motors");
			navbar_brand.addClass("navbar-brand")
			navbar_brand.attr("href","#");

			var navbar_nav_ul = $("<ul></ul>");
			navbar_nav_ul.addClass("nav navbar-nav");


			for(var i=0;i<json_links.length;i++)
			{
				var li_item=$("<li></li>");
				li_item.attr("menuindex","hr"+i);
				li_item.addClass("hrNav");
				var li_item_a=$("<a></a>").text(json_links[i].title);
				//li_item_a.attr("href",json_links[i].href)

				if(json_links[i].subcat!=undefined && json_links[i].subcat.length>0)
				{
					navBar.makeSideBar(json_links[i].subcat,verticalNav,i);
				}


				li_item.append(li_item_a);
				navbar_nav_ul.append(li_item);
			}
			navbar_header.append(navbar_brand);
			container_div_fluid.append(navbar_header);
			container_div_fluid.append(navbar_nav_ul);


		nav.append(container_div_fluid);
		$("."+containerclass).append(nav);

		//show default navigationbar
		navBar.defaultActiveMenu(json_links);

	}




	navBar.defaultActiveMenu=function(menus)
	{
		$( ".nav li" ).each(function( index ) {
			$(this).removeClass("active");
			if(index==0)
			$(this).addClass("active");
		});

		$( ".verticalNav .vertical-menu" ).each(function( index ) {
			$(this).hide();
			if(index==0)
			$(this).show();
		});

	}

	navBar.makeSideBar=function(menus,containerclass,index)
	{
		var menuJson=menus;
		var verticalNav=$("<div></div>");
		verticalNav.attr("vermenuindex","ver"+index);
		verticalNav.addClass("vertical-menu");
		var br=$("<br/>");

		for(var x=0;x<menuJson.length;x++)
		{
			var btn = $("<a></a>").text(menuJson[x].title);
			btn.addClass("btn btn-primary");
			verticalNav.append(btn).append(br);
		}
		$("."+containerclass).append(verticalNav);

	}


	navBar.onHRNavClickSubscribe=function(){
		$(".hrNav").click(function(){
			$( ".nav li" ).each(function( index ) {
				$(this).removeClass("active");
			});
			$(this).addClass("active");
			var hr=$(this).attr("menuindex")
			$( ".verticalNav .vertical-menu" ).each(function( index ) {
						$(this).hide();
						if("hr"+index==hr)
						$(this).show();
			});
		});
	}



});

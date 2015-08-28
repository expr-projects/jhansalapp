$('document').ready(function () {

    
    /*if($(window).height()> 900 && $(window).width()>1400 ) {
    $('.menu2_li').css({'font-size':'1.2em','padding-top':'2%'});
    }
    */
    $(window).load(function () {


        $('#news_container').slideDown(1000);

        /*--------------------------- Show/Hide Top Strip ----------------------------------*/



       // $('.innerStrip').slideDown('slow');
        //$('.innerStrip').slideUp('slow');
       // $('.strip_button').click(function () { $('.innerStrip').animate({ height: 'toggle' }, { direction: 'bottom' }, 100); })
        //$('.strip_a').focus(function () { $('.innerStrip').animate({ height: 'toggle' }, { direction: 'bottom' }, 100); });
        //$('#lastsetting_menu').focusout(function () { $('.innerStrip').slideToggle("slow"); });






        /*--------------------------------------- slide botton animation----------------------------------------- */



        $('#scroll_button i').on('click', function (event) {
            $('#scroll_button i').hide();
            $('#home').slideUp(1000);
            $('#section4').slideDown(1000);
            $('html, body').animate({
                scrollTop: $("#section4").offset().top
            }, 1000);
        });

       /* $('#scroll_button i').on('focusin', function (event) {
            $('#scroll_button i').hide();
            $('#home').slideUp(1000);
            $('#section4').slideDown(1000);
            $('html, body').animate({
                scrollTop: $("#section4").offset().top
            }, 1000);

        });*/
       /*------------  tab js for down arrow-----------------------------*/

	    $('.scroll_top a i').on('focusin', function (event) {
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 1000);
        });
		
	/*------------------ tab js for menu-----------------------------*/
		$('.Hmenu .Smenu').focusin(function () {
            $(this).addClass('SmenuActive');
            $(this).find('.Smenudiv').stop(true, true).slideDown();
        });
		$('.menu_left ul li:last-child').focusout(function (e) {  $('.Hmenu .Smenu').removeClass('SmenuActive');  $('.Smenudiv').slideUp(50, cleanmenu($(this))); });
        function cleanmenu(e) { setTimeout(function () { e.removeClass('SmenuActive'); }, 50) };
		

	
	/*-----------------tab js for quick links---------------------*/
		$('.quickLinks ul li').focusin(function () {
			 $(this).css('background','#ff9d00');
		 });
		 $('.quickLinks ul li').focusout(function () {
			 $(this).css('background','rgba(0, 0, 0, 0.4) none repeat scroll 0 0');
		 });

	/*-----------------------------  News Tab ------------------------------------*/
$('#homenews').on('focusin','a',function () {
		if($(this).closest('ul').data('marquee').stop)
		{$(this).closest('ul').stop(true,false);};
	});	
	$('#homenews').on('focusout','a',function () {
		if($(this).closest('ul').data('marquee').stop)
		{$(this).closest('ul').marquee('slide');};
	});	
		 

        /*-------------------------------------------------------- slide top animation ------------------------------------------------*/
        $('#scroll_top i').on('click', function (event) {
            $('#scroll_button i').show();
            $('#home').slideDown(1000);
            $('#section4').slideUp(1000);
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 1000);
            $('#section4').slideUp("slow");
        });
        $('#scroll_top i').on('focusin', function (event) {
            $('#scroll_button i').show();
            $('#home').slideDown(1000);
            $('#section4').slideUp(1000);
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 1000);
            $('#section4').slideUp("slow");
        });	
	$('.menu2_li').on("touchstart",function(e){});
		$('a').on("touchstart", function (e) { if($(this).parent().parent().parent().hasClass("menu_left")) {window.location = $(this).attr('href');} });
        $('.Hmenu .Smenu').on("touchstart", function (e) {
            if ($(this).hasClass('SmenuActive') != true) {
                e.preventDefault();
                $('.Smenu').find('.Smenudiv').stop(true, true).slideUp();
                $('.Smenu').removeClass('SmenuActive');
                $(this).addClass('SmenuActive');
                $(this).find('.Smenudiv').stop(true, true).slideDown();
            }
            else {
                e.preventDefault();
                $(this).removeClass('SmenuActive');
                $(this).find('.Smenudiv').stop(true, true).slideUp();
            }
        });



        $('.Hmenu .Smenu').mouseover(function () {
            $(this).addClass('SmenuActive');
            $(this).find('.Smenudiv').stop(true, true).slideDown();
        });

        $('.Hmenu .Smenu').mouseleave(function (e) { $(this).find('.Smenudiv').slideUp(200, cleanmenu($(this))); });
        //$('.Hmenu .Smenu').mouseleave(function (e) { $(this).find('.Smenudiv').hide(200, cleanmenu($(this))); });
        function cleanmenu(e) { setTimeout(function () { e.removeClass('SmenuActive'); }, 200) };


        /*------------------------------  inner pages menus  ---------------------------------------------*/





        $('.up-arrow-image').click(function () {
            $('.slide_menu2 ul').slideUp('slow');
        });

        $('.slide_menu2 ul').slideDown();

        $('.slide_menu2 ul').delay(2000);
        $('.slide_menu2 ul').slideUp(2000);
        $('.slide_menu2 ul').mouseover(function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            $('.slide_menu2 ul').slideDown().stop(true);

        });
        $('.slide_button2').click(function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            $('.slide_menu2 ul').off();
            $('.slide_menu2 ul').slideToggle('slow');
        });





        /*----------------------- News Section ------------------------------------*/

        $('#news').addClass('activeLi');
        $('#announcements_rightpart').hide();
        $('#awards_rightpart').hide();

        $('#news').click(function () {

            $(this).addClass('activeLi');
            $('#Awards').removeClass('activeLi');
            $('#Announcements').removeClass('activeLi');
            $('#events').removeClass('activeLi');

            $('#news_rightpart').slideDown('slow');
            $('#events_rightpart').hide();
            $('#awards_rightpart').hide();
            $('#announcements_rightpart').hide();


        });
        $('#events').click(function () {
            $(this).addClass('activeLi');
            $('#Awards').removeClass('activeLi');
            $('#Announcements').removeClass('activeLi');
            $('#news').removeClass('activeLi');

            $('#events_rightpart').slideDown('slow');
            $('#news_rightpart').hide();
            $('#awards_rightpart').hide();
            $('#announcements_rightpart').hide();

        });
        $('#Awards').click(function () {
            $(this).addClass('activeLi');

            $('#events').removeClass('activeLi');
            $('#Announcements').removeClass('activeLi');
            $('#news').removeClass('activeLi');

            $('#awards_rightpart').slideDown('slow');
            $('#events_rightpart').hide();
            $('#news_rightpart').hide();
            $('#announcements_rightpart').hide();

        });
        $('#Announcements').click(function () {
            $(this).addClass('activeLi');

            $('#Awards').removeClass('activeLi');
            $('#news').removeClass('activeLi');
            $('#events').removeClass('activeLi');

            $('#announcements_rightpart').slideDown('slow');
            $('#events_rightpart').hide();
            $('#awards_rightpart').hide();
            $('#news_rightpart').hide();

        });


        /* ---------------------------- Inner_page_Links  -------------------------*/

        $('.Link_head_li').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.Link_head_li').removeClass('LinkHeadLi_active');
            $('.Link_head').removeClass('LinkHead_active');


            if ($(this).siblings('.Sub_link').css('display') === 'block') { }
            else {
                $('.Sub_link').slideUp();
                $(this).addClass('LinkHeadLi_active');
                $(this).find('.Link_head').addClass('LinkHead_active');
            }
	    if($('.lazy').length>0)
            {
               $(this).parent().find("img.lazy").lazyload();
            }
            $(this).siblings('.Sub_link').slideToggle();
            $(this).siblings('.Sub_link').addClass('Sub_link_active');
            $('html, body').animate({ scrollTop: $('.Link_head_li').offset().top }, 750);
        });
	/*-------------------------------tab js for inner page -----------------------*/ 
		$('.Link_head_li').keyup(function (e) {
    	if (e.which == 9) {
		 	e.preventDefault();
            e.stopPropagation();
            $('.Link_head_li').removeClass('LinkHeadLi_active');
            $('.Link_head').removeClass('LinkHead_active');
			if ($(this).siblings('.Sub_link').css('display') === 'block') { }
            else {
                $('.Sub_link').slideUp();
                $(this).addClass('LinkHeadLi_active');
                $(this).find('.Link_head').addClass('LinkHead_active');
            }
            $(this).parent().find("img.lazy").lazyload();
            $(this).siblings('.Sub_link').slideToggle();
            $(this).siblings('.Sub_link').addClass('Sub_link_active');
            $('html, body').animate({ scrollTop: $('.Link_head_li').offset().top }, 750);
		}
		});

        /*------------------------   Tabs for web directory page   -----------------------------*/
        $('#SectorDiv').hide();
        $('.divtab span:first-child').addClass('tabActive');
        $('#tabCategory').click(function () {

            $('.tab').removeClass('tabActive');
            $(this).parent('.tab').addClass('tabActive');
            $('#SectorDiv').hide();
            $('#CategoryDiv').show();
        });
        $('#tabSector').click(function () {
            $('.tab').removeClass('tabActive');
            $(this).parent('.tab').addClass('tabActive');
            $('#CategoryDiv').hide();
            $('#SectorDiv').show();
        });

        /*Sector search*/
        $('#Sectxt').keyup(function () {
            fiter();
        });
        $('#Webtxt').keyup(function () {
            fiterweb();
        });
        $('#Sevtxt').keyup(function () {
            fiterServices();
        });

        $('.Link_Div').on('click', '.Link_head_li', function (e) {
            e.preventDefault();
            $('.Link_head_li').removeClass('LinkHeadLi_active');
            $('.Link_head').removeClass('LinkHead_active');
            if ($(this).siblings('.Sub_link').css('display') === 'block') { }
            else {
                $('.Sub_link').slideUp();
                $(this).addClass('LinkHeadLi_active');
                $(this).find('.Link_head').addClass('LinkHead_active');
            }
            $(this).siblings('.Sub_link').slideToggle();
            $(this).siblings('.Sub_link').addClass('Sub_link_active');
        });

        /* District Page - Slider */
        if(window.location.toString().indexOf("District")!=-1)
            CreateSlider('slider');
    });
});

//Global Veriables and Function


	function getQuicklink(serviceUrl,filename,currurlhost){	
				$.ajax({
				        type: "GET",
 				        url : "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=QuickLinks&Url=" + serviceUrl + "&Columns=Title,LinkUrl,ParentId,ChildId&FilterCAML=<Where><Eq><FieldRef Name='BasePage' /><Value Type='Text'>" + filename + "</Value></Eq></Where>&callback=?",
				        contentType: "application/json; charset=utf-8",
				        dataType: "json",
				        success: function (response) {				        	
				            BindQuickLinks(response,currurlhost);
				        },
				        failure: function (e) {},
				        error: function (e) {}
				    });
		}
				
				    function BindQuickLinks(response,currurlhost) {
				        var liHtml = "";				
				        var parentLinks = $(response.rows).filter(function (l, n) { return n.ChildId === null });				       
				        for (var i = 0; i < parentLinks.length; i++) {
				            if ((i % 2) == 0)
				                liHtml += "<section class='contentTab'>";
				            else
				                liHtml += "<section class='contentTab alter'>";
					            liHtml += "<h4>" + parentLinks[i].Title + "</h4>";
					            liHtml += "<div class='contentTab_Col'>";
					            liHtml += "<ul>";
					            var childLinks = $(response.rows).filter(function (k, n) { return n.ChildId === parentLinks[i].ParentId });				            
					            childLinks.sort(function (a, b) {
					                var x = a["Title"];
					                var y = b["Title"];				
					                if (typeof x == "string") {
					                    x = x.toLowerCase();
					                    y = y.toLowerCase();
					                }				
					                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
					            });				            
				            for (var j = 0; j < childLinks.length; j++) {
							     if (childLinks[j].LinkUrl == null) 
							     {
				                    liHtml += "<li><a href='#'><i class='fa fa-hand-o-right'></i>&nbsp; " + childLinks[j].Title + "</a></li>";
				                 }
				                 else 
				                 {
				                    if (childLinks[j].LinkUrl.split(',')[0].indexOf(currurlhost) == -1 || childLinks[j].LinkUrl.split(',')[0].indexOf('/Pages/') == -1)
				                        liHtml += "<li><a href='" + childLinks[j].LinkUrl.split(',')[0] + "' target='_blank'><i class='fa fa-hand-o-right'></i>&nbsp; " + childLinks[j].Title + "</a></li>";
				                    else
				                        liHtml += "<li><a href='" + childLinks[j].LinkUrl.split(',')[0] + "'><i class='fa fa-hand-o-right'></i>&nbsp; " + childLinks[j].Title + "</a></li>";
				                 }
				            }
				            liHtml += "</ul></div></section>";
				        }
				        $('#divQuickLinks').html(liHtml);
				        if ((i % 2) != 0)
					        $('#divRelatedResources section').addClass('alter');
				    }


	var MainRs=null;

	function BindSectorcall()
	{
		
	    $.ajax({
	       type: "GET",
	       url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItem?ListName=Department_Sector_master&SiteUrl=http://" + window.location.hostname + "&Columns=Title,DepartmentName,SectorUrl,ParentID,ChildID,IsParent&Filter=''&IsRecursive=false&callback=?",
	        contentType: "application/json; charset=utf-8",
	        dataType: "json",
	        success: function (response) {
				MainRs=response;
	            BindSector(response.rows);
	        },
	        failure: function (e) { },
	        error: function (e) { }
	    });
	}
    function BindSector(response) {		
        var liHtml = "";
        var parentLinks = $(response).filter(function (l, n) { return ((n.IsParent === 'yes')) });
        liHtml += "<ul>";
        for (var i = 0; i < parentLinks.length; i++) {           
			liHtml += "<li><a href='#' class='Link_head_li'><h3 class='Link_head'>" + parentLinks[i].Title + "<i class='fa fa-bars'></i></h3></a><div class='Sub_link'><ul>"; 
	        var childLinks = $(response).filter(function (k, n) { return n.ChildID === parentLinks[i].ParentID });
	        childLinks.sort(function (a, b) {
	           var x = a["DepartmentName"];
	           var y = b["DepartmentName"];
	           if (typeof x == "string") {
	               x = x.toLowerCase();
	               y = y.toLowerCase();
	           }
	           return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	        });
	        for (var j = 0; j < childLinks.length; j++) {
	            liHtml += "<li><i class='fa fa-hand-o-right'></i><a href='" + childLinks[j].SectorUrl + "' target='_blank'>&nbsp; " + childLinks[j].DepartmentName + "</a></li>";
	          }   
				liHtml += "</ul></div></li>";
		}    
		liHtml += "</ul>";   
		$('#Link_DIv').html(liHtml);
	}
	function BindSector1(response) {
		var parent=[];			
		var parentLinksh = $(MainRs.rows).filter(function (l, n) { return ((n.IsParent === 'yes') ) });
		for(var k = 0; k < parentLinksh.length; k++)
		{
			for(var t=0;t<response.length;t++)
			{
				if(parentLinksh[k].ParentID === response[t].ChildID)
				{	
					if(!Acontains(parent,parentLinksh[k]))
					{						
						parent.push(parentLinksh[k]);
					}				
				}
			}
		}
	    var liHtml = "";
	    var parentLinks = $(parent).filter(function (l, n) { return ((n.IsParent === 'yes') ) });
	    liHtml += "<ul>";
	    for (var i = 0; i < parentLinks.length; i++) {           
			liHtml += "<li><a href='#' class='Link_head_li'><h3 class='Link_head'>" + parentLinks[i].Title + "<i class='fa fa-bars'></i></h3></a><div class='Sub_link'><ul>";
		    var childLinks = $(response).filter(function (k, n) { return n.ChildID === parentLinks[i].ParentID });
			childLinks.sort(function (a, b) {
			    var x = a["DepartmentName"];
			    var y = b["DepartmentName"];
				if (typeof x == "string") {
			        x = x.toLowerCase();
			        y = y.toLowerCase();
			    }
			    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 });
	         for (var j = 0; j < childLinks.length; j++) {
	           liHtml += "<li><i class='fa fa-hand-o-right'></i><a href='" + childLinks[j].SectorUrl + "' target='_blank'>&nbsp; " + childLinks[j].DepartmentName + "</a></li>";
	          }   
	     		liHtml += "</ul></div></li>";        
		      }    
			 liHtml += "</ul>";   
		     $('#Link_DIv').html(liHtml);
		  }
		
		function Acontains(a, obj) {
		   var i = a.length;
		   while (i--) {
				   if (a[i] === obj) {
		        	  return true;
		    	   }
			    }
			    return false;
			}
		function fiter(){		
			var liveData=[];
			var data = $('#Sectxt').val();
			for( var items in MainRs.rows)
			{
				if( ContainsKeyValue( MainRs.rows[items], "DepartmentName", data ) === true )
				{				
					liveData.push(MainRs.rows[items]);
				}
			}
			BindSector1(liveData);
		}		
		function ContainsKeyValue( obj, key, value )
		{
			if( obj[key].toLowerCase().indexOf(value.toLowerCase())>-1) return true;
			for( all in obj )
			{
				if( obj[all] != null && obj[all][key] === value){
					return true;
				}
				if( typeof obj[all] == "object" && obj[all]!= null ){
					var found = ContainsKeyValue( obj[all], key, value );
					if( found == true ) return true;
				}
			}
			return false;
		}	
		function resetT()
		{
			$("#Sectxt").val("");
			BindSector(MainRs.rows);
		}		
	



var OriginalData = null; 
function BindWebDirectory()
{
	$.ajax({
		type: "GET",
		url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=WEBDIRECTORY&Url=http://"+ window.location.host +"&Columns=Title,Sector,Category,Url&FilterCAML=&callback=?",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (response) {
			OriginalData = response;
			BindWebDirectory1(response);
		},
		failure: function (e) { alert('failure'); },
		error: function (e) { alert('error'); }
	});
}
	
function BindWebDirectory1(response) {
	var liHtml = "";
	var Categories = [];
	$.each(response.rows, function () {
		if ($.inArray(this.Category, Categories) === -1) {
			Categories.push(this.Category);
		}
	});
	Categories.sort();	
	liHtml += "<ul>";
	for (var i = 0; i < Categories.length; i++) {
		liHtml += "<li><a href='#' class='Link_head_li'><h3 class='Link_head'>" + Categories[i] + "<i class='fa fa-bars'></i></h3></a>";
		liHtml += "<div class='Sub_link'>";
		liHtml += "<ul>";		
		var categoryItems = $(response.rows).filter(function (l, n) { return (n.Category === Categories[i]) });
		categoryItems.sort(function (a, b) {
				var x = a["Title"];
				var y = b["Title"];
				if (typeof x == "string") {
					x = x.toLowerCase();
					y = y.toLowerCase();
				}
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		for (var j = 0; j < categoryItems.length; j++) {
			liHtml += "<li><i class='fa fa-hand-o-right'></i><a href='" + categoryItems[j].Url + "' target='_blank' style='color:#fff;'>&nbsp; " + categoryItems[j].Title + "</a></li>";
		}                
		liHtml += "</ul></div></li>";
	}
	liHtml += "</ul>";
	$('#CategoryDiv').html(liHtml);
//	var Sectors = [];
//	$.each(response.rows, function () {
//		if ($.inArray(this.Sector, Sectors) === -1) {
//			Sectors.push(this.Sector);
//		}
//	});
//	Sectors.sort();
//	liHtml = "<ul>";
//	for (var i = 0; i < Sectors.length; i++) {
//		liHtml += "<li><a href = '#' class='Link_head_li'><h3 class='Link_head'>" + Sectors[i] + "<i class='fa fa-bars'></i></h3></a>";
//		liHtml += "<div class='Sub_link'>";
//		liHtml += "<ul>";
//		var sectorItems = $(response.rows).filter(function (l, n) { return (n.Sector === Sectors[i]) });
//		sectorItems.sort(function (a, b) {
//				var x = a["Title"];
//				var y = b["Title"];
//				if (typeof x == "string") {
//					x = x.toLowerCase();
//					y = y.toLowerCase();
//				}
//				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//			});
//		for (var j = 0; j < sectorItems.length; j++) {
//			liHtml += "<li><i class='fa fa-hand-o-right'></i><a href='" + sectorItems[j].WebsiteUrl + "' target='_blank'>&nbsp; " + sectorItems[j].Title + "</a></li>";
//		}
//		liHtml += "</ul></div></li>";
//	}
//	liHtml += "</ul>";
//	$('#SectorDiv').html(liHtml);
}


function fiterweb() {
	var sectorData = [];
	var categoryData = [];
	var data = $('#Webtxt').val();
	for (var items in OriginalData.rows) {
		if (ContainsKeyValue(OriginalData.rows[items], "Title", data) === true) {
			sectorData.push(OriginalData.rows[items]);
			categoryData.push(OriginalData.rows[items]);
		}
		else {
			if (ContainsKeyValue(OriginalData.rows[items], "Category", data) === true) {
				categoryData.push(OriginalData.rows[items]);
			}
//			if (ContainsKeyValue(OriginalData.rows[items], "Sector", data) === true) {
//				sectorData.push(OriginalData.rows[items]);
			//}
		}
	}
	BindFiteredCategoryData(categoryData);
	//BindFiteredSectorData(sectorData);
}

function BindFiteredCategoryData(response) {
    var Categories = $.unique(response.map(function (d) { return d.Category; }));
	var liHtml = "";
	liHtml += "<ul>";
	for (var i = 0; i < Categories.length; i++) {
		liHtml += "<li><a href='#' class='Link_head_li'><h2 class='Link_head'>" + Categories[i] + "<i class='fa fa-bars'></i></h2></a>";
		liHtml += "<div class='Sub_link'>";
		liHtml += "<ul>";
		var categoryItems = $(response).filter(function (l, n) { return (n.Category === Categories[i]) });
		categoryItems.sort(function (a, b) {
			var x = a["Title"];
			var y = b["Title"];
			if (typeof x == "string") {
				x = x.toLowerCase();
				y = y.toLowerCase();
			}
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		for (var j = 0; j < categoryItems.length; j++) {
			liHtml += "<li><i class='fa fa-hand-o-right'></i><a href='" + categoryItems[j].Url + "' target='_blank'>&nbsp; " + categoryItems[j].Title + "</a></li>";
		}
		liHtml += "</ul></div></li>";
	}
	liHtml += "</ul>";
	$('#CategoryDiv').html(liHtml);
}

function BindFiteredSectorData(response) {
	var Sectors = $.unique(response.map(function (d) { return d.Sector; }));
	liHtml = "<ul>";
	for (var i = 0; i < Sectors.length; i++) {
		liHtml += "<li><a href = '#' class='Link_head_li'><h2 class='Link_head'>" + Sectors[i] + "<i class='fa fa-bars'></i></h2></a>";
		liHtml += "<div class='Sub_link'>";
		liHtml += "<ul>";
		var sectorItems = $(response).filter(function (l, n) { return (n.Sector === Sectors[i]) });
		sectorItems.sort(function (a, b) {
			var x = a["Title"];
			var y = b["Title"];
			if (typeof x == "string") {
				x = x.toLowerCase();
				y = y.toLowerCase();
			}
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		for (var j = 0; j < sectorItems.length; j++) {
			liHtml += "<li><i class='fa fa-hand-o-right'></i><a href='" + sectorItems[j].WebsiteUrl + "' target='_blank'>&nbsp; " + sectorItems[j].Title + "</a></li>";
		}
		liHtml += "</ul></div></li>";
	}
	liHtml += "</ul>";
	$('#SectorDiv').html(liHtml);
}


var ServiceOdata = null;	
function LoadServiceData(serviceType) 
{		 			     
	var currurl = new String(window.location);
	var endindex = currurl.indexOf(".aspx") + 5;				
	var serviceUrl = currurl.substring(0,endindex)	
	$.ajax({
			type: "GET",
			url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=Services&Url=" + serviceUrl + "&Columns=Title,ServiceDepartment,ServiceDescription0,HowToApplyUrl,ServiceUrl,OfflineFormUrl,DisplayPayNow,XmlID&FilterCAML=<Where><Eq><FieldRef Name='ServiceType' /><Value Type='Choice'>" + serviceType + "</Value></Eq></Where>&callback=?",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (response) {		
				ServiceOdata = response;	        	
				BindServices(response);
			},
			failure: function (e) {},
			error: function (e) {}
		});
}	
function BindServices(response, serviceType) 
{
	var liHtml = "<div id='popup'></div>";	
	liHtml += "<div class='ServicesContainer'><ul>";
	for (var i = 0; i < response.rows.length; i++)
	{
		liHtml += "<li><div class='ServicesDiv'>";
		liHtml += "<h4>" + response.rows[i].Title + "</h4>";
		liHtml += "<span class='servicedept'>" + response.rows[i].ServiceDepartment + "</span>";
		if(response.rows[i].ServiceDescription0 == null)
			liHtml += "<p class='ServiceDescription'>​</p>";
		else
		    liHtml += "<p class='ServiceDescription'>" + response.rows[i].ServiceDescription0 + "​</p>";

		liHtml += "<span class='siteLink'>";
		//alert(response.rows[i].DisplayPayNow +".."+response.rows[i].ServiceType);
		if ((response.rows[i].DisplayPayNow == 1) && (response.rows[i].XmlID != null))
		    liHtml += "<a href='#' class='payBtn' onclick='DashBoard(\"/SPPAY/getbilldetails.aspx?ID=" + response.rows[i].XmlID + "\",\"" + response.rows[i].Title + "\")'>Pay Now</a>";
		else if ((response.rows[i].DisplayPayNow == 1))
            liHtml += "<a href='#' class='payBtn' onclick='DashBoard(\"/SPPAY/SSDGServices.aspx\",\"" + response.rows[i].Title + "\")'>Apply Now</a>"; 
     		//liHtml += "<a href='#' class='payBtn' onclick='DashBoard(\"http://10.68.106.77:8080?ID=100\",\"" + response.rows[i].Title + "\")'>Pay Now</a>";
        if(response.rows[i].HowToApplyUrl != null)
			liHtml += "<a href='" + response.rows[i].HowToApplyUrl.split(',')[0] + "' target='_blank'><i class='fa fa-question-circle' title='How to Apply'></i></a>";		
		if(response.rows[i].OfflineFormUrl!= null)
			liHtml += "<a href='" + response.rows[i].OfflineFormUrl.split(',')[0] + "' target='_blank'><i class='fa fa-download' title='Apply Offline'></i></a>"
		if(response.rows[i].ServiceUrl!= null)	
			liHtml += "<a href='" + response.rows[i].ServiceUrl.split(',')[0] + "' target='_blank'><i class='fa fa-globe' title='Apply Online'></i></a>";
		liHtml += "</span></div></li>";					         
	}				
	liHtml += "</ul></div>";
	$('#divServices').html(liHtml);  
}
function BindFilteredServices(response) {
    
    var liHtml = "<div id='popup'></div>";		
	liHtml += "<div class='ServicesContainer'><ul>";
	for (var i = 0; i < response.length; i++)
	{
		liHtml += "<li><div class='ServicesDiv'>";
		liHtml += "<h4>" + response[i].Title + "</h4>";
		liHtml += "<span class='servicedept'>" + response[i].ServiceDepartment + "</span>";
		if(response[i].ServiceDescription0 == null)
			liHtml += "<p class='ServiceDescription'>​</p>";
		else
			liHtml += "<p class='ServiceDescription'>" + response[i].ServiceDescription0+ "​</p>";
		liHtml += "<p style='text-align: right;'><span class='siteLink'>";
		
		if ((response[i].DisplayPayNow == 1) && (response[i].XmlID != null))
		    liHtml += "<a href='#' class='payBtn' onclick='DashBoard(\"/SPPAY/getbilldetails.aspx?ID=" + response[i].XmlID + "\",\"" + response[i].Title + "\")'>Pay Now</a>";
		else if ((response[i].DisplayPayNow == 1))
		    liHtml += "<a href='#' class='payBtn' onclick='DashBoard(\"/SPPAY/SSDGServices.aspx\",\"" + response[i].Title + "\")'>Apply Now</a>"; 
			
        if(response[i].HowToApplyUrl != null)
			liHtml += "<a href='" + response[i].HowToApplyUrl.split(',')[0] + "' target='_blank'><i class='fa fa-question-circle' title='How to Apply'></i></a>";		
		if(response[i].OfflineFormUrl!= null)
			liHtml += "<a href='" + response[i].OfflineFormUrl.split(',')[0] + "' target='_blank'><i class='fa fa-download' title='Apply Offline'></i></a>"
		if(response[i].ServiceUrl!= null)	
			liHtml += "<a href='" + response[i].ServiceUrl.split(',')[0] + "' target='_blank'><i class='fa fa-globe' title='Apply Online'></i></a>";
		liHtml += "</span></p></div></li>";					         
	}				
	liHtml += "</ul></div>";
	$('#divServices').html(liHtml);  
}				   		
function fiterServices() {
	var serviceData = [];        
	var data = $('#Sevtxt').val();
	for (var items in ServiceOdata.rows) {
		if (ContainsKeyValue(ServiceOdata.rows[items], "Title", data) === true) {
			serviceData.push(ServiceOdata.rows[items]);
		}
		else if (ContainsKeyValue(ServiceOdata.rows[items], "ServiceDepartment", data) === true) {
			serviceData.push(ServiceOdata.rows[items]);
		}                                 
	}            
	BindFilteredServices(serviceData);
}

function DashBoard(url, title) {
   var dialog = "<div id='IframePopup' class='modalDashBoard'><div><a href='#close' title='Close' class='close' onclick='javascript:CloseDashBoard()'>X</a>" +
            "<span>" + title + "</span><div class='popupDashBoard'><iframe src='" + url + "' width='100%' height='100%' class='iframeStyle'  frameborder='0'></iframe></div></div></div>";
   $('#popup').append(dialog);   
}

function CloseDashBoard() {
    $('#popup').empty();
}


// Gallery

function bindmedia() {
        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getGalleryThumbnails?Url=http://" + window.location.host + "&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                BindThumbnail(response);
            },
            failure: function (e) { alert("Fail") },
            error: function (e) { alert("Error") }
        });
    }

    function BindThumbnail(response) {
        var liHtml = "";
        for (var i = 0; i < response.rows.length; i++) {
            var parsedDate = new Date(parseInt(response.rows[i]["EventDate"].substr(6,13)));
            var jsDate = new Date(parsedDate);
            var actmonth = jsDate.getMonth() + 1;
            var eventDate = jsDate.getDate() + "/" + actmonth + "/" + jsDate.getFullYear();

            liHtml += "<li><div class=\"Gal_Img_Div\">";
            var para = response.rows[i].ParentId + "," + response.rows[i]['WebId'] + "," + eventDate;
            liHtml += "<div class='left'><img src=" + response.rows[i]["FileRef"] + " class=\"Gal_Img1\" para='" + para + "'/></div>";
            liHtml += "<div class='right'><span>" + response.rows[i]["EventTitle"] + "</span><br><span>Department/ District:- " + response.rows[i]["DepartmentName"] + "</span><br><span>Date:- " + eventDate + "</span></div></div></li>";
        }
        $('ul.Photo_Gal').append(liHtml);
    }

    function ChildThumbnail(pi, wi, ed) {
        var liHtml = "";
        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getChieldItemsFromGallery?Url=http://" + window.location.host + "&ParentId=" + parseInt(pi) + "&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (childresponse) {
                liHtml += "<div class='highslide-gallery' style='display:none'><table><tbody><tr>";
                liHtml += "<td align='left' valign='Top' width='210px' height='140px''>";
                liHtml += "<a href=\"" + childresponse.ParentEventImg + "\" class='highslide' width='210px' onclick='return hs.expand(this)'><p style='width:210px;padding: 0 0 0 10px;font-size: 10px !important;'></p></a>";
                liHtml += "<div class='highslide-heading highslide-move' style='display: none;'><div class='highslide-number'>" + childresponse.ParentEventTitle + " <span style='float:right;'>Date:-" + ed + "</span></div></div>'";
                liHtml += "<div class='highslide-caption' style='display:none;'>" + childresponse.ParentImgCaption + "<a href='" + childresponse.ParentEventImg + "' download='" + childresponse.ParentEventImg + "' class='fileDownloadSimpleRichExperience' style='float:right'>&nbsp;Download Now</a></div></td>";
                for (var i = 0; i < childresponse.rows.length; i++) {
                    liHtml += "<td align='left' valign='Top' width='210px' height='140px''>";
                    liHtml += "<a href=\"" + childresponse.rows[i]["FileRef"] + "\" class='highslide' width='210px' onclick='return hs.expand(this)'><p style='width:210px;padding: 0 0 0 10px;font-size: 10px !important;'></p></a>";
                    liHtml += "<div class='highslide-heading highslide-move' style='display: none;'><div class='highslide-number'>" + childresponse.ParentEventTitle + " <span style='float:right;'>Date:-" + ed + "</span></div></div>'";
                    if (childresponse.rows[i]["Title"] == null)
                        liHtml += "<div class='highslide-caption' style='display:none;'><a href='" + childresponse.rows[i]["FileRef"] + "' download='" + childresponse.rows[i]["FileRef"] + "' class='fileDownloadSimpleRichExperience' style='float:right'>&nbsp;Download Now</a></div></td>";
                    else
                        liHtml += "<div class='highslide-caption' style='display:none;'>" + childresponse.rows[i]["Title"] + "<a href='" + childresponse.rows[i]["FileRef"] + "' download='" + childresponse.rows[i]["FileRef"] + "' class='fileDownloadSimpleRichExperience' style='float:right'>&nbsp;Download Now</a></div></td>";
                }
                liHtml += "</tr></tbody></table></div>";
                $('.hiddencont').empty();
                $('.hiddencont').append(liHtml);
                $('body').find(".highslide-gallery").find('a:first').click();
            },
            failure: function (e) { alert("Fail inside") },
            error: function (e) { alert("Error inside") }
        });
    }   
  

// Stateoportal Mobile App Store

    var AppStoreOrigData = null;
    function BindMobileAppstore() {
        var currurl = new String(window.location);
        var endindex = currurl.indexOf(".aspx") + 5;
        var serviceUrl = currurl.substring(0, endindex)
        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=MOBILEAPP&Url=" + serviceUrl + "&Columns=ID,Title,REFMOBILEAPPID,DEPARTMENT,APPIMAGE,APPVERSION,REQUIRED_x0020_iOS_x0020_VERSION,DOWNLOADS,PRICE,DOWNLOAD_x0020_URL&FilterCAML=&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                AppStoreOrigData = response;
                BindAppStoreData(response);
            },
            failure: function (e) { },
            error: function (e) { }
        });
    }
    function BindAppStoreData(response) {
        var liHtml = "";
        var j;
        liHtml += "<div class='appContainer'><ul>";
        for (var i = 0; i < response.rows.length; i++) {
            j = (i % 6)+1;
            liHtml += "<li><div class='appPanel panel"+ j +"'>";
            if (response.rows[i].APPIMAGE != null)
                liHtml += "<div class='appIcon'><img src='" + response.rows[i].APPIMAGE.split(',')[0] + "' alt=''  /></div>";
            liHtml += "<div class='appHeading'>" + response.rows[i].Title + "</div><div class='appLinksBtn'>";

            if (response.rows[i].DOWNLOAD_x0020_URL != null)
                liHtml += "<div class='appDownload'><a href='" + response.rows[i].DOWNLOAD_x0020_URL.split(',')[0] + "'><i class='fa fa-download' title='Download'></i></a></div>";
            liHtml += "<div class='appDetail'><a href='/Connect/Pages/AppDetail.aspx?MID=" + response.rows[i].ID + "'><i class='fa fa-file-text-o' title='View Detail'></i></a></div></div>";


            liHtml += "<div class='appDescription'>";
            liHtml += "<span>Department: " + response.rows[i].DEPARTMENT + "</span><br/>";
            liHtml += "<span>Version: " + response.rows[i].REQUIRED_x0020_iOS_x0020_VERSION + "</span><br/>";
            liHtml += "<span>Downloads: " + response.rows[i].DOWNLOADS + "</span><br/>";
            liHtml += "<span>Price: " + response.rows[i].PRICE + "</span>";
            liHtml += " </div></div></li> ";
        }
        liHtml += "</ul></div>";
        $('#divAppstore').html(liHtml);
    }
 
    function BindAppDetails() {
        var currurl = new String(window.location);
        var endindex = currurl.indexOf(".aspx") + 5;
        var serviceUrl = currurl.substring(0, endindex);
        var appId = currurl.substring(endindex + 5);

        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=MOBILEAPP&Url=" + serviceUrl + "&Columns=Title,DEPARTMENT,DESCIRTION,APPIMAGE,APPVERSION,RATINGTOTAL,RATED,CONTSCT_x0020_INFO,EMAILID,UPDATED,REQUIRED_x0020_iOS_x0020_VERSION,DOWNLOADS,PRICE,DOWNLOAD_x0020_URL&FilterCAML=<Where><Eq><FieldRef Name='ID' /><Value Type='Number'>" + appId + "</Value></Eq></Where>&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                BindAppDetailsData(response);
                $.ajax({
                    type: "GET",
                    url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=MOBILEAPPSCREENS&Url=" + serviceUrl + "&Columns=Title,ScreenshotId,ScreenshotImage&FilterCAML=<Where><Eq><FieldRef Name='REFMOBILEAPPID' /><Value Type='Number'>" + appId + "</Value></Eq></Where><OrderBy><FieldRef Name='ScreenshotId' Ascending='True' /></OrderBy>&callback=?",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        BindScreenshots(response);
                    },
                    failure: function (e) { },
                    error: function (e) { $('#appScreenContainer').css("display", "none"); }
                });
            },
            failure: function (e) { },
            error: function (e) { }
        });
        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=MOBILEAPP&Url=" + serviceUrl + "&Columns=ID,Title,REFMOBILEAPPID,DEPARTMENT,APPIMAGE,APPVERSION,REQUIRED_x0020_iOS_x0020_VERSION,DOWNLOADS,PRICE,DOWNLOAD_x0020_URL&FilterCAML=&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                BindAppsList(response);
            },
            failure: function (e) { },
            error: function (e) { }
        });
        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=MOBILEAPPVERSION&Url=" + serviceUrl + "&Columns=Title,RELESE_x0020_DATE,DOWNLOAD_x0020_URL&FilterCAML=<Where><Eq><FieldRef Name='REFMOBILEAPPID' /><Value Type='Number'>" + appId + "</Value></Eq></Where>&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                BindVersionHistory(response);
            },
            failure: function (e) { },
            error: function (e) {  }
        });
        $.ajax({
            type: "GET",
            url: "http://" + window.location.hostname + ":100/getListData.asmx/getListItemsIrrecursive?ListName=MOBILEAPPFEEDBACK&Url=" + serviceUrl + "&Columns=Title,NAME,MOBILENO,FEEDBACK&FilterCAML=<Where><Eq><FieldRef Name='REFMOBILEAPPID' /><Value Type='Number'>" + appId + "</Value></Eq></Where>&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                BindReview(response, appId);
            },
            failure: function (e) {},
            error: function (e) {
                //In case there is no reviews  
  
                var liHtml = "";
                liHtml += "<div class='row rowColor2'><strong>Reviews</strong><br/><br/>";
                liHtml += "<input type='button' value='Write Review' onclick='OpenPopUp(\"/_layouts/15/stateportalsolution/WriteAppReview.aspx?ID=" + appId + "\");' /></div>";
                $('#appReviewContainer').html(liHtml);
            }
        });
    }

    function BindAppDetailsData(response) {

        var liHtml = "";
        liHtml += "<div class='row rowColor1'><div class='rowLeft'>";
        if (response.rows[0].APPIMAGE != null)
            liHtml += "<div class='appIcon'><img src='" + response.rows[0].APPIMAGE.split(',')[0] + "' alt=''  /></div></div><div class='rowRight'>";
        liHtml += "<div class='appHeading'>" + response.rows[0].Title + "</div>";
        liHtml += "<span class='version'>Version: " + response.rows[0].APPVERSION + "</span><br/>";

        liHtml += "<span class='deptName'>Department: " + response.rows[0].DEPARTMENT + "</span><br/>";
        if (response.rows[0].DOWNLOAD_x0020_URL != null)
            liHtml += "<div class='appDownload'><a href='" + response.rows[0].DOWNLOAD_x0020_URL.split(',')[0] + "'><i class='fa fa-download' title='Download'></i></a></div>";
        liHtml += "</div>";
        if (response.rows[0].RATED != null) {
            var ratevalue = parseFloat(response.rows[0].RATINGTOTAL / response.rows[0].RATED).toFixed(1);
            liHtml += "<div class='ratingDiv'><div class='ratingNumber'>" + ratevalue + "</div> <div class='rateit ratingStar' data-rateit-value='" + ratevalue + "' data-rateit-ispreset='true' data-rateit-readonly='true'></div><div class='ratingTotal'><i class='fa fa-user'></i>" + response.rows[0].RATED + " total</div></div>";
        }
        liHtml += "</div>";        
	liHtml += "<div id='appScreenContainer' class='row rowColor2'></div>";
        liHtml += "<div class='row rowColor2'><span>" + response.rows[0].DESCIRTION + "</span></div>";
        liHtml += "<div class='row rowColor2'>"; //<span><strong>Additional Information</strong> </span><br/>
        liHtml += "<ul><li><span>Supported OS </span><br/>" + response.rows[0].REQUIRED_x0020_iOS_x0020_VERSION + "</li>";
        liHtml += "<li><span>Downloads </span><br/>" + response.rows[0].DOWNLOADS + "</li>";
        liHtml += "<li><span>Price </span><br/>" + response.rows[0].PRICE + "</li>";
        liHtml += "<li><span>Contact </span><br/>" + response.rows[0].CONTSCT_x0020_INFO + "</li>";
        liHtml += "<li><span>Email Id </span><br/><a href='mailto:" + response.rows[0].EMAILID + "'>" + response.rows[0].EMAILID + "</a></li></ul></div>";
        $('#appDetailContainer').html(liHtml);
        $('.rateit').rateit();
    }

    function BindAppsList(response) {

        var liHtml = "";
        var j;
        liHtml += "<div><ul>";
        for (var i = 0; i < 5; i++) {
            liHtml += "<li><div class='appList'>";
            
            if (response.rows[i].APPIMAGE != null)
                liHtml += "<div class='appIcon'><img src='" + response.rows[i].APPIMAGE.split(',')[0] + "' alt=''  /></div>";
            liHtml += "<div class='appHeading'>" + response.rows[i].Title + "</div><div class='appLinksBtn'>";
            if (response.rows[i].DOWNLOAD_x0020_URL != null)
                liHtml += "<div class='appDownload'><a href='" + response.rows[i].DOWNLOAD_x0020_URL.split(',')[0] + "'><i class='fa fa-download' title='Download'></i></a></div>";
            liHtml += "<div class='appDetail'><a href='/Connect/Pages/AppDetail.aspx?MID=" + response.rows[i].ID + "'><i class='fa fa-file-text-o' title='View Detail'></i></a></div></div>";
            liHtml += "<div class='appDescription'>";
            liHtml += "<span>Department: " + response.rows[i].DEPARTMENT + "</span><br/>";
            liHtml += "<span>Version: " + response.rows[i].REQUIRED_x0020_iOS_x0020_VERSION + "</span><br/>";
            liHtml += "<span>Price: " + response.rows[i].PRICE + "</span>";
            liHtml += " </div></div>";
            liHtml += "</li>";
        }
        liHtml += "</ul></div>";
        liHtml += "<input type='button' value='See More' onclick='javascript:window.location.href=\"/Connect/Pages/Mobile.aspx\";' />";
        $('#appListContainer').html(liHtml);
    }


    function BindVersionHistory(response) {

        var liHtml = "";
        liHtml += "<div class='row rowColor2'><strong>Vesion History</strong><br/>";
        liHtml += "<span>Title: " + response.rows[0].Title + "</span><br/>";
        var parsedDate = new Date(parseInt(response.rows[0].RELESE_x0020_DATE.substr(6)));
        var jsDate = new Date(parsedDate);
        var actmonth = jsDate.getMonth() + 1;
        liHtml += "<span>Release Date: " + jsDate.getDate() + "/" + actmonth + "/" + jsDate.getFullYear() + "</span><br/>";
        if (response.rows[0].DOWNLOAD_x0020_URL != null)
            liHtml += "<div class='appDownload'><a href='" + response.rows[0].DOWNLOAD_x0020_URL.split(',')[0] + "'><i class='fa fa-download' title='Download'></i></a></div></div>";
        else
            liHtml += "</div>";
        $('#appVersionContainer').html(liHtml);
    }

    function BindReview(response, appId) {

        var liHtml = "";
        liHtml += "<div class='row rowColor2'><input type='button' value='Write Review' onclick='OpenPopUp(\"/_layouts/15/stateportalsolution/WriteAppReview.aspx?ID=" + appId + "\");' /><br/><br/>"; //<strong>Reviews</strong>
        if (response.rows.length>3)
            liHtml += "<div id='reviewSlider' class='reviewSlider'><a class='control_next'><i class='fa fa-angle-right'></i></a><a class='control_prev'><i class='fa fa-angle-left'></i></a><ul>";
        else
            liHtml += "<div id='reviewSlider' class='reviewSlider'><ul>";
        for (var i = 0; i < response.rows.length; i++) {
            liHtml += "<li><div class='reviewLeft'><img src='/_layouts/15/newsp/images/photo.jpg' alt='' /></div><div class='reviewRight'><span class='reviewRightName'>" + response.rows[i].NAME + "</span><br/>";
            liHtml += "<span>" + response.rows[i].FEEDBACK + "</span></div></li>";
        }
        liHtml += "</ul></div>";
        $('#appReviewContainer').html(liHtml);
        CreateSlider('reviewSlider');
    }

    function BindScreenshots(response) {

        var liHtml = "";
        if (response.rows.length > 4)
            liHtml += "<div id='appSlider' class='appSlider'><a class='control_next'><i class='fa fa-angle-right'></i></a><a class='control_prev'><i class='fa fa-angle-left'></i></a><ul>";
        else
            liHtml += "<div id='appSlider' class='appSlider'><ul>";
        for (var i = 0; i < response.rows.length; i++) {
            if (response.rows[i].ScreenshotImage!=null)
              liHtml += "<li><img src='" + response.rows[i].ScreenshotImage.split(',')[0] + "' /></li>";
        }
        liHtml += "</ul></div>";

        $('#appScreenContainer').html(liHtml);
        CreateSlider('appSlider');
    }

    //Slider Code Begin

    var slideCount;
    var slideWidth;
    var slideHeight;
    var sliderUlWidth;

    function AutoSlide(sliderId) {
        setInterval(function () {
            moveRight(sliderId);
        }, 4000);
    }

    function CreateSlider(sliderId) {
        if (sliderId == 'slider') //Auto slide only in case of District page
            AutoSlide(sliderId);
        slideCount = $('#' + sliderId + ' ul li').length;
        slideWidth = $('#' + sliderId + ' ul li').width();
        slideHeight = $('#' + sliderId + ' ul li').height();
        sliderUlWidth = slideCount * slideWidth;

        $('#' + sliderId + '').css({ width: slideWidth, height: slideHeight });
        $('#' + sliderId + ' ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
        $('#' + sliderId + ' ul li:last-child').prependTo('#' + sliderId + ' ul');

        $('#' + sliderId + ' a.control_prev').click(function () {
            moveLeft(sliderId);
        });

        $('#' + sliderId + ' a.control_next').click(function () {
            moveRight(sliderId);
        });
    }
    function moveLeft(sliderId) {
        $('#' + sliderId + ' ul').animate({
            left: +slideWidth
        }, 500, function () {
            $('#' + sliderId + ' ul li:last-child').prependTo('#' + sliderId + ' ul');
            $('#' + sliderId + ' ul').css('left', '');
        });
    };

    function moveRight(sliderId) {
        $('#' + sliderId + ' ul').animate({
            left: -slideWidth
        }, 500, function () {
            $('#' + sliderId + ' ul li:first-child').appendTo('#' + sliderId + ' ul');
            $('#' + sliderId + ' ul').css('left', '');
        });
    };

    //Slider Code End

    function OpenPopUp(ul) {
        var options = {
            url: ul,
            width: 600,
            height: 350,
            dialogReturnValueCallback: DialogCallback
        };
        //SP.UI.ModalDialog.showModalDialog(options); --Not working in 2013
        SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
//        window.location.href = ul;
    }

    function DialogCallback(dialogResult, returnValue) {
        if (dialogResult == SP.UI.DialogResult.OK) {
            SP.UI.ModalDialog.RefreshPage(SP.UI.DialogResult.OK);
            //location.reload();
        }
    }

//Plugin start
 (function($)
   {
     var methods = 
       {
         init : function( options ) 
         {
           return this.each(function()
             {
               var _this=$(this);
                   _this.data('marquee',options);
               var _li=$('>li',_this);
                   
                   _this.wrap('<div class="slide_container"></div>')
                       .height(_this.height())
                       .hover(function(){if($(this).data('marquee').stop){$(this).stop(true,false);}},
                              function(){if($(this).data('marquee').stop){$(this).marquee('slide');}})
                        .parent()
                        .css({position:'relative',overflow:'hidden','height':$('>li',_this).height()})
                        .find('>ul')
                        .css({width:screen.width*2,position:'absolute'});
           
                   for(var i=0;i<Math.ceil((screen.width*3)/_this.width());++i)
                   {
                     _this.append(_li.clone());
                   } 
             
               _this.marquee('slide');});
         },
      
         slide:function()
         {
           var $this=this;
           $this.animate({'left':$('>li',$this).width()*-1},
                         $this.data('marquee').duration,
                         'swing',
                         function()
                         {
                           $this.css('left',0).append($('>li:first',$this));
                           $this.delay($this.data('marquee').delay).marquee('slide');
             
                         }
                        );
                             
         }
       };
   
     $.fn.marquee = function(m) 
     {
       var settings={
                     'delay':4000,
                     'duration':900,
                     'stop':true
                    };
       
       if(typeof m === 'object' || ! m)
       {
         if(m){ 
         $.extend( settings, m );
       }
 
         return methods.init.apply( this, [settings] );
       }
       else
       {
         return methods[m].apply( this);
       }
     };
   }
 )( jQuery );
 
 //Plugin end
 
 //call
 /* DIPRNews Section starts */
	function getnews(){
		$.ajax({
			type: "GET",
			url: "http://" + window.location.hostname + ":90/PageContent.asmx/getDIPRNewsContent?siteurl=http://" + window.location.hostname + "&callback=?",
			//     url: "http://10.68.106.77:90/PageContent.asmx/getDIPRNewsContent?callback=?",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (response) {
				BindHomeNews(response);
			},
			failure: function (e) { alert('failure'); },
			error: function (e) { alert('error'); }
		});
	}

    function BindHomeNews(response) {
        $('#homenews').html(response.DIPRNews);
        $('.slide').marquee({ delay: 4000 });
    }

    /* DIPRNews Section ends*/
var images = Array("/_layouts/15/newsp/images/ind1.jpg","/_layouts/15/newsp/images/ind2.jpg","/_layouts/15/newsp/images/ind3.jpg","/_layouts/15/newsp/images/ind4.jpg","/_layouts/15/newsp/images/ind5.jpg","/_layouts/15/newsp/images/ind6.jpg");
var currimg = 0;

/* Home Page Load BG Image*/
function loadimg(){ 
			 $('#background').animate({ opacity: 1 }, 5000,function(){            
    	        $('#background').animate({ opacity: 0.7 }, 1000,function(){                
        	        currimg++;                
            	    if(currimg > images.length-1){                    
                	    currimg=0;                    
	                }                
    	            var newimage = images[currimg];           
        	        //swap out bg src 
            	    $('#background').css("opacity","0.6");
                	$('#background').css("background-image", "url("+newimage+")");             
	                //animate fully back in
    	            $('#background').animate({ opacity: 0.9 }, 1000,function(){    
			setTimeout(loadimg,5000);    	            
	             	$('#background').css("opacity","1");
                });
             });        
        });    
}
/* PopUp */
(function(b){b.fn.bPopup=function(z,F){function M(){a.contentContainer=b(a.contentContainer||c);switch(a.content){case "iframe":var d=b('<iframe class="b-iframe" '+a.iframeAttr+"></iframe>");d.appendTo(a.contentContainer);r=c.outerHeight(!0);s=c.outerWidth(!0);A();d.attr("src",a.loadUrl);k(a.loadCallback);break;case "image":A();b("<img />").load(function(){k(a.loadCallback);G(b(this))}).attr("src",a.loadUrl).hide().appendTo(a.contentContainer);break;default:A(),b('<div class="b-ajax-wrapper"></div>').load(a.loadUrl,a.loadData,function(c,d,e){k(a.loadCallback,d);G(b(this))}).hide().appendTo(a.contentContainer)}}function A(){a.modal&&b('<div class="b-modal '+e+'"></div>').css({backgroundColor:a.modalColor,position:"fixed",top:0,right:0,bottom:0,left:0,opacity:0,zIndex:a.zIndex+t}).appendTo(a.appendTo).fadeTo(a.speed,a.opacity);D();c.data("bPopup",a).data("id",e).css({left:"slideIn"==a.transition||"slideBack"==a.transition?"slideBack"==a.transition?f.scrollLeft()+u:-1*(v+s):l(!(!a.follow[0]&&m||g)),position:a.positionStyle||"absolute",top:"slideDown"==a.transition||"slideUp"==a.transition?"slideUp"==a.transition?f.scrollTop()+w:x+-1*r:n(!(!a.follow[1]&&p||g)),"z-index":a.zIndex+t+1}).each(function(){a.appending&&b(this).appendTo(a.appendTo)});H(!0)}function q(){a.modal&&b(".b-modal."+c.data("id")).fadeTo(a.speed,0,function(){b(this).remove()});a.scrollBar||b("html").css("overflow","auto");b(".b-modal."+e).unbind("click");f.unbind("keydown."+e);h.unbind("."+e).data("bPopup",0<h.data("bPopup")-1?h.data("bPopup")-1:null);c.undelegate(".bClose, ."+a.closeClass,"click."+e,q).data("bPopup",null);clearTimeout(I);H();return!1}function J(d){w=y.innerHeight||h.height();u=y.innerWidth||h.width();if(B=E())clearTimeout(K),K=setTimeout(function(){D();d=d||a.followSpeed;c.dequeue().each(function(){g?b(this).css({left:v,top:x}):b(this).animate({left:a.follow[0]?l(!0):"auto",top:a.follow[1]?n(!0):"auto"},d,a.followEasing)})},50)}function G(d){var b=d.width(),e=d.height(),f={};a.contentContainer.css({height:e,width:b});e>=c.height()&&(f.height=c.height());b>=c.width()&&(f.width=c.width());r=c.outerHeight(!0);s=c.outerWidth(!0);D();a.contentContainer.css({height:"auto",width:"auto"});f.left=l(!(!a.follow[0]&&m||g));f.top=n(!(!a.follow[1]&&p||g));c.animate(f,250,function(){d.show();B=E()})}function N(){h.data("bPopup",t);c.delegate(".bClose, ."+a.closeClass,"click."+e,q);a.modalClose&&b(".b-modal."+e).css("cursor","pointer").bind("click",q);O||!a.follow[0]&&!a.follow[1]||h.bind("scroll."+e,function(){B&&c.dequeue().animate({left:a.follow[0]?l(!g):"auto",top:a.follow[1]?n(!g):"auto"},a.followSpeed,a.followEasing)}).bind("resize."+e,function(){J()});a.escClose&&f.bind("keydown."+e,function(a){27==a.which&&q()})}function H(d){function b(e){c.css({display:"block",opacity:1}).animate(e,a.speed,a.easing,function(){L(d)})}switch(d?a.transition:a.transitionClose||a.transition){case "slideIn":b({left:d?l(!(!a.follow[0]&&m||g)):f.scrollLeft()-(s||c.outerWidth(!0))-C});break;case "slideBack":b({left:d?l(!(!a.follow[0]&&m||g)):f.scrollLeft()+u+C});break;case "slideDown":b({top:d?n(!(!a.follow[1]&&p||g)):f.scrollTop()-(r||c.outerHeight(!0))-C});break;case "slideUp":b({top:d?n(!(!a.follow[1]&&p||g)):f.scrollTop()+w+C});break;default:c.stop().fadeTo(a.speed,d?1:0,function(){L(d)})}}function L(b){b?(N(),k(F),a.autoClose&&(I=setTimeout(q,a.autoClose))):(c.hide(),k(a.onClose),a.loadUrl&&(a.contentContainer.empty(),c.css({height:"auto",width:"auto"})))}function l(a){return a?v+f.scrollLeft():v}function n(a){return a?x+f.scrollTop():x}function k(a,e){b.isFunction(a)&&a.call(c,e)}function D(){x=p?a.position[1]:Math.max(0,(w-c.outerHeight(!0))/2-a.amsl);v=m?a.position[0]:(u-c.outerWidth(!0))/2;B=E()}function E(){return w>c.outerHeight(!0)&&u>c.outerWidth(!0)}b.isFunction(z)&&(F=z,z=null);var a=b.extend({},b.fn.bPopup.defaults,z);a.scrollBar||b("html").css("overflow","hidden");var c=this,f=b(document),y=window,h=b(y),w=y.innerHeight||h.height(),u=y.innerWidth||h.width(),O=/OS 6(_\d)+/i.test(navigator.userAgent),C=200,t=0,e,B,p,m,g,x,v,r,s,K,I;c.close=function(){q()};c.reposition=function(a){J(a)};return c.each(function(){b(this).data("bPopup")||(k(a.onOpen),t=(h.data("bPopup")||0)+1,e="__b-popup"+t+"__",p="auto"!==a.position[1],m="auto"!==a.position[0],g="fixed"===a.positionStyle,r=c.outerHeight(!0),s=c.outerWidth(!0),a.loadUrl?M():A())})};b.fn.bPopup.defaults={amsl:50,appending:!0,appendTo:"body",autoClose:!1,closeClass:"b-close",content:"ajax",contentContainer:!1,easing:"swing",escClose:!0,follow:[!0,!0],followEasing:"swing",followSpeed:500,iframeAttr:'scrolling="no" frameborder="0"',loadCallback:!1,loadData:!1,loadUrl:!1,modal:!0,modalClose:!0,modalColor:"#000",onClose:!1,onOpen:!1,opacity:.7,position:["auto","auto"],positionStyle:"absolute",scrollBar:!0,speed:250,transition:"fadeIn",transitionClose:!1,zIndex:9997}})(jQuery);

//A+ A A-
function aplus() {
    var plus = new Number($('body').css('font-size').replace("px", ""));
    if (plus == 16) {
        plus = plus;
    }
    else {
        plus = plus + 1;
    }
    $('body').css('font-size', plus + 'px');
}

function anormal() {
    $('body').css('font-size', '14px');
}

function aless() {
    var less = new Number($('body').css('font-size').replace("px", ""));
    if (less == 12) {
        less = less;
    }
    else {
        less = less - 1;
    }

    $('body').css('font-size', less + 'px');
}
function blackTheme()
{
	$('body').addClass('white');
}

function whiteTheme()
{
	$('body').removeClass('white');
}
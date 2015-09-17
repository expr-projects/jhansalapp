var Corp = Corp || new function () {
	// Private Utils
	function getURLParam(name) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	};
	function getScriptParam(name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		var results = regex.exec( $("script#saavn-script").attr("src") );
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	
	// Global param values.
	var version = getScriptParam("v");
	var template = getScriptParam("u");
	template = template.replace("corporate.saavn.com/", "www.saavn.com/corporate/")
	
	// Public Utils
	this.smoothTo = function (t, s, callback, offset, container) {
		if (s === undefined) { var s = 420; }
		if ((t === undefined) || t == 0) {
			var targetOffset = 0;
		} else {
			if (offset === undefined)
				var offset = 0;

			var targetOffset = $(t).offset().top - offset;
		}

		if (container === undefined)
            var container = "html, body";

		var cbCount = 0;
        $(container).animate({scrollTop: targetOffset}, s, function () {
			if (typeof callback == "function" && cbCount < 1) {
				callback();
				cbCount++;
			}
		});

		return false;
	}
	this.validateEml = function (e) {
		var rx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return rx.test(e);
	}
	
	// SCROLLING EFFECTS
	function scrollInit() {
		var mastHeight = $("#mast").outerHeight();
		var mastNavHeight = $("#nav-container").outerHeight() + 24;
		var mainNavHeight = $("#main-nav").outerHeight();
		var isHome = ($("body").attr("id") == "home");
		var isPro = ($("body").attr("id") == "pro");
		
		/* Scroll Listener */
		$(document).bind("scroll.mast", function() {
			mastheadScroll(mastHeight, mastNavHeight, mainNavHeight);
			if (isHome) homeArtScroll();
			
			if (isPro && !Corp.isPhone)
			    fixDiv();
		});
		
		/* Resize Listener */
		$(window).bind("resize.mast", function() {
			mastHeight = $("#mast").outerHeight();
			mastNavHeight = $("#nav-container").outerHeight() + 24;
			mainNavHeight = $("#main-nav").outerHeight();
			mastheadScroll(mastHeight, mastNavHeight, mainNavHeight);
			if (isHome) homeArtScroll();
			
			/* Stick Pro Scroll */
	    	if (isPro) {
                if ($(window).width() < 500) {
                    $('#first-copy').removeClass('chunck-one');
                    $('#second-copy').removeClass('chunck-two');
                    $('#third-copy').removeClass('chunck-three');
                }else{
                    $('#first-copy').addClass('chunck-one');
                    $('#second-copy').addClass('chunck-two');
                    $('#third-copy').addClass('chunck-three');
                }
    		}
		});
		
		/* Scroll Effects First Load */
		mastheadScroll(mastHeight, mastNavHeight, mainNavHeight);
		if (isHome) {
			$(".home-art").each(function() {
				$(this).attr("data-top", $(this).position().top);
			});
			homeArtScroll();
		}
	};
	function fixDiv() {
	    console.log("FIX DIV");
	    
        var windowPosY = $(this).scrollTop();
        var $fixedWindow = $('.scroll-fixed');

        var $firstImg = $('.first-img');
        var $secondImg = $('.second-img');
        var $thirdImg = $('.third-img');

        var $firstCopy = $('.chunck-one');
        var $secondCopy = $('.chunck-two');
        var $thirdCopy = $('.chunck-three');

        if (windowPosY >= 500 && windowPosY <= 1160)
            $fixedWindow.addClass('fixedSection');
        else
            $fixedWindow.removeClass('fixedSection');

        if (windowPosY > 1160)
            $fixedWindow.addClass('pushBottom');
        else
            $fixedWindow.removeClass('pushBottom');

        if (windowPosY >= 600)
            $secondCopy.fadeIn(200),
            $firstImg.fadeOut(200);
        else
            $secondCopy.fadeOut(200),
            $firstImg.fadeIn(200);

        if (windowPosY >= 900)
            $thirdCopy.fadeIn(200),
            $secondImg.fadeOut(200);
        else
            $thirdCopy.fadeOut(200),
            $secondImg.fadeIn(200);
    } 
	
	// Masthead
	function mastheadScroll(mH, nH, mnH) {
		Corp.scrollT = $(document).scrollTop();
		
		var s = Corp.scrollT;
		if (s <= mH) {
			var mastVal = 1 * (s/(mH * .9));
			
			// Mast fade.
			var imgY = -s/6;
			if (imgY > 0) imgY = 0;
			$("#mast-img").css({
				opacity: 1 - (mastVal * .93),
				"-webkit-transform": "translateY(" + imgY + "px)",
				"-moz-transform": "translateY(" + imgY + "px)",
				"-ms-transform": "translateY(" + imgY + "px)",
				"transform": "translateY(" + imgY + "px)"
			});
			
			var tY = -1 * ((mH / 2) * (mastVal * .62));
			$("#mast h1, #mast-btns").css({
				opacity: 1 - (mastVal * 1.2),
				"-webkit-transform": "translateY(" + tY + "px)",
				"-moz-transform": "translateY(" + tY + "px)",
				"-ms-transform": "translateY(" + tY + "px)",
				"transform": "translateY(" + tY + "px)"
			});
			
			// Header fade.
			if (s > (mH - nH)) {
				var hdrVal = 1 * ((s-(mH - nH)) / nH);
				var hdrY = nH * (hdrVal * .62);
				$("#nav-container").css({
					opacity: 1 - (hdrVal * 1.2),
					"-webkit-transform": "translateY(-" + hdrY + "px)",
					"-moz-transform": "translateY(-" + hdrY + "px)",
					"-ms-transform": "translateY(-" + hdrY + "px)",
					"transform": "translateY(-" + hdrY + "px)"
				});
				$("#pin-logo").css({ opacity: hdrVal });
			} else {
				$("#nav-container").css({
					opacity: 1,
					"-webkit-transform": "translateY(0px)",
					"-moz-transform": "translateY(0px)",
					"-ms-transform": "translateY(0px)",
					"transform": "translateY(0px)"
				});
				$("#pin-logo").css({ opacity: 0 });
			}
		
		} else {
			$("#mast-img").css({
				opacity: 0,
				"-webkit-transform": "translateY(" + -mH/6 + "px)",
				"-moz-transform": "translateY(" + -mH/6 + "px)",
				"-ms-transform": "translateY(" + -mH/6 + "px)",
				"transform": "translateY(" + -mH/6 + "px)"
			});
			$("#mast h1, #mast-btns").css({
				opacity: 0,
				"-webkit-transform": "translateY(" + -mH + "px)",
				"-moz-transform": "translateY(" + -mH + "px)",
				"-ms-transform": "translateY(" + -mH + "px)",
				"transform": "translateY(" + -mH + "px)"
			});
			$("#nav-container").css({
				opacity: 0,
				"-webkit-transform": "translateY(" + -nH + "px)",
				"-moz-transform": "translateY(" + -nH + "px)",
				"-ms-transform": "translateY(" + -nH + "px)",
				"transform": "translateY(" + -nH + "px)"
			});
			$("#pin-logo").css({ opacity: 1 });
		}
		
	
		if (s >= (mH + 10)) {
			$("body").addClass("nav-pin");
			$("#page").css({ "padding-top": mnH + "px" });
			if (((s-mH)/20) < 1)
				$("#main-nav-shadow").css({ opacity: ((s-mH)/20) });
			else
				$("#main-nav-shadow").css({ opacity: 1 });
		} else {
			$("body").removeClass("nav-pin");
			$("#page").css({ "padding-top": "0px" });
			$("#main-nav-shadow").css({ opacity: 0 });
		}
	};
	
	// Lazy Loading Image
	function loadMastImage() {
		var img = "";
		
		switch ( $("body").attr("id") ) {
			case "home":
				img = "ranbir.jpg";
			break;
			
			case "mobile":
				img = "runner.jpg";
			break;
			
			case "pro":
				img = "girl.jpg";
			break;
			
			default:
				img = Corp.defaultMast;
			break;
		}
		
		var src = template + "/_i/mast/" + img;
		var img = new Image();
		$(img).load(function() {
			$("#mast-img-bin").css({
				"background-image": "url(" + src + ")",
				opacity: 0
			}).animate({
				opacity: 1
			}, 1200);
		});
		img.src = src;
	};
	
	// Home Art
	function homeArtScroll() {
		var pct = Corp.scrollT / Corp.scrollH;
		
		$(".home-art").each(function(i) {
			var imgY = ((i+1)/3) * 120 * pct;
			$(this).css({ top: $(this).attr("data-top") - imgY });
		});
	};
	
	// Ad Lead Gen Form Handling
	function validateForm (form, id) {
		var valid = true;
		$(id + " .error").removeClass("error");
		
		// Name
		if (form.name == "" || $(id + "-n").hasClass("empty")) {
			valid = false;
			$(id + "-n").addClass("error");
		}
		// Email
		if (form.email == "" || $(id + "-e").hasClass("empty") || !Corp.validateEml(form.email)) {
			valid = false;
			$(id + "-e").addClass("error");
		}
		// Company
		if (form.company == "" || $(id + "-c").hasClass("empty")) {
			valid = false;
			$(id + "-c").addClass("error");
		}
		// Phone
		if (form.phone == "" || $(id + "-p").hasClass("empty") || form.phone.length < 10) {
			valid = false;
			$(id + "-p").addClass("error");
		}
		
		// City (Advertising)
		if (form.company == "" || $(id + "-city").hasClass("empty")) {
			valid = false;
			$(id + "-city").addClass("error");
		}
		// Country (Advertising)
		if (form.company == "" || $(id + "-country").hasClass("empty")) {
			valid = false;
			$(id + "-country").addClass("error");
		}
		
		// Message
		if (form.message == "") {
			valid = false;
			$(id + "-m").addClass("error");
		}
		
		// Locales (Advertising)
		if (form.locales && form.locales == "") {
			valid = false;
			$(id + "-locales").parent().find("em").addClass("error");
		}
		
		// Types (Content & Labels)
		if (form.types && form.types == "") {
			valid = false;
			$(id + "-types").parent().find("em").addClass("error");
		}
		
		return valid;
	};
	function submitForm (id) {
		var form = {};
		form.name = $.trim( $(id + "-n").val() );
		form.email = $.trim( $(id + "-e").val() );
		form.company = $.trim( $(id + "-c").val() );
		form.phone = $.trim( $(id + "-p").val() ).replace(/\s/g, '');
		form.message = $.trim( $(id + "-m").val() );
		
		if (id == "#leadgen") {
			form.locales = "";
			$("#leadgen-locales input").each(function () {
				if ( $(this).is(":checked") ) {
					if (form.locales != "") {
						form.locales += ", ";
					}
					form.locales += $(this).parent().text();
				}
			});
			form.city = $.trim( $(id + "-city").val() );
		    form.country = $.trim( $(id + "-country").val() );
		}
		
		if (id == "#contentgen") {
			form.types = "";
			$("#contentgen-types input").each(function () {
				if ( $(this).is(":checked") ) {
					if (form.types != "") {
						form.types += ", ";
					}
					form.types += $(this).parent().text();
				}
			});
		}
		
		if ( validateForm(form, id) ) {
			$(".form-note").slideUp(90, function() {
				$(this).remove();
			});
			$(id + " input, " + id + " textarea").attr("disabled", "disabled");
			$(id + "-submit").html("One moment...").addClass("disabled");
			
			var data = "name=" + form.name + "&email=" + form.email + "&company=" + form.company + "&phone=" + form.phone + "&message=" + form.message;
			if (id == "#leadgen")
				data += "&city=" + form.city + "&country=" + form.country + "&locales=" + form.locales + "&referral=" + Corp.leadGen.referral + "&tracker=" + Corp.leadGen.tracker;
			if (id == "#contentgen")
				data += "&types=" + form.types;
			
			var theUrl = "";
			if (id == "#leadgen")
			 	theUrl = template + "/inc/leadgen-form.php";
			else if (id == "#contentgen")
				theUrl = template + "/inc/contentgen-form.php";
			else {
				formError(id, true);
				return;
			}

			$.ajax({
				type: "POST",
				url: theUrl,
				data: data,
				success: function (phpReturnResult) {
					if (phpReturnResult == "success") {
						formSuccess(id);
					} else {
						formError(id);
					}
				},
				error: function(errormessage) {
					formError(id);
				}
			});
		}
	};
	function formSuccess (id) {
		$(id + "-submit").addClass("highlight").html("Success!");
		$(id).append("<p class=\"form-note success\">Your message has been sent.");
		
		var resetInt = setInterval(function () {
			$(id + "-submit").removeClass("highlight disabled").html("Send Message");
			$(".form-note").slideUp(90, function() {
				$(this).remove();
			});
			$(id + " input[type=text], " + id + " textarea").val("");
			$(id + " input[type=text], " + id + " textarea").blur();
			$(id + " input[type=checkbox]").attr("checked", false);
			$(id + " input, " + id + " textarea").attr("disabled", false);
			clearInterval(resetInt);
		}, 5000);
	};
	function formError (id, prefail) {
		$(id + "-submit").removeClass("disabled").html("Send Message");
		
		var msg = (prefail) ? '<p class="form-note error">Sorry! We had trouble contacting the server. Please try again...</p>'
							: '<p class="form-note error">Sorry! We had trouble sending your message. Please try again...</p>';
		
		$(id).append(msg);
		$(id + " .form-note").slideDown(120);
	};

    // Pro Pricing Options
    function updatePrice(sel) {
        // Update related select fields and labels.
        var platform = $(sel).closest(".select-wrap").attr("data-platform");
        var type = $(sel).closest(".select-wrap").attr("data-type");
		var i = $(sel).find("option:selected").index();
		
		var newVal = "";
        if (type == "locale") newVal = Corp.proLocales[i];
        if (type == "duration") newVal = $(sel).find("option:nth-child(" + (i+1) + ")").text();
        if (newVal == "") return;
        
        // If Android + ROW selected, disable the duration dropdown and reset to the default value.
        if (type == "locale" && platform == "android") {
            var durSel = $("#" + platform + "-duration");
            if (newVal == "world") {
                $(durSel).closest(".filled-border").addClass("see-through");
                $(durSel).find("select option").prop("selected", false);
                $(durSel).find("select option:nth-child(" + (Corp.proDefaultIndex + 1) + ")").prop("selected", true);
                
                var dfault = $(durSel).find(".select-box").attr("data-default");
                $(durSel).find(".select-box").html(dfault);
            } else if (platform != "ios") {
                $(durSel).closest(".filled-border").removeClass("see-through");
            }
        }
        
        // Update actual price displays.
        setPriceDisplay(sel);
    };
    function setPriceDisplay(sel) {
        var groupType = $(sel).closest(".price-group").attr("data-platform");
        
        var localeIdx = $("#" + groupType + "-locale").find("option:selected").index();
        var locale = Corp.proLocales[localeIdx];
        
        var options = $("#" + groupType + "-duration").find("option").length;
        var durationIdx = 0;
        $("#" + groupType + "-duration").find("option").each(function(i) {
            if ($(this).prop("selected")) {
                durationIdx = i;
            }
        });
        
        // var durationIdx = $("#" + groupType + "-duration").find("option:selected").index();
        var durationNumStr = Corp.proDurations[durationIdx].substr(0,1);
        var durationTypeStr = Corp.proDurations[durationIdx].substr(2, Corp.proDurations[durationIdx].length - 2);
        
        switch (durationTypeStr) {
            case "Wk":
                durationTypeStr = "Week";
                break;
            case "Mo":
                durationTypeStr = (durationNumStr > 1) ? "Months" : "Month";
                break;
            case "Yr":
                durationTypeStr = "Year";
                break;
            default:
                break;
        }
        
        var price = Corp.proPrices[groupType][locale][durationIdx];
        var currencyName = (locale == "india") ? "RS." : "USD";
        var currency = (locale == "india") ? "&#8377;" : "$";
        
        // Time
        $("#" + groupType + "-price-time .length-number").html(durationNumStr);
        $("#" + groupType + "-price-time .length-type").html(durationTypeStr.toLowerCase());
        
        // Price
        $("#" + groupType + "-price-total .pay-type").html(currencyName);
        $("#" + groupType + "-price-total .pay-price").html(price);
        $("#" + groupType + "-price-total .pay-price").removeClass("india world");
        $("#" + groupType + "-price-total .pay-price").addClass(locale);
        $("#" + groupType + "-price-total .pay-length").html("/ " + durationNumStr + " " + durationTypeStr);
    };

	// INIT ANY PAGE UI ELEMENTS, ANCHORS, ETC.
	function initPage(id) {
		// Page-specific stuff. May as well not waste cycles.
		switch (id) {
			case "home":
				$(".btn-apps").click(function() { Corp.smoothTo('#home-about', 210, null, 142); });
			break;
			
			case "pro":
				$(".btn-trial").click(function() { Corp.smoothTo('#pro-get-started', 340, null, 42); });
				$(".btn-pricing").click(function() { Corp.smoothTo('#pro-pricing', 340, null, 42); });
				
				// Custom select field handling.
        		$("select").change(function() {
        			if ( !$(this).parent().hasClass("select-wrap") ) return;
			
        			var t = $(this).parent().find(".select-box");
        			var v = $(this).val();
        			var c = $(t).html();
        			
        			if (v == c) return;
			
			        var dfault = $(this).parent().find(".select-box").attr("data-default");
			        
        			if (v == -1) {
        				$(t).addClass("placeholder");
        				$(t).html(dfault);
        			} else {
        				$(t).removeClass("placeholder");
        				var str = $(this).val();
        				// Shorten Worldwide for easier layout.
        				if (str == "Worldwide") str = "World";
        				$(t).html(str);
        			}
        			
        			updatePrice( $(this) );
        		});
			break;
			
			case "press":
				$(".btn-releases").click(function() { Corp.smoothTo('#press-releases', 210, null, 120); });
				$(".btn-coverage").click(function() { Corp.smoothTo('#press-coverage', 340, null, 93); });
			break;
			
			case "jobs":
				$(".btn-positions").click(function() { Corp.smoothTo('#job-listings', 210, null, 120); });
				$(".btn-culture").click(function() { Corp.smoothTo('#our-culture', 210, null, 120); });
			break;
			
			case "advertise":
				// Ad Lead Gen Tracking
				Corp.leadGen.referral = $(document)[0].referrer;
				Corp.leadGen.tracker = getURLParam("ref");
				if (Corp.leadGen.referral == null || Corp.leadGen.referral === undefined)
					Corp.leadGen.referral = "";
				if (Corp.leadGen.tracker == null || Corp.leadGen.tracker === undefined)
					Corp.leadGen.tracker = "";
				
				$(".btn-ad-reel").click(function() { Corp.smoothTo('#ad-reel', 210, null, 120); });
				$(".btn-ad-contact").click(function() { Corp.smoothTo('#leadgen', 340, null, 57); });
				$("#leadgen-submit").click(function () {
					if (!$(this).hasClass("disabled"))
						submitForm("#leadgen");
				});
			break;
			
			case "brand":
				$(".download-types li a").each(function() {
					var name = $(this).closest(".brand-item").attr("data-type");
					var type = $(this).text().toLowerCase();
					var dir = "";
					if ( $(this).closest(".brand-item").attr("data-dir") )
						dir = $(this).closest(".brand-item").attr("data-dir") + "/";
					
					if (type == "png" || type == "jpg")
						name += "-1000";
					
					$(this).attr("href", template + "/assets/logos/" + dir + "Saavn-" + name + "." + type);
				});
			break;
			
			case "labels":
				$("#contentgen-submit").click(function () {
					if (!$(this).hasClass("disabled"))
						submitForm("#contentgen");
				});
			break;
			
			case "music-rights":
			     $(".rights-link").click(function() {
			         Corp.smoothTo("#" + $(this).attr("data-link"), 340, null, 57);
			     });
			break;
			
			default:
				// Nuffin.
			break;
		}
		
		// Autofill Field Labels
		$("input[type=text].autofill").each(function() {
			var orig = $(this).attr("title");
			$(this).attr("title", "");
			if ( $(this).val().replace(/ /g,'') == "") {
				$(this).val(orig);
				$(this).addClass("empty");
			}

			$(this).bind("focus.autofill", function() {
				if ($(this).val() == orig) {
					$(this).val("");
				}
				$(this).removeClass("empty");
			});
			$(this).bind("blur.autofill", function() {
				if ( $(this).val().replace(/ /g,'') == "") {
					$(this).val(orig);
					$(this).addClass("empty");
				}
			});
		});
		$("input[type=password].autofill").each(function() {
			var lbl = "<label class=\"pw-label\">" + $(this).attr("title") + "</label>";
			$(this).attr("title", "");

            $(this).parent().css("position", "relative").addClass("empty");
			$(this).parent().append(lbl);
			var t = $(this).parent().find(".pw-label");
			$(t).click(function() {
				$(this).parent().find("input[type=password]").focus();
				$(this).fadeOut(120);
			});

			if ( $(this).val().replace(/ /g,'') == "") {
				$(t).fadeIn(120);
			}

            $(this).focus(function() {
                $(this).parent().removeClass("empty");
                $(t).fadeOut(120)
            });
			$(this).blur(function() {
				if ( $(this).val().replace(/ /g,'') == "") {
                    $(this).parent().addClass("empty");
					$(t).fadeIn(120);
				}
			});
		});
		
		// Autoselect for readonly inputs.
		$(".autoselect").focus(function() {
			// Fixes webkit autoselect bug on when focus obtained via click
			$(this).select().mouseup(function(e) {
				e.preventDefault();
				$(this).unbind("mouseup");
			});
			$(this).select();
		});
		
		// Facebook Share
		$(".facebook-share").click(function() {
			FB.ui({
				method: 'feed',
				name: $(this).closest(".social-shares").attr("data-title"),
				link: $(this).closest(".social-shares").attr("data-url"),
				picture: template + '/_i/share-image.png',
				caption: $(this).closest(".social-shares").attr("data-description"),
				description: ''
			}, function(response) {
				// Foo.
			});
		});
		
		// Google+ Share
		$(".gplus-share").click(function() {
			var url = "https://plus.google.com/share?url=";
			url += $(this).closest(".social-shares").attr("data-url");
			newwindow = window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			
			if (newwindow == null || typeof(newwindow)=='undefined')
				alert('Please disable your pop-up blocker and click the "Open" link again.');
			else  
				newwindow.focus();
			
			return false;
		});
	
		// Mobile Nav
		$("#mobile-nav-handle").click(function() {
			var to;
			
			if ( $("html").hasClass("show-mobile-nav") ) {
				$("html").removeClass("slide-nav");
				document.ontouchmove = function(e){ return true; }
				to = setTimeout(function() { $("html").removeClass("show-mobile-nav"); }, 342);
			} else {
				$("html").addClass("show-mobile-nav");
				document.ontouchmove = function(e){ e.preventDefault(); }
				to = setTimeout(function() { $("html").addClass("slide-nav"); }, 20);
			}
		});
	
		// Obf E
		// http://rot13.de/
		$(".e").each(function() {
			var obfE = "";
			switch($(this).attr("data-e")) {
				case "press":
					obfE = "<n uers=\"znvygb:cerff@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
				
				case "support":
					obfE = "<n uers=\"znvygb:fhccbeg@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
				
				case "brand":
					obfE = "<n uers=\"znvygb:oenaq@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
					
				case "jobs":
					obfE = "<n uers=\"znvygb:wbof@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
					
				case "marketing":
					obfE = "<n uers=\"znvygb:znexrgvat@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
					
				case "content-inquiries":
					obfE = "<n uers=\"znvygb:pbagrag-vadhvevrf@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
				
				case "jobs.in":
					obfE = "<n uers=\"znvygb:wbof.va@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
					
				default:
					obfE = "<n uers=\"znvygb:srrqonpx@fnnia.pbz\" ery=\"absbyybj\">".replace(/[a-zA-Z]/g, function(c) {
						return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
					});
					break;
			}
			
			var label = $(this).html();
			if ($.trim(label) == "")
			    label = $(this).attr("data-e") + "@saavn.com";

			var css = $(this).attr("data-class");
			$(this).html(obfE + label + "</a>");
			$(this).find("a").addClass(css);
			if ($(this).attr("data-sub")) {
				var h = $(this).find("a").attr("href");
				h += "?subject=" + $(this).attr("data-sub");
				$(this).find("a").attr("href", h);
			}
		});
	};
	
	
	/* DOM READY
	--------------------------------------------- */
	$(function() {
		Corp.theme = $("html").attr("data-theme");
		Corp.pageH = $(window).height();
		Corp.scrollH = $("body").prop("scrollHeight") - Corp.pageH;
		Corp.isPhone = $("html").hasClass("mobile") && !$("html").hasClass("tablet");
		var shortHeader = $("body").hasClass("short-head");
		
		scrollInit();
		
		if (!shortHeader)
			loadMastImage();
		
		initPage( $("body").attr("id") );
	});
}

Corp.pageH;
Corp.scrollH;
Corp.scrollT;
Corp.defaultMast = "ranbir.jpg";
Corp.theme = "";
Corp.leadGen = {};
Corp.isPhone = false;

Corp.proLocales = ["india", "world"];
Corp.proDurations = ["1 Day", "1 Wk", "1 Mo", "3 Mo", "6 Mo", "1 Yr"]; 
Corp.proPrices = {
    android: {
        india: [5,30,99,285,550,999],
        world: [0,0,3.99,0,0,0],
    },
    ios: {
        india: [0,0,250,0,0,0],
        world: [0,0,3.99,0,0,0],
    }
};
Corp.proDefaultIndex = 2;




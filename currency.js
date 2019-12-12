coheo
! function() {
    var e;
    if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || a()
        } : t.onload = a, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
    } else e = window.jQuery, r();

    function a() {
        e = window.jQuery.noConflict(!0), r()
    }
    function r() {
        e(document).ready(function(M) {
            M(".coinmarketdaddy-currency-widget").each(function() {
                var e,currency = M(this).attr("data-currency"),
                    currencyid = M(this).data("currencyid"),
                    base = M(this).attr("data-base").toUpperCase(),
               		ticker = !1 !== M(this).data("ticker"),
					rating = !1 !== M(this).data("rating"),
                    rank = !1 !== M(this).data("rank"),
                    marketcap = !1 !== M(this).data("marketcap"),
                    volume = !1 !== M(this).data("volume"),
					supply = !1 !== M(this).data("supply");
					widgetmode =  M(this).data("mode");
					e = "https://coinmarketdaddy.com/widget-generate/" + currencyid + "/" + base+"/ref/"+encodeURIComponent(window.btoa(window.location.href))+"/", M.get({
                    url: e,
                    success: function(e) {
						var jsonR=M.parseJSON(e);
						var symbol = (ticker==true) ? '('+jsonR.symbol+')':"";
						var baseCurrency = (base!='USD') ? jsonR.quotes[base].price+' '+base:jsonR.USD.price+' USD';
						var ratingStar = (rating==true) ? '<div style="width:100%;">'+jsonR.rating+'</div>':"";
						if(widgetmode=='dark') { var cmdbgcolor='#252525'; var cmdcolor='#FFFFFF'; var cmdlinkcolor='#FFFFFF'; var cmdbottomcolor='#000000'; } else { var cmdbgcolor='#FFFFFF'; var cmdcolor='#000000';  var cmdlinkcolor='#00F';  var cmdbottomcolor='#e5e5e5';}
					
						
						var market_cap = (base!='USD') ? jsonR.quotes[base].market_cap+' <span style="font-size:12px;color:'+cmdbgcolor+';font-family:Arial, Helvetica, sans-serif;">'+base+'</span>':jsonR.USD.market_cap+' <span style="font-size:12px; color:'+cmdbgcolor+';font-family:Arial, Helvetica, sans-serif;">USD</span>';
						var volume_24h = (base!='USD') ? jsonR.quotes[base].volume_24h+' <span style="font-size:12px;color:'+cmdbgcolor+';font-family:Arial, Helvetica, sans-serif;">'+base+'</span>':jsonR.USD.volume_24h+' <span style="font-size:12px; color:'+cmdbgcolor+';font-family:Arial, Helvetica, sans-serif;">USD</span>';
						
						var current_supply = jsonR.USD.current_supply;
						var max_supply = jsonR.USD.max_supply;
						
						
						var percent_change_24h = (jsonR.USD.percent_change_1h<0) ? '<span style="color:#F90000">('+jsonR.USD.percent_change_1h+'%)</span>':'<span style="color:#009e73">('+jsonR.USD.percent_change_1h+'%)</span>';
						var rankD = (rank==true) ? '<div style="clear:both;"></div><div style="width:50%; text-align:left; text-align:left; float:left; border-top:1px solid #e5e5e5; font-size:15px; font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px; padding-left:15%;">Rank</div></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5;color:'+cmdcolor+';font-family:Arial, Helvetica, sans-serif;"><div style="padding:5px;"><img src="https://coinmarketdaddy.com/rank.png" width="16" height="14">  '+jsonR.rank+'</div> </div>':"";
						var marketcapD='';
				
						if(jsonR.USD.market_cap!="") { 
						marketcapD = (marketcap==true) ? '<div style="clear:both;"></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5; font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px; padding-left:15%;">Market Cap</div></div><div style="width:50%; text-align:left; float:left; font-size:15px;color:'+cmdcolor+'; border-top:1px solid #e5e5e5;font-family:Arial, Helvetica, sans-serif;"><div style="padding:5px;"><img src="https://coinmarketdaddy.com/mkico.png" width="16" height="12">  '+market_cap+'</div> </div>':"";
						}
						
						var volumeD='';
						if(jsonR.USD.volume_24h!="") { 
						volumeD = (volume==true) ? '<div style="clear:both;"></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5; font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px; padding-left:15%;">Volume (24h)</div></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5;font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px;"><img src="https://coinmarketdaddy.com/v24ico.png" width="16" height="18">  '+volume_24h+'</div> </div>':"";
						}
						
						var supplyD='';
						if(current_supply!="") { 
						supplyD = (supply==true) ? '<div style="clear:both;"></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5; font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px; padding-left:15%;">Current Supply</div></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5;font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px;"><img src="https://coinmarketdaddy.com/csico.png" width="16" height="16">  '+current_supply+' </div> </div>':"";
						}
						var supplyD1='';
						if(max_supply!="") { 
						supplyD1 = (supply==true) ? '<div style="clear:both;"></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5; font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px; padding-left:15%;">'+jsonR.stype+' Supply</div></div><div style="width:50%; text-align:left; float:left; font-size:15px; border-top:1px solid #e5e5e5;font-family:Arial, Helvetica, sans-serif;color:'+cmdcolor+';"><div style="padding:5px;"><img src="https://coinmarketdaddy.com/msico.png" width="16" height="19">  '+max_supply+'</div> </div>':"";
						}
						
						 M(".coinmarketdaddy-currency-widget").html('<div style="border:1px solid '+cmdbottomcolor+'; background-color:'+cmdbgcolor+'; border-radius:10px; width:100%;"><div style="float: left;margin-bottom: 3px;padding: 5px;width: 100%; display: flex;align-items: center;justify-content: center;"><div style="width:33%; float:left;  display: flex;align-items: center;justify-content: center; text-align:center;"><img src="https://coinmarketdaddy.com/image.php?path=upload/coin/'+jsonR.icon+'&w=64&h=64"></div><div style="width:67%; text-align:left; float:left;"><div style="width:100%;text-decoration: none; font-size: 18px; color:'+cmdlinkcolor+'; font-family:Arial, Helvetica, sans-serif;">'+jsonR.name+' '+symbol+'</div><div style="width:100%; font-size: 15px; font-family:Arial, Helvetica, sans-serif; color:'+cmdcolor+';">'+baseCurrency+' '+percent_change_24h+'</div>'+ratingStar+'</div></div>'+rankD+marketcapD+volumeD+supplyD+supplyD1+'<div style="clear:both;"></div><div style=" background-color:'+cmdbottomcolor+'; border-radius: 0 0 10px 10px; text-align:center;clear:both;font-size:13px;padding:5px 0;"></div><div style="clear:both;"></div></div>');
						
                    }
                })
				
            })
        })
    }
}();

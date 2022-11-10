var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function(){
    $('#thankyou').hide();
	
	$('#contactform').submit(function(){
	
		var action = $(this).attr('action');
		
		$("#message").slideUp(750,function() {
		$('#message').hide();
		
 		$('#submit')
			.attr('disabled','disabled');
		
		$.post(action, { 
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
			verify: $('#verify').val()
		},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#submit').removeAttr('disabled'); 
					if(data.match('success') != null) {
					$('#talktous').hide();
					$('#thankyou').show();
					$('#stamp').css("background-image", "url(../img/stamp_success.png)");
					$('#contactform').slideUp('slow');
					}
					
				}
			);
			
			});
			
			return false; 
		
		});
		
	});
	

}
/*
     FILE ARCHIVED ON 16:49:28 Nov 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:06:04 Nov 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 103.757
  exclusion.robots: 0.178
  exclusion.robots.policy: 0.162
  RedisCDXSource: 0.871
  esindex: 0.014
  LoadShardBlock: 73.65 (3)
  PetaboxLoader3.datanode: 58.878 (5)
  CDXLines.iter: 23.255 (3)
  PetaboxLoader3.resolve: 113.77 (3)
  load_resource: 129.942 (2)
*/

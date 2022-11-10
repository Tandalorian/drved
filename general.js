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

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


// I dont think this is hooked up
//it makes the html5 placeholder backwards compatible 
function elementSupportsAttribute(element, attribute) {
  var test = document.createElement(element);
  if (attribute in test) {
    return true;
  } else {
    return false;
  }
};

if (!elementSupportsAttribute('textarea', 'placeholder')) {
  // Fallback for browsers that don't support HTML5 placeholder attribute
  $("#example-three")
    .data("originalText", $("#example-three").text())
    .css("color", "#999")
    .focus(function() {
        var $el = $(this);
        if (this.value == $el.data("originalText")) {
          this.value = "";
        }
    })
    .blur(function() {
      if (this.value == "") {
          this.value = $(this).data("originalText");
      }
    });
} else {
  // Browser does support HTML5 placeholder attribute, so use it.
  $("#example-three")
    .attr("placeholder", $("#example-three").text())
    .text("");
}

}
/*
     FILE ARCHIVED ON 21:36:31 Nov 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:06:04 Nov 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 135.547
  exclusion.robots: 0.085
  exclusion.robots.policy: 0.077
  cdx.remote: 0.062
  esindex: 0.01
  LoadShardBlock: 86.435 (3)
  PetaboxLoader3.datanode: 97.972 (5)
  CDXLines.iter: 14.29 (3)
  load_resource: 208.598 (2)
  PetaboxLoader3.resolve: 158.318 (2)
*/

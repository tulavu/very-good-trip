$(function() {
  $.fn.swipe = function( callback ) {
    var touchDown = false,
      originalPosition = null,
      $el = $( this );

    function swipeInfo( event ) {
      var x = (!event.originalEvent.pageX ? event.originalEvent.touches[0].pageX : event.originalEvent.pageX),
        y = (!event.originalEvent.pageY ? event.originalEvent.touches[0].pageY : event.originalEvent.pageY),
        dx, dy;
        console.log(y);
      dx = ( x > originalPosition.x ) ? "right" : "left";
      dy = ( y > originalPosition.y ) ? "down" : "up";

      return {
        direction: {
          x: dx,
          y: dy
        },
        offset: {
          x: x - originalPosition.x,
          y: originalPosition.y - y
        }
      };
    }

    var flag = false;

    $el.on( "touchstart mousedown", function ( event ) {
      if (!flag) {
        flag = true;
        setTimeout(function(){ flag = false; }, 100);
        // do something
      }
      touchDown = true;
      originalPosition = {
        x : (!event.originalEvent.pageX ? event.originalEvent.touches[0].pageX : event.originalEvent.pageX),
        y : (!event.originalEvent.pageY ? event.originalEvent.touches[0].pageY : event.originalEvent.pageY)
      };
    } );

    $el.on( "touchend mouseup", function () {
      touchDown = false;
      originalPosition = null;
    } );

    $el.on( "touchmove mousemove", function ( event ) {
      if ( !touchDown ) { return;}
      var info = swipeInfo( event );
      callback( info.direction, info.offset );
    } );

    return true;
  };
});

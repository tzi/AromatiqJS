(function(e,t){var r=t();function n(t){if(!t){t=[]}else if(t.nodeType){t=[t]}var n=Array.prototype.slice.call(arguments,1);return r.apply(e,[t].concat(n))}if(typeof define==="function"&&define.amd){define(function(){return n})}else{if(e.jQuery){e.jQuery.fn[r.name]=function(){return r.apply(e,[this.toArray()].concat(arguments))}}else{e[r.name]=n}}})
(this,function(){
  var addEventListener = "addEventListener" in window
    , eventListener = addEventListener ? "addEventListener" : "attachEvent"
    , prefix = addEventListener ? "" : "on"
    , clickEvent = "createTouch" in document ? "touchend" : "click"

  return function popup(elements, width, height) {
    var length = elements.length;
    for(;length--;) {
      (function(item){
        if (item.href) {
          item[eventListener](prefix + clickEvent, function(event){
            event = event || window.event
            if("preventDefault" in event) event.preventDefault()
            else event.returnValue = false

            window.open(item.href, "", "width="+width+", height="+height+"")
            return false;
          })
        }
      })(elements[length])
    }
  }
})
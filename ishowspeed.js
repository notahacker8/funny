(function(){
var is = document.getElementsByTagName("IMG")
for (var i = 0 ; i < is.length ; i++) {is[i].src="https://c.tenor.com/rV8mpdXgZpAAAAAd/i-show-speed-speed.gif"; is[i].crossorigin="anonymous"}
  const targetNode = document;
const config = { childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // Elements have changed
          var is = document.getElementsByTagName("IMG")
for (var i = 0 ; i < is.length ; i++) {is[i].src="https://c.tenor.com/rV8mpdXgZpAAAAAd/i-show-speed-speed.gif"; is[i].crossorigin="anonymous"}
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
})();

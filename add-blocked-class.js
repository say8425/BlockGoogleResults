function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
  // TODO make dynamic href filter
  document.querySelectorAll("a[href*='say8425.github']").forEach(function(aTag) {
    aTag.closest('.g').classList.add('blocked-result')
  })
})

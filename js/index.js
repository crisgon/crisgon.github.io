var tags = document.querySelectorAll( '.post-tags-list-item' );
// var tag = tags.querySelector('post-tags-list-link');
tags.forEach( function( item ) {
  var tag = item.firstChild.innerHTML;
  switch ( tag ) {
    case "CSS":
      item.classList.add('tag-css');
      break;
    
    case "Javascript":
      item.classList.add('tag-js');
      break;
    
    case "HTML":
      item.classList.add('tag-html');
      break;
    
    default:
      item.classList.add('tag-default');
  }
});
jQuery(document).ready(function($) {

// click on image, get that image's src, overlay lightbox container, show image src in container
$('.item img').click(function(e) {
  var thisImage = $(this);
  var image_src = $(this).attr("src");


  var index;
  var galleryLength = $(".gallery .item").length;
  index = $(this).parent().index();


  if ($('#lightbox').length > 0) { // #lightbox exists

    //place src as img src value
			$('#content').html('<img src="' + image_src + '" />');

      //show lightbox window
    $('#lightbox').show();
    $('body').toggleClass('no-scroll no-extras');

  }

  else { //#lightbox does not exist - create and insert (runs 1st time only)

    //create HTML markup for lightbox window
    var lightbox =
    '<div id="lightbox">' +
      '<p>x</p>' +
      '<div id="content">' + //insert clicked link's src into img src
        '<img src="' + image_src +'" />' + '</div></div>';

    //insert lightbox HTML into page
    $('body').append(lightbox);
    $('body').toggleClass('no-scroll no-extras');

  }
});



// Click anywhere on the page to get rid of lightbox window
$('body').on('click', '#lightbox', function() { //must use on, as the lightbox element is inserted into the DOM
  $('#lightbox').hide();
          $('body').toggleClass('no-scroll no-extras');
});

});

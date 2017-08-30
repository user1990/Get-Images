$(document).ready(function() {

  const flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  $('form').submit(e => {
    const $submitButton = $('#submit');
    const $searchField = $('#search');
    e.preventDefault();
    $searchField.prop('disabled', true);
    $submitButton.attr('disabled', true).val('searching....');
    const photos = $searchField.val();
    $('#photos').html('');
    $.getJSON(flickerAPI, {
      tags: photos,
      format: 'json'
    },
    data => {
      let photoHTML = '';
      if (data.items.length > 0) {
        $.each(data.items, (i, photo) => {
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
      } else {
        photoHTML = '<p>No photos found that match: ' + photos + '.</p>';
      }
      $('#photos').html(photoHTML);
      $searchField.prop('disabled', false);
      $submitButton.attr('disabled', false).val('Search');
    }); // end getJSON
  }); // end click
}); // end ready

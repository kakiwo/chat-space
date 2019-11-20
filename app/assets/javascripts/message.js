$(function(){
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this); 
    let url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      buildHTML(data);   
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
      $('form')[0].reset();
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
    return false;
  })
  function buildHTML(message){
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
      let html = `<div class="messages__message">
                    <div class="messages__message__upper-info">
                      <div class="messages__message__upper-info__talker">
                        ${message.user_name}
                      </div>
                      <div class="messages__message__upper-info__date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="messages__message__text">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      ${image}
                    </div>
                  </div>`
      $('.messages').append(html); 
  }
})



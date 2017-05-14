(function($){
    //adding elements
    $('body').append("<div class='popup-wrapper'>" +
        "<i class='fa fa-check-square-o btn-block'></i>" +
        "<div class='message-container'><div class='header'>" +
        "<img class='image-block'/><span class='name-block'></span>" +
        "<span class='title-block'></span>" +
        "<i class='fa fa-times btn-message-block'></i></div>" +
        "<div class='message-block'></div></div>");


    //variables
    var messageData, imageData, nameData, titleData;
    var buttonBlock = $('.btn-block');
    var closeButtonBlock = $('.btn-message-block');

    //styles
    buttonBlock.css({
        'position': 'fixed',
        'right': '20px',
        'bottom': '20px',
        'cursor': 'pointer',
        'border-radius': '50%',
        'background-color': 'cornflowerblue',
        'width': '25px',
        'padding-top': '8px',
        'padding-left': '10px',
        'height': '25px',
        'z-index': '30000',
        'color': '#fff'
    });


    $('.message-container').css({
        'position': 'fixed',
        'bottom': '40px',
        'right': '40px',
        'display': 'none',
        'background-color': '#fff',
        'width': '400px',
        'z-index': '20000',
        'border-radius': '3px',
        'border': '1px solid #eaeaea'
    });

    $('.message-container .header').css({
        'padding': '15px 10px',
        'background': '#e0dfdf',
        'border-top-left-radius': '3px',
        'border-top-right-radius': '3px'
    });


    $('.message-container .message-block').css({
        'padding': '15px'
    });

    $('.message-container .header span').css({
        'display': 'block',
        'padding-left': '10px'
    });

    closeButtonBlock.css({
        'cursor': 'pointer',
        'position': 'absolute',
        'right': '15px',
        'top': '10px',
        'color': '#7b7b7b'
    });

    $('.message-container .image-block').css({
        'float': 'left',
        'width': '35px',
        'border-radius': '50%',
        'margin-right': '10px'
    });

    //request
    $.ajax({
        url: "http://dev.nexusmedia-ua.com/devtest/"
    }).done(function(data) {
        //get data
        imageData = data.messages[0]['image'];
        nameData = data.messages[0]['name'];
        titleData = data.messages[0]['title'];
        messageData = data.messages[0]['message'];

        //append data
        $('.image-block').attr('src', imageData);
        $('.name-block').append(nameData);
        $('.title-block').append(titleData);
        $('.message-block').append(messageData);
    });

    //events

    buttonBlock.on('click', function(){
        buttonBlock.toggleClass("fa-check-square-o fa-times");
        $('.message-container').toggle();
    });
    closeButtonBlock.on('click', function(){
        buttonBlock.toggleClass("fa-check-square-o fa-times");
        $('.message-container').toggle();
    });
})(jQuery);

$(document).ready(function() {
    //adding elements
    $('body').append("<div class='popup-wrapper'></div>");
    $('body').append("<i class='fa fa-check-square-o btn-block'></i>");
    $('body').append("<div class='message-container'><div class='header'><img class='image-block'/><span class='name-block'></span><span class='title-block'></span><i class='fa fa-times btn-message-block'></i></i></div></div>");
    $('.message-container').append("<div class='message-block'></div>");

    //variables
    var messageData, imageData, nameData, titleData;
    var buttonBlock = $('.btn-block');
    var closeButtonBlock = $('.btn-message-block');


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
        $('.popup-wrapper').toggleClass("active");
        $('.message-container').toggleClass("active");
    });
    closeButtonBlock.on('click', function(){
        buttonBlock.toggleClass("fa-check-square-o fa-times");
        $('.popup-wrapper').toggleClass("active");
        $('.message-container').toggleClass("active");
    });
});
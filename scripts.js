//Item Scroller 
$(window).on("load", function () { 
    $('.item-scroller').each(function () { 
        var itemsShown = $(this).attr('data-items-shown'); 
        var itemsCount = $(this).children().children('.scroll-item-box').length; 
        var maxItemHeight = Math.max.apply(null, $(this).children().children('.scroll-item-box').map(function () { 
            return $(this).outerHeight(); 
        }).get()); 
        $(this).children().children('.scroll-item-box').css('height', maxItemHeight); 
        $(this).children('.scroller-box').css('height', maxItemHeight * itemsShown); 
        if (itemsCount <= itemsShown) { 
            $(this).children('.scrolls').css('display', 'none'); 
            $(this).children('.scroller-box').css('height', maxItemHeight * itemsCount); 
        } 
        $(this).children().children('.scroll-up').css('visibility', 'hidden'); 
        itemNum = 0; 
        $(this).children().children('.scroll-item-box').each(function () { 
            var items = $(this); 
            items.attr('item-pos', itemNum++); 
            if (items.is(":first-child")) { 
                items.addClass('first-event'); 
            } 
            if (items.is(":last-child")) { 
                items.addClass('last-event'); 
            } 
        }); 
        $(this).children().children().children('.fa-chevron-down').click(function () { 
            var itemsGroup = $(this).parent().parent().siblings().children('.scroll-item-box'); 
            var lastItem = $(this).parent().parent().siblings().children('.scroll-item-box.last-event'); 
            var itemsShown = $(this).parent().parent().parent('[data-items-shown]').attr('data-items-shown'); 
            var itemPosition = itemsShown - 1; 
            $(itemsGroup).each(function () { 
                var items = $(this); 
                num = +$(items).attr('item-pos'); 
                num = num - 1; 
                $(items).attr('item-pos', num); 
                height = items.outerHeight(true); 
                $(items).animate({ 
                    "top": '-=' + height 
                }, "slow"); 
            }); 
            if ($(lastItem).attr('item-pos') == itemPosition) { 
                $('.scroll-down').css('visibility', 'hidden'); 
            } 
            if ($(lastItem).attr('item-pos') > itemPosition) { 
                $('.scroll-down').css('visibility', 'visible'); 
            } 
            $(this).parent().siblings('.scroll-up').css('visibility', 'visible'); 
        }); 
        $(this).children().children().children('.fa-chevron-up').click(function () { 
            var itemsGroup = $(this).parent().parent().siblings().children('.scroll-item-box'); 
            var firstItem = $(this).parent().parent().siblings().children('.scroll-item-box.first-event'); 
            var lastItem = $(this).parent().parent().siblings().children('.scroll-item-box.last-event'); 
            $(itemsGroup).each(function () { 
                var items = $(this); 
                num = +$(items).attr('item-pos'); 
                num = num + 1; 
                $(items).attr('item-pos', num); 
                if ($(lastItem).attr('item-pos') > '1') { 
                    $('.scroll-down').css('visibility', 'visible'); 
                } 
                if ($(firstItem).attr('item-pos') == '0') { 
                    $('.scroll-up').css('visibility', 'hidden'); 
                } 
                height = items.outerHeight(true); 
                $(items).animate({ 
                    "top": '+=' + height 
                }, "slow"); 
            }); 
        }); 
    }); 
}); 
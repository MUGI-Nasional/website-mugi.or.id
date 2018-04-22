$("#menu").metisMenu();

$(window).resize(function () {
    if ($(window).width() <= 360) {
        $("#mySidenav").css({
            'width': '0px',
            'display': 'none !important'
        });
    } else {
        $("#mySidenav").css({
            'width': '100px',
            'display': 'block !important'
        });
    }
});

$('#mySidenav').resizable({
    minWidth: 100,
    maxWidth: 400,
    resize: function (event, ui) {
        var menu = $("#menu");
        var lists = $("#menu li");
        if (ui.size.width > 100) {
            menu.find('.app-arrow').addClass('open-menu')
            menu.addClass('open').removeClass("exit");
            $.each(lists, function (i, li) {
                $(li).find('span.nav-text').show();
                $(li).find(".init-row").addClass("has-arrow");
            });
        } else {
            menu.find('.app-arrow').removeClass('open-menu')
            menu.removeClass('open').addClass("exit");
            $.each(lists, function (i, li) {
                $(li).find('span.nav-text').hide();
                $(li).find(".init-row").removeClass("has-arrow");
            });
        }
        $(wrapper_).css({
            'margin-left': ui.size.width + 'px'
        });
    }
});

function openMobileNav(t) {
    var nav = $(t).parent().parent();
    var lists = $("#menu li");
    $.each(lists, function (i, li) {
        $(li).find('.child-menu').removeClass('in')
        $(li).removeClass('active').find('span.nav-text').hide();
        $(li).find(".init-row").removeClass("has-arrow");
    });

    if (nav.hasClass('open')) {
        $(t).removeClass('open-menu')
        $("#mySidenav").css({
            'width': '0px',
            'display': 'none !important'
        });
        nav.removeClass('open').addClass("exit");
    } else {
        $(t).addClass('open-menu')
        $("#mySidenav").css({
            'width': '100px',
            'display': 'block !important'
        });
        nav.addClass('open').removeClass("exit");
    }

}

function openNav(t) {
    var nav = $(t).parent().parent();
    var lists = $("#menu li");
    if (nav.hasClass('open')) {
        $(t).removeClass('open-menu')
        $("#mySidenav").css('width', "100px");
        $(wrapper_).css({
            'margin-left': '100px'
        });
        nav.removeClass('open').addClass("exit");
        $.each(lists, function (i, li) {
            $(li).find('span.nav-text').hide();
            $(li).find(".init-row").removeClass("has-arrow");
        });

    } else {
        $(t).addClass('open-menu')
        $("#mySidenav").css('width', '390px');
        $(wrapper_).css({
            'margin-left': '390px'
        });
        nav.addClass('open').removeClass("exit");
        $.each(lists, function (i, li) {
            $(li).find('span.nav-text').show();
            $(li).find(".init-row").addClass("has-arrow");
        });
    }

}
function closeApp(t) {
    var nav = $(t).parent().parent();
    $(".top-navbar .pull-right").find('li').removeClass('open');
    nav.css('width', "0px");
}

function closeTree(t) {
    var nav = $(t).parent().parent();
    $(".top-navbar .pull-right").find('li').removeClass('open');
    nav.css('width', "0px");
}


function openMenu(t) {
    var nav = $(t).parent().parent();
    if (nav.hasClass('open')) {
        $("#myApp").css('width', "0px");
        nav.removeClass('open').addClass("exit");

    } else {
        $("#myApp").css('width', '300px');
        nav.addClass('open').removeClass("exit");
    }
}

function initModal(t) {
    $(t).parent().parent().find('li').removeClass('open');
    $('.inline-modal').css('width', "0px");
}

function openInlineModal(t, target) {
    var nav = $(t).parent();
    if (nav.hasClass('open')) {
        $(target).css('width', "0px");
        nav.removeClass('open').addClass("exit");
    } else {
        initModal(t);
        $(target).css('width', '315px');
        nav.addClass('open').removeClass("exit");
    }
}


function openModal(t, target) {
    var nav = $(t).parent();
    if (nav.hasClass('open')) {
        $(target).css('width', "0px");
        nav.removeClass('open').addClass("exit");
    } else {
        initModal(t);
        $(target).css('width', '600px');
        nav.addClass('open').removeClass("exit");
    }
}

function openModaltree(t, target) {
    var nav = $(t).parent();
    if (nav.hasClass('open')) {
        $(target).css('width', "0px");
        nav.removeClass('open').addClass("exit");
    } else {
        initModal(t);
        $(target).css({
            'width': '555px',
            'height': '555px',
        });
        nav.addClass('open').removeClass("exit");
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/*!
 *  xamzo Javascript Wrapper 1.0.0
 *  -------------------------------------------------------
 *  The javascript of xamzo back end applications
 *
 *  License
 *  -------------------------------------------------------
 *  - xamzo wrapper are licensed under the MIT License -
 *    http://opensource.org/licenses/mit-license.html
 *  - http://xamzo.com/license/
 *  
 *  Writer
 *  -------------------------------------------------------
 *  - xamzo wrapper originally writed by Nugroho Rahmat Hadi Wibowo (hadinug)
 *  - visit doc.xamzo.com or www.hadinug.net
 *
 *  Contactof
 *  -------------------------------------------------------
 *  Link: http://xamzo.com
 *  Copyright (c) 2013, xamzo, Inc.
 */

/**
 * define variable init
 */

var loading_ = '<div id="tout"><div><div><div></div></div></div></div>',
                    animate_ = 'none', base_ = '/', wrapper_ = '#main', default_title = "Productivity Dashboard";
/**
 * 
 * make text area tobe auto height with define attribute class : text-auto
 */
$(function () { 
    $('html').on('keyup', 'textarea.x-textarea', function (e) {
        $(this).css({
            'height': 'auto',
            'overflow': 'hidden'
        });
        $(this).height(this.scrollHeight);
    });
    $('html').on('focus', 'textarea.x-textarea', function (e) {
        $(this).css({
            'height': 'auto',
            'overflow': 'hidden'
        });
        $(this).height(this.scrollHeight);
    });
    $('html').on('click', 'textarea.x-textarea', function (e) {
        $(this).css({
            'height': 'auto',
            'overflow': 'hidden'
        });
        $(this).height(this.scrollHeight);
    });
    $('html').find('textarea.x-textarea').keyup();
});
$(window).keydown(function (event) {
    if (event.keyCode === 123 || (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
    }
});
$(window).keydown(function (event) {
    if (event.ctrlKey && event.keyCode === 72) {
        var hs = '',
                hash = '';
        var val = i.value;
        if (window.location.hash) {
            hs = window.location.hash.substring(1);
            hash = hs.replace('/', '-');
        }
        load(hash, wrapper_);
        event.preventDefault();
    }
});
function _set_check(_ck) {
    if ($(_ck).prop("checked") == true) {
        $(_ck).prop('checked', true).parent().removeClass('checked');
        $(_ck).removeAttr('checked').parent().parent().parent().css({
            'opacity': '1',
            'background': 'transparent'
        });
    } else {
        $(_ck).prop('checked', true).parent().addClass('checked');
        $(_ck).prop('checked', true).parent().parent().parent().css({
            'opacity': '0.6',
            'background': '#fffccc'
        });
    }
    if ($(_ck).parent().find("tr input[checked='true']").length === 0) {
        $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').removeAttr('disabled');
    } else {
        $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').prop('disabled', true);
    }
}
function _crud_cek() {
    if ($('body').find("td input:checked").length > 0) {
        $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').removeAttr('disabled');
    } else {
        $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').prop('disabled', true);
    }
}
// set chek table
function _self_check(_ck) {
    var lcek = $('body').find("input:checked").length;
    if ($(_ck).prop('checked') == true) {
        $(_ck).parent().parent().parent().parent().css({
            'opacity': '0.6',
            'background': '#fffccc'
        });
    } else {
        $(_ck).parent().parent().parent().parent().css({
            'opacity': '1',
            'background': 'transparent'
        });
    }
    if (lcek > 0) {
        $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').removeAttr('disabled');
    } else {
        $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').prop('disabled', true);
    }

}
!function ($) {
    $(function () {
        $('html').on('click', "[type='checkbox']", function (e) {
            var $this = $(this);
            if ($this.parent().parent().attr('table-check-this') !== undefined) {
                _set_check(this);
                _crud_cek();
            }
        });
        $('html').on('click', '[table-check-this]', function (e) {
            var $this = $(this), _ck = $this.find("[type='checkbox']");
            _set_check(_ck);
            _crud_cek();
        });
        $('html').on('click', '[table-check-all]', function (e) {
            var $this = $(this), _parent = $this.parent().parent().parent().parent();
            if ($this.hasClass('btn-primary')) {
                if ($this.hasClass('checked')) {
                    $this.removeClass('checked')
                    _parent.find("tr input, li input").removeAttr('checked');
                    $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').removeAttr('disabled');

                    //opacity
                    var all = $(_parent).find("[type='checkbox']:not([table-check-all='true'])");
                    all.removeAttr('checked');
                    all.parent().parent().click();
                    all.parent().addClass('checked');
                } else {
                    $this.addClass('checked')
                    _parent.find("tr input, li input").prop('checked', true);
                    $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').attr('disabled', true);

                    //opacity
                    var all = $(_parent).find("[type='checkbox']:not([table-check-all='true'])");
                    all.removeAttr('checked');
                    all.parent().parent().parent().css({
                        'background': 'transparent',
                        'opacity': '1'
                    });
                    all.parent().removeClass('checked');
                }
            }
        });
        $('html').on('click', '[crud-name=check]', function (e) {
            var ck = $('input[table-check-all="true"]'),
                    _parent = ck.parent().parent().parent().parent().parent();
            var all = $(_parent).find("[type='checkbox']:not([table-check-all='true'])");
            var x = all.parent().parent().parent().parent();
            if (ck.prop('checked') == true) {
                ck.removeAttr('checked');
                x.css({
                    'background': 'transparent',
                    'opacity': '1'
                });
            } else {
                ck.prop('checked', true);
                x.click();
            }


        });
        $('html').on('click', '[crud-name=list],[crud-name=create]', function (e) {
            $('[crud-name=check]').removeAttr('disabled');
            $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').prop('disabled', true);
        });
        $('html').on('click', '[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]', function (e) {
            var $this = $(this),
                    _act_url = $this.attr('crud-url'),
                    _socket = ($this.attr('socket') != '') ? $this.attr('socket') : 'false',
                    _crud_data = $this.attr('crud-data'),
                    _crud_redirect = $this.attr('crud-redirect'),
                    _crud_target = $this.attr('crud-target'),
                    _act_name = $this.attr('crud-name'),
                    _modal_width = $this.attr('modal-width'),
                    _table_taget = $this.attr('crud-table-target');
            if ($(_table_taget + " td input:checked, " + _table_taget + " input:checked").length === 0) {
                notive("Please Check One");
            } else {
                if ($(_table_taget + " td input:checked, " + _table_taget + " input:checked").length > 1 && _act_name === 'update') {
                    notive("Please Check One");
                } else {
                    switch (_act_name) {
                        case 'delete':
                        case 'group-delete':
                            o_str_ = '<div class="modal-header header-color">' +
                                    '<button type="button" class="close" onclick="close_box()" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                                    '<h4 class="modal-title">Confirmation</h4>' +
                                    '</div>' +
                                    '<div class="modal-body">';
                            _message_ = '<p>Are you sure to delete the data selected</p>';
                            f_str = '<div class="modal-footer">' +
                                    '<a href="javascript:void(0)" class="btn btn-default btn-sm" onclick="close_box()">Cancel</a>' +
                                    '<button class="btn medium btn-danger btn-sm" id="btn-del" onclick="_post(this,\'' + _socket + '\',\'' + _crud_data + '\',\'true\',\'' + _act_url + '\',undefined,\'' + _crud_redirect + '\',\'' + _crud_target + '\')">Yes</button>';
                            c_str_ = '</div>';
                            return_modalbox(o_str_ + _message_ + c_str_ + f_str, 'true', '400px');
                            break;
                        case 'void':
                            o_str_ = '<div class="modal-header header-color">' +
                                    '<button type="button" class="close" onclick="close_box()" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                                    '<h4 class="modal-title">Confirmation</h4>' +
                                    '</div>' +
                                    '<div class="modal-body">';
                            _message_ = '<p>Are you sure to void the data selected</p>';
                            f_str = '<div class="modal-footer">' +
                                    '<a href="javascript:void(0)" class="btn btn-default btn-sm" onclick="close_box()">Cancel</a>' +
                                    '<button class="btn medium btn-primary" id="btn-void" onclick="_post(this,\'' + _socket + '\',\'' + _crud_data + '\',\'true\',\'' + _act_url + '\',undefined,\'' + _crud_redirect + '\',\'' + _crud_target + '\')">Yes</button>';
                            c_str_ = '</div>';
                            return_modalbox(o_str_ + _message_ + c_str_ + f_str, 'true', '400px');
                            $('button#btn-void').focus();
                            break;
                        default:
                            if (_crud_target === 'modalbody') {
                                _post(this, _socket, _crud_data, 'false', _act_url, true, undefined, _crud_target, undefined, 'false', _modal_width);
                            } else {
                                _post(this, _socket, _crud_data, 'true', _act_url, true, undefined, _crud_target);
                            }
                            $('[crud-name=delete],[crud-name=group-delete],[crud-name=void],[crud-name=update]').attr('disabled', 'disabled');
                            break;
                    }

                }

            }
        });
        // confirm post
        $('html').on('click', '[crud-name=confirm-post]', function (e) {
            e.preventDefault();
            var $this = $(this)
                    , _url = ($this.attr('ajax-url')) ? $this.attr('ajax-url') : $this.attr('href')
                    , _target = $this.attr('ajax-target')
                    , _meth = ($this.attr('ajax-method')) ? $this.attr('ajax-method') : undefined
                    , _data = $this.attr('ajax-data')
                    , _is_close_box = ($this.attr('is_close_box')) ? $this.attr('is_close_box') : 'true'
                    , _url_redirect = ($this.attr('ajax-redirect')) ? $this.attr('ajax-redirect') : ''
                    , _is_iframe = ($this.attr('ajax-iframe')) ? $this.attr('ajax-iframe') : 'false'
                    , ajax_title = ($this.attr('ajax-title')) ? $this.attr('ajax-title') : $('html').find('title').html()
                    , _url_push = ($this.attr('url-push')) ? $this.attr('url-push') : 'false'
                    , _is_fix = ($this.attr('modal-fix')) ? $this.attr('modal-fix') : 'true'
                    , _isSocket = ($this.attr('socket')) ? $this.attr('socket') : 'false'
                    , _width = ($this.attr('modal-width')) ? $this.attr('modal-width') : '50%';
            o_str_ = '<div class="modal-header header-color">' +
                        '<button type="button" class="close" onclick="close_box()" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                        '<h4 class="modal-title">Confirmation</h4>' +
                     '</div>' +
                     '<div class="modal-body">';
            _message_ = '<p>Are you sure to continue the process</p>';
            f_str = '<div class="modal-footer">' +
                       '<button class="btn medium btn-primary" id="btn-confirm" onclick="_confirm_post(this,\'' + _isSocket + '\',\'' + _data + '\',\'' + _is_close_box + '\',\'' + _url + '\',\'' + _url_push + '\',\'' + _url_redirect + '\',\'' + _target + '\',\'' + _meth + '\',\'' + _is_fix + '\',\'' + _width + '\',\'' + _is_iframe + '\')">Yes</button>' +
                       '<button class="btn medium btn-danger btn-sm" onclick="close_box()">No</button>';
            c_str_ = '</div>';

            $(_data).validation();
            if (!$(_data).validate()) {
            } else {
                return_modalbox(o_str_ + _message_ + c_str_ + f_str, '', '400px');
            }
        });

        $('html').on('click', '[crud-name=expand-search]', function (e) {
            if ($('html').find('.x-block-full').size() > 0) {
                $('.x-block.small').addClass("col-md-3").show();
                $('.x-block-full').addClass('big').addClass("col-md-9").removeClass('x-block-full').show();
            } else {
                $('.x-block.small').hide();
                $('.x-block.big').addClass('x-block-full').removeClass('big').removeClass("col-md-9").show();
            }
        });
        is_search = false;
        $('html').on('keyup', '[crud-search="true"]', function (e) {
            var $this = $(this),
                    _val = $this.val(),
                    _name = $this.attr('name'),
                    _act_url = $this.attr('search-url'),
                    _act_target = $this.attr('search-target');
            if (is_search === false) {
                (e.keyCode) ? key = e.keyCode : key = e.which;
                switch (key) {
                    case 40:
                        $('.modal-content, body').find('tr[tabindex]').eq(1).focus().css({
                            'background': 'rgb(228, 250, 228)'
                        });
                        break;
                    case 13:
                        var inUrl = _act_url + '&' + $('form#crud-data').serialize();
                        $.ajax({
                            beforeSend: function () {
                                is_search = true;
                                $('span.x-small-loading').html(animate_small);
                            },
                            type: "POST",
                            url: inUrl,
                            data: _name + '=' + _val,
                            success: function (result) {
                                setTimeout(function () {
                                    $('span.x-small-loading').html('');
                                }, 1000);
                                $(_act_target).html(result);
                                is_search = false;
                            },
                            dataType: "html"
                        });
                        break;
                    default:
                        break;
                }

            }
        });
    });
}(window.$); 
 
function _load(t, _url, _is_close_box, _url_push, _target, is_fix, _width, _is_iframe, _meth) { 
    $.ajax({
        dataType: 'html',
        type: 'GET',
        beforeSend: function () {
            if (_target == 'modalbody') { 
            } else {  
                loading();
            }
        },
        url: _url.replace('#!', ''),
        success: function (result) { 
            if (_meth === undefined) {
                close_loading_box(_is_close_box);
            }
            if (_url_push !== undefined) {
                if (_url_push !== 'false') {
                    if (window.history.pushState) {
                        if (typeof (window.history.pushState) === 'function') {
                            window.history.pushState(null, null, _url);
                        } else {
                            window.location.hash = '#!' + path;
                        }
                    }
                }
            }
            if (_meth !== undefined) {
                switch (_meth) {
                    case 'prepend':
                        $(_target).prepend(result);
                        break;
                    case 'append':
                        $(_target).append(result);
                        break;
                    default:
                        $(_target).html(result);
                        break;
                }
            } else {
                _result_convert(_target, result, is_fix, _width, _is_iframe);
            }
        }
    });
}
function _post(t, _isSocket, _data, _is_close_box, _url, _url_push, _url_redirect, _target, _meth, _is_fix, _width, _is_iframe) { 
    $.ajax({
        type: 'POST',
        beforeSend: function () {
            if (_isSocket == 'true') { 
            } else {
                if (_url_redirect !== undefined) {
                    loading(); 
                }  
            }
        },
        url: _url.replace('#!', ''),
        data: $(_data).serialize(),
        success: function (result) { 
            if (_isSocket == 'true') {
                var rs_ = JSON.parse(result);
                if (typeof rs_.controller !== 'undefined') {
                    wsSend(result);
                    if (_is_close_box !== 'false') {
                        if (_target !== 'modalbody') {
                            close_box();
                        }
                    }
                }
            } else if (_url_redirect !== undefined) {
                _load(t, _url_redirect, _is_close_box, _url_push, _target, _is_fix, _width);
                if (_is_close_box !== 'false') {
                    if (_target !== 'modalbody') {
                        close_box();
                    }
                    notive('Data was submited');
                }
            } else {
                if (_meth !== undefined) {
                    switch (_meth) {
                        case 'prepend':
                            $(_target).prepend(result);
                            break;
                        case 'append':
                            $(_target).append(result);
                            break;
                        default:
                            $(_target).html(result);
                            break;
                    }
                    reset_form();
                } else {
                    _result_convert(_target, result, _is_fix, _width, _is_iframe);
                }
                if (_is_close_box !== 'false') {
                    close_box();
                }
            }

        }
    });
}
function _confirm_post(t, _isSocket, _data, _is_close_box, _url, _url_push, _url_redirect, _target, _meth, _is_fix, _width, _is_iframe) { 
    $.ajax({
        type: 'POST',
        beforeSend: function () {
            if (_isSocket == 'true') { 
            } else {
                if (_url_redirect !== undefined) {
                    loading(); 
                }
            }
        },
        url: _url.replace('#!', ''),
        data: $(_data).serialize(),
        success: function (result) { 
            if (_isSocket == 'true') {
                var rs_ = JSON.parse(result);
                if (typeof rs_.controller !== 'undefined') {
                    wsSend(result);
                }
                form_reset(_data);
            }
            if (_url_redirect !== undefined) {
                _load(t, _url_redirect, _is_close_box, _url_push, _target, _is_fix, _width);
                if (_is_close_box !== 'false') {
                    if (_target !== 'modalbody') {
                        close_box();
                    }
                    notive('Data was submited');
                }
                close_box();
            } else {
                if (_meth !== undefined) {
                    switch (_meth) {
                        case 'prepend':
                            $(_target).prepend(result);
                            break;
                        case 'append':
                            $(_target).append(result);
                            break;
                        default:
                            $(_target).html(result);
                            break;
                    }
                    reset_form();
                } else {
                    _result_convert(_target, result, _is_fix, _width, _is_iframe);
                }
                if (_is_close_box !== 'false') {
                    close_box();
                }
            }

        }
    });
}
function _method(t, _isSocket, _type, _url, _target, _is_close_box, _url_push, _data, _url_redirect, _meth, _is_fix, _width, _is_iframe) { 
    switch (_type) {
        case 'GET': 
            $.ajax({
                type: 'GET',
                beforeSend: function () { 
                    if (_target == 'modalbody') { 
                    } else {
                        if (_isSocket == 'true') { 
                        } else { 
                            loading();
                        }
                    } 
                },
                url: _url.replace('#!', ''),
                data: $(_data).serialize(),
                success: function (result) {
                    if (_isSocket == 'true') {
                        var rs_ = JSON.parse(result);
                        if (typeof rs_.controller !== 'undefined') {
                            wsSend(result);
                        }
                        form_reset(_data);
                    }
                    if (_url_redirect !== undefined) {
                        _load(t, _url_redirect, _is_close_box, _url_push, _target, _is_fix, _width, _is_iframe);
                        reset_form();
                    } else {
                        _result_convert(_target, result, _is_fix, _width, _is_iframe);
                    } 
                }
            });
            break;
        case 'POST':
            $(_data).validation();
            if (!$(_data).validate()) {
            } else {
                _post(t,_isSocket, _data, _is_close_box, _url, _url_push, _url_redirect, _target, _meth, _is_fix, _width, _is_iframe);
            }
            break;
        default:
            _load(t, _url, _is_close_box, _url_push, _target, _is_fix, _width, _is_iframe, _meth); 
            break;
    }
}
!function ($) {
    $(function () {
        $('html').on("keydown", function (e) {
            (e.keyCode) ? key = e.keyCode : key = e.which;
            if (key === 83 && e.ctrlKey) {
                $('body').find('[accesskey="ctrl+s"]').click();
                e.preventDefault();
            }
            if (key === 73 && e.ctrlKey) {
                $('body').find('[accesskey="ctrl+i"]').click();
                e.preventDefault();
            }
            if (key === 68 && e.ctrlKey) {
                $('body').find('[accesskey="ctrl+d"]').click();
                e.preventDefault();
            }
            if (key === 85 && e.ctrlKey) {
                $('body').find('[accesskey="ctrl+u"]').click();
                e.preventDefault();
            }
            if (key === 8 && e.ctrlKey) {
                $('body').find('[accesskey="ctrl+backspace"]').click();
                e.preventDefault();
            }
            if (key === 70 && e.ctrlKey) {
                $('body').find('[accesskey="ctrl+f"]').click();
                e.preventDefault();
            }
            if ((key === 116 && e.ctrlKey) || key === 116) {
                $('body').find('[accesskey="ctrl+f5"]').click();
                e.preventDefault();
            }

        });
    });
}(window.$);
// combobox 
!function ($) {
    $(function () {
        $('html').on('click', '[ajax=true]', function (e) {
            $this = $(this)
                    , _type = $this.attr('ajax-type')
                    , _url = ($this.attr('ajax-url')) ? $this.attr('ajax-url') : $this.attr('href')
                    , _target = $this.attr('ajax-target')
                    , _meth = ($this.attr('ajax-method')) ? $this.attr('ajax-method') : undefined
                    , _data = $this.attr('ajax-data')
                    , _is_close_box = ($this.attr('is_close_box')) ? $this.attr('is_close_box') : 'false'
                    , _url_redirect = $this.attr('ajax-redirect')
                    , _is_iframe = ($this.attr('ajax-iframe')) ? $this.attr('ajax-iframe') : 'false'
                    , ajax_title = ($this.attr('ajax-title')) ? $this.attr('ajax-title') : $('html').find('title').html()
                    , _url_push = $this.attr('url-push')
                    , _is_fix = ($this.attr('modal-fix')) ? $this.attr('modal-fix') : 'true'
                    , _isSocket = ($this.attr('socket')) ? $this.attr('socket') : 'false'
                    , _width = ($this.attr('modal-width')) ? $this.attr('modal-width') : '50%';

            e.preventDefault();
            if (_is_close_box === 'true') {
                close_box();
            } 
            _method(this, _isSocket, _type, _url, _target, _is_close_box, _url_push, _data, _url_redirect, _meth, _is_fix, _width, _is_iframe);

            document.title = ajax_title;
        });


    });
}(window.$);
function close_box(iframe) {
    if (iframe === 'iframe') {
        parent = $("html#xamzo", window.parent.document);
        parent.find('body, #wrapper').css({
            opacity: '1'
        });
        parent.find('.modal').remove();
    } else {
        $(".modal-box").remove();
        $('.modal').remove();
        $(wrapper_ + ', body, #in-cms, #wrapper').css({
            opacity: 1
        });
    }
    uf = $('input[name="userfile[]"]');
    for (i = 0; i < uf.size() ; i++) {
        if (i > 1) {
            uf[i].remove();
        }
    }
}

function close_loading_box(_is_close_box, iframe) {
    if (_is_close_box === 'true') {
        $(wrapper_ + ', body').css({
            opacity: '1'
        });
    }
    if (iframe === 'iframe') {
        parent = $("html#xamzo", window.parent.document);
        if (_is_close_box === 'true') {
            parent.find('body').css({
                opacity: '1'
            });
        }
        parent.find('.x-loading-box').remove();
    } else {
        $(".x-loading-box").remove();
        if (_is_close_box === 'true') {
            $(wrapper_ + ', body').css({
                opacity: '1'
            });
        }
    }
    uf = $('input[name="userfile[]"]');
    for (i = 0; i < uf.size() ; i++) {
        if (i > 1) {
            uf[i].remove();
        }
    }
}

function getParameterByName(name, url) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function _url_craw() {
    b = window.document.location.hash.replace("&search=true", "").replace("search=true&", "");
    patern = "^(#!)";
    c = new RegExp(patern); 
    if (b.match(c)) {
        close_box();
        _load(this,b, 'true', '', wrapper_);
    }
}
window.addEventListener("hashchange", _url_craw, false);
$(document).ready(function () {
    _url_craw();
});
$(document).keyup(function (e) {
    e.preventDefault();
    if (e.keyCode === 27) {
        close_box('iframe');
        close_box();
        $('.x-autocomplete').html('');
    }
});
//collaps

!function ($) {
    $(function () {
        _par = $('.collapse');
        $.each(_par, function () {
            $(this).find('div.coll-child').hide().first().show();
        });
        $('html').on('click', '.coll-menu', function (e) {
            $this = $(this)
                    , _parent = ($this.parent()) ? $this.parent() : '0'
                    , _speed = (_parent.attr('coll-speed')) ? _parent.attr('coll-speed') : 'fast'
                    , _target = ($this.attr('coll-target')) ? $this.attr('coll-target') : '0';
            if ($this.hasClass('active-coll-menu')) {

            } else {
                $(_parent).find('.coll-menu').removeClass('active-coll-menu');
                $this.addClass('active-coll-menu');
                $(_parent).find('.coll-child').hide(_speed).removeClass('active-coll-content');
                $(_parent).find(_target).slideDown(_speed).addClass('active-coll-content');
            }
        });
    });
}(window.$);
//core

$(function () {
    $.ajaxSetup({ 
        traditional: true,
        error: function (jqXHR, exception) {
            var title = "Error";
            var message ="";
            if (jqXHR.status === 0) {
                title = "Session Timeout";
                message = "Your session is time out!";
            } else if (jqXHR.status === 404) {
                message = "Requested page not found. [404]"; 
            } else if (jqXHR.status === 500) {
                message = "Internal Server Error [500]"; 
            } else if (exception === 'parsererror') {
                message = "Requested JSON parse failed."; 
            } else if (exception === 'timeout') {
                message = "Time out error."; 
            } else if (exception === 'abort') {
                message = "Ajax request aborted.";
            } else {
                message = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            var fMessage = '<div class="modal-header header-color">' +
                    '<button type="button" class="close" onclick="close_box()" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                    '<h4 class="modal-title">' + title + '</h4>' +
                    '</div>' +
                    '<div class="modal-body"><p>' + message + '</p></div>';
            return_modalbox(fMessage, 'true', '300px');
            if (jqXHR.status === 0) {
                location.reload(true);
            } 
        }
    });
});
function before_loading(_target) {
    $(_target).removeClass(animate_).css({
        opacity: 1
    });
    $('.pop-content').parent().remove();
    loading();
}
function reset_form() {
    $('form input, form textarea').val('');
    $('[contenteditable], .x-tag span.pTag').html('');
}
function loading(a) {
    $(".x-loading-box").remove();
    cmd = "<div class='modal-box x-loading-box' style='display:none;border:none;padding:0px; z-index:1000;'>" + loading_ + "</div>";
    $(wrapper_).css({
        //opacity: 0.3
    });
    $('html').append(cmd);
    function _make_loading() {
        b = $(window).height(), c = $(".modal-box").height(), d = (b - c) / 2, e = $(window).width(), f = (e - $(".modal-box").width()) / 2;
        $(".modal-box").css({
            position: 'fixed',
            left: f,
            top: d
        }).fadeIn('slow');
    }
    _make_loading();
}

function notive(text) {
    $(".modal-box").remove();
    cmd = "<div class='modal-box' onclick='$(this).remove();close_box()' style='padding:0px; z-index:1000;'>" + "<div class='modal-content' style='background: #fff;font-size:14px;padding:10px; text-align:center; cursor:pointer;' align='center'>" + text + "</div>" + "</div>";
    $('html').append(cmd);
    function _make_notive() {
        c = $(".modal-box").height(), d = ('40%'), e = $(window).width(), f = (e - $(".modal-box").width()) / 2;
        $(".modal-box").css({
            position: 'fixed',
            left: f,
            top: d
        });
    }
    _make_notive();
    setTimeout(function () {
        $(".modal, .modal-box").remove();
        close_box();
    }, 5000);
}

function _result_convert(_target, result, is_fix, _width, _is_iframe) {
    if (_target != 'modalbody' && _target != 'modalbox') {
        $('#full-awesomesearch').hide();
    }
    if (_target === 'modalbody') {
        return_bodybox(result, is_fix, _width, _is_iframe);
    }
    if (_target === 'modalbox') {
        return_modalbox(result, is_fix, _width, _is_iframe);
    } else {

        $(_target).html(result).addClass(animate_).addClass("animated").css({
            opacity: 1
        });
        is_box = $(_target).parent().parent().parent().find('.modal').size();
        if (is_box === 0) {
        }
    }
    $('html').find('div#ui-datepicker-div').removeClass('ui-helper-hidden-accessible'); 
}
function return_modalbox(content, is_fix, _width, _is_iframe) {
    close_box();
    var el = '';
    if (_is_iframe === 'true') {
        el = $("html#xamzo", window.parent.document);
    } else {
        el = $("html#xamzo");
    }
    el.append('<div class="modal">&nbsp;</div>');
    if ($(window).width() <= 320) {
        width_ = '90%';
    } else {
        if (_width == '100%') {
            width_ = ($(window).width() - 50) + 'px';
        } else {
            width_ = _width;
        }
    }
    el.find(".modal").append('<div class="modal-box" style="width:' + width_ + '">' + "<div class='modal-content'></div>" + "</div>");
    el.find(".modal-content").append(content);
    if (_width == '100%') {
        el.find(".modal-content").height(($(window).height() - 30) + 'px')
    }
    function _make_modalbox() {
        b = el.width();
        c = (b - el.find(".modal-box").width()) / 2;
        d = screen.height;
        if (_width == '100%') {
            e = '10px';
        } else {
            e = (d - el.find(".modal-box").height()) / 3;
        }

        if (is_fix !== 'false') {
            el.find(".modal-box").css({
                'position': 'fixed',
                left: c,
                top: e
            });
        } else {
            var xe = '100px';
            el.find(".modal-box").css({
                'position': 'absolute',
                left: c,
                top: xe
            });
        }
    }
    _make_modalbox();
    el.find(".loading").html("");
    el.find('.modal').css({
        'height': $('body').height(),
        'min-height': '100%'
    });
    if (_is_iframe === 'true') {
        el.find('.modal').css({
            'top': '10px'
        });
        el.find(".modal-box").css({
            'position': 'absolute'
        });
    }
    el.find('body').css({
        opacity: .1
    });
    el.find('.modal').show();
    $('body').scrollTop(0); 
}

function return_bodybox(content, is_fix, _width, _is_iframe) {
    close_box();
    var el = '';
    if (_is_iframe === 'true') {
        el = $("body", window.parent.document);
    } else {
        el = $("body");
    }
    el.append('<div class="modal">&nbsp;</div>');
    if ($(window).width() <= 320) {
        width_ = '90%';
    } else {
        width_ = _width;
    }
    el.find(".modal").append('<div class="modal-box" style="width:' + width_ + '">' + "<div class='modal-content'></div>" + "</div>");
    el.find(".modal-content").append(content);
    function _make_modalbox() {
        b = el.width();
        c = (b - el.find(".modal-box").width()) / 2;
        d = screen.height;
        e = (d - el.find(".modal-box").height()) / 3;
        if (is_fix !== 'false') {
            el.find(".modal-box").css({
                'position': 'fixed',
                left: c,
                top: 80
            });
        } else {
            el.find(".modal-box").css({
                'position': 'absolute',
                left: c,
                top: 80
            });
        }
    }
    _make_modalbox();
    el.find(".loading").html("");
    el.find('.modal').css({
        'height': $('body').height(),
        'min-height': '100%'
    });
    if (_is_iframe === 'true') {
        el.find('.modal').css({
            'top': '10px'
        });
        el.find(".modal-box").css({
            'position': 'absolute'
        });
    }
    el.find('#wrapper').css({
        opacity: .1
    });
    el.find('.modal').show();
    $('body').scrollTop(0); 
}
 
function popupwindow(url, title, w, h) {
    wLeft = parent.window.screenLeft ? parent.window.screenLeft : parent.window.screenX;
    wTop = parent.window.screenTop ? parent.window.screenTop : parent.window.screenY;
    var left = wLeft + (parent.window.innerWidth / 2) - (w / 2);
    var top = wTop + (parent.window.innerHeight / 2) - (h / 2);
    return parent.window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 980 + ', height=' + h + ', top=' + top + ', left=' + left);
}
 

function load(url, id) {
    $.ajax({
        beforeSend: function () {
            loading();
        },
        url: base_ + url,
        success: function (rs) {
            $(id).html(rs);
            close_box();
        }
    });
}
 
$(document).ready(function () {
    console.log('You like to look under the hood? Why not help us build the engine? http://xamzo.com/');
});
 
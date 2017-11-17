$(document).ready(function() {

    var toggleMenu = (function() {

        var $listItems = $('#navmenu> ul > li'),
            $menuItems = $listItems.children('a'),
            $body = $('body'),
            current = -1;

        function init() {
            $menuItems.on('click', open);
            $listItems.on('click', function(event) { event.stopPropagation(); });
        }

        function open(event) {

            if (current !== -1) {
                $listItems.eq(current).removeClass('menu-open');
            }

            var $item = $(event.currentTarget).parent('li'),
                idx = $item.index();

            if (current === idx) {
                $item.removeClass('menu-open');
                current = -1;
            } else {
                $item.addClass('menu-open');
                current = idx;
                $body.off('click').on('click', close);
            }

            return false;

        }

        function close(event) {
            $listItems.eq(current).removeClass('menu-open');
            current = -1;
        }

        return { init: init };

    })();

    $(function() {
        toggleMenu.init();
    });

});
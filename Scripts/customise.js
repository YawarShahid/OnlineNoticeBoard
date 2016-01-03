$(document).ready(function () {
    $('.nav li').click(function (e) {
        e.preventDefault();
        $('.nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        
    });
});
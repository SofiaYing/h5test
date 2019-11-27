
//pc端引用jquery.mobile后,会自添加一个data-role="page"的div,引起高度问题
function compatibility() {
    if (is_mobile() === true)
        return;
    function contentHeight() {
        $.mobile.activePage.css("min-height", "100%");
    }
    $(document).on("pagecontainertransition", contentHeight);
    $(window).on("throttledresize orientationchange", contentHeight);
}
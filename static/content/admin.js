// admin.js

$(function ()
    {
    var tmpl;    // Main template HTML
    tdata = {};  // JSON data object that feeds the template

    // Initialize page
    var initPage = function ()
        {
        // Load the HTML template
        $.get ("/templates/admin_page.div", function (d)
            {
            tmpl = d;
            });
 
        // When AJAX calls are complete, parse the template replacing mustache tags with vars
        $(document).ajaxStop (function ()
            {
            $("body").html (tmpl);
            });
        }();
    });

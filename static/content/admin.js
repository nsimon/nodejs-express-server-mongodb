// admin.js

$(function ()
    {
    var tmpl;  // Receives the contents of "/templates/admin_page.div"

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

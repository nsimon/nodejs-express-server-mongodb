// admin.js

// How to extract a selected value from a dropdown:
//   var employeeFirstCommaLast = $("#supervisorStaffDropdown").find("option:selected").text ();  // ex: Simon, Neil

$(function ()
    {
    // 1. GET /templates/admin_page.div, insert into <body>
    $.ajax (
        {
        url:   "/templates/admin_page.div",  // html to be inserted into "body"
        type:  "GET",
        error: function (xhr, status, error)
            {
            alert ("ajax() error on: GET /templates/admin_page.div" + "\n" +
                   "status: " + status + "\n" +
                   "error: "  + error);
            },
        success: function (admin_page_div)
            {
            // alert ("ajax() success: inserting admin_page.div into <body>");

            // insert the admin_page.div
            $("body").html (admin_page_div);
            }
        });

    // 2. GET /v1/directors.json, insert into 3 "director" dropdowns
    $.ajax (
        {
        url:   "/v1/directors.json",
        type:  "GET",
        error: function (xhr, status, error)
            {
            alert ("ajax() error on: GET /v1/directors.json" + "\n" +
                   "status: " + status + "\n" +
                   "error: "  + error);
            },
        success: function (data)
            {
            // alert ("ajax() success: data: " + JSON.stringify (data));
            // (ex) data = { "rc": rc, "message": message, "data": { "directors": director_list }};

            var rc            = data.rc;
            var message       = data.message;
            var directors     = data.data.directors;
            var options       = "";
            var director_name = "";

            // alert ("rc: "        + rc      + "\n" +
            //        "message: "   + message + "\n" +
            //        "directors: " + directors);

            // Hardcode 1st dropdown option
            options += "<option disabled selected>Choose director...</option>";

            // Get each director name
            for (var i = 0; i < directors.length; i++)
                {
                // ex: Scorsese
                director_name = directors [i].name;

                // alert (director_name);

                // ex: <option>Scorsese</option>
                options += "<option value='" + director_name + "'>" + director_name + "</option>";
                }

            // alert ("options: " + options);

            // Insert into director dropdowns
            $("#admin-delete-director-director").empty ();          // clear
            $("#admin-delete-director-director").append (options);  // append options
            $("#admin-add-movie-director").empty ();
            $("#admin-add-movie-director").append (options);
            $("#admin-delete-movie-director").empty ();
            $("#admin-delete-movie-director").append (options);
            }
        });

    // 3. When AJAX calls are complete, create triggers:
    //    . add-movie-director-dropdown, delete-movie-director-dropdown
    //      - to populate associated movie dropdown
    //    . all buttons
    //      - to issue API calls
    //    . NOTE: initially, test each trigger with alert()
    $(document).ajaxStop (function ()
        {
        $("#admin-add-director-button").click (function ()
            {
            alert ("#admin-add-director-button");
            });
        });
    });


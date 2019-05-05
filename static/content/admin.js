// admin.js

$(function ()
    {
    // 1. GET /templates/admin_page.div, insert into <body>
    $.ajax (
        {
        url:   "/templates/admin_page.div",  // html to be inserted into "body"
        async: false,                        // Block until ajax call returns
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
        async: false,                        // Block until ajax call returns
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

            // Insert "options" (i.e. director names) into director dropdowns
            $("#admin-delete-director-director").empty ();          // clear
            $("#admin-delete-director-director").append (options);  // append options

            $("#admin-add-movie-director").empty ();
            $("#admin-add-movie-director").append (options);

            $("#admin-delete-movie-director").empty ();
            $("#admin-delete-movie-director").append (options);
            }
        });

    // 3. Create button triggers
    //    . add-movie-director-dropdown
    //    . delete-movie-director-dropdown
    //      - populate associated movie dropdown
    $("#admin-add-director-button").click (function ()
        {
        adminAddDirector ();
        });

    $("#admin-delete-director-button").click (function ()
        {
        adminDeleteDirector ();
        });

    $("#admin-add-movie-button").click (function ()
        {
        adminAddMovie ();
        });

    $("#admin-delete-movie-button").click (function ()
        {
        adminDeleteMovie ();
        });
    });

function adminAddDirector ()
    {
    // Extract new director_name from the text box
    var director_name = $("#admin-add-director-director").val ();

    if (director_name == "")
        {
        alert ("ERROR: please enter a director first");
        }
    else
        {
        alert ("director_name: " + director_name);
        }
    }

function adminDeleteDirector ()
    {
    var director_name = $("#admin-delete-director-director").find("option:selected").text ();

    if (director_name == "Choose director...")
        {
        alert ("ERROR: please choose a director first");
        }
    else
        {
        alert ("director_name: " + director_name);
        }
    }

function adminAddMovie ()
    {
    var director_name = $("#admin-add-movie-director").find("option:selected").text ();

    if (director_name == "Choose director...")
        {
        alert ("ERROR: please choose a director first");
        }
    else
        {
        var movie_name = $("#admin-add-movie-movie").find("option:selected").text ();

        if (movie_name == "Choose movie...")
            {
            alert ("ERROR: please choose a movie first");
            }
        else
            {
            alert ("director_name: " + director_name + "\n" +
                   "movie_name: "    + movie_name);
            }
        }
    }

function adminDeleteMovie ()
    {
    var director_name = $("#admin-delete-movie-director").find("option:selected").text ();

    if (director_name == "Choose director...")
        {
        alert ("ERROR: please choose a director first");
        }
    else
        {
        var movie_name = $("#admin-delete-movie-movie").find("option:selected").text ();

        if (movie_name == "Choose movie...")
            {
            alert ("ERROR: please choose a movie first");
            }
        else
            {
            alert ("director_name: " + director_name + "\n" +
                   "movie_name: "    + movie_name);
            }
        }
    }


<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>wefin | Send SMS</title>

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="assets/images/favicons/favicon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="assets/images/favicons/favicon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="assets/images/favicons/favicon.png"
    />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="assets/images/favicons/favicon.png"
    />

    <meta name="msapplication-TileImage" content="" />
    <meta name="theme-color" content="#ffffff" />

    <link href="assets/css/bankse-common.css?v=1112" rel="stylesheet" />
    <style>
      :root {
        --main-bg: #2e0080;
      }

      .main-bg {
        background: var(--main-bg) !important;
      }

      input:focus,
      button:focus {
        border: 1px solid var(--main-bg) !important;
        box-shadow: none !important;
      }

      .form-check-input:checked {
        background-color: var(--main-bg) !important;
        border-color: var(--main-bg) !important;
      }

      .card,
      .btn,
      input {
        border-radius: 0 !important;
      }

      .score-page-block {
        background: var(--main-bg) !important;
        padding: 20px;
        margin: 15px 0px;
        border-radius: 10px;
      }
      .score-page-block p {
        margin: 20px 0px;
        color: #fff;
        font-size: 20px;
      }
      .score-page-block p strong {
        font-size: 40px;
      }
    </style>
  </head>

  <body>
    <main class="main" id="top">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-6 col-md-8 col-sm-8">
            <div class="card shadow">
              <div class="card-title text-center">
                <h2 class="p-3">Send SMS</h2>
              </div>
              <div class="card-body">
                <form id="check-score">
                  <div class="mb-4">
                    <label for="Mobile" class="form-label"
                      >Enter Mobile No.</label
                    >
                    <input
                      type="text"
                      maxlength="10"
                      minlength="10"
                      class="form-control"
                      name="mobile"
                      id="mob"
                      pattern="[0-9]*$"
                    />
                  </div>

                  <div class="d-grid">
                    <button class="btn text-light main-bg" id="submit_mob">
                      Send
                    </button>
                  </div>
                  <div class="d-grid text-right">
                    <button
                      class="btn text-light main-bg"
                      id="reset"
                      style="
                        background: #fff !important;
                        color: #2e0080 !important;
                        border: 0px;
                      "
                    >
                      Reset
                    </button>
                  </div>
                  <div class="d-grid">
                    <div style="margin: 15px 0px 0px" id="error"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row" id="res"></div>
      </div>
      <br />
      <br />
    </main>
  </body>
</html>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/is.min.js"></script>
<script type="text/javascript" src="assets/js/main.js"></script>
<script>
  var reg = new RegExp("^[0-9]*$");

  $(document).ready(function () {
    $("#mob").keypress(function (e) {
      console.log(e.key);
      let m = $(this).val();
      if (reg.test(m) == false) {
        $("#error").html(
          '<p class="alert alert-danger">Please provide mobile number</p>'
        );
        setTimeout(() => {
          $("#mob").val("");
          $("#error").html("");
        }, 3000);
        return false;
      }

      if (e.key === "Enter") {
        if (m.length == 10) {
          $("#submit_mob").click();
        }
      }
    });

    $("#submit_mob").click(function (e) {
      e.preventDefault();
      var m = $("#mob").val();
      if (m == "") {
        $("#error").html(
          '<p class="alert alert-danger">Please provide mobile number</p>'
        );
        setTimeout(() => {
          $("#error").html("");
        }, 3000);
      } else {
        // const data = {mobile: m}
        $.post(
          "https://apiuat.bankse.in/sendCampaignSms",
          { mobile: m },
          function (data) {
            if (data.success) {
              $("#res").html(
                '<div class="col-sm-12 text-center"><div class="alert alert-success alert-dismissible fade show"><p><strong>' +
                  data.message +
                  " on" +
                  "- " +
                  m +
                  "</strong> <button type='button' class='btn-close' data-bs-dismiss='alert'></button></p></div></div>"
              );
            } else {
              $("#res").html(
                '<div class="alert alert-warning alert-dismissible fade show"><p>No Message Not Sent</p> <button type="button" class="btn-close" data-bs-dismiss="alert"></button></div></div>'
              );
            }
          }
        );
      }
    });

    $("#reset").click(function (e) {
      e.preventDefault();
      $("#mob").val("");
      $("#error").html("");
      $("#res").html("");
    });
  });
</script>

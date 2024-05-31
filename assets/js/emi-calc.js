function kc() {
    jQuery("#loanamount").blur(function () {
        jQuery("#loanamount").val(
            Globalize.format(
                Math.round(
                    jQuery("#loanamount")
                        .val()
                        .replace(/[^\d\.]/g, "")
                ),
                "n",
                "en-IN"
            )
        );
    }),
        jQuery("#loaninterest").blur(function () {
            jQuery("#loaninterest").val(
                Math.round(
                    1e3 *
                        jQuery("#loaninterest")
                            .val()
                            .replace(/[^\d\.]/g, "")
                ) / 1e3
            );
        }),
        jQuery("#loanterm").blur(function () {
            jQuery("#loanterm").val(
                jQuery("#emicalculatorform input[name='loantenure']")[0].checked
                    ? Math.round(
                          (Math.round(
                              12 *
                                  jQuery("#loanterm")
                                      .val()
                                      .replace(/[^\d\.]/g, "")
                          ) /
                              12) *
                              100
                      ) / 100
                    : jQuery("#loanterm")
                          .val()
                          .replace(/[^\d\.]/g, "")
            );
        });
}
function ec() {
    jQuery("#startmonthyear").attr("readonly", !0),
        jQuery("#startmonthyear")
            .datepicker({ format: "M yyyy", minViewMode: 1, autoclose: !0 })
            .on("changeDate", function () {
                jQuery(this).datepicker("getDate").toDateString() != db.c.toDateString() && ((db.c = jQuery(this).datepicker("getDate")), X());
            })
            .on("hide", function () {
                jQuery("#startmonthyear").blur();
            }),
        (db.c = new Date()),
        jQuery("#startmonthyear").datepicker("setDate", db.c);
}
function fc() {
    jQuery("#loanamount").unbind("change"), jQuery("#loaninterest").unbind("change"), jQuery("#loanterm").unbind("change"), jQuery("#emicalculatorform input[name='loantenure']").unbind("change");
}
function nc(a, s, e, n, t) {
    (Tb = jQuery("#loanamountslider").slider({
        range: "min",
        value: parseInt(
            jQuery("#loanamount")
                .val()
                .replace(/[^\d\.]/g, "")
        ),
        min: 0,
        max: a,
        step: s,
        slide: function (a, s) {
            jQuery("#loanamount").val(Globalize.format(Math.round(s.value), "n", "en-IN"));
        },
        change: function (a) {
            a.originalEvent && X();
        },
    })),
        Tb.slider("value", Tb.slider("value")),
        (Ub = jQuery("#loaninterestslider").slider({
            range: "min",
            value: parseFloat(jQuery("#loaninterest").val()),
            min: 5,
            max: e,
            step: 0.25,
            slide: function (a, s) {
                jQuery("#loaninterest").val(s.value);
            },
            change: function (a) {
                a.originalEvent && X();
            },
        })),
        Ub.slider("value", Ub.slider("value")),
        (a = parseInt(jQuery("#loanterm").val())),
        jQuery("#emicalculatorform input[name='loantenure']")[1].checked && (a = parseInt(jQuery("#loanterm").val()) / 12),
        (Vb = jQuery("#loantermslider").slider({
            range: "min",
            value: a,
            min: 0,
            max: n,
            step: t,
            slide: function (a, s) {
                jQuery("#loanterm").val(jQuery("#emicalculatorform input[name='loantenure']")[0].checked ? s.value : 12 * s.value);
            },
            change: function (a) {
                a.originalEvent && X();
            },
        })),
        Vb.slider("value", Vb.slider("value"));
}
function hc() {
    jQuery("#loanamount").change(function () {
        Tb.slider("value", this.value.replace(/[^\d\.]/g, "")), X();
    }),
        jQuery("#loaninterest").change(function () {
            Ub.slider("value", this.value), X();
        }),
        jQuery("#loanterm").change(function () {
            jQuery("#emicalculatorform input[name='loantenure']")[0].checked ? Vb.slider("value", this.value) : Vb.slider("value", this.value / 12), X();
        }),
        jQuery("#emicalculatorform input[name='loantenure']").change(function () {
            jQuery("#loanterm").val(
                jQuery("#emicalculatorform input[name='loantenure']")[0].checked
                    ? Math.round(
                          (jQuery("#loanterm")
                              .val()
                              .replace(/[^\d\.]/g, "") /
                              12) *
                              100
                      ) / 100
                    : Math.round(
                          12 *
                              jQuery("#loanterm")
                                  .val()
                                  .replace(/[^\d\.]/g, "")
                      )
            ),
                pc();
        });
}
function ic(a, s, e, n, t, l, r, c, i) {
    fc(),
        jQuery("#loanamount").val(Globalize.format(n, "n", "en-IN")),
        jQuery("#loaninterest").val((1e3 * l) / 1e3),
        jQuery("#loanterm").val(jQuery("#emicalculatorform input[name='loantenure']")[0].checked ? i / 12 : i),
        nc(s, e, t, r, c),
        hc(),
        pc();
}
function pc() {
    jQuery("#loanamountsteps").html(
        '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick hidden-xs" style="left: 12.5%;">|<br/><span class="marker">25L</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">50L</span></span><span class="tick hidden-xs" style="left: 37.5%;">|<br/><span class="marker">75L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">100L</span></span><span class="tick hidden-xs" style="left: 62.5%;">|<br/><span class="marker">125L</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">150L</span></span><span class="tick hidden-xs" style="left: 87.5%;">|<br/><span class="marker">175L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">200L</span></span>'
    ),
        jQuery("#loanintereststeps").html(
            '<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20</span></span>'
        ),
        jQuery("#loantermsteps").html(
            jQuery("#emicalculatorform input[name='loantenure']")[0].checked
                ? '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 33.33%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">20</span></span><span class="tick" style="left: 83.33%;">|<br/><span class="marker">25</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">30</span></span>'
                : '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">60</span></span><span class="tick" style="left: 33.33%;">|<br/><span class="marker">120</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">180</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">240</span></span><span class="tick" style="left: 83.33%;">|<br/><span class="marker">300</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">360</span></span>'
        ),
        jQuery("#personalloanamountsteps").html(
            '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">2.5L</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">5L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">7.5L</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">10L</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">12.5L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">15L</span></span>'
        ),
        jQuery("#personalloanintereststeps").html(
            '<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 12.5%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 37.5%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 62.5%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">20</span></span><span class="tick" style="left: 87.5%;">|<br/><span class="marker">22.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">25</span></span>'
        ),
        jQuery("#personalloantermsteps").html(
            jQuery("#emicalculatorform input[name='loantenure']")[0].checked
                ? '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 20%;">|<br/><span class="marker">1</span></span><span class="tick" style="left: 40%;">|<br/><span class="marker">2</span></span><span class="tick" style="left: 60%;">|<br/><span class="marker">3</span></span><span class="tick" style="left: 80%;">|<br/><span class="marker">4</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">5</span>'
                : '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 20%;">|<br/><span class="marker">12</span></span><span class="tick" style="left: 40%;">|<br/><span class="marker">24</span></span><span class="tick" style="left: 60%;">|<br/><span class="marker">36</span></span><span class="tick" style="left: 80%;">|<br/><span class="marker">48</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">60</span>'
        ),
        jQuery("#carloanamountsteps").html(
            '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 25%;">|<br/><span class="marker">5L</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">10L</span></span><span class="tick" style="left: 75%;">|<br/><span class="marker">15L</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20L</span></span>'
        ),
        jQuery("#carloanintereststeps").html(
            '<span class="tick" style="left: 0%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 16.67%;">|<br/><span class="marker">7.5</span></span><span class="tick" style="left: 33.34%;">|<br/><span class="marker">10</span></span><span class="tick" style="left: 50%;">|<br/><span class="marker">12.5</span></span><span class="tick" style="left: 66.67%;">|<br/><span class="marker">15</span></span><span class="tick" style="left: 83.34%;">|<br/><span class="marker">17.5</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">20</span></span>'
        ),
        jQuery("#carloantermsteps").html(
            jQuery("#emicalculatorform input[name='loantenure']")[0].checked
                ? '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 14.29%;">|<br/><span class="marker">1</span></span><span class="tick" style="left: 28.57%;">|<br/><span class="marker">2</span></span><span class="tick" style="left: 42.86%;">|<br/><span class="marker">3</span></span><span class="tick" style="left: 57.14%;">|<br/><span class="marker">4</span></span><span class="tick" style="left: 71.43%;">|<br/><span class="marker">5</span></span><span class="tick" style="left: 85.71%;">|<br/><span class="marker">6</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">7</span></span>'
                : '<span class="tick" style="left: 0%;">|<br/><span class="marker">0</span></span><span class="tick" style="left: 14.29%;">|<br/><span class="marker">12</span></span><span class="tick" style="left: 28.57%;">|<br/><span class="marker">24</span></span><span class="tick" style="left: 42.86%;">|<br/><span class="marker">36</span></span><span class="tick" style="left: 57.14%;">|<br/><span class="marker">48</span></span><span class="tick" style="left: 71.43%;">|<br/><span class="marker">60</span></span><span class="tick" style="left: 85.71%;">|<br/><span class="marker">72</span></span><span class="tick" style="left: 100%;">|<br/><span class="marker">84</span></span>'
        );
}
function X() {
    jQuery("#emicalculatorform").mask("Calculating EMI..."), setTimeout(rc, 10);
}
function lc() {
    jQuery(".ecalprint").click(function () {
        return window.print(), !1;
    });
}
function mc() {
    jQuery(".ecalshare").click(function () {
        jQuery("#loader").toggle();
        var a = gc();
        return (
            (a = Base64.encode(unescape(encodeURIComponent(JSON.stringify(a))))),
            jQuery.get("https://emicalculator.net/bitly/?longURL=https://emicalculator.net/?ecdata=" + a, function (a) {
                jQuery("#sharelink").val(a), jQuery("#ecalsharelink").slideDown(), jQuery("#loader").toggle();
            }),
            !1
        );
    }),
        jQuery("#sharelink").click(function () {
            jQuery(this).focus().select();
        });
}
function rc() {
    jQuery("#ecalsharelink").hide(),
        (d = Math.abs(
            jQuery("#loanamount")
                .val()
                .replace(/[^\d\.]/g, "")
        )),
        (f = Math.abs(jQuery("#loaninterest").val() / 12 / 100)),
        (k = Math.abs(jQuery("#emicalculatorform input[name='loantenure']")[0].checked ? Math.round(12 * jQuery("#loanterm").val()) : jQuery("#loanterm").val())),
        0 == f && (jQuery("#loaninterest").val(5), (f = 0.004166666666666667), Ub.slider("value", 5)),
        0 == k && (jQuery("#loanterm").val(jQuery("#emicalculatorform input[name='loantenure']")[0].checked ? 1 : 12), Vb.slider("value", 1), (k = 12)),
        (cb = 0),
        "emiadvance" == jQuery("#emicalculatorform input[name='emischeme']:checked").val() && (cb = 1),
        jQuery("#loanstartdate").val(jQuery("#startmonthyear").val()),
        (n = "car-loan" == r && 1 == cb ? (Math.pow(1 + f, k - 1) / (Math.pow(1 + f, k) - 1)) * f * d : (Math.pow(1 + f, k) / (Math.pow(1 + f, k) - 1)) * f * d),
        jQuery("#emiamount span").text(Globalize.format(Math.round(n), "n", "en-IN")),
        jQuery("#emitotalinterest span").text(Globalize.format(Math.round(n * k - d), "n", "en-IN")),
        jQuery("#emitotalamount span").text(Globalize.format(Math.round(n * k), "n", "en-IN")),
        (v = []),
        (w = []),
        (x = []),
        (Zb = []),
        ($b = []),
        (y = []),
        (z = []),
        (U = []),
        (V = []),
        (bc = []),
        (y[0] = new Date(db.c.getTime())),
        "car-loan" == r && 1 == cb ? ((U[0] = 0), (z[0] = n)) : ((U[0] = d * f), (z[0] = n - U[0])),
        (V[0] = d - z[0]),
        (bc[0] = ((d - V[0]) / d) * 100);
    var a = y[0].getFullYear(),
        s = 0;
    for (v[s++] = a, w[a] = z[0], x[a] = U[0], Zb[a] = V[0], $b[a] = bc[0], i = 1; i < k; i++)
        (y[i] = new Date(y[i - 1].getTime())),
            y[i].setMonth(y[i].getMonth() + 1, 1),
            (U[i] = V[i - 1] * f),
            (z[i] = n - U[i]),
            (V[i] = V[i - 1] - z[i]),
            (bc[i] = ((d - V[i]) / d) * 100),
            y[i].getFullYear() != a && ((a = y[i].getFullYear()), (v[s++] = a), (w[a] = 0), (x[a] = 0), (Zb[a] = 0), ($b[a] = 0)),
            (w[a] += z[i]),
            (x[a] += U[i]),
            (Zb[a] = V[i]),
            ($b[a] = bc[i]);
    (V[k - 1] = 0), (Zb[a] = 0), (bc[k - 1] = 100), ($b[a] = 100), sc(), uc(), jQuery("#emicalculatorform").unmask();
}
function tc() {
    var a = [],
        s = [],
        e = [],
        n = [],
        t = 0;
    t = 0;
    for (var l = v.length; l > t; t++) {
        var r = v[t];
        (a[t] = r), (s[t] = w[r]), (e[t] = x[r]), (n[t] = Zb[r]);
    }
    new Highcharts.Chart({
        chart: { height: null, width: null, renderTo: "emibarchart", backgroundColor: "transparent", plotBackgroundColor: "transparent", defaultSeriesType: "column", borderWidth: 0, C: 0, G: 0 },
        title: { text: "" },
        xAxis: {
            categories: a,
            minorTickInterval: "auto",
            tickmarkPlacement: "on",
            labels: {
                rotation: -45,
                align: "right",
                step: 8 < v.length ? 2 : 1,
                style: { font: "normal 9px Verdana, sans-serif" },
                formatter: function () {
                    return this.value;
                },
            },
        },
        yAxis: [
            {
                min: 0,
                title: { text: "EMI Payment / year" },
                stackLabels: { enabled: !1, style: { fontWeight: "bold", color: (Highcharts.theme && Highcharts.theme.j) || "gray" } },
                opposite: !0,
                labels: {
                    formatter: function () {
                        return "? " + Globalize.format(this.value, "n", "en-IN");
                    },
                },
            },
            {
                min: 0,
                title: { text: "Balance" },
                stackLabels: { enabled: !1, style: { fontWeight: "bold", color: (Highcharts.theme && Highcharts.theme.j) || "gray" } },
                labels: {
                    formatter: function () {
                        return "? " + Globalize.format(this.value, "n", "en-IN");
                    },
                },
            },
        ],
        legend: { align: "center", itemMarginBottom: 2, itemMarginTop: 2, verticalAlign: "bottom", floating: !1, backgroundColor: "#EEEEEE", shadow: !1 },
        tooltip: {
            formatter: function () {
                return "Balance" == this.series.name
                    ? "<b>Year: " + this.x + "</b><br/>" + this.series.name + " : ? " + Globalize.format(this.y, "n", "en-IN") + "<br/>Loan Paid To Date : " + Globalize.format(((d - this.y) / d) * 100, "n2", "en-IN") + "%"
                    : "<b>Year : " + this.x + "</b><br/>" + this.series.name + " : ? " + Globalize.format(this.y, "n", "en-IN") + "<br/>Total Payment : ? " + Globalize.format(this.point.stackTotal, "n", "en-IN");
            },
        },
        plotOptions: { column: { borderWidth: 0, stacking: "normal", dataLabels: { enabled: !1, color: (Highcharts.theme && Highcharts.theme.u) || "white" } } },
        series: [
            { name: "Interest", data: e, yAxis: 0, legendIndex: 2, color: "#ED8C2B" },
            { name: "Principal", data: s, yAxis: 0, legendIndex: 1, color: "#88A825" },
            { name: "Balance", data: n, type: "spline", yAxis: 1, legendIndex: 3, color: "#B8204C" },
        ],
    });
}
function gc(a) {
    var s = jQuery("#emicalculatorform").find(":input").get();
    return "object" != typeof a
        ? ((a = {}),
          jQuery.each(s, function () {
              this.name && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type)) && "loandata" != this.name && (a[this.name] = jQuery(this).val());
          }),
          a)
        : (jQuery.each(s, function () {
              this.name && a[this.name]
                  ? "checkbox" == this.type || "radio" == this.type
                      ? (jQuery(this).prop("checked", a[this.name] == jQuery(this).val()),
                        a[this.name] == jQuery(this).val()
                            ? (jQuery(this).parent(".btn").addClass("active"),
                              jQuery(this)
                                  .parent(".btn")
                                  .siblings("input[name=" + this.name + "]")
                                  .removeClass("active"))
                            : (jQuery(this).parent(".btn").removeClass("active"),
                              jQuery(this)
                                  .parent(".btn")
                                  .siblings("input[name=" + this.name + "]")
                                  .addClass("active")))
                      : jQuery(this).val(a[this.name])
                  : "checkbox" == this.type && jQuery(this).prop("checked", !1);
          }),
          jQuery(this));
}
function uc() {
    q =
        '<table><tr><th class="col-xs-2 col-md-1" id="yearheader">Year</th><th class="col-sm-2 hidden-xs" id="principalheader">Principal<br/>(A)</th><th class="col-xs-3 col-sm-2 visible-xs" id="principalheader">Principal</th><th class="col-sm-2 hidden-xs" id="interestheader">Interest<br/>(B)</th><th class="col-xs-3 col-sm-2 visible-xs" id="interestheader">Interest</th><th class="col-sm-3 hidden-xs" id="totalheader">Total Payment<br/>(A + B)</th><th class="col-xs-4 col-sm-3" id="balanceheader">Balance</th><th class="col-md-1 hidden-xs hidden-sm" id="paidtodateheader">Loan Paid To Date</th></tr>';
    for (var a = 0, s = 0, e = v.length; e > s; s++) {
        var n = v[s];
        (q +=
            '<tr class="yearlypaymentdetails"><td id="year' +
            n +
            '" class="col-xs-2 col-md-1 paymentyear">' +
            n +
            '</td><td class="col-xs-3 col-sm-2 currency">&#x20B9; ' +
            Globalize.format(w[n], "n", "en-IN") +
            '</td><td class="col-xs-3 col-sm-2 currency">&#x20B9; ' +
            Globalize.format(x[n], "n", "en-IN") +
            '</td><td class="col-sm-3 hidden-xs currency">&#x20B9; ' +
            Globalize.format(w[n] + x[n], "n", "en-IN") +
            '</td><td class="col-xs-4 col-sm-3 currency">&#x20B9; ' +
            Globalize.format(Zb[n], "n", "en-IN") +
            '</td><td class="col-md-1 hidden-xs hidden-sm paidtodateyear">' +
            Globalize.format($b[n], "n2", "en-IN") +
            "%</td></tr>"),
            (q += '<tr id= "monthyear' + n + '" class="monthlypaymentdetails"><td class="row monthyearwrapper" colspan="6"><div class="monthlypaymentcontainer"><table>');
        for (var t = y.length; t > a && y[a].getFullYear() == n; )
            q +=
                '<tr><td class="col-xs-2 col-md-1 paymentmonthyear">' +
                cc[y[a].getMonth()] +
                '</td><td class="col-xs-3 col-sm-2 currency">&#x20B9; ' +
                Globalize.format(z[a], "n", "en-IN") +
                '</td><td class="col-xs-3 col-sm-2 currency">&#x20B9; ' +
                Globalize.format(U[a], "n", "en-IN") +
                '</td><td class="col-sm-3 hidden-xs currency">&#x20B9; ' +
                Globalize.format(z[a] + U[a], "n", "en-IN") +
                '</td><td class="col-xs-4 col-sm-3 currency">&#x20B9; ' +
                Globalize.format(V[a], "n", "en-IN") +
                '</td><td class="col-md-1 hidden-xs hidden-sm paidtodatemonthyear">' +
                Globalize.format(bc[a++], "n2", "en-IN") +
                "%</td></tr>";
        q += "</table></div></td></tr>";
    }
    (q += "</table> "),
        jQuery("#emipaymenttable").html(q),
        jQuery("#emipaymenttable tr.monthlypaymentdetails").find("div").hide(),
        jQuery("#emipaymenttable td.toggle").click(function () {
            jQuery(this).attr("id");
        });
}
function sc() {
    new Highcharts.Chart({
        chart: { renderTo: "emipiechart", backgroundColor: "transparent", plotBackgroundColor: "transparent", borderWidth: null, plotBorderWidth: null, plotShadow: !1 },
        title: { text: "Break- up of Total Payment" },
        tooltip: {
            formatter: function () {
                return "< b > " + this.point.name + ": " + Math.round(10 * this.percentage) / 10 + " %</b > ";
            },
        },
        plotOptions: {
            pie: {
                size: 150,
                borderWidth: 0,
                startAngle: 0,
                allowPointSelect: !0,
                cursor: "pointer",
                dataLabels: {
                    style: { textShadow: !1 },
                    enabled: !0,
                    distance: -30,
                    color: "#FFFFFF",
                    formatter: function () {
                        return "< b > " + Math.round(10 * this.percentage) / 10 + " %</b > ";
                    },
                },
                showInLegend: !0,
            },
        },
        series: [
            {
                type: "pie",
                name: "Principal Loan Amount vs.Total Interest",
                data: [
                    { name: "Principal Loan Amount", y: d, color: "#88A825" },
                    { name: "Total Interest", y: n * k - d, sliced: !0, selected: !0, color: "#ED8C2B" },
                ],
            },
        ],
    });
}
var d,
    f,
    k,
    n,
    cb,
    db = { c: new Date() },
    q,
    r,
    Tb,
    Ub,
    Vb,
    Xb,
    Yb,
    v = [],
    w = [],
    x = [],
    Zb = [],
    $b = [],
    y = [],
    z = [],
    U = [],
    V = [],
    bc = [],
    cc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
jQuery(document).ready(function () {
    ec();
    var a = jQuery("#loandata").val();
    if ("" != a) {
        (a = jQuery.parseJSON(decodeURIComponent(escape(Base64.decode(a))))), (r = a.loanproduct), fc(), gc(a), hc();
        var s = Math.abs(
                jQuery("#loanamount")
                    .val()
                    .replace(/[^\d\.]/g, "")
            ),
            e = jQuery("#loaninterest").val(),
            n = jQuery("#loanterm").val();
        "loanyears" == a.loantenure && (n *= 12),
            $(".carloan")[0] ? ic("Car Loan Amount", 2e6, 1e4, s, 20, e, 7, 0.25, n) : $(".personalloan")[0] ? ic("Personal Loan Amount", 15e5, 1e4, s, 25, e, 5, 0.25, n) : ic("Home Loan Amount", 2e7, 1e5, s, 20, e, 30, 0.5, n);
    } else $(".carloan")[0] ? ic("Car Loan Amount", 2e6, 1e4, 4e5, 20, 12.5, 7, 0.25, 60) : $(".personalloan")[0] ? ic("Personal Loan Amount", 15e5, 1e4, 35e4, 25, 17.5, 5, 0.25, 36) : ic("Home Loan Amount", 2e7, 1e5, 5e6, 20, 10.5, 30, 0.5, 240), kc(), lc(), mc(), X();
});

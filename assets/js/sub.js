$(document).ready(function() {
    var $window = $(window);
    $('.find_pw').click(function() {
        $('.find_step1').show();
    })
    $('.close_step1').click(function() {
        $('.find_step1').hide();
    })
    $('.find_step1 button').click(function() {
        $('.find_step1').hide();
        $('.find_step2').show();
    })
    $('.close_step2').click(function() {
        $('.find_step2').hide();
    })
    $('.find_step2 button').click(function() {
        $('.find_step2').hide();
    })
    $('#detail_pop li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');

        if($(this).index() == 8) {
            $('#sc_pop_lineC').hide();
            $('#sc_pop_lineBarC').show();
        } else {
            $('#sc_pop_lineBarC').hide();
            $('#sc_pop_lineC').show();
        }
    })
    
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        changeYear: true,
        changeMonth: true,
        maxDate: 0
    });
    $( "#datepicker_1, #datepicker_2, #datepicker_3, #datepicker_4" ).datepicker();
    $('.layer_scdt_popup').click(function() {
        $('.sc_detail_layer').show();
    })
    $('.sc_detail_layer .close').click(function () {
        $('.sc_detail_layer').hide();
    })
    $('.group_manage .register').click(function() {
        $('.group_title').text('그룹 등록');
        $('.gm_detail_layer').show();
        $('.setting_link, .group_apply').hide();
    })
    $('.layer_group_popup').click(function() {
        $('.group_title').text('그룹 수정');
        $('.gm_detail_layer').show();
        $('.setting_link, .group_apply').show();
    })
    $('.gm_detail_layer .cancel').click(function () {
        $('.gm_detail_layer').hide();
    })
    $('.mb_mg.register').click(function() {
        $('.pi_detail_layer').show();
    })
    $('.detail_layer .close').click(function () {
        $('.detail_layer').hide();
    })
    // 테이블 체크시 bg color
    $('.row_check').click(function() {
        if ($(this).is(":checked")) {
            $(this).parent().parent().find('*').not(":nth-child(1)").css({"background-color": "#d6e0fc"});
        } else {
            $(this).parent().parent().find('*').not(":nth-child(1)").css({"background-color": "#f9fafd"});
        }
    })
    $('.col_check').click(function() {
        var idx = $(this).parent().index() + 1;
        if ($(this).is(":checked")) {
            $(this).parent().parent().parent().next().children().children( ":nth-child("+ idx +")").css({"background-color": "#d6e0fc"})
        } else {
            $(this).parent().parent().parent().next().children().children( ":nth-child("+ idx +")").css({"background-color": "#f9fafd"})
        }
    })
    $('.all_check').click(function() {
        if ($(this).is(":checked")) {
            $("input[name=gm_chk]").prop("checked", true);
            $(this).parent().parent().parent().next().children().children().not(":nth-child(1)").css({"background-color": "#d6e0fc"});
        } else {
            $("input[name=gm_chk]").prop("checked", false);
            $(this).parent().parent().parent().next().children().children().not(":nth-child(1)").css({"background-color": "#f9fafd"});
        }
    })
    $('.table_wrap.gpm td').click(function() {
        if ($(this).css("background-color") == 'rgb(249, 250, 253)') {
            $(this).not( '.table_wrap.gpm td:nth-child(1)').css({"background-color": "#d6e0fc"})
        } else {
            $(this).not( '.table_wrap.gpm td:nth-child(1)').css({"background-color": "#f9fafd"})
        }
    })

    $('.tit_show').click(function() {
        if ($(this).parent().parent().hasClass('on')) {
            $(this).parent().parent().removeClass('on')
        } else {
            $(this).parent().parent().addClass('on')
        }
    })

    if ($('#ip_group').is(":checked")) {
        $('.ipgp').text('그룹명');
        $('.ip_table tr td:first-child').text('경영관리팀');
        $('.search_input').attr("placeholder", "그룹 Search");
    } else {
        $('.ipgp').text('사용자 IP');
        $('.ip_table tr td:first-child').text('128.127.129.123');
        $('.search_input').attr("placeholder", "IP Search");
    }
    $('#ip_group').click(function() {
        if ($(this).is(":checked")) {
            $('.ipgp').text('그룹명');
            $('.ip_table tr td:first-child').text('경영관리팀');
            $('.search_input').attr("placeholder", "그룹 Search");
        } else {
            $('.ipgp').text('사용자 IP');
            $('.ip_table tr td:first-child').text('128.127.129.123');
            $('.search_input').attr("placeholder", "IP Search");
        }
    })
    $('.create_report').click(function() {
        $('.report_create_layer').show();
    })

    $('.os_access_btn').click(function() {
        $('#osAccessPop').show();
    })
    $('.app_access_btn').click(function() {
        $('#appAccessPop').show();
    })

    $('.network_band_btn').click(function() {
        $('#networkBandLayer').show();
    })
    $('.active_port_btn').click(function() {
        $('#activePortLayer').show();
    })

    $('.toggle_box.child input').each(function (index, item) {
        if ($(this).is(":checked")) {
            $(this).parent().parent().parent().parent().removeClass('disabled')
        } else {
            $(this).parent().parent().parent().parent().addClass('disabled')
        }
    });
    
    $('.toggle_box.child input').click(function () {
        if ($(this).is(":checked")) {
            $(this).parent().parent().parent().parent().removeClass('disabled')
        } else {
            $(this).parent().parent().parent().parent().addClass('disabled')
        }
    })
    

    $('.dbox li').click(function () {
        $('.gm_detail_layer').show()
    })
});

// sub_02.html 네트워크 대역 분포 donut chart
var canvas_sub_1 = document.getElementById("canvas_sub_1");
if (canvas_sub_1) {
    var color_set_1 = [
        '#f46368',
        '#fcc143',
        '#00c4e4',
        '#9e5cfb',
        '#2958ff'
    ];
    var donut_config_1 = {
        type: 'doughnut',
        data: {
            labels: [
                '218',
                '219',
                '175',
                '58',
                '222'
            ],
            datasets: [
                {
                    data: [1618, 1325, 965, 645, 222],
                    backgroundColor: color_set_1,
                    hoverBorderColor: color_set_1,
                    hoverBackgroundColor: color_set_1,
                    borderRadius: 30
                }
            ]
        },
        options: {
            cutout: 95,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                    external: function(context) {
                        var idx = context.tooltip.dataPoints[0].dataIndex;
                        var key = context.tooltip.dataPoints[0].label
                        var value = context.tooltip.dataPoints[0].parsed
                        $('.chart_label_1 tbody tr').removeClass('on');
                        $(`.chart_label_1 tbody tr:nth-child(${idx+1})`).addClass('on');
                        $('#donutPer_sub_1 .cate_value').html(key);
                        $('#donutPer_sub_1 .per_value').html(value);
                    }
                }
            }
        }
    };
    var donut_chart_1 = new Chart(canvas_sub_1, donut_config_1);
}

// Network 운영 현황 - 네트워크 대역 분포 donut 차트
var canvas_sub_2 = document.getElementById("canvas_sub_2");
if (canvas_sub_2) {
    var color_set_2 = [
        '#f46368',
        '#fcc143',
        '#00c4e4',
        '#9e5cfb',
        '#2958ff'
    ];
    var donut_config_2 = {
        type: 'doughnut',
        data: {
            labels: [
                '80',
                '8080',
                '3306',
                '21',
                '9999'
            ],
            datasets: [
                {
                    data: [789, 723, 662, 452, 211],
                    backgroundColor: color_set_2,
                    hoverBorderColor: color_set_2,
                    hoverBackgroundColor: color_set_2,
                    borderRadius: 30
                }
            ]
        },
        options: {
            cutout: 95,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                    external: function(context) {
                        var idx = context.tooltip.dataPoints[0].dataIndex;
                        var key = context.tooltip.dataPoints[0].label
                        var value = context.tooltip.dataPoints[0].parsed
                        $('.chart_label_2 tbody tr').removeClass('on');
                        $(`.chart_label_2 tbody tr:nth-child(${idx+1})`).addClass('on');
                        $('#donutPer_sub_2 .cate_value').html(key);
                        $('#donutPer_sub_2 .per_value').html(value);
                    }
                }
            }
        }
    };
    var donut_chart_2 = new Chart(canvas_sub_2, donut_config_2);
}


// Network 운영 현황 - 네트워크 대역 분포 팝업 - 도넛 차트
var canvas_sub_3 = document.getElementById("canvas_sub_3");
if (canvas_sub_3) {
    var color_set_3 = [
        '#f46368',
        '#fcc143',
        '#00c4e4',
        '#9e5cfb',
        '#2958ff',
        '#c9c2bb',
        '#a0d468',
        '#48cfae',
        '#4c90e4',
        '#ec87bf',
    ]
    var donut_config_3 = {
        type: 'doughnut',
        data: {
            labels: [
                '218',
                '219',
                '175',
                '158',
                '111',
                '222',
                '333',
                '444',
                '555',
                '666'
            ],
            datasets: [
                {
                    data: [1618, 1325, 965, 645, 532, 411, 398, 384, 277, 225],
                    backgroundColor: color_set_3,
                    hoverBorderColor: color_set_3,
                    hoverBackgroundColor: color_set_3,
                    borderRadius: 30
                }
            ]
        },
        options: {
            cutout: 157,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                    external: function(context) {
                        var idx = context.tooltip.dataPoints[0].dataIndex;
                        var key = context.tooltip.dataPoints[0].label
                        var value = context.tooltip.dataPoints[0].parsed
                        $('.chart_label_3 tbody tr').removeClass('on');
                        $(`.chart_label_3 tbody tr:nth-child(${idx+1})`).addClass('on');
                        $('#donutPer_sub_3 .cate_value').html(key);
                        $('#donutPer_sub_3 .per_value').html(value);
                    }
                }
            }
        }
    };
    var donut_chart_3 = new Chart(canvas_sub_3, donut_config_3);
}

// Network 운영 현황 - 활성 포트 팝업 - 도넛 차트
var canvas_sub_4 = document.getElementById("canvas_sub_4");
if (canvas_sub_4) {
    var color_set_4 = [
        '#f46368',
        '#fcc143',
        '#00c4e4',
        '#9e5cfb',
        '#2958ff',
        '#c9c2bb',
        '#a0d468',
        '#48cfae',
        '#4c90e4',
        '#ec87bf',
    ]
    var donut_config_4 = {
        type: 'doughnut',
        data: {
            labels: [
                '53',
                '80',
                '8080',
                '3389',
                '22',
                '137',
                '23',
                '1222',
                '443',
                '8888'
            ],
            datasets: [
                {
                    data: [789, 723, 662, 552, 491, 443, 390, 350, 250, 200],
                    backgroundColor: color_set_4,
                    hoverBorderColor: color_set_4,
                    hoverBackgroundColor: color_set_4,
                    borderRadius: 30
                }
            ]
        },
        options: {
            cutout: 157,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                    external: function(context) {
                        var idx = context.tooltip.dataPoints[0].dataIndex;
                        var key = context.tooltip.dataPoints[0].label
                        var value = context.tooltip.dataPoints[0].parsed
                        $('.chart_label_4 tbody tr').removeClass('on');
                        $(`.chart_label_4 tbody tr:nth-child(${idx+1})`).addClass('on');
                        $('#donutPer_sub_4 .cate_value').html(key);
                        $('#donutPer_sub_4 .per_value').html(value);
                    }
                }
            }
        }
    };
    var donut_chart_4 = new Chart(canvas_sub_4, donut_config_4);
}

// bar 그라데이션
function getGradient(ctx, chartArea, color) {
    var width, height, gradient;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, color[0]);
        gradient.addColorStop(0.5, color[1]);
        gradient.addColorStop(1, color[2]);
    }
    return gradient;
}

// Network 운영 현황 - OS 접속 현황 Bar 차트
var bar_chart_custom1 = document.getElementById("bar_chart_custom1");
if (bar_chart_custom1) {
    var chartData_bar_1 = {
        type: 'bar',
        data: {
            labels: [
                'Windows 10',
                'Windows 7',
                'Windows XP',
                'Windows 8',
                'Linux',
                'Android',
                'Windows 2000',
                'iPhone',
                'Windows Vista',
                'iPad',
                'Mac OS 10.1'
            ],
            datasets: [{
                label: '',
                data: [
                    144,
                    125,
                    108,
                    76,
                    55,
                    42,
                    40,
                    35,
                    24,
                    20,
                    8
                ],
                backgroundColor: function(context) {
                    var chart = context.chart;
                    var ctx = chart.ctx;
                    var chartArea = chart.chartArea;
                    var colorArr = ['#957bdc', '#6a94db', '#40abda']
                    if (!chartArea) {
                      return null;
                    }
                    return getGradient(ctx, chartArea, colorArr);
                },
                borderRadius: 30,
                barThickness: 17 // bar width
            }]
        },
        plugins: [{
            id: 'backgrounds1',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false
                }
            },    
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        display: false
                    }
              
                },
                y: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                }
            },
            legend: {
                display: false
            }
        }
    }
    var bar_chart1 = new Chart(bar_chart_custom1, chartData_bar_1);
}

// Network 운영 현황 - APP 접속 현황 Bar 차트
var bar_chart_custom2 = document.getElementById("bar_chart_custom2");
if (bar_chart_custom2) {
    var chartData_bar_2 = {
        type: 'bar',
        data: {
            labels: [
                'Https',
                'Http',
                'DNS',
                'POP3',
                'FTP',
                'BitTorrent',
                'Proxy',
                'IMAP',
                'RDP',
                'SNMP',
                'SMB'
            ],
            datasets: [{
                label: '',
                data: [
                    712,
                    687,
                    520,
                    386,
                    268,
                    224,
                    198,
                    175,
                    126,
                    98,
                    22
                ],
                backgroundColor: function(context) {
                    var chart = context.chart;
                    var ctx = chart.ctx;
                    var chartArea = chart.chartArea;
                    var colorArr = ['#5893dc', '#4ab6c4', '#3cd7ad']
                    if (!chartArea) {
                      return null;
                    }
                    return getGradient(ctx, chartArea, colorArr);
                },
                borderRadius: 30,
                barThickness: 17 // bar width
            }]
        },
        plugins: [{
            id: 'backgrounds2',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false
                }
            },    
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        display: false
                    }
              
                },
                y: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                }
            },
            legend: {
                display: false
            },
            chartArea: {
                backgroundColor:'rgba(235, 237, 247, 0.2)',
            }
        }
    }
    var bar_chart2 = new Chart(bar_chart_custom2, chartData_bar_2);
}


// Network 운영 현황 - OS 접속 현황 Bar 차트 팝업
var bar_chart_popup_1 = document.getElementById("bar_chart_popup_1");
if (bar_chart_popup_1) {
    var chartData_bar_pop_1 = {
        type: 'bar',
        data: {
            labels: [
                'Windows 10',
                'Windows 7',
                'Windows XP',
                'Windows 8',
                'Linux',
                'Android',
                'Windows 2000',
                'iPhone',
                'Windows Vista',
                'iPad',
                'Mac OS 10.1'
            ],
            datasets: [{
                label: '',
                data: [
                    144,
                    125,
                    108,
                    76,
                    55,
                    42,
                    40,
                    35,
                    24,
                    20,
                    8
                ],
                backgroundColor: function(context) {
                    var chart = context.chart;
                    var ctx = chart.ctx;
                    var chartArea = chart.chartArea;
                    var colorArr = ['#957bdc', '#6a94db', '#40abda']
                    if (!chartArea) {
                      return null;
                    }
                    return getGradient(ctx, chartArea, colorArr);
                },
                borderRadius: 30,
                barThickness: 17 // bar width
            }]
        },
        plugins: [{
            id: 'backgrounds3',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false
                }
            },     
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        display: false
                    }
              
                },
                y: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                }
            },
            legend: {
                display: false
            },
            chartArea: {
                backgroundColor:'rgba(235, 237, 247, 0.2)',
            }
        }
    }
    var bar_chart_pop1 = new Chart(bar_chart_popup_1, chartData_bar_pop_1);
}




// Network 운영 현황 - APP 접속 현황 Bar 차트 팝업
var bar_chart_popup_2 = document.getElementById("bar_chart_popup_2");
if (bar_chart_popup_2) {
    var chartData_bar_pop_2 = {
        type: 'bar',
        data: {
            labels: [
                'Https',
                'Http',
                'DNS',
                'POP3',
                'FTP',
                'BitTorrent',
                'Proxy',
                'IMAP',
                'RDP',
                'SNMP',
                'SMB'
            ],
            datasets: [{
                label: '',
                data: [
                    712,
                    687,
                    520,
                    386,
                    268,
                    224,
                    198,
                    175,
                    126,
                    98,
                    22
                ],
                backgroundColor: function(context) {
                    var chart = context.chart;
                    var ctx = chart.ctx;
                    var chartArea = chart.chartArea;
                    var colorArr = ['#5893dc', '#4ab6c4', '#3cd7ad']
                    if (!chartArea) {
                      return null;
                    }
                    return getGradient(ctx, chartArea, colorArr);
                },
                borderRadius: 30,
                barThickness: 17 // bar width
            }]
        },
        plugins: [{
            id: 'backgrounds4',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false
                }
            },    
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        display: false
                    }
              
                },
                y: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                }
            },
            legend: {
                display: false
            },
            chartArea: {
                backgroundColor:'rgba(235, 237, 247, 0.2)',
            }
        }
    }
    var bar_chart_pop2 = new Chart(bar_chart_popup_2, chartData_bar_pop_2);
}

const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
        tooltipEl.style.borderRadius = '3px';
        tooltipEl.style.color = 'white';
        tooltipEl.style.opacity = 1;
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.transform = 'translate(-50%, 0)';
        tooltipEl.style.transition = 'all .1s ease';
        const table = document.createElement('div');
        table.style.margin = '0px';
        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
    }
    return tooltipEl;
};
const externalTooltipHandler = (context) => {
    const {chart, tooltip} = context;
    const tooltipEl = getOrCreateTooltip(chart);
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }
    if (tooltip.body) {
        let titleLines = tooltip.title || [];
        let bodyLines = tooltip.body.map(b => b.lines);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let span3 = document.createElement('span');
        titleLines.forEach(title => {
            span2 = document.createTextNode(`${title} 접속 횟수 : `);
        });
        bodyLines.forEach((body, i) => {
            const colors = tooltip.labelColors[i];
            console.log(colors.backgroundColor)
            span1 = document.createTextNode(`IP : ${body[0].split(': ')[0]}`);
            span3 = document.createTextNode(body[0].split(': ')[1]);
        });
        div1.appendChild(span1);
        div2.appendChild(span2);
        div2.appendChild(span3);
        const tableRoot = tooltipEl.querySelector('div');
        while (tableRoot.firstChild) {
            tableRoot.firstChild.remove();
        }
        tableRoot.appendChild(div1);
        tableRoot.appendChild(div2);
    }
    const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};
// Network 운영 현황 - 웹 통신 현황 Line 차트
var line_chart_custom1 = document.getElementById("line_chart_custom1");
if (line_chart_custom1) {
    var chartDataLine = {
        type: 'line',
        data: {
            labels: [
                '01시', '02시', '03시', '04시', '05시', '06시', '07시', '08시',
                '09시', '10시', '11시', '12시', '13시', '14시', '15시', '16시',
                '17시', '18시', '19시', '20시', '21시', '22시', '23시', '24시'
            ],
            datasets: [
                {
                    label: '1.1.1.1',
                    data: [32,43,72,34,12,97,32,43,72,34,12,97,32,43,72,34,12,97,32,43,72,34,12,97],
                    fill: false,
                    backgroundColor: '#f56f74',
                    borderColor: '#f56f74'
                },
                {
                    label: '2.2.2.2',
                    data: [64,23,56,33,16,91,64,23,56,33,16,91,64,23,56,33,16,91,64,23,56,33,16,91],
                    fill: false,
                    backgroundColor: '#fcc143',
                    borderColor: '#fcc143'
                },
                {
                    label: '3.3.3.3',
                    data: [14,74,23,63,44,76,14,74,23,63,44,76,14,74,23,63,44,76,14,74,23,63,44,76],
                    fill: false,
                    backgroundColor: '#00c4e4',
                    borderColor: '#00c4e4'
                },
                {
                    label: '4.4.4.4',
                    data: [37,13,95,27,33,44,37,13,95,27,33,44,37,13,95,27,33,44,37,13,95,27,33,44],
                    fill: false,
                    backgroundColor: '#9e5cfb',
                    borderColor: '#9e5cfb'
                },
                {
                    label: '5.5.5.5',
                    data: [44,56,42,66,24,53,44,56,42,66,24,53,44,56,42,66,24,53,44,56,42,66,24,53],
                    fill: false,
                    backgroundColor: '#2958ff',
                    borderColor: '#2958ff'
                }
            ]
        },
        plugins: [{
            id: 'backgrounds5',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                    position: 'nearest',
                    external: externalTooltipHandler
                }
            },
            elements: {
                line: {
                    tension: 0.01,
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius:10,
                    hoverBorderWidth: 6
                }
            },
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: true
                }
            },
            legend: {
                display: false
            }
        }
    }
    var line_chart1 = new Chart(line_chart_custom1, chartDataLine);
}


// 보안 위협 탐지 - 위협 탐지 상세 팝업 Line 차트
var line_chart_popup_1 = document.getElementById("line_chart_popup_1");
if (line_chart_popup_1) {
    var chartDataLinePop_1 = {
        type: 'line',
        data: {
            labels: [
                '2021-10-01',
                '2021-10-02',
                '2021-10-03',
                '2021-10-04',
                '2021-10-05',
                '2021-10-06',
                '2021-10-07'
            ],
            datasets: [
                {
                    label: '',
                    data: [32,43,72,34,12,97,32],
                    fill: false,
                    backgroundColor: '#f56f74',
                    borderColor: '#f56f74'
                },
                {
                    label: '',
                    data: [64,23,56,33,16,91,64],
                    fill: false,
                    backgroundColor: '#fcc143',
                    borderColor: '#fcc143'
                },
                {
                    label: '',
                    data: [14,74,23,63,44,76,14],
                    fill: false,
                    backgroundColor: '#00c4e4',
                    borderColor: '#00c4e4'
                },
                {
                    label: '',
                    data: [37,13,95,27,33,44,37],
                    fill: false,
                    backgroundColor: '#9e5cfb',
                    borderColor: '#9e5cfb'
                },
                {
                    label: '',
                    data: [44,56,42,66,24,53,44],
                    fill: false,
                    backgroundColor: '#2958ff',
                    borderColor: '#2958ff'
                }
            ]
        },
        plugins: [{
            id: 'backgrounds6',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false,
                },
                beforeEvent(chart, args, pluginOptions) {
                    const event = args.event;
                    if (event.type === 'mouseout') {
                      // process the event
                    }
                },
                tooltip: {
                    displayColors: false,
                    enabled: true,
                    // mode: 'point',
                    external: function(context) {
                        // console.log(context.chart.options.elements.line.borderWidth)
                        // context.chart.options.elements.line.borderWidth = 10
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.01,
                    borderWidth: 2
                },
                point: {
                    radius: 1,
                    hitRadius:10,
                    hoverBorderWidth: 6
                }
            },
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: true
                }
            },
            legend: {
                display: false
            }
        }
    }
    var line_chart_pop1 = new Chart(line_chart_popup_1, chartDataLinePop_1);
}

// 보안 위협 탐지 - 위협 탐지 상세 팝업 주기적 통신 Line + bar 차트
var line_chart_popup_2 = document.getElementById("line_chart_popup_2");
if (line_chart_popup_2) {
    var chartDataLinePop_2 = {
        type: 'scatter',
        data: {
            labels: [
                '2021-10-01',
                '2021-10-02',
                '2021-10-03',
                '2021-10-04',
                '2021-10-05',
                '2021-10-06',
                '2021-10-07'
            ],
            datasets: [{
                type: 'line',
                label: 'New CQ',
                data: [9, 3, 5, 4, 6, 6, 8],
                fill: false,
                borderColor: '#46cc72'
            },
            {
                type: 'bar',
                label: '지속 통신 수',
                data: [6, 4, 6, 3, 5, 3, 2],
                backgroundColor: function(context) {
                    var chart = context.chart;
                    var ctx = chart.ctx;
                    var chartArea = chart.chartArea;
                    var colorArr = ['#957bdc', '#6a94db', '#40abda']
                    if (!chartArea) {
                      return null;
                    }
                    return getGradient(ctx, chartArea, colorArr);
                },
                borderRadius: 30,
                barThickness: 17
            }]
        },
        plugins: [{
            id: 'backgrounds7',
            beforeDraw: (chart, args, options) => {
                const {
                    ctx,
                    chartArea,
                    scales: {
                    y
                    }
                } = chart;
                var gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, '#ebedf7');
                gradient.addColorStop(1, '#fff');
                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.height);
                ctx.restore();
            }
        }],
        options: {
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false
                }
            },
            elements: {
                line: {
                    tension: 0.01,
                    borderWidth: 2
                },
                point: {
                    radius: 1,
                    hitRadius:10,
                    hoverBorderWidth: 6
                }
            },
            // scales: {
            //     x: {
            //         display: true
            //     },
            //     y: {
            //         display: true
            //     }
            // },
            // legend: {
            //     display: false
            // }
        }
    }
    var line_chart_pop2 = new Chart(line_chart_popup_2, chartDataLinePop_2);
}

// 네트워크 대역 분포 팝업 - horizontalBar
var hrzBar_1 = document.getElementById("hrzBar_1");
if (hrzBar_1) {
    var chartHrzBar_1 = {
        type: 'bar',
        data: {
            labels: [
                '218.218.218.218',
                '218.218.218.217',
                '218.218.218.216',
                '218.218.218.215',
                '218.218.218.214',
                '218.218.218.213',
                '218.218.218.212',
                '218.218.218.211',
                '218.218.218.201',
                '218.218.218.202'
            ],
            datasets: [{
                label: '',
                data: [
                    712,
                    687,
                    520,
                    386,
                    268,
                    224,
                    198,
                    175,
                    126,
                    98,
                    22
                ],
                backgroundColor: '#f46368',
                borderRadius: 30,
                barThickness: 10 // bar width
            }]
        },
        options: {
            animation: {
                duration: 0
            },
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false
                }
            },    
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        display: false
                    }
              
                },
                y: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                }
            },
            legend: {
                display: false
            }
        }
    }
    var horizontalBarChart_1 = new Chart(hrzBar_1, chartHrzBar_1);
}

// 활성 포트 현황 팝업 - horizontalBar
var hrzBar_2 = document.getElementById("hrzBar_2");
if (hrzBar_2) {
    var chartHrzBar_2 = {
        type: 'bar',
        data: {
            labels: [
                '218.218.218.218',
                '218.218.218.217',
                '218.218.218.216',
                '218.218.218.215',
                '218.218.218.214',
                '218.218.218.213',
                '218.218.218.212',
                '218.218.218.211',
                '218.218.218.201',
                '218.218.218.202'
            ],
            datasets: [{
                label: '',
                data: [
                    712,
                    687,
                    520,
                    386,
                    268,
                    224,
                    198,
                    175,
                    126,
                    98,
                    22
                ],
                backgroundColor: '#f46368',
                borderRadius: 30,
                barThickness: 10 // bar width
            }]
        },
        options: {
            animation: {
                duration: 0
            },
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false
                }
            },    
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        display: false
                    }
              
                },
                y: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    }
                }
            },
            legend: {
                display: false
            }
        }
    }
    var horizontalBarChart_2 = new Chart(hrzBar_2, chartHrzBar_2);
}
$(document).ready(function() {
    var $window = $(window);
    // drag & drop
    $("#sortableType1").sortable({
        placeholder: "itemBoxHighlight"
    });
    $("#sortableType2").sortable({
        placeholder: "itemBoxHighlight"
    });
    $("#sortableType3").sortable({
        placeholder: "itemBoxHighlight"
    });
    $("#sortableType4").sortable({
        placeholder: "itemBoxHighlight"
    });
    $('#map_menu li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    })
    $('#network_menu li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).index() == 3) {
            $('#network_donutC').hide();
            $('#network_lineC').show();
            $('#main_line_chart').width('520')
            $('#main_line_chart').height('270')
        } else {
            $('#network_lineC').hide();
            $('#network_donutC').show();
        }
    })

    $('.toggle_box.child input').each(function (index, item) {
        if ($(this).is(":checked")) {
            $(this).parent().parent().css('backgroundColor', '#fff')
        } else {
            $(this).parent().parent().css('backgroundColor', '#dfdfdf')
        }
    });
    
    $('.toggle_box.child input').click(function () {
        if ($(this).is(":checked")) {
            $(this).parent().parent().css('backgroundColor', '#fff')
        } else {
            $(this).parent().parent().css('backgroundColor', '#dfdfdf')
        }
    })

    $('.map .point').hover(function () {
        var csn = $(this).attr("class").split(' ')[1];
        $(this).css('transform', 'scale(1.8)')
        $('.map_list .'+csn).addClass('on');
    }, function () {
        var csn = $(this).attr("class").split(' ')[1];
        $(this).css('transform', 'scale(1)')
        $('.map_list .'+csn).removeClass('on');
    })

    $('.map_list li').hover(function () {
        var csn = $(this).attr("class").split(' ')[0];
        $('.map .'+csn).css('transform', 'scale(1.8)')
        $(this).addClass('on');
    }, function () {
        var csn = $(this).attr("class").split(' ')[0];
        $('.map .'+csn).css('transform', 'scale(1)')
        $(this).removeClass('on');
    })

    $('.chart_label li').hover(function () {
        $(this).addClass('on');
    }, function () {
        $(this).removeClass('on');
    })
    
    $('.detail_layer .close').click(function() {
        $('.detail_layer').hide();
    })
    $('input[name="search_r"]').each(function() {
        var checked = $(this).prop('checked');
        if(checked) {
            $(this).parent().addClass('on');
            $(this).next().next().attr("disabled", false)
        } else {
            $(this).parent().removeClass('on');
            $(this).next().next().attr("disabled", true)
        }
    });
    $('input[name="search_r"]').change(function() {
        $('input[name="search_r"]').each(function() {
            var checked = $(this).prop('checked');
            if(checked) {
                $(this).parent().addClass('on');
                $(this).next().next().attr("disabled", false)
            } else {
                $(this).parent().removeClass('on');
                $(this).next().next().attr("disabled", true)
            }
        });
    });

    
});

var total = 0
$.each ($('.count_up'), function (index, el) {
    var num = $(el).text()
    $(el).text(0)
    setTimeout(() => {
        $(el).text(0)
        $('.total_view_'+(index+1)).fadeIn();
        var count = 0;
        var counting = setInterval(function () {
            if (count == num) {
                clearInterval(counting);
                return false;
            }
            count += 1;
            $(el).text(count)
        }, 10);
    }, total)
    total += num*5
});

// 체크박스 전체 선택
function selectAll(selectAll, type) {
    var checkboxes = document.getElementsByName(type);
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}

var main_donut_chart = document.getElementById("main_donut_chart");
if (main_donut_chart) {
    var color_set_1 = [
        '#f46368',
        '#fcc143',
        '#00c4e4',
        '#9e5cfb',
        '#2958ff'
    ];
    var main_donut_config_1 = {
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
                    data: [40, 25, 20, 15, 5],
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
                        $('.chart_label li').removeClass('on');
                        $(`.chart_label li:nth-child(${idx+1})`).addClass('on');
                        $('#donutPer .cate_value').html(key);
                        $('#donutPer .per_value').html(`${value}<span>%</span>`);
                    }
                }
            }
        }
    };
    var main_donut_1 = new Chart(main_donut_chart, main_donut_config_1);
}

// 네트워크 현황 - 웹 통신 현황 Line 차트
var main_line_chart = document.getElementById("main_line_chart");
if (main_line_chart) {
    var main_line_config_1 = {
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
                    label: '128.128.128.128',
                    data: [64,23,56,33,16,91,64,23,56,33,16,91,64,23,56,33,16,91,64,23,56,33,16,91],
                    fill: false,
                    backgroundColor: '#fcc143',
                    borderColor: '#fcc143'
                },
                {
                    label: '256.256.256.256',
                    data: [14,74,23,63,44,76,14,74,23,63,44,76,14,74,23,63,44,76,14,74,23,63,44,76],
                    fill: false,
                    backgroundColor: '#00c4e4',
                    borderColor: '#00c4e4'
                },
                {
                    label: '128.265.265.2',
                    data: [37,13,95,27,33,44,37,13,95,27,33,44,37,13,95,27,33,44,37,13,95,27,33,44],
                    fill: false,
                    backgroundColor: '#9e5cfb',
                    borderColor: '#9e5cfb'
                },
                {
                    label: '198.198.198.198',
                    data: [44,56,42,66,24,53,44,56,42,66,24,53,44,56,42,66,24,53,44,56,42,66,24,53],
                    fill: false,
                    backgroundColor: '#2958ff',
                    borderColor: '#2958ff'
                }
            ]
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
            responsive: true,
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
                    borderWidth: 1,
                    tension: 0
                },
                point: {
                    radius: 0,
                    hitRadius:10,
                    hoverBorderWidth: 4
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
    var main_line_1 = new Chart(main_line_chart, main_line_config_1);
}
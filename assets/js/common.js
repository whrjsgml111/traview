$(document).ready(function() {
    var $window = $(window);
    // 프로필 메뉴
    $('.my_icon').click(function(){
        if ( $('.profile_menu').css('display') === 'none' ) {
            $('.profile_menu').show();
        } else {
            $('.profile_menu').hide();
        }
    })
    // 계정정보
    $('.pf_info').click(function(){
        $('.pi_detail_layer').show();
    })
    $('.detail_layer .cancel').click(function(){
        $('.detail_layer').hide();
    })
    // 유료문의
    $('.inquiry').click(function(){
        $('.inq_detail_layer').show();
    })
    // 로그아웃
    $('.logout').click(function(){
        location.href = './login.html'
    })

    $('.left_menu .sub').click(function(){
        // $(this).css('height','auto');
        $(this).children('.child_box').slideToggle('fast')
    })
    $('.left_menu').hover(function(){}, function(){
        $('.child_box').hide();
    })

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

    $('#ctyBlock').click(function() {
        $('.cty_block_layer').show();
    })
    $('.cty_block_layer .block').click(function () {
        $('input[name="country"]').each(function() {
            var checked = $(this).prop('checked');
            if(checked) {
                $(this).parent().addClass('on');
                $(this).prop('checked', false)
            }
        });
    })
    $('.cty_block_layer .unblock').click(function () {
        $('input[name="country"]').each(function() {
            var checked = $(this).prop('checked');
            if(checked) {
                $(this).parent().removeClass('on');
                $(this).prop('checked', false)
            }
        });
    })

    $('#inboundPop').click(function() {
        $('.in_out_layer').show();
        $('.in_out_layer .tit').text('Inbound 차단 관리')
    })
    $('#outboundPop').click(function() {
        $('.in_out_layer').show();
        $('.in_out_layer .tit').text('Outbound 차단 관리')
    })

    // if ($('.detail_layer').css('display') == 'block') {
    //     console.log('ererererer')
    // }
    
    $('.detail_layer').on("show", function() { 
        console.log("browser page has been hidden");
    });
  
});
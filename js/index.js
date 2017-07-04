$(document).ready(function(){
        $('.tooltip').mousemove(function(e){
          var tooltipType = $(this).data("tooltip-type");
          var dataToolip = $(this).data("tooltip");
          var tooltipWindow = $('.tooltip-window');
          $('.tooltip-window').fadeIn(100).css({
            left: e.clientX + 'px',
            top: e.clientY + 'px',
          }).text(dataToolip);
          if(tooltipType == 'primary'){
            tooltipWindow.css({
              backgroundColor: 'rgb(41, 121, 255)',
              boxShadow: '0 0 30px rgba(41, 121, 255,0.5)'
            });
          }
          if(tooltipType == 'success'){
            tooltipWindow.css({
              backgroundColor: 'rgb(15, 157, 88)',
              boxShadow: '0 0 30px rgba(15, 157, 88,0.5)'
            });
          }
          if(tooltipType == 'info'){
            tooltipWindow.css({
              backgroundColor: 'rgb(0, 176, 255)',
              boxShadow: '0 0 30px rgba(0, 176, 255, 0.5)'
            });
          }
          if(tooltipType == 'warning'){
            tooltipWindow.css({
              backgroundColor: 'rgb(255, 143, 0)',
              boxShadow: '0 0 30px rgba(255, 143, 0, 0.5)'
            });
          }
          if(tooltipType == 'danger'){
            tooltipWindow.css({
              backgroundColor: 'rgb(233, 30, 99)',
              boxShadow: '0 0 30px rgba(233, 30, 99, 0.5)'
            });
          }
        });
        $('.tooltip').mouseleave(function(){
          $('.tooltip-window').fadeOut(100);
        });
        $(window).scroll(function(){
          $('.tooltip-window').fadeOut(100);
        });
      });
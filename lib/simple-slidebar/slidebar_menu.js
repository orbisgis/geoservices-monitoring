$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");        
    });
     //$("#menu-toggle-2, .navbar-brand").click(function(e) {
     $(".menu-toggle").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
       mviewer.toggleMenu(true);
        
    });

     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();      
      $('#menu li a').click(
        function() {
          if ($("#wrapper").hasClass("toggled-2")) {
            mviewer.toggleMenu(true);
          }
          var checkElement = $(this).next();
          //Si l'�l�ment suivant est une liste (ul) et d�ja visible --> ras
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            return false;
            }
          //Si l'�l�ment suivant est une liste (ul) et pas visible --> Referme le menu visible et affiche le menu cliqu�
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            if (!$(this).parent().hasClass("level-2")) {
                $('#menu ul:visible').slideUp('normal');
            } else {
                //Si niveau 2 , on referme les autres niveaux 2
                $('#menu .level-2 ul:visible').slideUp('normal');
            }
            checkElement.slideDown('normal');
            return false;
            }
            
          }
        );
      }

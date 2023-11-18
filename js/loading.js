console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/from_cun_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/from_cun.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','img/from_justin_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/from_justin.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','img/from_hieu_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/from_hieu.png');
  }
  });
});
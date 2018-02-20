$(document).ready(function()
{
  controller=new Object();

  controller.basicEventHandler=function()
  {
    $(".emi").click(function()
    {
      controller.emiClick();
    });
  }


  controller.emiClick=function()
  {
    $("body").addClass("opacity")
  }


});

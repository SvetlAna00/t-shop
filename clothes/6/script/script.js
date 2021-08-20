$(document).ready(function () {
  $(".accordionHeader").on("click", function () {
    let this_Li = this;

    $(this).parents(".catalogUl").children("li").each(function () {

      $(this).find(".accordionUl").not($(this_Li).next()).slideUp();
    })

    $(this_Li).next().slideToggle();
    $(this_Li).find("img").toggleClass('flip');
  })
  $(".accordionHeader2").on("click", function () {
    let this_Li = this;

    $(this).parents(".catalogUl2").children("li").each(function () {

      $(this).find(".accordionUl2").not($(this_Li).next()).slideUp();
    })

    $(this_Li).next().slideToggle();
    $(this_Li).find("img").toggleClass('flip');
  })
  $('.rangeInput').on('input',function () {
    $(this).next().html($(this).val())
  })
  $('#range-left').on('input',function () {
    $("#range-left-out").html($(this).val())
  })
  $('#range-right').on('input',function () {
    $("#range-right-out").html($(this).val())
  })


  //   function addSeparator(nStr) {
  //     nStr += '';
  //     var x = nStr.split('.');
  //     var x1 = x[0];
  //     var x2 = x.length > 1 ? '.' + x[1] : '';
  //     var rgx = /(\d+)(\d{3})/;
  //     while (rgx.test(x1)) {
  //       x1 = x1.replace(rgx, '$1' + '.' + '$2');
  //     }
  //     return x1 + x2;
  //   }
  // $('.rangeInput').on('input', function (e){
  //   var rangeGroup = $(this).attr('name'),
  //       minBtn = $(this).parent().children('.min'),
  //       maxBtn = $(this).parent().children('.max'),
  //       range_min = $(this).parent().children('.range_min'),
  //       range_max = $(this).parent().children('.range_max'),
  //       minVal = parseInt($(minBtn).val()),
  //       maxVal = parseInt($(maxBtn).val()),
  //       origin = $(this).context.className;
  //   console.log(rangeGroup);
  //   if(origin === 'min' && minVal > maxVal-5){
  //       $(minBtn).val(maxVal-5);
  //     }
  //     var minVal = parseInt($(minBtn).val());
  //     $(range_min).html(addSeparator(minVal*1000) + ' €');
  //
  //
  //     if(origin === 'max' && maxVal-5 < minVal){
  //       $(maxBtn).val(5+ minVal);
  //     }
  //     var maxVal = parseInt($(maxBtn).val());
  //     $(range_max).html(addSeparator(maxVal*1000) + ' €');
  //   }
// );


})
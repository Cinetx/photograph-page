//  Прибавление числа в таблице
$("body").on("click", ".number__button", function () {
  let min_val = $(this).parents(".number").find(".number__input").attr("min");
  let max_val = $(this).parents(".number").find(".number__input").attr("max");
  let cur_val = +$(this).parents(".number").find(".number__input").val();
  let inp = $(this).parents(".number").find(".number__input");
  if ($(this).hasClass("js-number__button--dec")) {
    if (min_val) {
      if (!(cur_val - 1 < +min_val)) {
        $(this)
          .parents(".number")
          .find(".number__input")
          .val(cur_val - 1);
      }
    } else if (!(cur_val - 1 < 0)) {
      $(this)
        .parents(".number")
        .find(".number__input")
        .val(cur_val - 1);
    }
  } else if ($(this).hasClass("js-number__button--inc")) {
    if (max_val) {
      if (!(cur_val + 1 > +max_val)) {
        $(this)
          .parents(".number")
          .find(".number__input")
          .val(cur_val + 1);
      }
    } else {
      $(this)
        .parents(".number")
        .find(".number__input")
        .val(cur_val + 1);
    }
  }
});

$("body").on("change", ".number__input", function () {
  let min_val = +$(this).attr("min");
  let max_val = +$(this).attr("max");
  let cur_val = +$(this).val();
  let old_val = $(this).attr("data-val");
  if (min_val && max_val) {
    if (cur_val < min_val) {
      $(this).val(min_val);
    } else if (cur_val > max_val) {
      $(this).val(max_val);
    }
  } else if (min_val) {
    if (cur_val < min_val) {
      $(this).val(min_val);
    }
  } else if (max_val) {
    if (cur_val > max_val) {
      $(this).val(max_val);
    }
  }
});

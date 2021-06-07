const stepSlider = document.querySelectorAll('.no-ui-slider');

stepSlider.forEach((slider) => {
  const maxRange = Number(slider.getAttribute('value'))
  noUiSlider.create(slider, {
    start: [0],
    step: 1,
    range: {
      'min': [0],
      'max': [maxRange]
    },
    pips: {
      mode: 'steps',
      stepped: true,
      density: 4
    },
    connect: "lower",
  });
})

// noUiSlider.create(stepSlider, {
//     start: [0],
//     step: 1,
//     range: {
//         'min': [0],
//         'max': [15]
//     },
//     pips: {
//       mode: 'steps',
//       stepped: true,
//       density: 4
//   },
//   connect: "lower",
// });

// stepSlider.noUiSlider.on('update', function(values) {
//   console.log(values);
//   $('.min').text(values[0]);
//   $('.max').text(values[1]);
//   highlightPips('#slider-step', values);
// });

// function highlightPips(parent, values) {

//   $.each($(parent + ' .noUi-value'), function(key, el) {

//     $(el).removeClass('orange');
//     var v = parseInt($(el).text().replace('k', '000'));
//     if (v <= values[1] && v >= values[0]) {

//       $(el).addClass('orange');
//     }
//   });
// };

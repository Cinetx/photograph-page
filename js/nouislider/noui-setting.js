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

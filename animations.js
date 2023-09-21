const blink = gsap.timeline({
    repeat: -1,
    repeatDelay: 3.5,
    paused: true
    
  });

  blink
  .to(
    "#pupil_right, #pupil_left",
    {
      duration: 0.01,
      opacity: 0
    },
    0
  )
  .to(
    "#pupil_right2, #pupil_left2",
    {
      duration: 0.01,
      opacity: 1
    },
    0
  )
  .to(
    "#pupil_right, #pupil_left",
    {
      duration: 0.01,
      opacity: 1
    },
    0.15
  )
  .to(
    "#pupil_right2, #pupil_left2",
    {
      duration: 0.01,
      opacity: 0
    },
    0.15
  );

  blink.play();
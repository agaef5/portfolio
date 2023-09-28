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

  let books = document.querySelector("#books");
  const move_books = gsap.timeline({paused: true});
  move_books
    .to("#left_side_books", {
      x:10,
      duration: 0.3
    }, 0)
    .to("#right_side_books", {
      x: -10,
      duration: 0.3
    }, 0)
    .to("#animated_book", {
      y: -15,
      x: 5,
      rotation: 5,
      duration: 0.3
    }, 0);
  
  books.addEventListener("mouseover", () => {
    move_books.play();
  });
  books.addEventListener("mouseout", () => {
    move_books.reverse();
  });

  const setTheBooks = gsap.timeline();
  setTheBooks
    .from("#left_side_books", {
      x:10,
      duration: 0.3
    }, 1)
    .from("#right_side_books", {
      x: -10,
      duration: 0.3
    }, 1)
    .from("#animated_book", {
      y: -15,
      x: 5,
      rotation: 5,
      duration: 0.3
    }, 1);


  blink.play();
const blink = gsap.timeline({
    repeat: -1,
    repeatDelay: 2.5    
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
  
  let books = document.querySelector("#books");
  books.addEventListener("mouseover", () => {
    move_books.play();
  });
  books.addEventListener("mouseout", () => {
    move_books.reverse();
  });


   // radio animation
  let radio = document.querySelector("#radio");

  const floating_radio = gsap.timeline({
    paused:true
  });
  floating_radio
    .to(radio, {y:-10, rotation:2, duration: .2})
    .to(radio, {y:0, rotation: 0, ease:"bounce"});
    
    radio.addEventListener("mouseover", () => {
      floating_radio.play();
    });


  // set up shelf animation
  const setTheShelf = gsap.timeline();
  setTheShelf
    .fromTo("#radio", 
      {y:-10, x:10, rotation:5, ease:"myBounce", duration: 1},
      {y:0, x:0, rotation:0, duration: .5, ease:"myBounce-squash"},
      1)
    .from("#left_side_books", {
      x:10,
      duration: 1
    }, 1)
    .from("#right_side_books", {
      x: -10,
      duration: 1
    }, 1)
    .from("#animated_book", {
      y: -15,
      x: 5,
      rotation: 5,
      duration: 1
    }, 1);

    // computer animation
    let game = document.querySelectorAll(".game");
    let serious = document.querySelectorAll(".serious_stuff");
    const computerAnimation = gsap.timeline({
      repeat:-1,
      repeatDelay: 3
    });
    const sunset = gsap.timeline({
      paused: true
    });
    computerAnimation
      .to(game, {
        scale:0.01,
        x: 120,
        y:120,
        duration: .3,
        opacity: .5
      })
      .fromTo(".website_text",{
        y: 100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1
      }, 1.2)
      .fromTo(".grey_button, .brown_button", {
        x: 20,
        scale: 0.01,
        opacity: .5
      }, {
        x: 0,
        scale: 1,
        opacity: 1,
        ease:"elastic"
      })
      .fromTo(".sun", {
        y: -20,
        x: -10,
      }, {
        x:10,
        y:10,
        duration: 5,
        ease:"power1"
      }, 8.2)
      .to(game, {
        scale: 1,
        x: 0,
        y: 0,
        duration: .3,
        opacity: 1
      }, 8)


    //game movement
    document.addEventListener("mousemove", mouseMoveFunc);
    let mountains = gsap.utils.toArray(".mountains");
    function mouseMoveFunc(e) {
        mountains.forEach((mountain, index) => {
        const depth = 250;
        const moveX = (e.pageX - window.innerWidth /2) / (4*depth);
        const moveY = (e.pageY - window.innerHeight /2) / depth;
        index ++

          gsap.to(mountain, {
            y: moveY * index,
            x: -moveX * index
          });
        });
    };


  gsap.set("#mouse_follow", {xPercent: 0, yPercent: 0});

  const ball = document.querySelector("#mouse_follow");
  const pos = { x: window.innerWidth, y: window.innerHeight};
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(ball, "x", "px");
  const ySet = gsap.quickSetter(ball, "y", "px");

  window.addEventListener("mousemove", e => {    
    mouse.x = e.x;
    mouse.y = e.y;  
  });

  gsap.ticker.add(() => {
    
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });

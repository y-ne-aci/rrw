// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve) => {
    fetchData();
    resolve("Fetch done!");
  });
};

const startExperience = () => {
  document.body.classList.remove("gate-locked");
  const gateOverlay = document.getElementById("gate-overlay");
  if (gateOverlay) {
    gateOverlay.classList.add("gate-hidden");
  }
  const bgMusic = document.getElementById("bg-music");
  if (bgMusic) {
    bgMusic.play().catch(() => {});
  }
  resolveFetch().then(() => {
    animationTimeline();
  });
};

const gateForm = document.getElementById("gate-form");
const gateError = document.getElementById("gate-error");
const q3Legend = document.getElementById("q3-legend");
const q3NoText = "RAKI GHALTA";
let q3NoAttempts = 0;

if (gateForm) {
  const steps = Array.from(gateForm.querySelectorAll(".gate-step"));
  const showStep = (index) => {
    steps.forEach((step, i) => {
      if (i === index) {
        step.classList.add("gate-step-active");
        step.classList.remove("gate-step-leave");
      } else {
        step.classList.remove("gate-step-active");
      }
    });
  };

  const animateToStep = (fromIndex, toIndex) => {
    const current = steps[fromIndex];
    const next = steps[toIndex];
    if (!current || !next) {
      return;
    }

    next.classList.add("gate-step-active");
    current.classList.add("gate-step-leave");

    setTimeout(() => {
      current.classList.remove("gate-step-leave");
      current.classList.remove("gate-step-active");
      next.classList.add("gate-step-active");
    }, 250);
  };

  const nextButtons = gateForm.querySelectorAll(".gate-next");
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const step = button.closest(".gate-step");
      if (!step) {
        return;
      }
      const stepIndex = steps.indexOf(step);
      if (stepIndex === 0) {
        const q1 = gateForm.querySelector('input[name="q1"]:checked');
        if (!q1) {
          if (gateError) {
            gateError.textContent = "Please answer question 1.";
          }
          return;
        }
        if (q1.value !== "yes") {
          if (gateError) {
            gateError.textContent = "wrong answer";
          }
          return;
        }
      }

      if (stepIndex === 1) {
        const q1b = gateForm.querySelector('input[name="q1b"]:checked');
        if (!q1b) {
          if (gateError) {
            gateError.textContent = "Please answer question 2.";
          }
          return;
        }
        if (q1b.value !== "yes") {
          if (gateError) {
            gateError.textContent = "wrong answer";
          }
          return;
        }
      }

      if (stepIndex === 2) {
        const q2 = gateForm.querySelector('input[name="q2"]:checked');
        if (!q2) {
          if (gateError) {
            gateError.textContent = "Please choose one option.";
          }
          return;
        }
        if (q2.value !== "8") {
          if (gateError) {
            gateError.textContent = "wrong answer";
          }
          return;
        }
      }

      if (gateError) {
        gateError.textContent = "";
      }
      animateToStep(stepIndex, stepIndex + 1);
    });
  });

  showStep(0);

  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const q1 = gateForm.querySelector('input[name="q1"]:checked');
    const q1b = gateForm.querySelector('input[name="q1b"]:checked');
    const q2 = gateForm.querySelector('input[name="q2"]:checked');
    const q3 = gateForm.querySelector('input[name="q3"]:checked');

    if (!q1 || !q1b || !q2 || !q3) {
      if (gateError) {
        gateError.textContent = "Please answer all 4 questions.";
      }
      return;
    }

    if (q1.value !== "yes") {
      if (gateError) {
        gateError.textContent = "wrong answer";
      }
      return;
    }

    if (q1b.value !== "yes") {
      if (gateError) {
        gateError.textContent = "wrong answer";
      }
      return;
    }

    if (q2.value !== "8") {
      if (gateError) {
        gateError.textContent = "wrong answer";
      }
      return;
    }

    if (q3.value !== "yes") {
      q3NoAttempts += 1;
      if (q3Legend && q3NoAttempts === 1) {
        q3Legend.textContent = q3NoText;
      }
      if (gateError) {
        gateError.textContent = "AAAAA";
      }
      const checked = gateForm.querySelector('input[name="q3"]:checked');
      if (checked) {
        checked.checked = false;
      }
      return;
    }

    if (gateError) {
      gateError.textContent = "";
    }
    startExperience();
  });
}

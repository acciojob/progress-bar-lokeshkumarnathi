//your JS code here. If required.
const circles = document.querySelectorAll(".circle");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const progress = document.getElementById("progress");

let currentStep = 1;

function updateProgress() {

  // Activate circles
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update progress line
  const progressWidth =
    ((currentStep - 1) / (circles.length - 1)) * 100;

  progress.style.width = progressWidth + "%";

  // Disable Previous at first step
  prevButton.disabled = currentStep === 1;

  // Disable Next at last step
  nextButton.disabled = currentStep === circles.length;
}

// Next button
nextButton.addEventListener("click", function () {

  if (currentStep < circles.length) {
    currentStep++;
    updateProgress();
  }

});

// Previous button
prevButton.addEventListener("click", function () {

  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }

});

// Initial state
updateProgress();

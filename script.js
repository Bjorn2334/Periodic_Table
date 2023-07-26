const elements = document.querySelectorAll(".element");
const elementPopup = document.getElementById("elementPopup");

elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        const atomicNumber = element.dataset.atomicNumber;
        const name = element.querySelector(".name").innerText;

        const popupName = elementPopup.querySelector(".element-name");
        const popupDetails = elementPopup.querySelector(".element-details");

        popupName.innerText = name;
        popupDetails.innerText = `Atomic Number: ${atomicNumber}`;

        elementPopup.classList.add("active");
    });

    element.addEventListener("mouseout", () => {
        elementPopup.classList.remove("active");
    });
});

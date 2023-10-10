const cardsData = [

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_Kurskachel_SDM.png?v=1696590168",
            "altText":"OMR UpSkill Strategisches Digital Marketing",
        },
        "label":{
            "text":"Professionals",
            "bgColor":"black",
            "textcolor":"white"
        },
        "title":"OMR UpSkill | Strategisches Digital Marketing",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_Kurskachel_SMM.png?v=1696590167",
            "altText":"OMR UpSkill Suchmaschinenmarketing",
        },
        "label":{
            "text":"Beginner",
            "bgColor":"black",
            "textcolor":"white"
        },
        "title":"OMR UpSkill | Suchmaschinenmarketing",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_Kurskachel_CM.png?v=1696590167",
            "altText":"OMR Upskill Content Marketing",
        },
        "label":{
            "text":"Beginner",
            "bgColor":"black",
            "textcolor":"white"
        },
        "title":"OMR UpSkill | Content Marketing",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_Kurskachel_SoMM.png?v=1696590168",
            "altText":"OMR UpSkill Social Media Marketing",
        },
        "label":{
            "text":"Beginner",
            "bgColor":"black",
            "textcolor":"white"
        },
        "title":"OMR UpSkill | Social Media Marketing",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_Kurskachel_DM.png?v=1696590167",
            "altText":"OMR UpSkill Digital Marketing",
        },
        "label":{
            "text":"Professionals",
            "bgColor":"black",
            "textcolor":"white"
        },
        "title":"OMR UpSkill | Digital Marketing",
    },

]


// Get the container element where you want to append the cards
const container = document.querySelector('.card-wrapper');

// Loop through the data and create cards
cardsData.forEach(cardInfo => {
    const card = document.createElement('div');
    card.className = 'card';

    // Create the image element
    const img = document.createElement('img');
    img.className = 'card__img';
    img.src = cardInfo.img.link;
    img.alt = cardInfo.img.altText;
    card.appendChild(img);

    // Create the label box
    const labelBox = document.createElement('div');
    labelBox.className = 'card__labelbox';
    labelBox.style.backgroundColor = cardInfo.label.bgColor;

    // Create the label element inside the label box
    const label = document.createElement('h3');
    label.className = 'card__label';
    label.textContent = cardInfo.label.text;
    label.style.color = cardInfo.label.textcolor;
    labelBox.appendChild(label);
    card.appendChild(labelBox);

    // Create the title element
    const title = document.createElement('h2');
    title.className = 'card__title';
    title.textContent = cardInfo.title;
    card.appendChild(title);

    // Create the "Mehr Erfahren" button
    const button = document.createElement('button');
    button.className = 'button button--filled';
    button.textContent = 'Mehr Erfahren';
    card.appendChild(button);

    // Append the card to the container
    container.appendChild(card);
});



const benefitData = [

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_benefits_Img_1.png?v=1696594521",
            "alt":"Astronaut mit Glühbirne"
        },
        "headline":"Innovatives<br>Lernkonzept",
        "description":"Auf unserem virtuellen Campus vermitteln wir dir das Wissen unserer besten Expert*innen. Dabei sorgen Videos, Quizzes, Podcasts, Praxisaufgaben u.v.m. für ausreichend Abwechslung.",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_benefits_Img_2.png?v=1696594520",
            "alt":"Roboter"
        },
        "headline":"E-Learning <br><br>",
        "description":"Nimm flexibel und device-unabhängig von unterwegs oder zu Hause aus teil. Tausche dich mit anderen Teilnehmenden und unseren Expert*innen via Slack aus.",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_benefits_img_3.png?v=1696594520",
            "alt":"Alex mit Rucksack"
        },
        "headline":"Nachhaltige<br> Ausbildung",
        "description":"Wir vermitteln dir den sicheren Umgang mit den wichtigsten Marketing Channels & Tools. Das kollaborative und virtuelle Arbeiten verschafft dir deinen Zugang zur modernen Arbeitswelt.",
    },

    {
        "img":{
            "link":"https://cdn.shopify.com/s/files/1/0563/4310/1600/files/Upskill_benefits_img_4.png?v=1696594520",
            "alt":"Rackete mit Glühbirne"
        },
        "headline":"Karriere<br> Boost",
        "description":"Der praxisorientierte Lehrplan bereitet dich ganz gezielt auf die aktuellen Anforderungen am Arbeitsmarkt vor. Am Ende des Kurses erhältst du dein Teilnahmezertifikat.",
    }
]


// Get the container where benefit cards will be added
const benefitWrapper = document.querySelector(".benefit-wrapper");

// Iterate over the benefitData array and create benefit cards
benefitData.forEach((benefit) => {
    const benefitCard = document.createElement("div");
    benefitCard.className = "benefit";

    const img = document.createElement("img");
    img.className = "benefit__img";
    img.src = benefit.img.link;
    img.alt = benefit.img.alt;

    const headline = document.createElement("h2");
    headline.className = "benefit__headline";
    headline.innerHTML = benefit.headline;

    const description = document.createElement("p");
    description.className = "benefit__description";
    description.innerHTML = benefit.description;

    benefitCard.appendChild(img);
    benefitCard.appendChild(headline);
    benefitCard.appendChild(description);

    benefitWrapper.appendChild(benefitCard);
});


let accordionData = [
    {
        "accordion":[
            {
                "accordionText":"Warum benötige ich vorab ein Beratungsgespräch?",
                "accordionHiddenText":"Um an einem unserer Kurse teilnehmen zu können, wollen wir in einem persönlichen Gespräch deine Voraussetzungen zum Erhalt eines Bildungsgutscheins prüfen und gemeinsam einen geeigneten Kurs für dich auswählen. Hierfür benötigen wir sowohl deine Mailadresse als auch deine Telefonnummer. Buche dir hier dein Beratungsgespräch."
            },
            {
                "accordionText":"Entstehen irgendwelche Kosten für mich?",
                "accordionHiddenText":"Bei Bewilligung eines Bildungsgutscheins werden die Weiterbildungskosten zu 100% von der Agentur für Arbeit bzw. dem Jobcenter übernommen."
            },
            {
                "accordionText":"Warum gibt es feste Starttermine für die Weiterbildungen?",
                "accordionHiddenText":"Unser innovatives Weiterbildungskonzept beruht auf dem Prinzip des kollaborativen, virtuellen Arbeitens und soll dir so einen Zugang zur modernen Arbeitswelt verschaffen. Dies gelingt, in dem du dich mit anderen Teilnehmenden zur gleichen Zeit auf die Lernreise begibst und ihr euch gemeinsam der neuen Herausforderung stellt."
            },
            {
                "accordionText":"Gibt es fixe Präsenzzeiten bzw. Anwesenheitspflicht während der Kursteilnahme?",
                "accordionHiddenText":"Du bist verpflichtet, dich täglich mit den Lerninhalten deines Kurses auseinanderzusetzen. In der Teilzeit-Variante solltest du 5 Stunden am Tag und in Vollzeit 8 Stunden täglich einplanen. Wann genau du die Stunden täglich absolvierst, kannst du dir flexibel einteilen. Unser Support-Team ist für dich Mo-Fr zwischen 09:00 und 17:00 zur Lösungsfindung erreichbar."
            },
            {
                "accordionText":"Sollte ich während des laufenden Kurses einen Job finden, was dann?",
                "accordionHiddenText":"Glückwunsch zum neuen Job! Gern können wir in einem persönlichen Gespräch eine individuelle Lösung finden bzw. prüfen, ob und wie du den Kurs berufsbegleitend abschließen kannst. Ein finanzielles Risiko besteht nicht für dich."
            }
        ]
    },

]

// Get the container where you want to append the sections
const faqContainer = document.querySelector(".faq");

// Function to create the chevron SVG
function createChevronSVG() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "12");
  svg.setAttribute("height", "8");
  svg.setAttribute("viewBox", "0 0 12 8");
  svg.classList.add("accordion_chevron");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("clip-rule", "evenodd");
  path.setAttribute("d", "M1.4 0.0999999L0 1.5L6 7.5L12 1.5L10.6 0.0999999L6 4.7L1.4 0.0999999Z");

  svg.appendChild(path);
  return svg;
}

// Function to create the line SVG
function createLineSVG() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "648");
  svg.setAttribute("height", "2");
  svg.setAttribute("viewBox", "0 0 648 2");
  svg.classList.add("accordion_line");

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", "M0 1H648");

  svg.appendChild(path);
  return svg;
}

// Create the accordion container outside the loop
const accordionContainer = document.createElement("section");
accordionContainer.classList.add("accordion");

// Loop through your accordionData and create sections dynamically
accordionData.forEach((sectionData, index) => {
  sectionData.accordion.forEach((accordionItem) => {
    // Create the accordion elements
    const accordionElement = document.createElement("div");
    accordionElement.classList.add("accordion_element");

    // Create the accordion content
    const accordionContent = document.createElement("div");
    accordionContent.classList.add("accordion_content");

    // Create the accordion trigger
    const accordionTrigger = document.createElement("div");
    accordionTrigger.classList.add("accordion_trigger");

    // Create and append the accordion text
    const accordionText = document.createElement("p");
    accordionText.classList.add("accordion_text");
    accordionText.textContent = accordionItem.accordionText;
    accordionTrigger.appendChild(accordionText);

    // Create and append the chevron SVG
    const chevronSVG = createChevronSVG();
    accordionTrigger.appendChild(chevronSVG);

    // Create and append the accordion hidden text
    const accordionHiddenText = document.createElement("div");
    accordionHiddenText.classList.add("accordion_hidden_text");
    accordionHiddenText.innerHTML = accordionItem.accordionHiddenText;

    // Append the accordion trigger and hidden text to the accordion content
    accordionContent.appendChild(accordionTrigger);
    accordionContent.appendChild(accordionHiddenText);

    // Create and append the line SVG
    const lineSVG = createLineSVG();
    accordionContent.appendChild(lineSVG);

    // Append the accordion content to the accordion element
    accordionElement.appendChild(accordionContent);

    // Append the accordion element to the accordion container
    accordionContainer.appendChild(accordionElement);
  });
});

// Append the accordion container to the content container
faqContainer.appendChild(accordionContainer);


// Accordion Animation Drawer and Chevron Icon


document.addEventListener("DOMContentLoaded", function () {
    const accordionTriggers = document.querySelectorAll(".accordion_trigger");
    accordionTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const accordionContent = trigger.nextElementSibling;
  
        // Check if the clicked accordion is already open
        const isAccordionOpen = accordionContent.classList.contains("open");
  
        // Close all open accordions
        const openAccordions = document.querySelectorAll(".accordion_hidden_text.open");
        openAccordions.forEach((openAccordion) => {
          openAccordion.style.maxHeight = null;
          openAccordion.classList.remove("open");
          const chevron = openAccordion.previousElementSibling.querySelector(".accordion_chevron");
          chevron.style.transform = "rotate(0deg)";
        });
  
        // Toggle the current accordion
        if (!isAccordionOpen) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
          accordionContent.classList.add("open");
          const chevron = trigger.querySelector(".accordion_chevron");
          chevron.style.transform = "rotate(180deg)";
        }
      });
    });
  });


  //   Smooth Scroll Animation

function scrollToTop (elementId){
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
}



const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("name");
const email = document.getElementById("mail");
const checkbox = document.getElementById("agb");
const title = document.getElementById("title");
const phone = document.getElementById("phone");

form.addEventListener("submit", (event) => {
  if (!validateEmail(email.value)) {
    event.preventDefault();
    alert("Bitte gib eine gültige E-Mail-Adresse ein.");
  }
  if (!checkbox.checked) {
    event.preventDefault();
    alert("Bitte bestätige die Zustimmung zur Verwendung deiner Daten.");
  }
  if(!firstName){
    event.preventDefault();

  }

  if (form.checkValidity()) {
    event.preventDefault();
    const url = `https://hooks.zapier.com/hooks/catch/15517008/3m72ccd/?firstname=${encodeURIComponent(firstName.value)}&email=${encodeURIComponent(email.value)}&list=OMR_Education`;
    fetch(url, {
      method: "POST",
    })
      .then(() => alert("suuuuper"))
      .catch(() => alert("Es gab ein Problem beim Senden. Versuche es vielleicht später nochmals."));
  }
});

function validateEmail(emailInput) {
  const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regularExpression.test(emailInput);

  function revealMessage(){
            document.querySelector(".thank-you-text").style.display = "block";
            form.style.display = "none";
        }
}
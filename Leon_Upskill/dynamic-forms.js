
const modifier = "upSkillLeadForm";
const fieldData =
    [
        {
            "webhook":"https://hooks.zapier.com/hooks/catch/590116/biyojkd/?",
            "type": "input",
            "headline":"Jetzt zum Newsletter anmelden",
            "datalayerevent": "newsletterform",
            "color":"",
            "backgroundcolor":"",
            "bordercolor":"" +
                "",
            "extraparams":[

                {
                    "key": "extraparam1",
                    "value":"value1"
                },
                {
                    "key": "extraparam2",
                    "value":"value2"
                }

            ],
            "successmessage":"Super, das hat geklappt.",
            "successicon": "✓️",
            "filedownload":"false",
            "downloadbuttontext":"Jetzt herunterladen",
            "fileurl":"url",
            "checkbox":"true",
            "linkedinshare":"true",
            "linkedinshareurl":"shareurl",
            "linkedinsharebuttontext":"weiterempfehlen",
            "checkboxtext":"Hiermit bestätige ich, dass ich mit der Verarbeitung und Verwendung meiner Daten zur Kontaktaufnahme durch die OMR Education GmbH gemäß ihrer <a href=\"https://education.omr.com/policies/privacy-policy\">Datenschutzrichtlinie</a> einverstanden bin und in den OMR Education Newsletter-Verteiler aufgenommen werden möchte. Die Einwilligung kann jederzeit mit einer Mail an <a href=\"mailto:education@omr.com\">education@omr.com</a> widerrufen werden.",
            "checkboxerror":"Bitte akzeptiere unsere AGB",
            "inputtype":"text",
            "urlparamname":"firstname",
            "label":"Vorname",
            "placeholder":"Dein Vorname",
            "error":"Bitte trage deinen Vornamen ein"

        },
        {
            "type": "input",
            "inputtype":"text",
            "label":"Telefonnummer",
            "placeholder":"Wie können wir dich erreichen?",
            "error":"Bitte trage deine Telefonnummer ein"

        },
        {
            "type":"select",
            "inputtype":"select",
            "urlparamname":"Beschäftigungsverhältnis",
            "label":"Bitte treffe eine Auswahl",
            "error":"Bitte treffe eine Auswahl",
            "placeholder":"placeholder",
            "options":[
                {
                    "placeholder":"Default Auswahl",
                    "value":"Option"
                },
                {
                    "placeholder":"Zweite Auswahl",
                    "value":"Zweite Auswahl"
                },
                {
                    "placeholder":"Dritte Auswahl",
                    "value":"Dritte Auswahl"
                },
                {
                    "placeholder":"Vierte Auswahl",
                    "value":"Vierte Auswahl"
                },
                {
                    "placeholder":"Fünfte Auswahl",
                    "value":"Fünfte Auswahl"
                }

            ]


        },
        {
            "type":"select",
            "inputtype":"select",
            "urlparamname":"Beschäftigungsverhältnis",
            "label":"Bitte treffe eine Auswahl",
            "error":"Bitte treffe eine Auswahl",
            "placeholder":"placeholder",
            "options":[
                {
                    "placeholder":"Default Auswahl",
                    "value":"Option"
                },
                {
                    "placeholder":"Zweite Auswahl",
                    "value":"Zweite Auswahl"
                },
                {
                    "placeholder":"Dritte Auswahl",
                    "value":"Dritte Auswahl"
                },
                {
                    "placeholder":"Vierte Auswahl",
                    "value":"Vierte Auswahl"
                },
                {
                    "placeholder":"Fünfte Auswahl",
                    "value":"Fünfte Auswahl"
                }

            ]


        },
        {
            "type":"select",
            "inputtype":"select",
            "urlparamname":"Arbeitserfahrung",
            "label":"Bitte treffe eine Auswahl",
            "error":"Bitte treffe eine Auswahl",
            "placeholder":"placeholder",
            "options":[
                {
                    "placeholder":"Default Auswahl",
                    "value":"Option"
                },
                {
                    "placeholder":"Zweite Auswahl",
                    "value":"Zweite Auswahl"
                },
                {
                    "placeholder":"Dritte Auswahl",
                    "value":"Dritte Auswahl"
                },
                {
                    "placeholder":"Vierte Auswahl",
                    "value":"Vierte Auswahl"
                },
                {
                    "placeholder":"Fünfte Auswahl",
                    "value":"Fünfte Auswahl"
                }

            ]


        }
        ,
        {
            "type": "input",
            "inputtype":"email",
            "urlparamname":"email",
            "label":"E-Mail",
            "placeholder":"Deine E-Mail Adresse",
            "error":"Bitte trage eine gültige E-Mail Adresse ein"

        },
        {
            "type": "input",
            "inputtype":"mathtask",
            "label":"Bitte löse diese Matheaufgabe",
            "placeholder":"Bitte löse diese Matheaufgabe",
            "error":"Bitte zeige uns, dass du kein Bot bist und löse diese Matheaufgabe"

        },
        {
            "type": "button",
            "text":"Absenden"

        }

    ]


const form = generateForm(fieldData, modifier);

addFormToFrontEnd(".form", form);


function addFormToFrontEnd(parentClass, formElement){

    const parent = document.querySelector(parentClass);

    parent.appendChild(formElement);



}


function generateForm(array, modifier){


    let formContainer = document.createElement("div");
    formContainer.classList.add("contactform__wrapper");
    formContainer.setAttribute("id","contactform__wrapper_" + modifier);
    let element;
    let agbSection;
    let color = array[0].color;
    let backgroundColor = array[0].backgroundcolor;
    let borderColor = array[0].bordercolor;


    array.forEach((item, index) =>{





        if(item.type == "input" ){

            //generate input field
            if(item.inputtype =="mathtask"){

                element = generateMathInputField(item, modifier + index, color, backgroundColor, borderColor);

            }else{

                element = generateInputField(item, modifier + index, color, backgroundColor, borderColor );

            }

        }

        if(item.type == "select"){


            element = generateSelectField(item.options, modifier + index, item.label, item.error, item.urlparamname, color, backgroundColor, borderColor);


        }

        if(item.type == "button"){

            if(array[0].checkbox == "true"){

                agbSection = generateAGBSection(array[0].checkboxtext, modifier,array[0].checkboxerror, array.length - 1);
                formContainer.appendChild(agbSection);

            }

            element = generateSubmitBtn(item, modifier, index);


        }



        formContainer.appendChild(element);



    })

    return formContainer;

}




function generateInputField(element, modifier, color, backgroundColor, borderColor){


    const inputType = element.inputtype;
    const errorText = element.error;
    const label = element.label;
    const placeholder = element.placeholder;

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("contactform__input-container");
    inputContainer.style.fontColor = color;

    inputContainer.setAttribute("id", "contactform__input-container_" + modifier );

    inputContainer.innerHTML = ` 
            
            <div class='contactform__input-wrapper' id='contactform__input-wrapper_${modifier}' style='color: ${color}; background-color: ${backgroundColor}; border-color: ${borderColor}'>
            <div class='contactform__labelbox' id='contactform__labelbox_${modifier}' >
                <label class='contactform__label' id='contactform__label_${modifier}' placeholder='${placeholder}' style='background-color:${backgroundColor}; color: ${color}'>${label}</label>
            </div>

            <div class='contactform__inputbox' id='contactform__inputbox_${modifier}' >
                <input class='contactform__input' id='contactform__input_${modifier}' type='${inputType}' data-param='${element.urlparamname}' placeholder='${placeholder}' style='background-color: ${backgroundColor}; color: ${color}'>
            </div>
        </div>

        <p class='contactform__warning--hidden' id='contactform__warning--hidden_${modifier}'>${errorText}</p>

`;


    return inputContainer;





}
function generateSelectField(array, modifier, label, error, urlparamname, color, backgroundColor, borderColor){


    const inputContainer = document.createElement("div");
    inputContainer.classList.add("contactform__input-container");
    inputContainer.setAttribute("id", "contactform__input-container_" + modifier);

    const selectEl = generateSelectOptions(array, modifier, urlparamname, color, backgroundColor, borderColor);


    inputContainer.innerHTML = `
                
                <div class="contactform__input-wrapper" id='contactform__input-wrapper_${modifier}' style='background-color: ${backgroundColor}; border-color: ${borderColor}; color: ${color}'>
                <div class="contactform__labelbox" id='contactform__labelbox_${modifier}'>
                    <label class="contactform__label" id='contactform__label_${modifier}' style='background-color: ${backgroundColor}; color: ${color}; z-index:1'>${label}</label>
                </div>

                <div class="contactform__selectbox" id='contactform__selectbox_${modifier}' style='background-color: ${backgroundColor}; border-color:${borderColor}'>
                    
                    ${selectEl}
                    
                </div>
            </div>

            <p class="contactform__warning--hidden" id="contactform__warning--hidden_${modifier}">${error}</p>`;





    return inputContainer;



}


function generateSelectOptions(options, modifier, urlparamname, color, backgroundColor, borderColor){


    const selectEl = document.createElement("select");
    selectEl.classList.add("contactform__select");
    selectEl.setAttribute("id", "contactform__select_" + modifier);
    selectEl.setAttribute("data-param", urlparamname);

    //add styles
    selectEl.style.backgroundColor = backgroundColor;
    selectEl.style.color = color;


    let option;

    options.forEach((item, index) => {



        if(index == 0){

            option = document.createElement("option");
            option.innerText = item.placeholder;
            option.value = "";
            option.setAttribute('hidden', '');



        }else{



            option = document.createElement("option");
            option.value = item.value;
            option.innerText = item.placeholder;

        }


        selectEl.appendChild(option);


    })
    const selectHTML = selectEl.outerHTML;

    return selectHTML;


}


function generateSubmitBtn(button, modifier, index){





    const buttonEl = document.createElement("button");
    buttonEl.setAttribute("id", "button_" + modifier + index);
    buttonEl.classList.add("button");
    buttonEl.innerText = button.text;

    buttonEl.onclick = function() {
        getFormValues(fieldData, modifier);
    };


    return buttonEl;

}

function generateAGBSection(agbText, modifier, error, index){

    const text = agbText;
    const textEl = document.createElement("p");
    textEl.innerHTML = `${text}`;

    const textElHtml = textEl.outerHTML;

    const agbSection = document.createElement("div");
    agbSection.classList.add("contactform__consent");
    agbSection.setAttribute("id", "contactform__consent_" + modifier + index);
    agbSection.innerHTML =


        `<div class = "contactform__checkbox" id="contactform__checkbox_${modifier}${index}">
        <input type = "checkbox" name = "agb" id = "agb_${modifier}${index}">
 
          </div>
            <div class="contactform__agb">
        
        ${textElHtml}
        
    </div>
    
`;



    return agbSection;



}

function generateMathInputField(item, modifier, color, backgroundColor, borderColor){

    const label = item.label;
    const errorText = item.error;
    const placeholder = item.placeholder;
    const mathTask = createMathTask();
    const result = mathTask[0];
    const taskString = mathTask[1];
    const resultString = mathTask[2];

    console.log(color);

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("contactform__input-container");

    inputContainer.style.color = color;

    inputContainer.setAttribute("id", "contactform__input-container_" + modifier );

    inputContainer.innerHTML = ` 
 
        <div class='contactform__input-wrapper' id='contactform__input-wrapper_${modifier}' style='background-color: ${backgroundColor}; color: ${color}; border-color: ${borderColor}'>

            <div class='contactform__labelbox' id='contactform__labelbox_${modifier}' >
                <label class='contactform__label' id='contactform__label_${modifier}' placeholder='${placeholder}' style='background-color: ${backgroundColor}; color: ${color}; z-index: 1'>${label}</label>
            </div>

            <div class='contactform__inputbox' id='contactform__inputbox_${modifier}' style='background-color: ${backgroundColor}; border-color:${borderColor}'>
                <input class='contactform__input' id='contactform__input_${modifier}' style='background-color: ${backgroundColor}' data-result='${result}' data-resultstring='${resultString}'type='text' placeholder='Bitte löse diese Matheaufgabe: ${taskString}'>
            </div>

        </div>

        <p class='contactform__warning--hidden' id='contactform__warning--hidden_${modifier}'>${errorText}</p>

`;


    return inputContainer;


}


function createMathTask(){

    let ran0 = Math.floor(Math.random() * 2);
    let ran1 = Math.floor(Math.random() * 9);
    let ran2 = Math.floor(Math.random() * 9);

    let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    let numberStrings = ["Null", "Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben","Acht", "Neun","Zehn", "Elf", "Zwei", "Dreizehn","Vierzehn", "Fünfzehn","Sechzehn","Siebzehn","Achtzehn","Neunzehn"];
    let operator = ["+","+"];
    let result;
    let resultString;
    let taskString = numbers[ran1] + " " + operator[ran0] + " " + numberStrings[ran2]

    if(operator[ran0] == "-"){

        result = numbers[ran1] - numbers[ran2];



    }else{

        result = numbers[ran1] + numbers[ran2];
        resultString = numberStrings[result];
    }



    return [result, taskString, resultString];



}

function getFormValues(array, modifier){

    let values = [];
    let wrapperEl;
    let inputEl;
    let errorEl;
    let userInput;
    let idPretext;
    let urlParamKey;
    let wrapperIdPretext = "contactform__input-wrapper_";
    let errorIdPretext = "contactform__warning--hidden_";

    array.forEach((item, index) =>{

        if(item.type == "select"){


            idPretext = "contactform__select_";

        }

        if(item.type == "input"){


            idPretext = "contactform__input_";

        }


        if(item.type == "button"){




        }else{

            if(item.inputtype == "mathtask"){


                userInput = getElementValue(item.type, modifier, index);
                values.push({"wrapperid": wrapperIdPretext + modifier + index,"inputid": idPretext + modifier + index, "errorid": errorIdPretext + modifier + index, "userinput":userInput, "error": item.error, "type": item.type, "inputtype" : item.inputtype, "result" : document.getElementById("contactform__input_" + modifier + index).getAttribute("data-result"), "resultstring": document.getElementById("contactform__input_" + modifier + index).getAttribute("data-resultstring")});

            }else{

                urlParamKey = getUrlParamKey(item.type, modifier, index);
                userInput = getElementValue(item.type, modifier, index);
                values.push({"urlparamkey": urlParamKey, "wrapperid": wrapperIdPretext + modifier + index,"inputid": idPretext + modifier + index ,"errorid": errorIdPretext + modifier + index,"userinput":userInput, "error": item.error, "type": item.type, "inputtype" : item.inputtype})

            }



        }




    })




    validateForm(values);



}

function validateForm(array){


    let responses = [];
    let type;
    let inputType;
    let userInput;

    array.forEach((item, index) =>{


        type = item.type;
        inputType = item.inputtype;
        userInput = item.userinput;


        if(type == "select"){

            if(!userInput == ""){

                responses.push("pass");

            }else{

                responses.push("fail");
                showErrorMessage(item.wrapperid, item.errorid, item.error)

            }

        }

        if(type == "input"){


            if(inputType == "mathtask"){

                if(userInput != "" || userInput == item.result || userInput == item.resultstring){
                    responses.push("pass");

                }else{

                    responses.push("fail");
                    showErrorMessage(item.wrapperid, item.errorid, item.error)

                }


            }

            if(inputType == "email"){


                let result = validateEmail(userInput);
                if(result){

                    responses.push("pass");

                }else{

                    responses.push("fail");
                    showErrorMessage(item.wrapperid, item.errorid, item.error)

                }


            }

            if(inputType == "text"){

                if(userInput !=""){

                    responses.push("pass");


                }else{

                    responses.push("fail");
                    showErrorMessage(item.wrapperid, item.errorid, item.error)

                }



            }




        }



        if(fieldData[0].checkbox == "true"){

            const checkStatus = getCheckboxStatus("agb_" + modifier + array.length);

            if(checkStatus == true){

                responses.push("pass");

            }else{

                responses.push("fail");
                changeBorderColor("contactform__consent_" + modifier + array.length, "red");

            }


        }





    })




    const responseString = responses.join("&");
    let urlParamArr = [];
    let urlParamString;
    const additionalParams = fieldData[0].extraparams;

    if(additionalParams.length > 0){


        for(let i = 0; i < additionalParams.length; i ++){


            if(additionalParams[i].key != ""){

                urlParamArr.push(additionalParams[i].key + "=" + encodeURIComponent(additionalParams[i].value))

            }



        }


    }



    // all conditions are met
    if(!responseString.includes("fail")){


        for(let i = 0; i < array.length; i++){

            if(array[i].urlparamkey){

                urlParamArr.push(array[i].urlparamkey + "=" + encodeURIComponent(array[i].userinput))

            }



        }


        urlParamString = urlParamArr.join("&");
        console.log(urlParamString);

        sendFormDataToWebhook(fieldData[0].webhook, urlParamString, array);



    }else{
        //data not send
        console.log("data not correct");


    }



}

function getCheckboxStatus(id){


    const checkbox = document.getElementById(id);
    const status = checkbox.checked;

    return status;


}


function showErrorMessage(wrapperElId, errorElId, errorMessage){

    const errorEl = document.getElementById(errorElId);

    changeClassName(errorEl,"contactform__warning");

    setTimeout(function(){

        changeClassName(errorEl, "contactform__warning--hidden")

    },5000);



}

function changeClassName(element, className){


    element.className = className;



}


function getElementValue(type, modifier, index){

    let element;
    let elementValue;

    if(type == "select"){

        element = document.getElementById("contactform__select_" + modifier + index);

        elementValue = element.options[element.selectedIndex].value;


    }else{

        element = document.getElementById("contactform__input_" + modifier + index);
        elementValue = element.value;


    }

    return elementValue;

}

function getUrlParamKey(type, modifier, index){

    let element;
    let elementValue;

    if(type == "select"){

        element = document.getElementById("contactform__select_" + modifier + index);

        elementValue = element.getAttribute("data-param");


    }else{

        element = document.getElementById("contactform__input_" + modifier + index);
        elementValue = element.getAttribute("data-param");


    }

    return elementValue;

}


function validateEmail(email){


    let filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email)) {
        return true;
    }
    return false;

}

function sendFormDataToWebhook(webhook,paramstring, array){


    fetch(
        webhook + paramstring,
        {
            method: "get",
            mode: "cors"
        }
    )
        .then((response) => response.json())
        .then((data) => {

            if (data.status === "success") {

                console.log("fetch executed");
                showSuccessScreen("", fieldData);
                pushEventToDl(fieldData[0].datalayerevent + "submitted", "","")




            }
        })



}



function showSuccessScreen(idParentElement, array){

    console.log(array);



    const containerEl = document.querySelector(".form");
    containerEl.innerHTML = "";

    containerEl.style.display = "flex";
    containerEl.style.flexDirection = "column";
    containerEl.style.justifyContent = "center";
    containerEl.style.alignItems = "center";
    containerEl.style.padding = "2rem";
    containerEl.style.gap = "2rem";

    const successDiv = document.createElement("div");
    successDiv.classList.add("contactform__success-wrapper");
    successDiv.innerText = array[0].successicon;
    successDiv.style.fontSize = "20px";

    const successMessage = document.createElement("p");
    successMessage.classList.add("contactform__success-message");
    successMessage.innerText = array[0].successmessage;

    containerEl.appendChild(successDiv);
    containerEl.appendChild(successMessage);


    if(array[0].filedownload == "true"){

        const btn = createDownloadBtn(array);
        containerEl.appendChild(btn);


    }

    if(array[0].linkedinshare == "true"){


        const btn = createLinkedInShareBtn(array);
        containerEl.appendChild(btn);


    }





}

function createLinkedInShareBtn(array){

    const url = array[0].linkedinshareurl;
    const liBtn = document.createElement("button");
    liBtn.textContent = array[0].linkedinsharebuttontext;
    liBtn.classList.add("button");
    liBtn.onclick = function() {
        window.location.href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + array[0].linkedinshareurl + '&referafriend=true';
    };



    return liBtn;


}

function changeBorderColor(id,color){

    const element = document.getElementById(id);
    const baseColor = element.style.border;
    console.log(baseColor);

    element.style.border = "1px solid " + color;

    setTimeout(function() {

        element.style.border = "";

    }, 5000);



}


function createDownloadBtn(array){


    const aEl = document.createElement("a");
    aEl.setAttribute('href', array[0].fileurl);

    aEl.innerHTML = `
    
    
  <button class="button">${array[0].downloadbuttontext}</button>

       
    `


    return aEl;



}


//this function is already in the utility functions
function isElementInViewport(element, modifier) {

    // observer options
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.0 // at least one pixel has to be visible
    };

    // Callback-Function for observer
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                // element is visible
                pushEventToDl(modifier + "visible", "","");

            } else {
                // element is not visible


            }
        });
    };

    // observer
    const observer = new IntersectionObserver(callback, options);

    // element is being observed
    observer.observe(element);
}


//this function is already in the utility function
function pushEventToDl(event, location, version){


    window.dataLayer.push({
        'event': event,
        'action': location,
        'version': version
    });



}





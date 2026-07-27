const webhookURL = 
"https://bystcarvajal.app.n8n.cloud/webhook/pdf-chat";


const chatBox = document.getElementById("chat-box");
const input = document.getElementById("question");
const button = document.getElementById("send");



function addMessage(text, sender){


    const message = document.createElement("div");

    message.className = 
        "message " + sender;


    const bubble = document.createElement("div");

    bubble.className="bubble";

    bubble.textContent=text;


    message.appendChild(bubble);


    chatBox.appendChild(message);


    chatBox.scrollTop =
        chatBox.scrollHeight;

}



async function sendQuestion(){


    const question = input.value.trim();


    if(!question)
        return;


    addMessage(question,"user");


    input.value="";


    addMessage(
        "Pensando... 🤔",
        "ai"
    );


    const thinking =
        chatBox.lastChild;



    try {


        const response = await fetch(
            webhookURL,
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },


                body:JSON.stringify({

                    question:question

                })

            }
        );



        if(!response.ok){

            throw new Error(
                "Error HTTP: "
                + response.status
            );

        }



        const data =
            await response.json();



        thinking.remove();



        addMessage(
            data[0].output,
            "ai"
        );


    }


    catch(error){


        thinking.remove();


        addMessage(
            "❌ Error al comunicarse con el agente IA.",
            "ai"
        );


        console.error(error);

    }


}




button.addEventListener(
    "click",
    sendQuestion
);



input.addEventListener(
    "keydown",
    function(event){

        if(event.key==="Enter"){

            sendQuestion();

        }

    }
);
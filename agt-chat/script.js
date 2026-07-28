const API_URL="https://bystcarvajal.app.n8n.cloud/webhook/pdf-chat";

const chat=document.getElementById("chat");

const input=document.getElementById("question");

const button=document.getElementById("send");

function addMessage(text,type){

    const div=document.createElement("div");

    div.className="message "+type;

    div.innerHTML=text;

    chat.appendChild(div);

    chat.scrollTop=chat.scrollHeight;

    return div;

}

async function askAI(){

    const question=input.value.trim();

    if(question==="") return;

    addMessage(question,"user");

    input.value="";

    const loading=addMessage("Pensando...","bot typing");

    try{

        const response=await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                question:question

            })

        });

        const data=await response.json();

        loading.remove();

        let answer="";

        if(data.answer){

            answer=data.answer;

        }

        else if(data.output){

            answer=data.output;

        }

        else if(data.response){

            answer=data.response;

        }

        else{

            answer=JSON.stringify(data,null,2);

        }

        addMessage(answer,"bot");

    }

    catch(error){

        loading.innerHTML="❌ Error de conexión.";

    }

}

button.addEventListener("click",askAI);

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        askAI();

    }

});
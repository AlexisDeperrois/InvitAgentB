const enigme = {

    init:function(){
        let buttons = document.querySelectorAll("button")
        for ( let button of buttons){
        button.addEventListener("click", enigme.checkAnswer)
         }
    },

    checkAnswer:function(event){
        event.preventDefault()

        let isApproved = false
        let text = null

        let Answer = event.target.value
      
        switch(Answer){
            case 'phasmes':
                text = "Bonne réponse ! Le chat était également accepté. Votre identité est confirmée."
                isApproved = true
                break;
            case 'chat':
                text = "Bonne réponse ! Les phasmes étaient également acceptés. Votre identité est confirmée."
                isApproved = true
                break;
            case 'fratrie':
                text = "Quelle drôle d'idée... Les petits frères et les petites soeurs ne sont pas des animaux de compagnies ! "
                isApproved = false
                break;
            case 'parents':
                text = "Comment ?! Dépêchez vous de choisir une autre réponse avant que votre participation à la mission ne soit annulée ! Jeune impertinent !"
                isApproved = false
                break;
        }

        let answerDiv = document.querySelector("#answer")
        document.querySelector("#react").textContent = text

        if(isApproved){
            document.querySelector("#idOk").textContent = "Un mot de passe vous sera demandé lors de la mission. Le voici, mémorisez le bien !"
            document.querySelector("#mdp").textContent = "Gardons la baguette qui guette le guet du guetteur."
            answerDiv.classList.add("success")
            answerDiv.classList.remove("failed")
        }else{
            answerDiv.classList.add("failed")
            answerDiv.classList.remove("success")
            document.querySelector("#idOk").textContent = null
            document.querySelector("#mdp").textContent = null
        }   
    },

    
}

document.addEventListener("DOMContentLoaded", enigme.init)
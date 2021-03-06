document.addEventListener('DOMContentLoaded', function() {
   let counter = document.getElementById('counter');
   let pause = document.getElementById('pause');
   let minus = document.getElementById('minus');
   let plus = document.getElementById('plus');
   let heart = document.getElementById('heart');
   let ul = document.querySelector(".likes")
   let form = document.getElementById('comment-form')
   let buttonArray = [minus, plus, heart];
   let likeCounter = [];

    function myTimer() {
        let x = parseInt(counter.textContent, 10) + 1;
        counter.textContent = x.toString();
    }

    function startTimer() {
        myVar = setInterval(myTimer, 1000);
    }

    function pauseTimer() {
        clearInterval(myVar)
    }

   function disableButtons(array) {
       for (let i = 0; i < array.length; i++) {
        array[i].disabled = true; 
       };
   };

   function enableButtons(array) {
       for (let i = 0; i < array.length; i++) {
           array[i].disabled = false;
       }; 
   };

   startTimer(); 

   let resume = document.createElement('button');
   resume.setAttribute('id', 'resume');
   resume.textContent = "resume";

   pause.addEventListener("click", function(e) {
       pauseTimer();
       document.body.replaceChild(resume, pause)
       disableButtons(buttonArray);
   });

   resume.addEventListener("click", function(e) {
        startTimer(); 
        document.body.replaceChild(pause, resume);
        enableButtons(buttonArray);
   });

   heart.addEventListener("click", function(e) {
        let li = document.createElement('li');
        li.setAttribute('id', counter.textContent);

        let index = parseInt(counter.textContent, 10);
        likeCounter[index] = likeCounter[index] || 0;
        likeCounter[index] = likeCounter[index] + 1;

        li.textContent = counter.textContent + ` has been liked ${likeCounter[index]} times`;

        let element = document.getElementById(counter.textContent)

        if (element) {
            ul.replaceChild(li, element);
        } else { 
            ul.appendChild(li);
        }
   })

   form.addEventListener("submit", function(event) {
        let commentList = document.getElementById('list')
        let comment = document.getElementById('comment-input')
        let newComment = document.createElement('p')
        event.preventDefault();
        newComment.textContent = comment.value;
        commentList.appendChild(newComment);
        comment.value = '';
   })

    plus.addEventListener("click", function(e) { 
        let i = parseInt(counter.textContent, 10) + 1;
        counter.textContent = i.toString();
    })

    minus.addEventListener("click", function(e) { 
        let i = parseInt(counter.textContent, 10) - 1;
        counter.textContent = i.toString();
    })

});


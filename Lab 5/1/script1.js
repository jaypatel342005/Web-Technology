
        const answer = document.getElementById("answer");

        function display(value) {
            answer.value += value;
        }

        function ans() {
            try {
                answer.value = eval(answer.value);
            } catch (e) {
                answer.value = "Error";
            }
        }

        function cls() {
            console.log(answer.value);
            answer.value = answer.value.slice(0,-1);
        }

        function allClear() {
            answer.value = "";
            console.log(answer.value);
        }
    
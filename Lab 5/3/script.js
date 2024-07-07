

    const answer = document.getElementById("answer");
    const body = document.body;

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
        answer.value = answer.value.slice(0, -1);
    }

    function allClear() {
        answer.value = "";
    }

    function toggleMode() {
        body.classList.toggle('dark-mode');
    }

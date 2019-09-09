let input = document.getElementById("inputEng");

    function search() {
        let Engl = ['one', 'two', 'three', 'four','five','khơi'];
        let tv = ['1', '2', '3', '4', '5', 'haha'];
        for (let  i = 0; i < Engl.length - 1; i++) {
            if (Engl[i] === input.value ) {
                document.getElementById("inputEng").value = tv[i];
            }else if (tv[i] === input.value) {
                document.getElementById("inputEng").value = Engl[i];
            }

        }
    }
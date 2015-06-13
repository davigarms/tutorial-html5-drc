window.onload = function() {

    var buttonSave = document.querySelector('#buttonSave');

    var buttonDelete = document.querySelector('#buttonDelete');

    var inputs = document.querySelectorAll('input:not([type=button])');

    function save(key,data) {
        localStorage[key] = JSON.stringify(data);
    }

    function loadFormValues() {

        var signup = {};

        for (var i = 0; i < inputs.length; i++) {

            signup[inputs[i].name] = inputs[i].value;

            //obj += '"' + inputs[i].name + '":"' + inputs[i].value + '",';
        }
        save('signup', signup);
    }

    buttonSave.onclick = function () {
        loadFormValues();
    }
}

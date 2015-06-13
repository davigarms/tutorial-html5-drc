window.onload = function() {

    var buttonSave = document.querySelector('#buttonSave');

    var buttonDelete = document.querySelector('#buttonDelete');

    var inputs = document.querySelectorAll('input:not([type=button])');

    function loadFormValues() {
        var obj = '';
        for (var i = 0; i < inputs.length; i++) {
            obj += '"' + inputs[i].id + '":"' + inputs[i].value + '",';
        }
        console.log(obj)
    }

    buttonSave.onclick = function () {
        loadFormValues();
    }
}

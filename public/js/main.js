class StageSelector {
    constructor(num)  {
        this.numOfStages = num;
        this.active = 1;
        this.setActive(1);
    }

    setActive(num) {
        if (!Number.isInteger(num)) throw new Error("Number has to be a positive integer");
        if (num > this.numOfStages) throw new Error("Given number is bigger than the maximum of stages");
        if (num < 0) throw new Error("Given number has to be positive integer");

        document.getElementById(`stage-${this.active}`).classList.remove("active");
        this.active = num;
        document.getElementById(`stage-${this.active}`).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.stager = new StageSelector();
})

var popupTimer;

function delayPopup(popup) {
    popupTimer = setTimeout(function () { $(popup).popup('hide') }, 4200);
}

$(document).ready(function () {
    $('.copyToken').click(function () {
        clearTimeout(popupTimer);

        var $input = $(this).closest('div').find('.copyInput');

        /* Select the text field */
        $input.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        $(this)
            .popup({
                title: 'Sikeres vágólapra másolás!',
                content: 'Küldd el ezt a kódot a másik játékosnak, hogy ő is be tudjon csatlakozni',
                on: 'manual',
                exclusive: true
            })
            .popup('show')
            ;

        // Hide popup after 5 seconds
        delayPopup(this);


    });

});


$('.ui.modal').modal({
    onApprove: function (element) {
        document.stager.setActive(4);
        console.log("approve");

        return true;
    },
});


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
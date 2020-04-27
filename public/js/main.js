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
    const stager = new StageSelector();
})
class Calculator{
    constructor(previousoperatetextelement, currentoperatetextelement) {
        this.previousoperatetextelement = previousoperatetextelement
        this.currentoperatetextelement = currentoperatetextelement
        this.clear()
    }
    
    clear() {
        this.currentoperate = ""
        this.previousoperate = ""
        this.operation = undefined
    }

    delete() {

    }

    appendnumber(number) {
        this.currentoperate = number
    }

    chooseoperation(operation) {

    }

    compute() {

    }

    updatedisplay() {
        this.currentoperatetextelement.innertext = this.currentoperate
    }
}


const numberbuttons = document.querySelectorAll("[data-number]")
const operationbuttons = document.querySelectorAll("[data-operation]")
const equalbutton = document.querySelector ("[data-equal")
const deletebutton = document.querySelector ("[data-del")
const allclearbutton = document.querySelector ("[data-ac")
const previousoperatetextelement = document.querySelector ("[data-previous-operate")
const currentoperatetextelement = document.querySelector ("[data-current-operate")

const calculator = new Calculator(previousoperatetextelement, currentoperatetextelement)

numberbuttons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendnumber(button.innertext)
        calculator.updatedisplay
    })
})
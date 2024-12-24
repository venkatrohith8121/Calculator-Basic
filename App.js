let output = document.getElementById("output")
function display(num) {
     output.value += num
}
function calculate() {
     try {
          output.value = eval(output.value)
     }
     catch {
          output.value = "Error!!"
          output.value.color = "red"

     }
}
function none() {
     output.value = ""
}
function remove() {
     output.value = output.value.slice(0, -1)
}


let num1= 12
        let num2 = 10
        document.getElementById("num1-el").textContent = num1
        document.getElementById("num2-el").textContent = num2


        function add1() {
            num1 = num1 + 1
            document.getElementById("num1-el").textContent = num1
            return num1
        }
        
        function add2() {
            num1 = num1 + 2
            document.getElementById("num1-el").textContent = num1
            return num1
        }
        function add3() {
            num1 = num1 + 3
            document.getElementById("num1-el").textContent = num1
            return num1
        }
        function add1Guest() {
            num2 = num2 + 1
            document.getElementById("num2-el").textContent = num2
            return num2
        }
        function add2Guest() {
            num2 = num2 + 2
            document.getElementById("num2-el").textContent = num2
            return num2
        }
        function add3Guest() {
            num2 = num2 + 3
            document.getElementById("num2-el").textContent = num2
            return num2
        }
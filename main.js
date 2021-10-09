// Ex 01
/**
 * Khối 1:
 *  3 số nguyên (num1, num2, num3)
 * Khối 2:
 *  Gán giá trị cho biến num1, num2, num3, order
 *  Lập các điều kiện so sánh:
 *      1: num1 > num2 && num2 > num3 => num3 < num2 < num1
 *      2: num1 > num3 && num3 > num2 => num1 > num3 > num2
 *      3: num1 > num2 && num3 > num1 => num3 > num1 > num2
 *      4: num2 > num1 && num1 > num3 => num2 > num1 > num3
 *      5: num2 > num3 && num3 > num1 => num2 > num3 > num1
 *      6: còn lại => num3 > num2 > num1  
 * Khối 3:
 *  3 số nguyên được sắp xếp theo thứ tự
 */

function orderNum() {
    var num1 = Number(document.getElementById("ex01-num1").value);
    var num2 = Number(document.getElementById("ex01-num2").value);
    var num3 = Number(document.getElementById("ex01-num3").value);
    var order = "";
    if (num1 > num2 && num2 > num3) {
        order = num3 + " < " + num2 + " < " + num1;
    } else if (num1 > num3 && num3 > num2) {
        order = num2 + " < " + num3 + " < " + num1;
    } else if (num1 > num2 && num3 > num1) {
        order = num2 + " < " + num1 + " < " + num3;
    } else if (num2 > num1 && num1 > num3) {
        order = num3 + " < " + num1 + " < " + num2;
    } else if (num2 > num3 && num3 > num1) {
        order = num1 + " < " + num3 + " < " + num2;
    } else {
        order = num1 + " < " + num2 + " < " + num3;
    }
    document.getElementById("numOrder").value = order;
}
document.getElementById("num-order").onclick = orderNum;

// Ex 02
/**
 * Khối 1: 
 *  Thành viên: char
 * Khối 2: 
 *  Gán giá trị cho biến char
 *  Lập công thức switch case:
 *      char = L => "Xin chào Người lạ ơi!"
 *      char = B => "Xin chào Bố!"
 *      char = M => "Xin chào Mẹ!"
 *      char = A => "Xin chào Anh Trai!"
 *      char = E => "Xin chào Em Gái!"
 *  Hiện lời chào ở input#greeting
 * Khối 3:
 *  Lời chào thành viên được chọn
 */

function greetPeople() {
    var char = document.getElementById("people").value;
    switch(char) {
        case "L" :
            document.getElementById("greeting").value = "Xin chào Người lạ ơi!";
            break;
        case "B" :
            document.getElementById("greeting").value = "Xin chào Bố!";
            break;
        case "M" :
            document.getElementById("greeting").value = "Xin chào Mẹ!";
            break;
        case "A" :
            document.getElementById("greeting").value = "Xin chào Anh Trai!";
            break;
        case "E" :
            document.getElementById("greeting").value = "Xin chào Em Gái!";
            break;
    }
}
document.getElementById("greetingPeople").onclick = greetPeople;
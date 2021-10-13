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
 *      char = L => Hiện lời chào "Xin chào Người lạ ơi!"
 *      char = B => Hiện lời chào "Xin chào Bố!"
 *      char = M => Hiện lời chào "Xin chào Mẹ!"
 *      char = A => Hiện lời chào "Xin chào Anh Trai!"
 *      char = E => Hiện lời chào "Xin chào Em Gái!"
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

// Ex 03
/**
 * Khối 1:
 *  3 số nguyên dương num1, num2, num3
 * Khối 2:
 *  Gán giá trị cho biến num1, num2, num3, numEven, numOdd
 *  Lập công thức điều kiện so sánh phần dư khi chia 2:
 *      if num1%2 == 0 => numEven+=1 else numOdd+=1;
 * Khối 3:
 *  Số lượng số chẵn numEven, số lẻ numOdd
 */

function countOddEven() {
    var num1 = Number(document.getElementById("ex03-num1").value)
    var num2 = Number(document.getElementById("ex03-num2").value)
    var num3 = Number(document.getElementById("ex03-num3").value)
    var numEven = 0;
    var numOdd = 0;
    num1%2 == 0 ? numEven+=1 : numOdd+=1;
    num2%2 == 0 ? numEven+=1 : numOdd+=1;
    num3%2 == 0 ? numEven+=1 : numOdd+=1;
    document.getElementById("numOddEven").value = "Có " + numEven + " số chẵn và " + numOdd + " số lẻ";
}
document.getElementById("countOddEven").onclick = countOddEven;

// Ex 04
/**
 * Khối 1:
 *  Chiều dài 3 cạnh tam giác edge1, edge2, edge3
 * Khối 2:
 *  Gán giá trị cho biến edge1, edge2, , triangleType
 *  Lập công thức điều kiện:
 *  Nếu 3 cạnh = nhau là tam giác đều
 *      if edge1 == edge2 && edge1 == edge3 => triangleType = "Tam giác đều"
 *  Nếu chỉ có 2 cạnh = nhau là tam giác cân
 *      else if edge2 == edge3 || edge1 == edge2 || edge1 == edge3 => triangeType = "Tam giác cân"
 *  Nếu không thỏa 2 điều kiện trên thì lập công thức tìm cạnh lớn nhất
 *      edge1 > edge2 && edge1 > edge3
 *  Lập công thức điều kiện so sánh
 *      Math.pow(edge1,2) == Math.pow(edge2,2) + Math.pow(edge3,2) => triangleType = "Tam giác vuông"
 *  Còn lại là tam giác khác
 *      triangleType = "Tam giác khác"
 * Khối 3:
 *  Loại tam giác
 */

function identTriangle() {
    var edge1 = Number(document.getElementById("edge1").value);
    var edge2 = Number(document.getElementById("edge2").value);
    var edge3 = Number(document.getElementById("edge3").value);
    var triangleType = "";
    if (edge1 == edge2 && edge1 == edge3) {
        triangleType = "Tam giác đều";
    } else if (edge2 == edge3 || edge1 == edge2 || edge1 == edge3) {
        triangleType = "Tam giác cân";
    } else {
        if (edge1 > edge2 && edge1 > edge3) {
            Math.pow(edge1,2) == Math.pow(edge2,2) + Math.pow(edge3,2) ? triangleType = "Tam giác vuông" : triangleType = "Tam giác khác";
        } else if (edge2 > edge1 && edge2 > edge3) {
            Math.pow(edge2,2) == Math.pow(edge1,2) + Math.pow(edge3,2) ? triangleType = "Tam giác vuông" : triangleType = "Tam giác khác";
        } else {
            Math.pow(edge3,2) == Math.pow(edge1,2) + Math.pow(edge2,2) ? triangleType = "Tam giác vuông" : triangleType = "Tam giác khác";
        }
    }
    document.getElementById("triangleType").value = triangleType;
}
document.getElementById("identifyTriangle").onclick = identTriangle;

// Ex 05
/**
 * Khối 1:
 *  Ngày , tháng, năm (numDay, numMonth, numYear)
 * Khối 2:
 *  Gán giá trị cho biến numDay, numMonth, numYear 
 *  Function ngày hôm sau:
 *  Lập switch case cho numMonth:
 *      tháng 1, 3, 5, 7, 8, 10:
 *          Lập biểu thức điều kiện:
 *              numDay <= 31 ? {numDay == 31 ? {numDay = 1; numMonth+=1} : {numDay+=1}} : {"ngày không hợp lệ"}
 *               {}
 *      tháng 4, 6, 9, 11:
 *          Lập biểu thức điều kiện:
 *              numDay == 30 ? {numDay = 1; numMonth+=1} : {numDay+=1}
 *      tháng 2:
 *          Lập biểu thức điều kiện:
 *              numDay == 28 ? {numDay = 1; numMonth+=1} : {numDay+=1}
 *      tháng 12:
 *          Lập biểu thức điều kiện:
 *              numDay == 31 ? {numDay = 1; numMonth =1; numYear+=1} : {numDay+=1}
 *  Function ngày hôm trước:
 *  Lập switch case cho numMonth:
 *      tháng 2, 4, 6, 8, 9, 11:
 *          Lập biểu thức điều kiện:
 *              numDay == 1 ? {numDay = 31; numMonth-=1} : {numDay-=1}
 *      tháng 5, 7, 10, 12: 
 *          Lập biểu thức điều kiện:
 *              numDay == 1 ? {numDay = 30; numMonth-=1} : {numDay-=1}
 *      tháng 1: 
 *          numDay = 31; numMonth = 12; numYear-=1
 *      tháng 3:
 *          numDay = 28; numMonth = 2          
 * Khối 3:
 *  Ngày mai / ngày hôm trước
 */

function dayTomorrow() {
    var numDay = Number(document.getElementById("ex05-num1").value);
    var numMonth = Number(document.getElementById("ex05-num2").value);
    var numYear = Number(document.getElementById("ex05-num3").value);
    var date = ""
    switch (numMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (numDay <= 31) {
                numDay == 31 ? (numDay = 1, numMonth+=1) : (numDay+=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ"
            }
                break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (numDay <=30) {
                numDay == 30 ? (numDay = 1, numMonth+=1) : (numDay+=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ"
            }
            break;
        case 2:
            if (numDay <= 28) {
                numDay == 28 ? (numDay = 1, numMonth+=1) : (numDay+=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ"
            } 
            break;
        case 12:
            if (numDay <= 31) {
                numDay == 31 ? (numDay = 1, numMonth =1, numYear+=1) : (numDay+=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ"
            }
            break;
    }
    document.getElementById("date").value = date
}

function dayYesterday() {
    var numDay = Number(document.getElementById("ex05-num1").value);
    var numMonth = Number(document.getElementById("ex05-num2").value);
    var numYear = Number(document.getElementById("ex05-num3").value);
    var date = ""
    switch (numMonth) {
        case 2:
            if (numDay <= 28) {
                numDay == 1 ? (numDay = 31, numMonth-=1) : (numDay-=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ";
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (numDay <= 30) {
                numDay == 1 ? (numDay = 31, numMonth-=1) : (numDay-=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ";
            }
            break;
        case 8:
            if (numDay <= 31) {
                numDay == 1 ? (numDay = 31, numMonth-=1) : (numDay-=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ"; 
            }
            break;
        case 5:
        case 7:
        case 10:
        case 12:
            if (numDay <= 30) {
                numDay == 1 ? (numDay = 30, numMonth-=1) :
                (numDay-=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ";
            }
            break;
        case 1: 
            if (numDay <= 31){
            numDay == 1 ? (numDay = 31, numMonth = 12, numYear-=1) : (numDay-=1);
            date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ";
            }
            break;
        case 3:
            if (numDay <= 31){
                numDay == 1 ? (numDay = 28, numMonth-=1) : (numDay-=1);
                date = numDay + " / " + numMonth + " / " + numYear;
            } else {
                date = "Ngày không hợp lệ";
            }
            break;
    }
    document.getElementById("date").value = date
}

document.getElementById("btnTomorrow").onclick = dayTomorrow;
document.getElementById("btnYesterday").onclick = dayYesterday;
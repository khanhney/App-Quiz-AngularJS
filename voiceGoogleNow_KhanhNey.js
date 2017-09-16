var temp = msg.req.query.text; // text = thử "mở" đèn thử "tắt" đèn
// .query.text trong điện thoại định ra == voice


msg.payload.command = 0;         //biến đặt thêm để ckeck có "turn hay ko"
msg.payload.success = false;


temp = temp.toLowerCase();
// check if the command is to turn something on/off
if (temp.indexOf("thử")>-1) {
    temp = temp.replace("thử ","");
    msg.payload.command = 1;
    // command có chữ turn thì trả về 1
}

var lastIndex = temp.indexOf(" ");
var voice_state = temp.substring(0, lastIndex).trim();
var voice_thing = temp.substring(lastIndex+1,temp.length).trim();

// evaulate the state
if (voice_state==="mở") {
    msg.payload.command_value = "1";
    // Kiểm tra nếu có chữ On mà trong chuỗi sau khi cắt
}
if (voice_state==="tắt") {
    msg.payload.command_value = "0";
    //    Kiểm tra nếu có chữ off mà trong chuỗi sau khi cắt
}


// handle the switch commands
if (msg.payload.command===1) {
    // Command ===1 là khi có chữ turn
    // Ở đây chỉ là google trả về câu nói thôi
    switch (voice_thing) {
        case "đèn":
            //msg.payload.response="OK, turning " + voice_state + " the " + voice_thing;
            msg.payload.success = true;
            msg.payload.command_thing="Test";
            break;
        default:
            //msg.payload.response="Sorry, I did not understand turning " + voice_state + " the " + voice_thing;
            msg.payload.success = false;
            break;
    }
}



return msg;



// ============Command : 1 là có turn => Ko========//
// ============ Success : true là có "test light"
// =============Comand_value : 1 = on || 0 = off

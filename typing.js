var charIndex_left = -1;
var stringLength_left = 0;
var inputText_left;
var refresh_time=1;//140

function writeContent_left(init) {
    if (init) {
        inputText_left = document.getElementById('contentToWrite_left').innerHTML;
    }
    if (charIndex_left == -1) {
        charIndex_left = 0;
        stringLength_left = inputText_left.length;
    }
    var initString_left = document.getElementById('myContent_left').innerHTML;
    initString_left = initString_left.replace(/<SPAN.*$/gi, "");
    var theChar_left = inputText_left.charAt(charIndex_left);
    var nextFourChars = inputText_left.substr(charIndex_left, 4);
    if (nextFourChars == '<BR>' || nextFourChars == '<br>') {
        theChar_left = '<BR>';
        charIndex_left += 3;
    }
    initString_left = initString_left + theChar_left + "<SPAN id='blink_left'>_</SPAN>";
    document.getElementById('myContent_left').innerHTML = initString_left;
    charIndex_left = charIndex_left / 1 + 1;
    if (charIndex_left % 2 == 1) {
        document.getElementById('blink_left').style.display = 'none';
    } else {
        document.getElementById('blink_left').style.display = 'inline';
    }
    if (charIndex_left <stringLength_left) {
        mytime_left=setTimeout('writeContent_left(false)', refresh_time);
    } else {
        if(charIndex_left==stringLength_left)
        {  
            clearTimeout("mytime_left");
            document.getElementById('blink_left').style.display = 'none';
            writeContent_right(true);
        }
        else{//这个else进不来，可以不要
            blinkSpan();
            console.log("in else");
        }
    }
}

var charIndex_right = -1;
var stringLength_right = 0;
var inputText_right;
function writeContent_right(init) {
    if (init) {
        inputText_right = document.getElementById('contentToWrite_right').innerHTML;
    }
    if (charIndex_right == -1) {
        charIndex_right = 0;
        stringLength_right = inputText_right.length;
    }
    var initString_right = document.getElementById('myContent_right').innerHTML;
    initString_right = initString_right.replace(/<SPAN.*$/gi, "");
    var theChar_right = inputText_right.charAt(charIndex_right);
    var nextFourChars = inputText_right.substr(charIndex_right, 4);
    if (nextFourChars == '<BR>' || nextFourChars == '<br>') {
        theChar_right = '<BR>';
        charIndex_right += 3;
    }
    initString_right = initString_right + theChar_right + "<SPAN id='blink_right'>_</SPAN>";
    document.getElementById('myContent_right').innerHTML = initString_right;
    charIndex_right = charIndex_right / 1 + 1;
    if (charIndex_right % 2 == 1) {
        document.getElementById('blink_right').style.display = 'none';
    } else {
        document.getElementById('blink_right').style.display = 'inline';
    }
    if (charIndex_right < stringLength_right) {
        setTimeout('writeContent_right(false)', refresh_time);
    } else {
        if (charIndex_right == stringLength_right) {
            clearTimeout("mytime_right");
            document.getElementById('blink_right').style.display = 'none';
            setTimeout(() => {
                document.getElementById("img").style.display="block";
                
            }, 1000);
            setTimeout(() => {
                document.getElementById('more').style.display='block';
                
            }, 2000);
            setTimeout(() => {
                document.getElementById('say').style.display="block";
                
            }, 3000);
        }
        else {
            blinkSpan();
        }
    }
}


var currentStyle = 'inline';

function blinkSpan() {
    if (currentStyle == 'inline') {
        currentStyle = 'none';
    } else {
        currentStyle = 'inline';
    }
    document.getElementById('blink_left').style.display = currentStyle;
    myblinktime=setTimeout('blinkSpan()', 140);
}
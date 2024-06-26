// 시작 버튼을 누르면 다음 단계로 이동
function start() {
  $('.start').hide();
  $('.question').attr('style', 'display: flex');
  next();
}

function restart() {
  $('.result').hide();
  $('.question').attr('style', 'display: flex');
  num = 1;
  $('#EI').val(0);
  $('#SN').val(0);
  $('#TF').val(0);
  $('#JP').val(0);
  next();
}


// Object 생성
let num = 1;
let q = {
  1: { "title": "문제 1번", "type": "EI", "A": "E", "B": "I" },
  2: { "title": "문제 2번", "type": "EI", "A": "E", "B": "I" },
  3: { "title": "문제 3번", "type": "EI", "A": "E", "B": "I" },
  4: { "title": "문제 4번", "type": "SN", "A": "S", "B": "N" },
  5: { "title": "문제 1번", "type": "SN", "A": "S", "B": "N" },
  6: { "title": "문제 2번", "type": "SN", "A": "S", "B": "N" },
  7: { "title": "문제 3번", "type": "TF", "A": "T", "B": "F" },
  8: { "title": "문제 4번", "type": "TF", "A": "T", "B": "F" },
  9: { "title": "문제 1번", "type": "TF", "A": "T", "B": "F" },
  10: { "title": "문제 2번", "type": "JP", "A": "J", "B": "P" },
  11: { "title": "문제 3번", "type": "JP", "A": "J", "B": "P" },
  12: { "title": "문제 4번", "type": "JP", "A": "J", "B": "P" },
}
var result = {
  //todo 나머지 설명 추가!!
  "ISTJ": { "writer": "ISTJ 작가", "explain": "ISTJ 설명", "img": "ISTJ.png" },
  "ENFP": { "writer": "ENFP 작가", "explain": "ENFP 설명", "img": "ENFP.png" },
  "ENTJ": { "writer": "ENTJ 작가", "explain": "ENTJ 설명", "img": "ENTJ.png" },
  "INTP": { "writer": "INTP 작가", "explain": "INTP 설명", "img": "INTP.png" },
  "INTJ": { "writer": "INTJ 작가", "explain": "INTJ 설명", "img": "INTJ.png" },
  "ENTP": { "writer": "ENTP 작가", "explain": "ENTP 설명", "img": "ENTP.png" },
  "INFP": { "writer": "INFP 작가", "explain": "INFP 설명", "img": "INFP.png" },
  "ESTP": { "writer": "ESTP 작가", "explain": "ESTP 설명", "img": "ESTP.png" },
  "ISFP": { "writer": "ISFP 작가", "explain": "ISFP 설명", "img": "ISFP.png" },
  "ESFP": { "writer": "ESFP 작가", "explain": "ESFP 설명", "img": "ESFP.png" },
  "ISTP": { "writer": "ISTP 작가", "explain": "ISTP 설명", "img": "ISTP.png" },
  "ESTJ": { "writer": "ESTJ 작가", "explain": "ESTJ 설명", "img": "ESTJ.png" },
  "ISFJ": { "writer": "ISFJ 작가", "explain": "ISFJ 설명", "img": "ISFJ.png" },
  "ESFJ": { "writer": "ESFJ 작가", "explain": "ESFJ 설명", "img": "ESFJ.png" },
  "INFJ": { "writer": "INFJ 작가", "explain": "INFJ 설명", "img": "INFJ.png" },
  "ENFJ": { "writer": "ENFJ 작가", "explain": "ENFJ 설명", "img": "ENFJ.png" },
}


// #A 버튼을 클릭하면 계산 후 다음 단계로 이동
$('#A').click(function () {
  // #type 요소의 value를 가져온다.
  let type = $('#type').val();
  // 이전 value를 가져온다.
  let preValue = $('#' + type).val()
  // 해당하는 #타입의 value string을 number로 변경하고 +1씩 증가.
  $('#' + type).val(parseInt(preValue) + 1);
  next()
});


// #B 버튼을 클릭하면 계산 없이 다음 단계로 이동
$('#B').click(function () {
  next();
});


// 다음 단계로 이동하면 본문 데이터 치환
function next() {
  // 13번째에 result 페이지로 이동
  if (num == 13) {
    $('.question').hide();
    $('.result').show();

    // value를 가져와서 삼항연산자를 통해 해당 값을 mbti에 추가
    var mbti = "";
    $('#EI').val() < 2 ? mbti += "I" : mbti += "E";
    $('#SN').val() < 2 ? mbti += "N" : mbti += "S";
    $('#TF').val() < 2 ? mbti += "F" : mbti += "T";
    $('#JP').val() < 2 ? mbti += "P" : mbti += "J";

    // result data 치환
    $('#img').attr('src', result[mbti]['img']);
    $('#writer').html(result[mbti]['writer']);
    $('#explain').html(result[mbti]['explain']);
  }
  else {
    // prograss-bar style 치환
    $('.progress-bar').attr('style', 'width: calc(100 /12*' + num + '%)');
    $('#title').html(q[num]['title']);
    $('#type').val(q[num]['type']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    num++
  }
}

(function () {
  // 스크롤 할 때 하우스를 이동시킬 것이다.
  const houseElem = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  /* 각도 계산에 쓰일 객체 */
  const mousePos = { x: 0, y: 0 };

  // stage
  const stageElem = document.querySelector(".stage");
  // 창 사이즈에 따라 바뀐다.
  // innerHeight가 바뀌기 때문.
  let maxScrollValue;
  window.addEventListener("scroll", function () {
    const scrollPer = pageYOffset / maxScrollValue;
    // house의 traslateZ 값을 바꿔주면 되고,
    // 어쨌든 스크롤에 따라 움직여야 한다.
    // window.pageYOffset
    // console.log(window.pageYOffset);
    // body 전체의 높이 - window의 높이
    // 전체 스크롤바가 문서의 높이
    // 우리 눈에 보이는 창 높이 만큼만 빼주면 그것이 스크롤바의 길이
    // 비율로 구한다는 것 즉 밑에는
    // 전체 스크롤을 할 수 있는 길이
    // console.log(document.body.offsetHeight - window.innerHeight);
    // console.log(pageYOffset / maxScrollValue); // 비율 (맨 밑까지 갔을 때 1이 된다.)

    // 스크롤 하기 전에 490이었으니까 여기부터 시작하도록 설정하자.
    // 1000을 곱해주는 이유는 너무 멀기 때문
    // 1000 부분을 수정해주면, 스크롤 되는 양을 조절해줄 수 있다.
    const zMove = scrollPer * 1000 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  // 창 사이즈가 바뀌면 maxScrollValue를 변화시킨다.
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  // 바뀌는 창 크기에 대응
  window.addEventListener("resize", resizeHandler);

  // 코드는 겹치지 않는 것이 좋다. 그래서 처음에 한번 실행시키고,
  // 그 후 사이즈가 변화할 때 마다 실행되도록 한다.
  resizeHandler();

  window.addEventListener("mousemove", function (e) {
    // console.log(e.clientX, e.clientY);
    // x 가 왼쪽으로 갈수록 -1에 가까워지고,
    // 즉 가운데에 오면 0에 가까워진다.
    // 오른쪽에 갈수록 1에 가까워진다.
    // y 도 위로 갈수록 1에 가까워지고,
    // 내려갈수록 -1에 가까워진다.
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    // console.log(mousePos);

    // X 축은 위 아래니까 y좌표의 영향을 받는다.
    // 곱하는 숫자는 민감도
    stageElem.style.transform =
      "rotateX(" + mousePos.y * 5 + "deg) rotateY(" + mousePos.x * 5 + "deg)";
  });
})();

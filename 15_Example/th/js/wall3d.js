(function () {
  // 스크롤 할 때 하우스를 이동시킬 것이다.
  const houseElem = document.querySelector(".house");
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
  window.addEventListener("scroll", function () {
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
    const zMove = (pageYOffset / maxScrollValue) * 1000 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";
  });
})();

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const png = document.querySelector(".png");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "bíc b nì mê mình gòy hẹ hẹ";
  png.src =
    "images/5.png";
    
  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes

  // Thêm link 
  const link = document.createElement("a");
  link.href = "https://nhanguiyeuthuong.me/love/?id=1904325";
  link.target = "_blank";
  link.innerText = "đùa hoy, cái này mới là thiệc nè";
  link.style.display = "block";
  link.style.marginTop = "20px";
  link.style.textAlign = "center";
  link.style.fontSize = "20px";
  link.style.color = "#050448ff";

  wrapper.appendChild(link);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
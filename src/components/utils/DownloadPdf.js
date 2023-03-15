import axios from "axios";
import html2pdf from "html2pdf.js";

export const DownloadScoreCardPdf = (
  e,
  scoreCardId,
  studentId,
  scholasticMarksArr,
  jwtToken
) => {
  e.preventDefault();

  const headers = {
    Authorization: jwtToken,
  };

  const result = { subjects: scholasticMarksArr, student_id: studentId };

  const fromEditResult = JSON.parse(localStorage.getItem("fromEditResult"));

  if (fromEditResult) {
    axios
      .put("https://bright-cyan-rabbit.cyclic.app/updateResult", result, {
        headers,
      })
      .then((response) => {
        console.log("Response => ", response);
      })
      .catch((err) => console.log("error:", err));
  } else {
    axios
      .post("https://bright-cyan-rabbit.cyclic.app/addResult", result, {
        headers,
      })
      .then((response) => console.log("Response => ", response))
      .catch((err) => console.log("error:", err));
  }

  const scoreCard = document.getElementById(scoreCardId);
  const opt = {
    margin: 0.12,
    filename: "myScoreCard.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf(scoreCard, opt);
  return;
};

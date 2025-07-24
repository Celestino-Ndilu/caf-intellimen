// document.querySelector(".gerar").addEventListener("click", () => {
//   const input = document.getElementById("GPDF");
//   const texto = input.value.trim();

//   if (texto === "") {
//     alert("Por favor, escreva o assunto para gerar o PDF.");
//     return;
//   }

//   if (texto.length < 5) {
//     alert("Escreva pelo menos 5 caracteres.");
//     return;
//   }

//   // Enviar para o backend
//   gerarPDF(texto);
// });


 function gerarPDF() {
      const texto = document.getElementById("GPDF").value;

      fetch("http://localhost:3000/gerar-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto })
      })
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "meu-pdf.pdf";
        link.click();
      });
    }

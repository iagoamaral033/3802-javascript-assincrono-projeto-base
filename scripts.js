const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload")

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ URL: leitor.result, nome: arquivo.name });
        };
        leitor.onerror = () => {
            reject('Erro na leitura do arquivo ${arquivo.name}');
        };
        leitor.readAsDataURL(arquivo);

    });
}

const imagemPricipal = document.querySelector (".main-imagem");
const nomeDaImagem = document.querySelector(".cotainer-imagem-nome p");
const inputUpload = document.getElementById("input-upload");

inputUpload.addEventListener("change", async (evento) => {
    
    const arquivo = evento.target.Files[0];

    if (arquivo) {
        try {
            const lerConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPricipal.src = ConteudoDoArquivo.URL;
            nomeDaImagem.textContent = ConteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo")
        }
    }
})
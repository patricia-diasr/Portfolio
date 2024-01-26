class Sparkles {
    constructor(canvas) {
        this.cores = ['#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff'];
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.dispersao = 1;
        this.sparkles = [];
        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this));
        this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.canvas.addEventListener("click", this.onMouseMove.bind(this));
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    // Limpa o canvas
        let qtdSparkles = this.sparkles.length;
        while (qtdSparkles--) {                                             // Percorre cada sparkle
            const sparkle = this.sparkles[qtdSparkles];
            if (sparkle.opacidade <= 0) {                                   // Se a opacidade for 0, retira sparkle do array
                this.sparkles.splice(qtdSparkles, 1);
            } else {
                sparkle.yPos++;                                             // Sparkle desce 1px
                sparkle.xPos += sparkle.direcao;                            // Sparkle vai 1px para a direção em que está seguindo
                sparkle.opacidade -= sparkle.velocidade;                    // Opacidade reduz na quantidade definida pela velocidade
                this.ctx.globalAlpha = sparkle.opacidade;
                this.drawStar(sparkle.xPos, sparkle.yPos, 5, sparkle.raio, sparkle.raio / 2, sparkle.cor);   // Desenha o sparkle com 
                this.ctx.globalAlpha = 1;
            }
        }
        window.requestAnimationFrame(this.animate.bind(this));
    }

    // Desenha sparkle como uma estrela
    drawStar(x, y, pontas, raioExterno, raioInterno, cor) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - raioExterno);
        for (let i = 0; i < 2 * pontas; i++) {
            const raio = i % 2 === 0 ? raioExterno : raioInterno;
            const angle = (i / pontas) * Math.PI;
            this.ctx.lineTo(x + raio * Math.sin(angle), y - raio * Math.cos(angle));
        }
        this.ctx.closePath();
        this.ctx.fillStyle = cor;
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = cor;
        this.ctx.stroke();
    }

    // Ao mudar tamanho da tela, redefine tamanho do canvas
    onResize() {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
    }

    // Adiciona sparkles ao mover o mouse
    onMouseMove(event) {
        const posCanvas = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - posCanvas.left;
        const mouseY = event.clientY - posCanvas.top;
        for (let i = 0; i <= 20; i++) {
            this.addSparkle(
                mouseX + ((Math.random() * this.dispersao) - (this.dispersao * 0.5)),
                mouseY + ((Math.random() * this.dispersao) - (this.dispersao * 0.5)),
            );
        }
    }

    // Adiciona um sparkle
    addSparkle(xPos, yPos) {
        const raio = Math.random() * 2;
        const opacidade = 1;
        const velocidade = Math.random();
        const direcao = Math.random() < 0.5 ? -Math.random() : Math.random();
        const cor = this.cores[Math.floor(Math.random() * this.cores.length)];
        this.sparkles.push({xPos, yPos, raio, opacidade, velocidade, direcao, cor});
    }
}

new Sparkles(document.getElementById("sparkles"));

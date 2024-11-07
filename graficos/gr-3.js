import { getCSS, tickConfig, criarGrafico,incluirTexto } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Inglês','Mandarim','Hindi','Espanhol','Francês','Árabe','Bengali','Russo','Português','Indonésio']
    const quantidadeDeUsuarios = ['1268000000','1120000000','637000000','538000000','277000000','274000000','265000000','258000000','252000000','199000000']

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Países Mais Populosos do Mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'países',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'número de habitantes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }

    }

    criarGrafico(data, layout)
    incluirTexto('')
}

quantidadeUsuariosPorRede()
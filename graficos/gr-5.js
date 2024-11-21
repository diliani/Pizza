import { getCSS, tickConfig, criarGrafico,incluirTexto } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['1900','1910','1920','1930','1940','1950','1960','1970','1980','1990','2000','2010','2020']
    const quantidadeDeUsuarios = ['1900','1910','1920','1930','1940','1950','1960','1970','1980','1990','2000','2010','2020']

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'line',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'População do Brasil ao Longo das Décadas',
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
                text: 'décadas',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'população',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }

    }

    criarGrafico(data, layout)
    incluirTexto('Essas informações estão de acordo com a fonte, que é o site da Universidade Metodista de São Paulo.')
}

quantidadeUsuariosPorRede()
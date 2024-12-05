import { getCSS, tickConfig, criarGrafico,incluirTexto } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['1900','1910','1920','1930','1940','1950','1960','1970','1980','1990','2000','2010','2020']
    const quantidadeDeUsuarios = ['17000000','21000000','30000000','41000000','42000000','51000000','70000000','94000000','121000000','119000000','169000000','190000000','213000000']

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
    incluirTexto('IBGE')
}

quantidadeUsuariosPorRede()
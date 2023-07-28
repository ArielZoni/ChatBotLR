const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://www.adobe.com/la/acrobat/pdf-reader.html',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowApp = addKeyword(['App', 'Nuestra App', 'aplicacion']).addAnswer(
    [
        '📄 Aquí te podras registrar en nuestra App',
        'https://linktr.ee/revolutioneducacion2.0',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowBroker = addKeyword(['broker', 'libertex', 'cripto']).addAnswer(
    [
        '📄 Aquí encontras toda la informacion de nuestro Broker de confianza',
        'https://libertex.org/es',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowCunetaBroker = addKeyword(['cuanta broker', 'crear cuneta']).addAnswer(
    [
        '📄 Aquí encontras toda la informacion para crearte la cuenta en el Broker',
        'https://promo.libertex.org/lp/es-lm/libertex-portfolio-b/?aff_id=50392&cxd=50392_668543_MD-CL365-CL227-CL1160-CL1388-CL1419',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowWspFree = addKeyword(['Grupo WhatsApp Free', 'Free', 'Wsp']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://chat.whatsapp.com/Hu8bURnovrII4kvUXTzHDy',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        'Gracias a ti, se parte de esta hermosa Conidad😎🤑🚀',
        'Visita Nuestra Redes sociales',
        '[*Instagram*] https://instagram,com',
        '[*Facebook*] https://facebook.com',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.com/discord', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'buenas', 'buen dia', 'buenas tardes', 'buenas noches'])
    .addAnswer('🙌 Hola bienvenido a *Revolution*')
    .addAnswer(
        [
            'te comparto los siguientes links de interes sobre la comunidad Revo',
            '👉 *Nuestro Broker* conoce a anuestro Broker de confianza',
            '👉 *doc* para ver la Info de Revolutios',
            '👉 *Nuestra App*  registrate en neustra App',
            '👉 *discord* unirte al discord',
            '👉 *Grupo WhatsApp Free* unirte al Grupo',
            '👉 *gracias* te dejamos a continuacion nuestras redes sociales😎',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord,flowBroker, flowCunetaBroker, flowApp]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()

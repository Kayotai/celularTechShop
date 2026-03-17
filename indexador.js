const { google } = require('googleapis');
const key = require('./celulartech-indexing-a37f3594d998.json');

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

async function indexarUrl(urlParaIndexar) {
  try {
    await jwtClient.authorize();
    const indexing = google.indexing({ version: 'v3', auth: jwtClient });
    
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url: urlParaIndexar,
        type: 'URL_UPDATED', 
      },
    });
    
    console.log('O Google foi notificado.');
    console.log('Resposta:', res.data);
  } catch (error) {
    console.error('Erro na API:', error.message);
  }
}

// Coloque a URL do seu novo artigo aqui antes de rodar o script
const novaUrl = 'https://celulartech.shop/calculadora-do-celular-perfeito';
indexarUrl(novaUrl);

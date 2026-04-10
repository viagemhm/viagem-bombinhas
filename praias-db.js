/**
 * Banco de Dados de Praias e Pontos Turísticos - Bombinhas 2026
 * Autor: Helder
 * Revisão: Pontos validados via Satélite para garantir precisão no GPS.
 */

const locaisBombinhas = [
    { id: 1, nome: "Morro do Macaco", cat: "Trilhas", lat: -27.2006, lng: -48.4982, desc: "Vista 360º de Bombinhas. Entrada oficial pela Rua Jequitibá.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2006,-48.4982" },
    { id: 2, nome: "Praia da Sepultura", cat: "Mar Calmo", lat: -27.1438, lng: -48.4746, desc: "Piscina natural. O melhor snorkel da região.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1438,-48.4746" },
    { id: 3, nome: "Praia da Lagoinha", cat: "Mar Calmo", lat: -27.1439, lng: -48.4776, desc: "Muitos peixinhos na beira da água. Ótima para relaxar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1439,-48.4776" },
    { id: 4, nome: "Retiro dos Padres", cat: "Mar Calmo", lat: -27.1415, lng: -48.4725, desc: "Cercada por pedras e mata nativa. Antiga Praia dos Ingleses.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1415,-48.4725" },
    { id: 5, nome: "Praia de Quatro Ilhas", cat: "Com Ondas", lat: -27.1495, lng: -48.4766, desc: "Mar aberto e águas cristalinas. Famosa pelas ilhas no horizonte.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1495,-48.4766" },
    { id: 6, nome: "Praia de Mariscal", cat: "Com Ondas", lat: -27.1844, lng: -48.4892, desc: "Praia extensa, mar limpo e areia que 'canta' ao pisar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1844,-48.4892" },
    { id: 7, nome: "Praia da Tainha", cat: "Trilhas", lat: -27.2104, lng: -48.5033, desc: "Isolada e paradisíaca. Acesso por estrada de terra ou trilha.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2104,-48.5033" },
    { id: 8, nome: "Praia de Bombas", cat: "Mar Calmo", lat: -27.1378, lng: -48.5039, desc: "Calçadão ótimo para caminhar. Águas calmas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1378,-48.5039" },
    { id: 9, nome: "Praia de Bombinhas", cat: "Mar Calmo", lat: -27.1431, lng: -48.4894, desc: "O coração da cidade. Água transparente e mansa.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1431,-48.4894" },
    { id: 10, nome: "Canto Grande (Mar de Dentro)", cat: "Mar Calmo", lat: -27.1842, lng: -48.5047, desc: "Pôr do sol mais lindo da cidade. Mar de espelho.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1842,-48.5047" },
    { id: 11, nome: "Canto Grande (Mar de Fora)", cat: "Com Ondas", lat: -27.1885, lng: -48.5005, desc: "Mar aberto, ótimo para quem gosta de ondas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1885,-48.5005" },
    { id: 12, nome: "Praia da Conceição", cat: "Mar Calmo", lat: -27.1975, lng: -48.5058, desc: "Pequena e charmosa, protegida por costões.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1975,-48.5058" },
    { id: 13, nome: "Praia de Zimbros", cat: "Mar Calmo", lat: -27.1645, lng: -48.5242, desc: "Tradicional vila de pescadores. Água muito calma.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1645,-48.5242" },
    { id: 14, nome: "Praia do Embrulho", cat: "Mar Calmo", lat: -27.1428, lng: -48.4795, desc: "Pequena e entre rochas, ideal para fotos.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1428,-48.4795" },
    { id: 15, nome: "Praia do Ribeiro", cat: "Trilhas", lat: -27.1412, lng: -48.4972, desc: "Acesso por passarela ou trilha. Deserta e linda.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1412,-48.4972" },
    { id: 16, nome: "Praia da Aguada", cat: "Trilhas", lat: -27.2110, lng: -48.5045, desc: "Localizada na ponta da Tainha, rústica e vazia.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2110,-48.5045" },
    { id: 17, nome: "Praia Vermelha", cat: "Trilhas", lat: -27.1612, lng: -48.5412, desc: "Trilha saindo de Zimbros. Natureza intocada.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1612,-48.5412" },
    { id: 18, nome: "Praia da Lagoa", cat: "Trilhas", lat: -27.1648, lng: -48.5452, desc: "Pequena faixa de areia na trilha deserta de Zimbros.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1648,-48.5452" },
    { id: 19, nome: "Praia Triste", cat: "Trilhas", lat: -27.1685, lng: -48.5512, desc: "Apesar do nome, é um paraíso. Tem cachoeira perto.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1685,-48.5512" },
    { id: 20, nome: "Praia do Cardoso", cat: "Trilhas", lat: -27.1712, lng: -48.5558, desc: "Última praia da trilha costeira de Zimbros.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1712,-48.5558" },
    { id: 21, nome: "Praia do Biguá", cat: "Mar Calmo", lat: -27.1435, lng: -48.4712, desc: "Ao lado da Sepultura. Pequeníssima e reservada.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1435,-48.4712" },
    { id: 22, nome: "Praia da Galheta", cat: "Trilhas", lat: -27.1255, lng: -48.4985, desc: "Acesso por trilha no final de Bombas. Selvagem.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1255,-48.4985" },
    { id: 23, nome: "Praia de Morrinhos", cat: "Mar Calmo", lat: -27.1755, lng: -48.5085, desc: "Continuação de Zimbros. Tranquila e familiar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1755,-48.5085" },
    { id: 24, nome: "Praia do Atalaia", cat: "Com Ondas", lat: -27.1558, lng: -48.4802, desc: "Próxima a Quatro Ilhas. Visual rochoso.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1558,-48.4802" },
    { id: 25, nome: "Praia do Mar de Dentro", cat: "Mar Calmo", lat: -27.1812, lng: -48.5065, desc: "Água rasa, excelente para Stand Up Paddle.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1812,-48.5065" },
    { id: 26, nome: "Praia da Miséria", cat: "Mar Calmo", lat: -27.1432, lng: -48.4731, desc: "Só aparece quando a maré está bem baixa.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1432,-48.4731" },
    { id: 27, nome: "Praia do Cação", cat: "Trilhas", lat: -27.2012, lng: -48.5012, desc: "Pequena enseada acessível por barco ou trilha difícil.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2012,-48.5012" },
    { id: 28, nome: "Praia do Porto da Vó", cat: "Mar Calmo", lat: -27.1685, lng: -48.5185, desc: "Pequena e calma perto de Morrinhos.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1685,-48.5185" },
    { id: 29, nome: "Praia da Sorraia", cat: "Mar Calmo", lat: -27.1952, lng: -48.5105, desc: "Área de preservação e vila de pescadores.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1952,-48.5105" },
    { id: 30, nome: "Praia do Engenho", cat: "Com Ondas", lat: -27.1865, lng: -48.4865, desc: "Extensão da praia de Mariscal.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1865,-48.4865" },
    { id: 31, nome: "Praia de Bananal", cat: "Mar Calmo", lat: -27.1585, lng: -48.5325, desc: "Perto de Zimbros, pouco frequentada.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1585,-48.5325" },
    { id: 32, nome: "Ponta do Estaleiro", cat: "Trilhas", lat: -27.1485, lng: -48.4685, desc: "Local de pesca e visual do mar aberto.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1485,-48.4685" },
    { id: 33, nome: "Praia de Santa Cruz", cat: "Com Ondas", lat: -27.1895, lng: -48.4952, desc: "Área preservada e deserta entre costões.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1895,-48.4952" },
    { id: 34, nome: "Praia do Portinho", cat: "Mar Calmo", lat: -27.1438, lng: -48.4835, desc: "Escondida no meio da Praia de Bombinhas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1438,-48.4835" },
    { id: 35, nome: "Saco do Inglês", cat: "Trilhas", lat: -27.1412, lng: -48.4695, desc: "Área de costão após o Retiro dos Padres.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1412,-48.4695" },
    { id: 36, nome: "Praia do Cantinho", cat: "Mar Calmo", lat: -27.1352, lng: -48.5155, desc: "Início da praia de Bombas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1352,-48.5155" },
    { id: 37, nome: "Praia das Galhetas", cat: "Trilhas", lat: -27.2085, lng: -48.5205, desc: "Costão rochoso com piscinas naturais raras.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2085,-48.5205" },
    { id: 38, nome: "Ponta do Lobo", cat: "Trilhas", lat: -27.1995, lng: -48.4985, desc: "Extremo sul da península, visual selvagem.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1995,-48.4985" },
    { id: 39, nome: "Praia da Ilha do Arvoredo", cat: "Trilhas", lat: -27.2885, lng: -48.3685, desc: "Apenas via barco. Santuário de mergulho.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2885,-48.3685" },
    { id: 40, nome: "Mirante de Bombas", cat: "Trilhas", lat: -27.1225, lng: -48.5125, desc: "Vista panorâmica da entrada da cidade.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1225,-48.5125" }
];

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1);
}

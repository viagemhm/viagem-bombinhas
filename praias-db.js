/**
 * Banco de Dados de Praias e Pontos Turísticos - Bombinhas 2026
 * Autor: Helder
 */

const locaisBombinhas = [
    { id: 1, nome: "Morro do Macaco", cat: "Trilhas", lat: -27.2006, lng: -48.4982, desc: "Vista 360º de Bombinhas. Entrada oficial pela Rua Jequitibá.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2006,-48.4982" },
    { id: 2, nome: "Praia da Sepultura", cat: "Mar Calmo", lat: -27.1438, lng: -48.4746, desc: "Piscina natural. O melhor snorkel da região.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1438,-48.4746" },
    { id: 3, nome: "Praia da Lagoinha", cat: "Mar Calmo", lat: -27.1441, lng: -48.4777, desc: "Muitos peixinhos na beira da água. Ótima para relaxar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1441,-48.4777" },
    { id: 4, nome: "Retiro dos Padres", cat: "Mar Calmo", lat: -27.1415, lng: -48.4725, desc: "Cercada por pedras e mata nativa.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1415,-48.4725" },
    { id: 5, nome: "Praia de Quatro Ilhas", cat: "Com Ondas", lat: -27.1495, lng: -48.4766, desc: "Mar aberto e águas cristalinas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1495,-48.4766" },
    { id: 6, nome: "Praia de Mariscal", cat: "Com Ondas", lat: -27.1855, lng: -48.4912, desc: "Praia extensa e limpa. Ótima para caminhar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1855,-48.4912" },
    { id: 7, nome: "Praia da Tainha", cat: "Trilhas", lat: -27.2104, lng: -48.5033, desc: "Isolada e paradisíaca no extremo sul.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2104,-48.5033" },
    { id: 8, nome: "Praia de Bombas", cat: "Mar Calmo", lat: -27.1355, lng: -48.5085, desc: "Calçadão ótimo para caminhar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1355,-48.5085" },
    { id: 9, nome: "Praia de Bombinhas", cat: "Mar Calmo", lat: -27.1425, lng: -48.4915, desc: "O coração da cidade. Água transparente.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1425,-48.4915" },
    { id: 10, nome: "Canto Grande (Dentro)", cat: "Mar Calmo", lat: -27.1842, lng: -48.5065, desc: "Pôr do sol mais lindo da cidade.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1842,-48.5065" },
    { id: 11, nome: "Canto Grande (Fora)", cat: "Com Ondas", lat: -27.1905, lng: -48.4985, desc: "Mar aberto, ideal para quem gosta de espaço.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1905,-48.4985" },
    { id: 12, nome: "Praia da Conceição", cat: "Mar Calmo", lat: -27.1985, lng: -48.5045, desc: "Pequena e charmosa.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1985,-48.5045" },
    { id: 13, nome: "Praia de Zimbros", cat: "Mar Calmo", lat: -27.1705, lng: -48.5275, desc: "Tradicional vila de pescadores.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1705,-48.5275" },
    { id: 14, nome: "Praia do Embrulho", cat: "Mar Calmo", lat: -27.1432, lng: -48.4815, desc: "Pequena e entre rochas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1432,-48.4815" },
    { id: 15, nome: "Praia do Ribeiro", cat: "Trilhas", lat: -27.1402, lng: -48.4985, desc: "Acesso por passarela ou trilha.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1402,-48.4985" },
    { id: 16, nome: "Praia da Aguada", cat: "Trilhas", lat: -27.2115, lng: -48.5055, desc: "Localizada na ponta da Tainha.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2115,-48.5055" },
    { id: 17, nome: "Praia Vermelha", cat: "Trilhas", lat: -27.1585, lng: -48.5435, desc: "Natureza intocada (Trilha de Zimbros).", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1585,-48.5435" },
    { id: 18, nome: "Praia da Lagoa", cat: "Trilhas", lat: -27.1625, lng: -48.5475, desc: "Pequena faixa de areia na trilha.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1625,-48.5475" },
    { id: 19, nome: "Praia Triste", cat: "Trilhas", lat: -27.1665, lng: -48.5535, desc: "Paraíso isolado com cachoeira próxima.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1665,-48.5535" },
    { id: 20, nome: "Praia do Cardoso", cat: "Trilhas", lat: -27.1695, lng: -48.5585, desc: "Última praia da trilha costeira.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1695,-48.5585" },
    { id: 21, nome: "Praia do Biguá", cat: "Mar Calmo", lat: -27.1435, lng: -48.4722, desc: "Ao lado da Sepultura. Reservada.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1435,-48.4722" },
    { id: 22, nome: "Praia da Galheta", cat: "Trilhas", lat: -27.1265, lng: -48.5015, desc: "Acesso pelo final de Bombas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1265,-48.5015" },
    { id: 23, nome: "Praia de Morrinhos", cat: "Mar Calmo", lat: -27.1775, lng: -48.5125, desc: "Tranquila e familiar.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1775,-48.5125" },
    { id: 24, nome: "Praia do Atalaia", cat: "Com Ondas", lat: -27.1555, lng: -48.4795, desc: "Próxima a Quatro Ilhas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1555,-48.4795" },
    { id: 25, nome: "Praia do Mar de Dentro", cat: "Mar Calmo", lat: -27.1815, lng: -48.5095, desc: "Excelente para Stand Up Paddle.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1815,-48.5095" },
    { id: 26, nome: "Praia da Miséria", cat: "Mar Calmo", lat: -27.1432, lng: -48.4735, desc: "Só aparece na maré baixa.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1432,-48.4735" },
    { id: 27, nome: "Praia do Cação", cat: "Trilhas", lat: -27.2035, lng: -48.5015, desc: "Enseada acessível por trilha ou barco.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2035,-48.5015" },
    { id: 28, nome: "Praia do Porto da Vó", cat: "Mar Calmo", lat: -27.1725, lng: -48.5205, desc: "Pequena e calma.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1725,-48.5205" },
    { id: 29, nome: "Praia da Sorraia", cat: "Mar Calmo", lat: -27.1942, lng: -48.5135, desc: "Vila de pescadores preservada.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1942,-48.5135" },
    { id: 30, nome: "Praia do Engenho", cat: "Com Ondas", lat: -27.1825, lng: -48.4875, desc: "Canto direito de Mariscal.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1825,-48.4875" },
    { id: 31, nome: "Praia de Bananal", cat: "Mar Calmo", lat: -27.1565, lng: -48.5345, desc: "Tranquila na Baía de Zimbros.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1565,-48.5345" },
    { id: 32, nome: "Ponta do Estaleiro", cat: "Trilhas", lat: -27.1485, lng: -48.4685, desc: "Visual de mar aberto.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1485,-48.4685" },
    { id: 33, nome: "Praia de Santa Cruz", cat: "Com Ondas", lat: -27.1925, lng: -48.4965, desc: "Deserta entre costões.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1925,-48.4965" },
    { id: 34, nome: "Praia do Portinho", cat: "Mar Calmo", lat: -27.1438, lng: -48.4855, desc: "Refúgio escondido em Bombinhas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1438,-48.4855" },
    { id: 35, nome: "Saco do Inglês", cat: "Trilhas", lat: -27.1402, lng: -48.4705, desc: "Após o Retiro dos Padres.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1402,-48.4705" },
    { id: 36, nome: "Praia do Cantinho", cat: "Mar Calmo", lat: -27.1332, lng: -48.5135, desc: "Início tranquilo de Bombas.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1332,-48.5135" },
    { id: 37, nome: "Praia das Galhetas", cat: "Trilhas", lat: -27.2085, lng: -48.5185, desc: "Piscinas naturais raras.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2085,-48.5185" },
    { id: 38, nome: "Ponta do Lobo", cat: "Trilhas", lat: -27.1965, lng: -48.4945, desc: "Extremo leste da península.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1965,-48.4945" },
    { id: 39, nome: "Ilha do Arvoredo", cat: "Trilhas", lat: -27.2885, lng: -48.3685, desc: "Santuário de mergulho (via barco).", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.2885,-48.3685" },
    { id: 40, nome: "Mirante de Bombas", cat: "Trilhas", lat: -27.1235, lng: -48.5105, desc: "Vista da entrada da cidade.", maps: "https://www.google.com/maps/dir/?api=1&destination=-27.1235,-48.5105" }
];

// FUNÇÃO HAVERSINE
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1);
}

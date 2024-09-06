let dados = [
    {
        nome: "Eric Moore",
        nacionalidade: "Americano",
        idade: 38,
        generoMusical: "Funk, Gospel, Pop, Jazz, Rock, Rap",
        link: "https://www.youtube.com/watch?v=c0NuAJWUJLo&t=81s",
        descricao:"Eric Moore é um nome de peso no mundo da bateria, especialmente conhecido por sua participação em projetos de grande sucesso e por sua influência na cena musical contemporânea. Sua versatilidade e groove único o tornaram um dos bateristas mais admirados e respeitados da atualidade.",
        instagram: "https://www.instagram.com/ericmoore_ii/"
    },
    {
        nome: "Cleverson Silva",
        nacionalidade: "Brasileiro", 
        idade: 40,
        generoMusical: "Gospel, Jazz, Samba, Pop, Rap",
        link: "https://www.youtube.com/watch?v=JV916bPPNmU&list=RDJV916bPPNmU&start_radio=1&rv=JV916bPPNmU&t=50",
        descricao:"Considerado um dos maiores bateristas brasileiros, Cleverson Silva é conhecido por sua técnica impecável e groove contagiante. Sua passagem pelas bandas Renascer Praise, Dj Alpiste, Ed Motta, IZA e em projetos com a TV Globo marcou uma geração de músicos.",
        instagram: "https://www.instagram.com/cscleverson/"
    },
    {
        nome: "Kim Thompson",
        nacionalidade: "Americana",
        idade: 42,
        generoMusical: "Jazz, Blues",
        link: "https://www.youtube.com/watch?v=-GecTXPwVRo",
        descricao:"Kim Thompson é uma baterista e percussionista. Seu trabalho é reconhecido por sua habilidade técnica e versatilidade, sendo muito experiente no blues, jazz e black music.",
        instagram: "https://www.instagram.com/kimberlythompsondrum/"
    },
    {
        nome: "Tony Royster Jr.",
        nacionalidade: "Americano",
        idade: 38,
        generoMusical: "R&B, Funk, Jazz, Rock",
        link: "https://www.youtube.com/watch?v=XCzA--UvODE",
        descricao:"Conhecido por sua participação no álbum Lemonade de Beyoncé, Tony Royster Jr. demonstrou sua versatilidade musical, combinando elementos do R&B, funk e soul Tony é um gênio da bateria Sua energia e criatividade são contagiosas.",
        instagram: "https://www.instagram.com/tonyroysterjr/"
    },
    {
        nome: "Aaron Spears",
        nacionalidade: "Americano",
        idade: 46,  // Faleceu em 2023
        generoMusical: "Gospel, R&B, Pop, Jazz",
        link: "https://www.youtube.com/watch?v=fN_xcgaueds",
        descricao:"Aaron Spears é considerado um dos maiores bateristas do mundo. Sem dúvida, ele é um dos bateristas mais respeitados e influentes da atualidade.",
        instagram: "https://www.instagram.com/aspears/"
    },
    {
        nome: "Calvin Rodgers",
        nacionalidade: "Americano",
        idade: 45,
        generoMusical: "Gospel, R&B, Jazz, Pop",
        link: "https://www.youtube.com/watch?v=w80q43rW6JU",
        descricao:"Calvin Rodgers começou sua carreira musical muito jovem e ganhou destaque como baterista de gospel. Ele é conhecido por seu estilo inovador e técnica impressionante.",
        instagram: "https://www.instagram.com/calvinr_rodgers/"
    },
    {
        nome: "Teddy Campbell",
        nacionalidade: "Americano",
        idade: 48,
        generoMusical: "Pop, Gospel, R&B, Jazz",
        link: "https://www.youtube.com/watch?v=ntgDW957cr0",
        descricao:"Teddy Campbell é conhecido por seu estilo versátil e técnica excepcional. Ele colaborou com artistas renomados como Michael Jackson, Beyoncé, Christina Aguilera e Justin Timberlake.",
        instagram: "https://www.instagram.com/teddycampbellband/"
    },
    {
        nome: "Nick Smith",
        nacionalidade: "Americano",
        idade: 43,
        generoMusical: "Gospel, Jazz, R&B, Pop",
        link: "https://www.youtube.com/watch?v=oH0CEhrOe1I&t=57s",
        descricao:"Nick Smith é amplamente conhecido por seu trabalho no gênero gospel, colaborando com vários artistas e grupos de destaque.",
        instagram: "https://www.instagram.com/nicksmithglobal/"
    },
    {
        nome: "Nikki Glaspie",
        nacionalidade: "Americana",
        idade: 41,
        generoMusical: "Funk, R&B",
        link: "https://www.youtube.com/watch?v=8v8c9w97GWc",
        descricao:"Nikki Glaspie é uma baterista e percussionista americana, conhecida por seu trabalho com Beyoncé.",
        instagram: "https://www.instagram.com/nikkidrums/"
    },
    {
        nome: "Chris Coleman",
        nacionalidade: "Americano",
        idade: 44,
        generoMusical: "Gospel, Jazz, Pop",
        link: "https://www.youtube.com/watch?v=Rft8vFYTELs",
        descricao:"Chris Coleman trabalhou com uma variedade de artistas renomados como Prince, Stevie Wonder e John Legend.",
        instagram: "https://www.instagram.com/c2_experience_/"
    },
    {
        nome: "Dave Weckl",
        nacionalidade: "Americano",
        idade: 63,
        generoMusical: "Jazz Fusion",
        link: "https://www.youtube.com/watch?v=xxEcfHw0B2U&list=RDGMEMTmC-2iNKH_l8gQ1LHo9FeQ&start_radio=1&rv=Rft8vFYTELs",
        descricao:"Dave Weckl formou a Dave Weckl Band e é considerado um dos melhores bateristas da história.",
        instagram: "https://www.instagram.com/officialdaveweckl/"
    },
    {
        nome: "Dennis Chambers",
        nacionalidade: "Americano",
        idade: 64,
        generoMusical: "Jazz Fusion, Funk",
        link: "https://www.youtube.com/watch?v=JY15louxniU",
        descricao:"Dennis Chambers é um dos bateristas mais renomados e inovadores no mundo do funk, jazz fusion e rock.",
        instagram: "https://www.instagram.com/dennischambersofficial/"
    },
    {
        nome: "Varo",
        nacionalidade: "Americano",
        idade: 35,
        generoMusical: "Gospel, Jazz",
        link: "https://www.youtube.com/watch?v=GdbTxQDJRTo",
        descricao:"Varo é conhecido por seu estilo inovador e técnica avançada na bateria.",
        instagram: "https://www.instagram.com/tjohnvaro/"
    },
    {
        nome: "Cuca Teixeira",
        nacionalidade: "Brasileiro",
        idade: 50,
        generoMusical: "Jazz, Samba, MPB",
        link: "https://www.youtube.com/watch?v=XBSvRK1qDzM",
        descricao:"Cuca Teixeira é respeitado na comunidade musical brasileira por suas contribuições ao jazz.",
        instagram: "https://www.instagram.com/cucateixeira/"
    },
    {
        nome: "John Bonham",
        nacionalidade: "Britânico",
        idade: 32, // Faleceu em 1980
        generoMusical: "Rock",
        link: "https://www.youtube.com/watch?v=UOSf9f5_qZ8",
        descricao: "John Bonham, baterista do Led Zeppelin, é considerado um dos maiores bateristas de todos os tempos.",
        instagram: "https://www.instagram.com/johnbonham__fans/"
    },
    {
        nome: "Dave Grohl",
        nacionalidade: "Americano",
        idade: 55,
        generoMusical: "Rock, Alternative",
        link: "https://www.youtube.com/watch?v=3qs6xaEEfcg",
        descricao:"Dave Grohl é conhecido por sua versatilidade como baterista no Nirvana e vocalista no Foo Fighters.",
        instagram: "https://www.instagram.com/davegrohl/"
    },
    {
        nome: "Cindy Blackman Santana",
        nacionalidade: "Americana",
        idade: 63,
        generoMusical: "Jazz, Rock",
        link: "https://www.youtube.com/watch?v=X2OH44fz75g",
        descricao: "Cindy Blackman Santana é uma talentosa baterista de jazz e rock.",
        instagram: "https://www.instagram.com/cindyblackmansantana/"
    },
    {
        nome: "Terri Lyne Carrington",
        nacionalidade: "Americana",
        idade: 58,
        generoMusical: "Jazz",
        link: "https://www.youtube.com/watch?v=aBZAp73OMA8",
        descricao:"Terri Lyne Carrington"
    ]
const audio = document.querySelector('.audio-wrapper')
const btnArrowDown1 = document.querySelectorAll('.arrow-down')[0]
const btnArrowUp1 = document.querySelectorAll('.arrow-up')[0]
const text = [
    "De cerca de 1250 até 1450, Mapungubwe foi eclipsado pela Reino do Zimbábue. Este estado de Calanga foi refinado e expandido com a arquitetura de pedra de Mapungubwe, que sobrevive até hoje nas ruínas da capital do reino da Grande Zimbábue",
    "De cerca de 1450-1760, Zimbábue deu lugar ao Reino de Mutapa. Este estado de Calanga governou grande parte da área conhecida hoje como Zimbábue e partes do Moçambique central. É conhecido por muitos nomes, incluindo o Império Mutapa, também conhecido como Mwenemutapa era conhecido por suas rotas de comércio de ouro com árabes e os portugueses. No entanto, os portugueses destruíram o comércio e começaram uma série de guerras que deixaram o império em quase colapso no início do século XVII. Como resposta direta à agressão portuguesa no interior, surgiu um novo Estado Calanga chamado Império Rozui. Baseando-se em séculos de desenvolvimento militar, político e religioso, o Rozui (que significa 'destruidores') removeu os portugueses do platô do Zimbábue pela força das armas. O Rozui continuou as tradições de construção de pedra dos reinos do Zimbábue e Mapungubue ao adicionar armas ao seu arsenal e desenvolver um exército profissional para proteger suas rotas comerciais e conquistas",
    `A descoberta de ouro em 1867 despertou a cobiça dos Ingleses, que acabaram por ocupar o território, apesar das reivindicações de Portugal, a quem a Grã-Bretanha dirige um ultimato em 1890. A colónia ficou designada, em 1895, Rodésia em homenagem a Cecil Rhodes, que promoveu a sua constituição. A parte sul desenvolveu-se mais do que a norte.`,
    `Em 1895, o BSAC adotou o nome 'Rodésia' para o território da Zambézia, em honra de Cecil Rhodes. Em 1898 'Rodésia do Sul' tornou-se a denotação oficial para a região sul do Zambeze, que mais tarde se tornou Zimbábue. A região ao norte foi administrada separadamente pelo BSAC e mais tarde chamado Rhodesia do Norte (agora Zâmbia).
    O xona desencadeou revoltas mal sucedidas (conhecidas como Chimurenga) contra a invasão em suas terras, por clientes da BSAC e Cecil Rhodes em 1896 e 1897. Após as insurreições fracassadas de 1896-97, os grupos Ndebele e xonas tornaram-se sujeitos à administração de Rhodes, precipitando assim assentamento em massa europeus, o que levou à distribuição da terra favorecendo desproporcionalmente os europeus, deslocando o xona, Ndebele e outros povos indígenas.`,
    `A Rodésia do Sul tornou-se uma colônia britânica autônoma em outubro de 1923, após um referendo de 1922. Rodesianos serviram em nome do Reino Unido durante Segunda Guerra Mundial, principalmente na Campanha da África Oriental contra o Eixo, forças em África Oriental Italiana.`,
    `Em 1953, diante da oposição africana,[25] Grã-Bretanha consolidou as duas colônias da Rodésia com Niassalândia (hoje Maláui) na malfadada Federação da Rodésia e Niassalândia Que foi dominada pela Rodésia do Sul`,
    `O crescimento do nacionalismo Africano e de oposição em geral, particularmente na Niassalândia, persuadiu a Grã-Bretanha a dissolver a União em 1963, formando três colônias. `,
    `O governo da minoria branca declarou-se uma "república" em 1970. Uma guerra civil se seguiu, com a ZAPU de Joshua Nkomo e Robert Mugabe ZANU usando a assistência dos governos da Zâmbia e Moçambique. Embora a declaração de Smith não tenha sido reconhecida pelo Reino Unido nem por nenhum outro poder, a Rodésia do Sul deixou cair a designação 'Sul' e reivindicou o estado do país como República da Rodésia em 1970 Embora isso não tenha sido reconhecido internacionalmente.`,
    `O país ganhou independência oficial como Zimbábue em 18 de abril de 1980. O governo realizou celebrações da independência no estádio de Rufaro em Salisbury, a capital. Lorde Christopher Soames, o último Governador da Rodésia do Sul, assistiu como Charles (príncipe de Gales), deu uma saudação de despedida e a Rhodesian Signal Corps played "God Save the Queen". Vários dignitários estrangeiros também participaram, incluindo a primeira ministra Indira Gandhi da Índia, Presidente Shehu Shagari da Nigéria, Presidente Kenneth Kaunda da Zâmbia, Presidente Seretse Khama do Botswana, e primeiro ministro Malcolm Fraser da Austrália, representando a Comunidade das Nações. Bob Marley cantou 'Zimbabwe', uma música que ele escreveu, no convite do governo em um show nas festividades de independência do país.`,
    ` Em 1990, o governo aboliu o Senado e aumentou a participação da Câmara de Assembleia para incluir membros nomeados pelo Presidente.
    O primeiro-ministro Mugabe manteve Peter Walls, o chefe do exército, em seu governo e colocá-lo encarregado de integrar o Exército Revolucionário do Zimbábue (ZIPRA), Exército de Libertação Nacional do Zimbábue (ZANLA) e o Exército da Rodésia. Enquanto os meios de comunicação ocidentais elogiaram os esforços de Mugabe na reconciliação com a minoria branca Branco no Zimbábue, a tensão logo se desenvolveu`,
    `, em 1997, 25% da população do Zimbábue havia sido infectada pelo HIV, o vírus da AIDS.
    Durante a década de 1990 estudantes, sindicalistas e trabalhadores demonstraram frequentemente expressar seu descontentamento com o governo. Os estudantes protestaram em 1990 contra propostas para aumentar o controle governamental das universidades e novamente em 1991 e 1992 quando entraram em confronto com a polícia. Sindicalistas e trabalhadores também criticaram o governo durante esse período. Em 1992, a polícia impediu os sindicalistas de realizar manifestações antigovernamentais. Em 1994, o distúrbio industrial generalizado enfraqueceu a economia. Em 1996 funcionários públicos, enfermeiros e médicos juniores entraram em greve sobre questões salariais.
    Em 9 de dezembro de 1997, uma greve nacional paralisou o país. Mugabe foi entrado em pânico por manifestações de Zanla ex-combatentes, veteranos de guerra, que tinham sido o coração das incursões 20 anos antes na Guerra Bush`,
    `As divisões dentro do MDC da oposição começaram a apressar-se no início da década, depois Morgan Tsvangirai (o presidente do MDC) foi atraído em uma operação de ataque do governo que o filmou, falando sobre a remoção do poder pelo Sr. Mugabe. Ele foi posteriormente preso e julgado por acusações de traição. Isso prejudicou o controle dos assuntos do partido e levantou questões sobre sua competência. Também catalisou uma grande divisão dentro do partido. Em 2004, ele foi absolvido, mas não até depois de sofrer graves abusos e maus tratos na prisão.  A facção adversária foi liderada por Welshman Ncube, que era o secretário geral do partido. Em meados de 2004, vigilantes leais ao Sr. Tsvangirai começou a atacar os membros que eram em sua maioria leais a Ncube, culminando em um ataque Setembro no quartel-general Harare do partido em que o diretor de segurança quase foi atirado para a morte`,
    `No dia 15 de novembro de 2017, o presidente Robert Mugabe foi afastado pelos militares, que o colaram em em prisão domiciliar. Os militares ao tomarem o poder, declararam que não queriam depor o presidente e sim combater a corrupção no país. No dia 21 de novembro, Mugabe renunciou.`


]
const localText = document.querySelector('.text-history')
const localCards = document.querySelector('.card-wrapper')
console.log(localText);
addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY <= 900){
        audio.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ApfJDLibIoWL0mRZ5uOKu?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
    if(window.scrollY > 900){
        audio.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mJ6uMQsIp66kvpuPTWk7f?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
}, true)


const cards = document.querySelectorAll('.card')

for(var i = 0; i < cards.length; ++i){
    cards[i].addEventListener("click", function(e){
        e.preventDefault
        const el = e.target

        localText.innerHTML = text[el.id]
        console.log(text[el.id]);
        console.log('Adicionando o Texto' + '' + el.id)
        localCards.classList.toggle('hide')
    })
}


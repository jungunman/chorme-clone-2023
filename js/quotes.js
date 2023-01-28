const quotes = [
    {
        quote : "의심으로 가득 찬 마음은 승리로의 여정에 집중할 수 없다",
        author : "아서 골든",
    },
    {
        quote : "돈이 다 무슨 소용인가? 사람이 아침에 일어나고 밤에 잠자리에 들며 그 사이에 하고 싶은 일을 한다면 그 사람은 성공한 것이다",
        author : "밥 딜런",
    },
    {
        quote : "성공한 사람보다는 가치 있는 사람이 되려 하라",
        author : "알버트 아인슈타인",
    },
    {
        quote : "하늘의 도움으로 너를 위해 거대한 제국을 세웠노라. 그러나 세계정복을 달성하기에는 내 생이 너무 짧았다. 이 일은 이제 네게 맡기노라.",
        author : "칭기즈칸",
    },
    {
        quote : "나는 성공의 열쇠는 모른다. 그러나 실패의 열쇠는 모두의 비위를 맞추려 하는 것이다.",
        author : "빌 코스비",
    },
    {
        quote : "성공한 사람은 대개 지난번 성취한 것 보다 다소 높게, 그러나 과하지 않게 다음 목표를 세운다. 이렇게 꾸준히 자신의 포부를 키워간다.",
        author : "커트 르윈",
    },
    {
        quote : "당신은 움츠리기보다 활짝 피어나도록 만들어진 존재입니다",
        author : "오프라 윈프리",
    },
    {
        quote : "기회는 없어지지 않는다. 당신이 놓친 것은 다른 사람이 잡는다.",
        author : "작자 미상",
    },
    {
        quote : "실패하는 것은 곧 성공으로 한 발짝 더 나아가는 것이다.",
        author : "메리 케이 애쉬",
    },
    {
        quote : "순간을 사랑하라. 그러면 그 순간의 에너지가 모든 경계를 넘어 퍼져나갈 것이다",
        author : "코리타 켄트",
    },
    {
        quote : "아생명은 생명을 낳는다. 에너지는 에너지를 창출한다. 사람이 부자가 되는 것은 자신을 소모시킴에 따라 일어난다.",
        author : "사라 베른하르트"
    },
    {
        quote : "우리의 목표는 이것이다. 우리에게 주어진 이 삶을 최대한 의미있게 사는 것, 자부심을 느낄 수 있도록 올바르게 사는 것, 죽은 후에도 우리의 일부가 영속도록 올바르게 행동하는 것.",
        author : "오스왈드 스펭글러",
    },
    {
        quote : "성공은 형편없는 선생이다. 똑똑한 사람들로 하여금 절대 패할 수 없다고 착각하게 만든다.",
        author : "빌 게이츠",
    },
    {
        quote : "나는 결코 나 자신을 우상이라고 생각하지 않는다. 다른 사람들의 마음 속에 있는 것이 내 마음 속에는 없다. 나는 단지 내 일을 할 뿐이다.",
        author : "오드리 햅번",
    },
    {
        quote : "모든것을 관찰하세요. 소통을 잘 하세요. 그림을 그리고, 그리고 , 또 그리세요.",
        author : "프랭크 토마스",
    },
    {
        quote : "싸우지 않고 적이 스스로 항복하는 것이 최고의 승리이다... 싸우지 않고 이기는 것이 최선이다.",
        author : "손자",
    },
    {
        quote : "우리는 단지 우리가 인생이나 전쟁 혹은 다른 어떤 것에서든 하나의 최우선적인 목표를 설정하고 다른 모든 고려사항을 이 하나의 목적에 종속시킬 때만 성공한다.",
        author : "드와이트 데이비드 아이젠하워",
    },
    {
        quote : "알렉산더 대왕이 디오게니스를 찾아가 그와 같은 현인을 위해 자신이 무엇을 해줄 수 있을지 물었더니 디오게이스가 대답하길, '빛을 가리고 계시니 비켜서주십시오'라고 하였다. 언젠가는 창의력을 증진시키는 방법을 알게될 지도 모르겠다. 그러나 그 전까지 우리가 할 수 있는 최선은 창의적인 이들 앞에서서 빛을 가리우지 않는 것이다.",
        author : "존 W. 가드너",
    },
    {
        quote : "작은 성취가 모여 위대한 성취가 된다.",
        author : "Woong",
    },
]

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const pickQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = pickQuote.quote;
author.innerText = pickQuote.author;
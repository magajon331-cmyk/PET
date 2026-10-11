"use strict";

const KEY = "pishakcha-save-v1";
const BRAND = "Зарра";
const SKINS = {
  magenta: "#ff4ecd",
  cyan: "#3ecbff",
  amber: "#ffb347",
  violet: "#b9a6ff",
  mint: "#3dffe0",
  coral: "#ff7a6e",
  ivory: "#fff6ee",
  night: "#6d7cff",
  lime: "#c6ff4a",
  rose: "#ff8ac7",
};

const ACH_IDS = ["coffee", "coder", "flow", "ship", "hunter", "loyal", "named", "perfect", "duck"];

const COPY = {
  tg: {
    sub: "Пешниҳод: Зарра, кодер дар дохили IDE-и зинда",
    boot: "Зарра клавиатураро гарм мекунад...",
    inspector: "Инспектор",
    terminal: "Терминал",
    tabScene: "Саҳна",
    tabStats: "Ҳол",
    tabTerm: "Қайд",
    tabSky: "Осмон",
    settings: "Танзим",
    langLabel: "Забон",
    nasim: "Насим",
    dayMorning: "Саҳар",
    dayAfternoon: "Абед",
    dayNight: "Шаб",
    dayLine: "Ҳозир {part} аст. Осмон ҳамин вақтро нишон медиҳад.",
    core: "Амалҳои асосӣ",
    extra: "Функсияҳои иловагӣ",
    energy: "Энергия",
    mood: "Кайфият",
    quality: "Сифати код",
    coffee: "Сатҳи кофе",
    project: "Лоиҳа",
    skin: "Ранги худи",
    ach: "Дастовардҳо",
    name: "Ном",
    sound: "Садо",
    lofi: "Насим",
    logClear: "Логро тоза",
    reset: "Аз нав",
    keys: "C кофе · K код · B баг · S хоб · P силам · D деплой · H шикор · F фокус · X хаос",
    actBook: "Китоб",
    actBookSub: "мехонад",
    actTune: "Наво",
    actTuneSub: "оҳанг",
    actDraw: "Расм",
    actDrawSub: "эскиз",
    actWave: "Салом",
    actWaveSub: "бо даст",
    actDance: "Рақс",
    actDanceSub: "меҷунбад",
    actJump: "Ҷаҳиш",
    actJumpSub: "боло",
    actClap: "Чапак",
    actClapSub: "ду даст",
    actFood: "Хӯрок",
    actFoodSub: "қувват",
    actChaos: "Хаос",
    actChaosSub: "форс-пуш",
    chaosWord: "ХАОС",
    shellPh: "help, coffee, git status, sudo...",
    shellHelp: "Фармонҳо: coffee, code, bug, sleep, food, chaos, pet, book, git status, whoami, ls, neofetch, sudo",
    shellUnknown: "Чунин фармон нест. help нависед.",
    shellWho: "{name} · {hero} · Lv.{n}",
    shellStatus: "energy {e} · mood {m} · quality {q} · coffee {c} · v{v}.{p}",
    shellLs: "index.html   style.css   app.js   coffee/   bugs/   heart.txt",
    shellNeo: "{name} @ IDE   релиз v{v}.{p}   худи рангин   кофе дар хун",
    shellSudo: "sudo? Ман реша нестам. Ман Зарра ҳастам.",
    shellRm: "rm -rf? Не! Лоиҳаро намехӯрам.",
    shellClear: "Терминал тоза шуд.",
    shellLampOn: "Лампа фурузон шуд.",
    shellLampOff: "Лампа хомӯш шуд. Шаҳр хоб рафт.",
    log_shell: "{text}",
    coins: "танга",
    questTitle: "Миссияи имрӯз",
    questFood: "Хӯрок",
    questPlay: "Бозӣ",
    questBug: "Баг",
    questReady: "Миссия тайёр",
    questReward: "Миссия тайёр! +{c} танга ва XP",
    shopTitle: "Дӯкон",
    wearTitle: "Либос",
    chatPh: "Салом, Чӣ ҳол дорӣ?, Код навис",
    chestTitle: "Қуттии махфӣ",
    chestOk: "Гирифтан",
    chestProgress: "Қуттии махфӣ {n}/5",
    chestHat: "Кулоҳи нав: {name}",
    chestColor: "Ранги нави худи",
    chestCoffee: "Як пиёла кофеи гарм",
    chestFx: "Эффекти махсус: {name}",
    buyNeed: "Танга кам аст.",
    bought: "Харид шуд: {name}",
    restDone: "Истироҳат тамом. Энергия пур ва кайфият хеле баланд аст.",
    item_food: "Хӯрок",
    item_coffee: "Кофе",
    item_beanie: "Кулоҳ",
    item_cap: "Кепка",
    item_phones: "Гӯшмонак",
    item_dev: "DEV",
    item_neon: "Неон",
    item_spark: "Шарора",
    item_glasses: "Айнак",
    log_rest: "истироҳат · энергия ва кайфият барқарор",
    log_quest: "миссия · +{c} танга",
    log_chest: "{text}",
    show: "Намоиш",
    actGlitch: "Глитч",
    actGlitchSub: "воқеият",
    actClones: "Клонҳо",
    actClonesSub: "артиш",
    actScan: "Скан",
    actStorm: "Тӯфон",
    actStormSub: "коди сабз",
    actBoss: "Босс",
    actBossSub: "баги азим",
    actTime: "Вақт",
    actTimeSub: "таърих",
    timeTitle: "Мошини вақт",
    timeNote: "Ин таърихи сабтшуда аст. Соати воқеӣ тағйир намеёбад.",
    timeNow: "Имрӯз",
    timeYday: "Як рӯз пеш",
    timeEmpty: "Дирӯз ҳанӯз сабт нашудааст.",
    timeEnergy: "Энергия",
    timeXp: "XP",
    timeActs: "Амалҳо",
    scanLevel: "Сатҳ",
    scanMissions: "Миссияҳои анҷомшуда",
    scanStyle: "Услуби бозӣ",
    styleCode: "Созандаи код",
    styleBug: "Шикорчии баг",
    styleCoffee: "Устоди кофе",
    styleMix: "Муттавозин",
    mut_laser: "Чашмони лазерӣ",
    mut_wings: "Болҳои неонӣ",
    mut_armor: "Зиреҳи киберӣ",
    mut_aura: "Аураи барқӣ",
    mut_common: "Common",
    mut_rare: "Rare",
    mut_epic: "Epic",
    mut_legendary: "Legendary",
    bossWin: "Босс афтод!",
    bossLose: "Энергия кам шуд. Босс гурехт.",
    bossPrize: "Ҷоиза: аураи барқӣ.",
    lampOn: "Свет хомӯш",
    lampOff: "Свет фурӯзон",
    hero: "Қаҳрамон",
    heroCat: "Зарра",
    heroRobot: "Робот",
    heroFox: "Рӯбоҳ",
    heroBear: "Хирс",
    heroBird: "Парранда",
    allColors: "Ҳамаи ранг",
    party: "Зарра ба сатҳи 100 расид!",
    wxClear: "Ором",
    wxRain: "Борон",
    wxSnow: "Барф",
    wxHot: "Гарм",
    wxCold: "Хунук",
    actKeys: "Нишаст",
    actKeysSub: "клавиатура",
    actDuck: "Дак",
    actDuckSub: "дебаг",
    actCoffee: "Кофе",
    actCoffeeSub: "+энергия",
    actCode: "Код",
    actCodeSub: "+лоиҳа",
    actBug: "Баг",
    actBugSub: "+кайфият",
    actSleep: "Хоб",
    actSleepSub: "барқарор",
    actWake: "Бедор",
    actWakeSub: "хестан",
    actPet: "Силам",
    actPetSub: "хур-хур",
    actDeploy: "Деплой",
    actDeploySub: "релиз",
    actHunt: "Шикор",
    actHuntSub: "мини-бозӣ",
    actFocus: "Фокус",
    actFocusSub: "кории амиқ",
    deployHint: "Барои деплой: лоиҳа ≥ 70 ва сифат ≥ 45",
    deployReady: "Релиз мумкин аст",
    mood_happy: "хурсанд",
    mood_tired: "хаста",
    mood_angry: "асабӣ",
    mood_sleepy: "хоболуд",
    mood_hungry: "гурусна",
    mood_flow: "дар ҷараён",
    ms_idea: "марҳила: ғоя",
    ms_proto: "марҳила: прототип",
    ms_feat: "марҳила: имкониятҳо",
    ms_polish: "марҳила: сайқал",
    ms_ready: "марҳила: омодаи релиз",
    block_sleeping: "Аввал Зарраро бедор кунед.",
    block_hunting: "Шикор ҳанӯз давом дорад.",
    block_low: "Энергия кам аст. Кофе ё хоб лозим.",
    block_deployProject: "Лоиҳа ҳанӯз ба 70% нарасидааст.",
    block_deployQuality: "Сифати код барои релиз нарасидааст.",
    block_crashed: "Аввал рестарт кунед.",
    block_focusing: "Фокус аллакай фаъол аст.",
    levelUp: "Сатҳи нав",
    levelUpBody: "Зарра ба сатҳи {n} расид.",
    rebootTitle: "Система афтид",
    rebootText: "Энергия, кофе ва кайфият якбора тамом шуд. Рестарт Зарраро ба мизи кор бармегардонад.",
    rebootOk: "Рестарт",
    resetTitle: "Аз нав оғоз?",
    resetText: "Пешрафт, дастовардҳо ва ном тоза мешаванд.",
    resetOk: "Тоза кардан",
    cancel: "Бекор",
    comboBody: "Занҷираи амалҳо зинда аст.",
    huntWord: "Шикор",
    ach_coffee: "Аввалин кофе",
    ach_coder: "Даҳ коммит",
    ach_flow: "Ҷараёни пурра",
    ach_ship: "Аввалин релиз",
    ach_hunter: "Шикорчӣ",
    ach_loyal: "Ду дақиқа",
    ach_named: "Номи худ",
    ach_perfect: "Ҳама дар ҷояш",
    achd_coffee: "Як маротиба кофе диҳед",
    achd_coder: "10 маротиба код нависед",
    achd_flow: "Ҳамаи нишондиҳандаҳо баланд бошанд",
    achd_ship: "Лоиҳаро деплой кунед",
    achd_hunter: "Дар шикор 15 баг гиред",
    ach_duck: "Дак-устод",
    achd_loyal: "2 дақиқа бо Зарра бошед",
    achd_named: "Ба Зарра номи нав диҳед",
    achd_duck: "3 маротиба ба дак фаҳмонед",
    achd_perfect: "Энергия, кайфият, сифат ва кофе аз 80 боло",
    log_boot: "MURRA OS омода аст.",
    log_coffee: "кофе +{c} · энергия +{e}",
    log_code: "код: лоиҳа +{p} · энергия −{e}",
    log_bug: "баг ислоҳ шуд · сифат +{q}",
    log_sleep: "режими хоб фаъол шуд",
    log_wake: "Зарра бедор шуд",
    log_duck: "дак-дебаг · сифат +{q}",
    log_pet: "силам · кайфият +{m}",
    log_deploy: "релиз v{v} баромад",
    log_hunt: "шикор: {n} баг дошта шуд",
    log_focus: "фокус барои {n} сония",
    log_focusEnd: "фокус тамом · лоиҳа +{n}",
    log_standup: "стендап беохир буд",
    log_pizza: "питсаи ройгон расид",
    log_prod: "продакшн ларзид",
    log_idea: "илҳом омад",
    log_away: "шумо {sec} сония набудед",
    log_reboot: "система аз нав бархост",
    log_reset: "ҳама чиз аз нав шуд",
    log_name: "номи нав: {name}",
    log_keys: "болои клавиатура нишаст · сифат −{q}",
    log_book: "китоб хонд · сифат +{q}",
    log_tune: "наво хонд · кайфият +{m}",
    log_draw: "расм кашид · кайфият +{m}",
    log_food: "хӯрок · энергия +{e}",
    log_chaos: "хаос · кайфият +{m}",
    log_clear: "лог тоза шуд",
    speech: {
      hello: ["Салом. Ман Зарра ҳастам.", "Аввал кофе, баъд код."],
      duck: ["Ба дак фаҳмондам. Ӯ фаҳмид.", "Кряк — ин тасдиқи код аст."],
      happy: ["Имрӯз код нарм меравад.", "Думро бубин. Ин ревюи мусбат аст.", "Агар хоҳӣ, боз як функсия менависам."],
      tired: ["Чашмонам ду то шуданд.", "Энергия мисли батареяи кӯҳна аст.", "Як хоби кӯтоҳ ва боз commit."],
      angry: ["Ин баг худро қаҳрамон ҳис мекунад.", "Бе кофе ман танҳо хато менависам.", "Кайфият паст аст. Силам ҳам даво аст."],
      sleepy: ["ззз... консол хомӯш аст.", "Маро наҷунбон, ман дар хоб деплой мекунам."],
      hungry: ["Ҷом холӣ аст.", "Кофе на архитектура, аммо бе вай архитектура ҳам нест."],
      flow: ["Ҳама чиз дар ҷояш аст.", "Ман дар ҷараёнам. Клавиатура худ менависад.", "Ин ҳамон шабест, ки барои релиз аст."],
      coffee: ["Ооо, кофе! ☕ Акнун кодро 1000 маротиба тезтар менависам!"],
      food: ["Ммм, хӯрок! Акнун қувват дорам ва ба дарс менишинам!"],
      chaos: ["ХАОС! Ман форс-пуш кардам ва ҷаҳон чаппа шуд!", "NULL NULL NULL... ва боз як коммит!"],
      keys: ["Ман шоҳи тугмаҳо ҳастам.", "asdfjkl... ин ҳам як навъ код аст."],
      code: ["Ин функция худро хуб ҳис мекунад.", "Боз як порчаи шаб ба лоиҳа часпид."],
      bug: ["Як баг аз мизи кор парида рафт.", "Сват! Сифат боло рафт."],
      sleep: ["Ман ба ҷои хобам меравам.", "Болиштро гарм кун. Ман дам мегирам."],
      wake: ["Салом, ҷаҳон. Боз навиштан мумкин."],
      pet: ["Хур-хур-хур.", "Дум имзо гузошт: тасдиқ."],
      deploy: ["Релиз баромад. Шаҳр равшан шуд.", "Истеъмолкунандагон хурсанданд. Ман ҳам."],
      hunt: ["Багҳо гурехтанд. Тирро ба онҳо парто."],
      book: ["Як саҳифа. Ҳатто багҳо хомӯш шуданд."],
      tune: ["Навои ором. Дум ҳам мерақсад."],
      draw: ["Эскизи хурд дар канори код."],
      wave: ["Салом! Дастамро бубин.", "Салом, дӯсти ман!"],
      dance: ["Рақс! Дум ҳам ҳамроҳ аст.", "Як-ду, як-ду, код ҳам мерақсад."],
      jump: ["Ҳоп! Ба осмон як ҷаҳиш.", "Ҷаҳидам. Энергия парвоз кард."],
      clap: ["Чапак барои коди хуб!", "Ду даст якҷоя. Офарин!"],
      huntEnd: ["Шикор тамом. {n} баг дошта шуд."],
      focus: ["Хомӯш. Фақат код.", "Фокус фаъол аст. Дум ҳам ором шуд."],
      focusEnd: ["Фокус тамом шуд. Лоиҳа калонтар аст."],
      standup: ["Стендап боз дароз шуд. Кайфият паст рафт."],
      pizza: ["Питса! Кофе ҳам ҳамроҳаш омад."],
      prod: ["Продакшн сурх шуд. Багҳоро ислоҳ кун."],
      idea: ["Як идеяи тоза омад. Навшташ лозим."],
      away: ["Ту куҷо будӣ? Ман интизор шудам."],
      reboot: ["Аз нав бархестам. Ин дафъа бе crash."],
    },
  },
  ru: {
    sub: "Концепт: Зарра, кот-кодер внутри живой IDE",
    boot: "Зарра прогревает клавиатуру...",
    inspector: "Инспектор",
    terminal: "Терминал",
    tabScene: "Сцена",
    tabStats: "Пульс",
    tabTerm: "Журнал",
    tabSky: "Небо",
    settings: "Настройки",
    langLabel: "Язык",
    nasim: "Насим",
    dayMorning: "Утро",
    dayAfternoon: "День",
    dayNight: "Ночь",
    dayLine: "Сейчас {part}. Небо показывает это время.",
    core: "Основные действия",
    extra: "Дополнительные функции",
    energy: "Энергия",
    mood: "Настроение",
    quality: "Качество кода",
    coffee: "Уровень кофе",
    project: "Проект",
    skin: "Цвет худи",
    ach: "Достижения",
    name: "Имя",
    sound: "Звук",
    lofi: "Насим",
    logClear: "Очистить лог",
    reset: "Сброс",
    keys: "C кофе · K код · B баги · S сон · P гладить · D деплой · H охота · F фокус · X хаос",
    actBook: "Книга",
    actBookSub: "читает",
    actTune: "Напев",
    actTuneSub: "мелодия",
    actDraw: "Рисунок",
    actWave: "Привет",
    actWaveSub: "лапой",
    actDance: "Танец",
    actDanceSub: "двигается",
    actJump: "Прыжок",
    actJumpSub: "вверх",
    actClap: "Хлопок",
    actClapSub: "две лапы",
    actDrawSub: "эскиз",
    actFood: "Еда",
    actFoodSub: "сила",
    actChaos: "Хаос",
    actChaosSub: "форс-пуш",
    chaosWord: "ХАОС",
    shellPh: "help, coffee, git status, sudo...",
    shellHelp: "Команды: coffee, code, bug, sleep, food, chaos, pet, book, git status, whoami, ls, neofetch, sudo",
    shellUnknown: "Нет такой команды. Напиши help.",
    shellWho: "{name} · {hero} · Lv.{n}",
    shellStatus: "energy {e} · mood {m} · quality {q} · coffee {c} · v{v}.{p}",
    shellLs: "index.html   style.css   app.js   coffee/   bugs/   heart.txt",
    shellNeo: "{name} @ IDE   релиз v{v}.{p}   худи цветное   кофе в крови",
    shellSudo: "sudo? Я не root. Я Зарра.",
    shellRm: "rm -rf? Нет! Проект я не съем.",
    shellClear: "Терминал чист.",
    shellLampOn: "Лампа включилась.",
    shellLampOff: "Лампа погасла. Город уснул.",
    log_shell: "{text}",
    coins: "монеты",
    questTitle: "Миссия дня",
    questFood: "Еда",
    questPlay: "Игра",
    questBug: "Баг",
    questReady: "Миссия готова",
    questReward: "Миссия готова! +{c} монет и XP",
    shopTitle: "Лавка",
    wearTitle: "Одежда",
    chatPh: "Привет, Как дела?, Напиши код",
    chestTitle: "Тайная коробка",
    chestOk: "Забрать",
    chestProgress: "Тайная коробка {n}/5",
    chestHat: "Новая шапка: {name}",
    chestColor: "Новый цвет худи",
    chestCoffee: "Горячий кофе",
    chestFx: "Особый эффект: {name}",
    buyNeed: "Мало монет.",
    bought: "Куплено: {name}",
    restDone: "Отдых кончился. Энергия полная и настроение отличное.",
    item_food: "Еда",
    item_coffee: "Кофе",
    item_beanie: "Шапка",
    item_cap: "Кепка",
    item_phones: "Наушники",
    item_dev: "DEV",
    item_neon: "Неон",
    item_spark: "Искры",
    item_glasses: "Очки",
    log_rest: "отдых · энергия и настроение вернулись",
    log_quest: "миссия · +{c} монет",
    log_chest: "{text}",
    show: "Шоу",
    actGlitch: "Глитч",
    actGlitchSub: "реальность",
    actClones: "Клоны",
    actClonesSub: "армия",
    actScan: "Скан",
    actStorm: "Шторм",
    actStormSub: "зелёный код",
    actBoss: "Босс",
    actBossSub: "гигантский баг",
    actTime: "Время",
    actTimeSub: "история",
    timeTitle: "Машина времени",
    timeNote: "Это записанная история. Реальные часы не меняются.",
    timeNow: "Сегодня",
    timeYday: "День назад",
    timeEmpty: "Вчера ещё не записано.",
    timeEnergy: "Энергия",
    timeXp: "XP",
    timeActs: "Действия",
    scanLevel: "Уровень",
    scanMissions: "Миссии выполнены",
    scanStyle: "Стиль игры",
    styleCode: "Автор кода",
    styleBug: "Охотник на баги",
    styleCoffee: "Мастер кофе",
    styleMix: "Ровный",
    mut_laser: "Лазерные глаза",
    mut_wings: "Неоновые крылья",
    mut_armor: "Киберброня",
    mut_aura: "Электрическая аура",
    mut_common: "Common",
    mut_rare: "Rare",
    mut_epic: "Epic",
    mut_legendary: "Legendary",
    bossWin: "Босс пал!",
    bossLose: "Энергии мало. Босс сбежал.",
    bossPrize: "Приз: электрическая аура.",
    lampOn: "Свет выкл",
    lampOff: "Свет вкл",
    hero: "Герой",
    heroCat: "Зарра",
    heroRobot: "Робот",
    heroFox: "Лиса",
    heroBear: "Медведь",
    heroBird: "Птица",
    allColors: "Любой цвет",
    party: "Зарра дошла до уровня 100!",
    wxClear: "Тихо",
    wxRain: "Дождь",
    wxSnow: "Снег",
    wxHot: "Жарко",
    wxCold: "Холод",
    actKeys: "Сел",
    actKeysSub: "клавиатура",
    actDuck: "Утка",
    actDuckSub: "дебаг",
    actCoffee: "Кофе",
    actCoffeeSub: "+энергия",
    actCode: "Код",
    actCodeSub: "+проект",
    actBug: "Баг",
    actBugSub: "+настроение",
    actSleep: "Сон",
    actSleepSub: "восстановить",
    actWake: "Подъём",
    actWakeSub: "разбудить",
    actPet: "Гладить",
    actPetSub: "мур-мур",
    actDeploy: "Деплой",
    actDeploySub: "релиз",
    actHunt: "Охота",
    actHuntSub: "мини-игра",
    actFocus: "Фокус",
    actFocusSub: "глубокая работа",
    deployHint: "Для деплоя: проект ≥ 70 и качество ≥ 45",
    deployReady: "Релиз можно выпускать",
    mood_happy: "доволен",
    mood_tired: "устал",
    mood_angry: "злой",
    mood_sleepy: "спит",
    mood_hungry: "голоден",
    mood_flow: "в потоке",
    ms_idea: "этап: идея",
    ms_proto: "этап: прототип",
    ms_feat: "этап: функции",
    ms_polish: "этап: полировка",
    ms_ready: "этап: готов к релизу",
    block_sleeping: "Сначала разбуди Мурру.",
    block_hunting: "Охота ещё идёт.",
    block_low: "Мало энергии. Нужны кофе или сон.",
    block_deployProject: "Проект ещё не дошёл до 70%.",
    block_deployQuality: "Качества кода не хватает для релиза.",
    block_crashed: "Сначала сделай рестарт.",
    block_focusing: "Фокус уже включён.",
    levelUp: "Новый уровень",
    levelUpBody: "Зарра добралась до уровня {n}.",
    rebootTitle: "Система упала",
    rebootText: "Энергия, кофе и настроение закончились разом. Рестарт вернёт Мурру за стол.",
    rebootOk: "Рестарт",
    resetTitle: "Начать заново?",
    resetText: "Прогресс, достижения и имя будут стёрты.",
    resetOk: "Стереть",
    cancel: "Отмена",
    comboBody: "Цепочка действий жива.",
    huntWord: "Охота",
    ach_coffee: "Первый кофе",
    ach_coder: "Десять коммитов",
    ach_flow: "Полный поток",
    ach_ship: "Первый релиз",
    ach_hunter: "Охотник",
    ach_loyal: "Две минуты",
    ach_named: "Своё имя",
    ach_perfect: "Всё на местах",
    achd_coffee: "Дай кофе хотя бы раз",
    achd_coder: "Напиши код 10 раз",
    achd_flow: "Подними все показатели высоко",
    achd_ship: "Задеплой проект",
    achd_hunter: "Поймай 15 багов на охоте",
    ach_duck: "Утка-наставник",
    achd_loyal: "Побудь с Муррой 2 минуты",
    achd_named: "Дай Мурре новое имя",
    achd_duck: "Трижды объясни код утке",
    achd_perfect: "Энергия, настроение, качество и кофе выше 80",
    log_boot: "MURRA OS готов.",
    log_coffee: "кофе +{c} · энергия +{e}",
    log_code: "код: проект +{p} · энергия −{e}",
    log_bug: "баг исправлен · качество +{q}",
    log_sleep: "режим сна включён",
    log_wake: "Зарра проснулась",
    log_duck: "утка-дебаг · качество +{q}",
    log_pet: "ласка · настроение +{m}",
    log_deploy: "вышел релиз v{v}",
    log_hunt: "охота: поймано {n}",
    log_focus: "фокус на {n} секунд",
    log_focusEnd: "фокус кончился · проект +{n}",
    log_standup: "стендап затянулся",
    log_pizza: "приехала бесплатная пицца",
    log_prod: "прод задрожал",
    log_idea: "пришло вдохновение",
    log_away: "тебя не было {sec} секунд",
    log_reboot: "система поднялась снова",
    log_reset: "всё начато заново",
    log_name: "новое имя: {name}",
    log_keys: "села на клавиатуру · качество −{q}",
    log_book: "читала книгу · качество +{q}",
    log_tune: "напела мелодию · настроение +{m}",
    log_draw: "нарисовала эскиз · настроение +{m}",
    log_chaos: "хаос · настроение +{m}",
    log_clear: "лог очищен",
    speech: {
      hello: ["Привет. Я Зарра.", "Сначала кофе, потом код."],
      duck: ["Объяснила баг утке. Утка поняла.", "Кряк — это апрув."],
      happy: ["Сегодня код идёт мягко.", "Смотри на хвост. Это одобренный ревью.", "Если хочешь, допишу ещё одну функцию."],
      tired: ["Глаза стали двойными.", "Энергия как старая батарея.", "Короткий сон и снова commit."],
      angry: ["Этот баг считает себя героем.", "Без кофе я пишу только ошибки.", "Настроение на нуле. Погладь, это тоже фикс."],
      sleepy: ["ззз... консоль выключена.", "Не трогай, я деплою во сне."],
      hungry: ["Чашка пустая.", "Кофе не архитектура, но без него архитектуры тоже нет."],
      flow: ["Всё стоит на своих местах.", "Я в потоке. Клавиатура пишет сама.", "Это та ночь, когда выпускают релиз."],
      coffee: ["Ооо, кофе! Теперь код пишется в тысячу раз быстрее!"],
      food: ["Ммм, еда! Силы вернулись, сажусь учиться."],
      chaos: ["ХАОС! Я сделала force push, и мир перевернулся!", "NULL NULL NULL... и ещё один коммит!"],
      keys: ["Я села на клавиатуру. Это мой трон.", "asdfjkl... тоже код, если прищуриться."],
      code: ["Этой функции хорошо на своём месте.", "Ещё кусок ночи прилип к проекту."],
      bug: ["Один баг улетел со стола.", "Хлоп! Качество выросло."],
      sleep: ["Иду в свою лежанку.", "Подушку не трогай. Я сплю."],
      wake: ["Привет, мир. Снова можно писать."],
      pet: ["Мур-мур-мур.", "Хвост подписал: одобрено."],
      deploy: ["Релиз вышел. Город зажёгся.", "Пользователи довольны. Я тоже."],
      hunt: ["Баги разбежались. Стреляй по ним."],
      book: ["Одна страница. Даже баги затихли."],
      tune: ["Тихая мелодия. Хвост тоже танцует."],
      draw: ["Маленький эскиз рядом с кодом."],
      wave: ["Привет! Смотри, я машу лапой.", "Привет, друг!"],
      dance: ["Танец! Хвост тоже в деле.", "Раз-два, код тоже танцует."],
      jump: ["Прыг! Один прыжок к небу.", "Прыгнула. Энергия полетела."],
      clap: ["Хлоп за хороший код!", "Две лапы вместе. Молодец!"],
      huntEnd: ["Охота кончилась. Поймано: {n}."],
      focus: ["Тишина. Только код.", "Фокус включён. Даже хвост замер."],
      focusEnd: ["Фокус кончился. Проект стал больше."],
      standup: ["Стендап снова затянулся. Настроение просело."],
      pizza: ["Пицца! И кофе к ней тоже."],
      prod: ["Прод покраснел. Почини баги."],
      idea: ["Пришла чистая идея. Её надо записать."],
      away: ["Ты где был? Я ждал."],
      reboot: ["Поднялся заново. В этот раз без падения."],
    },
  },
};

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel) => document.querySelector(sel);

const stage = $("#stage");
const parallax = $("#parallax");
const speech = $("#speech");
const moodPill = $("#mood-pill");
const lcd = $("#lcd");
const logEl = $("#log");
const nameInput = $("#pet-name");
const canvas = $("#fx");
const ctx = canvas.getContext("2d");
const huntLayer = $("#hunt");
const huntHud = $("#hunt-hud");
const app = $("#app");

let audioCtx = null;
let lofi = null;
let sayTimer = 0;
let actionTimer = 0;
let flareTimer = 0;
let chaosTimer = 0;
let huntTimer = 0;
let huntSpawn = 0;
let huntCaught = 0;
let particles = [];
let seeded = false;
let viewW = 0;
let viewH = 0;
let modalOnOk = null;

function defaultState() {
  return {
    name: "Нурик",
    lang: "tg",
    skin: "magenta",
    sound: true,
    lofi: false,
    energy: 70,
    mood: 66,
    quality: 64,
    coffee: 58,
    project: 22,
    version: 1,
    xp: 0,
    combo: 0,
    comboAt: 0,
    mode: "idle",
    action: "idle",
    dayLock: null,
    weather: "",
    cup: "mug",
    hero: "cat",
    codeText: "",
    party100: false,
    lampOff: false,
    coins: 0,
    hour: null,
    clockN: 0,
    autoSleep: false,
    sleepLeft: 0,
    questDay: "",
    quest: { food: 0, play: 0, bug: 0, done: false },
    chestActs: [],
    look: { hat: "none", glasses: true, phones: false, dev: false, effect: "none" },
    owned: { beanie: false, cap: false, phones: false, dev: false, neon: false, spark: false },
    focusLeft: 0,
    focusProject: 0,
    petLock: 0,
    crashed: false,
    named: false,
    sawFlow: false,
    playMs: 0,
    eventIn: 32,
    savedAt: Date.now(),
    stats: { coffee: 0, code: 0, bugs: 0, deploys: 0, pets: 0, huntCaught: 0, ducks: 0, sits: 0 },
    coffeeBurst: 0,
    godLeft: 0,
    glitched: false,
    world: "",
    mutation: "",
    mutationRarity: "",
    questsDone: 0,
    bossWins: 0,
    bossPrize: false,
    history: [],
    lastAct: "",
    achievements: [],
    log: [],
  };
}

let state = defaultState();

function clamp(n) {
  return Math.max(0, Math.min(100, n));
}

function t(key) {
  const order = [COPY[state.lang], COPY.en, COPY.tg];
  for (const pack of order) {
    if (pack && typeof pack[key] === "string") return pack[key];
  }
  return key;
}

function format(str, vars) {
  return String(str).replace(/\{(\w+)\}/g, (_, k) => (vars && vars[k] != null ? vars[k] : ""));
}

function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function cleanName(value) {
  const name = String(value || "").replace(/[<>"'\\]/g, "").trim().slice(0, 16);
  return name || "Нурик";
}

function levelOf(xp) {
  return 1 + Math.floor(xp / 40);
}

function moodKey() {
  if (state.mode === "sleep") return "sleepy";
  if (dayPart() === "night" && state.energy < 55) return "sleepy";
  if (state.energy > 68 && state.mood > 68 && state.quality > 68 && state.coffee > 55) return "flow";
  if (state.mood < 28) return "angry";
  if (state.coffee < 18) return "hungry";
  if (state.energy < 30) return "tired";
  return "happy";
}

function line(group, vars) {
  const order = [state.lang, "en", "tg"];
  let pack = null;
  for (const code of order) {
    const speech = COPY[code] && COPY[code].speech;
    if (speech && speech[group] && speech[group].length) {
      pack = speech[group];
      break;
    }
  }
  const text = (pack || [""])[Math.floor(Math.random() * (pack || [""]).length)];
  return format(text, vars);
}

function gameHour() {
  if (state.dayLock === "morning") return 9;
  if (state.dayLock === "afternoon") return 15;
  if (state.dayLock === "night") return 22;
  if (typeof state.hour === "number") return state.hour;
  return new Date().getHours();
}

function dayPart() {
  if (state.mode === "sleep" && !state.autoSleep) return "night";
  if (state.dayLock) return state.dayLock;
  const hour = gameHour();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  return "night";
}

function dayLabel() {
  const part = dayPart();
  const name = part === "morning" ? t("dayMorning") : part === "afternoon" ? t("dayAfternoon") : t("dayNight");
  const hour = String(gameHour()).padStart(2, "0");
  return name + " · " + hour + ":00";
}

function say(text) {
  speech.textContent = text;
  speech.classList.remove("pop");
  void speech.offsetWidth;
  speech.classList.add("pop");
  clearTimeout(sayTimer);
  sayTimer = setTimeout(() => {
    if (state.mode === "sleep" || state.godLeft > 0) return;
    speech.textContent = line(moodKey());
  }, 4300);
}

function runShell(raw) {
  const text = String(raw || "").trim();
  if (!text) return;
  const cmd = text.toLowerCase().replace(/\s+/g, " ");
  if (cmd !== "clear") pushLog("shell", { text: "$ " + text });
  const acts = {
    coffee: "coffee", кофе: "coffee",
    code: "code", код: "code",
    bug: "bug", баг: "bug",
    sleep: "sleep", хоб: "sleep",
    food: "food", хӯрок: "food", eat: "food",
    chaos: "chaos", хаос: "chaos",
    pet: "pet", силам: "pet",
    book: "book", китоб: "book",
    tune: "tune", наво: "tune",
    draw: "draw", расм: "draw",
    wave: "wave", салом: "wave",
    dance: "dance", рақс: "dance",
    jump: "jump", ҷаҳиш: "jump",
    clap: "clap", чапак: "clap",
    duck: "duck", дак: "duck",
    hunt: "hunt", шикор: "hunt",
    focus: "focus", фокус: "focus",
    deploy: "deploy", ship: "deploy",
  };
  if (acts[cmd]) {
    ACTIONS[acts[cmd]]();
    render();
    save();
    return;
  }
  const heroes = { cat: "heroCat", robot: "heroRobot", fox: "heroFox", bear: "heroBear", bird: "heroBird" };
  if (cmd === "help" || cmd === "ёрдам") say(t("shellHelp"));
  else if (cmd === "whoami") {
    say(format(t("shellWho"), {
      name: state.name || BRAND,
      hero: t(heroes[state.hero] || "heroCat"),
      n: levelOf(state.xp),
    }));
  } else if (cmd === "git status" || cmd === "status") {
    say(format(t("shellStatus"), {
      e: Math.round(state.energy),
      m: Math.round(state.mood),
      q: Math.round(state.quality),
      c: Math.round(state.coffee),
      v: state.version,
      p: Math.round(state.project),
    }));
  } else if (cmd === "git push" || cmd === "git push --force" || cmd === "push") doChaos();
  else if (cmd === "ls") say(t("shellLs"));
  else if (cmd === "neofetch" || cmd === "zarra") {
    say(format(t("shellNeo"), { name: state.name || BRAND, v: state.version, p: Math.round(state.project) }));
  } else if (cmd.indexOf("sudo") === 0) {
    glitch();
    apply({ mood: -3 });
    punch("bug");
    say(t("shellSudo"));
  } else if (cmd.indexOf("rm") === 0) {
    stage.classList.add("shake");
    setTimeout(() => stage.classList.remove("shake"), 280);
    say(t("shellRm"));
  } else if (cmd === "clear") {
    state.log = [{ id: "shell", vars: { text: t("shellClear") }, time: Date.now() }];
    say(t("shellClear"));
  } else if (cmd === "lamp" || cmd === "лампа" || cmd === "свет") {
    state.lampOff = !state.lampOff;
    tone(state.lampOff ? 150 : 480, 0.12, "sine", 0.04);
    say(state.lampOff ? t("shellLampOff") : t("shellLampOn"));
  } else if (cmd === "hello" || cmd === "салом" || cmd === "hi") say(line("hello"));
  else say(t("shellUnknown"));
  render();
  save();
}

function pushLog(id, vars) {
  state.log.push({ id, vars: vars || {}, time: Date.now() });
  if (state.log.length > 16) state.log.shift();
}

function toast(title, body) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<b>${esc(title)}</b><span>${esc(body || "")}</span>`;
  const box = $("#toasts");
  box.appendChild(el);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => el.remove(), 3200);
}

function floatDelta(key, delta) {
  if (!delta) return;
  const meter = document.querySelector(`.meter[data-key="${key}"]`);
  if (!meter) return;
  const el = document.createElement("em");
  const rounded = Math.round(delta);
  el.className = "delta " + (rounded > 0 ? "up" : "down");
  el.textContent = (rounded > 0 ? "+" : "") + rounded;
  meter.appendChild(el);
  setTimeout(() => el.remove(), 700);
}

function apply(partials, silent) {
  Object.entries(partials).forEach(([key, delta]) => {
    if (typeof state[key] !== "number") return;
    state[key] = clamp(state[key] + delta);
    if (!silent && key !== "project") floatDelta(key, delta);
  });
}

function addXp(amount) {
  const before = levelOf(state.xp);
  state.xp += amount;
  const after = levelOf(state.xp);
    if (after > before) {
    toast(t("levelUp"), format(t("levelUpBody"), { n: after }));
    arpeggio();
    maybeMutate();
  }
  if (after >= 100 && !state.party100) {
    state.party100 = true;
    const party = $("#party");
    if (party) {
      party.hidden = false;
      burstCenter(["#ff4ecd", "#ffe7a8", "#5ef2ff", "#fff", "#c6ff4a"], 64, "dot");
      arpeggio();
      setTimeout(() => { party.hidden = true; }, 4600);
    }
  }
}

function hoodieColor() {
  if (typeof state.skin === "string" && state.skin.charAt(0) === "#") return state.skin;
  return SKINS[state.skin] || SKINS.magenta;
}

function bumpCombo() {
  const now = Date.now();
  state.combo = now - state.comboAt < 4000 ? state.combo + 1 : 1;
  state.comboAt = now;
  addXp(Math.min(12, Math.max(0, state.combo - 1) * 2));
  if (state.combo === 3 || state.combo === 5 || state.combo === 8) {
    toast("x" + state.combo, t("comboBody"));
  }
}

function actx() {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tone(freq, dur, type, gain, slide) {
  if (!state.sound) return;
  try {
    const c = actx();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, c.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, slide), c.currentTime + dur);
    g.gain.setValueAtTime(gain || 0.04, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    o.connect(g);
    g.connect(c.destination);
    o.start();
    o.stop(c.currentTime + dur + 0.02);
  } catch (e) {}
}

function noise(dur, gain) {
  if (!state.sound) return;
  try {
    const c = actx();
    const n = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, n, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i += 1) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filter = c.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 900;
    const g = c.createGain();
    g.gain.setValueAtTime(gain, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(c.destination);
    src.start();
  } catch (e) {}
}

function arpeggio() {
  [523, 659, 784, 1046].forEach((freq, i) => {
    setTimeout(() => tone(freq, 0.12, "triangle", 0.035), i * 90);
  });
}

function setLofi(on) {
  if (lofi) {
    try { lofi.stop(); } catch (e) {}
    lofi = null;
  }
  state.lofi = on;
  if (!on) return;
  state.sound = true;
  try {
    const c = actx();
    const a = c.createOscillator();
    const b = c.createOscillator();
    const filter = c.createBiquadFilter();
    const g = c.createGain();
    a.type = "sine";
    b.type = "sine";
    a.frequency.value = 82;
    b.frequency.value = 123.5;
    filter.type = "lowpass";
    filter.frequency.value = 220;
    g.gain.value = 0.007;
    a.connect(filter);
    b.connect(filter);
    filter.connect(g);
    g.connect(c.destination);
    a.start();
    b.start();
    lofi = {
      a,
      stop() { a.stop(); b.stop(); },
    };
  } catch (e) {
    state.lofi = false;
  }
}

function setSound(on) {
  state.sound = on;
  if (!on) {
    setLofi(false);
    stopWorld();
  }
}

function burst(x, y, colors, count, kind) {
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.2 + Math.random() * 3;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (kind === "heart" ? 1.4 : 0.4),
      life: 1,
      decay: 0.016 + Math.random() * 0.02,
      color: colors[i % colors.length],
      size: kind === "bit" ? 3 + Math.random() * 3 : 2 + Math.random() * 3,
      kind: kind || "dot",
    });
  }
}

function burstCenter(colors, count, kind) {
  burst(viewW * 0.5, viewH * 0.42, colors, count, kind);
}

function resizeCanvas() {
  const rect = stage.getBoundingClientRect();
  viewW = rect.width;
  viewH = rect.height;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(viewW * dpr));
  canvas.height = Math.max(1, Math.floor(viewH * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (!seeded && viewW > 0 && !reduced) {
    for (let i = 0; i < 26; i += 1) {
      particles.push({
        x: Math.random() * viewW,
        y: Math.random() * viewH,
        vx: -0.15 + Math.random() * 0.3,
        vy: -0.2 - Math.random() * 0.35,
        life: 1,
        decay: 0,
        color: Math.random() > 0.5 ? "#ff4ecd" : "#5ef2ff",
        size: 1 + Math.random() * 1.7,
        kind: "ambient",
      });
    }
    seeded = true;
  }
}

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, size * 0.3);
  ctx.bezierCurveTo(-size, -size * 0.35, -size * 0.2, -size, 0, -size * 0.35);
  ctx.bezierCurveTo(size * 0.2, -size, size, -size * 0.35, 0, size * 0.3);
  ctx.fill();
  ctx.restore();
}

function paint() {
  ctx.clearRect(0, 0, viewW, viewH);
  if (lofi && state.lofi) {
    const time = performance.now() / 1000;
    lofi.a.frequency.value = 78 + Math.sin(time * 0.07) * 1.6;
  }
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    if (p.kind !== "ambient") p.vy += p.kind === "heart" ? -0.015 : 0.035;
    if (p.decay) p.life -= p.decay;
    if ((p.life <= 0 && p.kind !== "ambient") || p.x < -20 || p.x > viewW + 20) {
      particles.splice(i, 1);
      continue;
    }
    if (p.kind === "ambient" && p.y < -8) {
      p.y = viewH + 4;
      p.x = Math.random() * viewW;
    }
    ctx.globalAlpha = p.kind === "ambient" ? 0.32 : Math.max(p.life, 0);
    ctx.fillStyle = p.color;
    if (p.kind === "heart") drawHeart(p.x, p.y, p.size + 2, p.color);
    else if (p.kind === "bit") ctx.fillRect(p.x, p.y, p.size, p.size * 0.7);
    else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(paint);
}

function setAction(name, ms) {
  state.action = name;
  stage.dataset.action = name;
  clearTimeout(actionTimer);
  if (!ms) return;
  actionTimer = setTimeout(() => {
    if (state.mode === "sleep") return;
    state.action = "idle";
    stage.dataset.action = "idle";
  }, ms);
}

function glitch() {
  stage.classList.add("glitch");
  setTimeout(() => stage.classList.remove("glitch"), 280);
}

const PUNCH = {
  tg: { coffee: "КОФЕ!!!", code: "COMMIT", bug: "СВАТ", sleep: "zZz", wake: "БЕДОР", pet: "ХУР", deploy: "SHIP", hunt: "ПИУ", focus: "FLOW", duck: "КРЯ", keys: "ASDF", book: "READ", tune: "♪♪♪", draw: "SKETCH", food: "НЯМ", chaos: "ХАОС", wave: "САЛОМ", dance: "РАҚС", jump: "ҲОП", clap: "ЧАПАК" },
  ru: { coffee: "КОФЕ!!!", code: "COMMIT", bug: "ХЛОП", sleep: "zZz", wake: "ПОДЪЁМ", pet: "МУР", deploy: "SHIP", hunt: "ПИУ", focus: "FLOW", duck: "КРЯ", keys: "ASDF", book: "ЧИТАЮ", tune: "♪♪♪", draw: "ЭСКИЗ", food: "НЯМ", chaos: "ХАОС", wave: "ПРИВЕТ", dance: "ТАНЕЦ", jump: "ПРЫГ", clap: "ХЛОП" },
  en: { coffee: "COFFEE!!!", code: "COMMIT", bug: "SQUASH", sleep: "zZz", wake: "AWAKE", pet: "PURR", deploy: "SHIP", hunt: "PEW", focus: "FLOW", duck: "QUACK", keys: "ASDF", book: "READ", tune: "♪♪♪", draw: "SKETCH", food: "NOM", chaos: "CHAOS", wave: "HI", dance: "DANCE", jump: "HOP", clap: "CLAP" },
};

function flare(text) {
  const el = $("#flare");
  if (!el) return;
  el.hidden = false;
  el.textContent = text;
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
  stage.classList.add("punch");
  setTimeout(() => stage.classList.remove("punch"), 180);
  clearTimeout(flareTimer);
  flareTimer = setTimeout(() => { el.hidden = true; }, 720);
}

function punch(key) {
  const pack = PUNCH[state.lang] || PUNCH.en;
  flare((pack && pack[key]) || PUNCH.en[key] || key);
}

function stopChaos() {
  clearTimeout(chaosTimer);
  stage.classList.remove("is-chaos");
  const box = $("#chaos");
  const rain = $("#chaos-rain");
  if (box) box.hidden = true;
  if (rain) rain.innerHTML = "";
}

function deny(reason) {
  if (!reason || reason === "cooldown") return;
  say(t("block_" + reason));
  tone(150, 0.12, "square", 0.03);
  stage.classList.add("shake");
  setTimeout(() => stage.classList.remove("shake"), 280);
}

function blocked(act) {
  if (state.crashed) return "crashed";
  if (state.mode === "sleep" && act !== "sleep") return "sleeping";
  if (state.mode === "hunt" && act !== "hunt") return "hunting";
  if (act === "focus" && state.mode === "focus") return "focusing";
  if (["code", "deploy", "hunt", "focus", "duck"].includes(act) && state.energy < 12) return "low";
  if (act === "deploy" && state.project < 70) return "deployProject";
  if (act === "deploy" && state.quality < 45) return "deployQuality";
  if (act === "pet" && Date.now() < state.petLock) return "cooldown";
  return "";
}

function milestoneKey() {
  if (state.project >= 100) return "ms_ready";
  if (state.project >= 75) return "ms_polish";
  if (state.project >= 50) return "ms_feat";
  if (state.project >= 25) return "ms_proto";
  return "ms_idea";
}

function lcdTemplate() {
  const mood = t("mood_" + moodKey());
  return [
    `const ${BRAND} = {`,
    `  energy: ${Math.round(state.energy)},`,
    `  mood: "${mood}",`,
    `  quality: ${Math.round(state.quality)},`,
    `  build: "v${state.version}.${Math.round(state.project)}"`,
    `};`,
  ].join("\n");
}

function renderLcd() {
  if (!lcd || document.activeElement === lcd) return;
  if (state.action === "keys") {
    lcd.value = `const ${BRAND} = {\n  keys: "asdfjkl;!!!",\n  bug: true\n};`;
    return;
  }
  if (state.action === "draw") {
    lcd.value = `const ${BRAND} = {\n  sketch: "oO.o",\n  ink: true\n};`;
    return;
  }
  lcd.value = state.codeText || lcdTemplate();
}

function renderLog() {
  const nearBottom = logEl.scrollTop + logEl.clientHeight >= logEl.scrollHeight - 12;
  logEl.innerHTML = state.log.map((entry) => {
    const time = new Date(entry.time).toLocaleTimeString("ru-RU", { hour12: false });
    return `<div><time>${time}</time><span>${esc(format(t("log_" + entry.id), entry.vars))}</span></div>`;
  }).join("");
  if (nearBottom) logEl.scrollTop = logEl.scrollHeight;
}

function renderAchievements() {
  $("#achs").innerHTML = ACH_IDS.map((id) => {
    const on = state.achievements.includes(id);
    return `<span class="${on ? "on" : ""}" title="${esc(t("achd_" + id))}">${esc(t("ach_" + id))}</span>`;
  }).join("");
}

function render() {
  const mood = moodKey();
  stage.dataset.mood = mood;
  stage.dataset.action = state.action;
  stage.dataset.day = dayPart();
  const sky = document.querySelector(".sky-fill");
  if (sky) {
    const paint = stage.dataset.day === "morning" ? "#skyMorning" : stage.dataset.day === "afternoon" ? "#skyAfternoon" : "#sky";
    sky.setAttribute("fill", "url(" + paint + ")");
  }
  stage.classList.toggle("is-sleep", state.mode === "sleep");
  stage.classList.toggle("is-focus", state.mode === "focus");
  stage.classList.toggle("is-flow", mood === "flow");
  stage.classList.toggle("coffee-hot", state.coffee > 72);
  app.classList.toggle("is-flow", mood === "flow");
  document.documentElement.lang = state.lang || "tg";
  document.documentElement.style.setProperty("--hoodie", hoodieColor());
  stage.dataset.wx = state.weather || "";
  stage.dataset.cup = state.cup || "mug";
  ["robot", "fox", "bear", "bird"].forEach((id) => {
    stage.classList.toggle("is-" + id, state.hero === id);
  });

  ["energy", "mood", "quality", "coffee"].forEach((key) => {
    const value = Math.round(state[key]);
    $("#val-" + key).textContent = String(value);
    $("#bar-" + key).style.width = value + "%";
    document.querySelector(`.meter[data-key="${key}"]`).classList.toggle("low", value < 20);
  });
  $("#bar-project").style.width = Math.round(state.project) + "%";
  $("#ver").textContent = `v${state.version} · ${Math.round(state.project)}%`;
  $("#milestone").textContent = t(milestoneKey());
  const hint = $("#deploy-hint");
  const ready = state.project >= 70 && state.quality >= 45;
  hint.textContent = ready ? t("deployReady") : t("deployHint");
  hint.classList.toggle("ready", ready);

  const lv = levelOf(state.xp);
  $("#level-label").textContent = "Lv. " + lv;
  $("#xp-bar").style.width = ((state.xp % 40) / 40) * 100 + "%";
  const combo = Date.now() - state.comboAt < 4000 ? state.combo : 0;
  const comboEl = $("#combo-label");
  comboEl.hidden = combo < 2;
  comboEl.textContent = "Combo x" + combo;

  if (state.mode === "focus") moodPill.textContent = `${t("actFocus")} ${state.focusLeft}s`;
  else moodPill.textContent = t("mood_" + mood);

  const sleepTitle = $("#btn-sleep strong");
  const sleepSub = $("#btn-sleep small");
  if (state.mode === "sleep") {
    sleepTitle.textContent = t("actWake");
    sleepSub.textContent = t("actWakeSub");
  } else {
    sleepTitle.textContent = t("actSleep");
    sleepSub.textContent = t("actSleepSub");
  }
  $("#btn-sleep").classList.toggle("is-on", state.mode === "sleep");
  $("#btn-focus").classList.toggle("is-on", state.mode === "focus");
  $("#btn-sound").classList.toggle("is-on", state.sound);
  $("#btn-lofi").classList.toggle("is-on", state.lofi);
  ["sound", "lofi"].forEach((id) => {
    const btn = id === "sound" ? $("#btn-sound") : $("#btn-lofi");
    const on = id === "sound" ? state.sound : state.lofi;
    if (!btn) return;
    const label = btn.querySelector(".switch-label");
    if (label) label.textContent = on ? "ON" : "OFF";
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  stage.classList.toggle("is-dark", !!state.lampOff);
  const look = state.look || {};
  stage.dataset.hat = look.hat || "none";
  stage.dataset.fx = look.effect || "none";
  stage.classList.toggle("is-phones", !!look.phones);
  stage.classList.toggle("is-dev", !!look.dev);
  stage.classList.toggle("is-noglass", look.glasses === false);
  stage.classList.toggle("is-night", dayPart() === "night");
  stage.classList.toggle("is-god", state.godLeft > 0);
  ["laser", "wings", "armor", "aura"].forEach((id) => {
    stage.classList.toggle("is-mut-" + id, state.mutation === id);
  });
  app.classList.toggle("is-glitch", !!state.glitched);
  ["cyber", "space", "matrix"].forEach((id) => {
    app.classList.toggle("world-" + id, state.world === id);
  });
  const restoreBtn = $("#restore-system");
  if (restoreBtn) restoreBtn.hidden = !state.glitched;
  const god = $("#god");
  if (god && state.godLeft > 0) god.hidden = false;
  syncWorldAudio();
  renderLife();
  const lampBtn = $("#lamp-btn");
  if (lampBtn) lampBtn.hidden = true;
  document.querySelectorAll("[data-act]").forEach((btn) => {
    const reason = blocked(btn.dataset.act);
    btn.classList.toggle("is-blocked", Boolean(reason) && reason !== "cooldown");
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.lang === state.lang);
  });
  document.querySelectorAll("[data-skin]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.skin === state.skin ? "true" : "false");
  });
  document.querySelectorAll(".wx-bar button").forEach((btn) => {
    btn.classList.toggle("is-on", (btn.dataset.wx || "") === (state.weather || ""));
  });
  document.querySelectorAll("[data-hero]").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.hero === (state.hero || "cat"));
  });
  const picker = $("#color-all");
  if (picker && document.activeElement !== picker) picker.value = hoodieColor();

  $("#prompt").textContent = "murra@ide:~$";
  if (document.activeElement !== nameInput) nameInput.value = state.name;
  document.title = BRAND;
  const dayChip = $("#day-chip");
  if (dayChip) dayChip.textContent = dayLabel();
  const dayNote = $("#day-note");
  if (dayNote) dayNote.textContent = format(t("dayLine"), { part: dayLabel() });
  renderLcd();
  renderLog();
  renderAchievements();
  if (mood === "flow") state.sawFlow = true;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  const shellIn = $("#shell-in");
  if (shellIn) shellIn.placeholder = t("shellPh");
  const chatIn = $("#chat-in");
  if (chatIn && document.activeElement !== chatIn) chatIn.placeholder = t("chatPh");
  render();
}

function save() {
  state.savedAt = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      state.log.push({ id: "boot", vars: {}, time: Date.now() });
      return;
    }
    const data = JSON.parse(raw);
    state = Object.assign(defaultState(), data);
    state.stats = Object.assign(defaultState().stats, data.stats || {});
    state.achievements = Array.isArray(data.achievements) ? data.achievements : [];
    state.log = Array.isArray(data.log) ? data.log : [];
    state.name = cleanName(state.name);
    if (!(typeof state.skin === "string" && state.skin.charAt(0) === "#") && !SKINS[state.skin]) state.skin = "magenta";
    if (!["cat", "robot", "fox", "bear", "bird"].includes(state.hero)) state.hero = "cat";
    state.look = Object.assign({ hat: "none", glasses: true, phones: false, dev: false, effect: "none" }, state.look || {});
    state.owned = Object.assign({ beanie: false, cap: false, phones: false, dev: false, neon: false, spark: false }, state.owned || {});
    state.quest = Object.assign({ food: 0, play: 0, bug: 0, done: false }, state.quest || {});
    state.chestActs = Array.isArray(state.chestActs) ? state.chestActs : [];
    if (typeof state.coins !== "number") state.coins = 0;
    state.godLeft = 0;
    state.glitched = !!state.glitched;
    if (!["", "cyber", "space", "matrix"].includes(state.world || "")) state.world = "";
    if (!["", "laser", "wings", "armor", "aura"].includes(state.mutation || "")) state.mutation = "";
    if (typeof state.questsDone !== "number") state.questsDone = 0;
    if (typeof state.bossWins !== "number") state.bossWins = 0;
    state.history = Array.isArray(state.history) ? state.history.slice(-10) : [];
    state.coffeeBurst = 0;
    if (typeof state.hour !== "number") state.hour = new Date().getHours();
    if (!["mug", "glass", "can", "bowl"].includes(state.cup)) state.cup = "mug";
    if (!["", "rain", "snow", "hot", "cold"].includes(state.weather || "")) state.weather = "";
    if (!COPY[state.lang]) state.lang = "tg";
    ["energy", "mood", "quality", "coffee", "project"].forEach((key) => {
      state[key] = clamp(Number(state[key]) || 0);
    });
    const away = Math.min(240, Math.floor((Date.now() - (state.savedAt || Date.now())) / 1000));
    if (state.mode === "hunt" || state.mode === "focus") state.mode = "idle";
    if (away > 8) {
      if (state.mode === "sleep") {
        state.energy = clamp(state.energy + Math.min(36, away * 0.35));
        state.mood = clamp(state.mood + Math.min(20, away * 0.15));
        state.mode = "idle";
        state.action = "idle";
        pushLog("wake");
      } else {
        state.energy = clamp(state.energy - away * 0.2);
        state.mood = clamp(state.mood - away * 0.1);
        state.quality = clamp(state.quality - away * 0.05);
        state.coffee = clamp(state.coffee - away * 0.16);
        pushLog("away", { sec: away });
      }
    }
    if (!state.log.length) pushLog("boot");
  } catch (e) {
    state = defaultState();
    pushLog("boot");
  }
}

function checkAchievements() {
  const tests = {
    coffee: state.stats.coffee >= 1,
    coder: state.stats.code >= 10,
    flow: state.sawFlow,
    ship: state.stats.deploys >= 1,
    hunter: state.stats.huntCaught >= 15,
    loyal: state.playMs >= 120000,
    named: state.named,
    duck: (state.stats.ducks || 0) >= 3,
    perfect: state.energy >= 80 && state.mood >= 80 && state.quality >= 80 && state.coffee >= 80,
  };
  ACH_IDS.forEach((id) => {
    if (tests[id] && !state.achievements.includes(id)) {
      state.achievements.push(id);
      toast(t("ach_" + id), t("achd_" + id));
      tone(880, 0.08, "triangle", 0.03, 1320);
    }
  });
}

function showModal({ title, text, ok, cancel, onOk }) {
  $("#modal-title").textContent = title;
  $("#modal-text").textContent = text;
  $("#modal-ok").textContent = ok;
  const cancelBtn = $("#modal-cancel");
  cancelBtn.hidden = !cancel;
  cancelBtn.textContent = cancel || "";
  modalOnOk = onOk;
  $("#modal").hidden = false;
  $("#modal-ok").focus();
}

function closeModal() {
  $("#modal").hidden = true;
  modalOnOk = null;
}

function openCrash() {
  showModal({
    title: t("rebootTitle"),
    text: t("rebootText"),
    ok: t("rebootOk"),
    onOk: reboot,
  });
}

function reboot() {
  state.crashed = false;
  state.mode = "idle";
  state.action = "idle";
  state.energy = 52;
  state.mood = 48;
  state.quality = 50;
  state.coffee = 46;
  pushLog("reboot");
  say(line("reboot"));
  closeModal();
  render();
  save();
}

function resetAll() {
  const lang = state.lang;
  const sound = state.sound;
  state = defaultState();
  state.lang = lang;
  state.sound = sound;
  state.lofi = false;
  setLofi(false);
  pushLog("reset");
  closeModal();
  say(line("hello"));
  render();
  save();
}

function doCoffee() {
  const reason = blocked("coffee");
  if (reason) return deny(reason);
  const extra = state.coffee > 92;
  const cups = ["mug", "glass", "can", "bowl"];
  state.cup = cups[(cups.indexOf(state.cup) + 1) % cups.length];
  apply({ coffee: extra ? 6 : 26, energy: extra ? 8 : 16, mood: extra ? 1 : 6 });
  state.stats.coffee += 1;
  bumpCombo();
  addXp(6);
  setAction("coffee", 1600);
  noise(0.18, 0.04);
  tone(520, 0.08, "sine", 0.03, 740);
  burstCenter(["#ffc857", "#fff", "#ff4ecd"], 16, "dot");
  pushLog("coffee", { c: extra ? 6 : 26, e: extra ? 8 : 16 });
  punch("coffee");
  state.coffeeBurst = (state.coffeeBurst || 0) + 1;
  if (state.coffeeBurst >= 5) {
    state.coffeeBurst = 0;
    startGod();
  } else if (state.coffeeBurst >= 2) {
    say("Ту боз ҳам ба ман кофе медиҳӣ? 😂");
  } else {
    say(line("coffee"));
  }
  afterAct("coffee");
  checkAchievements();
  render();
  save();
}

function doCode() {
  const reason = blocked("code");
  if (reason) return deny(reason);
  const moodDelta = state.coffee > 25 ? 4 : -6;
  apply({ energy: -12, coffee: -7, quality: 12, project: 9, mood: moodDelta });
  state.stats.code += 1;
  bumpCombo();
  addXp(8);
  setAction("code", 1700);
  tone(660, 0.05, "square", 0.02);
  setTimeout(() => tone(880, 0.05, "square", 0.02), 70);
  burstCenter(["#5ef2ff", "#8b7cff", "#ffffff"], 18, "bit");
  pushLog("code", { p: 9, e: 12 });
  punch("code");
  say(line("code"));
  afterAct("code");
  checkAchievements();
  render();
  save();
}

function doBug() {
  const reason = blocked("bug");
  if (reason) return deny(reason);
  apply({ energy: -6, mood: 14, quality: 11, coffee: -2 });
  state.stats.bugs += 1;
  bumpCombo();
  addXp(8);
  setAction("bug", 700);
  glitch();
  tone(220, 0.1, "sawtooth", 0.02, 90);
  burstCenter(["#c6ff4a", "#7dffb3"], 14, "dot");
  pushLog("bug", { q: 11 });
  punch("bug");
  say(line("bug"));
  afterAct("bug");
  checkAchievements();
  render();
  save();
}

function wake() {
  state.autoSleep = false;
  state.sleepLeft = 0;
  state.mode = "idle";
  state.lampOff = false;
  state.dayLock = "morning";
  state.action = "walk";
  stage.dataset.action = "walk";
  pushLog("wake");
  stopChaos();
  punch("wake");
  say(line("wake"));
  tone(440, 0.1, "triangle", 0.03, 660);
  render();
  save();
  clearTimeout(actionTimer);
  actionTimer = setTimeout(() => {
    if (state.mode !== "idle") return;
    setAction("code", 1600);
    say(line("code"));
    render();
  }, 2100);
}

function doSleep() {
  if (state.mode === "sleep") return wake();
  const reason = blocked("sleep");
  if (reason) return deny(reason);
  stopChaos();
  state.mode = "sleep";
  state.autoSleep = false;
  state.dayLock = "night";
  state.focusLeft = 0;
  state.action = "sleep";
  apply({ mood: 4 });
  pushLog("sleep");
  punch("sleep");
  say(line("sleep"));
  tone(196, 0.3, "sine", 0.03, 140);
  render();
  save();
}

function doPet() {
  const reason = blocked("pet");
  if (reason) return deny(reason);
  apply({ mood: 10, energy: 3 });
  state.stats.pets += 1;
  state.petLock = Date.now() + 1200;
  bumpCombo();
  addXp(4);
  setAction("pet", 700);
  tone(180, 0.22, "sine", 0.04, 240);
  burstCenter(["#ff4ecd", "#ff8adf", "#fff"], 12, "heart");
  pushLog("pet", { m: 10 });
  punch("pet");
  say(line("pet"));
  afterAct("pet");
  checkAchievements();
  render();
  save();
}

function doDeploy() {
  const reason = blocked("deploy");
  if (reason) return deny(reason);
  const version = state.version + 1;
  apply({ project: 12 - state.project, quality: -8, mood: 16, energy: -10 });
  state.version = version;
  state.stats.deploys += 1;
  bumpCombo();
  addXp(25);
  setAction("deploy", 1400);
  arpeggio();
  burstCenter(["#ff4ecd", "#5ef2ff", "#ffc857", "#fff"], 36, "dot");
  pushLog("deploy", { v: version });
  punch("deploy");
  say(line("deploy"));
  toast("v" + version, t("log_deploy").replace("{v}", version));
  checkAchievements();
  render();
  save();
}

function endHunt(caught) {
  clearInterval(huntSpawn);
  clearTimeout(huntTimer);
  huntLayer.hidden = true;
  huntLayer.innerHTML = "";
  huntHud.hidden = true;
  state.mode = "idle";
  state.action = "idle";
  stage.dataset.action = "idle";
  apply({ mood: caught * 3, quality: caught * 2, energy: -7 });
  state.stats.huntCaught += caught;
  addXp(caught * 2);
  pushLog("hunt", { n: caught });
  say(format(line("huntEnd"), { n: caught }));
  toast(t("huntWord"), format(t("log_hunt"), { n: caught }));
  checkAchievements();
  render();
  save();
}

function popBug(bug) {
  if (!bug || bug.classList.contains("pop") || state.mode !== "hunt") return;
  bug.classList.add("pop");
  huntCaught += 1;
  huntHud.textContent = `${t("huntWord")} · ${huntCaught}`;
  tone(640 + huntCaught * 30, 0.05, "square", 0.02);
  const pop = document.createElement("b");
  pop.className = "hunt-pop";
  pop.textContent = "+1";
  pop.style.left = bug.style.left;
  pop.style.top = bug.style.top;
  huntLayer.appendChild(pop);
  setTimeout(() => pop.remove(), 500);
  if (huntCaught % 3 === 0) glitch();
  const rect = bug.getBoundingClientRect();
  const host = stage.getBoundingClientRect();
  burst(rect.left - host.left + 20, rect.top - host.top + 16, ["#c6ff4a", "#ff4ecd", "#7af0ff", "#fff"], 10, "dot");
  setTimeout(() => bug.remove(), 160);
}

function doHunt() {
  const reason = blocked("hunt");
  if (reason) return deny(reason);
  if (state.mode === "focus") state.focusLeft = 0;
  state.mode = "hunt";
  setAction("hunt", 0);
  huntCaught = 0;
  let left = 9;
  huntLayer.hidden = false;
  huntLayer.innerHTML = "";
  huntHud.hidden = false;
  huntHud.textContent = `${t("huntWord")} · 0`;
  punch("hunt");
  say(line("hunt"));
  afterAct("hunt");
  tone(480, 0.08, "square", 0.03);
  const kinds = ["beetle", "moth", "glitch"];
  const spawn = () => {
    if (state.mode !== "hunt") return;
    const bug = document.createElement("button");
    bug.type = "button";
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    bug.className = "bug bug-" + kind;
    bug.style.left = (8 + Math.random() * 74) + "%";
    bug.style.top = (16 + Math.random() * 62) + "%";
    bug.style.animationDuration = (0.7 + Math.random() * 0.5) + "s";
    bug.innerHTML = "<i></i>";
    huntLayer.appendChild(bug);
    setTimeout(() => bug.remove(), 1700);
  };
  huntSpawn = setInterval(spawn, 420);
  spawn();
  huntTimer = setInterval(() => {
    left -= 1;
    if (left <= 0) {
      clearInterval(huntTimer);
      endHunt(huntCaught);
    }
  }, 1000);
  render();
}

function doFocus() {
  const reason = blocked("focus");
  if (reason) return deny(reason);
  state.mode = "focus";
  state.focusLeft = 12;
  state.focusProject = state.project;
  setAction("code", 12000);
  pushLog("focus", { n: 12 });
  punch("focus");
  say(line("focus"));
  tone(540, 0.14, "sine", 0.03, 680);
  render();
  save();
}

function doDuck() {
  const reason = blocked("duck");
  if (reason) return deny(reason);
  apply({ quality: 14, mood: 9, energy: -5, coffee: -2 });
  state.stats.ducks = (state.stats.ducks || 0) + 1;
  bumpCombo();
  addXp(9);
  setAction("duck", 2200);
  tone(392, 0.16, "sine", 0.02, 330);
  setTimeout(() => tone(494, 0.12, "sine", 0.016), 200);
  burstCenter(["#ffe08a", "#fff6d0", "#7dffb3"], 16, "dot");
  pushLog("duck", { q: 14 });
  punch("duck");
  say(line("duck"));
  checkAchievements();
  render();
  save();
}

function doKeys() {
  const reason = blocked("keys");
  if (reason) return deny(reason);
  apply({ quality: -10, mood: 14, project: -4, energy: -3 });
  state.stats.sits = (state.stats.sits || 0) + 1;
  bumpCombo();
  addXp(5);
  setAction("keys", 2400);
  tone(180, 0.12, "triangle", 0.03, 90);
  burstCenter(["#ffb4c8", "#fff", "#ffd27a"], 14, "bit");
  pushLog("keys", { q: 10 });
  punch("keys");
  say(line("keys"));
  render();
  save();
}

function doBook() {
  const reason = blocked("book");
  if (reason) return deny(reason);
  apply({ mood: 8, quality: 6, energy: -4, coffee: -1 });
  bumpCombo();
  addXp(6);
  setAction("book", 2200);
  tone(392, 0.18, "triangle", 0.02, 523);
  burstCenter(["#fff6ee", "#ffb4d0", "#b9a6ff"], 12, "bit");
  pushLog("book", { q: 6 });
  punch("book");
  say(line("book"));
  render();
  save();
}

function doTune() {
  const reason = blocked("tune");
  if (reason) return deny(reason);
  apply({ mood: 12, energy: 2 });
  bumpCombo();
  addXp(5);
  setAction("tune", 1800);
  [392, 440, 494, 523, 494].forEach((freq, index) => {
    setTimeout(() => tone(freq, 0.14, "sine", 0.02), index * 150);
  });
  burstCenter(["#ff8adf", "#fff", "#5ef2ff"], 14, "dot");
  pushLog("tune", { m: 12 });
  punch("tune");
  say(line("tune"));
  render();
  save();
}

function doMove(id, ms) {
  const reason = blocked(id);
  if (reason) return deny(reason);
  apply({ mood: 8, energy: -2 });
  bumpCombo();
  addXp(4);
  setAction(id, ms);
  tone(id === "dance" ? 523 : id === "jump" ? 660 : 440, 0.08, "triangle", 0.03, 780);
  if (id === "clap" || id === "dance") setTimeout(() => tone(880, 0.06, "triangle", 0.02), 160);
  punch(id);
  say(line(id));
  render();
  save();
}

function doDraw() {
  const reason = blocked("draw");
  if (reason) return deny(reason);
  apply({ mood: 9, quality: 4, energy: -3 });
  bumpCombo();
  addXp(5);
  setAction("draw", 1800);
  tone(330, 0.1, "triangle", 0.02, 520);
  burstCenter(["#ffc857", "#ff8ac7", "#5ef2ff"], 16, "bit");
  pushLog("draw", { m: 9 });
  punch("draw");
  say(line("draw"));
  render();
  save();
}

const ACTIONS = {
  coffee: doCoffee,
  code: doCode,
  bug: doBug,
  sleep: doSleep,
  pet: doPet,
  deploy: doDeploy,
  hunt: doHunt,
  focus: doFocus,
  duck: doDuck,
  keys: doKeys,
  book: doBook,
  tune: doTune,
  draw: doDraw,
  wave: () => doMove("wave", 2200),
  dance: () => doMove("dance", 2800),
  jump: () => doMove("jump", 1800),
  clap: () => doMove("clap", 2000),
  food: doFood,
  chaos: doChaos,
  glitch: doGlitch,
  clones: doClones,
  scan: doScan,
  storm: doStorm,
  boss: doBoss,
  time: doTime,
};

let lastInput = Date.now();
let idlePoked = false;
let bossHp = 0;
let worldTimer = 0;
let audioWorld = "";
let stormTimer = 0;

function startGod() {
  parallax.style.transform = "";
  state.godLeft = 15;
  const god = $("#god");
  if (god) {
    god.hidden = false;
    god.classList.remove("is-out");
  }
  stage.classList.add("is-god");
  say("SYSTEM OVERRIDE. МАН АКНУН УСТОДИ КОД ҲАСТАМ!");
  tone(90, 0.4, "sawtooth", 0.05, 40);
  setTimeout(() => tone(520, 0.2, "square", 0.04, 880), 180);
  burstCenter(["#5ef2ff", "#fff", "#ff4ecd"], 28, "bit");
}

function endGod() {
  state.godLeft = 0;
  stage.classList.remove("is-god");
  stage.classList.add("is-god-out");
  const god = $("#god");
  if (god) god.classList.add("is-out");
  setTimeout(() => {
    stage.classList.remove("is-god-out");
    if (god) {
      god.hidden = true;
      god.classList.remove("is-out");
    }
  }, 800);
}

function doGlitch() {
  const reason = blocked("glitch");
  if (reason) return deny(reason);
  state.glitched = true;
  say("ЭЙ! КАСЕ КОДИ МАРО ТАҒЙИР ДОД?!");
  tone(140, 0.2, "sawtooth", 0.04, 60);
  render();
  save();
}

function restoreSystem() {
  state.glitched = false;
  say(line("reboot"));
  tone(440, 0.12, "triangle", 0.04, 660);
  render();
  save();
}

function doClones() {
  const reason = blocked("clones");
  if (reason) return deny(reason);
  const layer = $("#clones");
  if (!layer) return;
  layer.hidden = false;
  layer.classList.remove("is-dust");
  layer.innerHTML = "";
  for (let i = 0; i < 10; i += 1) {
    const el = document.createElement("i");
    el.className = "clone";
    el.style.left = (6 + (i % 5) * 18) + "%";
    el.style.top = (18 + Math.floor(i / 5) * 28) + "%";
    el.style.animationDelay = (i * 0.07) + "s";
    layer.appendChild(el);
  }
  say("HELLO DEVELOPER!");
  tone(660, 0.08, "square", 0.03, 880);
  setTimeout(() => {
    layer.classList.add("is-dust");
    burstCenter(["#5ef2ff", "#fff", "#ffc857"], 24, "dot");
    setTimeout(() => {
      layer.hidden = true;
      layer.innerHTML = "";
      layer.classList.remove("is-dust");
    }, 800);
  }, 4200);
}

function playStyle() {
  const s = state.stats || {};
  if ((s.bugs || 0) > (s.code || 0) && (s.bugs || 0) >= (s.coffee || 0)) return t("styleBug");
  if ((s.coffee || 0) > (s.code || 0)) return t("styleCoffee");
  if ((s.code || 0) > 0) return t("styleCode");
  return t("styleMix");
}

function doScan() {
  const reason = blocked("scan");
  if (reason) return deny(reason);
  const box = $("#scan");
  const card = $("#scan-card");
  if (!box || !card) return;
  box.hidden = false;
  card.innerHTML = "<b>SCAN DEVELOPER</b>";
  say("SCAN DEVELOPER");
  tone(880, 0.05, "square", 0.02);
  setTimeout(() => {
    card.innerHTML = [
      "<b>SCAN DEVELOPER</b>",
      "<p>" + t("scanLevel") + ": " + levelOf(state.xp) + "</p>",
      "<p>XP: " + state.xp + "</p>",
      "<p>" + t("scanMissions") + ": " + (state.questsDone || 0) + "</p>",
      "<p>" + t("scanStyle") + ": " + playStyle() + "</p>",
    ].join("");
    say("Таҳлил анҷом ёфт. Потенсиали девелоперӣ: MAXIMUM!");
    tone(520, 0.1, "triangle", 0.03, 780);
  }, 1600);
  setTimeout(() => { box.hidden = true; }, 5600);
}

function doStorm() {
  const reason = blocked("storm");
  if (reason) return deny(reason);
  const box = $("#storm");
  const rain = $("#storm-rain");
  const wins = $("#storm-wins");
  const fill = $("#storm-fill");
  const pct = $("#storm-pct");
  if (!box || !rain || !fill) return;
  clearInterval(stormTimer);
  box.hidden = false;
  rain.innerHTML = "";
  if (wins) wins.innerHTML = "";
  const bits = ["const build = () => ship()", "if (xp > 40) level++", "git commit -m spark", "return energy + coffee", "function neon(n){return n*2}", "while(bug) fix(bug)"];
  for (let i = 0; i < 18; i += 1) {
    const lineEl = document.createElement("span");
    lineEl.textContent = bits[i % bits.length];
    lineEl.style.left = (4 + (i * 13) % 78) + "%";
    lineEl.style.animationDelay = (i * 0.12) + "s";
    rain.appendChild(lineEl);
  }
  if (wins) {
    for (let i = 0; i < 3; i += 1) {
      const win = document.createElement("i");
      win.textContent = "project-" + (i + 1) + ".js";
      win.style.left = (12 + i * 26) + "%";
      win.style.top = (16 + i * 14) + "%";
      wins.appendChild(win);
    }
  }
  const name = ["spark", "neon", "pulse", "orbit"][Math.floor(Math.random() * 4)];
  const snippet = "function " + name + "Build(xp) {\n  return xp * 2 + " + Math.floor(Math.random() * 40) + ";\n}\n";
  state.codeText = snippet;
  if (lcd && state.action !== "keys" && state.action !== "draw") lcd.value = snippet;
  say("Ман лоиҳаи навро дар ҳоли сохтан дорам!");
  let n = 0;
  stormTimer = setInterval(() => {
    n += 4;
    if (n > 100) n = 100;
    fill.style.width = n + "%";
    if (pct) pct.textContent = n + "%";
    if (n >= 100) {
      clearInterval(stormTimer);
      addXp(10);
      setTimeout(() => { box.hidden = true; }, 700);
      save();
    }
  }, 120);
}

function openPortal() {
  const order = ["", "cyber", "space", "matrix"];
  const index = order.indexOf(state.world || "");
  state.world = order[(index + 1) % order.length];
  const flash = $("#portal");
  if (flash) {
    flash.hidden = false;
    setTimeout(() => { flash.hidden = true; }, 1000);
  }
  const names = { cyber: "Cyber City", space: "Space", matrix: "Matrix", "": "IDE" };
  say(names[state.world] || "IDE");
  audioWorld = "";
  tone(160, 0.35, "sawtooth", 0.03, 70);
  render();
  save();
}

function stopWorld() {
  if (worldTimer) clearInterval(worldTimer);
  worldTimer = 0;
}

function playWorld(kind) {
  stopWorld();
  if (!state.sound || !kind) return;
  const notes = kind === "matrix" ? [196, 220, 247, 294] : kind === "space" ? [164, 196, 246, 330] : [330, 392, 494, 587];
  let step = 0;
  worldTimer = setInterval(() => {
    tone(notes[step % notes.length], 0.16, kind === "matrix" ? "square" : "triangle", 0.015);
    step += 1;
  }, 460);
}

function syncWorldAudio() {
  const next = state.sound ? (state.world || "") : "";
  if (next === audioWorld) return;
  audioWorld = next;
  if (!next) stopWorld();
  else playWorld(next);
}

function doBoss() {
  const reason = blocked("boss");
  if (reason) return deny(reason);
  const box = $("#boss");
  if (!box) return;
  bossHp = 100;
  box.hidden = false;
  box.classList.remove("is-win");
  const bar = $("#boss-hp");
  if (bar) bar.style.width = "100%";
  say(line("bug"));
}

function bossHit(cost, dmg) {
  const box = $("#boss");
  if (!box || box.hidden) return;
  if (state.energy < cost + 8) {
    say(t("bossLose"));
    box.hidden = true;
    render();
    save();
    return;
  }
  state.energy = clamp(state.energy - cost);
  bossHp = Math.max(0, bossHp - dmg);
  const bar = $("#boss-hp");
  if (bar) bar.style.width = bossHp + "%";
  tone(180, 0.06, "square", 0.04);
  if (bossHp <= 0) {
    box.classList.add("is-win");
    state.coins += 30;
    state.bossWins = (state.bossWins || 0) + 1;
    state.bossPrize = true;
    if ((state.mutationRarity || "") !== "legendary") {
      state.mutation = "aura";
      state.mutationRarity = "legendary";
    } else state.coins += 20;
    addXp(36);
    burstCenter(["#fff", "#ffc857", "#5ef2ff"], 36, "dot");
    say(t("bossWin") + " " + t("bossPrize"));
    setTimeout(() => { box.hidden = true; }, 900);
  }
  render();
  save();
}

function archiveDay(day) {
  if (!day) return;
  if (!Array.isArray(state.history)) state.history = [];
  let bucket = state.history.find((item) => item.day === day);
  if (!bucket) {
    bucket = { day: day, energy: 0, mood: 0, xp: 0, quality: 0, coffee: 0, actions: [] };
    state.history.push(bucket);
  }
  bucket.energy = Math.round(state.energy);
  bucket.mood = Math.round(state.mood);
  bucket.xp = state.xp;
  bucket.quality = Math.round(state.quality);
  bucket.coffee = Math.round(state.coffee);
  if (state.history.length > 10) state.history = state.history.slice(-10);
}

function stampHistory(id) {
  const day = todayKey();
  if (!Array.isArray(state.history)) state.history = [];
  let bucket = state.history.find((item) => item.day === day);
  if (!bucket) {
    bucket = {
      day: day,
      energy: Math.round(state.energy),
      mood: Math.round(state.mood),
      xp: state.xp,
      quality: Math.round(state.quality),
      coffee: Math.round(state.coffee),
      actions: [],
    };
    state.history.push(bucket);
  }
  bucket.actions.push(id);
  if (bucket.actions.length > 24) bucket.actions.shift();
  bucket.energy = Math.round(state.energy);
  bucket.xp = state.xp;
}

function historyCard(title, bucket, live) {
  if (!bucket) return "<div class=\"time-col\"><strong>" + title + "</strong><p>" + t("timeEmpty") + "</p></div>";
  const acts = (bucket.actions || []).slice(-8).join(", ") || "—";
  return "<div class=\"time-col\"><strong>" + title + "</strong><p>" + t("timeEnergy") + ": " + (live ? Math.round(state.energy) : bucket.energy) + "</p><p>" + t("timeXp") + ": " + (live ? state.xp : bucket.xp) + "</p><p>" + t("timeActs") + ": " + acts + "</p></div>";
}

function doTime() {
  const box = $("#timebox");
  const body = $("#time-body");
  if (!box || !body) return;
  const today = todayKey();
  const list = Array.isArray(state.history) ? state.history : [];
  const now = list.find((item) => item.day === today);
  const prev = list.filter((item) => item.day !== today).slice(-1)[0];
  body.innerHTML = historyCard(t("timeNow"), now || { energy: state.energy, xp: state.xp, actions: [] }, true) + historyCard(t("timeYday"), prev, false);
  box.hidden = false;
}

const MUTATIONS = [
  { id: "laser", rarity: "common", rank: 1 },
  { id: "wings", rarity: "rare", rank: 2 },
  { id: "armor", rarity: "epic", rank: 3 },
  { id: "aura", rarity: "legendary", rank: 4 },
];

function maybeMutate() {
  const roll = Math.random();
  const next = roll > 0.97 ? MUTATIONS[3] : roll > 0.85 ? MUTATIONS[2] : roll > 0.6 ? MUTATIONS[1] : MUTATIONS[0];
  const have = MUTATIONS.find((item) => item.id === state.mutation);
  if (have && have.rank > next.rank) return;
  state.mutation = next.id;
  state.mutationRarity = next.rarity;
  toast(t("mut_" + next.id), t("mut_" + next.rarity));
  tone(740, 0.12, "triangle", 0.03, 1180);
}

function doChaos() {
  const reason = blocked("chaos");
  if (reason) return deny(reason);
  apply({ energy: -6, mood: 22, quality: -4, project: 5, coffee: -3 });
  bumpCombo();
  addXp(12);
  setAction("chaos", 3400);
  stage.classList.add("is-chaos");
  const box = $("#chaos");
  const rain = $("#chaos-rain");
  if (box) box.hidden = false;
  if (rain) {
    rain.innerHTML = "";
    const words = ["NULL", "404", "NaN", "git", "!!!", "∞", "push", "oops", "FIXME", "0xFF"];
    for (let i = 0; i < 16; i += 1) {
      const bit = document.createElement("span");
      bit.textContent = words[i % words.length];
      bit.style.left = (3 + Math.random() * 90) + "%";
      bit.style.animationDelay = (Math.random() * 0.35) + "s";
      bit.style.animationDuration = (0.85 + Math.random() * 0.7) + "s";
      bit.style.color = ["#c6ff4a", "#5ef2ff", "#ff4ecd", "#ffc857"][i % 4];
      rain.appendChild(bit);
    }
  }
  glitch();
  setTimeout(glitch, 220);
  [196, 330, 494, 784, 988].forEach((freq, index) => {
    setTimeout(() => tone(freq, 0.07, "square", 0.03), index * 80);
  });
  burstCenter(["#ff4ecd", "#5ef2ff", "#c6ff4a", "#ffc857", "#fff"], 42, "bit");
  punch("chaos");
  say(line("chaos"));
  pushLog("chaos", { m: 22 });
  clearTimeout(chaosTimer);
  chaosTimer = setTimeout(stopChaos, 3400);
  render();
  save();
}

function doFood() {
  const reason = blocked("food");
  if (reason) return deny(reason);
  apply({ energy: 18, mood: 10, coffee: -3 });
  bumpCombo();
  addXp(6);
  setAction("food", 1700);
  tone(360, 0.12, "sine", 0.03, 520);
  burstCenter(["#ffb347", "#ff7a6e", "#fff6ee"], 14, "dot");
  pushLog("food", { e: 18 });
  punch("food");
  say(line("food"));
  afterAct("food");
  render();
  save();
}

function maybeEvent() {
  if (state.crashed || state.godLeft > 0 || state.glitched || state.mode === "sleep" || state.mode === "hunt" || state.mode === "focus") return;
  state.eventIn -= 1;
  if (state.eventIn > 0) return;
  state.eventIn = 34 + Math.floor(Math.random() * 18);
  const roll = Math.floor(Math.random() * 4);
  if (roll === 0) {
    apply({ mood: -5, energy: -3 });
    pushLog("standup");
    say(line("standup"));
  } else if (roll === 1) {
    apply({ coffee: 14, mood: 8 });
    pushLog("pizza");
    say(line("pizza"));
    burstCenter(["#ffc857", "#ff8a5b"], 12, "dot");
  } else if (roll === 2) {
    apply({ quality: -8, mood: -4 });
    pushLog("prod");
    say(line("prod"));
    glitch();
  } else {
    apply({ quality: 10, project: 6, mood: 4 });
    pushLog("idea");
    say(line("idea"));
  }
}

function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function ensureQuest() {
  if (state.questDay && state.questDay !== todayKey()) archiveDay(state.questDay);
  if (state.questDay !== todayKey()) {
    state.questDay = todayKey();
    state.quest = { food: 0, play: 0, bug: 0, done: false };
  }
  if (!state.quest) state.quest = { food: 0, play: 0, bug: 0, done: false };
}

function noteQuest(id) {
  ensureQuest();
  const q = state.quest;
  if (q.done) return;
  if (id === "food") q.food = Math.min(2, (q.food || 0) + 1);
  if (id === "play") q.play = Math.min(1, (q.play || 0) + 1);
  if (id === "bug") q.bug = Math.min(1, (q.bug || 0) + 1);
  if (q.food >= 2 && q.play >= 1 && q.bug >= 1) {
    q.done = true;
    state.questsDone = (state.questsDone || 0) + 1;
    state.coins += 40;
    addXp(30);
    toast(t("questTitle"), format(t("questReward"), { c: 40 }));
    say(format(t("questReward"), { c: 40 }));
    pushLog("quest", { c: 40 });
  }
}

function noteChest(id) {
  const need = ["coffee", "code", "bug", "food", "pet"];
  if (!need.includes(id)) return;
  if (!Array.isArray(state.chestActs)) state.chestActs = [];
  if (!state.chestActs.includes(id)) state.chestActs.push(id);
  state.coins += 3;
  if (state.chestActs.length >= 5) {
    state.chestActs = [];
    openChest();
  }
}

function afterAct(id) {
  if (id !== "coffee") state.coffeeBurst = 0;
  state.lastAct = id;
  stampHistory(id);
  if (id === "hunt") noteQuest("play");
  else noteQuest(id);
  noteChest(id);
}

function grantLook(patch) {
  state.look = Object.assign({ hat: "none", glasses: true, phones: false, dev: false, effect: "none" }, state.look || {}, patch);
}

function openChest() {
  const owned = state.owned || {};
  const colors = ["#5ef2ff", "#c6ff4a", "#ffc857", "#b388ff", "#ff7a6e"];
  let text = "";
  const roll = Math.floor(Math.random() * 4);
  if (roll === 0) {
    const hat = !owned.beanie ? "beanie" : !owned.cap ? "cap" : "";
    if (hat) {
      owned[hat] = true;
      grantLook({ hat: hat });
      text = format(t("chestHat"), { name: t("item_" + hat) });
    } else {
      apply({ coffee: 28, mood: 8 });
      text = t("chestCoffee");
    }
  } else if (roll === 1) {
    state.skin = colors[Math.floor(Math.random() * colors.length)];
    text = t("chestColor");
  } else if (roll === 2) {
    apply({ coffee: 30, energy: 12, mood: 8 });
    text = t("chestCoffee");
  } else {
    const fx = !owned.neon ? "neon" : "spark";
    owned[fx] = true;
    grantLook({ effect: fx });
    text = format(t("chestFx"), { name: t("item_" + fx) });
  }
  state.owned = owned;
  const box = $("#chest");
  const body = $("#chest-body");
  if (body) body.textContent = text;
  if (box) box.hidden = false;
  burstCenter(["#ffc857", "#fff", "#ff4ecd", "#5ef2ff"], 36, "dot");
  arpeggio();
  say(text);
  pushLog("chest", { text: text });
}

function buy(id) {
  const price = { food: 8, coffee: 6, beanie: 14, cap: 14, phones: 12, dev: 16, neon: 18, spark: 18 };
  const cost = price[id];
  if (!cost) return;
  if (state.coins < cost) {
    say(t("buyNeed"));
    tone(140, 0.08, "square", 0.03);
    render();
    return;
  }
  state.coins -= cost;
  if (id === "food") {
    apply({ energy: 18, mood: 10 });
    setAction("food", 1600);
    say(line("food"));
  } else if (id === "coffee") {
    apply({ coffee: 24, energy: 12, mood: 6 });
    setAction("coffee", 1400);
    say(line("coffee"));
  } else if (id === "beanie" || id === "cap") {
    state.owned[id] = true;
    grantLook({ hat: id });
    say(format(t("bought"), { name: t("item_" + id) }));
  } else if (id === "phones" || id === "dev") {
    state.owned[id] = true;
    grantLook(id === "phones" ? { phones: true } : { dev: true });
    say(format(t("bought"), { name: t("item_" + id) }));
  } else {
    state.owned[id] = true;
    grantLook({ effect: id });
    say(format(t("bought"), { name: t("item_" + id) }));
  }
  tone(620, 0.08, "sine", 0.03, 880);
  render();
  save();
}

function toggleWear(kind) {
  const look = state.look || {};
  const owned = state.owned || {};
  if (kind === "glasses") grantLook({ glasses: look.glasses === false });
  else if (kind === "beanie" || kind === "cap") {
    if (!owned[kind]) return say(t("buyNeed"));
    grantLook({ hat: look.hat === kind ? "none" : kind });
  } else if (kind === "phones") {
    if (!owned.phones) return say(t("buyNeed"));
    grantLook({ phones: !look.phones });
  } else if (kind === "dev") {
    if (!owned.dev) return say(t("buyNeed"));
    grantLook({ dev: !look.dev });
  } else if (kind === "neon" || kind === "spark") {
    if (!owned[kind]) return say(t("buyNeed"));
    grantLook({ effect: look.effect === kind ? "none" : kind });
  } else if (kind === "none") grantLook({ hat: "none", phones: false, dev: false, effect: "none" });
  render();
  save();
}

function renderLife() {
  ensureQuest();
  const coins = $("#coin-label");
  if (coins) coins.innerHTML = state.coins + " " + esc(t("coins"));
  const quest = $("#quest");
  if (quest) {
    const q = state.quest;
    const row = (label, now, max) => `<span class="${now >= max ? "done" : ""}"><b>${esc(label)}</b><em>${now}/${max}</em></span>`;
    quest.innerHTML = [
      row(t("questFood"), q.food || 0, 2),
      row(t("questPlay"), q.play || 0, 1),
      row(t("questBug"), q.bug || 0, 1),
    ].join("") + (q.done ? `<span class="done">${esc(t("questReady"))}</span>` : "");
  }
  const note = $("#chest-note");
  if (note) note.textContent = format(t("chestProgress"), { n: (state.chestActs || []).length });
  const shop = $("#shop");
  if (shop) {
    const items = [
      ["food", 8], ["coffee", 6], ["beanie", 14], ["cap", 14],
      ["phones", 12], ["dev", 16], ["neon", 18], ["spark", 18],
    ];
    shop.innerHTML = items.map(([id, price]) => `<button type="button" data-buy="${id}">${esc(t("item_" + id))} · ${price}</button>`).join("");
  }
  const bar = $("#wear-bar");
  if (bar) {
    const look = state.look || {};
    const owned = state.owned || {};
    const pill = (id, on) => `<button type="button" data-wear="${id}" class="${on ? "is-on" : ""}">${esc(t("item_" + id))}</button>`;
    bar.innerHTML = [
      pill("glasses", look.glasses !== false),
      owned.beanie ? pill("beanie", look.hat === "beanie") : "",
      owned.cap ? pill("cap", look.hat === "cap") : "",
      owned.phones ? pill("phones", !!look.phones) : "",
      owned.dev ? pill("dev", !!look.dev) : "",
      owned.neon ? pill("neon", look.effect === "neon") : "",
      owned.spark ? pill("spark", look.effect === "spark") : "",
    ].join("");
  }
}

function beginRest() {
  if (state.mode === "sleep" || state.crashed) return;
  stopChaos();
  state.mode = "sleep";
  state.action = "sleep";
  state.autoSleep = true;
  state.sleepLeft = 8;
  state.focusLeft = 0;
  punch("sleep");
  say(line("sleep"));
  pushLog("sleep");
  tone(196, 0.3, "sine", 0.03, 140);
}

function finishRest() {
  state.energy = Math.max(state.energy, 92);
  state.mood = Math.max(state.mood, 94);
  state.autoSleep = false;
  state.sleepLeft = 0;
  state.mode = "idle";
  state.action = "idle";
  punch("wake");
  say(t("restDone"));
  pushLog("rest");
  tone(440, 0.1, "triangle", 0.03, 660);
}

function answerChat(raw) {
  const q = String(raw || "").trim().toLowerCase();
  if (!q) return;
  if (/салом|hello|привет|hi\b|salom/.test(q)) {
    setAction("pet", 900);
    say(line("hello"));
  } else if (/ҳол|хол|how are|как дел|кайф/.test(q)) {
    say(line(moodKey() === "sleepy" && state.mode !== "sleep" ? "tired" : moodKey()));
    setAction(state.energy < 28 ? "sleep" : "pet", 1000);
  } else if (/код|code|напис|навис/.test(q)) {
    if (state.energy >= 12 && state.mode !== "sleep") doCode();
    else {
      say(line("tired"));
      if (state.energy <= 0) beginRest();
    }
  } else say(line(moodKey()));
  render();
  save();
}

function tick() {
  if (state.crashed) return;
  state.playMs += 1000;
  state.clockN = (state.clockN || 0) + 1;
  if (!state.dayLock && state.clockN % 12 === 0) {
    const base = typeof state.hour === "number" ? state.hour : new Date().getHours();
    state.hour = (base + 1) % 24;
  }
  if (state.mode === "sleep") {
    if (state.autoSleep) {
      apply({ energy: 12, mood: 8 }, true);
      state.sleepLeft -= 1;
      if (state.energy >= 90 || state.sleepLeft <= 0) finishRest();
    } else {
      apply({ energy: 3.2, mood: 2.2, coffee: -0.35, quality: -0.12 }, true);
    }
  } else if (state.mode === "focus") {
    apply({ energy: -1.3, coffee: -0.55, quality: 0.9, project: 1.15, mood: 0.15 }, true);
    state.focusLeft -= 1;
    if (state.focusLeft <= 0 || state.energy <= 0) {
      const gained = Math.max(0, Math.round(state.project - state.focusProject));
      state.mode = "idle";
      state.action = "idle";
      stage.dataset.action = "idle";
      pushLog("focusEnd", { n: gained });
      say(line("focusEnd"));
      toast(t("actFocus"), format(t("log_focusEnd"), { n: gained }));
    }
  } else if (state.mode !== "hunt") {
    const energyDrain = state.coffee < 20 ? 0.55 : 0.32;
    state.energy = clamp(state.energy - energyDrain);
    state.mood = clamp(state.mood - (dayPart() === "night" ? 0.4 : 0.18));
    state.quality = clamp(state.quality - 0.1);
    state.coffee = clamp(state.coffee - 0.26);
    maybeEvent();
  }
  if (state.mode !== "sleep" && state.mode !== "hunt" && state.mode !== "focus" && state.energy <= 0 && !state.crashed) {
    beginRest();
  } else if (!state.crashed && state.mode !== "sleep" && state.energy <= 0 && state.coffee <= 8 && state.mood <= 15) {
    state.crashed = true;
    openCrash();
  }
  if (state.godLeft > 0) {
    state.godLeft -= 1;
    if (state.godLeft <= 0) endGod();
  }
  if (!state.crashed && state.mode === "idle" && state.godLeft <= 0 && !state.glitched && Date.now() - lastInput > 16000 && !idlePoked) {
    idlePoked = true;
    stage.classList.add("is-glance");
    setTimeout(() => stage.classList.remove("is-glance"), 1800);
    say(state.lastAct === "coffee" ? "Ту боз ҳам ба ман кофе медиҳӣ? 😂" : "Эй, ту ҳоло ҳам инҷоӣ?");
  }
  if (Math.random() < 0.18 && state.mode !== "sleep") stage.classList.add("twitch");
  setTimeout(() => stage.classList.remove("twitch"), 360);
  checkAchievements();
  render();
  save();
}

function blink() {
  if (state.mode === "sleep" || reduced) return;
  stage.classList.add("blink");
  setTimeout(() => stage.classList.remove("blink"), 130);
}

function bind() {
  const langBox = $("#langs");
  if (langBox && !langBox.childElementCount) {
    LANG_LIST.forEach(([code, label]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.lang = code;
      btn.textContent = label;
      langBox.appendChild(btn);
    });
  }
  document.querySelectorAll("[data-act]").forEach((btn) => {
    btn.addEventListener("click", () => ACTIONS[btn.dataset.act]());
  });
  $("#btn-sound").addEventListener("click", () => {
    setSound(!state.sound);
    render();
    save();
  });
  $("#btn-lofi").addEventListener("click", () => {
    setLofi(!state.lofi);
    render();
    save();
  });
  const lamp = document.querySelector("#lamp");
  if (lamp) {
    lamp.addEventListener("click", (event) => {
      event.stopPropagation();
      state.lampOff = !state.lampOff;
      tone(state.lampOff ? 150 : 480, 0.12, "sine", 0.04);
      render();
      save();
    });
  }
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      applyI18n();
      save();
    });
  });
  document.querySelectorAll("[data-skin]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.skin = btn.dataset.skin;
      tone(600, 0.06, "sine", 0.03);
      render();
      save();
    });
  });
  document.querySelectorAll("[data-hero]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const heroes = ["cat", "robot", "fox", "bear", "bird"];
      state.hero = heroes.includes(btn.dataset.hero) ? btn.dataset.hero : "cat";
      tone(state.hero === "robot" ? 280 : 520, 0.08, "square", 0.02);
      render();
      save();
    });
  });
  const shop = $("#shop");
  if (shop) shop.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-buy]");
    if (btn) buy(btn.dataset.buy);
  });
  const wear = $("#wear-bar");
  if (wear) wear.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-wear]");
    if (btn) toggleWear(btn.dataset.wear);
  });
  const chat = $("#chat");
  if (chat) chat.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#chat-in");
    answerChat(input.value);
    input.value = "";
  });
  const chestOk = $("#chest-ok");
  if (chestOk) chestOk.addEventListener("click", () => { $("#chest").hidden = true; });
  const picker = $("#color-all");
  if (picker) {
    picker.addEventListener("input", () => {
      state.skin = picker.value;
      render();
    });
    picker.addEventListener("change", () => save());
  }
  document.querySelectorAll(".wx-bar button").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      state.weather = btn.dataset.wx || "";
      render();
      save();
    });
  });
  if (lcd) {
    lcd.addEventListener("input", () => {
      if (state.action === "keys" || state.action === "draw") return;
      state.codeText = lcd.value;
    });
    lcd.addEventListener("blur", () => {
      if (state.action !== "keys" && state.action !== "draw") state.codeText = lcd.value;
      save();
    });
  }
  const party = $("#party");
  if (party) party.addEventListener("click", () => { party.hidden = true; });
  const boot = $("#boot");
  if (boot) boot.addEventListener("click", finishBoot);
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabs button").forEach((tab) => tab.classList.remove("is-active"));
      btn.classList.add("is-active");
      const target = btn.dataset.scroll === "stage" ? stage : $("#" + btn.dataset.scroll);
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    });
  });
  nameInput.addEventListener("input", () => {
    state.name = nameInput.value.trim() ? cleanName(nameInput.value) : "";
  });
  nameInput.addEventListener("change", () => {
    const next = cleanName(nameInput.value);
    const changed = next !== "Нурик";
    state.name = next;
    if (changed) {
      state.named = true;
      pushLog("name", { name: next });
      checkAchievements();
    }
    render();
    save();
  });
  nameInput.addEventListener("blur", () => {
    if (!nameInput.value.trim()) {
      state.name = "Нурик";
      nameInput.value = state.name;
      render();
      save();
    }
  });
  const shellForm = $("#shell");
  const shellIn = $("#shell-in");
  const shellHist = [];
  let shellAt = -1;
  if (shellForm && shellIn) {
    shellForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = shellIn.value;
      if (value.trim()) {
        shellHist.push(value);
        if (shellHist.length > 24) shellHist.shift();
      }
      shellAt = -1;
      runShell(value);
      shellIn.value = "";
    });
    shellIn.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
      if (!shellHist.length) return;
      event.preventDefault();
      if (event.key === "ArrowUp") shellAt = Math.min(shellHist.length - 1, shellAt + 1);
      else shellAt = Math.max(-1, shellAt - 1);
      shellIn.value = shellAt < 0 ? "" : shellHist[shellHist.length - 1 - shellAt];
    });
  }
  nameInput.addEventListener("blur", () => {
    if (!nameInput.value.trim()) {
      state.name = "Нурик";
      nameInput.value = state.name;
      render();
      save();
    }
  });
  $("#btn-clear").addEventListener("click", () => {
    state.log = [{ id: "clear", vars: {}, time: Date.now() }];
    render();
    save();
  });
  $("#btn-reset").addEventListener("click", () => {
    showModal({
      title: t("resetTitle"),
      text: t("resetText"),
      ok: t("resetOk"),
      cancel: t("cancel"),
      onOk: resetAll,
    });
  });
  $("#modal-ok").addEventListener("click", () => {
    if (modalOnOk) modalOnOk();
  });
  $("#modal-cancel").addEventListener("click", closeModal);
  $("#btn-settings").addEventListener("click", () => {
    $("#settings").hidden = false;
  });
  $("#settings-close").addEventListener("click", () => {
    $("#settings").hidden = true;
  });
  $("#settings").addEventListener("click", (event) => {
    if (event.target === $("#settings")) $("#settings").hidden = true;
  });
  document.addEventListener("pointerdown", () => {
    lastInput = Date.now();
    idlePoked = false;
  });
  const restore = $("#restore-system");
  if (restore) restore.addEventListener("click", (event) => {
    event.stopPropagation();
    restoreSystem();
  });
  const bossBox = $("#boss");
  if (bossBox) bossBox.addEventListener("click", (event) => event.stopPropagation());
  const hit = (id, cost, dmg) => {
    const btn = $(id);
    if (btn) btn.addEventListener("click", (event) => {
      event.stopPropagation();
      bossHit(cost, dmg);
    });
  };
  hit("#boss-debug", 8, 18);
  hit("#boss-patch", 14, 28);
  hit("#boss-fix", 22, 40);
  const timeClose = $("#time-close");
  if (timeClose) timeClose.addEventListener("click", () => { $("#timebox").hidden = true; });
  const scanBox = $("#scan");
  if (scanBox) scanBox.addEventListener("click", () => { scanBox.hidden = true; });
  let portalClicks = [];
  document.querySelectorAll(".dots i").forEach((dot) => {
    dot.addEventListener("click", () => {
      const now = Date.now();
      portalClicks = portalClicks.filter((item) => now - item.t < 2500);
      portalClicks.push({ i: dot.dataset.dot, t: now });
      if (portalClicks.map((item) => item.i).join("").endsWith("012")) {
        portalClicks = [];
        openPortal();
      }
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#settings").hidden) {
      $("#settings").hidden = true;
      return;
    }
    if (event.key === "Escape" && !$("#modal").hidden && !$("#modal-cancel").hidden) closeModal();
    if (!$("#modal").hidden || !$("#settings").hidden) return;
    if (event.target === nameInput || event.target === lcd || event.target.closest("input, textarea")) return;
    const map = { c: "coffee", k: "code", b: "bug", s: "sleep", p: "pet", d: "deploy", h: "hunt", f: "focus", q: "duck", n: "keys", r: "book", t: "tune", y: "draw", u: "food", x: "chaos" };
    const act = map[event.key.toLowerCase()];
    if (!act) return;
    event.preventDefault();
    ACTIONS[act]();
  });
  stage.addEventListener("click", (event) => {
    if (event.target.closest("button, textarea, input, .wx-bar, .lamp")) return;
    if (state.mode === "hunt" || state.mode === "sleep" || state.crashed) return;
    doPet();
  });
  huntLayer.addEventListener("click", (event) => {
    if (state.mode !== "hunt") return;
    event.stopPropagation();
    const host = stage.getBoundingClientRect();
    const x = event.clientX - host.left;
    const y = event.clientY - host.top;
    const shot = document.createElement("i");
    shot.className = "shot";
    shot.style.left = x + "px";
    shot.style.top = y + "px";
    huntLayer.appendChild(shot);
    setTimeout(() => shot.remove(), 180);
    tone(160, 0.045, "square", 0.04);
    huntLayer.querySelectorAll(".bug:not(.pop)").forEach((bug) => {
      const rect = bug.getBoundingClientRect();
      const bx = rect.left - host.left + rect.width / 2;
      const by = rect.top - host.top + rect.height / 2;
      if (Math.hypot(bx - x, by - y) < 48) popBug(bug);
    });
  });
  const dayChip = $("#day-chip");
  if (dayChip) {
    dayChip.addEventListener("click", (event) => {
      event.stopPropagation();
      if (state.mode === "sleep") return;
      const order = ["morning", "afternoon", "night"];
      const current = state.dayLock || dayPart();
      const index = order.indexOf(current);
      state.dayLock = order[(index + 1) % order.length];
      say(format(t("dayLine"), { part: dayLabel() }));
      render();
      save();
    });
  }
  if (!reduced) {
    stage.addEventListener("pointermove", (event) => {
      if (state.godLeft > 0) return;
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
      parallax.style.transform = `translate(${x}px, ${y}px)`;
    });
    stage.addEventListener("pointerleave", () => {
      parallax.style.transform = "";
    });
  }
  document.addEventListener("pointerdown", () => {
    if (state.sound || state.lofi) actx();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) save();
  });
  window.addEventListener("resize", resizeCanvas);
  if (window.ResizeObserver) new ResizeObserver(resizeCanvas).observe(stage);
}

let bootedOnce = false;
function finishBoot() {
  if (bootedOnce) return;
  bootedOnce = true;
  document.documentElement.classList.add("booted");
  const boot = $("#boot");
  if (boot) boot.remove();
  if (state.mode === "sleep") return;
  if (state.energy <= 0) {
    state.crashed = false;
    beginRest();
    render();
    return;
  }
  if (state.crashed) {
    openCrash();
  } else if (state.log.some((entry) => entry.id === "away")) {
    say(line("away"));
  } else {
    say(line("hello"));
  }
}

const LANG_LIST = [
  ["tg", "Тоҷикӣ"], ["ru", "Русский"], ["en", "English"], ["uz", "Oʻzbek"],
  ["kk", "Қазақша"], ["ky", "Кыргызча"], ["tr", "Türkçe"], ["de", "Deutsch"],
  ["fr", "Français"], ["es", "Español"], ["pt", "Português"], ["it", "Italiano"],
  ["zh", "中文"], ["ja", "日本語"], ["ko", "한국어"], ["ar", "العربية"], ["hi", "हिन्दी"], ["fa", "فارسی"],
];

function adoptLang(code, ui) {
  const base = COPY.en || COPY.tg;
  COPY[code] = Object.assign({}, base, ui);
  COPY[code].speech = Object.assign({}, (base.speech || {}), (ui.speech || {}));
}

adoptLang("en", {
  sub: "Proposal: Zarra, a coder inside a living IDE",
  boot: "Zarra is warming up the keyboard...",
  inspector: "Inspector",
  terminal: "Terminal",
  tabScene: "Scene",
  tabStats: "Pulse",
  tabTerm: "Log",
  settings: "Settings",
  langLabel: "Language",
  nasim: "Breeze",
  sound: "Sound",
  dayMorning: "Morning",
  dayAfternoon: "Afternoon",
  dayNight: "Night",
  dayLine: "It is {part}. The sky matches the hour.",
  core: "Core actions",
  extra: "Extra functions",
  energy: "Energy",
  mood: "Mood",
  quality: "Code quality",
  coffee: "Coffee",
  project: "Project",
  skin: "Hoodie color",
  ach: "Achievements",
  name: "Name",
  logClear: "Clear log",
  reset: "Reset",
  keys: "C coffee · K code · B bugs · S sleep · P pet · D deploy · H hunt · F focus · X chaos",
  actBook: "Book", actBookSub: "reads",
  actTune: "Tune", actTuneSub: "melody",
  actDraw: "Sketch", actDrawSub: "doodle",
  actWave: "Hello", actWaveSub: "a wave",
  actDance: "Dance", actDanceSub: "moves",
  actJump: "Jump", actJumpSub: "up",
  actClap: "Clap", actClapSub: "two paws",
  actFood: "Food", actFoodSub: "energy",
  actChaos: "Chaos", actChaosSub: "force push",
  chaosWord: "CHAOS",
  shellPh: "help, coffee, git status, sudo...",
  shellHelp: "Commands: coffee, code, bug, sleep, food, chaos, pet, book, git status, whoami, ls, neofetch, sudo",
  shellUnknown: "No such command. Type help.",
  shellWho: "{name} · {hero} · Lv.{n}",
  shellStatus: "energy {e} · mood {m} · quality {q} · coffee {c} · v{v}.{p}",
  shellLs: "index.html   style.css   app.js   coffee/   bugs/   heart.txt",
  shellNeo: "{name} @ IDE   release v{v}.{p}   colorful hoodie   coffee in the blood",
  shellSudo: "sudo? I am not root. I am Zarra.",
  shellRm: "rm -rf? No. I will not eat the project.",
  shellClear: "Terminal cleared.",
  shellLampOn: "The lamp is on.",
  shellLampOff: "The lamp died. The city went to sleep.",
  log_shell: "{text}",
  coins: "coins",
  questTitle: "Daily mission",
  questFood: "Food",
  questPlay: "Play",
  questBug: "Bug",
  questReady: "Mission complete",
  questReward: "Mission complete! +{c} coins and XP",
  shopTitle: "Shop",
  wearTitle: "Outfit",
  chatPh: "Hello, How are you?, Write code",
  chestTitle: "Secret box",
  chestOk: "Take",
  chestProgress: "Secret box {n}/5",
  chestHat: "New hat: {name}",
  chestColor: "A new hoodie color",
  chestCoffee: "A hot coffee",
  chestFx: "Special effect: {name}",
  buyNeed: "Not enough coins.",
  bought: "Bought: {name}",
  restDone: "Rest is over. Energy is full and the mood is great.",
  item_food: "Food",
  item_coffee: "Coffee",
  item_beanie: "Beanie",
  item_cap: "Cap",
  item_phones: "Headphones",
  item_dev: "DEV",
  item_neon: "Neon",
  item_spark: "Sparks",
  item_glasses: "Glasses",
  log_rest: "rest · energy and mood restored",
  log_quest: "mission · +{c} coins",
  log_chest: "{text}",
  show: "Show",
  actGlitch: "Glitch", actGlitchSub: "reality",
  actClones: "Clones", actClonesSub: "army",
  actScan: "Scan", actStorm: "Storm", actStormSub: "green code",
  actBoss: "Boss", actBossSub: "giant bug",
  actTime: "Time", actTimeSub: "history",
  timeTitle: "Time machine",
  timeNote: "This is recorded history. The real clock stays put.",
  timeNow: "Today", timeYday: "A day ago",
  timeEmpty: "Yesterday is not recorded yet.",
  timeEnergy: "Energy", timeXp: "XP", timeActs: "Actions",
  scanLevel: "Level", scanMissions: "Missions done", scanStyle: "Play style",
  styleCode: "Code builder", styleBug: "Bug hunter", styleCoffee: "Coffee lead", styleMix: "Balanced",
  mut_laser: "Laser eyes", mut_wings: "Neon wings", mut_armor: "Cyber armor", mut_aura: "Electric aura",
  mut_common: "Common", mut_rare: "Rare", mut_epic: "Epic", mut_legendary: "Legendary",
  bossWin: "The boss fell!", bossLose: "Too little energy. The boss fled.",
  bossPrize: "Prize: electric aura.",
  lampOn: "Lights off", lampOff: "Lights on",
  tabSky: "Sky",
  hero: "Hero", heroCat: "Zarra", heroRobot: "Robot",
  heroFox: "Fox", heroBear: "Bear", heroBird: "Bird",
  allColors: "Any color",
  party: "Zarra reached level 100!",
  wxClear: "Clear", wxRain: "Rain", wxSnow: "Snow", wxHot: "Hot", wxCold: "Cold",
  log_book: "read a book · quality +{q}",
  log_tune: "hummed a tune · mood +{m}",
  log_draw: "sketched · mood +{m}",
  actCoffee: "Coffee", actCoffeeSub: "+energy",
  actCode: "Code", actCodeSub: "+project",
  actBug: "Bug", actBugSub: "+mood",
  actSleep: "Sleep", actSleepSub: "recover",
  actWake: "Wake", actWakeSub: "get up",
  actPet: "Pet", actPetSub: "purr",
  actDeploy: "Deploy", actDeploySub: "release",
  actHunt: "Hunt", actHuntSub: "mini-game",
  actFocus: "Focus", actFocusSub: "deep work",
  actDuck: "Duck", actDuckSub: "debug",
  actKeys: "Sit", actKeysSub: "keyboard",
  deployHint: "Deploy needs project ≥ 70 and quality ≥ 45",
  deployReady: "Ready to ship",
  mood_happy: "happy", mood_tired: "tired", mood_angry: "angry",
  mood_sleepy: "asleep", mood_hungry: "hungry", mood_flow: "in flow",
  ms_idea: "stage: idea", ms_proto: "stage: prototype", ms_feat: "stage: features",
  ms_polish: "stage: polish", ms_ready: "stage: ready",
  block_sleeping: "Wake Zarra first.",
  block_hunting: "The hunt is still on.",
  block_low: "Energy is low. Coffee or sleep.",
  block_deployProject: "The project is not at 70% yet.",
  block_deployQuality: "Code quality is too low to ship.",
  block_crashed: "Restart first.",
  block_focusing: "Focus is already on.",
  levelUp: "New level",
  levelUpBody: "Zarra reached level {n}.",
  rebootTitle: "System crashed",
  rebootText: "Energy, coffee and mood all ran out. Restart puts Zarra back at the desk.",
  rebootOk: "Restart",
  resetTitle: "Start over?",
  resetText: "Progress, achievements and the name will be cleared.",
  resetOk: "Clear",
  cancel: "Cancel",
  comboBody: "The action chain is alive.",
  huntWord: "Hunt",
  ach_coffee: "First coffee", ach_coder: "Ten commits", ach_flow: "Full flow",
  ach_ship: "First release", ach_hunter: "Hunter", ach_loyal: "Two minutes",
  ach_named: "Own name", ach_perfect: "All in place", ach_duck: "Duck mentor",
  achd_coffee: "Give coffee once", achd_coder: "Write code 10 times",
  achd_flow: "Raise every stat", achd_ship: "Deploy the project",
  achd_hunter: "Catch 15 bugs", achd_loyal: "Stay with Zarra for 2 minutes",
  achd_named: "Give Zarra a new name", achd_perfect: "All four stats above 80",
  achd_duck: "Explain code to the duck 3 times",
  log_boot: "MURRA OS is ready.",
  log_coffee: "coffee +{c} · energy +{e}",
  log_code: "code: project +{p} · energy −{e}",
  log_bug: "bug fixed · quality +{q}",
  log_sleep: "Zarra went to the bed",
  log_wake: "Zarra woke up",
  log_duck: "duck debug · quality +{q}",
  log_pet: "pet · mood +{m}",
  log_deploy: "shipped v{v}",
  log_hunt: "hunt: caught {n}",
  log_focus: "focus for {n}s",
  log_focusEnd: "focus ended · project +{n}",
  log_standup: "standup ran long",
  log_pizza: "free pizza arrived",
  log_prod: "production shook",
  log_idea: "an idea landed",
  log_chaos: "chaos · mood +{m}",
  log_away: "you were away {sec}s",
  log_reboot: "system came back",
  log_reset: "everything restarted",
  log_name: "new name: {name}",
  log_clear: "log cleared",
  speech: {
    hello: ["Hi. I am Zarra.", "Coffee first, then code."],
    happy: ["The code is soft today.", "Look at the tail. That is an approval."],
    tired: ["Energy is an old battery.", "A short nap, then another commit."],
    angry: ["This bug thinks it is the hero.", "Pet me. That is also a fix."],
    sleepy: ["zzz... the console is off.", "I am deploying in my sleep."],
    hungry: ["The cup is empty."],
    flow: ["Everything is in its place.", "I am in the flow."],
    coffee: ["The sip arrived. My eyes lit up."],
    food: ["Mmm, food! I have energy for studying again."],
    chaos: ["CHAOS! I force-pushed and the world flipped!", "NULL NULL NULL... and one more commit!"],
    code: ["This function likes its place."],
    bug: ["One bug left the desk."],
    sleep: ["I am going to my bed."],
    wake: ["Hello, world. I can type again."],
    pet: ["Purr purr.", "The tail signed: approved."],
    deploy: ["The release is out. The city lit up."],
    hunt: ["The bugs scattered. Shoot them."],
    book: ["One page. Even the bugs went quiet."],
    tune: ["A quiet melody. The tail dances too."],
    draw: ["A small sketch beside the code."],
    wave: ["Hello! Watch my paw.", "Hi, friend!"],
    dance: ["Dance! The tail is in it too.", "One-two, the code dances too."],
    jump: ["Hop! One jump toward the sky.", "I jumped. Energy flew."],
    clap: ["A clap for good code!", "Two paws together. Well done!"],
    huntEnd: ["Hunt over. Caught {n}."],
    focus: ["Quiet. Only code."],
    focusEnd: ["Focus ended. The project grew."],
    standup: ["Standup ran long again."],
    pizza: ["Pizza. And coffee with it."],
    prod: ["Production went red. Fix the bugs."],
    idea: ["A clean idea arrived."],
    away: ["Where were you? I waited."],
    reboot: ["I am back at the desk."],
    duck: ["I explained the bug to the duck. The duck got it.", "Quack means approved."],
  },
});

[
  ["uz", { settings: "Sozlama", langLabel: "Til", nasim: "Shabada", sound: "Ovoz", tabScene: "Sahna", tabStats: "Holat", tabTerm: "Qayd", dayMorning: "Ertalab", dayAfternoon: "Kunduzi", dayNight: "Kecha", core: "Asosiy", extra: "Qoʻshimcha", energy: "Energiya", mood: "Kayfiyat", quality: "Kod sifati", coffee: "Qahva", project: "Loyiha", skin: "Hud ranggi", name: "Ism", actCoffee: "Qahva", actCode: "Kod", actBug: "Bag", actSleep: "Uyqu", actWake: "Uygʻon", actPet: "Silash", actDeploy: "Deploy", actHunt: "Ov", actFocus: "Fokus", actDuck: "Oʻrdak", inspector: "Inspektor", terminal: "Terminal", ach: "Yutuqlar" }],
  ["kk", { settings: "Баптау", langLabel: "Тіл", nasim: "Самал", sound: "Дыбыс", tabScene: "Сахна", tabStats: "Күй", tabTerm: "Журнал", dayMorning: "Таң", dayAfternoon: "Түс", dayNight: "Түн", core: "Негізгі", extra: "Қосымша", energy: "Энергия", mood: "Көңіл", quality: "Код сапасы", coffee: "Кофе", project: "Жоба", skin: "Худи түсі", name: "Аты", actCoffee: "Кофе", actCode: "Код", actBug: "Баг", actSleep: "Ұйқы", actWake: "Оян", actPet: "Сипау", actHunt: "Аң", actFocus: "Фокус", actDuck: "Үйрек", inspector: "Инспектор", terminal: "Терминал", ach: "Жетістіктер" }],
  ["ky", { settings: "Жөндөө", langLabel: "Тил", nasim: "Шамал", sound: "Үн", tabScene: "Сахна", tabStats: "Абал", tabTerm: "Журнал", dayMorning: "Эртең", dayAfternoon: "Түш", dayNight: "Түн", core: "Негизги", extra: "Кошумча", energy: "Энергия", mood: "Маанай", quality: "Код сапаты", coffee: "Кофе", name: "Аты", actSleep: "Уйку", actWake: "Ойгон", actPet: "Сылоо", actHunt: "Аңчылык", actDuck: "Өрдөк", inspector: "Инспектор", ach: "Жетишкендиктер" }],
  ["tr", { settings: "Ayarlar", langLabel: "Dil", nasim: "Esinti", sound: "Ses", tabScene: "Sahne", tabStats: "Nabız", tabTerm: "Günlük", dayMorning: "Sabah", dayAfternoon: "Öğlen", dayNight: "Gece", core: "Temel", extra: "Ekstra", energy: "Enerji", mood: "Mod", quality: "Kod kalitesi", coffee: "Kahve", project: "Proje", skin: "Kapüşon rengi", name: "Ad", actCoffee: "Kahve", actCode: "Kod", actBug: "Böcek", actSleep: "Uyku", actWake: "Uyan", actPet: "Sev", actDeploy: "Yayın", actHunt: "Av", actFocus: "Odak", actDuck: "Ördek", inspector: "Denetçi", terminal: "Terminal", ach: "Başarılar" }],
  ["de", { settings: "Einstellungen", langLabel: "Sprache", nasim: "Brise", sound: "Ton", tabScene: "Szene", tabStats: "Puls", tabTerm: "Log", dayMorning: "Morgen", dayAfternoon: "Mittag", dayNight: "Nacht", core: "Basis", extra: "Extra", energy: "Energie", mood: "Stimmung", quality: "Codequalität", coffee: "Kaffee", project: "Projekt", skin: "Hoodie-Farbe", name: "Name", actCoffee: "Kaffee", actCode: "Code", actBug: "Bug", actSleep: "Schlaf", actWake: "Wach", actPet: "Streicheln", actHunt: "Jagd", actFocus: "Fokus", actDuck: "Ente", inspector: "Inspektor", terminal: "Terminal", ach: "Erfolge" }],
  ["fr", { settings: "Réglages", langLabel: "Langue", nasim: "Brise", sound: "Son", tabScene: "Scène", tabStats: "Pouls", tabTerm: "Journal", dayMorning: "Matin", dayAfternoon: "Après-midi", dayNight: "Nuit", core: "Essentiel", extra: "En plus", energy: "Énergie", mood: "Humeur", quality: "Qualité du code", coffee: "Café", project: "Projet", skin: "Couleur du hoodie", name: "Nom", actCoffee: "Café", actCode: "Code", actBug: "Bug", actSleep: "Dodo", actWake: "Réveil", actPet: "Câlin", actHunt: "Chasse", actFocus: "Focus", actDuck: "Canard", inspector: "Inspecteur", terminal: "Terminal", ach: "Succès" }],
  ["es", { settings: "Ajustes", langLabel: "Idioma", nasim: "Brisa", sound: "Sonido", tabScene: "Escena", tabStats: "Pulso", tabTerm: "Bitácora", dayMorning: "Mañana", dayAfternoon: "Tarde", dayNight: "Noche", core: "Base", extra: "Extra", energy: "Energía", mood: "Ánimo", quality: "Calidad del código", coffee: "Café", project: "Proyecto", skin: "Color de la hoodie", name: "Nombre", actCoffee: "Café", actCode: "Código", actBug: "Bug", actSleep: "Sueño", actWake: "Despertar", actPet: "Mimo", actHunt: "Caza", actFocus: "Foco", actDuck: "Pato", inspector: "Inspector", terminal: "Terminal", ach: "Logros" }],
  ["pt", { settings: "Ajustes", langLabel: "Idioma", nasim: "Brisa", sound: "Som", tabScene: "Cena", tabStats: "Pulso", tabTerm: "Registo", dayMorning: "Manhã", dayAfternoon: "Tarde", dayNight: "Noite", core: "Base", extra: "Extra", energy: "Energia", mood: "Humor", quality: "Qualidade do código", coffee: "Café", project: "Projeto", skin: "Cor do moletom", name: "Nome", actCoffee: "Café", actCode: "Código", actSleep: "Sono", actWake: "Acordar", actPet: "Carinho", actHunt: "Caça", actFocus: "Foco", actDuck: "Pato", inspector: "Inspetor", ach: "Conquistas" }],
  ["it", { settings: "Impostazioni", langLabel: "Lingua", nasim: "Brezza", sound: "Audio", tabScene: "Scena", tabStats: "Polso", tabTerm: "Diario", dayMorning: "Mattina", dayAfternoon: "Pomeriggio", dayNight: "Notte", core: "Base", extra: "Extra", energy: "Energia", mood: "Umore", quality: "Qualità del codice", coffee: "Caffè", name: "Nome", actCoffee: "Caffè", actSleep: "Sonno", actWake: "Sveglia", actPet: "Coccola", actHunt: "Caccia", actDuck: "Papera", inspector: "Ispettore", ach: "Traguardi" }],
  ["zh", { settings: "设置", langLabel: "语言", nasim: "微风", sound: "声音", tabScene: "场景", tabStats: "状态", tabTerm: "日志", dayMorning: "早晨", dayAfternoon: "下午", dayNight: "夜晚", core: "主要", extra: "附加", energy: "能量", mood: "心情", quality: "代码质量", coffee: "咖啡", project: "项目", skin: "帽衫颜色", name: "名字", actCoffee: "咖啡", actCode: "写码", actBug: "修虫", actSleep: "睡觉", actWake: "醒来", actPet: "摸摸", actHunt: "捕虫", actFocus: "专注", actDuck: "小鸭", inspector: "检查器", terminal: "终端", ach: "成就" }],
  ["ja", { settings: "設定", langLabel: "言語", nasim: "そよ風", sound: "音", tabScene: "場面", tabStats: "状態", tabTerm: "記録", dayMorning: "朝", dayAfternoon: "昼", dayNight: "夜", core: "基本", extra: "追加", energy: "元気", mood: "気分", quality: "コード品質", coffee: "コーヒー", name: "名前", actCoffee: "コーヒー", actCode: "コード", actSleep: "睡眠", actWake: "起きる", actPet: "なでる", actHunt: "狩り", actDuck: "アヒル", inspector: "インスペクタ", ach: "実績" }],
  ["ko", { settings: "설정", langLabel: "언어", nasim: "산들바람", sound: "소리", tabScene: "장면", tabStats: "상태", tabTerm: "기록", dayMorning: "아침", dayAfternoon: "낮", dayNight: "밤", core: "기본", extra: "추가", energy: "에너지", mood: "기분", quality: "코드 품질", coffee: "커피", name: "이름", actCoffee: "커피", actSleep: "잠", actWake: "기상", actPet: "쓰다듬기", actHunt: "사냥", actDuck: "오리", inspector: "검사기", ach: "업적" }],
  ["ar", { settings: "الإعدادات", langLabel: "اللغة", nasim: "نسيم", sound: "الصوت", tabScene: "المشهد", tabStats: "النبض", tabTerm: "السجل", dayMorning: "صباح", dayAfternoon: "ظهر", dayNight: "ليل", core: "الأساس", extra: "إضافي", energy: "الطاقة", mood: "المزاج", quality: "جودة الكود", coffee: "قهوة", name: "الاسم", actCoffee: "قهوة", actSleep: "نوم", actWake: "استيقظ", actPet: "مداعبة", actHunt: "صيد", actDuck: "بطة", inspector: "المفتش", ach: "الإنجازات" }],
  ["hi", { settings: "सेटिंग", langLabel: "भाषा", nasim: "हवा", sound: "आवाज़", tabScene: "दृश्य", tabStats: "स्थिति", tabTerm: "लॉग", dayMorning: "सुबह", dayAfternoon: "दोपहर", dayNight: "रात", core: "मुख्य", extra: "अतिरिक्त", energy: "ऊर्जा", mood: "मूड", quality: "कोड गुणवत्ता", coffee: "कॉफ़ी", name: "नाम", actCoffee: "कॉफ़ी", actSleep: "नींद", actWake: "जागो", actPet: "प्यार", actHunt: "शिकार", actDuck: "बत्तख", inspector: "इंस्पेक्टर", ach: "उपलब्धियाँ" }],
  ["fa", { settings: "تنظیمات", langLabel: "زبان", nasim: "نسیم", sound: "صدا", tabScene: "صحنه", tabStats: "حالت", tabTerm: "گزارش", dayMorning: "صبح", dayAfternoon: "ظهر", dayNight: "شب", core: "اصلی", extra: "اضافه", energy: "انرژی", mood: "حال", quality: "کیفیت کد", coffee: "قهوه", name: "نام", actCoffee: "قهوه", actSleep: "خواب", actWake: "بیدار", actPet: "نوازش", actHunt: "شکار", actDuck: "اردک", inspector: "بازرس", ach: "دستاوردها" }],
].forEach(([code, ui]) => adoptLang(code, ui));

load();
bind();
applyI18n();
if (state.energy <= 0 && state.mode !== "hunt") {
  state.crashed = false;
  beginRest();
}
render();
resizeCanvas();
requestAnimationFrame(paint);
setInterval(tick, 1000);
setInterval(blink, 4200);

if (document.documentElement.classList.contains("booted") || reduced) finishBoot();
else setTimeout(finishBoot, 1600);

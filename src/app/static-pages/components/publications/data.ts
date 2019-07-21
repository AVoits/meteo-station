export interface IArticles {
  year: number;
  items: IArticleItem[];
}


export interface IArticleItem {
  title: string;
  linkTo?: string;
  typeIcon?: string;
}


export const articles: IArticles[] = [

  {
    year: 2018,
    items: [
      {
        title: 'Н.С. Ясинский, Ю.С. Даценко. Закономерности формирования речного стока фосфора для целей гидрологического моделирования. Природообустройство, (1): 25-33, 2018.',
        linkTo: 'https://elibrary.ru/item.asp?id=32719065',
        typeIcon: 'link',
      },

    ],
  },
  {
    year: 2017,
    items: [
      {
        title: 'Ю. С. Даценко, В. В. Пуклаков, К. К. Эдельштейн. Анализ влияния абиотических факторов на развитие фитопланктона в малопроточном стратифицированном водохранилище. Труды Карельского научного центра РАН. Серия: Лимнология, (10):75–85, 2017.',
        linkTo: 'http://dx.doi.org/10.17076/lim611',
        typeIcon: 'link',
      },
      {
        title: 'А. В. Бабаев, Г. Т. Замана, В. В. Пуклаков. Модельный прогноз характеристик качества воды в Можайском водохранилище в условиях аномальной жары. Водоснабжение и санитарная техника, (9):11–16, 2017.',
        linkTo: 'http://vstmag.ru/ru/archives-all/2017/2017-09/7074-modelnyj-prognoz',
        typeIcon: 'link',
      },
      {
        title: 'К. К. Эдельштейн, В. В. Пуклаков, Ю. С. Даценко. Экспериментально-теоретические основы диагноза и прогноза цветения в водохранилищах–источниках муниципального водоснабжения. ВОДА MAGAZINE, (4 (116)):34–40, 2017.',
        linkTo: 'https://drive.google.com/open?id=1H2bWScJKPXL0ob8OnhM1HM--Bup7-OIg',
        typeIcon: 'file',
      },
      {
        title: 'М.Г. Гречушникова, Д.Д. Бадюков, А.С. Саввичев, В.С. Казанцев. Сезонные и пространственные изменения содержания метана в Можайском водохранилище в летний период. Метеорология и гидрология, (11):67–78, 2017.',
        linkTo: 'https://elibrary.ru/item.asp?id=30585872',
        typeIcon: 'link',
      },
      {
        title: 'К.К. Эдельштейн, А.М. Алабян, С.Л. Горин, А.А. Попрядухин. Гидрологические особенности крупнейших озер полуострова Ямал. Труды Карельского научного центра РАН, (10):3–16, 2017',
        linkTo: 'http://dx.doi.org/10.17076/lim571',
        typeIcon: 'link',
      },
      {
        title: 'Д.И. Соколов, О.Н. Ерина, М. А. Терёшина. Содержание органических веществ в притоках москворецких водохранилищ: возможности оценки при отсутствии данных мониторинга. Инженерные изыскания, (8):30–43, 2017',
        linkTo: 'https://drive.google.com/open?id=18kbpKOias24lWosODXlbJRjd2GGUCCee',
        typeIcon: 'file',
      },
      {
        title: 'Л.Е. Ефимова, Д.В. Ломова, Е.Р. Кременецкая, Е.В. Терская, Г.Н. Вишневская. Об обмене марганцем на границе вода-донные отложения в Можайском водохранилище. Вода: химия и экология, (2):80–87, 2017.',
        linkTo: 'https://drive.google.com/open?id=1FBxZDkh_q2wZ-WC8SveL_iTEcRwp9rVW',
        typeIcon: 'file',
      },
      {
        title: 'Sokolov, D.I., Erina, O. Dissolved organic matter in the river waters of moscow’s water supply sources: The effect of reservoirs. In Dissolved Organic Matter (DOM): Properties, Applications and Behavior. Pokrovsky O.S., Shirokova L.S. (Editors), pages 81–114. Nova Science Publishers, Inc., United States New York, 2017.',
        linkTo: 'https://www.researchgate.net/publication/320880611_Dissolved_organic_matter_in_the_river_waters_of_Moscows_water_supply_sources_The_effect_of_reservoirs',
        typeIcon: 'link',
      },

    ],
  },
  {
    year: 2016,
    items:
      [
        {
          title: 'Г.Н. Панин, Т.Ю. Выручалкина, М.Г. Гречушникова, И.В. Соломонова. Особенности гидрологического режима Цимлянского водохранилища при климатических изменениях в бассейне Дона. Водные ресурсы, 43(2):111, 2016.',
          linkTo: 'https://elibrary.ru/item.asp?id=25481507',
          typeIcon: 'link',
        },
        {
          title: 'Д.В. Ломова, М.Г. Гречушникова, Г.Н. Вишневская, Е.Р. Кременецкая, Л.Е. Ефимова, Д.И. Соколов. Внутриводоемные процессы в долинных водохранилищах различного возраста. Метеорология и гидрология, (12):63–74, 2016.',
          linkTo: 'https://elibrary.ru/item.asp?id=27527166',
          typeIcon: 'link',
        },
        {
          title: 'В.В. Пуклаков, К.К. Эдельштейн, Ю.С. Даценко. Оценка роли формы водохранилища при параметризации его экологического состояния в экстремальных гидрологических условиях. Метеорология и гидрология, (8):70–79, 2016.',
          linkTo: 'https://elibrary.ru/item.asp?id=26527017',
          typeIcon: 'link',
        },
        {
          title: 'Д.И. Соколов, О.Н. Ерина, К.К. Эдельштейн. Изменчивость гидролого-гидрохимических показателей в стратифицированном водохранилище.Вестник Московского университета. Серия 5: География, (5):61–68, 2016.',
          linkTo: 'https://elibrary.ru/item.asp?id=28157962',
          typeIcon: 'link',
        },
        {
          title: 'hhhhhh',
          linkTo: 'https://drive.google.com/open?id=1xrUB_N2qgZgKxWMQvMBXDMuf0iY7hqAy',
          typeIcon: 'file',
        },
        {
          title: 'Ю.С. Даценко. Влияние колебаний речного стока на трансформацию стока химических веществ в волжской системе водоснабжения г.Москвы. Вода: химия и экология, (8):38–44, 2016.',
          linkTo: 'https://drive.google.com/open?id=12sWWtLulzRqXa1XeEXNTGMdRoInYsA-e',
          typeIcon: 'file',
        },
        {
          title: 'Ю.С. Даценко. Оценка критических значений первичной продукции водоемов при появлении аноксии в гиполимнионе. Труды Карельского научного центра РАН, (9):90–94, 2016',
          linkTo: 'https://drive.google.com/open?id=14EszHopBTB9KlLAQz3p3qXi0T8zvDn4k',
          typeIcon: 'file',
        },
        {
          title: 'Ю.C. Даценко. Прогнозирование и регулирование содержания природного органического вещества в воде Волжского источника водоснабжения г.Москвы. Водное хозяйство России: проблемы, технологии, управление, (3):48–57, 2016',
          linkTo: 'https://drive.google.com/open?id=1gHfSw57GhZmPea6bJA2N36KGxq_3af54',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 2015,
    items:
      [
        {
          title: 'Ю.С. Даценко, О.Н. Ерина, В.В. Пуклаков. Моделирование развития фитопланктона в Рыбинском водохранилище. Водное хозяйство России: проблемы, технологии, управление, (1):32–40, 2015.',
          linkTo: 'https://elibrary.ru/item.asp?id=23369133',
          typeIcon: 'link',
        },
        {
          title: '',
          linkTo: 'https://drive.google.com/open?id=1SD9cvCwYCGduV7FI3zCpHBeOP5yK06W6',
          typeIcon: 'file',
        },
        {
          title: 'М.Г. Гречушникова, Д.В. Ломова, Л.E. Eфимова, Г.Н. Вишневская. Обменные процессы на границе воды-доные отложения в Истринском водохранилище в летний период. Вестник Московского университета. Серия 5: География, (2):86–92, 2015.',
          linkTo: 'http://vestnik5.geogr.msu.ru/jour/article/download/118/119',
          typeIcon: 'link',
        },
        {
          title: 'Е.Р. Кременецкая, С.Л. Белова, Д.И. Соколов, Д.В. Ломова. Особенности продуцирования и трансформации органического вещества в Можайском водохранилище при пониженном уровне воды. Водные ресурсы, 42(1):71–84, 2015.',
          linkTo: 'https://elibrary.ru/item.asp?id=22681979',
          typeIcon: 'link',
        },
        {
          title: 'Д.В. Ломова, Е.Р. Кременецкая, Г.Н. Вишневская. Смена факторов, контролирующих потребление кислорода донными отложениями, в разных районах водохранилища долииного типа (на примере Можайского водохранилища). Вода: химия и экология, (8):84–91, 2015.',
          linkTo: 'https://elibrary.ru/item.asp?id=25035512',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 2014,
    items:
      [
        {
          title: 'Ю.С. Даценко, О.Н. Ерина, В.В. Пуклаков, К. К.Эдельштейн. Модельная оценка влияния внутриводоёмных процессов на экологическое состояние стратифицированых водохранилищ. Вода: химия и экология, (9):9–14, 2014.',
          linkTo: 'https://elibrary.ru/item.asp?id=22470726',
          typeIcon: 'link',
        },
        {
          title: '',
          linkTo: 'https://drive.google.com/open?id=1N26ezqLSpMV-FpH8BnuIay904WvYw1Ze',
          typeIcon: 'file',
        },
        {
          title: 'М.Г. Гречушникова, Н.Г. Пуклакова, К.К. Эдельштейн. Возможное изменение гидрологического режима Цимлянского водохранилища при потеплении климата. Вестник Московского университета. Серия 5: География, (4):17–25, 2014.',
          linkTo: 'http://vestnik5.geogr.msu.ru/jour/article/download/79/80',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова. Результаты численного моделирования изменения режима Можайского и Истринского водохранилищ при реализации сценария А2 глобального потепления. Метеорология и гидрология, (3):96–97, 2014.',
          linkTo: 'https://elibrary.ru/item.asp?id=21229584',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова. Пространствeнныe и синоптичeскиe вариации физико-химичeских характeристик Можайского водохранилища. Вестник Тамбовского университета. Серия: Естественные и технические науки, 19(5):1671–1674, 2014.',
          linkTo: 'http://journals.tsutmb.ru/a8/upload/2018-04/1671-1674_Гречушникова.pdf',
          typeIcon: 'link',
        },
        {
          title: 'А.В. Гончаров, К.М. Абдуллаева. Особенности фитопланктона Москворецких водохранилищ в связи с их глубоководностью и изменением уровня воды. Ученые записки Российского государственного гидрометеорологического университета, (34):128–134, 2014.',
          linkTo: 'http://www.rshu.ru/university/notes/archive/issue34/uz34-128-133.pdf',
          typeIcon: 'link',
        },
        {
          title: 'О.Н. Ерина. Прогностические оценки изменения кислородного режима и качества воды в Можайском водохранилище в экстремально жаркую погоду.Вестник Московского университета. Серия 5: География, (6):10–15, 2014.',
          linkTo: 'https://drive.google.com/open?id=18TTSGBjPE3SFhyEEuVJQrnDaoaJztM9e',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 2013,
    items:
      [
        {
          title: 'М.Г. Гречушникова, К.К. Эдельштейн, Ю.С. Даценко, В.В. Пуклаков, О.Н. Ерина, Д.И. Соколов. Современная методика расчета формирования качества воды в водохранилищах - источниках питьевого водоснабжения. ВОДА MAGAZINE, (6(70)):48–54, 2013.',
          linkTo: 'https://elibrary.ru/item.asp?id=24998256',
          typeIcon: 'link',
        },
        {
          title: 'В.В. Пуклаков, М.Г. Ершова, К.К. Эдельштейн. Синоптическая изменчивость термодинамического состояния водных масс в Рыбинском водохранилище. Метеорология и гидрология, (1):70–89, 2013',
          linkTo: 'https://elibrary.ru/item.asp?id=18752385',
          typeIcon: 'link',
        },
        {
          title: 'К.К. Эдельштейн, Ю.С. Даценко, В.В. Пуклаков, Н.Г. Пуклакова. Научно-методические основы проектирования экологической реконструкции водохранилищ. Вода и экология, (2):55–71, 2013.',
          linkTo: 'https://elibrary.ru/item.asp?id=20274523',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова, Е.Р. Кременецкая. Внутрисуточные изменения валовой первичной продукции фитопланктона Можайского водохранилища при разных погодных условиях. Вода и экология: проблемы и решения, (3):65–79, 2013.',
          linkTo: 'https://elibrary.ru/item.asp?id=20274578',
          typeIcon: 'link',
        },
        {
          title: 'Д.И. Соколов. Изменение окисляемости и цветности воды под влиянием водохранилища. Вестник Московского университета. Серия 5: География, (6):9–15, 2013.',
          linkTo: 'https://drive.google.com/open?id=1mEsrD_RBQivNTuUY0UBFfCXQk28yLWKx',
          typeIcon: 'file',
        },
        {
          title: 'Е.Р. Кременецкая, В.В. Законнов, Д.В. Ломова, Д.И. Соколов. Структура внутриводоемных потоков взвешенных и органических веществ в Можайском водохранилище. Географический вестник, (3(26)):37–48, 2013.',
          linkTo: 'https://cyberleninka.ru/article/n/struktura-vnutrivodoemnyh-potokov-vzveshennyh-i-organicheskih-veschestv-v-mozhayskom-vodohranilische',
          typeIcon: 'link',
        },
        {
          title: 'Е.Р. Кременецкая, В.Ф. Бреховских, Г.Н. Вишневская, Д.В. Ломова, В.М. Перекальский, Д.И. Соколов. Влияние стратификации на седиментационные потоки в долинном водохранилище. Вестник РФФИ, (2(78)):51–56, 2013.',
          linkTo: 'http://www.rfbr.ru/rffi/ru/bulletin/o_1895262#51',
          typeIcon: 'link',
        },
        {
          title: 'Е.Р. Кременецкая, В.М. Перекальский, Д.В. Ломова. О роли взмучивания донных отложений в балансе взвешенного вещества в Можайском водохранилище в летний период. Вода: химия и экология, 56(2):12–18, 2013.',
          linkTo: 'https://elibrary.ru/item.asp?id=18835854',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 2012,
    items:
      [
        {
          title: 'К.К. Эдельштейн, М.Г. Гречушникова, Ю.С. Даценко, В.В. Пуклаков. Диагностическое моделирование внутриводоемных процессов в водохранилищах. Водные ресурсы, (4): 437, 2012.',
          linkTo: 'https://elibrary.ru/item.asp?id=17794323',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова. Возможные климатические изменения гидрологического режима в долинных водохранилищах. Метеорология и гидрология, (10):71–80, 2012.',
          linkTo: 'https://elibrary.ru/item.asp?id=18007111',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова, К.К. Эдельштейн. Возможные изменения гидрологического режима Рыбинского водохранилища при потеплении климата.Вестник Московского университета. Серия 5: География, 5(6): 61-67, 2012.',
          linkTo: 'https://elibrary.ru/item.asp?id=18780997',
          typeIcon: 'link',
        },
        {
          title: '',
          linkTo: 'https://drive.google.com/open?id=1MIGkMPvBreF6kPB1IlGpNVUHW-lPzvaq',
          typeIcon: 'file',
        },
        {
          title: 'Ю.С. Даценко, М.Б. Заславская. Балансовая оценка роли боковой приточности в формировании качества воды водохранилищ водораздельного бьефа канала им. Москвы. Водные ресурсы, (1): 15–23, 2012.',
          linkTo: 'https://elibrary.ru/item.asp?id=17238491',
          typeIcon: 'link',
        },
        {
          title: 'Д.В. Ломова, В.Ф. Бреховских, Г.Н. Вишневская, Е.Р. Кременецкая. Влияние внутриводоемных и метеорологических факторов на инетнсивность потребления кислорода грунтами долииного водохранилища. Метеорология и гидрология, (5):73–84, 2012.',
          linkTo: 'https://elibrary.ru/item.asp?id=17728643',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 2011,
    items:
      [
        {
          title: 'Г.Н. Панин, М.Г. Гречушникова, В.В. Пуклаков. Адаптация модели тепло-массообмена водоема с атмосферой с учетом эффекта мелководий на примере Иваньковского водохранилища. Водные ресурсы, 38(6):1–9, 2011.',
          linkTo: 'https://elibrary.ru/item.asp?id=17057714',
          typeIcon: 'link',
        },
        {
          title: 'Е.Р. Кременецкая, Д.В. Ломова, Д.И. Соколов, К.К. Эдельштейн. Седиментация взвесей в Можайском водохранилище. Водные ресурсы, 38(4):485–493, 2011.',
          linkTo: 'http://csl.isc.irk.ru/BD/Журналы/Водные%20ресурсы%202011/Т%2038%20№4/стр%20485-493.pdf',
          typeIcon: 'link',
        },
        {
          title: 'Д.И. Соколов, Е.Р. Кременецкая, Д.В. Ломова, А.Д. Аракельянц, П.С. Филиппова. Особенности режима мутности в долинном водохранилище при низком уровне воды. Вестник Московского университета. Серия 5: География, (3):27–32, 2011.',
          linkTo: 'https://elibrary.ru/item.asp?id=16907836',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 2010,
    items:
      [
        {
          title: 'К.К. Эдельштейн, А.В. Гончаров, М.Г. Ершова, В.В. Пуклаков, Н.Г. Пуклакова, Д.И. Соколов. Донные отложения старейшего подмосковного водохранилища. Водные ресурсы, 37(2):239–249, 2010',
          linkTo: 'https://elibrary.ru/item.asp?id=13726470',
          typeIcon: 'link',
        },
        {
          title: 'Ю.С. Даценко, В.В. Пуклаков. Моделирование развития фитопланктона в Можайском водохранилище. Вестник Московского университета. Серия 5: География, (3):43–47, 2010.',
          linkTo: 'https://elibrary.ru/item.asp?id=15258507',
          typeIcon: 'link',
        },
        {
          title: 'Ю.С. Даценко, К.К. Эдельштейн. Основные факторы формирования и режима качества воды в источниках муниципального водоснабжения. Вода: химия и экология, (8):25–31, 2010.',
          linkTo: 'https://elibrary.ru/item.asp?id=15200254',
          typeIcon: 'link',
        },
        {
          title: 'Ю.С. Даценко, В.В. Пуклаков. Моделирование развития фитопланктона в Можайском водохранилище. Вестник Московского университета. Серия 5: География, (3):43–47, 2010.',
          linkTo: 'https://drive.google.com/open?id=1vy-Qszl3-rxcbM9NY6CXb24C9foKJgVr',
          typeIcon: 'file',
        },
        {
          title: 'Ю.С. Даценко, К.К. Эдельштейн. Основные факторы формирования и режима качества воды в источниках муниципального водоснабжения. Вода: химия и экология, (8):25–31, 2010.',
          linkTo: 'https://elibrary.ru/item.asp?id=15200254',
          typeIcon: 'link',
        },
        {
          title: 'С.Л. Белова, Е.Р. Кременецкая. Влияние аномально низкого уровня воды на продукционно-деструкционные процессы в Можайском водохранилище.Водные ресурсы, 37(6):682–691, 2010.',
          linkTo: 'https://elibrary.ru/item.asp?id=15524513',
          typeIcon: 'link',
        },

      ],
  },
  {
    year: 2009,
    items: [
      {
        title: 'Ю.С. Даценко. Оценка трофического состояния водохранилищ Вазузско-Москворецкой системы. Бюллетень Московского общества испытателей природы. Отдел биологический, 114(3):245–249, 2009.',


      },
      {
        title: 'Ю.С. Даценко. Трансформация стока и состава органического вещества в Волжской системе водоснабжения г.Москвы. Водное хозяйство России: проблемы, технологии, управление, (2):26–32, 2009.',
        linkTo: 'https://elibrary.ru/item.asp?id=12964644',
        typeIcon: 'link',
      },
      {
        title: 'М.Г. Ершова, А.В. Гончаров, Ю.С. Даценко, М.Б. Заславская, В.В. Пуклаков, К.К. Эдельштейн, Д. И. Соколов. Экологическое состояние старейшего в Подмосковье водохранилища Сенеж. Бюллетень Московского общества испытателей природы. Отдел биологический, 114(3):295–312, 2009.',
        linkTo: 'https://elibrary.ru/item.asp?id=25783076',
        typeIcon: 'link',
      },

    ],
  }
  ,
  {
    year: 2008,
    items:
      [
        {
          title: 'М.Г. Гречушникова. Адаптация модели тепло-массообмена к расчету внутрисуточного режима температуры воды в стратифицированном водохранилище. Водные ресурсы, 35(6):671–680, 2008.',
          linkTo: 'https://elibrary.ru/item.asp?id=11533230',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 2007,
    items:
      [
        {
          title: 'А.В. Гончаров. Сравнение водохранилищ москворецко-вазузской водной системы по количественному развитию фитопланктона и степени евтрофирования. Водные ресурсы, 34(1):78–82, 2007',
          linkTo: 'https://elibrary.ru/item.asp?id=9479329',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 2006,
    items:
      [
        {
          title: 'Ю.С. Даценко, Е.И. Ветрова. Оценка трофического состояния озер умеренной зоны по характеристикам их кислородного режима. Вестник Московского университета. Серия 5: География, (1):36–39, 2006.',
          linkTo: 'https://drive.google.com/open?id=1x5pdpD1XJTOlA2VHuQ1pa_IUVVd4Bgp3',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 2005,
    items:
      [
        {
          title: 'Ю.С. Даценко, К.К. Эдельштейн, А.В. Гончаров, В.В. Пуклаков, С. С. Чернега. Изменчивость гидроэкологических характеристик водных масс в центральном плесе Можайского водохранилища. Водные ресурсы, 32(3):352–356, 2005',
          linkTo: 'https://elibrary.ru/item.asp?id=9139638',
          typeIcon: 'link',
        },
        {
          title: 'К.К. Эдельштейн, Ю.С. Даценко, В.В. Пуклаков. Экспериментальная оценка погрешности модельного расчета стратификации водной толщи в водохранилище. Вестник Московского университета. Серия 5: География, (6):20–24, 2005.',
          linkTo: 'https://drive.google.com/open?id=1Bkj2LtQxYF_NOsMYXttxD_H6AFEWEAMB',
          typeIcon: 'file',
        },
        {
          title: 'К.К. Эдельштейн, М.Г. Гречушникова, А.Э. Краснова. Внутригодовые и межгодовые колебания запаса воды в можайском вoдохранилище.Метеорология и гидрология, (5):53–61, 2005.',
          linkTo: 'https://drive.google.com/open?id=1BLEMteKdoSrLzROlEE1yaV42D6oFpoaF',
          typeIcon: 'file',
        },
        {
          title: 'К.К. Эдельштейн, М.Г. Ершова, М.Б. Заславская. Биохемогенный кальцит - важный компонент круговорота веществ в эвтрофном Можайском водохранилище. Водные ресурсы, 32(4):477–488, 2005.',
          linkTo: 'https://elibrary.ru/item.asp?id=9175874',
          typeIcon: 'link',
        },
        {
          title: 'А. В. Гончаров, Е. Г. Калашникова, М. И. Писарева. Оценка Вазузского и Яузского водохранилищ по степени эвтрофирования. Водоснабжение и санитарная техника, (1):21–24, 2005.',
          linkTo: 'https://elibrary.ru/item.asp?id=9145584',
          typeIcon: 'link',
        },
        {
          title: 'С.Л. Белова. Многолетние изменения в сообществе планктонных инфузорий Можайского водохранилища в условиях антропогенного воздействия.Биология внутренних вод, (1):57–63, 2005.',
          linkTo: 'https://drive.google.com/open?id=1-f3VSTnoZ-g14g95IxAQIu8i5GdLylmE',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 2004,
    items:
      [
        {
          title: 'Н.А. Гашкина, В.В. Пуклаков, Е.Р. Кременецкая. Динамика фосфора и балансовая оценка его обменных процессов с дном в Можайском водохранилище в вегетационный период. Водные ресурсы, 31(6):702–712, 2004',
          linkTo: 'https://elibrary.ru/item.asp?id=17351907',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова. Роль конвективного и ветрового перемешивания в термической стратификации неглубокого водоема. Вестник Московского университета. Серия 5: География, (2):31-38, 2004.',
          linkTo: 'https://elibrary.ru/item.asp?id=25448756',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова, К.К. Эдельштейн. Формирование синоптического и сезонного слоев температурного скачка в пресном водоеме. Вестник Московского университета. Серия 5: География, (3):31–38, 2004.',
          linkTo: 'https://elibrary.ru/item.asp?id=25448757',
          typeIcon: 'link',
        },
        {
          title: '',
          linkTo: 'https://drive.google.com/open?id=1lvui269XgHrxNRtdaMW0bAlqbx9jYSuZ',
          typeIcon: 'file',
        },
        {
          title: 'Ю.С. Даценко. Моделирование пространственно-временных изменений содержания фосфора в стратифицированных водохранилищах. Метеорология и гидрология, (2):88–95, 2004.',
          linkTo: 'https://drive.google.com/open?id=1YsJDbhoAQkBeRJMA2sIv-FZfWatq_ulM',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 2003,
    items:
      [
        {
          title: 'В.В. Пуклаков, Н.Г. Пуклакова. Расчет вертикального перемешивания в многослойной модели водохранилища. Метеорология и гидрология, (1):83–93, 2003.',
          linkTo: 'https://drive.google.com/open?id=1uaz9ZhmfUBgAXOgQzezuX5NVvHkRZZ7N',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 2002,
    items:
      [
        {
          title: 'В.В. Пуклаков, К.К. Эдельштейн, Е.Р. Кременецкая, Н.А. Гашкина. Самоочищение вод Можайского водохранилища зимой. Водные ресурсы, 29(6):711–720, 2002.',
          linkTo: 'https://elibrary.ru/item.asp?id=25831081',
          typeIcon: 'link',
        },
        {
          title: 'К.К. Эдельштейн,М.Г. Гречушникова, М.Г. Ершова, Н.Г. Пуклакова. Климатическая трансформация гидрологического режима и планктона в Можайском водохранилище. Метеорология и гидрология, (7):71–82, 2002.',
          linkTo: 'https://elibrary.ru/item.asp?id=21457719',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Гречушникова, А.В. Гончаров, А.Ю. Белов, Е.Г. Калашникова. Изменение гидротермического режима и интенсивность развития весеннего фитопланктона можайского водохранилища. Вестник Московского университета. Серия 5: География, (3):22, 2002.',
          linkTo: 'https://elibrary.ru/item.asp?id=25448759',
          typeIcon: 'link',
        },
        {
          title: 'А.В. Гончаров, М.Г. Ершова, М.И. Сахарова, К.К. Эдельштейн. Гидрологическая структура и распределение планктона в стратифицированном водохранилище в условиях ветрового воздействия. Биология внутренних вод, (2):38–45, 2002.',
          linkTo: 'https://elibrary.ru/item.asp?id=25547133',
          typeIcon: 'link',
        },
        {
          title: 'Ю.С. Даценко. Оценка влияния каскада волжских водохранилищ на среднемноголетний вынос фосфора в Каспий. Водные ресурсы, 29(5):636–638, 2002.',
          linkTo: 'https://drive.google.com/open?id=1pBqZrg9A',

        },
        {
          title: 'Ю.С. Даценко. Вертикальное распределение концентрации фосфора в Можайском водохранилище летом. Водные ресурсы, 29(3):358–364, 2002',
          linkTo: 'https://elibrary.ru/item.asp?id=13414936',
          typeIcon: 'link',
        },
        {
          title: 'Ю.С. Даценко. Влияние водообмена на развитие фитопланктона в водоемах. Вестник Московского университета. Серия 5: География, (2):29–33, 2002.',


        }

      ],
  }
  ,
  {
    year: 2001,
    items:
      [
        {
          title: 'В.В. Пуклаков, М.Г. Гречушникова. Термический режим москворецких водохранилищ. Метеорология и гидрология, (12):70–78, 2001.',
          linkTo: 'https://drive.google.com/open?id=1uAtwNq-B622QaVn0MXgawxDHkqsdyB',
          typeIcon: ' ',
        },

        {
          title: 'В.В. Пуклаков, К.К. Эдельштейн. Расчеты плотностных течений в Можайском водохранилище. Метеорология и гидрология, (5):94–104, 2001.',
          linkTo: 'https://drive.google.com/open?id=1bqoivfObpy9_iC9En63-0pX5GqIsRx8c',
          typeIcon: 'file',
        },
        {
          title: 'К.К. Эдельштейн, С.А. Иваненко, П.А. Патрик. Пространственная структура ветровых течений в долинном водохранилище. Метеорология и гидрология, (7):89–100, 2001.',
          linkTo: 'https://drive.google.com/open?id=1D3Kh5nAmV68swrbkN2mwgV69R948618p',
          typeIcon: 'file',
        },
        {
          title: 'С.Л. Белова. Фитопланктон, первичная продукция и деструкция органического вещества в Можайском водохранилище. Водные ресурсы, 28(5):615–620, 2001.',

          typeIcon: 'none',
        }
      ],
  }
  ,
  {
    year: 2000,
    items:
      [
        {
          title: 'М.Г. Гречушникова. Трансформация термической структуры стратифицированного водохранилища при изменениии погоды. Водные ресурсы, 27(2):159–166, 2000.',
          linkTo: 'https://drive.google.com/open?id=1ghGDmkL2Zy8icmlLLNYfR-UxKE1HK1Q7',
          typeIcon: 'file',
        },
        {
          title: 'Ю.С. Даценко, С.А. Иваненко, П.П. Корявов, К. К. Эдельштейн. Математическая модель динамики вод и распространения загрязнений в Иваньковском водохранилище. Водные ресурсы, 27(3):292–305, 2000.',
          linkTo: 'https://elibrary.ru/item.asp?id=25746265',
          typeIcon: 'link',
        },
        {
          title: 'М.Г. Ершова, М.Б. Заславская, Е.А. Захарова, К.К. Эдельштейн. Внутрисуточная трансформация состава воды в Можайском водохранилище. Водные ресурсы, 27(4), 2000.',
          linkTo: 'https://elibrary.ru/item.asp?id=25786037',
          typeIcon: 'link',
        },
        {
          title: 'К.К. Эдельштейн. Гидроэкологическая структура долинных водохранилищ. Вестник Московского университета. Серия 5: География, (5):23-28, 2000.',
          linkTo: 'https://drive.google.com/open?id=1h5u_EnXERkax3vIq8Bv58ZkjsJGIOR85',
          typeIcon: 'file',
        },
        {
          title: 'В.Ф. Бреховских, Е.Р. Кременецкая. О связи первичной продукции фитопланктона с некоторыми гидрофизическими характеристиками. Водные ресурсы, 27(4):445–448, 2000.',
          linkTo: 'https://drive.google.com/open?id=1uwQxwMytxbD-S50kXLsDPml8zYCJklty',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 1999,
    items:
      [
        {
          title: 'В.В. Пуклаков. Роль плотностных течений во внутреннем водообмене водохранилища. Водные ресурсы, 26(2):161–169, 1999.',
          linkTo: 'https://drive.google.com/open?id=1TqFWcSuhPO1tGMtLvEXNKztvsbgR6-ef',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 1998,
    items:
      [
        {
          title: 'Б.И. Cамолюбов, Н.С. Блохина, Ю.С. Даценко, М.Г. Ершова, Е.Р. Шакирова, К.К. Эдельштейн. Исследование гидрологических и гидрохимических полей Можайского водохранилища. Метеорология и гидрология, (3):82–91, 1998.',
          linkTo: 'https://drive.google.com/open?id=1xaHyejAqqI_f5ZTubmEWi-0tJ-YQo1Na',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 1996,
    items:
      [
        {
          title: 'В.В. Пуклаков, К.К. Эдельштейн. Оценка интенсивности продольной плотностной циркуляции вод весной в долинном водохранилище. Вестник Московского университета. Серия 5: География, (2):19–27, 1996.',
          linkTo: 'https://drive.google.com/open?id=1pbR-2dRevAGDjbnzA90CGnog7Cvwlp6Y',
          typeIcon: 'file',
        },
        {
          title: 'С.Г. Фаст, А.В. Леонов, Ю.С. Даценко. Динамика соединений фосфора и его внутренние потоки в экосистеме Можайского водохранилища. Водные ресурсы, (1):44–59, 1996.',
          linkTo: 'https://drive.google.com/open?id=1kMv7wn-twZ4rC3uH7rSm1_qTfoB2GcGB',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 1995,
    items:
      [
        {
          title: 'В.В. Пуклаков. Математическая модель процессов тепло- и массообмена в стратифицированном водохранилище. Вестник Московского университета. Серия 5: География, (1):22–29, 1995.',
          linkTo: 'https://drive.google.com/open?id=1ZyFS8333nw017w0LiqSJ3ChPWaYacBOB',
          typeIcon: 'file',
        },

      ],
  }
  ,
  {
    year: 1992,
    items:
      [
        {
          title: 'Edelstein, K.K. Global Hydrological Cycle and Its Continental Links.GeoJournal(1992) 27: 263.',
          linkTo: 'http://www.jstor.org/stable/41145504',
          typeIcon: 'link',
        },

      ],
  }
  ,
  {
    year: 1989,
    items:
      [
        {
          title: 'К.К. Эдельштейн, М.Г. Ершова, В.В. Пуклаков. Моделирование гидрологической структуры долинных водохранилищ. Вестник Московского университета. Серия 5: География, (2):50–58, 1989.',
          linkTo: 'https://drive.google.com/open?id=1aFdQHg_uO9kZIXNXe9A5y_n6LTic-pX_',
          typeIcon: 'file',
        },
      ]
  }
];


export const books = [
  {
    title: 'Гречушникова М.Г., Соколов Д.И., Гончаров А.В. Лимнологическая практика. М: РПА АПР, 2018. 74 с.',
    linkTo: 'https://drive.google.com/open?id=1tEX0Tgo_YpKGCifyPNbspJD1h0D0TCQF',
    typeIcon: 'file',
  },
  {
    title: 'Гидроэкологический режим водохранилищ Подмосковья (наблюдения, диагноз, прогноз). Под ред. К.К.Эдельштейна. М.: Перо, 2015. 285 с.',
    linkTo: 'https://drive.google.com/open?id=1LZQIuSjNbn2-KYNHhGfsgk5hxR3s44aY',
    typeIcon: 'file',
  }, {
    title: 'Эдельштейн К.К. Гидрология озер и водохранилищ. Учебник для ВУЗов. М: Перо, 2014. 399 с.',
    linkTo: 'https://drive.google.com/open?id=1GZriIpvWCAXcfw1chSBSz365f8ambZfY',
    typeIcon: 'file',
  }, {
    title: 'Ершова М.Г., Заславская М.Б., Даценко Ю.С., Эдельштейн К.К. Практикум по гидроэкологии озер и водохранилищ. Учебное пособие. М: МГУ, 2004.',
  }, {
    title: 'Даценко Ю.С., Эдельштейн К.К. Основы управления водными экосистемами: Методическое пособие. М.: МГУ, 2001. 108 с.',
    linkTo: 'https://drive.google.com/open?id=1lfOvyva9IDfQ1-iADo20L5IsiMQUhT-o',
    typeIcon: 'file',
  }, {
    title: 'Пуклаков В.В. Гидрологическая модель водохранилища: руководство для пользователей. М.: ГЕОС, 1999. 96 с.',

  }, {
    title: 'От истока до Москвы М.: Прима-Пресс-М, 1999. 312 с.',

  }, {
    title: 'Эдельштейн К.К., Даценко Ю.С. Лимнологическое моделирование: Метод. пособие. М.: МГУ, 1998. 82 с.',
    linkTo: 'https://drive.google.com/open?id=1UU32_YV-CaGuJ8c-bTw1K3NrcOZpGiiS',
    typeIcon: 'file',
  }, {
    title: 'Эдельштейн К.К. Водохранилища России: экологические проблемы, пути их решения. М.: ГЕОС, 1998. 277 с.',

  }, {

    title: 'Моделирование режима фосфора в долинном водохранилище (Под ред.К.К.Эдельштейна) М.: МГУ, 1995. 80 с.',
    linkTo: 'https://drive.google.com/open?id=1OKK3zV2PIoeN37jNmFZNWC6vVddmBgdp',
    typeIcon: 'file',
  }, {
    title: 'Эдельштейн К.К. Водные массы долинных водохранилищ. М.: МГУ, 1991. 176 с.',
    linkTo: 'https://drive.google.com/open?id=1F7KltqNkb5syf0wbED_aIA_4urao_oxG',
    typeIcon: 'file',
  }, {
    title: 'Эдельштейн К.К. Лимнологическая практика: Методические указания. М.: МГУ, 1989. 95 с.',

  }, {
    title: 'Комплексные исследования водохранилищ, вып.6. Водохранилища Москворецкой водной системы (Под ред. В.Д.Быкова, Н.Ю.Соколовой и К.К.Эдельштейна). М.: МГУ, 1985. 268 с.',
    linkTo: 'https://drive.google.com/open?id=1I8G43z8eBD6__uVf6luNV4fZpNTK7piG',
    typeIcon: 'file',
  }, {
    title: 'Мартынова М.В. Азот и фосфор в донных отложениях озер и водохранилищ. М.: Наука, 1984. 160 с.',

  }, {

    title: 'Рекомендации по использованию автоматизированных систем регистрации содержания растворенного кислорода, рН, температуры воды и подводной освещенности при изучении продукционно-деструкционных процессов. . М.: Ротапринт ВНИРО,1980. 71 с.',
  }, {
    title: 'Комплексные исследования водохранилищ, вып.5 (Под ред. В.Д.Быкова, И.М.Кисина и К.К.Эдельштейна). М.: МГУ, 1980. 232 с.',
  }, {
    title: 'Комплексные исследования водохранилищ, вып.3. Можайское водохранилище (Под ред. В.Д.Быкова и К.К.Эдельштейна). М.: МГУ, 1979. 400 с.',
    linkTo: 'https://drive.google.com/open?id=15RkLwq7uQ2UzCfhtEdg-mnJvKXqyiw64',
    typeIcon: 'file',
  }, {
    title: 'Комплексные исследования водохранилищ, вып.4 (Под ред. В.Д.Быкова, И.М.Кисина и К.К.Эдельштейна). М.: МГУ, 1978. 240 с.',
  }, {
    title: 'Гидрохимические исследования поверхностных и подземных вод района Можайского водохранилища. М.: МГУ, 1977. 111 с.',

  }, {
    title: 'Комплексные исследования водохранилищ, вып.2 (Под ред. В.Д.Быкова, Н.Ю.Соколовой и К.К.Эдельштейна). М.: МГУ, 1973. 224 с.',
  }, {
    title: 'Эдельштейн К.К. Лимнологическая практика (методические указания) М.: МГУ, 1972. 157 с.',

  }, {
    title: 'Комплексные исследования водохранилищ, вып.1 (Под ред. В.Д.Быкова и А.Н.Важнова). М.: МГУ, 1971. 250 с.',

  }, {
    title: 'Учинское и Можайское водохранилища. М.: МГУ, 1963. 423 с.',

  }, {
    title: 'Жучков Н.Д. Растительность района Красновидово. М.: МГУ, 1956.',

  }, {
    title: 'Труды Географической станции "Красновидово". М.: МГУ, 1948.',
  }
];



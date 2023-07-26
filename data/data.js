const data = {
  messages: {
    start:
      "سلام!🙋‍♂️\n 🤖 به ربات تلگرام پادکست ساگا خوش اومدید.\n✍️ پیامهایی که اینجا بنویسید برای ما ارسال میشه\n📱 برای اطلاعات بیشتر در مورد کارهایی که با این ربات می‌تونید بکنید => /help",
    notext: "⚠️ لطفاً فقط پیام متنی یا صوتی بفرستید!",
    contribute:
      "🤝 اگر دوست داشتید می‌تونید از ریپازیتوری گیت‌هاب زیر در توسعه و بهبود این ربات تلگرامی به عنوان یک پروژه متن باز کمک کنید. اطلاعات بیشتر در فایل README\nhttps://github.com/h-razavi/sagapodcast-bot",
    help: "💬 هر پیام متنی یا صوتی که برای این ربات بفرستید، مستقیماً به دست ما می‌رسه!\n/start - برای شروع ارسال پیام\n/contribute - برای کمک کردن به ما در توسعه این ربات تلگرامی\n/podlinks - لینک دسترسی پادکست ساگا در اپلیکیشن‌های پادگیر\n/sagamusic - موزیکهای در اپیزودهای پادکست ساگا شنیدید مرتب شده بر اساس هر اپیزود. اگر هم نمی‌دونید می‌خواید به چی گوش بدید، دکمه \"یه چیزی بفرست گوش بدیم\" رو بزنید تا یکی از این ترکها به صورت اتفاقی براتون ارسال بشه\n/randomfacts - اساطیر مورد نظرتون رو انتخاب کنید تا یه دانستنی کوتاه در مورد اون براتون ارسال بشه",
  },
  podApps: [
    [
      {
        text: "iTunes",
        url: "https://itunes.apple.com/us/podcast/saga/id1436192969",
      },
    ],
    [
      {
        text: "Google Podcasts",
        url: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82Y2Q0Y2E4L3BvZGNhc3QvcnNz",
      },
    ],
    [{ text: "Castbox", url: "https://castbox.fm/channel/id4853129" }],
    [{ text: "OverCast", url: "https://overcast.fm/itunes1436192969/saga" }],
    [
      {
        text: "PocketCasts",
        url: "https://play.pocketcasts.com/web/podcasts/index#/podcasts/show/8df01270-99a2-0136-7b93-27f978dac4db",
      },
    ],
    [
      {
        text: "PodBean",
        url: "https://www.podbean.com/podcast-detail/kyqh8-7525e/Saga-Podcast",
      },
    ],
    [
      {
        text: "Spotify",
        url: "https://open.spotify.com/show/5uX9ARaSvndEuevFpF2cBn",
      },
    ],
    [{ text: "Breakr", url: "https://www.breaker.audio/saga-2" }],
  ],
  facts: {
    greek: [
      "آفرودیت (الهه زیبایی) با رابطه برقرار کردن با برادرش آرِس (خدای جنگ)، به همسرش هفاستوس (خدای صنعتگری) خیانت کرد.",
      "هیدیس (خدای دنیای زیرزمینی مرگ) و برادر زئوس با وجود قدرت زیاد و جایگاه بالاش در بین خدایان، در بین 12 خدای المپ به حساب نمیاد.",
      'در جریان نامگذاری شهر آتن، آتنا و پوسایدون مسابقه‌ای برگزار کردند که طی اون پوسایدون یک چشمه آب و آتنا یک درخت زیتون به مردم این شهر هدیه داد و در نهایت مردم آتنا رو به عنوان الهه محافظ انتخاب کردند و شهر رو به افتخار اون "آتن" نامگذاری کردند.',
      "مادر آشیل یعنی تِتیس بعد از تولد، برای رویین‌تن شدن این قهرمان رو در رودخونه استیکس Styx فرو برد، اما چون مجبور بود اون رو از پاشنه بگیره، پاشنه آشیل آسیب‌پذیر باقی موند.",
      "ولین زن انسانی که توسط خدایان خلق شد، پاندورا (به معنای همه چیز تمام) بود که میراثش برای بقیه انسانها باز کردن جعبه‌ای بود حاوی تمام مشکلات و غصه‌های دنیا (معروف به جعبه پاندورا).",
      "آیریس الهه رنگین کمان و در کنار هرمس پیام‌رسان خدایان بود.",
      "هفاستوس خدای آهنگری و آتش که زشت و لنگ هم بود، درست بعد از تولد توسط مادرش هرا (یا پدرش زئوس بسته به نسخه داستان) از روی کوه المپ به زمین پرتاب شد.",
      "مورفیوس خدای خواب و رویا در یونان باستان بود که می‌تونست به هر شکلی که می‌خواد در بیاد و وارد خواب انسانها بشه.",
      "نموزینه الهه حافظه و مادر نه الهه میوز Muse (از زئوس) بود.",
      "دایانیسوس خدای شراب و خوشگذرانی و دیوانگی دو بار زاده شد. یک بار از شکم مادرش سِمِله که بعد از دیدن شکل واقعی زئوس مرد و یک بار از داخل ران پدرش زئوس!",
    ],
    norse: [
      "لوکی زمانی خودش رو به شکل یک اسب ماده در آورد و بعد از اون اسلپنیر، اسب هشت پای اودین و سریعترین اسب دنیا فرزند رو به دنیا آورد.",
      "اودین، خدای خدایان نورس علاوه بر این که خدای جنگ بود، خدای خرد، شعر، جادو و حتی مرگ هم بود.",
      "چهارشنبه روز اودینه چون درست روز وسط هفته (با شروع هفته از یکشنبه) و بالاترین نقطه اون هست. کلمه Wednesday در انگلیسی از یکی از اسمهای این خدا Woden میاد.",
      "در پایان دنیا و رگناروک، لوکی نیروهاش رو سوار یک کشتی می‌کنه به نام ناگلفار و به جنگ خدایان میره. نکته جالب در مورد این کشتی اینه که از ناخن پای مردگان ساخته شده!",
      "در والهالا گراز عظیم‌الجثه‌ای وجود داره به اسم ساهریمنیر که هر شب کشته میشه و خدایان و جنگجویان از گوشتش تغذیه می‌کنند. صبح روز بعد این گراز زنده میشه تا دوباره غذای شب رو با گوشتش تامین کنه.",
      "اولین انسانها آسک و اِمبلا نام داشتند که توسط اودین و برادرانش ویلی و وِه از تنه یک درخت زبان گنجشک تراشیده شدند.",
      "فرِیا الهه عشق و باروری بود. اما یک وجه ترسناکتر هم داشت که الهه کشته شدگان در جنگ بود که در سِسرومنیر (شبیه به والهالا) خونه داشتند. این الهه ردایی از جنس پر شاهین داشت که میتونست باهاش پرواز کنه و همینطور ارابه‌ای داشت که توسط دو گربه کشیده میشد.",
      "تور خدای رعد، چکش معروفش مهولنیر رو با یک کمربند و دستکش مخصوص  بلند می‌کرد و بدون این کمربند و دستکش کس دیگه‌ای قدرت استفاده از این سلاح قدرتمند رو نداشت.",
      "ایگدرازیل درختی بود که نه دنیای اساطیر نورس در امتداد تنه و شاخه‌های اون شکل گرفته بودند. معنای ایگدرازیل اسب اودین هست و به خاطر این که اودین خودش رو نه روز و نه شب از این درخت آویزون کرد بهش این اسم رو دادند.",
      "ترسناک‌ترین موجود در اساطیر نورس فِنریر گرگه، که قدرتش اونقدر زیادی که فقط با زنجیر جادویی گِلِپنیر مهار شده. در داستان بسته شدن فِنریر اومده که اجازه داد تا خدایان اون رو با گِلِپنیر ببندند و دوباره باز کنند به شرطی که تیر خدای جنگ دست راستش رو در دهان گرگ بگذاره. به خاطر خیانت خدایان به فنریر، دست تیر برای همیشه قطع شد.",
    ],
    egypt: [
      'مصریان باستان معتقد بودند انسانها توسط خدای "خنوم" از جنس گل رود نیل و بر روی یک صفحه گردان کوزه‌گری بوجود اومدند.',
      "در تصاویر ، ایزیس الهه جادو و مادرانگی، تاجی به شکل یک تخت پادشاهی به سر داره. تاج خواهرش نفیتیس، از اون هم بزرگتر بود و گاهی به شکل یک خونه و یک سبد به تصویر کشیده می شد.",
      "در کنار همه حقه‌ها و جنگهایی که در بین خدایان در جریان بود، نقش و شخصیت اونها هم در اساطیر مصر در طول سالها تغییر می کرد. مثلاً ایزیس اول از مادر هوروس به همسرش و دوباره به مادر این خدا تغییر کرد.",
      "آنوبیس خدای مرگ با سر شغال به تصویر کشیده می‌شد. گفته میشه دلیل این ارتباط این هست که در مصر باستان شغالها به سراغ قبر مردگان رفته و برای خوردن بقایا اون رو می‌کندند.",
      "تحوت یا تات، در داستانهای مختلف به عنوان میانجی بین خیر و شر، نظم و آشفتگی و خدایان در حال نزاع بود. تحوت همینطور خدای نوشتن، خِرد و گاهی ماه هم بود.",
      "گربه‌ها در مصر باستان موجودات مقدسی بودند. اونها تجسم الهه باستِت بوده و معمولا همراه با صاحبانشون مومیایی و دفن می‌شدند.",
      'احتمال میره که تلفظ آنوبیس در زبان مصر باستان "آناپا"   و تلفظ تحوت "دجِهوتی" بوده باشه.',
      "تحوت گاهی به شکل مردی با سر ایبیس (نوعی لک لک گرمسیری) یا بابون (میمون دم کوتاه) به تصویر کشیده میشد.",
      "فاصله زندگی کلئوپاترا ملکه مصری با دوران ما نزدیکتره تا فاصله اون با ساخته شدن اهرام مصر. این ملکه همینطور به 9 زبان مسلط بود.",
      "یونانی ها بعد از سفر به مصر و مشاهده خدایانشون سعی در معادل سازی اونها با خدایان خودشون کردن. مثلا تحوت معادل هرمس یونانی در نظر گرفته شد.         ",
    ],
    japan: [
      "در ژاپن، شینتو به عنوان دین رسمی این کشور شناخته میشه ولی اثرات مذهب بودایی، هندو و دائو به خوبی در رسوم و افسانه‌های این مردم مشخصه. ",
      "اساطیر ژاپن در مناطق مختلف اون ، ارتباط بسیار نزدیکی با موقعیت جغرافیایی منطقه داره و در مذهب شینتو هزاران خدا (یا روح) وجود داره که از فرهنگهای کشاورز محور یا ماهیگیر محور یا سایر روشهای زندگی به وجود اومدند.",
      "معروفترین خدایان اساطیر ژاپن شامل آماتراسو (الهه خورشید)، سوسانو (خدای توفان)، ایزاناگی و ایزانامی (اولین زوج هستی)، ایناری (خدای روباه مرتبط با برنج و باردهی) و هاچیمان (خدای جنگ و تیراندازی) هستند.",
      "طبق افسانه‌های درباری آماتراسو الهه خورشید، نوه‌اش نینیگی رو برای حکومت به ژاپن به زمین فرستاد. نینیگی با الهه‌ای محلی به اسم کونوهانا-ساکویا-هیمه ازدواج کرد و سه پسر به دنیا آورد. گفته میشه کوچکترین پسر اونها به نام جیمو اولین امپراتور ژاپن و پایه‌گذار خاندان سلطنتی ژاپن شد.",
      "در دوران حکومت یاماتو در قرن هشتم میلادی دو متن مهم منتشر شد که هر دو تبدیل به منبع مهمی در اساطیر ژاپنی شدند. یکی کوجیکی به معنای سند موقوعات باستانی و یکی نیهون شوکی به معنای شرح تاریخ ژاپن که همون داستانها رو با جزییات بیشتر و کاملتری تعریف میکنه.",
      "در منابع اساطیر ژاپن اومده که در ابتدا دنیا از یک توده پر آشوب ساخته شد. قسمتهای سبکتر به آسمان (یانگ) و قسمتهای سنگینتر به زمین (یین) تبدیل شدند. در این بین خدایان زیادی زاده شدند، مثل ایزاناگی و ایزانامی که جزیره های مختلف ژاپن و خدایان اونها رو به دنیا آوردند.",
      "در یکی از معروفترین اساطیر ژاپنی الهه ایزانامی بعد از به دنیا آوردن اولین خدا یعنی کاگوتسوچی میمیره و به یومی دنیای بعد از مرگ میره. ایزاناگی همسرش برای نجات اون به یومی میره و بر خلاف قولی که داده بود به بدن در حال پوسیده شدن ایزانامی نگاه میکنه. بعد از ترسش فرار میکنه و به دنیای زندگان بر میگرده و ایزانامی هم برای انتقام اعلام میکنه که هر روز هزار انسان رو خواهد کشت. اما ایزاناگی کوتاه نمیاد و میگه اون هم در عوض هر روز 1500 انسان به دنیا میاره.",
      "اولین امپراتور افسانه ای ژاپن \"امپراتور جیمو\" یا ایواربیکو Iwarebiko بود که از نوادگان نینیگی، فرزند خدایان بود",
      "در ژاپن سه گنجینه سلطنتی وجود داره که ارتباط امپراتور با خدایان دین شینتو رو تایید می کنه: \n\
      شمشیری به اسم کوساناگی نو تسوروگی Kusanagi no Tsurugi \n\
      آینه ای به اسم یاتا نو کاگامی Yata no Kagami \n\
      جواهری به اسم یاساکانی نو ماگاتاما Yasakani no Magatama \n\
      نکته جالب در مورد این گنجینه ها اینه که به خاطر این که جنبه اسطوره ای و رمز آلودشون رو از دست ندن، هیچ کس به جز خانواده امپراتور حق دسترسی و حتی نگاه کردن به اونها رو نداره و عکسی هم از اونها موجود نیست",
    ],
    celtic: [
      "اساطیر سلتیک و افسانه های مردم ایرلند و ولز یکی از مهمترین منابع تاثیرگذار بر افسانه های آرتوری بود",
      "خدایان سلتیک از نژادی بودند که به اون Tuatha Dé Danann یا قبیله خدایان گفته میشه",
      "در اساطیر سلتیک معمولاً الهه‌ای وجود داره که با اسمهای مختلفی مثل مِیو یا اریو شناخته میشه و نقش اون اعطای حق حاکمیت هست. پادشاه وقت به واسطه ازدواج با این الهه حق حکومت بر مردم رو پیدا میکنه",
      "در اساطیر سلتیک خدایان و موجودات افسانه‌ای مثل پریان روی زمین زندگی می کردند. اما بعد از ظهور انسانها این دنیا رو ترک کرده و به جهانی رفتند که سلتها بهش میگن \"جهان دیگرسو\"",
      "اساطیر سلتیک معمولاً به چهار دوره تقسیم میشه. دوره اساطیری، دوره اولستر، دوره فِنیان و دوره تاریخی ",
    ],
  },
  music: {
    /*tracks: [
      {
        episode: "opening",
        id: [
          "CQACAgQAAxkBAAIUUWTA9mUhNH9IFqxByp5DXOeDgdiuAAJYEQAC6czBUPz0TrLAqE4VLwQ",
        ],
      },
      {
        episode: "ep37",
        id: [
          "CQACAgQAAxkBAAIUT2TA9jMiuCZjAAG9CSYMvFIopdpieAACoBEAAunMwVDv_bqdjylSsy8E",
          "CQACAgQAAxkBAAIUTWTA9iZlqs_M9emkvJOFjvmtCu4pAAKhEQAC6czBUILUVcOHxR-qLwQ",
          "CQACAgQAAxkBAAIUS2TA9iJ7F4GLORfsHQABuEUywRgv1wACohEAAunMwVCkErkXRNABUS8E",
        ],
      },
      {
        episode: "ep36",
        id: [
          "CQACAgQAAxkBAAIURWTA9aNjg5LZ9ievBFErz1CEZeRTAALJEQAC6czBUHPLIFe_a6zHLwQ",
          "CQACAgQAAxkBAAIUR2TA9afj3redufG57Q4NHaBhsTvaAALIEQAC6czBUM2FTE35_ddPLwQ",
          "CQACAgQAAxkBAAIUSWTA9arkEgyNXA9H5WVJLh5Qwug7AALHEQAC6czBUGTutxOZ26llLwQ",
        ],
      },
      {
        episode: "ep35",
        id: [
          "CQACAgQAAxkBAAIUQ2TA9X4Xxwk4vHfze9W_06-wzcYjAALLEQAC6czBUMT5LJUvU40fLwQ",
        ],
      },
      {
        episode: "ep34",
        id: [
          "CQACAgQAAxkBAAIUOWTA9TGV_ff3CB6IejQ8FoXenODhAALPEQAC6czBUBHnmFNsriMXLwQ",
          "CQACAgQAAxkBAAIUPWTA9TewjIlpypp10qP30Xrnj57FAALNEQAC6czBUN5UjdnEffN1LwQ",
          "CQACAgQAAxkBAAIUP2TA9TtCxY4GA80jAfgucYURJFh4AALMEQAC6czBUHY7hJ15SuvdLwQ",
          "CQACAgQAAxkBAAIUQWTA9WUGMrbMpIWl0mwMTNqNtbSMAALOEQAC6czBUFQEcVJlIRNZLwQ",
        ],
      },
      {
        episode: "ep33",
        id: [
          "CQACAgQAAxkBAAIULWTA9Hi1KEyYVrS8E0Diw14lFSUWAALiDwACtnTQUBK_Gh49b7q2LwQ",
          "CQACAgQAAxkBAAIUL2TA9IGz68gskoWtcoKc9-JdOHr1AALhDwACtnTQUL-bkcDIZDEaLwQ",
          "CQACAgQAAxkBAAIUMWTA9IZMAcMaPbDYMA-V4hCAb15lAALgDwACtnTQUDvCvsRP6lUqLwQ",
          "CQACAgQAAxkBAAIUM2TA9IpecnDHEX5MZ5A70zfOQG3fAALfDwACtnTQUJcGxMylAAF41S8E",
          "CQACAgQAAxkBAAIUNWTA9JD61e8P4FAylI_xUB_woB4cAALeDwACtnTQUAMWiAEXCBc8LwQ",
          "CQACAgQAAxkBAAIUN2TA9JSLjNFt8WL-geXlpTzup_YlAALdDwACtnTQUJaKy0WET3rOLwQ",
        ],
      },
      {
        episode: "ep32",
        id: [
          "CQACAgQAAxkBAAIUJ2TA9DZsTcGFii3ogE4bHdaLtiGfAALoDwACtnTQUG71Y0kcei4YLwQ",
          "CQACAgQAAxkBAAIUKWTA9Du80kcuoDgKpZrKMzzhZOI5AALmDwACtnTQUHxY3cvKv4XyLwQ",
          "CQACAgQAAxkBAAIUK2TA9D-1lnj0nxulKuTmQpiyE_vdAALlDwACtnTQUBEoPw_cEQvyLwQ",
        ],
      },
      {
        episode: "ep31",
        id: [
          "CQACAgQAAxkBAAIUHWTA89obNeY8hTquwCRjH48EXHdtAALzDwACtnTQUOn0YUQjXgIbLwQ",
          "CQACAgQAAxkBAAIUH2TA897gGKJBTjwhNO9K25EcLa87AALyDwACtnTQUDsW0fcGkzyxLwQ",
          "CQACAgQAAxkBAAIUIWTA8-GXSRVgt1tPwOBA1CyBfyqjAALxDwACtnTQUL-SHlQWyNbBLwQ",
          "CQACAgQAAxkBAAIUI2TA8-Sg5tzTW2S-gMdXVNc9DW50AALwDwACtnTQUGgaJG8yTlfoLwQ",
          "CQACAgQAAxkBAAIUJWTA8-hsHQABgLoiQBRU9ab8bdhYZgAC7w8AArZ00FBDKaGFgepp4y8E",
        ],
      },
      {
        episode: "ep30",
        id: [
          "CQACAgQAAxkBAAIUDWTA8zXr6D2C8YjtqKv_0CZYSIPzAAIvDgACtnTYULK4Nau1IDA9LwQ",
          " CQACAgQAAxkBAAIUD2TA8zlgGeT7ddTbdgt9n-EoEoRWAAIuDgACtnTYUKZqODVH3UQOLwQ",
          "CQACAgQAAxkBAAIUEWTA8z1duId3NqX3s4GxNYRm6DzUAAItDgACtnTYUMH6m75w86uXLwQ",
          "CQACAgQAAxkBAAIUE2TA80F1VeR27GP3cNAWq5d0SG80AAIsDgACtnTYULGemhOLTvX_LwQ",
          "CQACAgQAAxkBAAIUFWTA80Z__4V_HmoCXqfLZtjWiV6dAAIrDgACtnTYUEDDhuH3VOYXLwQ",
          "CQACAgQAAxkBAAIUF2TA80kKBzVylGbgJ77GAAGlT7mkBgACKg4AArZ02FD_OXy-oqKqGi8E",
          "CQACAgQAAxkBAAIUGWTA8050DfGFvBdIOkLh8xbQfZc7AAIpDgACtnTYUG2YnYkWgWwgLwQ",
          "CQACAgQAAxkBAAIUG2TA81FHaLFWlIClbsqEh0F5bIU6AAIoDgACtnTYUFmGBjdLC13oLwQ",
        ],
      },
      {
        episode: "ep29",
        id: [
          "CQACAgQAAxkBAAIUAWTA8sUkYMpaKTcy0Tw8G06U2we8AAIwDgACtnTYUHWYcXZycn5XLwQ",
          "CQACAgQAAxkBAAIUA2TA8sgWvDhd-KYShE7F5M6J5CWqAAIxDgACtnTYUPiRKhi96btOLwQ",
          "CQACAgQAAxkBAAIUBWTA8sw7zKpHuCCUMXje3vpeaadcAAIyDgACtnTYUEaM36OVOOviLwQ",
          "CQACAgQAAxkBAAIUB2TA8s-2AupsRqRJct7NsnqOYyBjAAIzDgACtnTYUPjkjyB9_gNULwQ",
          "CQACAgQAAxkBAAIUCWTA8tU20zpEldS4XWxjZjKtAmS3AAI0DgACtnTYUIca4i3_Y1cMLwQ",
          "CQACAgQAAxkBAAIUC2TA8tjyOrkSGBp3cm8XtGiuS8tPAAI1DgACtnTYUM6pJFLuJ8pYLwQ",
        ],
      },
      {
        episode: "ep28",
        id: [
          "CQACAgQAAxkBAAIT-WTA8nIO0HqGgYMrB0nlKBZVpslOAAI4DgACtnTYUJPSHE7SlL45LwQ",
          "CQACAgQAAxkBAAIT-2TA8nU_oEfFY2mNvYqZ8ehVBE31AAI5DgACtnTYUMMnSXfUpBB7LwQ",
          "CQACAgQAAxkBAAIT_WTA8nmgF5D7etGiug_vpsrO8hDDAAI6DgACtnTYUAABli0qkJkvoy8E",
          "CQACAgQAAxkBAAIT_2TA8nyoULvwmLwoQnrZ3yQL_auuAAI7DgACtnTYULsDS-EClYZhLwQ",
        ],
      },
      {
        episode: "ep27",
        id: [
          "CQACAgQAAxkBAAIT8WTA8gZdPA0mH69zGf7L1NcRico4AAI8DgACtnTYUPMveUjOfb4jLwQ",
          "CQACAgQAAxkBAAIT82TA8goqe1feI6k7XmcwZuYMPJ8gAAI9DgACtnTYUGqy2I10AZ6lLwQ",
          "CQACAgQAAxkBAAIT9WTA8g5pzWApgpR6HkxlrLGrRaLWAAI_DgACtnTYUEjUMC3IIdvtLwQ",
          "CQACAgQAAxkBAAIT92TA8hJ6hDuNR-kK5xBzyW0QwjhyAAJADgACtnTYUGdfWxDkqhqVLwQ",
        ],
      },
      {
        episode: "ep26",
        id: [
          "CQACAgQAAxkBAAIT4WTA8WT3Y1g1k5uH4ZAkK1dIMXdaAAJBDgACtnTYUO7a6rRBzVqoLwQ",
          "CQACAgQAAxkBAAIT42TA8We4uMuTI8IVLn6lCJt-Ux1qAAJCDgACtnTYUJ_-fSb5-VkWLwQ",
          "CQACAgQAAxkBAAIT5WTA8WvAUxznoqrniTHI9hPqo3PaAAJDDgACtnTYUNzZsXsC6ivaLwQ",
          "CQACAgQAAxkBAAIT52TA8W-AUXbeFm8qoiCbteujqMKsAAJEDgACtnTYUKBUOHBMf7WhLwQ",
          "CQACAgQAAxkBAAIT6WTA8XNQgMhu2jET2xr6wHDP9k5-AAJFDgACtnTYUL5GrIEyB7-wLwQ",
          "CQACAgQAAxkBAAIT62TA8XrT8m4lBJ4efOak0Mr2aZxlAAJGDgACtnTYUK62Jo3IpeJDLwQ",
          "CQACAgQAAxkBAAIT7WTA8X1oHgGdV8rMXrYfgeW4LIGtAAJHDgACtnTYUBleZFQcAAENxy8E",
          "CQACAgQAAxkBAAIT72TA8YNAps0AASrPBq31ki8hkW_uUQACSA4AArZ02FAZc2z0UvCw0S8E",
        ],
      },
      {
        episode: "ep25",
        id: [
          "CQACAgQAAxkBAAIT22TA8RGyCSJAhOqM0q_U-xnY9HwjAAJJDgACtnTYUGX9gibemwFZLwQ",
          "CQACAgQAAxkBAAIT3WTA8RWRr-q9I5oNpuXYfJCp9fIoAAJKDgACtnTYUBt9j2vZmsyhLwQ",
          "CQACAgQAAxkBAAIT32TA8RnvyvaExDwQfgJ8eGWrekRhAAJLDgACtnTYUBlgBaX1dQNzLwQ",
        ],
      },
      {
        episode: "ep24",
        id: [
          'CQACAgQAAxkBAAITxWTA8DcUX_MFzUV__xV_V7B-CvO9AAJMDgACtnTYUOhOQVI05b_hLwQ',
          'CQACAgQAAxkBAAITyWTA8D7dya2Jju5QBikUBGgltLlmAAJPDgACtnTYUN1fktmUAw_ILwQ',
          'CQACAgQAAxkBAAITy2TA8EHEhH0_2eJrJVt3ZAVgaDLfAAK_EQAChCbQUBzIFJ-MOz1ELwQ',
          'CQACAgQAAxkBAAITzWTA8Ea50nJDQAJ5mUsKZNfNn4vfAALAEQAChCbQUDA6YoznL7_CLwQ',
          'CQACAgQAAxkBAAITz2TA8FmSTSuj-m95qiD_MPt1DHIPAALBEQAChCbQUGmwySOiSnvfLwQ',
          'CQACAgQAAxkBAAIT02TA8GVMSWMtDau9MSCF2SyWN0HrAALCEQAChCbQUOBtyLfKlTdBLwQ',
          'CQACAgQAAxkBAAIT1WTA8Gi5K3uXY8x_TLKjDhB-1jZpAALDEQAChCbQUOaQQfHZ_YtYLwQ',
          'CQACAgQAAxkBAAIT12TA8HYCga5bhP0RhvYmZP_Mf3izAALEEQAChCbQUFN1GK7q4w-MLwQ',
          'CQACAgQAAxkBAAIT2WTA8HoQIT9Y4Up1vVf0eP9QpmX7AALFEQAChCbQUFDqiIasNXRKLwQ',
        ],
      },
      {
        episode: "ep23",
        id: [
          "CQACAgQAAxkBAAITvWTA6OrZ7SgBbExHB6BVhNatnywYAALHEQAChCbQUJtt-_FdITW0LwQ",
          "CQACAgQAAxkBAAITv2TA6O_Kf-XVDhmUFD1AoMZZMlRxAALIEQAChCbQUJL7_bvoUnFcLwQ",
          "CQACAgQAAxkBAAITwWTA6PMiscq75aOMXMBcXiSt2cTGAALJEQAChCbQUNJwwqsV3G1jLwQ",
          "CQACAgQAAxkBAAITw2TA6PerGm6ltt6y5qdOkSWTfSnjAALKEQAChCbQULvcL8joZ_QlLwQ",
        ],
      },
      {
        episode: "ep22",
        id: [
          "CQACAgQAAxkBAAITq2TA5_CFOysO9E-_q_kc7_LpyafvAALOEQAChCbQUBcKw8XSU0S4LwQ",
          "CQACAgQAAxkBAAITrWTA5_NPfUzT4KSYXhbDCMveXM_IAALPEQAChCbQUIxJ2LoyFchnLwQ",
          "CQACAgQAAxkBAAITr2TA5_ZWwyKoM0DUb4VIzI1cJt2wAALQEQAChCbQUBsDC3U8P3vILwQ",
          "CQACAgQAAxkBAAITsWTA5_pmKVoe05rvrx_fwvgrmV-IAALSEQAChCbQUP9fh3kEKTE_LwQ",
          "CQACAgQAAxkBAAITs2TA5_79-lRjW25LzfaZHE9U99-gAALTEQAChCbQUPgn0rezK_a2LwQ",
          "CQACAgQAAxkBAAITtWTA6AViJJ442Uy0LIDJhX3VeB8nAALUEQAChCbQUCGUObQhW_XhLwQ",
          "CQACAgQAAxkBAAITt2TA6A-Db-dUDxpmTZuTlSVcaMGkAALXEQAChCbQUMu5CNeId5XFLwQ",
          "CQACAgQAAxkBAAITuWTA6BTCtYk8TsZZN1zpjlBPCL6mAALYEQAChCbQULLIwPvMSus3LwQ",
        ],
      },
      {
        episode: "ep21",
        id: [
          "CQACAgQAAxkBAAITo2TA52vZviCc0hI8qlQ1lk0-AAGQNgAC3hEAAoQm0FDgZzH9em7bOC8E",
          "CQACAgQAAxkBAAITpWTA53AzjT8v1KC4V6UAApz5BTHhAALfEQAChCbQUK7hKZWot6xELwQ",
          "CQACAgQAAxkBAAITp2TA53QF5GC19pjcd8KNNGyyIJ60AALgEQAChCbQUOs-DFk_UIOZLwQ",
          "CQACAgQAAxkBAAITqWTA53hLX8i8cXm_vV774J9cDpDMAALhEQAChCbQUG-9BqLdEFPyLwQ",
        ],
      },
      {
        episode: "ep20",
        id: [
          'CQACAgQAAxkBAAITkWTA4448xpiAo9LzS5SFAAHA5r7xOwACGgkAAhVYGVC_NGrjEwzAsC8E',
          'CQACAgQAAxkBAAITk2TA45oElmG2RucYTeawUskhsQYkAAIbCQACFVgZUBfs8Nv-25EiLwQ',
          'CQACAgQAAxkBAAITlWTA46iBykNjhDG3NuYYMP9TNZwDAAIcCQACFVgZUPSFAwbxuEULLwQ',
          'CQACAgQAAxkBAAITl2TA47RAIJtQerz-aPe-5vS_RqI9AAIdCQACFVgZUH_Xrmth4zyKLwQ',
          'CQACAgQAAxkBAAITmWTA4708UNu6OAHjNCiQjKowiGNlAAIeCQACFVgZUNUhjP6ovWBeLwQ',
          'CQACAgQAAxkBAAITm2TA48Tg0j50tWxdeguPpsrXOAvdAAIfCQACFVgZUFT---qWgwTDLwQ',
          'CQACAgQAAxkBAAITnWTA49AUa-7LpFcGDrAIt_hYd-DRAAIgCQACFVgZUJiPOdSwxBd6LwQ',
          'CQACAgQAAxkBAAITn2TA4-Fr_T1W5yeIQFBhF_ncAm7HAAIiCQACFVgZUGRB7Kh0ET4jLwQ',
          'CQACAgQAAxkBAAIToWTA4-3FtaQvHldhmjCGv91DXhAiAAIjCQACFVgZUOIrcTSNquj5LwQ',
        ],
      },
      {
        episode: "ep19",
        id: [
          "CQACAgQAAxkBAAITg2TA4vjm8_gp2RKGATWquvaiHll8AALdCAACYXxQUVxc_bFNcSe9LwQ",
          "CQACAgQAAxkBAAIThWTA4v3AmBhjyuI5LbZyElQsif1rAALeCAACYXxQUWfgF4SN85P9LwQ",
          "CQACAgQAAxkBAAITh2TA4wABYcbk9MXEDBmq8vQzhk4E9gAC3wgAAmF8UFFHzVWMLEUOFi8E",
          "CQACAgQAAxkBAAITiWTA4wpUlhHFOCfNRZvhra2qLt3IAAJEBgACJJvhUYc1JnEWGB0nLwQ",
          "CQACAgQAAxkBAAITi2TA4w0moWD-fP91xe5m-rQcXG6WAAJFBgACJJvhUbNNC1vCAvZ6LwQ",
          "CQACAgQAAxkBAAITjWTA4xCW_xz47KtAwqowsRs69Gr5AAJGBgACJJvhUWx7_fD7ZqKYLwQ",
          "CQACAgQAAxkBAAITj2TA4xSVzO4u1yEqSeYAAbWkW4OnGAACRwYAAiSb4VE2iMxumc6Pay8E",
        ],
      },
      {
        episode: "ep18",
        id: [
          "CQACAgQAAxkBAAITfWTA4pxt3PnKi7PSvFBQuK6qmG94AAJtCAACCCQIUF-EkosSFm0iLwQ",
          "CQACAgQAAxkBAAITf2TA4p_n0dylXyZibRWelqs4_QlYAAJuCAACCCQIULmwxbKQx5oKLwQ",
          "CQACAgQAAxkBAAITgWTA4qO_6Q6_SDysf3FiZmshXV8aAAJvCAACCCQIUAHDt7Jyo-pkLwQ",
        ],
      },
      {
        episode: "ep17",
        id: [
          "CQACAgQAAxkBAAITdWTA4jTvAAGyTw4TRDti9112kOCUkgAC3wYAAhoAAYhRi7RFFEuDJkYvBA",
          "CQACAgQAAxkBAAITd2TA4jjjvx5d2elWN9E_F40teUc0AALhBgACGgABiFH0Ju7FJ75XMS8E",
          "CQACAgQAAxkBAAITeWTA4jznG4cdhETQ3qprqsLmdwMhAALiBgACGgABiFGB0Hq6yh90Yi8E",
          "CQACAgQAAxkBAAITe2TA4j_s7LYvAAEXhkLgq37Ho9HueQAC5AYAAhoAAYhRnX1CmuYLkAYvBA",
        ],
      },
      {
        episode: "ep16",
        id: [
          "CQACAgQAAxkBAAITb2TA4a-n7Xr28n137VsqCNYkKynFAAI9GAAChCbgUJeVQ4w6HntRLwQ",
          "CQACAgQAAxkBAAITcWTA4bLNQ_EGM0tgSy_NpKkswEZhAAI-GAAChCbgUK75MogLPYAjLwQ",
          "CQACAgQAAxkBAAITc2TA4bY3t1iqtuQ8ILD1DXUQtOopAAI_GAAChCbgUAlhPzWJJFjyLwQ",
        ],
      },
      {
        episode: "ep15",
        id: [
          "CQACAgQAAxkBAAITZ2TA4N0ygykFQE8tt35FcQGUoi2qAAJAGAAChCbgUEDjklSJzrpOLwQ",
          "CQACAgQAAxkBAAITaWTA4OHCBy5mnjbTiN7bG57pD9nyAAJBGAAChCbgUMQ0gJc1KCO-LwQ",
          "CQACAgQAAxkBAAITa2TA4OWXzjAh2EbZD9VEXevNwVvBAAJCGAAChCbgUCUV3X-PsdmrLwQ",
          "CQACAgQAAxkBAAITbWTA4OlN_iGoVYcqaMOJyCtzvCKBAAJDGAAChCbgUDl_Ob6xrl-aLwQ",
        ],
      },
      {
        episode: "ep14",
        id: [
          "CQACAgQAAxkBAAITYWTA4JBFvkgkHaCuPka-cXr8c292AAJEGAAChCbgUOTqKtVFqZBDLwQ",
          "CQACAgQAAxkBAAITY2TA4JN9XkdGExVbO-KFjJWzgpdkAAJFGAAChCbgUIgEwFEhA7reLwQ",
          "CQACAgQAAxkBAAITZWTA4JfneoPuK043YPgKk4cmY284AAJGGAAChCbgUFIb5Ze8YU1VLwQ",
        ],
      },
      {
        episode: "ep13",
        id: [
          "CQACAgQAAxkBAAITV2TA4BlF778pBh80_o9IZ6jv2DAcAAJIGAAChCbgUO4qtly1i_GZLwQ",
          "CQACAgQAAxkBAAITWWTA4BzlW9FFJ_F3lsovLcVtU2T4AAJJGAAChCbgUKNPioiqOtasLwQ",
          "CQACAgQAAxkBAAITW2TA4CDyM8iTBtReuGrrVlXAGxsJAAJKGAAChCbgUH-JR3eVvEdnLwQ",
          "CQACAgQAAxkBAAITXWTA4CcpRm-p86_jc_RUtylKJa5OAAJLGAAChCbgUPSwGHwK3SpZLwQ",
          "CQACAgQAAxkBAAITX2TA4CvgfYn0bTJiAkT3PSBbzlIYAAJMGAAChCbgUMYv7Z7UqNULLwQ",
        ],
      },
      {
        episode: "ep12",
        id: [
          "CQACAgQAAxkBAAITTWTA359blRgM9CWBiNOIlYH8VeZFAAJOGAAChCbgUArjcvXcV-AyLwQ",
          "CQACAgQAAxkBAAITT2TA36Nsear7aZSpcwg4FuGn9rUvAAJPGAAChCbgUAu02LsVgotQLwQ",
          "CQACAgQAAxkBAAITUWTA36mDK6AxBScBTgJUE-DFXldNAAJQGAAChCbgUHiyxEhH-EAmLwQ",
          "CQACAgQAAxkBAAITU2TA37KkRdslJQABbO0pYZNNXeSkmgACUxgAAoQm4FBBCBzs4N1JXS8E",
          "CQACAgQAAxkBAAITVWTA37ZCs0huspkzoPb37tZBOpwPAAJUGAAChCbgUFWvR_o3GxL2LwQ",
        ],
      },
      {
        episode: "ep11",
        id: [
          "CQACAgQAAxkBAAITM2TA3hmdt78sqe10n0Zu4WOnP2IvAAJYGAAChCbgUEmN5cAOe7EgLwQ",
          "CQACAgQAAxkBAAITNWTA3nUyNPqo708-Cn3QG086C0z9AAJXGAAChCbgUKyQvxyps6tMLwQ",
          "CQACAgQAAxkBAAITN2TA3np02DH00axoRM0hMKc-bGA_AAJWGAAChCbgUHSCP9muZ9_XLwQ",
        ],
      },
    ],*/
    buttons: [
      [{ text: "پلی لیست Spotify", url: "https://open.spotify.com/playlist/1MGR3D30ambG0ubqx8WBMU?si=6fb50bb6e6ce4dae" }],
      [{ text: "کانال تلگرام Saga Music", url: "https://t.me/sagapodcast_music" }],
      /*[{ text: "اپیزود 37", callback_data: "ep37" },{ text: "اپیزود 36", callback_data: "ep36" },{ text: "اپیزود 35", callback_data: "ep35" }],
      [{ text: "اپیزود 34", callback_data: "ep34" },{ text: "اپیزود 33", callback_data: "ep33" },{ text: "اپیزود 32", callback_data: "ep32" }],
      [{ text: "اپیزود 31", callback_data: "ep31" },{ text: "اپیزود 30", callback_data: "ep30" },{ text: "اپیزود 29", callback_data: "ep29" }],
      [{ text: "اپیزود 28", callback_data: "ep28" },{ text: "اپیزود 27", callback_data: "ep27" },{ text: "اپیزود 26", callback_data: "ep26" }],
      [{ text: "اپیزود 25", callback_data: "ep25" },{ text: "اپیزود 24", callback_data: "ep24" },{ text: "اپیزود 23", callback_data: "ep23" }],
      [{ text: "اپیزود 22", callback_data: "ep22" },{ text: "اپیزود 21", callback_data: "ep21" },{ text: "اپیزود 20", callback_data: "ep20" }],
      [{ text: "اپیزود 19", callback_data: "ep19" },{ text: "اپیزود 18", callback_data: "ep18" },{ text: "اپیزود 17", callback_data: "ep17" }],
      [{ text: "اپیزود 16", callback_data: "ep16" },{ text: "اپیزود 15", callback_data: "ep15" },{ text: "اپیزود 14", callback_data: "ep14" }],
      [{ text: "اپیزود 13", callback_data: "ep13" },{ text: "اپیزود 12", callback_data: "ep12" },{ text: "اپیزود 11", callback_data: "ep11" }],*/
    ],
  },
};

module.exports = data;

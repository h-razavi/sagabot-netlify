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
    tracks: [
      {
        episode: "opening",
        id: [
          "CQACAgQAAxkBAAEi4Spkl_0Q86_3_tPwx1CjUz_paOVl6wACWBEAAunMwVCsxsJ-sJoB4S8E",
        ],
      },
      {
        episode: "ep37",
        id: [
          "CQACAgQAAxkBAAEi4iZkmBcxbXBubyJH_WLauFQeyoG7tAACoBEAAunMwVDwjx79pVKBjC8E",
          "CQACAgQAAxkBAAEi4ihkmBdVIK92KMQkXePpP1spiWXSnwACoREAAunMwVDgT60nkbxWcC8E",
          "CQACAgQAAxkBAAEi4i5kmBd2vo5A5vputOKaSn1J6CTl5AACohEAAunMwVBUF8v6RAo2XC8E",
        ],
      },
      {
        episode: "ep36",
        id: [
          "CQACAgQAAxkBAAEi4x5kmDe8Z0JfpIXuTVevR8y7gLzrDwACxxEAAunMwVBA7klIWpAJEi8E",
          "CQACAgQAAxkBAAEi4yFkmDfnG9xlh8246EnikQx-5pVx8wACyBEAAunMwVAByopVP017Vy8E",
          "CQACAgQAAxkBAAEi4ylkmDgHdLyLHvAzi5DdCp478saWSQACyREAAunMwVBCqX4uiJZa4i8E",
        ],
      },
      {
        episode: "ep35",
        id: [
          "CQACAgQAAxkBAAEi40FkmDmg-zilCwbWhUtkQ1MODudBxAACyxEAAunMwVDkwPlWQ63m0y8E",
        ],
      },
      {
        episode: "ep34",
        id: [
          "CQACAgQAAxkBAAEi40RkmDot3c-3E6D2-Rf3M5uDGlGC_AACzBEAAunMwVBxYahl0ewokC8E",
          "CQACAgQAAxkBAAEi40ZkmDpLeoSpNwwM8hCceAvkbQdKhAACzREAAunMwVDUf0rTSuCCvy8E",
          "CQACAgQAAxkBAAEi40hkmDpxsqrcMq92MEN3CY2S1KPrgwACzhEAAunMwVD2NRcOMdar5C8E",
          "CQACAgQAAxkBAAEi40pkmDqILJAGhxzM_uGveOflvjhj_wACzxEAAunMwVAydDtuoFKyiy8E",
        ],
      },
      {
        episode: "ep33",
        id: [
          "CQACAgQAAxkBAAEi629kmYIU47apnf1pOmtjRf_ft8cP_QAC3g8AArZ00FAi-N-Mx9qdjS8E",
          "CQACAgQAAxkBAAEi63FkmYJnmfwHmYQ7l4qbjqUQa5oPQAAC3w8AArZ00FCw_yn8qTCKtC8E",
          "CQACAgQAAxkBAAEi63NkmYKAZxDrkqZGjV5NOhvAbgNQSAAC4A8AArZ00FAkwK_GuMUPFC8E",
          "CQACAgQAAxkBAAEi63VkmYKVngmelYgH_pzy5nAHe_I8CQAC4Q8AArZ00FDQKle84RP9Qy8E",
          "CQACAgQAAxkBAAEi63dkmYK8rVO7eGp948PeK5vcrim_oAAC4g8AArZ00FCa8spnQxBlVS8E",
          "CQACAgQAAxkBAAEi63lkmYLSMHS3uBZy150lhIlELyuiNAAC3Q8AArZ00FAsf-cGunnr6S8E",
        ],
      },
      {
        episode: "ep32",
        id: [
          "CQACAgQAAxkBAAEi65VkmYRX5GPTLKBuMDU9C3DfLypcmwAC5Q8AArZ00FDhUKK7BwIsJy8E",
          "CQACAgQAAxkBAAEi65tkmYSnXYLya9W3N1s-zrrMjLxXnAAC5g8AArZ00FCWxPA2unh0gy8E",
          "CQACAgQAAxkBAAEi651kmYTRkfUjyTs5BAMr-vCdQlySigAC6A8AArZ00FBuBvPHX0GZey8E",
        ],
      },
      {
        episode: "ep31",
        id: [
          "CQACAgQAAxkBAAEi67ZkmYY6ZncsAmVnQVYGHE417ZwU3gAC8A8AArZ00FCoL5DntPo68i8E",
          "CQACAgQAAxkBAAEi67pkmYaM-_01ukthGCxYjWQ1LFVRbAAC8Q8AArZ00FBr6lpU7Tm7yS8E",
          "CQACAgQAAxkBAAEi679kmYbEqe-tSOj_7uADMbFNpoJeQQAC8g8AArZ00FCsMNuXPB7QRy8E",
          "CQACAgQAAxkBAAEi68FkmYbgKv4C1Ue9r3aSlF8m_G8WUwAC8w8AArZ00FDvQ_XycIryXi8E",
          "CQACAgQAAxkBAAEi68NkmYb2jg2rR3SFcdjApAKfg5Q0gQAC7w8AArZ00FBSiE08-lvwHy8E",
        ],
      },
      {
        episode: "ep30",
        id: [
          "CQACAgQAAxkBAAEi86BkmoMoQSox66j_rAluDNMLqRauOAACKQ4AArZ02FCqT_xg4ifLry8E",
          "CQACAgQAAxkBAAEi86JkmoNGgShlMdA6cqwNJTPyGlkiCQACKg4AArZ02FD-ZjmIp_HKaS8E",
          "CQACAgQAAxkBAAEi86RkmoNi253gApqfPlnNusNQukLUMAACKw4AArZ02FBxgCEGar-mXy8E",
          "CQACAgQAAxkBAAEi86ZkmoOAsEK0Ln09y5VJ995dsLUKUwACLA4AArZ02FCn147xki_KtS8E",
          "CQACAgQAAxkBAAEi86hkmoOajcsbG-kSi0VgoJmOJP2pXgACLQ4AArZ02FDQk33b9BiyqS8E",
          "CQACAgQAAxkBAAEi86tkmoO8BxsFi5MdbL1FX6CeM9_9eAACLg4AArZ02FA9_UgzCp1Pdy8E",
          "CQACAgQAAxkBAAEi861kmoPaPkG5mEHNxGPZEwn87wABLNIAAi8OAAK2dNhQrLlJfjZlWfQvBA",
          "CQACAgQAAxkBAAEi869kmoP0C0C90Fy8XWJOQ6PCnEUPzgACKA4AArZ02FAsgLr0NQHtpi8E",
        ],
      },
      {
        episode: "ep29",
        id: [
          "CQACAgQAAxkBAAEi871kmoU_EaoFbOGNEhxzfq4u8RYK6gACMA4AArZ02FDW2PVp8yKmBC8E",
          "CQACAgQAAxkBAAEi88NkmoVbjD3LjAcas5XgXM-HFbXpkAACMQ4AArZ02FBFiTzNMPeqEC8E",
          "CQACAgQAAxkBAAEi89RkmoXhKQMPahxIBKJRi-gIvJU6_AACMg4AArZ02FBe9ML3MKcF8C8E",
          "CQACAgQAAxkBAAEi89ZkmoX_VBPWKml2vg6JTpkJ_hzFowACMw4AArZ02FDXsXY_eb3sri8E",
          "CQACAgQAAxkBAAEi89pkmoYVkGvgO2S0G47g9vXNrAQHGwACNA4AArZ02FDWfH_c1oDeIy8E",
          "CQACAgQAAxkBAAEi895kmoYx4920zNBhPhqVpdFZ1ZxaEwACNQ4AArZ02FBXiWDCc6kznS8E",
        ],
      },
      {
        episode: "ep28",
        id: [
          "CQACAgQAAxkBAAEi8_pkmokaoAJ2We-aTwQL2s8mCpm-9gACOA4AArZ02FCMIsjKEXixnS8E",
          "CQACAgQAAxkBAAEi8_xkmokxzPWNC-Jwz9IS_9BZW4xpXwACOQ4AArZ02FCEtvbY22QkQi8E",
          "CQACAgQAAxkBAAEi8_5kmolXsSbBPFmXyfvXO11QklvhdQACOg4AArZ02FDgaTO70A2Fsy8E",
          "CQACAgQAAxkBAAEi9AJkmolvjkDKvI4VMSluZvvS2yD2zgACOw4AArZ02FAnRCr6c-P9NC8E",
        ],
      },
      {
        episode: "ep27",
        id: [
          "CQACAgQAAxkBAAEi9ARkmon43z--aIgM9rZBiq5kRLku3gACPA4AArZ02FBtthEt4OPD_S8E",
          "CQACAgQAAxkBAAEi9AZkmoobmmM-Mt70LKBR88T5PaNYKAACPQ4AArZ02FCqOxPKPmCusC8E",
          "CQACAgQAAxkBAAEi9AhkmopALE2_0sWnE0pFRarbCBndygACPw4AArZ02FCcF62G7DZISy8E",
          "CQACAgQAAxkBAAEi9Axkmopvl1Bh3CiYzCRcjPmKv2oGRQACQA4AArZ02FA23xw5j3qHBC8E",
        ],
      },
      {
        episode: "ep26",
        id: [
          "CQACAgQAAxkBAAEi9BZkmosR52V-e8QG7DZZqw6MW2hrqAACQQ4AArZ02FAq-Rs176HrUy8E",
          "CQACAgQAAxkBAAEi9Bhkmos9-F0x3kCHKmGQK43xdLDzagACQg4AArZ02FCLPy8bGNTCJS8E",
          "CQACAgQAAxkBAAEi9BpkmotcRiKhwoaEtcEEPPkUilN50QACQw4AArZ02FDuDERq2z7LVi8E",
          "CQACAgQAAxkBAAEi9BxkmotsZhXCGrG6q0XCa35PmhKimQACRA4AArZ02FD3TCKTHwbAIC8E",
          "CQACAgQAAxkBAAEi9B5kmouA5pHNWOp1vpJp_Lvmwbt3wgACRQ4AArZ02FDOjAkHO1428S8E",
          "CQACAgQAAxkBAAEi9CJkmouTqdmaR7y8jHnU2GLkNabW4wACRg4AArZ02FAs1D5OfrrjRi8E",
          "CQACAgQAAxkBAAEi9ChkmousJnwuuH9HP3Y06h8AAX05uYMAAkcOAAK2dNhQ4KBGIijnbhYvBA",
          "CQACAgQAAxkBAAEi9CxkmovDebXVOuIZNZTGsEK22ogf_gACSA4AArZ02FA01LkQlV56wi8E",
        ],
      },
      {
        episode: "ep25",
        id: [
          "CQACAgQAAxkBAAEi9DtkmozPw4VgzzqCJmjRgr6cVh9LrgACSQ4AArZ02FASZbm-6iVQ3y8E",
          "CQACAgQAAxkBAAEi9D1kmozzglsKKgVW9dxJO3vqfkb9jAACSg4AArZ02FDCVdSemFzJqS8E",
          "CQACAgQAAxkBAAEi9D9kmo0PdxvPoBOAdqWtPz4fmMgnWwACSw4AArZ02FCRTyqXznkltC8E",
        ],
      },
      {
        episode: "ep24",
        id: [
          "CQACAgQAAxkBAAEi9Epkmo3o3i5xm-GhaITMz068lVKZDQACTA4AArZ02FAOs18mgStxLC8E",
          "CQACAgQAAxkBAAEi9Exkmo4BoYdkzICMfwYW_ntMzYaclgACTQ4AArZ02FBj2ojxybRkwy8E",
          "CQACAgQAAxkBAAEi9E5kmo4UUWoOKuFPM35B8xAqIQOs6gACTw4AArZ02FBjCmaE3fyGSS8E",
          "CQACAgQAAxkBAAEi9FBkmo49uIJR9efs1jrHxcrowWKGhgACvxEAAoQm0FDtkWHdpWrk3i8E",
          "CQACAgQAAxkBAAEi9FJkmo5NkA1GMjYONRztEleT0mgbsgACwBEAAoQm0FCf3mgmhJW-0S8E",
          "CQACAgQAAxkBAAEi9FRkmo6uSMAWIeAMQqESDS5UCmSG9wACwREAAoQm0FDd3VVm4hrr_C8E",
          "CQACAgQAAxkBAAEi9FZkmo7L_RuyiYRL0_VwJU39JWGaewACwhEAAoQm0FAMcZcXZidyBy8E",
          "CQACAgQAAxkBAAEi9Fhkmo7iW_YFoPAn-WH9sArGTe4xTgACwxEAAoQm0FBcykQOBBeWPS8E",
          "CQACAgQAAxkBAAEi9Fpkmo76UTSZ1gRl_c6kiUdspefZngACxBEAAoQm0FBbh-AB6t5yCS8E",
          "CQACAgQAAxkBAAEi9Fxkmo8V0FreqqVm9kOIATqZPwcioAACxREAAoQm0FBgsdXU5bBL8i8E",
        ],
      },
      {
        episode: "ep23",
        id: [
          "CQACAgQAAxkBAAEi9Ghkmo_3yUql945LXQWxwbWVSlIEVAACxxEAAoQm0FA4jetcHYbmqC8E",
          "CQACAgQAAxkBAAEi9GtkmpATFx-Z6oMzcgjgpq9M6dy7PQACyBEAAoQm0FCfU1KflUM2hy8E",
          "CQACAgQAAxkBAAEi9G1kmpAoco_Q2JPpavVw6zxHATsgNQACyREAAoQm0FAcGtePJYyQPC8E",
          "CQACAgQAAxkBAAEi9HJkmpA7npgv-9sdvYTNgOKAKd1vyAACyhEAAoQm0FCZ7Tshy6Zgjy8E",
        ],
      },
      {
        episode: "ep22",
        id: [
          "CQACAgQAAxkBAAEi9JlkmpK3GwuNwvqq2__naAoq3fDMWgACzhEAAoQm0FDzPV3WMTtqTy8E",
          "CQACAgQAAxkBAAEi9J5kmpLW8e4k6jaj-r_jn13hIJi5wwACzxEAAoQm0FCxs-ICVws3Py8E",
          "CQACAgQAAxkBAAEi9KBkmpLvV87oZ8pn-BS05uba-EjG2gAC0BEAAoQm0FD3KOiysczuei8E",
          "CQACAgQAAxkBAAEi9KRkmpMV14hH222UhjGmd73WAAG2jdMAAtIRAAKEJtBQSim-HtVSebgvBA",
          "CQACAgQAAxkBAAEi9KhkmpMyRvBdTr2mKVC_iFYjMVbQzAAC0xEAAoQm0FD6K93y6HytRC8E",
          "CQACAgQAAxkBAAEi9KxkmpNJ45Vd6f6RFqe5JDO_miH-HgAC1BEAAoQm0FB1eBq52c5kmC8E",
          "CQACAgQAAxkBAAEi9K5kmpOEi8snAxlLFDICEjje9afqHwAC1hEAAoQm0FCBjNOxxrXvcC8E",
          "CQACAgQAAxkBAAEi9LJkmpOd03ZauInS8eFkSQABbzZ9eEkAAtcRAAKEJtBQFtMscsMS3b4vBA",
        ],
      },
      {
        episode: "ep21",
        id: [
          "CQACAgQAAxkBAAEi9MhkmpROloe8GZLKkTQv7Rg50qZn4QAC3hEAAoQm0FCQ4ZSkHrS2Yy8E",
          "CQACAgQAAxkBAAEi9MpkmpRecRnF9TWVQvhG_cZSpU0V1wAC3xEAAoQm0FACYdSRrYLCDi8E",
          "CQACAgQAAxkBAAEi9NJkmpR6UOivRm2bqbehZn5IDeI8twAC4BEAAoQm0FBFMktbwLKxri8E",
          "CQACAgQAAxkBAAEi9NRkmpSIyAwD0CzZzpuGPHG2muQMYwAC4REAAoQm0FAhso9eQGENrC8E",
        ],
      },
      {
        episode: "ep20",
        id: [
          "CQACAgQAAxkBAAEi9O9kmpZ3vFbucaVlFJyAo8qdJad_cwACGgkAAhVYGVA6In1ySw0jIS8E",
          "CQACAgQAAxkBAAEi9PFkmpaPfpPXxO6CbPQ55pNJCik5BQACGwkAAhVYGVD01DhCf18tAy8E",
          "CQACAgQAAxkBAAEi9PNkmpajpbdl6G2ugia9zF_QV7XlMwACHAkAAhVYGVDIDu8sZPpw7y8E",
          "CQACAgQAAxkBAAEi9PdkmpbFv7ubb-AHfJH9K04JR7WCyQACHQkAAhVYGVC3O1pv9RpHuC8E",
          "CQACAgQAAxkBAAEi9Ptkmpbd5dCfu2mwNmHXbrpR_Xv3NQACHgkAAhVYGVBJdwABlLhG-f8vBA",
          "CQACAgQAAxkBAAEi9P9kmpb_GJBzI5_PHeZGorQaaEJfYAACHgkAAhVYGVBJdwABlLhG-f8vBA",
          "CQACAgQAAxkBAAEi9QRkmpc4OCog787pgiVLBRrFZRa42wACHwkAAhVYGVCAJWz98_jbmy8E",
          "CQACAgQAAxkBAAEi9Q1kmpdZG-oty2WTHywzmhCpLhmV-QACIAkAAhVYGVC_d0bYrV5ARy8E",
          "CQACAgQAAxkBAAEi9RNkmpd3iOcSA8sR-7JzsjLzvGP8kQACIgkAAhVYGVAjT_NvXfP67S8E",
          "CQACAgQAAxkBAAEi9RpkmpeZI7kH7yBH7FUuLaonO63u4wACIwkAAhVYGVAVVpfpCpfCpC8E",
        ],
      },
      {
        episode: "ep19",
        id: [
          "CQACAgQAAxkBAAEi9SZkmpgY6yfKuHvI7nwqqXhNLb913wAC3QgAAmF8UFHD_1WrhLfZfC8E",
          "CQACAgQAAxkBAAEi9SdkmpgYFZCNIFa9Cv7Lh3OcoXBwoAAC3ggAAmF8UFGr-Ik5KgNpni8E",
          "CQACAgQAAxkBAAEi9ShkmpgYfUBuXoWDfTFFsJu9h0_yBwAC3wgAAmF8UFG76JJmNtZffy8E",
          "CQACAgQAAxkBAAEi9TdkmpiHCpOQBou7F0xa5I-MCLFrLwACRAYAAiSb4VFHYxkXOnnWDS8E",
          "CQACAgQAAxkBAAEi9ThkmpiHxyU9GUzJSPbuZJv2lkfH2wACRQYAAiSb4VESq7lH9EN0Zi8E",
          "CQACAgQAAxkBAAEi9TlkmpiHY9SLXnSMv03YqB_nFuJSAgACRgYAAiSb4VFJecscZHyKSi8E",
          "CQACAgQAAxkBAAEi9TpkmpiH973bJbrGb5EPckq0Ox8YKgACRwYAAiSb4VHTnZykmn9USC8E",
        ],
      },
      {
        episode: "ep18",
        id: [
          "CQACAgQAAxkBAAEi9U1kmpjinPqxtQNHHIRRo97UWEVbWAACbQgAAggkCFDUDQ3l8_aaJC8E",
          "CQACAgQAAxkBAAEi9U5kmpjirRJYhryyngxQasxPe5h4TAACbggAAggkCFAPhZ0f7wf9li8E",
          "CQACAgQAAxkBAAEi9U9kmpji0t8PTvtouSHnAoMFcUKNoAACbwgAAggkCFBRg1xbvvVViC8E",
        ],
      },
      {
        episode: "ep17",
        id: [
          "CQACAgQAAxkBAAEi9Vtkmpl2qGRteJ9RgGyVjHEsxrJlOQAC3wYAAhoAAYhRl6u7z3-FrNcvBA",
          "CQACAgQAAxkBAAEi9Vxkmpl2J6HfyYYy3wQshqPKKpyccQAC4QYAAhoAAYhRBp9T6UyCGVsvBA",
          "CQACAgQAAxkBAAEi9V1kmpl2LfuTroPmZBFMDdvv-oZ2vQAC4gYAAhoAAYhR0efmLHdeDkYvBA",
          "CQACAgQAAxkBAAEi9V5kmpl2X7SE1lv6eI0ypyO9P-NdNQAC5AYAAhoAAYhR9-Ipvz1WIswvBA",
        ],
      },
      {
        episode: "ep16",
        id: [
          "CQACAgQAAxkBAAEi_3Zkm9__qbUtAgWt9wxQ4D-zg7Z5lAACPRgAAoQm4FAP_b0TBXVlZC8E",
          "CQACAgQAAxkBAAEi_3hkm-Ai4CGw7Em7neb4Xg2vDKlHQgACPhgAAoQm4FC_vL8_mzaIyC8E",
          "CQACAgQAAxkBAAEi_3lkm-AiM4VLW8mFBg4Eq16qu8OlugACPxgAAoQm4FDb32PtCoBdzC8E",
        ],
      },
      {
        episode: "ep15",
        id: [
          "CQACAgQAAxkBAAEi_4Bkm-DtOkOs9wJSCJlHk4kAAXV85MAAAkAYAAKEJuBQTUt2-QvHaQkvBA",
          "CQACAgQAAxkBAAEi_4Fkm-Dtq01MSDndudBDDMHG5nuiDAACQRgAAoQm4FB0aMfKavc_OS8E",
          "CQACAgQAAxkBAAEi_4Jkm-Dt3rL_qJwbW9LuUb_Z83f-uQACQhgAAoQm4FBWo6wGN8bJxy8E",
          "CQACAgQAAxkBAAEi_4Nkm-DtdR85pXvzrlw9FRLBQlJZDQACQxgAAoQm4FCG34z580kvBS8E",
        ],
      },
      {
        episode: "ep14",
        id: [
          "CQACAgQAAxkBAAEi_5Bkm-GGf1Pvu2X4AAHlSZb3Zv_a7D0AAkQYAAKEJuBQpyUWit3fjN8vBA",
          "CQACAgQAAxkBAAEi_5Fkm-GGkicf7jIZFuSY-htmHzmVLgACRRgAAoQm4FCaKCS7sAGNJi8E",
          "CQACAgQAAxkBAAEi_5Jkm-GG_tjBCX_rqlJZ1GbVJnPyyAACRhgAAoQm4FBhyOUa63ZyJi8E",
        ],
      },
      {
        episode: "ep13",
        id: [
          "CQACAgQAAxkBAAEi_7dkm-MEzf4VBNUnHw9iizKg4kJkQgACSBgAAoQm4FC7bzXPxtwt0S8E",
          "CQACAgQAAxkBAAEi_7hkm-ME3vs-TK-9FT06kCAWrsNJWwACSRgAAoQm4FBR6jAnpPYQMi8E",
          "CQACAgQAAxkBAAEi_7lkm-MEpaHuQuthtd_XI3AW2cc-ZgACShgAAoQm4FDBZwSfGqZxiC8E",
          "CQACAgQAAxkBAAEi_7pkm-MEIEvpTs3vypHtT86pXKL_cQACSxgAAoQm4FDlDM59vcdRDC8E",
          "CQACAgQAAxkBAAEi_7tkm-MEd4LXVSqQL_ptbgX02eVxjgACTBgAAoQm4FAk3nPts4yzyC8E",
        ],
      },
      {
        episode: "ep12",
        id: [
          "CQACAgQAAxkBAAEi_9hkm-UBWxQgMeWZcrhd-8pkl8QllAACThgAAoQm4FCcyMDDwy2nJC8E",
          "CQACAgQAAxkBAAEi_9lkm-UBl4o-zhUL473rr7sey64kkAACTxgAAoQm4FDeHUKNNmxpLi8E",
          "CQACAgQAAxkBAAEi_9pkm-UBVOh2w6JzfTgZSHnN7RDyuAACUBgAAoQm4FDJe-RU1_bk2C8E",
          "CQACAgQAAxkBAAEi_9tkm-UCN34zDdD4pzVRyn2_ndZJTwACUxgAAoQm4FAWPGyw48RkUS8E",
          "CQACAgQAAxkBAAEi_9xkm-UCz8h86wLEz17RmEEjU0ytbwACVBgAAoQm4FCsXDHg9p7mhS8E",
        ],
      },
      {
        episode: "ep11",
        id: [
          "CQACAgQAAxkBAAEjAAGOZJvv45I3DHBaUczdt59v0UZFNN4AAlYYAAKEJuBQwDvdL_naiZ8vBA",
          "CQACAgQAAxkBAAEjAAGPZJvv4-qVZjw2OCmZdzvoXTERw7QAAlcYAAKEJuBQTBH-xuChRXQvBA",
          "CQACAgQAAxkBAAEjAAGQZJvv452xol045BTi8A4H3vesvxQAAlgYAAKEJuBQiefc0p0mEh4vBA",
        ],
      },
    ],
    buttons: [
      [{ text: "موزیک آغازین", callback_data: "opening" }],
      [{ text: "یه چیزی بفرست گوش بدیم!", callback_data: "randomtrack" }],
      [{ text: "پلی لیست Spotify", url: "https://open.spotify.com/playlist/1MGR3D30ambG0ubqx8WBMU?si=6fb50bb6e6ce4dae" }],
      [{ text: "اپیزود 37", callback_data: "ep37" },{ text: "اپیزود 36", callback_data: "ep36" },{ text: "اپیزود 35", callback_data: "ep35" }],
      [{ text: "اپیزود 34", callback_data: "ep34" },{ text: "اپیزود 33", callback_data: "ep33" },{ text: "اپیزود 32", callback_data: "ep32" }],
      [{ text: "اپیزود 31", callback_data: "ep31" },{ text: "اپیزود 30", callback_data: "ep30" },{ text: "اپیزود 29", callback_data: "ep29" }],
      [{ text: "اپیزود 28", callback_data: "ep28" },{ text: "اپیزود 27", callback_data: "ep27" },{ text: "اپیزود 26", callback_data: "ep26" }],
      [{ text: "اپیزود 25", callback_data: "ep25" },{ text: "اپیزود 24", callback_data: "ep24" },{ text: "اپیزود 23", callback_data: "ep23" }],
      [{ text: "اپیزود 22", callback_data: "ep22" },{ text: "اپیزود 21", callback_data: "ep21" },{ text: "اپیزود 20", callback_data: "ep20" }],
      [{ text: "اپیزود 19", callback_data: "ep19" },{ text: "اپیزود 18", callback_data: "ep18" },{ text: "اپیزود 17", callback_data: "ep17" }],
      [{ text: "اپیزود 16", callback_data: "ep16" },{ text: "اپیزود 15", callback_data: "ep15" },{ text: "اپیزود 14", callback_data: "ep14" }],
      [{ text: "اپیزود 13", callback_data: "ep13" },{ text: "اپیزود 12", callback_data: "ep12" },{ text: "اپیزود 11", callback_data: "ep11" }],
    ],
  },
};

module.exports = data;

const data = [
    {
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/ThingsFallApart.jpg/220px-ThingsFallApart.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958
    },
    {
      author: "Hans Christian Andersen",
      country: "Denmark",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Hans_Christian_Andersen_%281834_painting%29.jpg/220px-Hans_Christian_Andersen_%281834_painting%29.jpg",
      language: "Danish",
      link:
        "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
      pages: 784,
      title: "Fairy tales",
      year: 1836
    },
    {
      author: "Dante Alighieri",
      country: "Italy",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dante_Domenico_di_Michelino_Duomo_Florence.jpg/300px-Dante_Domenico_di_Michelino_Duomo_Florence.jpg",
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/Divine_Comedy",
      pages: 928,
      title: "The Divine Comedy",
      year: 1315
    },
    {
      author: "Unknown",
      country: "Sumer and Akkadian Empire",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/British_Museum_Flood_Tablet.jpg/220px-British_Museum_Flood_Tablet.jpg",
      language: "Akkadian",
      link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
      pages: 160,
      title: "The Epic Of Gilgamesh",
      year: -1700
    },
    {
      author: "Unknown",
      country: "Achaemenid Empire",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Aleppo_Codex_Joshua_1_1.jpg/220px-Aleppo_Codex_Joshua_1_1.jpg",
      language: "Hebrew",
      link: "https://en.wikipedia.org/wiki/Book_of_Job",
      pages: 176,
      title: "The Book Of Job",
      year: -600
    },
    {
      author: "Unknown",
      country: "India/Iran/Iraq/Egypt/Tajikistan",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cassim.jpg/220px-Cassim.jpg",
      language: "Arabic",
      link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
      pages: 288,
      title: "One Thousand and One Nights",
      year: 1200
    },
    {
      author: "Unknown",
      country: "Iceland",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Njal_saga_-_Skarphedinn.jpg/220px-Njal_saga_-_Skarphedinn.jpg",
      language: "Old Norse",
      link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
      pages: 384,
      title: "Nj\u00e1l's Saga",
      year: 1350
    },
    {
      author: "Jane Austen",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      pages: 226,
      title: "Pride and Prejudice",
      year: 1813
    },
    {
      author: "Honor\u00e9 de Balzac",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Le_P%C3%A8re_Goriot%2C_1er_Volume%2C_1835.png/220px-Le_P%C3%A8re_Goriot%2C_1er_Volume%2C_1835.png",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
      pages: 443,
      title: "Le P\u00e8re Goriot",
      year: 1835
    },
    {
      author: "Samuel Beckett",
      country: "Republic of Ireland",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Beckett_Molloy.jpg",
      language: "French, English",
      link: "https://en.wikipedia.org/wiki/Molloy_(novel)",
      pages: 256,
      title: "Molloy, Malone Dies, The Unnamable, the trilogy",
      year: 1952
    },
    {
      author: "Giovanni Boccaccio",
      country: "Italy",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Boccaccio_-_Decameron%2C_MCCCCLXXXXII_ad_di_XX_de_giugno_-_3852856_Scan00015.tif/lossy-page1-220px-Boccaccio_-_Decameron%2C_MCCCCLXXXXII_ad_di_XX_de_giugno_-_3852856_Scan00015.tif.jpg",
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/The_Decameron",
      pages: 1024,
      title: "The Decameron",
      year: 1351
    },
    {
      author: "Jorge Luis Borges",
      country: "Argentina",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/d/d6/Ficciones.jpg",
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Ficciones",
      pages: 224,
      title: "Ficciones",
      year: 1965
    },
    {
      author: "Emily Bront\u00eb",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg/200px-Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Wuthering_Heights",
      pages: 342,
      title: "Wuthering Heights",
      year: 1847
    },
    {
      author: "Paul Celan",
      country: "Romania, France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Paul_Celan_Von_Schwelle_zu_Schwelle_Gedichte_1955.jpg/220px-Paul_Celan_Von_Schwelle_zu_Schwelle_Gedichte_1955.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/Von_Schwelle_zu_Schwelle",
      pages: 65,
      title: "Von Schwelle zu Schwelle",
      year: 1955
    },
    {
      author: "Louis-Ferdinand C\u00e9line",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Journey_to_the_End_of_the_Night_cover.jpg/220px-Journey_to_the_End_of_the_Night_cover.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
      pages: 505,
      title: "Journey to the End of the Night",
      year: 1932
    },
    {
      author: "Miguel de Cervantes",
      country: "Spain",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Miguel_de_Cervantes_%281605%29_El_ingenioso_hidalgo_Don_Quixote_de_la_Mancha.png/250px-Miguel_de_Cervantes_%281605%29_El_ingenioso_hidalgo_Don_Quixote_de_la_Mancha.png",
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Don_Quixote",
      pages: 1056,
      title: "Don Quijote De La Mancha",
      year: 1606
    },
    {
      author: "Geoffrey Chaucer",
      country: "England",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Canterbury_Tales.png/220px-Canterbury_Tales.png",
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
      pages: 544,
      title: "The Canterbury Tales",
      year: 1450
    },
    {
      author: "Anton Chekhov",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Anton_Tschechow_-_%C3%96lskizze_von_Lewitan.jpg/250px-Anton_Tschechow_-_%C3%96lskizze_von_Lewitan.jpg",
      language: "Russian",
      link:
        "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
      pages: 194,
      title: "Stories",
      year: 1886
    },
    {
      author: "Joseph Conrad",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nostromo1st.jpg/220px-Nostromo1st.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Nostromo",
      pages: 320,
      title: "Nostromo",
      year: 1904
    },
    {
      author: "Charles Dickens",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Greatexpectations_vol1.jpg/200px-Greatexpectations_vol1.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Great_Expectations",
      pages: 194,
      title: "Great Expectations",
      year: 1861
    },
    {
      author: "Denis Diderot",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/DiderotJacquesFatalist01.jpg/220px-DiderotJacquesFatalist01.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
      pages: 596,
      title: "Jacques the Fatalist",
      year: 1796
    },
    {
      author: "Alfred D\u00f6blin",
      country: "Germany",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Doeblin_berlin_alexanderplatz.jpg/220px-Doeblin_berlin_alexanderplatz.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
      pages: 600,
      title: "Berlin Alexanderplatz",
      year: 1929
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/Crime_and_Punishment",
      pages: 551,
      title: "Crime and Punishment",
      year: 1866
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/ro/thumb/0/06/Idiotul.jpg/200px-Idiotul.jpg",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/The_Idiot",
      pages: 656,
      title: "The Idiot",
      year: 1869
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG/220px-The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
      pages: 768,
      title: "The Possessed",
      year: 1872
    },
    {
      author: "Fyodor Dostoevsky",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dostoevsky-Brothers_Karamazov.jpg/220px-Dostoevsky-Brothers_Karamazov.jpg",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
      pages: 824,
      title: "The Brothers Karamazov",
      year: 1880
    },
    {
      author: "George Eliot",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Middlemarch_1.jpg/220px-Middlemarch_1.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Middlemarch",
      pages: 800,
      title: "Middlemarch",
      year: 1871
    },
    {
      author: "Ralph Ellison",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg/220px-Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Invisible_Man",
      pages: 581,
      title: "Invisible Man",
      year: 1952
    },
    {
      author: "Euripides",
      country: "Greece",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Alfons_Mucha_-_Medea.jpg/220px-Alfons_Mucha_-_Medea.jpg",
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Medea_(play)",
      pages: 104,
      title: "Medea",
      year: -431
    },
    {
      author: "William Faulkner",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Absalom%2C_Absalom%21_%281936_1st_ed_cover%29.jpg/220px-Absalom%2C_Absalom%21_%281936_1st_ed_cover%29.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
      pages: 313,
      title: "Absalom, Absalom!",
      year: 1936
    },
    {
      author: "William Faulkner",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Sound_and_the_Fury_%281929_1st_ed_dust_jacket%29.jpg/220px-The_Sound_and_the_Fury_%281929_1st_ed_dust_jacket%29.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
      pages: 326,
      title: "The Sound and the Fury",
      year: 1929
    },
    {
      author: "Gustave Flaubert",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Madame_Bovary_1857_%28hi-res%29.jpg/220px-Madame_Bovary_1857_%28hi-res%29.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Madame_Bovary",
      pages: 528,
      title: "Madame Bovary",
      year: 1857
    },
    {
      author: "Gustave Flaubert",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Education_sentimentale_flaubert.jpg/220px-Education_sentimentale_flaubert.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Sentimental_Education",
      pages: 606,
      title: "Sentimental Education",
      year: 1869
    },
    {
      author: "Federico Garc\u00eda Lorca",
      country: "Spain",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Romancero_gitano.jpg/220px-Romancero_gitano.jpg",
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Gypsy_Ballads",
      pages: 218,
      title: "Gypsy Ballads",
      year: 1928
    },
    {
      author: "Gabriel Garc\u00eda M\u00e1rquez",
      country: "Colombia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg/220px-Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
      pages: 417,
      title: "One Hundred Years of Solitude",
      year: 1967
    },
    {
      author: "Gabriel Garc\u00eda M\u00e1rquez",
      country: "Colombia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/LoveInTheTimeOfCholera.jpg/220px-LoveInTheTimeOfCholera.jpg",
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
      pages: 368,
      title: "Love in the Time of Cholera",
      year: 1985
    },
    {
      author: "Johann Wolfgang von Goethe",
      country: "Saxe-Weimar",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Auerbachs_Keller.JPG/220px-Auerbachs_Keller.JPG",
      language: "German",
      link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
      pages: 158,
      title: "Faust",
      year: 1832
    },
    {
      author: "Nikolai Gogol",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Dead_Souls_%28novel%29_Nikolai_Gogol_1842_title_page.jpg/220px-Dead_Souls_%28novel%29_Nikolai_Gogol_1842_title_page.jpg",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/Dead_Souls",
      pages: 432,
      title: "Dead Souls",
      year: 1842
    },
    {
      author: "G\u00fcnter Grass",
      country: "Germany",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Die_Blechtrommel_earliest_edition_german.jpg/220px-Die_Blechtrommel_earliest_edition_german.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Tin_Drum",
      pages: 600,
      title: "The Tin Drum",
      year: 1959
    },
    {
      author: "Jo\u00e3o Guimar\u00e3es Rosa",
      country: "Brazil",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Grande_sertao.gif",
      language: "Portuguese",
      link: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
      pages: 494,
      title: "The Devil to Pay in the Backlands",
      year: 1956
    },
    {
      author: "Knut Hamsun",
      country: "Norway",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hunger_first_edition.jpg/220px-Hunger_first_edition.jpg",
      language: "Norwegian",
      link: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
      pages: 176,
      title: "Hunger",
      year: 1890
    },
    {
      author: "Ernest Hemingway",
      country: "United States",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
      pages: 128,
      title: "The Old Man and the Sea",
      year: 1952
    },
    {
      author: "Homer",
      country: "Greece",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Akhilleus_Patroklos_Antikensammlung_Berlin_F2278.jpg/250px-Akhilleus_Patroklos_Antikensammlung_Berlin_F2278.jpg",
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Iliad",
      pages: 608,
      title: "Iliad",
      year: -735
    },
    {
      author: "Homer",
      country: "Greece",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Odyssey-crop.jpg/220px-Odyssey-crop.jpg",
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Odyssey",
      pages: 374,
      title: "Odyssey",
      year: -800
    },
    {
      author: "Henrik Ibsen",
      country: "Norway",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/A_Doll%27s_House.jpeg/220px-A_Doll%27s_House.jpeg",
      language: "Norwegian",
      link: "https://en.wikipedia.org/wiki/A_Doll%27s_House",
      pages: 68,
      title: "A Doll's House",
      year: 1879
    },
    {
      author: "James Joyce",
      country: "Irish Free State",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/JoyceUlysses2.jpg/220px-JoyceUlysses2.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Ulysses_(novel)",
      pages: 228,
      title: "Ulysses",
      year: 1922
    },
    {
      author: "Franz Kafka",
      country: "Czechoslovakia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kafka_Betrachtung_1912.jpg/199px-Kafka_Betrachtung_1912.jpg",
      language: "German",
      link:
        "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
      pages: 488,
      title: "Stories",
      year: 1924
    },
    {
      author: "Franz Kafka",
      country: "Czechoslovakia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/TrialKafka.jpg/220px-TrialKafka.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Trial",
      pages: 160,
      title: "The Trial",
      year: 1925
    },
    {
      author: "Franz Kafka",
      country: "Czechoslovakia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Franz_Kafka_Das_Schloss.jpg/220px-Franz_Kafka_Das_Schloss.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Castle_(novel)",
      pages: 352,
      title: "The Castle",
      year: 1926
    },
    {
      author: "K\u0101lid\u0101sa",
      country: "India",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Raja_Ravi_Varma_-_Mahabharata_-_Shakuntala.jpg/240px-Raja_Ravi_Varma_-_Mahabharata_-_Shakuntala.jpg",
      language: "Sanskrit",
      link:
        "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
      pages: 147,
      title: "The recognition of Shakuntala",
      year: 150
    },
    {
      author: "Yasunari Kawabata",
      country: "Japan",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/TheSoundOfTheMountain.jpg/220px-TheSoundOfTheMountain.jpg",
      language: "Japanese",
      link: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain",
      pages: 288,
      title: "The Sound of the Mountain",
      year: 1954
    },
    {
      author: "Nikos Kazantzakis",
      country: "Greece",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Zorba_book.jpg/220px-Zorba_book.jpg",
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Zorba_the_Greek",
      pages: 368,
      title: "Zorba the Greek",
      year: 1946
    },
    {
      author: "D. H. Lawrence",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Sonslovers.jpg/220px-Sonslovers.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Sons_and_Lovers",
      pages: 432,
      title: "Sons and Lovers",
      year: 1913
    },
    {
      author: "Halld\u00f3r Laxness",
      country: "Iceland",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Independent_People.jpg/220px-Independent_People.jpg",
      language: "Icelandic",
      link: "https://en.wikipedia.org/wiki/Independent_People",
      pages: 470,
      title: "Independent People",
      year: 1934
    },
    {
      author: "Doris Lessing",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/The_Golden_Notebook.gif/220px-The_Golden_Notebook.gif",
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Golden_Notebook",
      pages: 688,
      title: "The Golden Notebook",
      year: 1962
    },
    {
      author: "Astrid Lindgren",
      country: "Sweden",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/L%C3%A5ngstrump_G%C3%A5r_Ombord.jpeg/220px-L%C3%A5ngstrump_G%C3%A5r_Ombord.jpeg",
      language: "Swedish",
      link: "https://en.wikipedia.org/wiki/Pippi_Longstocking",
      pages: 160,
      title: "Pippi Longstocking",
      year: 1945
    },
    {
      author: "Lu Xun",
      country: "China",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/A_Madman%27s_Diary_-_Lu_Xun.JPG/220px-A_Madman%27s_Diary_-_Lu_Xun.JPG",
      language: "Chinese",
      link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary",
      pages: 389,
      title: "Diary of a Madman",
      year: 1918
    },
    {
      author: "Naguib Mahfouz",
      country: "Egypt",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Children_of_Gebelawi.jpg/220px-Children_of_Gebelawi.jpg",
      language: "Arabic",
      link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi",
      pages: 355,
      title: "Children of Gebelawi",
      year: 1959
    },
    {
      author: "Thomas Mann",
      country: "Germany",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/1901_Thomas_Mann_Buddenbrooks.jpg/220px-1901_Thomas_Mann_Buddenbrooks.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/Buddenbrooks",
      pages: 736,
      title: "Buddenbrooks",
      year: 1901
    },
    {
      author: "Thomas Mann",
      country: "Germany",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/1924_Der_Zauberberg_%283%29.jpg/220px-1924_Der_Zauberberg_%283%29.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Magic_Mountain",
      pages: 720,
      title: "The Magic Mountain",
      year: 1924
    },
    {
      author: "Herman Melville",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/220px-Moby-Dick_FE_title_page.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Moby-Dick",
      pages: 378,
      title: "Moby Dick",
      year: 1851
    },
    {
      author: "Michel de Montaigne",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Essais_Titelblatt_%281588%29.png/225px-Essais_Titelblatt_%281588%29.png",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
      pages: 404,
      title: "Essays",
      year: 1595
    },
    {
      author: "Elsa Morante",
      country: "Italy",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/La_Storia.jpg/220px-La_Storia.jpg",
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/History_(novel)",
      pages: 600,
      title: "History",
      year: 1974
    },
    {
      author: "Toni Morrison",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg/220px-Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Beloved_(novel)",
      pages: 321,
      title: "Beloved",
      year: 1987
    },
    {
      author: "Murasaki Shikibu",
      country: "Japan",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Genji_emaki_01003_002.jpg/220px-Genji_emaki_01003_002.jpg",
      language: "Japanese",
      link: "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
      pages: 1360,
      title: "The Tale of Genji",
      year: 1006
    },
    {
      author: "Robert Musil",
      country: "Austria",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Robert_Musil_-_Der_Mann_ohne_Eigenschaften%2C_1930.jpg/220px-Robert_Musil_-_Der_Mann_ohne_Eigenschaften%2C_1930.jpg",
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities",
      pages: 365,
      title: "The Man Without Qualities",
      year: 1931
    },
    {
      author: "Vladimir Nabokov",
      country: "Russia/United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lolita_1955.JPG/220px-Lolita_1955.JPG",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Lolita",
      pages: 317,
      title: "Lolita",
      year: 1955
    },
    {
      author: "George Orwell",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/220px-1984first.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
      pages: 272,
      title: "Nineteen Eighty-Four",
      year: 1949
    },
    {
      author: "Ovid",
      country: "Roman Empire",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ovidius_Naso_-_Metamorphoses%2C_del_MCCCCLXXXXVII_Adi_X_del_mese_di_aprile_-_1583162_Carta_a1r.jpeg/220px-Ovidius_Naso_-_Metamorphoses%2C_del_MCCCCLXXXXVII_Adi_X_del_mese_di_aprile_-_1583162_Carta_a1r.jpeg",
      language: "Classical Latin",
      link: "https://en.wikipedia.org/wiki/Metamorphoses",
      pages: 576,
      title: "Metamorphoses",
      year: 100
    },
    {
      author: "Fernando Pessoa",
      country: "Portugal",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/LdoD_1ed.jpg/220px-LdoD_1ed.jpg",
      language: "Portuguese",
      link: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet",
      pages: 272,
      title: "The Book of Disquiet",
      year: 1928
    },
    {
      author: "Marcel Proust",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/MS_A_la_recherche_du_temps_perdu.jpg/220px-MS_A_la_recherche_du_temps_perdu.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time",
      pages: 2408,
      title: "In Search of Lost Time",
      year: 1920
    },
    {
      author: "Fran\u00e7ois Rabelais",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Page11-682px-Rabelais_-_Pantagruel%2C_ca_1530.jpg/220px-Page11-682px-Rabelais_-_Pantagruel%2C_ca_1530.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
      pages: 623,
      title: "Gargantua and Pantagruel",
      year: 1533
    },
    {
      author: "Juan Rulfo",
      country: "Mexico",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Pedro_P%C3%A1ramo_front_cover_art.jpg/220px-Pedro_P%C3%A1ramo_front_cover_art.jpg",
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo",
      pages: 124,
      title: "Pedro P\u00e1ramo",
      year: 1955
    },
    {
      author: "Rumi",
      country: "Sultanate of Rum",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Turkey.Konya049.jpg/250px-Turkey.Konya049.jpg",
      language: "Persian",
      link: "https://en.wikipedia.org/wiki/Masnavi",
      pages: 438,
      title: "The Masnavi",
      year: 1236
    },
    {
      author: "Salman Rushdie",
      country: "United Kingdom, India",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/MidnightsChildren.jpg/220px-MidnightsChildren.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Midnight%27s_Children",
      pages: 536,
      title: "Midnight's Children",
      year: 1981
    },
    {
      author: "Saadi",
      country: "Persia, Persian Empire",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sadi_in_a_Rose_garden.jpg/100px-Sadi_in_a_Rose_garden.jpg",
      language: "Persian",
      link: "https://en.wikipedia.org/wiki/Bustan_(book)",
      pages: 298,
      title: "Bostan",
      year: 1257
    },
    {
      author: "Tayeb Salih",
      country: "Sudan",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Season_of_migration_to_the_north.jpg/220px-Season_of_migration_to_the_north.jpg",
      language: "Arabic",
      link: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North",
      pages: 139,
      title: "Season of Migration to the North",
      year: 1966
    },
    {
      author: "Jos\u00e9 Saramago",
      country: "Portugal",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Book_cover_of_Ensaio_sobre_a_Cegueira.jpg/220px-Book_cover_of_Ensaio_sobre_a_Cegueira.jpg",
      language: "Portuguese",
      link: "https://en.wikipedia.org/wiki/Blindness_(novel)",
      pages: 352,
      title: "Blindness",
      year: 1995
    },
    {
      author: "William Shakespeare",
      country: "England",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Edwin_Booth_Hamlet_1870.jpg/220px-Edwin_Booth_Hamlet_1870.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Hamlet",
      pages: 432,
      title: "Hamlet",
      year: 1603
    },
    {
      author: "William Shakespeare",
      country: "England",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/King_Lear_by_George_Frederick_Bensell.jpg/220px-King_Lear_by_George_Frederick_Bensell.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/King_Lear",
      pages: 384,
      title: "King Lear",
      year: 1608
    },
    {
      author: "William Shakespeare",
      country: "England",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Henry_Perronet_Briggs_-_Ira_Aldridge_as_Othello_-_Google_Art_Project.jpg/220px-Henry_Perronet_Briggs_-_Ira_Aldridge_as_Othello_-_Google_Art_Project.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Othello",
      pages: 314,
      title: "Othello",
      year: 1609
    },
    {
      author: "Sophocles",
      country: "Greece",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Oedipus.jpg/220px-Oedipus.jpg",
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Oedipus_the_King",
      pages: 88,
      title: "Oedipus the King",
      year: -430
    },
    {
      author: "Stendhal",
      country: "France",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/StendhalRedandBlack04.jpg/220px-StendhalRedandBlack04.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/The_Red_and_the_Black",
      pages: 576,
      title: "The Red and the Black",
      year: 1830
    },
    {
      author: "Laurence Sterne",
      country: "England",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/George_Cruikshank_-_Tristram_Shandy%2C_Plate_VIII._The_Smoking_Batteries.jpg/220px-George_Cruikshank_-_Tristram_Shandy%2C_Plate_VIII._The_Smoking_Batteries.jpg",
      language: "English",
      link:
        "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman",
      pages: 640,
      title: "The Life And Opinions of Tristram Shandy",
      year: 1760
    },
    {
      author: "Italo Svevo",
      country: "Italy",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Coscienza_di_Zeno.gif/220px-Coscienza_di_Zeno.gif",
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience",
      pages: 412,
      title: "Confessions of Zeno",
      year: 1923
    },
    {
      author: "Jonathan Swift",
      country: "Ireland",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gullivers_travels.jpg/250px-Gullivers_travels.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
      pages: 178,
      title: "Gulliver's Travels",
      year: 1726
    },
    {
      author: "Leo Tolstoy",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg/220px-Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/War_and_Peace",
      pages: 1296,
      title: "War and Peace",
      year: 1867
    },
    {
      author: "Leo Tolstoy",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AnnaKareninaTitle.jpg/220px-AnnaKareninaTitle.jpg",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/Anna_Karenina",
      pages: 864,
      title: "Anna Karenina",
      year: 1877
    },
    {
      author: "Leo Tolstoy",
      country: "Russia",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Death_of_Ivan_Ilyich.jpg/220px-The_Death_of_Ivan_Ilyich.jpg",
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich",
      pages: 92,
      title: "The Death of Ivan Ilyich",
      year: 1886
    },
    {
      author: "Mark Twain",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/220px-Huckleberry_Finn_book.JPG",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
      pages: 224,
      title: "The Adventures of Huckleberry Finn",
      year: 1884
    },
    {
      author: "Valmiki",
      country: "India",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Indischer_Maler_von_1780_001.jpg/220px-Indischer_Maler_von_1780_001.jpg",
      language: "Sanskrit",
      link: "https://en.wikipedia.org/wiki/Ramayana",
      pages: 152,
      title: "Ramayana",
      year: -450
    },
    {
      author: "Virgil",
      country: "Roman Empire",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cristoforo_Majorana_-_Leaf_from_Eclogues%2C_Georgics_and_Aeneid_-_Walters_W40055R_-_Open_Obverse.jpg/220px-Cristoforo_Majorana_-_Leaf_from_Eclogues%2C_Georgics_and_Aeneid_-_Walters_W40055R_-_Open_Obverse.jpg",
      language: "Classical Latin",
      link: "https://en.wikipedia.org/wiki/Aeneid",
      pages: 442,
      title: "The Aeneid",
      year: -23
    },
    {
      author: "Vyasa",
      country: "India",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kurukshetra.jpg/220px-Kurukshetra.jpg",
      language: "Sanskrit",
      link: "https://en.wikipedia.org/wiki/Mahabharata",
      pages: 276,
      title: "Mahabharata",
      year: -700
    },
    {
      author: "Walt Whitman",
      country: "United States",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Walt_Whitman%2C_steel_engraving%2C_July_1854.jpg/220px-Walt_Whitman%2C_steel_engraving%2C_July_1854.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Leaves_of_Grass",
      pages: 152,
      title: "Leaves of Grass",
      year: 1855
    },
    {
      author: "Virginia Woolf",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Mrs._Dalloway_cover.jpg/220px-Mrs._Dalloway_cover.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Mrs_Dalloway",
      pages: 216,
      title: "Mrs Dalloway",
      year: 1925
    },
    {
      author: "Virginia Woolf",
      country: "United Kingdom",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/ToTheLighthouse.jpg/220px-ToTheLighthouse.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/To_the_Lighthouse",
      pages: 209,
      title: "To the Lighthouse",
      year: 1927
    },
    {
      author: "Marguerite Yourcenar",
      country: "France/Belgium",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Memoirs_of_Hadrian.jpg/220px-Memoirs_of_Hadrian.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
      pages: 408,
      title: "Memoirs of Hadrian",
      year: 1951
    }
  ];
  
  export default data;
  
# LANGUEGE TRANSLATOR

Translate Any Language into another

## Installation

Use the command to install 

## Requirements
* [NODE]() 
* [Redis]() 

NB: Make sure these are installed 
#### RUN REDIS SERVER

```bash
redis-server
```

```bash
git clone https://github.com/inzamrzn918/NODEJS-TRANSLATOR-API-Redis.git && cd NODEJS-TRANSLATOR-API-Redis
```

```bash
npm install && npm start
```

## Usage

 #### SERVER WILL RUN ON [http://127.0.0.1:5000](http://127.0.0.1:5000)

### API used

#### [API Link](https://rapidapi.com/translated/api/mymemory-translation-memory/)



### Parameter use as x-www-form-urlencoded or JSON
```

{
    "text": "America is a country",
    "source": "en",
    "target": "bn"
}

```

### Parameters are
* text - The text to be translated
* source - Original Language
* target - Destination Language

### NB: Source and Destination takes two digit language code 
Here is the list of code
Languege | Code
:-----:|:-----:
Abkhazian|AB
Afar|AA
Afrikaans|AF
Albanian|SQ
Amharic|AM
Arabic|AR
Armenian|HY
Assamese|AS
Aymara|AY
Azerbaijani|AZ
Bashkir|BA
Basque|EU
Bengali, Bangla|BN
Bhutani|DZ
Bihari|BH
Bislama|BI
Breton|BR
Bulgarian|BG
Burmese|MY
Byelorussian|BE
Cambodian|KM
Catalan|CA
Chinese|ZH
Corsican|CO
Croatian|HR
Czech|CS
Danish|DA
Dutch|NL
English, American|EN
Esperanto|EO
Estonian|ET
Faeroese|FO
Fiji|FJ
Finnish|FI
French|FR
Frisian|FY
Gaelic (Scots Gaelic)|GD
Galician|GL
Georgian|KA
German|DE
Greek|EL
Greenlandic|KL
Guarani|GN
Gujarati|GU
Hausa|HA
Hebrew|IW
Hindi|HI
Hungarian|HU
Icelandic|IS
Indonesian|IN
Interlingua|IA
Interlingue|IE
Inupiak|IK
Irish|GA
Italian|IT
Japanese|JA
Javanese|JW
Kannada|KN
Kashmiri|KS
Kazakh|KK
Kinyarwanda|RW
Kirghiz|KY
Kirundi|RN
Korean|KO
Kurdish|KU
Laothian|LO
Latin|LA
Latvian, Lettish|LV
Lingala|LN
Lithuanian|LT
Macedonian|MK
Malagasy|MG
Malay|MS
Malayalam|ML
Maltese|MT
Maori|MI
Marathi|MR
Moldavian|MO
Mongolian|MN
Nauru|NA
Nepali|NE
Norwegian|NO
Occitan|OC
Oriya|OR
Oromo, Afan|OM
Pashto, Pushto|PS
Persian|FA
Polish|PL
Portuguese|PT
Punjabi|PA
Quechua|QU
Rhaeto-Romance|RM
Romanian|RO
Russian|RU
Samoan|SM
Sangro|SG
Sanskrit|SA
Serbian|SR
Serbo-Croatian|SH
Sesotho|ST
Setswana|TN
Shona|SN
Sindhi|SD
Singhalese|SI
Siswati|SS
Slovak|SK
Slovenian|SL
Somali|SO
Spanish|ES
Sudanese|SU
Swahili|SW
Swedish|SV
Tagalog|TL
Tajik|TG
Tamil|TA
Tatar|TT
Tegulu|TE
Thai|TH
Tibetan|BO
Tigrinya|TI
Tonga|TO
Tsonga|TS
Turkish|TR
Turkmen|TK
Twi|TW
Ukrainian|UK
Urdu|UR
Uzbek|UZ
Vietnamese|VI
Volapuk|VO
Welsh|CY
Wolof|WO
Xhosa|XH
Yiddish|JI
Yoruba|YO
Zulu|ZU

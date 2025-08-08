const users = [
  {
      "name": "HOD",
      "prn": "HOD001",
      "pass": "password",
      "role": "hod"
  },
  {
      "name": "Student 1",
      "prn": "PRN001",
      "pass": "password",
      "role": "student",
      "class": "FY A",
      "attendance": 80.0
  },
  {
      "name": "Student 2",
      "prn": "PRN002",
      "pass": "password",
      "role": "student",
      "class": "FY A",
      "attendance": 85.0
  },
  {
      "name": "Student 3",
      "prn": "PRN003",
      "pass": "password",
      "role": "student",
      "class": "FY B",
      "attendance": 90.0
  },
  {
      "name": "Student 4",
      "prn": "PRN004",
      "pass": "password",
      "role": "student",
      "class": "FY B",
      "attendance": 75.0
  },
  {
      "name": "Student 5",
      "prn": "PRN005",
      "pass": "password",
      "role": "student",
      "class": "FY C",
      "attendance": 95.0
  },
  {
      "name": "Student 6",
      "prn": "PRN006",
      "pass": "password",
      "role": "student",
      "class": "FY C",
      "attendance": 92.0
  },
  {
      "name": "Student 7",
      "prn": "PRN007",
      "pass": "password",
      "role": "student",
      "class": "FY D",
      "attendance": 88.0
  },
  {
      "name": "Student 8",
      "prn": "PRN008",
      "pass": "password",
      "role": "student",
      "class": "FY D",
      "attendance": 76.0
  },
  {
      "name": "Student 9",
      "prn": "PRN009",
      "pass": "password",
      "role": "student",
      "class": "FY E",
      "attendance": 80.0
  },
  {
      "name": "Student 10",
      "prn": "PRN010",
      "pass": "password",
      "role": "student",
      "class": "FY E",
      "attendance": 70.0
  },
  {
      "name": "SAGAR ARUN BHANDARE",
      "prn": "242141134",
      "pass": "242141134",
      "role": "student",
      "class": "FY C",
      "attendance": 0.0
  },
  {
      "name": "VAISHNAVI VISHAL PATIL",
      "prn": "242141135",
      "pass": "242141135",
      "role": "student",
      "class": "FY C",
      "attendance": 84.0
  },
  {
      "name": "RITIK RABINARAYAN SWAIN",
      "prn": "242141136",
      "pass": "242141136",
      "role": "student",
      "class": "FY C",
      "attendance": 23.0
  },
  {
      "name": "BRIHAN SUDHIR SURANGE",
      "prn": "242141137",
      "pass": "242141137",
      "role": "student",
      "class": "FY C",
      "attendance": 47.0
  },
  {
      "name": "SHINDE ROHI RAHUL",
      "prn": "242141138",
      "pass": "242141138",
      "role": "student",
      "class": "FY C",
      "attendance": 45.0
  },
  {
      "name": "SIDDHI ANNASAHEB PATIL",
      "prn": "242141139",
      "pass": "242141139",
      "role": "student",
      "class": "FY C",
      "attendance": 41.0
  },
  {
      "name": "PAWAR SHWETA",
      "prn": "242141141",
      "pass": "242141141",
      "role": "student",
      "class": "FY C",
      "attendance": 26.0
  },
  {
      "name": "AVADHUT ANIL SHINDE",
      "prn": "242141143",
      "pass": "242141143",
      "role": "student",
      "class": "FY C",
      "attendance": 48.0
  },
  {
      "name": "LOHAGAON SIDRAYA DUNDAPPA",
      "prn": "242141144",
      "pass": "242141144",
      "role": "student",
      "class": "FY C",
      "attendance": 43.0
  },
  {
      "name": "SUHANA SALEEM ATTAR",
      "prn": "242141145",
      "pass": "242141145",
      "role": "student",
      "class": "FY C",
      "attendance": 74.0
  },
  {
      "name": "SOUJANYA NEMINATH TONASHYAL",
      "prn": "242141146",
      "pass": "242141146",
      "role": "student",
      "class": "FY C",
      "attendance": 36.0
  },
  {
      "name": "SOUJANYA SIDDAPPA SAPTASAGARE",
      "prn": "242141147",
      "pass": "242141147",
      "role": "student",
      "class": "FY C",
      "attendance": 84.0
  },
  {
      "name": "AMRUTA RAVASAB HUBBALLI",
      "prn": "242141148",
      "pass": "242141148",
      "role": "student",
      "class": "FY C",
      "attendance": 92.0
  },
  {
      "name": "HUVAPPA MALAKARI BABALESHWAR",
      "prn": "242141149",
      "pass": "242141149",
      "role": "student",
      "class": "FY C",
      "attendance": 65.0
  },
  {
      "name": "BASAVRAJ NEELAKANTH DESHNUR",
      "prn": "242141150",
      "pass": "242141150",
      "role": "student",
      "class": "FY C",
      "attendance": 51.0
  },
  {
      "name": "PRADNYA PRADEEP CHOUGULE",
      "prn": "242141151",
      "pass": "242141151",
      "role": "student",
      "class": "FY C",
      "attendance": 57.0
  },
  {
      "name": "ANUJ ANIL SHEGALE",
      "prn": "242141152",
      "pass": "242141152",
      "role": "student",
      "class": "FY C",
      "attendance": 82.0
  },
  {
      "name": "AKSHAY SOMSHEKHAR HIREMATH",
      "prn": "242141153",
      "pass": "242141153",
      "role": "student",
      "class": "FY C",
      "attendance": 67.0
  },
  {
      "name": "DARSHAN GANGADHAR GAVADE",
      "prn": "242141155",
      "pass": "242141155",
      "role": "student",
      "class": "FY C",
      "attendance": 9.0
  },
  {
      "name": "ADITYA DELEEP BASANAIK",
      "prn": "242141156",
      "pass": "242141156",
      "role": "student",
      "class": "FY C",
      "attendance": 34.0
  },
  {
      "name": "VERNEKAR PRATHAMESH PUSHPARAJ",
      "prn": "242141157",
      "pass": "242141157",
      "role": "student",
      "class": "FY C",
      "attendance": 51.0
  },
  {
      "name": "SAMIT SHASHIDHAR  KOLOLAGI",
      "prn": "242141158",
      "pass": "242141158",
      "role": "student",
      "class": "FY C",
      "attendance": 14.0
  },
  {
      "name": "OMKAR BALAJI BHALEKAR",
      "prn": "242141159",
      "pass": "242141159",
      "role": "student",
      "class": "FY C",
      "attendance": 0.0
  },
  {
      "name": "PATIL POORNANAND BHIMRAO",
      "prn": "242141160",
      "pass": "242141160",
      "role": "student",
      "class": "FY C",
      "attendance": 0.0
  },
  {
      "name": "AMIT VISHWANATH KOHALLI",
      "prn": "242141161",
      "pass": "242141161",
      "role": "student",
      "class": "FY C",
      "attendance": 66.0
  },
  {
      "name": "SNEHA BALASAHEB KUMBAR",
      "prn": "242141162",
      "pass": "242141162",
      "role": "student",
      "class": "FY C",
      "attendance": 0.0
  },
  {
      "name": "AKASHTA SURESH TONASHYAL",
      "prn": "242141163",
      "pass": "242141163",
      "role": "student",
      "class": "FY C",
      "attendance": 47.0
  },
  {
      "name": "BALAPPA SHIVANAND GANI",
      "prn": "242141164",
      "pass": "242141164",
      "role": "student",
      "class": "FY C",
      "attendance": 85.0
  },
  {
      "name": "SAIFALI IQBAL KADAGANVAKAR",
      "prn": "242141165",
      "pass": "242141165",
      "role": "student",
      "class": "FY C",
      "attendance": 62.0
  },
  {
      "name": "NALLA HARSHITH ",
      "prn": "242141166",
      "pass": "242141166",
      "role": "student",
      "class": "FY C",
      "attendance": 61.0
  },
  {
      "name": "RAKESH GANAPATI LAMANI",
      "prn": "242141167",
      "pass": "242141167",
      "role": "student",
      "class": "FY C",
      "attendance": 91.0
  },
  {
      "name": "TEJAS NAMDEV LATPATE",
      "prn": "242141168",
      "pass": "242141168",
      "role": "student",
      "class": "FY C",
      "attendance": 52.0
  },
  {
      "name": "R LIKITA",
      "prn": "242141170",
      "pass": "242141170",
      "role": "student",
      "class": "FY C",
      "attendance": 23.0
  },
  {
      "name": "JOOLAKANTI DIVYA SIVA SAI  PRASANNA",
      "prn": "242141171",
      "pass": "242141171",
      "role": "student",
      "class": "FY C",
      "attendance": 36.0
  },
  {
      "name": "JOOLAKANTI GNANA VENKATA KARTIKEYA",
      "prn": "242141172",
      "pass": "242141172",
      "role": "student",
      "class": "FY C",
      "attendance": 92.0
  },
  {
      "name": "KOMMU SAHASRA",
      "prn": "242141173",
      "pass": "242141173",
      "role": "student",
      "class": "FY C",
      "attendance": 96.0
  },
  {
      "name": "MANIKANTA SAI  EDAPALAPATI",
      "prn": "242141174",
      "pass": "242141174",
      "role": "student",
      "class": "FY C",
      "attendance": 82.0
  },
  {
      "name": "AKSHATA SAMBAJI NALAVADE",
      "prn": "242141175",
      "pass": "242141175",
      "role": "student",
      "class": "FY C",
      "attendance": 23.0
  },
  {
      "name": "AMULOJU SAIVISWESH",
      "prn": "242141176",
      "pass": "242141176",
      "role": "student",
      "class": "FY C",
      "attendance": 59.0
  },
  {
      "name": "TORLAPATI AJAY",
      "prn": "242141177",
      "pass": "242141177",
      "role": "student",
      "class": "FY C",
      "attendance": 83.0
  },
  {
      "name": "MARAM NAGAVENKATASIVA SAI CHAKRADHAR",
      "prn": "242141178",
      "pass": "242141178",
      "role": "student",
      "class": "FY C",
      "attendance": 74.0
  },
  {
      "name": "RAHUL SIDDAPPA ALAGODI",
      "prn": "242141179",
      "pass": "242141179",
      "role": "student",
      "class": "FY C",
      "attendance": 58.0
  },
  {
      "name": "KOTIREDDY PRABHAS REDDY",
      "prn": "242141180",
      "pass": "242141180",
      "role": "student",
      "class": "FY C",
      "attendance": 79.0
  },
  {
      "name": "BRIJESH  MALAKAPPANAVAR",
      "prn": "242141182",
      "pass": "242141182",
      "role": "student",
      "class": "FY C",
      "attendance": 7.0
  },
  {
      "name": "AISHWARYA MURLIDHAR LAMBE",
      "prn": "242141183",
      "pass": "242141183",
      "role": "student",
      "class": "FY C",
      "attendance": 63.0
  },
  {
      "name": "NAHAR JIYA KOMALCHAND",
      "prn": "242141184",
      "pass": "242141184",
      "role": "student",
      "class": "FY C",
      "attendance": 37.0
  },
  {
      "name": "PANDILLAPALLI NANDA KISHORE",
      "prn": "242141185",
      "pass": "242141185",
      "role": "student",
      "class": "FY C",
      "attendance": 80.0
  },
  {
      "name": " HELAVI BALU SIDDHAPPA ",
      "prn": "242141186",
      "pass": "242141186",
      "role": "student",
      "class": "FY C",
      "attendance": 73.0
  },
  {
      "name": "PENUGONDA VEDAVYAS",
      "prn": "242141187",
      "pass": "242141187",
      "role": "student",
      "class": "FY C",
      "attendance": 67.0
  },
  {
      "name": "YASHVANTH  RAMESH  SAVANUR",
      "prn": "242141188",
      "pass": "242141188",
      "role": "student",
      "class": "FY C",
      "attendance": 93.0
  },
  {
      "name": "JADAPALLI VENKATA SAI VARSHITH",
      "prn": "242141189",
      "pass": "242141189",
      "role": "student",
      "class": "FY C",
      "attendance": 80.0
  },
  {
      "name": "YAKKATELLI SASI",
      "prn": "242141190",
      "pass": "242141190",
      "role": "student",
      "class": "FY C",
      "attendance": 37.0
  },
  {
      "name": "VINJAM MOKSHAGNA CHOWDARY",
      "prn": "242141191",
      "pass": "242141191",
      "role": "student",
      "class": "FY C",
      "attendance": 44.0
  },
  {
      "name": "MARELLA HARSHAVARDHAN",
      "prn": "242141192",
      "pass": "242141192",
      "role": "student",
      "class": "FY C",
      "attendance": 48.0
  },
  {
      "name": "PASUPULETI PRANEETH",
      "prn": "242141193",
      "pass": "242141193",
      "role": "student",
      "class": "FY C",
      "attendance": 53.0
  },
  {
      "name": "EARAMAS DHANUSH",
      "prn": "242141194",
      "pass": "242141194",
      "role": "student",
      "class": "FY C",
      "attendance": 87.0
  },
  {
      "name": "SAI TANAJI VARUTE",
      "prn": "242141195",
      "pass": "242141195",
      "role": "student",
      "class": "FY C",
      "attendance": 83.0
  },
  {
      "name": "YASH DATTATRAY BHODALE",
      "prn": "242141196",
      "pass": "242141196",
      "role": "student",
      "class": "FY C",
      "attendance": 25.0
  },
  {
      "name": "ATIYANAJ A. NADAF",
      "prn": "242141197",
      "pass": "242141197",
      "role": "student",
      "class": "FY C",
      "attendance": 2.0
  },
  {
      "name": "PRIYANKA ASHOK SHINDE",
      "prn": "242141198",
      "pass": "242141198",
      "role": "student",
      "class": "FY C",
      "attendance": 85.0
  },
  {
      "name": "PREM SANJAY GNADHI",
      "prn": "242141199",
      "pass": "242141199",
      "role": "student",
      "class": "FY C",
      "attendance": 85.0
  },
  {
      "name": "ADIT ARVIND LATKAR",
      "prn": "242141200",
      "pass": "242141200",
      "role": "student",
      "class": "FY C",
      "attendance": 72.0
  },
  {
      "name": "AZIMIL KABIR SHAIKH",
      "prn": "242141201",
      "pass": "242141201",
      "role": "student",
      "class": "FY C",
      "attendance": 52.0
  },
  {
      "name": "JAKKULA ABHIROOP",
      "prn": "242141202",
      "pass": "242141202",
      "role": "student",
      "class": "FY C",
      "attendance": 76.0
  },
  {
      "name": "APSARA BHOLA ABDUL TAMBAT",
      "prn": "242141204",
      "pass": "242141204",
      "role": "student",
      "class": "FY C",
      "attendance": 37.0
  },
  {
      "name": "SANDEEP JYOTIBA AKKOL",
      "prn": "242141205",
      "pass": "242141205",
      "role": "student",
      "class": "FY C",
      "attendance": 72.0
  },
  {
      "name": "PRANJAL PRAKASH KUMBHAR",
      "prn": "242141071",
      "pass": "242141071",
      "role": "student",
      "class": "FY B",
      "attendance": 0.0
  },
  {
      "name": "ADITYA SHIRISH PATIL",
      "prn": "242141072",
      "pass": "242141072",
      "role": "student",
      "class": "FY B",
      "attendance": 64.0
  },
  {
      "name": "SUCHIT SHIVAGOND KABADAGI",
      "prn": "242141073",
      "pass": "242141073",
      "role": "student",
      "class": "FY B",
      "attendance": 59.0
  },
  {
      "name": "SAMMED SHANTINATH PATIL",
      "prn": "242141074",
      "pass": "242141074",
      "role": "student",
      "class": "FY B",
      "attendance": 59.0
  },
  {
      "name": "ARSLAN ALTAF HALVEGAR",
      "prn": "242141076",
      "pass": "242141076",
      "role": "student",
      "class": "FY B",
      "attendance": 60.0
  },
  {
      "name": "KISHOR RAJENDRA GOUDAR",
      "prn": "242141077",
      "pass": "242141077",
      "role": "student",
      "class": "FY B",
      "attendance": 67.0
  },
  {
      "name": "DHRUMIL MAHENDRAKUMAR UMARANIYA",
      "prn": "242141079",
      "pass": "242141079",
      "role": "student",
      "class": "FY B",
      "attendance": 53.0
  },
  {
      "name": "AKASH RAJEEV GULAGANVI",
      "prn": "242141081",
      "pass": "242141081",
      "role": "student",
      "class": "FY B",
      "attendance": 60.0
  },
  {
      "name": "REVA PRAMOD BORGAVE",
      "prn": "242141082",
      "pass": "242141082",
      "role": "student",
      "class": "FY B",
      "attendance": 30.0
  },
  {
      "name": "PARTH SAGAR GHOTANE",
      "prn": "242141083",
      "pass": "242141083",
      "role": "student",
      "class": "FY B",
      "attendance": 25.0
  },
  {
      "name": "APARNA ARUN KUMBAR",
      "prn": "242141084",
      "pass": "242141084",
      "role": "student",
      "class": "FY B",
      "attendance": 29.0
  },
  {
      "name": "YASH KIRAN NARAWADE",
      "prn": "242141085",
      "pass": "242141085",
      "role": "student",
      "class": "FY B",
      "attendance": 84.0
  },
  {
      "name": "VAISHANAVI MANOHAR GHATANATTI",
      "prn": "242141087",
      "pass": "242141087",
      "role": "student",
      "class": "FY B",
      "attendance": 63.0
  },
  {
      "name": "TANVI TULSHIDAS BANE",
      "prn": "242141089",
      "pass": "242141089",
      "role": "student",
      "class": "FY B",
      "attendance": 31.0
  },
  {
      "name": "HARSHWARDHAN SANJAY PATIL",
      "prn": "242141090",
      "pass": "242141090",
      "role": "student",
      "class": "FY B",
      "attendance": 37.0
  },
  {
      "name": "MOHAMMEDFAIZ BABASAB PEERZADE",
      "prn": "242141091",
      "pass": "242141091",
      "role": "student",
      "class": "FY B",
      "attendance": 3.0
  },
  {
      "name": "SAMARTH VASUDEV CHORMULE",
      "prn": "242141092",
      "pass": "242141092",
      "role": "student",
      "class": "FY B",
      "attendance": 63.0
  },
  {
      "name": "SURAJ SACHIN SONI",
      "prn": "242141093",
      "pass": "242141093",
      "role": "student",
      "class": "FY B",
      "attendance": 61.0
  },
  {
      "name": "PARTH GAJANAN POTDAR",
      "prn": "242141094",
      "pass": "242141094",
      "role": "student",
      "class": "FY B",
      "attendance": 69.0
  },
  {
      "name": "SAKSHI PRAKASH HANDAGE",
      "prn": "242141095",
      "pass": "242141095",
      "role": "student",
      "class": "FY B",
      "attendance": 75.0
  },
  {
      "name": "ANSHIKA UDAY PUTRAN",
      "prn": "242141096",
      "pass": "242141096",
      "role": "student",
      "class": "FY B",
      "attendance": 39.0
  },
  {
      "name": "PRAYUJA LAHU JADHAV",
      "prn": "242141097",
      "pass": "242141097",
      "role": "student",
      "class": "FY B",
      "attendance": 77.0
  },
  {
      "name": "PRANAV SWAPNIL PADAMWAR",
      "prn": "242141098",
      "pass": "242141098",
      "role": "student",
      "class": "FY B",
      "attendance": 40.0
  },
  {
      "name": "AMARTYA VINOD JADHAV",
      "prn": "242141099",
      "pass": "242141099",
      "role": "student",
      "class": "FY B",
      "attendance": 5.0
  },
  {
      "name": "SAMRUDDHI AKARAM PATIL",
      "prn": "242141100",
      "pass": "242141100",
      "role": "student",
      "class": "FY B",
      "attendance": 77.0
  },
  {
      "name": "AYUB IBRAHIM MOMIN",
      "prn": "242141103",
      "pass": "242141103",
      "role": "student",
      "class": "FY B",
      "attendance": 82.0
  },
  {
      "name": "VISHWA VITTAL GHONGADI",
      "prn": "242141104",
      "pass": "242141104",
      "role": "student",
      "class": "FY B",
      "attendance": 37.0
  },
  {
      "name": "SWANAND YOGESH SUTAR",
      "prn": "242141105",
      "pass": "242141105",
      "role": "student",
      "class": "FY B",
      "attendance": 57.0
  },
  {
      "name": "ARYAN ASHOK BHOGE",
      "prn": "242141106",
      "pass": "242141106",
      "role": "student",
      "class": "FY B",
      "attendance": 10.0
  },
  {
      "name": "KEERTI MOHAN GEJJE",
      "prn": "242141107",
      "pass": "242141107",
      "role": "student",
      "class": "FY B",
      "attendance": 3.0
  },
  {
      "name": "RAKSHITA DNYANESHWAR KHOT",
      "prn": "242141109",
      "pass": "242141109",
      "role": "student",
      "class": "FY B",
      "attendance": 81.0
  },
  {
      "name": "ABUBAKAR NIYAZAHMED ABUFAZAL",
      "prn": "242141110",
      "pass": "242141110",
      "role": "student",
      "class": "FY B",
      "attendance": 73.0
  },
  {
      "name": "PRASAD RAMESH UMARE",
      "prn": "242141111",
      "pass": "242141111",
      "role": "student",
      "class": "FY B",
      "attendance": 38.0
  },
  {
      "name": "HARISH MUDAKAPPA KUMBAR",
      "prn": "242141112",
      "pass": "242141112",
      "role": "student",
      "class": "FY B",
      "attendance": 43.0
  },
  {
      "name": "SOHAMM SANTOSH VANJALE",
      "prn": "242141113",
      "pass": "242141113",
      "role": "student",
      "class": "FY B",
      "attendance": 62.0
  },
  {
      "name": "VEDANTI GANPAT BHOGE",
      "prn": "242141114",
      "pass": "242141114",
      "role": "student",
      "class": "FY B",
      "attendance": 57.0
  },
  {
      "name": "BHARAT MAYAPPA VADDAR",
      "prn": "242141115",
      "pass": "242141115",
      "role": "student",
      "class": "FY B",
      "attendance": 53.0
  },
  {
      "name": "SHREYA BHARATESH WALVADE",
      "prn": "242141117",
      "pass": "242141117",
      "role": "student",
      "class": "FY B",
      "attendance": 47.0
  },
  {
      "name": "SHAHID ZAFAR MARUF",
      "prn": "242141118",
      "pass": "242141118",
      "role": "student",
      "class": "FY B",
      "attendance": 93.0
  },
  {
      "name": "JUNNED MUDASSIR PALEGAR",
      "prn": "242141119",
      "pass": "242141119",
      "role": "student",
      "class": "FY B",
      "attendance": 67.0
  },
  {
      "name": "TEJAS KUMAR KORE",
      "prn": "242141120",
      "pass": "242141120",
      "role": "student",
      "class": "FY B",
      "attendance": 57.0
  },
  {
      "name": "SWALIYA KHALID MUJAWAR",
      "prn": "242141121",
      "pass": "242141121",
      "role": "student",
      "class": "FY B",
      "attendance": 43.0
  },
  {
      "name": "JINABADE MOHAMMEDZAYEEM ZAKIRAHEMED",
      "prn": "242141122",
      "pass": "242141122",
      "role": "student",
      "class": "FY B",
      "attendance": 46.0
  },
  {
      "name": "SHREYAS VARDHAMAN ASKI",
      "prn": "242141123",
      "pass": "242141123",
      "role": "student",
      "class": "FY B",
      "attendance": 57.0
  },
  {
      "name": "SNEHA NANDEPPA NAGONI",
      "prn": "242141124",
      "pass": "242141124",
      "role": "student",
      "class": "FY B",
      "attendance": 50.0
  },
  {
      "name": "VINAY BASAPPA  JAMBAGI",
      "prn": "242141125",
      "pass": "242141125",
      "role": "student",
      "class": "FY B",
      "attendance": 81.0
  },
  {
      "name": "ASHWINI SADASHIV JAMBAGI",
      "prn": "242141126",
      "pass": "242141126",
      "role": "student",
      "class": "FY B",
      "attendance": 71.0
  },
  {
      "name": "REHAN  SHAKIL  PATHAN",
      "prn": "242141128",
      "pass": "242141128",
      "role": "student",
      "class": "FY B",
      "attendance": 98.0
  },
  {
      "name": "KRISHNA RAJESH VASHIKAR",
      "prn": "242141129",
      "pass": "242141129",
      "role": "student",
      "class": "FY B",
      "attendance": 26.0
  },
  {
      "name": "SIDDHI ONKAR POTDAR",
      "prn": "242141130",
      "pass": "242141130",
      "role": "student",
      "class": "FY B",
      "attendance": 31.0
  },
  {
      "name": "UMAR MAQSUD JAMADAR",
      "prn": "242141131",
      "pass": "242141131",
      "role": "student",
      "class": "FY B",
      "attendance": 58.0
  },
  {
      "name": "FURKHANMAHEDI AYUB MOMIN",
      "prn": "242141132",
      "pass": "242141132",
      "role": "student",
      "class": "FY B",
      "attendance": 51.0
  },
  {
      "name": "SOUJANYA CHANDRAKANT ASKI",
      "prn": "242141133",
      "pass": "242141133",
      "role": "student",
      "class": "FY B",
      "attendance": 72.0
  },
  {
      "name": "PURVA SANDEEP GIDD",
      "prn": "242141003",
      "pass": "242141003",
      "role": "student",
      "class": "FY A",
      "attendance": 93.0
  },
  {
      "name": "TANVI MANGESH PUNDEKAR",
      "prn": "242141005",
      "pass": "242141005",
      "role": "student",
      "class": "FY A",
      "attendance": 68.0
  },
  {
      "name": "SHUBHAM GODHANRAM SUTHAR",
      "prn": "242141006",
      "pass": "242141006",
      "role": "student",
      "class": "FY A",
      "attendance": 81.0
  },
  {
      "name": "ADITYA SUNIL KAMTHE",
      "prn": "242141010",
      "pass": "242141010",
      "role": "student",
      "class": "FY A",
      "attendance": 55.0
  },
  {
      "name": "SHREYAS GANGADHAR HIREMATH",
      "prn": "242141011",
      "pass": "242141011",
      "role": "student",
      "class": "FY A",
      "attendance": 81.0
  },
  {
      "name": "SHIVABASAYYA SHIVANAND HIREMATH",
      "prn": "242141012",
      "pass": "242141012",
      "role": "student",
      "class": "FY A",
      "attendance": 73.0
  },
  {
      "name": "YASHRAJ MAHESH PATIL",
      "prn": "242141013",
      "pass": "242141013",
      "role": "student",
      "class": "FY A",
      "attendance": 62.0
  },
  {
      "name": "HARSHIT RAMPRATAP SINGH",
      "prn": "242141014",
      "pass": "242141014",
      "role": "student",
      "class": "FY A",
      "attendance": 59.0
  },
  {
      "name": "PARIKSHIT ARJUN JADHAV",
      "prn": "242141015",
      "pass": "242141015",
      "role": "student",
      "class": "FY A",
      "attendance": 93.0
  },
  {
      "name": "RUSHIKESH BHASKAR GAIKWAD",
      "prn": "242141016",
      "pass": "242141016",
      "role": "student",
      "class": "FY A",
      "attendance": 97.0
  },
  {
      "name": "PRATHAMESH DEEPAKKUMAR SALUNKHE",
      "prn": "242141017",
      "pass": "242141017",
      "role": "student",
      "class": "FY A",
      "attendance": 67.0
  },
  {
      "name": "SANYAM PRAMOD PATIL",
      "prn": "242141018",
      "pass": "242141018",
      "role": "student",
      "class": "FY A",
      "attendance": 86.0
  },
  {
      "name": "ANIKET MAHADEV CHOUGULE",
      "prn": "242141019",
      "pass": "242141019",
      "role": "student",
      "class": "FY A",
      "attendance": 67.0
  },
  {
      "name": "SHAHID JAINUDDIN TARTE",
      "prn": "242141020",
      "pass": "242141020",
      "role": "student",
      "class": "FY A",
      "attendance": 51.0
  },
  {
      "name": "MADHURA KRISHNAT JALANE",
      "prn": "242141022",
      "pass": "242141022",
      "role": "student",
      "class": "FY A",
      "attendance": 57.0
  },
  {
      "name": "HRUSHIKESH JINENDRA MUDALGI",
      "prn": "242141023",
      "pass": "242141023",
      "role": "student",
      "class": "FY A",
      "attendance": 54.0
  },
  {
      "name": "AKASH SHRISHAIL GUDODAGI",
      "prn": "242141024",
      "pass": "242141024",
      "role": "student",
      "class": "FY A",
      "attendance": 54.0
  },
  {
      "name": "KALPESH MAHADEV SHINDE",
      "prn": "242141025",
      "pass": "242141025",
      "role": "student",
      "class": "FY A",
      "attendance": 42.0
  },
  {
      "name": "ABHISHEK LAXMAN HIPPARAGI",
      "prn": "242141026",
      "pass": "242141026",
      "role": "student",
      "class": "FY A",
      "attendance": 94.0
  },
  {
      "name": "OMKAR  PATIL",
      "prn": "242141027",
      "pass": "242141027",
      "role": "student",
      "class": "FY A",
      "attendance": 91.0
  },
  {
      "name": "CHAVAN SAMRUDHI ANNU",
      "prn": "242141029",
      "pass": "242141029",
      "role": "student",
      "class": "FY A",
      "attendance": 86.0
  },
  {
      "name": "DIVYA DAJIBA MUTALIK",
      "prn": "242141030",
      "pass": "242141030",
      "role": "student",
      "class": "FY A",
      "attendance": 68.0
  },
  {
      "name": "BADANIKAI SURABHI UDAY",
      "prn": "242141031",
      "pass": "242141031",
      "role": "student",
      "class": "FY A",
      "attendance": 56.0
  },
  {
      "name": "KETKI SANTOSH JAGTAP",
      "prn": "242141032",
      "pass": "242141032",
      "role": "student",
      "class": "FY A",
      "attendance": 81.0
  },
  {
      "name": "ARATI GAJANAN KICHADE",
      "prn": "242141033",
      "pass": "242141033",
      "role": "student",
      "class": "FY A",
      "attendance": 59.0
  },
  {
      "name": "AKASH PRAKASH ALUR",
      "prn": "242141034",
      "pass": "242141034",
      "role": "student",
      "class": "FY A",
      "attendance": 78.0
  },
  {
      "name": "PUNDALIK  PARASHURAM  KOTEKAR",
      "prn": "242141036",
      "pass": "242141036",
      "role": "student",
      "class": "FY A",
      "attendance": 74.0
  },
  {
      "name": "KRISHNA  BALAJI  YADAV",
      "prn": "242141037",
      "pass": "242141037",
      "role": "student",
      "class": "FY A",
      "attendance": 71.0
  },
  {
      "name": "PRATIK  MUDASHINGE",
      "prn": "242141039",
      "pass": "242141039",
      "role": "student",
      "class": "FY A",
      "attendance": 73.0
  },
  {
      "name": "RAMAGOUDA  RACHAGOUDAR",
      "prn": "242141040",
      "pass": "242141040",
      "role": "student",
      "class": "FY A",
      "attendance": 71.0
  },
  {
      "name": "MOHAMMADZAID SHAKEEL MUJAWAR",
      "prn": "242141041",
      "pass": "242141041",
      "role": "student",
      "class": "FY A",
      "attendance": 45.0
  },
  {
      "name": "YANDAGOUDAR ANUSHKA",
      "prn": "242141042",
      "pass": "242141042",
      "role": "student",
      "class": "FY A",
      "attendance": 91.0
  },
  {
      "name": "SONALI SHARADKUMAR NANDRE",
      "prn": "242141043",
      "pass": "242141043",
      "role": "student",
      "class": "FY A",
      "attendance": 84.0
  },
  {
      "name": "MOKSHADA  KURUNDWADE",
      "prn": "242141045",
      "pass": "242141045",
      "role": "student",
      "class": "FY A",
      "attendance": 64.0
  },
  {
      "name": "RAJNANDINI  BANAVANNA",
      "prn": "242141047",
      "pass": "242141047",
      "role": "student",
      "class": "FY A",
      "attendance": 77.0
  },
  {
      "name": "VILIN  DURGAPPA KOULGEKAR",
      "prn": "242141050",
      "pass": "242141050",
      "role": "student",
      "class": "FY A",
      "attendance": 92.0
  },
  {
      "name": "KOUSTUBH JOTIBA PATIL",
      "prn": "242141051",
      "pass": "242141051",
      "role": "student",
      "class": "FY A",
      "attendance": 88.0
  },
  {
      "name": "MOHAMMADZAID  SHAIKH",
      "prn": "242141052",
      "pass": "242141052",
      "role": "student",
      "class": "FY A",
      "attendance": 53.0
  },
  {
      "name": "MAHESH PIRAGOUDA PATIL",
      "prn": "242141053",
      "pass": "242141053",
      "role": "student",
      "class": "FY A",
      "attendance": 94.0
  },
  {
      "name": "ARYAN  RAMCHANDANI",
      "prn": "242141054",
      "pass": "242141054",
      "role": "student",
      "class": "FY A",
      "attendance": 31.0
  },
  {
      "name": "MANE SUJAL BAHUBALI",
      "prn": "242141055",
      "pass": "242141055",
      "role": "student",
      "class": "FY A",
      "attendance": 80.0
  },
  {
      "name": "HUSAIN SUBHANMEHADI MOMIN",
      "prn": "242141056",
      "pass": "242141056",
      "role": "student",
      "class": "FY A",
      "attendance": 50.0
  },
  {
      "name": "PRIYANKA POPAT GIDDASAKKANNAVAR",
      "prn": "242141057",
      "pass": "242141057",
      "role": "student",
      "class": "FY A",
      "attendance": 91.0
  },
  {
      "name": "SOUNDARYA  PATIL",
      "prn": "242141058",
      "pass": "242141058",
      "role": "student",
      "class": "FY A",
      "attendance": 54.0
  },
  {
      "name": "PRAMOD BHIMAPUR KHIDRAPUR",
      "prn": "242141059",
      "pass": "242141059",
      "role": "student",
      "class": "FY A",
      "attendance": 81.0
  },
  {
      "name": "ADITYA  KOLEKAR",
      "prn": "242141060",
      "pass": "242141060",
      "role": "student",
      "class": "FY A",
      "attendance": 72.0
  },
  {
      "name": "VIDYASAGAR GANGAPPA SUMBALI",
      "prn": "242141061",
      "pass": "242141061",
      "role": "student",
      "class": "FY A",
      "attendance": 76.0
  },
  {
      "name": "PREETAM  KHIDRAPUR",
      "prn": "242141062",
      "pass": "242141062",
      "role": "student",
      "class": "FY A",
      "attendance": 89.0
  },
  {
      "name": "MOHAMMEDSAAD ALLAHBAKSH HAWALDAR",
      "prn": "242141063",
      "pass": "242141063",
      "role": "student",
      "class": "FY A",
      "attendance": 63.0
  },
  {
      "name": "SAMRUDDHI  KHARAPE",
      "prn": "242141064",
      "pass": "242141064",
      "role": "student",
      "class": "FY A",
      "attendance": 76.0
  },
  {
      "name": "MOHAMMADELEYAS MOHAYUDDIN MULLA",
      "prn": "242141065",
      "pass": "242141065",
      "role": "student",
      "class": "FY A",
      "attendance": 29.0
  },
  {
      "name": "ANKITA  CHOUGALA",
      "prn": "242141066",
      "pass": "242141066",
      "role": "student",
      "class": "FY A",
      "attendance": 77.0
  },
  {
      "name": "ANUJ  HIRIKUDE",
      "prn": "242141067",
      "pass": "242141067",
      "role": "student",
      "class": "FY A",
      "attendance": 75.0
  },
  {
      "name": "PIYUSH MARUTI JAGATAP",
      "prn": "242141068",
      "pass": "242141068",
      "role": "student",
      "class": "FY A",
      "attendance": 89.0
  },
  {
      "name": "SOORAJ POPAT CHAVAN",
      "prn": "242141069",
      "pass": "242141069",
      "role": "student",
      "class": "FY A",
      "attendance": 84.0
  },
  {
      "name": "DIYA KELVINKUMAR TRAMBADIYA",
      "prn": "242141070",
      "pass": "242141070",
      "role": "student",
      "class": "FY A",
      "attendance": 58.0
  }
]

export default users;
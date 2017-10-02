
export class EmployeeStore {

    static empObj = `[
        {
            "name": "Subrata Ghosh",
            "empId": "R1",
            "salesForceId": "235",
            "emailId": "subrata.ghosh@reval.com"
        },
        {
            "name": "Rohit Danwani",
            "empId": "R2",
            "salesForceId": "236",
            "emailId": "rohit.danwani@reval.com"
        },
        {
            "name": "Nidhi Juyal",
            "empId": "R4",
            "salesForceId": "237",
            "emailId": "nidhi.juyal@reval.com"
        },
        {
            "name": "Kamal Bhardwaj",
            "empId": "R5",
            "salesForceId": "238",
            "emailId": "kamal.bhardwaj@reval.com"
        },
        {
            "name": "Abhishek Maiti",
            "empId": "R14",
            "salesForceId": "244",
            "emailId": "abhishek.maiti@reval.com"
        },
        {
            "name": "Taranjeet Singh",
            "empId": "R22",
            "salesForceId": "250",
            "emailId": "taranjeet.singh@reval.com"
        },
        {
            "name": "Anushree Kher",
            "empId": "R24",
            "salesForceId": "252",
            "emailId": "anushree.singh@reval.com"
        },
        {
            "name": "Dheeraj Sharma",
            "empId": "R26",
            "salesForceId": "253",
            "emailId": "dheeraj.sharma@reval.com"
        },
        {
            "name": "Neha Malik",
            "empId": "R33",
            "salesForceId": "258",
            "emailId": "neha.malik@reval.com"
        },
        {
            "name": "Ankur Parwal",
            "empId": "R35",
            "salesForceId": "260",
            "emailId": "ankur.parwal@reval.com"
        },
        {
            "name": "Deepti Achanta",
            "empId": "R39",
            "salesForceId": "264",
            "emailId": "deepti.achanta@reval.com"
        },
        {
            "name": "Megha Maggo",
            "empId": "R40",
            "salesForceId": "265",
            "emailId": "megha.maggo@reval.com"
        },
        {
            "name": "Himanshu Yadav",
            "empId": "R47",
            "salesForceId": "293",
            "emailId": "himanshu.yadav@reval.com"
        },
        {
            "name": "Saurabh Singhal",
            "empId": "R48",
            "salesForceId": "294",
            "emailId": "saurabh.singhal@reval.com"
        },
        {
            "name": "Ankush Jindal",
            "empId": "R51",
            "salesForceId": "439",
            "emailId": "ankush.jindal@reval.com"
        },
        {
            "name": "Gaurav Chopra",
            "empId": "R52",
            "salesForceId": "440",
            "emailId": "gaurav.chopra@reval.com"
        },
        {
            "name": "Varun Yadav",
            "empId": "R54",
            "salesForceId": "446",
            "emailId": "varun.yadav@reval.com"
        },
        {
            "name": "Ankit Pande",
            "empId": "R56",
            "salesForceId": "296",
            "emailId": "ankit.pande@reval.com"
        },
        {
            "name": "Namrata Oberoi",
            "empId": "R57",
            "salesForceId": "297",
            "emailId": "namrata.oberoi@reval.com"
        },
        {
            "name": "Rakesh Kumar Singh",
            "empId": "R59",
            "salesForceId": "554",
            "emailId": "rakesh.singh@reval.com"
        },
        {
            "name": "Anjali Kohli",
            "empId": "R61",
            "salesForceId": "562",
            "emailId": "anjali.kohli@reval.com"
        },
        {
            "name": "Abhishek Vijh",
            "empId": "R62",
            "salesForceId": "567",
            "emailId": "abhishek.vijh@reval.com"
        },
        {
            "name": "Shubhangi Singhal",
            "empId": "R67",
            "salesForceId": "988",
            "emailId": "shubhangi.singhal@reval.com"
        },
        {
            "name": "Ashish Kataria",
            "empId": "R69",
            "salesForceId": "598",
            "emailId": "ashish.kataria@reval.com"
        },
        {
            "name": "Sudhang Shankar",
            "empId": "R70",
            "salesForceId": "599",
            "emailId": "sudhang.shankar@reval.com"
        },
        {
            "name": "Sumit Jain",
            "empId": "R72",
            "salesForceId": "209",
            "emailId": "sumit.jain@reval.com"
        },
        {
            "name": "Aayushi Dhawan",
            "empId": "R73",
            "salesForceId": "240",
            "emailId": "aayushi.dhawan@reval.com"
        },
        {
            "name": "Projnabrata Seth",
            "empId": "R75",
            "salesForceId": "1213",
            "emailId": "projnabrata.seth@reval.com"
        },
        {
            "name": "Shubhangi Paliwal",
            "empId": "R78",
            "salesForceId": "1202",
            "emailId": "shubhangi.paliwal@reval.com"
        },
        {
            "name": "Yogesh Pant",
            "empId": "R79",
            "salesForceId": "1273",
            "emailId": "yogesh.pant@reval.com"
        },
        {
            "name": "Christopher Whitby",
            "empId": "R80",
            "salesForceId": "431",
            "emailId": "chris.whitby@reval.com"
        },
        {
            "name": "Devanshu Bhatt",
            "empId": "R81",
            "salesForceId": "268",
            "emailId": "devanshu.bhatt@reval.com"
        },
        {
            "name": "Milan Verma",
            "empId": "R84",
            "salesForceId": "1307",
            "emailId": "milan.verma@reval.com"
        },
        {
            "name": "Mohit Manocha",
            "empId": "R85",
            "salesForceId": "1316",
            "emailId": "mohit.manocha@reval.com"
        },
        {
            "name": "Amandeep Singh",
            "empId": "R86",
            "salesForceId": "1322",
            "emailId": "amandeep.singh@reval.com"
        },
        {
            "name": "Vineeta Nanda",
            "empId": "R89",
            "salesForceId": "1362",
            "emailId": "vineeta.nanda@reval.com"
        },
        {
            "name": "Shruti Gupta",
            "empId": "R91",
            "salesForceId": "1200",
            "emailId": "shruti.gupta@reval.com"
        },
        {
            "name": "Neha Gupta",
            "empId": "R92",
            "salesForceId": "1246",
            "emailId": "neha.gupta@reval.com"
        },
        {
            "name": "Gurpreet Kaur",
            "empId": "R93",
            "salesForceId": "1247",
            "emailId": "gurpreet.kaur@reval.com"
        },
        {
            "name": "Karan Kapoor",
            "empId": "R94",
            "salesForceId": "1280",
            "emailId": "karan.kapoor@reval.com"
        },
        {
            "name": "Amey Kulkarni",
            "empId": "R95",
            "salesForceId": "1375",
            "emailId": "amey.kulkarni@reval.com"
        },
        {
            "name": "Ashwini Lakshminarayan",
            "empId": "R96",
            "salesForceId": "1377",
            "emailId": "ashwini.lakshminarayan@reval.com"
        },
        {
            "name": "Ankush Garg",
            "empId": "R97",
            "salesForceId": "1389",
            "emailId": "ankush.garg@reval.com"
        },
        {
            "name": "Amarjeet Singh Dahiya",
            "empId": "R98",
            "salesForceId": "1398",
            "emailId": "amarjeet.dahiya@reval.com"
        },
        {
            "name": "Anindita Dhar",
            "empId": "R100",
            "salesForceId": "1477",
            "emailId": "anindita.dhar@reval.com"
        },
        {
            "name": "Megha Sindhwani",
            "empId": "R102",
            "salesForceId": "1501",
            "emailId": "megha.sindhwani@reval.com"
        },
        {
            "name": "Ashish Bansal",
            "empId": "R104",
            "salesForceId": "1482",
            "emailId": "ashish.bansal@reval.com"
        },
        {
            "name": "Amanpreet Kaur",
            "empId": "R105",
            "salesForceId": "1533",
            "emailId": "amanpreet.kaur@reval.com"
        },
        {
            "name": "Sakshi Kapila",
            "empId": "R106",
            "salesForceId": "1535",
            "emailId": "sakshi.kapila@reval.com"
        },
        {
            "name": "Anand Pratap Singh",
            "empId": "R107",
            "salesForceId": "243",
            "emailId": "anand.psingh@reval.com"
        },
        {
            "name": "Gagan Shah",
            "empId": "R108",
            "salesForceId": "1439",
            "emailId": "gagan.shah@reval.com"
        },
        {
            "name": "Nikhil Verma",
            "empId": "R109",
            "salesForceId": "1438",
            "emailId": "nikhil.verma@reval.com"
        },
        {
            "name": "Sukrit Kapil",
            "empId": "R110",
            "salesForceId": "1435",
            "emailId": "sukrit.kapil@reval.com"
        },
        {
            "name": "Bhupinder Tomar",
            "empId": "R111",
            "salesForceId": "1445",
            "emailId": "bhupinder.tomar@reval.com"
        },
        {
            "name": "Gaurav Gupta",
            "empId": "R112",
            "salesForceId": "1444",
            "emailId": "gaurav.gupta@reval.com"
        },
        {
            "name": "Himanshu Pal",
            "empId": "R113",
            "salesForceId": "1574",
            "emailId": "himanshu.pal@reval.com"
        },
        {
            "name": "Harneet Kaur",
            "empId": "R116",
            "salesForceId": "1491",
            "emailId": "harneet.kaur@reval.com"
        },
        {
            "name": "Meeta Malhotra",
            "empId": "R117",
            "salesForceId": "1492",
            "emailId": "meeta.malhotra@reval.com"
        },
        {
            "name": "Surendra Kumar Sharma",
            "empId": "R119",
            "salesForceId": "1495",
            "emailId": "surendra.sharma@reval.com"
        },
        {
            "name": "Purwaaj Ahuja",
            "empId": "R120",
            "salesForceId": "1609",
            "emailId": "purwaaj.ahuja@reval.com"
        },
        {
            "name": "Deepti Kapoor",
            "empId": "R122",
            "salesForceId": "1711",
            "emailId": "deepti.kapoor@reval.com"
        },
        {
            "name": "Devesh Aggarwal",
            "empId": "R123",
            "salesForceId": "1723",
            "emailId": "devesh.aggarwal@reval.com"
        },
        {
            "name": "Gitika Khurana",
            "empId": "R124",
            "salesForceId": "1731",
            "emailId": "gitika.khurana@reval.com"
        },
        {
            "name": "Devashish Sharma",
            "empId": "R125",
            "salesForceId": "1748",
            "emailId": "devashish.sharma@reval.com"
        },
        {
            "name": "Narender Jangra",
            "empId": "R127",
            "salesForceId": "1754",
            "emailId": "narender.jangra@reval.com"
        },
        {
            "name": "Karishma Rastogi",
            "empId": "R128",
            "salesForceId": "1772",
            "emailId": "karishma.rastogi@reval.com"
        },
        {
            "name": "Siddharth Thakkar",
            "empId": "R129",
            "salesForceId": "1794",
            "emailId": "siddharth.thakkar@reval.com"
        },
        {
            "name": "Gaurav Kumar",
            "empId": "R130",
            "salesForceId": "1802",
            "emailId": "gaurav.kumar@reval.com"
        },
        {
            "name": "Anamika Das",
            "empId": "R131",
            "salesForceId": "1842",
            "emailId": "anamika.das@reval.com"
        },
        {
            "name": "Naisergic Sharma",
            "empId": "R132",
            "salesForceId": "1851",
            "emailId": "naisergic.sharma@reval.com"
        },
        {
            "name": "Jatin Suri",
            "empId": "R133",
            "salesForceId": "2001",
            "emailId": "jatin.suri@reval.com"
        },
        {
            "name": "Bhanu Rampal",
            "empId": "R134",
            "salesForceId": "2016",
            "emailId": "bhanu.rampal@reval.com"
        },
        {
            "name": "Ankita Chand",
            "empId": "R135",
            "salesForceId": "2034",
            "emailId": "ankita.chand@reval.com"
        },
        {
            "name": "Amrita Arora",
            "empId": "R136",
            "salesForceId": "2024",
            "emailId": "amrita.arora@reval.com"
        },
        {
            "name": "Surabhi Kulkarni",
            "empId": "R137",
            "salesForceId": "2025",
            "emailId": "surabhi.kulkarni@reval.com"
        },
        {
            "name": "Harshit Bhatia",
            "empId": "R138",
            "salesForceId": "2026",
            "emailId": "harshit.bhatia@reval.com"
        },
        {
            "name": "Saurabh Kumar",
            "empId": "R139",
            "salesForceId": "2027",
            "emailId": "saurabh.kumar@reval.com"
        },
        {
            "name": "Trijyot Singh",
            "empId": "R140",
            "salesForceId": "2028",
            "emailId": "trijyot.singh@reval.com"
        },
        {
            "name": "Ankur Bhattacharya",
            "empId": "R141",
            "salesForceId": "2029",
            "emailId": "ankur.bhattacharya@reval.com"
        },
        {
            "name": "Sahil Wadhwa",
            "empId": "R142",
            "salesForceId": "2030",
            "emailId": "sahil.wadhwa@reval.com"
        },
        {
            "name": "Inderjeet Kumar",
            "empId": "R143",
            "salesForceId": "2031",
            "emailId": "inderjeet.kumar@reval.com"
        },
        {
            "name": "Jyotnain Kaur",
            "empId": "R144",
            "salesForceId": "2032",
            "emailId": "jyotnain.kaur@reval.com"
        },
        {
            "name": "Khushboo Sood",
            "empId": "R145",
            "salesForceId": "2033",
            "emailId": "khushboo.sood@reval.com"
        },
        {
            "name": "Vikas Manchanda",
            "empId": "R146",
            "salesForceId": "2038",
            "emailId": "vikas.manchanda@reval.com"
        },
        {
            "name": "Lalit Sharma",
            "empId": "R147",
            "salesForceId": "2043",
            "emailId": "lalit.sharma@reval.com"
        },
        {
            "name": "Kawaljeet Singh",
            "empId": "R148",
            "salesForceId": "2047",
            "emailId": "kawaljeet.singh@reval.com"
        },
        {
            "name": "Arzoo Anjum",
            "empId": "R149",
            "salesForceId": "2053",
            "emailId": "arzoo.anjum@reval.com"
        },
        {
            "name": "Madhur Kaushal",
            "empId": "R150",
            "salesForceId": "2054",
            "emailId": "madhur.kaushal@reval.com"
        },
        {
            "name": "Prateek Chanana",
            "empId": "R151",
            "salesForceId": "2055",
            "emailId": "prateek.chanana@reval.com"
        },
        {
            "name": "Shashank Taneja",
            "empId": "R152",
            "salesForceId": "2056",
            "emailId": "shashank.taneja@reval.com"
        },
        {
            "name": "Shalendra Verma",
            "empId": "R153",
            "salesForceId": "2057",
            "emailId": "shalendra.verma@reval.com"
        },
        {
            "name": "Sasmita Parida",
            "empId": "R154",
            "salesForceId": "2059",
            "emailId": "sasmita.parida@reval.com"
        },
        {
            "name": "Keshav Sachdeva",
            "empId": "R155",
            "salesForceId": "2060",
            "emailId": "keshav.sachdeva@reval.com"
        },
        {
            "name": "Devta Shukla",
            "empId": "R156",
            "salesForceId": "2061",
            "emailId": "devta.shukla@reval.com"
        },
        {
            "name": "Ankush Singla",
            "empId": "R157",
            "salesForceId": "2068",
            "emailId": "ankush.singla@reval.com"
        },
        {
            "name": "Paras Gulati",
            "empId": "R158",
            "salesForceId": "2063",
            "emailId": "paras.gulati@reval.com"
        },
        {
            "name": "Shruti Vats",
            "empId": "R159",
            "salesForceId": "2069",
            "emailId": "shruti.vats@reval.com"
        },
        {
            "name": "Anju Singh",
            "empId": "R160",
            "salesForceId": "2064",
            "emailId": "anju.singh@reval.com"
        },
        {
            "name": "Manu Saini",
            "empId": "R161",
            "salesForceId": "2065",
            "emailId": "manu.saini@reval.com"
        },
        {
            "name": "Mohammed Sharik",
            "empId": "R162",
            "salesForceId": "2066",
            "emailId": "mohammed.sharik@reval.com"
        },
        {
            "name": "Somdutt Sharma",
            "empId": "R163",
            "salesForceId": "2067",
            "emailId": "somdutt.sharma@reval.com"
        },
        {
            "name": "Harleen Kaur Soni",
            "empId": "R164",
            "salesForceId": "2072",
            "emailId": "harleen.soni@reval.com"
        },
        {
            "name": "Animesh Kishore",
            "empId": "R165",
            "salesForceId": "2071",
            "emailId": "animesh.kishore@reval.com"
        },
        {
            "name": "Sumit Kandpal",
            "empId": "R166",
            "salesForceId": "2074",
            "emailId": "sumit.kandpal@reval.com"
        },
        {
            "name": "Mohammad Ashraf",
            "empId": "R167",
            "salesForceId": "2073",
            "emailId": "mohammad.ashraf@reval.com"
        },
        {
            "name": "Sumit Kandpal",
            "empId": "R168",
            "salesForceId": "2074",
            "emailId": "sumit.kandpal@reval.com"
        },
        {
            "name": "Sachin Raj",
            "empId": "R170",
            "salesForceId": "2085",
            "emailId": "sachin.raj@reval.com"
        },
        {
            "name": "Kamal Rawal",
            "empId": "R171",
            "salesForceId": "2090",
            "emailId": "kamal.rawal@reval.com"
        },
        {
            "name": "Nitesh Singh",
            "empId": "R172",
            "salesForceId": "2092",
            "emailId": "nitesh.singh@reval.com"
        },
        {
            "name": "Kanwar Kushagra Singh",
            "empId": "R173",
            "salesForceId": "2091",
            "emailId": "kanwar.singh@reval.com"
        },
        {
            "name": "Anima kara",
            "empId": "R174",
            "salesForceId": "2095",
            "emailId": "anima.kara@reval.com"
        }
    ]`;
}

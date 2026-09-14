import type { Band } from "../types/band"

export const bands: Band[] = [
    {
        id: 1,
        name: "yented",
        foundedYear: 2015,
        genre: "Pop",
        info: "เป็นวงดนตรีไทยที่มีสมาชิก 7 คน เริ่มต้นจากกลุ่มนักศึกษามหาวิทยาลัยพะเยาที่รวมตัวกันทำเพลง ก่อนพัฒนาจากวง Acoustic Pop มาเป็นวงที่มีดนตรีหลากหลายมากขึ้น และได้เข้าร่วมการประกวดดนตรี ก่อนจะกลายเป็นศิลปินในสังกัด Macrowave ",
        image: "/images/bands/yen.jpg",
        members: [
            { name: "เจา พงษ์ธรณ์ ปะเมโท", role: "ร้องนำ",image: "/images/members/1.png", }, 
            { name: "แซ็ก วิชญะ แสนภูวา", role: "คีย์บอร์ด",image: "/images/members/2.png", },
            { name: "เปรื่อง เปรื่องวิทย์ พิไลวงศ์", role: "เบส",image: "/images/members/3.png", },
            { name: "บิว วุฒิชัย เขื่อนวิชัย", role: "กลอง",image: "/images/members/4.png", },
        ]
    },
    {
        id: 2,
        name: "Linkin Park",
        foundedYear: 1996,
        genre: "Pop Rock",
        info: "Linkin Park เริ่มต้นจาก Mike Shinoda, Brad Delson และ Rob Bourdon ก่อนที่จะพัฒนาวงและได้สมาชิกเพิ่มเติมจนกลายเป็นวงที่มีชื่อเสียงระดับโลก",
        image: "/images/bands/park.jpg",
        members: [
            { name: "Mike Shinoda", role: "นักร้อง / แร็ป / คีย์บอร์ด / กีตาร์" ,image: "/images/members/mike.jpg",},
            { name: "Brad Delson", role: "กีตาร์" ,image: "/images/members/brad.jpg",},
            { name: "Dave “Phoenix” Farrell", role: "เบส",image: "/images/members/dave.jpg", },
            { name: "Joe Hahn", role: "Turntables / DJ / โปรดักชัน" ,image: "/images/members/joe.jpg",},
            { name: "Emily Armstrong", role: "นักร้อง" ,image: "/images/members/emily.jpg",},
            { name: "Colin Brittain", role: "กลอง" ,image: "/images/members/colin.jpg",}
        ]
    },
    {
        id: 3,
        name: "The Sun",
        foundedYear: 1996,
        genre: "Rock",
         info: "ป็นวงดนตรีร็อกไทยแนว Heavy Metal และ Hard Rock ก่อตั้งในปี พ.ศ. 2539 โดยมี โป่ง ปฐมพงษ์ และ ป๊อป จักรรินทร์ เป็นสมาชิกหลัก วงมีจุดเด่นด้านเสียงร้องที่ทรงพลัง ดนตรีหนักแน่น และการเล่นกีตาร์โซโล่ที่โดดเด่น",
        image: "/images/bands/sun.jpg",
        members: [
            { name: "โป่ง ปฐมพงษ์ สมบัติพิบูลย์", role: "นักร้อง" ,image: "/images/members/0.jpg",},
            { name: "ป๊อป จักรรินทร์ ดวงมณีรัตนชัย", role: "กีตาร์" ,image: "/images/members/9.jpg",},
            { name: "ทักษ์ พิทักษ์ ศรีสังข์", role: "เบส",image: "/images/members/8.jpg",},
            { name: "Sel Vester Lester C. Esteban", role: "กลอง",image: "/images/members/7.jpg", },
            { name: "ปิงปอง ดำรงสิทธิ์ ศรีนาค", role: "กลอง" ,image: "/images/members/6.jpg",}
        ]
    }
]
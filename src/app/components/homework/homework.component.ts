import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  private fname :String[];
  private fpicture :String[];

  constructor() { }

  ngOnInit() {
    this.fname = ["ดอกราชพฤกษ์","ดอกปีบ","ดอกขจร","ดอกกล้วยไม้ ช้างกระ",
    "ดอกอัญชัญ","ดอกแคแสด","ดอกยี่หุบ","ดอกหางนกยูง",
    "ดอกลีลาวดี","ดอกรัก","ดอกราชาวดี","ดอกกันเกรา",
    "ดอกดาหลา","ดอกกระดังงา","ดอกจามจุรี","ดอกยี่สุ่น"];
    this.fpicture = [
      "../../assets/pic/ดอกราชพฤกษ์ .jpg"
     ,"../../assets/pic/ดอกปีบ .jpg"
     ,"../../assets/pic/ดอกขจร.jpg"
     ,"../../assets/pic/ดอกกล้วยไม้ ช้างกระ.jpg"
     ,"../../assets/pic/ดอกอัญชัญ.jpg"
     ,"../../assets/pic/ดอกแคแสด.jpg"
     ,"../../assets/pic/ดอกยี่หุบ.jpg"
     ,"../../assets/pic/ดอกหางนกยูง.jpg"
     ,"../../assets/pic/ดอกลีลาวดี.jpg"
     ,"../../assets/pic/ดอกรัก.jpg"
     ,"../../assets/pic/ดอกราชาวดี.jpg"
     ,"../../assets/pic/ดอกกันเกรา.jpg"
     ,"../../assets/pic/ดอกดาหลา.jpg"
     ,"../../assets/pic/ดอกกระดังงา.jpg"
     ,"../../assets/pic/ดอกจามจุรี .jpg"
     ,"../../assets/pic/ดอกยี่สุ่น.jpg"
    
     ];
  }

}

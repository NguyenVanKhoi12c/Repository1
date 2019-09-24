let select = document.getElementById("select");

let Music = function (name) {
    this.name = name;
    this.music = [];
    this.setName = function (value) {
        this.name = value;
    };
    this.getName = function () {
        return this.name;

    };
    this.link = function () {
        return this.link;
    }
};

let Info = function (stt, name, singer, author, linkMusic) {
    this.stt = stt;
    this.name = name;
    this.singer = singer;
    this.author = author;
    this.linkMusic = linkMusic;

    this.getName = function () {
        return this.name;
    };
    this.link = function () {
        return this.link;
    };
    this.getStt = function () {
        return this.stt;
    };
    this.getSinger = function () {
        return this.singer;
    };
    this.getAuthor = function () {
        return this.author;
    };
    this.getLinkMusic = function () {
        return this.linkMusic;
    };

    this.setStt = function () {
        return this.stt;
    };
    this.setSinger = function () {
        return this.singer;
    };
    this.setAuthor = function () {
        return this.author;
    };
    this.setLinkMusic = function () {
        return this.linkMusic;
    };
    this.getInformation = function () {
        return this.stt + this.name + this.singer + this.author + this.linkMusic;
    };
};
let info1 = new Info("1", "Anh Muốn Nghe Giọng Em Nói", "Nguyên", "Nguyên", "Anh-Muon-Nghe-Giong-Em-Nguyen-LYM-eth.mp3");
let info2 = new Info("2", "Anh Muốn Biết Sự Thật", "DC Tâm", "Dương Nhất Linh", "Anh-Muon-Biet-Su-That-Duong-Nhat-Linh.mp3");
let info3 = new Info("3", "Ánh Dương", "Nguyên", "Nguyên,eth", "Anh-Duong-Nguyen-eth.mp3");
let info4 = new Info("4", "Ai Là Người Thương Em", "Thanh Hưng", "Quân A.P", "Ai-La-Nguoi-Thuong-Em-Quan-A-P.mp3");
let info5 = new Info("5", "Buồn Lắm Em Ơi", "Nhạc Ngoại Lời Việt", "Trịnh Đình Quang", "Buon-Lam-Em-Oi-Trinh-Dinh-Quang.mp3");
let info6 = new Info("6", "Có Chàng Trai Viết Lên Cây", "Phan Mạnh Quỳnh", "Phan Mạnh Quỳnh", "Co-Chang-Trai-Viet-Len-Cay-Phan-Manh-Quynh.mp3");
let info7 = new Info("7", "Chờ Anh Em Nhé", "Thiên Dũng", "Khánh Phong", "Cho-Anh-Em-Nhe-Khanh-Phong.mp3");
let info8 = new Info("8", "Đường Một Chiều", "Nam Trương", "Huỳnh Tú", "Duong-Mot-Chieu-Huynh-Tu-Magazine.mp3");
let info9 = new Info("9", "Đông Kiếm Em", "Vũ", "Vũ", "Dong-Kiem-Em-Vu.mp3");
let info10 = new Info("10", "Gió Vẫn Hát", "Long Phạm", "Long Phạm", "Gio-Van-Hat-Long-Pham.mp3");
let info11 = new Info("11", "Lời Yêu Ngây Dại", "Kha", "kha", "Loi-Yeu-Ngay-Dai-Kha.mp3");
let info12 = new Info("12", "Người Đổi Thay", "Cao Nam Thành", "Cao Nam Thành", "Nguoi-Doi-Thay-Cao-Nam-Thanh.mp3");
let info13 = new Info("13", "Như Gió Với Mây", "Nhạc Ngoại Lời Việt", "Đình Đại Vũ", "Nhu-Gio-Voi-May-Dinh-Dai-Vu.mp3");
let info14 = new Info("14", "Vì Một Người Ra Đi", "Nhạc Hoa Lời Việt", "Hoàng Minh Thắng", "Vi-Mot-Nguoi-Ra-Di-Hoang-Minh-Thang.mp3");
let info15 = new Info("15", "Tướng Quân", "Thanh Hưng", "Thanh Hưng", "Tuong-Quan-Remix-Nhat-Phong-DinhLong.mp3");
let library = new Music();
library.music.push(info1, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11, info12, info13, info14, info15);

function create() {
    for (let i = 0; i < library.music.length; i++) {
        select.options[select.options.length]=new Option(library.music[i].getName(), library.music[i].getStt()-1);
    }
}

function selectMusic() {
    let index = select.options[select.selectedIndex].value;
    document.getElementById('demo1').innerHTML = library.music[index].getStt();
    document.getElementById('demo2').innerHTML = library.music[index].getName();
    document.getElementById('demo3').innerHTML = `<audio controls>
                   <source src="${library.music[index].getLinkMusic()}"></audio>`;
    document.getElementById('demo4').innerHTML = library.music[index].getAuthor();
    document.getElementById('demo5').innerHTML = library.music[index].getSinger();
}


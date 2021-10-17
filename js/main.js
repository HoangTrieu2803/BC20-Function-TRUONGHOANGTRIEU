
function getValue(){
    var diem1 = Number(document.getElementById("inputDiem1").value);
    var diem2 = Number(document.getElementById("inputDiem2").value);
    var diem3 = Number(document.getElementById("inputDiem3").value);
    var diemChuan = Number(document.getElementById("inputDiemChuan").value);
    var doiTuong = document.getElementById("doiTuong").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var diemUuTien = xetUuTien(khuVuc , doiTuong);
    xetDiemChuan(diem1, diem2 , diem3, diemChuan, diemUuTien);
}

function xetDiemChuan(diem1 , diem2, diem3 , diemChuan , diemUuTien){
    var tongDiem =diem1+diem2+diem3+diemUuTien;
   if(diem1 == 0 || diem2 == 0 || diem3 ==0){
       document.getElementById("txtResult").innerHTML = "Ban da rot vi co 1 trong 3 mon co diem";
   }else if(tongDiem >= diemChuan){
    document.getElementById("txtResult").innerHTML = "Ban da dau. Tong diem:"+ tongDiem; 
   }else {
    document.getElementById("txtResult").innerHTML = "Ban da rot. Tong diem:"+ tongDiem; 
   }
}
function xetUuTien(khuVuc , doiTuong){
    var diemUuTien = 0;
    
    if(khuVuc == "A"){
        diemUuTien +=  2;
    }else if (khuVuc == "B"){
        diemUuTien += 1;
    }else if(khuVuc == "C"){
        diemUuTien += 0.5;
    }
    if(doiTuong == 1){
        diemUuTien += 2.5;
    }else if (doiTuong == 2){
        diemUuTien += 1.5;
    }else if(doiTuong == 3){
        diemUuTien += 1;
    }
    return diemUuTien;
}
document.getElementById("btnResult").onclick = getValue;

/**
 * Bai2
 */
    const SO_KW_DAU = 500;
    const SO_KW_50_100 = 650;
    const SO_KW_100_150 = 850;
    const SO_KW_150 = 1100;
    const SO_KW_CONLAI = 1300;
function tinhTienDien(){
    var tongTienDien = 0;
    var soKW = document.getElementById("inputKW").value;
    var hoTen = document.getElementById("inputName").value;
    if(soKW>350){
        tongTienDien = 50*SO_KW_DAU + 50*SO_KW_50_100 + 100*SO_KW_100_150 + 150*SO_KW_150 + (soKW-350) * SO_KW_CONLAI;
    }else{
        if(soKW>200){
            tongTienDien = 50*SO_KW_DAU + 50*SO_KW_50_100 + 100*SO_KW_100_150 + (soKW-200)*SO_KW_150;
        }else if(soKW >100){
            tongTienDien = 50*SO_KW_DAU + 50*SO_KW_50_100 + (soKW -100)*SO_KW_100_150;
        }else if(soKW>50){
            tongTienDien = 50*SO_KW_DAU + (soKW - 50)*SO_KW_50_100;
        }else{
            tongTienDien = soKW * SO_KW_DAU;
        }
    }
    document.getElementById("txtTienDien").innerHTML = "Ho ten: "+hoTen + ";Tien dien: "+ new Intl.NumberFormat('vn-VN').format(tongTienDien)+" VND";
}
document.getElementById("btnTienDien").onclick = tinhTienDien;

/**
 * Bai 3
 */

const GIAMTHUE = 4000000;
const GIAMTHUEPHUTHUOC = 1600000;
const THUE_TREN_60 = 0.05;
const THUE_60_120 = 0.1;
const THUE_120_210 = 0.15;
const THUE_210_384 = 0.2;
const THUE_384_624 = 0.25;
const THUE_624_960 = 0.3;
const THUE_TREN_960 = 0.35;
function tinhTienThue(){
    var thuNhap = document.getElementById("inputThuNhap").value;
    var hoTen2 = document.getElementById("inputName2").value;
    var nguoiPhuThuoc = document.getElementById("inputSoNguoi").value;

    var tienChiuThue = thuNhap - GIAMTHUE - nguoiPhuThuoc*GIAMTHUEPHUTHUOC;
    var tienThue =0;
    if(tienChiuThue>960000000){
        tienThue = tienChiuThue* THUE_TREN_960;
    }else{
        if(tienChiuThue>624000000){
            tienThue = tienChiuThue*THUE_624_960;
        }else if(tienChiuThue>384000000){
            tienThue = tienChiuThue* THUE_384_624;
        }else if(tienChiuThue>210000000){
            tienThue = tienChiuThue* THUE_210_384;
        }else if(tienChiuThue >120000000){
            tienThue = tienChiuThue* THUE_120_210;
        }else if (tienChiuThue > 60000000){
            tienThue = tienChiuThue* THUE_60_120;
        }else{
            tienThue = tienChiuThue* THUE_TREN_60;
        }
    }
    document.getElementById("txtTienThue").innerHTML = "Ho ten: "+ hoTen2 +";Tien thue: "+new Intl.NumberFormat('vn-VN').format(tienThue)+" VND";
}
document.getElementById("btnTienThue").onclick =tinhTienThue;
/**
 * Bai 4
 */
const HOADON_ND = 4.5;
const DICHVU_ND = 20.5;
const THUEKENH_ND = 7.5;
const HOADON_DN = 15;
const DICHVU_DN = 75;
const THUEKENH_DN = 50;

function tinhTienCap(){
    var loaiKH = document.getElementById("selectValue").value;
    var maKH = document.getElementById("inputMaKH").value;
    var soKenh = document.getElementById("inputKenh").value;
    var ketNoi = document.getElementById("inputKetNoi").value;
    var tienCap = 0;
    if(loaiKH == "ND"){
        tienCap = HOADON_ND + DICHVU_ND + THUEKENH_ND * soKenh;
    }else if(loaiKH == "DN"){
        if(ketNoi <= 10){
            tienCap = HOADON_DN + DICHVU_DN + THUEKENH_DN* soKenh;
        }else{
            tienCap = HOADON_DN + DICHVU_DN + (ketNoi-10)*5 + THUEKENH_DN*soKenh; 
        }
    }
    document.getElementById("txtTienCap").innerHTML = "Ma khach hang: "+maKH +"; Tien cap: "+"$"+tienCap;
}
document.getElementById("btnTienCap").onclick = tinhTienCap;
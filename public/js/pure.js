var ChuSo = new Array(" không", " một", " hai", " ba", " bốn", " năm", " sáu", " bảy", " tám", " chín");
var Tien = new Array("", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ");

function toText(amountTransfer) {
    var a = amountTransfer.value;
    var ch = a.toString();
    ch = ch.replace(/\./g, '');
    //alert(ch);
    //alert(amountTransfer.value);
    document.getElementById('amountTransferText').value = numToText(ch);
    //alert(document.getElementById('amountTransferText').value);
}

function toTextResult(amountTransfer) {
    alert('amountTransfer');
    var a = amountTransfer;
    var ch = a.toString();
    //ch = ch.replace(/\./g,'');
    //alert(ch);
    //alert(amountTransfer.value);

    document.getElementById('amountTransferText').value = numToText(ch);
    alert(document.getElementById('amountTransferText').value);
    //alert(document.getElementById('amountTransferText').value);
}

function toTextES(savingAmount) {
    var a = savingAmount.value;
    var ch = a.toString();
    ch = ch.replace(/\./g, '');
    //alert(ch);
    //alert(amountTransfer.value);
    document.getElementById('savingAmountText').value = numToText(ch);
    //alert(document.getElementById('amountTransferText').value);
}


function validateOTPNapas(fundTrans2) {
    l = fundTrans2.otp.value;
    k = fundTrans2.otp.length;

    if (isNaN(l) || l == "") {
        fundTrans2.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }

    if (!(numeral(k.value) == 9) && !(numeral(k.value) == 6)) {
        fundTrans2.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    document.getElementById("transButtonFtValidate").style.display = "none";
    document.getElementById("wait_tip").style.display = "";

    return true;
}

function currencyConvert(fundTrans2) {
    var a = fundTrans2.amountTransfer.value;
    var ch = a.toString();
    ch = ch.replace(/\./g, '');
    //alert(ch);
    a = ch;
    fundTrans2.amountTransfer.value = ch;
    a = numeral(fundTrans2.amountTransfer.value).format('0.0');

    x = a.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    z = x1 + x2;
    k = z.split('.');
    l = k[0];
    for (i = 1; i < k.length - 1; i++) {
        l += '.' + k[i];
    }
    fundTrans2.amountTransfer.value = l;
}

function currencyConvertBill(fundTrans2) {
    var a = fundTrans2.ttlckAmount.value;
    var ch = a.toString();
    ch = ch.replace(/\./g, '');
    //alert(ch);
    a = ch;
    fundTrans2.ttlckAmount.value = ch;
    a = numeral(fundTrans2.ttlckAmount.value).format('0.0');

    x = a.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    z = x1 + x2;
    k = z.split('.');
    l = k[0];
    for (i = 1; i < k.length - 1; i++) {
        l += '.' + k[i];
    }
    fundTrans2.ttlckAmount.value = l;
}


function currencyConvertES(savingAmount) {
    var a = savingAmount.value;
    var ch = a.toString();
    ch = ch.replace(/\./g, '');
    //alert(ch);
    a = ch;
    savingAmount.value = ch;
    a = numeral(savingAmount.value).format('0.0');

    x = a.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    z = x1 + x2;
    k = z.split('.');
    l = k[0];
    for (i = 1; i < k.length - 1; i++) {
        l += '.' + k[i];
    }
    savingAmount.value = l;
}
//function currencyConvertReverse(fundTrans2)
//{
//		l = fundTrans2.amountTransfer.value;
//		k = l.split('.');
//		var z = k[0];
//		for(i = 1;i<k.length;i++)
//		{
//			z+= k[i];
//		}
//		fundTrans2.amountTransfer.value = z;
//		console.log(fundTrans2.amountTransfer.value);
//		var k = validate(fundTrans2);
//		console.log(k);
//		return k;
//    }
function numToText(SoTien) {
    var lan = 0;
    var i = 0;
    var so = 0;
    var KetQua = "";
    var tmp = "";
    var ViTri = new Array();
    if (SoTien < 0) return "Số tiền âm !";
    if (SoTien == 0) return "Không đồng !";
    if (SoTien > 0) {
        so = SoTien;
    } else {
        so = -SoTien;
    }
    if (SoTien > 8999999999999999) {
        //SoTien = 0;
        return "Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (isNaN(ViTri[5]))
        ViTri[5] = "0";
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (isNaN(ViTri[4]))
        ViTri[4] = "0";
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (isNaN(ViTri[3]))
        ViTri[3] = "0";
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
    if (isNaN(ViTri[2]))
        ViTri[2] = "0";
    ViTri[1] = parseInt((so % 1000000) / 1000);
    if (isNaN(ViTri[1]))
        ViTri[1] = "0";
    ViTri[0] = parseInt(so % 1000);
    if (isNaN(ViTri[0]))
        ViTri[0] = "0";
    if (ViTri[5] > 0) {
        lan = 5;
    } else if (ViTri[4] > 0) {
        lan = 4;
    } else if (ViTri[3] > 0) {
        lan = 3;
    } else if (ViTri[2] > 0) {
        lan = 2;
    } else if (ViTri[1] > 0) {
        lan = 1;
    } else {
        lan = 0;
    }
    for (i = lan; i >= 0; i--) {
        if (i != lan) {
            tmp = DocSo3ChuSo(ViTri[i], 'a');
            KetQua += tmp;
        } else {
            tmp = DocSo3ChuSo(ViTri[i], 'b');
            KetQua += tmp;
        }
        if (ViTri[i] > 0) KetQua += Tien[i];
        if ((i > 0) && (tmp.length > 0)) KetQua += ','; //&& (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) == ',') {
        KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2) + " đồng";
    return KetQua; //.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
}

function DocSo3ChuSo(baso, dv) {
    var tram;
    var chuc;
    var donvi;
    var KetQua = "";
    tram = parseInt(baso / 100);
    chuc = parseInt((baso % 100) / 10);
    donvi = baso % 10;
    if (tram == 0 && chuc == 0 && donvi == 0) return "";
    if (tram == 0 && donvi == 0 && dv == 'a') {
        KetQua += " không trăm";
    }
    if (tram == 0 && chuc == 0 && dv == 'a') {
        KetQua += " không trăm linh";
    }
    if (tram != 0) {
        KetQua += ChuSo[tram] + " trăm";
        if ((chuc == 0) && (donvi != 0)) KetQua += " linh";
    }
    if ((chuc != 0) && (chuc != 1)) {
        KetQua += ChuSo[chuc] + " mươi";
        if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh";
    }
    if (chuc == 1) KetQua += " mười";
    switch (donvi) {
        case 1:
            if ((chuc != 0) && (chuc != 1)) {
                KetQua += " mốt";
            } else {
                KetQua += ChuSo[donvi];
            }
            break;
        case 5:
            if (chuc == 0) {
                KetQua += ChuSo[donvi];
            } else {
                KetQua += " lăm";
            }
            break;
        default:
            if (donvi != 0) {
                KetQua += ChuSo[donvi];
            }
            break;
    }
    return KetQua;
}

function change_alias(chuoi) {
    var ch = chuoi.toString();
    //alert(ch.length);
    for (i = 0; i < ch.length; i++) {
        if (!change(ch[i])) {
            //alert(ch[i]);
            return false;
        }
    }
    return true;
    //alert(ou);
    //contentTrans.value = ou;

}

function change(charac) {

    var str = charac;
    //alert(str);
    //str= str.toLowerCase();
    if (!str.match(/^[a-zA-Z0-9]| |\.|,/g)) {
        //alert(str);
        return false;
    }
    return true;

}

function validates(fundTrans2) {
    //alert('Đây rồi');
    l = fundTrans2.amountTransfer.value;
    k = l.split('.');
    var z = k[0];
    for (i = 1; i < k.length; i++) {
        z += k[i];
    }
    fundTrans2.amountTransfer.value = z;
    var c = fundTrans2.amountTransfer.value;
    var acc_fund = fundTrans2.sourceAccount.value;
    var otp = fundTrans2.typeOTP.value;
    //alert(parseInt(c));
    //alert(c + ' ' + c[0]);
    if (fundTrans2.sourceAccount.value == fundTrans2.destinationAccount.value) {
        fundTrans2.aLert.value = 'Tài khoản nguồn và đích không được trùng nhau, quý khách vui lòng nhập lại';
        return false;
    }
    if (fundTrans2.destinationAccount.value == "" || typeof(fundTrans2.destinationAccount.value) == 'undefined') {
        fundTrans2.aLert.value = 'Tài khoản đích không được để trống, quý khách vui lòng nhập lại!';
        return false;
    }
    if (c.length <= 0 || numeral(c).value <= 0 || c == "" || !isNaN(c.value) || c[0] == "-" || c == "0") {
        fundTrans2.aLert.value = 'Số tiền không được để trống, phải nhập số và lớn hơn 0, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (parseInt(c) > 100000000 && (otp == '1 - SMS OTP' || otp == '2 - Basic Token OTP' || otp == '3 - Lava Token OTP')) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch của quý khách là 100.000.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (parseInt(c) > 600000000 && (otp == '4 - Basic eSigner OTP' || otp == '6 - Basic Soft OTP' || otp == '8 - CR Token OTP')) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch của quý khách là 600.000.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (parseInt(c) > 1000000000 && (otp == '7 - Advance Soft OTP' || otp == '5 - Sign eSigner OTP')) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch của quý khách là 1.000.000.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }

    if (parseInt(c) < 10000) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch tối thiểu của quý khách là 10.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }

    if (fundTrans2.contentTrans.value == "" || typeof(fundTrans2.contentTrans.value) == 'undefined') {
        fundTrans2.aLert.value = 'Nội dung chuyển khoản không được để trống, quý khách vui lòng nhập lại!';
        return false;
    }
    //alert(fundTrans2.contentTrans.value);
    if (change_alias(fundTrans2.contentTrans.value) == false) {
        //alert(change_alias(fundTrans2.contentTrans.value));
        //alert(fundTrans2.contentTrans.value);
        fundTrans2.aLert.value = 'Quý khách vui lòng không nhập Tiếng Việt có dấu và ký tự đặc biệt!';
        return false;
    }

    return true;
}

function validateNapas(fundTrans2) {
    //alert('vao 1');

    l = fundTrans2.amountTransfer.value;
    k = l.split('.');
    var z = k[0];
    for (i = 1; i < k.length; i++) {
        z += k[i];
    }
    fundTrans2.amountTransfer.value = z;
    var c = fundTrans2.amountTransfer.value;
    var acc_fund = fundTrans2.sourceAccount.value;
    var otp = fundTrans2.typeOTP.value;
    var d = fundTrans2.desAccount.value;
    //alert(parseInt(c));
    //alert(c + ' ' + c[0]);

    //Apply thử nghiệm cho Tây Đô
    /*	if( acc_fund.substr(0,4)!='1462')
    	{
    		fundTrans2.aLert.value = 'Tài khoản nguồn được phép chuyển khoản phải được mở ở chi nhánh Tây Đô(1462...) , quý khách vui lòng chọn lại';
            return false;
    	}*/


    if (!d.match(/^\w+$/)) {
        fundTrans2.aLert.value = 'Tài khoản thụ hưởng chỉ bao gồm chữ và số, quý khách vui lòng nhập lại!';
        return false;
    }
    if (fundTrans2.desAccount.value == "") {
        fundTrans2.aLert.value = 'Quý khách vui lòng nhập tài khoản đích!';
        return false;
    }
    if (fundTrans2.sourceAccount.value == fundTrans2.desAccount.value) {
        fundTrans2.aLert.value = 'Tài khoản nguồn và đích không được trùng nhau, quý khách vui lòng nhập lại';
        return false;
    }
    if (fundTrans2.desAccount.value == "" || typeof(fundTrans2.desAccount.value) == 'undefined') {
        fundTrans2.aLert.value = 'Tài khoản đích không được để trống, quý khách vui lòng nhập lại!';
        return false;
    }
    if (c.length <= 0 || numeral(c).value <= 0 || c == "" || !isNaN(c.value) || c[0] == "-" || c == "0") {
        fundTrans2.aLert.value = 'Số tiền không được để trống, phải nhập số và lớn hơn 0, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (parseInt(c) > 100000000 && (otp == '1 - SMS OTP' || otp == '2 - Basic Token OTP' || otp == '3 - Lava Token OTP')) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch của quý khách là 100.000.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (parseInt(c) > 300000000 && (otp == '4 - Basic eSigner OTP' || otp == '5 - Sign eSigner OTP' || otp == '6 - Basic Soft OTP' || otp == '7 - Advance Soft OTP' || otp == '8 - CR Token OTP')) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch của quý khách là 300.000.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (parseInt(c) < 20000) {
        fundTrans2.aLert.value = 'Hạn mức giao dịch tối thiểu của quý khách là 20.000VNĐ/Lần, quý khách vui lòng nhập lại!';
        fundTrans2.amountTransfer.value = '';
        return false;
    }
    if (fundTrans2.contentTrans.value == "" || typeof(fundTrans2.contentTrans.value) == 'undefined' || fundTrans2.contentTrans.value.length > 210) {
        fundTrans2.aLert.value = 'Nội dung chuyển khoản không được để trống hoặc quá 210 kí tự, quý khách vui lòng nhập lại!';
        return false;
    }
    if (change_alias(fundTrans2.contentTrans.value) == false) {
        //alert(change_alias(fundTrans2.contentTrans.value));
        //alert(fundTrans2.contentTrans.value);
        fundTrans2.aLert.value = 'Quý khách vui lòng không nhập Tiếng Việt có dấu và ký tự đặc biệt!';
        return false;
    }

    return true;
}

function validateES(savingOpen) {

    l = savingOpen.savingAmount.value;

    k = l.split('.');
    var z = k[0];
    for (i = 1; i < k.length; i++) {
        z += k[i];
    }
    savingOpen.savingAmount.value = z;
    return true;
}

function validateBillPurse(fundTrans2) {
    alert(l);
    aLert(k);
    l = fundTrans2.serviceType.value;
    k = fundTrans2.totalAmount.value;
    alert(l);
    aLert(k);
    if (numeral(k.value) == 6) {
        if (parseInt(k) > 25000000 || parseInt(k) < 500000) {
            fundTrans2.aLert.value = 'Hạn mức nạp ví điện tử là 50.000 đến 25.000.000 VNĐ!';
            return false;
        }

    }

    return true;
}

function validOTP(fundTrans2) {
    l = fundTrans2.otp.value;
    k = fundTrans2.otp.length;
    //alert(k);
    if (isNaN(l)) {
        fundTrans2.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    //alert(numeral(k.value));
    if (!(numeral(k.value) == 9) && !(numeral(k.value) == 6)) {
        fundTrans2.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    return true;
}



function validateOTPES(serviceRegister) {
    l = serviceRegister.otpCode.value;
    k = serviceRegister.otpCode.length;
    //alert(k);
    if (isNaN(l)) {
        serviceRegister.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    //alert(numeral(k.value));
    if (!(numeral(k.value) == 9) && !(numeral(k.value) == 6)) {
        serviceRegister.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    return true;
}

function validateOTPESSO(savingOpen) {
    //alert(savingOpen.otpCode.value);
    if (savingOpen.otpCode.value == "") {
        savingOpen.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    l = savingOpen.otpCode.value;
    k = savingOpen.otpCode.length;

    if (isNaN(l)) {
        savingOpen.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    //alert(numeral(k.value));
    if (!(numeral(k.value) == 9) && !(numeral(k.value) == 6)) {
        savingOpen.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    return true;
}

function validateOTPESC(savingClose) {

    l = savingClose.otpCode.value;
    k = savingClose.otpCode.length;
    if (isNaN(l)) {
        savingClose.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    //alert(numeral(k.value));
    if (!(numeral(k.value) == 9) && !(numeral(k.value) == 6)) {
        savingClose.aLert.value = 'Quý khách vui lòng xem lại mã xác thực!';
        return false;
    }
    return true;
}



function validOTPTP(userProfile) {
    if (userProfile.otp.value == "") {
        userProfile.aLert.value = 'Xem lại mã xác thực!';
        return false;
    }
    //alert(userProfile.otp.value);
    l = userProfile.otp.value;
    k = userProfile.otp.length;
    //if(isNaN(l))
    //{
    //	userProfile.aLert.value = 'Xem lại mã xác thực!';
    //	return false;
    //}
    //alert(numeral(k.value));
    if (!(numeral(k.value) == 9) && !(numeral(k.value) == 6)) {
        userProfile.aLert.value = 'Xem lại mã xác thực!';
        return false;
    }
    return true;
}

function validateDTF(transForm) {

    if (transForm.fromDate.value == "" || typeof(transForm.fromDate.value) == 'undefined') {
        transForm.aLert.value = 'Quý khách vui lòng nhập vào ô Từ Ngày!';
        return false;
    }
    if (transForm.toDate.value == "" || typeof(transForm.toDate.value) == 'undefined') {
        transForm.aLert.value = 'Quý khách vui lòng nhập vào ô Đến Ngày!';
        return false;
    }

    return true;
}

function setFundTransP(transForm) {
    //alert(document.getElementById('fundTransNP').value);
    document.getElementById('fundTransNP').value = 'P';
}

function setFundTransN(transForm) {
    //alert(document.getElementById('fundTransNP').value);
    document.getElementById('fundTransNP').value = 'N';
}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = '<img src="img/logo_agribank.png"><br/>' + printContents;
    //alert(document.body.innerHTML);
    window.print();
    document.body.innerHTML = originalContents;
}

function billSoDu(fundTrans2) {
    //alert(document.getElementById('sourceAccount').value);
    var e = document.getElementById('sourceAccount').selectedIndex;
    //document.getElementById('soDuBill').value = e;
    //alert(document.getElementById('soDuBill').value);
}

function get_browser_version() {
    var N = navigator.appName,
        ua = navigator.userAgent,
        tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
    return M[1];
}

function ckboxChange(v, l) {
    var count = parseInt(v);
    var res = String(document.getElementById('billSelected' + l).value);
    var sp = res.split(" ");

    var re = sp[2].substring(0, sp[2].length - 3) + '.' + sp[2].substring(sp[2].length - 3, sp[2].length);
    document.getElementById('ttlckAmount').value = re + " (VND)";
    var checkbox1 = document.getElementById('billSelected' + l);
    alert('checkbox' + l);
    if (checkbox1.checked) {
        for (i = 0; i < count - 1; i++) {
            alert(i != parseInt(l));
            if (i != parseInt(l)) {
                //alert('billSelected'+i);
                var checkbox = document.getElementById('billSelected' + i);
                checkbox.checked = false;
            }
        }
    } else {
        document.getElementById('ttlckAmount').value = "0" + " (VND)";
        for (i = 0; i < count - 1; i++) {
            if (i != parseInt(l)) {
                var checkbox = document.getElementById('billSelected' + i);
                checkbox.disabled = false;
            }
        }
    }
}


function ckboxChangePayOne(v, z) {
    var count = parseInt(v);
    var tta = 0;
    for (i = 0; i < count - 1; i++) {
        var res = String(document.getElementById('billSelected' + i).value);
        var sp = res.split(" ");
        var checkbox1 = document.getElementById('billSelected' + i);
        //alert(i);
        if (checkbox1.checked) {
            tta = tta + parseInt(sp[2]);
        }
    }
    //document.getElementById('ttlckAmount').value = tta + " (VND)";


    var a = tta;
    var ch = a.toString();
    ch = ch.replace(/\./g, '');
    //alert(ch);
    a = ch;
    fundTrans2.ttlckAmount.value = ch;
    a = numeral(fundTrans2.ttlckAmount.value).format('0.0');

    x = a.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    z = x1 + x2;
    k = z.split('.');
    l = k[0];
    for (i = 1; i < k.length - 1; i++) {
        l += '.' + k[i];
    }
    fundTrans2.ttlckAmount.value = l + " (VND)";
}



function checktransfund() {
    var radio_check_chonctu = "";
    var check_trangthai = "";
    for (i = 0; i < document.getElementsByName('chongdich').length; i++) {
        if (document.getElementsByName('chongdich')[i].checked) {
            //  alert("this radio button was clicked: " + document.getElementsByName('chonguilai')[i].value);
            radio_check_chonctu = document.getElementsByName('chongdich')[i].value;

            //alert("chondongctu - " + radio_check_chonctu);

            if (radio_check_chonctu != 0 && radio_check_chonctu != null) {
                document.getElementById('chondonggdich').value = radio_check_chonctu;

                if (document.getElementById('trangthai' + radio_check_chonctu).value == "5" && document.getElementById('createby' + radio_check_chonctu).value == document.getElementById('nguoidangnhap').value) {
                    //CTUGetList.btneditctu.disabled = false;
                    var cn = document.getElementById("row_dynamic");
                    cn.innerHTML = '<input  style=\"height:30px;width:200px\" name=\"btneditctu\" id=\"btneditctu\"  type=\"submit\"  value=\"Sửa chứng từ\" >';
                } else {
                    if (document.getElementById("btneditctu")) {
                        document.getElementById("btneditctu").remove();
                    }

                }



            } else {
                document.getElementById('chondonggdich').value = 0;
            }


        }

    } //end for


}


function IPclient() {
    var yip2 = java.net.InetAddress.getLocalHost();
    var yip = yip2.getHostAddress();
    alert("your machine's local network IP is " + yip);
}
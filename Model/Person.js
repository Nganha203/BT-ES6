const ERROR_MESSAGE_PERSON = {
    id_empty: 'ID không được bỏ trống',
    id_number: 'ID phải là số',
    id_duplicate: 'ID đã tồn tại trên hệ thống',
    hoten_empty: 'Họ tên không được bỏ trống',
    diaChi_empty: 'Địa chỉ không được bỏ trống',
    email: 'Email không hợp lệ'
}
let tbErrorId = 'tbErrorId'
let tbErrorHoTen = 'tbErrorHoTen'
let tbErrorDiaChi = 'tbErrorDiaChi'
let tbErrorEmail = 'tbErrorEmail'
class Person {
    id;
    hoTen;
    diaChi;
    email;
    constructor(id, hoTen, diaChi, email) {
        this.id = id
        this.hoTen = hoTen
        this.diaChi = diaChi
        this.email = email
    }
    
    checkId(list, showElert = false) {
        this.id = String(this.id).replace(/\s/g, '')
        if (!this.id) { //
            this.showError(tbErrorId, ERROR_MESSAGE_PERSON.id_empty, showElert)
            return false;
        }
        let pattern1 = /^[0-9]+$/;
        if (!pattern1.test(this.id)) { // kiểm tra có phải là số hay không
            this.showError(tbErrorId, ERROR_MESSAGE_PERSON.id_number, showElert)
            return false
        }
        this.id = +this.id
        if (showElert === true) return true
        if (list.length > 0) {
            let ind = list.findIndex(n => n.id === this.id)
            if (ind > -1) {
                this.showError(tbErrorId, ERROR_MESSAGE_PERSON.id_duplicate, showElert)
                return false
            }
        }
        return true
    }
    checkHoTen(showElert = false) {
        this.hoTen = this.hoTen.trim().split(/\s+/g).join(' ')
        if (!this.hoTen) { //
            this.showError(tbErrorHoTen, ERROR_MESSAGE_PERSON.hoten_empty, showElert);
            return false
        }
        return true
    }
    checkDiaChi(showElert = false) {
        this.diaChi = this.diaChi.trim().split(/\s+/g).join(' ')
        if (!this.diaChi) {
            this.showError(tbErrorDiaChi, ERROR_MESSAGE_PERSON.diaChi_empty, showElert)
            return false
        }
        return true
    }
    checkEmail(showElert = false) {
        let pa = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!pa.test(this.email)) {
            this.showError(tbErrorEmail, ERROR_MESSAGE_PERSON.email, showElert)
            return false
        }
        return true
    }
    validationPerson(list, showElert = false) {
        let isValid = true;
        isValid &= this.checkId(list, showElert);
        isValid &= this.checkHoTen(showElert);
        isValid &= this.checkDiaChi(showElert);
        isValid &= this.checkEmail(showElert);
        return isValid
    }
   
    _showElert = true
    showError(tb, stringError, showElert = false) {
        if (showElert) {
            if (this._showElert) {
                alert(stringError)
                this._showElert = false
            }
            return;
        }
        let tb1 = document.getElementById(tb)
        tb1.innerHTML = stringError;
        tb1.classList.remove('invisible');
        tb1.classList.add('visible');
    }
}
export default Person;
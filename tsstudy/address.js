//[q]아래 함수의 반환 타입, 속성의 타입을 지정해보세요.  
function fetchContacts() {
    var contacts = [
        {
            name: 'Kim',
            address: 'Malibu',
            phones: {
                home: { num: 11122223333 },
                office: { num: 22233334444 },
            },
        },
        {
            name: 'Lee',
            address: 'New York',
            phones: {
                home: { num: 33344445555 },
            },
        },
        {
            name: 'Ryu',
            address: 'Daegu',
            phones: {
                home: { num: 22233536666 },
                studio: { num: 12345678900 },
            },
        },
    ];
    return contacts;
}
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        //[q]아래 속성의 타입을 지정해보세요. 
        this.contacts = [];
        this.contacts = fetchContacts();
    }
    // 연락처 정보를 출력하는 메서드
    AddressBook.prototype.printContacts = function () {
        console.log(this.contacts);
    };
    //[q]아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요
    // 입력받은 이름으로 연락처를 찾는 메서드
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.filter(function (contact) { return contact.name === name; });
    };
    // 주소로 연락처를 찾는 메서드
    AddressBook.prototype.findContactByAddress = function (address) {
        return this.contacts.filter(function (contact) { return contact.address === address; });
    };
    // 전화번호와 번호 유형으로 연락처를 찾는 메서드  
    // findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
    //   // 전달받은 phoneNumber와 phoneType에 해당하는 연락처를 필터링
    //   return this.contacts.filter(contact => contact.phones[phoneType]?.num === phoneNumber); // 해당 phoneType의 전화번호 객체를 가져옴
    // }
    // keyof PhoneNumberDictionary ->  'home' | 'office' | 'mobile'
    // keyof 키워드는 주어진 타입의 모든 public 속성 키의 문자열 또는 숫자 리터럴 유니온을 생성합니다.
    // 이는 객체의 모든 키에 접근할 수 있도록 해주며, 특히 객체를 인덱스 타입으로 다룰 때 유용
    AddressBook.prototype.findContactByPhone = function (phoneNumber, phoneType) {
        return this.contacts.filter(function (contact) { var _a; return ((_a = contact.phones[phoneType]) === null || _a === void 0 ? void 0 : _a.num) === phoneNumber; });
    };
    // 새 연락처를 전화번호부에 추가하는 메서드 
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    // 전화번호부 목록의 이름만 추출해서 화면에 표시하는 메서드(화면 조작 과련 코드 없음)
    AddressBook.prototype.displayListByName = function () {
        return this.contacts.map(function (contact) { return contact.name; });
    };
    // 전화번호부 목록의 주소를 화면에 표시하는 메서드(화면 조작 관련 코드 없음)
    AddressBook.prototype.displayListByAddress = function () {
        return this.contacts.map(function (contact) { return contact.address; });
    };
    return AddressBook;
}());
// 아래는 연락처 추가, 조회 예시 코드입니다. 참고하세요. 
// 주소록 인스턴스 생성
var myAddressBook = new AddressBook();
// 초기 연락처 출력
console.log("초기 연락처 목록:");
myAddressBook.printContacts();
// 새 연락처 추가
var newContact = {
    name: 'Choi',
    address: 'Seoul',
    phones: {
        mobile: { num: 1010101010 }
    }
};
myAddressBook.addContact(newContact);
// 새 연락처 추가 후 연락처 목록 출력
console.log("새 연락처 추가 후:");
myAddressBook.printContacts();
// 이름으로 연락처 조회
console.log("이름으로 'Lee' 조회:");
console.log(myAddressBook.findContactByName('Lee'));
// 주소로 연락처 조회
console.log("주소로 'New York' 조회:");
console.log(myAddressBook.findContactByAddress('New York'));
// 전화번호와 번호 유형으로 연락처 조회
console.log("전화번호 1010101010 유형 'mobile'로 조회:");
console.log(myAddressBook.findContactByPhone(1010101010, 'mobile'));
// 이름만 추출해서 출력
console.log("전화번호부의 이름 목록:");
console.log(myAddressBook.displayListByName());
// 주소만 추출해서 출력
console.log("전화번호부의 주소 목록:");
console.log(myAddressBook.displayListByAddress());


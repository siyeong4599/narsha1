/* 
전화번호부 연락처 관련 타입 정의 예제
  1. 전화번호와 연락처를 관리하는 인터페이스를 정의한다. 
  2. fetchContacts(): 연락처 정보를 담고 있는 객체의 배열을 반환한다. 
  3. AddressBook 클래스: 전화번호부 조회, 검색, 추가 등을 수행한다.
  4. 출력관련 예시 코드

[q]로 시작되는 부분을 해결해주세요.
*/
interface PhoneNumberDictionary{
    //[q]인덱스 시그니처 문법으로 변경해보세요. ex. home, office 등 가능(문자열로 정의된 속성은 이름 관계없이 사용 가능)
        [key:string]: {num: number;};
    }
    
    //[q]name, address, phones 를 속성으로 가지는 인터페이스 Contact를 선언해보세요.
    interface Contact{
      name:string;
      address:string,
      phones: PhoneNumberDictionary;
    }
    
    //[q]아래 함수의 반환 타입, 속성의 타입을 지정해보세요.  
    function fetchContacts(): Contact[] {
      const contacts: Contact[] = [
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
    
    class AddressBook {
     //[q]아래 속성의 타입을 지정해보세요. 
        contacts: Contact[] = [];
    
        constructor() {
            this.contacts = fetchContacts();
        }
    
        // 연락처 정보를 출력하는 메서드
        printContacts():void {
            console.log(this.contacts);
        }
       
     //[q]아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요
      // 입력받은 이름으로 연락처를 찾는 메서드
      findContactByName(name:string):Contact[]{
        return this.contacts.filter(contact => contact.name === name);
      }
    
      // 주소로 연락처를 찾는 메서드
      findContactByAddress(address:string):Contact[]{
        return this.contacts.filter(contact => contact.address === address);
      }
    
    
      // 전화번호와 번호 유형으로 연락처를 찾는 메서드  
      // findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
      //   // 전달받은 phoneNumber와 phoneType에 해당하는 연락처를 필터링
      //   return this.contacts.filter(contact => contact.phones[phoneType]?.num === phoneNumber); // 해당 phoneType의 전화번호 객체를 가져옴
      // }
    
      // keyof PhoneNumberDictionary ->  'home' | 'office' | 'mobile'
      // keyof 키워드는 주어진 타입의 모든 public 속성 키의 문자열 또는 숫자 리터럴 유니온을 생성합니다.
      // 이는 객체의 모든 키에 접근할 수 있도록 해주며, 특히 객체를 인덱스 타입으로 다룰 때 유용
      findContactByPhone(phoneNumber: number, phoneType: keyof PhoneNumberDictionary): Contact[] {
        return this.contacts.filter(contact => contact.phones[phoneType]?.num === phoneNumber);
      }
    
      // 새 연락처를 전화번호부에 추가하는 메서드 
      addContact(contact:Contact):void{
        this.contacts.push(contact);
      }
    
      // 전화번호부 목록의 이름만 추출해서 화면에 표시하는 메서드(화면 조작 과련 코드 없음)
      displayListByName():string[]{
        return this.contacts.map(contact => contact.name);
      }
    
      // 전화번호부 목록의 주소를 화면에 표시하는 메서드(화면 조작 관련 코드 없음)
      displayListByAddress():string[]{
        return this.contacts.map(contact => contact.address);
      }
    }
    
    // 아래는 연락처 추가, 조회 예시 코드입니다. 참고하세요. 
    // 주소록 인스턴스 생성
    const myAddressBook = new AddressBook();
    
    // 초기 연락처 출력
    console.log("초기 연락처 목록:");
    myAddressBook.printContacts();
    
    // 새 연락처 추가
    const newContact: Contact = {
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
    
import styled from "@emotion/styled";

const TermsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TermsBody = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TermsTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const TermsSubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const TermsText = styled.div`
  font-size: 15px;
  padding-bottom: 20px;
  line-height: 35px;
`;

const TermsSubText = styled.div`
  padding-bottom: 15px;
  padding-left: 15px;
  font-size: 15px;
  line-height: 28px;
`;

const TermsTable = styled.table`
  border: 1px solid #444444;
  border-collapse: collapse;
`;

const TermsTh = styled.th`
  border: 1px solid #444444;
  padding: 10px;
  width: 25%;
  font-size: 15px;
`;
const TermsTd = styled.td`
  border: 1px solid #444444;
  padding: 20px;
  width: 25%;
  text-align: start;
  vertical-align: top;
  font-size: 15px;
`;

const PrivacyPolicyContainer = () => {
  return (
    <TermsWrapper>
      <TermsBody>
        <TermsTitle>개인정보처리방침 안내사항</TermsTitle>
        <TermsText>
          주식회사 이노핀(이하 "이노핀"라 함)는 『개인정보보호법』 제30조 및
          동법 시행령 제31조와 『정보통신망 이용촉진 및 정보보호 등에 관한
          법률』 제27조의2 및 동법 시행령 제14조에 따라 고객의 개인정보 및
          권익을 보호하고 이와 관련한 고충을 원활하게 처리 할 수 있도록 다음과
          같이 개인정보처리방침을 수립·공개합니다. 이노핀은 개인정보처리방침을
          통하여 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
          개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
          이노핀은 관계법령, 정부의 지침 및 이노핀의 정책 변경 등에 따라
          개인정보처리방침을 개정할 수 있고, 개정하는 경우 웹사이트
          공지사항(또는 개별공지)을 통하여 공지하도록 하겠습니다.
        </TermsText>
        <TermsSubTitle>1. 개인정보의 처리(수집·이용) 목적</TermsSubTitle>
        <TermsText>
          이노핀은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
          개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
          변경되는 경우에는 별도 안내 후 동의를 받는 등 필요한 조치를 이행할
          예정입니다. 
        </TermsText>
        <TermsSubText>
          가. 회원 가입 및 관리
          <br /> • 회원 가입의사 확인, 가입 시 본인확인  
          <br /> • 서비스 제공에 따른 본인 식별·인증 <br />• 회원자격 유지 및
          관리 <br />• 고지사항 전달, 법령상 의무이행 등 <br />• 서비스 부정이용
          방지, 비인가 사용방지, 사고 예방∙조사, 분쟁 해결 등  
          <br />
          <br />
          나. 데이터 또는 서비스 제공  
          <br />• 데이터 및 서비스 이용, 신청 및 제공   
          <br />• 데이터 및 서비스 관련 계약 체결, 유지, 이행, 관리, 개선  
          <br />• 대금 및 요금 결제   
          <br />• 플랫폼 이용 관련 통계 산출 <br />
          <br />
          다. 민원 처리  
          <br />
          • 민원인의 신원 및 민원사항 확인   
          <br />
          • 사실조사를 위한 연락·통지, 처리결과 통보   
          <br />
          • 고지사항 전달, 본인 의사 확인, 불만처리 등 원활한 의사소통 경로의
          확보
          <br />
          <br />
          라. 마케팅 및 광고  <br />
          • 데이터 및 서비스 안내 및 이용권유, 이벤트 등의 광고성 정보 안내 
          <br />
          • 시장조사, 고객만족도 조사, 상품∙서비스 연구 개발  <br />
          • 인구통계학적 특성에 따른 마케팅등  <br />
          • 접속 빈도 파악 또는 회원의 서비스이용에 대한 통계 등
        </TermsSubText>
        <TermsSubTitle>2. 처리하는 개인정보의 항목 및 수집방법</TermsSubTitle>
        <TermsText>
          이노핀은 서비스 제공을 위해 다음의 개인정보 항목을 처리하고 있습니다.
        </TermsText>
        <TermsSubText>
          가. 수집하는 개인정보의 항목   
          <br />
          • 개인식별정보
          <br />o 필수 : 아이디,비밀번호,이메일,이름,휴대전화   <br />o 선택 :
          이메일 수신 여부, SMS 수신 여부 <br />• 기타 계약 및 서비스의
          체결·유지·이행·관리∙개선 등과 관련하여 본인이 제공한 정보      <br />•
          온라인 서비스 이용 과정에서 자동 생성되어 수집 될 수 있는 정보 
          <br />o IP주소, 접속일자, 접속기록, 서비스 이용기록 등 접속기록정보 및
          서비스 이용 관련 정보 일체  <br />
          <br />
          나. 개인정보의 수집방법 <br />
          • 홈페이지, 서면양식, 팩스, 전화, 상담게시판, 이메일, 이벤트 응모 
          <br />
          • 제휴사로부터의 제공
          <br />
          • 생성정보 수집 툴을 통한 수집
        </TermsSubText>
        <TermsSubTitle>3. 개인정보의 처리 및 보유 기간</TermsSubTitle>
        <TermsText>
          이노핀은 고객의 개인정보 수집 시 동의 받은 보유·이용 기간 내에서
          개인정보를 처리 및 보유하며, 원칙적으로 개인정보의 처리 목적이
          달성되면 지체 없이 파기합니다.  다만, 고객에게 사전 동의 받았거나,
          관련 법령에 의거하여 보존할 필요성이 있는 경우에는 일정기간 동안
          보유합니다.
        </TermsText>
        <TermsSubText>
           <br />
          가. 계약 또는 청약철회 등에 관한 기록 <br />
          • 보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률 <br />
          • 보존기간 : 5년  <br />
          <br />
          나. 대금결제 및 재화 등의 공급에 관한 기록
          <br />
          • 보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률
          <br />
          • 보존기간 : 5년  <br />
          <br />
          다. 소비자의 불만 또는 분쟁처리에 관한 기록 <br />
          • 보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률 <br />
          • 보존기간 : 3년  <br />
          <br />
          라. 고객의 동의를 받은 경우     <br />
          • 보존기간 : 동의를 받은 기간까지
        </TermsSubText>
        <TermsSubTitle>4. 개인정보의 제3자 제공</TermsSubTitle>
        <TermsText>
           이노핀은 고객의 개인정보를 처리 목적에 명시한 범위 내에서만
          처리합니다. 다만, 고객의 동의, 법률의 특별한 규정 등 아래에 해당하는
          경우에는 개인정보를 제3자에게 제공합니다.
        </TermsText>
        <TermsSubText>
           가. 개인정보 제3자 제공 기준
          <br />• 고객으로부터 별도의 동의를 받은 경우    <br />
          • 법률 등에 특별한 규정이 있는 경우 <br />
          • 사람의 생명 및 신체에 긴급한 위험이 발생한 경우에 정보주체의 동의를
          받을 수 없는 정당한 사유가 있는 경우 <br />
          • 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을
          알아볼 수 없는 형태로 개인정보를 제공하는 경우  <br />
          <br />
          나. 개인정보 제3자 제공 현황  <br />
          해당사항 없음
        </TermsSubText>
        <TermsSubTitle>5. 개인정보의 파기에 관한 사항</TermsSubTitle>
        <TermsText>
          이노핀은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
          불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 다만,
          고객으로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이
          달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
          하는 아래와 같은 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로
          옮기거나 보관장소를 달리하여 보존합니다.
        </TermsText>
        <TermsSubText>
             <br />
          • 이노핀 등이 민·형사상의 책임 또는 시효가 지속되거나 분쟁의
          입증자료로서 개인정보를 보유하는 경우  <br />
          • 상법 제33조 등 법령에 따라 보존하여야 하는 경우 
          <br /> • 기타 이와 유사한 정당한 사유가 있는 경우
        </TermsSubText>
        <TermsText>
          이노핀은 전자적 파일 형태로 기록∙저장된 개인정보는 기록을 재생할 수
          없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로
          분쇄하거나 소각하여 파기합니다.
        </TermsText>
        <TermsSubTitle>6. 개인정보 처리의 위탁</TermsSubTitle>
        <TermsText>
          이노핀은 원활한 개인정보의 업무처리를 위하여 고객이 동의한 목적 또는
          계약의 체결·유지·이행·관리 등의 목적으로 다음과 같이 개인정보
          처리업무를 위탁하고 있습니다.
        </TermsText>
        <TermsText>
          이노핀은 원활한 개인정보의 업무처리를 위하여 고객이 동의한 목적 또는
          계약의 체결·유지·이행·관리 등의 목적으로 다음과 같이 개인정보
          처리업무를 위탁하고 있습니다.
        </TermsText>
        가. 개인정보 위탁 현황
        <TermsTable>
          <thead>
            <tr>
              <TermsTh>위탁업체명</TermsTh>
              <TermsTh>제공 목적</TermsTh>
              <TermsTh>이용 및 보유기간</TermsTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TermsTd>인피니소프트(이노페이)</TermsTd>
              <TermsTd>
                 상품 구매에 필요한 신용카드,간편결제,무통장 입금(가상계좌)을
                통한 결제 처리, 본인인증
              </TermsTd>
              <TermsTd>위탁계약 종료일 까지</TermsTd>
            </tr>
            <tr>
              <TermsTd>AWS</TermsTd>
              <TermsTd>클라우드 컴퓨팅(DB 저장 및 서버관리)</TermsTd>
              <TermsTd>위탁계약 종료일 까지</TermsTd>
            </tr>
          </tbody>
        </TermsTable>
        <br />
        <TermsText>
          이노핀은 위탁계약 체결 시 개인정보보호법에 따라 위탁업무 수행목적 외
          개인정보 처리금지, 기술적∙관리적 보호조치, 재위탁 제한, 수탁자에 대한
          관리∙감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고,
          해당업체가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
          위탁업무의 내용이나 위탁업체가 변경될 경우에는 지체 없이 본
          개인정보처리방침을 통하여 공개하도록 하겠습니다.
        </TermsText>
        <TermsSubTitle>7. 개인정보의 안전성확보 조치에 관한 사항</TermsSubTitle>
        <TermsText>
          이노핀은 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출,
          변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 보호 대책을
          강구하고 있습니다.
        </TermsText>
        <TermsSubText>
          이노핀은 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출,
          변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 보호 대책을
          강구하고 있습니다.
          <br /> <br />
                가. 내부 관리계획의 수립·시행         <br /> • 이노핀은
          개인정보의 안전한 처리를 위하여 아래사항을 포함하는 내부관리계획을
          수립·시행하고 있으며, 중요한 변경이 있는 경우에는 즉시 반영 및
          수정하고 있습니다.            <br /> o 개인정보 보호책임자의 지정에
          관한 사항           <br /> o 개인정보 보호책임자 및 개인정보취급자의
          역할 및 책임에 관한 사항           <br /> o 개인정보의 안전성 확보에
          필요한 조치에 관한 사항           <br /> o 개인정보취급자에 대한
          교육에 관한 사항           <br /> o 그 밖에 개인정보 보호를 위하여
          필요한 사항
          <br /> <br />
                나. 접근 통제 및 접근 권한의 관리         <br /> • 이노핀은
          개인정보처리시스템에 대한 접근권한을 업무 수행에 필요한 최소한의
          범위로 하여 업무 담당자에 따라 한 개의 사용자 계정을 차등 부여하고
          있으며, 개인정보취급자가 변경되었을 경우 지체 없이
          개인정보처리시스템의 접근권한을 변경 또는 말소하고 그 기록을 최소
          3년간 보관하고 있습니다.         <br /> • 이노핀은 개인정보취급자가
          정보통신망을 통해 외부에서 개인정보처리시스템에 접속하려는 경우에는
          VPN(Virtual Private Network) 또는 전용선 등 안전한 접속수단을 적용하고
          있으며, 개인정보가 열람권한이 없는 자에게 공개되거나 외부에 유출되지
          않도록 개인정보처리시스템 및 업무용 컴퓨터에 조치를 취하고 있습니다.  
                <br /> • 이노핀은 개인정보취급자가 안전한 비밀번호를 설정하여
          이행할 수 있도록 비밀번호 작성규칙을 수립하여 적용하고 있습니다.
          <br /> <br />
                다. 개인정보의 암호화         <br /> • 이노핀은 개인정보를
          정보통신망을 통하여 송·수신하거나 보조저장매체 등을 통하여 전달하는
          경우에는 이를 반드시 암호화하여 처리하고 있습니다.         <br />
          • 이노핀은 비밀번호 및 바이오정보는 안전한 알고리즘으로 일방향
          암호화하고 있으며, 주민등록번호에 대해 개인정보보호법에 의거하여
          암호화하여 저장하고 있습니다.         <br /> • 이노핀은 업무용
          컴퓨터에 개인정보를 보관하고 있지 않으며 업무상 부득이한 사유로 저장
          및 관리하는 경우, 상용 암호화 소프트웨어를 사용하여 안전하게
          암호화하고 있습니다.
          <br /> <br />
                라. 접속기록의 보관 및 위·변조 방지         <br /> • 이노핀은
          개인정보취급자가 개인정보처리시스템에 접속한 기록을 최소 2년 이상 보관
          관리하며, 개인정보취급자의 접속기록이 위 변조 및 도난, 분실되지 않도록
          해당 접속기록을 안전하게 보관하고 있습니다.
          <br /> <br />
                마. 보안프로그램의 설치 및 운영        <br /> • 이노핀은
          개인정보처리시스템 또는 업무용 컴퓨터에 악성 프로그램 등을 방지 치료할
          수 있는 백신 소프트웨어 등의 보안 프로그램을 설치 운영하고 있으며, 일
          1회 이상 업데이트 및 PC 검사를 실시하고 있습니다.        <br />
          • 이노핀은 악성 프로그램관련 경보가 발령된 경우 또는 사용 중인 응용
          프로그램이나 운영체제 소프트웨어의 제작업체에서 보안 업데이트 공지가
          있는 경우, 즉시 이에 따른 업데이트를 실시하고 있습니다.
          <br /> <br />
                바. 개인정보의 물리적 조치         <br /> • 이노핀은 전산실,
          자료보관실 등 개인정보를 보관하고 있는 물리적 보관 장소에 대한
          출입통제 절차를 수립·운영하고 있으며, 개인정보가 포함된 서류,
          보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
        </TermsSubText>
        <TermsSubTitle>
          8. 인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치의
          설치·운영 및 그 거부에 관한 사항
        </TermsSubTitle>
        <TermsText>
          이노핀은 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등
          개인정보를 자동으로 수집하는 장치를 설치/운용합니다. 쿠키란 회사의
          웹사이트를 운영하는데 이용되는 서버가 귀하의 웹 브라우저에 보내는 아주
          작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.
          <br /> 회사는 다음과 같은 목적을 위해 쿠키 등을 사용합니다.
        </TermsText>
        <TermsSubText>
            가. 인터넷 서비스 이용과정에서 자동 수집되는 개인정보 항목         
          <br /> • IP 주소, 접속 URL, 웹접속 정보, 접속일자, 방문시간, 서비스
          이용 기록 등
          <br /> <br />
                나. 쿠키 등 사용목적          <br /> • 이용자의 관심 분야에 따라
          차별화된 정보를 제공          <br /> • 이용자의 취향과 관심분야를
          파악하여 타겟(target) 마케팅에 활용          <br /> • 회사가 제공하는
          데이터 및 서비스 구매시 인증          <br /> • 검색∙조회∙이용한 데이터
          및 서비스에 대한 자취를 추적하여 개인 맞춤 서비스를 제공         
          <br /> • 서비스 이용 시 이용기간 안내          <br /> • 이용자의
          이용패턴을 분석하여 서비스 개선 등의 척도          <br /> • 게시판 글
          등록          <br /> • 이벤트 및 설문조사 시 참여내역 확인 등
          <br /> <br />
          고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 고객은 웹
          브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될
          때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
          있습니다.
          <br /> <br />
                다. 쿠키 설정 거부 방법           <br /> • (인터넷 익스플로러의
          경우) 웹 브라우저 상단의 도구 - 인터넷 옵션 - 개인정보 탭에서 설정
                   단, 귀하께서 쿠키 설치를 거부하였을 경우 로그인이 필요한
          서비스는 이용할 수 없습니다.
        </TermsSubText>
        <TermsSubTitle>9. 정보주체의 권리·의무 및 그 행사방법</TermsSubTitle>
        <TermsText>
          고객 및 법정대리인(만14세 미만 아동의 경우)은 이노핀에 대해 언제든지
          아래에 대한 개인정보 보호 관련 권리를 행사할 수 있습니다.
        </TermsText>
        <TermsSubText>
              가. 개인정보 열람 요구         
          <br />• 이용자는 이노핀에서 보유하고 있는 개인정보에 대하여 열람을
          요구할 수 있습니다.         
          <br />• 단, 법률에 따라 열람이 금지되거나 제한되는 경우, 다른 사람의
          생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을
          부당하게 침해할 우려가 있는 경우에 해당하는 경우에는 제한될 수
          있습니다.
          <br />
          <br />
              나. 오류 등이 있을 경우 정정 요구         
          <br />• 이용자는 이노핀에서 보유하고 있는 개인정보에 대하여 개인정보의
          정정을 요구할 수 있습니다.
          <br />
          <br />
              다. 삭제 요구       <br />
          • 이용자는 이노핀에서 보유하고 있는 개인정보에 대하여 개인정보의
          삭제를 요구할 수 있습니다.       
          <br /> • 다만, 다른 법령에서 그 개인정보의 수집대상으로 명시되어 있는
          경우에는 그 삭제를 요구할 수 없습니다.
          <br />
          <br />
              라. 처리정지 요구         <br />
          • 이용자는 이노핀에서 보유하고 있는 개인정보에 대하여 개인정보의
          처리정지를 요구할 수 있습니다.         <br />• 다만, 다음의 어느
          하나에 해당하는 경우에는 고객의 처리정지 요구를 거절할 수 있으며, 이
          경우 그 사유를 고객에게 알려 주어야 합니다.           <br /> o 법률에
          특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우      
             <br /> o 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의
          재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우          <br />
          o 개인정보를 처리하지 아니하면 고객과 약정한 서비스를 제공하지 못하는
          등 계약의 이행이 곤란한 경우로서 고객이 그 계약의 해지 의사를 명확하게
          밝히지 아니한 경우
          <br />
          <br />
              마. 이용자는 Mypage 화면에서 개인정보를 정정하거나 삭제할 수
          있으며, 위 항에 따른 개인정보 보호 관련 권리행사는 서면, 전화,
          전자우편 등을 통하여 하실 수 있으며 ‘자본시장 빅데이터 플랫폼’에서는
          이에 대해 지체없이 조처하겠습니다.
          <br />
          <br />    바. 이용자는 정보주체의 법정대리인이나 위임을 받은 자 등
          대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙
          별지 제11호 서식에 따른 위임장을 제출하여야 합니다.
        </TermsSubText>
        <TermsSubTitle>10. 개인정보 보호책임자에 관한 사항</TermsSubTitle>
        <TermsText>
          이노핀은 고객의 개인정보를 보호하고 개인정보와 관련한 불만 및 열람
          청구 등을 처리하기 위하여 아래와 같이 개인정보보호책임자(CPO)를 두고
          있습니다. 개인정보와 관련한 문의사항이 있으시면 아래의
          개인정보보호담당자에게 연락하여 주시기 바랍니다.     
        </TermsText>
        <TermsSubText>
              가. 개인정보보호책임자(CPO)          <br />• 성 명 : 최재식      
             <br />• 직 책 : 센터장          <br />• 소속부서 : R&D센터
          <br /> <br />
              나. 개인정보보호담당자          <br />
          • 성 명 : 채선영          <br />
          • 직 책 : 팀원          <br />
          • 소속부서 : 사업개발본부
          <br /> <br />
              다. 자본시장 빅데이터 플랫폼 책임자          <br />• 성 명 :
          최재식          <br />• 직 책 : 센터장          <br />• 소속부서 :
          R&D센터
        </TermsSubText>
        <TermsSubTitle>
          11. 개인정보의 열람청구를 접수·처리하는 부서
        </TermsSubTitle>
        <TermsText>
          고객은 정보주체로서 다음과 같은 권리를 행사할 수 있습니다.     
        </TermsText>
        <TermsSubText>
          가. 개인정보 열람 요구 : 이노핀에서 보유하고 있는 개인정보파일은
          「개인정보보호법」제 35조(개인정보의 열람)에 따라 열람을 요구할 수
          있습니다. 다만 개인정보 열람 요구는 「개인정보보호법」 제35조에 의하여
          다음과 같이 제한될 수 있습니다. 
          <br />• 법률에 따라 열람이 금지되거나 제한되는 경우      <br />• 다른
          사람의 생명ㆍ신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의
          이익을 부당하게 침해할 우려가 있는 경우
          <br />
          <br />
              나. 개인정보 정정ㆍ삭제요구 : 이노핀에서 보유하고 있는
          개인정보파일에 대해서는 「개인정보보호법」 제36조(개인정보의
          정정ㆍ삭제)에 따라 이노핀에 개인정보의 정정ㆍ삭제를 요구할 수
          있습니다. 다만, 다른 법령에서 그 개인정보가 수집 대상으로 명시되어
          있는 경우에는 그 삭제를 요구할 수 없습니다.
          <br />
          <br />
               다. 개인정보 처리정지 요구 : 이노핀에서 보유하고 있는
          개인정보파일에 대해서는 「개인정보보호법」 제37조(개인정보의 처리정지
          등)에 따라 이노핀에 개인정보의 처리정지를 요구할 수 있습니다. 또한 만
          14세 미만 아동의 법정대리인은 이노핀에 그 아동의 개인정보의 열람,
          정정ㆍ삭제, 처리정지 요구를 할 수 있습니다. 다만, 개인정보 처리정지
          요구시 「개인정보보호법」 제37조제2항에 의하여 처리정지 요구가 거절될
          수 있습니다.            <br />
           • 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한
          경우           <br />
           •. 다른 사람의 생명ㆍ신체를 해할 우려가 있거나 다른 사람의 재산과 그
          밖의 이익을 부당하게 침해할 우려가 있는 경우           <br />
           • 공공기관이 개인정보를 처리하지 아니하면 다른 법률에서 정하는 소관
          업무를 수행할 수 없는 경우           <br />
           • 개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지
          못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지
          의사를 명확하게 밝히지 아니한 경우
          <br />
          <br />
               라. 개인정보의 열람, 정정ㆍ삭제, 처리정지 요구에 대해서는 10일
          이내에 해당 사항에 대한 이노핀의 조치를 통지합니다. 개인정보의 열람,
          정정ㆍ삭제, 처리정지 요구는 해당 부서를 통해서 가능합니다.
          <br />
          <br />
               마. 위 사항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
          받은 자 등 대리인을 통하여 하실 수 있습니다.           <br />
           • 고객상담센터                 <br />
          이노핀은 고객과의 원활한 의사소통을 위해 고객상담센터를 운영하고
          있습니다.                 <br />• 전화번호 : 02-719-5500              
            <br />• 상담가능시간 : 평일 09:00 ~ 17:00
        </TermsSubText>
        <TermsSubTitle> 12. 정보주체의 권익침해 구제방법</TermsSubTitle>
        <TermsText>
          고객은 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을
          문의하실 수 있습니다.
        </TermsText>
        <TermsSubText>
              가. 개인정보 침해신고센터 (한국인터넷진흥원 운영)      <br />•
          소관업무 : 개인정보 침해사실 신고, 상담 신청      <br />• 전화 :
          (국번없이) 118 (ARS 내선 2번)      <br />• 홈페이지 주소
          : www.privacy.go.kr
          <br />
          <br />     나. 경찰청 사이버안전국      <br />• 소관업무 : 해킹,
          서비스거부공격(DDoS 등), 악성프로그램 등 정보통신망 침해 범죄      
          <br />• 전화 : (국번없이) 182      <br />• 홈페이지 주소 :
          cyberbureau.police.go.kr
        </TermsSubText>
        <TermsSubTitle>
            13. 개인정보 처리방침의 변경에 관한 사항
        </TermsSubTitle>
        <TermsText>
           이 개인정보처리방침은 2022. 03. 02일부터 적용됩니다.
        </TermsText>
      </TermsBody>
    </TermsWrapper>
  );
};

export default PrivacyPolicyContainer;

import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div>
      <h1>결제수단 </h1>
      <div className='cardshape'>
            이거 카드임~
      </div>
      <div className='test'>
      <div className='cardlineleft'>
        이름
      </div>
      <div className='cardlineright'>
       셀레스트 릴리안 단테 석진 3세
      </div>
      </div>
      <div className='hrline' />
      <div className='test'>
      <div className='cardlineleft'>
        이메일
      </div>
      <div className='cardlineright'>
       I'mWinner@gmail.com
      </div>
      </div>
      <div className='hrline' />
      <div className='test'>
      <div className='cardlineleft'>
        카드번호
      </div>
      <div className='cardlineright'>
      1234-1234-123456-123456
      </div>
      </div>
      <div className='hrline' />
      <div className='test'>
      <div className='cardlineleft'>
        유효기간
      </div>
      <div className='cardlineright'>
      끝나기 전까지겠지~
      </div>
      </div>
      <div className='hrline' />
      <div className='test'>
      <div className='cardlineleft'>
        비밀번호
      </div>
      <div className='cardlineright'>
      이거 비밀인데
      </div>
      </div>
      <div className='hrline' />
      <div className='test'>
      <div className='cardlineleft'>
        생년월일
      </div>
      <div className='cardlineright'>
      개인정보/이거/비밀
      </div>
      </div>
      <div className='hrline' />
  
      <div className='cardSelectComplete'>
          선택 완료
      </div>

    </div>
  );
};

export default Main;
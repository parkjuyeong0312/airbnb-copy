import styled from 'styled-components';
import { earth, menu, name_logo, profile, search } from '../../assets';

const SEARCHBAR_HEIGHT = '66px';

const HeadTop=styled.div`
    display: flex;
    padding: 0px 40px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    position: relative;

`
const HeadIcon=styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    flex-basis: 140px;
`

const HeadCenter=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 0px 24px;
    min-width: 348px;
`

const Button=styled.button`
    height: 44px;
    width: 64px;
    border: none;
    background-color: #ffffff;
    font-size: 16px;
`

const PaddingBox=styled.div`
    padding: 12px;
`

const Radiusbutton=styled.button`
    display: flex;
    padding: 8px 8px 8px 14px;
    align-items: center;
    justify-content: center;
    height: 48px;
    
    border-radius: 30px;
    border: 1px solid rgb(221,221,221);
    background-color: white;

    cursor: pointer;

`

const RadiusContainer=styled.div`
    display: flex;
    justify-content: space-around;
    height: ${SEARCHBAR_HEIGHT};
    width: 850px;

    border-radius:32px;
    border:1px solid rgb(221,221,221);
    box-shadow: 0px 0px 10px rgb(0,0,0,0.3);
`





function ViewTop(){
    return (
        <div style={{padding:'0px 0px 20px 0px', borderBottom:'1px solid rgb(221,221,221)'}}>
            <HeadTop>
                <HeadIcon>
                    <img src={ name_logo } alt='airbnb logo' />
                </HeadIcon>
                <div>
                    <HeadCenter>
                        <Button>숙소</Button>
                        <Button>체험</Button>
                    </HeadCenter>
                </div>
                <div className='flex' style={{justifyContent:'flex-end', alignItems:'center'}}>
                    <PaddingBox style={{fontSize:'14px'}}>
                        당신의 공간을 에어비엔비하세요.
                    </PaddingBox>
                    <PaddingBox>
                        <img src={ earth } alt='world'/>
                    </PaddingBox>
                    <Radiusbutton>
                        <img src={ menu } alt='menu'/>
                        <img src={ profile } alt='menu'/>
                    </Radiusbutton>
                </div>
            </HeadTop>
            <div className='flex' style={{justifyContent:'center'}}>
                <RadiusContainer>
                    <div className='flex' style={{flexGrow:'2',flexDirection:'column',justifyContent:'center',padding:'14px 32px',borderRight:'2px solid rgb(221,221,221)'}}>
                        <div>
                            여행지
                        </div>
                        <div>
                            여행지 검색
                        </div>
                    </div>
                    <div className='flex' style={{flexGrow:'1',flexDirection:'column',justifyContent:'center',padding:'14px 32px',borderRight:'2px solid rgb(221,221,221)'}}>
                        <div>
                            체크인
                        </div>
                        <div>
                            날짜 추가
                        </div>
                    </div>
                    <div className='flex' style={{flexGrow:'1',flexDirection:'column',justifyContent:'center',padding:'14px 32px',borderRight:'2px solid rgb(221,221,221)'}}>
                        <div>
                            체크아웃
                        </div>
                        <div>
                            날짜추가
                        </div>
                    </div>
                    <div className='flex' style={{flexGrow:'2',flexDirection:'column',justifyContent:'center',padding:'14px 32px'}}>
                        <div>
                            여행자
                        </div>
                        <div>
                            게스트추가
                        </div>
                    </div>
                    <div style={{padding:'8px'}}>
                        <div className='flex-center'style={{height:'48px', width:'48px',backgroundColor:'red', borderRadius:'100%'}}>
                            <img src= { search } alt='search'/>
                        </div>
                    </div>
                </RadiusContainer>
            </div>
            
        </div>
    )
}

export default ViewTop;
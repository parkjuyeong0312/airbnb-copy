import styled from "styled-components";

const Container = styled.div`
    padding : 48px 80px;
    background-color: rgb(247,247,247);
    border-bottom: 1px solid rgb(221,221,221);
`

const PaddingBox=styled.div`
    padding: 12px;
`

const GridBox = styled.div`
    display: grid;
    grid-template-columns : repeat(6,185px);
    grid-column-gap: 8px;
    grid-row-gap: 24px;
`








const travelArr=[
    {name : '캔모어' ,type: '콘도 숙소'},
    {name : '베닐마데나' ,type: '아파트 숙소'},
    {name : '피렌체' ,type: '아파트 숙소'},
    {name : '마하스' ,type: '독채 숙소'},
    {name : '캔모어' ,type: '콘도 숙소'},
    {name : '베닐마데나' ,type: '아파트 숙소'},
    {name : '피렌체' ,type: '아파트 숙소'},
    {name : '마하스' ,type: '독채 숙소'},
    {name : '캔모어' ,type: '콘도 숙소'},
    {name : '베닐마데나' ,type: '아파트 숙소'},
    {name : '피렌체' ,type: '아파트 숙소'},
    {name : '마하스' ,type: '독채 숙소'},
    {name : '캔모어' ,type: '콘도 숙소'},
    {name : '베닐마데나' ,type: '아파트 숙소'},
    {name : '피렌체' ,type: '아파트 숙소'},
    {name : '마하스' ,type: '독채 숙소'},
    {name : '캔모어' ,type: '콘도 숙소'},
    {name : '베닐마데나' ,type: '아파트 숙소'},
    {name : '피렌체' ,type: '아파트 숙소'},
    {name : '마하스' ,type: '독채 숙소'},
]


function RecommendFooter() {
  return (
    <Container className="recommend-footer">
        <div className="flex-center">
            <div>
                <div style={{fontSize:'26px',marginBottom:'8px'}}>다음 여행을 위한 추천 여행지</div>
                <div className="flex">
                    <PaddingBox>인기</PaddingBox>
                    <PaddingBox>예술 및 문화</PaddingBox>
                    <PaddingBox>야외</PaddingBox>
                    <PaddingBox>산맥</PaddingBox>
                    <PaddingBox>해변</PaddingBox>
                    <PaddingBox>카테고리</PaddingBox>
                    <PaddingBox>즐길 거리</PaddingBox>
                </div>
                <GridBox style={{paddingTop:'32px'}}>
                    {travelArr.map(({name,type},index)=>{
                        return (
                            <div key={index}>
                                <div>{name}</div>
                                <div>{type}</div>
                            </div>
                        )
                    })}
                </GridBox>
            </div>



        
        </div>
    </Container>
  );
}

export default RecommendFooter;
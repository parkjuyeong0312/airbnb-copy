import styled from "styled-components";

const Container = styled.div`

`

function TapMenu(
    {name, img}
){
    return(
        <div className="flex flex-center" style={{flexDirection:'column', marginTop:'12px'}}>
            <img src={img} style={{width:'24px', height:'24px',marginBottom:'8px'}}/>
            <div style={{textWrap:'nowrap'}}>{name}</div>
        </div>
    )
}


const tapInfo=[
    {name : '컬쳐 아이콘', img: 'main_logo.svg'},
    {name : '멋진 수영장', img: 'main_logo.svg'},
    {name : '한적한 시골', img: 'main_logo.svg'},
    {name : '해변 바로 앞', img: 'main_logo.svg'},
    {name : 'A자형 주택', img: 'main_logo.svg'},
    {name : '캐슬', img: 'main_logo.svg'},
    {name : '한옥', img: 'main_logo.svg'},
    {name : '최고의 전망', img: 'main_logo.svg'},
    {name : '기상천외한 숙소', img: 'main_logo.svg'},
    {name : '국립공원', img: 'main_logo.svg'},
    {name : '방', img: 'main_logo.svg'},
    {name : '컬쳐 아이콘', img: 'main_logo.svg'},
    {name : '멋진 수영장', img: 'main_logo.svg'},
    {name : '한적한 시골', img: 'main_logo.svg'},
    {name : '해변 바로 앞', img: 'main_logo.svg'},
    {name : '방', img: 'main_logo.svg'},
    {name : '컬쳐 아이콘', img: 'main_logo.svg'},
    {name : '멋진 수영장', img: 'main_logo.svg'},
    {name : '한적한 시골', img: 'main_logo.svg'},
    {name : '해변 바로 앞', img: 'main_logo.svg'},
    {name : '방', img: 'main_logo.svg'},
    {name : '컬쳐 아이콘', img: 'main_logo.svg'},
    {name : '멋진 수영장', img: 'main_logo.svg'},
    {name : '한적한 시골', img: 'main_logo.svg'},
    {name : '해변 바로 앞', img: 'main_logo.svg'},
]

const GridBox = styled.div`
    display: grid;
    grid-column-gap: 32px;
    padding: 0px 80px;
    justify-content: flex-start;
    grid-auto-flow: column;
`



function TapBar() {


  return (
    <div style={{overflowX:'scroll', scrollbarWidth:'none'}}>

        <GridBox>
            {tapInfo.map(({ name,img }, index )=>{
                return <TapMenu key={index} name={name} img={img}/>
            })}
        </GridBox>
    </div>
  );
}

export default TapBar;
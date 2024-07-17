import styled from "styled-components";
import { home } from "../../assets";


const homeList=[
    {img: home, title: '엑스 맨션에서 훈련하기', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '박주영 집에서 자기', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '프린스의 퍼플레인 하우스', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '거실에서 펼쳐지는 도자켓의 단독공연', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '둥둥 떠다니는 up하우스', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '인사이드 아웃 세계', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '오르세 미술관에서 맞이하는 아침', host: 'Jubilee 님', price: '₩52,782/인'},
    {img: home, title: '사수님의 집', host: '신재훈 님', price: '₩500,000,000,000/인'},
]


function HomeCard(
    {img, title, host, price}
){
    return(
        <div>
            <img src={img} style={{marginBottom:'12px', borderRadius:'5%', width:'276px', height:'262px'}}/>
            <div>{ title }</div>
            <div>{ host }</div>
            <div>{ price }</div>
        </div>
    )

}

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 270px);
    grid-row-gap: 40px;
    grid-column-gap: 24px;
`



const Container = styled.div`
    padding: 0px 80px;
    margin-top: 16px;
    margin-bottom: 48px;
`



function HomeList() {
  return (
    <Container>
        <GridBox>
            {homeList.map(({img,title,host,price},index)=>{
                return(
                    <HomeCard
                        key={index}
                        img={img}
                        title={title}
                        host={host}
                        price={price}
                    />
                )
            })}
        </GridBox>
        <div style={{marginTop:'52px', marginBottom:'12px'}}>
            <h1>이전경험</h1>
        </div>
        <GridBox>
            {homeList.map(({img,title,host,price},index)=>{
                return(
                    <HomeCard
                        key={index}
                        img={img}
                        title={title}
                        host={host}
                        price={price}
                    />
                )
            })}
        </GridBox>

    </Container>
  );
}

export default HomeList;
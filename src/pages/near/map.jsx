import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function FirstPost() {
  return (
    <>
    <title>映画館検索</title>
    <main className="h-screen bg-green-100">
    <Header></Header>
    <div className="text-5xl pb-5 text-red-700 ml-20">近場の映画館検索</div>
    <div className="ml-40" id="map">
      地図API未取得で、未実装となります。
    </div>
    </main>
    <Footer></Footer>
    </>
  )
}

// const map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'),{

//   });
// }
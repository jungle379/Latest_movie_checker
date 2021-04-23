import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function FirstPost() {
  return (
    <>
    <title>映画館検索</title>
    <main className="h-screen bg-green-100">
    <Header></Header>
    <h1 className="text-5xl pb-5 text-red-700 ml-20">近場の映画館検索</h1>
    <div className="" id="map">

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
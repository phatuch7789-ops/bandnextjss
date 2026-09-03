import BandCard from "../components/BandCard"
import { bands } from "../data/bands"

export default function FavoriteBands() {
  return (
    <main>
      <h1>Favorite Bands</h1>

      <div className="bandList">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  )
}
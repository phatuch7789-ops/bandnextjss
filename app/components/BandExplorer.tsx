"use client"

import { useMemo, useState } from "react"
import BandCard from "./BandCard"
import { bands } from "../data/bands"

type SortOption = "name" | "foundedYear"

export default function BandExplorer() {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("name")
  const [followedIds, setFollowedIds] = useState<Set<number>>(new Set())
  const [likes, setLikes] = useState<Record<number, number>>({})

  const visibleBands = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()

    return bands
      .filter((band) => band.name.toLowerCase().includes(searchTerm))
      .sort((firstBand, secondBand) =>
        sortBy === "foundedYear"
          ? firstBand.foundedYear - secondBand.foundedYear
          : firstBand.name.localeCompare(secondBand.name),
      )
  }, [search, sortBy])

  function toggleFollow(bandId: number) {
    setFollowedIds((currentIds) => {
      const nextIds = new Set(currentIds)

      if (nextIds.has(bandId)) {
        nextIds.delete(bandId)
      } else {
        nextIds.add(bandId)
      }

      return nextIds
    })
  }

  function likeBand(bandId: number) {
    setLikes((currentLikes) => ({
      ...currentLikes,
      [bandId]: (currentLikes[bandId] ?? 0) + 1,
    }))
  }

  function resetFilters() {
    setSearch("")
    setSortBy("name")
  }

  return (
    <>
      <div className="pageHeading">
        <div>
          <p className="eyebrow">Music collection</p>
          <h1>Favorite Bands</h1>
        </div>
        <p className="followedCount" aria-live="polite">
          ติดตามอยู่ {followedIds.size} วง
        </p>
      </div>

      <section className="bandControls" aria-label="ตัวเลือกการค้นหาและเรียงลำดับ">
        <label className="searchField">
          <span>ค้นหาชื่อวงดนตรี</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="เช่น Linkin Park"
          />
        </label>

        <label className="sortField">
          <span>เรียงตาม</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
          >
            <option value="name">ชื่อวง</option>
            <option value="foundedYear">ปีที่ก่อตั้ง</option>
          </select>
        </label>

        <button type="button" className="resetButton" onClick={resetFilters}>
          ล้างเงื่อนไข
        </button>
      </section>

      {visibleBands.length > 0 ? (
        <div className="bandList">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedIds.has(band.id)}
              likeCount={likes[band.id] ?? 0}
              onFollowToggle={() => toggleFollow(band.id)}
              onLike={() => likeBand(band.id)}
            />
          ))}
        </div>
      ) : (
        <section className="emptyState" aria-live="polite">
          <h2>ไม่พบวงดนตรี</h2>
          <p>ลองค้นหาด้วยชื่อวงอื่น หรือล้างเงื่อนไขเพื่อดูวงทั้งหมด</p>
        </section>
      )}
    </>
  )
}

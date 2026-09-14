import Image from "next/image"
import { Band } from "../types/band"

type Props = {
    band: Band
    isFollowed: boolean
    likeCount: number
    onFollowToggle: () => void
    onLike: () => void
}

export default function BandCard({ band, isFollowed, likeCount, onFollowToggle, onLike }: Props) {
    return (
        <article className="bandCard">
            <div className="bandImage">
                <Image
                    src={band.image}
                    alt={band.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={band.id <= 3}
                />
            </div>

            <h2>{band.name}</h2>
            <p>แนวเพลง: {band.genre}</p>
            <p>ก่อตั้ง: {band.foundedYear}</p>
            <p>สมาชิก {band.members.length} คน</p>

            <div className="cardActions">
                <button type="button" onClick={onFollowToggle} className={isFollowed ? "isFollowing" : ""}>
                    {isFollowed ? "เลิกติดตาม" : "ติดตาม"}
                </button>
                <button type="button" onClick={onLike} className="likeButton" aria-label={`กดไลก์ ${band.name}`}>
                    <span aria-hidden="true">♥</span> {likeCount}
                </button>
            </div>

            <p>ประวัติย่อ: {band.info}</p>

            <h3>สมาชิก</h3>
            <ul>
                {band.members.map((member) => (
                    <li key={member.name}>
                        {member.name} - {member.role}
                        <Image src={member.image} alt={member.name} width={150} height={150} />
                    </li>
                ))}
            </ul>
        </article>
    )
}

import Image from "next/image"
import { Band } from "../types/band"

type Props = {
    band: Band
}

export default function BandCard({ band }: Props) {
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

            <p>ประวัติย่อ: {band.info}</p>

            <h3>สมาชิก</h3>

            <ul>
                {band.members.map((member) => (
                    <li key={member.name}>
                        {member.name} - {member.role}
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={150}
                            height={150}
                        ></Image>
                    </li>
                ))}
            </ul>
        </article>
    )
}

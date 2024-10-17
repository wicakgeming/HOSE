import Link from "next/link"

const Section = () => {
    return(
        <div className="flex justify-between gap-4 text-white text-xl">
            <Link href="/" className="hover:text-pashaungu">Deskripsi</Link>
            <Link href="/sensor/tabel" className="hover:text-pashaungu">Semua tabel</Link>
            <Link href="/sensor" className="hover:text-pashaungu">Sensor</Link>
        </div>
    )
}

export default Section
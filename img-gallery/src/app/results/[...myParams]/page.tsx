import Gallery from "@/app/components/Gallery";
type Props = {
    params: {
        myParams: (string | undefined) []
    }
}



export function generateMetaData({params : {myParams}}: Props) {
const topic = myParams?.[0] ?? "curated"
const page = myParams?.[1] ?? "1"
  return {
  title: `Results for ${topic} - page ${page}`
  }
}

export default function SearchResults({params : {myParams}}: Props) {
    return <Gallery topic={myParams[0]} page={myParams[1]} />
}
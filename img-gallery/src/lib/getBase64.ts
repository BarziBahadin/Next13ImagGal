import { getPlaiceholder  } from "plaiceholder";
import { Photo,ImagesResults } from "@/models/Images";


async function getBase64(imageUrl : string){
    try {
       const res= await fetch(imageUrl)
       if (!res.ok) {
        throw new Error(`Failed to fetch image:${res.status} `)

       } 
       const buffer = await res.arrayBuffer()
       const {base64} = await getPlaiceholder(Buffer.from(buffer))

    //    console.log(base64)
       return base64
    } catch (error) {
        if (error instanceof Error) console.log(error.stack)
        
    }
}

export default async function addBlurredDateUrls(images:ImagesResults): Promise<Photo[]> {
    // make all requests at once instead of wading each one 
    // in order to avid a waterfall

    const base64Promises = images.photos.map(photo=>getBase64
        (photo.src.large))

    const base64PResults = await Promise.all(base64Promises)

    const photosWithBlur : Photo[] = images.photos.map((photo,i) => {
        photo.blurredDataUrl = base64PResults[i]
        return photo
    })
    return photosWithBlur
}
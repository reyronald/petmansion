import styles from '../styles/Map.module.css'

const API_KEY = process.env.GOOGLE_MAPS_API_KEY

// https://developers.google.com/places/web-service/place-id
const PET_MANSION_PLACE_ID = 'ChIJ87PXIQWKr44RxTDWhEKl2lI'

export function Map() {
  return (
    <div className={styles.map}>
      <iframe
        title="Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=place_id:${PET_MANSION_PLACE_ID}&zoom=14`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

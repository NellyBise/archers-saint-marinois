'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const MapComponent = ({ coordinates, popup }) => {
  const mapContainerRef = useRef(null) // Référence vers le div contenant la carte
  const mapInstanceRef = useRef(null) // Référence pour stocker l'instance de Leaflet

  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove() // Nettoyer l'ancienne carte si elle existe
    }

    const L = require('leaflet')
    require('leaflet/dist/leaflet.css')

    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    })

    // Créer une nouvelle carte uniquement si l'élément est bien présent
    if (mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView(coordinates, 15)
      mapInstanceRef.current = map // Sauvegarde de la carte pour éviter les conflits

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      const customIcon = L.icon({
        iconUrl: '/marker.png',
        iconSize: [40, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })

      L.marker(coordinates, { icon: customIcon })
        .addTo(map)
        .bindPopup(popup)
        .openPopup()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove() // Supprimer la carte proprement
        mapInstanceRef.current = null
      }
    }
  }, [coordinates, popup]) // Met à jour la carte si les coordonnées changent

  return (
    <div
      ref={mapContainerRef}
      className="w-full max-w-3xl h-72 rounded-lg shadow-lg"
    />
  )
}

const Map = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
  loading: () => (
    <div className="-z-10 w-full max-w-3xl h-72 rounded-lg shadow-lg bg-gray-200" />
  ),
})

export default Map

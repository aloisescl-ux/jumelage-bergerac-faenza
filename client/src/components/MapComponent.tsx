import { useEffect, useRef } from "react";

interface MapComponentProps {
  title?: string;
  description?: string;
}

export function MapComponent({ title, description }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialiser la carte
    const mapOptions: google.maps.MapOptions = {
      zoom: 4,
      center: { lat: 43.5, lng: 12 }, // Centre entre Bergerac et Faenza
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
    };

    map.current = new google.maps.Map(mapContainer.current, mapOptions);

    // Ajouter les marqueurs
    const bergeracMarker = new google.maps.Marker({
      position: { lat: 44.8333, lng: 0.5 },
      map: map.current,
      title: "Bergerac, France",
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    });

    const faenzaMarker = new google.maps.Marker({
      position: { lat: 44.3333, lng: 11.8667 },
      map: map.current,
      title: "Faenza, Italie",
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    });

    // Ajouter les infowindows
    const bergeracInfo = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 5px 0;">Bergerac, France</h3>
          <p style="margin: 0; font-size: 12px;">Ville viticole en Dordogne</p>
        </div>
      `,
    });

    const faenzaInfo = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 5px 0;">Faenza, Italie</h3>
          <p style="margin: 0; font-size: 12px;">Capitale de la céramique en Émilie-Romagne</p>
        </div>
      `,
    });

    bergeracMarker.addListener("click", () => {
      faenzaInfo.close();
      bergeracInfo.open(map.current, bergeracMarker);
    });

    faenzaMarker.addListener("click", () => {
      bergeracInfo.close();
      faenzaInfo.open(map.current, faenzaMarker);
    });

    // Ouvrir Bergerac par défaut
    bergeracInfo.open(map.current, bergeracMarker);
  }, []);

  return (
    <div className="w-full">
      {title && (
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">{title}</h2>
          {description && <p className="text-gray-700">{description}</p>}
        </div>
      )}
      <div
        ref={mapContainer}
        className="w-full h-96 rounded-lg shadow-md"
        style={{ minHeight: "400px" }}
      />
    </div>
  );
}

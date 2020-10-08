﻿export function initialize(mapOptions) {
    var newMap = L.map(mapOptions.divId).setView(mapOptions.center, mapOptions.zoom);
    L.tileLayer(mapOptions.urlTileLayer, mapOptions.subOptions).addTo(newMap);
    return newMap;
}
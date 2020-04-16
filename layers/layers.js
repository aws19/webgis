var wms_layers = [];

var format_Aeropuertos_0 = new ol.format.GeoJSON();
var features_Aeropuertos_0 = format_Aeropuertos_0.readFeatures(json_Aeropuertos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_0.addFeatures(features_Aeropuertos_0);
var lyr_Aeropuertos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_0, 
                style: style_Aeropuertos_0,
                interactive: true,
    title: 'Aeropuertos<br />\
    <img src="styles/legend/Aeropuertos_0_0.png" /> Major airport<br />\
    <img src="styles/legend/Aeropuertos_0_1.png" /> Mid airport<br />\
    <img src="styles/legend/Aeropuertos_0_2.png" /> Small airport<br />'
        });

lyr_Aeropuertos_0.setVisible(true);
var layersList = [lyr_Aeropuertos_0];
lyr_Aeropuertos_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'Tipo', 'name': 'Nombre', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'Codigo_IATA', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'Tipo': 'Tipo', });
lyr_Aeropuertos_0.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'comments': 'Hidden', 'wikidataid': 'Hidden', 'wdid_score': 'Hidden', 'ne_id': 'Hidden', 'Tipo': 'TextEdit', });
lyr_Aeropuertos_0.set('fieldLabels', {'name': 'inline label', 'iata_code': 'inline label', 'wikipedia': 'inline label', 'Tipo': 'inline label', });
lyr_Aeropuertos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
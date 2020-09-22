var wms_layers = [];

var format_sectores_0 = new ol.format.GeoJSON();
var features_sectores_0 = format_sectores_0.readFeatures(json_sectores_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores_0.addFeatures(features_sectores_0);
var lyr_sectores_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores_0, 
                style: style_sectores_0,
                interactive: true,
                title: '<img src="styles/legend/sectores_0.png" /> sectores'
            });
var format_manzanas_1 = new ol.format.GeoJSON();
var features_manzanas_1 = format_manzanas_1.readFeatures(json_manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_1.addFeatures(features_manzanas_1);
var lyr_manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_1, 
                style: style_manzanas_1,
                interactive: true,
    title: 'manzanas<br />\
    <img src="styles/legend/manzanas_1_0.png" /> SECTOR 1<br />\
    <img src="styles/legend/manzanas_1_1.png" /> SECTOR 18<br />\
    <img src="styles/legend/manzanas_1_2.png" /> SECTOR 2<br />\
    <img src="styles/legend/manzanas_1_3.png" /> SECTOR 3<br />\
    <img src="styles/legend/manzanas_1_4.png" /> SECTOR 4<br />\
    <img src="styles/legend/manzanas_1_5.png" /> SECTOR 7<br />\
    <img src="styles/legend/manzanas_1_6.png" /> SECTOR 8<br />'
        });

lyr_sectores_0.setVisible(true);lyr_manzanas_1.setVisible(true);
var layersList = [lyr_sectores_0,lyr_manzanas_1];
lyr_sectores_0.set('fieldAliases', {'cod_sector': 'cod_sector', 'area': 'area', 'perimetro': 'perimetro', 'numero': 'numero', 'imagen': 'imagen', });
lyr_manzanas_1.set('fieldAliases', {'cod_mz': 'cod_mz', 'cod_sector': 'cod_sector', });
lyr_sectores_0.set('fieldImages', {'cod_sector': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'numero': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_manzanas_1.set('fieldImages', {'cod_mz': 'Hidden', 'cod_sector': 'Hidden', });
lyr_sectores_0.set('fieldLabels', {'cod_sector': 'no label', 'area': 'no label', 'perimetro': 'no label', 'numero': 'no label', 'imagen': 'no label', });
lyr_manzanas_1.set('fieldLabels', {});
lyr_manzanas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
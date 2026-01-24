var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Iran_1 = new ol.format.GeoJSON();
var features_Iran_1 = format_Iran_1.readFeatures(json_Iran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iran_1.addFeatures(features_Iran_1);
var lyr_Iran_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iran_1, 
                style: style_Iran_1,
                popuplayertitle: 'Iran',
                interactive: false,
                title: '<img src="styles/legend/Iran_1.png" /> Iran'
            });
var format_Regionofinterestupto23012026_2 = new ol.format.GeoJSON();
var features_Regionofinterestupto23012026_2 = format_Regionofinterestupto23012026_2.readFeatures(json_Regionofinterestupto23012026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionofinterestupto23012026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionofinterestupto23012026_2.addFeatures(features_Regionofinterestupto23012026_2);
var lyr_Regionofinterestupto23012026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionofinterestupto23012026_2, 
                style: style_Regionofinterestupto23012026_2,
                popuplayertitle: 'Region of interest up to 23.01.2026',
                interactive: false,
                title: '<img src="styles/legend/Regionofinterestupto23012026_2.png" /> Region of interest up to 23.01.2026'
            });
var format_CVN72possibleroute_3 = new ol.format.GeoJSON();
var features_CVN72possibleroute_3 = format_CVN72possibleroute_3.readFeatures(json_CVN72possibleroute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CVN72possibleroute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CVN72possibleroute_3.addFeatures(features_CVN72possibleroute_3);
var lyr_CVN72possibleroute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CVN72possibleroute_3, 
                style: style_CVN72possibleroute_3,
                popuplayertitle: 'CVN-72 possible route',
                interactive: false,
                title: '<img src="styles/legend/CVN72possibleroute_3.png" /> CVN-72 possible route'
            });
var format_Tomahawkrange_4 = new ol.format.GeoJSON();
var features_Tomahawkrange_4 = format_Tomahawkrange_4.readFeatures(json_Tomahawkrange_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tomahawkrange_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tomahawkrange_4.addFeatures(features_Tomahawkrange_4);
var lyr_Tomahawkrange_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tomahawkrange_4, 
                style: style_Tomahawkrange_4,
                popuplayertitle: 'Tomahawk range',
                interactive: false,
                title: '<img src="styles/legend/Tomahawkrange_4.png" /> Tomahawk range'
            });
var format_20012026CVN72AIS_5 = new ol.format.GeoJSON();
var features_20012026CVN72AIS_5 = format_20012026CVN72AIS_5.readFeatures(json_20012026CVN72AIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20012026CVN72AIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20012026CVN72AIS_5.addFeatures(features_20012026CVN72AIS_5);
var lyr_20012026CVN72AIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20012026CVN72AIS_5, 
                style: style_20012026CVN72AIS_5,
                popuplayertitle: ' 20.01.2026 CVN-72 AIS',
                interactive: false,
                title: '<img src="styles/legend/20012026CVN72AIS_5.png" />  20.01.2026 CVN-72 AIS'
            });
var lyr_20012026NearCVN72Radar_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '20.01.2026 Near CVN-72 (Radar)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20012026NearCVN72Radar_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10717101.968755, 684531.851906, 10722958.932444, 689509.744351]
        })
    });
var lyr_23012026MilitaryShipOptical_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '23.01.2026 Military Ship? (Optical)<br />\
    <img src="styles/legend/23012026MilitaryShipOptical_7_0.png" /> 1861<br />\
    <img src="styles/legend/23012026MilitaryShipOptical_7_1.png" /> 5243<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/23012026MilitaryShipOptical_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8204612.074017, 1635193.459533, 8211634.725991, 1639354.500261]
        })
    });
var lyr_23012026ArmadaofshipsOptical_8 = new ol.layer.Image({
        opacity: 1,
        
    title: '23.01.2026 Armada of ships (Optical)<br />\
    <img src="styles/legend/23012026ArmadaofshipsOptical_8_0.png" /> 2025<br />\
    <img src="styles/legend/23012026ArmadaofshipsOptical_8_1.png" /> 3814<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/23012026ArmadaofshipsOptical_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8205013.368416, 1655086.196145, 8212036.020389, 1659247.236872]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_Iran_1.setVisible(true);lyr_Regionofinterestupto23012026_2.setVisible(true);lyr_CVN72possibleroute_3.setVisible(true);lyr_Tomahawkrange_4.setVisible(true);lyr_20012026CVN72AIS_5.setVisible(true);lyr_20012026NearCVN72Radar_6.setVisible(true);lyr_23012026MilitaryShipOptical_7.setVisible(true);lyr_23012026ArmadaofshipsOptical_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Iran_1,lyr_Regionofinterestupto23012026_2,lyr_CVN72possibleroute_3,lyr_Tomahawkrange_4,lyr_20012026CVN72AIS_5,lyr_20012026NearCVN72Radar_6,lyr_23012026MilitaryShipOptical_7,lyr_23012026ArmadaofshipsOptical_8];
lyr_Iran_1.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'cod_versio': 'cod_versio', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_n': 'adm0_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Regionofinterestupto23012026_2.set('fieldAliases', {'id': 'id', });
lyr_CVN72possibleroute_3.set('fieldAliases', {'id': 'id', });
lyr_Tomahawkrange_4.set('fieldAliases', {'Имя': 'Имя', 'X': 'X', 'Y': 'Y', });
lyr_20012026CVN72AIS_5.set('fieldAliases', {'id': 'id', });
lyr_Iran_1.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'cod_versio': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Regionofinterestupto23012026_2.set('fieldImages', {'id': 'TextEdit', });
lyr_CVN72possibleroute_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Tomahawkrange_4.set('fieldImages', {'Имя': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_20012026CVN72AIS_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Iran_1.set('fieldLabels', {'iso2': 'no label', 'iso3': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'cod_versio': 'no label', 'area_sqkm': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm0_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Regionofinterestupto23012026_2.set('fieldLabels', {'id': 'no label', });
lyr_CVN72possibleroute_3.set('fieldLabels', {'id': 'no label', });
lyr_Tomahawkrange_4.set('fieldLabels', {'Имя': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_20012026CVN72AIS_5.set('fieldLabels', {'id': 'no label', });
lyr_20012026CVN72AIS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
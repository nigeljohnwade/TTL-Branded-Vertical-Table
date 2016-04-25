define( [
    "jquery", 
    "text!./template.html",
    "css!./css/TTL-Branded-Vertical-Table.css" 
    ],
    function ( ) {
        'use strict';

        return {
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    dimensions: {
                        uses: "dimensions"
                    },
                    measures: {
                        uses: "measures"
                    },
                    sorting: {
                        uses: "sorting"
                    },
                    appearance: {
                        uses: "settings"
                    }
                }
            },
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [
                        {
                            qWidth: 10,
                            qHeight: 5
                        }
                    ]
                }
            },
            paint: function ( $element, layout ) {

                // Your code comes here
                
                var hc = layout.qHyperCube;
                console.log(hc);
                $element.empty();
                var table = '<div class="table-style-3"><table>';

                    table += '<thead>';
                    table += '<tr><th class="group" colspan="' + hc.qDataPages[0].qMatrix.length + '">Grouping Header</tr>'
                    table += '<tr>';
                    for (var i = 0; i < hc.qDimensionInfo.length; i++) {
                        table += '<th class="item">' + hc.qDimensionInfo[i].qFallbackTitle + '</th>';
                    }
                    for (var i = 0; i < hc.qMeasureInfo.length; i++) {
                        table += '<th class="item">' + hc.qMeasureInfo[i].qFallbackTitle + '</th>';
                    }
                    table += '</tr>';
                    table += '</thead>';

                    table += '<tbody>';
                        // iterate over all rows
                        for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) {
                            table += '<tr>';

                            // iterate over all cells within a row
                            for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) {
                                table += '<td>';
                                    table += hc.qDataPages[0].qMatrix[r][c].qText;
                                table += '</td>';
                            }
                            table += '</tr>';
                        }
                    table += '</tbody>';
                table += '</table></div>';
                $element.append( table );

            }
        };
    } );
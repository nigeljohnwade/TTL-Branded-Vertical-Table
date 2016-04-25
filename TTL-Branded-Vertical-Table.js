define( [
    "jquery", 
    "text!./template.html",
    "css!./css/TTL-Branded-Vertical-Table.css",
    "qlik"
    ],
    function (
        $,
        template,
        cssContent,
        qlik
        ) {
        'use strict';

        return {
            template: template,
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
                //setup scope.table
                if ( !this.$scope.table ) {
                    this.$scope.table = qlik.table( this );
                }
                console.log(this.$scope.table);
            },
            controller : ['$scope',
                function($scope) {
                    $scope.getWidth = function(row, measureinfo) {
                        var width = 80 * row[1].qNum / ( measureinfo ? measureinfo[0].qMax * 1.5 : 1) + '%';
                        return {
                            "width" : width
                        }
                    }
                }
            ]
        };
    } );
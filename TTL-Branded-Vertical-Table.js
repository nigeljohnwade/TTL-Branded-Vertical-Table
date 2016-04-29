define( [
    "text!./template.html",
    "css!./css/TTL-Branded-Vertical-Table.css",
    "./properties",
    "qlik"
    ],
    function (
        template,
        cssContent,
        props,
        qlik
        ) {
        'use strict';

        return {
            template: template,
            definition: props,
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [
                        {
                            qWidth: 10,
                            qHeight: 50
                        }
                    ]
                }
            },
            paint: function ( $element, layout ) {
                if ( !this.$scope.table ) {
                    this.$scope.table = qlik.table( this );
                }
            },
            controller : ['$scope',
            function($scope) {
                $scope.dataTypeCell = function(item) {
                    if(typeof item.qNum !== 'undefined'){
                        return 'number';
                    }else{
                        return 'text'
                    }
                };
                
                $scope.dataTypeHeader = function(item) {
                    if(typeof item.qMeasureInfo !== 'undefined'){
                        return 'number';
                    }else{
                        return 'text'
                    }
                }
                $scope.setSelection = function(e){
                    console.log(e);
                    if(e.target.dataset.qelemnumber) {
                        var value = parseInt(e.target.dataset.qelemnumber, 10), dim = 0;
                        $scope.selectValues(dim, [value], true);
                    }
                }
            }]
        };
    } );
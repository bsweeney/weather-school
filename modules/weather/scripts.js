function widgetScroll ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	switch ( evt.type ) {
		case 'initialize' :
			manageScroll( this.settings.container );
			break;
		case 'render' :
			manageScroll( this.settings.container );
			break;
	}
}

function elevator( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' || evt.type == 'reset' ) {
	wInstance.settings.container.find('.output-table table tbody').on('click.elevate','.header th', {widget: wInstance},function(evt){
	if (evt.data.widget.settings.selectable){ if (evt.data.widget.selectableKeys.indexOf($(this).text())==-1) return;}
	if (evt.data.widget.settings.container.find('.output-table table tbody .header th.selected-for-graph-x').length>0 && evt.data.widget.settings.container.find('.output-table table tbody .header th.selected-for-graph-y').length>0) {
		evt.data.widget.settings.displayWidgets[0].settings.container.css("border-top","1px dashed grey");
		evt.data.widget.settings.container
			.animate(
				{ height:'50%' } ,
				{
						step: function(now, fx){
							evt.data.widget.settings.displayWidgets[0].settings.container.css("bottom", -1*(now-50)+"%");
						},
						duration: 500,
						easing: "linear",
						complete: function() {
								manageScroll( evt.data.widget.settings.container );
						}
				}
		);
		evt.data.widget.settings.container.addClass('elevated');
		//$(evt.data.widget.settings.container).resizeable({containment:"parent"});
		evt.data.widget.settings.container.find('.output-table table tbody').off('click.elevate');
	}
	});
	}
}

var widgetAnimations = {
	placemarkers: function(wInstance,marker1,marker2,date1,date2) {
		if (wInstance.settings.container.hasClass('clicked')) return;
		setTimeout(function(){
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker1[0],marker1[1]), staticmap: true } );
		if (marker2 != null) google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker2[0],marker2[1]), staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' , moment(date1,'MMMMDDYYYY').toDate());
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' , moment(date2,'MMMMDDYYYY').toDate());
		wInstance.map.date.ui.find('.ui-state-active').click();
		wInstance.settings.container.addClass('clicked');
		}, 500);
		},
	placetablemarker: function(wInstance,marker,year) {
		if (wInstance.settings.container.hasClass('clicked')) return;
		setTimeout(function(){
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker[0],marker[1]), staticmap: true } );
		var dateVals=[];
		wInstance.map.date.data('hidden',false);
		for (i=0; i<12; i++) dateVals.push(moment([year,i,1]).toDate() );
		wInstance.map.date.data( 'value', dateVals);
 		wInstance.map.date.ui.find('.ui-state-active').click();
		wInstance.settings.container.addClass('clicked');
		}, 500);
		},
	placestations: function(wInstance,marker1,stations,date1,date2) {
		if (wInstance.settings.container.hasClass('clicked')) return;
		setTimeout(function(){
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker1[0],marker1[1]), stationNames: stations, staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' , moment(date1,'MMMMDDYYYY').toDate());
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' , moment(date2,'MMMMDDYYYY').toDate());
		wInstance.map.date.ui.find('.ui-state-active').click();
		wInstance.settings.container.addClass('clicked');
		}, 500);
		},
	swinggraph: function(wInstance) {
		if (wInstance.settings.displayWidgets[0].settings.container.hasClass('moved')) return;
				mapCenter = wInstance.map.getCenter();
		wInstance.settings.container
			.css( { 'width':'auto' } )
			.animate(
				{ right:'64%' } ,
				1000 ,
				function ( ) {
					google.maps.event.trigger(wInstance.map, 'resize');
				}
			)
			.find( '.widget.dataSelect' ).addClass( 'width-200' );
		wInstance.settings.displayWidgets[0].settings.container
			.show()
			.animate( { left:'36%' } , 1000 , 'swing',function() {
					wInstance.map.panTo(mapCenter);
			});
		wInstance.settings.displayWidgets[0].settings.container.addClass('moved');
		},
	swingtable: function(wInstance) {
		if (wInstance.settings.displayWidgets[0].settings.container.hasClass('moved')) return;
				mapCenter = wInstance.map.getCenter();
		wInstance.settings.container
			.css( { 'width':'auto' } )
			.animate(
				{ right:'64%' } ,
				1000 ,
				function ( ) {
					google.maps.event.trigger(wInstance.map, 'resize');
				}
			)
			.find( '.widget.dataSelect' ).addClass( 'width-200' );
		wInstance.settings.displayWidgets[0].settings.container
			.show()
			.animate( { left:'36%' } , 1000 , 'swing',function() {
					wInstance.map.setCenter(mapCenter);
			});
		wInstance.settings.displayWidgets[0].settings.container.addClass('moved');
		
		},
	elevatetable: function(wInstance) {
		//THIS ONE IS CALLED ON THE TABLE NOT THE DATASELECT
		if (wInstance.settings.container.hasClass('elevated')) return;
		wInstance.settings.displayWidgets[0].settings.container.css("border-top","1px dashed grey");
		wInstance.settings.container
			.animate( { height:'50%' } , {step: function(now, fx){
			wInstance.settings.displayWidgets[0].settings.container.css("bottom", -1*(now-50)+"%");
			//wInstance.settings.displayWidgets[0].settings.displayWidgets[0].highChart.setSize( 50 , 100);
			}}, 1000, "linear", function() {wInstance.settings.container.children()
			.css("overflow","auto")
			.css("overflow","hidden");});
		wInstance.settings.container.addClass('elevated');
	}
}

function cbDaylightEx1 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}
function cbDaylightEx2 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
			widgetAnimations.placemarkers(wInstance, [40.81,-73.96], [ 44.70, -73.45 ], "January 01 2004", "December 31 2004" );
			$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}
function cbDaylightEx3 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
			widgetAnimations.placemarkers(wInstance, [ 5.07,-74.53 ],null, "January 01 2004", "December 31 2004" );
			$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}
function cbDaylightEx4 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
			widgetAnimations.placemarkers(wInstance, [ 0.15,-78.35 ],null, "January 01 2004", "December 31 2004" );
			$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}

function cbHeightSunAirTempEx (evt) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}
function cbDaylightAirTempEx (evt) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}



function mapXvis ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evtType[0] == 'data' && ( evtType[1] == 'load' || evtType[1] == 'ready' ) && this.settings.displayStatus == 'map' ) {
		// FIXME: add a resize method to the wInstance so that the resizing can be done there, passing just the width, height, and delay. Let the wInstance take care of the map.
		var mapCenter = this.map.getCenter();
		this.settings.container
			.css( { 'width':'auto' } )
			.animate(
				{ right:'64%' } ,
				1000 ,
				function ( ) {
					google.maps.event.trigger(wInstance.map, 'resize');
				}
			)
			.find('.map-date.Dstooltip').tooltip('close');
			wInstance.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
		this.settings.displayWidgets[0].settings.container
			.show()
			.animate( { left:'36%' } , 1000 , 'swing',function() {
					wInstance.map.panTo(mapCenter);
			});
		if (typeof( this.settings.displayWidgets[0].settings.displayWidgets ) != 'undefined'  && this.settings.displayWidgets[0].settings.displayWidgets.length==1 ) {
			this.settings.displayWidgets[0].settings.displayWidgets[0].settings.container
			.show()
			.animate( { left:'36%' } , 1000 , 'swing' );
		}
		this.settings.displayStatus = 'vis';
	} else if ( evtType == 'initialize' ) {
		this.settings.displayStatus = 'map';
	}
}

function resetMap ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type=='reset' && this.settings.displayStatus == 'vis' ) {
		// FIXME: add a resize method to the wInstance so that the resizing can be done there, passing just the width, height, and delay. Let the wInstance take care of the map.
		var mapCenter = new google.maps.LatLng(38,-95);
		this.settings.container
			.css( { 'width':'auto' } )
			.animate(
				{ right:'0%' } ,
				1000 ,
				function ( ) {
					google.maps.event.trigger(wInstance.map, 'resize');
					wInstance.map.panTo(mapCenter);
					wInstance.map.setZoom(3);
					wInstance.settings.container.find( '.widget.dataSelect' ).removeClass( 'width-200' );
				}
			)
			.find('.map-date.Dstooltip').tooltip('close');
		this.settings.displayWidgets[0].settings.container
			.hide()
			.css( 'left','100%' );
		if (typeof( this.settings.displayWidgets[0].settings.displayWidgets ) != 'undefined'  && this.settings.displayWidgets[0].settings.displayWidgets.length==1 ) {
			this.settings.displayWidgets[0].settings.container
				.css('height','100%')
				.removeClass('elevated');
			this.settings.displayWidgets[0].settings.displayWidgets[0].settings.container
			.hide()
			.css( 'left','100%' )
			.css( 'bottom','-50%' )
			.css ('border-top','0px');

		}
		this.settings.displayStatus = 'map';
	}
}

function cbDailyTempEx ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 38.8935965, -77.014576 ), staticmap: true } );
		//wInstance.map.date.data('value',[[new Date( "2001-01-01T17:00:00Z" ),new Date("2002-01-01T17:00:00Z")]]);
 		wInstance.map.date.data('value',[[moment("January 01 2001","MMMMDDYYYY").toDate(),moment("January 01 2002","MMMMDDYYYY").toDate()]]); 
		wInstance.map.date.ui.find('.ui-state-active').click();
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}
function cbHeightSunEx ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		widgetAnimations.placemarkers(wInstance, [ 40.71, -74.01 ],null, "January 01 2004", "December 31 2004" );
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}

function cbTempLatNorthern ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
	$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}

function cbTempLatSouthern ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		widgetAnimations.placemarkers(wInstance, [ -17.800000,-63.166670 ],[ -31.398930,-64.182129 ], "January 01 2004", "December 31 2004" );
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}	

function cbElevExample ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}	
function cbLargeBodiesWaterExample ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	}
}	

/**
 * Widget initialization object.
 *
 * This object defines the widgets associated with each slide. When a particular
 * slide is activated the widgets on it are initialized .
**/

var slideInit = {
	'locationExplorer-tryit' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' },
					date           : { type:'month-day' , max:1 },
					maxPoints      : 1,
					container      : $( '#dataSelector-tryit' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'statspanel',
							{
								container : $( '#statspanel-tryit' ) ,
								callbacks : [ widgetScroll ]
							}
						)
					],
					callbacks : [ mapXvis ]
				}
			);
		}
	} ,
	'daily-temperature-example' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double-restricted' , 'range':1 },
					maxPoints      : 1,
					container      : $( '#daily-temperature-example-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#daily-temperature-example-tc' ),
								//Need to select larger range for annual temperature. Filter then reduces this for daily.
								filter : function ( data ) {
									var wInstance = aaasClimateViz.widgets[this.container.widget.index+2];
									//var DailyDateStart = new Date("2000-04-02T17:00:00Z" );
									var DailyDateStart = moment("April 02 2000","MMMMDDYYYY").toDate();
									var DailyDateEnd = moment("April 25 2000","MMMMDDYYYY").toDate();
									//var DailyDateEnd = new Date( "2000-04-25T17:00:00Z" );
									filteredData = {};
									for ( dataID in data ) {
										filteredData[dataID] = { data:[] , dataMeta:data[dataID].dataMeta , seriesMeta:data[dataID].seriesMeta };
										for ( i in data[dataID].data ) {
											if ( data[dataID].data[i].date_recorded >= DailyDateStart && data[dataID].data[i].date_recorded <= DailyDateEnd ) {
												filteredData[dataID].data.push( data[dataID].data[i] );
											}
										}
									}
									// http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
									//Visually reset datepicker to these dates
									wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  DailyDateStart);
									wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  DailyDateEnd );
									return filteredData;
								}
							}
						),
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#annual-temperature-display-tc' )
							}
						)
					],
					callbacks : [ cbDailyTempEx ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#daily-temperature-example-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide >= 1) {
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#daily-temperature-example .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'annual-temperature-display' : {
		is_initialized : false ,
		initialize : function ( ) {
		if (!(slideInit['daily-temperature-example'].is_initialized)) {
			var widgets =slideInit['daily-temperature-example'].initialize();
			slideInit['daily-temperature-example'].is_initialized=false;
		}
		return widgets;
		}
	} ,
	'annual-temperature-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double' },
					maxPoints      : 1,
					container      : $( '#annual-temperature-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#annual-temperature-explore-tc' )
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	} ,
	'temperature-lat-northern' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 2,
					container      : $( '#temperature-lat-northern-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-lat-northern-tc' )
							}
						)
					],
					callbacks : [ cbTempLatNorthern ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#temperature-lat-northern-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide == 1) widgetAnimations.placemarkers(wInstance, [ 29.461029,-98.697739 ], [49.886083,-97.152921], "January 01 2004", "December 31 2004" );
						else if (currSlide >= 2) {
							widgetAnimations.placemarkers(wInstance, [ 29.461029,-98.697739 ], [49.886083,-97.152921],  "January 01 2004", "December 31 2004" );
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#temperature-lat-northern .plusslider-pagination li').off('click.animate');
						}
					}
			}
			);
		}
	} ,
	'temperature-lat-southern' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 2,
					container      : $( '#temperature-lat-southern-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-lat-southern-tc' )
							}
						)
					],
					callbacks : [ cbTempLatSouthern  ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#temperature-lat-southern-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide >= 1) {
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#temperature-lat-southern .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'temperature-lat-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double' },
					maxPoints      : 2,
					container      : $( '#temperature-lat-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-lat-explore-tc' )
							}
						)
					],
					callbacks : [ /*cbTempLatitude*/ , mapXvis, resetMap ]
				}
			);
		}
	} ,
	'temperature-elevation-example' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 1,
					maxStations    : 2,
					container      : $( '#temperature-elevation-example-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-elevation-example-tc' )
							}
						)
					],
					callbacks : [ cbElevExample ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#temperature-elevation-example-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide == 1) widgetAnimations.placestations(wInstance, [ 27.71,85.33 ], ["TINGRI", "GORAKHPUR"], "January 01 2004", "December 31 2004" );
						else if (currSlide >= 7) {
							widgetAnimations.placestations(wInstance, [ 27.71,85.33 ], ["TINGRI", "GORAKHPUR"], "January 01 2004", "December 31 2004" );
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#temperature-elevation-example .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'temperature-elevation-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double' },
					maxPoints      : 1,
					maxStations    : 2,
					container      : $( '#temperature-elevation-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-elevation-explore-tc' )
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	} ,
	'temperature-water-example' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 1,
					maxStations    : 2,
					container      : $( '#temperature-water-example-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-water-example-tc' )
							}
						)
					],
					callbacks : [ cbLargeBodiesWaterExample ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#temperature-water-example-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide == 1) widgetAnimations.placestations(wInstance, [ 69.38,20.71 ], ["TROMSO", "KAUTOKEINO"], "January 01 2004", "December 31 2004" );
						else if (currSlide >= 4) {
						 	widgetAnimations.placestations(wInstance, [ 69.38,20.71 ], ["TROMSO", "KAUTOKEINO"], "January 01 2004", "December 31 2004" );
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#temperature-water-example .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'temperature-water-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'gsod' },
					date           : { type:'year-month-day-range-double' },
					maxPoints      : 1,
					maxStations    : 2,
					container      : $( '#temperature-water-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#temperature-water-explore-tc' )
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	} ,
	'height-sun-example' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunAngle'] },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 1,
					container      : $( '#height-sun-example-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#height-sun-example-tc' )
							}
						)
					],
					callbacks : [ cbHeightSunEx ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#height-sun-example-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide >= 1) {
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#height-sun-example .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	},
	'height-sun-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunAngle'] },
					date           : { type:'year-month-day-range-double' },
					maxPoints      : 1,
					container      : $( '#height-sun-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#height-sun-explore-tc' )
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	},
	'height-sun-air-temperature-example' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' , fields:['-sunImage'] },
					date           : { type:'month-day-restricted' , max:12 },
					maxPoints      : 1,
					container      : $( '#height-sun-air-temperature-example-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'table',
							{
								container : $( '#height-sun-air-temperature-example-tb' ) ,
								selectForOutput : 2,
								selectable: ['tempavg','sunAngle'],
								displayWidgets : [
									aaasClimateViz.loadWidget(
										'linechart',
										{
											tooltip   : { position:'fixed' , detail:'short' } ,
											container : $( '#height-sun-air-temperature-example-tc' )
										}
									)
								] ,
								callbacks : [ widgetScroll, elevator ]
							}
						)
					],
					callbacks : [ cbHeightSunAirTempEx ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#height-sun-air-temperature-example-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide == 1) widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 1995 );
						else if (currSlide == 3) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 1995 );
							widgetAnimations.swinggraph(wInstance);
						}
						else if (currSlide>=4) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 1995 );
							widgetAnimations.swinggraph(wInstance);
							//widgetAnimations.elevatetable(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#height-sun-air-temperature-example .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	},
	'height-sun-air-temperature-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' , fields:['-sunImage'] },
					date           : { type:'month-day' , max:12 },
					maxPoints      : 1,
					container      : $( '#height-sun-air-temperature-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'table',
							{
								container : $( '#height-sun-air-temperature-explore-tb' ) ,
								selectForOutput : 2,
								displayWidgets : [
									aaasClimateViz.loadWidget(
										'linechart',
										{
											tooltip   : { position:'fixed' , detail:'short' } ,
											container : $( '#height-sun-air-temperature-explore-tc' )
										}
									)
								] ,
								callbacks : [ widgetScroll, elevator ]
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	},
	'daylight-example1' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunHours'] },
					date           : { type:'year-month-day-range-double-restricted' , max:1 },
					maxPoints      : 1,
					container      : $( '#daylight-example1-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#daylight-example1-tc' ) ,
								callbacks : [ ]
							}
						)
					],
					callbacks : [ cbDaylightEx1 ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#daylight-example1-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide == 1) widgetAnimations.placemarkers(wInstance, [40.81 , -73.96], null, "January 01 2003", "January 01 2005" );
						else if (currSlide >= 2) {
							widgetAnimations.placemarkers(wInstance, [40.81 , -73.96 ], null, "January 01 2003", "January 01 2005" );
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#daylight-example1 .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'daylight-example2' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunHours'] },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 2,
					container      : $( '#daylight-example2-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#daylight-example2-tc' )
							}
						)
					],
					callbacks : [ cbDaylightEx2 ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#daylight-example2-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide >= 1) {
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#daylight-example2 .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'daylight-example3' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunHours'] },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 1,
					container      : $( '#daylight-example3-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#daylight-example3-tc' )
							}
						)
					],
					callbacks : [ cbDaylightEx3 ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#daylight-example3-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide >= 1) {
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#daylight-example3 .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'daylight-example4' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunHours'] },
					date           : { type:'year-month-day-range-double-restricted' },
					maxPoints      : 1,
					container      : $( '#daylight-example4-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#daylight-example4-tc' )
							}
						)
					],
					callbacks : [ cbDaylightEx4 ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#daylight-example4-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide >= 1) {
							widgetAnimations.swinggraph(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#daylight-example4 .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	} ,
	'daylight-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'sunangle' , fields:['date','sunHours',] },
					date           : { type:'year-month-day-range-double' },
					maxPoints      : 2,
					container      : $( '#daylight-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'linechart',
							{
								tooltip   : { position:'fixed' , detail:'short' } ,
								container : $( '#daylight-explore-tc' )
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	} ,
	'daylight-air-temperature-example' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' , fields:['-sunImage'] },
					date           : { type:'month-day-restricted' , max:12 },
					maxPoints      : 1,
					container      : $( '#daylight-air-temperature-example-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'table',
							{
								container : $( '#daylight-air-temperature-example-tb' ) ,
								selectForOutput : 2,
								selectable: ['sunHours','tempavg'],
								displayWidgets : [
									aaasClimateViz.loadWidget(
										'linechart',
										{
											tooltip   : { position:'fixed' , detail:'short' } ,
											container : $( '#daylight-air-temperature-example-tc' )
										}
									)
								] ,
								callbacks : [ widgetScroll, elevator ]
							}
						)
					],
					callbacks : [ cbDaylightAirTempEx ],
					animate: function (evt) {
						var wInstance=aaasClimateViz.widgets[aaasClimateViz.widgetLookup['#daylight-air-temperature-example-ds']];
						//if ($( '#slider-navigation .next' ).data('currSlide') == -1) return;
						var currSlide = $( '#slider-navigation .next' ).data('currSlide')+1;
						if (currSlide == 1) widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 1995 );
						else if (currSlide == 2) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 1995 );
							widgetAnimations.swinggraph(wInstance);
						}
						else if (currSlide>=3) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 1995 );
							widgetAnimations.swinggraph(wInstance);
							//widgetAnimations.elevatetable(wInstance);
							$('#slider-navigation .next').off('click.animate');
							$('#daylight-air-temperature-example .plusslider-pagination li').off('click.animate');
						}
					}
				}
			);
		}
	},
	'daylight-air-temperature-explore' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' , fields:['-sunImage'] },
					date           : { type:'month-day' , max:12 },
					maxPoints      : 1,
					container      : $( '#daylight-air-temperature-explore-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'table',
							{
								container : $( '#daylight-air-temperature-explore-tb' ) ,
								selectForOutput : 2,
								displayWidgets : [
									aaasClimateViz.loadWidget(
										'linechart',
										{
											tooltip   : { position:'fixed' , detail:'short' } ,
											container : $( '#daylight-air-temperature-explore-tc' )
										}
									)
								] ,
								callbacks : [ widgetScroll, elevator ]
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	},
	'data-finder' : {
		is_initialized : false ,
		initialize : function ( ) {
			aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' },
					date           : { type:'month-day' , max:1 },
					maxPoints      : 2,
					container      : $( '#data-finder-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'statspanel',
							{
								container : $( '#data-finder-sp' ) ,
								callbacks : [ ]
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	},
	'variable-relationship-explorer' : {
		is_initialized : false ,
		initialize : function ( ) { 
			return aaasClimateViz.loadWidget(
				'dataSelect',
				{
					data           : { source:'location-stats' , fields:['-sunImage'] },
					date           : { type:'month-day' , max:12 },
					maxPoints      : 1,
					container      : $( '#variable-relationship-explorer-ds' ),
					displayWidgets : [
						aaasClimateViz.loadWidget(
							'table',
							{
								container : $( '#variable-relationship-explorer-tb' ) ,
								selectForOutput : 2,
								displayWidgets : [
									aaasClimateViz.loadWidget(
										'linechart',
										{
											tooltip   : { position:'fixed' , detail:'short' } ,
											container : $( '#variable-relationship-explorer-tc' )
										}
									)
								] ,
								callbacks : [ widgetScroll, elevator ]
							}
						)
					],
					callbacks : [ mapXvis, resetMap ]
				}
			);
		}
	}
};

var loadAirMovementVids = function() {
 var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	
var player1;
var player2;
function onYouTubeIframeAPIReady1() {
    player1 = new YT.Player('air-movement-yt-1', {
        height: '315',
        width: '420',
    videoId: 'VFsWU2j5bPc',
    events: {
      'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
    }
  });
}
function onYouTubeIframeAPIReady2() {
    player2 = new YT.Player('air-movement-yt-2', {
        height: '315',
        width: '420',
    videoId: 'ULJpU1id6-M',
    events: {
      'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    //event.target.playVideo();
    event.target.setPlaybackQuality("hd720");
    event.target.mute();
}
function onPlayerStateChange(event) {
	if (event.data == 0) event.target.playVideo();
}
onYouTubeIframeAPIReady1();
onYouTubeIframeAPIReady2();
}


/*function new Date(dateStr) {
		var date = new Date(dateStr);
		console.log("DATESTR",dateStr);
		console.log(date);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()); 
    }*/	
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
	console.log(evt.type);
	if ( evt.type == 'initialize' ) {
		console.log(wInstance);
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
function cbDaylightEx1 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
		setTimeout( function ( ) {
			/*google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 40.81 , -73.96 ), staticmap: true } );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date( 2004 , 0 , 0 ) );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date( 2004 , 11 , 30 ) );
 			wInstance.map.date.ui.find('.ui-state-active').click();*/
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);	
		} , 1000 );
	}
}
function cbDaylightEx2 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
		setTimeout( function ( ) {
			google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 40.81 , -73.96 ), staticmap:true } );
			google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 44.70 , -73.45 ), staticmap:true } );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date([ 2004 , 1 , 1] ) );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date( "2004-12-31T17:00:00Z" ) );
 			wInstance.map.date.ui.find('.ui-state-active').click();
			$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
		} , 1000 );
	}
}
function cbDaylightEx3 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
		setTimeout( function ( ) {
			google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 5.07 , -74.53 ), staticmap:true } );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date([ 2004 , 1 , 1 ]) );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date([ 2004 , 12 , 31 ]) );
 			wInstance.map.date.ui.find('.ui-state-active').click();
			$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
		} , 1000 );
	}
}
function cbDaylightEx4 ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
		this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
		setTimeout( function ( ) {
			google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 0.15 , -78.35 ), staticmap:true } );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date([ 2004 , 1 , 1 ]) );
			wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date([ 2004 , 12 , 31 ]) );
 			wInstance.map.date.ui.find('.ui-state-active').click();
			$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
		} , 1000 );
	}
}
function cbHeightSunAirTempEx (evt) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	//console.log(wInstance);
	if ( evt.type == 'initialize' ) {
	this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
	setTimeout( function ( ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	} , 1000 );
	}
}
function cbDaylightAirTempEx (evt) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	//console.log(wInstance);
	if ( evt.type == 'initialize' ) {
	this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
	setTimeout( function ( ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	} , 1000 );
	}
}
function cbRelationSunEnergy ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evtType[0] == 'data' && ( evtType[1] == 'load' || evtType[1] == 'ready' ) && this.settings.displayStatus == 'map' ) {
		// FIXME: add a resize method to the wInstance so that the resizing can be done there, passing just the width, height, and delay. Let the wInstance take care of the map.
		mapCenter = this.map.getCenter();
		this.settings.container
			.css( { 'border-right':'3px groove gray' , 'width':'auto' } )
			.animate(
				{ right:'63%' } ,
				1000 ,
				function ( ) {
					google.maps.event.trigger(wInstance.map, 'resize');
					wInstance.map.setCenter(mapCenter);
				}
			)
			.find( '.widget.dataSelect' ).addClass( 'width-200' );
		this.settings.displayWidgets[0].settings.container
			.show()
			.css( { 'width':'auto' } )
			.animate(
				{ left:'37%' } ,
				1000 ,
				'swing' ,
				function ( ) {
					if ( wInstance.settings.displayWidgets[0].highChart ) {
						wInstance.settings.displayWidgets[0].highChart.setSize( $( this ).width( ) , $( this ).height( ) );
					}
				}
			);
		this.settings.displayWidgets[0].settings.displayWidgets[0].settings.container
			.show()
			.css( { 'width':'auto' } )
			.animate(
				{ left:'37%' } ,
				1000 ,
				'swing' ,
				function ( ) {
					if ( wInstance.settings.displayWidgets[0].highChart ) {
						wInstance.settings.displayWidgets[0].highChart.setSize( $( this ).width( ) , $( this ).height( ) );
					}
				}
			);
		this.settings.displayStatus = 'vis';
	} else if ( evtType == 'initialize' ) {
		this.settings.displayStatus = 'map';
	}
}

function mapXvis ( evt ) {
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evtType[0] == 'data' && ( evtType[1] == 'load' || evtType[1] == 'ready' ) && this.settings.displayStatus == 'map' ) {
		// FIXME: add a resize method to the wInstance so that the resizing can be done there, passing just the width, height, and delay. Let the wInstance take care of the map.
		mapCenter = this.map.getCenter();
		this.settings.container
			.css( { 'width':'auto' } )
			.animate(
				{ right:'64%' } ,
				1000 ,
				function ( ) {
					google.maps.event.trigger(wInstance.map, 'resize');
				}
			)
			.find( '.widget.dataSelect' ).addClass( 'width-200' );
		this.settings.displayWidgets[0].settings.container
			.show()
			.animate( { left:'36%' } , 1000 , 'swing',function() {
					wInstance.map.setCenter(mapCenter);
			});
		if (typeof( this.settings.displayWidgets[0].settings.displayWidgets ) != 'undefined'  && this.settings.displayWidgets[0].settings.displayWidgets.length==1 ) {
			this.settings.displayWidgets[0].settings.displayWidgets[0].settings.container
			.show()
			.animate( { left:'36%' } , 1000 , 'swing' );
			//console.log(this.settings.displayWidgets[0].settings);
		}
		this.settings.displayStatus = 'vis';
	} else if ( evtType == 'initialize' ) {
		this.settings.displayStatus = 'map';
	}
}
/**
 * Callback for managing the location explorer instructions state
 **/
function locExInstruct ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	var instrSlider = this.settings.container.parents( '.child' ).find( '.instructions .slider' )[0].sliderObj;
	if ( evtType[0] == 'user' && [ 'select' , 'remove' ].indexOf( evtType[1] ) !== -1 ) {
		var instrSlider = this.settings.container.parents( '.child' ).find( '.instructions .slider' )[0].sliderObj;
		var hasMarker = ( ( markerKeys = Object.keys( this.markers ) ).length > 0 ? true : false );
		var hasDate = ( !this.map.date || !this.map.date.data( 'value' ) ? false : true );
		if ( !hasDate ) {
			instrSlider.toSlide( 0 );
		} else if ( hasDate && !hasMarker ) {
			instrSlider.toSlide( 1 );
		}
	} else if ( evtType[0] == 'data' && evtType[1] == 'ready' && instrSlider.currentSlideIndex < 2 ) {
		instrSlider.toSlide( 2 );
		// FIXME: should we disable this callback here (?); we don't need to go back to the previous slides at this point
	} else if ( evtType[0] == 'initialize' ) {
		instrSlider.options.afterSlide = function ( psobj ) {
			if ( psobj.currentSlideIndex == 4 ) {
				wInstance.settings.maxPoints = 2;
			}
		}
	}
}

function cbDailyTempEx ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
	this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
	setTimeout( function ( ) {
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 38.8935965, -77.014576 ), staticmap: true } );
		wInstance.map.date.data('value',[[new Date( "2001-01-01T17:00:00Z" ),new Date("2002-01-01T17:00:00Z")]]);
 		wInstance.map.date.ui.find('.ui-state-active').click();
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	} , 1000 );
	}
}
function cbHeightSunEx ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
	this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
	setTimeout( function ( ) {
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 40.71, -74.01 ), staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date( "2004-01-01T17:00:00Z" ) );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date( "2004-12-31T17:00:00Z") );
 		wInstance.map.date.ui.find('.ui-state-active').click();
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	} , 1000 );
	}
}
function cbDailyTempOld ( evt ) {
	return;
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	var instrSlider = this.settings.container.parents( '.child' ).find( '.instructions .slider' )[0].sliderObj;
	if ( evtType[0] == 'user' && [ 'select' , 'remove' ].indexOf( evtType[1] ) !== -1 ) {
		var instrSlider = this.settings.container.parents( '.child' ).find( '.instructions .slider' )[0].sliderObj;
		var hasMarker = ( ( markerKeys = Object.keys( this.markers ) ).length > 0 ? true : false );
		var hasDate = ( !this.map.date || !this.map.date.data( 'value' ) ? false : true );
		if ( !hasMarker ) {
			instrSlider.toSlide( 0 );
		} else if ( hasMarker && !hasDate ) {
			instrSlider.toSlide( 1 );
		}
	} else if ( evtType[0] == 'data' && evtType[1] == 'ready' && instrSlider.currentSlideIndex < 2 ) {
		instrSlider.toSlide( 2 );
		// FIXME: should we disable this callback here, we don't need to go back to the previous slides at this point?
	} else if ( evtType[0] == 'initialize' ) {
		instrSlider.options.currentTimeout = 0;
		instrSlider.options.afterSlide = function ( psobj ) {
			if ( [6,7].indexOf( psobj.currentSlideIndex ) !== -1 ) {
				if ( psobj.options.currentTimeout == 0 ) {
					psobj.options.currentTimeout = setTimeout(
						function ( ) {
							psobj.options.rectHL = wInstance.settings.displayWidgets[0].highChart.renderer.rect(65, 135, 10, 10, 1).attr( { fill:'lightblue' , zIndex:3 , opacity:.4 } ).add( );
							psobj.options.rectHL.animate( { width:165 , height:165 } , { duration:2000 } );
						} ,
						2500
					);
				}
			} else if ( psobj.options.currentTimeout != 0 ) {
				clearTimeout( psobj.options.currentTimeout );
				psobj.options.currentTimeout = 0;
				if ( typeof( psobj.options.rectHL ) == 'object' ) {
					psobj.options.rectHL.destroy();
				}
			}
			if ( [8,9,10].indexOf( psobj.currentSlideIndex ) !== -1 ) {
				wInstance.settings.displayWidgets[0].highChart.yAxis[0].setExtremes( 20 , 80 );
			} else {
				wInstance.settings.displayWidgets[0].highChart.xAxis[0].setExtremes();
				wInstance.settings.displayWidgets[0].highChart.yAxis[0].setExtremes();
			}
		}
	} else {
		//if ( instrSlider.currentSlideIndex == 2 ) {
		//	instrSlider.toSlide( 3 );
		//} else if ( instrSlider.currentSlideIndex == 3 ) {
		//	this.settings.maxPoints = 2;
		//	instrSlider.toSlide( 4 );
		//} else if ( !instrSlider.currentSlideIndex == 4 ) {
		//	this.settings.maxPoints = 2;
		//	instrSlider.toSlide( 4 );
		//}
	}
}


function cbTempLatNorthern ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	//console.log(wInstance);
	if ( evt.type == 'initialize' ) {
	$.when(wInstance.settings.instantiate_promise && wInstance.settings.displayWidgets[0].instantiate_promise ).done($( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate));
	}
}

function cbTempLatSouthern ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
	$.when(wInstance.settings.instantiate_promise && wInstance.settings.displayWidgets[0].instantiate_promise ).done(function() {
	//setTimeout( function ( ) {
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( -17.800000,-63.166670 ), staticmap: true } );
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( -31.398930,-64.182129 ), staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date([ 2004 , 1 , 1] ) );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date( "2004-12-31T17:00:00Z" ) );
 		wInstance.map.date.ui.find('.ui-state-active').click();
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
	//} , 1000 );
	});
	}
}	

function cbElevExample ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
	this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
	setTimeout( function ( ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
		////console.log(wInstance.map.widget);
		/*google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 27.71,85.33 ), stationNames: ["TINGRI", "GORAKHPUR"], staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date( 2004 , 0 , 0 ) );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date( 2004 , 11 , 30 ) );
 		wInstance.map.date.ui.find('.ui-state-active').click();
//		setTimeout( function () {
//		google.maps.event.clearListeners(wInstance.map, 'click');
//		wInstance.map.setOptions({draggable: false, disableDoubleClickZoom: true}); }, 2000 );*/
	} , 1000 );
	}
}	
function cbLargeBodiesWaterExample ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	if ( evt.type == 'initialize' ) {
	this.settings.container.find( '.widget.dataSelect' ).addClass( 'width-200' );
	setTimeout( function ( ) {
		$( '#slider-navigation .next' ).on('click.animate',wInstance.settings.animate);
/*////console.log(wInstance.map.widget);
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng( 69.38,20.71 ), stationNames: ["TROMSO", "KAUTOKEINO"], staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' ,  new Date( 2004 , 0 , 0 ) );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' ,  new Date( 2004 , 11 , 30 ) );
 		wInstance.map.date.ui.find('.ui-state-active').click();*/
	} , 1000 );
	}
}	

function cbTempLatitude ( evt ) {
	// Since we rely on the evt object it needs to be instantiated if it does not exist
	var markerKeys;
	if ( !evt ) { evt = { type : null }; }
	var evtType = evt.type.split( '-' );
	var wInstance = this;
	var instrSlider = this.settings.container.parents( '.child' ).find( '.instructions .slider' )[0].sliderObj;
	var hasMarker = ( ( markerKeys = Object.keys( this.markers ) ).length > 0 ? true : false );
	var hasDate = ( !this.map.date || !this.map.date.data( 'value' ) ? false : true );
	if ( evtType[0] == 'user' && [ 'select' , 'remove' ].indexOf( evtType[1] ) !== -1 ) {
		if ( !hasMarker ) {
			instrSlider.toSlide( 1 );
		} else if ( hasMarker && !hasDate ) {
			instrSlider.toSlide( 2 );
		}
	} else if ( evtType[0] == 'data' && evtType[1] == 'ready' && instrSlider.currentSlideIndex < 3 ) {
		instrSlider.toSlide( 3 );
		// FIXME: should we disable this callback here, we don't need to go back to the previous slides at this point?
	} else {
		//if ( instrSlider.currentSlideIndex == 2 ) {
		//	instrSlider.toSlide( 3 );
		//} else if ( instrSlider.currentSlideIndex == 3 ) {
		//	this.settings.maxPoints = 2;
		//	instrSlider.toSlide( 4 );
		//} else if ( !instrSlider.currentSlideIndex == 4 ) {
		//	this.settings.maxPoints = 2;
		//	instrSlider.toSlide( 4 );
		//}
	}
	if ( typeof(markerKeys) !== 'undefined' && markerKeys.length == 2) {
		var colorText = [];
		for (colorKey in _colors.colors ) {
			if ( _colors.colors[colorKey] == this.markers[ markerKeys[0] ].color ) {
				colorText.push( _colors.legend[colorKey] );
			}
			if ( _colors.colors[colorKey] == this.markers[ markerKeys[1] ].color ) {
				colorText.push( _colors.legend[colorKey] );
			}
		}
		if ( this.markers[ markerKeys[0] ].userCoords.lat( ) > this.markers[ markerKeys[1] ].userCoords.lat( ) ) {
			this.settings.container.parents( '.child' ).find( '.instructions .lat-high' ).html( colorText[0] );
			this.settings.container.parents( '.child' ).find( '.instructions .lat-low' ).html( colorText[1] );
		} else {
			this.settings.container.parents( '.child' ).find( '.instructions .lat-high' ).html( colorText[1] );
			this.settings.container.parents( '.child' ).find( '.instructions .lat-low' ).html( colorText[0] );
		}
	} else {
		this.settings.container.parents( '.child' ).find( '.instructions .lat-high' ).html( 'higher' );
		this.settings.container.parents( '.child' ).find( '.instructions .lat-low' ).html( 'lower' );
	}
}
var widgetAnimations = {
	placemarkers: function(wInstance,marker1,marker2,date1,date2) {
		if (wInstance.settings.container.hasClass('clicked')) return;
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker1[0],marker1[1]), staticmap: true } );
		if (marker2 != null) google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker2[0],marker2[1]), staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' , new Date(date1));
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' , new Date(date2 ));
		wInstance.map.date.ui.find('.ui-state-active').click();
		wInstance.settings.container.addClass('clicked');
		},
	placetablemarker: function(wInstance,marker,year) {
		if (wInstance.settings.container.hasClass('clicked')) return;
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker[0],marker[1]), staticmap: true } );
		var dateVals=[];
		wInstance.map.date.data('hidden',false);
		for (i=1; i<13; i++) dateVals.push(new Date( year.toString()+"-"+"00".substring(0, 2-i.toString().length)+i.toString()+"-15T17:00:00Z" ));
		wInstance.map.date.data( 'value', dateVals);
 		wInstance.map.date.ui.find('.ui-state-active').click();
		wInstance.settings.container.addClass('clicked');
		},
	placestations: function(wInstance,marker1,stations,date1,date2) {
		if (wInstance.settings.container.hasClass('clicked')) return;
		google.maps.event.trigger( wInstance.map , 'click' , { latLng : new google.maps.LatLng(marker1[0],marker1[1]), stationNames: stations, staticmap: true } );
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-start input' } ).datepicker( 'setDate' , new Date(date1));
		wInstance.map.date.find('.datepicker' ).datepicker('option' , { altField : '.date-end input' } ).datepicker( 'setDate' , new Date(date2 ));
		wInstance.map.date.ui.find('.ui-state-active').click();
		wInstance.settings.container.addClass('clicked');
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
					wInstance.map.setCenter(mapCenter);
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
									var DailyDateStart = new Date("2000-04-01T17:00:00Z" );
									var DailyDateEnd = new Date( "2000-04-25T17:00:00Z" );
									console.log(DailyDateStart,DailyDateEnd);
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
			slideInit['daily-temperature-example'].is_initialized=true;
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
					callbacks : [ mapXvis ]
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
						if (currSlide == 1) widgetAnimations.placemarkers(wInstance, [49.886083,-97.152921], [ 29.461029,-98.697739 ], [2004, 1 , 1], "2004-12-31T17:00:00Z" );
						else if (currSlide >= 2) {
							widgetAnimations.placemarkers(wInstance, [49.886083,-97.152921], [ 29.461029,-98.697739 ], "2004-01-01T17:00:00Z", "2004-12-31T17:00:00Z" );
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
					callbacks : [ /*cbTempLatitude*/ , mapXvis ]
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
						if (currSlide == 1) widgetAnimations.placestations(wInstance, [ 27.71,85.33 ], ["TINGRI", "GORAKHPUR"], "2004-01-01T17:00:00Z", "2004-12-31T17:00:00Z" );
						else if (currSlide >= 6) {
							widgetAnimations.placestations(wInstance, [ 27.71,85.33 ], ["TINGRI", "GORAKHPUR"], "2004-01-01T17:00:00Z", "2004-12-31T17:00:00Z" );
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
					callbacks : [ mapXvis ]
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
						if (currSlide == 1) widgetAnimations.placestations(wInstance, [ 69.38,20.71 ], ["TROMSO", "KAUTOKEINO"], "2004-01-01T17:00:00Z", "2004-12-31T17:00:00Z" );
						else if (currSlide >= 4) {
						 	widgetAnimations.placestations(wInstance, [ 69.38,20.71 ], ["TROMSO", "KAUTOKEINO"], "2004-01-01T17:00:00Z", "2004-12-31T17:00:00Z" );
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
					callbacks : [ mapXvis ]
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
					callbacks : [ mapXvis ]
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
					date           : { type:'year-month-day-restricted' , max:12 },
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
						if (currSlide == 1) widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 2000 );
						else if (currSlide == 2) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 2000 );
							widgetAnimations.swinggraph(wInstance);
						}
						else if (currSlide>=3) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 2000 );
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
					date           : { type:'year-month-day' , max:12 },
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
					callbacks : [ mapXvis, ]
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
						if (currSlide == 1) widgetAnimations.placemarkers(wInstance, [40.81 , -73.96], null, [2003 , 1 , 1], [2005 , 1 , 1 ] );
						else if (currSlide >= 2) {
							widgetAnimations.placemarkers(wInstance, [40.81 , -73.96 ], null, [2003 , 1 , 1], [2005 , 1, 1 ] );
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
					callbacks : [ mapXvis ]
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
					date           : { type:'year-month-day-restricted' , max:12 },
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
						if (currSlide == 1) widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 2000 );
						else if (currSlide == 2) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 2000 );
							widgetAnimations.swinggraph(wInstance);
						}
						else if (currSlide>=3) {
							widgetAnimations.placetablemarker(wInstance,[ 41.87 , -87.61 ], 2000 );
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
					date           : { type:'year-month-day' , max:12 },
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
					callbacks : [ mapXvis ]
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
					date           : { type:'year-month-day' , max:12 },
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
					callbacks : [ mapXvis ]
				}
			);
		}
	}
};

var loadAirMovementVids = function() {
 /*var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
*/
	
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


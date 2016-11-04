//Route-It

angular.module('JUTC.controllers', [])

.controller('jutcCtrl', function($scope, $rootScope) {
  $scope.locations = [
    /* ------------------------------------*/
    { name: 'Greater Portmore',
      id: 1,
      routes: [
        {
          busNum: '6',
          locationTo: 'Spanish Town',
          via: 'Naggo Head, Passagefort Drive, Gregory Park, Mandela Highway',
          price: "100"
        },
        {
          busNum: '16',
          locationTo: 'Cross Roads',
          via: 'Braeton Parkway, Portmore Toll Road, Marcus Garvey Dr., City',
          price: "100"
        },
        {
          busNum: '16A',
          locationTo: 'Cross Roads',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '16B',
          locationTo: 'Constant Spring',
          via: 'Hellshire Main Road, Mandela Highway, Dunrobin',
          price: "100"
        },
        {
          busNum: '17',
          locationTo: 'City',
          via: 'Hellshire Main Road, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '17A',
          locationTo: 'Half Way Tree',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '18',
          locationTo: 'City',
          via: 'Braeton Road, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '18A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Road, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '20',
          locationTo: 'City',
          via: 'Braeton Parkway, Portmore Toll Road, Marcus Garvey Dr.',
          price: "100"
        },
        {
          busNum: '20A',
          locationTo: 'Half Way Tree',
          via: 'Braeton Parkway, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '16Bx',
          locationTo: 'Constant Spring',
          via: 'Hellshire Main Road, Mandela Highway, Dunrobin',
          price: "160"
        },
        {
          busNum: '17Ax',
          locationTo: 'New Kingston',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road, Half Way Tree',
          price: "160"
        },
        {
          busNum: '17Ex',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Portmore Toll Road, Marcus Garvey Drive',
          price: "180"
        },
        {
          busNum: '19Ax',
          locationTo: 'Papine',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road, Hope Road',
          price: "180"
        },
        {
          busNum: '20Ax',
          locationTo: 'New Kingston',
          via: 'Braeton Parkway, Portmore Toll Road, Hagley Park Road',
          price: "160"
        },
        {
          busNum: '101',
          locationTo: 'Constant Spring',
          via: 'Braeton Road, Mandela Highway, Molynes Road',
          price: "100"
        },
        {
          busNum: '316',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Mandela Highway, New Kingston',
          price: "200"
        },
        {
          busNum: '317',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Portmore Toll Road, Marcus Garvey Drive, City',
          price: "200"
        },
        {
          busNum: '318',
          locationTo: 'Cross Roads',
          via: 'Braeton Parkway, Half Way Tree, New Kingston',
          price: "200"
        },
        {
          busNum: '319',
          locationTo: 'Papine',
          via: 'Hellshire Main Road, Portmore Toll Road, Hagley Park Road, Hope Road',
          price: "220"
        },
        {
          busNum: '320',
          locationTo: 'Cross Roads',
          via: 'Braeton Parkway, Portmore Toll Road, Half Way Tree Road',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Spanish Town',
      id: 2,
      routes: [
        {
          busNum: '103',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "100"
        },
        {
          busNum: '21',
          locationTo: 'Half Way Tree',
          via: 'Washington Boulevard, Molynes Road',
          price: "100"
        },
        {
          busNum: '22',
          locationTo: 'City',
          via: 'Spanish Town Road',
          price: "100"
        },
        {
          busNum: '22A',
          locationTo: 'City',
          via: 'Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '23A',
          locationTo: 'Half Way Tree',
          via: 'Washington Blvd., Dunrobin Avenue',
          price: "100"
        },
        {
          busNum: '21Ax',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, New Kingston',
          price: "160"
        },
        {
          busNum: '21Ex',
          locationTo: 'Cross Roads',
          via: 'Washington Boulevard, Molynes Road, Half Way Tree Road',
          price: "160"
        },
        {
          busNum: '22Ax',
          locationTo: 'City',
          via: 'Marcus Garvey Drive',
          price: "160"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Half Way Tree',
      id: 3,
      routes: [
        {
          busNum: '500',
          locationTo: 'City',
          via: 'Cross Roads, Slipe Road',
          price: "100"
        },
        {
          busNum: '800',
          locationTo: 'Cross Roads',
          via: 'New Kingston',
          price: "100"
        },
        {
          busNum: '83',
          locationTo: 'City',
          via: 'Mountain View Avenue',
          price: "100"
        },
        {
          busNum: '83Ex',
          locationTo: 'City',
          via: 'Mountain View Avenue',
          price: "130"
        },
        {
          busNum: '600',
          locationTo: 'City',
          via: 'Cross Roads, Heroes Circle, East Street',
          price: "100"
        },
        {
          busNum: '700',
          locationTo: 'City',
          via: 'Lyndhurst Road, Slipe Pen Road',
          price: "100"
        },
        {
          busNum: '900',
          locationTo: 'Papine',
          via: 'Hope Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'City',
      id: 4,
      routes: [
        {
          busNum: '315',
          locationTo: 'Greater Portmore',
          via: 'Marcus Garvey Drive, Portmore Toll Road, Braeton Parkway',
          price: "200"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Cross Roads',
      id: 5,
      routes: [
        {
          busNum: '86',
          locationTo: 'City',
          via: 'South Camp Road, East Street, Port Royal Street',
          price: "100"
        },
        {
          busNum: '88',
          locationTo: 'City',
          via: 'Mountain View Avenue, Deanery Road, East Street',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Harbour View',
      id: 6,
      routes: [
        {
          busNum: '295',
          locationTo: 'Half Way Tree',
          via: 'Mountain View Avenue, New Kingston',
          price: "200"
        },
        {
          busNum: '99',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "100"
        },
        {
          busNum: '99Ex',
          locationTo: 'Harbour View',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Bull Bay',
      id: 7,
      routes: [
        {
          busNum: '97',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "100"
        },
        {
          busNum: '97Ex',
          locationTo: 'City',
          via: 'Sir Florizel Glaspole Highway, Windward Road',
          price: "130"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Norbrook',
      id: 8,
      routes: [
        {
          busNum: '49',
          locationTo: 'Half Way Tree',
          via: 'Shortwood Road',
          price: "100"
        }
      ]
    },
    /* ------------------------------------*/
    { name: 'Hellshire',
      id: 9,
      routes: [
        {
          busNum: '1',
          locationTo: 'City',
          via: 'Naggo Head, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '1A',
          locationTo: 'Half Way Tree',
          via: 'Naggo Head, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '301',
          locationTo: 'Cross Roads',
          via: 'Hellshire Main Road, Portmore Toll Road, New Kingston',
          price: "200"
        }
      ]
    },
    { name: 'Christian Gardens',
      id: 10,
      routes: [
        {
          busNum: '3',
          locationTo: 'City',
          via: 'Passagefort Drive, Portmore Toll Road, Marcus Garvey Drive',
          price: "100"
        },
        {
          busNum: '3A',
          locationTo: 'Half Way Tree',
          via: 'Passagefort Drive, Portmore Toll Road, Hagley Park Road',
          price: "100"
        },
        {
          busNum: '4',
          locationTo: 'Cross Roads',
          via: 'Passagefort Drive, Portmore Toll Road, Marcus Garvey Dr., City',
          price: "100"
        },
        {
          busNum: '3Ax',
          locationTo: 'New Kingston',
          via: 'Passagefort Drive, Portmore Toll Road, Hagley Park Road, Half Way Tree',
          price: "160"
        },
        {
          busNum: '303',
          locationTo: 'Papine',
          via: 'Waterford, Portmore Toll Road, Hope Road',
          price: "200"
        }
      ]
    }
  ];

  $scope.getData = function(val){
    $rootScope.selectedData = val; 
  }
})
